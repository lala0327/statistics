import{T as h,B as f}from"./Button.84b2ee71.js";import{o as _,c as m,b as x,a as s,w as v,v as g,F as p,h as y,t as r,r as d}from"./vendor.716e5983.js";import{_ as B}from"./index.bf49f00a.js";const N={name:"NormalSimulation",components:{Title:h,Button:f},data(){return{randomText:"",selectNum:[],getnum:2,xBar:"________",s:"________"}},mounted(){for(let e=2;e<=25;e++)this.selectNum.push(e)},methods:{calculate(){const e=[];for(let t=1;t<=this.getnum;t++){var l=d3.randomNormal(0,1)().toFixed(4);e.push(l)}this.randomText=e.join(", ");var a=0;for(let t=0;t<=e.length-1;t++)a+=e[t]*1e4;this.xBar=(a/1e4/e.length).toFixed(4);var c=0;const o=[];for(let t=0;t<=e.length-1;t++){const i=Math.round(e[t]*1e4-this.xBar*1e4)/1e4;o.push(Math.pow(i,2))}for(let t=0;t<=o.length-1;t++)c+=o[t]*1e4;this.s=Math.sqrt(c/1e4/(e.length-1)).toFixed(4)}}},j={class:"flex justify-center items-center flex-col"},w={class:"w-[95%] h-[100%] max-w-[650px]"},T={class:"my-[5px] flex justify-center items-center"},k=s("span",{class:"mx-[5px]"},"\u9078\u53D6\u6A23\u672C\u6578\uFF1A",-1),F=["value"],S={class:"flex justify-center flex-col items-center"},M=s("p",{class:"my-[5px]"},"\u4F60\u7684\u96A8\u6A5F\u6578\u70BA\uFF1A",-1),C={class:"w-full min-h-[200px] bg-slate-200 text-[16px] flex flex-wrap py-[5px] px-[10px] text-justify"},V={class:"flex justify-center flex-col items-center"},b={class:"my-[5px]"},D={class:"my-[5px]"};function q(e,l,a,c,o,t){const i=d("Title"),u=d("Button");return _(),m(p,null,[x(i,{title:"\u6A19\u6E96\u5E38\u614B"}),s("div",j,[s("div",w,[s("div",T,[k,v(s("select",{class:"mx-[5px]","onUpdate:modelValue":l[0]||(l[0]=n=>o.getnum=n)},[(_(!0),m(p,null,y(o.selectNum,n=>(_(),m("option",{key:n,value:n},r(n),9,F))),128))],512),[[g,o.getnum]]),x(u,{title:"\u9EDE\u64CA\u8A08\u7B97",class:"mx-[5px]",onClick:t.calculate},null,8,["onClick"])]),s("div",S,[M,s("div",C,r(o.randomText),1)]),s("div",V,[s("p",b,"x\u0304 (\u6A23\u672C\u5E73\u5747\u503C)= "+r(o.xBar),1),s("p",D,"s (\u6A23\u672C\u6A19\u6E96\u5DEE)= "+r(o.s),1)])])])],64)}var z=B(N,[["render",q]]);export{z as default};
