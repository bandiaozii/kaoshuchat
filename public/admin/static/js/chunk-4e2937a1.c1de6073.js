(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e2937a1"],{"4bfc":function(e,t,u){},"7a38":function(e,t,u){"use strict";u("c729")},8882:function(e,t,u){"use strict";u.r(t);var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},n=[],s=u("978a"),r={components:{sidebar:s["a"]},data:function(){return{moduleName:"充值套餐",submenus:[{title:"对话套餐",routeName:"ModuleChargeGoods",routeQuery:{}},{title:"vip套餐",routeName:"ModuleChargeVip",routeQuery:{}}]}},methods:{}},o=r,i=(u("b589"),u("3427")),l=Object(i["a"])(o,a,n,!1,null,"5a7f1362",null);t["default"]=l.exports},"978a":function(e,t,u){"use strict";var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,a){return u("li",{key:a,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},n=[],s=u("4a60"),r=(u("1a7c"),u("5f17"),u("c36d"),u("19e4"),u("6db4")),o={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},i=o,l=(u("7a38"),u("3427")),c=Object(l["a"])(i,a,n,!1,null,"69562c9a",null);t["a"]=c.exports},b589:function(e,t,u){"use strict";u("4bfc")},c729:function(e,t,u){}}]);