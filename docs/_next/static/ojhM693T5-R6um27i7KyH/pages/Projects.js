(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2GTP":function(e,o,n){var a=n("eaoh");e.exports=function(e,o,n){if(a(e),void 0===o)return e;switch(n){case 1:return function(n){return e.call(o,n)};case 2:return function(n,a){return e.call(o,n,a)};case 3:return function(n,a,t){return e.call(o,n,a,t)}}return function(){return e.apply(o,arguments)}}},"2faE":function(e,o,n){var a=n("5K7Z"),t=n("eUtF"),r=n("G8Mo"),i=Object.defineProperty;o.f=n("jmDH")?Object.defineProperty:function(e,o,n){if(a(e),o=r(o,!0),a(n),t)try{return i(e,o,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[o]=n.value),e}},"5K7Z":function(e,o,n){var a=n("93I4");e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},"5T2Y":function(e,o){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"6vdf":function(e,o,n){"use strict";var a=n("p0XB"),t=n.n(a);o.a=function(e,o){return t()(e)?e[o]:e}},"93I4":function(e,o){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9BDd":function(e,o,n){n("GvbO"),e.exports=n("WEpk").Array.isArray},"9pQ+":function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects",function(){return n("MwIo")}])},"B+OT":function(e,o){var n={}.hasOwnProperty;e.exports=function(e,o){return n.call(e,o)}},G8Mo:function(e,o,n){var a=n("93I4");e.exports=function(e,o){if(!a(e))return e;var n,t;if(o&&"function"==typeof(n=e.toString)&&!a(t=n.call(e)))return t;if("function"==typeof(n=e.valueOf)&&!a(t=n.call(e)))return t;if(!o&&"function"==typeof(n=e.toString)&&!a(t=n.call(e)))return t;throw TypeError("Can't convert object to primitive value")}},GvbO:function(e,o,n){var a=n("Y7ZC");a(a.S,"Array",{isArray:n("kAMH")})},Hsns:function(e,o,n){var a=n("93I4"),t=n("5T2Y").document,r=a(t)&&a(t.createElement);e.exports=function(e){return r?t.createElement(e):{}}},KUxP:function(e,o){e.exports=function(e){try{return!!e()}catch(o){return!0}}},MgzW:function(e,o,n){"use strict";var a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var o={},n=0;n<10;n++)o["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(o).map(function(e){return o[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(t){return!1}}()?Object.assign:function(e,o){for(var n,i,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))t.call(n,l)&&(s[l]=n[l]);if(a){i=a(n);for(var u=0;u<i.length;u++)r.call(n,i[u])&&(s[i[u]]=n[i[u]])}}return s}},MwIo:function(e,o,n){"use strict";n.r(o);var a=n("q1tI"),t=n.n(a),r=[{title:"Eco Car Wash",type:"Phone",sourceMain:"videos/EcoCarWash.webm",sourceFallback:"videos/EcoCarWash.mp4",description:[["Project done for a car wash company in Baja California, Mexico.","The app tracks follows, registers, and reports the cleaning life cycle in which a car might go through: the car entering the car wash, an employee being assigned for cleaning, and completition of work.","The purpose was not only to report assistance and performance, but also to balance the workload by assigning the next jobs automatically among employees."],["Proyecto hecho para un compa\xf1ia de auto-lavados en Baja California, M\xe9xico.","La aplicacion sigue, registra, y reportea el ciclo de vida del lavado por el que puede pasar cada autom\xf3vil: desde que ingresa al auto-lavado, cuando se asigna un limpeador, y cuando el trabajo fue terminado.","El proposito era no solo reportar la asistencia y desempe\xf1o, si no tambien balancear la carga de trabajo al asignar automaticamente lo siguentes trabajos entre empleados."]],skills:["Java","Android Development","Firebase"],availability:[{title:"Play Store",link:"https://play.google.com/store/apps/details?id=com.giemper.ecocarwash"},{title:"Github",link:"https://github.com/Giemper/EcoCarWash"}]},{title:"Colour App",type:"Phone",sourceMain:"videos/Colour.webm",sourceFallback:"videos/Colour.mp4",description:[["This project was done a few years ago as practice for Android Development","The goal of Colour is to be a minimalist color picker for your phone for when you're in need of picking a quick color reference for a project."],["Este projecto fue hecho hace un par de a\xf1os como practica en desarrollo para Android","La meta de Colour es ser un seleccionador de colores minimalista, para cuando uno este en necesidad de escoger una referencia de color rapida para un proyecto."]],skills:["Java","Android Development"],availability:[{title:"Github",link:"https://github.com/Giemper/Colour"}]},{title:"Giemper.com",type:"Browser",sourceMain:"videos/Giempercom.webm",sourceFallback:"videos/Giempercom.mp4",description:[["Look! It's the site you're on right now!","The site was done using React + NextJS, Bootstrap Grids, Google Fonts, and a few Font Awesome icons.","Fun Fact: The domain is called Giemper.com because of my full name initials.","Guillermo Magdaleno Perez. GMP. Gee-Em-Pe. Giemper."],["\xa1Mira, es el sitio en el que estas ahorita mismo!","El sitio fue hecho usando React + NextJS, Bootstrap Grids, Google Fonts, y unos cuantos iconos de Font Awesome.","Dato Curioso: El dominio se llama Giemper.com gracias a las iniciales de mi nombre completo.","Guillermo Magdaleno Perez. GMP. Gee-Em-Pe. Giemper."]],skills:["React","NextJS","SASS"],availability:[{title:"Giemper.com",link:"#nav_home"},{title:"Github",link:"https://github.com/Giemper/giemper-site"}]},{title:"Posada 2016",type:"Browser",sourceMain:"videos/Posada.webm",sourceFallback:"videos/Posada.mp4",description:[["Since high school, every year around Christmas eve a my friends and I organized a Secret Santa gift exchange amoung ourselves. While we all get along, there are sometimes when you just don't want to get matched with someone specific.","Starting on 2014, I came up with the idea of doing a site to help us with that conundrum. The site not only did the matching without ruining the surprise for anyone, but filtered out any 'incompatible' matches.","Every participant was able to create a profile, answer some questions about themselves to help their Santa, read the preferences and send annonymous messages to who they were supposed to give a gift to.","While we keep meeting for our annual Christmas party, sadly 2016 was the last year of our Secret Santa exchange. Maybe I should give this project another go soon!"],["Desde que estabamos en preparatoria, cada a\xf1o cerca de Navidad mis amigos y yo nos organizamos para un intercambio navide\xf1o 'Santa Secreto' entre nosotros. Aunque todos nos llevamos muy bien, hay ocaciones en los cuales uno no quiere ser asignado con alguien especifico.","Empezando en 2014, tuve la idea de dise\xf1ar un sitio que nos ayude con este problema. El sitio no solo permite hacer la asignaci\xf3n del intercambio sin arruinar la sorpresa para nadie, si no tambien filtra cualquier asignaci\xf3n 'incompatible'.","Cada participante puede crear su perfil, responder algunas preguntas sobre si mismos para ayudar a su Santa, y enviar mensajes anonimos y leer las preferencias de la persona a quien le tienen que dar un regalo.","Aunque seguimos haciendo nuestra fiesta Navide\xf1a Anual, tristemente 2016 fue el ultimo a\xf1o del intercambio de regalos. Quizas deberia pronto darle otra oportunidad a este proyecto."]],skills:["AngularJS","PHP","SQL","jQuery"],availability:[{title:"Github",link:"https://github.com/Giemper/Posada2016"}]},{title:"HRPoint",type:"None",skills:["VueJS","Sharepoint",".NET","SQL","Azure"],description:[["HRPoint is the intranet webpage for Collins Aerospace Mexicali.","Employees of Collins Aerospace can get into the site to check the latest news and happenings in our facilities, check a roadmap of their career development in the company, check employee benefits, find and fill request forms for things like Paid Time Off, check the weekly cafeteria menu, calendars, and inquiries with Human Resources, Finance, and Health & Security departments.","Some features and sections are locked depending on the management level, as they might have information and forms limited for exclusive use of supervisors, like requesting monetary rewards for employees based on performance.","The newsletter and content of the site is constantly updated by the Communications department by using a blog-like interface in which they can choose how the information is going to be deployed. It could be just a new post, it could be an announcent with a header image in the homepage, or a site-wide email.","HRPoint is available only in the Collins Aerospace internal network."],["HRPoint es la pagina intranet de Collins Aerospace Mexicali.","Empleados de Collins Aerospace puenden entrar al sitio para checar las noticias y eventos m\xe1s recientes en nuestras instalaciones, ver opciones para desarollo profesional, consultar los beneficios como empleado, encontrar y llenar formatos para cosas como permisos con gose, ver el men\xfa semanal de la cafeter\xeda, calendarios, y consultas con los departamentos de Recursos Humanos, Finanzas, y Seguridad.","Algunas funciones estan restrigidas dependiendo del nivel de manejo, ya que pueden contar con informaci\xf3n y formatos limitadas para uso exclusivo de supervisores, como solitar recomentazas economicas para empleados basado en desempe\xf1o.","El boletin informativo y contenido del sitio es constantemente actualizado por el departamento de Comunicaci\xf3n usando una interface tipo blog, en el cual pueden escoger como la informaci\xf3n va a ser distribuida. Puede ser solamente un nueva publicaci\xf3n, puede ser un anuncio visual en la p\xe1gina de inicio, o puede ser un correo electronico para toda el sitio.","HRPoint esta disponible solamente en la red interna de Collins Aerospace."]]}],i=n("lXAN"),s=(n("9l6E"),n("pHVj")),c=n("6vdf"),l=t.a.createElement,u=function(e){var o="Phone"===e.type?"phone-preview":"browser-preview";return l("video",{className:o,autoPlay:!0,loop:!0,muted:!0},l("source",{src:e.main,type:"video/webm"}),l("source",{src:e.fallback,type:"video/mp4"}))},p=function(e){var o=e.languageNum,n=Object(c.a)(e.description,o),a=e.index%2==0?"order-last":"order-first",r="Phone"===e.type?"col-lg-6 col-md-6 col-sm-12 project-pad":"Browser"===e.type?"col-lg-6 col-md-6 col-sm-12 project-pad":"col-12 project-pad",i="Phone"===e.type?"col-lg-6 col-md-6 col-sm-12 project-pad "+a:"Browser"===e.type?"col-lg-6 col-md-6 col-sm-12 project-pad "+a:"",p="Phone"===e.type?"center":"",d="Phone"===e.type?"":"center";return l("div",{className:"project-item"},l("div",{className:"row"},l("div",{className:r},l("div",{className:"project-text ".concat(p)},l("h1",null,e.title),void 0!==n&&n.map(function(e,o){return l("p",{key:o},e)}),void 0!==e.skills&&l(t.a.Fragment,null,l("h3",null,Object(c.a)(["Made with","Hecho con"],o)),l("div",null,e.skills.map(function(e,o){return l(s.a,{text:e,key:o})}))),void 0!==e.availability&&l(t.a.Fragment,null,l("h3",null,Object(c.a)(["Available at","Displonible en"],o)),l("div",null,e.availability.map(function(e,o){return l("a",{key:o,href:e.link,target:"_bind",className:"project-link"},e.title)}))))),void 0!==e.sourceMain&&l("div",{className:i},l("div",{className:"project-preview ".concat(d)},l(u,{type:e.type,main:e.sourceMain,fallback:e.sourceFallback})))))},d=t.a.createElement;o.default=function(e){var o=e.languageNum;return d("div",{className:"page shadow"},d("div",{className:"container"},d(i.a,{title:Object(c.a)(["Projects","Proyectos"],o),id:"nav_pro"}),r.map(function(e,n){return d(p,{key:n,index:n,title:e.title,type:e.type,sourceMain:e.sourceMain,sourceFallback:e.sourceFallback,description:e.description,skills:e.skills,availability:e.availability,languageNum:o})})))}},NegM:function(e,o,n){var a=n("2faE"),t=n("rr1i");e.exports=n("jmDH")?function(e,o,n){return a.f(e,o,t(1,n))}:function(e,o,n){return e[o]=n,e}},WEpk:function(e,o){var n=e.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},Y7ZC:function(e,o,n){var a=n("5T2Y"),t=n("WEpk"),r=n("2GTP"),i=n("NegM"),s=n("B+OT"),c=function(e,o,n){var l,u,p,d=e&c.F,m=e&c.G,f=e&c.S,h=e&c.P,y=e&c.B,g=e&c.W,v=m?t:t[o]||(t[o]={}),b=v.prototype,w=m?a:f?a[o]:(a[o]||{}).prototype;for(l in m&&(n=o),n)(u=!d&&w&&void 0!==w[l])&&s(v,l)||(p=u?w[l]:n[l],v[l]=m&&"function"!=typeof w[l]?n[l]:y&&u?r(p,a):g&&w[l]==p?function(e){var o=function(o,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(o);case 2:return new e(o,n)}return new e(o,n,a)}return e.apply(this,arguments)};return o.prototype=e.prototype,o}(p):h&&"function"==typeof p?r(Function.call,p):p,h&&((v.virtual||(v.virtual={}))[l]=p,e&c.R&&b&&!b[l]&&i(b,l,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},a0xu:function(e,o){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},eUtF:function(e,o,n){e.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},jmDH:function(e,o,n){e.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kAMH:function(e,o,n){var a=n("a0xu");e.exports=Array.isArray||function(e){return"Array"==a(e)}},lXAN:function(e,o,n){"use strict";var a=n("q1tI"),t=n.n(a),r=function(e){Object(a.useEffect)(function(){var o=document.getElementById(e);document.addEventListener("scroll",function e(){(function(e){var o=e.getBoundingClientRect();return!(o.top>innerHeight||o.bottom<0)})(o)&&(o.classList.add("seen"),document.removeEventListener("scroll",e))})})},i=(n("t3is"),t.a.createElement);o.a=function(e){var o="id_"+e.id;r(o);return i(t.a.Fragment,null,i("div",{style:{top:"-128px",position:"relative"},id:e.id}),i("div",{className:"page-header"},i("h1",{id:o},e.title)))}},p0XB:function(e,o,n){e.exports=n("9BDd")},pHVj:function(e,o,n){"use strict";var a=n("q1tI"),t=n.n(a).a.createElement;o.a=function(e){return t("div",{className:"skill-item"},t("span",null,e.text))}},rr1i:function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}}},[["9pQ+",1,0,2]]]);