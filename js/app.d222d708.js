(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"133e":function(t,e,i){"use strict";i("f449")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"body container border-2 border-red-300 mx-auto"},[t._m(0),s("div",{staticClass:"board border-2 border-red-300 p-4 pb-0 text-4xl font-bold text-center"},[t.displayA?s("div",{staticClass:"peanut flex flex-col justify-center"},[s("img",{attrs:{src:i("d859"),alt:""}}),t._m(1)]):t._e(),t.displayB?s("div",{staticClass:"blackmi flex flex-col justify-center"},[s("img",{attrs:{src:i("642d"),alt:""}}),t._m(2)]):t._e()]),t._l(t.countAll,(function(e,i){return s("div",{key:i,staticClass:"board border-2 border-red-300 p-4 flex justify-between text-2xl font-bold text-center"},[s("h3",[t._v("total:"),s("span",{staticClass:"text-4xl text-red-500 font-bold"},[t._v(t._s(e.peanut))])]),s("h3",[t._v("total:"),s("span",{staticClass:"text-4xl text-red-500 font-bold"},[t._v(t._s(e.blackmi))])])])})),s("div",{staticClass:"board border-2 border-red-300 p-4 pb-0 flex justify-between text-4xl font-bold text-center"},[s("h2",[t._v("花生派"),s("br"),s("span",{staticClass:"m-16 my-8 block"},[t._v(t._s(t.countA))])]),s("h2",[t._v("芝麻派"),s("span",{staticClass:"m-16 my-8 block"},[t._v(t._s(t.countB))])])]),s("div",{staticClass:"clickGroup flex justify-between "},[s("div",{staticClass:"section "},[s("div",{staticClass:"clickimg border-2 border-blue-300",on:{click:t.counterA}},[s("img",{staticClass:"imgOne mx-auto",attrs:{src:i("b603"),alt:""}}),s("img",{staticClass:"imgTwo ",attrs:{src:i("c7bd"),alt:""}})])]),s("div",{staticClass:"section "},[s("div",{staticClass:"clickimg border-2 border-blue-300",on:{click:t.counterB}},[s("img",{staticClass:"imgOne mx-auto",attrs:{src:i("b603"),alt:""}}),s("img",{staticClass:"imgTwo ",attrs:{src:i("c7bd"),alt:""}})])])])],2)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("h1",{staticClass:"title text-4xl font-bold bg-white px-4 py-2"},[t._v("開放里湯圓 pop")]),s("img",{staticClass:"dum",attrs:{src:i("8583"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"p-2 text-4xl mx-auto "},[i("span",{staticClass:"font-bold text-6xl py-2"},[t._v("花生"),i("br"),t._v("(✪ω✪) ")]),t._v(" Win")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"p-2 text-4xl mx-auto "},[i("span",{staticClass:"font-bold text-6xl py-2"},[t._v("芝麻"),i("br"),t._v("(๑´ڡ`๑) ")]),t._v(" Win")])}],o=i("260b"),r=(i("e71f"),{apiKey:"AIzaSyBoiKYz6V5GX5hETtNVoSVE8IT9nkRLlBI",authDomain:"popclick-255b7.firebaseapp.com",projectId:"popclick-255b7",storageBucket:"popclick-255b7.appspot.com",messagingSenderId:"833348332836",appId:"1:833348332836:web:dfcc11ec497676cf6b57b1"}),c=o["a"].initializeApp(r).firestore(),l=o["a"].firestore;l.Timestamp,l.GeoPoint;c.settings({timestampsInSnapshots:!0});var u={data:function(){return{deta:[],countAll:[],countA:0,countB:0,displayA:!1,displayB:!1}},firestore:function(){return{countAll:c.collection("dum")}},methods:{counterA:function(){this.countA+=1;var t=this.deta.peanut+=1;this.deta.peanut>this.deta.blackmi?(this.displayA=!0,this.displayB=!1):(this.displayB=!0,this.displayA=!1),this.deta.peanut==this.deta.blackmi&&(this.displayA=!1,this.displayB=!1),c.collection("dum").doc("dumpling").update({peanut:t}).then((function(){console.log("success")}))},counterB:function(){this.countB+=1;var t=this.deta.blackmi+=1;this.deta.peanut>this.deta.blackmi?(this.displayA=!0,this.displayB=!1):(this.displayB=!0,this.displayA=!1),this.deta.peanut==this.deta.blackmi&&(this.displayA=!1,this.displayB=!1),c.collection("dum").doc("dumpling").update({blackmi:t}).then((function(){console.log("success")}))}},mounted:function(){var t=this,e=c.collection("dum").doc("dumpling");e.onSnapshot((function(e){console.log("Current data: ",e.data()),t.deta=e.data(),console.log("this deta: ",t.deta)}),(function(t){console.log("Error getting document",t)}))}},d=u,p=(i("133e"),i("2877")),f=Object(p["a"])(d,n,a,!1,null,"b880d226",null),b=f.exports,m=(i("ba8c"),i("0ff2"));s["a"].use(m["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(b)}}).$mount("#app")},"642d":function(t,e,i){t.exports=i.p+"img/blackmi.a69ba850.jpg"},8583:function(t,e,i){t.exports=i.p+"img/dum.e3287912.jpg"},b603:function(t,e,i){t.exports=i.p+"img/img00.2031e081.jpg"},ba8c:function(t,e,i){},c7bd:function(t,e,i){t.exports=i.p+"img/img01.99c51386.jpg"},d859:function(t,e,i){t.exports=i.p+"img/peanut.a3f40dfb.jpg"},f449:function(t,e,i){}});
//# sourceMappingURL=app.d222d708.js.map