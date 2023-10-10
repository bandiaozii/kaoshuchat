(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e6b48c"],{"02e9":function(e,t,a){},"1bdb2":function(e,t,a){"use strict";a("a920")},2517:function(e,t,a){"use strict";a("02e9")},7424:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":e.switchTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"系统配置",name:"system"}},[e.form?a("el-form",{ref:"systemForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"系统名称",prop:"system_title"}},[a("el-input",{attrs:{placeholder:"系统标题",size:"small"},model:{value:e.form["system_title"],callback:function(t){e.$set(e.form,"system_title",t)},expression:"form['system_title']"}})],1),a("el-form-item",{attrs:{label:"后台logo",prop:"system_logo"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:e.form["system_logo"],callback:function(t){e.$set(e.form,"system_logo",t)},expression:"form['system_logo']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"system_logo"},"http-request":e.uploadImage,"show-file-list":!1,multiple:!1}},[e.form["system_logo"]?a("img",{staticClass:"avatar",staticStyle:{height:"50px",width:"auto"},attrs:{src:e.form["system_logo"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"210px",height:"50px","line-height":"50px"}})]),a("span",[e._v("210x50像素")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"AI参数配置",name:"chatgpt"}},[a("el-alert",{staticStyle:{width:"800px","margin-top":"20px"},attrs:{type:"warning",title:"Key统一在key池配置"}}),e.form?a("el-form",{ref:"chatgptForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"AI接口",prop:"channel"}},[a("el-radio-group",{model:{value:e.form["channel"],callback:function(t){e.$set(e.form,"channel",t)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[e._v("openai")]),a("el-radio",{attrs:{label:"api2d",size:"mini"}},[e._v("api2d")]),a("el-radio",{attrs:{label:"lxai",size:"mini"}},[e._v("灵犀AI")]),a("el-radio",{attrs:{label:"baidu",size:"mini"}},[e._v("百度文心一言")]),a("el-radio",{attrs:{label:"xunfei",size:"mini",disabled:"",title:"静待开放"}},[e._v("讯飞星火")]),a("el-radio",{attrs:{label:"aliyun",size:"mini",disabled:"",title:"静待开放"}},[e._v("阿里通义千问")])],1),"openai"===e.form["channel"]?a("p",[e._v("需自备GPT账号，请根据您当地的法规使用，禁止非法运营")]):e._e(),"api2d"===e.form["channel"]?a("p",[e._v("这是一个提供openai接口的第三方平台，"),a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/api2d",target:"_blank"}},[e._v("注册地址")])]):e._e(),"lxai"===e.form["channel"]?a("p",[e._v("这是一家国内的AI接口，与openai计费规则一样，"),a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/lxai",target:"_blank"}},[e._v("key下单地址")])]):e._e(),"baidu"===e.form["channel"]?a("p",[e._v("内测阶段，"),a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/baidu",target:"_blank"}},[e._v("直达链接")])]):e._e()],1),"baidu"===e.form["channel"]?a("div",[a("el-form-item",{attrs:{label:"温度(temperature)",prop:"temperature"}},[a("el-input",{attrs:{placeholder:"0-1，默认0.9",size:"small"},model:{value:e.form["temperature"],callback:function(t){e.$set(e.form,"temperature",t)},expression:"form['temperature']"}}),a("p",[e._v("取值0-1之间，默认0.9。较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。")])],1),a("el-form-item",{attrs:{label:"模型(model)",prop:"model"}},[a("el-radio",{attrs:{checked:""}},[e._v("ERNIE-Bot")])],1)],1):a("div",[a("el-form-item",{attrs:{label:"温度(temperature)",prop:"temperature"}},[a("el-input",{attrs:{placeholder:"0-1，默认0.9",size:"small"},model:{value:e.form["temperature"],callback:function(t){e.$set(e.form,"temperature",t)},expression:"form['temperature']"}}),a("p",[e._v("取值0-1之间，默认0.9。较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。")])],1),a("el-form-item",{attrs:{label:"最大长度(max_tokens)",prop:"max_tokens"}},[a("el-input",{attrs:{placeholder:"默认1500",size:"small"},model:{value:e.form["max_tokens"],callback:function(t){e.$set(e.form,"max_tokens",t)},expression:"form['max_tokens']"}}),a("p",[e._v("每次回答的最大字符长度，如果设置过小，回答中间可能被切断，如果设置过大，则可能消耗更多的成本")]),a("p",[e._v("4K模型：最大3500，建议2000以内")]),a("p",[e._v("16K模型：最大15000，建议8000以内")])],1),a("el-form-item",{attrs:{label:"模型(model)",prop:"model"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["model"],callback:function(t){e.$set(e.form,"model",t)},expression:"form['model']"}},e._l(e.engines,(function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name}},[e._v(e._s(t.name)+" ")])})),1),a("p",[e._v("默认：gpt-3.5-turbo ，"),a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/model",target:"_blank"}},[e._v("查看各模型区别")])])],1)],1),a("el-form-item",{attrs:{label:"新用户免费送",prop:"free_num"}},[a("p",{staticStyle:{padding:"5px 0"}},[e._v(" 对话次数 "),a("el-input",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.form["free_num"],callback:function(t){e.$set(e.form,"free_num",t)},expression:"form['free_num']"}}),e._v(" 条 ")],1),a("p",{staticStyle:{padding:"5px 0"}},[e._v(" 绘画次数 "),a("el-input",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.form["free_num_draw"],callback:function(t){e.$set(e.form,"free_num_draw",t)},expression:"form['free_num_draw']"}}),e._v(" 张 ")],1),a("p",{staticStyle:{padding:"5px 0"}},[e._v(" GPT4字数 "),a("el-input",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.form["free_num_gpt4"],callback:function(t){e.$set(e.form,"free_num_gpt4",t)},expression:"form['free_num_gpt4']"}}),e._v(" 万字 ")],1)]),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"GPT4配置",name:"gpt4"}},[a("el-alert",{staticStyle:{width:"800px","margin-top":"20px"},attrs:{type:"warning",title:"Key统一在key池配置"}}),e.form?a("el-form",{ref:"gpt4Form",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"GPT4开关",prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["is_open"],callback:function(t){e.$set(e.form,"is_open",t)},expression:"form['is_open']"}})],1),a("el-form-item",{attrs:{label:"GPT4接口",prop:"channel"}},[a("el-radio-group",{model:{value:e.form["channel"],callback:function(t){e.$set(e.form,"channel",t)},expression:"form['channel']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"openai",size:"mini"}},[e._v("openai")]),a("el-radio",{attrs:{label:"api2d",size:"mini"}},[e._v("api2d")])],1),"openai"===e.form["channel"]?a("p",[e._v("需自备支持GPT4接口的账号，请根据您当地的法规使用，禁止非法运营")]):e._e(),"api2d"===e.form["channel"]?a("p",[e._v("这是一个提供openai接口的第三方平台，"),a("a",{staticClass:"text-primary",attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/api2d",target:"_blank"}},[e._v("注册地址")])]):e._e()],1),a("el-form-item",{attrs:{label:"温度(temperature)",prop:"temperature"}},[a("el-input",{attrs:{placeholder:"0-1，默认0.9",size:"small"},model:{value:e.form["temperature"],callback:function(t){e.$set(e.form,"temperature",t)},expression:"form['temperature']"}}),a("p",[e._v("取值0-1之间，默认0.9。较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。")])],1),a("el-form-item",{attrs:{label:"最大长度(max_tokens)",prop:"max_tokens"}},[a("el-input",{attrs:{placeholder:"默认3000",size:"small"},model:{value:e.form["max_tokens"],callback:function(t){e.$set(e.form,"max_tokens",t)},expression:"form['max_tokens']"}}),a("p",[e._v("每次回答的最大字符长度，最大8000")])],1),a("el-form-item",{attrs:{label:"模型(model)",prop:"model"}},[a("el-select",{attrs:{size:"small"},model:{value:e.form["model"],callback:function(t){e.$set(e.form,"model",t)},expression:"form['model']"}},e._l(e.engines,(function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name}},[e._v(e._s(t.name)+" ")])})),1),a("p",[e._v("默认：gpt-4")]),a("p",[a("a",{attrs:{href:"https://console.ttk.ink/api.php/link/ai/name/model"}},[e._v("各模型区别")])])],1),a("el-form-item",{attrs:{label:"GPT4别名"}},[a("p",{staticStyle:{padding:"5px 0"}},[e._v(" 小程序端 "),a("el-input",{staticStyle:{width:"100px","margin-left":"5px"},attrs:{size:"small"},model:{value:e.form["alias_wxapp"],callback:function(t){e.$set(e.form,"alias_wxapp",t)},expression:"form['alias_wxapp']"}})],1),a("p",{staticStyle:{padding:"5px 0"}},[e._v(" web端 "),a("el-input",{staticStyle:{width:"100px","margin-left":"5px"},attrs:{size:"small"},model:{value:e.form["alias_web"],callback:function(t){e.$set(e.form,"alias_web",t)},expression:"form['alias_web']"}})],1),a("p",{staticStyle:{"margin-top":"10px",color:"#999"}},[e._v("留空默认显示GPT4")])]),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"支付配置",name:"pay"}},[e.form?a("el-form",{ref:"payForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商户号",prop:"mch_id"}},[a("el-input",{attrs:{placeholder:"微信商户号",size:"small"},model:{value:e.form["mch_id"],callback:function(t){e.$set(e.form,"mch_id",t)},expression:"form['mch_id']"}})],1),a("el-form-item",{attrs:{label:"Api_v2密钥",prop:"key"}},[a("el-input",{attrs:{placeholder:"微信商户号v2密钥",size:"small"},model:{value:e.form["key"],callback:function(t){e.$set(e.form,"key",t)},expression:"form['key']"}})],1),a("el-form-item",{attrs:{label:"cert证书"}},[a("el-upload",{attrs:{action:"",data:{type:"cert"},"before-upload":e.uploadPemCheck,"http-request":e.uploadPem,"show-file-list":!1,multiple:!1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1),e.form.apiclient_cert?a("span",{staticClass:"upload_status"},[e._v("已上传")]):e._e()],1),a("el-form-item",{attrs:{label:"key证书"}},[a("el-upload",{attrs:{action:"",data:{type:"key"},"before-upload":e.uploadPemCheck,"http-request":e.uploadPem,"show-file-list":!1,multiple:!1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1),e.form.apiclient_key?a("span",{staticClass:"upload_status"},[e._v("已上传")]):e._e()],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1),a("el-tab-pane",{attrs:{label:"流量主广告配置",name:"ad"}},[e.form?a("el-form",{ref:"adForm",staticStyle:{padding:"30px 0"},attrs:{model:e.form,rules:e.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"首页插屏广告",prop:"inter_is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["inter_is_open"],callback:function(t){e.$set(e.form,"inter_is_open",t)},expression:"form['inter_is_open']"}})],1),a("el-form-item",{attrs:{label:"插屏广告位ID",prop:"inter_unit_id"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form["inter_unit_id"],callback:function(t){e.$set(e.form,"inter_unit_id",t)},expression:"form['inter_unit_id']"}}),a("p",{staticStyle:{color:"#666",margin:"0"}},[e._v("首页插屏广告的广告位ID，每隔6小时显示一次")])],1),a("el-form-item",{attrs:{label:"首页底部banner广告",prop:"banner_is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form["banner_is_open"],callback:function(t){e.$set(e.form,"banner_is_open",t)},expression:"form['banner_is_open']"}})],1),a("el-form-item",{attrs:{label:"banner广告位ID",prop:"banner_unit_id"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form["banner_unit_id"],callback:function(t){e.$set(e.form,"banner_unit_id",t)},expression:"form['banner_unit_id']"}}),a("p",{staticStyle:{color:"#666",margin:"0"}},[e._v("首页底部banner广告的广告位ID")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:e.doSubmit}},[e._v("保 存")])],1)],1):e._e()],1)],1)],1)},r=[],i=(a("7b4c"),a("5f17"),a("90e7")),s=a("91b6"),o={data:function(){return{tabName:"system",form:null,engines:[],balance:null,lxaiBalance:null,formRules:{channel:[{required:!0,message:"此项必填",trigger:"blur"}],is_open:[{required:!0,message:"此项必填",trigger:"blur"}],mch_id:[{required:!0,message:"此项必填",trigger:"blur"}],key:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var e=this;Object(i["d"])({name:this.tabName}).then((function(t){e.form=t.data}))},getEngines:function(e){var t=this;Object(i["b"])({type:e}).then((function(e){t.engines=e.data}))},switchTab:function(){this.getSetting(),"chatgpt"===this.tabName?this.getEngines("GPT3.5"):"gpt4"===this.tabName&&this.getEngines("GPT4")},doSubmit:function(){var e=this,t=null;"system"===this.tabName?t=this.$refs.systemForm:"pay"===this.tabName?t=this.$refs.payForm:"chatgpt"===this.tabName?t=this.$refs.chatgptForm:"gpt4"===this.tabName?t=this.$refs.gpt4Form:"ad"===this.tabName?t=this.$refs.adForm:"about"===this.tabName?t=this.$refs.aboutForm:"kefu"===this.tabName&&(t=this.$refs.kefuForm),t&&t.validate((function(t){t?Object(i["e"])({name:e.tabName,data:JSON.stringify(e.form)}).then((function(t){e.getSetting(),e.$message({message:t.message,type:"success",duration:1500})})):e.$message({message:"请填写必填项",type:"error",duration:1500})}))},uploadImage:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(s["a"])(a).then((function(a){t.$set(t.form,e.data.type,a.data.path),t.$message.success("上传成功")}))},uploadPemCheck:function(e){if("pem"!==e.name.substr(-3))return this.$message({showClose:!0,message:"请上传后缀为.pem的证书文件",type:"warning"}),!1},uploadPem:function(e){var t=this,a=new FormData;a.append("file",e.file),e.data&&a.append("data",JSON.stringify(e.data)),Object(s["b"])(a).then((function(a){"cert"===e.data.type?t.$set(t.form,"apiclient_cert",a.data):"key"===e.data.type&&t.$set(t.form,"apiclient_key",a.data),t.$message.success("上传成功")}))}}},n=o,m=(a("1bdb2"),a("2517"),a("3427")),p=Object(m["a"])(n,l,r,!1,null,"0c0fd496",null);t["default"]=p.exports},"90e7":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return n}));var l=a("b775");function r(e){return Object(l["a"])({url:"/setting/getSetting",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/setting/getEngines",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/setting/setSetting",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/setting/getBalance",method:"post",data:e})}function n(e){return Object(l["a"])({url:"/setting/getLxaiBalance",method:"post",data:e})}},"91b6":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var l=a("b775");function r(e){return Object(l["a"])({url:"/upload/image",method:"post",data:e})}function i(e){return Object(l["a"])({url:"/upload/pem",method:"post",data:e})}},a920:function(e,t,a){}}]);