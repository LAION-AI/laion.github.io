function v(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(L)}function H(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(G(n,e))}function st(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let u=0;u<l;u+=1)s[u]=n.dirty[u]|c[u];return s}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,s){if(c){const l=O(n,e,i,s);t.p(l,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let w=!1;function J(){w=!0}function K(){w=!1}function W(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const o=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=o?c+1:W(1,c,y=>n[e[y]].claim_order,o))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],l=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);u>=r;u--)l.push(n[u]);u--}for(;u>=0;u--)l.push(n[u]);s.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<s.length&&l[r].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(l[r],a)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function pt(){return N(" ")}function yt(){return N("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){Y(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(n(u)){const r=e(u);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(n(u)){const r=e(u);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];e[u.name]||s.push(u.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(n))}function bt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function $t(t){return tt(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function A(){if(!m)throw new Error("Function called outside component initialization");return m}function kt(t){A().$$.on_mount.push(t)}function jt(t){A().$$.after_update.push(t)}function vt(t,n){return A().$$.context.set(t,n),n}const d=[],q=[],b=[],B=[],P=Promise.resolve();let k=!1;function z(){k||(k=!0,P.then(D))}function Nt(){return z(),P}function j(t){b.push(t)}const E=new Set;let x=0;function D(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),nt(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;B.length;)B.pop()();k=!1,E.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function At(){_={r:0,c:[],p:_}}function St(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Mt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=n[s];if(u){for(const r in l)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[s]=u}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,e),i||j(()=>{const r=s.map(L).filter(H);l?l.push(...r):p(r),t.$$.on_mount=[]}),u.forEach(j)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,c,s,l,u=[-1]){const r=m;h(t);const o=t.$$={fragment:null,ctx:null,props:s,update:v,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};l&&l(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...S)=>{const C=S.length?S[0]:y;return o.ctx&&c(o.ctx[f],o.ctx[f]=C)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](C),a&&ct(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){J();const f=X(n.target);o.fragment&&o.fragment.l(f),f.forEach(U)}else o.fragment&&o.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),D()}h(r)}class Tt{$destroy(){rt(this,1),this.$destroy=v}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,rt as B,F as C,Nt as D,v as E,st as F,R as G,at as H,_t as I,ft as J,ot as K,dt as L,ut as M,gt as N,mt as O,Tt as S,X as a,xt as b,bt as c,U as d,V as e,Et as f,ht as g,tt as h,Ot as i,wt as j,pt as k,yt as l,$t as m,At as n,Ct as o,St as p,et as q,vt as r,lt as s,N as t,jt as u,kt as v,Bt as w,Lt as x,it as y,Mt as z};
