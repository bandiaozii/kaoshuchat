(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f9e4b4"],{2423:function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"f",(function(){return a})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return s})),i.d(e,"e",(function(){return c}));var n=i("b775");function r(t){return Object(n["a"])({url:"/article/getHelpList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/article/getHelpArticle",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/article/saveHelpArticle",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/article/delHelpArticle",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/article/getArticle",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/article/saveArticle",method:"post",data:t})}},"2b4a":function(t,e,i){},"55e7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"toolbar"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showEdit(0)}}},[t._v("新建文章")])],1),i("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","row-key":"id","header-cell-class-name":"bg-gray"}},[i("el-table-column",{attrs:{prop:"weight",label:"权重",width:"100"}}),i("el-table-column",{attrs:{prop:"title",label:"标题"}}),i("el-table-column",{attrs:{prop:"views",label:"点击量",width:"100"}}),i("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.showEdit(e.row.id)}}},[t._v("编辑")]),i("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])})],1),i("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.article?i("edit",{attrs:{article:t.article},on:{close:t.closeEdit,submit:t.saveArticle}}):t._e()],1)},r=[],o=i("2423"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.form?i("div",[i("el-dialog",{attrs:{"custom-class":"my-dialog",title:t.article.id?"编辑":"新建",width:"1000px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"权重",prop:"weight"}},[i("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"越大越靠前",size:"small"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),i("span",{staticClass:"tips"},[t._v("越大越靠前")])],1),i("el-form-item",{attrs:{label:"文章标题",prop:"title"}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"",size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"文章内容",prop:"content"}},[i("keep-alive",[i("UEditor",{key:"ue"+t.form.id,ref:"ue",attrs:{value:t.form.content}})],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()},l=[],s=i("8339"),c={components:{UEditor:s["a"]},props:{article:{type:Object,default:null}},data:function(){return{form:null,formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],content:[{required:!0,message:"此项必填",trigger:"blur"}]}}},created:function(){this.form=this.article,this.form.weight||this.$set(this.form,"weight",100)},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.form.content=this.$refs.ue.getUEContent(),this.$refs.form.validate((function(e){e?t.$emit("submit",t.form):t.$message.error("请填写必填项")}))}}},u=c,d=(i("8ff8"),i("3427")),f=Object(d["a"])(u,a,l,!1,null,"68fa73be",null),p=f.exports,m={components:{edit:p},data:function(){return{dataList:[],pagesize:10,page:1,dataTotal:0,article:null}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;Object(o["d"])({page:this.page}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},showEdit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?Object(o["c"])({id:e}).then((function(e){t.article=e.data})):this.article={}},closeEdit:function(){this.article=null},saveArticle:function(t){var e=this;Object(o["f"])(t).then((function(t){e.getList(),e.$message.success(t.message),e.closeEdit()}))},doDel:function(t){var e=this;this.$confirm("删除后不可恢复，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))}}},h=m,g=Object(d["a"])(h,n,r,!1,null,null,null);e["default"]=g.exports},8339:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("script",{staticStyle:{width:"100%","min-width":"500px",height:"400px","max-width":"800px"},attrs:{id:"editor",type:"text/plain"}})])}],o={name:"Ue",props:{value:{type:String,default:""}},data:function(){return{config:{serverUrl:"/admin.php/upload/ueditor"},editor:null}},mounted:function(){var t=this;window.UE.delEditor("editor"),this.editor=window.UE.getEditor("editor",this.config),this.editor.addListener("ready",(function(){t.editor.setContent(t.value)}))},methods:{setUEContent:function(t){this.editor.setContent(t)},getUEContent:function(){return this.editor.getContent()},destroyed:function(){this.editor.destroy()}}},a=o,l=i("3427"),s=Object(l["a"])(a,n,r,!1,null,null,null);e["a"]=s.exports},"8ff8":function(t,e,i){"use strict";i("2b4a")}}]);