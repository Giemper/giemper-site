(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"531p":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),c=function(){var e=Object(i.useState)(0),t=e[0],n=e[1],a=Object(i.useState)(0),c=a[0],o=a[1],s=function(){n(Math.max(document.documentElement.clientHeight,window.innerHeight||0)),o(Math.max(document.documentElement.clientHeight,window.innerWidth||0))};return Object(i.useEffect)(function(){s(),window.addEventListener("resize",function(){s()})}),{viewHeight:t,viewWidth:c}},o=a.a.createElement,s=function(e){var t=e.height/1.5,n=.1*t,a=t/2,c={width:t-n+"px",height:t-n+"px",marginTop:n+"px"};return Object(i.useEffect)(function(){var e=document.getElementById("circleBG").getContext("2d");e.beginPath(),e.arc(a+n,a+n/2,a,0,2*Math.PI),e.fillStyle="rgba(139, 233, 253, 0.2)",e.fill()}),o("div",{className:"row justify-content-end"},o("div",null,o("div",{className:"intro-canvas"},o("div",{className:"canvas-panel"},o("div",{className:"relative-panel"},o("canvas",{id:"circleBG",height:t+n,width:t+n}),o("img",{src:"/myself.jpg",style:c}))))))},l=function(e){var t=e.height,n=e.width,c=function(e,t,n,i,a){e.moveTo(t,n),e.lineTo(i,a),e.stroke()};return Object(i.useEffect)(function(){var e=document.getElementById("animatedBG").getContext("2d");e.beginPath(),e.strokeStyle="rgba(68, 71, 90, 0.5)",e.lineWidth=3,c(e,0,0,n,t-150),c(e,.75*n,0,n/2,t),c(e,.43*n,0,0*n,.85*t),c(e,.08*n,0,.39*n,t),c(e,n,.04*t,.15*n,t),c(e,0,.45*t,.81*n,t),c(e,.51*n,0,.62*n,t)}),o(a.a.Fragment,null,o("canvas",{id:"animatedBG",height:t-50,width:n}))};t.default=function(){var e=c(),t=e.viewHeight,n=e.viewWidth,i={height:t-50+"px"};return o("div",{className:"intro",id:"nav_home"},o("div",{className:"intro-background",style:{height:t-50+"px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%"}},o(l,{height:t,width:n})),o("div",{className:"row align-items-center",style:i},o("div",{className:"col-7"},o("div",{className:"intro-panel"},o("p",{className:"message"},"Hello I'm"),o("p",{className:"name"},"Guillermo"),o("p",{className:"name"},"Magdaleno"),o("p",{className:"title"},"Software Developer"))),o("div",{className:"col-5"},o(s,{height:t,width:n}))))}},wkEL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Intro",function(){return n("531p")}])}},[["wkEL",1,0]]]);