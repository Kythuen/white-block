import{d as p,C as e,c as m,o as i,G as t,j as _}from"./framework.CDmdpyHB.js";const f={w:"full",flex:"",gap:"2",select:"none"},d={class:"wb-input-number-group",w:"full",flex:"",gap:"1"},x=p({name:"ColorPickerValue",__name:"color-picker-value",props:{selectedColor:{type:Object,default:()=>({hex:"",hexAlpha:100})}},setup(l){const o=[{label:"HEX",value:"hex"}];function a(s,n){return`${n}%`}return(s,n)=>{const c=e("wb-select"),u=e("wb-input"),r=e("wb-input-number");return i(),m("div",f,[t(c,{w:"16.5",flex:"~ 1",options:o,size:"sm","default-value":"hex",select:"none"}),_("div",d,[t(u,{w:"full",flex:"~ 1",size:"sm",theme:"none",value:l.selectedColor.hex},null,8,["value"]),t(r,{w:"14",flex:"~",size:"sm",align:"center",theme:"none","default-value":l.selectedColor.hexAlpha,format:a},null,8,["default-value"])])])}}});export{x as default};
