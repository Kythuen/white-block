import{d as P,a3 as R,a4 as j,p as b,v as L,$ as q,s as A,c as $,o as p,b as g,j as m,G as w,e as E,w as c,k as i,a0 as O,N as U,n as G}from"./framework.CDmdpyHB.js";import{w as K,u as T,a as W}from"./style.DVjA9Ywn.js";import{o as z,a as D,d as X}from"./dom.Ze_sGonF.js";import{u as H}from"./model.B6iaKfeX.js";import{u as J}from"./node.BJaJuXFC.js";import"./theme.CGtRrSKC.js";import{_ as Q}from"./button.vue_vue_type_script_setup_true_lang.Dx9HwBx8.js";import{C as Y,R as Z,D as _,L as ee,S as ae}from"./api.DwkIGh4A.js";import te from"./api.CudfR5Mw.js";import"./api.BvvKTAp8.js";const v=K(Q),ne={...ae,...ee,..._,...Z,...Y,...te},ie=["p","focus-within"],oe=["value","readonly","disabled","step","placeholder","ring","focus-visible"],se={key:3,h:"[calc(var(--wb-input-number-height)-3px)]",m:"r-px",p:"b-px",bg:"$wb-color-soft",flex:"~ none col",gap:"1px",class:"wb-input-number-options"},he=P({name:"WbInputNumber",__name:"input-number",props:R({type:{},theme:{},placeholder:{},align:{},max:{},min:{},step:{},decimal:{},separator:{type:Boolean},format:{type:Function},readonly:{type:Boolean},prefix:{type:[String,Object,Function]},suffix:{type:[String,Object,Function]},size:{},loading:{type:Boolean},disabled:{type:Boolean},clearable:{type:Boolean},value:{},modelValue:{},defaultValue:{},onChange:{type:Function}},ne),emits:["click","change","update:value","update:modelValue"],setup(V){const t=V,x=T({valueProps:["type","align","theme","size"],nameProps:["disabled","readonly"]}),B=W(),y=J(),C=()=>y("prefix"),I=()=>y("suffix"),[o,h]=H({props:j(t)});function F(e){return parseFloat(e.toFixed(t.decimal))}function l(e){if(!e)return e;let a=e;return typeof t.max=="number"&&a>t.max&&(a=Math.min(a,t.max)),typeof t.min=="number"&&a<t.min&&(a=Math.max(a,t.min)),a}const r=b(),k=b(!1);function f(e){k.value=e.type==="focus"}function N(e){e.preventDefault();let a=o.value||0;switch(e.code){case"ArrowUp":{a+=t.step;break}case"ArrowDown":{a-=t.step;break}}const n=l(a);s.value=n,h(n)}L(()=>{t.format&&(z(r.value,"focus",f),z(r.value,"blur",f))}),q(()=>{t.format&&(D(r.value,"focus",f),D(r.value,"blur",f))});const u=b(""),s=b(o.value);A(()=>{var a,n;if(!s.value){u.value=(a=s.value)==null?void 0:a.toString();return}const e=(n=l(s.value))==null?void 0:n.toFixed(t.decimal);if(k.value){u.value=e;return}if(t.format){u.value=t.format(l(s.value),e);return}t.separator&&(u.value=e==null?void 0:e.replace(/\B(?=(\d{3})+(?!\d))/g,",")),u.value=e});function S(e){const n=e.target.value,d=n?parseFloat(n)||0:void 0;s.value=d,h(l(d))}function M(e){const{key:a}=e;let n=o.value||0;switch(a){case"add":n+=t.step;break;case"sub":{n-=t.step;break}}const d=F(l(n));s.value=d,h(d)}return(e,a)=>(p(),$("div",{relative:"",w:"$wb-input-number-width",p:e.theme==="side"?"1px":"0",rounded:"$wb-input-number-radius",ring:"1 inset $wb-input-number-border",overflow:"hidden","focus-within":e.theme==="side"?"":"outline outline-2 outline-$wb-color-primary",flex:"~ inline",items:"center",gap:"$wb-input-number-gap",class:G(i(x)),style:U(i(B)),onClick:a[0]||(a[0]=O(n=>i(X)(n,"wb-button",M),["stop"]))},[e.theme==="side"?(p(),g(i(v),{key:0,tabindex:"-1","data-key":"sub",type:"outline",theme:"default",shape:"square",size:e.size,disabled:e.min!==void 0&&e.min>=i(o)},{default:c(()=>a[1]||(a[1]=[m("i",{i:"tdesign-minus"},null,-1)])),_:1},8,["size","disabled"])):(p(),g(C,{key:1})),m("input",{ref_key:"InputRef",ref:r,value:u.value,readonly:e.readonly,disabled:e.disabled,step:e.step,placeholder:e.placeholder,maxlength:"15",flex:"1",h:"$wb-input-number-height",p:"x-$wb-input-number-padding",bg:"$wb-input-number-background",ring:e.theme==="side"?"1 inset $wb-input-number-border":"",rounded:"$wb-input-number-radius",text:"$wb-input-number-text",overflow:"hidden","focus-visible":e.theme==="side"?"outline outline-2 outline-$wb-color-primary":"",onInput:S,onKeydown:N},null,40,oe),w(I),e.theme==="side"?(p(),g(i(v),{key:2,tabindex:"-1","data-key":"add",type:"outline",theme:"default",shape:"square",size:e.size,disabled:e.max!==void 0&&e.max<=i(o)},{default:c(()=>a[2]||(a[2]=[m("i",{i:"tdesign-add"},null,-1)])),_:1},8,["size","disabled"])):e.theme==="inner"?(p(),$("div",se,[w(i(v),{size:e.size,disabled:e.max!==void 0&&e.max<=i(o),theme:"default",tabindex:"-1","data-key":"add",w:"full",h:"[calc(50%)]",rounded:"rt-$wb-input-number-radius","focus-visible":"outline-0 bg-$wb-color-primary"},{default:c(()=>a[3]||(a[3]=[m("i",{i:"tdesign-chevron-up"},null,-1)])),_:1},8,["size","disabled"]),w(i(v),{size:e.size,theme:"default",disabled:e.min!==void 0&&e.min>=i(o),tabindex:"-1","data-key":"sub",w:"full",h:"[calc(50%)]",rounded:"rb-$wb-input-number-radius","focus-visible":"outline-0 bg-$wb-color-primary"},{default:c(()=>a[4]||(a[4]=[m("i",{i:"tdesign-chevron-down"},null,-1)])),_:1},8,["size","disabled"])])):E("",!0)],14,ie))}});export{he as default};
