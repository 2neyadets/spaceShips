(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["081c0d32"],{2372:function(t,e,r){},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),i=r("8378"),a=r("2d00"),c=r("37c8"),o=r("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:c.f(t)})}},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"7bbc":function(t,e,r){var n=r("6821"),i=r("9093").f,a={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==a.call(t)?o(t):i(n(t))}},"85f2":function(t,e,r){t.exports=r("454f")},"8a81":function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("9e1e"),c=r("5ca1"),o=r("2aba"),s=r("67ab").KEY,u=r("79e5"),f=r("5537"),l=r("7f20"),p=r("ca5a"),h=r("2b4c"),b=r("37c8"),d=r("3a72"),y=r("d4c0"),v=r("1169"),m=r("cb7c"),g=r("d3f4"),w=r("4bf8"),O=r("6821"),S=r("6a99"),_=r("4630"),j=r("2aeb"),P=r("7bbc"),x=r("11e9"),C=r("2621"),k=r("86cc"),F=r("0d58"),$=x.f,D=k.f,E=P.f,N=n.Symbol,q=n.JSON,J=q&&q.stringify,A="prototype",M=h("_hidden"),Y=h("toPrimitive"),T={}.propertyIsEnumerable,V=f("symbol-registry"),I=f("symbols"),G=f("op-symbols"),K=Object[A],W="function"==typeof N&&!!C.f,L=n.QObject,Q=!L||!L[A]||!L[A].findChild,R=a&&u(function(){return 7!=j(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=$(K,e);n&&delete K[e],D(t,e,r),n&&t!==K&&D(K,e,n)}:D,z=function(t){var e=I[t]=j(N[A]);return e._k=t,e},B=W&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},H=function(t,e,r){return t===K&&H(G,e,r),m(t),e=S(e,!0),m(r),i(I,e)?(r.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),r=j(r,{enumerable:_(0,!1)})):(i(t,M)||D(t,M,_(1,{})),t[M][e]=!0),R(t,e,r)):D(t,e,r)},U=function(t,e){m(t);var r,n=y(e=O(e)),i=0,a=n.length;while(a>i)H(t,r=n[i++],e[r]);return t},X=function(t,e){return void 0===e?j(t):U(j(t),e)},Z=function(t){var e=T.call(this,t=S(t,!0));return!(this===K&&i(I,t)&&!i(G,t))&&(!(e||!i(this,t)||!i(I,t)||i(this,M)&&this[M][t])||e)},tt=function(t,e){if(t=O(t),e=S(e,!0),t!==K||!i(I,e)||i(G,e)){var r=$(t,e);return!r||!i(I,e)||i(t,M)&&t[M][e]||(r.enumerable=!0),r}},et=function(t){var e,r=E(O(t)),n=[],a=0;while(r.length>a)i(I,e=r[a++])||e==M||e==s||n.push(e);return n},rt=function(t){var e,r=t===K,n=E(r?G:O(t)),a=[],c=0;while(n.length>c)!i(I,e=n[c++])||r&&!i(K,e)||a.push(I[e]);return a};W||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(G,r),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),R(this,t,_(1,r))};return a&&Q&&R(K,t,{configurable:!0,set:e}),z(t)},o(N[A],"toString",function(){return this._k}),x.f=tt,k.f=H,r("9093").f=P.f=et,r("52a7").f=Z,C.f=rt,a&&!r("2d00")&&o(K,"propertyIsEnumerable",Z,!0),b.f=function(t){return z(h(t))}),c(c.G+c.W+c.F*!W,{Symbol:N});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)h(nt[it++]);for(var at=F(h.store),ct=0;at.length>ct;)d(at[ct++]);c(c.S+c.F*!W,"Symbol",{for:function(t){return i(V,t+="")?V[t]:V[t]=N(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in V)if(V[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),c(c.S+c.F*!W,"Object",{create:X,defineProperty:H,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ot=u(function(){C.f(1)});c(c.S+c.F*ot,"Object",{getOwnPropertySymbols:function(t){return C.f(w(t))}}),q&&c(c.S+c.F*(!W||u(function(){var t=N();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(g(e)||void 0!==t)&&!B(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!B(e))return e}),n[1]=e,J.apply(q,n)}}),N[A][Y]||r("32e9")(N[A],Y,N[A].valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"8e6e":function(t,e,r){var n=r("5ca1"),i=r("990b"),a=r("6821"),c=r("11e9"),o=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),s=c.f,u=i(n),f={},l=0;while(u.length>l)r=s(n,e=u[l++]),void 0!==r&&o(f,e,r);return f}})},"990b":function(t,e,r){var n=r("9093"),i=r("2621"),a=r("cb7c"),c=r("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=n.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},a274:function(t,e,r){"use strict";var n=r("2372"),i=r.n(n);i.a},c47a:function(t,e,r){var n=r("85f2");function i(t,e,r){return e in t?n(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.exports=i},cd6c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[r("StarShipCard")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return Object.keys(t.current).length>0?r("div",{staticClass:"star-ship-card q-mt-md"},[r("q-card",{staticClass:"bg-grey-9",attrs:{dark:"",bordered:""}},[r("q-card-section",[r("div",{staticClass:"text-h5 text-primary"},[t._v('"'+t._s(t.current.name)+'"')]),r("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("ships.titlesForColumns.model"))+" - "+t._s(t.current.model))]),r("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("ships.titlesForColumns.manufacturer"))+" - "+t._s(t.current.manufacturer))])]),r("q-separator",{attrs:{dark:"",inset:""}}),r("q-card-section",[r("div",{staticClass:"text-h5 q-mb-md"},[t._v(t._s(t.$t("ships.characteristics"))+":")]),r("div",{staticClass:"area"},[t._l(t.keysForCharacteristics,function(e){return[t.checkValue(t.current[e])?[r("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("ships.titlesForColumns."+e))+":")]),r("div",{staticClass:"text-subtitle2 q-mb-sm"},[t._v(t._s(t.middlewareValue(e,t.current[e])))])]:t._e()]})],2)])],1)],1):t._e()},c=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),s=r.n(o),u=r("967e"),f=r.n(u),l=(r("96cf"),r("fa84")),p=r.n(l),h=r("2f62"),b=r("b178");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){s()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var v=["cost_in_credits","length","max_atmosphering_speed","crew","passengers","cargo_capacity","consumables","hyperdrive_rating","MGLT","starship_class","pilots","films","created","edited","url"],m={name:"StarShipCard",data:function(){return{keysForCharacteristics:v}},beforeCreate:function(){var t=p()(f.a.mark(function t(){return f.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$route.params.hasOwnProperty("id")||isNaN(this.$route.params.id)){t.next=3;break}return t.next=3,this.$store.dispatch("ships/loadOneShip",this.$route.params.id);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),created:function(){},computed:y({},Object(h["b"])("ships",["current"])),methods:{checkValue:function(t){return"string"===typeof t||Array.isArray(t)&&t.length>0},middlewareValue:function(t,e){if("created"===t||"edited"===t)return b["d"].formatDate(e,"DD.MM.YYYY");if(Array.isArray(e)){for(var r="",n=0;n<e.length;n++)n!==e.length-1?r+=e[n]+", ":r+=e[n];return r}return e}}},g=m,w=(r("a274"),r("2877")),O=Object(w["a"])(g,a,c,!1,null,null,null),S=O.exports,_={name:"PageShip",components:{StarShipCard:S}},j=_,P=Object(w["a"])(j,n,i,!1,null,null,null);e["default"]=P.exports},d4c0:function(t,e,r){var n=r("0d58"),i=r("2621"),a=r("52a7");t.exports=function(t){var e=n(t),r=i.f;if(r){var c,o=r(t),s=a.f,u=0;while(o.length>u)s.call(t,c=o[u++])&&e.push(c)}return e}},f1ae:function(t,e,r){"use strict";var n=r("86cc"),i=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}}}]);