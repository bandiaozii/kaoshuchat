(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e60a83"],{"10a6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQAAAACoxAthAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAFxEAABcRAcom8z8AAADrSURBVHja7dZBDoQgDAVQ7n9pJxOCtMLouO7rRmh57H6wHa+rIQiCIMhfpKX67nt3N0MQJASoze/kcYYgyD5e2xmCIKGd1wiCPEWs7xAE2ZFRYx0jlmcIUp3EysevMwSpTt4VgiC737j8QKUnCUHKkvjg9N3vLoIgvRG/vb8NGoKUJnE8AxXxEjEEKUvmsLV5+DjydWfwEKQ0uVbmy8OEIKVJS3XHEQRZn5/YHYeXXzgEKUviIAXqjNh5FYIgKUgTxaDdRAxBypIcrsgQBBmtvL5G7OwjSHESKx7PMUsRQ5Ci5F0hCIIgyGN9ACdgsQBrqq7XAAAAAElFTkSuQmCC"},"68a7":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"toolbar"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.showForm(0)}}},[t._v("添加海报")])],1),o("el-table",{attrs:{data:t.dataList,stripe:"",size:"medium","row-key":"id","header-cell-class-name":"bg-gray"}},[o("el-table-column",{attrs:{prop:"weight",label:"权重",width:"100"}}),o("el-table-column",{attrs:{prop:"num",label:"时长",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.num)+" 个月 ")]}}])}),o("el-table-column",{attrs:{prop:"price",label:"售价",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.price)+" 元")]),e.row.market_price?o("span",{staticStyle:{"text-decoration":"line-through","margin-left":"10px",color:"#999"}},[t._v(t._s(e.row.market_price)+"元")]):t._e()]}}])}),o("el-table-column",{attrs:{prop:"sales",label:"销量",width:"100"}}),o("el-table-column",{attrs:{prop:"status",label:"是否上架",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(o){return t.setStatus(e.row.id,o)}},model:{value:e.row.status,callback:function(o){t.$set(e.row,"status",o)},expression:"scope.row.status"}})]}}])}),o("el-table-column",{attrs:{prop:"is_default",label:"是否默认",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(o){return t.setDefault(e.row.id,o)}},model:{value:e.row.is_default,callback:function(o){t.$set(e.row,"is_default",o)},expression:"scope.row.is_default"}})]}}])}),o("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},nativeOn:{click:function(o){return o.preventDefault(),t.showForm(e.row.id)}}},[t._v("编辑")]),o("el-button",{attrs:{type:"danger",icon:"el-icon-recycle",size:"mini"},nativeOn:{click:function(o){return o.preventDefault(),t.doDel(e.row.id)}}},[t._v("删除")])]}}])}),o("el-table-column",{attrs:{prop:"title",label:"备注"}})],1),o("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.dataTotal},on:{"current-change":t.pageChange}}),t.form?o("haibaoEdit",{attrs:{values:t.form},on:{close:t.closeForm,submit:t.saveInfo}}):t._e()],1)},r=[],s=o("acd9"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.form?a("div",[a("el-dialog",{attrs:{"custom-class":"my-dialog",title:t.draw.id?"编辑":"创建",width:"660px",visible:!0,"close-on-click-modal":!1,"append-to-body":!0,"before-close":t.closeForm}},[t.form?a("el-form",{ref:"qrcodeForm",staticStyle:{width:"500px",background:"#fff","min-height":"620px"},attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"背景图片",prop:"bg"}},[a("el-input",{attrs:{placeholder:"输入图片地址或上传图片",size:"small"},model:{value:t.form["bg"],callback:function(e){t.$set(t.form,"bg",e)},expression:"form['bg']"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"",data:{type:"qrcode_bg"},"http-request":t.uploadImage,"show-file-list":!1,multiple:!1}},[t.form["bg"]?a("img",{staticClass:"avatar",staticStyle:{height:"130px",width:"auto"},attrs:{src:t.form["bg"]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon",staticStyle:{width:"100px",height:"130px","line-height":"130px"}})]),a("span",[t._v("建议分辨率300dpi，CMYK或RGB都可以")])],1),a("el-form-item",{attrs:{label:"图片尺寸",prop:"bg_w"}},[a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"宽",size:"small"},model:{value:t.form["bg_w"],callback:function(e){t.$set(t.form,"bg_w",e)},expression:"form['bg_w']"}}),a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"高",size:"small"},model:{value:t.form["bg_h"],callback:function(e){t.$set(t.form,"bg_h",e)},expression:"form['bg_h']"}}),a("span",[t._v("px")])],1),a("el-form-item",{attrs:{label:"二维码孔位",prop:"hole"}},[a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"宽",size:"small"},model:{value:t.form["hole_w"],callback:function(e){t.$set(t.form,"hole_w",e)},expression:"form['hole_w']"}}),a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"高",size:"small"},model:{value:t.form["hole_h"],callback:function(e){t.$set(t.form,"hole_h",e)},expression:"form['hole_h']"}}),a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"距左",size:"small"},model:{value:t.form["hole_x"],callback:function(e){t.$set(t.form,"hole_x",e)},expression:"form['hole_x']"}}),a("el-input",{staticClass:"number",attrs:{type:"number",placeholder:"距上",size:"small"},model:{value:t.form["hole_y"],callback:function(e){t.$set(t.form,"hole_y",e)},expression:"form['hole_y']"}}),a("span",[t._v("px")])],1),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-check",size:"small"},on:{click:t.clickSubmit}},[t._v("保 存")])],1)],1):t._e(),t.form&&t.form["bg"]&&t.form["bg_w"]&&t.form["bg_h"]?a("div",{staticStyle:{position:"absolute",top:"0",left:"500px",right:"0",bottom:"0"}},[a("div",{style:"position: absolute;transform: scale("+550/t.form["bg_h"]+");left:-"+((t.form["bg_w"]-550*t.form["bg_w"]/t.form["bg_h"])/2-30)+"px;top:-"+((t.form["bg_h"]-550)/2-30)+"px;"},[a("img",{attrs:{src:t.form["bg"]}}),t.form["hole_w"]&&t.form["hole_h"]?a("img",{style:"position:absolute; width:"+t.form["hole_w"]+"px; height:"+t.form["hole_h"]+"px;left:"+(t.form["hole_x"]?t.form["hole_x"]:0)+"px; top:"+(t.form["hole_y"]?t.form["hole_y"]:0)+"px;",attrs:{src:o("10a6")}}):t._e()])]):t._e()],1)],1):t._e()},l=[],i=(o("485a"),o("71bc"),{props:{values:{type:Object,default:null}},data:function(){return{form:null,formRules:{price:[{required:!0,message:"此项必填",trigger:"blur"}],num:[{required:!0,message:"此项必填",trigger:"blur"}]}}},created:function(){this.form=this.values,this.form.weight||this.$set(this.form,"weight",100)},methods:{closeForm:function(){this.$emit("close")},doSubmit:function(){var t=this;this.$refs.form.validate((function(e){e?t.$emit("submit",t.form):t.$message.error("请填写必填项")}))}}}),u=i,c=o("3427"),m=Object(c["a"])(u,n,l,!1,null,null,null),f=m.exports,d={components:{haibaoEdit:f},data:function(){return{dataList:[],pagesize:10,page:1,dataTotal:0,form:null}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;Object(s["d"])({page:this.page}).then((function(e){t.dataList=e.data.list,t.dataTotal=e.data.count}))},pageChange:function(t){this.page=t,this.getList()},showForm:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e?Object(s["c"])({id:e}).then((function(e){t.form=e.data})):this.form={}},closeForm:function(){this.form=null},saveInfo:function(t){var e=this;Object(s["g"])(t).then((function(t){e.getList(),e.$message.success(t.message),e.closeForm()}))},doDel:function(t){var e=this;this.$confirm("删除不影响已生成的海报，确认删除吗?","提示",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["a"])({id:t}).then((function(t){e.getList(),e.$message.success(t.message)}))}))},setStatus:function(t,e){var o=this;Object(s["j"])({id:t,status:e}).then((function(t){o.getList(),o.$message.success(t.message)}))},setDefault:function(t,e){var o=this;Object(s["i"])({id:t,is_default:e}).then((function(t){o.getList(),o.$message.success(t.message)}))}}},p=d,h=(o("747c"),Object(c["a"])(p,a,r,!1,null,"06572f14",null));e["default"]=h.exports},"747c":function(t,e,o){"use strict";o("79b0")},"79b0":function(t,e,o){},acd9:function(t,e,o){"use strict";o.d(e,"f",(function(){return r})),o.d(e,"e",(function(){return s})),o.d(e,"h",(function(){return n})),o.d(e,"b",(function(){return l})),o.d(e,"l",(function(){return i})),o.d(e,"k",(function(){return u})),o.d(e,"d",(function(){return c})),o.d(e,"c",(function(){return m})),o.d(e,"g",(function(){return f})),o.d(e,"a",(function(){return d})),o.d(e,"j",(function(){return p})),o.d(e,"i",(function(){return h}));var a=o("b775");function r(t){return Object(a["a"])({url:"/share/getTextList",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/share/getTextInfo",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/share/saveTextInfo",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/share/delText",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/share/setTextStatus",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/share/setTextDefault",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/share/getHaibaoList",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/share/getHaibaoInfo",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/share/saveHaibaoInfo",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/share/delHaibao",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/share/setHaibaoStatus",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/share/setHaibaoDefault",method:"post",data:t})}}}]);