import{d as f,a3 as m,a4 as b,q as h,c as w,o as v,j as a,k as s,a0 as y,N as k,n as $}from"./framework.CDmdpyHB.js";import{C}from"./theme.CGtRrSKC.js";import{u as B,a as D}from"./style.DVjA9Ywn.js";import{u as _}from"./model.B6iaKfeX.js";import{R as x,D as V,S as z}from"./api.DwkIGh4A.js";import S from"./api.W-32ahHZ.js";const P={...z,...V,...x,...S},R=["bg"],j=["flex"],E=f({name:"WbToggle",__name:"toggle",props:m({theme:{},color:{},shape:{},readonly:{type:Boolean},onClick:{type:Function},size:{},disabled:{type:Boolean},value:{type:Boolean},modelValue:{type:Boolean},defaultValue:{type:Boolean},onChange:{type:Function}},P),emits:["click"],setup(r,{emit:i}){const e=r,u=i,c=B({valueProps:["theme","shape","size"]}),g=D(()=>{if(e.color){const t=C(e.color),{color:l,valpha:d}=t.rgb();return{"--wb-toggle-color":`rgb(${l.join(" ")} / ${d})`}}}),[o,n]=_({props:b(e)});function p(){n(!o.value),u("click",o.value)}return h(()=>e.value,t=>{n(t)}),(t,l)=>(v(),w("div",{h:"$wb-toggle-height",flex:"~ row",items:"center",class:$(s(c)),style:k(s(g))},[a("button",{w:"[calc(var(--wb-toggle-height-content)*1.8)]",h:"$wb-toggle-height-content",bg:s(o)?"$wb-toggle-background-active":"$wb-toggle-background",rounded:"$wb-toggle-radius",flex:"inline shrink-0",border:"2 solid transparent",cursor:"disabled:not-allowed",op:"disabled:50","focus-visible":"rounded-full outline outline-2 outline-offset-2 outline-$wb-color-primary",transition:"colors ease-in-out duration-200",onClick:y(p,["stop"])},[a("span",{flex:s(o)?"1":"0","pointer-events":"none",transition:"all ease-in-out duration-200"},null,8,j),l[0]||(l[0]=a("span",{"inline-block":"",w:"[calc(var(--wb-toggle-height-content)-0.25rem)]",h:"full",rounded:"$wb-toggle-radius",bg:"$wb-toggle-indicator",shadow:"md","pointer-events":"none"},null,-1))],8,R)],6))}});export{E as default};
