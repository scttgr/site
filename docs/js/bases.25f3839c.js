(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bases"],{"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),c=n("be13"),o=n("2b4c"),s=n("520a"),l=o("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=o(t),p=!a(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),d=p?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[v](""),!e}):void 0;if(!p||!d||"replace"===t&&!u||"split"===t&&!f){var h=/./[v],b=n(c,v,""[t],function(t,e,n,r,i){return e.exec===s?p&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=b[0],x=b[1];r(String.prototype,t,g),i(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"2fac":function(t,e,n){},"4c25":function(t,e,n){"use strict";var r=n("2fac"),i=n.n(r);i.a},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(t){var e,n,c,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[o]),c=i.call(f,t),s&&c&&(f[o]=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&a.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},9703:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center flex-grow"},[n("div",{staticClass:"text-5xl font-mono font-bold"},[t._v("\n    404\n  ")])])}],a=n("2877"),c={},o=Object(a["a"])(c,r,i,!1,null,null,null);o.options.__file="NotFound.vue";e["default"]=o.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),a=n("9def"),c=n("4588"),o=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(r,i){var a=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var f=r(t),v=String(this),p="function"===typeof e;p||(e=String(e));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}var m=[];while(1){var w=s(f,v);if(null===w)break;if(m.push(w),!g)break;var y=String(w[0]);""===y&&(f.lastIndex=o(v,a(f.lastIndex),x))}for(var _="",$=0,E=0;E<m.length;E++){w=m[E];for(var C=String(w[0]),k=l(u(c(w.index),v.length),0),S=[],R=1;R<w.length;R++)S.push(d(w[R]));var j=w.groups;if(p){var A=[C].concat(S,k,v);void 0!==j&&A.push(j);var I=String(e.apply(void 0,A))}else I=b(C,v,k,S,j,e);k>=$&&(_+=v.slice($,k)+I,$=k+C.length)}return _+v.slice($)}];function b(t,e,r,a,c,o){var s=r+t.length,l=a.length,u=p;return void 0!==c&&(c=i(c),u=v),n.call(o,u,function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":o=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return i;if(u>l){var v=f(u/10);return 0===v?i:v<=l?void 0===a[v-1]?i.charAt(1):a[v-1]+i.charAt(1):i}o=a[u-1]}return void 0===o?"":o})}})},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow flex flex-col"},[n("div",{staticClass:"helloworld"}),n("div",{staticClass:"news py-12"},[n("div",{staticClass:"container mx-auto px-4"},[n("h2",{staticClass:"mb-6 pb-3 border-b"},[t._v("News")]),t._l(t.list,function(e){return n("article",{key:e.key,staticClass:"news-item mb-10"},[n("div",{staticClass:"mb-1"},[n("a",{staticClass:"text-black text-sm no-underline hover:underline",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.date))])]),n("div",{staticClass:"news-body",domProps:{innerHTML:t._s(t.bodyFormat(e.body))}})])})],2)])])},i=[],a=(n("a481"),n("cadf"),n("551c"),n("097d"),{computed:{list:function(){return this.$store.getters["news/list"]}},mounted:function(){this.init()},methods:{init:function(){this.$store.dispatch("news/initialize")},bodyFormat:function(t){return t.replace(/((https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+))/g,'<a href="$1" target="_blank">$1</a>').replace(/\n/g,"<br>")}}}),c=a,o=(n("4c25"),n("2877")),s=Object(o["a"])(c,r,i,!1,null,"0602b865",null);s.options.__file="Home.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=bases.25f3839c.js.map