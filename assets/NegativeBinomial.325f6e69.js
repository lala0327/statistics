import{T as v,B as x}from"./Button.84b2ee71.js";import{o as n,c as i,b as m,a as o,w as u,i as g,v as y,F as p,h as k,t as a,j as h,g as B,r as _}from"./vendor.716e5983.js";import{_ as N}from"./index.bf49f00a.js";const w={name:"NegativeBinomial",components:{Title:v,Button:x},data(){return{p:.01,getnum:1,total:0,selectNum:[],start:!1}},mounted(){for(let l=1;l<=50;l++)this.selectNum.push(l)},methods:{check(){this.p>1?this.p=1:this.p<=0&&(this.p=.01)},calculate(){for(var l=0,e=0;e<=this.getnum;){l++;var r=Math.random();if(r<=this.p&&e++,e==this.getnum)break}this.total=l,this.start=!0}}},T={class:"flex justify-center items-center flex-col"},V={class:"w-[95%] h-full max-w-[650px]"},b={class:"my-3 flex justify-center items-center"},C=o("span",{class:"mr-2"},"\u8F38\u5165\u6210\u529F\u7684\u6A5F\u7387\uFF1A",-1),j={class:"my-3 flex justify-center items-center"},M=o("span",{class:"mr-2"},"\u9078\u53D6\u6210\u529F\u7684\u6B21\u6578\uFF1A",-1),D=["value"],F={key:0,class:"text-base my-3 sm:text-lg"},S=o("br",null,null,-1);function U(l,e,r,E,t,c){const d=_("Title"),f=_("Button");return n(),i(p,null,[m(d,{title:"\u8CA0\u4E8C\u9805\u5206\u4F48"}),o("div",T,[o("div",V,[o("div",b,[C,u(o("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=s=>t.p=s),class:"w-16",min:"0",max:"1",step:"0.1",onChange:e[1]||(e[1]=(...s)=>c.check&&c.check(...s))},null,544),[[g,t.p]])]),o("div",j,[M,u(o("select",{class:"w-16","onUpdate:modelValue":e[2]||(e[2]=s=>t.getnum=s)},[(n(!0),i(p,null,k(t.selectNum,s=>(n(),i("option",{key:s,value:s},a(s),9,D))),128))],512),[[y,t.getnum]])]),m(f,{title:"\u958B\u59CB\u8A08\u7B97",class:"my-[5px]",onClick:c.calculate},null,8,["onClick"]),t.start?(n(),i("p",F,[h(" \u5728\u6210\u529F\u7684\u6A5F\u7387\u70BA "+a(t.p)+" \u4E0B ",1),S,h(" \u6A21\u64EC\u57F7\u884C\u7B2C "+a(t.total)+" \u6B21\u6642\u70BA\u7B2C "+a(t.getnum)+" \u6B21\u6210\u529F ",1)])):B("",!0)])])],64)}var A=N(w,[["render",U]]);export{A as default};
