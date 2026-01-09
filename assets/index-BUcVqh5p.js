(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Sv(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var r=t.default;if(typeof r=="function"){var s=function o(){var c=!1;try{c=this instanceof o}catch{}return c?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var c=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(s,o,c.get?c:{enumerable:!0,get:function(){return t[o]}})}),s}var Yl={exports:{}},Ki={},Gl={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function kv(){if(kh)return ke;kh=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=m&&b[m]||b["@@iterator"],typeof b=="function"?b:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,A={};function V(b,P,X){this.props=b,this.context=P,this.refs=A,this.updater=X||E}V.prototype.isReactComponent={},V.prototype.setState=function(b,P){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,P,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function H(){}H.prototype=V.prototype;function K(b,P,X){this.props=b,this.context=P,this.refs=A,this.updater=X||E}var G=K.prototype=new H;G.constructor=K,I(G,V.prototype),G.isPureReactComponent=!0;var le=Array.isArray,T=Object.prototype.hasOwnProperty,z={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function D(b,P,X){var Y,te={},J=null,ie=null;if(P!=null)for(Y in P.ref!==void 0&&(ie=P.ref),P.key!==void 0&&(J=""+P.key),P)T.call(P,Y)&&!L.hasOwnProperty(Y)&&(te[Y]=P[Y]);var fe=arguments.length-2;if(fe===1)te.children=X;else if(1<fe){for(var pe=Array(fe),xe=0;xe<fe;xe++)pe[xe]=arguments[xe+2];te.children=pe}if(b&&b.defaultProps)for(Y in fe=b.defaultProps,fe)te[Y]===void 0&&(te[Y]=fe[Y]);return{$$typeof:t,type:b,key:J,ref:ie,props:te,_owner:z.current}}function M(b,P){return{$$typeof:t,type:b.type,key:P,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===t}function $(b){var P={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(X){return P[X]})}var Z=/\/+/g;function F(b,P){return typeof b=="object"&&b!==null&&b.key!=null?$(""+b.key):P.toString(36)}function q(b,P,X,Y,te){var J=typeof b;(J==="undefined"||J==="boolean")&&(b=null);var ie=!1;if(b===null)ie=!0;else switch(J){case"string":case"number":ie=!0;break;case"object":switch(b.$$typeof){case t:case r:ie=!0}}if(ie)return ie=b,te=te(ie),b=Y===""?"."+F(ie,0):Y,le(te)?(X="",b!=null&&(X=b.replace(Z,"$&/")+"/"),q(te,P,X,"",function(xe){return xe})):te!=null&&(k(te)&&(te=M(te,X+(!te.key||ie&&ie.key===te.key?"":(""+te.key).replace(Z,"$&/")+"/")+b)),P.push(te)),1;if(ie=0,Y=Y===""?".":Y+":",le(b))for(var fe=0;fe<b.length;fe++){J=b[fe];var pe=Y+F(J,fe);ie+=q(J,P,X,pe,te)}else if(pe=S(b),typeof pe=="function")for(b=pe.call(b),fe=0;!(J=b.next()).done;)J=J.value,pe=Y+F(J,fe++),ie+=q(J,P,X,pe,te);else if(J==="object")throw P=String(b),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ie}function ee(b,P,X){if(b==null)return b;var Y=[],te=0;return q(b,Y,"","",function(J){return P.call(X,J,te++)}),Y}function ae(b){if(b._status===-1){var P=b._result;P=P(),P.then(function(X){(b._status===0||b._status===-1)&&(b._status=1,b._result=X)},function(X){(b._status===0||b._status===-1)&&(b._status=2,b._result=X)}),b._status===-1&&(b._status=0,b._result=P)}if(b._status===1)return b._result.default;throw b._result}var x={current:null},Q={transition:null},N={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:Q,ReactCurrentOwner:z};function y(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:ee,forEach:function(b,P,X){ee(b,function(){P.apply(this,arguments)},X)},count:function(b){var P=0;return ee(b,function(){P++}),P},toArray:function(b){return ee(b,function(P){return P})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ke.Component=V,ke.Fragment=s,ke.Profiler=c,ke.PureComponent=K,ke.StrictMode=o,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,ke.act=y,ke.cloneElement=function(b,P,X){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Y=I({},b.props),te=b.key,J=b.ref,ie=b._owner;if(P!=null){if(P.ref!==void 0&&(J=P.ref,ie=z.current),P.key!==void 0&&(te=""+P.key),b.type&&b.type.defaultProps)var fe=b.type.defaultProps;for(pe in P)T.call(P,pe)&&!L.hasOwnProperty(pe)&&(Y[pe]=P[pe]===void 0&&fe!==void 0?fe[pe]:P[pe])}var pe=arguments.length-2;if(pe===1)Y.children=X;else if(1<pe){fe=Array(pe);for(var xe=0;xe<pe;xe++)fe[xe]=arguments[xe+2];Y.children=fe}return{$$typeof:t,type:b.type,key:te,ref:J,props:Y,_owner:ie}},ke.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:d,_context:b},b.Consumer=b},ke.createElement=D,ke.createFactory=function(b){var P=D.bind(null,b);return P.type=b,P},ke.createRef=function(){return{current:null}},ke.forwardRef=function(b){return{$$typeof:p,render:b}},ke.isValidElement=k,ke.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:ae}},ke.memo=function(b,P){return{$$typeof:w,type:b,compare:P===void 0?null:P}},ke.startTransition=function(b){var P=Q.transition;Q.transition={};try{b()}finally{Q.transition=P}},ke.unstable_act=y,ke.useCallback=function(b,P){return x.current.useCallback(b,P)},ke.useContext=function(b){return x.current.useContext(b)},ke.useDebugValue=function(){},ke.useDeferredValue=function(b){return x.current.useDeferredValue(b)},ke.useEffect=function(b,P){return x.current.useEffect(b,P)},ke.useId=function(){return x.current.useId()},ke.useImperativeHandle=function(b,P,X){return x.current.useImperativeHandle(b,P,X)},ke.useInsertionEffect=function(b,P){return x.current.useInsertionEffect(b,P)},ke.useLayoutEffect=function(b,P){return x.current.useLayoutEffect(b,P)},ke.useMemo=function(b,P){return x.current.useMemo(b,P)},ke.useReducer=function(b,P,X){return x.current.useReducer(b,P,X)},ke.useRef=function(b){return x.current.useRef(b)},ke.useState=function(b){return x.current.useState(b)},ke.useSyncExternalStore=function(b,P,X){return x.current.useSyncExternalStore(b,P,X)},ke.useTransition=function(){return x.current.useTransition()},ke.version="18.3.1",ke}var Ch;function hn(){return Ch||(Ch=1,Gl.exports=kv()),Gl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Cv(){if(Th)return Ki;Th=1;var t=hn(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,g,w){var v,m={},S=null,E=null;w!==void 0&&(S=""+w),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(E=g.ref);for(v in g)o.call(g,v)&&!d.hasOwnProperty(v)&&(m[v]=g[v]);if(p&&p.defaultProps)for(v in g=p.defaultProps,g)m[v]===void 0&&(m[v]=g[v]);return{$$typeof:r,type:p,key:S,ref:E,props:m,_owner:c.current}}return Ki.Fragment=s,Ki.jsx=f,Ki.jsxs=f,Ki}var Ph;function Tv(){return Ph||(Ph=1,Yl.exports=Cv()),Yl.exports}var a=Tv(),R=hn();const Xn=qc(R);var Na={},ql={exports:{}},Tt={},Xl={exports:{}},Ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function Pv(){return Eh||(Eh=1,(function(t){function r(Q,N){var y=Q.length;Q.push(N);e:for(;0<y;){var b=y-1>>>1,P=Q[b];if(0<c(P,N))Q[b]=N,Q[y]=P,y=b;else break e}}function s(Q){return Q.length===0?null:Q[0]}function o(Q){if(Q.length===0)return null;var N=Q[0],y=Q.pop();if(y!==N){Q[0]=y;e:for(var b=0,P=Q.length,X=P>>>1;b<X;){var Y=2*(b+1)-1,te=Q[Y],J=Y+1,ie=Q[J];if(0>c(te,y))J<P&&0>c(ie,te)?(Q[b]=ie,Q[J]=y,b=J):(Q[b]=te,Q[Y]=y,b=Y);else if(J<P&&0>c(ie,y))Q[b]=ie,Q[J]=y,b=J;else break e}}return N}function c(Q,N){var y=Q.sortIndex-N.sortIndex;return y!==0?y:Q.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var g=[],w=[],v=1,m=null,S=3,E=!1,I=!1,A=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(Q){for(var N=s(w);N!==null;){if(N.callback===null)o(w);else if(N.startTime<=Q)o(w),N.sortIndex=N.expirationTime,r(g,N);else break;N=s(w)}}function le(Q){if(A=!1,G(Q),!I)if(s(g)!==null)I=!0,ae(T);else{var N=s(w);N!==null&&x(le,N.startTime-Q)}}function T(Q,N){I=!1,A&&(A=!1,H(D),D=-1),E=!0;var y=S;try{for(G(N),m=s(g);m!==null&&(!(m.expirationTime>N)||Q&&!$());){var b=m.callback;if(typeof b=="function"){m.callback=null,S=m.priorityLevel;var P=b(m.expirationTime<=N);N=t.unstable_now(),typeof P=="function"?m.callback=P:m===s(g)&&o(g),G(N)}else o(g);m=s(g)}if(m!==null)var X=!0;else{var Y=s(w);Y!==null&&x(le,Y.startTime-N),X=!1}return X}finally{m=null,S=y,E=!1}}var z=!1,L=null,D=-1,M=5,k=-1;function $(){return!(t.unstable_now()-k<M)}function Z(){if(L!==null){var Q=t.unstable_now();k=Q;var N=!0;try{N=L(!0,Q)}finally{N?F():(z=!1,L=null)}}else z=!1}var F;if(typeof K=="function")F=function(){K(Z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=Z,F=function(){ee.postMessage(null)}}else F=function(){V(Z,0)};function ae(Q){L=Q,z||(z=!0,F())}function x(Q,N){D=V(function(){Q(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){I||E||(I=!0,ae(T))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return s(g)},t.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var N=3;break;default:N=S}var y=S;S=N;try{return Q()}finally{S=y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,N){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var y=S;S=Q;try{return N()}finally{S=y}},t.unstable_scheduleCallback=function(Q,N,y){var b=t.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?b+y:b):y=b,Q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=y+P,Q={id:v++,callback:N,priorityLevel:Q,startTime:y,expirationTime:P,sortIndex:-1},y>b?(Q.sortIndex=y,r(w,Q),s(g)===null&&Q===s(w)&&(A?(H(D),D=-1):A=!0,x(le,y-b))):(Q.sortIndex=P,r(g,Q),I||E||(I=!0,ae(T))),Q},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(Q){var N=S;return function(){var y=S;S=N;try{return Q.apply(this,arguments)}finally{S=y}}}})(Ql)),Ql}var Nh;function Ev(){return Nh||(Nh=1,Xl.exports=Pv()),Xl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function Nv(){if(Rh)return Tt;Rh=1;var t=hn(),r=Ev();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,c={};function d(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(c[e]=n,e=0;e<n.length;e++)o.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},m={};function S(e){return g.call(m,e)?!0:g.call(v,e)?!1:w.test(e)?m[e]=!0:(v[e]=!0,!1)}function E(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,n,i,l){if(n===null||typeof n>"u"||E(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function A(e,n,i,l,u,h,j){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=j}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];V[n]=new A(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(H,K);V[n]=new A(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(H,K);V[n]=new A(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(H,K);V[n]=new A(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,n,i,l){var u=V.hasOwnProperty(n)?V[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(I(n,i,u,l)&&(i=null),l||u===null?S(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(n=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(n):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var le=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=Symbol.for("react.element"),z=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),$=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),Q=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var y=Object.assign,b;function P(e){if(b===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||""}return`
`+b+e}var X=!1;function Y(e,n){if(!e||X)return"";X=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(U){var l=U}Reflect.construct(e,[],n)}else{try{n.call()}catch(U){l=U}e.call(n.prototype)}else{try{throw Error()}catch(U){l=U}e()}}catch(U){if(U&&l&&typeof U.stack=="string"){for(var u=U.stack.split(`
`),h=l.stack.split(`
`),j=u.length-1,C=h.length-1;1<=j&&0<=C&&u[j]!==h[C];)C--;for(;1<=j&&0<=C;j--,C--)if(u[j]!==h[C]){if(j!==1||C!==1)do if(j--,C--,0>C||u[j]!==h[C]){var O=`
`+u[j].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=j&&0<=C);break}}}finally{X=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?P(e):""}function te(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case z:return"Portal";case M:return"Profiler";case D:return"StrictMode";case F:return"Suspense";case q:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $:return(e.displayName||"Context")+".Consumer";case k:return(e._context.displayName||"Context")+".Provider";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:J(e.type)||"Memo";case ae:n=e._payload,e=e._init;try{return J(e(n))}catch{}}return null}function ie(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(n);case 8:return n===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xe(e){var n=pe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(j){l=""+j,h.call(this,j)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(j){l=""+j},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Te(e){e._valueTracker||(e._valueTracker=xe(e))}function Ne(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=pe(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function Ce(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,n){var i=n.checked;return y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Pe(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=fe(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ye(e,n){n=n.checked,n!=null&&G(e,"checked",n,!1)}function je(e,n){Ye(e,n);var i=fe(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ge(e,n.type,i):n.hasOwnProperty("defaultValue")&&Ge(e,n.type,fe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Be(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ge(e,n,i){(n!=="number"||Ce(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var He=Array.isArray;function et(e,n,i,l){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+fe(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ut(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tr(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(s(92));if(He(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:fe(i)}}function oi(e,n){var i=fe(n.value),l=fe(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Nn(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ot(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ws(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rn,_u=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(rn=rn||document.createElement("div"),rn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function li(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){P0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ci[n]=ci[e]})});function Iu(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||ci.hasOwnProperty(e)&&ci[e]?(""+n).trim():n+"px"}function Vu(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=Iu(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var E0=y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,n){if(n){if(E0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function so(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,jr=null,Sr=null;function Fu(e){if(e=Mi(e)){if(typeof lo!="function")throw Error(s(280));var n=e.stateNode;n&&(n=Ws(n),lo(e.stateNode,e.type,n))}}function Bu(e){jr?Sr?Sr.push(e):Sr=[e]:jr=e}function Hu(){if(jr){var e=jr,n=Sr;if(Sr=jr=null,Fu(e),n)for(e=0;e<n.length;e++)Fu(n[e])}}function Wu(e,n){return e(n)}function Uu(){}var co=!1;function $u(e,n,i){if(co)return e(n,i);co=!0;try{return Wu(e,n,i)}finally{co=!1,(jr!==null||Sr!==null)&&(Uu(),Hu())}}function ui(e,n){var i=e.stateNode;if(i===null)return null;var l=Ws(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var uo=!1;if(p)try{var di={};Object.defineProperty(di,"passive",{get:function(){uo=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{uo=!1}function N0(e,n,i,l,u,h,j,C,O){var U=Array.prototype.slice.call(arguments,3);try{n.apply(i,U)}catch(re){this.onError(re)}}var fi=!1,bs=null,js=!1,fo=null,R0={onError:function(e){fi=!0,bs=e}};function M0(e,n,i,l,u,h,j,C,O){fi=!1,bs=null,N0.apply(R0,arguments)}function L0(e,n,i,l,u,h,j,C,O){if(M0.apply(this,arguments),fi){if(fi){var U=bs;fi=!1,bs=null}else throw Error(s(198));js||(js=!0,fo=U)}}function nr(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Ku(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yu(e){if(nr(e)!==e)throw Error(s(188))}function O0(e){var n=e.alternate;if(!n){if(n=nr(e),n===null)throw Error(s(188));return n!==e?null:e}for(var i=e,l=n;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return Yu(u),e;if(h===l)return Yu(u),n;h=h.sibling}throw Error(s(188))}if(i.return!==l.return)i=u,l=h;else{for(var j=!1,C=u.child;C;){if(C===i){j=!0,i=u,l=h;break}if(C===l){j=!0,l=u,i=h;break}C=C.sibling}if(!j){for(C=h.child;C;){if(C===i){j=!0,i=h,l=u;break}if(C===l){j=!0,l=h,i=u;break}C=C.sibling}if(!j)throw Error(s(189))}}if(i.alternate!==l)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:n}function Gu(e){return e=O0(e),e!==null?qu(e):null}function qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=qu(e);if(n!==null)return n;e=e.sibling}return null}var Xu=r.unstable_scheduleCallback,Qu=r.unstable_cancelCallback,A0=r.unstable_shouldYield,D0=r.unstable_requestPaint,Qe=r.unstable_now,z0=r.unstable_getCurrentPriorityLevel,ho=r.unstable_ImmediatePriority,Ju=r.unstable_UserBlockingPriority,Ss=r.unstable_NormalPriority,_0=r.unstable_LowPriority,Zu=r.unstable_IdlePriority,ks=null,sn=null;function I0(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(ks,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:B0,V0=Math.log,F0=Math.LN2;function B0(e){return e>>>=0,e===0?32:31-(V0(e)/F0|0)|0}var Cs=64,Ts=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ps(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,h=e.pingedLanes,j=i&268435455;if(j!==0){var C=j&~u;C!==0?l=hi(C):(h&=j,h!==0&&(l=hi(h)))}else j=i&~u,j!==0?l=hi(j):h!==0&&(l=hi(h));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,h=n&-n,u>=h||u===16&&(h&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-$t(n),u=1<<i,l|=e[i],n&=~u;return l}function H0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W0(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var j=31-$t(h),C=1<<j,O=u[j];O===-1?((C&i)===0||(C&l)!==0)&&(u[j]=H0(C,n)):O<=n&&(e.expiredLanes|=C),h&=~C}}function mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=Cs;return Cs<<=1,(Cs&4194240)===0&&(Cs=64),e}function po(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function mi(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$t(n),e[n]=i}function U0(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-$t(i),h=1<<u;n[u]=0,l[u]=-1,e[u]=-1,i&=~h}}function go(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-$t(i),u=1<<l;u&n|e[l]&n&&(e[l]|=n),i&=~u}}var Oe=0;function td(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nd,yo,rd,id,sd,vo=!1,Es=[],Rn=null,Mn=null,Ln=null,pi=new Map,gi=new Map,On=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ad(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(n.pointerId)}}function yi(e,n,i,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Mi(n),n!==null&&yo(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function K0(e,n,i,l,u){switch(n){case"focusin":return Rn=yi(Rn,e,n,i,l,u),!0;case"dragenter":return Mn=yi(Mn,e,n,i,l,u),!0;case"mouseover":return Ln=yi(Ln,e,n,i,l,u),!0;case"pointerover":var h=u.pointerId;return pi.set(h,yi(pi.get(h)||null,e,n,i,l,u)),!0;case"gotpointercapture":return h=u.pointerId,gi.set(h,yi(gi.get(h)||null,e,n,i,l,u)),!0}return!1}function od(e){var n=rr(e.target);if(n!==null){var i=nr(n);if(i!==null){if(n=i.tag,n===13){if(n=Ku(i),n!==null){e.blockedOn=n,sd(e.priority,function(){rd(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ns(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=wo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);ao=l,i.target.dispatchEvent(l),ao=null}else return n=Mi(i),n!==null&&yo(n),e.blockedOn=i,!1;n.shift()}return!0}function ld(e,n,i){Ns(e)&&i.delete(n)}function Y0(){vo=!1,Rn!==null&&Ns(Rn)&&(Rn=null),Mn!==null&&Ns(Mn)&&(Mn=null),Ln!==null&&Ns(Ln)&&(Ln=null),pi.forEach(ld),gi.forEach(ld)}function vi(e,n){e.blockedOn===n&&(e.blockedOn=null,vo||(vo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Y0)))}function xi(e){function n(u){return vi(u,e)}if(0<Es.length){vi(Es[0],e);for(var i=1;i<Es.length;i++){var l=Es[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Rn!==null&&vi(Rn,e),Mn!==null&&vi(Mn,e),Ln!==null&&vi(Ln,e),pi.forEach(n),gi.forEach(n),i=0;i<On.length;i++)l=On[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<On.length&&(i=On[0],i.blockedOn===null);)od(i),i.blockedOn===null&&On.shift()}var kr=le.ReactCurrentBatchConfig,Rs=!0;function G0(e,n,i,l){var u=Oe,h=kr.transition;kr.transition=null;try{Oe=1,xo(e,n,i,l)}finally{Oe=u,kr.transition=h}}function q0(e,n,i,l){var u=Oe,h=kr.transition;kr.transition=null;try{Oe=4,xo(e,n,i,l)}finally{Oe=u,kr.transition=h}}function xo(e,n,i,l){if(Rs){var u=wo(e,n,i,l);if(u===null)_o(e,n,l,Ms,i),ad(e,l);else if(K0(u,e,n,i,l))l.stopPropagation();else if(ad(e,l),n&4&&-1<$0.indexOf(e)){for(;u!==null;){var h=Mi(u);if(h!==null&&nd(h),h=wo(e,n,i,l),h===null&&_o(e,n,l,Ms,i),h===u)break;u=h}u!==null&&l.stopPropagation()}else _o(e,n,l,null,i)}}var Ms=null;function wo(e,n,i,l){if(Ms=null,e=oo(l),e=rr(e),e!==null)if(n=nr(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Ku(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ms=e,null}function cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case ho:return 1;case Ju:return 4;case Ss:case _0:return 16;case Zu:return 536870912;default:return 16}default:return 16}}var An=null,bo=null,Ls=null;function ud(){if(Ls)return Ls;var e,n=bo,i=n.length,l,u="value"in An?An.value:An.textContent,h=u.length;for(e=0;e<i&&n[e]===u[e];e++);var j=i-e;for(l=1;l<=j&&n[i-l]===u[h-l];l++);return Ls=u.slice(e,1<l?1-l:void 0)}function Os(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function As(){return!0}function dd(){return!1}function Et(e){function n(i,l,u,h,j){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=j,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(i=e[C],this[C]=i?i(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?As:dd,this.isPropagationStopped=dd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),n}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Et(Cr),wi=y({},Cr,{view:0,detail:0}),X0=Et(wi),So,ko,bi,Ds=y({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(So=e.screenX-bi.screenX,ko=e.screenY-bi.screenY):ko=So=0,bi=e),So)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),fd=Et(Ds),Q0=y({},Ds,{dataTransfer:0}),J0=Et(Q0),Z0=y({},wi,{relatedTarget:0}),Co=Et(Z0),ey=y({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=Et(ey),ny=y({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ry=Et(ny),iy=y({},Cr,{data:0}),hd=Et(iy),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oy[e])?!!n[e]:!1}function To(){return ly}var cy=y({},wi,{key:function(e){if(e.key){var n=sy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uy=Et(cy),dy=y({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Et(dy),fy=y({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),hy=Et(fy),my=y({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=Et(my),gy=y({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=Et(gy),vy=[9,13,27,32],Po=p&&"CompositionEvent"in window,ji=null;p&&"documentMode"in document&&(ji=document.documentMode);var xy=p&&"TextEvent"in window&&!ji,pd=p&&(!Po||ji&&8<ji&&11>=ji),gd=" ",yd=!1;function vd(e,n){switch(e){case"keyup":return vy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function wy(e,n){switch(e){case"compositionend":return xd(n);case"keypress":return n.which!==32?null:(yd=!0,gd);case"textInput":return e=n.data,e===gd&&yd?null:e;default:return null}}function by(e,n){if(Tr)return e==="compositionend"||!Po&&vd(e,n)?(e=ud(),Ls=bo=An=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pd&&n.locale!=="ko"?null:n.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jy[e.type]:n==="textarea"}function bd(e,n,i,l){Bu(l),n=Fs(n,"onChange"),0<n.length&&(i=new jo("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var Si=null,ki=null;function Sy(e){Vd(e,0)}function zs(e){var n=Mr(e);if(Ne(n))return e}function ky(e,n){if(e==="change")return n}var jd=!1;if(p){var Eo;if(p){var No="oninput"in document;if(!No){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),No=typeof Sd.oninput=="function"}Eo=No}else Eo=!1;jd=Eo&&(!document.documentMode||9<document.documentMode)}function kd(){Si&&(Si.detachEvent("onpropertychange",Cd),ki=Si=null)}function Cd(e){if(e.propertyName==="value"&&zs(ki)){var n=[];bd(n,ki,e,oo(e)),$u(Sy,n)}}function Cy(e,n,i){e==="focusin"?(kd(),Si=n,ki=i,Si.attachEvent("onpropertychange",Cd)):e==="focusout"&&kd()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(ki)}function Py(e,n){if(e==="click")return zs(n)}function Ey(e,n){if(e==="input"||e==="change")return zs(n)}function Ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kt=typeof Object.is=="function"?Object.is:Ny;function Ci(e,n){if(Kt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!g.call(n,u)||!Kt(e[u],n[u]))return!1}return!0}function Td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pd(e,n){var i=Td(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Td(i)}}function Ed(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ed(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Nd(){for(var e=window,n=Ce();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Ce(e.document)}return n}function Ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ry(e){var n=Nd(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Ed(i.ownerDocument.documentElement,i)){if(l!==null&&Ro(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!e.extend&&h>l&&(u=l,l=h,h=u),u=Pd(i,h);var j=Pd(i,l);u&&j&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==j.node||e.focusOffset!==j.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),h>l?(e.addRange(n),e.extend(j.node,j.offset)):(n.setEnd(j.node,j.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var My=p&&"documentMode"in document&&11>=document.documentMode,Pr=null,Mo=null,Ti=null,Lo=!1;function Rd(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Lo||Pr==null||Pr!==Ce(l)||(l=Pr,"selectionStart"in l&&Ro(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ti&&Ci(Ti,l)||(Ti=l,l=Fs(Mo,"onSelect"),0<l.length&&(n=new jo("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=Pr)))}function _s(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Er={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionend:_s("Transition","TransitionEnd")},Oo={},Md={};p&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Is(e){if(Oo[e])return Oo[e];if(!Er[e])return e;var n=Er[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Md)return Oo[e]=n[i];return e}var Ld=Is("animationend"),Od=Is("animationiteration"),Ad=Is("animationstart"),Dd=Is("transitionend"),zd=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){zd.set(e,n),d(n,[e])}for(var Ao=0;Ao<_d.length;Ao++){var Do=_d[Ao],Ly=Do.toLowerCase(),Oy=Do[0].toUpperCase()+Do.slice(1);Dn(Ly,"on"+Oy)}Dn(Ld,"onAnimationEnd"),Dn(Od,"onAnimationIteration"),Dn(Ad,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Dd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function Id(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,L0(l,n,void 0,e),e.currentTarget=null}function Vd(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var j=l.length-1;0<=j;j--){var C=l[j],O=C.instance,U=C.currentTarget;if(C=C.listener,O!==h&&u.isPropagationStopped())break e;Id(u,C,U),h=O}else for(j=0;j<l.length;j++){if(C=l[j],O=C.instance,U=C.currentTarget,C=C.listener,O!==h&&u.isPropagationStopped())break e;Id(u,C,U),h=O}}}if(js)throw e=fo,js=!1,fo=null,e}function _e(e,n){var i=n[Wo];i===void 0&&(i=n[Wo]=new Set);var l=e+"__bubble";i.has(l)||(Fd(n,e,2,!1),i.add(l))}function zo(e,n,i){var l=0;n&&(l|=4),Fd(i,e,l,n)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[Vs]){e[Vs]=!0,o.forEach(function(i){i!=="selectionchange"&&(Ay.has(i)||zo(i,!1,e),zo(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vs]||(n[Vs]=!0,zo("selectionchange",!1,n))}}function Fd(e,n,i,l){switch(cd(n)){case 1:var u=G0;break;case 4:u=q0;break;default:u=xo}i=u.bind(null,n,i,e),u=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function _o(e,n,i,l,u){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var j=l.tag;if(j===3||j===4){var C=l.stateNode.containerInfo;if(C===u||C.nodeType===8&&C.parentNode===u)break;if(j===4)for(j=l.return;j!==null;){var O=j.tag;if((O===3||O===4)&&(O=j.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;j=j.return}for(;C!==null;){if(j=rr(C),j===null)return;if(O=j.tag,O===5||O===6){l=h=j;continue e}C=C.parentNode}}l=l.return}$u(function(){var U=h,re=oo(i),se=[];e:{var ne=zd.get(e);if(ne!==void 0){var ue=jo,he=e;switch(e){case"keypress":if(Os(i)===0)break e;case"keydown":case"keyup":ue=uy;break;case"focusin":he="focus",ue=Co;break;case"focusout":he="blur",ue=Co;break;case"beforeblur":case"afterblur":ue=Co;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=hy;break;case Ld:case Od:case Ad:ue=ty;break;case Dd:ue=py;break;case"scroll":ue=X0;break;case"wheel":ue=yy;break;case"copy":case"cut":case"paste":ue=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=md}var me=(n&4)!==0,Je=!me&&e==="scroll",B=me?ne!==null?ne+"Capture":null:ne;me=[];for(var _=U,W;_!==null;){W=_;var oe=W.stateNode;if(W.tag===5&&oe!==null&&(W=oe,B!==null&&(oe=ui(_,B),oe!=null&&me.push(Ni(_,oe,W)))),Je)break;_=_.return}0<me.length&&(ne=new ue(ne,he,null,i,re),se.push({event:ne,listeners:me}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",ne&&i!==ao&&(he=i.relatedTarget||i.fromElement)&&(rr(he)||he[pn]))break e;if((ue||ne)&&(ne=re.window===re?re:(ne=re.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(he=i.relatedTarget||i.toElement,ue=U,he=he?rr(he):null,he!==null&&(Je=nr(he),he!==Je||he.tag!==5&&he.tag!==6)&&(he=null)):(ue=null,he=U),ue!==he)){if(me=fd,oe="onMouseLeave",B="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(me=md,oe="onPointerLeave",B="onPointerEnter",_="pointer"),Je=ue==null?ne:Mr(ue),W=he==null?ne:Mr(he),ne=new me(oe,_+"leave",ue,i,re),ne.target=Je,ne.relatedTarget=W,oe=null,rr(re)===U&&(me=new me(B,_+"enter",he,i,re),me.target=W,me.relatedTarget=Je,oe=me),Je=oe,ue&&he)t:{for(me=ue,B=he,_=0,W=me;W;W=Nr(W))_++;for(W=0,oe=B;oe;oe=Nr(oe))W++;for(;0<_-W;)me=Nr(me),_--;for(;0<W-_;)B=Nr(B),W--;for(;_--;){if(me===B||B!==null&&me===B.alternate)break t;me=Nr(me),B=Nr(B)}me=null}else me=null;ue!==null&&Bd(se,ne,ue,me,!1),he!==null&&Je!==null&&Bd(se,Je,he,me,!0)}}e:{if(ne=U?Mr(U):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var ge=ky;else if(wd(ne))if(jd)ge=Ey;else{ge=Ty;var ye=Cy}else(ue=ne.nodeName)&&ue.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(ge=Py);if(ge&&(ge=ge(e,U))){bd(se,ge,i,re);break e}ye&&ye(e,ne,U),e==="focusout"&&(ye=ne._wrapperState)&&ye.controlled&&ne.type==="number"&&Ge(ne,"number",ne.value)}switch(ye=U?Mr(U):window,e){case"focusin":(wd(ye)||ye.contentEditable==="true")&&(Pr=ye,Mo=U,Ti=null);break;case"focusout":Ti=Mo=Pr=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Rd(se,i,re);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Rd(se,i,re)}var ve;if(Po)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Tr?vd(e,i)&&(be="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(be="onCompositionStart");be&&(pd&&i.locale!=="ko"&&(Tr||be!=="onCompositionStart"?be==="onCompositionEnd"&&Tr&&(ve=ud()):(An=re,bo="value"in An?An.value:An.textContent,Tr=!0)),ye=Fs(U,be),0<ye.length&&(be=new hd(be,e,null,i,re),se.push({event:be,listeners:ye}),ve?be.data=ve:(ve=xd(i),ve!==null&&(be.data=ve)))),(ve=xy?wy(e,i):by(e,i))&&(U=Fs(U,"onBeforeInput"),0<U.length&&(re=new hd("onBeforeInput","beforeinput",null,i,re),se.push({event:re,listeners:U}),re.data=ve))}Vd(se,n)})}function Ni(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Fs(e,n){for(var i=n+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=ui(e,i),h!=null&&l.unshift(Ni(e,h,u)),h=ui(e,n),h!=null&&l.push(Ni(e,h,u))),e=e.return}return l}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bd(e,n,i,l,u){for(var h=n._reactName,j=[];i!==null&&i!==l;){var C=i,O=C.alternate,U=C.stateNode;if(O!==null&&O===l)break;C.tag===5&&U!==null&&(C=U,u?(O=ui(i,h),O!=null&&j.unshift(Ni(i,O,C))):u||(O=ui(i,h),O!=null&&j.push(Ni(i,O,C)))),i=i.return}j.length!==0&&e.push({event:n,listeners:j})}var Dy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Hd(e){return(typeof e=="string"?e:""+e).replace(Dy,`
`).replace(zy,"")}function Bs(e,n,i){if(n=Hd(n),Hd(e)!==n&&i)throw Error(s(425))}function Hs(){}var Io=null,Vo=null;function Fo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(Vy)}:Bo;function Vy(e){setTimeout(function(){throw e})}function Ho(e,n){var i=n,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),xi(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);xi(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ud(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),an="__reactFiber$"+Rr,Ri="__reactProps$"+Rr,pn="__reactContainer$"+Rr,Wo="__reactEvents$"+Rr,Fy="__reactListeners$"+Rr,By="__reactHandles$"+Rr;function rr(e){var n=e[an];if(n)return n;for(var i=e.parentNode;i;){if(n=i[pn]||i[an]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Ud(e);e!==null;){if(i=e[an])return i;e=Ud(e)}return n}e=i,i=e.parentNode}return null}function Mi(e){return e=e[an]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ws(e){return e[Ri]||null}var Uo=[],Lr=-1;function _n(e){return{current:e}}function Ie(e){0>Lr||(e.current=Uo[Lr],Uo[Lr]=null,Lr--)}function ze(e,n){Lr++,Uo[Lr]=e.current,e.current=n}var In={},ht=_n(In),bt=_n(!1),ir=In;function Or(e,n){var i=e.type.contextTypes;if(!i)return In;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in i)u[h]=n[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function jt(e){return e=e.childContextTypes,e!=null}function Us(){Ie(bt),Ie(ht)}function $d(e,n,i){if(ht.current!==In)throw Error(s(168));ze(ht,n),ze(bt,i)}function Kd(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(s(108,ie(e)||"Unknown",u));return y({},i,l)}function $s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,ir=ht.current,ze(ht,e),ze(bt,bt.current),!0}function Yd(e,n,i){var l=e.stateNode;if(!l)throw Error(s(169));i?(e=Kd(e,n,ir),l.__reactInternalMemoizedMergedChildContext=e,Ie(bt),Ie(ht),ze(ht,e)):Ie(bt),ze(bt,i)}var gn=null,Ks=!1,$o=!1;function Gd(e){gn===null?gn=[e]:gn.push(e)}function Hy(e){Ks=!0,Gd(e)}function Vn(){if(!$o&&gn!==null){$o=!0;var e=0,n=Oe;try{var i=gn;for(Oe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}gn=null,Ks=!1}catch(u){throw gn!==null&&(gn=gn.slice(e+1)),Xu(ho,Vn),u}finally{Oe=n,$o=!1}}return null}var Ar=[],Dr=0,Ys=null,Gs=0,At=[],Dt=0,sr=null,yn=1,vn="";function ar(e,n){Ar[Dr++]=Gs,Ar[Dr++]=Ys,Ys=e,Gs=n}function qd(e,n,i){At[Dt++]=yn,At[Dt++]=vn,At[Dt++]=sr,sr=e;var l=yn;e=vn;var u=32-$t(l)-1;l&=~(1<<u),i+=1;var h=32-$t(n)+u;if(30<h){var j=u-u%5;h=(l&(1<<j)-1).toString(32),l>>=j,u-=j,yn=1<<32-$t(n)+u|i<<u|l,vn=h+e}else yn=1<<h|i<<u|l,vn=e}function Ko(e){e.return!==null&&(ar(e,1),qd(e,1,0))}function Yo(e){for(;e===Ys;)Ys=Ar[--Dr],Ar[Dr]=null,Gs=Ar[--Dr],Ar[Dr]=null;for(;e===sr;)sr=At[--Dt],At[Dt]=null,vn=At[--Dt],At[Dt]=null,yn=At[--Dt],At[Dt]=null}var Nt=null,Rt=null,Ve=!1,Yt=null;function Xd(e,n){var i=Vt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Qd(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Nt=e,Rt=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Nt=e,Rt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=sr!==null?{id:yn,overflow:vn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Vt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Nt=e,Rt=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(Ve){var n=Rt;if(n){var i=n;if(!Qd(e,n)){if(Go(e))throw Error(s(418));n=zn(i.nextSibling);var l=Nt;n&&Qd(e,n)?Xd(l,i):(e.flags=e.flags&-4097|2,Ve=!1,Nt=e)}}else{if(Go(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ve=!1,Nt=e}}}function Jd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function qs(e){if(e!==Nt)return!1;if(!Ve)return Jd(e),Ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fo(e.type,e.memoizedProps)),n&&(n=Rt)){if(Go(e))throw Zd(),Error(s(418));for(;n;)Xd(e,n),n=zn(n.nextSibling)}if(Jd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Rt=zn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Rt=null}}else Rt=Nt?zn(e.stateNode.nextSibling):null;return!0}function Zd(){for(var e=Rt;e;)e=zn(e.nextSibling)}function zr(){Rt=Nt=null,Ve=!1}function Xo(e){Yt===null?Yt=[e]:Yt.push(e)}var Wy=le.ReactCurrentBatchConfig;function Li(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var l=i.stateNode}if(!l)throw Error(s(147,e));var u=l,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(j){var C=u.refs;j===null?delete C[h]:C[h]=j},n._stringRef=h,n)}if(typeof e!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,e))}return e}function Xs(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ef(e){var n=e._init;return n(e._payload)}function tf(e){function n(B,_){if(e){var W=B.deletions;W===null?(B.deletions=[_],B.flags|=16):W.push(_)}}function i(B,_){if(!e)return null;for(;_!==null;)n(B,_),_=_.sibling;return null}function l(B,_){for(B=new Map;_!==null;)_.key!==null?B.set(_.key,_):B.set(_.index,_),_=_.sibling;return B}function u(B,_){return B=Yn(B,_),B.index=0,B.sibling=null,B}function h(B,_,W){return B.index=W,e?(W=B.alternate,W!==null?(W=W.index,W<_?(B.flags|=2,_):W):(B.flags|=2,_)):(B.flags|=1048576,_)}function j(B){return e&&B.alternate===null&&(B.flags|=2),B}function C(B,_,W,oe){return _===null||_.tag!==6?(_=Bl(W,B.mode,oe),_.return=B,_):(_=u(_,W),_.return=B,_)}function O(B,_,W,oe){var ge=W.type;return ge===L?re(B,_,W.props.children,oe,W.key):_!==null&&(_.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ae&&ef(ge)===_.type)?(oe=u(_,W.props),oe.ref=Li(B,_,W),oe.return=B,oe):(oe=wa(W.type,W.key,W.props,null,B.mode,oe),oe.ref=Li(B,_,W),oe.return=B,oe)}function U(B,_,W,oe){return _===null||_.tag!==4||_.stateNode.containerInfo!==W.containerInfo||_.stateNode.implementation!==W.implementation?(_=Hl(W,B.mode,oe),_.return=B,_):(_=u(_,W.children||[]),_.return=B,_)}function re(B,_,W,oe,ge){return _===null||_.tag!==7?(_=mr(W,B.mode,oe,ge),_.return=B,_):(_=u(_,W),_.return=B,_)}function se(B,_,W){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bl(""+_,B.mode,W),_.return=B,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case T:return W=wa(_.type,_.key,_.props,null,B.mode,W),W.ref=Li(B,null,_),W.return=B,W;case z:return _=Hl(_,B.mode,W),_.return=B,_;case ae:var oe=_._init;return se(B,oe(_._payload),W)}if(He(_)||N(_))return _=mr(_,B.mode,W,null),_.return=B,_;Xs(B,_)}return null}function ne(B,_,W,oe){var ge=_!==null?_.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return ge!==null?null:C(B,_,""+W,oe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case T:return W.key===ge?O(B,_,W,oe):null;case z:return W.key===ge?U(B,_,W,oe):null;case ae:return ge=W._init,ne(B,_,ge(W._payload),oe)}if(He(W)||N(W))return ge!==null?null:re(B,_,W,oe,null);Xs(B,W)}return null}function ue(B,_,W,oe,ge){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return B=B.get(W)||null,C(_,B,""+oe,ge);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case T:return B=B.get(oe.key===null?W:oe.key)||null,O(_,B,oe,ge);case z:return B=B.get(oe.key===null?W:oe.key)||null,U(_,B,oe,ge);case ae:var ye=oe._init;return ue(B,_,W,ye(oe._payload),ge)}if(He(oe)||N(oe))return B=B.get(W)||null,re(_,B,oe,ge,null);Xs(_,oe)}return null}function he(B,_,W,oe){for(var ge=null,ye=null,ve=_,be=_=0,lt=null;ve!==null&&be<W.length;be++){ve.index>be?(lt=ve,ve=null):lt=ve.sibling;var Re=ne(B,ve,W[be],oe);if(Re===null){ve===null&&(ve=lt);break}e&&ve&&Re.alternate===null&&n(B,ve),_=h(Re,_,be),ye===null?ge=Re:ye.sibling=Re,ye=Re,ve=lt}if(be===W.length)return i(B,ve),Ve&&ar(B,be),ge;if(ve===null){for(;be<W.length;be++)ve=se(B,W[be],oe),ve!==null&&(_=h(ve,_,be),ye===null?ge=ve:ye.sibling=ve,ye=ve);return Ve&&ar(B,be),ge}for(ve=l(B,ve);be<W.length;be++)lt=ue(ve,B,be,W[be],oe),lt!==null&&(e&&lt.alternate!==null&&ve.delete(lt.key===null?be:lt.key),_=h(lt,_,be),ye===null?ge=lt:ye.sibling=lt,ye=lt);return e&&ve.forEach(function(Gn){return n(B,Gn)}),Ve&&ar(B,be),ge}function me(B,_,W,oe){var ge=N(W);if(typeof ge!="function")throw Error(s(150));if(W=ge.call(W),W==null)throw Error(s(151));for(var ye=ge=null,ve=_,be=_=0,lt=null,Re=W.next();ve!==null&&!Re.done;be++,Re=W.next()){ve.index>be?(lt=ve,ve=null):lt=ve.sibling;var Gn=ne(B,ve,Re.value,oe);if(Gn===null){ve===null&&(ve=lt);break}e&&ve&&Gn.alternate===null&&n(B,ve),_=h(Gn,_,be),ye===null?ge=Gn:ye.sibling=Gn,ye=Gn,ve=lt}if(Re.done)return i(B,ve),Ve&&ar(B,be),ge;if(ve===null){for(;!Re.done;be++,Re=W.next())Re=se(B,Re.value,oe),Re!==null&&(_=h(Re,_,be),ye===null?ge=Re:ye.sibling=Re,ye=Re);return Ve&&ar(B,be),ge}for(ve=l(B,ve);!Re.done;be++,Re=W.next())Re=ue(ve,B,be,Re.value,oe),Re!==null&&(e&&Re.alternate!==null&&ve.delete(Re.key===null?be:Re.key),_=h(Re,_,be),ye===null?ge=Re:ye.sibling=Re,ye=Re);return e&&ve.forEach(function(jv){return n(B,jv)}),Ve&&ar(B,be),ge}function Je(B,_,W,oe){if(typeof W=="object"&&W!==null&&W.type===L&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case T:e:{for(var ge=W.key,ye=_;ye!==null;){if(ye.key===ge){if(ge=W.type,ge===L){if(ye.tag===7){i(B,ye.sibling),_=u(ye,W.props.children),_.return=B,B=_;break e}}else if(ye.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ae&&ef(ge)===ye.type){i(B,ye.sibling),_=u(ye,W.props),_.ref=Li(B,ye,W),_.return=B,B=_;break e}i(B,ye);break}else n(B,ye);ye=ye.sibling}W.type===L?(_=mr(W.props.children,B.mode,oe,W.key),_.return=B,B=_):(oe=wa(W.type,W.key,W.props,null,B.mode,oe),oe.ref=Li(B,_,W),oe.return=B,B=oe)}return j(B);case z:e:{for(ye=W.key;_!==null;){if(_.key===ye)if(_.tag===4&&_.stateNode.containerInfo===W.containerInfo&&_.stateNode.implementation===W.implementation){i(B,_.sibling),_=u(_,W.children||[]),_.return=B,B=_;break e}else{i(B,_);break}else n(B,_);_=_.sibling}_=Hl(W,B.mode,oe),_.return=B,B=_}return j(B);case ae:return ye=W._init,Je(B,_,ye(W._payload),oe)}if(He(W))return he(B,_,W,oe);if(N(W))return me(B,_,W,oe);Xs(B,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,_!==null&&_.tag===6?(i(B,_.sibling),_=u(_,W),_.return=B,B=_):(i(B,_),_=Bl(W,B.mode,oe),_.return=B,B=_),j(B)):i(B,_)}return Je}var _r=tf(!0),nf=tf(!1),Qs=_n(null),Js=null,Ir=null,Qo=null;function Jo(){Qo=Ir=Js=null}function Zo(e){var n=Qs.current;Ie(Qs),e._currentValue=n}function el(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Vr(e,n){Js=e,Qo=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(St=!0),e.firstContext=null)}function zt(e){var n=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:n,next:null},Ir===null){if(Js===null)throw Error(s(308));Ir=e,Js.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return n}var or=null;function tl(e){or===null?or=[e]:or.push(e)}function rf(e,n,i,l){var u=n.interleaved;return u===null?(i.next=i,tl(n)):(i.next=u.next,u.next=i),n.interleaved=i,xn(e,l)}function xn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Fn=!1;function nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,xn(e,i)}return u=l.interleaved,u===null?(n.next=n,tl(l)):(n.next=u.next,u.next=n),l.interleaved=n,xn(e,i)}function Zs(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,go(e,i)}}function af(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var j={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?u=h=j:h=h.next=j,i=i.next}while(i!==null);h===null?u=h=n:h=h.next=n}else u=h=n;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function ea(e,n,i,l){var u=e.updateQueue;Fn=!1;var h=u.firstBaseUpdate,j=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var O=C,U=O.next;O.next=null,j===null?h=U:j.next=U,j=O;var re=e.alternate;re!==null&&(re=re.updateQueue,C=re.lastBaseUpdate,C!==j&&(C===null?re.firstBaseUpdate=U:C.next=U,re.lastBaseUpdate=O))}if(h!==null){var se=u.baseState;j=0,re=U=O=null,C=h;do{var ne=C.lane,ue=C.eventTime;if((l&ne)===ne){re!==null&&(re=re.next={eventTime:ue,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=e,me=C;switch(ne=n,ue=i,me.tag){case 1:if(he=me.payload,typeof he=="function"){se=he.call(ue,se,ne);break e}se=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=me.payload,ne=typeof he=="function"?he.call(ue,se,ne):he,ne==null)break e;se=y({},se,ne);break e;case 2:Fn=!0}}C.callback!==null&&C.lane!==0&&(e.flags|=64,ne=u.effects,ne===null?u.effects=[C]:ne.push(C))}else ue={eventTime:ue,lane:ne,tag:C.tag,payload:C.payload,callback:C.callback,next:null},re===null?(U=re=ue,O=se):re=re.next=ue,j|=ne;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ne=C,C=ne.next,ne.next=null,u.lastBaseUpdate=ne,u.shared.pending=null}}while(!0);if(re===null&&(O=se),u.baseState=O,u.firstBaseUpdate=U,u.lastBaseUpdate=re,n=u.shared.interleaved,n!==null){u=n;do j|=u.lane,u=u.next;while(u!==n)}else h===null&&(u.shared.lanes=0);ur|=j,e.lanes=j,e.memoizedState=se}}function of(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(s(191,u));u.call(l)}}}var Oi={},on=_n(Oi),Ai=_n(Oi),Di=_n(Oi);function lr(e){if(e===Oi)throw Error(s(174));return e}function rl(e,n){switch(ze(Di,n),ze(Ai,e),ze(on,Oi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ot(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ot(n,e)}Ie(on),ze(on,n)}function Fr(){Ie(on),Ie(Ai),Ie(Di)}function lf(e){lr(Di.current);var n=lr(on.current),i=Ot(n,e.type);n!==i&&(ze(Ai,e),ze(on,i))}function il(e){Ai.current===e&&(Ie(on),Ie(Ai))}var We=_n(0);function ta(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sl=[];function al(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var na=le.ReactCurrentDispatcher,ol=le.ReactCurrentBatchConfig,cr=0,Ue=null,it=null,at=null,ra=!1,zi=!1,_i=0,Uy=0;function mt(){throw Error(s(321))}function ll(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Kt(e[i],n[i]))return!1;return!0}function cl(e,n,i,l,u,h){if(cr=h,Ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,na.current=e===null||e.memoizedState===null?Gy:qy,e=i(l,u),zi){h=0;do{if(zi=!1,_i=0,25<=h)throw Error(s(301));h+=1,at=it=null,n.updateQueue=null,na.current=Xy,e=i(l,u)}while(zi)}if(na.current=aa,n=it!==null&&it.next!==null,cr=0,at=it=Ue=null,ra=!1,n)throw Error(s(300));return e}function ul(){var e=_i!==0;return _i=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Ue.memoizedState=at=e:at=at.next=e,at}function _t(){if(it===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var n=at===null?Ue.memoizedState:at.next;if(n!==null)at=n,it=e;else{if(e===null)throw Error(s(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},at===null?Ue.memoizedState=at=e:at=at.next=e}return at}function Ii(e,n){return typeof n=="function"?n(e):n}function dl(e){var n=_t(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=it,u=l.baseQueue,h=i.pending;if(h!==null){if(u!==null){var j=u.next;u.next=h.next,h.next=j}l.baseQueue=u=h,i.pending=null}if(u!==null){h=u.next,l=l.baseState;var C=j=null,O=null,U=h;do{var re=U.lane;if((cr&re)===re)O!==null&&(O=O.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),l=U.hasEagerState?U.eagerState:e(l,U.action);else{var se={lane:re,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};O===null?(C=O=se,j=l):O=O.next=se,Ue.lanes|=re,ur|=re}U=U.next}while(U!==null&&U!==h);O===null?j=l:O.next=C,Kt(l,n.memoizedState)||(St=!0),n.memoizedState=l,n.baseState=j,n.baseQueue=O,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do h=u.lane,Ue.lanes|=h,ur|=h,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function fl(e){var n=_t(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,h=n.memoizedState;if(u!==null){i.pending=null;var j=u=u.next;do h=e(h,j.action),j=j.next;while(j!==u);Kt(h,n.memoizedState)||(St=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),i.lastRenderedState=h}return[h,l]}function cf(){}function uf(e,n){var i=Ue,l=_t(),u=n(),h=!Kt(l.memoizedState,u);if(h&&(l.memoizedState=u,St=!0),l=l.queue,hl(hf.bind(null,i,l,e),[e]),l.getSnapshot!==n||h||at!==null&&at.memoizedState.tag&1){if(i.flags|=2048,Vi(9,ff.bind(null,i,l,u,n),void 0,null),ot===null)throw Error(s(349));(cr&30)!==0||df(i,n,u)}return u}function df(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=Ue.updateQueue,n===null?(n={lastEffect:null,stores:null},Ue.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function ff(e,n,i,l){n.value=i,n.getSnapshot=l,mf(n)&&pf(e)}function hf(e,n,i){return i(function(){mf(n)&&pf(e)})}function mf(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Kt(e,i)}catch{return!0}}function pf(e){var n=xn(e,1);n!==null&&Qt(n,e,1,-1)}function gf(e){var n=ln();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n.queue=e,e=e.dispatch=Yy.bind(null,Ue,e),[n.memoizedState,e]}function Vi(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=Ue.updateQueue,n===null?(n={lastEffect:null,stores:null},Ue.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function yf(){return _t().memoizedState}function ia(e,n,i,l){var u=ln();Ue.flags|=e,u.memoizedState=Vi(1|n,i,void 0,l===void 0?null:l)}function sa(e,n,i,l){var u=_t();l=l===void 0?null:l;var h=void 0;if(it!==null){var j=it.memoizedState;if(h=j.destroy,l!==null&&ll(l,j.deps)){u.memoizedState=Vi(n,i,h,l);return}}Ue.flags|=e,u.memoizedState=Vi(1|n,i,h,l)}function vf(e,n){return ia(8390656,8,e,n)}function hl(e,n){return sa(2048,8,e,n)}function xf(e,n){return sa(4,2,e,n)}function wf(e,n){return sa(4,4,e,n)}function bf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jf(e,n,i){return i=i!=null?i.concat([e]):null,sa(4,4,bf.bind(null,n,e),i)}function ml(){}function Sf(e,n){var i=_t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&ll(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function kf(e,n){var i=_t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&ll(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function Cf(e,n,i){return(cr&21)===0?(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=i):(Kt(i,n)||(i=ed(),Ue.lanes|=i,ur|=i,e.baseState=!0),n)}function $y(e,n){var i=Oe;Oe=i!==0&&4>i?i:4,e(!0);var l=ol.transition;ol.transition={};try{e(!1),n()}finally{Oe=i,ol.transition=l}}function Tf(){return _t().memoizedState}function Ky(e,n,i){var l=$n(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Pf(e))Ef(n,i);else if(i=rf(e,n,i,l),i!==null){var u=xt();Qt(i,e,l,u),Nf(i,n,l)}}function Yy(e,n,i){var l=$n(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))Ef(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var j=n.lastRenderedState,C=h(j,i);if(u.hasEagerState=!0,u.eagerState=C,Kt(C,j)){var O=n.interleaved;O===null?(u.next=u,tl(n)):(u.next=O.next,O.next=u),n.interleaved=u;return}}catch{}finally{}i=rf(e,n,u,l),i!==null&&(u=xt(),Qt(i,e,l,u),Nf(i,n,l))}}function Pf(e){var n=e.alternate;return e===Ue||n!==null&&n===Ue}function Ef(e,n){zi=ra=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Nf(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,go(e,i)}}var aa={readContext:zt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},Gy={readContext:zt,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:zt,useEffect:vf,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,ia(4194308,4,bf.bind(null,n,e),i)},useLayoutEffect:function(e,n){return ia(4194308,4,e,n)},useInsertionEffect:function(e,n){return ia(4,2,e,n)},useMemo:function(e,n){var i=ln();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=ln();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ky.bind(null,Ue,e),[l.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:gf,useDebugValue:ml,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=gf(!1),n=e[0];return e=$y.bind(null,e[1]),ln().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=Ue,u=ln();if(Ve){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),ot===null)throw Error(s(349));(cr&30)!==0||df(l,n,i)}u.memoizedState=i;var h={value:i,getSnapshot:n};return u.queue=h,vf(hf.bind(null,l,h,e),[e]),l.flags|=2048,Vi(9,ff.bind(null,l,h,i,n),void 0,null),i},useId:function(){var e=ln(),n=ot.identifierPrefix;if(Ve){var i=vn,l=yn;i=(l&~(1<<32-$t(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=_i++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Uy++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qy={readContext:zt,useCallback:Sf,useContext:zt,useEffect:hl,useImperativeHandle:jf,useInsertionEffect:xf,useLayoutEffect:wf,useMemo:kf,useReducer:dl,useRef:yf,useState:function(){return dl(Ii)},useDebugValue:ml,useDeferredValue:function(e){var n=_t();return Cf(n,it.memoizedState,e)},useTransition:function(){var e=dl(Ii)[0],n=_t().memoizedState;return[e,n]},useMutableSource:cf,useSyncExternalStore:uf,useId:Tf,unstable_isNewReconciler:!1},Xy={readContext:zt,useCallback:Sf,useContext:zt,useEffect:hl,useImperativeHandle:jf,useInsertionEffect:xf,useLayoutEffect:wf,useMemo:kf,useReducer:fl,useRef:yf,useState:function(){return fl(Ii)},useDebugValue:ml,useDeferredValue:function(e){var n=_t();return it===null?n.memoizedState=e:Cf(n,it.memoizedState,e)},useTransition:function(){var e=fl(Ii)[0],n=_t().memoizedState;return[e,n]},useMutableSource:cf,useSyncExternalStore:uf,useId:Tf,unstable_isNewReconciler:!1};function Gt(e,n){if(e&&e.defaultProps){n=y({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function pl(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:y({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var oa={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=xt(),u=$n(e),h=wn(l,u);h.payload=n,i!=null&&(h.callback=i),n=Bn(e,h,u),n!==null&&(Qt(n,e,u,l),Zs(n,e,u))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=xt(),u=$n(e),h=wn(l,u);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=Bn(e,h,u),n!==null&&(Qt(n,e,u,l),Zs(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=xt(),l=$n(e),u=wn(i,l);u.tag=2,n!=null&&(u.callback=n),n=Bn(e,u,l),n!==null&&(Qt(n,e,l,i),Zs(n,e,l))}};function Rf(e,n,i,l,u,h,j){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,j):n.prototype&&n.prototype.isPureReactComponent?!Ci(i,l)||!Ci(u,h):!0}function Mf(e,n,i){var l=!1,u=In,h=n.contextType;return typeof h=="object"&&h!==null?h=zt(h):(u=jt(n)?ir:ht.current,l=n.contextTypes,h=(l=l!=null)?Or(e,u):In),n=new n(i,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oa,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),n}function Lf(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&oa.enqueueReplaceState(n,n.state,null)}function gl(e,n,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},nl(e);var h=n.contextType;typeof h=="object"&&h!==null?u.context=zt(h):(h=jt(n)?ir:ht.current,u.context=Or(e,h)),u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(pl(e,n,h,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&oa.enqueueReplaceState(u,u.state,null),ea(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,n){try{var i="",l=n;do i+=te(l),l=l.return;while(l);var u=i}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:u,digest:null}}function yl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function vl(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function Of(e,n,i){i=wn(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){ma||(ma=!0,Ol=l),vl(e,n)},i}function Af(e,n,i){i=wn(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;i.payload=function(){return l(u)},i.callback=function(){vl(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){vl(e,n),typeof l!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var j=n.stack;this.componentDidCatch(n.value,{componentStack:j!==null?j:""})}),i}function Df(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Qy;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(i)||(u.add(i),e=dv.bind(null,e,n,i),n.then(e,e))}function zf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function _f(e,n,i,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=wn(-1,1),n.tag=2,Bn(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Jy=le.ReactCurrentOwner,St=!1;function vt(e,n,i,l){n.child=e===null?nf(n,null,i,l):_r(n,e.child,i,l)}function If(e,n,i,l,u){i=i.render;var h=n.ref;return Vr(n,u),l=cl(e,n,i,l,h,u),i=ul(),e!==null&&!St?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,bn(e,n,u)):(Ve&&i&&Ko(n),n.flags|=1,vt(e,n,l,u),n.child)}function Vf(e,n,i,l,u){if(e===null){var h=i.type;return typeof h=="function"&&!Fl(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=h,Ff(e,n,h,l,u)):(e=wa(i.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&u)===0){var j=h.memoizedProps;if(i=i.compare,i=i!==null?i:Ci,i(j,l)&&e.ref===n.ref)return bn(e,n,u)}return n.flags|=1,e=Yn(h,l),e.ref=n.ref,e.return=n,n.child=e}function Ff(e,n,i,l,u){if(e!==null){var h=e.memoizedProps;if(Ci(h,l)&&e.ref===n.ref)if(St=!1,n.pendingProps=l=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(St=!0);else return n.lanes=e.lanes,bn(e,n,u)}return xl(e,n,i,l,u)}function Bf(e,n,i){var l=n.pendingProps,u=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Wr,Mt),Mt|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ze(Wr,Mt),Mt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,ze(Wr,Mt),Mt|=l}else h!==null?(l=h.baseLanes|i,n.memoizedState=null):l=i,ze(Wr,Mt),Mt|=l;return vt(e,n,u,i),n.child}function Hf(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function xl(e,n,i,l,u){var h=jt(i)?ir:ht.current;return h=Or(n,h),Vr(n,u),i=cl(e,n,i,l,h,u),l=ul(),e!==null&&!St?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,bn(e,n,u)):(Ve&&l&&Ko(n),n.flags|=1,vt(e,n,i,u),n.child)}function Wf(e,n,i,l,u){if(jt(i)){var h=!0;$s(n)}else h=!1;if(Vr(n,u),n.stateNode===null)ca(e,n),Mf(n,i,l),gl(n,i,l,u),l=!0;else if(e===null){var j=n.stateNode,C=n.memoizedProps;j.props=C;var O=j.context,U=i.contextType;typeof U=="object"&&U!==null?U=zt(U):(U=jt(i)?ir:ht.current,U=Or(n,U));var re=i.getDerivedStateFromProps,se=typeof re=="function"||typeof j.getSnapshotBeforeUpdate=="function";se||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(C!==l||O!==U)&&Lf(n,j,l,U),Fn=!1;var ne=n.memoizedState;j.state=ne,ea(n,l,j,u),O=n.memoizedState,C!==l||ne!==O||bt.current||Fn?(typeof re=="function"&&(pl(n,i,re,l),O=n.memoizedState),(C=Fn||Rf(n,i,C,l,ne,O,U))?(se||typeof j.UNSAFE_componentWillMount!="function"&&typeof j.componentWillMount!="function"||(typeof j.componentWillMount=="function"&&j.componentWillMount(),typeof j.UNSAFE_componentWillMount=="function"&&j.UNSAFE_componentWillMount()),typeof j.componentDidMount=="function"&&(n.flags|=4194308)):(typeof j.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=O),j.props=l,j.state=O,j.context=U,l=C):(typeof j.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{j=n.stateNode,sf(e,n),C=n.memoizedProps,U=n.type===n.elementType?C:Gt(n.type,C),j.props=U,se=n.pendingProps,ne=j.context,O=i.contextType,typeof O=="object"&&O!==null?O=zt(O):(O=jt(i)?ir:ht.current,O=Or(n,O));var ue=i.getDerivedStateFromProps;(re=typeof ue=="function"||typeof j.getSnapshotBeforeUpdate=="function")||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(C!==se||ne!==O)&&Lf(n,j,l,O),Fn=!1,ne=n.memoizedState,j.state=ne,ea(n,l,j,u);var he=n.memoizedState;C!==se||ne!==he||bt.current||Fn?(typeof ue=="function"&&(pl(n,i,ue,l),he=n.memoizedState),(U=Fn||Rf(n,i,U,l,ne,he,O)||!1)?(re||typeof j.UNSAFE_componentWillUpdate!="function"&&typeof j.componentWillUpdate!="function"||(typeof j.componentWillUpdate=="function"&&j.componentWillUpdate(l,he,O),typeof j.UNSAFE_componentWillUpdate=="function"&&j.UNSAFE_componentWillUpdate(l,he,O)),typeof j.componentDidUpdate=="function"&&(n.flags|=4),typeof j.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof j.componentDidUpdate!="function"||C===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=he),j.props=l,j.state=he,j.context=O,l=U):(typeof j.componentDidUpdate!="function"||C===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),l=!1)}return wl(e,n,i,l,h,u)}function wl(e,n,i,l,u,h){Hf(e,n);var j=(n.flags&128)!==0;if(!l&&!j)return u&&Yd(n,i,!1),bn(e,n,h);l=n.stateNode,Jy.current=n;var C=j&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&j?(n.child=_r(n,e.child,null,h),n.child=_r(n,null,C,h)):vt(e,n,C,h),n.memoizedState=l.state,u&&Yd(n,i,!0),n.child}function Uf(e){var n=e.stateNode;n.pendingContext?$d(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$d(e,n.context,!1),rl(e,n.containerInfo)}function $f(e,n,i,l,u){return zr(),Xo(u),n.flags|=256,vt(e,n,i,l),n.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kf(e,n,i){var l=n.pendingProps,u=We.current,h=!1,j=(n.flags&128)!==0,C;if((C=j)||(C=e!==null&&e.memoizedState===null?!1:(u&2)!==0),C?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),ze(We,u&1),e===null)return qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(j=l.children,e=l.fallback,h?(l=n.mode,h=n.child,j={mode:"hidden",children:j},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=j):h=ba(j,l,0,null),e=mr(e,l,i,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=jl(i),n.memoizedState=bl,e):Sl(n,j));if(u=e.memoizedState,u!==null&&(C=u.dehydrated,C!==null))return Zy(e,n,j,l,C,u,i);if(h){h=l.fallback,j=n.mode,u=e.child,C=u.sibling;var O={mode:"hidden",children:l.children};return(j&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=O,n.deletions=null):(l=Yn(u,O),l.subtreeFlags=u.subtreeFlags&14680064),C!==null?h=Yn(C,h):(h=mr(h,j,i,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,j=e.child.memoizedState,j=j===null?jl(i):{baseLanes:j.baseLanes|i,cachePool:null,transitions:j.transitions},h.memoizedState=j,h.childLanes=e.childLanes&~i,n.memoizedState=bl,l}return h=e.child,e=h.sibling,l=Yn(h,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function Sl(e,n){return n=ba({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function la(e,n,i,l){return l!==null&&Xo(l),_r(n,e.child,null,i),e=Sl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Zy(e,n,i,l,u,h,j){if(i)return n.flags&256?(n.flags&=-257,l=yl(Error(s(422))),la(e,n,j,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=l.fallback,u=n.mode,l=ba({mode:"visible",children:l.children},u,0,null),h=mr(h,u,j,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,(n.mode&1)!==0&&_r(n,e.child,null,j),n.child.memoizedState=jl(j),n.memoizedState=bl,h);if((n.mode&1)===0)return la(e,n,j,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var C=l.dgst;return l=C,h=Error(s(419)),l=yl(h,l,void 0),la(e,n,j,l)}if(C=(j&e.childLanes)!==0,St||C){if(l=ot,l!==null){switch(j&-j){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|j))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,xn(e,u),Qt(l,e,u,-1))}return Vl(),l=yl(Error(s(421))),la(e,n,j,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=fv.bind(null,e),u._reactRetry=n,null):(e=h.treeContext,Rt=zn(u.nextSibling),Nt=n,Ve=!0,Yt=null,e!==null&&(At[Dt++]=yn,At[Dt++]=vn,At[Dt++]=sr,yn=e.id,vn=e.overflow,sr=n),n=Sl(n,l.children),n.flags|=4096,n)}function Yf(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),el(e.return,n,i)}function kl(e,n,i,l,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=u)}function Gf(e,n,i){var l=n.pendingProps,u=l.revealOrder,h=l.tail;if(vt(e,n,l.children,i),l=We.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,i,n);else if(e.tag===19)Yf(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ze(We,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&ta(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),kl(n,!1,u,i,h);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ta(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}kl(n,!0,i,null,h);break;case"together":kl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ca(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function bn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),ur|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,i=Yn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Yn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function ev(e,n,i){switch(n.tag){case 3:Uf(n),zr();break;case 5:lf(n);break;case 1:jt(n.type)&&$s(n);break;case 4:rl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;ze(Qs,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(ze(We,We.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Kf(e,n,i):(ze(We,We.current&1),e=bn(e,n,i),e!==null?e.sibling:null);ze(We,We.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return Gf(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ze(We,We.current),l)break;return null;case 22:case 23:return n.lanes=0,Bf(e,n,i)}return bn(e,n,i)}var qf,Cl,Xf,Qf;qf=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Cl=function(){},Xf=function(e,n,i,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,lr(on.current);var h=null;switch(i){case"input":u=Se(e,u),l=Se(e,l),h=[];break;case"select":u=y({},u,{value:void 0}),l=y({},l,{value:void 0}),h=[];break;case"textarea":u=Ut(e,u),l=Ut(e,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Hs)}io(i,l);var j;i=null;for(U in u)if(!l.hasOwnProperty(U)&&u.hasOwnProperty(U)&&u[U]!=null)if(U==="style"){var C=u[U];for(j in C)C.hasOwnProperty(j)&&(i||(i={}),i[j]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(c.hasOwnProperty(U)?h||(h=[]):(h=h||[]).push(U,null));for(U in l){var O=l[U];if(C=u?.[U],l.hasOwnProperty(U)&&O!==C&&(O!=null||C!=null))if(U==="style")if(C){for(j in C)!C.hasOwnProperty(j)||O&&O.hasOwnProperty(j)||(i||(i={}),i[j]="");for(j in O)O.hasOwnProperty(j)&&C[j]!==O[j]&&(i||(i={}),i[j]=O[j])}else i||(h||(h=[]),h.push(U,i)),i=O;else U==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,C=C?C.__html:void 0,O!=null&&C!==O&&(h=h||[]).push(U,O)):U==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(U,""+O):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(c.hasOwnProperty(U)?(O!=null&&U==="onScroll"&&_e("scroll",e),h||C===O||(h=[])):(h=h||[]).push(U,O))}i&&(h=h||[]).push("style",i);var U=h;(n.updateQueue=U)&&(n.flags|=4)}},Qf=function(e,n,i,l){i!==l&&(n.flags|=4)};function Fi(e,n){if(!Ve)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pt(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function tv(e,n,i){var l=n.pendingProps;switch(Yo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(n),null;case 1:return jt(n.type)&&Us(),pt(n),null;case 3:return l=n.stateNode,Fr(),Ie(bt),Ie(ht),al(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(qs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yt!==null&&(zl(Yt),Yt=null))),Cl(e,n),pt(n),null;case 5:il(n);var u=lr(Di.current);if(i=n.type,e!==null&&n.stateNode!=null)Xf(e,n,i,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(s(166));return pt(n),null}if(e=lr(on.current),qs(n)){l=n.stateNode,i=n.type;var h=n.memoizedProps;switch(l[an]=n,l[Ri]=h,e=(n.mode&1)!==0,i){case"dialog":_e("cancel",l),_e("close",l);break;case"iframe":case"object":case"embed":_e("load",l);break;case"video":case"audio":for(u=0;u<Pi.length;u++)_e(Pi[u],l);break;case"source":_e("error",l);break;case"img":case"image":case"link":_e("error",l),_e("load",l);break;case"details":_e("toggle",l);break;case"input":Pe(l,h),_e("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},_e("invalid",l);break;case"textarea":tr(l,h),_e("invalid",l)}io(i,h),u=null;for(var j in h)if(h.hasOwnProperty(j)){var C=h[j];j==="children"?typeof C=="string"?l.textContent!==C&&(h.suppressHydrationWarning!==!0&&Bs(l.textContent,C,e),u=["children",C]):typeof C=="number"&&l.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&Bs(l.textContent,C,e),u=["children",""+C]):c.hasOwnProperty(j)&&C!=null&&j==="onScroll"&&_e("scroll",l)}switch(i){case"input":Te(l),Be(l,h,!0);break;case"textarea":Te(l),Nn(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Hs)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{j=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ws(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=j.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=j.createElement(i,{is:l.is}):(e=j.createElement(i),i==="select"&&(j=e,l.multiple?j.multiple=!0:l.size&&(j.size=l.size))):e=j.createElementNS(e,i),e[an]=n,e[Ri]=l,qf(e,n,!1,!1),n.stateNode=e;e:{switch(j=so(i,l),i){case"dialog":_e("cancel",e),_e("close",e),u=l;break;case"iframe":case"object":case"embed":_e("load",e),u=l;break;case"video":case"audio":for(u=0;u<Pi.length;u++)_e(Pi[u],e);u=l;break;case"source":_e("error",e),u=l;break;case"img":case"image":case"link":_e("error",e),_e("load",e),u=l;break;case"details":_e("toggle",e),u=l;break;case"input":Pe(e,l),u=Se(e,l),_e("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=y({},l,{value:void 0}),_e("invalid",e);break;case"textarea":tr(e,l),u=Ut(e,l),_e("invalid",e);break;default:u=l}io(i,u),C=u;for(h in C)if(C.hasOwnProperty(h)){var O=C[h];h==="style"?Vu(e,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&_u(e,O)):h==="children"?typeof O=="string"?(i!=="textarea"||O!=="")&&li(e,O):typeof O=="number"&&li(e,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?O!=null&&h==="onScroll"&&_e("scroll",e):O!=null&&G(e,h,O,j))}switch(i){case"input":Te(e),Be(e,l,!1);break;case"textarea":Te(e),Nn(e);break;case"option":l.value!=null&&e.setAttribute("value",""+fe(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?et(e,!!l.multiple,h,!1):l.defaultValue!=null&&et(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Hs)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return pt(n),null;case 6:if(e&&n.stateNode!=null)Qf(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(i=lr(Di.current),lr(on.current),qs(n)){if(l=n.stateNode,i=n.memoizedProps,l[an]=n,(h=l.nodeValue!==i)&&(e=Nt,e!==null))switch(e.tag){case 3:Bs(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bs(l.nodeValue,i,(e.mode&1)!==0)}h&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[an]=n,n.stateNode=l}return pt(n),null;case 13:if(Ie(We),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Rt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Zd(),zr(),n.flags|=98560,h=!1;else if(h=qs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[an]=n}else zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pt(n),h=!1}else Yt!==null&&(zl(Yt),Yt=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(We.current&1)!==0?st===0&&(st=3):Vl())),n.updateQueue!==null&&(n.flags|=4),pt(n),null);case 4:return Fr(),Cl(e,n),e===null&&Ei(n.stateNode.containerInfo),pt(n),null;case 10:return Zo(n.type._context),pt(n),null;case 17:return jt(n.type)&&Us(),pt(n),null;case 19:if(Ie(We),h=n.memoizedState,h===null)return pt(n),null;if(l=(n.flags&128)!==0,j=h.rendering,j===null)if(l)Fi(h,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(j=ta(e),j!==null){for(n.flags|=128,Fi(h,!1),l=j.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)h=i,e=l,h.flags&=14680066,j=h.alternate,j===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=j.childLanes,h.lanes=j.lanes,h.child=j.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=j.memoizedProps,h.memoizedState=j.memoizedState,h.updateQueue=j.updateQueue,h.type=j.type,e=j.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ze(We,We.current&1|2),n.child}e=e.sibling}h.tail!==null&&Qe()>Ur&&(n.flags|=128,l=!0,Fi(h,!1),n.lanes=4194304)}else{if(!l)if(e=ta(j),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Fi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!j.alternate&&!Ve)return pt(n),null}else 2*Qe()-h.renderingStartTime>Ur&&i!==1073741824&&(n.flags|=128,l=!0,Fi(h,!1),n.lanes=4194304);h.isBackwards?(j.sibling=n.child,n.child=j):(i=h.last,i!==null?i.sibling=j:n.child=j,h.last=j)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=Qe(),n.sibling=null,i=We.current,ze(We,l?i&1|2:i&1),n):(pt(n),null);case 22:case 23:return Il(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Mt&1073741824)!==0&&(pt(n),n.subtreeFlags&6&&(n.flags|=8192)):pt(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function nv(e,n){switch(Yo(n),n.tag){case 1:return jt(n.type)&&Us(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fr(),Ie(bt),Ie(ht),al(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return il(n),null;case 13:if(Ie(We),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ie(We),null;case 4:return Fr(),null;case 10:return Zo(n.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var ua=!1,gt=!1,rv=typeof WeakSet=="function"?WeakSet:Set,de=null;function Hr(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){qe(e,n,l)}else i.current=null}function Tl(e,n,i){try{i()}catch(l){qe(e,n,l)}}var Jf=!1;function iv(e,n){if(Io=Rs,e=Nd(),Ro(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var j=0,C=-1,O=-1,U=0,re=0,se=e,ne=null;t:for(;;){for(var ue;se!==i||u!==0&&se.nodeType!==3||(C=j+u),se!==h||l!==0&&se.nodeType!==3||(O=j+l),se.nodeType===3&&(j+=se.nodeValue.length),(ue=se.firstChild)!==null;)ne=se,se=ue;for(;;){if(se===e)break t;if(ne===i&&++U===u&&(C=j),ne===h&&++re===l&&(O=j),(ue=se.nextSibling)!==null)break;se=ne,ne=se.parentNode}se=ue}i=C===-1||O===-1?null:{start:C,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Vo={focusedElem:e,selectionRange:i},Rs=!1,de=n;de!==null;)if(n=de,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,de=e;else for(;de!==null;){n=de;try{var he=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var me=he.memoizedProps,Je=he.memoizedState,B=n.stateNode,_=B.getSnapshotBeforeUpdate(n.elementType===n.type?me:Gt(n.type,me),Je);B.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(oe){qe(n,n.return,oe)}if(e=n.sibling,e!==null){e.return=n.return,de=e;break}de=n.return}return he=Jf,Jf=!1,he}function Bi(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&Tl(n,i,h)}u=u.next}while(u!==l)}}function da(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Pl(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Zf(e){var n=e.alternate;n!==null&&(e.alternate=null,Zf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[an],delete n[Ri],delete n[Wo],delete n[Fy],delete n[By])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Hs));else if(l!==4&&(e=e.child,e!==null))for(El(e,n,i),e=e.sibling;e!==null;)El(e,n,i),e=e.sibling}function Nl(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Nl(e,n,i),e=e.sibling;e!==null;)Nl(e,n,i),e=e.sibling}var ut=null,qt=!1;function Hn(e,n,i){for(i=i.child;i!==null;)nh(e,n,i),i=i.sibling}function nh(e,n,i){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(ks,i)}catch{}switch(i.tag){case 5:gt||Hr(i,n);case 6:var l=ut,u=qt;ut=null,Hn(e,n,i),ut=l,qt=u,ut!==null&&(qt?(e=ut,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):ut.removeChild(i.stateNode));break;case 18:ut!==null&&(qt?(e=ut,i=i.stateNode,e.nodeType===8?Ho(e.parentNode,i):e.nodeType===1&&Ho(e,i),xi(e)):Ho(ut,i.stateNode));break;case 4:l=ut,u=qt,ut=i.stateNode.containerInfo,qt=!0,Hn(e,n,i),ut=l,qt=u;break;case 0:case 11:case 14:case 15:if(!gt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,j=h.destroy;h=h.tag,j!==void 0&&((h&2)!==0||(h&4)!==0)&&Tl(i,n,j),u=u.next}while(u!==l)}Hn(e,n,i);break;case 1:if(!gt&&(Hr(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(C){qe(i,n,C)}Hn(e,n,i);break;case 21:Hn(e,n,i);break;case 22:i.mode&1?(gt=(l=gt)||i.memoizedState!==null,Hn(e,n,i),gt=l):Hn(e,n,i);break;default:Hn(e,n,i)}}function rh(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new rv),n.forEach(function(l){var u=hv.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function Xt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var h=e,j=n,C=j;e:for(;C!==null;){switch(C.tag){case 5:ut=C.stateNode,qt=!1;break e;case 3:ut=C.stateNode.containerInfo,qt=!0;break e;case 4:ut=C.stateNode.containerInfo,qt=!0;break e}C=C.return}if(ut===null)throw Error(s(160));nh(h,j,u),ut=null,qt=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(U){qe(u,n,U)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ih(n,e),n=n.sibling}function ih(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(n,e),cn(e),l&4){try{Bi(3,e,e.return),da(3,e)}catch(me){qe(e,e.return,me)}try{Bi(5,e,e.return)}catch(me){qe(e,e.return,me)}}break;case 1:Xt(n,e),cn(e),l&512&&i!==null&&Hr(i,i.return);break;case 5:if(Xt(n,e),cn(e),l&512&&i!==null&&Hr(i,i.return),e.flags&32){var u=e.stateNode;try{li(u,"")}catch(me){qe(e,e.return,me)}}if(l&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,j=i!==null?i.memoizedProps:h,C=e.type,O=e.updateQueue;if(e.updateQueue=null,O!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&Ye(u,h),so(C,j);var U=so(C,h);for(j=0;j<O.length;j+=2){var re=O[j],se=O[j+1];re==="style"?Vu(u,se):re==="dangerouslySetInnerHTML"?_u(u,se):re==="children"?li(u,se):G(u,re,se,U)}switch(C){case"input":je(u,h);break;case"textarea":oi(u,h);break;case"select":var ne=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var ue=h.value;ue!=null?et(u,!!h.multiple,ue,!1):ne!==!!h.multiple&&(h.defaultValue!=null?et(u,!!h.multiple,h.defaultValue,!0):et(u,!!h.multiple,h.multiple?[]:"",!1))}u[Ri]=h}catch(me){qe(e,e.return,me)}}break;case 6:if(Xt(n,e),cn(e),l&4){if(e.stateNode===null)throw Error(s(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(me){qe(e,e.return,me)}}break;case 3:if(Xt(n,e),cn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{xi(n.containerInfo)}catch(me){qe(e,e.return,me)}break;case 4:Xt(n,e),cn(e);break;case 13:Xt(n,e),cn(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Ll=Qe())),l&4&&rh(e);break;case 22:if(re=i!==null&&i.memoizedState!==null,e.mode&1?(gt=(U=gt)||re,Xt(n,e),gt=U):Xt(n,e),cn(e),l&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!re&&(e.mode&1)!==0)for(de=e,re=e.child;re!==null;){for(se=de=re;de!==null;){switch(ne=de,ue=ne.child,ne.tag){case 0:case 11:case 14:case 15:Bi(4,ne,ne.return);break;case 1:Hr(ne,ne.return);var he=ne.stateNode;if(typeof he.componentWillUnmount=="function"){l=ne,i=ne.return;try{n=l,he.props=n.memoizedProps,he.state=n.memoizedState,he.componentWillUnmount()}catch(me){qe(l,i,me)}}break;case 5:Hr(ne,ne.return);break;case 22:if(ne.memoizedState!==null){oh(se);continue}}ue!==null?(ue.return=ne,de=ue):oh(se)}re=re.sibling}e:for(re=null,se=e;;){if(se.tag===5){if(re===null){re=se;try{u=se.stateNode,U?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=se.stateNode,O=se.memoizedProps.style,j=O!=null&&O.hasOwnProperty("display")?O.display:null,C.style.display=Iu("display",j))}catch(me){qe(e,e.return,me)}}}else if(se.tag===6){if(re===null)try{se.stateNode.nodeValue=U?"":se.memoizedProps}catch(me){qe(e,e.return,me)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===e)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===e)break e;for(;se.sibling===null;){if(se.return===null||se.return===e)break e;re===se&&(re=null),se=se.return}re===se&&(re=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:Xt(n,e),cn(e),l&4&&rh(e);break;case 21:break;default:Xt(n,e),cn(e)}}function cn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(eh(i)){var l=i;break e}i=i.return}throw Error(s(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(li(u,""),l.flags&=-33);var h=th(e);Nl(e,h,u);break;case 3:case 4:var j=l.stateNode.containerInfo,C=th(e);El(e,C,j);break;default:throw Error(s(161))}}catch(O){qe(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sv(e,n,i){de=e,sh(e)}function sh(e,n,i){for(var l=(e.mode&1)!==0;de!==null;){var u=de,h=u.child;if(u.tag===22&&l){var j=u.memoizedState!==null||ua;if(!j){var C=u.alternate,O=C!==null&&C.memoizedState!==null||gt;C=ua;var U=gt;if(ua=j,(gt=O)&&!U)for(de=u;de!==null;)j=de,O=j.child,j.tag===22&&j.memoizedState!==null?lh(u):O!==null?(O.return=j,de=O):lh(u);for(;h!==null;)de=h,sh(h),h=h.sibling;de=u,ua=C,gt=U}ah(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,de=h):ah(e)}}function ah(e){for(;de!==null;){var n=de;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:gt||da(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!gt)if(i===null)l.componentDidMount();else{var u=n.elementType===n.type?i.memoizedProps:Gt(n.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&of(n,h,l);break;case 3:var j=n.updateQueue;if(j!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}of(n,j,i)}break;case 5:var C=n.stateNode;if(i===null&&n.flags&4){i=C;var O=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&i.focus();break;case"img":O.src&&(i.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var U=n.alternate;if(U!==null){var re=U.memoizedState;if(re!==null){var se=re.dehydrated;se!==null&&xi(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}gt||n.flags&512&&Pl(n)}catch(ne){qe(n,n.return,ne)}}if(n===e){de=null;break}if(i=n.sibling,i!==null){i.return=n.return,de=i;break}de=n.return}}function oh(e){for(;de!==null;){var n=de;if(n===e){de=null;break}var i=n.sibling;if(i!==null){i.return=n.return,de=i;break}de=n.return}}function lh(e){for(;de!==null;){var n=de;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{da(4,n)}catch(O){qe(n,i,O)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(O){qe(n,u,O)}}var h=n.return;try{Pl(n)}catch(O){qe(n,h,O)}break;case 5:var j=n.return;try{Pl(n)}catch(O){qe(n,j,O)}}}catch(O){qe(n,n.return,O)}if(n===e){de=null;break}var C=n.sibling;if(C!==null){C.return=n.return,de=C;break}de=n.return}}var av=Math.ceil,fa=le.ReactCurrentDispatcher,Rl=le.ReactCurrentOwner,It=le.ReactCurrentBatchConfig,Ee=0,ot=null,tt=null,dt=0,Mt=0,Wr=_n(0),st=0,Hi=null,ur=0,ha=0,Ml=0,Wi=null,kt=null,Ll=0,Ur=1/0,jn=null,ma=!1,Ol=null,Wn=null,pa=!1,Un=null,ga=0,Ui=0,Al=null,ya=-1,va=0;function xt(){return(Ee&6)!==0?Qe():ya!==-1?ya:ya=Qe()}function $n(e){return(e.mode&1)===0?1:(Ee&2)!==0&&dt!==0?dt&-dt:Wy.transition!==null?(va===0&&(va=ed()),va):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:cd(e.type)),e)}function Qt(e,n,i,l){if(50<Ui)throw Ui=0,Al=null,Error(s(185));mi(e,i,l),((Ee&2)===0||e!==ot)&&(e===ot&&((Ee&2)===0&&(ha|=i),st===4&&Kn(e,dt)),Ct(e,l),i===1&&Ee===0&&(n.mode&1)===0&&(Ur=Qe()+500,Ks&&Vn()))}function Ct(e,n){var i=e.callbackNode;W0(e,n);var l=Ps(e,e===ot?dt:0);if(l===0)i!==null&&Qu(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&Qu(i),n===1)e.tag===0?Hy(uh.bind(null,e)):Gd(uh.bind(null,e)),Iy(function(){(Ee&6)===0&&Vn()}),i=null;else{switch(td(l)){case 1:i=ho;break;case 4:i=Ju;break;case 16:i=Ss;break;case 536870912:i=Zu;break;default:i=Ss}i=vh(i,ch.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function ch(e,n){if(ya=-1,va=0,(Ee&6)!==0)throw Error(s(327));var i=e.callbackNode;if($r()&&e.callbackNode!==i)return null;var l=Ps(e,e===ot?dt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=xa(e,l);else{n=l;var u=Ee;Ee|=2;var h=fh();(ot!==e||dt!==n)&&(jn=null,Ur=Qe()+500,fr(e,n));do try{cv();break}catch(C){dh(e,C)}while(!0);Jo(),fa.current=h,Ee=u,tt!==null?n=0:(ot=null,dt=0,n=st)}if(n!==0){if(n===2&&(u=mo(e),u!==0&&(l=u,n=Dl(e,u))),n===1)throw i=Hi,fr(e,0),Kn(e,l),Ct(e,Qe()),i;if(n===6)Kn(e,l);else{if(u=e.current.alternate,(l&30)===0&&!ov(u)&&(n=xa(e,l),n===2&&(h=mo(e),h!==0&&(l=h,n=Dl(e,h))),n===1))throw i=Hi,fr(e,0),Kn(e,l),Ct(e,Qe()),i;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(s(345));case 2:hr(e,kt,jn);break;case 3:if(Kn(e,l),(l&130023424)===l&&(n=Ll+500-Qe(),10<n)){if(Ps(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){xt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Bo(hr.bind(null,e,kt,jn),n);break}hr(e,kt,jn);break;case 4:if(Kn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var j=31-$t(l);h=1<<j,j=n[j],j>u&&(u=j),l&=~h}if(l=u,l=Qe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*av(l/1960))-l,10<l){e.timeoutHandle=Bo(hr.bind(null,e,kt,jn),l);break}hr(e,kt,jn);break;case 5:hr(e,kt,jn);break;default:throw Error(s(329))}}}return Ct(e,Qe()),e.callbackNode===i?ch.bind(null,e):null}function Dl(e,n){var i=Wi;return e.current.memoizedState.isDehydrated&&(fr(e,n).flags|=256),e=xa(e,n),e!==2&&(n=kt,kt=i,n!==null&&zl(n)),e}function zl(e){kt===null?kt=e:kt.push.apply(kt,e)}function ov(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],h=u.getSnapshot;u=u.value;try{if(!Kt(h(),u))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Kn(e,n){for(n&=~Ml,n&=~ha,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-$t(n),l=1<<i;e[i]=-1,n&=~l}}function uh(e){if((Ee&6)!==0)throw Error(s(327));$r();var n=Ps(e,0);if((n&1)===0)return Ct(e,Qe()),null;var i=xa(e,n);if(e.tag!==0&&i===2){var l=mo(e);l!==0&&(n=l,i=Dl(e,l))}if(i===1)throw i=Hi,fr(e,0),Kn(e,n),Ct(e,Qe()),i;if(i===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,hr(e,kt,jn),Ct(e,Qe()),null}function _l(e,n){var i=Ee;Ee|=1;try{return e(n)}finally{Ee=i,Ee===0&&(Ur=Qe()+500,Ks&&Vn())}}function dr(e){Un!==null&&Un.tag===0&&(Ee&6)===0&&$r();var n=Ee;Ee|=1;var i=It.transition,l=Oe;try{if(It.transition=null,Oe=1,e)return e()}finally{Oe=l,It.transition=i,Ee=n,(Ee&6)===0&&Vn()}}function Il(){Mt=Wr.current,Ie(Wr)}function fr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,_y(i)),tt!==null)for(i=tt.return;i!==null;){var l=i;switch(Yo(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Us();break;case 3:Fr(),Ie(bt),Ie(ht),al();break;case 5:il(l);break;case 4:Fr();break;case 13:Ie(We);break;case 19:Ie(We);break;case 10:Zo(l.type._context);break;case 22:case 23:Il()}i=i.return}if(ot=e,tt=e=Yn(e.current,null),dt=Mt=n,st=0,Hi=null,Ml=ha=ur=0,kt=Wi=null,or!==null){for(n=0;n<or.length;n++)if(i=or[n],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,h=i.pending;if(h!==null){var j=h.next;h.next=u,l.next=j}i.pending=l}or=null}return e}function dh(e,n){do{var i=tt;try{if(Jo(),na.current=aa,ra){for(var l=Ue.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}ra=!1}if(cr=0,at=it=Ue=null,zi=!1,_i=0,Rl.current=null,i===null||i.return===null){st=1,Hi=n,tt=null;break}e:{var h=e,j=i.return,C=i,O=n;if(n=dt,C.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var U=O,re=C,se=re.tag;if((re.mode&1)===0&&(se===0||se===11||se===15)){var ne=re.alternate;ne?(re.updateQueue=ne.updateQueue,re.memoizedState=ne.memoizedState,re.lanes=ne.lanes):(re.updateQueue=null,re.memoizedState=null)}var ue=zf(j);if(ue!==null){ue.flags&=-257,_f(ue,j,C,h,n),ue.mode&1&&Df(h,U,n),n=ue,O=U;var he=n.updateQueue;if(he===null){var me=new Set;me.add(O),n.updateQueue=me}else he.add(O);break e}else{if((n&1)===0){Df(h,U,n),Vl();break e}O=Error(s(426))}}else if(Ve&&C.mode&1){var Je=zf(j);if(Je!==null){(Je.flags&65536)===0&&(Je.flags|=256),_f(Je,j,C,h,n),Xo(Br(O,C));break e}}h=O=Br(O,C),st!==4&&(st=2),Wi===null?Wi=[h]:Wi.push(h),h=j;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var B=Of(h,O,n);af(h,B);break e;case 1:C=O;var _=h.type,W=h.stateNode;if((h.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Wn===null||!Wn.has(W)))){h.flags|=65536,n&=-n,h.lanes|=n;var oe=Af(h,C,n);af(h,oe);break e}}h=h.return}while(h!==null)}mh(i)}catch(ge){n=ge,tt===i&&i!==null&&(tt=i=i.return);continue}break}while(!0)}function fh(){var e=fa.current;return fa.current=aa,e===null?aa:e}function Vl(){(st===0||st===3||st===2)&&(st=4),ot===null||(ur&268435455)===0&&(ha&268435455)===0||Kn(ot,dt)}function xa(e,n){var i=Ee;Ee|=2;var l=fh();(ot!==e||dt!==n)&&(jn=null,fr(e,n));do try{lv();break}catch(u){dh(e,u)}while(!0);if(Jo(),Ee=i,fa.current=l,tt!==null)throw Error(s(261));return ot=null,dt=0,st}function lv(){for(;tt!==null;)hh(tt)}function cv(){for(;tt!==null&&!A0();)hh(tt)}function hh(e){var n=yh(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,n===null?mh(e):tt=n,Rl.current=null}function mh(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=tv(i,n,Mt),i!==null){tt=i;return}}else{if(i=nv(i,n),i!==null){i.flags&=32767,tt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,tt=null;return}}if(n=n.sibling,n!==null){tt=n;return}tt=n=e}while(n!==null);st===0&&(st=5)}function hr(e,n,i){var l=Oe,u=It.transition;try{It.transition=null,Oe=1,uv(e,n,i,l)}finally{It.transition=u,Oe=l}return null}function uv(e,n,i,l){do $r();while(Un!==null);if((Ee&6)!==0)throw Error(s(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(U0(e,h),e===ot&&(tt=ot=null,dt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||pa||(pa=!0,vh(Ss,function(){return $r(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=It.transition,It.transition=null;var j=Oe;Oe=1;var C=Ee;Ee|=4,Rl.current=null,iv(e,i),ih(i,e),Ry(Vo),Rs=!!Io,Vo=Io=null,e.current=i,sv(i),D0(),Ee=C,Oe=j,It.transition=h}else e.current=i;if(pa&&(pa=!1,Un=e,ga=u),h=e.pendingLanes,h===0&&(Wn=null),I0(i.stateNode),Ct(e,Qe()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)u=n[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(ma)throw ma=!1,e=Ol,Ol=null,e;return(ga&1)!==0&&e.tag!==0&&$r(),h=e.pendingLanes,(h&1)!==0?e===Al?Ui++:(Ui=0,Al=e):Ui=0,Vn(),null}function $r(){if(Un!==null){var e=td(ga),n=It.transition,i=Oe;try{if(It.transition=null,Oe=16>e?16:e,Un===null)var l=!1;else{if(e=Un,Un=null,ga=0,(Ee&6)!==0)throw Error(s(331));var u=Ee;for(Ee|=4,de=e.current;de!==null;){var h=de,j=h.child;if((de.flags&16)!==0){var C=h.deletions;if(C!==null){for(var O=0;O<C.length;O++){var U=C[O];for(de=U;de!==null;){var re=de;switch(re.tag){case 0:case 11:case 15:Bi(8,re,h)}var se=re.child;if(se!==null)se.return=re,de=se;else for(;de!==null;){re=de;var ne=re.sibling,ue=re.return;if(Zf(re),re===U){de=null;break}if(ne!==null){ne.return=ue,de=ne;break}de=ue}}}var he=h.alternate;if(he!==null){var me=he.child;if(me!==null){he.child=null;do{var Je=me.sibling;me.sibling=null,me=Je}while(me!==null)}}de=h}}if((h.subtreeFlags&2064)!==0&&j!==null)j.return=h,de=j;else e:for(;de!==null;){if(h=de,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Bi(9,h,h.return)}var B=h.sibling;if(B!==null){B.return=h.return,de=B;break e}de=h.return}}var _=e.current;for(de=_;de!==null;){j=de;var W=j.child;if((j.subtreeFlags&2064)!==0&&W!==null)W.return=j,de=W;else e:for(j=_;de!==null;){if(C=de,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:da(9,C)}}catch(ge){qe(C,C.return,ge)}if(C===j){de=null;break e}var oe=C.sibling;if(oe!==null){oe.return=C.return,de=oe;break e}de=C.return}}if(Ee=u,Vn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(ks,e)}catch{}l=!0}return l}finally{Oe=i,It.transition=n}}return!1}function ph(e,n,i){n=Br(i,n),n=Of(e,n,1),e=Bn(e,n,1),n=xt(),e!==null&&(mi(e,1,n),Ct(e,n))}function qe(e,n,i){if(e.tag===3)ph(e,e,i);else for(;n!==null;){if(n.tag===3){ph(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wn===null||!Wn.has(l))){e=Br(i,e),e=Af(n,e,1),n=Bn(n,e,1),e=xt(),n!==null&&(mi(n,1,e),Ct(n,e));break}}n=n.return}}function dv(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=xt(),e.pingedLanes|=e.suspendedLanes&i,ot===e&&(dt&i)===i&&(st===4||st===3&&(dt&130023424)===dt&&500>Qe()-Ll?fr(e,0):Ml|=i),Ct(e,n)}function gh(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ts,Ts<<=1,(Ts&130023424)===0&&(Ts=4194304)));var i=xt();e=xn(e,n),e!==null&&(mi(e,n,i),Ct(e,i))}function fv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),gh(e,i)}function hv(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(n),gh(e,i)}var yh;yh=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||bt.current)St=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return St=!1,ev(e,n,i);St=(e.flags&131072)!==0}else St=!1,Ve&&(n.flags&1048576)!==0&&qd(n,Gs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;ca(e,n),e=n.pendingProps;var u=Or(n,ht.current);Vr(n,i),u=cl(null,n,l,e,u,i);var h=ul();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,jt(l)?(h=!0,$s(n)):h=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,nl(n),u.updater=oa,n.stateNode=u,u._reactInternals=n,gl(n,l,e,i),n=wl(null,n,l,!0,h,i)):(n.tag=0,Ve&&h&&Ko(n),vt(null,n,u,i),n=n.child),n;case 16:l=n.elementType;e:{switch(ca(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=pv(l),e=Gt(l,e),u){case 0:n=xl(null,n,l,e,i);break e;case 1:n=Wf(null,n,l,e,i);break e;case 11:n=If(null,n,l,e,i);break e;case 14:n=Vf(null,n,l,Gt(l.type,e),i);break e}throw Error(s(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Gt(l,u),xl(e,n,l,u,i);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Gt(l,u),Wf(e,n,l,u,i);case 3:e:{if(Uf(n),e===null)throw Error(s(387));l=n.pendingProps,h=n.memoizedState,u=h.element,sf(e,n),ea(n,l,null,i);var j=n.memoizedState;if(l=j.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:j.cache,pendingSuspenseBoundaries:j.pendingSuspenseBoundaries,transitions:j.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){u=Br(Error(s(423)),n),n=$f(e,n,l,i,u);break e}else if(l!==u){u=Br(Error(s(424)),n),n=$f(e,n,l,i,u);break e}else for(Rt=zn(n.stateNode.containerInfo.firstChild),Nt=n,Ve=!0,Yt=null,i=nf(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(zr(),l===u){n=bn(e,n,i);break e}vt(e,n,l,i)}n=n.child}return n;case 5:return lf(n),e===null&&qo(n),l=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,j=u.children,Fo(l,u)?j=null:h!==null&&Fo(l,h)&&(n.flags|=32),Hf(e,n),vt(e,n,j,i),n.child;case 6:return e===null&&qo(n),null;case 13:return Kf(e,n,i);case 4:return rl(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=_r(n,null,l,i):vt(e,n,l,i),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Gt(l,u),If(e,n,l,u,i);case 7:return vt(e,n,n.pendingProps,i),n.child;case 8:return vt(e,n,n.pendingProps.children,i),n.child;case 12:return vt(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,h=n.memoizedProps,j=u.value,ze(Qs,l._currentValue),l._currentValue=j,h!==null)if(Kt(h.value,j)){if(h.children===u.children&&!bt.current){n=bn(e,n,i);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var C=h.dependencies;if(C!==null){j=h.child;for(var O=C.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=wn(-1,i&-i),O.tag=2;var U=h.updateQueue;if(U!==null){U=U.shared;var re=U.pending;re===null?O.next=O:(O.next=re.next,re.next=O),U.pending=O}}h.lanes|=i,O=h.alternate,O!==null&&(O.lanes|=i),el(h.return,i,n),C.lanes|=i;break}O=O.next}}else if(h.tag===10)j=h.type===n.type?null:h.child;else if(h.tag===18){if(j=h.return,j===null)throw Error(s(341));j.lanes|=i,C=j.alternate,C!==null&&(C.lanes|=i),el(j,i,n),j=h.sibling}else j=h.child;if(j!==null)j.return=h;else for(j=h;j!==null;){if(j===n){j=null;break}if(h=j.sibling,h!==null){h.return=j.return,j=h;break}j=j.return}h=j}vt(e,n,u.children,i),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Vr(n,i),u=zt(u),l=l(u),n.flags|=1,vt(e,n,l,i),n.child;case 14:return l=n.type,u=Gt(l,n.pendingProps),u=Gt(l.type,u),Vf(e,n,l,u,i);case 15:return Ff(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Gt(l,u),ca(e,n),n.tag=1,jt(l)?(e=!0,$s(n)):e=!1,Vr(n,i),Mf(n,l,u),gl(n,l,u,i),wl(null,n,l,!0,e,i);case 19:return Gf(e,n,i);case 22:return Bf(e,n,i)}throw Error(s(156,n.tag))};function vh(e,n){return Xu(e,n)}function mv(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,n,i,l){return new mv(e,n,i,l)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pv(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Z)return 11;if(e===ee)return 14}return 2}function Yn(e,n){var i=e.alternate;return i===null?(i=Vt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function wa(e,n,i,l,u,h){var j=2;if(l=e,typeof e=="function")Fl(e)&&(j=1);else if(typeof e=="string")j=5;else e:switch(e){case L:return mr(i.children,u,h,n);case D:j=8,u|=8;break;case M:return e=Vt(12,i,n,u|2),e.elementType=M,e.lanes=h,e;case F:return e=Vt(13,i,n,u),e.elementType=F,e.lanes=h,e;case q:return e=Vt(19,i,n,u),e.elementType=q,e.lanes=h,e;case x:return ba(i,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:j=10;break e;case $:j=9;break e;case Z:j=11;break e;case ee:j=14;break e;case ae:j=16,l=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=Vt(j,i,n,u),n.elementType=e,n.type=l,n.lanes=h,n}function mr(e,n,i,l){return e=Vt(7,e,l,n),e.lanes=i,e}function ba(e,n,i,l){return e=Vt(22,e,l,n),e.elementType=x,e.lanes=i,e.stateNode={isHidden:!1},e}function Bl(e,n,i){return e=Vt(6,e,null,n),e.lanes=i,e}function Hl(e,n,i){return n=Vt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gv(e,n,i,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=po(0),this.expirationTimes=po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Wl(e,n,i,l,u,h,j,C,O){return e=new gv(e,n,i,C,O),n===1?(n=1,h===!0&&(n|=8)):n=0,h=Vt(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},nl(h),e}function yv(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function xh(e){if(!e)return In;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(jt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var i=e.type;if(jt(i))return Kd(e,i,n)}return n}function wh(e,n,i,l,u,h,j,C,O){return e=Wl(i,l,!0,e,u,h,j,C,O),e.context=xh(null),i=e.current,l=xt(),u=$n(i),h=wn(l,u),h.callback=n??null,Bn(i,h,u),e.current.lanes=u,mi(e,u,l),Ct(e,l),e}function ja(e,n,i,l){var u=n.current,h=xt(),j=$n(u);return i=xh(i),n.context===null?n.context=i:n.pendingContext=i,n=wn(h,j),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Bn(u,n,j),e!==null&&(Qt(e,u,j,h),Zs(e,u,j)),j}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Ul(e,n){bh(e,n),(e=e.alternate)&&bh(e,n)}function vv(){return null}var jh=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}ka.prototype.render=$l.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));ja(e,n,null,null)},ka.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dr(function(){ja(null,e,null,null)}),n[pn]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var n=id();e={blockedOn:null,target:e,priority:n};for(var i=0;i<On.length&&n!==0&&n<On[i].priority;i++);On.splice(i,0,e),i===0&&od(e)}};function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sh(){}function xv(e,n,i,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var U=Sa(j);h.call(U)}}var j=wh(n,l,e,0,null,!1,!1,"",Sh);return e._reactRootContainer=j,e[pn]=j.current,Ei(e.nodeType===8?e.parentNode:e),dr(),j}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var C=l;l=function(){var U=Sa(O);C.call(U)}}var O=Wl(e,0,!1,null,null,!1,!1,"",Sh);return e._reactRootContainer=O,e[pn]=O.current,Ei(e.nodeType===8?e.parentNode:e),dr(function(){ja(n,O,i,l)}),O}function Ta(e,n,i,l,u){var h=i._reactRootContainer;if(h){var j=h;if(typeof u=="function"){var C=u;u=function(){var O=Sa(j);C.call(O)}}ja(n,j,e,u)}else j=xv(i,n,e,u,l);return Sa(j)}nd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=hi(n.pendingLanes);i!==0&&(go(n,i|1),Ct(n,Qe()),(Ee&6)===0&&(Ur=Qe()+500,Vn()))}break;case 13:dr(function(){var l=xn(e,1);if(l!==null){var u=xt();Qt(l,e,1,u)}}),Ul(e,1)}},yo=function(e){if(e.tag===13){var n=xn(e,134217728);if(n!==null){var i=xt();Qt(n,e,134217728,i)}Ul(e,134217728)}},rd=function(e){if(e.tag===13){var n=$n(e),i=xn(e,n);if(i!==null){var l=xt();Qt(i,e,n,l)}Ul(e,n)}},id=function(){return Oe},sd=function(e,n){var i=Oe;try{return Oe=e,n()}finally{Oe=i}},lo=function(e,n,i){switch(n){case"input":if(je(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var u=Ws(l);if(!u)throw Error(s(90));Ne(l),je(l,u)}}}break;case"textarea":oi(e,i);break;case"select":n=i.value,n!=null&&et(e,!!i.multiple,n,!1)}},Wu=_l,Uu=dr;var wv={usingClientEntryPoint:!1,Events:[Mi,Mr,Ws,Bu,Hu,_l]},$i={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{ks=Pa.inject(bv),sn=Pa}catch{}}return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv,Tt.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kl(n))throw Error(s(200));return yv(e,n,null,i)},Tt.createRoot=function(e,n){if(!Kl(e))throw Error(s(299));var i=!1,l="",u=jh;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Wl(e,1,!1,null,null,i,!1,l,u),e[pn]=n.current,Ei(e.nodeType===8?e.parentNode:e),new $l(n)},Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Gu(n),e=e===null?null:e.stateNode,e},Tt.flushSync=function(e){return dr(e)},Tt.hydrate=function(e,n,i){if(!Ca(n))throw Error(s(200));return Ta(null,e,n,!0,i)},Tt.hydrateRoot=function(e,n,i){if(!Kl(e))throw Error(s(405));var l=i!=null&&i.hydratedSources||null,u=!1,h="",j=jh;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(j=i.onRecoverableError)),n=wh(n,null,e,1,i??null,u,!1,h,j),e[pn]=n.current,Ei(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,u]:n.mutableSourceEagerHydrationData.push(i,u);return new ka(n)},Tt.render=function(e,n,i){if(!Ca(n))throw Error(s(200));return Ta(null,e,n,!1,i)},Tt.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(s(40));return e._reactRootContainer?(dr(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1},Tt.unstable_batchedUpdates=_l,Tt.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!Ca(i))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ta(e,n,i,!1,l)},Tt.version="18.3.1-next-f1338f8080-20240426",Tt}var Mh;function Rv(){if(Mh)return ql.exports;Mh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),ql.exports=Nv(),ql.exports}var Lh;function Mv(){if(Lh)return Na;Lh=1;var t=Rv();return Na.createRoot=t.createRoot,Na.hydrateRoot=t.hydrateRoot,Na}var Lv=Mv();const Ov=qc(Lv);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Oh="popstate";function Av(t={}){function r(o,c){let{pathname:d,search:f,hash:p}=o.location;return Cc("",{pathname:d,search:f,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(o,c){return typeof c=="string"?c:is(c)}return zv(r,s,null,t)}function Ke(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function fn(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Dv(){return Math.random().toString(36).substring(2,10)}function Ah(t,r){return{usr:t.state,key:t.key,idx:r}}function Cc(t,r,s=null,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?ni(r):r,state:s,key:r&&r.key||o||Dv()}}function is({pathname:t="/",search:r="",hash:s=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function ni(t){let r={};if(t){let s=t.indexOf("#");s>=0&&(r.hash=t.substring(s),t=t.substring(0,s));let o=t.indexOf("?");o>=0&&(r.search=t.substring(o),t=t.substring(0,o)),t&&(r.pathname=t)}return r}function zv(t,r,s,o={}){let{window:c=document.defaultView,v5Compat:d=!1}=o,f=c.history,p="POP",g=null,w=v();w==null&&(w=0,f.replaceState({...f.state,idx:w},""));function v(){return(f.state||{idx:null}).idx}function m(){p="POP";let V=v(),H=V==null?null:V-w;w=V,g&&g({action:p,location:A.location,delta:H})}function S(V,H){p="PUSH";let K=Cc(A.location,V,H);w=v()+1;let G=Ah(K,w),le=A.createHref(K);try{f.pushState(G,"",le)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;c.location.assign(le)}d&&g&&g({action:p,location:A.location,delta:1})}function E(V,H){p="REPLACE";let K=Cc(A.location,V,H);w=v();let G=Ah(K,w),le=A.createHref(K);f.replaceState(G,"",le),d&&g&&g({action:p,location:A.location,delta:0})}function I(V){return _v(V)}let A={get action(){return p},get location(){return t(c,f)},listen(V){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Oh,m),g=V,()=>{c.removeEventListener(Oh,m),g=null}},createHref(V){return r(c,V)},createURL:I,encodeLocation(V){let H=I(V);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:E,go(V){return f.go(V)}};return A}function _v(t,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(s,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:is(t);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function mp(t,r,s="/"){return Iv(t,r,s,!1)}function Iv(t,r,s,o){let c=typeof r=="string"?ni(r):r,d=Cn(c.pathname||"/",s);if(d==null)return null;let f=pp(t);Vv(f);let p=null;for(let g=0;p==null&&g<f.length;++g){let w=Xv(d);p=Gv(f[g],w,o)}return p}function pp(t,r=[],s=[],o="",c=!1){let d=(f,p,g=c,w)=>{let v={relativePath:w===void 0?f.path||"":w,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&g)return;Ke(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let m=kn([o,v.relativePath]),S=s.concat(v);f.children&&f.children.length>0&&(Ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),pp(f.children,r,S,m,g)),!(f.path==null&&!f.index)&&r.push({path:m,score:Kv(m,f.index),routesMeta:S})};return t.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))d(f,p);else for(let g of gp(f.path))d(f,p,!0,g)}),r}function gp(t){let r=t.split("/");if(r.length===0)return[];let[s,...o]=r,c=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return c?[d,""]:[d];let f=gp(o.join("/")),p=[];return p.push(...f.map(g=>g===""?d:[d,g].join("/"))),c&&p.push(...f),p.map(g=>t.startsWith("/")&&g===""?"/":g)}function Vv(t){t.sort((r,s)=>r.score!==s.score?s.score-r.score:Yv(r.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var Fv=/^:[\w-]+$/,Bv=3,Hv=2,Wv=1,Uv=10,$v=-2,Dh=t=>t==="*";function Kv(t,r){let s=t.split("/"),o=s.length;return s.some(Dh)&&(o+=$v),r&&(o+=Hv),s.filter(c=>!Dh(c)).reduce((c,d)=>c+(Fv.test(d)?Bv:d===""?Wv:Uv),o)}function Yv(t,r){return t.length===r.length&&t.slice(0,-1).every((o,c)=>o===r[c])?t[t.length-1]-r[r.length-1]:0}function Gv(t,r,s=!1){let{routesMeta:o}=t,c={},d="/",f=[];for(let p=0;p<o.length;++p){let g=o[p],w=p===o.length-1,v=d==="/"?r:r.slice(d.length)||"/",m=Fa({path:g.relativePath,caseSensitive:g.caseSensitive,end:w},v),S=g.route;if(!m&&w&&s&&!o[o.length-1].route.index&&(m=Fa({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!m)return null;Object.assign(c,m.params),f.push({params:c,pathname:kn([d,m.pathname]),pathnameBase:e1(kn([d,m.pathnameBase])),route:S}),m.pathnameBase!=="/"&&(d=kn([d,m.pathnameBase]))}return f}function Fa(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,o]=qv(t.path,t.caseSensitive,t.end),c=r.match(s);if(!c)return null;let d=c[0],f=d.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:o.reduce((w,{paramName:v,isOptional:m},S)=>{if(v==="*"){let I=p[S]||"";f=d.slice(0,d.length-I.length).replace(/(.)\/+$/,"$1")}const E=p[S];return m&&!E?w[v]=void 0:w[v]=(E||"").replace(/%2F/g,"/"),w},{}),pathname:d,pathnameBase:f,pattern:t}}function qv(t,r=!1,s=!0){fn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g)=>(o.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),o]}function Xv(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return fn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Cn(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,o=t.charAt(s);return o&&o!=="/"?null:t.slice(s)||"/"}function Qv(t,r="/"){let{pathname:s,search:o="",hash:c=""}=typeof t=="string"?ni(t):t;return{pathname:s?s.startsWith("/")?s:Jv(s,r):r,search:t1(o),hash:n1(c)}}function Jv(t,r){let s=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Jl(t,r,s,o){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zv(t){return t.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function yp(t){let r=Zv(t);return r.map((s,o)=>o===r.length-1?s.pathname:s.pathnameBase)}function vp(t,r,s,o=!1){let c;typeof t=="string"?c=ni(t):(c={...t},Ke(!c.pathname||!c.pathname.includes("?"),Jl("?","pathname","search",c)),Ke(!c.pathname||!c.pathname.includes("#"),Jl("#","pathname","hash",c)),Ke(!c.search||!c.search.includes("#"),Jl("#","search","hash",c)));let d=t===""||c.pathname==="",f=d?"/":c.pathname,p;if(f==null)p=s;else{let m=r.length-1;if(!o&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),m-=1;c.pathname=S.join("/")}p=m>=0?r[m]:"/"}let g=Qv(c,p),w=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(w||v)&&(g.pathname+="/"),g}var kn=t=>t.join("/").replace(/\/\/+/g,"/"),e1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,n1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function r1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var xp=["POST","PUT","PATCH","DELETE"];new Set(xp);var i1=["GET",...xp];new Set(i1);var ri=R.createContext(null);ri.displayName="DataRouter";var Xa=R.createContext(null);Xa.displayName="DataRouterState";R.createContext(!1);var wp=R.createContext({isTransitioning:!1});wp.displayName="ViewTransition";var s1=R.createContext(new Map);s1.displayName="Fetchers";var a1=R.createContext(null);a1.displayName="Await";var mn=R.createContext(null);mn.displayName="Navigation";var fs=R.createContext(null);fs.displayName="Location";var En=R.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var Xc=R.createContext(null);Xc.displayName="RouteError";function o1(t,{relative:r}={}){Ke(hs(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=R.useContext(mn),{hash:c,pathname:d,search:f}=ms(t,{relative:r}),p=d;return s!=="/"&&(p=d==="/"?s:kn([s,d])),o.createHref({pathname:p,search:f,hash:c})}function hs(){return R.useContext(fs)!=null}function Zn(){return Ke(hs(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(fs).location}var bp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jp(t){R.useContext(mn).static||R.useLayoutEffect(t)}function Qa(){let{isDataRoute:t}=R.useContext(En);return t?w1():l1()}function l1(){Ke(hs(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(ri),{basename:r,navigator:s}=R.useContext(mn),{matches:o}=R.useContext(En),{pathname:c}=Zn(),d=JSON.stringify(yp(o)),f=R.useRef(!1);return jp(()=>{f.current=!0}),R.useCallback((g,w={})=>{if(fn(f.current,bp),!f.current)return;if(typeof g=="number"){s.go(g);return}let v=vp(g,JSON.parse(d),c,w.relative==="path");t==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:kn([r,v.pathname])),(w.replace?s.replace:s.push)(v,w.state,w)},[r,s,d,c,t])}R.createContext(null);function ms(t,{relative:r}={}){let{matches:s}=R.useContext(En),{pathname:o}=Zn(),c=JSON.stringify(yp(s));return R.useMemo(()=>vp(t,JSON.parse(c),o,r==="path"),[t,c,o,r])}function c1(t,r){return Sp(t,r)}function Sp(t,r,s,o,c){Ke(hs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(mn),{matches:f}=R.useContext(En),p=f[f.length-1],g=p?p.params:{},w=p?p.pathname:"/",v=p?p.pathnameBase:"/",m=p&&p.route;{let K=m&&m.path||"";kp(w,!m||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let S=Zn(),E;if(r){let K=typeof r=="string"?ni(r):r;Ke(v==="/"||K.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${K.pathname}" was given in the \`location\` prop.`),E=K}else E=S;let I=E.pathname||"/",A=I;if(v!=="/"){let K=v.replace(/^\//,"").split("/");A="/"+I.replace(/^\//,"").split("/").slice(K.length).join("/")}let V=mp(t,{pathname:A});fn(m||V!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),fn(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=m1(V&&V.map(K=>Object.assign({},K,{params:Object.assign({},g,K.params),pathname:kn([v,d.encodeLocation?d.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?v:kn([v,d.encodeLocation?d.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),f,s,o,c);return r&&H?R.createElement(fs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},H):H}function u1(){let t=x1(),r=r1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:d},"ErrorBoundary")," or"," ",R.createElement("code",{style:d},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},r),s?R.createElement("pre",{style:c},s):null,f)}var d1=R.createElement(u1,null),f1=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.unstable_onError?this.props.unstable_onError(t,r):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?R.createElement(En.Provider,{value:this.props.routeContext},R.createElement(Xc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h1({routeContext:t,match:r,children:s}){let o=R.useContext(ri);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),R.createElement(En.Provider,{value:t},s)}function m1(t,r=[],s=null,o=null,c=null){if(t==null){if(!s)return null;if(s.errors)t=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let d=t,f=s?.errors;if(f!=null){let w=d.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Ke(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,w+1))}let p=!1,g=-1;if(s)for(let w=0;w<d.length;w++){let v=d[w];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=w),v.route.id){let{loaderData:m,errors:S}=s,E=v.route.loader&&!m.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||E){p=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((w,v,m)=>{let S,E=!1,I=null,A=null;s&&(S=f&&v.route.id?f[v.route.id]:void 0,I=v.route.errorElement||d1,p&&(g<0&&m===0?(kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,A=null):g===m&&(E=!0,A=v.route.hydrateFallbackElement||null)));let V=r.concat(d.slice(0,m+1)),H=()=>{let K;return S?K=I:E?K=A:v.route.Component?K=R.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=w,R.createElement(h1,{match:v,routeContext:{outlet:w,matches:V,isDataRoute:s!=null},children:K})};return s&&(v.route.ErrorBoundary||v.route.errorElement||m===0)?R.createElement(f1,{location:s.location,revalidation:s.revalidation,component:I,error:S,children:H(),routeContext:{outlet:null,matches:V,isDataRoute:!0},unstable_onError:o}):H()},null)}function Qc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p1(t){let r=R.useContext(ri);return Ke(r,Qc(t)),r}function g1(t){let r=R.useContext(Xa);return Ke(r,Qc(t)),r}function y1(t){let r=R.useContext(En);return Ke(r,Qc(t)),r}function Jc(t){let r=y1(t),s=r.matches[r.matches.length-1];return Ke(s.route.id,`${t} can only be used on routes that contain a unique "id"`),s.route.id}function v1(){return Jc("useRouteId")}function x1(){let t=R.useContext(Xc),r=g1("useRouteError"),s=Jc("useRouteError");return t!==void 0?t:r.errors?.[s]}function w1(){let{router:t}=p1("useNavigate"),r=Jc("useNavigate"),s=R.useRef(!1);return jp(()=>{s.current=!0}),R.useCallback(async(c,d={})=>{fn(s.current,bp),s.current&&(typeof c=="number"?t.navigate(c):await t.navigate(c,{fromRouteId:r,...d}))},[t,r])}var zh={};function kp(t,r,s){!r&&!zh[t]&&(zh[t]=!0,fn(!1,s))}R.memo(b1);function b1({routes:t,future:r,state:s,unstable_onError:o}){return Sp(t,void 0,s,o,r)}function De(t){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function j1({basename:t="/",children:r=null,location:s,navigationType:o="POP",navigator:c,static:d=!1}){Ke(!hs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),p=R.useMemo(()=>({basename:f,navigator:c,static:d,future:{}}),[f,c,d]);typeof s=="string"&&(s=ni(s));let{pathname:g="/",search:w="",hash:v="",state:m=null,key:S="default"}=s,E=R.useMemo(()=>{let I=Cn(g,f);return I==null?null:{location:{pathname:I,search:w,hash:v,state:m,key:S},navigationType:o}},[f,g,w,v,m,S,o]);return fn(E!=null,`<Router basename="${f}"> is not able to match the URL "${g}${w}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:R.createElement(mn.Provider,{value:p},R.createElement(fs.Provider,{children:r,value:E}))}function S1({children:t,location:r}){return c1(Tc(t),r)}function Tc(t,r=[]){let s=[];return R.Children.forEach(t,(o,c)=>{if(!R.isValidElement(o))return;let d=[...r,c];if(o.type===R.Fragment){s.push.apply(s,Tc(o.props.children,d));return}Ke(o.type===De,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Tc(o.props.children,d)),s.push(f)}),s}var Aa="get",Da="application/x-www-form-urlencoded";function Ja(t){return t!=null&&typeof t.tagName=="string"}function k1(t){return Ja(t)&&t.tagName.toLowerCase()==="button"}function C1(t){return Ja(t)&&t.tagName.toLowerCase()==="form"}function T1(t){return Ja(t)&&t.tagName.toLowerCase()==="input"}function P1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function E1(t,r){return t.button===0&&(!r||r==="_self")&&!P1(t)}var Ra=null;function N1(){if(Ra===null)try{new FormData(document.createElement("form"),0),Ra=!1}catch{Ra=!0}return Ra}var R1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zl(t){return t!=null&&!R1.has(t)?(fn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`),null):t}function M1(t,r){let s,o,c,d,f;if(C1(t)){let p=t.getAttribute("action");o=p?Cn(p,r):null,s=t.getAttribute("method")||Aa,c=Zl(t.getAttribute("enctype"))||Da,d=new FormData(t)}else if(k1(t)||T1(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=t.getAttribute("formaction")||p.getAttribute("action");if(o=g?Cn(g,r):null,s=t.getAttribute("formmethod")||p.getAttribute("method")||Aa,c=Zl(t.getAttribute("formenctype"))||Zl(p.getAttribute("enctype"))||Da,d=new FormData(p,t),!N1()){let{name:w,type:v,value:m}=t;if(v==="image"){let S=w?`${w}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else w&&d.append(w,m)}}else{if(Ja(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Aa,o=null,c=Da,f=t}return d&&c==="text/plain"&&(f=d,d=void 0),{action:o,method:s.toLowerCase(),encType:c,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function L1(t,r,s){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o.pathname==="/"?o.pathname=`_root.${s}`:r&&Cn(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function O1(t,r){if(t.id in r)return r[t.id];try{let s=await import(t.module);return r[t.id]=s,s}catch(s){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function D1(t,r,s){let o=await Promise.all(t.map(async c=>{let d=r.routes[c.route.id];if(d){let f=await O1(d,s);return f.links?f.links():[]}return[]}));return V1(o.flat(1).filter(A1).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function _h(t,r,s,o,c,d){let f=(g,w)=>s[w]?g.route.id!==s[w].route.id:!0,p=(g,w)=>s[w].pathname!==g.pathname||s[w].route.path?.endsWith("*")&&s[w].params["*"]!==g.params["*"];return d==="assets"?r.filter((g,w)=>f(g,w)||p(g,w)):d==="data"?r.filter((g,w)=>{let v=o.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(f(g,w)||p(g,w))return!0;if(g.route.shouldRevalidate){let m=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function z1(t,r,{includeHydrateFallback:s}={}){return _1(t.map(o=>{let c=r.routes[o.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function _1(t){return[...new Set(t)]}function I1(t){let r={},s=Object.keys(t).sort();for(let o of s)r[o]=t[o];return r}function V1(t,r){let s=new Set;return new Set(r),t.reduce((o,c)=>{let d=JSON.stringify(I1(c));return s.has(d)||(s.add(d),o.push({key:d,link:c})),o},[])}function Cp(){let t=R.useContext(ri);return Zc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function F1(){let t=R.useContext(Xa);return Zc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var eu=R.createContext(void 0);eu.displayName="FrameworkContext";function Tp(){let t=R.useContext(eu);return Zc(t,"You must render this element inside a <HydratedRouter> element"),t}function B1(t,r){let s=R.useContext(eu),[o,c]=R.useState(!1),[d,f]=R.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:w,onMouseLeave:v,onTouchStart:m}=r,S=R.useRef(null);R.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let A=H=>{H.forEach(K=>{f(K.isIntersecting)})},V=new IntersectionObserver(A,{threshold:.5});return S.current&&V.observe(S.current),()=>{V.disconnect()}}},[t]),R.useEffect(()=>{if(o){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[o]);let E=()=>{c(!0)},I=()=>{c(!1),f(!1)};return s?t!=="intent"?[d,S,{}]:[d,S,{onFocus:Yi(p,E),onBlur:Yi(g,I),onMouseEnter:Yi(w,E),onMouseLeave:Yi(v,I),onTouchStart:Yi(m,E)}]:[!1,S,{}]}function Yi(t,r){return s=>{t&&t(s),s.defaultPrevented||r(s)}}function H1({page:t,...r}){let{router:s}=Cp(),o=R.useMemo(()=>mp(s.routes,t,s.basename),[s.routes,t,s.basename]);return o?R.createElement(U1,{page:t,matches:o,...r}):null}function W1(t){let{manifest:r,routeModules:s}=Tp(),[o,c]=R.useState([]);return R.useEffect(()=>{let d=!1;return D1(t,r,s).then(f=>{d||c(f)}),()=>{d=!0}},[t,r,s]),o}function U1({page:t,matches:r,...s}){let o=Zn(),{manifest:c,routeModules:d}=Tp(),{basename:f}=Cp(),{loaderData:p,matches:g}=F1(),w=R.useMemo(()=>_h(t,r,g,c,o,"data"),[t,r,g,c,o]),v=R.useMemo(()=>_h(t,r,g,c,o,"assets"),[t,r,g,c,o]),m=R.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let I=new Set,A=!1;if(r.forEach(H=>{let K=c.routes[H.route.id];!K||!K.hasLoader||(!w.some(G=>G.route.id===H.route.id)&&H.route.id in p&&d[H.route.id]?.shouldRevalidate||K.hasClientLoader?A=!0:I.add(H.route.id))}),I.size===0)return[];let V=L1(t,f,"data");return A&&I.size>0&&V.searchParams.set("_routes",r.filter(H=>I.has(H.route.id)).map(H=>H.route.id).join(",")),[V.pathname+V.search]},[f,p,o,c,w,r,t,d]),S=R.useMemo(()=>z1(v,c),[v,c]),E=W1(v);return R.createElement(R.Fragment,null,m.map(I=>R.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...s})),S.map(I=>R.createElement("link",{key:I,rel:"modulepreload",href:I,...s})),E.map(({key:I,link:A})=>R.createElement("link",{key:I,nonce:s.nonce,...A})))}function $1(...t){return r=>{t.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var Pp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pp&&(window.__reactRouterVersion="7.8.2")}catch{}function K1({basename:t,children:r,window:s}){let o=R.useRef();o.current==null&&(o.current=Av({window:s,v5Compat:!0}));let c=o.current,[d,f]=R.useState({action:c.action,location:c.location}),p=R.useCallback(g=>{R.startTransition(()=>f(g))},[f]);return R.useLayoutEffect(()=>c.listen(p),[c,p]),R.createElement(j1,{basename:t,children:r,location:d.location,navigationType:d.action,navigator:c})}var Ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sn=R.forwardRef(function({onClick:r,discover:s="render",prefetch:o="none",relative:c,reloadDocument:d,replace:f,state:p,target:g,to:w,preventScrollReset:v,viewTransition:m,...S},E){let{basename:I}=R.useContext(mn),A=typeof w=="string"&&Ep.test(w),V,H=!1;if(typeof w=="string"&&A&&(V=w,Pp))try{let M=new URL(window.location.href),k=w.startsWith("//")?new URL(M.protocol+w):new URL(w),$=Cn(k.pathname,I);k.origin===M.origin&&$!=null?w=$+k.search+k.hash:H=!0}catch{fn(!1,`<Link to="${w}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=o1(w,{relative:c}),[G,le,T]=B1(o,S),z=X1(w,{replace:f,state:p,target:g,preventScrollReset:v,relative:c,viewTransition:m});function L(M){r&&r(M),M.defaultPrevented||z(M)}let D=R.createElement("a",{...S,...T,href:V||K,onClick:H||d?r:L,ref:$1(E,le),target:g,"data-discover":!A&&s==="render"?"true":void 0});return G&&!A?R.createElement(R.Fragment,null,D,R.createElement(H1,{page:K})):D});Sn.displayName="Link";var Y1=R.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:o="",end:c=!1,style:d,to:f,viewTransition:p,children:g,...w},v){let m=ms(f,{relative:w.relative}),S=Zn(),E=R.useContext(Xa),{navigator:I,basename:A}=R.useContext(mn),V=E!=null&&tx(m)&&p===!0,H=I.encodeLocation?I.encodeLocation(m).pathname:m.pathname,K=S.pathname,G=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(K=K.toLowerCase(),G=G?G.toLowerCase():null,H=H.toLowerCase()),G&&A&&(G=Cn(G,A)||G);const le=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let T=K===H||!c&&K.startsWith(H)&&K.charAt(le)==="/",z=G!=null&&(G===H||!c&&G.startsWith(H)&&G.charAt(H.length)==="/"),L={isActive:T,isPending:z,isTransitioning:V},D=T?r:void 0,M;typeof o=="function"?M=o(L):M=[o,T?"active":null,z?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let k=typeof d=="function"?d(L):d;return R.createElement(Sn,{...w,"aria-current":D,className:M,ref:v,style:k,to:f,viewTransition:p},typeof g=="function"?g(L):g)});Y1.displayName="NavLink";var G1=R.forwardRef(({discover:t="render",fetcherKey:r,navigate:s,reloadDocument:o,replace:c,state:d,method:f=Aa,action:p,onSubmit:g,relative:w,preventScrollReset:v,viewTransition:m,...S},E)=>{let I=Z1(),A=ex(p,{relative:w}),V=f.toLowerCase()==="get"?"get":"post",H=typeof p=="string"&&Ep.test(p),K=G=>{if(g&&g(G),G.defaultPrevented)return;G.preventDefault();let le=G.nativeEvent.submitter,T=le?.getAttribute("formmethod")||f;I(le||G.currentTarget,{fetcherKey:r,method:T,navigate:s,replace:c,state:d,relative:w,preventScrollReset:v,viewTransition:m})};return R.createElement("form",{ref:E,method:V,action:A,onSubmit:o?g:K,...S,"data-discover":!H&&t==="render"?"true":void 0})});G1.displayName="Form";function q1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Np(t){let r=R.useContext(ri);return Ke(r,q1(t)),r}function X1(t,{target:r,replace:s,state:o,preventScrollReset:c,relative:d,viewTransition:f}={}){let p=Qa(),g=Zn(),w=ms(t,{relative:d});return R.useCallback(v=>{if(E1(v,r)){v.preventDefault();let m=s!==void 0?s:is(g)===is(w);p(t,{replace:m,state:o,preventScrollReset:c,relative:d,viewTransition:f})}},[g,p,w,s,o,r,t,c,d,f])}var Q1=0,J1=()=>`__${String(++Q1)}__`;function Z1(){let{router:t}=Np("useSubmit"),{basename:r}=R.useContext(mn),s=v1();return R.useCallback(async(o,c={})=>{let{action:d,method:f,encType:p,formData:g,body:w}=M1(o,r);if(c.navigate===!1){let v=c.fetcherKey||J1();await t.fetch(v,s,c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:w,formMethod:c.method||f,formEncType:c.encType||p,flushSync:c.flushSync})}else await t.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:w,formMethod:c.method||f,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[t,r,s])}function ex(t,{relative:r}={}){let{basename:s}=R.useContext(mn),o=R.useContext(En);Ke(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),d={...ms(t||".",{relative:r})},f=Zn();if(t==null){d.search=f.search;let p=new URLSearchParams(d.search),g=p.getAll("index");if(g.some(v=>v==="")){p.delete("index"),g.filter(m=>m).forEach(m=>p.append("index",m));let v=p.toString();d.search=v?`?${v}`:""}}return(!t||t===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:kn([s,d.pathname])),is(d)}function tx(t,{relative:r}={}){let s=R.useContext(wp);Ke(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Np("useViewTransitionState"),c=ms(t,{relative:r});if(!s.isTransitioning)return!1;let d=Cn(s.currentLocation.pathname,o)||s.currentLocation.pathname,f=Cn(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Fa(c.pathname,f)!=null||Fa(c.pathname,d)!=null}var Rp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ih=Xn.createContext&&Xn.createContext(Rp),nx=["attr","size","title"];function rx(t,r){if(t==null)return{};var s=ix(t,r),o,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(c=0;c<d.length;c++)o=d[c],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}function ix(t,r){if(t==null)return{};var s={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(r.indexOf(o)>=0)continue;s[o]=t[o]}return s}function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},Ba.apply(this,arguments)}function Vh(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,o)}return s}function Ha(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?Vh(Object(s),!0).forEach(function(o){sx(t,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Vh(Object(s)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(s,o))})}return t}function sx(t,r,s){return r=ax(r),r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function ax(t){var r=ox(t,"string");return typeof r=="symbol"?r:r+""}function ox(t,r){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var o=s.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Mp(t){return t&&t.map((r,s)=>Xn.createElement(r.tag,Ha({key:s},r.attr),Mp(r.child)))}function Ae(t){return r=>Xn.createElement(lx,Ba({attr:Ha({},t.attr)},r),Mp(t.child))}function lx(t){var r=s=>{var{attr:o,size:c,title:d}=t,f=rx(t,nx),p=c||s.size||"1em",g;return s.className&&(g=s.className),t.className&&(g=(g?g+" ":"")+t.className),Xn.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,o,f,{className:g,style:Ha(Ha({color:t.color||s.color},s.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&Xn.createElement("title",null,d),t.children)};return Ih!==void 0?Xn.createElement(Ih.Consumer,null,s=>r(s)):r(Rp)}function cx(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function Fh(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function ec(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function ux(t){return Ae({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}const dx="/Epicure-Voyage/assets/Logo-CYcmjGIv.png";function fx(){const t={padding:"10px 14px",cursor:"pointer",transition:"background 0.2s"},[r,s]=R.useState(!1),o=JSON.parse(localStorage.getItem("user")),[c,d]=R.useState(!1),[f,p]=R.useState(!1),[g,w]=R.useState(!1),[v,m]=R.useState(null),[S,E]=R.useState(""),[I,A]=R.useState([]),V=Zn(),H=Qa(),K=[{name:"Home",path:"/"},{name:"Destinations",path:"/destinations",dropdown:"districts"},{name:"Tours",path:"/tours",dropdown:"tours"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],G=[{name:"Wildlife",path:"/wildlife"},{name:"Culture",path:"/culture"},{name:"Cuisine",path:"/cuisine"},{name:"Resorts",path:"/resorts"},{name:"Festivals",path:"/festivals"}],le=[{name:"Madurai",path:"/madurai"},{name:"Ooty",path:"/ooty"},{name:"Mahabalipuram",path:"/mahabalipuram"},{name:"Manimuthar",path:"/manimuthar"},{name:"Rameswaram",path:"/rameswaram"},{name:"Chennai",path:"/chennai"},{name:"Kodaikanal",path:"/kodaikanal"},{name:"Tiruchirappalli",path:"/tiruchirappalli"},{name:"Vellore",path:"/vellore"},{name:"Thanjavur",path:"/thanjavur"},{name:"Coimbatore",path:"/coimbatore"},{name:"Tirunelveli",path:"/thirunelveli"}],T=L=>{const D=L.target.value;if(E(D),D.trim()===""){A([]);return}const M=le.filter(k=>k.name.toLowerCase().includes(D.toLowerCase()));A(M)},z=L=>{E(""),A([]),H(L)};return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{children:[a.jsx("style",{children:`
          nav {
            background-color: #004d40;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            font-family: 'Poppins', sans-serif;
          }
          .Logo img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
          ul {
            list-style: none;
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }
          ul li a {
            text-decoration: none;
            color: white;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background 0.3s ease, color 0.3s ease;
          }
          ul li a:hover {
            background-color: #ffd700;
            color: #004d40;
          }
          ul li a.active {
            background-color: #00796b;
            font-weight: 700;
          }
          .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            color: #004d40;
            min-width: 220px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            display: none;
            flex-direction: column;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 2000;
          }
          ul li:hover .dropdown {
            display: flex;
            opacity: 1;
            transform: translateY(0);
          }
          .dropdown a {
            padding: 10px 15px;
            text-decoration: none;
            color: #004d40;
          }
          .dropdown a:hover { background: #f0f0f0; }
          .search-container {
            position: relative;
          }
          .search-bar {
            display: flex;
            align-items: center;
            background: white;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            position: relative;
            z-index: 1;
          }
          .search-bar input {
            border: none;
            outline: none;
            padding: 0.5rem;
            border-radius: 9999px;
          }
          .suggestions {
            position: absolute;
            top: 110%;
            left: 0;
            width: 100%;
            background: white;
            color: #004d40;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            z-index: 5;
            font-size: 0.9rem;
          }
          .suggestions div {
            padding: 0.5rem 1rem;
            cursor: pointer;
          }
          .suggestions div:hover {
            background: #f0f0f0;
          }
          .login-btn {
            background-color: #ffd700;
            color: #004d40;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          .login-btn:hover { background-color: #ffc107; }
          .mobile-menu {
            background-color: #004d40;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-top: 1px solid #00796b;
          }
          @media (min-width: 768px) {
            .mobile-menu { display: none; }
            .md\\:hidden { display: none; }
          }
        `}),a.jsxs("div",{className:"Logo",style:{display:"flex",alignItems:"center",gap:"15px"},children:[a.jsx("img",{src:dx,alt:"Logo"}),a.jsx(Sn,{to:"/",style:{textDecoration:"none"},children:a.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:"700",color:"white",letterSpacing:"1.5px",fontFamily:"'Cinzel', serif"},children:"EPICUREVOYAGE"})})]}),a.jsxs("ul",{className:"hidden md:flex",children:[K.map((L,D)=>a.jsxs("li",{onMouseEnter:()=>m(L.dropdown),onMouseLeave:()=>m(null),style:{position:"relative"},children:[a.jsx(Sn,{to:L.path,className:V.pathname===L.path?"active":"",children:L.name}),L.dropdown==="tours"&&v==="tours"&&a.jsx("div",{className:"dropdown",children:G.map((M,k)=>a.jsx(Sn,{to:M.path,children:M.name},k))}),L.dropdown==="districts"&&v==="districts"&&a.jsx("div",{className:"dropdown",children:le.map((M,k)=>a.jsx(Sn,{to:M.path,children:M.name},k))})]},D)),a.jsxs("li",{className:"search-container",children:[a.jsxs("div",{className:"search-bar",children:[a.jsx("input",{type:"text",placeholder:"Search district...",value:S,onChange:T}),a.jsx(Fh,{})]}),I.length>0&&a.jsx("div",{className:"suggestions",children:I.map((L,D)=>a.jsx("div",{onClick:()=>z(L.path),children:L.name},D))})]}),a.jsx("li",{style:{position:"relative"},children:o?a.jsxs("div",{onClick:()=>s(!r),style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:"600"},children:[a.jsx(ec,{size:18}),a.jsx("span",{children:o.name}),r&&a.jsxs("div",{style:{position:"absolute",top:"130%",right:0,background:"white",color:"#004d40",borderRadius:"10px",minWidth:"180px",boxShadow:"0 8px 20px rgba(0,0,0,0.2)",overflow:"hidden",zIndex:3e3},children:[a.jsxs("div",{style:{padding:"12px",borderBottom:"1px solid #eee",fontWeight:"700"},children:["Hi, ",o.name]}),o.role==="CUSTOMER"&&a.jsx("div",{style:t,onClick:()=>{H("/my-bookings"),s(!1)},children:"My Trips"}),o.role==="ADMIN"&&a.jsx("div",{style:t,onClick:()=>{H("/admin"),s(!1)},children:"Admin Panel"}),a.jsx("div",{style:{...t,color:"crimson"},onClick:()=>{localStorage.removeItem("user"),H("/"),window.location.reload()},children:"Logout"})]})]}):a.jsxs("button",{className:"login-btn",onClick:()=>H("/login"),children:[a.jsx(ec,{})," Login"]})})]}),a.jsx("div",{className:"md:hidden",onClick:()=>d(!c),children:c?a.jsx(ux,{size:30}):a.jsx(cx,{size:30})}),c&&a.jsxs("ul",{className:"mobile-menu absolute top-full left-0 w-full",children:[K.map((L,D)=>a.jsx("li",{children:a.jsx(Sn,{to:L.path,onClick:()=>d(!1),className:V.pathname===L.path?"active":"",children:L.name})},D)),a.jsxs("li",{children:[a.jsxs("div",{className:"search-bar",children:[a.jsx("input",{type:"text",placeholder:"Search...",value:S,onChange:T}),a.jsx(Fh,{})]}),I.length>0&&a.jsx("div",{className:"suggestions",children:I.map((L,D)=>a.jsx("div",{onClick:()=>z(L.path),children:L.name},D))})]}),a.jsx("li",{children:a.jsxs("button",{className:"login-btn",onClick:()=>p(!0),children:[a.jsx(ec,{})," Login"]})})]})]}),f&&a.jsx("div",{className:"modal",onClick:()=>p(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},children:a.jsxs("div",{className:"modal-content",onClick:L=>L.stopPropagation(),style:{background:"white",padding:"2rem 2.5rem",borderRadius:"12px",width:"350px",maxWidth:"90%",boxShadow:"0 10px 25px rgba(0,0,0,0.25)",animation:"fadeIn 0.3s ease",fontFamily:"'Poppins', sans-serif"},children:[a.jsx("h2",{style:{textAlign:"center",marginBottom:"1rem",color:"#004d40"},children:"Login"}),a.jsxs("form",{onSubmit:L=>{L.preventDefault(),alert("Login successful!"),p(!1)},children:[a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("label",{children:"Email"}),a.jsx("input",{type:"email",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"8px",border:"1px solid #ccc",marginTop:"0.25rem"}})]}),a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("label",{children:"Password"}),a.jsx("input",{type:"password",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"8px",border:"1px solid #ccc",marginTop:"0.25rem"}})]}),a.jsx("button",{type:"submit",style:{width:"100%",background:"#004d40",color:"white",padding:"0.5rem",borderRadius:"8px",border:"none",cursor:"pointer",fontWeight:"600"},children:"Login"}),a.jsxs("p",{style:{textAlign:"center",marginTop:"1rem",fontSize:"0.9rem"},children:["Don’t have an account?"," ",a.jsx("span",{style:{color:"#00796b",cursor:"pointer",fontWeight:"600"},onClick:()=>{p(!1),w(!0)},children:"Sign up"})]})]})]})}),g&&a.jsx("div",{className:"modal",onClick:()=>w(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},children:a.jsxs("div",{className:"modal-content",onClick:L=>L.stopPropagation(),style:{background:"white",padding:"2rem 2.5rem",borderRadius:"12px",width:"350px",maxWidth:"90%",boxShadow:"0 10px 25px rgba(0,0,0,0.25)",animation:"fadeIn 0.3s ease",fontFamily:"'Poppins', sans-serif"},children:[a.jsx("h2",{style:{textAlign:"center",marginBottom:"1rem",color:"#004d40"},children:"Sign Up"}),a.jsxs("form",{onSubmit:L=>{L.preventDefault(),alert("Signup successful!"),w(!1)},children:[a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"8px",border:"1px solid #ccc",marginTop:"0.25rem"}})]}),a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("label",{children:"Email"}),a.jsx("input",{type:"email",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"8px",border:"1px solid #ccc",marginTop:"0.25rem"}})]}),a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("label",{children:"Password"}),a.jsx("input",{type:"password",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"8px",border:"1px solid #ccc",marginTop:"0.25rem"}})]}),a.jsx("button",{type:"submit",style:{width:"100%",background:"#004d40",color:"white",padding:"0.5rem",borderRadius:"8px",border:"none",cursor:"pointer",fontWeight:"600"},children:"Sign Up"}),a.jsxs("p",{style:{textAlign:"center",marginTop:"1rem",fontSize:"0.9rem"},children:["Already have an account?"," ",a.jsx("span",{style:{color:"#00796b",cursor:"pointer",fontWeight:"600"},onClick:()=>{w(!1),p(!0)},children:"Login"})]})]})]})})]})}function hx(t){return Ae({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function mx(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(t)}function Lp(t){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function px(t){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(t)}function Zt(t){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z"},child:[]}]})(t)}function Op(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function gx(t){return Ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function yx(t){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(t)}function en(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM160 72c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H168c-4.42 0-8-3.58-8-8V72zm-48 328c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128-112H128c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h112v160zm32 0V128h112c17.67 0 32 14.33 32 32v96c0 17.67-14.33 32-32 32H272zm128 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(t)}function vx(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function Me(t){return Ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"},child:[]}]})(t)}function ct(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.62 92.11L267.24 2.04a31.958 31.958 0 0 0-22.47 0L10.38 92.11A16.001 16.001 0 0 0 0 107.09V144c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-36.91c0-6.67-4.14-12.64-10.38-14.98zM64 192v160H48c-8.84 0-16 7.16-16 16v48h448v-48c0-8.84-7.16-16-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64zm432 256H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function Ap(t){return Ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(t)}function xx(t){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function ss(t){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(t)}function rt(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(t)}function Bh(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(t)}function wx(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function tn(t){return Ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"},child:[]}]})(t)}function tc(t){return Ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(t)}function nn(t){return Ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zm-48 136V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24zm-176 64c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56z"},child:[]}]})(t)}function Hh(t){return Ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(t)}function Dp(t){return Ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function Le(t){return Ae({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(t)}function bx(t){return Ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"},child:[]}]})(t)}function jx(){const[t,r]=R.useState(""),[s,o]=R.useState(""),[c,d]=R.useState(""),f=()=>{!t||!t.includes("@")?d("⚠️ Please enter a valid email address"):(d("✅ Thank you for subscribing!"),r(""),setTimeout(()=>d(""),3e3))},p=()=>{window.scrollTo({top:0,behavior:"smooth"})},g=[{icon:a.jsx(hx,{}),name:"Facebook",url:"#"},{icon:a.jsx(Lp,{}),name:"Instagram",url:"#"},{icon:a.jsx(gx,{}),name:"YouTube",url:"#"},{icon:a.jsx(Op,{}),name:"Twitter",url:"#"},{icon:a.jsx(px,{}),name:"LinkedIn",url:"#"}],w={background:"linear-gradient(90deg, #004d40, #00695c)",color:"#fff",textAlign:"center",padding:"60px 20px",marginTop:"50px",boxShadow:"0 -4px 10px rgba(0, 0, 0, 0.3)",fontFamily:"'Poppins', sans-serif"},v={display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap",marginTop:"20px"},m={color:"#fff",fontSize:"1.5rem",transition:"transform 0.3s ease, color 0.3s ease"},S={marginTop:"30px",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"10px"},E={padding:"0.75rem 1rem",borderRadius:"0.5rem",border:"none",width:"250px",fontSize:"1rem"},I={padding:"0.75rem 1.5rem",backgroundColor:"#ffd700",border:"none",borderRadius:"0.5rem",fontWeight:"bold",cursor:"pointer",transition:"all 0.3s ease"},A={position:"fixed",bottom:"30px",right:"30px",backgroundColor:"#ffd700",color:"#004d40",border:"none",borderRadius:"50%",padding:"10px",cursor:"pointer",boxShadow:"0 0 10px rgba(0,0,0,0.3)",transition:"transform 0.3s ease"};return a.jsxs(a.Fragment,{children:[a.jsxs("footer",{style:w,children:[a.jsxs("h2",{style:{fontSize:"2rem",marginBottom:"20px"},children:["Stay Connected with ",a.jsx("span",{style:{color:"#ffd700"},children:"EpicureVoyage"})," Tourism"]}),a.jsxs("div",{style:S,children:[a.jsx("input",{type:"email",placeholder:"Enter your email",style:E,value:t,onChange:V=>r(V.target.value)}),a.jsx("button",{style:I,onClick:f,onMouseEnter:V=>V.target.style.backgroundColor="#ffeb3b",onMouseLeave:V=>V.target.style.backgroundColor="#ffd700",children:"Subscribe"})]}),c&&a.jsx("p",{style:{marginTop:"10px",fontSize:"1rem",color:"#ffd700"},children:c}),a.jsx("div",{style:v,children:g.map(V=>a.jsx("a",{href:V.url,target:"_blank",rel:"noopener noreferrer",style:{...m,color:s===V.name?"#ffd700":"#fff",transform:s===V.name?"scale(1.2)":"scale(1)"},onMouseEnter:()=>o(V.name),onMouseLeave:()=>o(""),title:V.name,children:V.icon},V.name))}),a.jsxs("div",{style:{marginTop:"30px",lineHeight:"1.8"},children:[a.jsx("p",{children:a.jsx("strong",{children:"Contact Us:"})}),a.jsx("p",{children:"Email: epicurevoyage@tourism.com | Phone: +91 98765 43210"}),a.jsx("p",{children:"Address: EpicureVoyage Office, Chennai, India"})]}),a.jsx("p",{style:{marginTop:"30px",fontSize:"14px",opacity:.8},children:"Explore the beauty, culture, and heritage of Tamil Nadu | © 2025 EpicureVoyage. All Rights Reserved."})]}),a.jsx("button",{style:A,onClick:p,onMouseEnter:V=>V.target.style.transform="scale(1.1)",onMouseLeave:V=>V.target.style.transform="scale(1)",title:"Back to Top",children:a.jsx(yx,{})})]})}var nc={},rc={},Gi={},ic={},Wh;function Sx(){return Wh||(Wh=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=r})(ic)),ic}var sc,Uh;function kx(){if(Uh)return sc;Uh=1;var t="Expected a function",r=NaN,s="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,g=typeof Ea=="object"&&Ea&&Ea.Object===Object&&Ea,w=typeof self=="object"&&self&&self.Object===Object&&self,v=g||w||Function("return this")(),m=Object.prototype,S=m.toString,E=Math.max,I=Math.min,A=function(){return v.Date.now()};function V(T,z,L){var D,M,k,$,Z,F,q=0,ee=!1,ae=!1,x=!0;if(typeof T!="function")throw new TypeError(t);z=le(z)||0,H(L)&&(ee=!!L.leading,ae="maxWait"in L,k=ae?E(le(L.maxWait)||0,z):k,x="trailing"in L?!!L.trailing:x);function Q(ie){var fe=D,pe=M;return D=M=void 0,q=ie,$=T.apply(pe,fe),$}function N(ie){return q=ie,Z=setTimeout(P,z),ee?Q(ie):$}function y(ie){var fe=ie-F,pe=ie-q,xe=z-fe;return ae?I(xe,k-pe):xe}function b(ie){var fe=ie-F,pe=ie-q;return F===void 0||fe>=z||fe<0||ae&&pe>=k}function P(){var ie=A();if(b(ie))return X(ie);Z=setTimeout(P,y(ie))}function X(ie){return Z=void 0,x&&D?Q(ie):(D=M=void 0,$)}function Y(){Z!==void 0&&clearTimeout(Z),q=0,D=F=M=Z=void 0}function te(){return Z===void 0?$:X(A())}function J(){var ie=A(),fe=b(ie);if(D=arguments,M=this,F=ie,fe){if(Z===void 0)return N(F);if(ae)return Z=setTimeout(P,z),Q(F)}return Z===void 0&&(Z=setTimeout(P,z)),$}return J.cancel=Y,J.flush=te,J}function H(T){var z=typeof T;return!!T&&(z=="object"||z=="function")}function K(T){return!!T&&typeof T=="object"}function G(T){return typeof T=="symbol"||K(T)&&S.call(T)==s}function le(T){if(typeof T=="number")return T;if(G(T))return r;if(H(T)){var z=typeof T.valueOf=="function"?T.valueOf():T;T=H(z)?z+"":z}if(typeof T!="string")return T===0?T:+T;T=T.replace(o,"");var L=d.test(T);return L||f.test(T)?p(T.slice(2),L?2:8):c.test(T)?r:+T}return sc=V,sc}var ac={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var $h;function Za(){return $h||($h=1,(function(t){(function(){var r={}.hasOwnProperty;function s(){for(var d="",f=0;f<arguments.length;f++){var p=arguments[f];p&&(d=c(d,o(p)))}return d}function o(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return s.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var f="";for(var p in d)r.call(d,p)&&d[p]&&(f=c(f,p));return f}function c(d,f){return f?d?d+" "+f:d+f:d}t.exports?(s.default=s,t.exports=s):window.classNames=s})()})(ac)),ac.exports}var ce={},oc={},Kh;function zp(){return Kh||(Kh=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(hn());function s(c){return c&&c.__esModule?c:{default:c}}var o={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(d){return r.default.createElement("ul",{style:{display:"block"}},d)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(d){return r.default.createElement("button",null,d+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};t.default=o})(oc)),oc}var Yh;function ps(){if(Yh)return ce;Yh=1,Object.defineProperty(ce,"__esModule",{value:!0}),ce.checkSpecKeys=ce.checkNavigable=ce.changeSlide=ce.canUseDOM=ce.canGoNext=void 0,ce.clamp=w,ce.extractObject=void 0,ce.filterSettings=Q,ce.validSettings=ce.swipeStart=ce.swipeMove=ce.swipeEnd=ce.slidesOnRight=ce.slidesOnLeft=ce.slideHandler=ce.siblingDirection=ce.safePreventDefault=ce.lazyStartIndex=ce.lazySlidesOnRight=ce.lazySlidesOnLeft=ce.lazyEndIndex=ce.keyHandler=ce.initializedState=ce.getWidth=ce.getTrackLeft=ce.getTrackCSS=ce.getTrackAnimateCSS=ce.getTotalSlides=ce.getSwipeDirection=ce.getSlideCount=ce.getRequiredLazySlides=ce.getPreClones=ce.getPostClones=ce.getOnDemandLazySlides=ce.getNavigableIndexes=ce.getHeight=void 0;var t=s(hn()),r=s(zp());function s(N){return N&&N.__esModule?N:{default:N}}function o(N){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},o(N)}function c(N,y){var b=Object.keys(N);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(N);y&&(P=P.filter(function(X){return Object.getOwnPropertyDescriptor(N,X).enumerable})),b.push.apply(b,P)}return b}function d(N){for(var y=1;y<arguments.length;y++){var b=arguments[y]!=null?arguments[y]:{};y%2?c(Object(b),!0).forEach(function(P){f(N,P,b[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach(function(P){Object.defineProperty(N,P,Object.getOwnPropertyDescriptor(b,P))})}return N}function f(N,y,b){return(y=p(y))in N?Object.defineProperty(N,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):N[y]=b,N}function p(N){var y=g(N,"string");return o(y)=="symbol"?y:y+""}function g(N,y){if(o(N)!="object"||!N)return N;var b=N[Symbol.toPrimitive];if(b!==void 0){var P=b.call(N,y);if(o(P)!="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return(y==="string"?String:Number)(N)}function w(N,y,b){return Math.max(y,Math.min(N,b))}var v=ce.safePreventDefault=function(y){var b=["onTouchStart","onTouchMove","onWheel"];b.includes(y._reactName)||y.preventDefault()},m=ce.getOnDemandLazySlides=function(y){for(var b=[],P=S(y),X=E(y),Y=P;Y<X;Y++)y.lazyLoadedList.indexOf(Y)<0&&b.push(Y);return b};ce.getRequiredLazySlides=function(y){for(var b=[],P=S(y),X=E(y),Y=P;Y<X;Y++)b.push(Y);return b};var S=ce.lazyStartIndex=function(y){return y.currentSlide-I(y)},E=ce.lazyEndIndex=function(y){return y.currentSlide+A(y)},I=ce.lazySlidesOnLeft=function(y){return y.centerMode?Math.floor(y.slidesToShow/2)+(parseInt(y.centerPadding)>0?1:0):0},A=ce.lazySlidesOnRight=function(y){return y.centerMode?Math.floor((y.slidesToShow-1)/2)+1+(parseInt(y.centerPadding)>0?1:0):y.slidesToShow},V=ce.getWidth=function(y){return y&&y.offsetWidth||0},H=ce.getHeight=function(y){return y&&y.offsetHeight||0},K=ce.getSwipeDirection=function(y){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,P,X,Y,te;return P=y.startX-y.curX,X=y.startY-y.curY,Y=Math.atan2(X,P),te=Math.round(Y*180/Math.PI),te<0&&(te=360-Math.abs(te)),te<=45&&te>=0||te<=360&&te>=315?"left":te>=135&&te<=225?"right":b===!0?te>=35&&te<=135?"up":"down":"vertical"},G=ce.canGoNext=function(y){var b=!0;return y.infinite||(y.centerMode&&y.currentSlide>=y.slideCount-1||y.slideCount<=y.slidesToShow||y.currentSlide>=y.slideCount-y.slidesToShow)&&(b=!1),b};ce.extractObject=function(y,b){var P={};return b.forEach(function(X){return P[X]=y[X]}),P},ce.initializedState=function(y){var b=t.default.Children.count(y.children),P=y.listRef,X=Math.ceil(V(P)),Y=y.trackRef&&y.trackRef.node,te=Math.ceil(V(Y)),J;if(y.vertical)J=X;else{var ie=y.centerMode&&parseInt(y.centerPadding)*2;typeof y.centerPadding=="string"&&y.centerPadding.slice(-1)==="%"&&(ie*=X/100),J=Math.ceil((X-ie)/y.slidesToShow)}var fe=P&&H(P.querySelector('[data-index="0"]')),pe=fe*y.slidesToShow,xe=y.currentSlide===void 0?y.initialSlide:y.currentSlide;y.rtl&&y.currentSlide===void 0&&(xe=b-1-y.initialSlide);var Te=y.lazyLoadedList||[],Ne=m(d(d({},y),{},{currentSlide:xe,lazyLoadedList:Te}));Te=Te.concat(Ne);var Ce={slideCount:b,slideWidth:J,listWidth:X,trackWidth:te,currentSlide:xe,slideHeight:fe,listHeight:pe,lazyLoadedList:Te};return y.autoplaying===null&&y.autoplay&&(Ce.autoplaying="playing"),Ce},ce.slideHandler=function(y){var b=y.waitForAnimate,P=y.animating,X=y.fade,Y=y.infinite,te=y.index,J=y.slideCount,ie=y.lazyLoad,fe=y.currentSlide,pe=y.centerMode,xe=y.slidesToScroll,Te=y.slidesToShow,Ne=y.useCSS,Ce=y.lazyLoadedList;if(b&&P)return{};var Se=te,Pe,Ye,je,Be={},Ge={},He=Y?te:w(te,0,J-1);if(X){if(!Y&&(te<0||te>=J))return{};te<0?Se=te+J:te>=J&&(Se=te-J),ie&&Ce.indexOf(Se)<0&&(Ce=Ce.concat(Se)),Be={animating:!0,currentSlide:Se,lazyLoadedList:Ce,targetSlide:Se},Ge={animating:!1,targetSlide:Se}}else Pe=Se,Se<0?(Pe=Se+J,Y?J%xe!==0&&(Pe=J-J%xe):Pe=0):!G(y)&&Se>fe?Se=Pe=fe:pe&&Se>=J?(Se=Y?J:J-1,Pe=Y?0:J-1):Se>=J&&(Pe=Se-J,Y?J%xe!==0&&(Pe=0):Pe=J-Te),!Y&&Se+Te>=J&&(Pe=J-Te),Ye=k(d(d({},y),{},{slideIndex:Se})),je=k(d(d({},y),{},{slideIndex:Pe})),Y||(Ye===je&&(Se=Pe),Ye=je),ie&&(Ce=Ce.concat(m(d(d({},y),{},{currentSlide:Se})))),Ne?(Be={animating:!0,currentSlide:Pe,trackStyle:M(d(d({},y),{},{left:Ye})),lazyLoadedList:Ce,targetSlide:He},Ge={animating:!1,currentSlide:Pe,trackStyle:D(d(d({},y),{},{left:je})),swipeLeft:null,targetSlide:He}):Be={currentSlide:Pe,trackStyle:D(d(d({},y),{},{left:je})),lazyLoadedList:Ce,targetSlide:He};return{state:Be,nextState:Ge}},ce.changeSlide=function(y,b){var P,X,Y,te,J,ie=y.slidesToScroll,fe=y.slidesToShow,pe=y.slideCount,xe=y.currentSlide,Te=y.targetSlide,Ne=y.lazyLoad,Ce=y.infinite;if(te=pe%ie!==0,P=te?0:(pe-xe)%ie,b.message==="previous")Y=P===0?ie:fe-P,J=xe-Y,Ne&&!Ce&&(X=xe-Y,J=X===-1?pe-1:X),Ce||(J=Te-ie);else if(b.message==="next")Y=P===0?ie:P,J=xe+Y,Ne&&!Ce&&(J=(xe+ie)%pe+P),Ce||(J=Te+ie);else if(b.message==="dots")J=b.index*b.slidesToScroll;else if(b.message==="children"){if(J=b.index,Ce){var Se=q(d(d({},y),{},{targetSlide:J}));J>b.currentSlide&&Se==="left"?J=J-pe:J<b.currentSlide&&Se==="right"&&(J=J+pe)}}else b.message==="index"&&(J=Number(b.index));return J},ce.keyHandler=function(y,b,P){return y.target.tagName.match("TEXTAREA|INPUT|SELECT")||!b?"":y.keyCode===37?P?"next":"previous":y.keyCode===39?P?"previous":"next":""},ce.swipeStart=function(y,b,P){return y.target.tagName==="IMG"&&v(y),!b||!P&&y.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:y.touches?y.touches[0].pageX:y.clientX,startY:y.touches?y.touches[0].pageY:y.clientY,curX:y.touches?y.touches[0].pageX:y.clientX,curY:y.touches?y.touches[0].pageY:y.clientY}}},ce.swipeMove=function(y,b){var P=b.scrolling,X=b.animating,Y=b.vertical,te=b.swipeToSlide,J=b.verticalSwiping,ie=b.rtl,fe=b.currentSlide,pe=b.edgeFriction,xe=b.edgeDragged,Te=b.onEdge,Ne=b.swiped,Ce=b.swiping,Se=b.slideCount,Pe=b.slidesToScroll,Ye=b.infinite,je=b.touchObject,Be=b.swipeEvent,Ge=b.listHeight,He=b.listWidth;if(!P){if(X)return v(y);Y&&te&&J&&v(y);var et,Ut={},tr=k(b);je.curX=y.touches?y.touches[0].pageX:y.clientX,je.curY=y.touches?y.touches[0].pageY:y.clientY,je.swipeLength=Math.round(Math.sqrt(Math.pow(je.curX-je.startX,2)));var oi=Math.round(Math.sqrt(Math.pow(je.curY-je.startY,2)));if(!J&&!Ce&&oi>10)return{scrolling:!0};J&&(je.swipeLength=oi);var Nn=(ie?-1:1)*(je.curX>je.startX?1:-1);J&&(Nn=je.curY>je.startY?1:-1);var ws=Math.ceil(Se/Pe),Ot=K(b.touchObject,J),rn=je.swipeLength;return Ye||(fe===0&&(Ot==="right"||Ot==="down")||fe+1>=ws&&(Ot==="left"||Ot==="up")||!G(b)&&(Ot==="left"||Ot==="up"))&&(rn=je.swipeLength*pe,xe===!1&&Te&&(Te(Ot),Ut.edgeDragged=!0)),!Ne&&Be&&(Be(Ot),Ut.swiped=!0),Y?et=tr+rn*(Ge/He)*Nn:ie?et=tr-rn*Nn:et=tr+rn*Nn,J&&(et=tr+rn*Nn),Ut=d(d({},Ut),{},{touchObject:je,swipeLeft:et,trackStyle:D(d(d({},b),{},{left:et}))}),Math.abs(je.curX-je.startX)<Math.abs(je.curY-je.startY)*.8||je.swipeLength>10&&(Ut.swiping=!0,v(y)),Ut}},ce.swipeEnd=function(y,b){var P=b.dragging,X=b.swipe,Y=b.touchObject,te=b.listWidth,J=b.touchThreshold,ie=b.verticalSwiping,fe=b.listHeight,pe=b.swipeToSlide,xe=b.scrolling,Te=b.onSwipe,Ne=b.targetSlide,Ce=b.currentSlide,Se=b.infinite;if(!P)return X&&v(y),{};var Pe=ie?fe/J:te/J,Ye=K(Y,ie),je={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(xe||!Y.swipeLength)return je;if(Y.swipeLength>Pe){v(y),Te&&Te(Ye);var Be,Ge,He=Se?Ce:Ne;switch(Ye){case"left":case"up":Ge=He+z(b),Be=pe?T(b,Ge):Ge,je.currentDirection=0;break;case"right":case"down":Ge=He-z(b),Be=pe?T(b,Ge):Ge,je.currentDirection=1;break;default:Be=He}je.triggerSlideHandler=Be}else{var et=k(b);je.trackStyle=M(d(d({},b),{},{left:et}))}return je};var le=ce.getNavigableIndexes=function(y){for(var b=y.infinite?y.slideCount*2:y.slideCount,P=y.infinite?y.slidesToShow*-1:0,X=y.infinite?y.slidesToShow*-1:0,Y=[];P<b;)Y.push(P),P=X+y.slidesToScroll,X+=Math.min(y.slidesToScroll,y.slidesToShow);return Y},T=ce.checkNavigable=function(y,b){var P=le(y),X=0;if(b>P[P.length-1])b=P[P.length-1];else for(var Y in P){if(b<P[Y]){b=X;break}X=P[Y]}return b},z=ce.getSlideCount=function(y){var b=y.centerMode?y.slideWidth*Math.floor(y.slidesToShow/2):0;if(y.swipeToSlide){var P,X=y.listRef,Y=X.querySelectorAll&&X.querySelectorAll(".slick-slide")||[];if(Array.from(Y).every(function(ie){if(y.vertical){if(ie.offsetTop+H(ie)/2>y.swipeLeft*-1)return P=ie,!1}else if(ie.offsetLeft-b+V(ie)/2>y.swipeLeft*-1)return P=ie,!1;return!0}),!P)return 0;var te=y.rtl===!0?y.slideCount-y.currentSlide:y.currentSlide,J=Math.abs(P.dataset.index-te)||1;return J}else return y.slidesToScroll},L=ce.checkSpecKeys=function(y,b){return b.reduce(function(P,X){return P&&y.hasOwnProperty(X)},!0)?null:console.error("Keys Missing:",y)},D=ce.getTrackCSS=function(y){L(y,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var b,P;if(!y.vertical)b=F(y)*y.slideWidth;else{var X=y.unslick?y.slideCount:y.slideCount+2*y.slidesToShow;P=X*y.slideHeight}var Y={opacity:1,transition:"",WebkitTransition:""};if(y.useTransform){var te=y.vertical?"translate3d(0px, "+y.left+"px, 0px)":"translate3d("+y.left+"px, 0px, 0px)",J=y.vertical?"translate3d(0px, "+y.left+"px, 0px)":"translate3d("+y.left+"px, 0px, 0px)",ie=y.vertical?"translateY("+y.left+"px)":"translateX("+y.left+"px)";Y=d(d({},Y),{},{WebkitTransform:te,transform:J,msTransform:ie})}else y.vertical?Y.top=y.left:Y.left=y.left;return y.fade&&(Y={opacity:1}),b&&(Y.width=b),P&&(Y.height=P),window&&!window.addEventListener&&window.attachEvent&&(y.vertical?Y.marginTop=y.left+"px":Y.marginLeft=y.left+"px"),Y},M=ce.getTrackAnimateCSS=function(y){L(y,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var b=D(y);return y.useTransform?(b.WebkitTransition="-webkit-transform "+y.speed+"ms "+y.cssEase,b.transition="transform "+y.speed+"ms "+y.cssEase):y.vertical?b.transition="top "+y.speed+"ms "+y.cssEase:b.transition="left "+y.speed+"ms "+y.cssEase,b},k=ce.getTrackLeft=function(y){if(y.unslick)return 0;L(y,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var b=y.slideIndex,P=y.trackRef,X=y.infinite,Y=y.centerMode,te=y.slideCount,J=y.slidesToShow,ie=y.slidesToScroll,fe=y.slideWidth,pe=y.listWidth,xe=y.variableWidth,Te=y.slideHeight,Ne=y.fade,Ce=y.vertical,Se=0,Pe,Ye,je=0;if(Ne||y.slideCount===1)return 0;var Be=0;if(X?(Be=-$(y),te%ie!==0&&b+ie>te&&(Be=-(b>te?J-(b-te):te%ie)),Y&&(Be+=parseInt(J/2))):(te%ie!==0&&b+ie>te&&(Be=J-te%ie),Y&&(Be=parseInt(J/2))),Se=Be*fe,je=Be*Te,Ce?Pe=b*Te*-1+je:Pe=b*fe*-1+Se,xe===!0){var Ge,He=P&&P.node;if(Ge=b+$(y),Ye=He&&He.childNodes[Ge],Pe=Ye?Ye.offsetLeft*-1:0,Y===!0){Ge=X?b+$(y):b,Ye=He&&He.children[Ge],Pe=0;for(var et=0;et<Ge;et++)Pe-=He&&He.children[et]&&He.children[et].offsetWidth;Pe-=parseInt(y.centerPadding),Pe+=Ye&&(pe-Ye.offsetWidth)/2}}return Pe},$=ce.getPreClones=function(y){return y.unslick||!y.infinite?0:y.variableWidth?y.slideCount:y.slidesToShow+(y.centerMode?1:0)},Z=ce.getPostClones=function(y){return y.unslick||!y.infinite?0:y.variableWidth?y.slideCount:y.slidesToShow+(y.centerMode?1:0)},F=ce.getTotalSlides=function(y){return y.slideCount===1?1:$(y)+y.slideCount+Z(y)},q=ce.siblingDirection=function(y){return y.targetSlide>y.currentSlide?y.targetSlide>y.currentSlide+ee(y)?"left":"right":y.targetSlide<y.currentSlide-ae(y)?"right":"left"},ee=ce.slidesOnRight=function(y){var b=y.slidesToShow,P=y.centerMode,X=y.rtl,Y=y.centerPadding;if(P){var te=(b-1)/2+1;return parseInt(Y)>0&&(te+=1),X&&b%2===0&&(te+=1),te}return X?0:b-1},ae=ce.slidesOnLeft=function(y){var b=y.slidesToShow,P=y.centerMode,X=y.rtl,Y=y.centerPadding;if(P){var te=(b-1)/2+1;return parseInt(Y)>0&&(te+=1),!X&&b%2===0&&(te+=1),te}return X?b-1:0};ce.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var x=ce.validSettings=Object.keys(r.default);function Q(N){return x.reduce(function(y,b){return N.hasOwnProperty(b)&&(y[b]=N[b]),y},{})}return ce}var qi={},Gh;function Cx(){if(Gh)return qi;Gh=1,Object.defineProperty(qi,"__esModule",{value:!0}),qi.Track=void 0;var t=o(hn()),r=o(Za()),s=ps();function o(M){return M&&M.__esModule?M:{default:M}}function c(M){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},c(M)}function d(){return d=Object.assign?Object.assign.bind():function(M){for(var k=1;k<arguments.length;k++){var $=arguments[k];for(var Z in $)({}).hasOwnProperty.call($,Z)&&(M[Z]=$[Z])}return M},d.apply(null,arguments)}function f(M,k){if(!(M instanceof k))throw new TypeError("Cannot call a class as a function")}function p(M,k){for(var $=0;$<k.length;$++){var Z=k[$];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(M,G(Z.key),Z)}}function g(M,k,$){return k&&p(M.prototype,k),Object.defineProperty(M,"prototype",{writable:!1}),M}function w(M,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(k&&k.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),k&&v(M,k)}function v(M,k){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function($,Z){return $.__proto__=Z,$},v(M,k)}function m(M){var k=I();return function(){var $,Z=A(M);if(k){var F=A(this).constructor;$=Reflect.construct(Z,arguments,F)}else $=Z.apply(this,arguments);return S(this,$)}}function S(M,k){if(k&&(c(k)=="object"||typeof k=="function"))return k;if(k!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(M)}function E(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function I(){try{var M=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(I=function(){return!!M})()}function A(M){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(k){return k.__proto__||Object.getPrototypeOf(k)},A(M)}function V(M,k){var $=Object.keys(M);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(M);k&&(Z=Z.filter(function(F){return Object.getOwnPropertyDescriptor(M,F).enumerable})),$.push.apply($,Z)}return $}function H(M){for(var k=1;k<arguments.length;k++){var $=arguments[k]!=null?arguments[k]:{};k%2?V(Object($),!0).forEach(function(Z){K(M,Z,$[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors($)):V(Object($)).forEach(function(Z){Object.defineProperty(M,Z,Object.getOwnPropertyDescriptor($,Z))})}return M}function K(M,k,$){return(k=G(k))in M?Object.defineProperty(M,k,{value:$,enumerable:!0,configurable:!0,writable:!0}):M[k]=$,M}function G(M){var k=le(M,"string");return c(k)=="symbol"?k:k+""}function le(M,k){if(c(M)!="object"||!M)return M;var $=M[Symbol.toPrimitive];if($!==void 0){var Z=$.call(M,k);if(c(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(k==="string"?String:Number)(M)}var T=function(k){var $,Z,F,q,ee;k.rtl?ee=k.slideCount-1-k.index:ee=k.index,F=ee<0||ee>=k.slideCount,k.centerMode?(q=Math.floor(k.slidesToShow/2),Z=(ee-k.currentSlide)%k.slideCount===0,ee>k.currentSlide-q-1&&ee<=k.currentSlide+q&&($=!0)):$=k.currentSlide<=ee&&ee<k.currentSlide+k.slidesToShow;var ae;k.targetSlide<0?ae=k.targetSlide+k.slideCount:k.targetSlide>=k.slideCount?ae=k.targetSlide-k.slideCount:ae=k.targetSlide;var x=ee===ae;return{"slick-slide":!0,"slick-active":$,"slick-center":Z,"slick-cloned":F,"slick-current":x}},z=function(k){var $={};return(k.variableWidth===void 0||k.variableWidth===!1)&&($.width=k.slideWidth),k.fade&&($.position="relative",k.vertical?$.top=-k.index*parseInt(k.slideHeight):$.left=-k.index*parseInt(k.slideWidth),$.opacity=k.currentSlide===k.index?1:0,$.zIndex=k.currentSlide===k.index?999:998,k.useCSS&&($.transition="opacity "+k.speed+"ms "+k.cssEase+", visibility "+k.speed+"ms "+k.cssEase)),$},L=function(k,$){return k.key||$},D=function(k){var $,Z=[],F=[],q=[],ee=t.default.Children.count(k.children),ae=(0,s.lazyStartIndex)(k),x=(0,s.lazyEndIndex)(k);return t.default.Children.forEach(k.children,function(Q,N){var y,b={message:"children",index:N,slidesToScroll:k.slidesToScroll,currentSlide:k.currentSlide};!k.lazyLoad||k.lazyLoad&&k.lazyLoadedList.indexOf(N)>=0?y=Q:y=t.default.createElement("div",null);var P=z(H(H({},k),{},{index:N})),X=y.props.className||"",Y=T(H(H({},k),{},{index:N}));if(Z.push(t.default.cloneElement(y,{key:"original"+L(y,N),"data-index":N,className:(0,r.default)(Y,X),tabIndex:"-1","aria-hidden":!Y["slick-active"],style:H(H({outline:"none"},y.props.style||{}),P),onClick:function(ie){y.props&&y.props.onClick&&y.props.onClick(ie),k.focusOnSelect&&k.focusOnSelect(b)}})),k.infinite&&ee>1&&k.fade===!1&&!k.unslick){var te=ee-N;te<=(0,s.getPreClones)(k)&&($=-te,$>=ae&&(y=Q),Y=T(H(H({},k),{},{index:$})),F.push(t.default.cloneElement(y,{key:"precloned"+L(y,$),"data-index":$,tabIndex:"-1",className:(0,r.default)(Y,X),"aria-hidden":!Y["slick-active"],style:H(H({},y.props.style||{}),P),onClick:function(ie){y.props&&y.props.onClick&&y.props.onClick(ie),k.focusOnSelect&&k.focusOnSelect(b)}}))),N<(0,s.getPostClones)(k)&&($=ee+N,$<x&&(y=Q),Y=T(H(H({},k),{},{index:$})),q.push(t.default.cloneElement(y,{key:"postcloned"+L(y,$),"data-index":$,tabIndex:"-1",className:(0,r.default)(Y,X),"aria-hidden":!Y["slick-active"],style:H(H({},y.props.style||{}),P),onClick:function(ie){y.props&&y.props.onClick&&y.props.onClick(ie),k.focusOnSelect&&k.focusOnSelect(b)}})))}}),k.rtl?F.concat(Z,q).reverse():F.concat(Z,q)};return qi.Track=(function(M){w($,M);var k=m($);function $(){var Z;f(this,$);for(var F=arguments.length,q=new Array(F),ee=0;ee<F;ee++)q[ee]=arguments[ee];return Z=k.call.apply(k,[this].concat(q)),K(E(Z),"node",null),K(E(Z),"handleRef",function(ae){Z.node=ae}),Z}return g($,[{key:"render",value:function(){var F=D(this.props),q=this.props,ee=q.onMouseEnter,ae=q.onMouseOver,x=q.onMouseLeave,Q={onMouseEnter:ee,onMouseOver:ae,onMouseLeave:x};return t.default.createElement("div",d({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},Q),F)}}]),$})(t.default.PureComponent),qi}var Xi={},qh;function Tx(){if(qh)return Xi;qh=1;function t(T){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},t(T)}Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.Dots=void 0;var r=c(hn()),s=c(Za()),o=ps();function c(T){return T&&T.__esModule?T:{default:T}}function d(T,z){var L=Object.keys(T);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(T);z&&(D=D.filter(function(M){return Object.getOwnPropertyDescriptor(T,M).enumerable})),L.push.apply(L,D)}return L}function f(T){for(var z=1;z<arguments.length;z++){var L=arguments[z]!=null?arguments[z]:{};z%2?d(Object(L),!0).forEach(function(D){p(T,D,L[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(L)):d(Object(L)).forEach(function(D){Object.defineProperty(T,D,Object.getOwnPropertyDescriptor(L,D))})}return T}function p(T,z,L){return(z=m(z))in T?Object.defineProperty(T,z,{value:L,enumerable:!0,configurable:!0,writable:!0}):T[z]=L,T}function g(T,z){if(!(T instanceof z))throw new TypeError("Cannot call a class as a function")}function w(T,z){for(var L=0;L<z.length;L++){var D=z[L];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(T,m(D.key),D)}}function v(T,z,L){return z&&w(T.prototype,z),Object.defineProperty(T,"prototype",{writable:!1}),T}function m(T){var z=S(T,"string");return t(z)=="symbol"?z:z+""}function S(T,z){if(t(T)!="object"||!T)return T;var L=T[Symbol.toPrimitive];if(L!==void 0){var D=L.call(T,z);if(t(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}function E(T,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(z&&z.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),z&&I(T,z)}function I(T,z){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,D){return L.__proto__=D,L},I(T,z)}function A(T){var z=K();return function(){var L,D=G(T);if(z){var M=G(this).constructor;L=Reflect.construct(D,arguments,M)}else L=D.apply(this,arguments);return V(this,L)}}function V(T,z){if(z&&(t(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(T)}function H(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function K(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(K=function(){return!!T})()}function G(T){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},G(T)}var le=function(z){var L;return z.infinite?L=Math.ceil(z.slideCount/z.slidesToScroll):L=Math.ceil((z.slideCount-z.slidesToShow)/z.slidesToScroll)+1,L};return Xi.Dots=(function(T){E(L,T);var z=A(L);function L(){return g(this,L),z.apply(this,arguments)}return v(L,[{key:"clickHandler",value:function(M,k){k.preventDefault(),this.props.clickHandler(M)}},{key:"render",value:function(){for(var M=this.props,k=M.onMouseEnter,$=M.onMouseOver,Z=M.onMouseLeave,F=M.infinite,q=M.slidesToScroll,ee=M.slidesToShow,ae=M.slideCount,x=M.currentSlide,Q=le({slideCount:ae,slidesToScroll:q,slidesToShow:ee,infinite:F}),N={onMouseEnter:k,onMouseOver:$,onMouseLeave:Z},y=[],b=0;b<Q;b++){var P=(b+1)*q-1,X=F?P:(0,o.clamp)(P,0,ae-1),Y=X-(q-1),te=F?Y:(0,o.clamp)(Y,0,ae-1),J=(0,s.default)({"slick-active":F?x>=te&&x<=X:x===te}),ie={message:"dots",index:b,slidesToScroll:q,currentSlide:x},fe=this.clickHandler.bind(this,ie);y=y.concat(r.default.createElement("li",{key:b,className:J},r.default.cloneElement(this.props.customPaging(b),{onClick:fe})))}return r.default.cloneElement(this.props.appendDots(y),f({className:this.props.dotsClass},N))}}]),L})(r.default.PureComponent),Xi}var pr={},Xh;function Px(){if(Xh)return pr;Xh=1;function t(T){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},t(T)}Object.defineProperty(pr,"__esModule",{value:!0}),pr.PrevArrow=pr.NextArrow=void 0;var r=c(hn()),s=c(Za()),o=ps();function c(T){return T&&T.__esModule?T:{default:T}}function d(){return d=Object.assign?Object.assign.bind():function(T){for(var z=1;z<arguments.length;z++){var L=arguments[z];for(var D in L)({}).hasOwnProperty.call(L,D)&&(T[D]=L[D])}return T},d.apply(null,arguments)}function f(T,z){var L=Object.keys(T);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(T);z&&(D=D.filter(function(M){return Object.getOwnPropertyDescriptor(T,M).enumerable})),L.push.apply(L,D)}return L}function p(T){for(var z=1;z<arguments.length;z++){var L=arguments[z]!=null?arguments[z]:{};z%2?f(Object(L),!0).forEach(function(D){g(T,D,L[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(L)):f(Object(L)).forEach(function(D){Object.defineProperty(T,D,Object.getOwnPropertyDescriptor(L,D))})}return T}function g(T,z,L){return(z=S(z))in T?Object.defineProperty(T,z,{value:L,enumerable:!0,configurable:!0,writable:!0}):T[z]=L,T}function w(T,z){if(!(T instanceof z))throw new TypeError("Cannot call a class as a function")}function v(T,z){for(var L=0;L<z.length;L++){var D=z[L];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(T,S(D.key),D)}}function m(T,z,L){return z&&v(T.prototype,z),Object.defineProperty(T,"prototype",{writable:!1}),T}function S(T){var z=E(T,"string");return t(z)=="symbol"?z:z+""}function E(T,z){if(t(T)!="object"||!T)return T;var L=T[Symbol.toPrimitive];if(L!==void 0){var D=L.call(T,z);if(t(D)!="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}function I(T,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(z&&z.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),z&&A(T,z)}function A(T,z){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,D){return L.__proto__=D,L},A(T,z)}function V(T){var z=G();return function(){var L,D=le(T);if(z){var M=le(this).constructor;L=Reflect.construct(D,arguments,M)}else L=D.apply(this,arguments);return H(this,L)}}function H(T,z){if(z&&(t(z)=="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(T)}function K(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function G(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!T})()}function le(T){return le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},le(T)}return pr.PrevArrow=(function(T){I(L,T);var z=V(L);function L(){return w(this,L),z.apply(this,arguments)}return m(L,[{key:"clickHandler",value:function(M,k){k&&k.preventDefault(),this.props.clickHandler(M,k)}},{key:"render",value:function(){var M={"slick-arrow":!0,"slick-prev":!0},k=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(M["slick-disabled"]=!0,k=null);var $={key:"0","data-role":"none",className:(0,s.default)(M),style:{display:"block"},onClick:k},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.prevArrow?F=r.default.cloneElement(this.props.prevArrow,p(p({},$),Z)):F=r.default.createElement("button",d({key:"0",type:"button"},$)," ","Previous"),F}}]),L})(r.default.PureComponent),pr.NextArrow=(function(T){I(L,T);var z=V(L);function L(){return w(this,L),z.apply(this,arguments)}return m(L,[{key:"clickHandler",value:function(M,k){k&&k.preventDefault(),this.props.clickHandler(M,k)}},{key:"render",value:function(){var M={"slick-arrow":!0,"slick-next":!0},k=this.clickHandler.bind(this,{message:"next"});(0,o.canGoNext)(this.props)||(M["slick-disabled"]=!0,k=null);var $={key:"1","data-role":"none",className:(0,s.default)(M),style:{display:"block"},onClick:k},Z={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},F;return this.props.nextArrow?F=r.default.cloneElement(this.props.nextArrow,p(p({},$),Z)):F=r.default.createElement("button",d({key:"1",type:"button"},$)," ","Next"),F}}]),L})(r.default.PureComponent),pr}var _p=(function(){if(typeof Map<"u")return Map;function t(r,s){var o=-1;return r.some(function(c,d){return c[0]===s?(o=d,!0):!1}),o}return(function(){function r(){this.__entries__=[]}return Object.defineProperty(r.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),r.prototype.get=function(s){var o=t(this.__entries__,s),c=this.__entries__[o];return c&&c[1]},r.prototype.set=function(s,o){var c=t(this.__entries__,s);~c?this.__entries__[c][1]=o:this.__entries__.push([s,o])},r.prototype.delete=function(s){var o=this.__entries__,c=t(o,s);~c&&o.splice(c,1)},r.prototype.has=function(s){return!!~t(this.__entries__,s)},r.prototype.clear=function(){this.__entries__.splice(0)},r.prototype.forEach=function(s,o){o===void 0&&(o=null);for(var c=0,d=this.__entries__;c<d.length;c++){var f=d[c];s.call(o,f[1],f[0])}},r})()})(),Pc=typeof window<"u"&&typeof document<"u"&&window.document===document,Wa=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),Ex=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Wa):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}})(),Nx=2;function Rx(t,r){var s=!1,o=!1,c=0;function d(){s&&(s=!1,t()),o&&p()}function f(){Ex(d)}function p(){var g=Date.now();if(s){if(g-c<Nx)return;o=!0}else s=!0,o=!1,setTimeout(f,r);c=g}return p}var Mx=20,Lx=["top","right","bottom","left","width","height","size","weight"],Ox=typeof MutationObserver<"u",Ax=(function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Rx(this.refresh.bind(this),Mx)}return t.prototype.addObserver=function(r){~this.observers_.indexOf(r)||this.observers_.push(r),this.connected_||this.connect_()},t.prototype.removeObserver=function(r){var s=this.observers_,o=s.indexOf(r);~o&&s.splice(o,1),!s.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var r=this.updateObservers_();r&&this.refresh()},t.prototype.updateObservers_=function(){var r=this.observers_.filter(function(s){return s.gatherActive(),s.hasActive()});return r.forEach(function(s){return s.broadcastActive()}),r.length>0},t.prototype.connect_=function(){!Pc||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ox?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Pc||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(r){var s=r.propertyName,o=s===void 0?"":s,c=Lx.some(function(d){return!!~o.indexOf(d)});c&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t})(),Ip=(function(t,r){for(var s=0,o=Object.keys(r);s<o.length;s++){var c=o[s];Object.defineProperty(t,c,{value:r[c],enumerable:!1,writable:!1,configurable:!0})}return t}),Zr=(function(t){var r=t&&t.ownerDocument&&t.ownerDocument.defaultView;return r||Wa}),Vp=eo(0,0,0,0);function Ua(t){return parseFloat(t)||0}function Qh(t){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];return r.reduce(function(o,c){var d=t["border-"+c+"-width"];return o+Ua(d)},0)}function Dx(t){for(var r=["top","right","bottom","left"],s={},o=0,c=r;o<c.length;o++){var d=c[o],f=t["padding-"+d];s[d]=Ua(f)}return s}function zx(t){var r=t.getBBox();return eo(0,0,r.width,r.height)}function _x(t){var r=t.clientWidth,s=t.clientHeight;if(!r&&!s)return Vp;var o=Zr(t).getComputedStyle(t),c=Dx(o),d=c.left+c.right,f=c.top+c.bottom,p=Ua(o.width),g=Ua(o.height);if(o.boxSizing==="border-box"&&(Math.round(p+d)!==r&&(p-=Qh(o,"left","right")+d),Math.round(g+f)!==s&&(g-=Qh(o,"top","bottom")+f)),!Vx(t)){var w=Math.round(p+d)-r,v=Math.round(g+f)-s;Math.abs(w)!==1&&(p-=w),Math.abs(v)!==1&&(g-=v)}return eo(c.left,c.top,p,g)}var Ix=(function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Zr(t).SVGGraphicsElement}:function(t){return t instanceof Zr(t).SVGElement&&typeof t.getBBox=="function"}})();function Vx(t){return t===Zr(t).document.documentElement}function Fx(t){return Pc?Ix(t)?zx(t):_x(t):Vp}function Bx(t){var r=t.x,s=t.y,o=t.width,c=t.height,d=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,f=Object.create(d.prototype);return Ip(f,{x:r,y:s,width:o,height:c,top:s,right:r+o,bottom:c+s,left:r}),f}function eo(t,r,s,o){return{x:t,y:r,width:s,height:o}}var Hx=(function(){function t(r){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=eo(0,0,0,0),this.target=r}return t.prototype.isActive=function(){var r=Fx(this.target);return this.contentRect_=r,r.width!==this.broadcastWidth||r.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var r=this.contentRect_;return this.broadcastWidth=r.width,this.broadcastHeight=r.height,r},t})(),Wx=(function(){function t(r,s){var o=Bx(s);Ip(this,{target:r,contentRect:o})}return t})(),Ux=(function(){function t(r,s,o){if(this.activeObservations_=[],this.observations_=new _p,typeof r!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=r,this.controller_=s,this.callbackCtx_=o}return t.prototype.observe=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof Zr(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var s=this.observations_;s.has(r)||(s.set(r,new Hx(r)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof Zr(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var s=this.observations_;s.has(r)&&(s.delete(r),s.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var r=this;this.clearActive(),this.observations_.forEach(function(s){s.isActive()&&r.activeObservations_.push(s)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var r=this.callbackCtx_,s=this.activeObservations_.map(function(o){return new Wx(o.target,o.broadcastRect())});this.callback_.call(r,s,r),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t})(),Fp=typeof WeakMap<"u"?new WeakMap:new _p,Bp=(function(){function t(r){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var s=Ax.getInstance(),o=new Ux(r,s,this);Fp.set(this,o)}return t})();["observe","unobserve","disconnect"].forEach(function(t){Bp.prototype[t]=function(){var r;return(r=Fp.get(this))[t].apply(r,arguments)}});var $x=(function(){return typeof Wa.ResizeObserver<"u"?Wa.ResizeObserver:Bp})();const Kx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),Yx=Sv(Kx);var Jh;function Gx(){if(Jh)return Gi;Jh=1,Object.defineProperty(Gi,"__esModule",{value:!0}),Gi.InnerSlider=void 0;var t=w(hn()),r=w(Sx()),s=w(kx()),o=w(Za()),c=ps(),d=Cx(),f=Tx(),p=Px(),g=w(Yx);function w(F){return F&&F.__esModule?F:{default:F}}function v(F){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},v(F)}function m(){return m=Object.assign?Object.assign.bind():function(F){for(var q=1;q<arguments.length;q++){var ee=arguments[q];for(var ae in ee)({}).hasOwnProperty.call(ee,ae)&&(F[ae]=ee[ae])}return F},m.apply(null,arguments)}function S(F,q){if(F==null)return{};var ee,ae,x=E(F,q);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(F);for(ae=0;ae<Q.length;ae++)ee=Q[ae],q.includes(ee)||{}.propertyIsEnumerable.call(F,ee)&&(x[ee]=F[ee])}return x}function E(F,q){if(F==null)return{};var ee={};for(var ae in F)if({}.hasOwnProperty.call(F,ae)){if(q.includes(ae))continue;ee[ae]=F[ae]}return ee}function I(F,q){var ee=Object.keys(F);if(Object.getOwnPropertySymbols){var ae=Object.getOwnPropertySymbols(F);q&&(ae=ae.filter(function(x){return Object.getOwnPropertyDescriptor(F,x).enumerable})),ee.push.apply(ee,ae)}return ee}function A(F){for(var q=1;q<arguments.length;q++){var ee=arguments[q]!=null?arguments[q]:{};q%2?I(Object(ee),!0).forEach(function(ae){k(F,ae,ee[ae])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(ee)):I(Object(ee)).forEach(function(ae){Object.defineProperty(F,ae,Object.getOwnPropertyDescriptor(ee,ae))})}return F}function V(F,q){if(!(F instanceof q))throw new TypeError("Cannot call a class as a function")}function H(F,q){for(var ee=0;ee<q.length;ee++){var ae=q[ee];ae.enumerable=ae.enumerable||!1,ae.configurable=!0,"value"in ae&&(ae.writable=!0),Object.defineProperty(F,$(ae.key),ae)}}function K(F,q,ee){return q&&H(F.prototype,q),Object.defineProperty(F,"prototype",{writable:!1}),F}function G(F,q){if(typeof q!="function"&&q!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(q&&q.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),q&&le(F,q)}function le(F,q){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,ae){return ee.__proto__=ae,ee},le(F,q)}function T(F){var q=D();return function(){var ee,ae=M(F);if(q){var x=M(this).constructor;ee=Reflect.construct(ae,arguments,x)}else ee=ae.apply(this,arguments);return z(this,ee)}}function z(F,q){if(q&&(v(q)=="object"||typeof q=="function"))return q;if(q!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(F)}function L(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function D(){try{var F=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(D=function(){return!!F})()}function M(F){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(q){return q.__proto__||Object.getPrototypeOf(q)},M(F)}function k(F,q,ee){return(q=$(q))in F?Object.defineProperty(F,q,{value:ee,enumerable:!0,configurable:!0,writable:!0}):F[q]=ee,F}function $(F){var q=Z(F,"string");return v(q)=="symbol"?q:q+""}function Z(F,q){if(v(F)!="object"||!F)return F;var ee=F[Symbol.toPrimitive];if(ee!==void 0){var ae=ee.call(F,q);if(v(ae)!="object")return ae;throw new TypeError("@@toPrimitive must return a primitive value.")}return(q==="string"?String:Number)(F)}return Gi.InnerSlider=(function(F){G(ee,F);var q=T(ee);function ee(ae){var x;V(this,ee),x=q.call(this,ae),k(L(x),"listRefHandler",function(N){return x.list=N}),k(L(x),"trackRefHandler",function(N){return x.track=N}),k(L(x),"adaptHeight",function(){if(x.props.adaptiveHeight&&x.list){var N=x.list.querySelector('[data-index="'.concat(x.state.currentSlide,'"]'));x.list.style.height=(0,c.getHeight)(N)+"px"}}),k(L(x),"componentDidMount",function(){if(x.props.onInit&&x.props.onInit(),x.props.lazyLoad){var N=(0,c.getOnDemandLazySlides)(A(A({},x.props),x.state));N.length>0&&(x.setState(function(b){return{lazyLoadedList:b.lazyLoadedList.concat(N)}}),x.props.onLazyLoad&&x.props.onLazyLoad(N))}var y=A({listRef:x.list,trackRef:x.track},x.props);x.updateState(y,!0,function(){x.adaptHeight(),x.props.autoplay&&x.autoPlay("update")}),x.props.lazyLoad==="progressive"&&(x.lazyLoadTimer=setInterval(x.progressiveLazyLoad,1e3)),x.ro=new g.default(function(){x.state.animating?(x.onWindowResized(!1),x.callbackTimers.push(setTimeout(function(){return x.onWindowResized()},x.props.speed))):x.onWindowResized()}),x.ro.observe(x.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(b){b.onfocus=x.props.pauseOnFocus?x.onSlideFocus:null,b.onblur=x.props.pauseOnFocus?x.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",x.onWindowResized):window.attachEvent("onresize",x.onWindowResized)}),k(L(x),"componentWillUnmount",function(){x.animationEndCallback&&clearTimeout(x.animationEndCallback),x.lazyLoadTimer&&clearInterval(x.lazyLoadTimer),x.callbackTimers.length&&(x.callbackTimers.forEach(function(N){return clearTimeout(N)}),x.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",x.onWindowResized):window.detachEvent("onresize",x.onWindowResized),x.autoplayTimer&&clearInterval(x.autoplayTimer),x.ro.disconnect()}),k(L(x),"componentDidUpdate",function(N){if(x.checkImagesLoad(),x.props.onReInit&&x.props.onReInit(),x.props.lazyLoad){var y=(0,c.getOnDemandLazySlides)(A(A({},x.props),x.state));y.length>0&&(x.setState(function(X){return{lazyLoadedList:X.lazyLoadedList.concat(y)}}),x.props.onLazyLoad&&x.props.onLazyLoad(y))}x.adaptHeight();var b=A(A({listRef:x.list,trackRef:x.track},x.props),x.state),P=x.didPropsChange(N);P&&x.updateState(b,P,function(){x.state.currentSlide>=t.default.Children.count(x.props.children)&&x.changeSlide({message:"index",index:t.default.Children.count(x.props.children)-x.props.slidesToShow,currentSlide:x.state.currentSlide}),x.props.autoplay?x.autoPlay("update"):x.pause("paused")})}),k(L(x),"onWindowResized",function(N){x.debouncedResize&&x.debouncedResize.cancel(),x.debouncedResize=(0,s.default)(function(){return x.resizeWindow(N)},50),x.debouncedResize()}),k(L(x),"resizeWindow",function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,y=!!(x.track&&x.track.node);if(y){var b=A(A({listRef:x.list,trackRef:x.track},x.props),x.state);x.updateState(b,N,function(){x.props.autoplay?x.autoPlay("update"):x.pause("paused")}),x.setState({animating:!1}),clearTimeout(x.animationEndCallback),delete x.animationEndCallback}}),k(L(x),"updateState",function(N,y,b){var P=(0,c.initializedState)(N);N=A(A(A({},N),P),{},{slideIndex:P.currentSlide});var X=(0,c.getTrackLeft)(N);N=A(A({},N),{},{left:X});var Y=(0,c.getTrackCSS)(N);(y||t.default.Children.count(x.props.children)!==t.default.Children.count(N.children))&&(P.trackStyle=Y),x.setState(P,b)}),k(L(x),"ssrInit",function(){if(x.props.variableWidth){var N=0,y=0,b=[],P=(0,c.getPreClones)(A(A(A({},x.props),x.state),{},{slideCount:x.props.children.length})),X=(0,c.getPostClones)(A(A(A({},x.props),x.state),{},{slideCount:x.props.children.length}));x.props.children.forEach(function(Ye){b.push(Ye.props.style.width),N+=Ye.props.style.width});for(var Y=0;Y<P;Y++)y+=b[b.length-1-Y],N+=b[b.length-1-Y];for(var te=0;te<X;te++)N+=b[te];for(var J=0;J<x.state.currentSlide;J++)y+=b[J];var ie={width:N+"px",left:-y+"px"};if(x.props.centerMode){var fe="".concat(b[x.state.currentSlide],"px");ie.left="calc(".concat(ie.left," + (100% - ").concat(fe,") / 2 ) ")}return{trackStyle:ie}}var pe=t.default.Children.count(x.props.children),xe=A(A(A({},x.props),x.state),{},{slideCount:pe}),Te=(0,c.getPreClones)(xe)+(0,c.getPostClones)(xe)+pe,Ne=100/x.props.slidesToShow*Te,Ce=100/Te,Se=-Ce*((0,c.getPreClones)(xe)+x.state.currentSlide)*Ne/100;x.props.centerMode&&(Se+=(100-Ce*Ne/100)/2);var Pe={width:Ne+"%",left:Se+"%"};return{slideWidth:Ce+"%",trackStyle:Pe}}),k(L(x),"checkImagesLoad",function(){var N=x.list&&x.list.querySelectorAll&&x.list.querySelectorAll(".slick-slide img")||[],y=N.length,b=0;Array.prototype.forEach.call(N,function(P){var X=function(){return++b&&b>=y&&x.onWindowResized()};if(!P.onclick)P.onclick=function(){return P.parentNode.focus()};else{var Y=P.onclick;P.onclick=function(te){Y(te),P.parentNode.focus()}}P.onload||(x.props.lazyLoad?P.onload=function(){x.adaptHeight(),x.callbackTimers.push(setTimeout(x.onWindowResized,x.props.speed))}:(P.onload=X,P.onerror=function(){X(),x.props.onLazyLoadError&&x.props.onLazyLoadError()}))})}),k(L(x),"progressiveLazyLoad",function(){for(var N=[],y=A(A({},x.props),x.state),b=x.state.currentSlide;b<x.state.slideCount+(0,c.getPostClones)(y);b++)if(x.state.lazyLoadedList.indexOf(b)<0){N.push(b);break}for(var P=x.state.currentSlide-1;P>=-(0,c.getPreClones)(y);P--)if(x.state.lazyLoadedList.indexOf(P)<0){N.push(P);break}N.length>0?(x.setState(function(X){return{lazyLoadedList:X.lazyLoadedList.concat(N)}}),x.props.onLazyLoad&&x.props.onLazyLoad(N)):x.lazyLoadTimer&&(clearInterval(x.lazyLoadTimer),delete x.lazyLoadTimer)}),k(L(x),"slideHandler",function(N){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b=x.props,P=b.asNavFor,X=b.beforeChange,Y=b.onLazyLoad,te=b.speed,J=b.afterChange,ie=x.state.currentSlide,fe=(0,c.slideHandler)(A(A(A({index:N},x.props),x.state),{},{trackRef:x.track,useCSS:x.props.useCSS&&!y})),pe=fe.state,xe=fe.nextState;if(pe){X&&X(ie,pe.currentSlide);var Te=pe.lazyLoadedList.filter(function(Ne){return x.state.lazyLoadedList.indexOf(Ne)<0});Y&&Te.length>0&&Y(Te),!x.props.waitForAnimate&&x.animationEndCallback&&(clearTimeout(x.animationEndCallback),J&&J(ie),delete x.animationEndCallback),x.setState(pe,function(){P&&x.asNavForIndex!==N&&(x.asNavForIndex=N,P.innerSlider.slideHandler(N)),xe&&(x.animationEndCallback=setTimeout(function(){var Ne=xe.animating,Ce=S(xe,["animating"]);x.setState(Ce,function(){x.callbackTimers.push(setTimeout(function(){return x.setState({animating:Ne})},10)),J&&J(pe.currentSlide),delete x.animationEndCallback})},te))})}}),k(L(x),"changeSlide",function(N){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b=A(A({},x.props),x.state),P=(0,c.changeSlide)(b,N);if(!(P!==0&&!P)&&(y===!0?x.slideHandler(P,y):x.slideHandler(P),x.props.autoplay&&x.autoPlay("update"),x.props.focusOnSelect)){var X=x.list.querySelectorAll(".slick-current");X[0]&&X[0].focus()}}),k(L(x),"clickHandler",function(N){x.clickable===!1&&(N.stopPropagation(),N.preventDefault()),x.clickable=!0}),k(L(x),"keyHandler",function(N){var y=(0,c.keyHandler)(N,x.props.accessibility,x.props.rtl);y!==""&&x.changeSlide({message:y})}),k(L(x),"selectHandler",function(N){x.changeSlide(N)}),k(L(x),"disableBodyScroll",function(){var N=function(b){b=b||window.event,b.preventDefault&&b.preventDefault(),b.returnValue=!1};window.ontouchmove=N}),k(L(x),"enableBodyScroll",function(){window.ontouchmove=null}),k(L(x),"swipeStart",function(N){x.props.verticalSwiping&&x.disableBodyScroll();var y=(0,c.swipeStart)(N,x.props.swipe,x.props.draggable);y!==""&&x.setState(y)}),k(L(x),"swipeMove",function(N){var y=(0,c.swipeMove)(N,A(A(A({},x.props),x.state),{},{trackRef:x.track,listRef:x.list,slideIndex:x.state.currentSlide}));y&&(y.swiping&&(x.clickable=!1),x.setState(y))}),k(L(x),"swipeEnd",function(N){var y=(0,c.swipeEnd)(N,A(A(A({},x.props),x.state),{},{trackRef:x.track,listRef:x.list,slideIndex:x.state.currentSlide}));if(y){var b=y.triggerSlideHandler;delete y.triggerSlideHandler,x.setState(y),b!==void 0&&(x.slideHandler(b),x.props.verticalSwiping&&x.enableBodyScroll())}}),k(L(x),"touchEnd",function(N){x.swipeEnd(N),x.clickable=!0}),k(L(x),"slickPrev",function(){x.callbackTimers.push(setTimeout(function(){return x.changeSlide({message:"previous"})},0))}),k(L(x),"slickNext",function(){x.callbackTimers.push(setTimeout(function(){return x.changeSlide({message:"next"})},0))}),k(L(x),"slickGoTo",function(N){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(N=Number(N),isNaN(N))return"";x.callbackTimers.push(setTimeout(function(){return x.changeSlide({message:"index",index:N,currentSlide:x.state.currentSlide},y)},0))}),k(L(x),"play",function(){var N;if(x.props.rtl)N=x.state.currentSlide-x.props.slidesToScroll;else if((0,c.canGoNext)(A(A({},x.props),x.state)))N=x.state.currentSlide+x.props.slidesToScroll;else return!1;x.slideHandler(N)}),k(L(x),"autoPlay",function(N){x.autoplayTimer&&clearInterval(x.autoplayTimer);var y=x.state.autoplaying;if(N==="update"){if(y==="hovered"||y==="focused"||y==="paused")return}else if(N==="leave"){if(y==="paused"||y==="focused")return}else if(N==="blur"&&(y==="paused"||y==="hovered"))return;x.autoplayTimer=setInterval(x.play,x.props.autoplaySpeed+50),x.setState({autoplaying:"playing"})}),k(L(x),"pause",function(N){x.autoplayTimer&&(clearInterval(x.autoplayTimer),x.autoplayTimer=null);var y=x.state.autoplaying;N==="paused"?x.setState({autoplaying:"paused"}):N==="focused"?(y==="hovered"||y==="playing")&&x.setState({autoplaying:"focused"}):y==="playing"&&x.setState({autoplaying:"hovered"})}),k(L(x),"onDotsOver",function(){return x.props.autoplay&&x.pause("hovered")}),k(L(x),"onDotsLeave",function(){return x.props.autoplay&&x.state.autoplaying==="hovered"&&x.autoPlay("leave")}),k(L(x),"onTrackOver",function(){return x.props.autoplay&&x.pause("hovered")}),k(L(x),"onTrackLeave",function(){return x.props.autoplay&&x.state.autoplaying==="hovered"&&x.autoPlay("leave")}),k(L(x),"onSlideFocus",function(){return x.props.autoplay&&x.pause("focused")}),k(L(x),"onSlideBlur",function(){return x.props.autoplay&&x.state.autoplaying==="focused"&&x.autoPlay("blur")}),k(L(x),"render",function(){var N=(0,o.default)("slick-slider",x.props.className,{"slick-vertical":x.props.vertical,"slick-initialized":!0}),y=A(A({},x.props),x.state),b=(0,c.extractObject)(y,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),P=x.props.pauseOnHover;b=A(A({},b),{},{onMouseEnter:P?x.onTrackOver:null,onMouseLeave:P?x.onTrackLeave:null,onMouseOver:P?x.onTrackOver:null,focusOnSelect:x.props.focusOnSelect&&x.clickable?x.selectHandler:null});var X;if(x.props.dots===!0&&x.state.slideCount>=x.props.slidesToShow){var Y=(0,c.extractObject)(y,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),te=x.props.pauseOnDotsHover;Y=A(A({},Y),{},{clickHandler:x.changeSlide,onMouseEnter:te?x.onDotsLeave:null,onMouseOver:te?x.onDotsOver:null,onMouseLeave:te?x.onDotsLeave:null}),X=t.default.createElement(f.Dots,Y)}var J,ie,fe=(0,c.extractObject)(y,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);fe.clickHandler=x.changeSlide,x.props.arrows&&(J=t.default.createElement(p.PrevArrow,fe),ie=t.default.createElement(p.NextArrow,fe));var pe=null;x.props.vertical&&(pe={height:x.state.listHeight});var xe=null;x.props.vertical===!1?x.props.centerMode===!0&&(xe={padding:"0px "+x.props.centerPadding}):x.props.centerMode===!0&&(xe={padding:x.props.centerPadding+" 0px"});var Te=A(A({},pe),xe),Ne=x.props.touchMove,Ce={className:"slick-list",style:Te,onClick:x.clickHandler,onMouseDown:Ne?x.swipeStart:null,onMouseMove:x.state.dragging&&Ne?x.swipeMove:null,onMouseUp:Ne?x.swipeEnd:null,onMouseLeave:x.state.dragging&&Ne?x.swipeEnd:null,onTouchStart:Ne?x.swipeStart:null,onTouchMove:x.state.dragging&&Ne?x.swipeMove:null,onTouchEnd:Ne?x.touchEnd:null,onTouchCancel:x.state.dragging&&Ne?x.swipeEnd:null,onKeyDown:x.props.accessibility?x.keyHandler:null},Se={className:N,dir:"ltr",style:x.props.style};return x.props.unslick&&(Ce={className:"slick-list"},Se={className:N,style:x.props.style}),t.default.createElement("div",Se,x.props.unslick?"":J,t.default.createElement("div",m({ref:x.listRefHandler},Ce),t.default.createElement(d.Track,m({ref:x.trackRefHandler},b),x.props.children)),x.props.unslick?"":ie,x.props.unslick?"":X)}),x.list=null,x.track=null,x.state=A(A({},r.default),{},{currentSlide:x.props.initialSlide,targetSlide:x.props.initialSlide?x.props.initialSlide:0,slideCount:t.default.Children.count(x.props.children)}),x.callbackTimers=[],x.clickable=!0,x.debouncedResize=null;var Q=x.ssrInit();return x.state=A(A({},x.state),Q),x}return K(ee,[{key:"didPropsChange",value:function(x){for(var Q=!1,N=0,y=Object.keys(this.props);N<y.length;N++){var b=y[N];if(!x.hasOwnProperty(b)){Q=!0;break}if(!(v(x[b])==="object"||typeof x[b]=="function"||isNaN(x[b]))&&x[b]!==this.props[b]){Q=!0;break}}return Q||t.default.Children.count(this.props.children)!==t.default.Children.count(x.children)}}]),ee})(t.default.Component),Gi}var lc,Zh;function qx(){if(Zh)return lc;Zh=1;var t=function(r){return r.replace(/[A-Z]/g,function(s){return"-"+s.toLowerCase()}).toLowerCase()};return lc=t,lc}var cc,em;function Xx(){if(em)return cc;em=1;var t=qx(),r=function(c){var d=/[height|width]$/;return d.test(c)},s=function(c){var d="",f=Object.keys(c);return f.forEach(function(p,g){var w=c[p];p=t(p),r(p)&&typeof w=="number"&&(w=w+"px"),w===!0?d+=p:w===!1?d+="not "+p:d+="("+p+": "+w+")",g<f.length-1&&(d+=" and ")}),d},o=function(c){var d="";return typeof c=="string"?c:c instanceof Array?(c.forEach(function(f,p){d+=s(f),p<c.length-1&&(d+=", ")}),d):s(c)};return cc=o,cc}var tm;function Qx(){return tm||(tm=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(hn()),s=Gx(),o=f(Xx()),c=f(zp()),d=ps();function f(D){return D&&D.__esModule?D:{default:D}}function p(D){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},p(D)}function g(){return g=Object.assign?Object.assign.bind():function(D){for(var M=1;M<arguments.length;M++){var k=arguments[M];for(var $ in k)({}).hasOwnProperty.call(k,$)&&(D[$]=k[$])}return D},g.apply(null,arguments)}function w(D,M){var k=Object.keys(D);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(D);M&&($=$.filter(function(Z){return Object.getOwnPropertyDescriptor(D,Z).enumerable})),k.push.apply(k,$)}return k}function v(D){for(var M=1;M<arguments.length;M++){var k=arguments[M]!=null?arguments[M]:{};M%2?w(Object(k),!0).forEach(function($){T(D,$,k[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(k)):w(Object(k)).forEach(function($){Object.defineProperty(D,$,Object.getOwnPropertyDescriptor(k,$))})}return D}function m(D,M){if(!(D instanceof M))throw new TypeError("Cannot call a class as a function")}function S(D,M){for(var k=0;k<M.length;k++){var $=M[k];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(D,z($.key),$)}}function E(D,M,k){return M&&S(D.prototype,M),Object.defineProperty(D,"prototype",{writable:!1}),D}function I(D,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(M&&M.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),M&&A(D,M)}function A(D,M){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,$){return k.__proto__=$,k},A(D,M)}function V(D){var M=G();return function(){var k,$=le(D);if(M){var Z=le(this).constructor;k=Reflect.construct($,arguments,Z)}else k=$.apply(this,arguments);return H(this,k)}}function H(D,M){if(M&&(p(M)=="object"||typeof M=="function"))return M;if(M!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(D)}function K(D){if(D===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D}function G(){try{var D=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!D})()}function le(D){return le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(M){return M.__proto__||Object.getPrototypeOf(M)},le(D)}function T(D,M,k){return(M=z(M))in D?Object.defineProperty(D,M,{value:k,enumerable:!0,configurable:!0,writable:!0}):D[M]=k,D}function z(D){var M=L(D,"string");return p(M)=="symbol"?M:M+""}function L(D,M){if(p(D)!="object"||!D)return D;var k=D[Symbol.toPrimitive];if(k!==void 0){var $=k.call(D,M);if(p($)!="object")return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return(M==="string"?String:Number)(D)}t.default=(function(D){I(k,D);var M=V(k);function k($){var Z;return m(this,k),Z=M.call(this,$),T(K(Z),"innerSliderRefHandler",function(F){return Z.innerSlider=F}),T(K(Z),"slickPrev",function(){return Z.innerSlider.slickPrev()}),T(K(Z),"slickNext",function(){return Z.innerSlider.slickNext()}),T(K(Z),"slickGoTo",function(F){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Z.innerSlider.slickGoTo(F,q)}),T(K(Z),"slickPause",function(){return Z.innerSlider.pause("paused")}),T(K(Z),"slickPlay",function(){return Z.innerSlider.autoPlay("play")}),Z.state={breakpoint:null},Z._responsiveMediaHandlers=[],Z}return E(k,[{key:"media",value:function(Z,F){var q=window.matchMedia(Z),ee=function(x){var Q=x.matches;Q&&F()};q.addListener(ee),this._responsiveMediaHandlers.push({mql:q,query:Z,listener:ee})}},{key:"componentDidMount",value:function(){var Z=this;if(this.props.responsive){var F=this.props.responsive.map(function(ee){return ee.breakpoint});F.sort(function(ee,ae){return ee-ae}),F.forEach(function(ee,ae){var x;ae===0?x=(0,o.default)({minWidth:0,maxWidth:ee}):x=(0,o.default)({minWidth:F[ae-1]+1,maxWidth:ee}),(0,d.canUseDOM)()&&Z.media(x,function(){Z.setState({breakpoint:ee})})});var q=(0,o.default)({minWidth:F.slice(-1)[0]});(0,d.canUseDOM)()&&this.media(q,function(){Z.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Z){Z.mql.removeListener(Z.listener)})}},{key:"render",value:function(){var Z=this,F,q;this.state.breakpoint?(q=this.props.responsive.filter(function(Y){return Y.breakpoint===Z.state.breakpoint}),F=q[0].settings==="unslick"?"unslick":v(v(v({},c.default),this.props),q[0].settings)):F=v(v({},c.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var ee=r.default.Children.toArray(this.props.children);ee=ee.filter(function(Y){return typeof Y=="string"?!!Y.trim():!!Y}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var ae=[],x=null,Q=0;Q<ee.length;Q+=F.rows*F.slidesPerRow){for(var N=[],y=Q;y<Q+F.rows*F.slidesPerRow;y+=F.slidesPerRow){for(var b=[],P=y;P<y+F.slidesPerRow&&(F.variableWidth&&ee[P].props.style&&(x=ee[P].props.style.width),!(P>=ee.length));P+=1)b.push(r.default.cloneElement(ee[P],{key:100*Q+10*y+P,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));N.push(r.default.createElement("div",{key:10*Q+y},b))}F.variableWidth?ae.push(r.default.createElement("div",{key:Q,style:{width:x}},N)):ae.push(r.default.createElement("div",{key:Q},N))}if(F==="unslick"){var X="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:X},ee)}else ae.length<=F.slidesToShow&&(F.unslick=!0);return r.default.createElement(s.InnerSlider,g({style:this.props.style,ref:this.innerSliderRefHandler},(0,d.filterSettings)(F)),ae)}}]),k})(r.default.Component)})(rc)),rc}var nm;function Jx(){return nm||(nm=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(Qx());function s(o){return o&&o.__esModule?o:{default:o}}t.default=r.default})(nc)),nc}var Zx=Jx();const ew=qc(Zx);function tw(){const t=[{name:"Anita",feedback:"Amazing tour! Loved the temples and beaches."},{name:"Ravi",feedback:"Great experience in Kodaikanal and Ooty!"},{name:"Priya",feedback:"Tamil Nadu culture and food are unforgettable!"}],r={dots:!0,infinite:!0,speed:800,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3};return a.jsxs("section",{className:"testimonials-section",children:[a.jsx("style",{children:`
        .testimonials-section {
          padding: 3rem 1.5rem;
          background-color: #f3f4f6;
          font-family: 'Arial', sans-serif;
        }
        .testimonials-section h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 2rem;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .testimonial-card {
          background: white;
          max-width: 600px;
          margin: auto;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
        }
        .testimonial-card p {
          font-style: italic;
          font-size: 1.125rem;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        .testimonial-card h3 {
          font-weight: 600;
          font-size: 1.25rem;
          color: #111827;
        }
      `}),a.jsx("h2",{children:"Testimonials"}),a.jsx(ew,{...r,children:t.map((s,o)=>a.jsx("div",{children:a.jsxs("div",{className:"testimonial-card",children:[a.jsxs("p",{children:['"',s.feedback,'"']}),a.jsxs("h3",{children:["- ",s.name]})]})},o))})]})}const tu="/Epicure-Voyage/assets/madurai-Bg5f4PUS.jpg",nu="/Epicure-Voyage/assets/ooty-DK1xNRn6.jpg",ru="/Epicure-Voyage/assets/mahabalipuram-B0xv7B4f.jpg";function nw(){const t=[{name:"Madurai",desc:"Known for the iconic Meenakshi Amman Temple, vibrant streets, and cultural richness.",img:tu},{name:"Kodaikanal",desc:"The Princess of Hill Stations with serene lakes, lush forests, and cool climate.",img:nu},{name:"Mahabalipuram",desc:"Famous for ancient rock-cut temples, Shore Temple, and intricate sculptures.",img:ru}],r=[{title:"Ancient Temples",value:"200+"},{title:"Hill Stations",value:"10+"},{title:"Beaches",value:"15+"},{title:"Bird Sanctuaries",value:"5+"}];return a.jsxs("div",{children:[a.jsx("style",{children:`
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          background: #f9fafb;
          color: #333;
        }

        /* Hero Section */
        .hero-video {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FFD700;
          z-index: 2;
        }

        .hero-overlay h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          text-shadow: 3px 3px 12px rgba(0,0,0,0.8);
        }

        .hero-overlay p {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
        }

        .btn {
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #FFD700, #FFC107);
          color: #000;
          font-weight: bold;
          border-radius: 0.75rem;
          text-decoration: none;
          font-size: 1.1rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.6);
        }

        /* Featured Destinations */
        .cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 4rem 2rem;
          background: #ffffff;
        }
        @media (min-width: 768px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .card img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #007BFF;
        }
        .card-content p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        /* Quick Facts Section */
        .facts {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 2rem;
          background: #f1f5f9;
        }
        .fact-card {
          background: #ffffff;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .fact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .fact-card h3 {
          font-size: 2.5rem;
          color: #007BFF;
          margin-bottom: 0.5rem;
        }
        .fact-card p {
          font-size: 1.25rem;
          color: #555;
        }

        /* Informational Section */
        .info-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
          text-align: center;
        }
        .info-section h2 {
          font-size: 2.75rem;
          font-weight: 800;
          color: #007BFF;
          margin-bottom: 1.5rem;
        }
        .info-section p {
          font-size: 1.25rem;
          color: #444;
          line-height: 1.8;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 2rem;
          background: #007BFF;
          color: #fff;
          font-size: 1rem;
        }

        /* Hero Video Iframe */
        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          pointer-events: none;
        }
      `}),a.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[a.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/NbkRQJzNFjg?autoplay=1&mute=1&controls=0",title:"YouTube video",frameBorder:"0",allow:"autoplay; encrypted-media; fullscreen",style:{position:"absolute",top:0,left:0}}),a.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#FFD700",textAlign:"center",zIndex:1},children:[a.jsx("h1",{style:{fontSize:"4rem",textShadow:"2px 2px 10px black"},children:"Explore Tamil Nadu"}),a.jsx("p",{style:{fontSize:"1.5rem",textShadow:"2px 2px 8px black"},children:"The Jewel of South India – Temples, Culture, and Nature"}),a.jsx(Sn,{to:"/destinations",style:{padding:"1rem 2rem",background:"linear-gradient(90deg, #FFD700, #FFC107)",borderRadius:"0.5rem",fontWeight:"bold",textDecoration:"none",color:"#000"},children:"Explore Now"})]})]}),a.jsx("section",{className:"cards",children:t.map((s,o)=>a.jsxs("div",{className:"card",children:[a.jsx("img",{src:s.img,alt:s.name}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{children:s.name}),a.jsx("p",{children:s.desc})]})]},o))}),a.jsx("section",{className:"facts",children:r.map((s,o)=>a.jsxs("div",{className:"fact-card",children:[a.jsx("h3",{children:s.value}),a.jsx("p",{children:s.title})]},o))}),a.jsxs("section",{className:"info-section",children:[a.jsx("h2",{children:"Why Visit Tamil Nadu?"}),a.jsx("p",{children:"Tamil Nadu is a perfect blend of history, spirituality, and scenic beauty. From the towering gopurams of Meenakshi Temple to tranquil hill stations like Kodaikanal, and coastal charm of Mahabalipuram, each destination tells a unique story. Witness vibrant festivals, experience authentic Tamil cuisine, and enjoy the warm hospitality."})]}),a.jsx(tw,{})]})}const Hp="/Epicure-Voyage/assets/manimuthar-CP1zO8Lh.jpg",Wp="/Epicure-Voyage/assets/rameswaram-DuoNiDKa.jpeg",Up="/Epicure-Voyage/assets/chennai-Ag4M8oeV.jpg",$p="/Epicure-Voyage/assets/kodaikanal-DgwD3Gzg.jpeg",Kp="/Epicure-Voyage/assets/tiruchirapalli-Cd7MEkDW.jpg",Yp="/Epicure-Voyage/assets/vellore-D2gYkyHG.jpg",rw="/Epicure-Voyage/assets/thanjavur-wSy_dM9K.jpg",Gp="/Epicure-Voyage/assets/coimbatore-DudeVNPQ.jpg",iu="/Epicure-Voyage/assets/thirunelveli-CnKzj-MV.jpg";function iw(){const t=[{name:"Chennai",desc:"The capital city with Marina Beach & Fort St. George.",img:Up,category:"City",path:"/chennai"},{name:"Madurai",desc:"Historic city famous for Meenakshi Amman Temple.",img:tu,category:"Temple",path:"/madurai"},{name:"Kodaikanal",desc:"Hill station with lakes, forests, and waterfalls.",img:$p,category:"Hill Station",path:"/kodaikanal"},{name:"Ooty",desc:"The Queen of Hill Stations in the Nilgiris.",img:nu,category:"Hill Station",path:"/ooty"},{name:"Mahabalipuram",desc:"Heritage site with rock-cut temples & sculptures.",img:ru,category:"Heritage",path:"/mahabalipuram"},{name:"Rameswaram",desc:"Sacred island with Ramanathaswamy Temple.",img:Wp,category:"Temple",path:"/rameswaram"},{name:"Tiruchirappalli",desc:"Famous for the Rockfort Temple and Srirangam Temple.",img:Kp,category:"Temple",path:"/tiruchirappalli"},{name:"Vellore",desc:"Known for Vellore Fort and educational institutions.",img:Yp,category:"Heritage",path:"/vellore"},{name:"Thanjavur",desc:"Rich in cultural heritage, known for Brihadeeswarar Temple.",img:rw,category:"Heritage",path:"/thanjavur"},{name:"Coimbatore",desc:"Industrial hub, near Western Ghats with pleasant climate.",img:Gp,category:"City",path:"/coimbatore"},{name:"Courtallam",desc:"Famous for waterfalls, scenic beauty & serene atmosphere.",img:Hp,category:"Waterfalls",path:"/manimuthar"},{name:"Tirunelveli",desc:"Famous for waterfalls, scenic beauty & serene atmosphere.",img:iu,category:"Waterfalls",path:"/thirunelveli"}],[r,s]=R.useState(""),[o,c]=R.useState("All"),d=t.filter(f=>{const p=f.name.toLowerCase().includes(r.toLowerCase()),g=o==="All"||f.category===o;return p&&g});return a.jsxs("div",{className:"destinations-container",children:[a.jsx("style",{children:`
        .destinations-container { padding: 3rem 1.5rem; background-color: #f3f4f6; font-family: 'Arial', sans-serif; }
        .destinations-container h2 { text-align: center; font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2rem; }
        .search-filter { display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .search-filter input, .search-filter select { padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #ccc; font-size: 1rem; }
        .destinations-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .destinations-grid { grid-template-columns: repeat(3, 1fr); } }
        .destination-card { background-color: #ffffff; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .destination-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
        .destination-card img { width: 100%; height: 200px; object-fit: cover; }
        .destination-card .card-content { padding: 1rem; }
        .destination-card h3 { font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
        .destination-card p { font-size: 1rem; color: #4b5563; line-height: 1.5; }
        .destination-card a { text-decoration: none; color: inherit; }
      `}),a.jsx("h2",{children:"Top Destinations of Tamil Nadu"}),a.jsxs("div",{className:"search-filter",children:[a.jsx("input",{type:"text",placeholder:"Search destinations...",value:r,onChange:f=>s(f.target.value)}),a.jsxs("select",{value:o,onChange:f=>c(f.target.value),children:[a.jsx("option",{value:"All",children:"All Categories"}),a.jsx("option",{value:"City",children:"City"}),a.jsx("option",{value:"Temple",children:"Temple"}),a.jsx("option",{value:"Hill Station",children:"Hill Station"}),a.jsx("option",{value:"Heritage",children:"Heritage"}),a.jsx("option",{value:"Waterfalls",children:"Waterfalls"})]})]}),a.jsx("div",{className:"destinations-grid",children:d.map((f,p)=>a.jsx("div",{className:"destination-card",children:a.jsxs(Sn,{to:f.path,children:[a.jsx("img",{src:f.img,alt:f.name}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{children:f.name}),a.jsx("p",{children:f.desc})]})]})},p))})]})}const qp="/Epicure-Voyage/assets/temple-CJh7GPwh.jpeg",sw="/Epicure-Voyage/assets/hill-DqVHnz2y.jpg",aw="/Epicure-Voyage/assets/beach-UomWsseM.jpg",ow="/Epicure-Voyage/assets/safari-CNbeajxw.jpg",lw="/Epicure-Voyage/assets/spr-C-85Z79K.webp",cw="/Epicure-Voyage/assets/ss-CTA-FCtp.jpeg";function uw(){const[t,r]=R.useState(null),[s,o]=R.useState(null),[c,d]=R.useState(!1),[f,p]=R.useState(null),g=Qa(),w=JSON.parse(localStorage.getItem("user")),v=[{title:"Temple Trail",days:"3 Days",price:"₹4,999",desc:"Explore Madurai, Rameswaram, and Kanchipuram temples, experiencing rich heritage and spirituality.",img:qp,details:"Day 1: Madurai temples • Day 2: Rameswaram visit • Day 3: Kanchipuram temple tour."},{title:"Hill Station Escape",days:"4 Days",price:"₹7,499",desc:"Relax in Ooty and Kodaikanal surrounded by lush green landscapes, lakes, and waterfalls.",img:sw,details:"Day 1: Arrival Ooty • Day 2: Sightseeing • Day 3: Kodaikanal trip • Day 4: Return."},{title:"Beach & Heritage",days:"2 Days",price:"₹3,999",desc:"Enjoy Mahabalipuram rock temples and the beauty of Marina Beach, perfect for a short getaway.",img:aw,details:"Day 1: Mahabalipuram tour • Day 2: Marina Beach visit."},{title:"Wildlife Safari",days:"3 Days",price:"₹5,499",desc:"Visit Mudumalai and Anamalai wildlife sanctuaries for a thrilling experience with nature.",img:ow,details:"Day 1: Mudumalai safari • Day 2: Anamalai wildlife trek • Day 3: Return journey."},{title:"Spiritual Sojourn",days:"5 Days",price:"₹8,999",desc:"A spiritual journey covering Chidambaram, Thiruvannamalai, and Srirangam temples.",img:lw,details:"Day 1: Chidambaram • Day 2: Thiruvannamalai • Day 3-5: Srirangam spiritual tour."},{title:"Cultural Discovery",days:"3 Days",price:"₹6,499",desc:"Immerse in Tamil culture visiting local villages, arts, traditional cuisine, and festivals.",img:cw,details:"Day 1: Village tour • Day 2: Art & cuisine experience • Day 3: Festival celebration."}],m=async(E,I)=>{try{const A={customerId:w.user_id,tourId:S[E.title],tourPackage:E.title,visitDate:I?.visitDate||"",proofType:I?.proofType||"",proofNumber:I?.proofNumber||"",paymentMethod:I?.paymentMethod||"Offline",amountPaid:Number(E.price.replace(/[₹,]/g,""))};console.log("BOOKING PAYLOAD:",A);const V=await fetch("https://epicure-voyage.onrender.com/api/bookings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)}),H=await V.json();V.ok?(alert("Booking confirmed!"),o(null)):alert("Booking failed: "+(H.error||JSON.stringify(H)))}catch(A){console.error(A),alert("Booking error: "+A.message)}},S={"Temple Trail":1,"Hill Station Escape":2,"Beach & Heritage":3,"Wildlife Safari":4,"Spiritual Sojourn":5,"Cultural Discovery":6};return a.jsxs("div",{className:"tours-container",children:[a.jsx("style",{children:`
        /* Keep all your existing styles intact */
        .tours-container {
          padding: 3rem 1.5rem;
          background-color: #f9fafb;
          font-family: 'Arial', sans-serif;
        }
        .tours-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 3rem;
        }
        .tours-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .tours-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .tour-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .tour-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .tour-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .tour-card .card-content {
          padding: 1.5rem;
        }
        .tour-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .tour-card .tour-info {
          font-size: 1rem;
          color: #4b5563;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .tour-card p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
        }
        .tour-card button {
          display: inline-block;
          margin-top: 0.5rem;
          margin-right: 0.5rem;
          padding: 0.6rem 1.2rem;
          background-color: #047857;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .tour-card button:hover {
          background-color: #065f46;
        }

        /* Modal styles (keep your existing ones) */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in-out;
        }
        .modal-content {
          background: #ffffff;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          width: 90%;
          text-align: left;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          animation: slideUp 0.4s ease;
        }
        .modal-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }
        .modal-content p {
          font-size: 1rem;
          color: #374151;
          margin-bottom: 0.8rem;
          line-height: 1.5;
        }
        .modal-content p b {
          color: #047857;
        }
        .close-btn {
          background: #dc2626;
          color: white;
          border: none;
          padding: 0.6rem 1.4rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 1rem;
          transition: background 0.3s ease;
        }
        .close-btn:hover {
          background: #b91c1c;
        }
        .modal-input {
          padding: 0.5rem;
          border-radius: 0.4rem;
          border: 1px solid #d1d5db;
          font-size: 0.95rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}),a.jsx("h2",{children:"Exciting Tour Packages"}),a.jsx("div",{className:"tours-grid",children:v.map((E,I)=>a.jsxs("div",{className:"tour-card",children:[a.jsx("img",{src:E.img,alt:E.title}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{children:E.title}),a.jsxs("div",{className:"tour-info",children:[E.days," | ",E.price]}),a.jsx("p",{children:E.desc}),a.jsx("button",{onClick:()=>r(E),children:"View Details"}),a.jsx("button",{onClick:()=>{if(!w){g("/login");return}if(w.role==="ADMIN"){alert("Admin cannot book tours.");return}o(E)},children:"Book Now"})]})]},I))}),t&&a.jsx("div",{className:"modal",onClick:()=>r(null),children:a.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[a.jsx("h2",{children:t.title}),a.jsxs("p",{children:[a.jsx("b",{children:"Duration:"})," ",t.days]}),a.jsxs("p",{children:[a.jsx("b",{children:"Price:"})," ",t.price]}),a.jsx("p",{children:t.details}),a.jsx("button",{className:"close-btn",onClick:()=>r(null),children:"Close"})]})}),s&&a.jsx("div",{className:"modal",onClick:()=>o(null),children:a.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[a.jsxs("h2",{children:["Book: ",s.title]}),a.jsxs("form",{onSubmit:E=>{E.preventDefault(),p({tour:s,customer:{phone:E.target.phone.value,visitDate:E.target.visitDate.value,proofType:E.target.proofType.value,proofNumber:E.target.proofNumber.value,paymentMethod:E.target.paymentMethod.value}}),o(null),d(!0)},style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginTop:"0.5rem"},children:[a.jsxs("p",{style:{fontSize:"0.9rem",color:"#047857"},children:[" Booking as: ",w?.name]}),a.jsx("input",{value:w?.name||"",readOnly:!0,className:"modal-input"}),a.jsx("input",{value:w?.email||"",readOnly:!0,className:"modal-input"}),a.jsx("input",{name:"phone",placeholder:"Phone Number",required:!0,className:"modal-input"}),a.jsx("input",{name:"visitDate",type:"date",required:!0,className:"modal-input"}),a.jsx("input",{name:"proofType",placeholder:"Proof Type (ID/Passport)",required:!0,className:"modal-input"}),a.jsx("input",{name:"proofNumber",placeholder:"Proof Number",required:!0,className:"modal-input"}),a.jsxs("select",{name:"paymentMethod",required:!0,className:"modal-input",children:[a.jsx("option",{value:"Offline",children:"Offline"}),a.jsx("option",{value:"Online",children:"Online"})]}),a.jsx("button",{type:"submit",className:"close-btn",children:"Confirm Booking"})]}),a.jsx("button",{className:"close-btn",style:{marginTop:"0.5rem",background:"#dc2626"},onClick:()=>o(null),children:"Close"})]})}),c&&f&&a.jsx("div",{className:"modal",onClick:()=>d(!1),children:a.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[a.jsx("h2",{children:"💳 Payment"}),a.jsxs("p",{children:[a.jsx("b",{children:"Tour:"})," ",f.tour.title]}),a.jsxs("p",{children:[a.jsx("b",{children:"Duration:"})," ",f.tour.days]}),a.jsxs("p",{children:[a.jsx("b",{children:"Visit Date:"})," ",f.customer.visitDate]}),a.jsxs("p",{children:[a.jsx("b",{children:"Amount:"})," ",f.tour.price]}),a.jsxs("p",{children:[a.jsx("b",{children:"Method:"})," ",f.customer.paymentMethod]}),a.jsx("button",{className:"close-btn",onClick:async()=>{await m(f.tour,f.customer),d(!1),p(null)},children:"Proceed to Pay"}),a.jsx("button",{className:"close-btn",style:{background:"#6b7280",marginLeft:"8px"},onClick:()=>d(!1),children:"Cancel"})]})})]})}const dw="/Epicure-Voyage/assets/pongal-DO9oJkfY.jpeg",fw="/Epicure-Voyage/assets/art-BNoHhlCa.jpeg",hw="/Epicure-Voyage/assets/cus-DLBqoD53.webp",mw="/Epicure-Voyage/assets/dance-13o7__Cc.jpg",pw="/Epicure-Voyage/assets/lang-Cii7kf1R.webp";function gw(){const[t,r]=R.useState(null),s=[{title:"Festivals",img:dw,desc:"Pongal, Tamil New Year, Karthigai Deepam, and Jallikattu highlight the vibrant celebrations of Tamil Nadu, where ancient traditions and rituals thrive in every corner of the state.",details:"Festivals in Tamil Nadu are deeply rooted in agricultural and religious practices. Pongal, the harvest festival, marks gratitude to nature, while Karthigai Deepam illuminates homes and temples across the state. Each festival represents harmony, devotion, and the essence of Tamil heritage."},{title:"Arts & Crafts",img:fw,desc:"Bharatanatyam, Tanjore paintings, intricate handloom sarees, and exquisite metal sculptures showcase Tamil Nadu's artistic brilliance.",details:"Tamil Nadu’s art forms blend spirituality and craftsmanship. The state is renowned for bronze casting, handwoven Kanchipuram silks, and mural paintings. Bharatanatyam remains one of the oldest and most elegant dance forms symbolizing grace and discipline."},{title:"Temples",img:qp,desc:"The architectural marvels such as Meenakshi Amman Temple and Brihadeeswara Temple showcase Dravidian grandeur.",details:"Temples in Tamil Nadu reflect the pinnacle of Dravidian architecture. Towering gopurams, intricate sculptures, and spiritual stories adorn structures like Rameswaram, Chidambaram, and Kanchipuram temples, attracting devotees and historians worldwide."},{title:"Cuisine",img:hw,desc:"From spicy Chettinad curries to soft Idlis and crispy Dosas, Tamil Nadu cuisine is a flavorful journey.",details:"Tamil cuisine is a delightful mix of flavors — tangy sambar, crispy vadas, aromatic biryanis, and coconut-rich gravies. Each region offers unique dishes, and traditional filter coffee completes every meal with warmth."},{title:"Music & Dance",img:mw,desc:"Carnatic music and Bharatanatyam dance are vibrant expressions of Tamil culture.",details:"Music and dance have always been integral to Tamil heritage. Carnatic ragas echo divine devotion, while Bharatanatyam narrates mythological tales through rhythmic grace and intricate gestures."},{title:"Language & Literature",img:pw,desc:"Tamil, one of the oldest living languages, has a rich literary tradition from Sangam poetry to Thirukkural.",details:"Tamil literature spans centuries of poetic excellence. Works like Silappatikaram, Thirukkural, and Sangam poems emphasize moral values, love, and heroism, shaping Tamil identity across generations."}];return a.jsxs("div",{className:"culture-container",children:[a.jsx("style",{children:`
        .culture-container {
          padding: 3rem 1.5rem;
          background-color: #fffaf0;
          font-family: 'Poppins', sans-serif;
          color: #2c3e50;
        }
        .culture-title {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #6b2f00;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .culture-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .culture-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .culture-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .culture-card {
          background-color: #fff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        .culture-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .culture-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .culture-card:hover img {
          transform: scale(1.05);
        }
        .culture-card-content {
          padding: 1.5rem;
        }
        .culture-card-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #7c2d12;
          margin-bottom: 0.5rem;
        }
        .culture-card-content p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
        }
        .explore-btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.4rem;
          background-color: #b45309;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .explore-btn:hover {
          background-color: #92400e;
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.4s ease;
        }
        .modal-content {
          background: #fff;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          text-align: center;
          position: relative;
          animation: slideUp 0.5s ease;
        }
        .modal-content h3 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #7c2d12;
        }
        .modal-content p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
        }
        .close-btn {
          margin-top: 1.2rem;
          background-color: #b45309;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .close-btn:hover {
          background-color: #92400e;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}),a.jsx("h2",{className:"culture-title",children:"Culture & Heritage of Tamil Nadu"}),a.jsx("div",{className:"culture-grid",children:s.map((o,c)=>a.jsxs("div",{className:"culture-card",children:[a.jsx("img",{src:o.img,alt:o.title}),a.jsxs("div",{className:"culture-card-content",children:[a.jsx("h3",{children:o.title}),a.jsx("p",{children:o.desc}),a.jsx("button",{className:"explore-btn",onClick:()=>r(o),children:"Explore More"})]})]},c))}),t&&a.jsx("div",{className:"modal-overlay",onClick:()=>r(null),children:a.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[a.jsx("h3",{children:t.title}),a.jsx("p",{children:t.details}),a.jsx("button",{className:"close-btn",onClick:()=>r(null),children:"Close"})]})})]})}const yw="/Epicure-Voyage/assets/mudhumalai-Ba_ZR3KU.jpg",vw="/Epicure-Voyage/assets/anamalai-DfafVCMQ.webp",xw="/Epicure-Voyage/assets/vedanthangal-Can_3uRK.avif",ww="/Epicure-Voyage/assets/guindy-yv_Aa9yP.jpg",bw="/Epicure-Voyage/assets/kmtr-D1R0xqKm.jpg",jw="/Epicure-Voyage/assets/vallanadu--YKMPzLV.webp";function Sw(){const[t,r]=R.useState(null),[s,o]=R.useState({}),c=[{title:"Mudumalai Wildlife Sanctuary",location:"Nilgiri Hills",desc:"A paradise for nature lovers, home to elephants, tigers, leopards, and over 250 species of birds.",details:"The sanctuary is part of the Nilgiri Biosphere Reserve and shares borders with Karnataka and Kerala. Safari rides and elephant camps make this place a top wildlife destination.",img:yw,icon:a.jsx(Bh,{})},{title:"Anamalai Tiger Reserve",location:"Coimbatore District",desc:"Known for its rich biodiversity with lion-tailed macaques, gaur, and endangered tigers.",details:"Formerly known as Indira Gandhi Wildlife Sanctuary, this reserve covers both tropical and montane forests. Trekking and eco-tourism are major attractions.",img:vw,icon:a.jsx(ss,{})},{title:"Vedanthangal Bird Sanctuary",location:"Kanchipuram",desc:"One of the oldest bird sanctuaries in India, attracting migratory birds like pelicans and storks.",details:"During the winter, thousands of migratory birds from Europe and North America visit this sanctuary, making it a photographer’s dream.",img:xw,icon:a.jsx(Ap,{})},{title:"Guindy National Park",location:"Chennai",desc:"An urban green haven with spotted deer, blackbucks, and a variety of bird species.",details:"Located right in Chennai city, this park also includes a children's park and snake park, making it a favorite weekend getaway.",img:ww,icon:a.jsx(xx,{})},{title:"Kalakkad Mundanthurai Tiger Reserve",location:"Tirunelveli",desc:"Dense forests with elephants, leopards, and rare bird species in the Western Ghats.",details:"The reserve is part of the Agasthyamalai Biosphere Reserve, offering trekking routes, waterfalls, and diverse ecosystems.",img:bw,icon:a.jsx(ss,{})},{title:"Vallanadu Blackbuck Sanctuary",location:"Thoothukudi",desc:"Dedicated to the protection of the elegant blackbuck antelope in a serene environment.",details:"This small sanctuary is ideal for peaceful exploration, especially during early mornings when blackbucks are most active.",img:jw,icon:a.jsx(Bh,{})}];return R.useEffect(()=>{const d=()=>{const f=document.querySelectorAll("section"),p={};f.forEach(g=>{g.getBoundingClientRect().top<window.innerHeight-100&&(p[g.id]=!0)}),o(p)};return window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)},[]),a.jsxs("div",{className:"wildlife-page",children:[a.jsx("style",{children:`
        .wildlife-page {
          font-family: 'Poppins', sans-serif;
          background-color: #f0fdf4;
          color: #1e293b;
          overflow-x: hidden;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #065f46;
          margin: 2rem 0;
          border-bottom: 3px solid #10b981;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wildlife-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 0.4rem;
        }

        .location {
          font-size: 1rem;
          font-weight: 600;
          color: #059669;
          margin-bottom: 0.7rem;
        }

        .desc {
          color: #374151;
          font-size: 1rem;
        }

        .expand-btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.4rem;
          background-color: #047857;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .expand-btn:hover {
          background-color: #065f46;
        }

        .extra-details {
          margin-top: 0.8rem;
          padding: 1rem;
          background-color: #ecfdf5;
          border-left: 4px solid #10b981;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}),a.jsxs("section",{id:"wildlife",className:s.wildlife?"visible":"",children:[a.jsx("h2",{children:"Wildlife of Tamil Nadu"}),a.jsx("div",{className:"wildlife-grid",children:c.map((d,f)=>a.jsxs("div",{className:"card",children:[a.jsx("img",{src:d.img,alt:d.title}),a.jsxs("div",{className:"card-content",children:[a.jsx("div",{className:"card-icon",children:d.icon}),a.jsx("h3",{children:d.title}),a.jsx("div",{className:"location",children:d.location}),a.jsx("p",{className:"desc",children:d.desc}),a.jsx("button",{className:"expand-btn",onClick:()=>r(t===f?null:f),children:t===f?"Hide Details":"Explore More"}),t===f&&a.jsx("div",{className:"extra-details",children:d.details})]})]},f))})]})]})}const kw="/Epicure-Voyage/assets/chettinad-DkDZJaX7.jpg",Cw="/Epicure-Voyage/assets/jigarthanda-Be4vHBqL.jpg",Tw="/Epicure-Voyage/assets/kanchipuramIdli--cMYKgCf.jpg",Pw="/Epicure-Voyage/assets/dindigul-dRTn6Hrr.jpg",Ew="/Epicure-Voyage/assets/parotta-cqPaCqRc.jpg",Nw="/Epicure-Voyage/assets/coffee-CKEiyYUD.jpg";function Rw(){const[t,r]=R.useState(null),s=[{title:"Chettinad Cuisine",origin:"Chettinad Region",desc:"Famous for its spicy curries, pepper chicken, and aromatic biryanis.",img:kw,recipe:"Try Chettinad chicken curry cooked with freshly ground spices. Best enjoyed with steamed rice or parotta.",ingredients:"Chicken, black pepper, dry red chili, curry leaves, ginger-garlic, coconut.",rating:"4.8 / 5",location:"Karaikudi, Tamil Nadu"},{title:"Madurai Jigarthanda",origin:"Madurai",desc:"A cool and creamy drink made with milk, ice cream, and sarsaparilla syrup.",img:Cw,recipe:"Served chilled with thickened milk, nannari syrup, and ice cream on top.",ingredients:"Milk, badam pisin, nannari syrup, sugar, vanilla ice cream.",rating:"4.6 / 5",location:"Madurai, Tamil Nadu"},{title:"Kanchipuram Idli",origin:"Kanchipuram",desc:"A spiced version of idli made with cumin, pepper, and ginger.",img:Tw,recipe:"Made with rice, urad dal, cumin, pepper, and ginger, steamed in banana leaves.",ingredients:"Rice, urad dal, cumin, pepper, ginger, ghee, curry leaves.",rating:"4.7 / 5",location:"Kanchipuram, Tamil Nadu"},{title:"Dindigul Biryani",origin:"Dindigul",desc:"Unique biryani with seeraga samba rice and a distinct spicy flavor.",img:Pw,recipe:"Cooked with seeraga samba rice, flavorful spices, and tender mutton or chicken.",ingredients:"Seeraga samba rice, mutton, yogurt, cloves, cinnamon, mint.",rating:"4.9 / 5",location:"Dindigul, Tamil Nadu"},{title:"Parotta & Salna",origin:"Tamil Nadu Street Food",desc:"Layered parottas served with a spicy curry, popular in roadside stalls.",img:Ew,recipe:"Flaky parottas made by folding and frying dough, served with spicy onion-tomato gravy.",ingredients:"Maida flour, oil, onion, tomato, garlic, chili powder.",rating:"4.5 / 5",location:"Madurai & Chennai Streets"},{title:"Filter Coffee",origin:"Tamil Nadu",desc:"Authentic South Indian filter coffee with rich aroma and frothy top.",img:Nw,recipe:"Made with freshly brewed filter coffee decoction and hot frothy milk.",ingredients:"Coffee decoction, boiled milk, sugar.",rating:"4.8 / 5",location:"Across Tamil Nadu"}];return a.jsxs("div",{className:"cuisine-container",children:[a.jsx("style",{children:`
        .cuisine-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Poppins', sans-serif;
        }
        .cuisine-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #7c2d12;
          margin-bottom: 3rem;
        }
        .cuisine-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .cuisine-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cuisine-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cuisine-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .cuisine-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .cuisine-card .card-content {
          padding: 1.5rem;
          text-align: center;
        }
        .cuisine-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #9a3412;
          margin-bottom: 0.5rem;
        }
        .cuisine-card .origin {
          font-size: 1rem;
          color: #ea580c;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .cuisine-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }
        .cuisine-card button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.5rem;
          background-color: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .cuisine-card button:hover {
          background-color: #92400e;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        /* Modal Box */
        .modal {
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          width: 90%;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
          animation: fadeIn 0.3s ease-in-out;
        }

        .modal img {
          width: 100%;
          border-radius: 0.75rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1.2rem;
        }

        .modal h3 {
          font-size: 1.8rem;
          color: #b45309;
          margin-bottom: 0.75rem;
        }

        .modal-content {
          text-align: left;
          margin-top: 1rem;
        }

        .modal-content p {
          font-size: 1rem;
          color: #444;
          margin: 0.4rem 0;
          line-height: 1.6;
        }

        .modal-content strong {
          color: #9a3412;
        }

        .modal button {
          margin-top: 1.5rem;
          padding: 0.7rem 1.5rem;
          background: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .modal button:hover {
          background: #92400e;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),a.jsx("h2",{children:"Famous Tamil Nadu Cuisine"}),a.jsx("div",{className:"cuisine-grid",children:s.map((o,c)=>a.jsxs("div",{className:"cuisine-card",children:[a.jsx("img",{src:o.img,alt:o.title}),a.jsxs("div",{className:"card-content",children:[a.jsx("h3",{children:o.title}),a.jsx("div",{className:"origin",children:o.origin}),a.jsx("p",{children:o.desc}),a.jsx("button",{onClick:()=>r(o),children:"Taste Now"})]})]},c))}),t&&a.jsx("div",{className:"modal-overlay",onClick:()=>r(null),children:a.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[a.jsx("img",{src:t.img,alt:t.title}),a.jsx("h3",{children:t.title}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Origin:"})," ",t.origin]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Famous Location:"})," ",t.location]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Ingredients:"})," ",t.ingredients]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Recipe:"})," ",t.recipe]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Rating:"})," ⭐ ",t.rating]})]}),a.jsx("button",{onClick:()=>r(null),children:"Close"})]})})]})}const Mw="/Epicure-Voyage/assets/str-BlOCE7Es.jpg",Lw="/Epicure-Voyage/assets/cart-CPGqNAwT.webp",Ow="/Epicure-Voyage/assets/rad-DhHQv5AR.webp",Aw="/Epicure-Voyage/assets/mad-CxIp5LCe.jpg",Dw="/Epicure-Voyage/assets/grt-u24pWV6v.webp",zw="/Epicure-Voyage/assets/kan-BnZeHIaz.jpeg";function _w(){const[t,r]=R.useState(null),s=[{name:"Sterling Ooty Fern Hill",location:"Ooty",desc:"A scenic hill resort with luxury cottages, spa, and breathtaking views of the Nilgiris.",rating:"4.8 / 5",price:"₹9,500 / night",amenities:"Spa • Mountain View • Wi-Fi • Restaurant • Bonfire • Kids Play Area",image:Mw},{name:"The Carlton",location:"Kodaikanal",desc:"Lakeside resort offering fine dining, spa, and serene boat rides along Kodai Lake.",rating:"4.7 / 5",price:"₹10,200 / night",amenities:"Lake View • Spa • Gym • Indoor Games • Candlelight Dinner",image:Lw},{name:"Radisson Blu Resort Temple Bay",location:"Mahabalipuram",desc:"A luxurious beachfront property with infinity pools, spa, and ancient temple ambience.",rating:"4.9 / 5",price:"₹13,000 / night",amenities:"Beachfront • Infinity Pool • Spa • Bar • Private Villas • Breakfast Buffet",image:Ow},{name:"Heritance Madurai",location:"Madurai",desc:"An elegant resort inspired by temple architecture, offering peace and cultural charm.",rating:"4.8 / 5",price:"₹8,800 / night",amenities:"Pool • Temple Architecture • Cultural Shows • Wi-Fi • Restaurant",image:Aw},{name:"Great Trails Yercaud by GRT Hotels",location:"Yercaud",desc:"A nature resort with valley views, adventure activities, and eco-friendly stay.",rating:"4.6 / 5",price:"₹7,200 / night",amenities:"Valley View • Trekking • Bonfire • Wi-Fi • Restaurant",image:Dw},{name:"Anantya Resort",location:"Kanyakumari",desc:"A tranquil lake-view resort surrounded by plantations, offering Ayurveda therapies.",rating:"4.7 / 5",price:"₹9,000 / night",amenities:"Ayurveda Spa • Lake View • Infinity Pool • Restaurant • Yoga Deck",image:zw}];return a.jsxs("div",{className:"resorts-container",children:[a.jsx("style",{children:`
        .resorts-container {
          padding: 3rem 1.5rem;
          background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
          font-family: 'Poppins', sans-serif;
        }
        .resorts-title {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 2.5rem;
        }
        .resorts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .resorts-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .resort-card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .resort-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .resort-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .resort-card:hover img {
          transform: scale(1.05);
        }
        .resort-card-content {
          padding: 1.25rem;
          text-align: center;
        }
        .resort-card h3 {
          font-size: 1.4rem;
          color: #047857;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        .resort-card small {
          color: #059669;
          font-weight: 600;
        }
        .resort-card p {
          margin-top: 0.75rem;
          color: #374151;
          font-size: 1rem;
          line-height: 1.5;
        }
        .resort-card button {
          margin-top: 1rem;
          background-color: #10b981;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .resort-card button:hover {
          background-color: #059669;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          animation: fadeIn 0.3s ease-in-out;
          text-align: left;
        }
        .modal img {
          width: 100%;
          border-radius: 0.75rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1rem;
        }
        .modal h3 {
          font-size: 1.8rem;
          color: #047857;
          margin-bottom: 0.5rem;
        }
        .modal p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
          margin: 0.4rem 0;
        }
        .modal strong {
          color: #065f46;
        }
        .modal button {
          margin-top: 1.25rem;
          background-color: #059669;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .modal button:hover {
          background-color: #047857;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),a.jsx("h2",{className:"resorts-title",children:"Top Resorts in Tamil Nadu"}),a.jsx("div",{className:"resorts-grid",children:s.map((o,c)=>a.jsxs("div",{className:"resort-card",onClick:()=>r(o),children:[a.jsx("img",{src:o.image,alt:o.name}),a.jsxs("div",{className:"resort-card-content",children:[a.jsx("h3",{children:o.name}),a.jsx("small",{children:o.location}),a.jsx("p",{children:o.desc}),a.jsx("button",{children:"View Details"})]})]},c))}),t&&a.jsx("div",{className:"modal-overlay",onClick:()=>r(null),children:a.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[a.jsx("img",{src:t.image,alt:t.name}),a.jsx("h3",{children:t.name}),a.jsxs("p",{children:[a.jsx("strong",{children:"Location:"})," ",t.location]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Description:"})," ",t.desc]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Amenities:"})," ",t.amenities]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Rating:"})," ⭐ ",t.rating]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Price:"})," ",t.price]}),a.jsx("button",{onClick:()=>alert("Booking feature coming soon!"),children:"Book Now"}),a.jsx("button",{onClick:()=>r(null),style:{marginLeft:"1rem",background:"#dc2626"},children:"Close"})]})})]})}const Iw="/Epicure-Voyage/assets/pons-D-nQ29m8.jpeg",Vw="/Epicure-Voyage/assets/thaipusam-Br4BQ0NN.jpeg",Fw="/Epicure-Voyage/assets/mahamam-DflY7d1x.jpg",Bw="/Epicure-Voyage/assets/natyanjali-CVkVMIp-.jpeg",Hw="/Epicure-Voyage/assets/eas-DNLWd-XZ.jpeg",Ww="/Epicure-Voyage/assets/deepam-CLtdjGX7.jpeg",Uw="/Epicure-Voyage/assets/ramzan-BxM_qNjm.webp",$w="/Epicure-Voyage/assets/bakrid-DAllMBBD.webp",Kw="/Epicure-Voyage/assets/christmas-D6IpkpPU.jpeg";function Yw(){const[t,r]=R.useState(null),s=[{name:"Pongal",month:"January",desc:"Harvest festival celebrated with sweet pongal, colorful kolams, and bullock cart races.",img:Iw,details:"Pongal marks the end of the winter solstice and the start of the sun’s northward journey. People thank the Sun God and cattle for a bountiful harvest by cooking a sweet dish called ‘Pongal’."},{name:"Ramzan (Eid-ul-Fitr)",month:"April / May (varies with lunar calendar)",desc:"Festival marking the end of Ramadan with prayers, feasts, and charity.",img:Uw,details:"Ramzan or Eid-ul-Fitr is celebrated after a month of fasting during Ramadan. People gather for prayers, prepare special dishes like biryani and sheer khurma, and share gifts and alms with the needy."},{name:"Christmas",month:"December 25",desc:"Festival celebrating the birth of Jesus Christ with joy, music, and decorations.",img:Kw,details:"Christmas is celebrated across Tamil Nadu with carol singing, church services, and illuminated decorations. Special cakes, gifts, and community feasts mark the day with festive cheer."},{name:"Thaipusam",month:"January / February",desc:"Devotional festival honoring Lord Murugan, observed with kavadi, piercing rituals, and processions.",img:Vw,details:"Thaipusam is celebrated in temples dedicated to Lord Murugan. Devotees carry kavadis (decorated offerings) and pierce their bodies as acts of devotion and penance."},{name:"Mahamaham",month:"Once every 12 years",desc:"Grand festival at Kumbakonam where lakhs take a holy dip in the sacred Mahamaham tank.",img:Fw,details:"Mahamaham is a massive festival similar to the Kumbh Mela of North India. It occurs every 12 years when devotees bathe in the Mahamaham tank to cleanse their sins."},{name:"Bakrid (Eid-al-Adha)",month:"June / July (varies with lunar calendar)",desc:"Festival of sacrifice symbolizing faith, devotion, and charity.",img:$w,details:"Bakrid commemorates Prophet Ibrahim’s willingness to sacrifice his son as an act of obedience to God. Families offer prayers and share sacrificial meals with relatives and the poor."},{name:"Natyanjali Festival",month:"February / March",desc:"Dance festival at Chidambaram temple dedicated to Lord Nataraja, showcasing Bharatanatyam performances.",img:Bw,details:"Dancers from all over India perform in the temple complex, offering their art as devotion to Lord Nataraja — the cosmic dancer."},{name:"Easter Festival",month:"March / April",desc:"A Christian festival celebrating the resurrection of Jesus Christ.",img:Hw,details:"Easter is celebrated with great joy across Tamil Nadu. Churches are beautifully decorated, special prayers and midnight masses are held, and people share festive meals with family and friends."},{name:"Karthigai Deepam",month:"November / December",desc:"Festival of lights where thousands of lamps illuminate homes and temples across Tamil Nadu.",img:Ww,details:"The highlight occurs at Thiruvannamalai when a huge flame is lit atop the Annamalai hill, symbolizing Lord Shiva’s infinite form as light."}];return a.jsxs("div",{className:"festivals-container",children:[a.jsx("style",{children:`
        .festivals-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Poppins', sans-serif;
        }

        .festivals-container h2 {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: #9a3412;
          margin-bottom: 2.5rem;
          letter-spacing: 1px;
        }

        .festivals-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .festivals-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .festival-card {
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .festival-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .festival-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .festival-content {
          padding: 1.5rem;
          text-align: center;
        }

        .festival-content h3 {
          font-size: 1.5rem;
          color: #b45309;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .festival-content small {
          display: block;
          color: #ea580c;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .festival-content p {
          color: #374151;
          line-height: 1.6;
          font-size: 1rem;
        }

        .festival-content button {
          margin-top: 1rem;
          padding: 0.6rem 1.3rem;
          background-color: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .festival-content button:hover {
          background-color: #9a3412;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          width: 90%;
          text-align: center;
          animation: fadeIn 0.4s ease-in-out;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }

        .modal img {
          width: 100%;
          border-radius: 0.8rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .modal h3 {
          color: #b45309;
          margin-bottom: 0.5rem;
        }

        .modal p {
          color: #444;
          line-height: 1.6;
        }

        .modal button {
          margin-top: 1rem;
          background-color: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .modal button:hover {
          background-color: #dc2626;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),a.jsx("h2",{children:"Festivals of Tamil Nadu"}),a.jsx("div",{className:"festivals-grid",children:s.map((o,c)=>a.jsxs("div",{className:"festival-card",children:[a.jsx("img",{src:o.img,alt:o.name}),a.jsxs("div",{className:"festival-content",children:[a.jsx("h3",{children:o.name}),a.jsx("small",{children:o.month}),a.jsx("p",{children:o.desc}),a.jsx("button",{onClick:()=>r(o),children:"Know More"})]})]},c))}),t&&a.jsx("div",{className:"modal-overlay",onClick:()=>r(null),children:a.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[a.jsx("img",{src:t.img,alt:t.name}),a.jsx("h3",{children:t.name}),a.jsxs("p",{children:[a.jsx("strong",{children:"Month:"})," ",t.month]}),a.jsx("p",{children:t.details}),a.jsx("button",{onClick:()=>r(null),children:"Close"})]})})]})}const Gw="/Epicure-Voyage/assets/img-DrF-urlE.webp",Xp=R.createContext({});function qw(t){const r=R.useRef(null);return r.current===null&&(r.current=t()),r.current}const su=typeof window<"u",Xw=su?R.useLayoutEffect:R.useEffect,au=R.createContext(null);function ou(t,r){t.indexOf(r)===-1&&t.push(r)}function lu(t,r){const s=t.indexOf(r);s>-1&&t.splice(s,1)}const Tn=(t,r,s)=>s>r?r:s<t?t:s;let cu=()=>{};const Pn={},Qp=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Jp(t){return typeof t=="object"&&t!==null}const Zp=t=>/^0[^.\s]+$/u.test(t);function uu(t){let r;return()=>(r===void 0&&(r=t()),r)}const Wt=t=>t,Qw=(t,r)=>s=>r(t(s)),gs=(...t)=>t.reduce(Qw),as=(t,r,s)=>{const o=r-t;return o===0?1:(s-t)/o};class du{constructor(){this.subscriptions=[]}add(r){return ou(this.subscriptions,r),()=>lu(this.subscriptions,r)}notify(r,s,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,s,o);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(r,s,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const un=t=>t*1e3,Ht=t=>t/1e3;function eg(t,r){return r?t*(1e3/r):0}const tg=(t,r,s)=>(((1-3*s+3*r)*t+(3*s-6*r))*t+3*r)*t,Jw=1e-7,Zw=12;function e2(t,r,s,o,c){let d,f,p=0;do f=r+(s-r)/2,d=tg(f,o,c)-t,d>0?s=f:r=f;while(Math.abs(d)>Jw&&++p<Zw);return f}function ys(t,r,s,o){if(t===r&&s===o)return Wt;const c=d=>e2(d,0,1,t,s);return d=>d===0||d===1?d:tg(c(d),r,o)}const ng=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,rg=t=>r=>1-t(1-r),ig=ys(.33,1.53,.69,.99),fu=rg(ig),sg=ng(fu),ag=t=>(t*=2)<1?.5*fu(t):.5*(2-Math.pow(2,-10*(t-1))),hu=t=>1-Math.sin(Math.acos(t)),og=rg(hu),lg=ng(hu),t2=ys(.42,0,1,1),n2=ys(0,0,.58,1),cg=ys(.42,0,.58,1),r2=t=>Array.isArray(t)&&typeof t[0]!="number",ug=t=>Array.isArray(t)&&typeof t[0]=="number",i2={linear:Wt,easeIn:t2,easeInOut:cg,easeOut:n2,circIn:hu,circInOut:lg,circOut:og,backIn:fu,backInOut:sg,backOut:ig,anticipate:ag},s2=t=>typeof t=="string",rm=t=>{if(ug(t)){cu(t.length===4);const[r,s,o,c]=t;return ys(r,s,o,c)}else if(s2(t))return i2[t];return t},Ma=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function a2(t,r){let s=new Set,o=new Set,c=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function g(v){f.has(v)&&(w.schedule(v),t()),v(p)}const w={schedule:(v,m=!1,S=!1)=>{const I=S&&c?s:o;return m&&f.add(v),I.has(v)||I.add(v),v},cancel:v=>{o.delete(v),f.delete(v)},process:v=>{if(p=v,c){d=!0;return}c=!0,[s,o]=[o,s],s.forEach(g),s.clear(),c=!1,d&&(d=!1,w.process(v))}};return w}const o2=40;function dg(t,r){let s=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>s=!0,f=Ma.reduce((G,le)=>(G[le]=a2(d),G),{}),{setup:p,read:g,resolveKeyframes:w,preUpdate:v,update:m,preRender:S,render:E,postRender:I}=f,A=()=>{const G=Pn.useManualTiming?c.timestamp:performance.now();s=!1,Pn.useManualTiming||(c.delta=o?1e3/60:Math.max(Math.min(G-c.timestamp,o2),1)),c.timestamp=G,c.isProcessing=!0,p.process(c),g.process(c),w.process(c),v.process(c),m.process(c),S.process(c),E.process(c),I.process(c),c.isProcessing=!1,s&&r&&(o=!1,t(A))},V=()=>{s=!0,o=!0,c.isProcessing||t(A)};return{schedule:Ma.reduce((G,le)=>{const T=f[le];return G[le]=(z,L=!1,D=!1)=>(s||V(),T.schedule(z,L,D)),G},{}),cancel:G=>{for(let le=0;le<Ma.length;le++)f[Ma[le]].cancel(G)},state:c,steps:f}}const{schedule:Fe,cancel:Qn,state:ft,steps:uc}=dg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0);let za;function l2(){za=void 0}const Pt={now:()=>(za===void 0&&Pt.set(ft.isProcessing||Pn.useManualTiming?ft.timestamp:performance.now()),za),set:t=>{za=t,queueMicrotask(l2)}},fg=t=>r=>typeof r=="string"&&r.startsWith(t),mu=fg("--"),c2=fg("var(--"),pu=t=>c2(t)?u2.test(t.split("/*")[0].trim()):!1,u2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ii={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},os={...ii,transform:t=>Tn(0,1,t)},La={...ii,default:1},Zi=t=>Math.round(t*1e5)/1e5,gu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function d2(t){return t==null}const f2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yu=(t,r)=>s=>!!(typeof s=="string"&&f2.test(s)&&s.startsWith(t)||r&&!d2(s)&&Object.prototype.hasOwnProperty.call(s,r)),hg=(t,r,s)=>o=>{if(typeof o!="string")return o;const[c,d,f,p]=o.match(gu);return{[t]:parseFloat(c),[r]:parseFloat(d),[s]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},h2=t=>Tn(0,255,t),dc={...ii,transform:t=>Math.round(h2(t))},vr={test:yu("rgb","red"),parse:hg("red","green","blue"),transform:({red:t,green:r,blue:s,alpha:o=1})=>"rgba("+dc.transform(t)+", "+dc.transform(r)+", "+dc.transform(s)+", "+Zi(os.transform(o))+")"};function m2(t){let r="",s="",o="",c="";return t.length>5?(r=t.substring(1,3),s=t.substring(3,5),o=t.substring(5,7),c=t.substring(7,9)):(r=t.substring(1,2),s=t.substring(2,3),o=t.substring(3,4),c=t.substring(4,5),r+=r,s+=s,o+=o,c+=c),{red:parseInt(r,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const Ec={test:yu("#"),parse:m2,transform:vr.transform},vs=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),qn=vs("deg"),dn=vs("%"),we=vs("px"),p2=vs("vh"),g2=vs("vw"),im={...dn,parse:t=>dn.parse(t)/100,transform:t=>dn.transform(t*100)},Yr={test:yu("hsl","hue"),parse:hg("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+dn.transform(Zi(r))+", "+dn.transform(Zi(s))+", "+Zi(os.transform(o))+")"},nt={test:t=>vr.test(t)||Ec.test(t)||Yr.test(t),parse:t=>vr.test(t)?vr.parse(t):Yr.test(t)?Yr.parse(t):Ec.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?vr.transform(t):Yr.transform(t),getAnimatableNone:t=>{const r=nt.parse(t);return r.alpha=0,nt.transform(r)}},y2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v2(t){return isNaN(t)&&typeof t=="string"&&(t.match(gu)?.length||0)+(t.match(y2)?.length||0)>0}const mg="number",pg="color",x2="var",w2="var(",sm="${}",b2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ls(t){const r=t.toString(),s=[],o={color:[],number:[],var:[]},c=[];let d=0;const p=r.replace(b2,g=>(nt.test(g)?(o.color.push(d),c.push(pg),s.push(nt.parse(g))):g.startsWith(w2)?(o.var.push(d),c.push(x2),s.push(g)):(o.number.push(d),c.push(mg),s.push(parseFloat(g))),++d,sm)).split(sm);return{values:s,split:p,indexes:o,types:c}}function gg(t){return ls(t).values}function yg(t){const{split:r,types:s}=ls(t),o=r.length;return c=>{let d="";for(let f=0;f<o;f++)if(d+=r[f],c[f]!==void 0){const p=s[f];p===mg?d+=Zi(c[f]):p===pg?d+=nt.transform(c[f]):d+=c[f]}return d}}const j2=t=>typeof t=="number"?0:nt.test(t)?nt.getAnimatableNone(t):t;function S2(t){const r=gg(t);return yg(t)(r.map(j2))}const Jn={test:v2,parse:gg,createTransformer:yg,getAnimatableNone:S2};function fc(t,r,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(r-t)*6*s:s<1/2?r:s<2/3?t+(r-t)*(2/3-s)*6:t}function k2({hue:t,saturation:r,lightness:s,alpha:o}){t/=360,r/=100,s/=100;let c=0,d=0,f=0;if(!r)c=d=f=s;else{const p=s<.5?s*(1+r):s+r-s*r,g=2*s-p;c=fc(g,p,t+1/3),d=fc(g,p,t),f=fc(g,p,t-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:o}}function $a(t,r){return s=>s>0?r:t}const $e=(t,r,s)=>t+(r-t)*s,hc=(t,r,s)=>{const o=t*t,c=s*(r*r-o)+o;return c<0?0:Math.sqrt(c)},C2=[Ec,vr,Yr],T2=t=>C2.find(r=>r.test(t));function am(t){const r=T2(t);if(!r)return!1;let s=r.parse(t);return r===Yr&&(s=k2(s)),s}const om=(t,r)=>{const s=am(t),o=am(r);if(!s||!o)return $a(t,r);const c={...s};return d=>(c.red=hc(s.red,o.red,d),c.green=hc(s.green,o.green,d),c.blue=hc(s.blue,o.blue,d),c.alpha=$e(s.alpha,o.alpha,d),vr.transform(c))},Nc=new Set(["none","hidden"]);function P2(t,r){return Nc.has(t)?s=>s<=0?t:r:s=>s>=1?r:t}function E2(t,r){return s=>$e(t,r,s)}function vu(t){return typeof t=="number"?E2:typeof t=="string"?pu(t)?$a:nt.test(t)?om:M2:Array.isArray(t)?vg:typeof t=="object"?nt.test(t)?om:N2:$a}function vg(t,r){const s=[...t],o=s.length,c=t.map((d,f)=>vu(d)(d,r[f]));return d=>{for(let f=0;f<o;f++)s[f]=c[f](d);return s}}function N2(t,r){const s={...t,...r},o={};for(const c in s)t[c]!==void 0&&r[c]!==void 0&&(o[c]=vu(t[c])(t[c],r[c]));return c=>{for(const d in o)s[d]=o[d](c);return s}}function R2(t,r){const s=[],o={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const d=r.types[c],f=t.indexes[d][o[d]],p=t.values[f]??0;s[c]=p,o[d]++}return s}const M2=(t,r)=>{const s=Jn.createTransformer(r),o=ls(t),c=ls(r);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Nc.has(t)&&!c.values.length||Nc.has(r)&&!o.values.length?P2(t,r):gs(vg(R2(o,c),c.values),s):$a(t,r)};function xg(t,r,s){return typeof t=="number"&&typeof r=="number"&&typeof s=="number"?$e(t,r,s):vu(t)(t,r)}const L2=t=>{const r=({timestamp:s})=>t(s);return{start:(s=!0)=>Fe.update(r,s),stop:()=>Qn(r),now:()=>ft.isProcessing?ft.timestamp:Pt.now()}},wg=(t,r,s=10)=>{let o="";const c=Math.max(Math.round(r/s),2);for(let d=0;d<c;d++)o+=Math.round(t(d/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Ka=2e4;function xu(t){let r=0;const s=50;let o=t.next(r);for(;!o.done&&r<Ka;)r+=s,o=t.next(r);return r>=Ka?1/0:r}function O2(t,r=100,s){const o=s({...t,keyframes:[0,r]}),c=Math.min(xu(o),Ka);return{type:"keyframes",ease:d=>o.next(c*d).value/r,duration:Ht(c)}}const A2=5;function bg(t,r,s){const o=Math.max(r-A2,0);return eg(s-t(o),r-o)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},mc=.001;function D2({duration:t=Xe.duration,bounce:r=Xe.bounce,velocity:s=Xe.velocity,mass:o=Xe.mass}){let c,d,f=1-r;f=Tn(Xe.minDamping,Xe.maxDamping,f),t=Tn(Xe.minDuration,Xe.maxDuration,Ht(t)),f<1?(c=w=>{const v=w*f,m=v*t,S=v-s,E=Rc(w,f),I=Math.exp(-m);return mc-S/E*I},d=w=>{const m=w*f*t,S=m*s+s,E=Math.pow(f,2)*Math.pow(w,2)*t,I=Math.exp(-m),A=Rc(Math.pow(w,2),f);return(-c(w)+mc>0?-1:1)*((S-E)*I)/A}):(c=w=>{const v=Math.exp(-w*t),m=(w-s)*t+1;return-mc+v*m},d=w=>{const v=Math.exp(-w*t),m=(s-w)*(t*t);return v*m});const p=5/t,g=_2(c,d,p);if(t=un(t),isNaN(g))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:t};{const w=Math.pow(g,2)*o;return{stiffness:w,damping:f*2*Math.sqrt(o*w),duration:t}}}const z2=12;function _2(t,r,s){let o=s;for(let c=1;c<z2;c++)o=o-t(o)/r(o);return o}function Rc(t,r){return t*Math.sqrt(1-r*r)}const I2=["duration","bounce"],V2=["stiffness","damping","mass"];function lm(t,r){return r.some(s=>t[s]!==void 0)}function F2(t){let r={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...t};if(!lm(t,V2)&&lm(t,I2))if(t.visualDuration){const s=t.visualDuration,o=2*Math.PI/(s*1.2),c=o*o,d=2*Tn(.05,1,1-(t.bounce||0))*Math.sqrt(c);r={...r,mass:Xe.mass,stiffness:c,damping:d}}else{const s=D2(t);r={...r,...s,mass:Xe.mass},r.isResolvedFromDuration=!0}return r}function Ya(t=Xe.visualDuration,r=Xe.bounce){const s=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:o,restDelta:c}=s;const d=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],p={done:!1,value:d},{stiffness:g,damping:w,mass:v,duration:m,velocity:S,isResolvedFromDuration:E}=F2({...s,velocity:-Ht(s.velocity||0)}),I=S||0,A=w/(2*Math.sqrt(g*v)),V=f-d,H=Ht(Math.sqrt(g/v)),K=Math.abs(V)<5;o||(o=K?Xe.restSpeed.granular:Xe.restSpeed.default),c||(c=K?Xe.restDelta.granular:Xe.restDelta.default);let G;if(A<1){const T=Rc(H,A);G=z=>{const L=Math.exp(-A*H*z);return f-L*((I+A*H*V)/T*Math.sin(T*z)+V*Math.cos(T*z))}}else if(A===1)G=T=>f-Math.exp(-H*T)*(V+(I+H*V)*T);else{const T=H*Math.sqrt(A*A-1);G=z=>{const L=Math.exp(-A*H*z),D=Math.min(T*z,300);return f-L*((I+A*H*V)*Math.sinh(D)+T*V*Math.cosh(D))/T}}const le={calculatedDuration:E&&m||null,next:T=>{const z=G(T);if(E)p.done=T>=m;else{let L=T===0?I:0;A<1&&(L=T===0?un(I):bg(G,T,z));const D=Math.abs(L)<=o,M=Math.abs(f-z)<=c;p.done=D&&M}return p.value=p.done?f:z,p},toString:()=>{const T=Math.min(xu(le),Ka),z=wg(L=>le.next(T*L).value,T,30);return T+"ms "+z},toTransition:()=>{}};return le}Ya.applyToOptions=t=>{const r=O2(t,100,Ya);return t.ease=r.ease,t.duration=un(r.duration),t.type="keyframes",t};function Mc({keyframes:t,velocity:r=0,power:s=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:g,restDelta:w=.5,restSpeed:v}){const m=t[0],S={done:!1,value:m},E=D=>p!==void 0&&D<p||g!==void 0&&D>g,I=D=>p===void 0?g:g===void 0||Math.abs(p-D)<Math.abs(g-D)?p:g;let A=s*r;const V=m+A,H=f===void 0?V:f(V);H!==V&&(A=H-m);const K=D=>-A*Math.exp(-D/o),G=D=>H+K(D),le=D=>{const M=K(D),k=G(D);S.done=Math.abs(M)<=w,S.value=S.done?H:k};let T,z;const L=D=>{E(S.value)&&(T=D,z=Ya({keyframes:[S.value,I(S.value)],velocity:bg(G,D,S.value),damping:c,stiffness:d,restDelta:w,restSpeed:v}))};return L(0),{calculatedDuration:null,next:D=>{let M=!1;return!z&&T===void 0&&(M=!0,le(D),L(D)),T!==void 0&&D>=T?z.next(D-T):(!M&&le(D),S)}}}function B2(t,r,s){const o=[],c=s||Pn.mix||xg,d=t.length-1;for(let f=0;f<d;f++){let p=c(t[f],t[f+1]);if(r){const g=Array.isArray(r)?r[f]||Wt:r;p=gs(g,p)}o.push(p)}return o}function H2(t,r,{clamp:s=!0,ease:o,mixer:c}={}){const d=t.length;if(cu(d===r.length),d===1)return()=>r[0];if(d===2&&r[0]===r[1])return()=>r[1];const f=t[0]===t[1];t[0]>t[d-1]&&(t=[...t].reverse(),r=[...r].reverse());const p=B2(r,o,c),g=p.length,w=v=>{if(f&&v<t[0])return r[0];let m=0;if(g>1)for(;m<t.length-2&&!(v<t[m+1]);m++);const S=as(t[m],t[m+1],v);return p[m](S)};return s?v=>w(Tn(t[0],t[d-1],v)):w}function W2(t,r){const s=t[t.length-1];for(let o=1;o<=r;o++){const c=as(0,r,o);t.push($e(s,1,c))}}function U2(t){const r=[0];return W2(r,t.length-1),r}function $2(t,r){return t.map(s=>s*r)}function K2(t,r){return t.map(()=>r||cg).splice(0,t.length-1)}function es({duration:t=300,keyframes:r,times:s,ease:o="easeInOut"}){const c=r2(o)?o.map(rm):rm(o),d={done:!1,value:r[0]},f=$2(s&&s.length===r.length?s:U2(r),t),p=H2(f,r,{ease:Array.isArray(c)?c:K2(r,c)});return{calculatedDuration:t,next:g=>(d.value=p(g),d.done=g>=t,d)}}const Y2=t=>t!==null;function wu(t,{repeat:r,repeatType:s="loop"},o,c=1){const d=t.filter(Y2),p=c<0||r&&s!=="loop"&&r%2===1?0:d.length-1;return!p||o===void 0?d[p]:o}const G2={decay:Mc,inertia:Mc,tween:es,keyframes:es,spring:Ya};function jg(t){typeof t.type=="string"&&(t.type=G2[t.type])}class bu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,s){return this.finished.then(r,s)}}const q2=t=>t/100;class ju extends bu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==Pt.now()&&this.tick(Pt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;jg(r);const{type:s=es,repeat:o=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=r;let{keyframes:p}=r;const g=s||es;g!==es&&typeof p[0]!="number"&&(this.mixKeyframes=gs(q2,xg(p[0],p[1])),p=[0,100]);const w=g({...r,keyframes:p});d==="mirror"&&(this.mirroredGenerator=g({...r,keyframes:[...p].reverse(),velocity:-f})),w.calculatedDuration===null&&(w.calculatedDuration=xu(w));const{calculatedDuration:v}=w;this.calculatedDuration=v,this.resolvedDuration=v+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=w}updateTime(r){const s=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(r,s=!1){const{generator:o,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:w=0,keyframes:v,repeat:m,repeatType:S,repeatDelay:E,type:I,onUpdate:A,finalKeyframe:V}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),s?this.currentTime=r:this.updateTime(r);const H=this.currentTime-w*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?H<0:H>c;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let G=this.currentTime,le=o;if(m){const D=Math.min(this.currentTime,c)/p;let M=Math.floor(D),k=D%1;!k&&D>=1&&(k=1),k===1&&M--,M=Math.min(M,m+1),!!(M%2)&&(S==="reverse"?(k=1-k,E&&(k-=E/p)):S==="mirror"&&(le=f)),G=Tn(0,1,k)*p}const T=K?{done:!1,value:v[0]}:le.next(G);d&&(T.value=d(T.value));let{done:z}=T;!K&&g!==null&&(z=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return L&&I!==Mc&&(T.value=wu(v,this.options,V,this.speed)),A&&A(T.value),L&&this.finish(),T}then(r,s){return this.finished.then(r,s)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(this.currentTime)}set time(r){r=un(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(Pt.now());const s=this.playbackSpeed!==r;this.playbackSpeed=r,s&&(this.time=Ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=L2,startTime:s}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=s??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function X2(t){for(let r=1;r<t.length;r++)t[r]??(t[r]=t[r-1])}const xr=t=>t*180/Math.PI,Lc=t=>{const r=xr(Math.atan2(t[1],t[0]));return Oc(r)},Q2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Lc,rotateZ:Lc,skewX:t=>xr(Math.atan(t[1])),skewY:t=>xr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Oc=t=>(t=t%360,t<0&&(t+=360),t),cm=Lc,um=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),dm=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),J2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:um,scaleY:dm,scale:t=>(um(t)+dm(t))/2,rotateX:t=>Oc(xr(Math.atan2(t[6],t[5]))),rotateY:t=>Oc(xr(Math.atan2(-t[2],t[0]))),rotateZ:cm,rotate:cm,skewX:t=>xr(Math.atan(t[4])),skewY:t=>xr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ac(t){return t.includes("scale")?1:0}function Dc(t,r){if(!t||t==="none")return Ac(r);const s=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(s)o=J2,c=s;else{const p=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=Q2,c=p}if(!c)return Ac(r);const d=o[r],f=c[1].split(",").map(eb);return typeof d=="function"?d(f):f[d]}const Z2=(t,r)=>{const{transform:s="none"}=getComputedStyle(t);return Dc(s,r)};function eb(t){return parseFloat(t.trim())}const si=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ai=new Set(si),fm=t=>t===ii||t===we,tb=new Set(["x","y","z"]),nb=si.filter(t=>!tb.has(t));function rb(t){const r=[];return nb.forEach(s=>{const o=t.getValue(s);o!==void 0&&(r.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))}),r}const wr={width:({x:t},{paddingLeft:r="0",paddingRight:s="0"})=>t.max-t.min-parseFloat(r)-parseFloat(s),height:({y:t},{paddingTop:r="0",paddingBottom:s="0"})=>t.max-t.min-parseFloat(r)-parseFloat(s),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:(t,{transform:r})=>Dc(r,"x"),y:(t,{transform:r})=>Dc(r,"y")};wr.translateX=wr.x;wr.translateY=wr.y;const br=new Set;let zc=!1,_c=!1,Ic=!1;function Sg(){if(_c){const t=Array.from(br).filter(o=>o.needsMeasurement),r=new Set(t.map(o=>o.element)),s=new Map;r.forEach(o=>{const c=rb(o);c.length&&(s.set(o,c),o.render())}),t.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const c=s.get(o);c&&c.forEach(([d,f])=>{o.getValue(d)?.set(f)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}_c=!1,zc=!1,br.forEach(t=>t.complete(Ic)),br.clear()}function kg(){br.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(_c=!0)})}function ib(){Ic=!0,kg(),Sg(),Ic=!1}class Su{constructor(r,s,o,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=s,this.name=o,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(br.add(this),zc||(zc=!0,Fe.read(kg),Fe.resolveKeyframes(Sg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:s,element:o,motionValue:c}=this;if(r[0]===null){const d=c?.get(),f=r[r.length-1];if(d!==void 0)r[0]=d;else if(o&&s){const p=o.readValue(s,f);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=f),c&&d===void 0&&c.set(r[0])}X2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),br.delete(this)}cancel(){this.state==="scheduled"&&(br.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sb=t=>t.startsWith("--");function ab(t,r,s){sb(r)?t.style.setProperty(r,s):t.style[r]=s}const ob=uu(()=>window.ScrollTimeline!==void 0),lb={};function cb(t,r){const s=uu(t);return()=>lb[r]??s()}const Cg=cb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ji=([t,r,s,o])=>`cubic-bezier(${t}, ${r}, ${s}, ${o})`,hm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ji([0,.65,.55,1]),circOut:Ji([.55,0,1,.45]),backIn:Ji([.31,.01,.66,-.59]),backOut:Ji([.33,1.53,.69,.99])};function Tg(t,r){if(t)return typeof t=="function"?Cg()?wg(t,r):"ease-out":ug(t)?Ji(t):Array.isArray(t)?t.map(s=>Tg(s,r)||hm.easeOut):hm[t]}function ub(t,r,s,{delay:o=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:g}={},w=void 0){const v={[r]:s};g&&(v.offset=g);const m=Tg(p,c);Array.isArray(m)&&(v.easing=m);const S={delay:o,duration:c,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return w&&(S.pseudoElement=w),t.animate(v,S)}function Pg(t){return typeof t=="function"&&"applyToOptions"in t}function db({type:t,...r}){return Pg(t)&&Cg()?t.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class fb extends bu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:s,name:o,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:g}=r;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=r,cu(typeof r.type!="string");const w=db(r);this.animation=ub(s,o,c,w,d),w.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const v=wu(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(v):ab(s,o,v),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Ht(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Ht(r)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=un(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&ob()?(this.animation.timeline=r,Wt):s(this)}}const Eg={anticipate:ag,backInOut:sg,circInOut:lg};function hb(t){return t in Eg}function mb(t){typeof t.ease=="string"&&hb(t.ease)&&(t.ease=Eg[t.ease])}const mm=10;class pb extends fb{constructor(r){mb(r),jg(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:s,onUpdate:o,onComplete:c,element:d,...f}=this.options;if(!s)return;if(r!==void 0){s.set(r);return}const p=new ju({...f,autoplay:!1}),g=un(this.finishedTime??this.time);s.setWithVelocity(p.sample(g-mm).value,p.sample(g).value,mm),p.stop()}}const pm=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Jn.test(t)||t==="0")&&!t.startsWith("url("));function gb(t){const r=t[0];if(t.length===1)return!0;for(let s=0;s<t.length;s++)if(t[s]!==r)return!0}function yb(t,r,s,o){const c=t[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const d=t[t.length-1],f=pm(c,r),p=pm(d,r);return!f||!p?!1:gb(t)||(s==="spring"||Pg(s))&&o}function Vc(t){t.duration=0,t.type="keyframes"}const vb=new Set(["opacity","clipPath","filter","transform"]),xb=uu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function wb(t){const{motionValue:r,name:s,repeatDelay:o,repeatType:c,damping:d,type:f}=t;if(!(r?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:w}=r.owner.getProps();return xb()&&s&&vb.has(s)&&(s!=="transform"||!w)&&!g&&!o&&c!=="mirror"&&d!==0&&f!=="inertia"}const bb=40;class jb extends bu{constructor({autoplay:r=!0,delay:s=0,type:o="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:g,motionValue:w,element:v,...m}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Pt.now();const S={autoplay:r,delay:s,type:o,repeat:c,repeatDelay:d,repeatType:f,name:g,motionValue:w,element:v,...m},E=v?.KeyframeResolver||Su;this.keyframeResolver=new E(p,(I,A,V)=>this.onKeyframesResolved(I,A,S,!V),g,w,v),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,s,o,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:g,isHandoff:w,onUpdate:v}=o;this.resolvedAt=Pt.now(),yb(r,d,f,p)||((Pn.instantAnimations||!g)&&v?.(wu(r,o,s)),r[0]=r[r.length-1],Vc(o),o.repeat=0);const S={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>bb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...o,keyframes:r},E=!w&&wb(S)?new pb({...S,element:S.motionValue.owner.current}):new ju(S);E.finished.then(()=>this.notifyFinished()).catch(Wt),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(r,s){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ib()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Sb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kb(t){const r=Sb.exec(t);if(!r)return[,];const[,s,o,c]=r;return[`--${s??o}`,c]}function Ng(t,r,s=1){const[o,c]=kb(t);if(!o)return;const d=window.getComputedStyle(r).getPropertyValue(o);if(d){const f=d.trim();return Qp(f)?parseFloat(f):f}return pu(c)?Ng(c,r,s+1):c}function ku(t,r){return t?.[r]??t?.default??t}const Rg=new Set(["width","height","top","left","right","bottom",...si]),Cb={test:t=>t==="auto",parse:t=>t},Mg=t=>r=>r.test(t),Lg=[ii,we,dn,qn,g2,p2,Cb],gm=t=>Lg.find(Mg(t));function Tb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Zp(t):!0}const Pb=new Set(["brightness","contrast","saturate","opacity"]);function Eb(t){const[r,s]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[o]=s.match(gu)||[];if(!o)return t;const c=s.replace(o,"");let d=Pb.has(r)?1:0;return o!==s&&(d*=100),r+"("+d+c+")"}const Nb=/\b([a-z-]*)\(.*?\)/gu,Fc={...Jn,getAnimatableNone:t=>{const r=t.match(Nb);return r?r.map(Eb).join(" "):t}},ym={...ii,transform:Math.round},Rb={rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:La,scaleX:La,scaleY:La,scaleZ:La,skew:qn,skewX:qn,skewY:qn,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:os,originX:im,originY:im,originZ:we},Cu={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we,...Rb,zIndex:ym,fillOpacity:os,strokeOpacity:os,numOctaves:ym},Mb={...Cu,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:Fc,WebkitFilter:Fc},Og=t=>Mb[t];function Ag(t,r){let s=Og(t);return s!==Fc&&(s=Jn),s.getAnimatableNone?s.getAnimatableNone(r):void 0}const Lb=new Set(["auto","none","0"]);function Ob(t,r,s){let o=0,c;for(;o<t.length&&!c;){const d=t[o];typeof d=="string"&&!Lb.has(d)&&ls(d).values.length&&(c=t[o]),o++}if(c&&s)for(const d of r)t[d]=Ag(s,c)}class Ab extends Su{constructor(r,s,o,c,d){super(r,s,o,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:s,name:o}=this;if(!s||!s.current)return;super.readKeyframes();for(let g=0;g<r.length;g++){let w=r[g];if(typeof w=="string"&&(w=w.trim(),pu(w))){const v=Ng(w,s.current);v!==void 0&&(r[g]=v),g===r.length-1&&(this.finalKeyframe=w)}}if(this.resolveNoneKeyframes(),!Rg.has(o)||r.length!==2)return;const[c,d]=r,f=gm(c),p=gm(d);if(f!==p)if(fm(f)&&fm(p))for(let g=0;g<r.length;g++){const w=r[g];typeof w=="string"&&(r[g]=parseFloat(w))}else wr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:s}=this,o=[];for(let c=0;c<r.length;c++)(r[c]===null||Tb(r[c]))&&o.push(c);o.length&&Ob(r,o,s)}measureInitialState(){const{element:r,unresolvedKeyframes:s,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wr[o](r.measureViewportBox(),window.getComputedStyle(r.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&r.getValue(o,c).jump(c,!1)}measureEndState(){const{element:r,name:s,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const c=r.getValue(s);c&&c.jump(this.measuredOrigin,!1);const d=o.length-1,f=o[d];o[d]=wr[s](r.measureViewportBox(),window.getComputedStyle(r.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,g])=>{r.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function Db(t,r,s){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let o=document;const c=s?.[t]??o.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}const Dg=(t,r)=>r&&typeof t=="number"?r.transform(t):t;function zb(t){return Jp(t)&&"offsetHeight"in t}const vm=30,_b=t=>!isNaN(parseFloat(t));class Ib{constructor(r,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const c=Pt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=s.owner}setCurrent(r){this.current=r,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=_b(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,s){this.events[r]||(this.events[r]=new du);const o=this.events[r].add(s);return r==="change"?()=>{o(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,s){this.passiveEffect=r,this.stopPassiveEffect=s}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,s,o){this.set(s),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,s=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>vm)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,vm);return eg(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(r){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=r(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ei(t,r){return new Ib(t,r)}const{schedule:Tu}=dg(queueMicrotask,!1),Jt={x:!1,y:!1};function zg(){return Jt.x||Jt.y}function Vb(t){return t==="x"||t==="y"?Jt[t]?null:(Jt[t]=!0,()=>{Jt[t]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function _g(t,r){const s=Db(t),o=new AbortController,c={passive:!0,...r,signal:o.signal};return[s,c,()=>o.abort()]}function xm(t){return!(t.pointerType==="touch"||zg())}function Fb(t,r,s={}){const[o,c,d]=_g(t,s),f=p=>{if(!xm(p))return;const{target:g}=p,w=r(g,p);if(typeof w!="function"||!g)return;const v=m=>{xm(m)&&(w(m),g.removeEventListener("pointerleave",v))};g.addEventListener("pointerleave",v,c)};return o.forEach(p=>{p.addEventListener("pointerenter",f,c)}),d}const Ig=(t,r)=>r?t===r?!0:Ig(t,r.parentElement):!1,Pu=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Bb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Hb(t){return Bb.has(t.tagName)||t.tabIndex!==-1}const _a=new WeakSet;function wm(t){return r=>{r.key==="Enter"&&t(r)}}function pc(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const Wb=(t,r)=>{const s=t.currentTarget;if(!s)return;const o=wm(()=>{if(_a.has(s))return;pc(s,"down");const c=wm(()=>{pc(s,"up")}),d=()=>pc(s,"cancel");s.addEventListener("keyup",c,r),s.addEventListener("blur",d,r)});s.addEventListener("keydown",o,r),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),r)};function bm(t){return Pu(t)&&!zg()}function Ub(t,r,s={}){const[o,c,d]=_g(t,s),f=p=>{const g=p.currentTarget;if(!bm(p))return;_a.add(g);const w=r(g,p),v=(E,I)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",S),_a.has(g)&&_a.delete(g),bm(E)&&typeof w=="function"&&w(E,{success:I})},m=E=>{v(E,g===window||g===document||s.useGlobalTarget||Ig(g,E.target))},S=E=>{v(E,!1)};window.addEventListener("pointerup",m,c),window.addEventListener("pointercancel",S,c)};return o.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",f,c),zb(p)&&(p.addEventListener("focus",w=>Wb(w,c)),!Hb(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function Vg(t){return Jp(t)&&"ownerSVGElement"in t}function $b(t){return Vg(t)&&t.tagName==="svg"}const yt=t=>!!(t&&t.getVelocity),Kb=[...Lg,nt,Jn],Yb=t=>Kb.find(Mg(t)),Fg=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Gb(t=!0){const r=R.useContext(au);if(r===null)return[!0,null];const{isPresent:s,onExitComplete:o,register:c}=r,d=R.useId();R.useEffect(()=>{if(t)return c(d)},[t]);const f=R.useCallback(()=>t&&o&&o(d),[d,o,t]);return!s&&o?[!1,f]:[!0]}const Bg=R.createContext({strict:!1}),jm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ti={};for(const t in jm)ti[t]={isEnabled:r=>jm[t].some(s=>!!r[s])};function qb(t){for(const r in t)ti[r]={...ti[r],...t[r]}}const Xb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ga(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Xb.has(t)}let Hg=t=>!Ga(t);function Qb(t){typeof t=="function"&&(Hg=r=>r.startsWith("on")?!Ga(r):t(r))}try{Qb(require("@emotion/is-prop-valid").default)}catch{}function Jb(t,r,s){const o={};for(const c in t)c==="values"&&typeof t.values=="object"||(Hg(c)||s===!0&&Ga(c)||!r&&!Ga(c)||t.draggable&&c.startsWith("onDrag"))&&(o[c]=t[c]);return o}const to=R.createContext({});function no(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function cs(t){return typeof t=="string"||Array.isArray(t)}const Eu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nu=["initial",...Eu];function ro(t){return no(t.animate)||Nu.some(r=>cs(t[r]))}function Wg(t){return!!(ro(t)||t.variants)}function Zb(t,r){if(ro(t)){const{initial:s,animate:o}=t;return{initial:s===!1||cs(s)?s:void 0,animate:cs(o)?o:void 0}}return t.inherit!==!1?r:{}}function ej(t){const{initial:r,animate:s}=Zb(t,R.useContext(to));return R.useMemo(()=>({initial:r,animate:s}),[Sm(r),Sm(s)])}function Sm(t){return Array.isArray(t)?t.join(" "):t}const us={};function tj(t){for(const r in t)us[r]=t[r],mu(r)&&(us[r].isCSSVariable=!0)}function Ug(t,{layout:r,layoutId:s}){return ai.has(t)||t.startsWith("origin")||(r||s!==void 0)&&(!!us[t]||t==="opacity")}const nj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rj=si.length;function ij(t,r,s){let o="",c=!0;for(let d=0;d<rj;d++){const f=si[d],p=t[f];if(p===void 0)continue;let g=!0;if(typeof p=="number"?g=p===(f.startsWith("scale")?1:0):g=parseFloat(p)===0,!g||s){const w=Dg(p,Cu[f]);if(!g){c=!1;const v=nj[f]||f;o+=`${v}(${w}) `}s&&(r[f]=w)}}return o=o.trim(),s?o=s(r,c?"":o):c&&(o="none"),o}function Ru(t,r,s){const{style:o,vars:c,transformOrigin:d}=t;let f=!1,p=!1;for(const g in r){const w=r[g];if(ai.has(g)){f=!0;continue}else if(mu(g)){c[g]=w;continue}else{const v=Dg(w,Cu[g]);g.startsWith("origin")?(p=!0,d[g]=v):o[g]=v}}if(r.transform||(f||s?o.transform=ij(r,t.transform,s):o.transform&&(o.transform="none")),p){const{originX:g="50%",originY:w="50%",originZ:v=0}=d;o.transformOrigin=`${g} ${w} ${v}`}}const Mu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $g(t,r,s){for(const o in r)!yt(r[o])&&!Ug(o,s)&&(t[o]=r[o])}function sj({transformTemplate:t},r){return R.useMemo(()=>{const s=Mu();return Ru(s,r,t),Object.assign({},s.vars,s.style)},[r])}function aj(t,r){const s=t.style||{},o={};return $g(o,s,t),Object.assign(o,sj(t,r)),o}function oj(t,r){const s={},o=aj(t,r);return t.drag&&t.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(s.tabIndex=0),s.style=o,s}const lj={offset:"stroke-dashoffset",array:"stroke-dasharray"},cj={offset:"strokeDashoffset",array:"strokeDasharray"};function uj(t,r,s=1,o=0,c=!0){t.pathLength=1;const d=c?lj:cj;t[d.offset]=we.transform(-o);const f=we.transform(r),p=we.transform(s);t[d.array]=`${f} ${p}`}function Kg(t,{attrX:r,attrY:s,attrScale:o,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...p},g,w,v){if(Ru(t,p,w),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:m,style:S}=t;m.transform&&(S.transform=m.transform,delete m.transform),(S.transform||m.transformOrigin)&&(S.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),S.transform&&(S.transformBox=v?.transformBox??"fill-box",delete m.transformBox),r!==void 0&&(m.x=r),s!==void 0&&(m.y=s),o!==void 0&&(m.scale=o),c!==void 0&&uj(m,c,d,f,!1)}const Yg=()=>({...Mu(),attrs:{}}),Gg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function dj(t,r,s,o){const c=R.useMemo(()=>{const d=Yg();return Kg(d,r,Gg(o),t.transformTemplate,t.style),{...d.attrs,style:{...d.style}}},[r]);if(t.style){const d={};$g(d,t.style,t),c.style={...d,...c.style}}return c}const fj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lu(t){return typeof t!="string"||t.includes("-")?!1:!!(fj.indexOf(t)>-1||/[A-Z]/u.test(t))}function hj(t,r,s,{latestValues:o},c,d=!1){const p=(Lu(t)?dj:oj)(r,o,c,t),g=Jb(r,typeof t=="string",d),w=t!==R.Fragment?{...g,...p,ref:s}:{},{children:v}=r,m=R.useMemo(()=>yt(v)?v.get():v,[v]);return R.createElement(t,{...w,children:m})}function km(t){const r=[{},{}];return t?.values.forEach((s,o)=>{r[0][o]=s.get(),r[1][o]=s.getVelocity()}),r}function Ou(t,r,s,o){if(typeof r=="function"){const[c,d]=km(o);r=r(s!==void 0?s:t.custom,c,d)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[c,d]=km(o);r=r(s!==void 0?s:t.custom,c,d)}return r}function Ia(t){return yt(t)?t.get():t}function mj({scrapeMotionValuesFromProps:t,createRenderState:r},s,o,c){return{latestValues:pj(s,o,c,t),renderState:r()}}function pj(t,r,s,o){const c={},d=o(t,{});for(const S in d)c[S]=Ia(d[S]);let{initial:f,animate:p}=t;const g=ro(t),w=Wg(t);r&&w&&!g&&t.inherit!==!1&&(f===void 0&&(f=r.initial),p===void 0&&(p=r.animate));let v=s?s.initial===!1:!1;v=v||f===!1;const m=v?p:f;if(m&&typeof m!="boolean"&&!no(m)){const S=Array.isArray(m)?m:[m];for(let E=0;E<S.length;E++){const I=Ou(t,S[E]);if(I){const{transitionEnd:A,transition:V,...H}=I;for(const K in H){let G=H[K];if(Array.isArray(G)){const le=v?G.length-1:0;G=G[le]}G!==null&&(c[K]=G)}for(const K in A)c[K]=A[K]}}}return c}const qg=t=>(r,s)=>{const o=R.useContext(to),c=R.useContext(au),d=()=>mj(t,r,o,c);return s?d():qw(d)};function Au(t,r,s){const{style:o}=t,c={};for(const d in o)(yt(o[d])||r.style&&yt(r.style[d])||Ug(d,t)||s?.getValue(d)?.liveStyle!==void 0)&&(c[d]=o[d]);return c}const gj=qg({scrapeMotionValuesFromProps:Au,createRenderState:Mu});function Xg(t,r,s){const o=Au(t,r,s);for(const c in t)if(yt(t[c])||yt(r[c])){const d=si.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[d]=t[c]}return o}const yj=qg({scrapeMotionValuesFromProps:Xg,createRenderState:Yg}),vj=Symbol.for("motionComponentSymbol");function Gr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function xj(t,r,s){return R.useCallback(o=>{o&&t.onMount&&t.onMount(o),r&&(o?r.mount(o):r.unmount()),s&&(typeof s=="function"?s(o):Gr(s)&&(s.current=o))},[r])}const Du=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wj="framerAppearId",Qg="data-"+Du(wj),Jg=R.createContext({});function bj(t,r,s,o,c){const{visualElement:d}=R.useContext(to),f=R.useContext(Bg),p=R.useContext(au),g=R.useContext(Fg).reducedMotion,w=R.useRef(null);o=o||f.renderer,!w.current&&o&&(w.current=o(t,{visualState:r,parent:d,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g}));const v=w.current,m=R.useContext(Jg);v&&!v.projection&&c&&(v.type==="html"||v.type==="svg")&&jj(w.current,s,c,m);const S=R.useRef(!1);R.useInsertionEffect(()=>{v&&S.current&&v.update(s,p)});const E=s[Qg],I=R.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return Xw(()=>{v&&(S.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),I.current&&v.animationState&&v.animationState.animateChanges())}),R.useEffect(()=>{v&&(!I.current&&v.animationState&&v.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),I.current=!1),v.enteringChildren=void 0)}),v}function jj(t,r,s,o){const{layoutId:c,layout:d,drag:f,dragConstraints:p,layoutScroll:g,layoutRoot:w,layoutCrossfade:v}=r;t.projection=new s(t.latestValues,r["data-framer-portal-id"]?void 0:Zg(t.parent)),t.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||p&&Gr(p),visualElement:t,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:v,layoutScroll:g,layoutRoot:w})}function Zg(t){if(t)return t.options.allowProjection!==!1?t.projection:Zg(t.parent)}function gc(t,{forwardMotionProps:r=!1}={},s,o){s&&qb(s);const c=Lu(t)?yj:gj;function d(p,g){let w;const v={...R.useContext(Fg),...p,layoutId:Sj(p)},{isStatic:m}=v,S=ej(p),E=c(p,m);if(!m&&su){kj();const I=Cj(v);w=I.MeasureLayout,S.visualElement=bj(t,E,v,o,I.ProjectionNode)}return a.jsxs(to.Provider,{value:S,children:[w&&S.visualElement?a.jsx(w,{visualElement:S.visualElement,...v}):null,hj(t,p,xj(E,S.visualElement,g),E,m,r)]})}d.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const f=R.forwardRef(d);return f[vj]=t,f}function Sj({layoutId:t}){const r=R.useContext(Xp).id;return r&&t!==void 0?r+"-"+t:t}function kj(t,r){R.useContext(Bg).strict}function Cj(t){const{drag:r,layout:s}=ti;if(!r&&!s)return{};const o={...r,...s};return{MeasureLayout:r?.isEnabled(t)||s?.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function Tj(t,r){if(typeof Proxy>"u")return gc;const s=new Map,o=(d,f)=>gc(d,f,t,r),c=(d,f)=>o(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?o:(s.has(f)||s.set(f,gc(f,void 0,t,r)),s.get(f))})}function e0({top:t,left:r,right:s,bottom:o}){return{x:{min:r,max:s},y:{min:t,max:o}}}function Pj({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function Ej(t,r){if(!r)return t;const s=r({x:t.left,y:t.top}),o=r({x:t.right,y:t.bottom});return{top:s.y,left:s.x,bottom:o.y,right:o.x}}function yc(t){return t===void 0||t===1}function Bc({scale:t,scaleX:r,scaleY:s}){return!yc(t)||!yc(r)||!yc(s)}function yr(t){return Bc(t)||t0(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function t0(t){return Cm(t.x)||Cm(t.y)}function Cm(t){return t&&t!=="0%"}function qa(t,r,s){const o=t-s,c=r*o;return s+c}function Tm(t,r,s,o,c){return c!==void 0&&(t=qa(t,c,o)),qa(t,s,o)+r}function Hc(t,r=0,s=1,o,c){t.min=Tm(t.min,r,s,o,c),t.max=Tm(t.max,r,s,o,c)}function n0(t,{x:r,y:s}){Hc(t.x,r.translate,r.scale,r.originPoint),Hc(t.y,s.translate,s.scale,s.originPoint)}const Pm=.999999999999,Em=1.0000000000001;function Nj(t,r,s,o=!1){const c=s.length;if(!c)return;r.x=r.y=1;let d,f;for(let p=0;p<c;p++){d=s[p],f=d.projectionDelta;const{visualElement:g}=d.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Xr(t,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(r.x*=f.x.scale,r.y*=f.y.scale,n0(t,f)),o&&yr(d.latestValues)&&Xr(t,d.latestValues))}r.x<Em&&r.x>Pm&&(r.x=1),r.y<Em&&r.y>Pm&&(r.y=1)}function qr(t,r){t.min=t.min+r,t.max=t.max+r}function Nm(t,r,s,o,c=.5){const d=$e(t.min,t.max,c);Hc(t,r,s,d,o)}function Xr(t,r){Nm(t.x,r.x,r.scaleX,r.scale,r.originX),Nm(t.y,r.y,r.scaleY,r.scale,r.originY)}function r0(t,r){return e0(Ej(t.getBoundingClientRect(),r))}function Rj(t,r,s){const o=r0(t,s),{scroll:c}=r;return c&&(qr(o.x,c.offset.x),qr(o.y,c.offset.y)),o}const Rm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qr=()=>({x:Rm(),y:Rm()}),Mm=()=>({min:0,max:0}),Ze=()=>({x:Mm(),y:Mm()}),Wc={current:null},i0={current:!1};function Mj(){if(i0.current=!0,!!su)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>Wc.current=t.matches;t.addEventListener("change",r),r()}else Wc.current=!1}const Lj=new WeakMap;function Oj(t,r,s){for(const o in r){const c=r[o],d=s[o];if(yt(c))t.addValue(o,c);else if(yt(d))t.addValue(o,ei(c,{owner:t}));else if(d!==c)if(t.hasValue(o)){const f=t.getValue(o);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=t.getStaticValue(o);t.addValue(o,ei(f!==void 0?f:c,{owner:t}))}}for(const o in s)r[o]===void 0&&t.removeValue(o);return r}const Lm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Aj{scrapeMotionValuesFromProps(r,s,o){return{}}constructor({parent:r,props:s,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Su,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Pt.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Fe.render(this.render,!1,!0))};const{latestValues:g,renderState:w}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=w,this.parent=r,this.props=s,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=ro(s),this.isVariantNode=Wg(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(s,{},this);for(const S in m){const E=m[S];g[S]!==void 0&&yt(E)&&E.set(g[S])}}mount(r){this.current=r,Lj.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),i0.current||Mj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wc.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const s=this.features[r];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,s){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const o=ai.has(r);o&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",f=>{this.latestValues[r]=f,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,s)),this.valueSubscriptions.set(r,()=>{c(),d&&d(),s.owner&&s.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in ti){const s=ti[r];if(!s)continue;const{isEnabled:o,Feature:c}=s;if(!this.features[r]&&c&&o(this.props)&&(this.features[r]=new c(this)),this.features[r]){const d=this.features[r];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ze()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,s){this.latestValues[r]=s}update(r,s){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let o=0;o<Lm.length;o++){const c=Lm[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=r[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Oj(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(r),()=>s.variantChildren.delete(r)}addValue(r,s){const o=this.values.get(r);s!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,s),this.values.set(r,s),this.latestValues[r]=s.get())}removeValue(r){this.values.delete(r);const s=this.valueSubscriptions.get(r);s&&(s(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,s){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&s!==void 0&&(o=ei(s===null?void 0:s,{owner:this}),this.addValue(r,o)),o}readValue(r,s){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(Qp(o)||Zp(o))?o=parseFloat(o):!Yb(o)&&Jn.test(s)&&(o=Ag(r,s)),this.setBaseTarget(r,yt(o)?o.get():o)),yt(o)?o.get():o}setBaseTarget(r,s){this.baseTarget[r]=s}getBaseTarget(r){const{initial:s}=this.props;let o;if(typeof s=="string"||typeof s=="object"){const d=Ou(this.props,s,this.presenceContext?.custom);d&&(o=d[r])}if(s&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!yt(c)?c:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,s){return this.events[r]||(this.events[r]=new du),this.events[r].add(s)}notify(r,...s){this.events[r]&&this.events[r].notify(...s)}scheduleRenderMicrotask(){Tu.render(this.render)}}class s0 extends Aj{constructor(){super(...arguments),this.KeyframeResolver=Ab}sortInstanceNodePosition(r,s){return r.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(r,s){return r.style?r.style[s]:void 0}removeValueFromRenderState(r,{vars:s,style:o}){delete s[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;yt(r)&&(this.childSubscription=r.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function a0(t,{style:r,vars:s},o,c){const d=t.style;let f;for(f in r)d[f]=r[f];c?.applyProjectionStyles(d,o);for(f in s)d.setProperty(f,s[f])}function Dj(t){return window.getComputedStyle(t)}class zj extends s0{constructor(){super(...arguments),this.type="html",this.renderInstance=a0}readValueFromInstance(r,s){if(ai.has(s))return this.projection?.isProjecting?Ac(s):Z2(r,s);{const o=Dj(r),c=(mu(s)?o.getPropertyValue(s):o[s])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:s}){return r0(r,s)}build(r,s,o){Ru(r,s,o.transformTemplate)}scrapeMotionValuesFromProps(r,s,o){return Au(r,s,o)}}const o0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _j(t,r,s,o){a0(t,r,void 0,o);for(const c in r.attrs)t.setAttribute(o0.has(c)?c:Du(c),r.attrs[c])}class Ij extends s0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ze}getBaseTargetFromProps(r,s){return r[s]}readValueFromInstance(r,s){if(ai.has(s)){const o=Og(s);return o&&o.default||0}return s=o0.has(s)?s:Du(s),r.getAttribute(s)}scrapeMotionValuesFromProps(r,s,o){return Xg(r,s,o)}build(r,s,o){Kg(r,s,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,s,o,c){_j(r,s,o,c)}mount(r){this.isSVGTag=Gg(r.tagName),super.mount(r)}}const Vj=(t,r)=>Lu(t)?new Ij(r):new zj(r,{allowProjection:t!==R.Fragment});function Jr(t,r,s){const o=t.getProps();return Ou(o,r,s!==void 0?s:o.custom,t)}const Uc=t=>Array.isArray(t);function Fj(t,r,s){t.hasValue(r)?t.getValue(r).set(s):t.addValue(r,ei(s))}function Bj(t){return Uc(t)?t[t.length-1]||0:t}function Hj(t,r){const s=Jr(t,r);let{transitionEnd:o={},transition:c={},...d}=s||{};d={...d,...o};for(const f in d){const p=Bj(d[f]);Fj(t,f,p)}}function Wj(t){return!!(yt(t)&&t.add)}function $c(t,r){const s=t.getValue("willChange");if(Wj(s))return s.add(r);if(!s&&Pn.WillChange){const o=new Pn.WillChange("auto");t.addValue("willChange",o),o.add(r)}}function l0(t){return t.props[Qg]}const Uj=t=>t!==null;function $j(t,{repeat:r,repeatType:s="loop"},o){const c=t.filter(Uj),d=r&&s!=="loop"&&r%2===1?0:c.length-1;return c[d]}const Kj={type:"spring",stiffness:500,damping:25,restSpeed:10},Yj=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Gj={type:"keyframes",duration:.8},qj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Xj=(t,{keyframes:r})=>r.length>2?Gj:ai.has(t)?t.startsWith("scale")?Yj(r[1]):Kj:qj;function Qj({when:t,delay:r,delayChildren:s,staggerChildren:o,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:p,from:g,elapsed:w,...v}){return!!Object.keys(v).length}const zu=(t,r,s,o={},c,d)=>f=>{const p=ku(o,t)||{},g=p.delay||o.delay||0;let{elapsed:w=0}=o;w=w-un(g);const v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-w,onUpdate:S=>{r.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:t,motionValue:r,element:d?void 0:c};Qj(p)||Object.assign(v,Xj(t,v)),v.duration&&(v.duration=un(v.duration)),v.repeatDelay&&(v.repeatDelay=un(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let m=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(Vc(v),v.delay===0&&(m=!0)),(Pn.instantAnimations||Pn.skipAnimations)&&(m=!0,Vc(v),v.delay=0),v.allowFlatten=!p.type&&!p.ease,m&&!d&&r.get()!==void 0){const S=$j(v.keyframes,p);if(S!==void 0){Fe.update(()=>{v.onUpdate(S),v.onComplete()});return}}return p.isSync?new ju(v):new jb(v)};function Jj({protectedKeys:t,needsAnimating:r},s){const o=t.hasOwnProperty(s)&&r[s]!==!0;return r[s]=!1,o}function c0(t,r,{delay:s=0,transitionOverride:o,type:c}={}){let{transition:d=t.getDefaultTransition(),transitionEnd:f,...p}=r;o&&(d=o);const g=[],w=c&&t.animationState&&t.animationState.getState()[c];for(const v in p){const m=t.getValue(v,t.latestValues[v]??null),S=p[v];if(S===void 0||w&&Jj(w,v))continue;const E={delay:s,...ku(d||{},v)},I=m.get();if(I!==void 0&&!m.isAnimating&&!Array.isArray(S)&&S===I&&!E.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const H=l0(t);if(H){const K=window.MotionHandoffAnimation(H,v,Fe);K!==null&&(E.startTime=K,A=!0)}}$c(t,v),m.start(zu(v,m,S,t.shouldReduceMotion&&Rg.has(v)?{type:!1}:E,t,A));const V=m.animation;V&&g.push(V)}return f&&Promise.all(g).then(()=>{Fe.update(()=>{f&&Hj(t,f)})}),g}function u0(t,r,s,o=0,c=1){const d=Array.from(t).sort((w,v)=>w.sortNodePosition(v)).indexOf(r),f=t.size,p=(f-1)*o;return typeof s=="function"?s(d,f):c===1?d*o:p-d*o}function Kc(t,r,s={}){const o=Jr(t,r,s.type==="exit"?t.presenceContext?.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=o||{};s.transitionOverride&&(c=s.transitionOverride);const d=o?()=>Promise.all(c0(t,o,s)):()=>Promise.resolve(),f=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:w=0,staggerChildren:v,staggerDirection:m}=c;return Zj(t,r,g,w,v,m,s)}:()=>Promise.resolve(),{when:p}=c;if(p){const[g,w]=p==="beforeChildren"?[d,f]:[f,d];return g().then(()=>w())}else return Promise.all([d(),f(s.delay)])}function Zj(t,r,s=0,o=0,c=0,d=1,f){const p=[];for(const g of t.variantChildren)g.notify("AnimationStart",r),p.push(Kc(g,r,{...f,delay:s+(typeof o=="function"?0:o)+u0(t.variantChildren,g,o,c,d)}).then(()=>g.notify("AnimationComplete",r)));return Promise.all(p)}function eS(t,r,s={}){t.notify("AnimationStart",r);let o;if(Array.isArray(r)){const c=r.map(d=>Kc(t,d,s));o=Promise.all(c)}else if(typeof r=="string")o=Kc(t,r,s);else{const c=typeof r=="function"?Jr(t,r,s.custom):r;o=Promise.all(c0(t,c,s))}return o.then(()=>{t.notify("AnimationComplete",r)})}function d0(t,r){if(!Array.isArray(r))return!1;const s=r.length;if(s!==t.length)return!1;for(let o=0;o<s;o++)if(r[o]!==t[o])return!1;return!0}const tS=Nu.length;function f0(t){if(!t)return;if(!t.isControllingVariants){const s=t.parent?f0(t.parent)||{}:{};return t.props.initial!==void 0&&(s.initial=t.props.initial),s}const r={};for(let s=0;s<tS;s++){const o=Nu[s],c=t.props[o];(cs(c)||c===!1)&&(r[o]=c)}return r}const nS=[...Eu].reverse(),rS=Eu.length;function iS(t){return r=>Promise.all(r.map(({animation:s,options:o})=>eS(t,s,o)))}function sS(t){let r=iS(t),s=Om(),o=!0;const c=g=>(w,v)=>{const m=Jr(t,v,g==="exit"?t.presenceContext?.custom:void 0);if(m){const{transition:S,transitionEnd:E,...I}=m;w={...w,...I,...E}}return w};function d(g){r=g(t)}function f(g){const{props:w}=t,v=f0(t.parent)||{},m=[],S=new Set;let E={},I=1/0;for(let V=0;V<rS;V++){const H=nS[V],K=s[H],G=w[H]!==void 0?w[H]:v[H],le=cs(G),T=H===g?K.isActive:null;T===!1&&(I=V);let z=G===v[H]&&G!==w[H]&&le;if(z&&o&&t.manuallyAnimateOnMount&&(z=!1),K.protectedKeys={...E},!K.isActive&&T===null||!G&&!K.prevProp||no(G)||typeof G=="boolean")continue;const L=aS(K.prevProp,G);let D=L||H===g&&K.isActive&&!z&&le||V>I&&le,M=!1;const k=Array.isArray(G)?G:[G];let $=k.reduce(c(H),{});T===!1&&($={});const{prevResolvedValues:Z={}}=K,F={...Z,...$},q=x=>{D=!0,S.has(x)&&(M=!0,S.delete(x)),K.needsAnimating[x]=!0;const Q=t.getValue(x);Q&&(Q.liveStyle=!1)};for(const x in F){const Q=$[x],N=Z[x];if(E.hasOwnProperty(x))continue;let y=!1;Uc(Q)&&Uc(N)?y=!d0(Q,N):y=Q!==N,y?Q!=null?q(x):S.add(x):Q!==void 0&&S.has(x)?q(x):K.protectedKeys[x]=!0}K.prevProp=G,K.prevResolvedValues=$,K.isActive&&(E={...E,...$}),o&&t.blockInitialAnimation&&(D=!1);const ee=z&&L;D&&(!ee||M)&&m.push(...k.map(x=>{const Q={type:H};if(typeof x=="string"&&o&&!ee&&t.manuallyAnimateOnMount&&t.parent){const{parent:N}=t,y=Jr(N,x);if(N.enteringChildren&&y){const{delayChildren:b}=y.transition||{};Q.delay=u0(N.enteringChildren,t,b)}}return{animation:x,options:Q}}))}if(S.size){const V={};if(typeof w.initial!="boolean"){const H=Jr(t,Array.isArray(w.initial)?w.initial[0]:w.initial);H&&H.transition&&(V.transition=H.transition)}S.forEach(H=>{const K=t.getBaseTarget(H),G=t.getValue(H);G&&(G.liveStyle=!0),V[H]=K??null}),m.push({animation:V})}let A=!!m.length;return o&&(w.initial===!1||w.initial===w.animate)&&!t.manuallyAnimateOnMount&&(A=!1),o=!1,A?r(m):Promise.resolve()}function p(g,w){if(s[g].isActive===w)return Promise.resolve();t.variantChildren?.forEach(m=>m.animationState?.setActive(g,w)),s[g].isActive=w;const v=f(g);for(const m in s)s[m].protectedKeys={};return v}return{animateChanges:f,setActive:p,setAnimateFunction:d,getState:()=>s,reset:()=>{s=Om()}}}function aS(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!d0(r,t):!1}function gr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Om(){return{animate:gr(!0),whileInView:gr(),whileHover:gr(),whileTap:gr(),whileDrag:gr(),whileFocus:gr(),exit:gr()}}class er{constructor(r){this.isMounted=!1,this.node=r}update(){}}class oS extends er{constructor(r){super(r),r.animationState||(r.animationState=sS(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();no(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:s}=this.node.prevProps||{};r!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let lS=0;class cS extends er{constructor(){super(...arguments),this.id=lS++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;const c=this.node.animationState.setActive("exit",!r);s&&!r&&c.then(()=>{s(this.id)})}mount(){const{register:r,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const uS={animation:{Feature:oS},exit:{Feature:cS}};function ds(t,r,s,o={passive:!0}){return t.addEventListener(r,s,o),()=>t.removeEventListener(r,s)}function xs(t){return{point:{x:t.pageX,y:t.pageY}}}const dS=t=>r=>Pu(r)&&t(r,xs(r));function ts(t,r,s,o){return ds(t,r,dS(s),o)}const h0=1e-4,fS=1-h0,hS=1+h0,m0=.01,mS=0-m0,pS=0+m0;function wt(t){return t.max-t.min}function gS(t,r,s){return Math.abs(t-r)<=s}function Am(t,r,s,o=.5){t.origin=o,t.originPoint=$e(r.min,r.max,t.origin),t.scale=wt(s)/wt(r),t.translate=$e(s.min,s.max,t.origin)-t.originPoint,(t.scale>=fS&&t.scale<=hS||isNaN(t.scale))&&(t.scale=1),(t.translate>=mS&&t.translate<=pS||isNaN(t.translate))&&(t.translate=0)}function ns(t,r,s,o){Am(t.x,r.x,s.x,o?o.originX:void 0),Am(t.y,r.y,s.y,o?o.originY:void 0)}function Dm(t,r,s){t.min=s.min+r.min,t.max=t.min+wt(r)}function yS(t,r,s){Dm(t.x,r.x,s.x),Dm(t.y,r.y,s.y)}function zm(t,r,s){t.min=r.min-s.min,t.max=t.min+wt(r)}function rs(t,r,s){zm(t.x,r.x,s.x),zm(t.y,r.y,s.y)}function Bt(t){return[t("x"),t("y")]}const p0=({current:t})=>t?t.ownerDocument.defaultView:null,_m=(t,r)=>Math.abs(t-r);function vS(t,r){const s=_m(t.x,r.x),o=_m(t.y,r.y);return Math.sqrt(s**2+o**2)}class g0{constructor(r,s,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=xc(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,I=vS(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!I)return;const{point:A}=S,{timestamp:V}=ft;this.history.push({...A,timestamp:V});const{onStart:H,onMove:K}=this.handlers;E||(H&&H(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),K&&K(this.lastMoveEvent,S)},this.handlePointerMove=(S,E)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=vc(E,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(S,E)=>{this.end();const{onEnd:I,onSessionEnd:A,resumeAnimation:V}=this.handlers;if(this.dragSnapToOrigin&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const H=xc(S.type==="pointercancel"?this.lastMoveEventInfo:vc(E,this.transformPagePoint),this.history);this.startEvent&&I&&I(S,H),A&&A(S,H)},!Pu(r))return;this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=c||window;const p=xs(r),g=vc(p,this.transformPagePoint),{point:w}=g,{timestamp:v}=ft;this.history=[{...w,timestamp:v}];const{onSessionStart:m}=s;m&&m(r,xc(g,this.history)),this.removeListeners=gs(ts(this.contextWindow,"pointermove",this.handlePointerMove),ts(this.contextWindow,"pointerup",this.handlePointerUp),ts(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Qn(this.updatePoint)}}function vc(t,r){return r?{point:r(t.point)}:t}function Im(t,r){return{x:t.x-r.x,y:t.y-r.y}}function xc({point:t},r){return{point:t,delta:Im(t,y0(r)),offset:Im(t,xS(r)),velocity:wS(r,.1)}}function xS(t){return t[0]}function y0(t){return t[t.length-1]}function wS(t,r){if(t.length<2)return{x:0,y:0};let s=t.length-1,o=null;const c=y0(t);for(;s>=0&&(o=t[s],!(c.timestamp-o.timestamp>un(r)));)s--;if(!o)return{x:0,y:0};const d=Ht(c.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-o.x)/d,y:(c.y-o.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function bS(t,{min:r,max:s},o){return r!==void 0&&t<r?t=o?$e(r,t,o.min):Math.max(t,r):s!==void 0&&t>s&&(t=o?$e(s,t,o.max):Math.min(t,s)),t}function Vm(t,r,s){return{min:r!==void 0?t.min+r:void 0,max:s!==void 0?t.max+s-(t.max-t.min):void 0}}function jS(t,{top:r,left:s,bottom:o,right:c}){return{x:Vm(t.x,s,c),y:Vm(t.y,r,o)}}function Fm(t,r){let s=r.min-t.min,o=r.max-t.max;return r.max-r.min<t.max-t.min&&([s,o]=[o,s]),{min:s,max:o}}function SS(t,r){return{x:Fm(t.x,r.x),y:Fm(t.y,r.y)}}function kS(t,r){let s=.5;const o=wt(t),c=wt(r);return c>o?s=as(r.min,r.max-o,t.min):o>c&&(s=as(t.min,t.max-c,r.min)),Tn(0,1,s)}function CS(t,r){const s={};return r.min!==void 0&&(s.min=r.min-t.min),r.max!==void 0&&(s.max=r.max-t.min),s}const Yc=.35;function TS(t=Yc){return t===!1?t=0:t===!0&&(t=Yc),{x:Bm(t,"left","right"),y:Bm(t,"top","bottom")}}function Bm(t,r,s){return{min:Hm(t,r),max:Hm(t,s)}}function Hm(t,r){return typeof t=="number"?t:t[r]||0}const PS=new WeakMap;class ES{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ze(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:s=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=m=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(xs(m).point)},f=(m,S)=>{const{drag:E,dragPropagation:I,onDragStart:A}=this.getProps();if(E&&!I&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vb(E),!this.openDragLock))return;this.latestPointerEvent=m,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bt(H=>{let K=this.getAxisMotionValue(H).get()||0;if(dn.test(K)){const{projection:G}=this.visualElement;if(G&&G.layout){const le=G.layout.layoutBox[H];le&&(K=wt(le)*(parseFloat(K)/100))}}this.originPoint[H]=K}),A&&Fe.postRender(()=>A(m,S)),$c(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},p=(m,S)=>{this.latestPointerEvent=m,this.latestPanInfo=S;const{dragPropagation:E,dragDirectionLock:I,onDirectionLock:A,onDrag:V}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:H}=S;if(I&&this.currentDirection===null){this.currentDirection=NS(H),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),V&&V(m,S)},g=(m,S)=>{this.latestPointerEvent=m,this.latestPanInfo=S,this.stop(m,S),this.latestPointerEvent=null,this.latestPanInfo=null},w=()=>Bt(m=>this.getAnimationState(m)==="paused"&&this.getAxisMotionValue(m).animation?.play()),{dragSnapToOrigin:v}=this.getProps();this.panSession=new g0(r,{onSessionStart:d,onStart:f,onMove:p,onSessionEnd:g,resumeAnimation:w},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,distanceThreshold:o,contextWindow:p0(this.visualElement)})}stop(r,s){const o=r||this.latestPointerEvent,c=s||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!o)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Fe.postRender(()=>p(o,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:s}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(r,s,o){const{drag:c}=this.getProps();if(!o||!Oa(r,c,this.currentDirection))return;const d=this.getAxisMotionValue(r);let f=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(f=bS(f,this.constraints[r],this.elastic[r])),d.set(f)}resolveConstraints(){const{dragConstraints:r,dragElastic:s}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&Gr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=jS(o.layoutBox,r):this.constraints=!1,this.elastic=TS(s),c!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Bt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=CS(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:s}=this.getProps();if(!r||!Gr(r))return!1;const o=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Rj(o,c.root,this.visualElement.getTransformPagePoint());let f=SS(c.layout.layoutBox,d);if(s){const p=s(Pj(f));this.hasMutatedConstraints=!!p,p&&(f=e0(p))}return f}startAnimation(r){const{drag:s,dragMomentum:o,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),g=this.constraints||{},w=Bt(v=>{if(!Oa(v,s,this.currentDirection))return;let m=g&&g[v]||{};f&&(m={min:0,max:0});const S=c?200:1e6,E=c?40:1e7,I={type:"inertia",velocity:o?r[v]:0,bounceStiffness:S,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...d,...m};return this.startAxisValueAnimation(v,I)});return Promise.all(w).then(p)}startAxisValueAnimation(r,s){const o=this.getAxisMotionValue(r);return $c(this.visualElement,r),o.start(zu(r,o,0,s,this.visualElement,!1))}stopAnimation(){Bt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Bt(r=>this.getAxisMotionValue(r).animation?.pause())}getAnimationState(r){return this.getAxisMotionValue(r).animation?.state}getAxisMotionValue(r){const s=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),c=o[s];return c||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){Bt(s=>{const{drag:o}=this.getProps();if(!Oa(s,o,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(s);if(c&&c.layout){const{min:f,max:p}=c.layout.layoutBox[s];d.set(r[s]-$e(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:s}=this.getProps(),{projection:o}=this.visualElement;if(!Gr(s)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Bt(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const g=p.get();c[f]=kS({min:g,max:g},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Bt(f=>{if(!Oa(f,r,null))return;const p=this.getAxisMotionValue(f),{min:g,max:w}=this.constraints[f];p.set($e(g,w,c[f]))})}addListeners(){if(!this.visualElement.current)return;PS.set(this.visualElement,this);const r=this.visualElement.current,s=ts(r,"pointerdown",g=>{const{drag:w,dragListener:v=!0}=this.getProps();w&&v&&this.start(g)}),o=()=>{const{dragConstraints:g}=this.getProps();Gr(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Fe.read(o);const f=ds(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:w})=>{this.isDragging&&w&&(Bt(v=>{const m=this.getAxisMotionValue(v);m&&(this.originPoint[v]+=g[v].translate,m.set(m.get()+g[v].translate))}),this.visualElement.render())}));return()=>{f(),s(),d(),p&&p()}}getProps(){const r=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Yc,dragMomentum:p=!0}=r;return{...r,drag:s,dragDirectionLock:o,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function Oa(t,r,s){return(r===!0||r===t)&&(s===null||s===t)}function NS(t,r=10){let s=null;return Math.abs(t.y)>r?s="y":Math.abs(t.x)>r&&(s="x"),s}class RS extends er{constructor(r){super(r),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new ES(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wm=t=>(r,s)=>{t&&Fe.postRender(()=>t(r,s))};class MS extends er{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(r){this.session=new g0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:p0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:s,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:Wm(r),onStart:Wm(s),onMove:o,onEnd:(d,f)=>{delete this.session,c&&Fe.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=ts(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Va={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Um(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Qi={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const s=Um(t,r.target.x),o=Um(t,r.target.y);return`${s}% ${o}%`}},LS={correct:(t,{treeScale:r,projectionDelta:s})=>{const o=t,c=Jn.parse(t);if(c.length>5)return o;const d=Jn.createTransformer(t),f=typeof c[0]!="number"?1:0,p=s.x.scale*r.x,g=s.y.scale*r.y;c[0+f]/=p,c[1+f]/=g;const w=$e(p,g,.5);return typeof c[2+f]=="number"&&(c[2+f]/=w),typeof c[3+f]=="number"&&(c[3+f]/=w),d(c)}};let wc=!1;class OS extends R.Component{componentDidMount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:o,layoutId:c}=this.props,{projection:d}=r;tj(AS),d&&(s.group&&s.group.add(d),o&&o.register&&c&&o.register(d),wc&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Va.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:s,visualElement:o,drag:c,isPresent:d}=this.props,{projection:f}=o;return f&&(f.isPresent=d,wc=!0,c||r.layoutDependency!==s||s===void 0||r.isPresent!==d?f.willUpdate():this.safeToRemove(),r.isPresent!==d&&(d?f.promote():f.relegate()||Fe.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Tu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:o}=this.props,{projection:c}=r;wc=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function v0(t){const[r,s]=Gb(),o=R.useContext(Xp);return a.jsx(OS,{...t,layoutGroup:o,switchLayoutGroup:R.useContext(Jg),isPresent:r,safeToRemove:s})}const AS={borderRadius:{...Qi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qi,borderTopRightRadius:Qi,borderBottomLeftRadius:Qi,borderBottomRightRadius:Qi,boxShadow:LS};function DS(t,r,s){const o=yt(t)?t:ei(t);return o.start(zu("",o,r,s)),o.animation}const zS=(t,r)=>t.depth-r.depth;class _S{constructor(){this.children=[],this.isDirty=!1}add(r){ou(this.children,r),this.isDirty=!0}remove(r){lu(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(zS),this.isDirty=!1,this.children.forEach(r)}}function IS(t,r){const s=Pt.now(),o=({timestamp:c})=>{const d=c-s;d>=r&&(Qn(o),t(d-r))};return Fe.setup(o,!0),()=>Qn(o)}const x0=["TopLeft","TopRight","BottomLeft","BottomRight"],VS=x0.length,$m=t=>typeof t=="string"?parseFloat(t):t,Km=t=>typeof t=="number"||we.test(t);function FS(t,r,s,o,c,d){c?(t.opacity=$e(0,s.opacity??1,BS(o)),t.opacityExit=$e(r.opacity??1,0,HS(o))):d&&(t.opacity=$e(r.opacity??1,s.opacity??1,o));for(let f=0;f<VS;f++){const p=`border${x0[f]}Radius`;let g=Ym(r,p),w=Ym(s,p);if(g===void 0&&w===void 0)continue;g||(g=0),w||(w=0),g===0||w===0||Km(g)===Km(w)?(t[p]=Math.max($e($m(g),$m(w),o),0),(dn.test(w)||dn.test(g))&&(t[p]+="%")):t[p]=w}(r.rotate||s.rotate)&&(t.rotate=$e(r.rotate||0,s.rotate||0,o))}function Ym(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const BS=w0(0,.5,og),HS=w0(.5,.95,Wt);function w0(t,r,s){return o=>o<t?0:o>r?1:s(as(t,r,o))}function Gm(t,r){t.min=r.min,t.max=r.max}function Ft(t,r){Gm(t.x,r.x),Gm(t.y,r.y)}function qm(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function Xm(t,r,s,o,c){return t-=r,t=qa(t,1/s,o),c!==void 0&&(t=qa(t,1/c,o)),t}function WS(t,r=0,s=1,o=.5,c,d=t,f=t){if(dn.test(r)&&(r=parseFloat(r),r=$e(f.min,f.max,r/100)-f.min),typeof r!="number")return;let p=$e(d.min,d.max,o);t===d&&(p-=r),t.min=Xm(t.min,r,s,p,c),t.max=Xm(t.max,r,s,p,c)}function Qm(t,r,[s,o,c],d,f){WS(t,r[s],r[o],r[c],r.scale,d,f)}const US=["x","scaleX","originX"],$S=["y","scaleY","originY"];function Jm(t,r,s,o){Qm(t.x,r,US,s?s.x:void 0,o?o.x:void 0),Qm(t.y,r,$S,s?s.y:void 0,o?o.y:void 0)}function Zm(t){return t.translate===0&&t.scale===1}function b0(t){return Zm(t.x)&&Zm(t.y)}function ep(t,r){return t.min===r.min&&t.max===r.max}function KS(t,r){return ep(t.x,r.x)&&ep(t.y,r.y)}function tp(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function j0(t,r){return tp(t.x,r.x)&&tp(t.y,r.y)}function np(t){return wt(t.x)/wt(t.y)}function rp(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class YS{constructor(){this.members=[]}add(r){ou(this.members,r),r.scheduleRender()}remove(r){if(lu(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(r){const s=this.members.findIndex(c=>r===c);if(s===0)return!1;let o;for(let c=s;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){o=d;break}}return o?(this.promote(o),!0):!1}promote(r,s){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.instance&&o.scheduleRender(),r.scheduleRender(),r.resumeFrom=o,s&&(r.resumeFrom.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:c}=r.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:s,resumingFrom:o}=r;s.onExitComplete&&s.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function GS(t,r,s){let o="";const c=t.x.translate/r.x,d=t.y.translate/r.y,f=s?.z||0;if((c||d||f)&&(o=`translate3d(${c}px, ${d}px, ${f}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),s){const{transformPerspective:w,rotate:v,rotateX:m,rotateY:S,skewX:E,skewY:I}=s;w&&(o=`perspective(${w}px) ${o}`),v&&(o+=`rotate(${v}deg) `),m&&(o+=`rotateX(${m}deg) `),S&&(o+=`rotateY(${S}deg) `),E&&(o+=`skewX(${E}deg) `),I&&(o+=`skewY(${I}deg) `)}const p=t.x.scale*r.x,g=t.y.scale*r.y;return(p!==1||g!==1)&&(o+=`scale(${p}, ${g})`),o||"none"}const bc=["","X","Y","Z"],qS=1e3;let XS=0;function jc(t,r,s,o){const{latestValues:c}=r;c[t]&&(s[t]=c[t],r.setStaticValue(t,0),o&&(o[t]=0))}function S0(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const s=l0(r);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:d}=t.options;window.MotionCancelOptimisedAnimation(s,"transform",Fe,!(c||d))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&S0(o)}function k0({attachResizeListener:t,defaultParent:r,measureScroll:s,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(f={},p=r?.()){this.id=XS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ZS),this.nodes.forEach(r3),this.nodes.forEach(i3),this.nodes.forEach(e3)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new _S)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new du),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const g=this.eventHandlers.get(f);g&&g.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Vg(f)&&!$b(f),this.instance=f;const{layoutId:p,layout:g,visualElement:w}=this.options;if(w&&!w.current&&w.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||p)&&(this.isLayoutDirty=!0),t){let v,m=0;const S=()=>this.root.updateBlockedByResize=!1;Fe.read(()=>{m=window.innerWidth}),t(f,()=>{const E=window.innerWidth;E!==m&&(m=E,this.root.updateBlockedByResize=!0,v&&v(),v=IS(S,250),Va.hasAnimatedSinceResize&&(Va.hasAnimatedSinceResize=!1,this.nodes.forEach(ap)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&w&&(p||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeLayoutChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||w.getDefaultTransition()||c3,{onLayoutAnimationStart:A,onLayoutAnimationComplete:V}=w.getProps(),H=!this.targetLayout||!j0(this.targetLayout,E),K=!m&&S;if(this.options.layoutRoot||this.resumeFrom||K||m&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...ku(I,"layout"),onPlay:A,onComplete:V};(w.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(v,K)}else m||ap(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(s3),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&S0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const m=this.path[v];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:p,layout:g}=this.options;if(p===void 0&&!g)return;const w=this.getTransformTemplate();this.prevTransformTemplateValue=w?w(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ip);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(sp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(n3),this.nodes.forEach(QS),this.nodes.forEach(JS)):this.nodes.forEach(sp),this.clearAllSnapshots();const p=Pt.now();ft.delta=Tn(0,1e3/60,p-ft.timestamp),ft.timestamp=p,ft.isProcessing=!0,uc.update.process(ft),uc.preRender.process(ft),uc.render.process(ft),ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(t3),this.sharedNodes.forEach(a3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wt(this.snapshot.measuredBox.x)&&!wt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!b0(this.projectionDelta),g=this.getTransformTemplate(),w=g?g(this.latestValues,""):void 0,v=w!==this.prevTransformTemplateValue;f&&this.instance&&(p||yr(this.latestValues)||v)&&(c(this.instance,w),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let g=this.removeElementScroll(p);return f&&(g=this.removeTransform(g)),u3(g),{animationId:this.root.animationId,measuredBox:p,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Ze();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(d3))){const{scroll:w}=this.root;w&&(qr(p.x,w.offset.x),qr(p.y,w.offset.y))}return p}removeElementScroll(f){const p=Ze();if(Ft(p,f),this.scroll?.wasRoot)return p;for(let g=0;g<this.path.length;g++){const w=this.path[g],{scroll:v,options:m}=w;w!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&Ft(p,f),qr(p.x,v.offset.x),qr(p.y,v.offset.y))}return p}applyTransform(f,p=!1){const g=Ze();Ft(g,f);for(let w=0;w<this.path.length;w++){const v=this.path[w];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Xr(g,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),yr(v.latestValues)&&Xr(g,v.latestValues)}return yr(this.latestValues)&&Xr(g,this.latestValues),g}removeTransform(f){const p=Ze();Ft(p,f);for(let g=0;g<this.path.length;g++){const w=this.path[g];if(!w.instance||!yr(w.latestValues))continue;Bc(w.latestValues)&&w.updateSnapshot();const v=Ze(),m=w.measurePageBox();Ft(v,m),Jm(p,w.latestValues,w.snapshot?w.snapshot.layoutBox:void 0,v)}return yr(this.latestValues)&&Jm(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=ft.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),rs(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ze(),this.targetWithTransforms=Ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),n0(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),rs(this.relativeTargetOrigin,this.target,S.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Bc(this.parent.latestValues)||t0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ft.timestamp&&(g=!1),g)return;const{layout:w,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(w||v))return;Ft(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,S=this.treeScale.y;Nj(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ze());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qm(this.prevProjectionDelta.x,this.projectionDelta.x),qm(this.prevProjectionDelta.y,this.projectionDelta.y)),ns(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==S||!rp(this.projectionDelta.x,this.prevProjectionDelta.x)||!rp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qr(),this.projectionDelta=Qr(),this.projectionDeltaWithTransform=Qr()}setAnimationOrigin(f,p=!1){const g=this.snapshot,w=g?g.latestValues:{},v={...this.latestValues},m=Qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=Ze(),E=g?g.source:void 0,I=this.layout?this.layout.source:void 0,A=E!==I,V=this.getStack(),H=!V||V.members.length<=1,K=!!(A&&!H&&this.options.crossfade===!0&&!this.path.some(l3));this.animationProgress=0;let G;this.mixTargetDelta=le=>{const T=le/1e3;op(m.x,f.x,T),op(m.y,f.y,T),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rs(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),o3(this.relativeTarget,this.relativeTargetOrigin,S,T),G&&KS(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=Ze()),Ft(G,this.relativeTarget)),A&&(this.animationValues=v,FS(v,w,this.latestValues,T,K,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{Va.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ei(0)),this.currentAnimation=DS(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:g,layout:w,latestValues:v}=f;if(!(!p||!g||!w)){if(this!==f&&this.layout&&w&&C0(this.options.animationType,this.layout.layoutBox,w.layoutBox)){g=this.target||Ze();const m=wt(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+m;const S=wt(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+S}Ft(p,g),Xr(p,v),ns(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new YS),this.sharedNodes.get(f).add(p);const w=p.options.initialPromotionConfig;p.promote({transition:w?w.transition:void 0,preserveFollowOpacity:w&&w.shouldPreserveFollowOpacity?w.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:g}={}){const w=this.getStack();w&&w.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(p=!0),!p)return;const w={};g.z&&jc("z",f,w,this.animationValues);for(let v=0;v<bc.length;v++)jc(`rotate${bc[v]}`,f,w,this.animationValues),jc(`skew${bc[v]}`,f,w,this.animationValues);f.render();for(const v in w)f.setStaticValue(v,w[v]),this.animationValues&&(this.animationValues[v]=w[v]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Ia(p?.pointerEvents)||"",f.transform=g?g(this.latestValues,""):"none";return}const w=this.getLead();if(!this.projectionDelta||!this.layout||!w.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Ia(p?.pointerEvents)||""),this.hasProjected&&!yr(this.latestValues)&&(f.transform=g?g({},""):"none",this.hasProjected=!1);return}f.visibility="";const v=w.animationValues||w.latestValues;this.applyTransformsToTarget();let m=GS(this.projectionDeltaWithTransform,this.treeScale,v);g&&(m=g(v,m)),f.transform=m;const{x:S,y:E}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,w.animationValues?f.opacity=w===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=w===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const I in us){if(v[I]===void 0)continue;const{correct:A,applyTo:V,isCSSVariable:H}=us[I],K=m==="none"?v[I]:A(v[I],w);if(V){const G=V.length;for(let le=0;le<G;le++)f[V[le]]=K}else H?this.options.visualElement.renderState.vars[I]=K:f[I]=K}this.options.layoutId&&(f.pointerEvents=w===this?Ia(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(ip),this.root.sharedNodes.clear()}}}function QS(t){t.updateLayout()}function JS(t){const r=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=t.layout,{animationType:c}=t.options,d=r.source!==t.layout.source;c==="size"?Bt(v=>{const m=d?r.measuredBox[v]:r.layoutBox[v],S=wt(m);m.min=s[v].min,m.max=m.min+S}):C0(c,r.layoutBox,s)&&Bt(v=>{const m=d?r.measuredBox[v]:r.layoutBox[v],S=wt(s[v]);m.max=m.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+S)});const f=Qr();ns(f,s,r.layoutBox);const p=Qr();d?ns(p,t.applyTransform(o,!0),r.measuredBox):ns(p,s,r.layoutBox);const g=!b0(f);let w=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:S}=v;if(m&&S){const E=Ze();rs(E,r.layoutBox,m.layoutBox);const I=Ze();rs(I,s,S.layoutBox),j0(E,I)||(w=!0),v.options.layoutRoot&&(t.relativeTarget=I,t.relativeTargetOrigin=E,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:p,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:w})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function ZS(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function e3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function t3(t){t.clearSnapshot()}function ip(t){t.clearMeasurements()}function sp(t){t.isLayoutDirty=!1}function n3(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function ap(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function r3(t){t.resolveTargetDelta()}function i3(t){t.calcProjection()}function s3(t){t.resetSkewAndRotation()}function a3(t){t.removeLeadSnapshot()}function op(t,r,s){t.translate=$e(r.translate,0,s),t.scale=$e(r.scale,1,s),t.origin=r.origin,t.originPoint=r.originPoint}function lp(t,r,s,o){t.min=$e(r.min,s.min,o),t.max=$e(r.max,s.max,o)}function o3(t,r,s,o){lp(t.x,r.x,s.x,o),lp(t.y,r.y,s.y,o)}function l3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const c3={duration:.45,ease:[.4,0,.1,1]},cp=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),up=cp("applewebkit/")&&!cp("chrome/")?Math.round:Wt;function dp(t){t.min=up(t.min),t.max=up(t.max)}function u3(t){dp(t.x),dp(t.y)}function C0(t,r,s){return t==="position"||t==="preserve-aspect"&&!gS(np(r),np(s),.2)}function d3(t){return t!==t.root&&t.scroll?.wasRoot}const f3=k0({attachResizeListener:(t,r)=>ds(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sc={current:void 0},T0=k0({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Sc.current){const t=new f3({});t.mount(window),t.setOptions({layoutScroll:!0}),Sc.current=t}return Sc.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),h3={pan:{Feature:MS},drag:{Feature:RS,ProjectionNode:T0,MeasureLayout:v0}};function fp(t,r,s){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,d=o[c];d&&Fe.postRender(()=>d(r,xs(r)))}class m3 extends er{mount(){const{current:r}=this.node;r&&(this.unmount=Fb(r,(s,o)=>(fp(this.node,o,"Start"),c=>fp(this.node,c,"End"))))}unmount(){}}class p3 extends er{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gs(ds(this.node.current,"focus",()=>this.onFocus()),ds(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hp(t,r,s){const{props:o}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),d=o[c];d&&Fe.postRender(()=>d(r,xs(r)))}class g3 extends er{mount(){const{current:r}=this.node;r&&(this.unmount=Ub(r,(s,o)=>(hp(this.node,o,"Start"),(c,{success:d})=>hp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gc=new WeakMap,kc=new WeakMap,y3=t=>{const r=Gc.get(t.target);r&&r(t)},v3=t=>{t.forEach(y3)};function x3({root:t,...r}){const s=t||document;kc.has(s)||kc.set(s,{});const o=kc.get(s),c=JSON.stringify(r);return o[c]||(o[c]=new IntersectionObserver(v3,{root:t,...r})),o[c]}function w3(t,r,s){const o=x3(r);return Gc.set(t,s),o.observe(t),()=>{Gc.delete(t),o.unobserve(t)}}const b3={some:0,all:1};class j3 extends er{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:s,margin:o,amount:c="some",once:d}=r,f={root:s?s.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:b3[c]},p=g=>{const{isIntersecting:w}=g;if(this.isInView===w||(this.isInView=w,d&&!w&&this.hasEnteredView))return;w&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",w);const{onViewportEnter:v,onViewportLeave:m}=this.node.getProps(),S=w?v:m;S&&S(g)};return w3(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:s}=this.node;["amount","margin","root"].some(S3(r,s))&&this.startObserver()}unmount(){}}function S3({viewport:t={}},{viewport:r={}}={}){return s=>t[s]!==r[s]}const k3={inView:{Feature:j3},tap:{Feature:g3},focus:{Feature:p3},hover:{Feature:m3}},C3={layout:{ProjectionNode:T0,MeasureLayout:v0}},T3={...uS,...k3,...h3,...C3},Kr=Tj(T3,Vj);function P3(){return a.jsxs("section",{className:"about-section",children:[a.jsx("style",{children:`
        .about-section {
          padding: 4rem 2rem;
          max-width: 1300px;
          margin: 3rem auto;
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
          background: linear-gradient(to bottom, #f9fafb, #f1f5f9);
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .about-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #004aad;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .about-header p {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-image img {
          width: 100%;
          max-height: 480px;
          border-radius: 1rem;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .about-text p {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          text-align: justify;
          line-height: 1.8;
        }

        .about-text strong {
          color: #004aad;
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.8rem;
          margin-top: 2.5rem;
        }

        .highlight-card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background: linear-gradient(to bottom right, #004aad, #007bff);
          color: white;
        }

        .highlight-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: #004aad;
        }

        .highlight-card:hover h3 {
          color: white;
        }

        .highlight-card p {
          font-size: 1rem;
          color: #4b5563;
        }

        .highlight-card:hover p {
          color: #e2e8f0;
        }

        .cta-box {
          margin-top: 3rem;
          text-align: center;
        }

        .cta-btn {
          background: #004aad;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .cta-btn:hover {
          background: #003b8e;
          transform: translateY(-3px);
        }
      `}),a.jsxs(Kr.div,{className:"about-header",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1},children:[a.jsx("h2",{children:"About Tamil Nadu Tourism"}),a.jsx("p",{children:"Experience the timeless beauty of Tamil Nadu — a land where spirituality, heritage, and nature unite to create unforgettable memories."})]}),a.jsxs("div",{className:"about-content",children:[a.jsx(Kr.div,{className:"about-image",initial:{opacity:0,x:-40},animate:{opacity:1,x:0},transition:{duration:1.2},children:a.jsx("img",{src:Gw,alt:"Tamil Nadu Overview"})}),a.jsxs(Kr.div,{className:"about-text",initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:1.2},children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Tamil Nadu Tourism"})," showcases the cultural wealth and natural beauty of South India. From the magnificent temples of"," ",a.jsx("strong",{children:"Madurai"})," and ",a.jsx("strong",{children:"Thanjavur"})," to the misty hills of ",a.jsx("strong",{children:"Ooty"})," and ",a.jsx("strong",{children:"Kodaikanal"}),", every journey offers a new story."]}),a.jsxs("p",{children:["We are dedicated to providing ",a.jsx("strong",{children:"authentic experiences"})," ","that are safe, sustainable, and memorable — empowering local communities while preserving Tamil Nadu’s heritage."]}),a.jsxs("p",{children:["Whether you love history, nature, food, or art — Tamil Nadu offers a"," ",a.jsx("strong",{children:"journey of discovery"})," unlike any other destination."]})]})]}),a.jsxs(Kr.div,{className:"highlights",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},children:[a.jsxs("div",{className:"highlight-card",children:[a.jsx("h3",{children:"🏛️ Heritage & Culture"}),a.jsx("p",{children:"Explore centuries-old temples, rich Dravidian architecture, and timeless traditions."})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("h3",{children:"🌄 Nature & Adventure"}),a.jsx("p",{children:"From the Nilgiris to the Kanyakumari coast, nature lovers find peace and thrill in every corner."})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("h3",{children:"🍛 Cuisine & Hospitality"}),a.jsx("p",{children:"Taste the flavors of Tamil Nadu — from spicy Chettinad dishes to coastal seafood delights."})]}),a.jsxs("div",{className:"highlight-card",children:[a.jsx("h3",{children:"🕉️ Spiritual Tourism"}),a.jsx("p",{children:"Visit divine destinations like Rameswaram and Chidambaram that offer inner peace and cultural depth."})]})]}),a.jsx(Kr.div,{className:"cta-box",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1},children:a.jsx("button",{className:"cta-btn",children:"✨ Plan Your Journey ✨"})})]})}function E3(){const[t,r]=R.useState(""),s=async o=>{o.preventDefault(),r("Sending...");const c=new FormData(o.target);c.append("access_key","YOUR_ACCESS_KEY_HERE");const f=await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:c})).json();f.success?(r("✅ Form Submitted Successfully!"),o.target.reset(),setTimeout(()=>r(""),4e3)):(console.log("Error",f),r("❌ Something went wrong. Please try again!"))};return a.jsxs("div",{className:"contact-wrapper",children:[a.jsx("style",{children:`
        .contact-wrapper {
          padding: 4rem 2rem;
          background: linear-gradient(to bottom right, #f8fafc, #eef2ff);
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background: #ffffff;
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .contact-container h2 {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #004aad;
        }

        .contact-container p {
          text-align: center;
          color: #555;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        form label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        form input,
        form textarea {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 0.75rem;
          padding: 0.9rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        form input:focus,
        form textarea:focus {
          border-color: #004aad;
          outline: none;
          box-shadow: 0 0 8px rgba(0, 74, 173, 0.2);
        }

        form button {
          display: block;
          width: 100%;
          padding: 1rem;
          background-color: #004aad;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        form button:hover {
          background-color: #003b8e;
          transform: translateY(-3px);
        }

        .success-message {
          text-align: center;
          color: #16a34a;
          font-weight: 600;
          margin-top: -0.5rem;
          margin-bottom: 1rem;
        }

        .info {
          text-align: center;
          font-size: 1rem;
          margin-top: 2rem;
          line-height: 1.8;
        }

        .info strong {
          color: #004aad;
        }

        .social-icons {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-icons a {
          font-size: 1.6rem;
          color: #004aad;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          color: #007bff;
          transform: scale(1.2);
        }

        .map-section {
          margin-top: 3rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        iframe {
          width: 100%;
          height: 350px;
          border: 0;
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 2rem;
          }

          .contact-container h2 {
            font-size: 2.2rem;
          }

          .contact-container p {
            font-size: 1rem;
          }
        }
      `}),a.jsxs(Kr.div,{className:"contact-container",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:1},children:[a.jsx("h2",{children:"Contact Us"}),a.jsx("p",{children:"We’d love to hear from you! Send us a message below and we’ll respond soon."}),a.jsxs("form",{onSubmit:s,children:[a.jsx("label",{htmlFor:"name",children:"Name"}),a.jsx("input",{type:"text",name:"name",placeholder:"Enter your name",required:!0}),a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{type:"email",name:"email",placeholder:"Enter your email",required:!0}),a.jsx("label",{htmlFor:"message",children:"Message"}),a.jsx("textarea",{name:"message",rows:"5",placeholder:"Type your message...",required:!0}),a.jsx("button",{type:"submit",children:"Send Message"})]}),t&&a.jsx("div",{className:"success-message",children:t}),a.jsxs("div",{className:"info",children:[a.jsx(vx,{})," ",a.jsx("strong",{children:" support@epicurevoyagetourism.com"})," ",a.jsx("br",{}),a.jsx(wx,{})," ",a.jsx("strong",{children:" +91 98765 43210"}),a.jsxs("div",{className:"social-icons",children:[a.jsx("a",{href:"#",children:a.jsx(mx,{})}),a.jsx("a",{href:"#",children:a.jsx(Lp,{})}),a.jsx("a",{href:"#",children:a.jsx(Op,{})})]})]}),a.jsx("div",{className:"map-section",children:a.jsx("iframe",{title:"Tamil Nadu Tourism Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995706.2827578033!2d77.0!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5818f4536c3%3A0xe94f33c71b5abf04!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1686655821992!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy"})})]})]})}const N3={name:"Ooty",description:"Ooty (Udhagamandalam) is a picturesque hill station in the Nilgiris, known as the 'Queen of Hill Stations'. Famous for its natural beauty, tea plantations, and pleasant climate, it attracts tourists all year round.",photos:["https://upload.wikimedia.org/wikipedia/commons/6/68/Ooty_Lake.jpg","https://upload.wikimedia.org/wikipedia/commons/d/dc/Ooty_Botanical_Gardens.jpg","https://upload.wikimedia.org/wikipedia/commons/3/3b/Doddabetta_peak.jpg"],favoriteSpots:["Government Botanical Garden","Ooty Lake","Doddabetta Peak","Rose Garden","Nilgiri Mountain Railway","Pykara Lake","Tea Museum","Avalanche Lake","Emerald Lake"],busInfo:{from:["Ooty Central Bus Stand","Coonoor","Mettupalayam"],availableRoutes:["Ooty Central Bus Stand → Thunder World → Boat House → Botanical Garden → Rose Park → Doddabetta Peak → Tea Park → Tea Museum"],notes:"Circuit buses cover major attractions and are very affordable."},travelRoutes:{Bus:["Use the Ooty circuit sightseeing bus from the Central Bus Stand. It covers Botanical Gardens, Ooty Lake, Doddabetta Peak, Rose Garden, Tea Museum, and more."],"Bike/Car":["Enjoy flexible travel: Charring Cross → Botanical Garden → Ooty Lake → Rose Garden → Doddabetta Peak. Roads are well-marked, and scenic stops abound.","For hidden spots like Emerald or Avalanche Lake, follow signs from the city outskirts."]},hiddenSpots:["Emerald Lake: About 25 km from Ooty, pristine and less crowded.","Avalanche Lake: Beautiful and ideal for trekking/camping.","Parsons Valley: Quiet, in the Nilgiri Biosphere Reserve."],gardensAndParks:["Government Botanical Garden","Rose Garden","Deer Park","Tea Park","Sim's Park (Coonoor, nearby)"]};function R3(){const[t]=R.useState("Ooty"),r=N3;return a.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[a.jsxs("h1",{children:[r.name," - Tourism Management System"]}),a.jsxs("section",{children:[a.jsxs("h2",{children:["About ",r.name]}),a.jsx("p",{children:r.description})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Picturization"}),a.jsx("div",{style:{display:"flex",gap:10},children:r.photos.map((s,o)=>a.jsx("img",{src:s,alt:`Ooty view ${o+1}`,style:{width:200,borderRadius:8}},o))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Favorite Spots"}),a.jsx("ul",{children:r.favoriteSpots.map((s,o)=>a.jsx("li",{children:s},o))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Bus Availability & Routes"}),a.jsx("strong",{children:"From:"}),a.jsx("ul",{children:r.busInfo.from.map((s,o)=>a.jsx("li",{children:s},o))}),a.jsx("strong",{children:"Popular Bus Route:"}),a.jsx("ul",{children:r.busInfo.availableRoutes.map((s,o)=>a.jsx("li",{children:s},o))}),a.jsx("p",{children:a.jsx("em",{children:r.busInfo.notes})})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Tourist Spots in Ooty"}),a.jsx("ul",{children:r.favoriteSpots.map((s,o)=>a.jsx("li",{children:s},o))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Travel Routes"}),a.jsxs("div",{children:[a.jsx("strong",{children:"By Bus:"}),a.jsx("ul",{children:r.travelRoutes.Bus.map((s,o)=>a.jsx("li",{children:s},o))}),a.jsx("strong",{children:"By Bike or Car:"}),a.jsx("ul",{children:r.travelRoutes["Bike/Car"].map((s,o)=>a.jsx("li",{children:s},o))})]})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Hidden Spots in Ooty"}),a.jsx("ul",{children:r.hiddenSpots.map((s,o)=>a.jsx("li",{children:s},o))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Gardens and Parks"}),a.jsx("ul",{children:r.gardensAndParks.map((s,o)=>a.jsx("li",{children:s},o))})]})]})}const M3=()=>{const t="Madurai",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Madurai, known as the Temple City, is one of the oldest cities in India. Famous for the historic Meenakshi Amman Temple, its rich culture, classical Tamil music, temple rituals, and vibrant festivals make it a unique spiritual and cultural destination.",f=[{name:"Meenakshi Amman Temple",desc:"Historic temple with stunning Dravidian architecture and spiritual significance.",icon:a.jsx(ct,{})},{name:"Thirumalai Nayakkar Palace",desc:"A 17th-century royal palace showcasing Indo-Saracenic architecture.",icon:a.jsx(Zt,{})},{name:"Alagar Hills",desc:"Scenic hills known for their temple and natural beauty.",icon:a.jsx(Zt,{})},{name:"Gandhi Memorial Museum",desc:"Dedicated to Mahatma Gandhi, showcasing India's freedom struggle.",icon:a.jsx(ct,{})}],p=[{name:"Jigarthanda",desc:"A signature Madurai drink made with milk, almond gum, and sarsaparilla syrup.",icon:a.jsx(Le,{})},{name:"Idiyappam",desc:"Delicate steamed rice noodles served with coconut milk or spicy curry.",icon:a.jsx(Le,{})},{name:"Paruthi Paal",desc:"A traditional cotton seed milk drink with rich nutritional value.",icon:a.jsx(Le,{})}],g=[{name:"Heritage Madurai",desc:"Luxury stay blending modern comfort with heritage architecture.",icon:a.jsx(Me,{})},{name:"The Gateway Hotel",desc:"Upscale accommodation offering excellent hospitality and local cuisine.",icon:a.jsx(Me,{})},{name:"Boutique Stays",desc:"Charming small-scale accommodations reflecting local culture.",icon:a.jsx(Me,{})}],w=[{name:"Chithirai Thiruvizha",month:"April / May",desc:"A grand festival celebrating the divine marriage of Goddess Meenakshi and Lord Sundareswarar.",icon:a.jsx(rt,{})},{name:"Panguni Uthiram",month:"March / April",desc:"Temple festival marked by colorful processions and rituals.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Madurai International Airport offers direct flights to major Indian cities and select international destinations.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Madurai Junction is a major rail hub well-connected with Chennai, Trichy, Coimbatore, and other key cities.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-linked through NH38 and NH44, with frequent bus and taxi services from neighboring cities.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section Styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:tu,alt:"Madurai"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Temple City of Tamil Nadu"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},L3=()=>{const t="Ooty",[r,s]=R.useState(!1),[o,c]=R.useState({}),d='Ooty, also known as Udhagamandalam, is a picturesque hill station nestled in the Nilgiri Hills of Tamil Nadu. Famous for its lush tea gardens, scenic landscapes, serene lakes, and pleasant weather, Ooty is fondly called the "Queen of Hill Stations."',f=[{name:"Ooty Lake",desc:"A serene artificial lake surrounded by gardens and boating facilities.",icon:a.jsx(ct,{})},{name:"Doddabetta Peak",desc:"The highest peak in Nilgiris offering breathtaking panoramic views.",icon:a.jsx(Hh,{})},{name:"Botanical Gardens",desc:"A lush garden showcasing exotic plants and colorful flower beds.",icon:a.jsx(Hh,{})},{name:"Tea Museum",desc:"Learn about tea production and explore artifacts depicting its history.",icon:a.jsx(ct,{})}],p=[{name:"Homemade Chocolates",desc:"Locally crafted chocolates available in unique flavors.",icon:a.jsx(Le,{})},{name:"Nilgiri Tea",desc:"Aromatic tea harvested from the nearby tea estates.",icon:a.jsx(Le,{})},{name:"Varkey Biscuits",desc:"Crispy, flaky biscuits that are a local delicacy.",icon:a.jsx(Le,{})}],g=[{name:"Savoy Hotel",desc:"Luxury colonial-style accommodation with scenic mountain views.",icon:a.jsx(Me,{})},{name:"Gem Park Ooty",desc:"A premium stay offering modern comfort amidst nature.",icon:a.jsx(Me,{})},{name:"Sterling Ooty Fern Hill",desc:"Elegant resort with panoramic views and cozy ambience.",icon:a.jsx(Me,{})}],w=[{name:"Ooty Summer Festival",month:"May",desc:"A vibrant festival featuring flower shows, boat races, and cultural events.",icon:a.jsx(rt,{})},{name:"Tea and Tourism Festival",month:"October",desc:"Celebration of Ooty’s tea culture with exhibitions and performances.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Nearest airport is Coimbatore International Airport (approx. 88 km away).",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Connected by the scenic Nilgiri Mountain Railway from Mettupalayam.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-connected by buses and taxis from Coimbatore, Mysuru, and Bengaluru.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(60%);
          z-index: 1;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Layout */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:nu,alt:"Ooty"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Queen of Hill Stations"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},O3=()=>{const t="Mahabalipuram",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Mahabalipuram, also known as Mamallapuram, is a historic coastal town in Tamil Nadu famous for its UNESCO World Heritage temples, rock-cut monuments, and Pallava-era architecture. The town is a perfect blend of history, spirituality, and scenic beauty along the Bay of Bengal.",f=[{name:"Shore Temple",desc:"Ancient temple overlooking the Bay of Bengal, part of UNESCO World Heritage Site.",icon:a.jsx(ct,{})},{name:"Pancha Rathas",desc:"Five monolithic rock temples shaped like chariots, carved from a single stone.",icon:a.jsx(ct,{})},{name:"Arjuna’s Penance",desc:"Massive open-air rock relief depicting scenes from Hindu mythology.",icon:a.jsx(ct,{})},{name:"Mahabalipuram Beach",desc:"Beautiful sandy beach perfect for relaxation and photography.",icon:a.jsx(Dp,{})}],p=[{name:"Seafood Curry",desc:"Freshly caught fish and prawns cooked with rich South Indian spices.",icon:a.jsx(Le,{})},{name:"Idiyappam with Coconut Milk",desc:"Steamed rice noodles served with flavorful coconut milk or spicy curry.",icon:a.jsx(Le,{})},{name:"Traditional Tamil Thali",desc:"A wholesome platter of rice, sambar, rasam, poriyal, and dessert.",icon:a.jsx(Le,{})}],g=[{name:"Chariot Beach Resort",desc:"Luxury seaside resort offering scenic views and modern comforts.",icon:a.jsx(Me,{})},{name:"Radisson Blu Resort Temple Bay",desc:"Upscale resort with private villas, infinity pools, and oceanfront dining.",icon:a.jsx(Me,{})},{name:"Ideal Beach Resort",desc:"Family-friendly resort with beach access and cultural shows.",icon:a.jsx(Me,{})}],w=[{name:"Mahabalipuram Dance Festival",month:"December – January",desc:"Celebration of classical dance and music, held at the Shore Temple complex.",icon:a.jsx(rt,{})},{name:"Pongal Festival",month:"January",desc:"Harvest festival filled with traditional rituals, feasts, and decorations.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Nearest airport is Chennai International Airport (approx. 60 km away).",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Nearest railway station is Chengalpattu (approx. 30 km), connected via local taxis and buses.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Easily accessible from Chennai via East Coast Road (ECR) by bus, cab, or private vehicle.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section Styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.8rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:ru,alt:"Mahabalipuram"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"Where History Meets the Sea"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},A3=()=>{const t="Manimuthar",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Manimuthar is a serene and picturesque destination in Tamil Nadu, renowned for its scenic waterfalls, lush green forests, tea plantations, and tranquil environment. It’s a perfect getaway for nature lovers, trekkers, and those seeking peace away from city life.",f=[{name:"Manimuthar Waterfalls",desc:"A majestic waterfall surrounded by dense forest, offering a refreshing natural escape.",icon:a.jsx(bx,{})},{name:"Manjolai Hills",desc:"Famous for its tea plantations and misty hills, ideal for trekking and nature photography.",icon:a.jsx(ss,{})},{name:"Manimuthar Dam",desc:"A scenic reservoir with calm waters, perfect for relaxation and picnics.",icon:a.jsx(ct,{})},{name:"Kalakkad Mundanthurai Tiger Reserve",desc:"A biodiverse forest area home to tigers, elephants, and exotic bird species.",icon:a.jsx(Ap,{})}],p=[{name:"South Indian Meals",desc:"Authentic Tamil-style meals served on banana leaves with local spices and flavors.",icon:a.jsx(Le,{})},{name:"Local Tea",desc:"Freshly brewed tea sourced from the surrounding plantations — a refreshing experience.",icon:a.jsx(Le,{})},{name:"Traditional Snacks",desc:"Crispy vadai, murukku, and sundal are popular local treats.",icon:a.jsx(Le,{})}],g=[{name:"Manimuthar Eco Resort",desc:"Eco-friendly cottages located amidst lush greenery for a relaxing stay.",icon:a.jsx(Me,{})},{name:"Hilltop Retreat",desc:"Offers breathtaking views of the Western Ghats and peaceful surroundings.",icon:a.jsx(Me,{})},{name:"Forest View Homestay",desc:"A cozy stay that lets you experience the charm of rural life close to nature.",icon:a.jsx(Me,{})}],w=[{name:"Pongal",month:"January",desc:"A harvest festival celebrated with joy, traditional rituals, and delicious food.",icon:a.jsx(rt,{})},{name:"Aadi Festival",month:"July / August",desc:"Local celebration with temple processions, dance, and devotional music.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Nearest airport is Tuticorin Airport (around 80 km away), connected to major Tamil Nadu cities.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Tirunelveli Railway Station is the closest major station, about 45 km from Manimuthar.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Regular buses and taxis are available from Tirunelveli, Ambasamudram, and Nagercoil.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section Styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Hp,alt:"Manimuthar"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"Nature’s Hidden Paradise of Tamil Nadu"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},D3=()=>{const t="Rameswaram",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Rameswaram, located on Pamban Island in Tamil Nadu, is one of the most sacred pilgrimage towns in India. It is known for its magnificent Ramanathaswamy Temple, calm beaches, and spiritual aura. The town is a part of the Char Dham pilgrimage and holds historical importance in the Ramayana, where Lord Rama built the Rama Setu to reach Lanka.",f=[{name:"Ramanathaswamy Temple",desc:"Famous for its stunning Dravidian architecture and the longest temple corridors in India.",icon:a.jsx(ct,{})},{name:"Pamban Bridge",desc:"India’s first sea bridge connecting Rameswaram to the mainland, offering breathtaking ocean views.",icon:a.jsx(Zt,{})},{name:"Dhanushkodi Beach",desc:"A tranquil beach at the southern tip of Rameswaram, known as the ‘Ghost Town’ after the 1964 cyclone.",icon:a.jsx(Zt,{})},{name:"Agni Theertham",desc:"A sacred beach where pilgrims take a holy dip before visiting the Ramanathaswamy Temple.",icon:a.jsx(ct,{})}],p=[{name:"Seafood Delicacies",desc:"Savor freshly caught fish, prawns, and crab dishes seasoned with authentic coastal spices.",icon:a.jsx(Le,{})},{name:"Idiyappam with Coconut Milk",desc:"A light and flavorful traditional dish made from steamed rice noodles served with coconut milk.",icon:a.jsx(Le,{})},{name:"Filter Coffee",desc:"A rich, aromatic South Indian coffee — perfect to end your meal.",icon:a.jsx(Le,{})}],g=[{name:"Ocean View Resort",desc:"A luxurious seaside stay offering panoramic views of the Bay of Bengal.",icon:a.jsx(Me,{})},{name:"Rameswaram Heritage Hotel",desc:"Blends comfort and tradition, reflecting the spiritual ambiance of the region.",icon:a.jsx(Me,{})},{name:"Hyatt Place Rameswaram",desc:"Premium accommodation with excellent hospitality and proximity to major attractions.",icon:a.jsx(Me,{})}],w=[{name:"Mahashivaratri",month:"February / March",desc:"Celebrated with grandeur in Ramanathaswamy Temple, attracting thousands of pilgrims.",icon:a.jsx(rt,{})},{name:"Rama Navami",month:"April",desc:"Commemorates the birth of Lord Rama with temple rituals, processions, and music.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Nearest airport is Madurai (170 km away), well-connected to major Indian cities.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Rameswaram Railway Station connects directly with Chennai, Madurai, and Trichy.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Regular bus and cab services operate from Madurai, Tiruchirappalli, and Ramanathapuram.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section Styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Wp,alt:"Rameswaram"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"Spiritual Serenity by the Sea"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},z3=()=>{const t="Chennai",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Chennai, the capital of Tamil Nadu, is a vibrant metropolitan city known for its cultural heritage, Marina Beach, temples, colonial architecture, and thriving IT industry.",f=[{name:"Marina Beach",desc:"Iconic beach stretching along the Bay of Bengal.",icon:a.jsx(Dp,{})},{name:"Kapaleeshwarar Temple",desc:"Historic Dravidian-style temple dedicated to Lord Shiva."},{name:"Fort St. George",desc:"Colonial fort showcasing British-era architecture and history."},{name:"Santhome Cathedral",desc:"Famous church built over the tomb of St. Thomas the Apostle."}],p=[{name:"South Indian Breakfast",desc:"Idli, dosa, vada with coconut chutney and sambar.",icon:a.jsx(Le,{})},{name:"Filter Coffee",desc:"Strong and aromatic South Indian coffee.",icon:a.jsx(Le,{})}],g=[{name:"Taj Coromandel",desc:"Luxury hotel with world-class amenities.",icon:a.jsx(Me,{})},{name:"The Leela Palace",desc:"Upscale accommodation with fine dining and heritage charm.",icon:a.jsx(Me,{})}],w=[{name:"Pongal",month:"January",desc:"Harvest festival celebrated with great enthusiasm.",icon:a.jsx(rt,{})},{name:"Chennai Music Season",month:"Dec–Jan",desc:"Annual classical music festival attracting global artists.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Chennai International Airport is a major hub connecting India and the world.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Chennai Central and Chennai Egmore connect to all major Indian cities.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-connected through highways and city transport options.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Section */
        .expand-btn {
          display: block;
          margin: 1rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Up,alt:"Chennai"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Capital City & Cultural Hub of Tamil Nadu"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},_3=()=>{const t="Kodaikanal",r="Kodaikanal is a serene hill station in the Western Ghats, known for its misty mountains, Kodaikanal Lake, waterfalls, and lush forests. It’s often called the “Princess of Hill Stations” for its peaceful ambiance and scenic beauty.",s=[{name:"Kodaikanal Lake",desc:"Star-shaped lake with boating and walking paths."},{name:"Coaker's Walk",desc:"Scenic pathway offering breathtaking valley views."},{name:"Bear Shola Falls",desc:"Popular waterfall amidst lush greenery."},{name:"Bryant Park",desc:"Botanical garden filled with vibrant flowers and rare plants."}],o=[{name:"Homemade Chocolates",desc:"Delicious chocolates made from local cocoa."},{name:"Hill Station Snacks",desc:"Steamed corn, sandwiches, and baked goods."}],c=[{name:"Hilltop Resort",desc:"Comfortable stay with valley views."},{name:"Forest Lodges",desc:"Eco-friendly stays surrounded by nature."}],d=[{name:"Kodaikanal Summer Festival",month:"May",desc:"Floral shows, boat races, and cultural events."}],f=[{mode:"By Road",desc:"Accessible via buses and taxis from Madurai and Coimbatore."}];return R.useEffect(()=>{const p=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>300?p.style.display="block":p.style.display="none"})},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fdfdfd;
          color: #222;
          line-height: 1.8;
          scroll-behavior: smooth;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .district-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(70%);
          transform: scale(1.05);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          animation: fadeInUp 1.2s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
        }

        .hero-text p {
          font-size: 1.4rem;
          margin-top: 0.8rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.5);
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 4rem auto;
          padding: 0 1rem;
          animation: fadeIn 1.2s ease;
        }

        section h2 {
          font-size: 2.4rem;
          text-align: center;
          color: #b45309;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        /* Info Grid Layout */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .info-card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .info-card h3 {
          color: #9a3412;
          margin-bottom: 0.6rem;
          font-size: 1.3rem;
        }

        .info-card p {
          color: #333;
          font-size: 1.1rem;
        }

        .info-card small {
          display: block;
          color: #6b7280;
          margin-bottom: 0.3rem;
        }

        /* Back to Top Button */
        #backToTop {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #b45309;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 50%;
          font-size: 1.3rem;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 100;
          transition: background 0.3s ease;
        }
        #backToTop:hover { background: #92400e; }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.8rem; }
          .hero-text p { font-size: 1.1rem; }
          section { margin: 3rem auto; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:$p,alt:"Kodaikanal"}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"Hill Station & Nature Escape"})]})]}),a.jsxs("section",{children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify"},children:r})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"info-grid",children:s.map((p,g)=>a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:p.name}),a.jsx("p",{children:p.desc})]},g))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"info-grid",children:o.map((p,g)=>a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:p.name}),a.jsx("p",{children:p.desc})]},g))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"info-grid",children:c.map((p,g)=>a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:p.name}),a.jsx("p",{children:p.desc})]},g))})]}),a.jsxs("section",{children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"info-grid",children:d.map((p,g)=>a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:p.name}),a.jsx("small",{children:p.month}),a.jsx("p",{children:p.desc})]},g))})]}),a.jsxs("section",{children:[a.jsxs("h2",{children:["How to Reach ",t]}),a.jsx("div",{className:"info-grid",children:f.map((p,g)=>a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:p.mode}),a.jsx("p",{children:p.desc})]},g))})]}),a.jsx("button",{id:"backToTop",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"})]})},I3=()=>{const t="Tiruchirappalli",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Tiruchirappalli, also known as Trichy, is a vibrant city located on the banks of the Kaveri River. It is renowned for its ancient temples, educational institutions, and rich cultural heritage. The city combines tradition with modernity, making it one of Tamil Nadu’s most dynamic urban centers.",f=[{name:"Rockfort Temple",desc:"An iconic landmark perched atop a massive rock, offering panoramic views of the city and the Kaveri River.",icon:a.jsx(ct,{})},{name:"Sri Ranganathaswamy Temple",desc:"One of India’s largest temple complexes, dedicated to Lord Vishnu, known for its stunning Dravidian architecture.",icon:a.jsx(Zt,{})},{name:"Jambukeswarar Temple",desc:"A renowned Shiva temple representing the element of water, with intricate carvings and serene surroundings.",icon:a.jsx(Zt,{})},{name:"Kallanai (Grand Anicut) Dam",desc:"Built across the Kaveri River by Karikalan Chola, it’s one of the oldest functional dams in the world.",icon:a.jsx(ct,{})}],p=[{name:"South Indian Thali",desc:"A traditional platter featuring rice, sambar, rasam, poriyal, and a variety of curries served on a banana leaf.",icon:a.jsx(Le,{})},{name:"Idli & Vadai",desc:"Soft steamed idlis and crispy vadais served with coconut chutney and spicy sambar.",icon:a.jsx(Le,{})},{name:"Mysore Pak",desc:"A rich, melt-in-the-mouth sweet made from gram flour, sugar, and ghee — a Trichy favorite.",icon:a.jsx(Le,{})}],g=[{name:"Hotel Sangam",desc:"A premium stay offering comfort, traditional hospitality, and local cuisine in the heart of Trichy.",icon:a.jsx(Me,{})},{name:"SRM Hotel",desc:"Elegant accommodation with modern amenities near major tourist attractions.",icon:a.jsx(Me,{})},{name:"Heritage Trichy",desc:"A luxurious stay combining South Indian architecture and comfort near the Rockfort Temple.",icon:a.jsx(Me,{})}],w=[{name:"Pongal",month:"January",desc:"Tamil Nadu’s harvest festival celebrated with joy, traditional dances, and special dishes.",icon:a.jsx(rt,{})},{name:"Car Festival at Srirangam",month:"April / May",desc:"A vibrant temple festival featuring grand chariot processions, devotional songs, and colorful decorations.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Tiruchirappalli International Airport connects to Chennai, Bengaluru, and select international destinations.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Tiruchirappalli Junction is a major railway hub connecting Chennai, Madurai, and Coimbatore.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-connected through NH38 and NH83, with frequent buses from Chennai, Madurai, and Thanjavur.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(65%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.4rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.6rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.7rem 1.3rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.6rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Kp,alt:"Tiruchirappalli City"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Rockfort City of Tamil Nadu"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},V3=()=>{const t="Vellore",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Vellore is a historic city in Tamil Nadu, known for its medical institutions, leather industry, and heritage sites such as the Vellore Fort and Jalakandeswarar Temple. The city beautifully blends history, culture, and modern development, making it a major educational and industrial hub.",f=[{name:"Vellore Fort",desc:"Historic fort with stunning ramparts, temples, and a picturesque moat surrounding it.",icon:a.jsx(ct,{})},{name:"Jalakandeswarar Temple",desc:"Ancient temple dedicated to Lord Shiva, known for its exquisite Dravidian carvings inside the fort.",icon:a.jsx(Zt,{})},{name:"Golden Temple (Sripuram)",desc:"Magnificent temple covered entirely in gold, attracting devotees and tourists from across the country.",icon:a.jsx(ct,{})}],p=[{name:"Vellore Biryani",desc:"A flavorful rice dish cooked with aromatic spices and tender meat, loved by locals and visitors alike.",icon:a.jsx(Le,{})},{name:"Sweet Pongal",desc:"Traditional South Indian dessert made from jaggery, ghee, and rice — served during festivals.",icon:a.jsx(Le,{})}],g=[{name:"Fort Heritage Hotel",desc:"A perfect blend of historical charm and modern amenities offering scenic views of the Vellore Fort.",icon:a.jsx(Me,{})},{name:"Hotel Benzz Park",desc:"Elegant accommodation in the city center with fine dining and comfortable suites.",icon:a.jsx(Me,{})},{name:"Darling Residency",desc:"Luxury hotel with excellent hospitality and proximity to popular tourist spots.",icon:a.jsx(Me,{})}],w=[{name:"Panguni Uthiram",month:"March / April",desc:"Temple festival marked by colorful processions, music, and devotional rituals across the district.",icon:a.jsx(rt,{})},{name:"Deepavali",month:"October / November",desc:"Festival of lights celebrated with grandeur and traditional sweets like Mysore Pak and Jangiri.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"Nearest airport is Chennai International Airport, around 140 km away with regular taxis and buses to Vellore.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Vellore Cantonment and Katpadi Junction are major railway stations connecting to cities like Chennai, Bengaluru, and Coimbatore.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Vellore is well connected via NH48 and NH75 with frequent bus services from Chennai, Hosur, and Bengaluru.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(65%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.4rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.6rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.7rem 1.3rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.6rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Yp,alt:"Vellore City"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Fort City of Tamil Nadu"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},F3=()=>{const t="Thirunelveli",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Thirunelveli, one of the oldest cities in Tamil Nadu, is famous for its temples, waterfalls, and cultural heritage. Known for its natural beauty, traditional sweets, and the majestic Courtallam waterfalls, the city attracts pilgrims and nature enthusiasts alike.",f=[{name:"Courtallam Waterfalls",desc:"Popularly known as the ‘Spa of South India’, Courtallam is a famous waterfall surrounded by lush greenery.",icon:a.jsx(Zt,{})},{name:"Nellaiappar Temple",desc:"An ancient temple dedicated to Lord Shiva, showcasing beautiful Dravidian architecture and intricate carvings.",icon:a.jsx(ct,{})},{name:"Manimuthar Dam",desc:"A serene dam offering scenic views and a peaceful picnic spot surrounded by hills.",icon:a.jsx(Zt,{})},{name:"Papanasam",desc:"A sacred place by the Western Ghats known for the Agasthiyar Falls and Papanasam Dam.",icon:a.jsx(ct,{})}],p=[{name:"Thirunelveli Halwa",desc:"The city’s signature sweet dish, made from wheat, ghee, and sugar, famous across India.",icon:a.jsx(Le,{})},{name:"Idli & Chutney",desc:"Traditional South Indian breakfast delicacy served with coconut chutney and sambar.",icon:a.jsx(Le,{})},{name:"Banana Leaf Meals",desc:"Authentic Tamil meals served on banana leaves, offering a complete traditional experience.",icon:a.jsx(Le,{})}],g=[{name:"Five Falls Resort",desc:"Located near Courtallam, this resort offers a relaxing stay amidst nature and waterfalls.",icon:a.jsx(Me,{})},{name:"Manimuthar Eco Stay",desc:"A calm retreat surrounded by forests and hills for nature lovers.",icon:a.jsx(Me,{})},{name:"Saaral Resort",desc:"Luxury stay near Courtallam with spa facilities and great local cuisine.",icon:a.jsx(Me,{})}],w=[{name:"Car Festival at Nellaiappar Temple",month:"June / July",desc:"A grand temple festival featuring processions, music, and traditional rituals.",icon:a.jsx(rt,{})},{name:"Pongal",month:"January",desc:"Harvest festival celebrated with enthusiasm, traditional dishes, and local dances.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"The nearest airport is Tuticorin Airport (40 km), with regular flights to Chennai and other cities.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Thirunelveli Junction is a major railhead connecting Chennai, Madurai, and Trivandrum.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-connected by NH44 with frequent bus services from Madurai, Nagercoil, and Tiruchendur.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(60%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:iu,alt:"Thirunelveli"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Land of Waterfalls and Temples"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},B3=()=>{const t="Coimbatore",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Coimbatore, known as the Manchester of South India, is an industrial and educational hub in Tamil Nadu. It is famous for its textile heritage, IT industries, pleasant climate, and proximity to hill stations like Valparai and Ooty.",f=[{name:"Marudamalai Temple",desc:"Hilltop temple dedicated to Lord Murugan with scenic views.",icon:a.jsx(ss,{})},{name:"VOC Park",desc:"Beautiful park with gardens, play areas, and recreational facilities.",icon:a.jsx(tc,{})},{name:"Siruvani Waterfalls",desc:"A serene waterfall surrounded by lush greenery and pure water sources.",icon:a.jsx(ss,{})}],p=[{name:"Coimbatore Biryani",desc:"Spiced rice dish unique to Coimbatore with rich flavor.",icon:a.jsx(Le,{})},{name:"Filter Coffee",desc:"Strong aromatic South Indian coffee with creamy froth.",icon:a.jsx(Le,{})}],g=[{name:"Heritage Hotel Coimbatore",desc:"Luxury accommodation blending tradition and comfort.",icon:a.jsx(Me,{})},{name:"City Stays",desc:"Convenient and cozy hotels near major attractions.",icon:a.jsx(Me,{})}],w=[{name:"Pongal",month:"January",desc:"Harvest festival celebrated with vibrant traditions and joy.",icon:a.jsx(tc,{})},{name:"Koniamman Festival",month:"March",desc:"Annual temple festival honoring the city’s guardian deity.",icon:a.jsx(tc,{})}],v=[{mode:"By Air",desc:"Coimbatore International Airport connects to major Indian cities and select international destinations.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Coimbatore Junction offers rail connectivity to Chennai, Bangalore, and other metro cities.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Accessible via NH544 and NH181 with frequent bus and taxi services.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(65%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.4rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.6rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.7rem 1.3rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.6rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:Gp,alt:"Coimbatore City"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Manchester of South India"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})},H3=()=>{const t="Thirunelveli",[r,s]=R.useState(!1),[o,c]=R.useState({}),d="Thirunelveli, one of the oldest cities in Tamil Nadu, is famous for its temples, waterfalls, and cultural heritage. Known for its natural beauty, traditional sweets, and the majestic Courtallam waterfalls, the city attracts pilgrims and nature enthusiasts alike.",f=[{name:"Courtallam Waterfalls",desc:"Popularly known as the ‘Spa of South India’, Courtallam is a famous waterfall surrounded by lush greenery.",icon:a.jsx(Zt,{})},{name:"Nellaiappar Temple",desc:"An ancient temple dedicated to Lord Shiva, showcasing beautiful Dravidian architecture and intricate carvings.",icon:a.jsx(ct,{})},{name:"Manimuthar Dam",desc:"A serene dam offering scenic views and a peaceful picnic spot surrounded by hills.",icon:a.jsx(Zt,{})},{name:"Papanasam",desc:"A sacred place by the Western Ghats known for the Agasthiyar Falls and Papanasam Dam.",icon:a.jsx(ct,{})}],p=[{name:"Thirunelveli Halwa",desc:"The city’s signature sweet dish, made from wheat, ghee, and sugar, famous across India.",icon:a.jsx(Le,{})},{name:"Idli & Chutney",desc:"Traditional South Indian breakfast delicacy served with coconut chutney and sambar.",icon:a.jsx(Le,{})},{name:"Banana Leaf Meals",desc:"Authentic Tamil meals served on banana leaves, offering a complete traditional experience.",icon:a.jsx(Le,{})}],g=[{name:"Five Falls Resort",desc:"Located near Courtallam, this resort offers a relaxing stay amidst nature and waterfalls.",icon:a.jsx(Me,{})},{name:"Manimuthar Eco Stay",desc:"A calm retreat surrounded by forests and hills for nature lovers.",icon:a.jsx(Me,{})},{name:"Saaral Resort",desc:"Luxury stay near Courtallam with spa facilities and great local cuisine.",icon:a.jsx(Me,{})}],w=[{name:"Car Festival at Nellaiappar Temple",month:"June / July",desc:"A grand temple festival featuring processions, music, and traditional rituals.",icon:a.jsx(rt,{})},{name:"Pongal",month:"January",desc:"Harvest festival celebrated with enthusiasm, traditional dishes, and local dances.",icon:a.jsx(rt,{})}],v=[{mode:"By Air",desc:"The nearest airport is Tuticorin Airport (40 km), with regular flights to Chennai and other cities.",icon:a.jsx(tn,{})},{mode:"By Train",desc:"Thirunelveli Junction is a major railhead connecting Chennai, Madurai, and Trivandrum.",icon:a.jsx(nn,{})},{mode:"By Road",desc:"Well-connected by NH44 with frequent bus services from Madurai, Nagercoil, and Tiruchendur.",icon:a.jsx(en,{})}];return R.useEffect(()=>{const m=()=>{const S=document.querySelectorAll("section"),E={};S.forEach(I=>{I.getBoundingClientRect().top<window.innerHeight-100&&(E[I.id]=!0)}),c(E)};return window.addEventListener("scroll",m),m(),()=>window.removeEventListener("scroll",m)},[]),a.jsxs("div",{className:"district-page",children:[a.jsx("style",{children:`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(65%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.4rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.6rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.7rem 1.3rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.6rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}),a.jsxs("div",{className:"district-hero",children:[a.jsx("img",{src:iu,alt:"Thirunelveli City"}),a.jsx("div",{className:"overlay"}),a.jsxs("div",{className:"hero-text",children:[a.jsx("h1",{children:t}),a.jsx("p",{children:"The Land of Waterfalls and Temples"})]})]}),a.jsxs("section",{id:"about",className:o.about?"visible":"",children:[a.jsxs("h2",{children:["About ",t]}),a.jsx("p",{style:{textAlign:"justify",fontSize:"1.1rem"},children:d})]}),a.jsxs("section",{id:"attractions",className:o.attractions?"visible":"",children:[a.jsx("h2",{children:"Top Attractions"}),a.jsx("div",{className:"card-grid",children:f.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"cuisines",className:o.cuisines?"visible":"",children:[a.jsx("h2",{children:"Famous Cuisines"}),a.jsx("div",{className:"card-grid",children:p.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"resorts",className:o.resorts?"visible":"",children:[a.jsx("h2",{children:"Resorts & Accommodation"}),a.jsx("div",{className:"card-grid",children:g.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"festivals",className:o.festivals?"visible":"",children:[a.jsx("h2",{children:"Festivals"}),a.jsx("div",{className:"card-grid",children:w.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.name}),a.jsx("small",{children:m.month}),a.jsx("p",{children:m.desc})]},S))})]}),a.jsxs("section",{id:"reach",className:o.reach?"visible":"",children:[a.jsxs("h2",{children:["How to Reach ",t]}),r&&a.jsx("div",{className:"card-grid",children:v.map((m,S)=>a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-icon",children:m.icon}),a.jsx("h3",{children:m.mode}),a.jsx("p",{children:m.desc})]},S))}),a.jsx("button",{className:"expand-btn",onClick:()=>s(!r),children:r?"Show Less":"Show More"})]})]})};function W3(){const[t,r]=R.useState([]),[s,o]=R.useState(!0),[c,d]=R.useState(null),f={background:"white",padding:"1.2rem",borderRadius:"12px",boxShadow:"0 6px 16px rgba(0,0,0,0.1)",textAlign:"center",fontWeight:"600"},p=()=>{fetch("https://epicure-voyage.onrender.com/api/bookings").then(v=>v.json()).then(v=>{r(v),o(!1)}).catch(v=>{console.error(v),o(!1)})},g=()=>{fetch("https://epicure-voyage.onrender.com/api/admin/stats").then(v=>v.json()).then(v=>d(v)).catch(v=>console.error(v))};R.useEffect(()=>{p(),g()},[]);const w=async(v,m)=>{try{await fetch(`https://epicure-voyage.onrender.com/api/bookings/${v}/status`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:m})}),r(S=>S.map(E=>E.booking_id===v?{...E,booking_status:m}:E)),g()}catch(S){console.error("Status update failed",S),alert("Failed to update status")}};return a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h2",{style:{textAlign:"center",marginBottom:"1.5rem"},children:"📋 Admin Panel – Bookings"}),c&&a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"1rem",marginBottom:"2rem"},children:[a.jsxs("div",{style:f,children:[a.jsx("h3",{children:"Total Bookings"}),a.jsx("p",{children:c.total})]}),a.jsxs("div",{style:{...f,borderLeft:"5px solid green"},children:[a.jsx("h3",{children:"Confirmed"}),a.jsx("p",{children:c.confirmed})]}),a.jsxs("div",{style:{...f,borderLeft:"5px solid orange"},children:[a.jsx("h3",{children:"Pending"}),a.jsx("p",{children:c.pending})]}),a.jsxs("div",{style:{...f,borderLeft:"5px solid crimson"},children:[a.jsx("h3",{children:"Cancelled"}),a.jsx("p",{children:c.cancelled})]})]}),s?a.jsx("p",{style:{textAlign:"center"},children:"Loading bookings..."}):t.length===0?a.jsx("p",{style:{textAlign:"center"},children:"No bookings found."}):a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{border:"1",cellPadding:"10",cellSpacing:"0",width:"100%",children:[a.jsx("thead",{style:{background:"#047857",color:"white"},children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Customer ID"}),a.jsx("th",{children:"Tour"}),a.jsx("th",{children:"Visit Date"}),a.jsx("th",{children:"Proof"}),a.jsx("th",{children:"Payment"}),a.jsx("th",{children:"Amount"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Actions"}),a.jsx("th",{children:"Booked On"})]})}),a.jsx("tbody",{children:t.map(v=>a.jsxs("tr",{children:[a.jsx("td",{children:v.booking_id}),a.jsx("td",{children:v.customer_id}),a.jsx("td",{children:v.tour_package}),a.jsx("td",{children:new Date(v.visit_date).toLocaleDateString()}),a.jsxs("td",{children:[v.proof_type," - ",v.proof_number]}),a.jsx("td",{children:v.payment_method}),a.jsxs("td",{children:["₹",v.amount_paid]}),a.jsx("td",{children:v.booking_status}),a.jsxs("td",{children:[a.jsx("button",{onClick:()=>w(v.booking_id,"Confirmed"),style:{marginRight:"6px",background:"green",color:"white"},children:"Confirm"}),a.jsx("button",{onClick:()=>w(v.booking_id,"Cancelled"),style:{background:"crimson",color:"white"},children:"Cancel"})]}),a.jsx("td",{children:new Date(v.booking_date).toLocaleString()})]},v.booking_id))})]})})]})}function U3(){const[t,r]=R.useState(!1),[s,o]=R.useState(""),c=Qa(),d=async f=>{f.preventDefault(),o("");const p={name:f.target.name?.value,email:f.target.email.value,password:f.target.password.value},g=t?"https://epicure-voyage.onrender.com/api/register":"https://epicure-voyage.onrender.com/api/login";try{const w=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),v=await w.json();if(!w.ok){o(v.error||"Authentication failed");return}localStorage.setItem("user",JSON.stringify({user_id:v.user.user_id,name:v.user.name,email:v.user.email,role:v.user.role})),v.user.role==="ADMIN"?c("/admin"):c("/tours")}catch{o("Server error. Try again later.")}};return a.jsxs("div",{style:Lt.container,children:[a.jsx("div",{style:Lt.overlay}),a.jsxs("div",{style:Lt.card,children:[a.jsx("h1",{style:Lt.title,children:"EPICURE VOYAGE"}),a.jsx("p",{style:Lt.subtitle,children:t?"Create your account":"Welcome back, explore Tamil Nadu"}),a.jsxs("form",{onSubmit:d,style:Lt.form,children:[t&&a.jsx("input",{name:"name",placeholder:"Full Name",required:!0,style:Lt.input}),a.jsx("input",{name:"email",type:"email",placeholder:"Email Address",required:!0,style:Lt.input}),a.jsx("input",{name:"password",type:"password",placeholder:"Password",required:!0,style:Lt.input}),s&&a.jsx("p",{style:Lt.error,children:s}),a.jsx("button",{type:"submit",style:Lt.button,children:t?"Create Account":"Login"})]}),a.jsxs("p",{style:Lt.switchText,children:[t?"Already have an account?":"New to Epicure Voyage?"," ",a.jsx("span",{style:Lt.switchLink,onClick:()=>{r(!t),o("")},children:t?"Login":"Sign up"})]})]})]})}const Lt={container:{minHeight:"100vh",backgroundImage:"url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220')",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",fontFamily:"'Poppins', sans-serif"},overlay:{position:"absolute",inset:0,background:"linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,77,64,0.6))"},card:{position:"relative",zIndex:2,width:"380px",maxWidth:"90%",padding:"2.5rem 2.2rem",borderRadius:"18px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(14px)",boxShadow:"0 25px 60px rgba(0,0,0,0.4)",color:"white",textAlign:"center"},title:{fontFamily:"'Cinzel', serif",letterSpacing:"2px",marginBottom:"0.3rem"},subtitle:{fontSize:"0.95rem",opacity:.9,marginBottom:"1.8rem"},form:{display:"flex",flexDirection:"column",gap:"0.9rem"},input:{padding:"0.65rem 0.8rem",borderRadius:"10px",border:"none",outline:"none",fontSize:"0.9rem"},button:{marginTop:"0.5rem",padding:"0.6rem",borderRadius:"10px",border:"none",cursor:"pointer",background:"#ffd700",color:"#004d40",fontWeight:"700",fontSize:"0.95rem",transition:"0.3s"},switchText:{marginTop:"1.2rem",fontSize:"0.9rem"},switchLink:{color:"#ffd700",cursor:"pointer",fontWeight:"600"},error:{color:"#ffb4b4",fontSize:"0.85rem"}};function $3(){const t=JSON.parse(localStorage.getItem("user")),[r,s]=R.useState([]),[o,c]=R.useState(!0);return R.useEffect(()=>{t&&fetch(`https://epicure-voyage.onrender.com/api/my-bookings/${t.user_id}`).then(d=>d.json()).then(d=>{s(d),c(!1)}).catch(d=>{console.error(d),c(!1)})},[t]),t?a.jsxs("div",{style:{padding:"2rem"},children:[a.jsx("h2",{style:{textAlign:"center",marginBottom:"1.5rem"},children:"🌍 My Trips"}),o?a.jsx("p",{style:{textAlign:"center"},children:"Loading your bookings..."}):r.length===0?a.jsx("p",{style:{textAlign:"center"},children:"You have no bookings yet."}):a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{border:"1",cellPadding:"10",cellSpacing:"0",width:"100%",children:[a.jsx("thead",{style:{background:"#047857",color:"white"},children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Tour"}),a.jsx("th",{children:"Visit Date"}),a.jsx("th",{children:"Payment"}),a.jsx("th",{children:"Amount"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Booked On"})]})}),a.jsx("tbody",{children:r.map(d=>a.jsxs("tr",{children:[a.jsx("td",{children:d.booking_id}),a.jsx("td",{children:d.tour_package}),a.jsx("td",{children:new Date(d.visit_date).toLocaleDateString()}),a.jsx("td",{children:d.payment_method}),a.jsxs("td",{children:["₹",d.amount_paid]}),a.jsx("td",{style:{fontWeight:"bold",color:d.booking_status==="Confirmed"?"green":d.booking_status==="Cancelled"?"crimson":"orange"},children:d.booking_status}),a.jsx("td",{children:new Date(d.booking_date).toLocaleString()})]},d.booking_id))})]})})]}):a.jsx("h2",{style:{textAlign:"center"},children:"Please login to view your trips"})}function K3(){return a.jsxs(K1,{basename:"/",children:[a.jsx("style",{children:`
        /* Global body styles */
        body, html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          
          background-color: #f9f9f9;
          color: #333;
        }

        /* Center content for 404 page */
        .not-found {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60vh;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          color: #ff0000;
        }

        /* Add some spacing between pages and navbar/footer */
        main {
          min-height: 70vh;
          padding: 2rem 1rem;
        }
      `}),a.jsx(fx,{}),a.jsx("main",{children:a.jsxs(S1,{children:[a.jsx(De,{path:"/",element:a.jsx(nw,{})}),a.jsx(De,{path:"/destinations",element:a.jsx(iw,{})}),a.jsx(De,{path:"/tours",element:a.jsx(uw,{})}),a.jsx(De,{path:"/culture",element:a.jsx(gw,{})}),a.jsx(De,{path:"/wildlife",element:a.jsx(Sw,{})}),a.jsx(De,{path:"/cuisine",element:a.jsx(Rw,{})}),a.jsx(De,{path:"/resorts",element:a.jsx(_w,{})}),a.jsx(De,{path:"/festivals",element:a.jsx(Yw,{})}),a.jsx(De,{path:"/about",element:a.jsx(P3,{})}),a.jsx(De,{path:"/contact",element:a.jsx(E3,{})}),a.jsx(De,{path:"/madurai",element:a.jsx(M3,{})}),a.jsx(De,{path:"/ooty",element:a.jsx(L3,{})}),a.jsx(De,{path:"/mahabalipuram",element:a.jsx(O3,{})}),a.jsx(De,{path:"/manimuthar",element:a.jsx(A3,{})}),a.jsx(De,{path:"/rameswaram",element:a.jsx(D3,{})}),a.jsx(De,{path:"/chennai",element:a.jsx(z3,{})}),a.jsx(De,{path:"/kodaikanal",element:a.jsx(_3,{})}),a.jsx(De,{path:"/tiruchirappalli",element:a.jsx(I3,{})}),a.jsx(De,{path:"/vellore",element:a.jsx(V3,{})}),a.jsx(De,{path:"/thanjavur",element:a.jsx(F3,{})}),a.jsx(De,{path:"/coimbatore",element:a.jsx(B3,{})}),a.jsx(De,{path:"/thirunelveli",element:a.jsx(H3,{})}),a.jsx(De,{path:"/admin",element:a.jsx(W3,{})}),a.jsx(De,{path:"/login",element:a.jsx(U3,{})}),a.jsx(De,{path:"/my-bookings",element:a.jsx($3,{})}),a.jsx(De,{path:"/TourismManagementSystem",element:a.jsx(R3,{})}),a.jsx(De,{path:"*",element:a.jsx("div",{className:"not-found",children:"404 - Page Not Found"})})]})}),a.jsx(jx,{})]})}Ov.createRoot(document.getElementById("root")).render(a.jsx(Xn.StrictMode,{children:a.jsx(K3,{})}));
