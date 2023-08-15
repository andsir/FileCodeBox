import{i as B,ab as ye,ac as Ie,a8 as J,ad as z,ae as Ce,af as Le,ag as he,ah as we,ai as Ne,aj as Ae,a3 as $e,_ as Re}from"./base-3569949a.js";import{B as V,r as F,l as T,Y as ke,P as De,n as H,a0 as je,o as q,R as G,d as Ue,I as Ve,s as k,E as Me,i as xe}from"./index-4cf91ffb.js";function A(e){var t;const n=z(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=B?window:void 0;function R(...e){let t,n,r,o;if(Le(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=L):[t,n,r,o]=e,!t)return he;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],f=()=>{l.forEach(m=>m()),l.length=0},u=(m,_,a,c)=>(m.addEventListener(_,a,c),()=>m.removeEventListener(_,a,c)),O=T(()=>[A(t),z(o)],([m,_])=>{f(),m&&l.push(...n.flatMap(a=>r.map(c=>u(m,a,c,_))))},{immediate:!0,flush:"post"}),E=()=>{O(),f()};return J(E),E}let Z=!1;function kt(e,t,n={}){const{window:r=L,ignore:o=[],capture:l=!0,detectIframe:f=!1}=n;if(!r)return;$e&&!Z&&(Z=!0,Array.from(r.document.body.children).forEach(a=>a.addEventListener("click",he)));let u=!0;const O=a=>o.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(s=>s===a.target||a.composedPath().includes(s));{const s=A(c);return s&&(a.target===s||a.composedPath().includes(s))}}),m=[R(r,"click",a=>{const c=A(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(u=!O(a)),!u){u=!0;return}t(a)}},{passive:!0,capture:l}),R(r,"pointerdown",a=>{const c=A(e);c&&(u=!a.composedPath().includes(c)&&!O(a))},{passive:!0}),f&&R(r,"blur",a=>{var c;const s=A(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(s!=null&&s.contains(r.document.activeElement))&&t(a)})].filter(Boolean);return()=>m.forEach(a=>a())}function be(e,t=!1){const n=F(),r=()=>n.value=!!e();return r(),ye(r,t),n}function Ke(e,t={}){const{window:n=L}=t,r=be(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const l=F(!1),f=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",u):o.removeListener(u))},u=()=>{r.value&&(f(),o=n.matchMedia(Ne(e).value),l.value=o.matches,"addEventListener"in o?o.addEventListener("change",u):o.addListener(u))};return ke(u),J(()=>f()),l}function Be(e){return JSON.parse(JSON.stringify(e))}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__";Q[W]=Q[W]||{};const He=Q[W];function Pe(e,t){return He[e]||t}function Qe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var We=Object.defineProperty,ee=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t)=>{for(var n in t||(t={}))Je.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))ze.call(t,n)&&te(e,n,t[n]);return e};const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},re="vueuse-storage";function Ge(e,t,n,r={}){var o;const{flush:l="pre",deep:f=!0,listenToStorageChanges:u=!0,writeDefaults:O=!0,mergeDefaults:E=!1,shallow:m,window:_=L,eventFilter:a,onError:c=p=>{console.error(p)}}=r,s=(m?De:F)(t);if(!n)try{n=Pe("getDefaultStorage",()=>{var p;return(p=L)==null?void 0:p.localStorage})()}catch(p){c(p)}if(!n)return s;const i=z(t),g=Qe(i),d=(o=r.serializer)!=null?o:qe[g],{pause:v,resume:h}=Ce(s,()=>P(s.value),{flush:l,deep:f,eventFilter:a});return _&&u&&(R(_,"storage",w),R(_,re,$)),w(),s;function P(p){try{if(p==null)n.removeItem(e);else{const y=d.write(p),b=n.getItem(e);b!==y&&(n.setItem(e,y),_&&_.dispatchEvent(new CustomEvent(re,{detail:{key:e,oldValue:b,newValue:y,storageArea:n}})))}}catch(y){c(y)}}function S(p){const y=p?p.newValue:n.getItem(e);if(y==null)return O&&i!==null&&n.setItem(e,d.write(i)),i;if(!p&&E){const b=d.read(y);return we(E)?E(b,i):g==="object"&&!Array.isArray(b)?ne(ne({},i),b):b}else return typeof y!="string"?y:d.read(y)}function $(p){w(p.detail)}function w(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){s.value=i;return}if(!(p&&p.key!==e)){v();try{s.value=S(p)}catch(y){c(y)}finally{p?H(h):h()}}}}}function Se(e){return Ke("(prefers-color-scheme: dark)",e)}var Ye=Object.defineProperty,se=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,et=(e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&oe(e,n,t[n]);if(se)for(var n of se(t))Ze.call(t,n)&&oe(e,n,t[n]);return e};function tt(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:o=L,storage:l,storageKey:f="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:O,emitAuto:E}=e,m=et({auto:"",light:"light",dark:"dark"},e.modes||{}),_=Se({window:o}),a=V(()=>_.value?"dark":"light"),c=O||(f==null?F(r):Ge(f,r,l,{window:o,listenToStorageChanges:u})),s=V({get(){return c.value==="auto"&&!E?a.value:c.value},set(v){c.value=v}}),i=Pe("updateHTMLAttrs",(v,h,P)=>{const S=o==null?void 0:o.document.querySelector(v);if(S)if(h==="class"){const $=P.split(/\s/g);Object.values(m).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{$.includes(w)?S.classList.add(w):S.classList.remove(w)})}else S.setAttribute(h,P)});function g(v){var h;const P=v==="auto"?a.value:v;i(t,n,(h=m[P])!=null?h:P)}function d(v){e.onChanged?e.onChanged(v,g):g(v)}return T(s,d,{flush:"post",immediate:!0}),E&&T(a,()=>d(s.value),{flush:"post"}),ye(()=>d(s.value)),s}var nt=Object.defineProperty,rt=Object.defineProperties,st=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ut=(e,t)=>{for(var n in t||(t={}))ot.call(t,n)&&ue(e,n,t[n]);if(ae)for(var n of ae(t))at.call(t,n)&&ue(e,n,t[n]);return e},it=(e,t)=>rt(e,st(t));function Dt(e={}){const{valueDark:t="dark",valueLight:n="",window:r=L}=e,o=tt(it(ut({},e),{onChanged:(u,O)=>{var E;e.onChanged?(E=e.onChanged)==null||E.call(e,u==="dark"):O(u)},modes:{dark:t,light:n}})),l=Se({window:r});return V({get(){return o.value==="dark"},set(u){u===l.value?o.value="auto":o.value=u?"dark":"light"}})}var ie=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ft=(e,t)=>{var n={};for(var r in e)ct.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ie)for(var r of ie(e))t.indexOf(r)<0&&lt.call(e,r)&&(n[r]=e[r]);return n};function jt(e,t,n={}){const r=n,{window:o=L}=r,l=ft(r,["window"]);let f;const u=be(()=>o&&"ResizeObserver"in o),O=()=>{f&&(f.disconnect(),f=void 0)},E=T(()=>A(e),_=>{O(),u.value&&o&&_&&(f=new ResizeObserver(t),f.observe(_,l))},{immediate:!0,flush:"post"}),m=()=>{O(),E()};return J(m),{isSupported:u,stop:m}}var ce;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ce||(ce={}));var dt=Object.defineProperty,le=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,fe=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mt=(e,t)=>{for(var n in t||(t={}))pt.call(t,n)&&fe(e,n,t[n]);if(le)for(var n of le(t))vt.call(t,n)&&fe(e,n,t[n]);return e};const Et={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};mt({linear:Ie},Et);function Ut(e,t,n,r={}){var o,l,f;const{clone:u=!1,passive:O=!1,eventName:E,deep:m=!1,defaultValue:_}=r,a=je(),c=n||(a==null?void 0:a.emit)||((o=a==null?void 0:a.$emit)==null?void 0:o.bind(a))||((f=(l=a==null?void 0:a.proxy)==null?void 0:l.$emit)==null?void 0:f.bind(a==null?void 0:a.proxy));let s=E;t||(t="modelValue"),s=E||s||`update:${t.toString()}`;const i=d=>u?we(u)?u(d):Be(d):d,g=()=>Ae(e[t])?i(e[t]):_;if(O){const d=g(),v=F(d);return T(()=>e[t],h=>v.value=i(h)),T(v,h=>{(h!==e[t]||m)&&c(s,h)},{deep:m}),v}else return V({get(){return g()},set(d){c(s,d)}})}function _t(e){return e==null}class gt extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Vt(e,t){throw new gt(`[${e}] ${t}`)}function Mt(e,t){}const Te={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};let N=[];const de=e=>{const t=e;t.key===Te.esc&&N.forEach(n=>n(t))},Ot=e=>{q(()=>{N.length===0&&document.addEventListener("keydown",de),B&&N.push(e)}),G(()=>{N=N.filter(t=>t!==e),N.length===0&&B&&document.removeEventListener("keydown",de)})},x="focus-trap.focus-after-trapped",K="focus-trap.focus-after-released",yt="focus-trap.focusout-prevented",pe={cancelable:!0,bubbles:!1},ht={cancelable:!0,bubbles:!1},ve="focusAfterTrapped",me="focusAfterReleased",wt=Symbol("elFocusTrap"),Y=F(),M=F(0),X=F(0);let D=0;const Fe=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0||r===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},Ee=(e,t)=>{for(const n of e)if(!bt(n,t))return n},bt=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Pt=e=>{const t=Fe(e),n=Ee(t,e),r=Ee(t.reverse(),e);return[n,r]},St=e=>e instanceof HTMLInputElement&&"select"in e,C=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),X.value=window.performance.now(),e!==n&&St(e)&&t&&e.select()}};function _e(e,t){const n=[...e],r=e.indexOf(t);return r!==-1&&n.splice(r,1),n}const Tt=()=>{let e=[];return{push:r=>{const o=e[0];o&&r!==o&&o.pause(),e=_e(e,r),e.unshift(r)},remove:r=>{var o,l;e=_e(e,r),(l=(o=e[0])==null?void 0:o.resume)==null||l.call(o)}}},Ft=(e,t=!1)=>{const n=document.activeElement;for(const r of e)if(C(r,t),document.activeElement!==n)return},ge=Tt(),It=()=>M.value>X.value,j=()=>{Y.value="pointer",M.value=window.performance.now()},Oe=()=>{Y.value="keyboard",M.value=window.performance.now()},Ct=()=>(q(()=>{D===0&&(document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),document.addEventListener("keydown",Oe)),D++}),G(()=>{D--,D<=0&&(document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j),document.removeEventListener("keydown",Oe))}),{focusReason:Y,lastUserFocusTimestamp:M,lastAutomatedFocusTimestamp:X}),U=e=>new CustomEvent(yt,{...ht,detail:e}),Lt=Ue({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[ve,me,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=F();let r,o;const{focusReason:l}=Ct();Ot(s=>{e.trapped&&!f.paused&&t("release-requested",s)});const f={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},u=s=>{if(!e.loop&&!e.trapped||f.paused)return;const{key:i,altKey:g,ctrlKey:d,metaKey:v,currentTarget:h,shiftKey:P}=s,{loop:S}=e,$=i===Te.tab&&!g&&!d&&!v,w=document.activeElement;if($&&w){const p=h,[y,b]=Pt(p);if(y&&b){if(!P&&w===b){const I=U({focusReason:l.value});t("focusout-prevented",I),I.defaultPrevented||(s.preventDefault(),S&&C(y,!0))}else if(P&&[y,p].includes(w)){const I=U({focusReason:l.value});t("focusout-prevented",I),I.defaultPrevented||(s.preventDefault(),S&&C(b,!0))}}else if(w===p){const I=U({focusReason:l.value});t("focusout-prevented",I),I.defaultPrevented||s.preventDefault()}}};Ve(wt,{focusTrapRef:n,onKeydown:u}),T(()=>e.focusTrapEl,s=>{s&&(n.value=s)},{immediate:!0}),T([n],([s],[i])=>{s&&(s.addEventListener("keydown",u),s.addEventListener("focusin",m),s.addEventListener("focusout",_)),i&&(i.removeEventListener("keydown",u),i.removeEventListener("focusin",m),i.removeEventListener("focusout",_))});const O=s=>{t(ve,s)},E=s=>t(me,s),m=s=>{const i=k(n);if(!i)return;const g=s.target,d=s.relatedTarget,v=g&&i.contains(g);e.trapped||d&&i.contains(d)||(r=d),v&&t("focusin",s),!f.paused&&e.trapped&&(v?o=g:C(o,!0))},_=s=>{const i=k(n);if(!(f.paused||!i))if(e.trapped){const g=s.relatedTarget;!_t(g)&&!i.contains(g)&&setTimeout(()=>{if(!f.paused&&e.trapped){const d=U({focusReason:l.value});t("focusout-prevented",d),d.defaultPrevented||C(o,!0)}},0)}else{const g=s.target;g&&i.contains(g)||t("focusout",s)}};async function a(){await H();const s=k(n);if(s){ge.push(f);const i=s.contains(document.activeElement)?r:document.activeElement;if(r=i,!s.contains(i)){const d=new Event(x,pe);s.addEventListener(x,O),s.dispatchEvent(d),d.defaultPrevented||H(()=>{let v=e.focusStartEl;xe(v)||(C(v),document.activeElement!==v&&(v="first")),v==="first"&&Ft(Fe(s),!0),(document.activeElement===i||v==="container")&&C(s)})}}}function c(){const s=k(n);if(s){s.removeEventListener(x,O);const i=new CustomEvent(K,{...pe,detail:{focusReason:l.value}});s.addEventListener(K,E),s.dispatchEvent(i),!i.defaultPrevented&&(l.value=="keyboard"||!It()||s.contains(document.activeElement))&&C(r??document.body),s.removeEventListener(K,E),ge.remove(f)}}return q(()=>{e.trapped&&a(),T(()=>e.trapped,s=>{s?a():c()})}),G(()=>{e.trapped&&c()}),{onKeydown:u}}});function Nt(e,t,n,r,o,l){return Me(e.$slots,"default",{handleKeydown:e.onKeydown})}var xt=Re(Lt,[["render",Nt],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{xt as E,wt as F,Dt as a,Te as b,jt as c,Mt as d,R as e,A as f,_t as i,kt as o,Vt as t,Ut as u};