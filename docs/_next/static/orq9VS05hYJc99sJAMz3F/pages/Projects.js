(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2GTP":function(e,t,n){var r=n("eaoh");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"2faE":function(e,t,n){var r=n("5K7Z"),o=n("eUtF"),a=n("G8Mo"),i=Object.defineProperty;t.f=n("jmDH")?Object.defineProperty:function(e,t,n){if(r(e),t=a(t,!0),r(n),o)try{return i(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"5K7Z":function(e,t,n){var r=n("93I4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"5T2Y":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"6vdf":function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);t.a=function(e,t){return o()(e)?e[t]:e}},"93I4":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9BDd":function(e,t,n){n("GvbO"),e.exports=n("WEpk").Array.isArray},"9pQ+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects",function(){return n("MwIo")}])},"B+OT":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},G8Mo:function(e,t,n){var r=n("93I4");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},GvbO:function(e,t,n){var r=n("Y7ZC");r(r.S,"Array",{isArray:n("kAMH")})},Hsns:function(e,t,n){var r=n("93I4"),o=n("5T2Y").document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},KUxP:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},MgzW:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))o.call(n,l)&&(c[l]=n[l]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(c[i[s]]=n[i[s]])}}return c}},MwIo:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=[{title:"Eco Car Wash",type:"Phone",sourceMain:"videos/EcoCarWash.webm",sourceFallback:"videos/EcoCarWash.mp4",description:[["Project done for a car wash company in Baja California, Mexico.","The app tracks follows, registers, and reports the cleaning life cycle in which a car might go through: the car entering the car wash, an employee being assigned for cleaning, and completition of work."],["Proyecto hecho para un compa\xf1ia de auto-lavados en Baja California, M\xe9xico.","La aplicacion sigue, registra, y reportea el ciclo de vida del lavado por el que puede pasar cada autom\xf3vil: desde que ingresa al auto-lavado, cuando se asigna un limpeador, y cuando el trabajo fue terminado."]],availability:[{title:"Play Store",link:"https://play.google.com/store/apps/details?id=com.giemper.ecocarwash"},{title:"Github",link:"https://github.com/Giemper/EcoCarWash"}]},{title:"Colour App",type:"Phone",sourceMain:"videos/Colour.webm",sourceFallback:"videos/Colour.mp4",description:[["This project was done a few years ago as practice for Android Development","The goal of Colour is to be a minimalist color picker for your phone for when you're in need of picking a quick color reference for a project."],["Este projecto fue hecho hace un par de a\xf1os como practica en desarrollo para Android","La meta de Colour es ser un seleccionador de colores minimalista, para cuando uno este en necesidad de escoger una referencia de color rapida para un proyecto."]],availability:[{title:"Github",link:"https://github.com/Giemper/Colour"}]}],i=n("lXAN"),c=(n("9l6E"),n("6vdf")),u=o.a.createElement,l=function(){return u(o.a.Fragment,null)},s=function(e){return u("video",{className:"project-preview",autoPlay:!0,loop:!0,muted:!0},u("source",{src:e.main,type:"video/webm"}),u("source",{src:e.fallback,type:"video/mp4"}))},p=function(e){var t=e.languageNum,n="Phone"===e.type?u(s,{main:e.sourceMain,fallback:e.sourceFallback}):u(l,null),r=void 0!==e.availability?u("h3",null,Object(c.a)(["Available at:","Displonible en:"],t)):u(o.a.Fragment,null),a=e.index%2==0?"order-last":"order-first";return u("div",{className:"project-item"},u("div",{className:"row"},u("div",{className:"col-lg-6 col-md-6 col-sm-12 project-pad"},u("div",{className:"project-text"},u("h1",null,e.title),Object(c.a)(e.description,t).map(function(e,t){return u("p",{key:t},e)}),r,u("div",null,void 0!==e.availability&&e.availability.map(function(e,t){return u("a",{key:t,href:e.link,className:"project-link"},e.title)})))),u("div",{className:"col-lg-6 col-md-6 col-sm-12 project-pad ".concat(a)},n)))},f=o.a.createElement;t.default=function(e){var t=e.languageNum;return f("div",{className:"page shadow"},f("div",{className:"container"},f(i.a,{title:Object(c.a)(["Projects","Proyectos"],t),id:"nav_pro"}),a.map(function(e,n){return f(p,{key:n,index:n,title:e.title,type:e.type,sourceMain:e.sourceMain,sourceFallback:e.sourceFallback,description:e.description,availability:e.availability,languageNum:t})})))}},NegM:function(e,t,n){var r=n("2faE"),o=n("rr1i");e.exports=n("jmDH")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},WEpk:function(e,t){var n=e.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},Y7ZC:function(e,t,n){var r=n("5T2Y"),o=n("WEpk"),a=n("2GTP"),i=n("NegM"),c=n("B+OT"),u=function(e,t,n){var l,s,p,f=e&u.F,d=e&u.G,v=e&u.S,m=e&u.P,y=e&u.B,h=e&u.W,b=d?o:o[t]||(o[t]={}),g=b.prototype,w=d?r:v?r[t]:(r[t]||{}).prototype;for(l in d&&(n=t),n)(s=!f&&w&&void 0!==w[l])&&c(b,l)||(p=s?w[l]:n[l],b[l]=d&&"function"!=typeof w[l]?n[l]:y&&s?a(p,r):h&&w[l]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):m&&"function"==typeof p?a(Function.call,p):p,m&&((b.virtual||(b.virtual={}))[l]=p,e&u.R&&g&&!g[l]&&i(g,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},a0xu:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},eUtF:function(e,t,n){e.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},jmDH:function(e,t,n){e.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(e,t,n){var r=n("a0xu");e.exports=Array.isArray||function(e){return"Array"==r(e)}},lXAN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=function(e){Object(r.useEffect)(function(){var t=document.getElementById(e);document.addEventListener("scroll",function e(){(function(e){var t=e.getBoundingClientRect();return!(t.top>innerHeight||t.bottom<0)})(t)&&(t.classList.add("seen"),document.removeEventListener("scroll",e))})})},i=(n("t3is"),o.a.createElement);t.a=function(e){var t="id_"+e.id;a(t);return i(o.a.Fragment,null,i("div",{style:{top:"-128px",position:"relative"},id:e.id}),i("div",{className:"page-header"},i("h1",{id:t},e.title)))}},p0XB:function(e,t,n){e.exports=n("9BDd")},rr1i:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}},[["9pQ+",1,0,2]]]);