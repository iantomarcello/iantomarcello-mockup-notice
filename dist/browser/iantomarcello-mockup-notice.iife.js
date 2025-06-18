var ImMockupNotice=function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const U=globalThis,I=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),Z=new WeakMap;let G=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const _t=r=>new G(typeof r=="string"?r:r+"",void 0,j),Y=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new G(e,r,j)},ft=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=U.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Q=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gt,defineProperty:mt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:yt,getOwnPropertySymbols:vt,getPrototypeOf:bt}=Object,f=globalThis,X=f.trustedTypes,At=X?X.emptyScript:"",B=f.reactiveElementPolyfillSupport,E=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?At:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},L=(r,t)=>!gt(r,t),tt={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&mt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=$t(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...yt(e),...vt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ft(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:N;this._$Em=s,this[s]=a.fromAttribute(e,l.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const n=this.constructor,o=this[t];if(i??(i=n.getPropertyOptions(t)),!((i.hasChanged??L)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[E("elementProperties")]=new Map,A[E("finalized")]=new Map,B==null||B({ReactiveElement:A}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,T=C.trustedTypes,et=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,it="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+g,xt=`<${st}>`,$=document,P=()=>$.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,wt=r=>q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,y=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,lt=/^(?:script|style|textarea|title)$/i,St=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),V=St(1),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ct=new WeakMap,v=$.createTreeWalker($,129);function ht(r,t){if(!q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=k;for(let l=0;l<e;l++){const a=r[l];let d,p,c=-1,_=0;for(;_<a.length&&(o.lastIndex=_,p=o.exec(a),p!==null);)_=o.lastIndex,o===k?p[1]==="!--"?o=rt:p[1]!==void 0?o=ot:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=s??k,c=-1):p[1]===void 0?c=-2:(c=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?y:p[3]==='"'?at:nt):o===at||o===nt?o=y:o===rt||o===ot?o=k:(o=y,s=void 0);const m=o===y&&r[l+1].startsWith("/>")?" ":"";n+=o===k?a+xt:c>=0?(i.push(d),a.slice(0,c)+it+a.slice(c)+g+m):a+g+(c===-2?l:m)}return[ht(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[d,p]=Et(t,e);if(this.el=M.createElement(d,i),v.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(it)){const _=p[o++],m=s.getAttribute(c).split(g),D=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:D[2],strings:m,ctor:D[1]==="."?Pt:D[1]==="?"?Ot:D[1]==="@"?kt:H}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(lt.test(s.tagName)){const c=s.textContent.split(g),_=c.length-1;if(_>0){s.textContent=T?T.emptyScript:"";for(let m=0;m<_;m++)s.append(c[m],P()),v.nextNode(),a.push({type:2,index:++n});s.append(c[_],P())}}}else if(s.nodeType===8)if(s.data===st)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:n}),c+=g.length-1}n++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var o,l;if(t===x)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??$).importNode(e,!0);v.currentNode=s;let n=v.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new z(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new Mt(n,this,t)),this._$AV.push(d),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=v.nextNode(),o++)}return v.currentNode=$,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(ht(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Ct(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new M(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new z(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=w(this,l[i+a],e,a),d===x&&(d=this._$AH[a]),o||(o=!O(d)||d!==this._$AH[a]),d===h?t=h:t!==h&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ot extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class kt extends H{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??h)===x)return;const i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const F=C.litHtmlPolyfillSupport;F==null||F(M,z),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.0");const zt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new z(t.insertBefore(P(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis;class S extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}S._$litElement$=!0,S.finalized=!0,(ut=b.litElementHydrateSupport)==null||ut.call(b,{LitElement:S});const K=b.litElementPolyfillSupport;K==null||K({LitElement:S}),(b.litElementVersions??(b.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:L},Nt=(r=Ut,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(i==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function pt(r){return(t,e)=>typeof e=="object"?Nt(r,t,e):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(r,t){return(e,i,s)=>{const n=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(r))??null};return Tt(e,i,{get(){return n(this)}})}}var Rt=Object.getOwnPropertyDescriptor,Dt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Rt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};let J=class extends S{get _slottedChildren(){var t;const r=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");return(r==null?void 0:r.assignedNodes({flatten:!0}))||[]}firstUpdated(r){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&(t.addEventListener("slotchange",()=>{this.requestUpdate()}),this._slottedChildren.length>0&&t.setAttribute("hidden",""))}render(){var r,t;return V`
      <slot></slot>
      <div class="ring">
        ${((r=this._slottedChildren)==null?void 0:r.length)<1?"null":(t=this._slottedChildren)==null?void 0:t.map(e=>{var s;return[...((s=e.textContent)==null?void 0:s.trim()).split("")].map((n,o)=>V`<span class="character" style="--index: ${o}">${n}</span>`)})}
      </div>
      `}};J.styles=[Y`
    :host {
      --offset: 0;
      --spacing: 1;
      display: block;
      aspect-ratio: 1;
    }

    .ring {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .character {
      --index: sibling-index();
      height: 50%;
      position: absolute;
      top: 0%;
      left: 50%;
      translate: -50% 0;
      transform-origin: center bottom;
      rotate: calc(var(--index) * (4deg * var(--spacing)) + (var(--offset) * 1deg));

      @supports(width: calc(sibling-index() * 1px)) {
        rotate: calc(sibling-index() * (4deg * var(--spacing)) + (var(--offset) * 1deg));
      }

      @container style(--spacing: full) {
        rotate: calc((sibling-index() / sibling-count() * 360deg) + (var(--offset) * 1deg));
      }
    }
  `],J=Dt([dt("circular-text")],J);var It=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,R=(r,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&It(t,e,s),s};return u.ImMockupNotice=class extends S{constructor(){super(...arguments),this.label="Mockup Site"}init(){window.CSS.registerProperty({name:"--deg",syntax:"<angle>",inherits:!1,initialValue:"0deg"})}showModal(){this.dialog.showModal()}close(){this.dialog.close()}firstUpdated(t){this.init()}render(){return V`
      <div class="wrapper">
        <button id="promptButton" type="button" aria-label="prompt mock notice" @click="${()=>this.dialog.showModal()}"></button>
        <dialog id="dialog">
          <button id="dialogCloseButton" class="has-curve-text" @click="${()=>this.dialog.close()}">
            <circular-text>CLOSE</circular-text>
          </button>
          <h2 class="heading has-curve-text">
            <circular-text>THIS IS A MOCK</circular-text>
          </h2>
          <article class="dialog-content">
            <header>
              <p>
                You are viewing a mockup site of <a target="_blank" .href=${this.href}>${this.label}</a>,
                which may or may not have modifications or alterations from the 
                actual site to demostrate a certain functionality or purpose.
              </p>
            </header>
            <section><slot></slot></section>
            <footer>
              <p>In any case, enjoy what you see. 😁</p>
              <p>
                <small>
                  Have a look at my <a href="https://iantomarcello.com" target="_blank">PWA Website</a>. or;
                  Check out my <a href="https://github.com/iantomarcello" target="_blank">GitHub</a>.
                </small>
              </p>
            </footer>
          </article>
        </dialog>
      </div>
    `}},u.ImMockupNotice.styles=[Y`
      :host {
        --size: 460px;
        --size_margin: 40px;
        --scroll_shape_outside_margin_max: 50%;

        --colour_primary: #394c8c;
        --colour_primary_light: #8190D3;
        --colour_primary_dark: #1F3972;
        --colour_primary_on: #fff;
        --colour_primary_light_on: #000;
        --colour_primary_dark_on: #fff;

        --colour_secondary: #F4AC7C;
        --colour_secondary_light: #FFDEAC;
        --colour_secondary_dark: #BF7D4F;
        --colour_secondary_on: #000;
        --colour_secondary_light_on: #000;
        --colour_secondary_dark_on: #000;

        display: block;
        position: relative;
        z-index: 10000000;
        container-type: inline-size;
      }

      * {
        box-sizing: border-box;
      }

      #promptButton {
        --prompt_size: 2rem;
        width: min(45px, var(--prompt_size));
        aspect-ratio: 1;
        display: block;
        position: fixed;
        z-index: 100;
        bottom: 1rem;
        right: 1rem;
        border: none;
        opacity: 0.5;
        cursor: pointer;
        background-color: transparent;
        transition: opacity 0.1s ease-in-out;
        outline: 0;

        &::before, &::after {
          content: "";
          width: 100%;
          aspect-ratio: 1;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          translate: -50% -50%;
          transition: translate 0.6s cubic-bezier(.72,.01,.24,.98),
            outline-offset 0.1s cubic-bezier(.72,.01,.24,.98);
        }

        &::after {
          content: "i";
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--colour_secondary);
        }

        &::before {
          outline: 2px solid var(--colour_secondary);
          outline-offset: 3px;
          border-radius: 50%;
          transition-delay: 0.1s
        }

        &:is(:hover, :focus) {
          opacity: 1;
          &::before {
            outline-offset: 6px;
          }
        }

        &:has(~ :open) {
          &::before, &::after {
            translate: 120% 120%;
          }
        }
      }

      #dialog {
        font-size: 1rem;
        font-family: "Sora", sans-serif;
        color: var(--colour_primary_dark);
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        margin-block-start: auto;
        margin-inline-start: auto;
        max-width: initial;
        max-height: initial;

        --deg: 360deg;
        mask-image: conic-gradient(at bottom right, transparent var(--deg), black calc(var(--deg) - 1deg), black);
        transition: --deg 0.6s cubic-bezier(.72,.01,.24,.98),
          overlay 0.6s ease-out allow-discrete,
          display 0.6s ease-out allow-discrete
        ;

        &:open {
          --deg: 270deg;

          @starting-style {
            --deg: 360deg;
          }
        }
      }

      .dialog-content {
        --cutout_size: 86px;
        --shape_inside: var(--colour_secondary);
        --shape_outside: transparent;
        --shape_size: calc(var(--size) + var(--size_margin));
        --shape: radial-gradient(
          circle at right bottom,
          var(--shape_outside),
          var(--shape_outside) var(--cutout_size),
          var(--shape_inside) calc(var(--cutout_size)  + 1px),
          var(--shape_inside) var(--size),
          var(--shape_outside) calc(var(--size)  + 1px)
        );
        width: min(100dvw, var(--shape_size));
        height: var(--shape_size);
        padding-inline: 14px;

        /* The sector shape */
        mask-image: var(--shape);
        background-image: var(--shape);
        overflow: auto;
        scrollbar-width: thin;

        /* The shape -outside to keep text inside. */
        /* TODO: No perfect, consider using both float left and right using appropriate shapes. */
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          float: left;
          shape-outside: radial-gradient(
            circle at right bottom,
            var(--shape_outside),
            var(--shape_outside) calc(var(--size)),
            var(--shape_inside) calc(var(--size)  + 1px)
          );

          shape-image-threshold: 0.1;
          shape-margin: 3%;
          animation-name: moveShapeOutside;
          animation-duration: 1ms; /* Firefox requires this to apply the animation */
          animation-direction: alternate;
          animation-timeline: scroll(block nearest);
        }

        header {
          padding-top: 3rem;
        }
      }

      .has-curve-text {
        overflow: hidden;

        svg {
          width: 100%;
          position: absolute;
          height: 100%;
          bottom: 0;
          right: 0;
          transition: all 0.1s ease-in-out;
        }

        path {
          fill: transparent;
        }

        text {
          fill: var(--colour_secondary);
          font-size: 1.2rem;
          font-family: "Sora", sans-serif;
          font-weight: 600;
        }
      }

      #dialogCloseButton {
        width: calc(86px * 2);
        aspect-ratio: 1;
        display: block;
        padding: 0;
        cursor: pointer;
        filter: drop-shadow(1px 1px 1px #33333366);
        background-color: transparent;
        color: var(--colour_secondary);
        border: 0;
        position: fixed;
        z-index: 101;
        bottom: 0;
        right: 0;
        translate: 50% 50%;

        circular-text {
          --offset: 266;
          --spacing: 4;
          translate: 20% 20%;
          transition: translate 0.6s cubic-bezier(.72,.01,.24,.98),
                      opacity 0.1s ease-in-out;
          opacity: 0.5;

          :open & {
            translate: 2% 2%;
          }
        }

        &:is(:hover, :focus) circular-text {
          opacity: 1;
        }

      }

      /* Move shape-outside on scroll. */
      /* TODO: Not perfect */
      @keyframes moveShapeOutside {
        0% { margin-top: 0; }
        10% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.1); }
        20% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.2); }
        30% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.3); }
        40% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.4); }
        50% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.5); }
        60% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.6); }
        70% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.7); }
        80% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.8); }
        90% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.9); }
        100% { margin-top: var(--scroll_shape_outside_margin_max); }
      }

      .heading {
        width: calc((var(--size) + var(--size_margin)) * 2);
        aspect-ratio: 1;
        font-size: 16px;
        position: fixed;
        z-index: 100;
        bottom: 0;
        right: 0;
        margin: 0;
        overflow: visible;
        pointer-events: none;
        translate: 50% 50%;

        circular-text {
          --offset: 268;
          --spacing: 1.5;
          scale: 0.8;
          opacity: 0;
          font-size: 2rem;
          color: var(--colour_secondary);
          transition: scale 0.3s ease-out,
                      opacity 0.3s ease-out;

          @media (width < 500px) {
            font-size: 1.5rem;
            --offset: 300;
            --spacing: 1;
          };

          @media (width < 400px) {
            font-size: 1.3rem;
            --offset: 313;
            --spacing: 0.8;
          };
        }

        :open & circular-text{
          scale: 1;
          opacity: 1;
          transition: scale 0.6s cubic-bezier(.72,.01,.24,.98),
                      opacity 0.5s ease-in-out;
          transition-delay: 0.30s;
        }
      }

    `],R([pt({type:String})],u.ImMockupNotice.prototype,"label",2),R([pt({type:String})],u.ImMockupNotice.prototype,"href",2),R([Ht("#dialog")],u.ImMockupNotice.prototype,"dialog",2),u.ImMockupNotice=R([dt("iantomarcello-mockup-notice")],u.ImMockupNotice),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),u}({});
