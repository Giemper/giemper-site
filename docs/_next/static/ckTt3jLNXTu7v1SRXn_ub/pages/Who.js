(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2GTP":function(t,n,e){var r=e("eaoh");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"2faE":function(t,n,e){var r=e("5K7Z"),o=e("eUtF"),i=e("G8Mo"),c=Object.defineProperty;n.f=e("jmDH")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"5K7Z":function(t,n,e){var r=e("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"6vdf":function(t,n,e){"use strict";var r=e("p0XB"),o=e.n(r);n.a=function(t,n){return o()(t)?t[n]:t}},"93I4":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9BDd":function(t,n,e){e("GvbO"),t.exports=e("WEpk").Array.isArray},"B+OT":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},G8Mo:function(t,n,e){var r=e("93I4");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},GvbO:function(t,n,e){var r=e("Y7ZC");r(r.S,"Array",{isArray:e("kAMH")})},Hsns:function(t,n,e){var r=e("93I4"),o=e("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},KUxP:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},MgzW:function(t,n,e){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(t){return n[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,n){for(var e,c,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var f in e=Object(arguments[a]))o.call(e,f)&&(u[f]=e[f]);if(r){c=r(e);for(var s=0;s<c.length;s++)i.call(e,c[s])&&(u[c[s]]=e[c[s]])}}return u}},NegM:function(t,n,e){var r=e("2faE"),o=e("rr1i");t.exports=e("jmDH")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},OYdh:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=e("lXAN"),c=e("6vdf"),u=o.a.createElement;n.default=function(t){var n=t.languageNum;return u("div",{className:"page"},u("div",{className:"container"},u(i.a,{title:Object(c.a)(["Who am I?","\xbfQuien Soy?"],n),id:"nav_who"}),u("div",{className:"col-8 who-item"},u("p",null,"Without getting into a deeper existencial crisis, the easiest way I can start describing myself is"),u("p",null,"I have a Computer Science Engineering degree from ",u("b",null,"CETYS University")," in Mexicali, Mexico, and did a half-year academic exchange in the ",u("b",null,"Ecol\xe9 Polytechnique")," of Montreal, Canada.")),u("div",{className:"col-4"})))}},"S+t7":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Who",function(){return e("OYdh")}])},WEpk:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},Y7ZC:function(t,n,e){var r=e("5T2Y"),o=e("WEpk"),i=e("2GTP"),c=e("NegM"),u=e("B+OT"),a=function(t,n,e){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,h=t&a.B,g=t&a.W,b=d?o:o[n]||(o[n]={}),m=b.prototype,w=d?r:v?r[n]:(r[n]||{}).prototype;for(f in d&&(e=n),e)(s=!p&&w&&void 0!==w[f])&&u(b,f)||(l=s?w[f]:e[f],b[f]=d&&"function"!=typeof w[f]?e[f]:h&&s?i(l,r):g&&w[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&m&&!m[f]&&c(m,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},a0xu:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},eUtF:function(t,n,e){t.exports=!e("jmDH")&&!e("KUxP")(function(){return 7!=Object.defineProperty(e("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},jmDH:function(t,n,e){t.exports=!e("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(t,n,e){var r=e("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},lXAN:function(t,n,e){"use strict";var r=e("q1tI"),o=e.n(r),i=function(t){Object(r.useEffect)(function(){var n=document.getElementById(t);document.addEventListener("scroll",function t(){(function(t){var n=t.getBoundingClientRect();return!(n.top>innerHeight||n.bottom<0)})(n)&&(n.classList.add("seen"),document.removeEventListener("scroll",t))})})},c=(e("t3is"),o.a.createElement);n.a=function(t){var n="id_"+t.id;i(n);return c(o.a.Fragment,null,c("div",{style:{top:"-128px",position:"relative"},id:t.id}),c("div",{className:"page-header"},c("h1",{id:n},t.title)))}},p0XB:function(t,n,e){t.exports=e("9BDd")},rr1i:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}}},[["S+t7",1,0,2]]]);