(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1947df07"],{"1dde":function(t,c,e){var o=e("d039"),i=e("b622"),r=e("2d00"),n=i("species");t.exports=function(t){return r>=51||!o((function(){var c=[],e=c.constructor={};return e[n]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},"2c10":function(t,c,e){"use strict";var o=e("7a23");function i(t,c,e,i,r,n){var a=Object(o["D"])("loading");return Object(o["w"])(),Object(o["e"])(a,{active:r.isLoading,"onUpdate:active":c[1]||(c[1]=function(t){return r.isLoading=t})},null,8,["active"])}var r={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};r.render=i;c["a"]=r},"5d74":function(t,c,e){"use strict";e.r(c);var o=e("7a23"),i={class:"container mt-3"},r={class:"d-flex justify-content-between border-bottom"},n={class:""},a=Object(o["h"])("FIV5品牌首頁"),u=Object(o["h"])("/ "),s=Object(o["h"])("FIV5手造"),d=Object(o["i"])("div",{class:"d-flex d-none d-md-block"},[Object(o["i"])("input",{class:"me-2",type:"search",placeholder:"請輸入產品名稱","aria-label":"Search"}),Object(o["i"])("button",{class:"btn btn-outline-primary",type:""},"尋找手造")],-1),l={class:"row mt-3"},b={class:"col-12 col-md-2"},f={class:"list-group text-center"},p={class:""},g={class:""},j={class:""},h={class:""},O={class:"col-12 col-md-10 d-flex flex-wrap"},m={class:"my-card-img-div"},v={class:"card-body"},y={class:"card-title border-bottom pb-2"},w={class:"card-text"},P={class:"d-grid gap-2 d-md-flex justify-content-md-end"},k=Object(o["i"])("button",{class:"btn btn-primary",type:"button"},"立即選購",-1);function x(t,c,e,x,C,L){var E=Object(o["D"])("Loading"),_=Object(o["D"])("router-link");return Object(o["w"])(),Object(o["e"])("main",i,[Object(o["i"])(E),Object(o["i"])("nav",r,[Object(o["i"])("div",n,[Object(o["i"])(_,{class:"","aria-current":"page",to:"/index"},{default:Object(o["M"])((function(){return[a]})),_:1}),u,Object(o["i"])(_,{class:"","aria-current":"page",to:"/products"},{default:Object(o["M"])((function(){return[s]})),_:1})]),d]),Object(o["i"])("div",l,[Object(o["i"])("div",b,[Object(o["i"])("div",f,[Object(o["i"])("ul",null,[Object(o["i"])("li",null,[Object(o["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:c[1]||(c[1]=function(t){return L.getProducts()})}," 全部商品 ")]),Object(o["i"])("li",p,[Object(o["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:c[2]||(c[2]=function(t){return L.getRingProducts()})}," 手造戒指 ")]),Object(o["i"])("li",g,[Object(o["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:c[3]||(c[3]=function(t){return L.getLoversRingProducts()})}," 手造對戒 ")]),Object(o["i"])("li",j,[Object(o["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:c[4]||(c[4]=function(t){return L.getBraceletProducts()})}," 手造手鐲 ")]),Object(o["i"])("li",h,[Object(o["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:c[5]||(c[5]=function(t){return L.getNecklaceProducts()})}," 手造項鍊 ")])])])]),Object(o["i"])("div",O,[(Object(o["w"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(C.products,(function(t){return Object(o["w"])(),Object(o["e"])("div",{key:t.id,class:"card mb-3 me-5  my-card animate__animated animate__fadeIn",style:{width:"18rem"}},[Object(o["i"])("div",m,[Object(o["i"])("img",{src:t.imageUrl,class:"card-img-top  my-card-img",alt:"..."},null,8,["src"])]),Object(o["i"])("div",v,[Object(o["i"])("h5",y,Object(o["G"])(t.title),1),Object(o["i"])("p",w,Object(o["G"])(t.category)+" Some quick example text to build on the card title and make up the bulk of the card's content. ",1),Object(o["i"])("div",P,[Object(o["i"])("button",{class:"btn btn-outline-primary me-md-2",type:"button",onClick:function(c){return L.goToProductPage(t)}},"產品詳情",8,["onClick"]),k])])])})),128))])])])}e("159b"),e("99af");var C=e("2c10"),L={components:{Loading:C["a"]},data:function(){return{products:[],categoryProducts:[]}},methods:{getProducts:function(){this.products=this.categoryProducts},goToProductPage:function(t){this.$router.push("/product/".concat(t.id))},getRingProducts:function(){var t=[];this.categoryProducts.forEach((function(c){"戒指"===c.category&&t.push(c)})),this.products=t},getLoversRingProducts:function(){var t=[];this.categoryProducts.forEach((function(c){"對戒"===c.category&&t.push(c)})),this.products=t},getBraceletProducts:function(){var t=[];this.categoryProducts.forEach((function(c){"手鐲"===c.category&&t.push(c)})),this.products=t},getNecklaceProducts:function(){var t=[];this.categoryProducts.forEach((function(c){"項鍊"===c.category&&t.push(c)})),this.products=t}},created:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/products");this.$http.get(c).then((function(c){t.products=c.data.products,t.categoryProducts=c.data.products})).catch((function(t){console.log(t)}))}};e("b480");L.render=x;c["default"]=L},8418:function(t,c,e){"use strict";var o=e("c04e"),i=e("9bf2"),r=e("5c6c");t.exports=function(t,c,e){var n=o(c);n in t?i.f(t,n,r(0,e)):t[n]=e}},"99af":function(t,c,e){"use strict";var o=e("23e7"),i=e("d039"),r=e("e8b5"),n=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),d=e("65f0"),l=e("1dde"),b=e("b622"),f=e("2d00"),p=b("isConcatSpreadable"),g=9007199254740991,j="Maximum allowed index exceeded",h=f>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=l("concat"),m=function(t){if(!n(t))return!1;var c=t[p];return void 0!==c?!!c:r(t)},v=!h||!O;o({target:"Array",proto:!0,forced:v},{concat:function(t){var c,e,o,i,r,n=a(this),l=d(n,0),b=0;for(c=-1,o=arguments.length;c<o;c++)if(r=-1===c?n:arguments[c],m(r)){if(i=u(r.length),b+i>g)throw TypeError(j);for(e=0;e<i;e++,b++)e in r&&s(l,b,r[e])}else{if(b>=g)throw TypeError(j);s(l,b++,r)}return l.length=b,l}})},a37c:function(t,c,e){},b480:function(t,c,e){"use strict";e("a37c")}}]);
//# sourceMappingURL=chunk-1947df07.40db5662.js.map