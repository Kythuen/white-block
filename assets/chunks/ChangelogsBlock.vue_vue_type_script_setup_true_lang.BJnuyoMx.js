import{d as u,u as h,C as p,c as a,o as t,F as g,B as k,j as s,e as n,b as v,t as o,w as b,a as f,k as w}from"./framework.CDmdpyHB.js";const x={class:"changelogs vp-raw",flex:"~ col",gap:"8"},y={key:0},m=["src"],B=["innerHTML"],C=["id"],D=u({__name:"ChangelogsBlock",setup(L){const{page:i}=h();return(N,T)=>{const _=p("wb-button");return t(),a("div",x,[(t(!0),a(g,null,k(w(i).changelogs,e=>{var r,c,d,l;return t(),a("div",{key:e.date,flex:"",gap:"8"},[s("div",null,[(r=e.data)!=null&&r.version?(t(),a("h2",y,o(e.data.title),1)):n("",!0),(c=e.data)!=null&&c.preview?(t(),a("img",{key:1,src:(d=e.data)==null?void 0:d.preview},null,8,m)):n("",!0),s("div",{innerHTML:e.content},null,8,B),(l=e.data)!=null&&l.version?(t(),v(_,{key:2,href:"https://github.com/Kythuen/white-block/releases",target:"__blank",tag:"a",type:"base",size:"sm",theme:"default",shape:"round"},{default:b(()=>[f(o(e.data.version),1)]),_:2},1024)):n("",!0)]),s("div",{id:e.date,class:"hidden !lg:block",w:"52",h:"10",text:"md right $wb-color-text-secondly",font:"leading-10",shrink:"0"},[s("div",null,o(e.date),1)],8,C)])}),128))])}}});export{D as _};
