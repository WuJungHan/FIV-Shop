(function(e){function n(n){for(var c,r,a=n[0],d=n[1],h=n[2],i=0,f=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,h||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={app:0},u={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-169911ac":"758800d7","chunk-2b84b5d7":"26e16ada","chunk-2d0a4a37":"844ab6f2","chunk-2d0b5d6a":"3834e1a6","chunk-2d0b684f":"446aea1a","chunk-2d0e5e97":"386181eb","chunk-304d4c36":"43d86bee","chunk-36d948ec":"3542c287","chunk-378a50d0":"de4977de","chunk-37e4a68a":"556e6977","chunk-381052ac":"1422339f","chunk-665f8e15":"0f28f797","chunk-722d94a6":"63cfc51e","chunk-78bbfc29":"58794f67","chunk-96a3faa8":"c9d05b85","chunk-aca09e18":"a8c71122","chunk-bddb7090":"5bbec82b","chunk-ce2fe4c2":"eb66e762"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-169911ac":1,"chunk-304d4c36":1,"chunk-722d94a6":1,"chunk-78bbfc29":1,"chunk-bddb7090":1,"chunk-ce2fe4c2":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-169911ac":"f5f460b7","chunk-2b84b5d7":"31d6cfe0","chunk-2d0a4a37":"31d6cfe0","chunk-2d0b5d6a":"31d6cfe0","chunk-2d0b684f":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-304d4c36":"97bbb32b","chunk-36d948ec":"31d6cfe0","chunk-378a50d0":"31d6cfe0","chunk-37e4a68a":"31d6cfe0","chunk-381052ac":"31d6cfe0","chunk-665f8e15":"31d6cfe0","chunk-722d94a6":"d1ba7f8c","chunk-78bbfc29":"aedceba4","chunk-96a3faa8":"31d6cfe0","chunk-aca09e18":"31d6cfe0","chunk-bddb7090":"f5f460b7","chunk-ce2fe4c2":"1eb4cf1a"}[e]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var h=o[a],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){h=f[a],i=h.getAttribute("data-href");if(i===c||i===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],l.parentNode.removeChild(l),t(o)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=o);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=a(e);var f=new Error;h=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/FIV5-Shop/dist/",d.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=n,h=h.slice();for(var f=0;f<h.length;f++)n(h[f]);var l=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},5071:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=t("bc3a"),u=t.n(r),o=t("2106"),a=t.n(o),d=t("1157"),h=t.n(d),i=(t("7b17"),t("8a14")),f=(t("fe26"),t("7bb1")),l=t("3aa8"),b=t("cbdf"),p=t("9457");function s(e,n,t,r,u,o){var a=Object(c["D"])("router-view");return Object(c["w"])(),Object(c["e"])(a)}var k={};t("9e3a");k.render=s;var m=k,v=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),g=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/",component:function(){return t.e("chunk-304d4c36").then(t.bind(null,"de8a"))},children:[{path:"",component:function(){return t.e("chunk-722d94a6").then(t.bind(null,"3d9c"))}},{path:"index",component:function(){return t.e("chunk-78bbfc29").then(t.bind(null,"766f"))}},{path:"products",component:function(){return t.e("chunk-ce2fe4c2").then(t.bind(null,"5d74"))}},{path:"product/:id",component:function(){return t.e("chunk-aca09e18").then(t.bind(null,"3c46"))}},{path:"discount",component:function(){return t.e("chunk-2d0a4a37").then(t.bind(null,"06fa"))}},{path:"shop",component:function(){return t.e("chunk-2d0b5d6a").then(t.bind(null,"1b36"))}},{path:"login",component:function(){return t.e("chunk-96a3faa8").then(t.bind(null,"ba1e"))}},{path:"cart",component:function(){return t.e("chunk-37e4a68a").then(t.bind(null,"5727"))},children:[{path:"",component:function(){return t.e("chunk-2b84b5d7").then(t.bind(null,"f171"))}},{path:"/check-orderer",component:function(){return t.e("chunk-378a50d0").then(t.bind(null,"1d62"))}},{path:"/check-order-complete",component:function(){return t.e("chunk-665f8e15").then(t.bind(null,"d1f0"))}},{path:"/order-complete",component:function(){return t.e("chunk-169911ac").then(t.bind(null,"95e3"))}}]}]},{path:"/dashboard",component:function(){return t.e("chunk-bddb7090").then(t.bind(null,"7277"))},children:[{path:"/order-products",component:function(){return t.e("chunk-381052ac").then(t.bind(null,"30f7"))}},{path:"/product-management",component:function(){return t.e("chunk-36d948ec").then(t.bind(null,"6d16"))}},{path:"/coupon-set",component:function(){return t.e("chunk-2d0b684f").then(t.bind(null,"1e05"))}}]}],y=Object(v["a"])({history:Object(v["b"])(),routes:g,scrollBehavior:function(){return{top:0,behavior:"smooth"}}}),O=y;window.$=h.a,Object.keys(l["a"]).forEach((function(e){Object(f["e"])(e,l["a"][e])})),Object(f["d"])({generateMessage:Object(b["a"])({zh_TW:p}),validateOnInput:!0}),Object(b["b"])("zh_TW");var j=Object(c["d"])(m);j.component("Form",f["c"]),j.component("Field",f["b"]),j.component("ErrorMessage",f["a"]),j.component("Loading",i["a"]),j.use(a.a,u.a),j.use(O),j.mount("#app")},"9e3a":function(e,n,t){"use strict";t("5071")}});
//# sourceMappingURL=app.55ea47a1.js.map