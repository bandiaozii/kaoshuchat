(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8be66ada"],{"0047":function(t,e,a){"use strict";a("4834")},"41a5":function(t,e,a){"use strict";a("6a5b")},4834:function(t,e,a){},"6a5b":function(t,e,a){},"90e7":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return r}));var i=a("b775");function n(t){return Object(i["a"])({url:"/setting/getSetting",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/setting/getEngines",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/setting/setSetting",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/setting/getBalance",method:"post",data:t})}},"9ee9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{"padding-top":"10px"}},[a("el-tabs",{on:{"tab-click":t.switchTab},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[a("el-tab-pane",{attrs:{label:"分销设置",name:"commission"}},[t.form?a("el-form",{ref:"commissionForm",staticStyle:{padding:"30px 0"},attrs:{model:t.form,rules:t.formRules,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"分销开关",prop:"is_open"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["is_open"],callback:function(e){t.$set(t.form,"is_open",e)},expression:"form['is_open']"}})],1),a("el-form-item",{attrs:{label:"自动通过审核",prop:"auto_audit"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["auto_audit"],callback:function(e){t.$set(t.form,"auto_audit",e)},expression:"form['auto_audit']"}})],1),a("el-form-item",{attrs:{label:"分销层级",prop:"deep"}},[a("el-radio",{attrs:{label:2},model:{value:t.form["deep"],callback:function(e){t.$set(t.form,"deep",e)},expression:"form['deep']"}},[t._v("2级")])],1),a("el-form-item",{attrs:{label:"直推分佣比例",prop:"bili_1"}},[a("el-input",{staticStyle:{width:"60px"},attrs:{size:"small"},model:{value:t.form["bili_1"],callback:function(e){t.$set(t.form,"bili_1",e)},expression:"form['bili_1']"}}),t._v(" % "),a("p",{staticStyle:{color:"#666",margin:"0"}},[t._v("填0~100之间的数字")])],1),a("el-form-item",{attrs:{label:"间推分佣比例",prop:"bili_2"}},[a("el-input",{staticStyle:{width:"60px"},attrs:{size:"small"},model:{value:t.form["bili_2"],callback:function(e){t.$set(t.form,"bili_2",e)},expression:"form['bili_2']"}}),t._v(" % "),a("p",{staticStyle:{color:"#666",margin:"0"}},[t._v("填0~100之间的数字")])],1),a("el-form-item",{attrs:{label:"分销协议",prop:"agreement"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:10,placeholder:"请输入内容",size:"small"},model:{value:t.form["agreement"],callback:function(e){t.$set(t.form,"agreement",e)},expression:"form['agreement']"}})],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("保 存")])],1)],1):t._e()],1)],1)],1)},n=[],o=(a("7b4c"),a("90e7")),s={data:function(){return{tabName:"commission",form:null,engines:[],balance:null,formRules:{}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(o["c"])({name:this.tabName}).then((function(e){t.form=e.data}))},switchTab:function(){this.getSetting(),"chatgpt"===this.tabName&&this.getEngines()},doSubmit:function(){var t=this;this.$refs.commissionForm.validate((function(e){e?Object(o["d"])({name:t.tabName,data:JSON.stringify(t.form)}).then((function(e){t.getSetting(),t.$message({message:e.message,type:"success",duration:1500})})):t.$message({message:"请填写必填项",type:"error",duration:1500})}))}}},r=s,l=(a("0047"),a("41a5"),a("3427")),c=Object(l["a"])(r,i,n,!1,null,"6ad57c6b",null);e["default"]=c.exports}}]);