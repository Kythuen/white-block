import{d as k,a3 as w,c as n,o as a,b as i,H as D,F as B,B as C,K as l,a0 as P,k as p}from"./framework.CDmdpyHB.js";import{u as z,a as $}from"./style.DVjA9Ywn.js";import{c as F}from"./dom.Ze_sGonF.js";import{u as N}from"./node.BJaJuXFC.js";import{_ as S}from"./button.vue_vue_type_script_setup_true_lang.Dx9HwBx8.js";import{D as v,S as T}from"./api.DwkIGh4A.js";import G from"./api.DV9Najty.js";import"./theme.CGtRrSKC.js";import"./api.BvvKTAp8.js";const K={...T,...v,...G},W=["gap"],A=k({name:"WbButtonGroup",__name:"button-group",props:w({options:{},buttonProps:{},type:{},theme:{},shape:{},separate:{type:Boolean},gap:{},allowTypes:{},tag:{},onClick:{type:Function},default:{type:[Object,Function]},size:{},disabled:{type:Boolean}},K),emits:["click"],setup(u,{emit:m}){const o=u,d=m,f=z({valueProps:["type","theme","size","shape"],nameProps:["loading","disabled","separate"],nameValueProps:["gap"]}),c=$(e=>{if(o.gap&&typeof o.gap=="number")return{...e,"--wb-button-group-gap":`calc(${o.gap} / 16 * 1rem)`}}),g=N(),b=()=>g("default",{allowNodeTypes:o.allowTypes||["WbButton"]});function y(e,s){e&&d("click",e,s)}return(e,s)=>{var r;return a(),n("div",l({rounded:"$wb-radio-group-radius",flex:"~ row nowrap",gap:e.separate?"$wb-button-group-gap":""},e.$attrs,{class:p(f),style:p(c),onClick:s[0]||(s[0]=P(t=>p(F)(t,"wb-button",y),["stop"]))}),[(r=e.options)!=null&&r.length?(a(!0),n(B,{key:1},C(e.options,(t,h)=>(a(),i(S,l({key:t.key||h,type:e.type,theme:e.theme,shape:e.shape,size:e.size,tag:e.tag,disabled:e.disabled,ref_for:!0},{...e.buttonProps||{},...t},{flex:"1 inline"}),null,16,["type","theme","shape","size","tag","disabled"]))),128)):(a(),i(D(b),{key:0}))],16,W)}}});export{A as default};
