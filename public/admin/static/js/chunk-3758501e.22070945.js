(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3758501e"],{"0c47":function(t,e,o){},1041:function(t,e,o){"use strict";o("0c47")},"2f8d":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"toolbar"},[o("div",[o("el-button-group",[o("el-button",{attrs:{type:"all"===t.search.topic_id?"primary":"default",size:"small"},on:{click:function(e){return t.changeTopic("all")}}},[t._v("全部类别")]),t._l(t.topicList,(function(e){return o("el-button",{attrs:{type:t.search.topic_id===e.id?"primary":"default",size:"small"},on:{click:function(o){return t.changeTopic(e.id)}}},[t._v(" "+t._s(e.title))])}))],2)],1),o("div",[o("el-button",{attrs:{type:"text",icon:"el-icon-document",size:"mini"},on:{click:t.downloadTemplate}},[t._v("下载导入模板")]),o("el-upload",{staticClass:"btn-import",attrs:{"before-upload":t.checkExcelFile,"on-success":t.importSuccess,"show-file-list":!1,action:"/admin.php/write/importPrompt"}},[o("el-button",{attrs:{type:"default",icon:"el-icon-upload2",size:"mini"}},[t._v("导入Excel")])],1),o("el-button",{attrs:{type:"default",icon:"el-icon-download",size:"mini",loading:t.exportLoading},on:{click:t.exportExcel}},[t._v("导出Excel")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickAdd}},[t._v("添加模型")])],1)]),o("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[o("el-table-column",{attrs:{prop:"weight",label:"权重",width:"60"}}),o("el-table-column",{attrs:{prop:"topic_title",label:"所属类别",width:"140"}}),o("el-table-column",{attrs:{prop:"title",label:"模型标题",width:"200"}}),o("el-table-column",{attrs:{prop:"desc",label:"描述",width:"350"}}),o("el-table-column",{attrs:{prop:"views",label:"点击量",width:"100"}}),o("el-table-column",{attrs:{prop:"usages",label:"使用量",width:"100"}}),o("el-table-column",{attrs:{prop:"votes",label:"收藏量",width:"100"}}),o("el-table-column",{attrs:{prop:"state",label:"启用",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(o){return t.setState(e.row.id,o)}},model:{value:e.row.state,callback:function(o){t.$set(e.row,"state",o)},expression:"scope.row.state"}})]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button-group",[o("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},nativeOn:{click:function(o){return o.preventDefault(),t.clickEdit(e.row.id)}}},[t._v("编辑 ")]),o("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(o){return o.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])],1)]}}])})],1),o("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?o("div",[o("el-dialog",{attrs:{"custom-class":"my-dialog full-dialog",title:t.formTitle,width:"800px",visible:!0,"close-on-click-modal":!1,"before-close":t.formClose}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"权重",prop:"weight"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"越大越靠前",size:"normal"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),o("span",{staticStyle:{color:"#666","margin-left":"10px"}},[t._v("越大越靠前")])],1),o("el-form-item",{attrs:{label:"所属类别",prop:"title"}},[o("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"选择所属类别",size:"normal"},model:{value:t.form.topic_id,callback:function(e){t.$set(t.form,"topic_id",e)},expression:"form.topic_id"}},t._l(t.topicList,(function(t,e){return o("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1)],1),o("el-form-item",{attrs:{label:"模型标题",prop:"title"}},[o("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"模型标题",size:"normal"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"描述",prop:"desc"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"模型描述",size:"normal"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),o("el-form-item",{attrs:{label:"模型内容",prop:"prompt"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:6,placeholder:"模型内容",size:"normal"},model:{value:t.form.prompt,callback:function(e){t.$set(t.form,"prompt",e)},expression:"form.prompt"}}),o("p",{staticStyle:{margin:"0","line-height":"24px","margin-top":"10px"}},[t._v("变量说明：")]),o("p",{staticStyle:{margin:"0","line-height":"24px",color:"#888"}},[t._v("用户输入内容："),o("span",{staticStyle:{color:"#04BABE"}},[t._v("[PROMPT]")])]),o("p",{staticStyle:{margin:"0","line-height":"24px",color:"#888"}},[t._v("输出语言："),o("span",{staticStyle:{color:"#04BABE"}},[t._v("[TARGETLANGGE]")])])],1),o("el-form-item",{attrs:{label:"输入框提示",prop:"hint"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"在输入框里提示用户的文字",size:"normal"},model:{value:t.form.hint,callback:function(e){t.$set(t.form,"hint",e)},expression:"form.hint"}})],1),o("el-form-item",{attrs:{label:"欢迎语",prop:"welcome"}},[o("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",rows:3,placeholder:"可留空，默认使用提示文字",size:"normal"},model:{value:t.form.welcome,callback:function(e){t.$set(t.form,"welcome",e)},expression:"form.welcome"}})],1),o("el-form-item",{attrs:{label:"虚拟点击量",prop:"fake_views"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_views,callback:function(e){t.$set(t.form,"fake_views",e)},expression:"form.fake_views"}})],1),o("el-form-item",{attrs:{label:"虚拟使用量",prop:"fake_usages"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_usages,callback:function(e){t.$set(t.form,"fake_usages",e)},expression:"form.fake_usages"}})],1),o("el-form-item",{attrs:{label:"虚拟收藏量",prop:"fake_votes"}},[o("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"",size:"normal"},model:{value:t.form.fake_votes,callback:function(e){t.$set(t.form,"fake_votes",e)},expression:"form.fake_votes"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.formClose}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()],1)},a=[],r=(o("c36d"),o("7a70"),o("485a"),o("28de"),o("71bc"),o("32c9"),o("3441")),n={data:function(){return{form:null,formType:null,dataList:[],dataTotal:0,topicList:[],page:1,pagesize:10,search:{topic_id:"all"},formRules:{title:[{required:!0,message:"此项必填",trigger:"blur"}],desc:[{required:!0,message:"此项必填",trigger:"blur"}],prompt:[{required:!0,message:"此项必填",trigger:"blur"}],hint:[{required:!0,message:"此项必填",trigger:"blur"}]},exportLoading:!1}},computed:{formTitle:function(){return"add"===this.formType?"添加模型":"编辑"}},mounted:function(){this.getTopicList(),this.getList()},methods:{getTopicList:function(){var t=this;Object(r["j"])().then((function(e){t.topicList=e.data}))},getList:function(){var t=this;Object(r["h"])({page:this.page,pagesize:this.pagesize,topic_id:this.search.topic_id}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},clickAdd:function(){this.formType="add",this.form={weight:100}},clickEdit:function(t){var e=this;Object(r["g"])({id:t}).then((function(t){e.formType="edit",e.form=t.data}))},formClose:function(){this.form=null,this.formType=""},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?Object(r["k"])(t.form).then((function(e){t.getList(),t.$message({message:e.message,type:"success",duration:1500}),t.formClose()})):console.log("请填写必填项")}))},doDel:function(t){var e=this;this.$confirm("删除后不可回复，确定删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["b"])({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},setState:function(t,e){var o=this;Object(r["m"])({id:t,state:e}).then((function(t){o.getList(),o.$message.success(t.message)}))},changeTopic:function(t){this.search.topic_id=t,this.page=1,this.getList()},downloadTemplate:function(){window.location.href="/static/prompts.xlsx"},checkExcelFile:function(t){if("application/vnd.ms-excel"!==t.type&&"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!==t.type)return this.$message.error("请上传Excel文件"),!1},importSuccess:function(t,e,o){this.getTopicList(),this.getList(),this.$message.success(t.message)},exportExcel:function(){var t=this;this.exportLoading=!0,Object(r["d"])(this.search).then((function(e){Promise.all([o.e("chunk-f5fbabca"),o.e("chunk-6fbc092e")]).then(o.bind(null,"4bf8")).then((function(o){var i="创作模型",a=["模型类别","模型标题","描述","模型内容","输入框提示","欢迎语"],r=["topic_title","title","desc","prompt","hint","welcome"],n=e.data,l=t.formatJson(r,n);o.export_json_to_excel({header:a,data:l,filename:i,autoWidth:!0,bookType:"xlsx"}),t.exportLoading=!1}))})).catch((function(){t.exportLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},l=n,s=(o("1041"),o("3427")),c=Object(s["a"])(l,i,a,!1,null,"02be2140",null);e["default"]=c.exports},3441:function(t,e,o){"use strict";o.d(e,"e",(function(){return a})),o.d(e,"f",(function(){return r})),o.d(e,"a",(function(){return n})),o.d(e,"j",(function(){return l})),o.d(e,"i",(function(){return s})),o.d(e,"l",(function(){return c})),o.d(e,"c",(function(){return u})),o.d(e,"n",(function(){return p})),o.d(e,"h",(function(){return d})),o.d(e,"g",(function(){return f})),o.d(e,"k",(function(){return m})),o.d(e,"b",(function(){return h})),o.d(e,"m",(function(){return b})),o.d(e,"d",(function(){return g}));var i=o("b775");function a(t){return Object(i["a"])({url:"/write/getMsgList",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/write/getMsgTongji",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/write/delMsg",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/write/getTopicList",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/write/getTopic",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/write/saveTopic",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/write/delTopic",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/write/setTopicState",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/write/getPromptList",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/write/getPrompt",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/write/savePrompt",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/write/delPrompt",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/write/setPromptState",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/write/exportPrompt",method:"post",data:t})}},"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"7a70":function(t,e,o){"use strict";var i=o("10b0"),a=o("e67f"),r=o("2f89"),n=o("4b5b"),l=o("57eb"),s=o("3d53"),c=o("f8b7"),u=o("5de4"),p=o("4f00");a("search",(function(t,e,o){return[function(e){var o=l(this),a=n(e)?void 0:u(e,t);return a?i(a,e,o):new RegExp(e)[t](c(o))},function(t){var i=r(this),a=c(t),n=o(e,i,a);if(n.done)return n.value;var l=i.lastIndex;s(l,0)||(i.lastIndex=0);var u=p(i,a);return s(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))}}]);