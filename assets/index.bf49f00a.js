import{o as _,c as u,a as p,b as d,r as f,d as h,e as v,f as E,z as y}from"./vendor.716e5983.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};L();var g=(a,i)=>{const n=a.__vccOpts||a;for(const[t,e]of i)n[t]=e;return n};const N={},O={class:"w-screen h-screen flex justify-center items-center flex-col"},P={class:"w-[85%] h-[90%] bg-white max-w-[900px]"};function A(a,i){const n=f("router-view");return _(),u("div",O,[p("div",P,[d(n)])])}var R=g(N,[["render",A]]);const S="modulepreload",c={},V="/statistics/",s=function(i,n){return!n||n.length===0?i():Promise.all(n.map(t=>{if(t=`${V}${t}`,t in c)return;c[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":S,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((l,m)=>{r.addEventListener("load",l),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},I=[{path:"/",name:"Home",component:()=>s(()=>import("./Home.b91bc6a1.js"),["assets/Home.b91bc6a1.js","assets/Home.29669ee5.css","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/Random",name:"Random",component:()=>s(()=>import("./Random.ecc92c65.js"),["assets/Random.ecc92c65.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/Uniform",name:"Uniform",component:()=>s(()=>import("./Uniform.384b9aed.js"),["assets/Uniform.384b9aed.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/Normal",name:"Normal",component:()=>s(()=>import("./Normal.cfaf1bc6.js"),["assets/Normal.cfaf1bc6.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/NormalSimulation",name:"NormalSimulation",component:()=>s(()=>import("./NormalSimulation.9f270888.js"),["assets/NormalSimulation.9f270888.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js","assets/index.15c82977.js"])},{path:"/StandardNormal",name:"StandardNormal",component:()=>s(()=>import("./StandardNormal.4cc997ce.js"),["assets/StandardNormal.4cc997ce.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/Coin",name:"Coin",component:()=>s(()=>import("./Coin.2123c379.js"),["assets/Coin.2123c379.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js","assets/index.15c82977.js"])},{path:"/NegativeBinomial",name:"NegativeBinomial",component:()=>s(()=>import("./NegativeBinomial.325f6e69.js"),["assets/NegativeBinomial.325f6e69.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js"])},{path:"/NBSimulation",name:"NBSimulation",component:()=>s(()=>import("./NBSimulation.52b744df.js"),["assets/NBSimulation.52b744df.js","assets/Button.84b2ee71.js","assets/vendor.716e5983.js","assets/index.15c82977.js"])}],w=h({history:v(),routes:I});E(R).use(w).use(y).mount("#app");export{g as _};