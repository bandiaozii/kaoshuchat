<?php

namespace app\super\controller;

use think\facade\Db;

class Upgrade
{
    /**
     * 获取更新版本列表
     */
    public function getList()
    {
       
    }

    /**
     * 执行升级
     */
    public function doUpgrade()
    {
        $version = input('version', '', 'trim');
        $token = input('token', '', 'trim');

        $Upgrade = new \FoxUpgrade\upgrade();
        $result = $Upgrade->doUpgrade(['token' => $token, 'version' => $version]);
        if (empty($result)) {
            return errorJson('升级失败，请确保你的域名可正常访问');
        } else {
            if (isset($result['errno']) && $result['errno'] > 0) {
                return errorJson('升级失败：' . $result['message']);
            } else {
                // 更新数据库里的版本号
                Db::name('setting')
                    ->where('id', 1)
                    ->update([
                        'version' => $version
                    ]);
                return successJson('', '升级成功');
            }
        }
    }

    /**
     * 获取历史版本列表
     */
    public function getHistory()
    {
      
    }

    public function checkUpgrade()
    {
        $code = input('code', '', 'trim');
        $version = input('version', '', 'trim');
        $auth = getSystemSetting(0, 'auth');
        if (empty($auth['code']) || md5($auth['code']) == md5($code)) {
            $Upgrade = new \FoxUpgrade\upgrade();
            $Upgrade->checkUpdate(base64_decode($version));
        }
    }
}
