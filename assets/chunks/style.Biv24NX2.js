import{E as i,J as p}from"./framework.uY59_9OQ.js";const u=e=>{if(!e||e.length===0)return"";const t=e.toLowerCase();return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},l=e=>{var o;const t=((o=e==null?void 0:e.replace(/([A-Z])+/g,u))==null?void 0:o.split(/(?=[A-Z])|[\.\-\s_]/).map(s=>s.toLowerCase()))??[];return t.length===0?"":t.length===1?t[0]:t.reduce((s,r)=>`${s}-${r.toLowerCase()}`)},h=e=>{const t=(e==null?void 0:e.split(/[\.\-\s_]/).map(o=>o.toLowerCase()))??[];return t.length===0?"":t.map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join("")},z=e=>e?e.split(/(?=[A-Z])|[\.\-\s_]/).map(t=>t.trim()).filter(t=>!!t).map(t=>u(t.toLowerCase())).join(" "):"";function C(e){const t=e;return t.install=o=>{t.name&&o.component(t.name,t)},t}function w(e){const t=Math.max(18,e),o=Math.floor(t/4),s=o+6,r=(o-4)/2+2;return{height:t,padding:o,fontSize:s,radius:r,gap:r}}function S(e){return{xs:18,sm:24,md:32,lg:40,xl:48}[e]}function g(e,t){const o=Math.max(18,t),s=Math.floor(o/4)+2,r=s+4,n=(s-6)/2+2,a=n;return{[`--${e}-height`]:`calc(${o} / 16 * 1rem)`,[`--${e}-padding`]:`calc(${s} / 16 * 1rem)`,[`--${e}-font-size`]:`calc(${r} / 16 * 1rem)`,[`--${e}-radius`]:`calc(${n} / 16 * 1rem)`,[`--${e}-gap`]:`calc(${a} / 16 * 1rem)`}}function y(e){var r;const t=p(),o=(t==null?void 0:t.props)||{},s=l(((r=t==null?void 0:t.type)==null?void 0:r.name)||"");return i(()=>{const n=[s],{valueProps:a=[],nameProps:f=[],nameValueProps:m=[]}=e;for(const c of a)o[c]&&n.push(`${s}--${o[c]}`);for(const c of f)o[c]&&n.push(`${s}--${c}`);for(const c of m)o[c]&&n.push(`${s}-${c}--${o[c]}`);return n.join(" ")})}function P(e){var r;const t=p(),o=(t==null?void 0:t.props)||{},s=l(((r=t==null?void 0:t.type)==null?void 0:r.name)||"");return i(()=>{let n={};return typeof o.size=="number"&&(n=g(s,o.size)),e&&(n={...n,...(e==null?void 0:e(n,o))||{}}),n})}export{P as a,S as b,w as g,h as p,z as t,y as u,C as w};