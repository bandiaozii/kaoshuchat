(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ef32fb6"],{"03f0":function(t,e,a){},"24e3":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"85fa":function(t,e,a){"use strict";var o=a("607c"),i=a("f65d"),l=a("a30c"),r=a("dc58"),n=a("f129"),s=a("24e3"),c=a("8fde"),u=a("a2f3"),p=a("ccba");i("search",(function(t,e,a){return[function(e){var a=n(this),i=r(e)?void 0:u(e,t);return i?o(i,e,a):new RegExp(e)[t](c(a))},function(t){var o=l(this),i=c(t),r=a(e,o,i);if(r.done)return r.value;var n=o.lastIndex;s(n,0)||(o.lastIndex=0);var u=p(o,i);return s(o.lastIndex,n)||(o.lastIndex=n),null===u?-1:u.index}]}))},"9a4c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("div",[a("el-button-group",[a("el-button",{attrs:{type:"all"===t.search.type_id?"primary":"default",size:"small"},on:{click:function(e){return t.changeType("all")}}},[t._v("全部类别")]),t._l(t.typeList,(function(e){return a("el-button",{attrs:{type:t.search.type_id===e.id?"primary":"default",size:"small"},on:{click:function(a){return t.changeType(e.id)}}},[t._v(" "+t._s(e.title))])}))],2)],1),a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickAdd}},[t._v("新建角色")])],1)]),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"weight",label:"权重",width:"60"}}),a("el-table-column",{attrs:{prop:"type_title",label:"所属类别",width:"140"}}),a("el-table-column",{attrs:{prop:"title",label:"角色名称",width:"200"}}),a("el-table-column",{attrs:{prop:"views",label:"点击量",width:"100"}}),a("el-table-column",{attrs:{prop:"usages",label:"使用量",width:"100"}}),a("el-table-column",{attrs:{prop:"state",label:"启用",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.setState(e.row.id,a)}},model:{value:e.row.state,callback:function(a){t.$set(e.row,"state",a)},expression:"scope.row.state"}})]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},nativeOn:{click:function(a){return a.preventDefault(),t.clickEdit(e.row.id)}}},[t._v("编辑 ")]),a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t.formTitle,width:"800px",visible:!0,"close-on-click-modal":!1,"before-close":t.formClose}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("div",{staticStyle:{display:"flex"}},[a("div",[a("el-form-item",{attrs:{label:"权重",prop:"weight"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"越大越靠前",size:"normal"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),a("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("越大越靠前")])],1),a("el-form-item",{attrs:{label:"所属类别",prop:"title"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"选择所属类别",size:"normal"},model:{value:t.form.type_id,callback:function(e){t.$set(t.form,"type_id",e)},expression:"form.type_id"}},t._l(t.typeList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"角色名称",prop:"title"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"角色名称",size:"normal"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),a("el-form-item",{attrs:{label:"头像",prop:"thumb"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["thumb"],callback:function(e){t.$set(t.form,"thumb",e)},expression:"form['thumb']"}}),a("el-upload",{staticClass:"avatar-uploader",staticStyle:{height:"80px"},attrs:{action:"",data:{type:"thumb"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["thumb"]?a("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:t.form["thumb"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),a("span",[t._v("建议100x100像素，正方形图片")])],1)],1),a("el-form-item",{attrs:{label:"前置指令",prop:"prompt"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:6,placeholder:"前置指令",size:"normal"},model:{value:t.form.prompt,callback:function(e){t.$set(t.form,"prompt",e)},expression:"form.prompt"}})],1),a("el-form-item",{attrs:{label:"输入框提示",prop:"hint"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"在输入框里提示用户的文字",size:"normal"},model:{value:t.form.hint,callback:function(e){t.$set(t.form,"hint",e)},expression:"form.hint"}})],1),a("el-form-item",{attrs:{label:"欢迎语",prop:"welcome"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"初次进入对话页面时的欢迎语，可留空，默认使用提示文字",size:"normal"},model:{value:t.form.welcome,callback:function(e){t.$set(t.form,"welcome",e)},expression:"form.welcome"}})],1),a("el-form-item",{attrs:{label:"虚拟点击量",prop:"fake_views"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_views,callback:function(e){t.$set(t.form,"fake_views",e)},expression:"form.fake_views"}})],1),a("el-form-item",{attrs:{label:"虚拟使用量",prop:"fake_usages"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_usages,callback:function(e){t.$set(t.form,"fake_usages",e)},expression:"form.fake_usages"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.formClose}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()],1)},i=[],l=(a("592a"),a("85fa"),a("f34f")),r={data:function(){return{form:null,formType:null,dataList:[],dataTotal:0,typeList:[],page:1,pagesize:10,search:{type_id:"all"},formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],prompt:[{required:!0,message:"此项必填",trigger:"blur"}],hint:[{required:!0,message:"此项必填",trigger:"blur"}]}}},computed:{formTitle:function(){return"add"===this.formType?"新建角色":"编辑"}},mounted:function(){this.getTypeList(),this.getList()},methods:{getTypeList:function(){var t=this;Object(l["i"])().then((function(e){t.typeList=e.data}))},getList:function(){var t=this;Object(l["g"])({page:this.page,pagesize:this.pagesize,type_id:this.search.type_id}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},clickAdd:function(){this.formType="add",this.form={weight:100}},clickEdit:function(t){var e=this;Object(l["f"])({id:t}).then((function(t){e.formType="edit",e.form=t.data}))},formClose:function(){this.form=null,this.formType=""},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?Object(l["j"])(t.form).then((function(e){t.getList(),t.$message({message:e.message,type:"success",duration:1500}),t.formClose()})):console.log("请填写必填项")}))},doDel:function(t){var e=this;this.$confirm("删除后不可回复，确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["b"])({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},setState:function(t,e){var a=this;Object(l["l"])({id:t,state:e}).then((function(t){a.getList(),a.$message({message:t.message,type:"success",duration:1500})}))},changeType:function(t){this.search.type_id=t,this.page=1,this.getList()}}},n=r,s=(a("e872"),a("3427")),c=Object(s["a"])(n,o,i,!1,null,"5502efa8",null);e["default"]=c.exports},e872:function(t,e,a){"use strict";a("03f0")},f34f:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"a",(function(){return r})),a.d(e,"i",(function(){return n})),a.d(e,"h",(function(){return s})),a.d(e,"k",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"m",(function(){return p})),a.d(e,"g",(function(){return f})),a.d(e,"f",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"b",(function(){return h})),a.d(e,"l",(function(){return g}));var o=a("b775");function i(t){return Object(o["a"])({url:"/cosplay/getMsgList",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/cosplay/getMsgTongji",method:"post",data:t})}function r(t){return Object(o["a"])({url:"/cosplay/delMsg",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/cosplay/getTypeList",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/cosplay/getType",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/cosplay/saveType",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/cosplay/delType",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/cosplay/setTypeState",method:"post",data:t})}function f(t){return Object(o["a"])({url:"/cosplay/getRoleList",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/cosplay/getRole",method:"post",data:t})}function m(t){return Object(o["a"])({url:"/cosplay/saveRole",method:"post",data:t})}function h(t){return Object(o["a"])({url:"/cosplay/delRole",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/cosplay/setRoleState",method:"post",data:t})}}}]);