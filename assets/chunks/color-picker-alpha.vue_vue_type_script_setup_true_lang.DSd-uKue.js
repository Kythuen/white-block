import{d as R,t as B}from"./common.CZky7v_H.js";import{o as s,a as c}from"./dom.Ze_sGonF.js";import{d as X,p as d,v as S,$,c as z,o as V,j as t,N as i}from"./framework.CDmdpyHB.js";const N={absolute:"",inset:"0",flex:"",items:"center"},U=X({name:"ColorPickerAlpha",__name:"color-picker-alpha",props:{defaultValue:{type:Number,default:1},selectedColor:{type:String,default:"#ff0000"}},emits:["change"],setup(r,{emit:k}){const p=r,m=k,f=d(),h=d(),y=d();let n=null,a=!1,g=0,u=0;const l=d(0);function v(o){o.stopPropagation(),a=!0,g=o.clientX,l.value=o.clientX-n.left,u=l.value,m("change",1-l.value/n.width),s(document.body,"mousemove",C)}function A(o){if(!a)return;a=!0;let e=o.clientX-g+u;e<0?e=0:e>n.width&&(e=n.width),l.value=e,m("change",1-l.value/n.width)}const C=B(A,18);function x(){a=!1,u=l.value,c(document.body,"mousemove",C)}function w(){n=h.value.getBoundingClientRect()}const b=R(w,300);return S(()=>{w(),p.defaultValue&&(l.value=n.width*(1-p.defaultValue),u=l.value),s(f.value,"mousedown",v),s(document.body,"mouseup",x),s(window,"resize",b)}),$(()=>{c(f.value,"mousedown",v),c(window,"resize",b)}),(o,e)=>(V(),z("div",{ref_key:"ColorAlphaRef",ref:f,relative:"",w:"full",h:"2.5",select:"none"},[e[2]||(e[2]=t("div",{absolute:"",inset:"0",w:"full",h:"full",rounded:"full",overflow:"hidden",style:{background:"#ffffff66","background-image":`linear-gradient(
            45deg,
            #c5c5c5 25%,
            transparent 0,
            transparent 75%,
            #c5c5c5 0,
            #c5c5c5
          ),
          linear-gradient(
            45deg,
            #c5c5c5 25%,
            transparent 0,
            transparent 75%,
            #c5c5c5 0,
            #c5c5c5
          )`,"background-size":"6px 6px","background-position":"0 0 3px 3px"}},null,-1)),t("div",N,[t("div",{w:"2",h:"full",rounded:"l-2",flex:"none",style:i({background:r.selectedColor})},null,4),t("div",{ref_key:"ColorAlphaContentRef",ref:h,w:"full",h:"full",flex:"1",select:"none",cursor:"pointer",style:i({background:`linear-gradient(90deg, ${r.selectedColor}ff, ${r.selectedColor}00)`})},null,4),e[0]||(e[0]=t("div",{w:"2",h:"full",rounded:"r-2",flex:"none"},null,-1))]),t("div",{ref_key:"ColorAlphaHandlerRef",ref:y,absolute:"",top:"50%",left:"0",w:"4",h:"4",rounded:"full",shadow:"sm black",cursor:"pointer",select:"none",style:i({background:r.selectedColor,transform:`translate3d(${l.value}px, -50%, 0)`})},e[1]||(e[1]=[t("div",{w:"full",h:"full",rounded:"full",ring:"2 inset $wb-color-foreground"},null,-1)]),4)],512))}});export{U as _};
