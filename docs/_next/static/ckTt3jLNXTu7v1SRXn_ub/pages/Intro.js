(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"531p":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=(n("kGcX"),i.a.createElement),c=function(e){var t=e.height/1.5>500?e.height/1.5:500,n=e.width>1160?1:e.width>992?.8:e.width>768?.6:.55,c=.1*t,o=(t+c)/2*n,l=(t-c)*n,s=(t+c)*n,h={width:l+"px",height:l+"px"};return Object(r.useEffect)(function(){if(e.width>=751){var t=document.getElementById("circleBG"),n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.beginPath(),n.arc(o+c/2,o,o,0,2*Math.PI),n.fillStyle="rgba(139, 233, 253, 0.2)",n.fill()}}),a("div",{className:"intro-picture row justify-content-end"},e.width>=751?a("canvas",{id:"circleBG",height:s,width:s}):a(i.a.Fragment,null),a("img",{src:e.picture,style:h}))};t.default=function(e){var t={height:e.viewHeight+"px"};return a("div",{className:"intro page",id:"nav_home",style:t},a("div",{className:"row align-items-center"},a("div",{className:"col-lg-7 col-md-8 col-sm-12 intro-item text"},a("div",{className:"intro-panel"},a("p",{className:"message"},"Hello there, I'm"),a("p",{className:"name"},"Guillermo"),a("p",{className:"name"},"Magdaleno"),a("p",{className:"title"},"Software Developer"))),a("div",{className:"col-lg-5 col-md-4 col-sm-12 intro-item picture"},a(c,{height:e.viewHeight,width:e.viewWidth,picture:"Myself.jpg"}))))}},MgzW:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,c,o=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))i.call(n,s)&&(o[s]=n[s]);if(r){c=r(n);for(var h=0;h<c.length;h++)a.call(n,c[h])&&(o[c[h]]=n[c[h]])}}return o}},wkEL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Intro",function(){return n("531p")}])}},[["wkEL",1,0,2]]]);