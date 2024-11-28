import{d as a,i as s,o as i,a as l,j as n,k as d}from"./framework.E0xHZxNf.js";const p={flex:"~ none",w:"8",h:"8",rounded:"full",overflow:"hidden",select:"none",style:{background:"#ffffff66","background-image":`linear-gradient(
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
        )`,"background-size":"6px 6px","background-position":"0 0 3px 3px"}},f=["i"],k=a({name:"ColorPickerPreview",__name:"color-picker-preview",props:{selectedColor:{type:String,default:"#ff0000ff"}},emits:["copy"],setup(o,{emit:c}){const t=c,e=s(!1);function r(){e.value=!0,t("copy"),setTimeout(()=>{e.value=!1},500)}return(u,m)=>(i(),l("div",p,[n("div",{w:"full",h:"full",overflow:"hidden",text:"white",style:d({background:o.selectedColor}),flex:"",justify:"center",items:"center",class:"group",cursor:"pointer",onClick:r},[n("i",{class:"hidden !group-hover:block",i:e.value?"tdesign-check":"mdi-content-copy"},null,8,f)],4)]))}});export{k as _};
