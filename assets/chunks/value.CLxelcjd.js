import{d as r,i as d,p as n,o as _,c as i,w as u,e as a,I as m}from"./framework.uY59_9OQ.js";const w=r({__name:"value",setup(v){const o=d("");function s(){o.value+="1"}return(b,e)=>{const l=n("wb-input"),p=n("wb-button"),c=n("wb-space");return _(),i(c,{vertical:""},{default:u(()=>[a(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t)},null,8,["modelValue"]),a(l,{value:o.value,"onUpdate:value":e[1]||(e[1]=t=>o.value=t)},null,8,["value"]),a(p,{block:"",onClick:s},{default:u(()=>e[2]||(e[2]=[m("changeValue")])),_:1})]),_:1})}}});export{w as default};