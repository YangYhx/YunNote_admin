webpackJsonp([5],{"/Zks":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("header",{staticClass:"content"},[n("div",{staticClass:"fll point",on:{click:function(e){t.$router.push("/index")}}},[t._v("云笔记")]),t._v(" "),n("el-button",{staticClass:"flr point",on:{click:t.hendle}},[t._v("写笔记")])],1)])},staticRenderFns:[]};var o={name:"App",components:{Header:n("VU/8")({name:"Header",data:function(){return{userinfo:{username:""}}},methods:{hendle:function(){this.$store.state.token?this.$router.push("/writenote"):this.$message("请先登录")}}},r,!1,function(t){n("u/UX")},"data-v-05e3dc63",null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(o,i,!1,function(t){n("/Zks")},null,null).exports,c=n("/ocq"),s=n("Y81h"),l=n.n(s);n("UVIz");a.default.use(c.a);var f={index:function(){return n.e(1).then(n.bind(null,"JXTs"))},register:function(){return n.e(2).then(n.bind(null,"NTb/"))},writenote:function(){return n.e(0).then(n.bind(null,"Guuz"))},articaldetail:function(){return n.e(3).then(n.bind(null,"Fo3B"))}},d=new c.a({routes:[{path:"/index",name:"index",component:f.index},{path:"/",redirect:"/index"},{path:"/register",name:"register",component:f.register},{path:"/writenote",name:"writenote",component:f.writenote},{path:"/articaldetail/:id",name:"articaldetail",meta:{title:"文章详情"},component:f.articaldetail}]});d.beforeEach(function(t,e,n){l.a.start(),n()}),d.afterEach(function(t,e){l.a.done()});var p=d,h=n("zL8q"),m=n.n(h),v=(n("tvR6"),n("//Fk")),g=n.n(v),w=n("mtWM"),b=n.n(w).a.create({baseURL:"/",timeout:15e3}),_={get:function(t,e,n){return new g.a(function(a,r){b.get(t,{params:e},n).then(function(t){a(t.data)}).catch(function(t){r(t)})})},fatch:function(t,e,n,a){return new g.a(function(r,o){b[a](t,e,n).then(function(t){r(t.data)}).catch(function(t){o(t)})})},post:function(t,e,n){return this.fatch(t,e,n,"post")}},x=n("NYxO"),k=n("424j");a.default.use(x.a);var I=new x.a.Store({state:{token:""},mutations:{CHANGE_TOKEN:function(t,e){t.token=e}},actions:{},plugins:[Object(k.a)({storage:{getItem:function(t){return localStorage.getItem(t)},setItem:function(t,e){return localStorage.setItem(t,e)},removeItem:function(t){return localStorage.removeItem(t)}}})]});a.default.prototype.$axios=_,a.default.config.productionTip=!1,a.default.use(m.a),new a.default({el:"#app",router:p,store:I,components:{App:u},template:"<App/>"})},UVIz:function(t,e){},tvR6:function(t,e){},"u/UX":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.93239194d7b58272c1d7.js.map