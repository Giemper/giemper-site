(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1Ffv":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),i=e.n(r),o=e("lXAN"),c=e("P0xL"),u=[{title:["CETYS University","CETYS Universidad"],position:["Computer Science Engineering","Ing. en Ciencias Computacionales"],city:["Mexicali, Baja California, Mexico","Mexicali, Baja California, M\xe9xico"],duration:["August 2011 - July 2015","Agosto 2011 - Julio 2015"]},{title:["Polytechnique Montreal","Polytechnique Montr\xe9al"],position:["Software Engineering","Ing. en Software"],city:["Montreal, Quebec, Canada","Montr\xe9al, Qu\xe9bec, Canada"],duration:["August 2011 - July 2015","Agosto 2011 - Julio 2015"],description:[["Academic Exchange"],["Intercambio Academico"]]},{title:"Udacity",position:"Front-End Nanodegree",duration:["Online Course","Curso Online"]}],a=e("6vdf"),f=i.a.createElement;n.default=function(t){var n=t.languageNum;return f("div",{className:"page"},f("div",{className:"container"},f(o.a,{title:Object(a.a)(["Education","Educaci\xf3n"],n),id:"nav_edu"}),f("div",{className:"row box"},u.map(function(t,e){return f("div",{className:"col-lg-4 col-md-12",key:e},f(c.a,{title:Object(a.a)(t.title,n),position:Object(a.a)(t.position,n),city:Object(a.a)(t.city,n),duration:Object(a.a)(t.duration,n),description:Object(a.a)(t.description,n)}))}))))}},"2GTP":function(t,n,e){var r=e("eaoh");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},"2faE":function(t,n,e){var r=e("5K7Z"),i=e("eUtF"),o=e("G8Mo"),c=Object.defineProperty;n.f=e("jmDH")?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"5K7Z":function(t,n,e){var r=e("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"6vdf":function(t,n,e){"use strict";var r=e("p0XB"),i=e.n(r);n.a=function(t,n){return i()(t)?t[n]:t}},"93I4":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9BDd":function(t,n,e){e("GvbO"),t.exports=e("WEpk").Array.isArray},"B+OT":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},G8Mo:function(t,n,e){var r=e("93I4");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},GvbO:function(t,n,e){var r=e("Y7ZC");r(r.S,"Array",{isArray:e("kAMH")})},Hsns:function(t,n,e){var r=e("93I4"),i=e("5T2Y").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},KUxP:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},MgzW:function(t,n,e){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},e=0;e<10;e++)n["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(t){return n[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(t,n){for(var e,c,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var f in e=Object(arguments[a]))i.call(e,f)&&(u[f]=e[f]);if(r){c=r(e);for(var s=0;s<c.length;s++)o.call(e,c[s])&&(u[c[s]]=e[c[s]])}}return u}},NegM:function(t,n,e){var r=e("2faE"),i=e("rr1i");t.exports=e("jmDH")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},P0xL:function(t,n,e){"use strict";var r=e("q1tI"),i=e.n(r),o=(e("PaLU"),i.a.createElement);n.a=function(t){return o("div",{className:"box-item"},o("h1",null,t.title),o("h2",null,t.position),o("h4",{className:"description"},t.duration),o("ul",null,t.description&&t.description.map(function(t,n){return o("li",{key:n},o("p",null,t))})))}},WEpk:function(t,n){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},Y7ZC:function(t,n,e){var r=e("5T2Y"),i=e("WEpk"),o=e("2GTP"),c=e("NegM"),u=e("B+OT"),a=function(t,n,e){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,g=t&a.B,b=t&a.W,m=d?i:i[n]||(i[n]={}),h=m.prototype,w=d?r:v?r[n]:(r[n]||{}).prototype;for(f in d&&(e=n),e)(s=!p&&w&&void 0!==w[f])&&u(m,f)||(l=s?w[f]:e[f],m[f]=d&&"function"!=typeof w[f]?e[f]:g&&s?o(l,r):b&&w[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?o(Function.call,l):l,y&&((m.virtual||(m.virtual={}))[f]=l,t&a.R&&h&&!h[f]&&c(h,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},a0xu:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},eUtF:function(t,n,e){t.exports=!e("jmDH")&&!e("KUxP")(function(){return 7!=Object.defineProperty(e("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},jmDH:function(t,n,e){t.exports=!e("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(t,n,e){var r=e("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},lXAN:function(t,n,e){"use strict";var r=e("q1tI"),i=e.n(r),o=function(t){Object(r.useEffect)(function(){var n=document.getElementById(t);document.addEventListener("scroll",function t(){(function(t){var n=t.getBoundingClientRect();return!(n.top>innerHeight||n.bottom<0)})(n)&&(n.classList.add("seen"),document.removeEventListener("scroll",t))})})},c=(e("t3is"),i.a.createElement);n.a=function(t){var n="id_"+t.id;o(n);return c(i.a.Fragment,null,c("div",{style:{top:"-128px",position:"relative"},id:t.id}),c("div",{className:"page-header"},c("h1",{id:n},t.title)))}},p0XB:function(t,n,e){t.exports=e("9BDd")},p9lr:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Education",function(){return e("1Ffv")}])},rr1i:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}}},[["p9lr",1,0,2]]]);