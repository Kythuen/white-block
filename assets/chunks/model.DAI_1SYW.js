import{i as h,J as g}from"./framework.uY59_9OQ.js";function m(s){const c=g();if(!c)return[];const{onSetValue:p,propName:a="value"}=s,{emit:t,vnode:f}=c,n=f.props||{};let e=()=>{};if(c.props.onChange&&(e=c.props.onChange),Object.prototype.hasOwnProperty.call(n,"modelValue"))return[s.props.modelValue,(r,...o)=>{t("update:modelValue",r),t("change",r),e(r,...o),p==null||p(r)}];if(Object.prototype.hasOwnProperty.call(n,a))return[s.props[a],(r,...o)=>{t(`update:${a}`,r),t("change",r),e(r,...o),p==null||p(r)}];const d=h(s.props.defaultValue.value);return[d,(r,...o)=>{d.value=r,e(r,...o),t("change",r),p==null||p(r)}]}export{m as u};