(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-646e483e"],{"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),i=c("2d00"),o=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],c=e.constructor={};return c[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2cb3":function(t,e,c){},"5d74":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r={class:"container mt-3"},i={class:"d-flex justify-content-between"},o={class:""},a=Object(n["h"])("FIV品牌首頁"),u=Object(n["h"])("/ "),s=Object(n["h"])("FIV手造"),l=Object(n["i"])("div",{class:"d-flex d-none d-md-block"},[Object(n["i"])("input",{class:"me-2",type:"search",placeholder:"請輸入產品名稱","aria-label":"Search"}),Object(n["i"])("button",{class:"btn btn-outline-primary",type:""},"尋找手造")],-1),b={class:"row mt-3"},d=Object(n["g"])('<div class="col-12 col-md-2"><div class="list-group text-center"><ul><li><button type="button" class="list-group-item list-group-item-action pt-2 pb-2" aria-current="true"> 全部商品 </button></li><li class=""><button type="button" class="list-group-item list-group-item-action pt-2 pb-2" aria-current="true"> 手造戒指 </button></li><li class=""><button type="button" class="list-group-item list-group-item-action pt-2 pb-2" aria-current="true"> 手造對戒 </button></li><li class=""><button type="button" class="list-group-item list-group-item-action pt-2 pb-2" aria-current="true"> 手造手鐲 </button></li><li class=""><button type="button" class="list-group-item list-group-item-action pt-2 pb-2" aria-current="true"> 手造項鍊 </button></li></ul></div></div>',1),p={class:"col-12 col-md-10 d-flex flex-wrap"},f=Object(n["i"])("img",{src:"",class:"card-img-top",alt:"..."},null,-1),h={class:"card-body"},j={class:"card-title"},m=Object(n["i"])("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. ",-1);function O(t,e,c,O,g,v){var y=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["e"])("main",r,[Object(n["i"])("nav",i,[Object(n["i"])("div",o,[Object(n["i"])(y,{class:"","aria-current":"page",to:"/index"},{default:Object(n["M"])((function(){return[a]})),_:1}),u,Object(n["i"])(y,{class:"","aria-current":"page",to:"/products"},{default:Object(n["M"])((function(){return[s]})),_:1})]),l]),Object(n["i"])("div",b,[d,Object(n["i"])("div",p,[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(g.products,(function(t){return Object(n["w"])(),Object(n["e"])("div",{key:t.id,class:"card mb-3 me-5",style:{width:"18rem"}},[f,Object(n["i"])("div",h,[Object(n["i"])("h5",j,Object(n["G"])(t.title),1),m,Object(n["i"])("button",{type:"button",class:"btn btn-primary",onClick:function(e){return v.goToProductPage(t)}}," 立即選購 ",8,["onClick"])])])})),128))])])])}c("99af");var g={data:function(){return{products:[]}},methods:{goToProductPage:function(t){this.$router.push("/product/".concat(t.id))}},created:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/products");this.$http.get(e).then((function(e){t.products=e.data.products})).catch((function(t){console.log(t)}))}};c("f493");g.render=O;e["default"]=g},8418:function(t,e,c){"use strict";var n=c("c04e"),r=c("9bf2"),i=c("5c6c");t.exports=function(t,e,c){var o=n(e);o in t?r.f(t,o,i(0,c)):t[o]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),r=c("d039"),i=c("e8b5"),o=c("861d"),a=c("7b0b"),u=c("50c4"),s=c("8418"),l=c("65f0"),b=c("1dde"),d=c("b622"),p=c("2d00"),f=d("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",m=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),O=b("concat"),g=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},v=!m||!O;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,n,r,i,o=a(this),b=l(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],g(i)){if(r=u(i.length),d+r>h)throw TypeError(j);for(c=0;c<r;c++,d++)c in i&&s(b,d,i[c])}else{if(d>=h)throw TypeError(j);s(b,d++,i)}return b.length=d,b}})},f493:function(t,e,c){"use strict";c("2cb3")}}]);
//# sourceMappingURL=chunk-646e483e.5c4b320f.js.map