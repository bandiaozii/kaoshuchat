(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39666534"],{"1f16":function(e,t,u){"use strict";u("5ee4")},"5ee4":function(e,t,u){},"7a38":function(e,t,u){"use strict";u("c729")},"978a":function(e,t,u){"use strict";var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,a){return u("li",{key:a,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},r=[],s=u("4a60"),n=(u("f4e0"),u("6eb6"),u("592a"),u("3404"),u("6db4")),o={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},i=o,l=(u("7a38"),u("3427")),c=Object(l["a"])(i,a,r,!1,null,"69562c9a",null);t["a"]=c.exports},c729:function(e,t,u){},cacf:function(e,t,u){"use strict";u.r(t);var a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},r=[],s=u("978a"),n={components:{sidebar:s["a"]},data:function(){return{moduleName:"AI文本创作",submenus:[{title:"创作记录",routeName:"ModuleWriteMsg",routeQuery:{}},{title:"模型管理",routeName:"ModuleWritePrompts",routeQuery:{}},{title:"类别管理",routeName:"ModuleWriteTopic",routeQuery:{}}]}},methods:{}},o=n,i=(u("1f16"),u("3427")),l=Object(i["a"])(o,a,r,!1,null,"1ad19816",null);t["default"]=l.exports}}]);