(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522fcc6b"],{"134b":function(t,e,o){},"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"7a70":function(t,e,o){"use strict";var a=o("10b0"),n=o("e67f"),r=o("2f89"),i=o("4b5b"),l=o("57eb"),s=o("3d53"),c=o("f8b7"),u=o("5de4"),d=o("4f00");n("search",(function(t,e,o){return[function(e){var o=l(this),n=i(e)?void 0:u(e,t);return n?a(n,e,o):new RegExp(e)[t](c(o))},function(t){var a=r(this),n=c(t),i=o(e,a,n);if(i.done)return i.value;var l=a.lastIndex;s(l,0)||(a.lastIndex=0);var u=d(a,n);return s(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},"91b6":function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));var a=o("b775");function n(t){return Object(a["a"])({url:"/upload/image",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/upload/pem",method:"post",data:t})}},"9a4c":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"toolbar"},[o("div",[o("el-button-group",[o("el-button",{attrs:{type:"all"===t.search.type_id?"primary":"default",size:"small"},on:{click:function(e){return t.changeType("all")}}},[t._v("全部类别")]),t._l(t.typeList,(function(e){return o("el-button",{attrs:{type:t.search.type_id===e.id?"primary":"default",size:"small"},on:{click:function(o){return t.changeType(e.id)}}},[t._v(" "+t._s(e.title))])}))],2)],1),o("div",[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickAdd}},[t._v("新建角色")])],1)]),o("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[o("el-table-column",{attrs:{prop:"weight",label:"权重",width:"60"}}),o("el-table-column",{attrs:{prop:"type_title",label:"所属类别",width:"140"}}),o("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.thumb?o("img",{attrs:{src:t.row.thumb,height:"48"}}):o("img",{attrs:{src:"/static/chat/role_default.png",height:"48"}})]}}])}),o("el-table-column",{attrs:{prop:"title",label:"角色名称",width:"200"}}),o("el-table-column",{attrs:{prop:"views",label:"点击量",width:"100"}}),o("el-table-column",{attrs:{prop:"usages",label:"使用量",width:"100"}}),o("el-table-column",{attrs:{prop:"state",label:"启用",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(o){return t.setState(e.row.id,o)}},model:{value:e.row.state,callback:function(o){t.$set(e.row,"state",o)},expression:"scope.row.state"}})]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button-group",[o("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},nativeOn:{click:function(o){return o.preventDefault(),t.clickEdit(e.row.id)}}},[t._v("编辑 ")]),o("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(o){return o.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])],1)]}}])})],1),o("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?o("div",[o("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t.formTitle,width:"800px",visible:!0,"close-on-click-modal":!1,"before-close":t.formClose}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[o("div",{staticStyle:{display:"flex"}},[o("div",[o("el-form-item",{attrs:{label:"权重",prop:"weight"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"越大越靠前",size:"normal"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("越大越靠前")])],1),o("el-form-item",{attrs:{label:"所属类别",prop:"title"}},[o("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"选择所属类别",size:"normal"},model:{value:t.form.type_id,callback:function(e){t.$set(t.form,"type_id",e)},expression:"form.type_id"}},t._l(t.typeList,(function(t,e){return o("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1)],1),o("el-form-item",{attrs:{label:"角色名称",prop:"title"}},[o("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"角色名称",size:"normal"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),o("el-form-item",{attrs:{label:"头像",prop:"thumb"}},[o("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["thumb"],callback:function(e){t.$set(t.form,"thumb",e)},expression:"form['thumb']"}}),o("el-upload",{staticClass:"avatar-uploader",staticStyle:{height:"80px"},attrs:{action:"",data:{type:"thumb"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["thumb"]?o("img",{staticClass:"avatar",staticStyle:{height:"80px",width:"auto"},attrs:{src:t.form["thumb"]}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"80px",height:"80px","line-height":"80px"}})]),o("span",{staticStyle:{color:"#999"}},[t._v("建议100x100像素，正方形图片")])],1)],1),o("el-form-item",{attrs:{label:"前置指令",prop:"prompt"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:6,placeholder:"前置指令",size:"normal"},model:{value:t.form.prompt,callback:function(e){t.$set(t.form,"prompt",e)},expression:"form.prompt"}})],1),o("el-form-item",{attrs:{label:"输入框提示",prop:"hint"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"在输入框里提示用户的文字",size:"normal"},model:{value:t.form.hint,callback:function(e){t.$set(t.form,"hint",e)},expression:"form.hint"}})],1),o("el-form-item",{attrs:{label:"欢迎语",prop:"welcome"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"初次进入对话页面时的欢迎语，可留空，默认使用提示文字",size:"normal"},model:{value:t.form.welcome,callback:function(e){t.$set(t.form,"welcome",e)},expression:"form.welcome"}})],1),o("div",{staticStyle:{display:"flex"}},[o("el-form-item",{attrs:{label:"虚拟点击量",prop:"fake_views"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_views,callback:function(e){t.$set(t.form,"fake_views",e)},expression:"form.fake_views"}})],1),o("el-form-item",{attrs:{label:"虚拟使用量",prop:"fake_usages"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_usages,callback:function(e){t.$set(t.form,"fake_usages",e)},expression:"form.fake_usages"}})],1)],1),o("el-form-item",{attrs:{label:"启用知识库"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form["book_open"],callback:function(e){t.$set(t.form,"book_open",e)},expression:"form['book_open']"}})],1),1===t.form.book_open?o("el-form-item",{attrs:{label:"关联知识库",prop:"books"}},[t.bookList&&t.bookList.length>0?o("div",{staticStyle:{"max-width":"1000px"}},[o("el-checkbox-group",{model:{value:t.books,callback:function(e){t.books=e},expression:"books"}},t._l(t.bookList,(function(e){return 1===e.state?o("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title))]):t._e()})),1)],1):t._e()]):t._e(),1===t.form.book_open?o("el-form-item",{attrs:{label:"知识库无答案时",prop:"no_answer_action"}},[o("el-radio-group",{model:{value:t.form["no_answer_action"],callback:function(e){t.$set(t.form,"no_answer_action",e)},expression:"form['no_answer_action']"}},[o("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"ai",size:"mini"}},[t._v("由AI回复")]),o("el-radio",{attrs:{label:"diy",size:"mini"}},[t._v("自定义回复内容")])],1),"diy"===t.form["no_answer_action"]?o("div",{staticStyle:{"margin-top":"5px"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:5,placeholder:"不能留空",size:"small"},model:{value:t.form["answer_content"],callback:function(e){t.$set(t.form,"answer_content",e)},expression:"form['answer_content']"}})],1):t._e()],1):t._e()],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.formClose}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()],1)},n=[],r=(o("c36d"),o("7a70"),o("7b4c"),o("f34f")),i=o("b067"),l=o("91b6"),s={data:function(){return{form:null,formType:null,dataList:[],dataTotal:0,typeList:[],bookList:null,books:[],page:1,pagesize:10,search:{type_id:"all"},formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],prompt:[{required:!0,message:"此项必填",trigger:"blur"}],hint:[{required:!0,message:"此项必填",trigger:"blur"}]}}},computed:{formTitle:function(){return"add"===this.formType?"新建角色":"编辑"}},mounted:function(){this.getTypeList(),this.getBookList(),this.getList()},methods:{getTypeList:function(){var t=this;Object(r["i"])().then((function(e){t.typeList=e.data}))},getBookList:function(){var t=this;Object(i["e"])().then((function(e){t.bookList=e.data}))},getList:function(){var t=this;Object(r["g"])({page:this.page,pagesize:this.pagesize,type_id:this.search.type_id}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},clickAdd:function(){this.formType="add",this.form={weight:100}},clickEdit:function(t){var e=this;Object(r["f"])({id:t}).then((function(t){e.formType="edit",e.form=t.data,t.data.books&&(e.books=t.data.books)}))},formClose:function(){this.form=null,this.formType="",this.books=[]},doSubmit:function(){var t=this,e=Object.assign(this.form,{books:JSON.stringify(this.books)});this.$refs.form.validate((function(o){o?Object(r["j"])(e).then((function(e){t.getList(),t.$message({message:e.message,type:"success",duration:1500}),t.formClose()})):console.log("请填写必填项")}))},doDel:function(t){var e=this;this.$confirm("删除后不可回复，确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["b"])({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},setState:function(t,e){var o=this;Object(r["l"])({id:t,state:e}).then((function(t){o.getList(),o.$message({message:t.message,type:"success",duration:1500})}))},changeType:function(t){this.search.type_id=t,this.page=1,this.getList()},uploadImage:function(t){var e=this,o=new FormData;o.append("file",t.file),t.data&&o.append("data",JSON.stringify(t.data)),Object(l["a"])(o).then((function(o){"thumb"===t.data.type&&e.$set(e.form,"thumb",o.data.path),e.$message.success("上传成功")}))}}},c=s,u=(o("cebb"),o("3427")),d=Object(u["a"])(c,a,n,!1,null,"eae99c8c",null);e["default"]=d.exports},b067:function(t,e,o){"use strict";o.d(e,"e",(function(){return n})),o.d(e,"d",(function(){return r})),o.d(e,"h",(function(){return i})),o.d(e,"a",(function(){return l})),o.d(e,"j",(function(){return s})),o.d(e,"g",(function(){return c})),o.d(e,"f",(function(){return u})),o.d(e,"i",(function(){return d})),o.d(e,"k",(function(){return p})),o.d(e,"b",(function(){return f})),o.d(e,"c",(function(){return m}));var a=o("b775");function n(t){return Object(a["a"])({url:"/book/getBookList",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/book/getBook",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/book/saveBook",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/book/delBook",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/book/setBookState",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/book/getDataList",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/book/getData",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/book/saveData",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/book/setDataState",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/book/delData",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/book/exportData",method:"post",data:t})}},cebb:function(t,e,o){"use strict";o("134b")},f34f:function(t,e,o){"use strict";o.d(e,"d",(function(){return n})),o.d(e,"e",(function(){return r})),o.d(e,"a",(function(){return i})),o.d(e,"i",(function(){return l})),o.d(e,"h",(function(){return s})),o.d(e,"k",(function(){return c})),o.d(e,"c",(function(){return u})),o.d(e,"m",(function(){return d})),o.d(e,"g",(function(){return p})),o.d(e,"f",(function(){return f})),o.d(e,"j",(function(){return m})),o.d(e,"b",(function(){return b})),o.d(e,"l",(function(){return h}));var a=o("b775");function n(t){return Object(a["a"])({url:"/cosplay/getMsgList",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/cosplay/getMsgTongji",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/cosplay/delMsg",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/cosplay/getTypeList",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/cosplay/getType",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/cosplay/saveType",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/cosplay/delType",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/cosplay/setTypeState",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/cosplay/getRoleList",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/cosplay/getRole",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/cosplay/saveRole",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/cosplay/delRole",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/cosplay/setRoleState",method:"post",data:t})}}}]);