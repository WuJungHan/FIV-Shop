(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4493a40b"],{"057f":function(t,n,e){var r=e("fc6a"),i=e("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(n){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},"129f":function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},"1dde":function(t,n,e){var r=e("d039"),i=e("b622"),c=e("2d00"),o=i("species");t.exports=function(t){return c>=51||!r((function(){var n=[],e=n.constructor={};return e[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2457:function(t,n,e){"use strict";e("3ddc")},"3a5e":function(t,n,e){"use strict";var r=e("7a23");function i(t,n,e,i,c,o){var a=Object(r["D"])("loading",!0);return Object(r["w"])(),Object(r["e"])(a,{active:c.isLoading,"onUpdate:active":n[1]||(n[1]=function(t){return c.isLoading=t})},null,8,["active"])}var c={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};c.render=i;n["a"]=c},"3ddc":function(t,n,e){},"466d":function(t,n,e){"use strict";var r=e("d784"),i=e("825a"),c=e("50c4"),o=e("1d80"),a=e("8aa5"),u=e("14c3");r("match",(function(t,n,e){return[function(n){var e=o(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,this,t);if(r.done)return r.value;var o=i(this),s=String(t);if(!o.global)return u(o,s);var f=o.unicode;o.lastIndex=0;var l,d=[],b=0;while(null!==(l=u(o,s))){var p=String(l[0]);d[b]=p,""===p&&(o.lastIndex=a(s,c(o.lastIndex),f)),b++}return 0===b?null:d}]}))},"4de4":function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").filter,c=e("1dde"),o=c("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"5d74":function(t,n,e){"use strict";e.r(n);e("ac1f"),e("841c"),e("a4d3"),e("e01a");var r=e("7a23"),i={class:"container mt-3"},c={class:"d-flex justify-content-between border-bottom pb-2"},o=Object(r["h"])("FIV5品牌首頁"),a=Object(r["h"])("/ "),u=Object(r["h"])("FIV5手造"),s={class:"d-flex d-none d-md-block"},f={class:"row mt-3"},l={class:"col-12 col-lg-2"},d={class:"list-group text-center"},b={class:"col-12 col-lg-10 ps-4 pe-4 "},p={class:"row d-flex flex-wrap"},g={class:"my-card-img-div"},h={class:"card-body"},v={class:"card-title border-bottom pb-2 fw-bold fs-3"},O={class:"card-text fw-bold"},m=Object(r["h"])(" 原價:"),y={class:"line-through"},j=Object(r["h"])(" 特價:"),w={class:"text-danger fw-bold fs-5"},P={class:"d-grid gap-2 d-md-flex justify-content-md-end"},x=Object(r["i"])("div",{class:"d-flex justify-content-center"},null,-1);function S(t,n,e,S,k,C){var E=Object(r["D"])("Loading"),$=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["e"])("main",i,[Object(r["i"])(E),Object(r["i"])("nav",c,[Object(r["i"])("div",null,[Object(r["i"])($,{"aria-current":"page",to:"/index"},{default:Object(r["O"])((function(){return[o]})),_:1}),a,Object(r["i"])($,{"aria-current":"page",to:"/products"},{default:Object(r["O"])((function(){return[u]})),_:1})]),Object(r["i"])("div",s,[Object(r["P"])(Object(r["i"])("input",{class:"me-2",type:"search","onUpdate:modelValue":n[1]||(n[1]=function(t){return k.search=t}),placeholder:"請輸入產品名稱或類別","aria-label":"Search"},null,512),[[r["K"],k.search]])])]),Object(r["i"])("div",f,[Object(r["i"])("div",l,[Object(r["i"])("div",d,[Object(r["i"])("ul",null,[Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"\n                  list-group-item list-group-item-action\n                  pt-3\n                  pb-3\n                  fs-5\n                  fw-bold\n                ","aria-current":"true",onClick:n[2]||(n[2]=function(t){return C.getProducts()})}," 全部商品 ")]),Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"\n                  list-group-item list-group-item-action\n                  pt-3\n                  pb-3\n                  fs-5\n                  fw-bold\n                ","aria-current":"true",onClick:n[3]||(n[3]=function(t){return C.getRingProducts()})}," 手造戒指 ")]),Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"\n                  list-group-item list-group-item-action\n                  pt-3\n                  pb-3\n                  fs-5\n                  fw-bold\n                ","aria-current":"true",onClick:n[4]||(n[4]=function(t){return C.getNecklaceProducts()})}," 手造項鍊 ")]),Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"\n                  list-group-item list-group-item-action\n                  pt-3\n                  pb-3\n                  fs-5\n                  fw-bold\n                ","aria-current":"true",onClick:n[5]||(n[5]=function(t){return C.getBraceletProducts()})}," 手造手環 ")]),Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"\n                  list-group-item list-group-item-action\n                  pt-3\n                  pb-3\n                  fs-5\n                  fw-bold\n                ","aria-current":"true",onClick:n[6]||(n[6]=function(t){return C.getLoversRingProducts()})}," 手造特製 ")])])])]),Object(r["i"])("div",b,[Object(r["i"])("div",p,[(Object(r["w"])(!0),Object(r["e"])(r["a"],null,Object(r["B"])(C.filterProducts,(function(n){return Object(r["w"])(),Object(r["e"])("div",{key:n.id,class:"card p-0 mb-3 me-0 me-md-5 my-card animate__animated animate__fadeIn\n          col-12 col-lg-3"},[Object(r["i"])("div",g,[Object(r["i"])("img",{class:"card-img-top my-card-img",style:{height:"220px","background-size":"cover","background-position":"center"},src:n.imageUrl,alt:n.title},null,8,["src","alt"])]),Object(r["i"])("div",h,[Object(r["i"])("h5",v,Object(r["G"])(n.title),1),Object(r["i"])("p",O,Object(r["G"])(n.category),1),Object(r["i"])("p",null,Object(r["G"])(n.description),1),Object(r["i"])("p",null,Object(r["G"])(n.content),1),Object(r["i"])("p",null,[m,Object(r["i"])("span",y,Object(r["G"])(t.$toCurrency(n.origin_price)),1),j,Object(r["i"])("span",w,Object(r["G"])(t.$toCurrency(n.price)),1)])]),Object(r["i"])("div",P,[Object(r["i"])("button",{class:"btn btn-outline-primary me-md-2",type:"button",onClick:function(t){return C.goToProductPage(n)}}," 產品詳情 ",8,["onClick"]),Object(r["i"])("button",{class:"btn btn-primary",type:"button",onClick:function(t){return C.addCart(n.id)}}," 立即選購 ",8,["onClick"])])])})),128))])])]),x])}e("4de4"),e("466d"),e("159b"),e("99af");var k=e("3a5e"),C=e("e4f3"),E={components:{Loading:k["a"]},data:function(){return{products:[],categoryProducts:[],pagination:{},search:""}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(n){return n.title.match(t.search)||n.category.match(t.search)}))}},methods:{getProducts:function(){this.products=this.categoryProducts},goToProductPage:function(t){this.$router.push("/product/".concat(t.id))},getRingProducts:function(){var t=[];this.categoryProducts.forEach((function(n){"戒指"===n.category&&t.push(n)})),this.products=t},getLoversRingProducts:function(){var t=[];this.categoryProducts.forEach((function(n){"特製"===n.category&&t.push(n)})),this.products=t},getBraceletProducts:function(){var t=[];this.categoryProducts.forEach((function(n){"手環"===n.category&&t.push(n)})),this.products=t},getNecklaceProducts:function(){var t=[];this.categoryProducts.forEach((function(n){"項鍊"===n.category&&t.push(n)})),this.products=t},addCart:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart"),i={product_id:t,qty:e};this.$http.post(r,{data:i}).then((function(t){t.data.success?(n.$swal({title:t.data.message}),C["a"].emit("updata-cart")):n.$swal({title:t.data.message,icon:"error"})})).catch((function(t){n.$swal({title:t,icon:"error"})}))}},created:function(){var t=this,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/products");this.$http.get(n).then((function(n){n.data.success?(t.products=n.data.products,t.categoryProducts=n.data.products,t.pagination=n.data.pagination):t.$swal({title:n.data.message,icon:"error"})})).catch((function(n){t.$swal({title:n,icon:"error"})}))}};e("2457");E.render=S;n["default"]=E},"746f":function(t,n,e){var r=e("428f"),i=e("5135"),c=e("e538"),o=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});i(n,t)||o(n,t,{value:c.f(t)})}},8418:function(t,n,e){"use strict";var r=e("c04e"),i=e("9bf2"),c=e("5c6c");t.exports=function(t,n,e){var o=r(n);o in t?i.f(t,o,c(0,e)):t[o]=e}},"841c":function(t,n,e){"use strict";var r=e("d784"),i=e("825a"),c=e("1d80"),o=e("129f"),a=e("14c3");r("search",(function(t,n,e){return[function(n){var e=c(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,this,t);if(r.done)return r.value;var c=i(this),u=String(t),s=c.lastIndex;o(s,0)||(c.lastIndex=0);var f=a(c,u);return o(c.lastIndex,s)||(c.lastIndex=s),null===f?-1:f.index}]}))},"99af":function(t,n,e){"use strict";var r=e("23e7"),i=e("d039"),c=e("e8b5"),o=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),f=e("65f0"),l=e("1dde"),d=e("b622"),b=e("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=b>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=l("concat"),m=function(t){if(!o(t))return!1;var n=t[p];return void 0!==n?!!n:c(t)},y=!v||!O;r({target:"Array",proto:!0,forced:y},{concat:function(t){var n,e,r,i,c,o=a(this),l=f(o,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(c=-1===n?o:arguments[n],m(c)){if(i=u(c.length),d+i>g)throw TypeError(h);for(e=0;e<i;e++,d++)e in c&&s(l,d,c[e])}else{if(d>=g)throw TypeError(h);s(l,d++,c)}return l.length=d,l}})},a4d3:function(t,n,e){"use strict";var r=e("23e7"),i=e("da84"),c=e("d066"),o=e("c430"),a=e("83ab"),u=e("4930"),s=e("fdbf"),f=e("d039"),l=e("5135"),d=e("e8b5"),b=e("861d"),p=e("825a"),g=e("7b0b"),h=e("fc6a"),v=e("c04e"),O=e("5c6c"),m=e("7c73"),y=e("df75"),j=e("241c"),w=e("057f"),P=e("7418"),x=e("06cf"),S=e("9bf2"),k=e("d1e7"),C=e("9112"),E=e("6eeb"),$=e("5692"),I=e("f772"),L=e("d012"),_=e("90e3"),N=e("b622"),T=e("e538"),G=e("746f"),R=e("d44e"),B=e("69f3"),D=e("b727").forEach,F=I("hidden"),J="Symbol",U="prototype",V=N("toPrimitive"),A=B.set,M=B.getterFor(J),q=Object[U],z=i.Symbol,K=c("JSON","stringify"),Q=x.f,W=S.f,H=w.f,X=k.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),nt=$("symbol-to-string-registry"),et=$("wks"),rt=i.QObject,it=!rt||!rt[U]||!rt[U].findChild,ct=a&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=Q(q,n);r&&delete q[n],W(t,n,e),r&&t!==q&&W(q,n,r)}:W,ot=function(t,n){var e=Y[t]=m(z[U]);return A(e,{type:J,tag:t,description:n}),a||(e.description=n),e},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ut=function(t,n,e){t===q&&ut(Z,n,e),p(t);var r=v(n,!0);return p(e),l(Y,r)?(e.enumerable?(l(t,F)&&t[F][r]&&(t[F][r]=!1),e=m(e,{enumerable:O(0,!1)})):(l(t,F)||W(t,F,O(1,{})),t[F][r]=!0),ct(t,r,e)):W(t,r,e)},st=function(t,n){p(t);var e=h(n),r=y(e).concat(pt(e));return D(r,(function(n){a&&!lt.call(e,n)||ut(t,n,e[n])})),t},ft=function(t,n){return void 0===n?m(t):st(m(t),n)},lt=function(t){var n=v(t,!0),e=X.call(this,n);return!(this===q&&l(Y,n)&&!l(Z,n))&&(!(e||!l(this,n)||!l(Y,n)||l(this,F)&&this[F][n])||e)},dt=function(t,n){var e=h(t),r=v(n,!0);if(e!==q||!l(Y,r)||l(Z,r)){var i=Q(e,r);return!i||!l(Y,r)||l(e,F)&&e[F][r]||(i.enumerable=!0),i}},bt=function(t){var n=H(h(t)),e=[];return D(n,(function(t){l(Y,t)||l(L,t)||e.push(t)})),e},pt=function(t){var n=t===q,e=H(n?Z:h(t)),r=[];return D(e,(function(t){!l(Y,t)||n&&!l(q,t)||r.push(Y[t])})),r};if(u||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=_(t),e=function(t){this===q&&e.call(Z,t),l(this,F)&&l(this[F],n)&&(this[F][n]=!1),ct(this,n,O(1,t))};return a&&it&&ct(q,n,{configurable:!0,set:e}),ot(n,t)},E(z[U],"toString",(function(){return M(this).tag})),E(z,"withoutSetter",(function(t){return ot(_(t),t)})),k.f=lt,S.f=ut,x.f=dt,j.f=w.f=bt,P.f=pt,T.f=function(t){return ot(N(t),t)},a&&(W(z[U],"description",{configurable:!0,get:function(){return M(this).description}}),o||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),D(y(et),(function(t){G(t)})),r({target:J,stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var e=z(n);return tt[n]=e,nt[e]=n,e},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(g(t))}}),K){var gt=!u||f((function(){var t=z();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,n,e){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=n,(b(n)||void 0!==t)&&!at(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!at(n))return n}),i[1]=n,K.apply(null,i)}})}z[U][V]||C(z[U],V,z[U].valueOf),R(z,J),L[F]=!0},e01a:function(t,n,e){"use strict";var r=e("23e7"),i=e("83ab"),c=e("da84"),o=e("5135"),a=e("861d"),u=e("9bf2").f,s=e("e893"),f=c.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=p.call(t);if(o(l,t))return"";var e=g?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:d})}},e4f3:function(t,n,e){"use strict";var r=function(t){return{all:t=t||new Map,on:function(n,e){var r=t.get(n);r?r.push(e):t.set(n,[e])},off:function(n,e){var r=t.get(n);r&&(e?r.splice(r.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var r=t.get(n);r&&r.slice().map((function(t){t(e)})),(r=t.get("*"))&&r.slice().map((function(t){t(n,e)}))}}},i=r();n["a"]=i},e538:function(t,n,e){var r=e("b622");n.f=r}}]);
//# sourceMappingURL=chunk-4493a40b.bbf61583.js.map