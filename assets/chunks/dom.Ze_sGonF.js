function r(e,t,o,n){const s=(e.path??(e.composedPath&&e.composedPath())).find(c=>c.className&&c.className.includes(t));if(s){o(s.dataset,e);return}n==null||n()}function u(e,t,o,n){var c,a;const s=(e.path??(e.composedPath&&e.composedPath())).find(d=>d.className&&d.className.includes(t));if(s){o(((a=(c=s.__vueParentComponent)==null?void 0:c.vnode)==null?void 0:a.key)||null,e);return}n==null||n()}function m(e,t,o){e&&t&&o&&e.addEventListener(t,o)}function l(e,t,o){e&&t&&e.removeEventListener(t,o)}async function p(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),o=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const n=document.getSelection(),i=n?n.rangeCount>0&&n.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),i&&(n.removeAllRanges(),n.addRange(i)),o&&o.focus()}}export{l as a,p as b,u as c,r as d,m as o};
