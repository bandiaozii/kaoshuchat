<?php

namespace app\api\controller;

use think\facade\Db;
class Jiyika 
{
    public function checkLogin()
    {
        // 允许的来源
        header('Access-Control-Allow-Origin: https://huli.kaoshu.cc');
        // 允许的请求头
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        return successJson();
    }

    public function getList()
    {
        // 允许的来源
        header('Access-Control-Allow-Origin: https://huli.kaoshu.cc');
        // 允许的请求头
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

        $users = Db::name('tiku')->select();
        return successJson([
            'list' => $users
        ]);
    }
    public function wanchengzhangjie()
    {
        //self::$user['id']
        $data['user_id']=$_SESSION['user']['id'];
        $data['bianhao']=$_GET['zhangjie'];
        $data['wancheng_time']=time();
        try{
        Db::name('zhangjiewancheng')
                ->insert($data);
            return successJson('', '提交成功，谢谢！');
} catch (\Exception $e) {
            return errorJson('提交失败：' . $e->getMessage());
        }
    }
}

