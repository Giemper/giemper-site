(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2GTP":function(e,t,n){var r=n("eaoh");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"2faE":function(e,t,n){var r=n("5K7Z"),o=n("eUtF"),a=n("G8Mo"),i=Object.defineProperty;t.f=n("jmDH")?Object.defineProperty:function(e,t,n){if(r(e),t=a(t,!0),r(n),o)try{return i(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"5K7Z":function(e,t,n){var r=n("93I4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"5T2Y":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"6vdf":function(e,t,n){"use strict";var r=n("p0XB"),o=n.n(r);t.a=function(e,t){return o()(e)?e[t]:e}},"93I4":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9BDd":function(e,t,n){n("GvbO"),e.exports=n("WEpk").Array.isArray},"B+OT":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},G8Mo:function(e,t,n){var r=n("93I4");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},GvbO:function(e,t,n){var r=n("Y7ZC");r(r.S,"Array",{isArray:n("kAMH")})},Hsns:function(e,t,n){var r=n("93I4"),o=n("5T2Y").document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},KUxP:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},MgzW:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(c[u]=n[u]);if(r){i=r(n);for(var l=0;l<i.length;l++)a.call(n,i[l])&&(c[i[l]]=n[i[l]])}}return c}},NegM:function(e,t,n){var r=n("2faE"),o=n("rr1i");e.exports=n("jmDH")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},P0xL:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("PaLU"),o.a.createElement);t.a=function(e){return a("div",{className:"box-item"},a("h1",null,e.title),a("h2",null,e.position),a("h4",{className:"description"},e.duration),a("ul",null,e.description&&e.description.map(function(e,t){return a("li",{key:t},a("p",null,e))})))}},WEpk:function(e,t){var n=e.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},Y7ZC:function(e,t,n){var r=n("5T2Y"),o=n("WEpk"),a=n("2GTP"),i=n("NegM"),c=n("B+OT"),s=function(e,t,n){var u,l,p,f=e&s.F,d=e&s.G,m=e&s.S,y=e&s.P,v=e&s.B,h=e&s.W,b=d?o:o[t]||(o[t]={}),g=b.prototype,w=d?r:m?r[t]:(r[t]||{}).prototype;for(u in d&&(n=t),n)(l=!f&&w&&void 0!==w[u])&&c(b,u)||(p=l?w[u]:n[u],b[u]=d&&"function"!=typeof w[u]?n[u]:v&&l?a(p,r):h&&w[u]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):y&&"function"==typeof p?a(Function.call,p):p,y&&((b.virtual||(b.virtual={}))[u]=p,e&s.R&&g&&!g[u]&&i(g,u,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},a0xu:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},eUtF:function(e,t,n){e.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},jmDH:function(e,t,n){e.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(e,t,n){var r=n("a0xu");e.exports=Array.isArray||function(e){return"Array"==r(e)}},lXAN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=function(e){Object(r.useEffect)(function(){var t=document.getElementById(e);document.addEventListener("scroll",function e(){(function(e){var t=e.getBoundingClientRect();return!(t.top>innerHeight||t.bottom<0)})(t)&&(t.classList.add("seen"),document.removeEventListener("scroll",e))})})},i=(n("t3is"),o.a.createElement);t.a=function(e){var t="id_"+e.id;a(t);return i(o.a.Fragment,null,i("div",{style:{top:"-128px",position:"relative"},id:e.id}),i("div",{className:"page-header"},i("h1",{id:t},e.title)))}},p0XB:function(e,t,n){e.exports=n("9BDd")},pkpb:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("lXAN"),i=n("P0xL"),c=[{title:"Collins Aerospace",position:"Software Engineer",city:["Mexicali, Baja California, Mexico","Mexicali, Baja California, M\xe9xico"],duration:["October 2015 - Current","Octubre 2015 - Presente"],description:[["Developed Intranet webpage for Mexicali's HR department. The page helps employees and managers on our site, allowing them to not only keep up to date with our company's news, but also to fill requests for paid time off, inquiries with HR, work authorizations, and even create monetary rewards based on employee's performance.","Collaborated closely with the HR and Finance departments for the creation of reporting and charting tools, employee self-service platforms, and process automation.","Refactored the Time & Attendance Tracking system of hourly and salary employees to fit the necessities and policies of the company.","Managed the local transition of the HR and Finance systems to a new unified corporate payroll and employee management platform."],["Desarrollo de sitio Intranet para el departamento de Recursos Humanos de Collins Mexicali. El sitio ayuda a empleados y supervisores del sitio permitiendoles no solo a estar al tanto de noticias respecto a nuestra compa\xf1ia, si no tambien generar solicitudes de Permisos con Goces, consultas con RH, autorizaciones de trabajo, e incluso crear recompenzas monetarias a base del desempe\xf1o del empleado.","Colaboraci\xf3n cercana con los departamentos de RH y Finanzas para la creacion de herramientas de reporteo y graficas, plataformas de auto-servicio para empleados, y automatizaci\xf3n de procesos.","Refactorizaci\xf3n del sistema de Puntualidad y Asistencia para seguir las necesidades y pol\xedticas de la compa\xf1\xeda.","Manejo de la transici\xf3n de sistemas de RH y Finanzas a nivel local a una plataforma uniforme a nivel corporativo."]]},{title:"Honeywell Aerospace",position:["Software Engineer - Intern","Software Engineer - Practicante"],city:["Mexicali, Baja California, Mexico","Mexicali, Baja California, M\xe9xico"],duration:["May 2014 - August 2014","Mayo 2014 - Agosto 2014"],description:[["Participated as part of the Honeywell Summer Intership Program","Worked with the Mexicali\u2019s DevOps Tools team collecting the requirements and documentation for the new version of a work authorization tracking system."],['Practicas fueron parte del Programa "Honeywell Summer Intership."',"Trabaje con el equipo DevOps de Mexicali recolectando los requerimientos y documentaci\xf3n para una nueva version de un sistema de seguimiento de autorizacion de trabajos."]]}],s=n("6vdf"),u=o.a.createElement;t.default=function(e){var t=e.languageNum;return u("div",{className:"page"},u("div",{className:"container"},u(a.a,{title:Object(s.a)(["Work Experience","Experiencia Laboral"],t),id:"nav_exp"}),u("div",{className:"row box"},c.map(function(e,n){return u("div",{className:"col-lg-6 col-md-12",key:n},u(i.a,{title:Object(s.a)(e.title,t),position:Object(s.a)(e.position,t),city:Object(s.a)(e.city,t),duration:Object(s.a)(e.duration,t),description:Object(s.a)(e.description,t)}))}))))}},rr1i:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},uFdk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Experience",function(){return n("pkpb")}])}},[["uFdk",1,0,2]]]);