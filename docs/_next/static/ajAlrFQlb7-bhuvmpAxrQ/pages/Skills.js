(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"2faE":function(t,e,n){var r=n("5K7Z"),i=n("eUtF"),o=n("G8Mo"),a=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"6vdf":function(t,e,n){"use strict";var r=n("p0XB"),i=n.n(r);e.a=function(t,e){return i()(t)?t[e]:t}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9BDd":function(t,e,n){n("GvbO"),t.exports=n("WEpk").Array.isArray},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},GvbO:function(t,e,n){var r=n("Y7ZC");r(r.S,"Array",{isArray:n("kAMH")})},Hsns:function(t,e,n){var r=n("93I4"),i=n("5T2Y").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},MgzW:function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,a,s=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))i.call(n,u)&&(s[u]=n[u]);if(r){a=r(n);for(var c=0;c<a.length;c++)o.call(n,a[c])&&(s[a[c]]=n[a[c]])}}return s}},NegM:function(t,e,n){var r=n("2faE"),i=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},ViWv:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("lXAN"),a=n("pHVj"),s=n("6vdf"),l=[{skill:"Java",tags:["Desktop","Mobile"]},{skill:"C#",tags:["Desktop","Web"]},{skill:"C++",tags:["Desktop"]},{skill:"Javascript",tags:["Web","Mobile"]},{skill:"HTML",tags:["Web"]},{skill:"CSS",tags:["Web"]},{skill:"SASS",tags:["Web"]},{skill:"NodeJS",tags:["Web"]},{skill:"React",tags:["Web"]},{skill:"VueJS",tags:["Web"]},{skill:"NextJS",tags:["Web"]},{skill:"AngularJS",tags:["Web"]},{skill:"jQuery",tags:["Web"]},{skill:"Bootstrap",tags:["Web"]},{skill:"ASP.NET",tags:["Web"]},{skill:".NET",tags:["Desktop"]},{skill:"PHP",tags:["Web"]},{skill:"SQL",tags:["Desktop","Web","Mobile"]},{skill:"LINQ",tags:["Desktop","Web"]},{skill:"WPF",tags:["Desktop"]},{skill:"Sharepoint",tags:["Web"]},{skill:"Azure",tags:["Web"]},{skill:"Android Development",tags:["Mobile"]},{skill:"Firebase",tags:["Mobile"]}],u=i.a.createElement,c=function(t){return u(i.a.Fragment,null,["All","Desktop","Mobile","Web"].map(function(e,n){return u("a",{key:n,href:"#",className:"skill-filter ".concat(t.filter===e?"selected":"none"),onClick:function(n){return function(e,n){e.preventDefault(),t.setFilter(n)}(n,e)}},e)}))};e.default=function(t){var e=t.languageNum,n=Object(r.useState)("All"),i=n[0],f=n[1];return u("div",{className:"page shadow"},u("div",{className:"container"},u(o.a,{title:Object(s.a)(["Skills","Habilidades"],e),id:"nav_skill"}),u("div",{className:"row"},u("div",{className:"col-lg-auto col-md-12 skill-line"},u("div",{className:"skill-center"},u(c,{filter:i,setFilter:f}))),u("div",{className:"col-lg col-md-12 skill-box-center"},l.map(function(t,e){if(t.tags.includes(i)||"All"===i)return u(a.a,{text:t.skill,key:e})})))))}},WEpk:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},Y7ZC:function(t,e,n){var r=n("5T2Y"),i=n("WEpk"),o=n("2GTP"),a=n("NegM"),s=n("B+OT"),l=function(t,e,n){var u,c,f,p=t&l.F,v=t&l.G,d=t&l.S,b=t&l.P,g=t&l.B,k=t&l.W,y=v?i:i[e]||(i[e]={}),m=y.prototype,w=v?r:d?r[e]:(r[e]||{}).prototype;for(u in v&&(n=e),n)(c=!p&&w&&void 0!==w[u])&&s(y,u)||(f=c?w[u]:n[u],y[u]=v&&"function"!=typeof w[u]?n[u]:g&&c?o(f,r):k&&w[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):b&&"function"==typeof f?o(Function.call,f):f,b&&((y.virtual||(y.virtual={}))[u]=f,t&l.R&&m&&!m[u]&&a(m,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(t,e,n){var r=n("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},lXAN:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=function(t){Object(r.useEffect)(function(){var e=document.getElementById(t);document.addEventListener("scroll",function t(){(function(t){var e=t.getBoundingClientRect();return!(e.top>innerHeight||e.bottom<0)})(e)&&(e.classList.add("seen"),document.removeEventListener("scroll",t))})})},a=(n("t3is"),i.a.createElement);e.a=function(t){var e="id_"+t.id;o(e);return a(i.a.Fragment,null,a("div",{style:{top:"-128px",position:"relative"},id:t.id}),a("div",{className:"page-header"},a("h1",{id:e},t.title)))}},p0XB:function(t,e,n){t.exports=n("9BDd")},pHVj:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r).a.createElement;e.a=function(t){return i("div",{className:"skill-item"},i("span",null,t.text))}},qlt4:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Skills",function(){return n("ViWv")}])},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}}},[["qlt4",1,0,2]]]);