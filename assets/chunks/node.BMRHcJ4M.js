import{J as c,K as p}from"./framework.uY59_9OQ.js";function d(t,e){return t.filter(o=>{const n=Object.prototype.toString.call(o.type)==="[object Object]"?o.type.name:o.type.toString();return n==="Symbol(v-fgt)"?!0:e.length&&!e.includes(n)?(console.warn(`[white-block]: Detected invalid child element type: \`${n}\``),!1):!0})}function a(){const t=c();return function(e,o){var l,i;if(!t)return null;const{prior:n="slots",allowNodeTypes:s=[]}=o||{};let u=null;if(t.slots[e]){const f=(i=(l=t.slots)[e])==null?void 0:i.call(l,t.props);f&&(u=d(f,s))}if(n==="slots"&&u)return u;let r=null;return t.props[e]&&(r=t.props[e]),typeof r=="function"&&(r=r(p,{})),r}}function N(){const t=a();return function(e,o){for(const n of e){const s=t(n,o);if(s)return s}return null}}function b(){var e,o;const t=c();return t!=null&&t.slots.default?(o=(e=t.slots).default)==null?void 0:o.call(e,t.props):[]}export{N as a,b,a as u};