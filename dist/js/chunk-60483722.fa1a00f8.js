(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60483722"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,l,u,s){var f=n+e.length,d=l.length,p=o;return void 0!==u&&(u=r(u),p=i),c.call(s,p,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=u[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>d){var s=a(o/10);return 0===s?r:s<=d?void 0===l[s-1]?c.charAt(1):l[s-1]+c.charAt(1):r}i=l[o-1]}return void 0===i?"":i}))}},"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("d039"),c=n("825a"),i=n("50c4"),o=n("a691"),l=n("1d80"),u=n("8aa5"),s=n("0cb2"),f=n("14c3"),d=n("b622"),p=d("replace"),v=Math.max,g=Math.min,b=function(e){return void 0===e?e:String(e)},h=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),O=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=x?"$":"$0";return[function(e,n){var r=l(this),a=void 0==e?void 0:e[p];return void 0!==a?a.call(e,r,n):t.call(String(r),e,n)},function(e,a){if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var l=n(t,this,e,a);if(l.done)return l.value}var d=c(this),p=String(e),h="function"===typeof a;h||(a=String(a));var x=d.global;if(x){var O=d.unicode;d.lastIndex=0}var j=[];while(1){var k=f(d,p);if(null===k)break;if(j.push(k),!x)break;var $=String(k[0]);""===$&&(d.lastIndex=u(p,i(d.lastIndex),O))}for(var y="",I=0,E=0;E<j.length;E++){k=j[E];for(var m=String(k[0]),R=v(g(o(k.index),p.length),0),w=[],S=1;S<k.length;S++)w.push(b(k[S]));var A=k.groups;if(h){var M=[m].concat(w,R,p);void 0!==A&&M.push(A);var T=String(a.apply(void 0,M))}else T=s(m,p,R,w,A,a);R>=I&&(y+=p.slice(I,R)+T,I=R+m.length)}return y+p.slice(I)}]}),!O||!h||x)},7277:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"navbar navbar-expand-lg navbar-dark bg-info"},c={class:"container"},i=Object(r["h"])("FIV-logo"),o=Object(r["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["i"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},u={class:"navbar-nav"},s=Object(r["h"])("後台訂單"),f=Object(r["h"])("後台產品管理"),d=Object(r["h"])("折價卷設定"),p=Object(r["i"])("p",null,"後台外框-頭尾共用",-1),v=Object(r["i"])("section",null,"表尾",-1);function g(e,t,n,g,b,h){var x=Object(r["D"])("router-link"),O=Object(r["D"])("router-view");return Object(r["w"])(),Object(r["e"])(r["a"],null,[Object(r["i"])("nav",a,[Object(r["i"])("div",c,[Object(r["i"])(x,{class:"navbar-brand",to:"/"},{default:Object(r["M"])((function(){return[i]})),_:1}),o,Object(r["i"])("div",l,[Object(r["i"])("ul",u,[Object(r["i"])("li",null,[Object(r["i"])(x,{class:"nav-link","aria-current":"page",to:"/order-products"},{default:Object(r["M"])((function(){return[s]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(x,{class:"nav-link","aria-current":"page",to:"/product-management"},{default:Object(r["M"])((function(){return[f]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(x,{class:"nav-link","aria-current":"page",to:"/coupon-set"},{default:Object(r["M"])((function(){return[d]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(r["O"])((function(){return h.signout&&h.signout.apply(h,arguments)}),["prevent"]))},"登出")])])])])]),p,b.checkSuccess?(Object(r["w"])(),Object(r["e"])(O,{key:0})):Object(r["f"])("",!0),v],64)}n("ac1f"),n("5319");var b={data:function(){return{checkSuccess:""}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(t){this.$http.defaults.headers.common.Authorization="".concat(t);var n="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(n).then((function(t){t.data.success?e.checkSuccess=!0:(alert(t.data.message),e.$router.push("/login"))}))}else alert("未有登入資訊"),this.$router.push("/login")},signout:function(){document.cookie="hexToken=;expires;",alert("已清除token登出"),this.$router.push("/login")}}};b.render=g;t["default"]=b},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),i=n("7c73"),o=n("69f3").get,l=n("fce3"),u=n("107c"),s=RegExp.prototype.exec,f=c("native-string-replace",String.prototype.replace),d=s,p=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],b=p||g||v||l||u;b&&(d=function(e){var t,n,a,c,l,u,b,h=this,x=o(h),O=x.raw;if(O)return O.lastIndex=h.lastIndex,t=d.call(O,e),h.lastIndex=O.lastIndex,t;var j=x.groups,k=v&&h.sticky,$=r.call(h),y=h.source,I=0,E=e;if(k&&($=$.replace("y",""),-1===$.indexOf("g")&&($+="g"),E=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(y="(?: "+y+")",E=" "+E,I++),n=new RegExp("^(?:"+y+")",$)),g&&(n=new RegExp("^"+y+"$(?!\\s)",$)),p&&(a=h.lastIndex),c=s.call(k?n:h,E),k?c?(c.input=c.input.slice(I),c[0]=c[0].slice(I),c.index=h.lastIndex,h.lastIndex+=c[0].length):h.lastIndex=0:p&&c&&(h.lastIndex=h.global?c.index+c[0].length:a),g&&c&&c.length>1&&f.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c&&j)for(c.groups=u=i(null),l=0;l<j.length;l++)b=j[l],u[b[0]]=c[b[1]];return c}),e.exports=d},"9f7f":function(e,t,n){var r=n("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),o=n("9112"),l=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var f=i(e),d=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=d&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!d||!p||n){var v=/./[f],g=t(f,""[e],(function(e,t,n,r,c){var i=t.exec;return i===a||i===u.exec?d&&!c?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(u,f,g[1])}s&&o(u[f],"sham",!0)}},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-60483722.fa1a00f8.js.map