(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"list",function(){return P}),n.d(r,"count",function(){return S}),n.d(r,"currentPage",function(){return j}),n.d(r,"previousPage",function(){return C}),n.d(r,"nextPage",function(){return _}),n.d(r,"current",function(){return F});var a={};n.r(a),n.d(a,"setCurrentListOfShips",function(){return L}),n.d(a,"setCountOfShips",function(){return A}),n.d(a,"setCurrentPage",function(){return N}),n.d(a,"setNumberOfPreviousOrNextPage",function(){return T}),n.d(a,"setValuesForShips",function(){return V}),n.d(a,"setCurrentShip",function(){return q});var u={};n.r(u),n.d(u,"loadCurrentListOfShips",function(){return U}),n.d(u,"loadOneShip",function(){return D});var i={};n.r(i),n.d(i,"getOneFilmTitle",function(){return ee});var s={};n.r(s),n.d(s,"getOnePilotName",function(){return re});var c=n("967e"),o=n.n(c),p=(n("96cf"),n("fa84")),l=n.n(p),f=(n("5c7d"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),h=n("14c0"),d=n("b178");f["a"].use(d["e"],{config:{loading:{spinner:"QSpinnerPuff",spinnerColor:"primary"}},lang:h["a"]});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],x={name:"App"},b=x,g=n("2877"),w=Object(g["a"])(b,v,m,!1,null,null,null),y=w.exports,k=n("2f62"),O={list:null,count:null,currentPage:null,previousPage:null,nextPage:null,current:null},P=function(e){return e.list||[]},S=function(e){return e.count||0},j=function(e){return e.currentPage},C=function(e){return e.previousPage},_=function(e){return e.nextPage},F=function(e){return e.current||{}};n("a481"),n("c5f6");function L(e,t){e.list=t}function A(e,t){e.count=t}function N(e,t){e.currentPage=t}function T(e,t,n){e[n]=t?Number(t.replace("https://swapi.co/api/starships/?page=","")):t}function V(e,t){L(e,t.results),A(e,t.count),T(e,t.previous,"previousPage"),T(e,t.next,"nextPage")}function q(e,t){e.current=t}n("2fdb"),n("7514"),n("6762"),n("ac4d"),n("8a81"),n("551c"),n("ac6a"),n("cadf"),n("06db"),n("5df3");var $=n("bc3a"),E=n.n($),G=E.a.create({baseURL:"https://swapi.co/api",timeout:3e4});G.defaults.headers.post["Content-Type"]="application/json",G.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),G.interceptors.response.use(function(e){return e},function(e){var t=e.response;if(t)return t.data&&t.data.errors&&(Array.isArray(t.data.errors)?t.data.errors.forEach(function(e){d["c"].create({message:e.message,color:"negative",position:"bottom-left",icon:"warning"})}):d["c"].create({message:t.data.errors.message,color:"negative",position:"bottom-left",icon:"warning"})),Promise.reject(t.data)});var J=G,M={getCurrentListOfShips:function(){var e=l()(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.page,r=void 0===n?1:n,e.prev=1,e.next=4,J.get("starships",{params:{page:r}});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));function t(t){return e.apply(this,arguments)}return t}(),getOneShip:function(){var e=l()(o.a.mark(function e(t){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.get("starships/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}()},Q={getOneFilm:function(){var e=l()(o.a.mark(function e(t){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.get("films/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}()},B={getOnePilot:function(){var e=l()(o.a.mark(function e(t){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.get("people/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}()},I={ships:M,films:Q,people:B},R=n("2fa3");function U(e,t){return z.apply(this,arguments)}function z(){return z=l()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setCurrentPage",n.page),d["a"].show(),e.next=4,I.ships.getCurrentListOfShips(n);case 4:return r=e.sent,e.next=7,K(t,r.data.results);case 7:d["a"].hide(),t.commit("setValuesForShips",r.data);case 9:case"end":return e.stop()}},e)})),z.apply(this,arguments)}function D(e,t){return H.apply(this,arguments)}function H(){return H=l()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setCurrentShip",null),d["a"].show(),e.next=4,I.ships.getOneShip(n);case 4:return r=e.sent,e.next=7,X(t,r.data);case 7:d["a"].hide(),t.commit("setCurrentShip",r.data);case 9:case"end":return e.stop()}},e)})),H.apply(this,arguments)}function K(e,t){return W.apply(this,arguments)}function W(){return W=l()(o.a.mark(function e(t,n){var r,a,u,i,s,c,p,l,f,h,d,v,m,x,b,g,w,y,k,O,P,S,j,C,_,F,L,A,N;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=n.map(function(e){return{films:e.films.map(function(e){return Object(R["a"])(e)}),pilots:e.pilots.map(function(e){return Object(R["a"])(e)})}}),a=[],u=[],i=!0,s=!1,c=void 0,e.prev=6,p=r[Symbol.iterator]();case 8:if(i=(l=p.next()).done){e.next=51;break}for(f=l.value,h=!0,d=!1,v=void 0,e.prev=13,m=f.films[Symbol.iterator]();!(h=(x=m.next()).done);h=!0)b=x.value,a.includes(b)||a.push(b);e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](13),d=!0,v=e.t0;case 21:e.prev=21,e.prev=22,h||null==m.return||m.return();case 24:if(e.prev=24,!d){e.next=27;break}throw v;case 27:return e.finish(24);case 28:return e.finish(21);case 29:for(g=!0,w=!1,y=void 0,e.prev=32,k=f.pilots[Symbol.iterator]();!(g=(O=k.next()).done);g=!0)P=O.value,u.includes(P)||u.push(P);e.next=40;break;case 36:e.prev=36,e.t1=e["catch"](32),w=!0,y=e.t1;case 40:e.prev=40,e.prev=41,g||null==k.return||k.return();case 43:if(e.prev=43,!w){e.next=46;break}throw y;case 46:return e.finish(43);case 47:return e.finish(40);case 48:i=!0,e.next=8;break;case 51:e.next=57;break;case 53:e.prev=53,e.t2=e["catch"](6),s=!0,c=e.t2;case 57:e.prev=57,e.prev=58,i||null==p.return||p.return();case 60:if(e.prev=60,!s){e.next=63;break}throw c;case 63:return e.finish(60);case 64:return e.finish(57);case 65:return S=a.map(function(e){return t.dispatch("films/getOneFilmTitle",e,{root:!0})}),j=u.map(function(e){return t.dispatch("people/getOnePilotName",e,{root:!0})}),e.next=69,Promise.all(S);case 69:return C=e.sent,e.next=72,Promise.all(j);case 72:for(_=e.sent,F=C.map(function(e,t){return{index:a[t],title:e}}),L=_.map(function(e,t){return{index:u[t],title:e}}),A=function(e){for(var t=function(t){n[e].films[t]=F.find(function(r){return r.index===Object(R["a"])(n[e].films[t])}).title},r=0;r<n[e].films.length;r++)t(r);var a=function(t){n[e].pilots[t]=L.find(function(r){return r.index===Object(R["a"])(n[e].pilots[t])}).title};for(r=0;r<n[e].pilots.length;r++)a(r)},N=0;N<n.length;N++)A(N);case 77:case"end":return e.stop()}},e,null,[[6,53,57,65],[13,17,21,29],[22,,24,28],[32,36,40,48],[41,,43,47],[58,,60,64]])})),W.apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return Y=l()(o.a.mark(function e(t,n){var r,a,u,i,s,c,p,l,f,h,d,v,m,x,b,g,w,y,k,O,P,S,j;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=[],a=[],u=!0,i=!1,s=void 0,e.prev=5,c=n.films[Symbol.iterator]();!(u=(p=c.next()).done);u=!0)l=p.value,r.includes(Object(R["a"])(l))||r.push(Object(R["a"])(l));e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](5),i=!0,s=e.t0;case 13:e.prev=13,e.prev=14,u||null==c.return||c.return();case 16:if(e.prev=16,!i){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:for(f=!0,h=!1,d=void 0,e.prev=24,v=n.pilots[Symbol.iterator]();!(f=(m=v.next()).done);f=!0)x=m.value,a.includes(Object(R["a"])(x))||a.push(Object(R["a"])(x));e.next=32;break;case 28:e.prev=28,e.t1=e["catch"](24),h=!0,d=e.t1;case 32:e.prev=32,e.prev=33,f||null==v.return||v.return();case 35:if(e.prev=35,!h){e.next=38;break}throw d;case 38:return e.finish(35);case 39:return e.finish(32);case 40:return b=r.map(function(e){return t.dispatch("films/getOneFilmTitle",e,{root:!0})}),g=a.map(function(e){return t.dispatch("people/getOnePilotName",e,{root:!0})}),e.next=44,Promise.all(b);case 44:return w=e.sent,e.next=47,Promise.all(g);case 47:for(y=e.sent,k=w.map(function(e,t){return{index:r[t],title:e}}),O=y.map(function(e,t){return{index:a[t],title:e}}),P=function(e){n.films[e]=k.find(function(t){return t.index===Object(R["a"])(n.films[e])}).title},S=0;S<n.films.length;S++)P(S);for(j=function(e){n.pilots[e]=O.find(function(t){return t.index===Object(R["a"])(n.pilots[e])}).title},S=0;S<n.pilots.length;S++)j(S);case 54:case"end":return e.stop()}},e,null,[[5,9,13,21],[14,,16,20],[24,28,32,40],[33,,35,39]])})),Y.apply(this,arguments)}var Z={namespaced:!0,getters:r,mutations:a,actions:u,state:O};function ee(e,t){return te.apply(this,arguments)}function te(){return te=l()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I.films.getOneFilm(n);case 2:return r=e.sent,e.abrupt("return",r.data.title);case 4:case"end":return e.stop()}},e)})),te.apply(this,arguments)}var ne={namespaced:!0,actions:i};n("7f7f");function re(e,t){return ae.apply(this,arguments)}function ae(){return ae=l()(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I.people.getOnePilot(n);case 2:return r=e.sent,e.abrupt("return",r.data.name);case 4:case"end":return e.stop()}},e)})),ae.apply(this,arguments)}var ue={namespaced:!0,actions:s};f["a"].use(k["a"]);var ie=function(){var e=new k["a"].Store({modules:{ships:Z,films:ne,people:ue}});return e},se=n("8c4f"),ce=[{path:"/",component:function(){return n.e("2d22c0ff").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("db0d0eb0").then(n.bind(null,"8b24"))}},{path:":id/",component:function(){return n.e("30479102").then(n.bind(null,"cd6c"))}}]}];ce.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var oe=ce;f["a"].use(se["a"]);var pe=function(){var e=new se["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:oe,mode:"history",base:"/spaceShips/"});return e},le=function(){var e="function"===typeof ie?ie({Vue:f["a"]}):ie,t="function"===typeof pe?pe({Vue:f["a"],store:e}):pe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(y)}};return{app:n,store:e,router:t}},fe=n("8847"),he=function(){var e=l()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=E.a;case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),de=le(),ve=de.app,me=de.store,xe=de.router;function be(){return ge.apply(this,arguments)}function ge(){return ge=l()(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[fe["a"],he],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:ve,router:xe,store:me,Vue:f["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new f["a"](ve);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),ge.apply(this,arguments)}be()},"2fa3":function(e,t,n){"use strict";n.d(t,"a",function(){return r});n("28a5");function r(e){var t=e.split("/");return t[t.length-2]}},"7e6d":function(e,t,n){},8847:function(e,t,n){"use strict";var r=n("2b0e"),a=n("a925"),u={failed:"Action failed",success:"Action was successful"},i={title:"Интерфейс для взаимодействия с галактической базой",titlesForColumns:{name:"Название",model:"Модель",manufacturer:"Производитель",cost_in_credits:"Стоимость",length:"Длина",max_atmosphering_speed:"Максимальная скорость",crew:"Экипаж",passengers:"Пассажиры",cargo_capacity:"Грузоподъемность",consumables:"Расходные материалы",hyperdrive_rating:"Рейтинг гипердвигателя",MGLT:"MGLT",starship_class:"Класс",pilots:"Пилоты",films:"Фильмы",created:"Создан",edited:"Изменён",url:"Ссылка на API"},search:"Поиск",characteristics:"Характеристики"},s={ships:i},c={"en-us":u,ru:s};n.d(t,"b",function(){return o}),r["a"].use(a["a"]);var o=new a["a"]({locale:"ru",fallbackLocale:"ru",messages:c});t["a"]=function(e){var t=e.app;t.i18n=o}}},[[0,"runtime","vendor"]]]);