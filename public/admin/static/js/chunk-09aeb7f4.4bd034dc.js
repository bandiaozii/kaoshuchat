(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09aeb7f4"],{"08e5":function(t,e,a){},"3c6f":function(t,e,a){"use strict";a("ea61")},4402:function(t,e,a){"use strict";a("7736")},"497f":function(t,e,a){var r=a("10b0"),i=a("985f"),n=a("bb38"),o=a("1ed2"),l=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in l||i(t,"flags")||!n(l,t)?e:r(o,t)}},"4d7a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-radio-group",{model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[a("el-radio",{attrs:{label:"text",size:"mini"}},[t._v("文字")]),a("el-radio",{attrs:{label:"image",size:"mini"}},[t._v("图片")])],1)],1),"text"===t.form["type"]?a("div",[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:6,placeholder:"输入文字内容",size:"small"},model:{value:t.form["content"],callback:function(e){t.$set(t.form,"content",e)},expression:"form['content']"}}),a("p",[a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.showLinkForm}},[t._v("插入链接")])],1)],1):t._e(),"image"===t.form["type"]?a("div",[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"text",placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["image"],callback:function(e){t.$set(t.form,"image",e)},expression:"form['image']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"image"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["image"]?a("img",{staticClass:"avatar",staticStyle:{height:"100px",width:"auto"},attrs:{src:t.form["image"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"100px",height:"100px","line-height":"100px"}})]),a("span",[t._v("10MB以内，支持bmp/png/jpeg/jpg/gif格式")])],1):t._e(),t.linkForm?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"插入链接",width:"460px",visible:!0,"append-to-body":!0,"close-on-click-modal":!1,"before-close":t.closeLinkForm}},[a("el-form",{ref:"form",attrs:{model:t.linkForm,rules:t.linkFormRules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"链接标题",size:"small"},model:{value:t.linkForm.title,callback:function(e){t.$set(t.linkForm,"title",e)},expression:"linkForm.title"}})],1),a("el-form-item",{attrs:{label:"链接",prop:"url"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"http:// 或 https://",size:"small"},model:{value:t.linkForm.url,callback:function(e){t.$set(t.linkForm,"url",e)},expression:"linkForm.url"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeLinkForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.sumitLinkForm}},[t._v("提 交")])],1)],1)],1):t._e()])},i=[],n=(a("7b4c"),a("91b6")),o={props:{type:{type:String,default:"text"},content:{type:String,default:""},image:{type:String,default:""}},data:function(){return{form:{type:"text",content:"",image:""},formRules:{type:[{required:!0,message:"此项必填",trigger:"blur"}],content:[{required:!0,message:"此项必填",trigger:"blur"}],image:[{required:!0,message:"此项必填",trigger:"blur"}]},linkForm:null,linkFormRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],url:[{required:!0,message:"此项必填",trigger:"blur"}]}}},watch:{type:function(){this.form.type=this.type},content:function(){this.form.content=this.content},image:function(){this.form.image=this.image}},mounted:function(){this.form.type=this.type,this.form.content=this.content,this.form.image=this.image},methods:{getReply:function(){return this.form},uploadImage:function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),Object(n["a"])(a).then((function(a){e.$set(e.form,t.data.type,a.data.path),e.$message.success("上传成功")}))},showLinkForm:function(){this.linkForm={}},closeLinkForm:function(){this.linkForm=null},sumitLinkForm:function(){this.form.content+='<a href="'+this.linkForm.url+'">'+this.linkForm.title+"</a>",this.closeLinkForm()}}},l=o,s=(a("6e7c"),a("554a"),a("3427")),c=Object(s["a"])(l,r,i,!1,null,"eb20b8c4",null);e["a"]=c.exports},"554a":function(t,e,a){"use strict";a("08e5")},"6e7c":function(t,e,a){"use strict";a("af97")},7736:function(t,e,a){},"91b6":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var r=a("b775");function i(t){return Object(r["a"])({url:"/upload/image",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/upload/pem",method:"post",data:t})}},a7eb:function(t,e,a){"use strict";var r=a("59db").PROPER,i=a("e549"),n=a("2f89"),o=a("f8b7"),l=a("8241"),s=a("497f"),c="toString",m=RegExp.prototype,u=m[c],p=l((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=r&&u.name!=c;(p||f)&&i(RegExp.prototype,c,(function(){var t=n(this),e=o(t.source),a=o(s(t));return"/"+e+"/"+a}),{unsafe:!0})},af97:function(t,e,a){},cbf1:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"关注时回复",name:"welcomeReply"}},[t.form?a("el-form",{ref:"welcomeReply",staticStyle:{padding:"30px 0"},attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"回复内容"}},[a("replyEditor",{ref:"welcomeReplyEditor",attrs:{type:t.form.type,content:t.form.content,image:t.form.image}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:"扫码登录回复",name:"loginReply"}},[t.form?a("el-form",{ref:"loginReply",attrs:{model:t.form,"label-width":"120px"}},[a("el-alert",{staticStyle:{width:"600px",margin:"10px 0 20px 20px"},attrs:{type:"warning",size:"small",title:"当PC端扫码登录时，回复的内容",closable:!1}}),a("el-form-item",{attrs:{label:"回复内容"}},[a("replyEditor",{ref:"loginReplyEditor",attrs:{type:t.form.type,content:t.form.content,image:t.form.image}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1),a("el-tab-pane",{attrs:{label:"默认回复",name:"defaultReply"}},[t.form?a("el-form",{ref:"defaultReply",attrs:{model:t.form,"label-width":"120px"}},[a("el-alert",{staticStyle:{width:"600px",margin:"10px 0 20px 20px"},attrs:{type:"warning",size:"small",title:"当系统不知道该如何回复时，默认发送的内容",closable:!1}}),a("el-form-item",{attrs:{label:"回复内容"}},[a("replyEditor",{ref:"defaultReplyEditor",attrs:{type:t.form.type,content:t.form.content,image:t.form.image}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},i=[],n=(a("7b4c"),a("485a"),a("a7eb"),a("da33")),o=a("4d7a"),l={components:{replyEditor:o["a"]},data:function(){return{tabName:"welcomeReply",form:null}},mounted:function(){this.getWxmpReply()},methods:{getWxmpReply:function(){var t=this;Object(n["d"])({type:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getWxmpReply()},doSubmit:function(){var t=this;this.$refs[this.tabName].validate((function(e){if(e){var a=t.$refs[t.tabName+"Editor"].getReply(),r=a.type,i=a.content,o=a.image;t.form.type=r,t.form.content=i,t.form.image=o,Object(n["h"])({type:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getWxmpReply(),t.$message.success(e.message)}))}else t.$message.error("请填写必填项")}))},uploadImage:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this,a=new FormData;a.append("file",t.file),t.data&&a.append("data",JSON.stringify(t.data)),uploadImage(a).then((function(a){e.$set(e.form,t.data.type,a.data.path),e.$message.success("上传成功")}))}))}},s=l,c=(a("4402"),a("3c6f"),a("3427")),m=Object(c["a"])(s,r,i,!1,null,"44b124da",null);e["default"]=m.exports},da33:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"i",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"h",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return m})),a.d(e,"a",(function(){return u})),a.d(e,"g",(function(){return p}));var r=a("b775");function i(t){return Object(r["a"])({url:"/wxmp/getWxmpSetting",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/wxmp/setWxmpSetting",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/wxmp/getWxmpReply",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/wxmp/setWxmpReply",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/wxmp/getKeywordList",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/wxmp/getKeyword",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/wxmp/saveKeyword",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/wxmp/delKeyword",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/wxmp/setKeywordState",method:"post",data:t})}},ea61:function(t,e,a){}}]);