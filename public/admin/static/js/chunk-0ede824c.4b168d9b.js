(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ede824c"],{"1c91":function(t,e,s){},2654:function(t,e,s){"use strict";s("1c91")},3558:function(t,e,s){},"90a1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"toolbar"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showForm(0)}}},[t._v("新增对话套餐")])],1),s("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","row-key":"id","header-cell-class-name":"bg-gray"}},[s("el-table-column",{attrs:{prop:"weight",label:"权重",width:"100"}}),s("el-table-column",{attrs:{prop:"num",label:"条数",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.num)+" 条 ")]}}])}),s("el-table-column",{attrs:{prop:"price",label:"售价",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.price)+" 元")]),e.row.market_price?s("span",{staticStyle:{"text-decoration":"line-through","margin-left":"10px",color:"#999"}},[t._v(t._s(e.row.market_price)+"元")]):t._e()]}}])}),s("el-table-column",{attrs:{prop:"sales",label:"销量",width:"100"}}),s("el-table-column",{attrs:{prop:"status",label:"是否上架",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(s){return t.setStatus(e.row.id,s)}},model:{value:e.row.status,callback:function(s){t.$set(e.row,"status",s)},expression:"scope.row.status"}})]}}])}),s("el-table-column",{attrs:{prop:"is_default",label:"是否默认",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(s){return t.setDefault(e.row.id,s)}},model:{value:e.row.is_default,callback:function(s){t.$set(e.row,"is_default",s)},expression:"scope.row.is_default"}})]}}])}),s("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},nativeOn:{click:function(s){return s.preventDefault(),t.showForm(e.row.id)}}},[t._v("编辑")]),s("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(s){return s.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])}),s("el-table-column",{attrs:{prop:"title",label:"备注"}})],1),s("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.goods?s("edit",{attrs:{goods:t.goods},on:{close:t.closeForm,submit:t.saveInfo}}):t._e()],1)},a=[],i=s("b775");function l(t){return Object(i["a"])({url:"/goods/getList",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/goods/getInfo",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/goods/saveInfo",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/goods/del",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/goods/setStatus",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/goods/setDefault",method:"post",data:t})}var m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.form?s("div",[s("el-dialog",{attrs:{"custom-class":"my-dialog",title:t.goods.id?"编辑":"创建",width:"660px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"160px"}},[s("el-form-item",{attrs:{label:"权重",prop:"weight"}},[s("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"越大越靠前",size:"small"},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}}),s("span",{staticClass:"tips"},[t._v("越大越靠前")])],1),s("el-form-item",{attrs:{label:"包含条数",prop:"num"}},[s("el-input",{staticStyle:{width:"110px"},attrs:{placeholder:"填入整数",size:"small"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}}),s("span",{staticClass:"tips"},[t._v(" 条")])],1),s("el-form-item",{attrs:{label:"售价",prop:"price"}},[s("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"实际售价",size:"small"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}}),s("span",{staticClass:"tips"},[t._v(" 元")])],1),s("el-form-item",{attrs:{label:"市场价（划线价）",prop:"market_price"}},[s("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"划线价格",size:"small"},model:{value:t.form.market_price,callback:function(e){t.$set(t.form,"market_price",e)},expression:"form.market_price"}}),s("span",{staticClass:"tips"},[t._v(" 元")])],1),s("el-form-item",{attrs:{label:"本套餐优势",prop:"hint"}},[s("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"",size:"small"},model:{value:t.form.hint,callback:function(e){t.$set(t.form,"hint",e)},expression:"form.hint"}}),s("p",{staticStyle:{margin:"0",color:"#999"}},[t._v("不超过10个字，例如：最多人买、性价比最高")])],1),s("el-form-item",{attrs:{label:"权益描述",prop:"desc"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{rows:5,type:"textarea",placeholder:"一行一条",size:"small"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}}),s("p",{staticStyle:{margin:"0",color:"#999"}},[t._v("一行一条")])],1),s("el-form-item",{attrs:{label:"备注",prop:"title"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{rows:3,type:"textarea",placeholder:"备注",size:"small"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"default",icon:"el-icon-close",size:"small"},on:{click:t.closeForm}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.doSubmit}},[t._v("提 交")])],1)],1)],1):t._e()},d=[],f={props:{goods:{type:Object,default:null}},data:function(){return{form:null,formRules:{price:[{required:!0,message:"此项必填",trigger:"blur"}],num:[{required:!0,message:"此项必填",trigger:"blur"}]}}},created:function(){this.form=this.goods,this.form.weight||this.$set(this.form,"weight",100)},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?t.$emit("submit",t.form):t.$message.error("请填写必填项")}))}}},h=f,g=(s("d9e4e"),s("3427")),b=Object(g["a"])(h,m,d,!1,null,"33fd1890",null),v=b.exports,w={components:{edit:v},data:function(){return{type:"qiche",dataList:[],pagesize:10,page:1,dataTotal:0,goods:null}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;l({type:this.type,page:this.page}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},showForm:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?r({id:e}).then((function(e){t.goods=e.data})):this.goods={}},closeForm:function(){this.goods=null},saveInfo:function(t){var e=this;n(t).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500}),e.closeForm()}))},doDel:function(t){var e=this;this.$confirm("删除后不可恢复，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){c({id:t}).then((function(t){e.getList(),e.$message({message:t.message,type:"success",duration:1500})}))}))},setStatus:function(t,e){var s=this;u({id:t,status:e}).then((function(t){s.getList(),s.$message({message:t.message,type:"success",duration:1500})}))},setDefault:function(t,e){var s=this;p({id:t,is_default:e}).then((function(t){s.getList(),s.$message({message:t.message,type:"success",duration:1500})}))}}},y=w,_=(s("2654"),Object(g["a"])(y,o,a,!1,null,"7415adf9",null));e["default"]=_.exports},d9e4e:function(t,e,s){"use strict";s("3558")}}]);