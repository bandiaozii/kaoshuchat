(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c6c8588"],{"210b":function(e,t,u){"use strict";u("b244")},"7bdc":function(e,t,u){"use strict";u("e956")},"8a61":function(e,t,u){"use strict";u.r(t);var n=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("sidebar",{attrs:{menus:e.submenus,"module-name":e.moduleName}}),u("router-view",{attrs:{name:"subRouter"}})],1)},s=[],a=function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",{staticClass:"submenu",class:{collapsed:e.isCollapse},style:"width:"+e.width+"px;"},[u("div",{staticClass:"module-name"},[e._v(e._s(e.moduleName))]),u("ul",{staticClass:"list-group"},e._l(e.menus,(function(t,n){return u("li",{key:n,staticClass:"list-item",class:{active:e.routeName===t.routeName},on:{click:function(u){return e.linkto(t.routeName,t.routeQuery)}}},[e._v(" "+e._s(t.title))])})),0)])},r=[],i=u("4a60"),o=(u("1a7c"),u("5f17"),u("c36d"),u("19e4"),u("6db4")),l={props:{menus:{type:Array,default:null},moduleName:{type:String,default:""},width:{type:Number,default:110}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["sidebar"])),{},{isCollapse:function(){return!this.sidebar.opened},routeName:function(){return this.$route.name}}),methods:{linkto:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.replace({name:e,query:t})}}},c=l,d=(u("210b"),u("3427")),m=Object(d["a"])(c,a,r,!1,null,"439df41a",null),b=m.exports,f={components:{sidebar:b},data:function(){return{moduleName:"邀请奖励",submenus:[{title:"参数配置",routeName:"RewardInviteSetting",routeQuery:{}},{title:"邀请记录",routeName:"RewardInviteLogs",routeQuery:{}}]}},methods:{}},p=f,v=(u("7bdc"),Object(d["a"])(p,n,s,!1,null,"4d1d053e",null));t["default"]=v.exports},b244:function(e,t,u){},e956:function(e,t,u){}}]);