(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da5ad72"],{"90e7":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return p}));var i=a("b775");function s(t){return Object(i["a"])({url:"/setting/getSetting",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/setting/getEngines",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/setting/setSetting",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/setting/getBalance",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/setting/getLxaiBalance",method:"post",data:t})}},b5ed:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"20px"}},[a("el-form",{ref:"form",staticStyle:{width:"700px"},attrs:{rules:t.formRules,"label-width":"100px"}},[a("el-steps",{attrs:{active:t.activeStep,"align-center":"",simple:"","process-status":"wait"}},[a("el-step",{attrs:{title:"设置参数",icon:"el-icon-edit"}}),a("el-step",{attrs:{title:"上传代码",icon:"el-icon-upload"}}),a("el-step",{attrs:{title:"上传结果",icon:"el-icon-info"}})],1),1===t.activeStep?a("div",[a("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{label:"上传密钥",prop:"upload_secret"}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"小程序代码上传密钥",size:"small"},model:{value:t.upload_secret,callback:function(e){t.upload_secret=e},expression:"upload_secret"}}),a("p",{staticStyle:{color:"#888"}},[t._v("请将IP白名单关闭，或将"),a("span",{staticStyle:{color:"#666","text-decoration":"underline",margin:"0 3px"}},[t._v("47.95.209.62")]),t._v("加入IP白名单")])],1),a("el-form-item",{attrs:{label:"接口域名",prop:"host"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"本站域名，不带https://",size:"small"},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1),a("el-form-item",{staticStyle:{margin:"50px 0"},attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-upload",size:"small"},on:{click:t.uploadCode}},[t._v("开始上传代码")]),a("p",{staticStyle:{color:"#888"}},[t._v("点击上传按钮后，请耐心等待，需要半分钟左右。")])],1)],1):t._e(),3===t.activeStep?a("div",[a("div",{staticStyle:{"text-align":"center",padding:"100px 0 100px 0"}},[a("p",{staticClass:"text-green",staticStyle:{"font-size":"48px",margin:"20px 0"}},[a("i",{staticClass:"el-icon-success"})]),a("p",{staticStyle:{"font-size":"16px"}},[t._v("上传成功")]),t.upload_time?a("p",{staticStyle:{"font-size":"14px",color:"#888"}},[t._v("最后上传时间："+t._s(t.upload_time))]):t._e(),a("p",{staticStyle:{"text-align":"left"}},[1===t.has_update?a("el-alert",{staticStyle:{width:"320px",margin:"0 auto"},attrs:{type:"warning","show-icon":"",closable:!1,title:"发现更新（"+t.update_time+"），请重新上传代码"}}):t._e(),0===t.has_update?a("el-alert",{staticStyle:{width:"160px",margin:"0 auto"},attrs:{type:"success","show-icon":"",title:"已是最新版"}}):t._e()],1),a("p",[a("el-button",{staticStyle:{"margin-top":"50px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:t.toEdit}},[t._v("返回重新上传")])],1)])]):t._e()],1)],1)},s=[],n=a("90e7"),o=a("b775");function l(t){return Object(o["a"])({url:"/wxapp/uploadCode",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/wxapp/checkUpdate",method:"post",data:t})}var c={data:function(){return{wxapp_name:"wxapp",host:"",upload_secret:"",upload_time:"",has_update:-1,update_time:"",activeStep:1,formRules:{upload_secret:[{required:!0,message:"此项必填",trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(n["d"])({name:this.wxapp_name+"_upload"}).then((function(e){t.has_update=-1,t.update_time="",t.upload_secret=e.data.upload_secret,e.data.host?t.host=e.data.host:t.host=window.location.host,t.upload_time=e.data.upload_time,t.upload_time&&(t.activeStep=3,setTimeout((function(){t.checkUpdate()}),1e3))}))},uploadCode:function(){var t=this;this.upload_secret?l({wxapp_name:this.wxapp_name,upload_secret:this.upload_secret,host:this.host}).then((function(e){t.getSetting(),t.$message({message:e.message,type:"success",duration:1500})})):this.$message({message:"请填写上传密钥",type:"error",duration:1500})},checkUpdate:function(){var t=this;p({wxapp_name:this.wxapp_name}).then((function(e){t.has_update=e.data.has_update,t.has_update&&(t.update_time=e.data.update_time)}))},toEdit:function(){this.activeStep=1}}},r=c,u=a("3427"),d=Object(u["a"])(r,i,s,!1,null,null,null);e["default"]=d.exports}}]);