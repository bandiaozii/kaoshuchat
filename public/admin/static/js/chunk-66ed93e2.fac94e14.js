(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ed93e2"],{"3d53":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4dfb7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.clickCreate}},[t._v("生成卡密")]),a("div",{staticStyle:{float:"right"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"240px"},attrs:{placeholder:"搜备注",size:"small",clearable:""},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.doSearch()}},slot:"append"})],1)],1)],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","header-cell-class-name":"bg-gray"}},[a("el-table-column",{attrs:{prop:"id",label:"批次ID",width:"80"}}),a("el-table-column",{attrs:{prop:"create_time",label:"生成时间",width:"150"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v("次数")]):t._e(),"vip"===e.row.type?a("span",[t._v("时长")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"val",label:"面额",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v(t._s(e.row.val)+"条")]):t._e(),"vip"===e.row.type?a("span",[t._v(t._s(e.row.val)+"个月")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"num",label:"总数量",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"used",label:"已使用",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"220"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showCardList(e.row.id)}}},[a("i",{staticClass:"el-icon-view"}),t._v(" 查看 ")]),a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.clickDel(e.row.id)}}},[t._v("删除 ")])],1)]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:"生成卡密",visible:!0,width:"500px","close-on-click-modal":!1,"before-close":t.closeForm}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"卡密类型",prop:"type"}},[a("el-radio-group",{model:{value:t.form["type"],callback:function(e){t.$set(t.form,"type",e)},expression:"form['type']"}},[a("el-radio",{staticStyle:{margin:"0 20px 5px 0"},attrs:{label:"times",size:"mini"}},[t._v("次数")]),a("el-radio",{attrs:{label:"vip",size:"mini"}},[t._v("时长")])],1)],1),"times"===t.form.type?a("el-form-item",{attrs:{label:"条数",prop:"val"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"填入整数",size:"small"},model:{value:t.form.val,callback:function(e){t.$set(t.form,"val",e)},expression:"form.val"}}),a("span",{staticClass:"tips"},[t._v(" 条")])],1):t._e(),"vip"===t.form.type?a("el-form-item",{attrs:{label:"时长",prop:"val"}},[a("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"填入整数",size:"small"},model:{value:t.form.val,callback:function(e){t.$set(t.form,"val",e)},expression:"form.val"}}),a("span",{staticClass:"tips"},[t._v(" 个月")])],1):t._e(),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{staticStyle:{width:"300px","max-width":"100%"},attrs:{type:"textarea",placeholder:"备注必填",size:"small"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:"生成数量",prop:"num"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"1 - 2000",size:"small"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e(),t.batch_id?a("batch-list",{attrs:{"batch-id":t.batch_id},on:{close:t.closeCardList}}):t._e()],1)},i=[],r=(a("c36d"),a("7a70"),a("7381")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-drawer",{attrs:{title:"卡密管理",visible:t.dataList.length>0,direction:"rtl",size:"850px","close-on-click-modal":!1,"before-close":t.closeList},on:{"update:visible":function(e){return t.$set(t.dataList,"length > 0",e)}}},[a("div",{staticStyle:{padding:"0 20px"}},[a("div",{staticClass:"dialog-toolbar",staticStyle:{"padding-bottom":"20px"}},[a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{loading:t.exportLoading,type:"primary",icon:"el-icon-download",size:"mini"},on:{click:t.doExport}},[t._v("导出Excel")]),a("el-checkbox",{model:{value:t.downUnbind,callback:function(e){t.downUnbind=e},expression:"downUnbind"}},[t._v("只导出未使用")])],1),a("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium"}},[a("el-table-column",{attrs:{property:"id",label:"ID",width:"60"}}),a("el-table-column",{attrs:{property:"code",label:"卡密",width:"120"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v("次数")]):t._e(),"vip"===e.row.type?a("span",[t._v("时长")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"val",label:"面额",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["times"===e.row.type?a("span",[t._v(t._s(e.row.val)+"条")]):t._e(),"vip"===e.row.type?a("span",[t._v(t._s(e.row.val)+"个月")]):t._e()]}}])}),a("el-table-column",{attrs:{property:"bind_time",label:"使用时间",width:"160"}}),a("el-table-column",{attrs:{label:"使用者",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_id?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{staticStyle:{height:"24px","margin-right":"5px"},attrs:{src:e.row.user.avatar}}),t._v(" "+t._s(e.row.user.nickname||"无昵称")+" [ID:"+t._s(e.row.user_id)+"] ")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.user_id?a("el-button",{attrs:{type:"text text-danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(a){return a.preventDefault(),t.unbind(e.row.id)}}},[t._v("设为未使用 ")]):t._e()]}}])})],1),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}})],1)])],1)},s=[],l=(a("1a7c"),a("485a"),a("28de"),a("71bc"),a("32c9"),{props:{batchId:{type:Number,default:0}},data:function(){return{dataList:null,dataTotal:0,page:1,pagesize:100,downUnbind:!1,exportLoading:!1}},mounted:function(){this.getList()},methods:{closeList:function(){var t=this;this.dataList=null,setTimeout((function(){t.$emit("close")}),200)},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},getList:function(){var t=this;Object(r["c"])({batch_id:this.batchId,page:this.page,pagesize:this.pagesize}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},unbind:function(t){var e=this;this.$confirm("确认设为未使用吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["g"])({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},doExport:function(){var t=this;this.exportLoading=!0,Object(r["d"])({batch_id:this.batchId,unbind:this.downUnbind?1:0}).then((function(e){Promise.all([a.e("chunk-253bf6cc"),a.e("chunk-6fbc092e")]).then(a.bind(null,"4bf8")).then((function(a){var n="卡密["+t.batchId+"]",i=["ID","生成时间","卡密","类型","面额","使用时间","使用者ID"],r=["id","create_time","code","type","val","bind_time","user_id"],o=e.data,s=t.formatJson(r,o);a.export_json_to_excel({header:i,data:s,filename:n,autoWidth:!0,bookType:"xlsx"}),t.exportLoading=!1}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}}),c=l,u=(a("aab90"),a("3427")),d=Object(u["a"])(c,o,s,!1,null,"756a5b8e",null),p=d.exports,m={components:{batchList:p},data:function(){return{batch_id:0,form:null,search:{},agentList:null,dataList:[],dataTotal:0,page:1,pagesize:15,formRules:{type:[{required:!0,message:"此项必填",trigger:"blur"}],val:[{required:!0,message:"此项必填",trigger:"blur"}],num:[{required:!0,message:"此项必填",trigger:"blur"}],remark:[{required:!0,message:"此项必填",trigger:"blur"}]},cardListShow:!1}},created:function(){this.getBatchList()},methods:{getBatchList:function(){var t=this;Object(r["e"])({page:this.page,pagesize:this.pagesize,keyword:this.search.keyword}).then((function(e){var a=e.data;t.dataList=a.list,t.dataTotal=e.data.count}))},tableIndex:function(t){return this.pagesize*(this.page-1)+t+1},pageChange:function(t){this.page=t,this.getBatchList()},clickCreate:function(){this.form={}},closeForm:function(){this.form=null},showCardList:function(t){this.batch_id=t,this.cardListShow=!0},closeCardList:function(){this.batch_id=0,this.cardListShow=!1},doSubmit:function(t){var e=this;this.$refs.form.validate((function(t){t&&Object(r["b"])(e.form).then((function(t){e.page=1,e.getBatchList(),e.$message({message:t.message,type:"success",duration:1500}),e.closeForm()}))}))},clickDel:function(t){var e=this;this.$confirm("此操作将删除此批次的所有卡密","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["a"])({id:t}).then((function(t){t.errno?e.$message({message:t.message,type:"error"}):(e.getBatchList(),e.$message({message:t.message,type:"success",duration:1500}))}))}))},doSearch:function(){this.page=1,this.getBatchList()}}},f=m,h=(a("7fdd"),Object(u["a"])(f,n,i,!1,null,"220d5405",null));e["default"]=h.exports},"6bb0":function(t,e,a){},7381:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return u}));var n=a("b775");function i(t){return Object(n["a"])({url:"/card/getBatchList",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/card/createBatch",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/card/getBatchCard",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/card/batchDel",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/card/unbind",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/card/getCardLogs",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/card/getBatchExport",method:"post",data:t})}},"7a70":function(t,e,a){"use strict";var n=a("10b0"),i=a("e67f"),r=a("2f89"),o=a("4b5b"),s=a("57eb"),l=a("3d53"),c=a("f8b7"),u=a("5de4"),d=a("4f00");i("search",(function(t,e,a){return[function(e){var a=s(this),i=o(e)?void 0:u(e,t);return i?n(i,e,a):new RegExp(e)[t](c(a))},function(t){var n=r(this),i=c(t),o=a(e,n,i);if(o.done)return o.value;var s=n.lastIndex;l(s,0)||(n.lastIndex=0);var u=d(n,i);return l(n.lastIndex,s)||(n.lastIndex=s),null===u?-1:u.index}]}))},"7c2c":function(t,e,a){},"7fdd":function(t,e,a){"use strict";a("7c2c")},aab90:function(t,e,a){"use strict";a("6bb0")}}]);