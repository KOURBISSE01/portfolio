(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zp={exports:{}},hl={},Hp={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),O_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),B_=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),X_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),Ud=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Wp={};function ys(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=ys.prototype;function Tf(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Vp}var wf=Tf.prototype=new Xp;wf.constructor=Tf;Gp(wf,ys.prototype);wf.isPureReactComponent=!0;var Fd=Array.isArray,jp=Object.prototype.hasOwnProperty,Af={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jp.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xo,type:t,key:s,ref:o,props:r,_owner:Af.current}}function q_(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function $_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Od=/\/+/g;function kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$_(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case O_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+kl(o,0):i,Fd(r)?(n="",t!=null&&(n=t.replace(Od,"$&/")+"/"),xa(r,e,n,"",function(u){return u})):r!=null&&(Cf(r)&&(r=q_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+kl(s,a);o+=xa(s,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+kl(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Sa={transition:null},Z_={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Af};function $p(){throw Error("act(...) is not supported in production builds of React.")}Ue.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!Cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ue.Component=ys;Ue.Fragment=k_;Ue.Profiler=z_;Ue.PureComponent=Tf;Ue.StrictMode=B_;Ue.Suspense=W_;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Ue.act=$p;Ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jp.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ue.createContext=function(t){return t={$$typeof:V_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};Ue.createElement=qp;Ue.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(t){return{$$typeof:G_,render:t}};Ue.isValidElement=Cf;Ue.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:K_}};Ue.memo=function(t,e){return{$$typeof:X_,type:t,compare:e===void 0?null:e}};Ue.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};Ue.unstable_act=$p;Ue.useCallback=function(t,e){return zt.current.useCallback(t,e)};Ue.useContext=function(t){return zt.current.useContext(t)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};Ue.useEffect=function(t,e){return zt.current.useEffect(t,e)};Ue.useId=function(){return zt.current.useId()};Ue.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};Ue.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};Ue.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};Ue.useMemo=function(t,e){return zt.current.useMemo(t,e)};Ue.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};Ue.useRef=function(t){return zt.current.useRef(t)};Ue.useState=function(t){return zt.current.useState(t)};Ue.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};Ue.useTransition=function(){return zt.current.useTransition()};Ue.version="18.3.1";Hp.exports=Ue;var Pi=Hp.exports;const Q_=F_(Pi);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=Pi,ev=Symbol.for("react.element"),tv=Symbol.for("react.fragment"),nv=Object.prototype.hasOwnProperty,iv=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ev,type:t,key:s,ref:o,props:r,_owner:iv.current}}hl.Fragment=tv;hl.jsx=Kp;hl.jsxs=Kp;zp.exports=hl;var ne=zp.exports,Hu={},Zp={exports:{}},cn={},Qp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var $=L.length;L.push(Y);e:for(;0<$;){var se=$-1>>>1,Ee=L[se];if(0<r(Ee,Y))L[se]=Y,L[$]=Ee,$=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],$=L.pop();if($!==Y){L[0]=$;e:for(var se=0,Ee=L.length,Fe=Ee>>>1;se<Fe;){var G=2*(se+1)-1,te=L[G],fe=G+1,le=L[fe];if(0>r(te,$))fe<Ee&&0>r(le,te)?(L[se]=le,L[fe]=$,se=fe):(L[se]=te,L[G]=$,se=G);else if(fe<Ee&&0>r(le,$))L[se]=le,L[fe]=$,se=fe;else break e}}return Y}function r(L,Y){var $=L.sortIndex-Y.sortIndex;return $!==0?$:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,v=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=L)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function M(L){if(S=!1,g(L),!v)if(n(l)!==null)v=!0,H(R);else{var Y=n(u);Y!==null&&Z(M,Y.startTime-L)}}function R(L,Y){v=!1,S&&(S=!1,c(b),b=-1),m=!0;var $=d;try{for(g(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||L&&!T());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Ee=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&i(l),g(Y)}else i(l);h=n(l)}if(h!==null)var Fe=!0;else{var G=n(u);G!==null&&Z(M,G.startTime-Y),Fe=!1}return Fe}finally{h=null,d=$,m=!1}}var C=!1,w=null,b=-1,K=5,x=-1;function T(){return!(t.unstable_now()-x<K)}function V(){if(w!==null){var L=t.unstable_now();x=L;var Y=!0;try{Y=w(!0,L)}finally{Y?B():(C=!1,w=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(V)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Q=j.port2;j.port1.onmessage=V,B=function(){Q.postMessage(null)}}else B=function(){p(V,0)};function H(L){w=L,C||(C=!0,B())}function Z(L,Y){b=p(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,H(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var $=d;d=Y;try{return L()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=d;d=L;try{return Y()}finally{d=$}},t.unstable_scheduleCallback=function(L,Y,$){var se=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?se+$:se):$=se,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,L={id:f++,callback:Y,priorityLevel:L,startTime:$,expirationTime:Ee,sortIndex:-1},$>se?(L.sortIndex=$,e(u,L),n(l)===null&&L===n(u)&&(S?(c(b),b=-1):S=!0,Z(M,$-se))):(L.sortIndex=Ee,e(l,L),v||m||(v=!0,H(R))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var Y=d;return function(){var $=d;d=Y;try{return L.apply(this,arguments)}finally{d=$}}}})(Jp);Qp.exports=Jp;var sv=Qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=Pi,un=sv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,eo={};function Mr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(eo[t]=e,t=0;t<e.length;t++)em.add(e[t])}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},Bd={};function lv(t){return Vu.call(Bd,t)?!0:Vu.call(kd,t)?!1:av.test(t)?Bd[t]=!0:(kd[t]=!0,!1)}function uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cv(t,e,n,i){if(e===null||typeof e>"u"||uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rf=/[\-:]([a-z])/g;function Pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);bt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);bt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rf,Pf);bt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cv(e,n,r,i)&&(n=null),i||r===null?lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Nf=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),zd=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Bl;function zs(t){if(Bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bl=e&&e[1]||""}return`
`+Bl+t}var zl=!1;function Hl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function fv(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case zr:return"Portal";case Gu:return"Profiler";case Lf:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nm:return(t.displayName||"Context")+".Consumer";case tm:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nf:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hv(t){var e=rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=hv(t))}function sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function qu(t,e){om(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Hs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function am(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pv=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){pv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(t,e){if(e){if(mv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,es=null,ts=null;function Xd(t){if(t=Mo(t)){if(typeof tc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=vl(e),tc(t.stateNode,t.type,e))}}function dm(t){es?ts?ts.push(t):ts=[t]:es=t}function hm(){if(es){var t=es,e=ts;if(ts=es=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function pm(t,e){return t(e)}function mm(){}var Vl=!1;function gm(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return pm(t,e,n)}finally{Vl=!1,(es!==null||ts!==null)&&(mm(),hm())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var i=vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var nc=!1;if(ai)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{nc=!1}function gv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var js=!1,Ba=null,za=!1,ic=null,_v={onError:function(t){js=!0,Ba=t}};function vv(t,e,n,i,r,s,o,a,l){js=!1,Ba=null,gv.apply(_v,arguments)}function xv(t,e,n,i,r,s,o,a,l){if(vv.apply(this,arguments),js){if(js){var u=Ba;js=!1,Ba=null}else throw Error(ee(198));za||(za=!0,ic=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jd(t){if(Er(t)!==t)throw Error(ee(188))}function Sv(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jd(r),t;if(s===i)return jd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function vm(t){return t=Sv(t),t!==null?xm(t):null}function xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xm(t);if(e!==null)return e;t=t.sibling}return null}var Sm=un.unstable_scheduleCallback,Yd=un.unstable_cancelCallback,yv=un.unstable_shouldYield,Mv=un.unstable_requestPaint,pt=un.unstable_now,Ev=un.unstable_getCurrentPriorityLevel,Uf=un.unstable_ImmediatePriority,ym=un.unstable_UserBlockingPriority,Ha=un.unstable_NormalPriority,Tv=un.unstable_LowPriority,Mm=un.unstable_IdlePriority,pl=null,Vn=null;function wv(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Rv,Av=Math.log,Cv=Math.LN2;function Rv(t){return t>>>=0,t===0?32:31-(Av(t)/Cv|0)|0}var Fo=64,Oo=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Va(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vs(a):(s&=o,s!==0&&(i=Vs(s)))}else o=n&~r,o!==0?i=Vs(o):s!==0&&(i=Vs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function Pv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Pv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Em(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function Lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wm,Of,Am,Cm,Rm,sc=!1,ko=[],bi=null,Li=null,Di=null,io=new Map,ro=new Map,Ti=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function Rs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Mo(e),e!==null&&Of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nv(t,e,n,i,r){switch(e){case"focusin":return bi=Rs(bi,t,e,n,i,r),!0;case"dragenter":return Li=Rs(Li,t,e,n,i,r),!0;case"mouseover":return Di=Rs(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return io.set(s,Rs(io.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ro.set(s,Rs(ro.get(s)||null,t,e,n,i,r)),!0}return!1}function Pm(t){var e=ar(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=_m(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ec=i,n.target.dispatchEvent(i),ec=null}else return e=Mo(n),e!==null&&Of(e),t.blockedOn=n,!1;e.shift()}return!0}function $d(t,e,n){ya(t)&&n.delete(e)}function Iv(){sc=!1,bi!==null&&ya(bi)&&(bi=null),Li!==null&&ya(Li)&&(Li=null),Di!==null&&ya(Di)&&(Di=null),io.forEach($d),ro.forEach($d)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Iv)))}function so(t){function e(r){return Ps(r,t)}if(0<ko.length){Ps(ko[0],t);for(var n=1;n<ko.length;n++){var i=ko[n];i.blockedOn===t&&(i.blockedOn=null)}}for(bi!==null&&Ps(bi,t),Li!==null&&Ps(Li,t),Di!==null&&Ps(Di,t),io.forEach(e),ro.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&Ti.shift()}var ns=hi.ReactCurrentBatchConfig,Ga=!0;function Uv(t,e,n,i){var r=Ze,s=ns.transition;ns.transition=null;try{Ze=1,kf(t,e,n,i)}finally{Ze=r,ns.transition=s}}function Fv(t,e,n,i){var r=Ze,s=ns.transition;ns.transition=null;try{Ze=4,kf(t,e,n,i)}finally{Ze=r,ns.transition=s}}function kf(t,e,n,i){if(Ga){var r=oc(t,e,n,i);if(r===null)Jl(t,e,i,Wa,n),qd(t,i);else if(Nv(r,t,e,n,i))i.stopPropagation();else if(qd(t,i),e&4&&-1<Dv.indexOf(t)){for(;r!==null;){var s=Mo(r);if(s!==null&&wm(s),s=oc(t,e,n,i),s===null&&Jl(t,e,i,Wa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jl(t,e,i,null,n)}}var Wa=null;function oc(t,e,n,i){if(Wa=null,t=If(i),t=ar(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ev()){case Uf:return 1;case ym:return 4;case Ha:case Tv:return 16;case Mm:return 536870912;default:return 16}default:return 16}}var Ci=null,Bf=null,Ma=null;function Lm(){if(Ma)return Ma;var t,e=Bf,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ma=r.slice(t,1<i?1-i:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function Kd(){return!1}function fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:Kd,this.isPropagationStopped=Kd,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=fn(Ms),yo=ct({},Ms,{view:0,detail:0}),Ov=fn(yo),Wl,Xl,bs,ml=ct({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Wl=t.screenX-bs.screenX,Xl=t.screenY-bs.screenY):Xl=Wl=0,bs=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Zd=fn(ml),kv=ct({},ml,{dataTransfer:0}),Bv=fn(kv),zv=ct({},yo,{relatedTarget:0}),jl=fn(zv),Hv=ct({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=fn(Hv),Gv=ct({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=fn(Gv),Xv=ct({},Ms,{data:0}),Qd=fn(Xv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qv[t])?!!e[t]:!1}function Hf(){return $v}var Kv=ct({},yo,{key:function(t){if(t.key){var e=jv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=fn(Kv),Qv=ct({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=fn(Qv),Jv=ct({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),e0=fn(Jv),t0=ct({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=fn(t0),i0=ct({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=fn(i0),s0=[9,13,27,32],Vf=ai&&"CompositionEvent"in window,Ys=null;ai&&"documentMode"in document&&(Ys=document.documentMode);var o0=ai&&"TextEvent"in window&&!Ys,Dm=ai&&(!Vf||Ys&&8<Ys&&11>=Ys),eh=" ",th=!1;function Nm(t,e){switch(t){case"keyup":return s0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function a0(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(th=!0,eh);case"textInput":return t=e.data,t===eh&&th?null:t;default:return null}}function l0(t,e){if(Vr)return t==="compositionend"||!Vf&&Nm(t,e)?(t=Lm(),Ma=Bf=Ci=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dm&&e.locale!=="ko"?null:e.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u0[t.type]:e==="textarea"}function Um(t,e,n,i){dm(i),e=Xa(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,oo=null;function c0(t){jm(t,0)}function gl(t){var e=Xr(t);if(sm(e))return t}function f0(t,e){if(t==="change")return e}var Fm=!1;if(ai){var Yl;if(ai){var ql="oninput"in document;if(!ql){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),ql=typeof ih.oninput=="function"}Yl=ql}else Yl=!1;Fm=Yl&&(!document.documentMode||9<document.documentMode)}function rh(){qs&&(qs.detachEvent("onpropertychange",Om),oo=qs=null)}function Om(t){if(t.propertyName==="value"&&gl(oo)){var e=[];Um(e,oo,t,If(t)),gm(c0,e)}}function d0(t,e,n){t==="focusin"?(rh(),qs=e,oo=n,qs.attachEvent("onpropertychange",Om)):t==="focusout"&&rh()}function h0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(oo)}function p0(t,e){if(t==="click")return gl(e)}function m0(t,e){if(t==="input"||t==="change")return gl(e)}function g0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:g0;function ao(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function sh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oh(t,e){var n=sh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sh(n)}}function km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bm(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _0(t){var e=Bm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&km(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=oh(n,s);var o=oh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v0=ai&&"documentMode"in document&&11>=document.documentMode,Gr=null,ac=null,$s=null,lc=!1;function ah(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||Gr==null||Gr!==ka(i)||(i=Gr,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&ao($s,i)||($s=i,i=Xa(ac,"onSelect"),0<i.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},$l={},zm={};ai&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function _l(t){if($l[t])return $l[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return $l[t]=e[n];return t}var Hm=_l("animationend"),Vm=_l("animationiteration"),Gm=_l("animationstart"),Wm=_l("transitionend"),Xm=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Xm.set(t,e),Mr(e,[t])}for(var Kl=0;Kl<lh.length;Kl++){var Zl=lh[Kl],x0=Zl.toLowerCase(),S0=Zl[0].toUpperCase()+Zl.slice(1);Wi(x0,"on"+S0)}Wi(Hm,"onAnimationEnd");Wi(Vm,"onAnimationIteration");Wi(Gm,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Wm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xv(i,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;uh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;uh(r,a,u),s=l}}}if(za)throw t=ic,za=!1,ic=null,t}function rt(t,e){var n=e[hc];n===void 0&&(n=e[hc]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function Ql(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[Ho]){t[Ho]=!0,em.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||Ql(n,!1,t),Ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,Ql("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(bm(e)){case 1:var r=Uv;break;case 4:r=Fv;break;default:r=kf}n=r.bind(null,e,n,t),r=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gm(function(){var u=s,f=If(n),h=[];e:{var d=Xm.get(t);if(d!==void 0){var m=zf,v=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":m=Zv;break;case"focusin":v="focus",m=jl;break;case"focusout":v="blur",m=jl;break;case"beforeblur":case"afterblur":m=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=e0;break;case Hm:case Vm:case Gm:m=Vv;break;case Wm:m=n0;break;case"scroll":m=Ov;break;case"wheel":m=r0;break;case"copy":case"cut":case"paste":m=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jd}var S=(e&4)!==0,p=!S&&t==="scroll",c=S?d!==null?d+"Capture":null:d;S=[];for(var _=u,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,c!==null&&(M=no(_,c),M!=null&&S.push(uo(_,M,g)))),p)break;_=_.return}0<S.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ec&&(v=n.relatedTarget||n.fromElement)&&(ar(v)||v[li]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?ar(v):null,v!==null&&(p=Er(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(S=Zd,M="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Jd,M="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?d:Xr(m),g=v==null?d:Xr(v),d=new S(M,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,M=null,ar(f)===u&&(S=new S(c,_+"enter",v,n,f),S.target=g,S.relatedTarget=p,M=S),p=M,m&&v)t:{for(S=m,c=v,_=0,g=S;g;g=wr(g))_++;for(g=0,M=c;M;M=wr(M))g++;for(;0<_-g;)S=wr(S),_--;for(;0<g-_;)c=wr(c),g--;for(;_--;){if(S===c||c!==null&&S===c.alternate)break t;S=wr(S),c=wr(c)}S=null}else S=null;m!==null&&ch(h,d,m,S,!1),v!==null&&p!==null&&ch(h,p,v,S,!0)}}e:{if(d=u?Xr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=f0;else if(nh(d))if(Fm)R=m0;else{R=h0;var C=d0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=p0);if(R&&(R=R(t,u))){Um(h,R,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&$u(d,"number",d.value)}switch(C=u?Xr(u):window,t){case"focusin":(nh(C)||C.contentEditable==="true")&&(Gr=C,ac=u,$s=null);break;case"focusout":$s=ac=Gr=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,ah(h,n,f);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":ah(h,n,f)}var w;if(Vf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vr?Nm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Dm&&n.locale!=="ko"&&(Vr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Vr&&(w=Lm()):(Ci=f,Bf="value"in Ci?Ci.value:Ci.textContent,Vr=!0)),C=Xa(u,b),0<C.length&&(b=new Qd(b,t,null,n,f),h.push({event:b,listeners:C}),w?b.data=w:(w=Im(n),w!==null&&(b.data=w)))),(w=o0?a0(t,n):l0(t,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(f=new Qd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=w))}jm(h,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=no(t,n),s!=null&&i.unshift(uo(t,s,r)),s=no(t,e),s!=null&&i.push(uo(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=no(n,s),l!=null&&o.unshift(uo(n,l,a))):r||(l=no(n,s),l!=null&&o.push(uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var M0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function fh(t){return(typeof t=="string"?t:""+t).replace(M0,`
`).replace(E0,"")}function Vo(t,e,n){if(e=fh(e),fh(t)!==e&&n)throw Error(ee(425))}function ja(){}var uc=null,cc=null;function fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(A0)}:dc;function A0(t){setTimeout(function(){throw t})}function eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),so(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);so(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Es,co="__reactProps$"+Es,li="__reactContainer$"+Es,hc="__reactEvents$"+Es,C0="__reactListeners$"+Es,R0="__reactHandles$"+Es;function ar(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[li]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hh(t);t!==null;){if(n=t[Hn])return n;t=hh(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[Hn]||t[li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function vl(t){return t[co]||null}var pc=[],jr=-1;function Xi(t){return{current:t}}function ot(t){0>jr||(t.current=pc[jr],pc[jr]=null,jr--)}function tt(t,e){jr++,pc[jr]=t.current,t.current=e}var Hi={},Ft=Xi(Hi),qt=Xi(!1),mr=Hi;function us(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function $t(t){return t=t.childContextTypes,t!=null}function Ya(){ot(qt),ot(Ft)}function ph(t,e,n){if(Ft.current!==Hi)throw Error(ee(168));tt(Ft,e),tt(qt,n)}function qm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,dv(t)||"Unknown",r));return ct({},n,i)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,mr=Ft.current,tt(Ft,t),tt(qt,qt.current),!0}function mh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=qm(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,ot(qt),ot(Ft),tt(Ft,t)):ot(qt),tt(qt,n)}var Jn=null,xl=!1,tu=!1;function $m(t){Jn===null?Jn=[t]:Jn.push(t)}function P0(t){xl=!0,$m(t)}function ji(){if(!tu&&Jn!==null){tu=!0;var t=0,e=Ze;try{var n=Jn;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Jn=null,xl=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(t+1)),Sm(Uf,ji),r}finally{Ze=e,tu=!1}}return null}var Yr=[],qr=0,$a=null,Ka=0,pn=[],mn=0,gr=null,ti=1,ni="";function tr(t,e){Yr[qr++]=Ka,Yr[qr++]=$a,$a=t,Ka=e}function Km(t,e,n){pn[mn++]=ti,pn[mn++]=ni,pn[mn++]=gr,gr=t;var i=ti;t=ni;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-In(e)+r|n<<r|i,ni=s+t}else ti=1<<s|n<<r|i,ni=t}function Wf(t){t.return!==null&&(tr(t,1),Km(t,1,0))}function Xf(t){for(;t===$a;)$a=Yr[--qr],Yr[qr]=null,Ka=Yr[--qr],Yr[qr]=null;for(;t===gr;)gr=pn[--mn],pn[mn]=null,ni=pn[--mn],pn[mn]=null,ti=pn[--mn],pn[mn]=null}var ln=null,an=null,at=!1,bn=null;function Zm(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(at){var e=an;if(e){var n=e;if(!gh(t,e)){if(mc(t))throw Error(ee(418));e=Ni(n.nextSibling);var i=ln;e&&gh(t,e)?Zm(i,n):(t.flags=t.flags&-4097|2,at=!1,ln=t)}}else{if(mc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,at=!1,ln=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function Go(t){if(t!==ln)return!1;if(!at)return _h(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fc(t.type,t.memoizedProps)),e&&(e=an)){if(mc(t))throw Qm(),Error(ee(418));for(;e;)Zm(t,e),e=Ni(e.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?Ni(t.stateNode.nextSibling):null;return!0}function Qm(){for(var t=an;t;)t=Ni(t.nextSibling)}function cs(){an=ln=null,at=!1}function jf(t){bn===null?bn=[t]:bn.push(t)}var b0=hi.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vh(t){var e=t._init;return e(t._payload)}function Jm(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Oi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,M){return _===null||_.tag!==6?(_=lu(g,c.mode,M),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,M){var R=g.type;return R===Hr?f(c,_,g.props.children,M,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Mi&&vh(R)===_.type)?(M=r(_,g.props),M.ref=Ls(c,_,g),M.return=c,M):(M=ba(g.type,g.key,g.props,null,c.mode,M),M.ref=Ls(c,_,g),M.return=c,M)}function u(c,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=uu(g,c.mode,M),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,M,R){return _===null||_.tag!==7?(_=hr(g,c.mode,M,R),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=lu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case No:return g=ba(_.type,_.key,_.props,null,c.mode,g),g.ref=Ls(c,null,_),g.return=c,g;case zr:return _=uu(_,c.mode,g),_.return=c,_;case Mi:var M=_._init;return h(c,M(_._payload),g)}if(Hs(_)||As(_))return _=hr(_,c.mode,g,null),_.return=c,_;Wo(c,_)}return null}function d(c,_,g,M){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(c,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case No:return g.key===R?l(c,_,g,M):null;case zr:return g.key===R?u(c,_,g,M):null;case Mi:return R=g._init,d(c,_,R(g._payload),M)}if(Hs(g)||As(g))return R!==null?null:f(c,_,g,M,null);Wo(c,g)}return null}function m(c,_,g,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(g)||null,a(_,c,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case No:return c=c.get(M.key===null?g:M.key)||null,l(_,c,M,R);case zr:return c=c.get(M.key===null?g:M.key)||null,u(_,c,M,R);case Mi:var C=M._init;return m(c,_,g,C(M._payload),R)}if(Hs(M)||As(M))return c=c.get(g)||null,f(_,c,M,R,null);Wo(_,M)}return null}function v(c,_,g,M){for(var R=null,C=null,w=_,b=_=0,K=null;w!==null&&b<g.length;b++){w.index>b?(K=w,w=null):K=w.sibling;var x=d(c,w,g[b],M);if(x===null){w===null&&(w=K);break}t&&w&&x.alternate===null&&e(c,w),_=s(x,_,b),C===null?R=x:C.sibling=x,C=x,w=K}if(b===g.length)return n(c,w),at&&tr(c,b),R;if(w===null){for(;b<g.length;b++)w=h(c,g[b],M),w!==null&&(_=s(w,_,b),C===null?R=w:C.sibling=w,C=w);return at&&tr(c,b),R}for(w=i(c,w);b<g.length;b++)K=m(w,c,b,g[b],M),K!==null&&(t&&K.alternate!==null&&w.delete(K.key===null?b:K.key),_=s(K,_,b),C===null?R=K:C.sibling=K,C=K);return t&&w.forEach(function(T){return e(c,T)}),at&&tr(c,b),R}function S(c,_,g,M){var R=As(g);if(typeof R!="function")throw Error(ee(150));if(g=R.call(g),g==null)throw Error(ee(151));for(var C=R=null,w=_,b=_=0,K=null,x=g.next();w!==null&&!x.done;b++,x=g.next()){w.index>b?(K=w,w=null):K=w.sibling;var T=d(c,w,x.value,M);if(T===null){w===null&&(w=K);break}t&&w&&T.alternate===null&&e(c,w),_=s(T,_,b),C===null?R=T:C.sibling=T,C=T,w=K}if(x.done)return n(c,w),at&&tr(c,b),R;if(w===null){for(;!x.done;b++,x=g.next())x=h(c,x.value,M),x!==null&&(_=s(x,_,b),C===null?R=x:C.sibling=x,C=x);return at&&tr(c,b),R}for(w=i(c,w);!x.done;b++,x=g.next())x=m(w,c,b,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?b:x.key),_=s(x,_,b),C===null?R=x:C.sibling=x,C=x);return t&&w.forEach(function(V){return e(c,V)}),at&&tr(c,b),R}function p(c,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case No:e:{for(var R=g.key,C=_;C!==null;){if(C.key===R){if(R=g.type,R===Hr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Mi&&vh(R)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Ls(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===Hr?(_=hr(g.props.children,c.mode,M,g.key),_.return=c,c=_):(M=ba(g.type,g.key,g.props,null,c.mode,M),M.ref=Ls(c,_,g),M.return=c,c=M)}return o(c);case zr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=uu(g,c.mode,M),_.return=c,c=_}return o(c);case Mi:return C=g._init,p(c,_,C(g._payload),M)}if(Hs(g))return v(c,_,g,M);if(As(g))return S(c,_,g,M);Wo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=lu(g,c.mode,M),_.return=c,c=_),o(c)):n(c,_)}return p}var fs=Jm(!0),eg=Jm(!1),Za=Xi(null),Qa=null,$r=null,Yf=null;function qf(){Yf=$r=Qa=null}function $f(t){var e=Za.current;ot(Za),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function is(t,e){Qa=t,Yf=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Qa===null)throw Error(ee(308));$r=t,Qa.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var lr=null;function Kf(t){lr===null?lr=[t]:lr.push(t)}function tg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}function xh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(d=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=ct({},h,d);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=h}}function Sh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Eo={},Gn=Xi(Eo),fo=Xi(Eo),ho=Xi(Eo);function ur(t){if(t===Eo)throw Error(ee(174));return t}function Qf(t,e){switch(tt(ho,e),tt(fo,t),tt(Gn,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zu(e,t)}ot(Gn),tt(Gn,e)}function ds(){ot(Gn),ot(fo),ot(ho)}function ig(t){ur(ho.current);var e=ur(Gn.current),n=Zu(e,t.type);e!==n&&(tt(fo,t),tt(Gn,n))}function Jf(t){fo.current===t&&(ot(Gn),ot(fo))}var lt=Xi(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nu=[];function ed(){for(var t=0;t<nu.length;t++)nu[t]._workInProgressVersionPrimary=null;nu.length=0}var wa=hi.ReactCurrentDispatcher,iu=hi.ReactCurrentBatchConfig,_r=0,ut=null,St=null,wt=null,tl=!1,Ks=!1,po=0,L0=0;function Lt(){throw Error(ee(321))}function td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function nd(t,e,n,i,r,s){if(_r=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?U0:F0,t=n(i,r),Ks){s=0;do{if(Ks=!1,po=0,25<=s)throw Error(ee(301));s+=1,wt=St=null,e.updateQueue=null,wa.current=O0,t=n(i,r)}while(Ks)}if(wa.current=nl,e=St!==null&&St.next!==null,_r=0,wt=St=ut=null,tl=!1,e)throw Error(ee(300));return t}function id(){var t=po!==0;return po=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ut.memoizedState=wt=t:wt=wt.next=t,wt}function Mn(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=wt===null?ut.memoizedState:wt.next;if(e!==null)wt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},wt===null?ut.memoizedState=wt=t:wt=wt.next=t}return wt}function mo(t,e){return typeof e=="function"?e(t):e}function ru(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((_r&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ut.lanes|=f,vr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function su(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rg(){}function sg(t,e){var n=ut,i=Mn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,rd(lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,go(9,ag.bind(null,n,i,r,e),void 0,null),At===null)throw Error(ee(349));_r&30||og(n,e,r)}return r}function og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ag(t,e,n,i){e.value=n,e.getSnapshot=i,ug(e)&&cg(t)}function lg(t,e,n){return n(function(){ug(e)&&cg(t)})}function ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function cg(t){var e=ui(t,1);e!==null&&Un(e,t,1,-1)}function yh(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=I0.bind(null,ut,t),[e.memoizedState,t]}function go(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fg(){return Mn().memoizedState}function Aa(t,e,n,i){var r=kn();ut.flags|=t,r.memoizedState=go(1|e,n,void 0,i===void 0?null:i)}function Sl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&td(i,o.deps)){r.memoizedState=go(e,n,s,i);return}}ut.flags|=t,r.memoizedState=go(1|e,n,s,i)}function Mh(t,e){return Aa(8390656,8,t,e)}function rd(t,e){return Sl(2048,8,t,e)}function dg(t,e){return Sl(4,2,t,e)}function hg(t,e){return Sl(4,4,t,e)}function pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mg(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4,4,pg.bind(null,e,t),n)}function sd(){}function gg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _g(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vg(t,e,n){return _r&21?(Fn(n,e)||(n=Em(),ut.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function D0(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=iu.transition;iu.transition={};try{t(!1),e()}finally{Ze=n,iu.transition=i}}function xg(){return Mn().memoizedState}function N0(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Sg(t))yg(e,n);else if(n=tg(t,e,n,i),n!==null){var r=Bt();Un(n,t,i,r),Mg(n,e,i)}}function I0(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sg(t))yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,Kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tg(t,e,r,i),n!==null&&(r=Bt(),Un(n,t,i,r),Mg(n,e,i))}}function Sg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function yg(t,e){Ks=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}var nl={readContext:yn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},U0={readContext:yn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Mh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:yh,useDebugValue:sd,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=yh(!1),e=t[0];return t=D0.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=kn();if(at){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),At===null)throw Error(ee(349));_r&30||og(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Mh(lg.bind(null,i,s,t),[t]),i.flags|=2048,go(9,ag.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=At.identifierPrefix;if(at){var n=ni,i=ti;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=L0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F0={readContext:yn,useCallback:gg,useContext:yn,useEffect:rd,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:ru,useRef:fg,useState:function(){return ru(mo)},useDebugValue:sd,useDeferredValue:function(t){var e=Mn();return vg(e,St.memoizedState,t)},useTransition:function(){var t=ru(mo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1},O0={readContext:yn,useCallback:gg,useContext:yn,useEffect:rd,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:su,useRef:fg,useState:function(){return su(mo)},useDebugValue:sd,useDeferredValue:function(t){var e=Mn();return St===null?e.memoizedState=t:vg(e,St.memoizedState,t)},useTransition:function(){var t=su(mo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Fi(t),s=oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Un(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Fi(t),s=oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(Un(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),i=Fi(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(Un(e,t,i,n),Ta(e,t,i))}};function Eh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function Eg(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(r=$t(e)?mr:Ft.current,i=e.contextTypes,s=(i=i!=null)?us(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Th(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function xc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yn(s):(s=$t(e)?mr:Ft.current,r.context=us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),Ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",i=e;do n+=fv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){rl||(rl=!0,bc=i),Sc(t,e)},n}function wg(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sc(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new k0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Q0.bind(null,t,e,n),e.then(t,t))}function Ah(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ch(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var B0=hi.ReactCurrentOwner,Yt=!1;function kt(t,e,n,i){e.child=t===null?eg(e,null,n,i):fs(e,t.child,n,i)}function Rh(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=nd(t,e,n,i,s,r),n=id(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(at&&n&&Wf(e),e.flags|=1,kt(t,e,i,r),e.child)}function Ph(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=Oi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,ci(t,e,r)}return yc(t,e,n,i,r)}function Cg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Zr,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Zr,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Zr,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Zr,on),on|=i;return kt(t,e,r,n),e.child}function Rg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yc(t,e,n,i,r){var s=$t(n)?mr:Ft.current;return s=us(e,s),is(e,r),n=nd(t,e,n,i,s,r),i=id(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(at&&i&&Wf(e),e.flags|=1,kt(t,e,n,r),e.child)}function bh(t,e,n,i,r){if($t(n)){var s=!0;qa(e)}else s=!1;if(is(e,r),e.stateNode===null)Ca(t,e),Eg(e,n,i),xc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=$t(n)?mr:Ft.current,u=us(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Th(e,o,i,u),Ei=!1;var d=e.memoizedState;o.state=d,Ja(e,i,o,r),l=e.memoizedState,a!==i||d!==l||qt.current||Ei?(typeof f=="function"&&(vc(e,n,f,i),l=e.memoizedState),(a=Ei||Eh(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ng(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=$t(n)?mr:Ft.current,l=us(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Th(e,o,i,l),Ei=!1,d=e.memoizedState,o.state=d,Ja(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||qt.current||Ei?(typeof m=="function"&&(vc(e,n,m,i),v=e.memoizedState),(u=Ei||Eh(e,n,u,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Mc(t,e,n,i,s,r)}function Mc(t,e,n,i,r,s){Rg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mh(e,n,!1),ci(t,e,s);i=e.stateNode,B0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):kt(t,e,a,s),e.memoizedState=i.state,r&&mh(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ph(t,e.context,!1),Qf(t,e.containerInfo)}function Lh(t,e,n,i,r){return cs(),jf(r),e.flags|=256,kt(t,e,n,i),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Tc(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,i,0,null),t=hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tc(n),e.memoizedState=Ec,t):od(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return z0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Oi(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Tc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ec,i}return s=t.child,t=s.sibling,i=Oi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function od(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&jf(i),fs(e,t.child,null,n),t=od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ou(Error(ee(422))),Xo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tl({mode:"visible",children:i.children},r,0,null),s=hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Tc(o),e.memoizedState=Ec,s);if(!(e.mode&1))return Xo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=ou(s,i,void 0),Xo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yt||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),Un(i,t,r,-1))}return dd(),i=ou(Error(ee(421))),Xo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=J0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=Ni(r.nextSibling),ln=e,at=!0,bn=null,t!==null&&(pn[mn++]=ti,pn[mn++]=ni,pn[mn++]=gr,ti=t.id,ni=t.overflow,gr=e),e=od(e,i.children),e.flags|=4096,e)}function Dh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_c(t.return,e,n)}function au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,n,e);else if(t.tag===19)Dh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&el(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}au(e,!0,n,null,s);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H0(t,e,n){switch(e.tag){case 3:Pg(e),cs();break;case 5:ig(e);break;case 1:$t(e.type)&&qa(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?bg(t,e,n):(tt(lt,lt.current&1),t=ci(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Cg(t,e,n)}return ci(t,e,n)}var Dg,wc,Ng,Ig;Dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wc=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Gn.current);var s=null;switch(n){case"input":r=Yu(t,r),i=Yu(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Ku(t,r),i=Ku(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}Qu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ig=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ds(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V0(t,e,n){var i=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return $t(e.type)&&Ya(),Dt(e),null;case 3:return i=e.stateNode,ds(),ot(qt),ot(Ft),ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(Nc(bn),bn=null))),wc(t,e),Dt(e),null;case 5:Jf(e);var r=ur(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Dt(e),null}if(t=ur(Gn.current),Go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[co]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Gs.length;r++)rt(Gs[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Hd(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Gd(i,s),rt("invalid",i)}Qu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vo(i.textContent,a,t),r=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Io(i),Vd(i,s,!0);break;case"textarea":Io(i),Wd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[co]=i,Dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ju(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Gs.length;r++)rt(Gs[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Hd(t,i),r=Yu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Gd(t,i),r=Ku(t,i),rt("invalid",t);break;default:r=i}Qu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&bf(t,s,l,o))}switch(n){case"input":Io(t),Vd(t,i,!1);break;case"textarea":Io(t),Wd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=ur(ho.current),ur(Gn.current),Go(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Dt(e),null;case 13:if(ot(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&an!==null&&e.mode&1&&!(e.flags&128))Qm(),cs(),e.flags|=98560,s=!1;else if(s=Go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Hn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else bn!==null&&(Nc(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?yt===0&&(yt=3):dd())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ds(),wc(t,e),t===null&&lo(e.stateNode.containerInfo),Dt(e),null;case 10:return $f(e.type._context),Dt(e),null;case 17:return $t(e.type)&&Ya(),Dt(e),null;case 19:if(ot(lt),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ds(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=128,Ds(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>ps&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304)}else{if(!i)if(t=el(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Dt(e),null}else 2*pt()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return fd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function G0(t,e){switch(Xf(e),e.tag){case 1:return $t(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),ot(qt),ot(Ft),ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(ot(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(lt),null;case 4:return ds(),null;case 10:return $f(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var jo=!1,Ut=!1,W0=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Ac(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Nh=!1;function X0(t,e){if(uc=Ga,t=Bm(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},Ga=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,p=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?S:Rn(e.type,S),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){dt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=Nh,Nh=!1,v}function Zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ac(e,n,s)}r=r.next}while(r!==i)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ug(t){var e=t.alternate;e!==null&&(t.alternate=null,Ug(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[co],delete e[hc],delete e[C0],delete e[R0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fg(t){return t.tag===5||t.tag===3||t.tag===4}function Ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function Pc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}var Rt=null,Pn=!1;function mi(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:Ut||Kr(n,e);case 6:var i=Rt,r=Pn;Rt=null,mi(t,e,n),Rt=i,Pn=r,Rt!==null&&(Pn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Pn?(t=Rt,n=n.stateNode,t.nodeType===8?eu(t.parentNode,n):t.nodeType===1&&eu(t,n),so(t)):eu(Rt,n.stateNode));break;case 4:i=Rt,r=Pn,Rt=n.stateNode.containerInfo,Pn=!0,mi(t,e,n),Rt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ut&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ac(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!Ut&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Ut=(i=Ut)||n.memoizedState!==null,mi(t,e,n),Ut=i):mi(t,e,n);break;default:mi(t,e,n)}}function Uh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W0),e.forEach(function(i){var r=ex.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,Pn=!1;break e;case 3:Rt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Rt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Rt===null)throw Error(ee(160));Og(s,o,r),Rt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),On(t),i&4){try{Zs(3,t,t.return),Ml(3,t)}catch(S){dt(t,t.return,S)}try{Zs(5,t,t.return)}catch(S){dt(t,t.return,S)}}break;case 1:Tn(e,t),On(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(Tn(e,t),On(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{to(r,"")}catch(S){dt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&om(r,s),Ju(a,o);var u=Ju(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?fm(r,h):f==="dangerouslySetInnerHTML"?um(r,h):f==="children"?to(r,h):bf(r,f,h,u)}switch(a){case"input":qu(r,s);break;case"textarea":am(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Jr(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[co]=s}catch(S){dt(t,t.return,S)}}break;case 6:if(Tn(e,t),On(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){dt(t,t.return,S)}}break;case 3:if(Tn(e,t),On(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(S){dt(t,t.return,S)}break;case 4:Tn(e,t),On(t);break;case 13:Tn(e,t),On(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ud=pt())),i&4&&Uh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(u=Ut)||f,Tn(e,t),Ut=u):Tn(e,t),On(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(h=pe=f;pe!==null;){switch(d=pe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Zs(4,d,d.return);break;case 1:Kr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){dt(i,n,S)}}break;case 5:Kr(d,d.return);break;case 22:if(d.memoizedState!==null){Oh(h);continue}}m!==null?(m.return=d,pe=m):Oh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cm("display",o))}catch(S){dt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){dt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),On(t),i&4&&Uh(t);break;case 21:break;default:Tn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(to(r,""),i.flags&=-33);var s=Ih(t);Pc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ih(t);Rc(t,a,o);break;default:throw Error(ee(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j0(t,e,n){pe=t,Bg(t)}function Bg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=jo;var u=Ut;if(jo=o,(Ut=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?kh(r):l!==null?(l.return=o,pe=l):kh(r);for(;s!==null;)pe=s,Bg(s),s=s.sibling;pe=r,jo=a,Ut=u}Fh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Fh(t)}}function Fh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||Ml(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ut)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&so(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ut||e.flags&512&&Cc(e)}catch(d){dt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Oh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function kh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{Cc(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{Cc(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Y0=Math.ceil,il=hi.ReactCurrentDispatcher,ad=hi.ReactCurrentOwner,xn=hi.ReactCurrentBatchConfig,Ge=0,At=null,xt=null,Pt=0,on=0,Zr=Xi(0),yt=0,_o=null,vr=0,El=0,ld=0,Qs=null,Xt=null,ud=0,ps=1/0,Qn=null,rl=!1,bc=null,Ui=null,Yo=!1,Ri=null,sl=0,Js=0,Lc=null,Ra=-1,Pa=0;function Bt(){return Ge&6?pt():Ra!==-1?Ra:Ra=pt()}function Fi(t){return t.mode&1?Ge&2&&Pt!==0?Pt&-Pt:b0.transition!==null?(Pa===0&&(Pa=Em()),Pa):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Un(t,e,n,i){if(50<Js)throw Js=0,Lc=null,Error(ee(185));So(t,n,i),(!(Ge&2)||t!==At)&&(t===At&&(!(Ge&2)&&(El|=n),yt===4&&wi(t,Pt)),Kt(t,i),n===1&&Ge===0&&!(e.mode&1)&&(ps=pt()+500,xl&&ji()))}function Kt(t,e){var n=t.callbackNode;bv(t,e);var i=Va(t,t===At?Pt:0);if(i===0)n!==null&&Yd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yd(n),e===1)t.tag===0?P0(Bh.bind(null,t)):$m(Bh.bind(null,t)),w0(function(){!(Ge&6)&&ji()}),n=null;else{switch(Tm(i)){case 1:n=Uf;break;case 4:n=ym;break;case 16:n=Ha;break;case 536870912:n=Mm;break;default:n=Ha}n=Yg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(Ra=-1,Pa=0,Ge&6)throw Error(ee(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var i=Va(t,t===At?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ol(t,i);else{e=i;var r=Ge;Ge|=2;var s=Vg();(At!==t||Pt!==e)&&(Qn=null,ps=pt()+500,dr(t,e));do try{K0();break}catch(a){Hg(t,a)}while(!0);qf(),il.current=s,Ge=r,xt!==null?e=0:(At=null,Pt=0,e=yt)}if(e!==0){if(e===2&&(r=rc(t),r!==0&&(i=r,e=Dc(t,r))),e===1)throw n=_o,dr(t,0),wi(t,i),Kt(t,pt()),n;if(e===6)wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!q0(r)&&(e=ol(t,i),e===2&&(s=rc(t),s!==0&&(i=s,e=Dc(t,s))),e===1))throw n=_o,dr(t,0),wi(t,i),Kt(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:nr(t,Xt,Qn);break;case 3:if(wi(t,i),(i&130023424)===i&&(e=ud+500-pt(),10<e)){if(Va(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Bt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dc(nr.bind(null,t,Xt,Qn),e);break}nr(t,Xt,Qn);break;case 4:if(wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y0(i/1960))-i,10<i){t.timeoutHandle=dc(nr.bind(null,t,Xt,Qn),i);break}nr(t,Xt,Qn);break;case 5:nr(t,Xt,Qn);break;default:throw Error(ee(329))}}}return Kt(t,pt()),t.callbackNode===n?zg.bind(null,t):null}function Dc(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=ol(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Nc(e)),t}function Nc(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function q0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~ld,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function Bh(t){if(Ge&6)throw Error(ee(327));rs();var e=Va(t,0);if(!(e&1))return Kt(t,pt()),null;var n=ol(t,e);if(t.tag!==0&&n===2){var i=rc(t);i!==0&&(e=i,n=Dc(t,i))}if(n===1)throw n=_o,dr(t,0),wi(t,e),Kt(t,pt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Xt,Qn),Kt(t,pt()),null}function cd(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(ps=pt()+500,xl&&ji())}}function xr(t){Ri!==null&&Ri.tag===0&&!(Ge&6)&&rs();var e=Ge;Ge|=1;var n=xn.transition,i=Ze;try{if(xn.transition=null,Ze=1,t)return t()}finally{Ze=i,xn.transition=n,Ge=e,!(Ge&6)&&ji()}}function fd(){on=Zr.current,ot(Zr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ya();break;case 3:ds(),ot(qt),ot(Ft),ed();break;case 5:Jf(i);break;case 4:ds();break;case 13:ot(lt);break;case 19:ot(lt);break;case 10:$f(i.type._context);break;case 22:case 23:fd()}n=n.return}if(At=t,xt=t=Oi(t.current,null),Pt=on=e,yt=0,_o=null,ld=El=vr=0,Xt=Qs=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}lr=null}return t}function Hg(t,e){do{var n=xt;try{if(qf(),wa.current=nl,tl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tl=!1}if(_r=0,wt=St=ut=null,Ks=!1,po=0,ad.current=null,n===null||n.return===null){yt=1,_o=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Ah(o);if(m!==null){m.flags&=-257,Ch(m,o,a,s,e),m.mode&1&&wh(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){wh(s,u,e),dd();break e}l=Error(ee(426))}}else if(at&&a.mode&1){var p=Ah(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ch(p,o,a,s,e),jf(hs(l,a));break e}}s=l=hs(l,a),yt!==4&&(yt=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Tg(s,l,e);xh(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ui===null||!Ui.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=wg(s,a,e);xh(s,M);break e}}s=s.return}while(s!==null)}Wg(n)}catch(R){e=R,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Vg(){var t=il.current;return il.current=nl,t===null?nl:t}function dd(){(yt===0||yt===3||yt===2)&&(yt=4),At===null||!(vr&268435455)&&!(El&268435455)||wi(At,Pt)}function ol(t,e){var n=Ge;Ge|=2;var i=Vg();(At!==t||Pt!==e)&&(Qn=null,dr(t,e));do try{$0();break}catch(r){Hg(t,r)}while(!0);if(qf(),Ge=n,il.current=i,xt!==null)throw Error(ee(261));return At=null,Pt=0,yt}function $0(){for(;xt!==null;)Gg(xt)}function K0(){for(;xt!==null&&!yv();)Gg(xt)}function Gg(t){var e=jg(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Wg(t):xt=e,ad.current=null}function Wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=G0(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,xt=null;return}}else if(n=V0(n,e,on),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);yt===0&&(yt=5)}function nr(t,e,n){var i=Ze,r=xn.transition;try{xn.transition=null,Ze=1,Z0(t,e,n,i)}finally{xn.transition=r,Ze=i}return null}function Z0(t,e,n,i){do rs();while(Ri!==null);if(Ge&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lv(t,s),t===At&&(xt=At=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Yg(Ha,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=Ze;Ze=1;var a=Ge;Ge|=4,ad.current=null,X0(t,n),kg(n,t),_0(cc),Ga=!!uc,cc=uc=null,t.current=n,j0(n),Mv(),Ge=a,Ze=o,xn.transition=s}else t.current=n;if(Yo&&(Yo=!1,Ri=t,sl=r),s=t.pendingLanes,s===0&&(Ui=null),wv(n.stateNode),Kt(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,t=bc,bc=null,t;return sl&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Lc?Js++:(Js=0,Lc=t):Js=0,ji(),null}function rs(){if(Ri!==null){var t=Tm(sl),e=xn.transition,n=Ze;try{if(xn.transition=null,Ze=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,sl=0,Ge&6)throw Error(ee(331));var r=Ge;for(Ge|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var h=f.child;if(h!==null)h.return=f,pe=h;else for(;pe!==null;){f=pe;var d=f.sibling,m=f.return;if(Ug(f),f===u){pe=null;break}if(d!==null){d.return=m,pe=d;break}pe=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,pe=c;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(R){dt(a,a.return,R)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Ge=r,ji(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(pl,t)}catch{}i=!0}return i}finally{Ze=n,xn.transition=e}}return!1}function zh(t,e,n){e=hs(n,e),e=Tg(t,e,1),t=Ii(t,e,1),e=Bt(),t!==null&&(So(t,1,e),Kt(t,e))}function dt(t,e,n){if(t.tag===3)zh(t,t,n);else for(;e!==null;){if(e.tag===3){zh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=hs(n,t),t=wg(e,t,1),e=Ii(e,t,1),t=Bt(),e!==null&&(So(e,1,t),Kt(e,t));break}}e=e.return}}function Q0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Pt&n)===n&&(yt===4||yt===3&&(Pt&130023424)===Pt&&500>pt()-ud?dr(t,0):ld|=n),Kt(t,e)}function Xg(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=Bt();t=ui(t,e),t!==null&&(So(t,e,n),Kt(t,n))}function J0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function ex(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Xg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,H0(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,at&&e.flags&1048576&&Km(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(t,e),t=e.pendingProps;var r=us(e,Ft.current);is(e,n),r=nd(null,e,i,t,r,n);var s=id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(i)?(s=!0,qa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,xc(e,i,t,n),e=Mc(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Wf(e),kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nx(i),t=Rn(i,t),r){case 0:e=yc(null,e,i,t,n);break e;case 1:e=bh(null,e,i,t,n);break e;case 11:e=Rh(null,e,i,t,n);break e;case 14:e=Ph(null,e,i,Rn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),yc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),bh(t,e,i,r,n);case 3:e:{if(Pg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ng(t,e),Ja(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(ee(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(ee(424)),e),e=Lh(t,e,i,n,r);break e}else for(an=Ni(e.stateNode.containerInfo.firstChild),ln=e,at=!0,bn=null,n=eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),i===r){e=ci(t,e,n);break e}kt(t,e,i,n)}e=e.child}return e;case 5:return ig(e),t===null&&gc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,fc(i,r)?o=null:s!==null&&fc(i,s)&&(e.flags|=32),Rg(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&gc(e),null;case 13:return bg(t,e,n);case 4:return Qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Rh(t,e,i,r,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Za,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!qt.current){e=ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=oi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,n),r=yn(r),i=i(r),e.flags|=1,kt(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),Ph(t,e,i,r,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Ca(t,e),e.tag=1,$t(i)?(t=!0,qa(e)):t=!1,is(e,n),Eg(e,i,r),xc(e,i,r,n),Mc(null,e,i,!0,t,n);case 19:return Lg(t,e,n);case 22:return Cg(t,e,n)}throw Error(ee(156,e.tag))};function Yg(t,e){return Sm(t,e)}function tx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new tx(t,e,n,i)}function hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nx(t){if(typeof t=="function")return hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Nf)return 14}return 2}function Oi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return hr(n.children,r,s,e);case Lf:o=8,r|=8;break;case Gu:return t=_n(12,n,e,r|2),t.elementType=Gu,t.lanes=s,t;case Wu:return t=_n(13,n,e,r),t.elementType=Wu,t.lanes=s,t;case Xu:return t=_n(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case im:return Tl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tm:o=10;break e;case nm:o=9;break e;case Df:o=11;break e;case Nf:o=14;break e;case Mi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function Tl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=im,t.lanes=n,t.stateNode={isHidden:!1},t}function lu(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function uu(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ix(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pd(t,e,n,i,r,s,o,a,l){return t=new ix(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function rx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return Hi;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if($t(n))return qm(t,n,e)}return e}function $g(t,e,n,i,r,s,o,a,l){return t=pd(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=Bt(),r=Fi(n),s=oi(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,So(t,r,i),Kt(t,i),t}function wl(t,e,n,i){var r=e.current,s=Bt(),o=Fi(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(Un(t,r,o,s),Ta(t,r,o)),o}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function md(t,e){Hh(t,e),(t=t.alternate)&&Hh(t,e)}function sx(){return null}var Kg=typeof reportError=="function"?reportError:function(t){console.error(t)};function gd(t){this._internalRoot=t}Al.prototype.render=gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));wl(t,e,null,null)};Al.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){wl(null,t,null,null)}),e[li]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Pm(t)}};function _d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function ox(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=al(o);s.call(u)}}var o=$g(e,i,t,0,null,!1,!1,"",Vh);return t._reactRootContainer=o,t[li]=o.current,lo(t.nodeType===8?t.parentNode:t),xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=al(l);a.call(u)}}var l=pd(t,0,!1,null,null,!1,!1,"",Vh);return t._reactRootContainer=l,t[li]=l.current,lo(t.nodeType===8?t.parentNode:t),xr(function(){wl(e,l,n,i)}),l}function Rl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=al(o);a.call(l)}}wl(e,o,t,r)}else o=ox(n,e,t,r,i);return al(o)}wm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Ff(e,n|1),Kt(e,pt()),!(Ge&6)&&(ps=pt()+500,ji()))}break;case 13:xr(function(){var i=ui(t,1);if(i!==null){var r=Bt();Un(i,t,1,r)}}),md(t,1)}};Of=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}md(t,134217728)}};Am=function(t){if(t.tag===13){var e=Fi(t),n=ui(t,e);if(n!==null){var i=Bt();Un(n,t,e,i)}md(t,e)}};Cm=function(){return Ze};Rm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};tc=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vl(i);if(!r)throw Error(ee(90));sm(i),qu(i,r)}}}break;case"textarea":am(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};pm=cd;mm=xr;var ax={usingClientEntryPoint:!1,Events:[Mo,Xr,vl,dm,hm,cd]},Ns={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{pl=qo.inject(lx),Vn=qo}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(e))throw Error(ee(200));return rx(t,e,null,n)};cn.createRoot=function(t,e){if(!_d(t))throw Error(ee(299));var n=!1,i="",r=Kg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pd(t,1,!1,null,null,n,!1,i,r),t[li]=e.current,lo(t.nodeType===8?t.parentNode:t),new gd(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return xr(t)};cn.hydrate=function(t,e,n){if(!Cl(e))throw Error(ee(200));return Rl(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!_d(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$g(e,null,t,1,n??null,r,!1,s,o),t[li]=e.current,lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Al(e)};cn.render=function(t,e,n){if(!Cl(e))throw Error(ee(200));return Rl(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(ee(40));return t._reactRootContainer?(xr(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[li]=null})}),!0):!1};cn.unstable_batchedUpdates=cd;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Rl(t,e,n,!1,i)};cn.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),Zp.exports=cn;var ux=Zp.exports,Gh=ux;Hu.createRoot=Gh.createRoot,Hu.hydrateRoot=Gh.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="169",cx=0,Wh=1,fx=2,Qg=1,dx=2,Zn=3,Vi=0,Zt=1,ei=2,ki=0,ss=1,Ic=2,Xh=3,jh=4,hx=5,sr=100,px=101,mx=102,gx=103,_x=104,vx=200,xx=201,Sx=202,yx=203,Uc=204,Fc=205,Mx=206,Ex=207,Tx=208,wx=209,Ax=210,Cx=211,Rx=212,Px=213,bx=214,Oc=0,kc=1,Bc=2,ms=3,zc=4,Hc=5,Vc=6,Gc=7,Jg=0,Lx=1,Dx=2,Bi=0,Nx=1,Ix=2,Ux=3,Fx=4,Ox=5,kx=6,Bx=7,e_=300,gs=301,_s=302,Wc=303,Xc=304,Pl=306,jc=1e3,cr=1001,Yc=1002,vn=1003,zx=1004,$o=1005,Ln=1006,cu=1007,fr=1008,fi=1009,t_=1010,n_=1011,vo=1012,xd=1013,Sr=1014,ii=1015,To=1016,Sd=1017,yd=1018,vs=1020,i_=35902,r_=1021,s_=1022,Nn=1023,o_=1024,a_=1025,os=1026,xs=1027,l_=1028,Md=1029,u_=1030,Ed=1031,Td=1033,La=33776,Da=33777,Na=33778,Ia=33779,qc=35840,$c=35841,Kc=35842,Zc=35843,Qc=36196,Jc=37492,ef=37496,tf=37808,nf=37809,rf=37810,sf=37811,of=37812,af=37813,lf=37814,uf=37815,cf=37816,ff=37817,df=37818,hf=37819,pf=37820,mf=37821,Ua=36492,gf=36494,_f=36495,c_=36283,vf=36284,xf=36285,Sf=36286,Hx=3200,Vx=3201,Gx=0,Wx=1,Ai="",Bn="srgb",Yi="srgb-linear",wd="display-p3",bl="display-p3-linear",ll="linear",st="srgb",ul="rec709",cl="p3",Ar=7680,Yh=519,Xx=512,jx=513,Yx=514,f_=515,qx=516,$x=517,Kx=518,Zx=519,qh=35044,$h="300 es",ri=2e3,fl=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,yf=180/Math.PI;function wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function Qx(t,e){return(t%e+e)%e}function du(t,e,n){return(1-n)*t+n*e}function Is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,n,i,r,s,o,a,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],S=r[0],p=r[3],c=r[6],_=r[1],g=r[4],M=r[7],R=r[2],C=r[5],w=r[8];return s[0]=o*S+a*_+l*R,s[3]=o*p+a*g+l*C,s[6]=o*c+a*M+l*w,s[1]=u*S+f*_+h*R,s[4]=u*p+f*g+h*C,s[7]=u*c+f*M+h*w,s[2]=d*S+m*_+v*R,s[5]=d*p+m*g+v*C,s[8]=d*c+m*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*u-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-u*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hu.makeScale(e,n)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new Ie;function d_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Jx(){const t=dl("canvas");return t.style.display="block",t}const Kh={};function Fa(t){t in Kh||(Kh[t]=!0,console.warn(t))}function eS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function tS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zh=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Yi]:{transfer:ll,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:st,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bl]:{transfer:ll,primaries:cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Zh)},[wd]:{transfer:st,primaries:cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qh),fromReference:t=>t.applyMatrix3(Zh).convertLinearToSRGB()}},iS=new Set([Yi,bl]),$e={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Us[e].toReference,r=Us[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Us[t].primaries},getTransfer:function(t){return t===Ai?ll:Us[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Us[e].luminanceCoefficients)}};function as(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class rS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=dl("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sS=0;class h_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;class Qt extends Ts{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=cr,r=cr,s=Ln,o=fr,a=Nn,l=fi,u=Qt.DEFAULT_ANISOTROPY,f=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=wo(),this.name="",this.source=new h_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=e_;Qt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],S=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,M=(m+1)/2,R=(c+1)/2,C=(f+d)/4,w=(h+S)/4,b=(v+p)/4;return g>M&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=w/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(h-S)/_,this.z=(d-f)/_,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new h_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends aS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p_ extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(h!==S||l!==d||u!==m||f!==v){let p=1-a;const c=l*d+u*m+f*v+h*S,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),C=Math.atan2(R,c*_);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R}const M=a*_;if(l=l*p+d*M,u=u*p+m*M,f=f*p+v*M,h=h*p+S*M,p===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-u*d,e[n+1]=l*v+f*d+u*h-a*m,e[n+2]=u*v+f*m+a*d-l*h,e[n+3]=f*v-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h+d*m*v;break;case"YZX":this._x=d*f*h+u*m*v,this._y=u*m*h+d*f*v,this._z=u*f*v-d*m*h,this._w=u*f*h-d*m*v;break;case"XZY":this._x=d*f*h-u*m*v,this._y=u*m*h-d*f*v,this._z=u*f*v+d*m*h,this._w=u*f*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new k,Jh=new Ao;class Co{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Zo.subVectors(this.max,Fs),Rr.subVectors(e.a,Fs),Pr.subVectors(e.b,Fs),br.subVectors(e.c,Fs),gi.subVectors(Pr,Rr),_i.subVectors(br,Pr),$i.subVectors(Rr,br);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-$i.z,$i.y,gi.z,0,-gi.x,_i.z,0,-_i.x,$i.z,0,-$i.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-$i.y,$i.x,0];return!_u(n,Rr,Pr,br,Zo)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,Rr,Pr,br,Zo))?!1:(Qo.crossVectors(gi,_i),n=[Qo.x,Qo.y,Qo.z],_u(n,Rr,Pr,br,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new k,new k,new k,new k,new k,new k,new k,new k],wn=new k,Ko=new Co,Rr=new k,Pr=new k,br=new k,gi=new k,_i=new k,$i=new k,Fs=new k,Zo=new k,Qo=new k,Ki=new k;function _u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ki.fromArray(t,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),u=n.dot(Ki),f=i.dot(Ki);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const uS=new Co,Os=new k,vu=new k;class Ll{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(vu)),this.expandByPoint(Os.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,xu=new k,Jo=new k,vi=new k,Su=new k,ea=new k,yu=new k;class m_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),Jo.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jo),a=vi.dot(this.direction),l=-vi.dot(Jo),u=vi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const S=1/f;h*=S,d*=S,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xu).addScaledVector(Jo,d),m}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),ea.subVectors(i,e),yu.crossVectors(Su,ea);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(vi,ea));if(l<0)return null;const u=a*this.direction.dot(Su.cross(vi));if(u<0||l+u>o)return null;const f=-a*vi.dot(yu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,v,S,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,v,S,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,v,S,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=v,c[11]=S,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,v=a*f,S=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+v*u,n[5]=d-S*u,n[9]=-a*l,n[2]=S-d*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=u*f,S=u*h;n[0]=d+S*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=u*f,S=u*h;n[0]=d-S*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=S-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,v=a*f,S=a*h;n[0]=l*f,n[4]=v*u-m,n[8]=d*u+S,n[1]=l*h,n[5]=S*u+d,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,v=a*l,S=a*u;n[0]=l*f,n[4]=S-d*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+v,n[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,m=o*u,v=a*l,S=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+S,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,fS)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(i,rn),xi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(i,rn)),xi.normalize(),ta.crossVectors(rn,xi),r[0]=xi.x,r[4]=ta.x,r[8]=rn.x,r[1]=xi.y,r[5]=ta.y,r[9]=rn.y,r[2]=xi.z,r[6]=ta.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],S=i[6],p=i[10],c=i[14],_=i[3],g=i[7],M=i[11],R=i[15],C=r[0],w=r[4],b=r[8],K=r[12],x=r[1],T=r[5],V=r[9],B=r[13],j=r[2],Q=r[6],H=r[10],Z=r[14],L=r[3],Y=r[7],$=r[11],se=r[15];return s[0]=o*C+a*x+l*j+u*L,s[4]=o*w+a*T+l*Q+u*Y,s[8]=o*b+a*V+l*H+u*$,s[12]=o*K+a*B+l*Z+u*se,s[1]=f*C+h*x+d*j+m*L,s[5]=f*w+h*T+d*Q+m*Y,s[9]=f*b+h*V+d*H+m*$,s[13]=f*K+h*B+d*Z+m*se,s[2]=v*C+S*x+p*j+c*L,s[6]=v*w+S*T+p*Q+c*Y,s[10]=v*b+S*V+p*H+c*$,s[14]=v*K+S*B+p*Z+c*se,s[3]=_*C+g*x+M*j+R*L,s[7]=_*w+g*T+M*Q+R*Y,s[11]=_*b+g*V+M*H+R*$,s[15]=_*K+g*B+M*Z+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],S=e[7],p=e[11],c=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+S*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],S=e[13],p=e[14],c=e[15],_=h*p*u-S*d*u+S*l*m-a*p*m-h*l*c+a*d*c,g=v*d*u-f*p*u-v*l*m+o*p*m+f*l*c-o*d*c,M=f*S*u-v*h*u+v*a*m-o*S*m-f*a*c+o*h*c,R=v*h*l-f*S*l-v*a*d+o*S*d+f*a*p-o*h*p,C=n*_+i*g+r*M+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(S*d*s-h*p*s-S*r*m+i*p*m+h*r*c-i*d*c)*w,e[2]=(a*p*s-S*l*s+S*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*s-v*d*s+v*r*m-n*p*m-f*r*c+n*d*c)*w,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*w,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*w,e[8]=M*w,e[9]=(v*h*s-f*S*s-v*i*m+n*S*m+f*i*c-n*h*c)*w,e[10]=(o*S*s-v*a*s+v*i*u-n*S*u-o*i*c+n*a*c)*w,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*w,e[12]=R*w,e[13]=(f*S*r-v*h*r+v*i*d-n*S*d-f*i*p+n*h*p)*w,e[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,v=s*h,S=o*f,p=o*h,c=a*h,_=l*u,g=l*f,M=l*h,R=i.x,C=i.y,w=i.z;return r[0]=(1-(S+c))*R,r[1]=(m+M)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(v+g)*w,r[9]=(p-_)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,f=1/o,h=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===ri)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let v,S;if(a===ri)v=(o+s)*h,S=-2*h;else if(a===fl)v=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lr=new k,An=new gt,cS=new k(0,0,0),fS=new k(1,1,1),xi=new k,ta=new k,rn=new k,ep=new gt,tp=new Ao;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const np=new k,Dr=new Ao,qn=new gt,na=new k,ks=new k,hS=new k,pS=new Ao,ip=new k(1,0,0),rp=new k(0,1,0),sp=new k(0,0,1),op={type:"added"},mS={type:"removed"},Nr={type:"childadded",child:null},Mu={type:"childremoved",child:null};class Jt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new k,n=new di,i=new Ao,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ie}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ks,na,this.up):qn.lookAt(na,ks,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(qn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mS),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,pS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new k(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new k,$n=new k,Eu=new k,Kn=new k,Ir=new k,Ur=new k,ap=new k,Tu=new k,wu=new k,Au=new k,Cu=new mt,Ru=new mt,Pu=new mt;class Dn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),$n.subVectors(i,n),Eu.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot($n),l=Cn.dot(Eu),u=$n.dot($n),f=$n.dot(Eu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,n),Ru.fromBufferAttribute(e,i),Pu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cu,s.x),o.addScaledVector(Ru,s.y),o.addScaledVector(Pu,s.z),o}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),$n.subVectors(e,n),Cn.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Cn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),Tu.subVectors(e,i);const l=Ir.dot(Tu),u=Ur.dot(Tu);if(l<=0&&u<=0)return n.copy(i);wu.subVectors(e,r);const f=Ir.dot(wu),h=Ur.dot(wu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ir,o);Au.subVectors(e,s);const m=Ir.dot(Au),v=Ur.dot(Au);if(v>=0&&m<=v)return n.copy(s);const S=m*u-l*v;if(S<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Ur,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return ap.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(ap,a);const c=1/(p+S+d);return o=S*c,a=d*c,n.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ia={h:0,s:0,l:0};function bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=Qx(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bu(o,s,e+1/3),this.g=bu(o,s,e),this.b=bu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=__[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=pu(e.r),this.g=pu(e.g),this.b=pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return $e.fromWorkingColorSpace(It.copy(this),e),Math.round(jt(It.r*255,0,255))*65536+Math.round(jt(It.g*255,0,255))*256+Math.round(jt(It.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Bn){$e.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(ia);const i=du(Si.h,ia.h,n),r=du(Si.s,ia.s,n),s=du(Si.l,ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ve;Ve.NAMES=__;let gS=0;class Ro extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ss,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Fc&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class v_ extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,ra=new Je;class Sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ra.fromBufferAttribute(this,n),ra.applyMatrix3(e),this.setXY(n,ra.x,ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class x_ extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pr extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _S=0;const hn=new gt,Lu=new Jt,Fr=new k,sn=new Co,Bs=new Co,Tt=new k;class Wn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?S_:x_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(sn.min,Bs.min),sn.expandByPoint(Tt),Tt.addVectors(sn.max,Bs.max),sn.expandByPoint(Tt)):(sn.expandByPoint(Bs.min),sn.expandByPoint(Bs.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Tt.fromBufferAttribute(a,u),l&&(Fr.fromBufferAttribute(e,u),Tt.add(Fr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const u=new k,f=new k,h=new k,d=new Je,m=new Je,v=new Je,S=new k,p=new k;function c(b,K,x){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,K),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,K),v.fromBufferAttribute(s,x),f.sub(u),h.sub(u),m.sub(d),v.sub(d);const T=1/(m.x*v.y-v.x*m.y);isFinite(T)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(T),a[b].add(S),a[K].add(S),a[x].add(S),l[b].add(p),l[K].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,K=_.length;b<K;++b){const x=_[b],T=x.start,V=x.count;for(let B=T,j=T+V;B<j;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new k,M=new k,R=new k,C=new k;function w(b){R.fromBufferAttribute(r,b),C.copy(R);const K=a[b];g.copy(K),g.sub(R.multiplyScalar(R.dot(K))).normalize(),M.crossVectors(C,K);const T=M.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,T)}for(let b=0,K=_.length;b<K;++b){const x=_[b],T=x.start,V=x.count;for(let B=T,j=T+V;B<j;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,f=new k,h=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),S=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,v=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*f;for(let c=0;c<f;c++)d[v++]=u[m++]}return new Sn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new gt,Zi=new m_,sa=new Ll,up=new k,oa=new k,aa=new k,la=new k,Du=new k,ua=new k,cp=new k,ca=new k;class si extends Jt{constructor(e=new Wn,n=new v_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Du.fromBufferAttribute(h,e),o?ua.addScaledVector(Du,f):ua.addScaledVector(Du.sub(n),f))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(sa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(sa,up)===null||Zi.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(lp.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const p=d[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const C=a.getX(M),w=a.getX(M+1),b=a.getX(M+2);r=fa(this,c,e,i,u,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=v,c=S;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=fa(this,o,e,i,u,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const p=d[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,R=g;M<R;M+=3){const C=M,w=M+1,b=M+2;r=fa(this,c,e,i,u,f,h,C,w,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=v,c=S;p<c;p+=3){const _=p,g=p+1,M=p+2;r=fa(this,o,e,i,u,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vS(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ca);return u<n.near||u>n.far?null:{distance:u,point:ca.clone(),object:t}}function fa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,oa),t.getVertexPosition(l,aa),t.getVertexPosition(u,la);const f=vS(t,e,n,i,oa,aa,la,cp);if(f){const h=new k;Dn.getBarycoord(cp,oa,aa,la,h),r&&(f.uv=Dn.getInterpolatedAttribute(r,a,l,u,h,new Je)),s&&(f.uv1=Dn.getInterpolatedAttribute(s,a,l,u,h,new Je)),o&&(f.normal=Dn.getInterpolatedAttribute(o,a,l,u,h,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};Dn.getNormal(oa,aa,la,d.normal),f.face=d,f.barycoord=h}return f}class Po extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pr(u,3)),this.setAttribute("normal",new pr(f,3)),this.setAttribute("uv",new pr(h,2));function v(S,p,c,_,g,M,R,C,w,b,K){const x=M/w,T=R/b,V=M/2,B=R/2,j=C/2,Q=w+1,H=b+1;let Z=0,L=0;const Y=new k;for(let $=0;$<H;$++){const se=$*T-B;for(let Ee=0;Ee<Q;Ee++){const Fe=Ee*x-V;Y[S]=Fe*_,Y[p]=se*g,Y[c]=j,u.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[c]=C>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(Ee/w),h.push(1-$/b),Z+=1}}for(let $=0;$<b;$++)for(let se=0;se<w;se++){const Ee=d+se+Q*$,Fe=d+se+Q*($+1),G=d+(se+1)+Q*($+1),te=d+(se+1)+Q*$;l.push(Ee,Fe,te),l.push(Fe,G,te),L+=6}a.addGroup(m,L,K),m+=L,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function xS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function y_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const SS={clone:Ss,merge:Ot};var yS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=xS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M_ extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new k,fp=new Je,dp=new Je;class gn extends M_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yf*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,fp,dp),n.subVectors(dp,fp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,kr=1;class ES extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Or,kr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Or,kr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Or,kr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Or,kr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Or,kr,e,n);l.layers=this.layers,this.add(l);const u=new gn(Or,kr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class E_ extends Qt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:gs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TS extends yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new E_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Po(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ki});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===fr&&(n.minFilter=Ln),new ES(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new k,wS=new k,AS=new Ie;class ir{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(wS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AS.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Ll,da=new k;class T_{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],S=r[10],p=r[11],c=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,p-m,M-c).normalize(),i[1].setComponents(l+s,d+u,p+m,M+c).normalize(),i[2].setComponents(l+o,d+f,p+v,M+_).normalize(),i[3].setComponents(l-o,d-f,p-v,M-_).normalize(),i[4].setComponents(l-a,d-h,p-S,M-g).normalize(),n===ri)i[5].setComponents(l+a,d+h,p+S,M+g).normalize();else if(n===fl)i[5].setComponents(a,h,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function CS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,f);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,h[d]=S)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];t.bufferSubData(u,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Dl extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],v=[],S=[],p=[];for(let c=0;c<f;c++){const _=c*d-o;for(let g=0;g<u;g++){const M=g*h-s;v.push(M,-_,0),S.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,M=_+u*(c+1),R=_+1+u*(c+1),C=_+1+u*c;m.push(g,M,C),m.push(M,R,C)}this.setIndex(m),this.setAttribute("position",new pr(v,3)),this.setAttribute("normal",new pr(S,3)),this.setAttribute("uv",new pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var RS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,US=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,My=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ay=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:RS,alphahash_pars_fragment:PS,alphamap_fragment:bS,alphamap_pars_fragment:LS,alphatest_fragment:DS,alphatest_pars_fragment:NS,aomap_fragment:IS,aomap_pars_fragment:US,batching_pars_vertex:FS,batching_vertex:OS,begin_vertex:kS,beginnormal_vertex:BS,bsdfs:zS,iridescence_fragment:HS,bumpmap_pars_fragment:VS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:WS,clipping_planes_pars_vertex:XS,clipping_planes_vertex:jS,color_fragment:YS,color_pars_fragment:qS,color_pars_vertex:$S,color_vertex:KS,common:ZS,cube_uv_reflection_fragment:QS,defaultnormal_vertex:JS,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,colorspace_fragment:ry,colorspace_pars_fragment:sy,envmap_fragment:oy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:cy,fog_vertex:fy,fog_pars_vertex:dy,fog_fragment:hy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_pars_fragment:gy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:vy,lights_pars_begin:xy,lights_toon_fragment:yy,lights_toon_pars_fragment:My,lights_phong_fragment:Ey,lights_phong_pars_fragment:Ty,lights_physical_fragment:wy,lights_physical_pars_fragment:Ay,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Ny,map_fragment:Iy,map_pars_fragment:Uy,map_particle_fragment:Fy,map_particle_pars_fragment:Oy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:Hy,morphnormal_vertex:Vy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Wy,normal_fragment_begin:Xy,normal_fragment_maps:jy,normal_pars_fragment:Yy,normal_pars_vertex:qy,normal_vertex:$y,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:eM,opaque_fragment:tM,packing:nM,premultiplied_alpha_fragment:iM,project_vertex:rM,dithering_fragment:sM,dithering_pars_fragment:oM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:lM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:cM,shadowmap_vertex:fM,shadowmask_pars_fragment:dM,skinbase_vertex:hM,skinning_pars_vertex:pM,skinning_vertex:mM,skinnormal_vertex:gM,specularmap_fragment:_M,specularmap_pars_fragment:vM,tonemapping_fragment:xM,tonemapping_pars_fragment:SM,transmission_fragment:yM,transmission_pars_fragment:MM,uv_pars_fragment:EM,uv_pars_vertex:TM,uv_vertex:wM,worldpos_vertex:AM,background_vert:CM,background_frag:RM,backgroundCube_vert:PM,backgroundCube_frag:bM,cube_vert:LM,cube_frag:DM,depth_vert:NM,depth_frag:IM,distanceRGBA_vert:UM,distanceRGBA_frag:FM,equirect_vert:OM,equirect_frag:kM,linedashed_vert:BM,linedashed_frag:zM,meshbasic_vert:HM,meshbasic_frag:VM,meshlambert_vert:GM,meshlambert_frag:WM,meshmatcap_vert:XM,meshmatcap_frag:jM,meshnormal_vert:YM,meshnormal_frag:qM,meshphong_vert:$M,meshphong_frag:KM,meshphysical_vert:ZM,meshphysical_frag:QM,meshtoon_vert:JM,meshtoon_frag:eE,points_vert:tE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:oE},oe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},zn={basic:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ot([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ot([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ot([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ot([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ot([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ot([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ot([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ot([oe.lights,oe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};zn.physical={uniforms:Ot([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ha={r:0,b:0,g:0},Ji=new di,aE=new gt;function lE(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function S(_){let g=!1;const M=v(_);M===null?c(a,l):M&&M.isColor&&(c(M,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Pl)?(f===void 0&&(f=new si(new Po(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Ss(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ji.copy(g.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(Ji)),f.material.toneMapped=$e.getTransfer(M.colorSpace)!==st,(h!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new si(new Dl(2,2),new Gi({name:"BackgroundMaterial",uniforms:Ss(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=$e.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,g){_.getRGB(ha,y_(t)),i.buffers.color.setClear(ha.r,ha.g,ha.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(a,l)},render:S,addToRenderList:p}}function uE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,T,V,B,j){let Q=!1;const H=h(B,V,T);s!==H&&(s=H,u(s.object)),Q=m(x,B,V,j),Q&&v(x,B,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(x,T,V,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function h(x,T,V){const B=V.wireframe===!0;let j=i[x.id];j===void 0&&(j={},i[x.id]=j);let Q=j[T.id];Q===void 0&&(Q={},j[T.id]=Q);let H=Q[B];return H===void 0&&(H=d(l()),Q[B]=H),H}function d(x){const T=[],V=[],B=[];for(let j=0;j<n;j++)T[j]=0,V[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,T,V,B){const j=s.attributes,Q=T.attributes;let H=0;const Z=V.getAttributes();for(const L in Z)if(Z[L].location>=0){const $=j[L];let se=Q[L];if(se===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function v(x,T,V,B){const j={},Q=T.attributes;let H=0;const Z=V.getAttributes();for(const L in Z)if(Z[L].location>=0){let $=Q[L];$===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),j[L]=se,H++}s.attributes=j,s.attributesNum=H,s.index=B}function S(){const x=s.newAttributes;for(let T=0,V=x.length;T<V;T++)x[T]=0}function p(x){c(x,0)}function c(x,T){const V=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;V[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),j[x]!==T&&(t.vertexAttribDivisor(x,T),j[x]=T)}function _(){const x=s.newAttributes,T=s.enabledAttributes;for(let V=0,B=T.length;V<B;V++)T[V]!==x[V]&&(t.disableVertexAttribArray(V),T[V]=0)}function g(x,T,V,B,j,Q,H){H===!0?t.vertexAttribIPointer(x,T,V,j,Q):t.vertexAttribPointer(x,T,V,B,j,Q)}function M(x,T,V,B){S();const j=B.attributes,Q=V.getAttributes(),H=T.defaultAttributeValues;for(const Z in Q){const L=Q[Z];if(L.location>=0){let Y=j[Z];if(Y===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const $=Y.normalized,se=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const Fe=Ee.buffer,G=Ee.type,te=Ee.bytesPerElement,fe=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===xd;if(Y.isInterleavedBufferAttribute){const le=Y.data,Le=le.stride,we=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<L.locationSize;Be++)c(L.location+Be,le.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<L.locationSize;Be++)p(L.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Be=0;Be<L.locationSize;Be++)g(L.location+Be,se/L.locationSize,G,$,Le*te,(we+se/L.locationSize*Be)*te,fe)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)c(L.location+le,Y.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<L.locationSize;le++)p(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let le=0;le<L.locationSize;le++)g(L.location+le,se/L.locationSize,G,$,se*te,se/L.locationSize*le*te,fe)}}else if(H!==void 0){const $=H[Z];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(L.location,$);break;case 3:t.vertexAttrib3fv(L.location,$);break;case 4:t.vertexAttrib4fv(L.location,$);break;default:t.vertexAttrib1fv(L.location,$)}}}}_()}function R(){b();for(const x in i){const T=i[x];for(const V in T){const B=T[V];for(const j in B)f(B[j].object),delete B[j];delete T[V]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const V in T){const B=T[V];for(const j in B)f(B[j].object),delete B[j];delete T[V]}delete i[x.id]}function w(x){for(const T in i){const V=i[T];if(V[x.id]===void 0)continue;const B=V[x.id];for(const j in B)f(B[j].object),delete B[j];delete V[x.id]}}function b(){K(),o=!0,s!==r&&(s=r,u(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:K,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:p,disableUnusedAttributes:_}}function cE(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];n.update(m,i,1)}function l(u,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)o(u[v],f[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let v=0;for(let S=0;S<h;S++)v+=f[S];for(let S=0;S<d.length;S++)n.update(v,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Nn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===To&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==fi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!b)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:R,maxSamples:C}}function dE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ir,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let M=c.clippingState||null;l.value=M,M=f(v,d,g,m);for(let R=0;R!==g;++R)M[R]=n[R];c.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,v!==!0||p===null){const c=m+S*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,M=m;g!==S;++g,M+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function hE(t){let e=new WeakMap;function n(o,a){return a===Wc?o.mapping=gs:a===Xc&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new TS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pE extends M_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=4,hp=[.125,.215,.35,.446,.526,.582],or=20,Iu=new pE,pp=new Ve;let Uu=null,Fu=0,Ou=0,ku=!1;const rr=(1+Math.sqrt(5))/2,Br=1/rr,mp=[new k(-rr,Br,0),new k(rr,Br,0),new k(-Br,0,rr),new k(Br,0,rr),new k(0,rr,-Br),new k(0,rr,Br),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=ku,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:To,format:Nn,colorSpace:Yi,depthBuffer:!1},r=_p(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(s)),this._blurMaterial=gE(s,e,n)}return r}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(pp),f.toneMapping=Bi,f.autoClear=!1;const m=new v_({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new si(new Po,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(pp),S=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;pa(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),S&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mp[(r-s-1)%mp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new si(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*or-1),S=s/v,p=isFinite(s)?1+Math.floor(f*S):or;p>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${or}`);const c=[];let _=0;for(let w=0;w<or;++w){const b=w/S,K=Math.exp(-b*b/2);c.push(K),w===0?_+=K:w<p&&(_+=2*K)}for(let w=0;w<c.length;w++)c[w]=c[w]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],R=3*M*(r>g-Qr?r-g+Qr:0),C=4*(this._cubeSize-M);pa(n,R,C,3*M,2*M),l.setRenderTarget(n),l.render(h,Iu)}}function mE(t){const e=[],n=[],i=[];let r=t;const s=t-Qr+1+hp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qr?l=hp[o-t+Qr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,S=3,p=2,c=1,_=new Float32Array(S*v*m),g=new Float32Array(p*v*m),M=new Float32Array(c*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,b=C>2?0:-1,K=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(K,S*v*C),g.set(d,p*v*C);const x=[C,C,C,C,C,C];M.set(x,c*v*C)}const R=new Wn;R.setAttribute("position",new Sn(_,S)),R.setAttribute("uv",new Sn(g,p)),R.setAttribute("faceIndex",new Sn(M,c)),e.push(R),r>Qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _p(t,e,n){const i=new yr(t,e,n);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gE(t,e,n){const i=new Float32Array(or),r=new k(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vp(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function xp(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _E(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Wc||l===Xc,f=l===gs||l===_s;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new gp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new gp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const S=d.morphAttributes[v];for(let p=0,c=S.length;p<c;p++)e.remove(S[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const S=m[v];for(let p=0,c=S.length;p<c;p++)e.update(S[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,v=h.attributes.position;let S=0;if(m!==null){const _=m.array;S=m.version;for(let g=0,M=_.length;g<M;g+=3){const R=_[g+0],C=_[g+1],w=_[g+2];d.push(R,C,C,w,w,R)}}else if(v!==void 0){const _=v.array;S=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const R=g+0,C=g+1,w=g+2;d.push(R,C,C,w,w,R)}}else return;const p=new(d_(d)?S_:x_)(d,1);p.version=S;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function SE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function u(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*o,v),n.update(m,i,v))}function f(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let c=0;c<v;c++)p+=m[c];n.update(p,i,1)}function h(d,m,v,S){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<d.length;c++)u(d[c]/o,m[c],S[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,v);let c=0;for(let _=0;_<v;_++)c+=m[_];for(let _=0;_<S.length;_++)n.update(c,i,S[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function yE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e,n){const i=new WeakMap,r=new mt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),p===!0&&(M=3);let R=a.attributes.position.count*M,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*C*4*h),b=new p_(w,R,C,h);b.type=ii,b.needsUpdate=!0;const K=M*4;for(let T=0;T<h;T++){const V=c[T],B=_[T],j=g[T],Q=R*C*4*T;for(let H=0;H<V.count;H++){const Z=H*K;v===!0&&(r.fromBufferAttribute(V,H),w[Q+Z+0]=r.x,w[Q+Z+1]=r.y,w[Q+Z+2]=r.z,w[Q+Z+3]=0),S===!0&&(r.fromBufferAttribute(B,H),w[Q+Z+4]=r.x,w[Q+Z+5]=r.y,w[Q+Z+6]=r.z,w[Q+Z+7]=0),p===!0&&(r.fromBufferAttribute(j,H),w[Q+Z+8]=r.x,w[Q+Z+9]=r.y,w[Q+Z+10]=r.z,w[Q+Z+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new Je(R,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<u.length;p++)v+=u[p];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function EE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class A_ extends Qt{constructor(e,n,i,r,s,o,a,l,u,f=os){if(f!==os&&f!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===os&&(i=Sr),i===void 0&&f===xs&&(i=vs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const C_=new Qt,Sp=new A_(1,1),R_=new p_,P_=new lS,b_=new E_,yp=[],Mp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),wp=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=yp[r];if(s===void 0&&(s=new Float32Array(r),yp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nl(t,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;wp.set(i),t.uniformMatrix2fv(this.addr,!1,wp),Et(n,i)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Tp.set(i),t.uniformMatrix3fv(this.addr,!1,Tp),Et(n,i)}}function bE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;Ep.set(i),t.uniformMatrix4fv(this.addr,!1,Ep),Et(n,i)}}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function BE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sp.compareFunction=f_,s=Sp):s=C_,n.setTexture2D(e||s,r)}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P_,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function GE(t){switch(t){case 5126:return TE;case 35664:return wE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return bE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return NE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return FE;case 36295:return OE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return VE}}function WE(t,e){t.uniform1fv(this.addr,e)}function XE(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function jE(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function YE(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function qE(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $E(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KE(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZE(t,e){t.uniform1iv(this.addr,e)}function QE(t,e){t.uniform2iv(this.addr,e)}function JE(t,e){t.uniform3iv(this.addr,e)}function eT(t,e){t.uniform4iv(this.addr,e)}function tT(t,e){t.uniform1uiv(this.addr,e)}function nT(t,e){t.uniform2uiv(this.addr,e)}function iT(t,e){t.uniform3uiv(this.addr,e)}function rT(t,e){t.uniform4uiv(this.addr,e)}function sT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||C_,s[o])}function oT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||P_,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b_,s[o])}function lT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||R_,s[o])}function uT(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return jE;case 35666:return YE;case 35674:return qE;case 35675:return $E;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return QE;case 35668:case 35672:return JE;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GE(n.type)}}class fT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uT(n.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function Ap(t,e){t.seq.push(e),t.map[e.id]=e}function hT(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ap(n,u===void 0?new cT(a,t,e):new fT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new dT(a),Ap(n,h)),n=h}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pT=37297;let mT=0;function gT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _T(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===cl&&n===ul?i="LinearDisplayP3ToLinearSRGB":e===ul&&n===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case Yi:case bl:return[i,"LinearTransferOETF"];case Bn:case wd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+gT(t.getShaderSource(e),o)}else return r}function vT(t,e){const n=_T(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xT(t,e){let n;switch(e){case Nx:n="Linear";break;case Ix:n="Reinhard";break;case Ux:n="Cineon";break;case Fx:n="ACESFilmic";break;case kx:n="AgX";break;case Bx:n="Neutral";break;case Ox:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ma=new k;function ST(){$e.getLuminanceCoefficients(ma);const t=ma.x.toFixed(4),e=ma.y.toFixed(4),n=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function MT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ET(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function Pp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(t){return t.replace(TT,AT)}const wT=new Map;function AT(t,e){let n=Ne[e];if(n===void 0){const i=wT.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mf(n)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(t){return t.replace(CT,RT)}function RT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function DT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jg:e="ENVMAP_BLENDING_MULTIPLY";break;case Lx:e="ENVMAP_BLENDING_MIX";break;case Dx:e="ENVMAP_BLENDING_ADD";break}return e}function NT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PT(n),u=bT(n),f=LT(n),h=DT(n),d=NT(n),m=yT(n),v=MT(s),S=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ws).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ws).join(`
`),c.length>0&&(c+=`
`)):(p=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),c=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Bi?xT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,vT("linearToOutputTexel",n.outputColorSpace),ST(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Mf(o),o=Pp(o,n),o=bp(o,n),a=Mf(a),a=Pp(a,n),a=bp(a,n),o=Lp(o),a=Lp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+o,M=_+c+a,R=Cp(r,r.VERTEX_SHADER,g),C=Cp(r,r.FRAGMENT_SHADER,M);r.attachShader(S,R),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(T){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(C).trim();let Q=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,C);else{const Z=Rp(r,R,"vertex"),L=Rp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+Z+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||j==="")&&(H=!1);H&&(T.diagnostics={runnable:Q,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:j,prefix:c}})}r.deleteShader(R),r.deleteShader(C),b=new Oa(r,S),K=ET(r,S)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let K;this.getAttributes=function(){return K===void 0&&w(this),K};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,pT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}let UT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function kT(t,e,n,i,r,s,o){const a=new g_,l=new FT,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function c(x,T,V,B,j){const Q=B.fog,H=j.geometry,Z=x.isMeshStandardMaterial?B.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||Z),Y=L&&L.mapping===Pl?L.image.height:null,$=S[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=se!==void 0?se.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let G,te,fe,le;if($){const Gt=zn[$];G=Gt.vertexShader,te=Gt.fragmentShader}else G=x.vertexShader,te=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const Le=t.getRenderTarget(),we=j.isInstancedMesh===!0,Be=j.isBatchedMesh===!0,Qe=!!x.map,ze=!!x.matcap,P=!!L,en=!!x.aoMap,Oe=!!x.lightMap,We=!!x.bumpMap,Ce=!!x.normalMap,nt=!!x.displacementMap,be=!!x.emissiveMap,A=!!x.metalnessMap,y=!!x.roughnessMap,U=x.anisotropy>0,X=x.clearcoat>0,J=x.dispersion>0,W=x.iridescence>0,Se=x.sheen>0,ae=x.transmission>0,me=U&&!!x.anisotropyMap,Xe=X&&!!x.clearcoatMap,ie=X&&!!x.clearcoatNormalMap,ge=X&&!!x.clearcoatRoughnessMap,Re=W&&!!x.iridescenceMap,Pe=W&&!!x.iridescenceThicknessMap,_e=Se&&!!x.sheenColorMap,ke=Se&&!!x.sheenRoughnessMap,De=!!x.specularMap,et=!!x.specularColorMap,D=!!x.specularIntensityMap,de=ae&&!!x.transmissionMap,z=ae&&!!x.thicknessMap,q=!!x.gradientMap,ue=!!x.alphaMap,he=x.alphaTest>0,He=!!x.alphaHash,_t=!!x.extensions;let Vt=Bi;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Vt=t.toneMapping);const je={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:te,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Be,batchingColor:Be&&j._colorsTexture!==null,instancing:we,instancingColor:we&&j.instanceColor!==null,instancingMorph:we&&j.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Yi,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:ze,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:Y,aoMap:en,lightMap:Oe,bumpMap:We,normalMap:Ce,displacementMap:m&&nt,emissiveMap:be,normalMapObjectSpace:Ce&&x.normalMapType===Wx,normalMapTangentSpace:Ce&&x.normalMapType===Gx,metalnessMap:A,roughnessMap:y,anisotropy:U,anisotropyMap:me,clearcoat:X,clearcoatMap:Xe,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:J,iridescence:W,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:Se,sheenColorMap:_e,sheenRoughnessMap:ke,specularMap:De,specularColorMap:et,specularIntensityMap:D,transmission:ae,transmissionMap:de,thicknessMap:z,gradientMap:q,opaque:x.transparent===!1&&x.blending===ss&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:he,alphaHash:He,combine:x.combine,mapUv:Qe&&p(x.map.channel),aoMapUv:en&&p(x.aoMap.channel),lightMapUv:Oe&&p(x.lightMap.channel),bumpMapUv:We&&p(x.bumpMap.channel),normalMapUv:Ce&&p(x.normalMap.channel),displacementMapUv:nt&&p(x.displacementMap.channel),emissiveMapUv:be&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:y&&p(x.roughnessMap.channel),anisotropyMapUv:me&&p(x.anisotropyMap.channel),clearcoatMapUv:Xe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(x.sheenRoughnessMap.channel),specularMapUv:De&&p(x.specularMap.channel),specularColorMapUv:et&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:de&&p(x.transmissionMap.channel),thicknessMapUv:z&&p(x.thicknessMap.channel),alphaMapUv:ue&&p(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||U),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(Qe||ue),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=u.has(1),je.vertexUv2s=u.has(2),je.vertexUv3s=u.has(3),u.clear(),je}function _(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)T.push(V),T.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(g(T,x),M(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const T=S[x.type];let V;if(T){const B=zn[T];V=SS.clone(B.uniforms)}else V=x.uniforms;return V}function C(x,T){let V;for(let B=0,j=f.length;B<j;B++){const Q=f[B];if(Q.cacheKey===T){V=Q,++V.usedTimes;break}}return V===void 0&&(V=new IT(t,T,x,s),f.push(V)),V}function w(x){if(--x.usedTimes===0){const T=f.indexOf(x);f[T]=f[f.length-1],f.pop(),x.destroy()}}function b(x){l.remove(x)}function K(){l.dispose()}return{getParameters:c,getProgramCacheKey:_,getUniforms:R,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:f,dispose:K}}function BT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,v,S,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:S,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=v,c.renderOrder=h.renderOrder,c.z=S,c.group=p),e++,c}function a(h,d,m,v,S,p){const c=o(h,d,m,v,S,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,v,S,p){const c=o(h,d,m,v,S,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||zT),i.length>1&&i.sort(d||Np),r.length>1&&r.sort(d||Np)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function HT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ip,t.set(i,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function VT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ve};break;case"SpotLight":n={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WT=0;function XT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jT(t){const e=new VT,n=GT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new gt,o=new gt;function a(u){let f=0,h=0,d=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let m=0,v=0,S=0,p=0,c=0,_=0,g=0,M=0,R=0,C=0,w=0;u.sort(XT);for(let K=0,x=u.length;K<x;K++){const T=u[K],V=T.color,B=T.intensity,j=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=V.r*B,h+=V.g*B,d+=V.b*B;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],B);w++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Z=T.shadow,L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=T.shadow.matrix,_++}i.directional[m]=H,m++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(V).multiplyScalar(B),H.distance=j,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[S]=H;const Z=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,Z.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[S]=Z.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=Q,M++}S++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(V).multiplyScalar(B),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=H,p++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const Z=T.shadow,L=n.get(T);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=T.shadow.matrix,g++}i.point[v]=H,v++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(B),H.groundColor.copy(T.groundColor).multiplyScalar(B),i.hemi[c]=H,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==m||b.pointLength!==v||b.spotLength!==S||b.rectAreaLength!==p||b.hemiLength!==c||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==M||b.numSpotMaps!==R||b.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,b.directionalLength=m,b.pointLength=v,b.spotLength=S,b.rectAreaLength=p,b.hemiLength=c,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=M,b.numSpotMaps=R,b.numLightProbes=w,i.version=WT++)}function l(u,f){let h=0,d=0,m=0,v=0,S=0;const p=f.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function Up(t){const e=new jT(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Up(t),e.set(r,[a])):s>=o.length?(a=new Up(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class qT extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $T extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QT(t,e,n){let i=new T_;const r=new Je,s=new Je,o=new mt,a=new qT({depthPacking:Vx}),l=new $T,u={},f=n.maxTextureSize,h={[Vi]:Zt,[Zt]:Vi,[ei]:ei},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:KT,fragmentShader:ZT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Wn;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new si(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qg;let c=this.type;this.render=function(C,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const K=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),V=t.state;V.setBlending(ki),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=c!==Zn&&this.type===Zn,j=c===Zn&&this.type!==Zn;for(let Q=0,H=C.length;Q<H;Q++){const Z=C[Q],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||B===!0||j===!0){const se=this.type!==Zn?{minFilter:vn,magFilter:vn}:{};L.map!==null&&L.map.dispose(),L.map=new yr(r.x,r.y,se),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const $=L.getViewportCount();for(let se=0;se<$;se++){const Ee=L.getViewport(se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),V.viewport(o),L.updateMatrices(Z,se),i=L.getFrustum(),M(w,b,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===Zn&&_(L,b),L.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(K,x,T)};function _(C,w){const b=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new yr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,d,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,m,S,null)}function g(C,w,b,K){let x=null;const T=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=x.uuid,B=w.uuid;let j=u[V];j===void 0&&(j={},u[V]=j);let Q=j[B];Q===void 0&&(Q=x.clone(),j[B]=Q,w.addEventListener("dispose",R)),x=Q}if(x.visible=w.visible,x.wireframe=w.wireframe,K===Zn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=t.properties.get(x);V.light=b}return x}function M(C,w,b,K,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const B=e.update(C),j=C.material;if(Array.isArray(j)){const Q=B.groups;for(let H=0,Z=Q.length;H<Z;H++){const L=Q[H],Y=j[L.materialIndex];if(Y&&Y.visible){const $=g(C,Y,K,x);C.onBeforeShadow(t,C,w,b,B,$,L),t.renderBufferDirect(b,null,B,$,C,L),C.onAfterShadow(t,C,w,b,B,$,L)}}}else if(j.visible){const Q=g(C,j,K,x);C.onBeforeShadow(t,C,w,b,B,Q,null),t.renderBufferDirect(b,null,B,Q,C,null),C.onAfterShadow(t,C,w,b,B,Q,null)}}const V=C.children;for(let B=0,j=V.length;B<j;B++)M(V[B],w,b,K,x)}function R(C){C.target.removeEventListener("dispose",R);for(const b in u){const K=u[b],x=C.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}const JT={[Oc]:kc,[Bc]:Vc,[zc]:Gc,[ms]:Hc,[kc]:Oc,[Vc]:Bc,[Gc]:zc,[Hc]:ms};function ew(t){function e(){let D=!1;const de=new mt;let z=null;const q=new mt(0,0,0,0);return{setMask:function(ue){z!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),z=ue)},setLocked:function(ue){D=ue},setClear:function(ue,he,He,_t,Vt){Vt===!0&&(ue*=_t,he*=_t,He*=_t),de.set(ue,he,He,_t),q.equals(de)===!1&&(t.clearColor(ue,he,He,_t),q.copy(de))},reset:function(){D=!1,z=null,q.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,z=null,q=null,ue=null;return{setReversed:function(he){de=he},setTest:function(he){he?fe(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(he){z!==he&&!D&&(t.depthMask(he),z=he)},setFunc:function(he){if(de&&(he=JT[he]),q!==he){switch(he){case Oc:t.depthFunc(t.NEVER);break;case kc:t.depthFunc(t.ALWAYS);break;case Bc:t.depthFunc(t.LESS);break;case ms:t.depthFunc(t.LEQUAL);break;case zc:t.depthFunc(t.EQUAL);break;case Hc:t.depthFunc(t.GEQUAL);break;case Vc:t.depthFunc(t.GREATER);break;case Gc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=he}},setLocked:function(he){D=he},setClear:function(he){ue!==he&&(t.clearDepth(he),ue=he)},reset:function(){D=!1,z=null,q=null,ue=null}}}function i(){let D=!1,de=null,z=null,q=null,ue=null,he=null,He=null,_t=null,Vt=null;return{setTest:function(je){D||(je?fe(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(je){de!==je&&!D&&(t.stencilMask(je),de=je)},setFunc:function(je,Gt,Xn){(z!==je||q!==Gt||ue!==Xn)&&(t.stencilFunc(je,Gt,Xn),z=je,q=Gt,ue=Xn)},setOp:function(je,Gt,Xn){(he!==je||He!==Gt||_t!==Xn)&&(t.stencilOp(je,Gt,Xn),he=je,He=Gt,_t=Xn)},setLocked:function(je){D=je},setClear:function(je){Vt!==je&&(t.clearStencil(je),Vt=je)},reset:function(){D=!1,de=null,z=null,q=null,ue=null,he=null,He=null,_t=null,Vt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,v=!1,S=null,p=null,c=null,_=null,g=null,M=null,R=null,C=new Ve(0,0,0),w=0,b=!1,K=null,x=null,T=null,V=null,B=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,H=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=H>=2);let L=null,Y={};const $=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ee=new mt().fromArray($),Fe=new mt().fromArray(se);function G(D,de,z,q){const ue=new Uint8Array(4),he=t.createTexture();t.bindTexture(D,he),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<z;He++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(de+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return he}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(ms),Oe(!1),We(Wh),fe(t.CULL_FACE),P(ki);function fe(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function le(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Le(D,de){return f[D]!==de?(t.bindFramebuffer(D,de),f[D]=de,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function we(D,de){let z=d,q=!1;if(D){z=h.get(de),z===void 0&&(z=[],h.set(de,z));const ue=D.textures;if(z.length!==ue.length||z[0]!==t.COLOR_ATTACHMENT0){for(let he=0,He=ue.length;he<He;he++)z[he]=t.COLOR_ATTACHMENT0+he;z.length=ue.length,q=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,q=!0);q&&t.drawBuffers(z)}function Be(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Qe={[sr]:t.FUNC_ADD,[px]:t.FUNC_SUBTRACT,[mx]:t.FUNC_REVERSE_SUBTRACT};Qe[gx]=t.MIN,Qe[_x]=t.MAX;const ze={[vx]:t.ZERO,[xx]:t.ONE,[Sx]:t.SRC_COLOR,[Uc]:t.SRC_ALPHA,[Ax]:t.SRC_ALPHA_SATURATE,[Tx]:t.DST_COLOR,[Mx]:t.DST_ALPHA,[yx]:t.ONE_MINUS_SRC_COLOR,[Fc]:t.ONE_MINUS_SRC_ALPHA,[wx]:t.ONE_MINUS_DST_COLOR,[Ex]:t.ONE_MINUS_DST_ALPHA,[Cx]:t.CONSTANT_COLOR,[Rx]:t.ONE_MINUS_CONSTANT_COLOR,[Px]:t.CONSTANT_ALPHA,[bx]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,de,z,q,ue,he,He,_t,Vt,je){if(D===ki){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(fe(t.BLEND),v=!0),D!==hx){if(D!==S||je!==b){if((p!==sr||g!==sr)&&(t.blendEquation(t.FUNC_ADD),p=sr,g=sr),je)switch(D){case ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ic:t.blendFunc(t.ONE,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ic:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}c=null,_=null,M=null,R=null,C.set(0,0,0),w=0,S=D,b=je}return}ue=ue||de,he=he||z,He=He||q,(de!==p||ue!==g)&&(t.blendEquationSeparate(Qe[de],Qe[ue]),p=de,g=ue),(z!==c||q!==_||he!==M||He!==R)&&(t.blendFuncSeparate(ze[z],ze[q],ze[he],ze[He]),c=z,_=q,M=he,R=He),(_t.equals(C)===!1||Vt!==w)&&(t.blendColor(_t.r,_t.g,_t.b,Vt),C.copy(_t),w=Vt),S=D,b=!1}function en(D,de){D.side===ei?le(t.CULL_FACE):fe(t.CULL_FACE);let z=D.side===Zt;de&&(z=!z),Oe(z),D.blending===ss&&D.transparent===!1?P(ki):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const q=D.stencilWrite;o.setTest(q),q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){K!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),K=D)}function We(D){D!==cx?(fe(t.CULL_FACE),D!==x&&(D===Wh?t.cullFace(t.BACK):D===fx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),x=D}function Ce(D){D!==T&&(Q&&t.lineWidth(D),T=D)}function nt(D,de,z){D?(fe(t.POLYGON_OFFSET_FILL),(V!==de||B!==z)&&(t.polygonOffset(de,z),V=de,B=z)):le(t.POLYGON_OFFSET_FILL)}function be(D){D?fe(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+j-1),L!==D&&(t.activeTexture(D),L=D)}function y(D,de,z){z===void 0&&(L===null?z=t.TEXTURE0+j-1:z=L);let q=Y[z];q===void 0&&(q={type:void 0,texture:void 0},Y[z]=q),(q.type!==D||q.texture!==de)&&(L!==z&&(t.activeTexture(z),L=z),t.bindTexture(D,de||te[D]),q.type=D,q.texture=de)}function U(){const D=Y[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function _e(D){Fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function ke(D,de){let z=l.get(de);z===void 0&&(z=new WeakMap,l.set(de,z));let q=z.get(D);q===void 0&&(q=t.getUniformBlockIndex(de,D.name),z.set(D,q))}function De(D,de){const q=l.get(de).get(D);a.get(de)!==q&&(t.uniformBlockBinding(de,q,D.__bindingPointIndex),a.set(de,q))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,Y={},f={},h=new WeakMap,d=[],m=null,v=!1,S=null,p=null,c=null,_=null,g=null,M=null,R=null,C=new Ve(0,0,0),w=0,b=!1,K=null,x=null,T=null,V=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:le,bindFramebuffer:Le,drawBuffers:we,useProgram:Be,setBlending:P,setMaterial:en,setFlipSided:Oe,setCullFace:We,setLineWidth:Ce,setPolygonOffset:nt,setScissorTest:be,activeTexture:A,bindTexture:y,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:ge,texImage3D:Re,updateUBOMapping:ke,uniformBlockBinding:De,texStorage2D:Xe,texStorage3D:ie,texSubImage2D:W,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:et}}function Fp(t,e,n,i){const r=tw(i);switch(n){case r_:return t*e;case o_:return t*e;case a_:return t*e*2;case l_:return t*e/r.components*r.byteLength;case Md:return t*e/r.components*r.byteLength;case u_:return t*e*2/r.components*r.byteLength;case Ed:return t*e*2/r.components*r.byteLength;case s_:return t*e*3/r.components*r.byteLength;case Nn:return t*e*4/r.components*r.byteLength;case Td:return t*e*4/r.components*r.byteLength;case La:case Da:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Na:case Ia:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:case Zc:return Math.max(t,16)*Math.max(e,8)/4;case qc:case Kc:return Math.max(t,8)*Math.max(e,8)/2;case Qc:case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ua:case gf:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*16;case c_:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tw(t){switch(t){case fi:case t_:return{byteLength:1,components:1};case vo:case n_:case To:return{byteLength:2,components:1};case Sd:case yd:return{byteLength:2,components:4};case Sr:case xd:case ii:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function nw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return m?new OffscreenCanvas(A,y):dl("canvas")}function S(A,y,U){let X=1;const J=be(A);if((J.width>U||J.height>U)&&(X=U/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(X*J.width),Se=Math.floor(X*J.height);h===void 0&&(h=v(W,Se));const ae=y?v(W,Se):h;return ae.width=W,ae.height=Se,ae.getContext("2d").drawImage(A,0,0,W,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Se+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==vn&&A.minFilter!==Ln}function c(A){t.generateMipmap(A)}function _(A,y,U,X,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=y;if(y===t.RED&&(U===t.FLOAT&&(W=t.R32F),U===t.HALF_FLOAT&&(W=t.R16F),U===t.UNSIGNED_BYTE&&(W=t.R8)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.R8UI),U===t.UNSIGNED_SHORT&&(W=t.R16UI),U===t.UNSIGNED_INT&&(W=t.R32UI),U===t.BYTE&&(W=t.R8I),U===t.SHORT&&(W=t.R16I),U===t.INT&&(W=t.R32I)),y===t.RG&&(U===t.FLOAT&&(W=t.RG32F),U===t.HALF_FLOAT&&(W=t.RG16F),U===t.UNSIGNED_BYTE&&(W=t.RG8)),y===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RG8UI),U===t.UNSIGNED_SHORT&&(W=t.RG16UI),U===t.UNSIGNED_INT&&(W=t.RG32UI),U===t.BYTE&&(W=t.RG8I),U===t.SHORT&&(W=t.RG16I),U===t.INT&&(W=t.RG32I)),y===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGB8UI),U===t.UNSIGNED_SHORT&&(W=t.RGB16UI),U===t.UNSIGNED_INT&&(W=t.RGB32UI),U===t.BYTE&&(W=t.RGB8I),U===t.SHORT&&(W=t.RGB16I),U===t.INT&&(W=t.RGB32I)),y===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),U===t.UNSIGNED_INT&&(W=t.RGBA32UI),U===t.BYTE&&(W=t.RGBA8I),U===t.SHORT&&(W=t.RGBA16I),U===t.INT&&(W=t.RGBA32I)),y===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),y===t.RGBA){const Se=J?ll:$e.getTransfer(X);U===t.FLOAT&&(W=t.RGBA32F),U===t.HALF_FLOAT&&(W=t.RGBA16F),U===t.UNSIGNED_BYTE&&(W=Se===st?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function g(A,y){let U;return A?y===null||y===Sr||y===vs?U=t.DEPTH24_STENCIL8:y===ii?U=t.DEPTH32F_STENCIL8:y===vo&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sr||y===vs?U=t.DEPTH_COMPONENT24:y===ii?U=t.DEPTH_COMPONENT32F:y===vo&&(U=t.DEPTH_COMPONENT16),U}function M(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){const y=A.target;y.removeEventListener("dispose",R),w(y),y.isVideoTexture&&f.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),K(y)}function w(A){const y=i.get(A);if(y.__webglInit===void 0)return;const U=A.source,X=d.get(U);if(X){const J=X[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(X).length===0&&d.delete(U)}i.remove(A)}function b(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const U=A.source,X=d.get(U);delete X[y.__cacheKey],o.memory.textures--}function K(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let J=0;J<y.__webglFramebuffer[X].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[X][J]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=A.textures;for(let X=0,J=U.length;X<J;X++){const W=i.get(U[X]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(A)}let x=0;function T(){x=0}function V(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function B(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function j(A,y){const U=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(U,A,y);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function Q(A,y){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Fe(U,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function H(A,y){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Fe(U,A,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function Z(A,y){const U=i.get(A);if(A.version>0&&U.__version!==A.version){G(U,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const L={[jc]:t.REPEAT,[cr]:t.CLAMP_TO_EDGE,[Yc]:t.MIRRORED_REPEAT},Y={[vn]:t.NEAREST,[zx]:t.NEAREST_MIPMAP_NEAREST,[$o]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[cu]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},$={[Xx]:t.NEVER,[Zx]:t.ALWAYS,[jx]:t.LESS,[f_]:t.LEQUAL,[Yx]:t.EQUAL,[Kx]:t.GEQUAL,[qx]:t.GREATER,[$x]:t.NOTEQUAL};function se(A,y){if(y.type===ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ln||y.magFilter===cu||y.magFilter===$o||y.magFilter===fr||y.minFilter===Ln||y.minFilter===cu||y.minFilter===$o||y.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==$o&&y.minFilter!==fr||y.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ee(A,y){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));const X=y.source;let J=d.get(X);J===void 0&&(J={},d.set(X,J));const W=B(y);if(W!==A.__cacheKey){J[W]===void 0&&(J[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[W].usedTimes++;const Se=J[A.__cacheKey];Se!==void 0&&(J[A.__cacheKey].usedTimes--,Se.usedTimes===0&&b(y)),A.__cacheKey=W,A.__webglTexture=J[W].texture}return U}function Fe(A,y,U){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const J=Ee(A,y),W=y.source;n.bindTexture(X,A.__webglTexture,t.TEXTURE0+U);const Se=i.get(W);if(W.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+U);const ae=$e.getPrimaries($e.workingColorSpace),me=y.colorSpace===Ai?null:$e.getPrimaries(y.colorSpace),Xe=y.colorSpace===Ai||ae===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ie=S(y.image,!1,r.maxTextureSize);ie=nt(y,ie);const ge=s.convert(y.format,y.colorSpace),Re=s.convert(y.type);let Pe=_(y.internalFormat,ge,Re,y.colorSpace,y.isVideoTexture);se(X,y);let _e;const ke=y.mipmaps,De=y.isVideoTexture!==!0,et=Se.__version===void 0||J===!0,D=W.dataReady,de=M(y,ie);if(y.isDepthTexture)Pe=g(y.format===xs,y.type),et&&(De?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ge,Re,null));else if(y.isDataTexture)if(ke.length>0){De&&et&&n.texStorage2D(t.TEXTURE_2D,de,Pe,ke[0].width,ke[0].height);for(let z=0,q=ke.length;z<q;z++)_e=ke[z],De?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,z,Pe,_e.width,_e.height,0,ge,Re,_e.data);y.generateMipmaps=!1}else De?(et&&n.texStorage2D(t.TEXTURE_2D,de,Pe,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ge,Re,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,ke[0].width,ke[0].height,ie.depth);for(let z=0,q=ke.length;z<q;z++)if(_e=ke[z],y.format!==Nn)if(ge!==null)if(De){if(D)if(y.layerUpdates.size>0){const ue=Fp(_e.width,_e.height,y.format,y.type);for(const he of y.layerUpdates){const He=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,he,_e.width,_e.height,1,ge,He,0,0)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Pe,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ie.depth,ge,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Pe,_e.width,_e.height,ie.depth,0,ge,Re,_e.data)}else{De&&et&&n.texStorage2D(t.TEXTURE_2D,de,Pe,ke[0].width,ke[0].height);for(let z=0,q=ke.length;z<q;z++)_e=ke[z],y.format!==Nn?ge!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,z,Pe,_e.width,_e.height,0,ge,Re,_e.data)}else if(y.isDataArrayTexture)if(De){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,ie.width,ie.height,ie.depth),D)if(y.layerUpdates.size>0){const z=Fp(ie.width,ie.height,y.format,y.type);for(const q of y.layerUpdates){const ue=ie.data.subarray(q*z/ie.data.BYTES_PER_ELEMENT,(q+1)*z/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ie.width,ie.height,1,ge,Re,ue)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(y.isData3DTexture)De?(et&&n.texStorage3D(t.TEXTURE_3D,de,Pe,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(y.isFramebufferTexture){if(et)if(De)n.texStorage2D(t.TEXTURE_2D,de,Pe,ie.width,ie.height);else{let z=ie.width,q=ie.height;for(let ue=0;ue<de;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,z,q,0,ge,Re,null),z>>=1,q>>=1}}else if(ke.length>0){if(De&&et){const z=be(ke[0]);n.texStorage2D(t.TEXTURE_2D,de,Pe,z.width,z.height)}for(let z=0,q=ke.length;z<q;z++)_e=ke[z],De?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ge,Re,_e):n.texImage2D(t.TEXTURE_2D,z,Pe,ge,Re,_e);y.generateMipmaps=!1}else if(De){if(et){const z=be(ie);n.texStorage2D(t.TEXTURE_2D,de,Pe,z.width,z.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,Re,ie);p(y)&&c(X),Se.__version=W.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function G(A,y,U){if(y.image.length!==6)return;const X=Ee(A,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+U);const W=i.get(J);if(J.version!==W.__version||X===!0){n.activeTexture(t.TEXTURE0+U);const Se=$e.getPrimaries($e.workingColorSpace),ae=y.colorSpace===Ai?null:$e.getPrimaries(y.colorSpace),me=y.colorSpace===Ai||Se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let q=0;q<6;q++)!Xe&&!ie?ge[q]=S(y.image[q],!0,r.maxCubemapSize):ge[q]=ie?y.image[q].image:y.image[q],ge[q]=nt(y,ge[q]);const Re=ge[0],Pe=s.convert(y.format,y.colorSpace),_e=s.convert(y.type),ke=_(y.internalFormat,Pe,_e,y.colorSpace),De=y.isVideoTexture!==!0,et=W.__version===void 0||X===!0,D=J.dataReady;let de=M(y,Re);se(t.TEXTURE_CUBE_MAP,y);let z;if(Xe){De&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,Re.width,Re.height);for(let q=0;q<6;q++){z=ge[q].mipmaps;for(let ue=0;ue<z.length;ue++){const he=z[ue];y.format!==Nn?Pe!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,he.width,he.height,Pe,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,he.width,he.height,Pe,_e,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,ke,he.width,he.height,0,Pe,_e,he.data)}}}else{if(z=y.mipmaps,De&&et){z.length>0&&de++;const q=be(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,q.width,q.height)}for(let q=0;q<6;q++)if(ie){De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ge[q].width,ge[q].height,Pe,_e,ge[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,ge[q].width,ge[q].height,0,Pe,_e,ge[q].data);for(let ue=0;ue<z.length;ue++){const He=z[ue].image[q].image;De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,He.width,He.height,Pe,_e,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,ke,He.width,He.height,0,Pe,_e,He.data)}}else{De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Pe,_e,ge[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ke,Pe,_e,ge[q]);for(let ue=0;ue<z.length;ue++){const he=z[ue];De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Pe,_e,he.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,ke,Pe,_e,he.image[q])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),W.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function te(A,y,U,X,J,W){const Se=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),me=_(U.internalFormat,Se,ae,U.colorSpace);if(!i.get(y).__hasExternalTextures){const ie=Math.max(1,y.width>>W),ge=Math.max(1,y.height>>W);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,W,me,ie,ge,y.depth,0,Se,ae,null):n.texImage2D(J,W,me,ie,ge,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,J,i.get(U).__webglTexture,0,Oe(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,J,i.get(U).__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer){const X=y.depthTexture,J=X&&X.isDepthTexture?X.type:null,W=g(y.stencilBuffer,J),Se=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Oe(y);We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,W,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,W,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,W,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,A)}else{const X=y.textures;for(let J=0;J<X.length;J++){const W=X[J],Se=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),me=_(W.internalFormat,Se,ae,W.colorSpace),Xe=Oe(y);U&&We(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,me,y.width,y.height):We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,me,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,me,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const X=i.get(y.depthTexture).__webglTexture,J=Oe(y);if(y.depthTexture.format===os)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(y.depthTexture.format===xs)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Le(A){const y=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=X}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");le(y.__webglFramebuffer,A)}else if(U){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),fe(y.__webglDepthbuffer[X],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),fe(y.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(A,y,U){const X=i.get(A);y!==void 0&&te(X.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Le(A)}function Be(A){const y=A.texture,U=i.get(A),X=i.get(y);A.addEventListener("dispose",C);const J=A.textures,W=A.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let me=0;me<y.mipmaps.length;me++)U.__webglFramebuffer[ae][me]=t.createFramebuffer()}else U.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)U.__webglFramebuffer[ae]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ae=0,me=J.length;ae<me;ae++){const Xe=i.get(J[ae]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const me=J[ae];U.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const Xe=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=_(me.internalFormat,Xe,ie,me.colorSpace,A.isXRRenderTarget===!0),Re=Oe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),se(t.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(U.__webglFramebuffer[ae][me],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else te(U.__webglFramebuffer[ae],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,me=J.length;ae<me;ae++){const Xe=J[ae],ie=i.get(Xe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,Xe),te(U.__webglFramebuffer,A,Xe,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),p(Xe)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,X.__webglTexture),se(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)te(U.__webglFramebuffer[me],A,y,t.COLOR_ATTACHMENT0,ae,me);else te(U.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ae,0);p(y)&&c(ae),n.unbindTexture()}A.depthBuffer&&Le(A)}function Qe(A){const y=A.textures;for(let U=0,X=y.length;U<X;U++){const J=y[U];if(p(J)){const W=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(W,Se),c(W),n.unbindTexture()}}}const ze=[],P=[];function en(A){if(A.samples>0){if(We(A)===!1){const y=A.textures,U=A.width,X=A.height;let J=t.COLOR_BUFFER_BIT;const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(A),ae=y.length>1;if(ae)for(let me=0;me<y.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<y.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Xe=i.get(y[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,U,X,0,0,U,X,J,t.NEAREST),l===!0&&(ze.length=0,P.length=0,ze.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ze.push(W),P.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ze))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<y.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const Xe=i.get(y[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Oe(A){return Math.min(r.maxSamples,A.samples)}function We(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ce(A){const y=o.render.frame;f.get(A)!==y&&(f.set(A,y),A.update())}function nt(A,y){const U=A.colorSpace,X=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Yi&&U!==Ai&&($e.getTransfer(U)===st?(X!==Nn||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=te,this.useMultisampledRTT=We}function iw(t,e){function n(i,r=Ai){let s;const o=$e.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===Sd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===i_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===t_)return t.BYTE;if(i===n_)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===xd)return t.INT;if(i===Sr)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===To)return t.HALF_FLOAT;if(i===r_)return t.ALPHA;if(i===s_)return t.RGB;if(i===Nn)return t.RGBA;if(i===o_)return t.LUMINANCE;if(i===a_)return t.LUMINANCE_ALPHA;if(i===os)return t.DEPTH_COMPONENT;if(i===xs)return t.DEPTH_STENCIL;if(i===l_)return t.RED;if(i===Md)return t.RED_INTEGER;if(i===u_)return t.RG;if(i===Ed)return t.RG_INTEGER;if(i===Td)return t.RGBA_INTEGER;if(i===La||i===Da||i===Na||i===Ia)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===$c||i===Kc||i===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===Jc||i===ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qc||i===Jc)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ef)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===uf||i===cf||i===ff||i===df||i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===gf||i===_f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ua)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===c_||i===vf||i===xf||i===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class rw extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ga extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sw={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),c=this._getHandJoint(u,S);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gi({vertexShader:ow,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uw extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,v=null;const S=new lw,p=n.getContextAttributes();let c=null,_=null;const g=[],M=[],R=new Je;let C=null;const w=new gn;w.layers.enable(1),w.viewport=new mt;const b=new gn;b.layers.enable(2),b.viewport=new mt;const K=[w,b],x=new rw;x.layers.enable(1),x.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=g[G];return te===void 0&&(te=new zu,g[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=g[G];return te===void 0&&(te=new zu,g[G]=te),te.getGripSpace()},this.getHand=function(G){let te=g[G];return te===void 0&&(te=new zu,g[G]=te),te.getHandSpace()};function B(G){const te=M.indexOf(G.inputSource);if(te===-1)return;const fe=g[te];fe!==void 0&&(fe.update(G.inputSource,G.frame,u||o),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Q);for(let G=0;G<g.length;G++){const te=M[G];te!==null&&(M[G]=null,g[G].disconnect(te))}T=null,V=null,S.reset(),e.setRenderTarget(c),m=null,d=null,h=null,r=null,_=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new yr(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,fe=null,le=null;p.depth&&(le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?xs:os,fe=p.stencil?vs:Sr);const Le={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new yr(d.textureWidth,d.textureHeight,{format:Nn,type:fi,depthTexture:new A_(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(G){for(let te=0;te<G.removed.length;te++){const fe=G.removed[te],le=M.indexOf(fe);le>=0&&(M[le]=null,g[le].disconnect(fe))}for(let te=0;te<G.added.length;te++){const fe=G.added[te];let le=M.indexOf(fe);if(le===-1){for(let we=0;we<g.length;we++)if(we>=M.length){M.push(fe),le=we;break}else if(M[we]===null){M[we]=fe,le=we;break}if(le===-1)break}const Le=g[le];Le&&Le.connect(fe)}}const H=new k,Z=new k;function L(G,te,fe){H.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const le=H.distanceTo(Z),Le=te.projectionMatrix.elements,we=fe.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),Qe=Le[14]/(Le[10]+1),ze=(Le[9]+1)/Le[5],P=(Le[9]-1)/Le[5],en=(Le[8]-1)/Le[0],Oe=(we[8]+1)/we[0],We=Be*en,Ce=Be*Oe,nt=le/(-en+Oe),be=nt*-en;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(be),G.translateZ(nt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Le[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=Be+nt,y=Qe+nt,U=We-be,X=Ce+(le-be),J=ze*Qe/y*A,W=P*Qe/y*A;G.projectionMatrix.makePerspective(U,X,J,W,A,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Y(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,fe=G.far;S.texture!==null&&(S.depthNear>0&&(te=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),x.near=b.near=w.near=te,x.far=b.far=w.far=fe,(T!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,V=x.far);const le=G.parent,Le=x.cameras;Y(x,le);for(let we=0;we<Le.length;we++)Y(Le[we],le);Le.length===2?L(x,w,b):x.projectionMatrix.copy(w.projectionMatrix),$(G,x,le)};function $(G,te,fe){fe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=yf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let se=null;function Ee(G,te){if(f=te.getViewerPose(u||o),v=te,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let we=0;we<fe.length;we++){const Be=fe[we];let Qe=null;if(m!==null)Qe=m.getViewport(Be);else{const P=h.getViewSubImage(d,Be);Qe=P.viewport,we===0&&(e.setRenderTargetTextures(_,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let ze=K[we];ze===void 0&&(ze=new gn,ze.layers.enable(we),ze.viewport=new mt,K[we]=ze),ze.matrix.fromArray(Be.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Be.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(x.matrix.copy(ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(ze)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const we=h.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&S.init(e,we,r.renderState)}}for(let fe=0;fe<g.length;fe++){const le=M[fe],Le=g[fe];le!==null&&Le!==void 0&&Le.update(le,te,u||o)}se&&se(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const Fe=new w_;Fe.setAnimationLoop(Ee),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}const er=new di,cw=new gt;function fw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,y_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),S(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Zt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Zt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,M=_.envMapRotation;g&&(p.envMap.value=g,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(er)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Zt&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function S(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function u(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),R=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=M.length;C<w;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let K=0,x=b.length;K<x;K++){const T=b[K];if(m(T,C,K,R)===!0){const V=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let Q=0;Q<B.length;Q++){const H=B[Q],Z=S(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+j,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,R){const C=_.value,w=g+"_"+M;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const b=R[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return R[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function v(_){const g=_.uniforms;let M=0;const R=16;for(let w=0,b=g.length;w<b;w++){const K=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,T=K.length;x<T;x++){const V=K[x],B=Array.isArray(V.value)?V.value:[V.value];for(let j=0,Q=B.length;j<Q;j++){const H=B[j],Z=S(H),L=M%R,Y=L%Z.boundary,$=L+Y;M+=Y,$!==0&&R-$<Z.storage&&(M+=R-$),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=Z.storage}}}const C=M%R;return C>0&&(M+=R-C),_.__size=M,_.__cache={},this}function S(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class hw{constructor(e={}){const{canvas:n=Jx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let M=!1,R=0,C=0,w=null,b=-1,K=null;const x=new mt,T=new mt;let V=null;const B=new Ve(0);let j=0,Q=n.width,H=n.height,Z=1,L=null,Y=null;const $=new mt(0,0,Q,H),se=new mt(0,0,Q,H);let Ee=!1;const Fe=new T_;let G=!1,te=!1;const fe=new gt,le=new gt,Le=new k,we=new mt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function ze(){return w===null?Z:1}let P=i;function en(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),P===null){const N="webgl2";if(P=en(N,E),P===null)throw en(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,We,Ce,nt,be,A,y,U,X,J,W,Se,ae,me,Xe,ie,ge,Re,Pe,_e,ke,De,et,D;function de(){Oe=new vE(P),Oe.init(),De=new iw(P,Oe),We=new fE(P,Oe,e,De),Ce=new ew(P),We.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),nt=new yE(P),be=new BT,A=new nw(P,Oe,Ce,be,We,De,nt),y=new hE(g),U=new _E(g),X=new CS(P),et=new uE(P,X),J=new xE(P,X,nt,et),W=new EE(P,J,X,nt),Pe=new ME(P,We,A),ie=new dE(be),Se=new kT(g,y,U,Oe,We,et,ie),ae=new fw(g,be),me=new HT,Xe=new YT(Oe),Re=new lE(g,y,U,Ce,W,d,l),ge=new QT(g,W,We),D=new dw(P,nt,We,Ce),_e=new cE(P,Oe,nt),ke=new SE(P,Oe,nt),nt.programs=Se.programs,g.capabilities=We,g.extensions=Oe,g.properties=be,g.renderLists=me,g.shadowMap=ge,g.state=Ce,g.info=nt}de();const z=new uw(g,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(Q,H,!1))},this.getSize=function(E){return E.set(Q,H)},this.setSize=function(E,N,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,H=N,n.width=Math.floor(E*Z),n.height=Math.floor(N*Z),F===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Q*Z,H*Z).floor()},this.setDrawingBufferSize=function(E,N,F){Q=E,H=N,Z=F,n.width=Math.floor(E*F),n.height=Math.floor(N*F),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,F,O){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,F,O),Ce.viewport(x.copy($).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,N,F,O){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,N,F,O),Ce.scissor(T.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){Ce.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,N=!0,F=!0){let O=0;if(E){let I=!1;if(w!==null){const re=w.texture.format;I=re===Td||re===Ed||re===Md}if(I){const re=w.texture.type,ce=re===fi||re===Sr||re===vo||re===vs||re===Sd||re===yd,ve=Re.getClearColor(),xe=Re.getClearAlpha(),Te=ve.r,Ae=ve.g,ye=ve.b;ce?(m[0]=Te,m[1]=Ae,m[2]=ye,m[3]=xe,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Te,v[1]=Ae,v[2]=ye,v[3]=xe,P.clearBufferiv(P.COLOR,0,v))}else O|=P.COLOR_BUFFER_BIT}N&&(O|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),Xe.dispose(),be.dispose(),y.dispose(),U.dispose(),W.dispose(),et.dispose(),D.dispose(),Se.dispose(),z.dispose(),z.removeEventListener("sessionstart",Cd),z.removeEventListener("sessionend",Rd),qi.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=nt.autoReset,N=ge.enabled,F=ge.autoUpdate,O=ge.needsUpdate,I=ge.type;de(),nt.autoReset=E,ge.enabled=N,ge.autoUpdate=F,ge.needsUpdate=O,ge.type=I}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const N=E.target;N.removeEventListener("dispose",He),_t(N)}function _t(E){Vt(E),be.remove(E)}function Vt(E){const N=be.get(E).programs;N!==void 0&&(N.forEach(function(F){Se.releaseProgram(F)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,F,O,I,re){N===null&&(N=Be);const ce=I.isMesh&&I.matrixWorld.determinant()<0,ve=D_(E,N,F,O,I);Ce.setMaterial(O,ce);let xe=F.index,Te=1;if(O.wireframe===!0){if(xe=J.getWireframeAttribute(F),xe===void 0)return;Te=2}const Ae=F.drawRange,ye=F.attributes.position;let Ke=Ae.start*Te,it=(Ae.start+Ae.count)*Te;re!==null&&(Ke=Math.max(Ke,re.start*Te),it=Math.min(it,(re.start+re.count)*Te)),xe!==null?(Ke=Math.max(Ke,0),it=Math.min(it,xe.count)):ye!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,ye.count));const ft=it-Ke;if(ft<0||ft===1/0)return;et.setup(I,O,ve,F,xe);let tn,Ye=_e;if(xe!==null&&(tn=X.get(xe),Ye=ke,Ye.setIndex(tn)),I.isMesh)O.wireframe===!0?(Ce.setLineWidth(O.wireframeLinewidth*ze()),Ye.setMode(P.LINES)):Ye.setMode(P.TRIANGLES);else if(I.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*ze()),I.isLineSegments?Ye.setMode(P.LINES):I.isLineLoop?Ye.setMode(P.LINE_LOOP):Ye.setMode(P.LINE_STRIP)}else I.isPoints?Ye.setMode(P.POINTS):I.isSprite&&Ye.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ye.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Me=I._multiDrawStarts,Ct=I._multiDrawCounts,qe=I._multiDrawCount,En=xe?X.get(xe).bytesPerElement:1,Tr=be.get(O).currentProgram.getUniforms();for(let nn=0;nn<qe;nn++)Tr.setValue(P,"_gl_DrawID",nn),Ye.render(Me[nn]/En,Ct[nn])}else if(I.isInstancedMesh)Ye.renderInstances(Ke,ft,I.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ct=Math.min(F.instanceCount,Me);Ye.renderInstances(Ke,ft,Ct)}else Ye.render(Ke,ft)};function je(E,N,F){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,Lo(E,N,F),E.side=Vi,E.needsUpdate=!0,Lo(E,N,F),E.side=ei):Lo(E,N,F)}this.compile=function(E,N,F=null){F===null&&(F=E),p=Xe.get(F),p.init(N),_.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),E!==F&&E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const O=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const re=I.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){const ve=re[ce];je(ve,F,I),O.add(ve)}else je(re,F,I),O.add(re)}),_.pop(),p=null,O},this.compileAsync=function(E,N,F=null){const O=this.compile(E,N,F);return new Promise(I=>{function re(){if(O.forEach(function(ce){be.get(ce).currentProgram.isReady()&&O.delete(ce)}),O.size===0){I(E);return}setTimeout(re,10)}Oe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Gt=null;function Xn(E){Gt&&Gt(E)}function Cd(){qi.stop()}function Rd(){qi.start()}const qi=new w_;qi.setAnimationLoop(Xn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(E){Gt=E,z.setAnimationLoop(E),E===null?qi.stop():qi.start()},z.addEventListener("sessionstart",Cd),z.addEventListener("sessionend",Rd),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(N),N=z.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,w),p=Xe.get(E,_.length),p.init(N),_.push(p),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Fe.setFromProjectionMatrix(le),te=this.localClippingEnabled,G=ie.init(this.clippingPlanes,te),S=me.get(E,c.length),S.init(),c.push(S),z.enabled===!0&&z.isPresenting===!0){const re=g.xr.getDepthSensingMesh();re!==null&&Il(re,N,-1/0,g.sortObjects)}Il(E,N,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(L,Y),Qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Qe&&Re.addToRenderList(S,E),this.info.render.frame++,G===!0&&ie.beginShadows();const F=p.state.shadowsArray;ge.render(F,E,N),G===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=S.opaque,I=S.transmissive;if(p.setupLights(),N.isArrayCamera){const re=N.cameras;if(I.length>0)for(let ce=0,ve=re.length;ce<ve;ce++){const xe=re[ce];bd(O,I,E,xe)}Qe&&Re.render(E);for(let ce=0,ve=re.length;ce<ve;ce++){const xe=re[ce];Pd(S,E,xe,xe.viewport)}}else I.length>0&&bd(O,I,E,N),Qe&&Re.render(E),Pd(S,E,N);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,N),et.resetDefaultState(),b=-1,K=null,_.pop(),_.length>0?(p=_[_.length-1],G===!0&&ie.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,c.pop(),c.length>0?S=c[c.length-1]:S=null};function Il(E,N,F,O){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){O&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const ce=W.update(E),ve=E.material;ve.visible&&S.push(E,ce,ve,F,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const ce=W.update(E),ve=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),we.copy(ce.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(ve)){const xe=ce.groups;for(let Te=0,Ae=xe.length;Te<Ae;Te++){const ye=xe[Te],Ke=ve[ye.materialIndex];Ke&&Ke.visible&&S.push(E,ce,Ke,F,we.z,ye)}}else ve.visible&&S.push(E,ce,ve,F,we.z,null)}}const re=E.children;for(let ce=0,ve=re.length;ce<ve;ce++)Il(re[ce],N,F,O)}function Pd(E,N,F,O){const I=E.opaque,re=E.transmissive,ce=E.transparent;p.setupLightsView(F),G===!0&&ie.setGlobalState(g.clippingPlanes,F),O&&Ce.viewport(x.copy(O)),I.length>0&&bo(I,N,F),re.length>0&&bo(re,N,F),ce.length>0&&bo(ce,N,F),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function bd(E,N,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new yr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?To:fi,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=p.state.transmissionRenderTarget[O.id],ce=O.viewport||x;re.setSize(ce.z,ce.w);const ve=g.getRenderTarget();g.setRenderTarget(re),g.getClearColor(B),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear(),Qe&&Re.render(F);const xe=g.toneMapping;g.toneMapping=Bi;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),G===!0&&ie.setGlobalState(g.clippingPlanes,O),bo(E,F,O),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ye=0,Ke=N.length;ye<Ke;ye++){const it=N[ye],ft=it.object,tn=it.geometry,Ye=it.material,Me=it.group;if(Ye.side===ei&&ft.layers.test(O.layers)){const Ct=Ye.side;Ye.side=Zt,Ye.needsUpdate=!0,Ld(ft,F,O,tn,Ye,Me),Ye.side=Ct,Ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}g.setRenderTarget(ve),g.setClearColor(B,j),Te!==void 0&&(O.viewport=Te),g.toneMapping=xe}function bo(E,N,F){const O=N.isScene===!0?N.overrideMaterial:null;for(let I=0,re=E.length;I<re;I++){const ce=E[I],ve=ce.object,xe=ce.geometry,Te=O===null?ce.material:O,Ae=ce.group;ve.layers.test(F.layers)&&Ld(ve,N,F,xe,Te,Ae)}}function Ld(E,N,F,O,I,re){E.onBeforeRender(g,N,F,O,I,re),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(g,N,F,O,E,re),I.transparent===!0&&I.side===ei&&I.forceSinglePass===!1?(I.side=Zt,I.needsUpdate=!0,g.renderBufferDirect(F,N,O,I,E,re),I.side=Vi,I.needsUpdate=!0,g.renderBufferDirect(F,N,O,I,E,re),I.side=ei):g.renderBufferDirect(F,N,O,I,E,re),E.onAfterRender(g,N,F,O,I,re)}function Lo(E,N,F){N.isScene!==!0&&(N=Be);const O=be.get(E),I=p.state.lights,re=p.state.shadowsArray,ce=I.state.version,ve=Se.getParameters(E,I.state,re,N,F),xe=Se.getProgramCacheKey(ve);let Te=O.programs;O.environment=E.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(E.isMeshStandardMaterial?U:y).get(E.envMap||O.environment),O.envMapRotation=O.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",He),Te=new Map,O.programs=Te);let Ae=Te.get(xe);if(Ae!==void 0){if(O.currentProgram===Ae&&O.lightsStateVersion===ce)return Nd(E,ve),Ae}else ve.uniforms=Se.getUniforms(E),E.onBeforeCompile(ve,g),Ae=Se.acquireProgram(ve,xe),Te.set(xe,Ae),O.uniforms=ve.uniforms;const ye=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ie.uniform),Nd(E,ve),O.needsLights=I_(E),O.lightsStateVersion=ce,O.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Ae,O.uniformsList=null,Ae}function Dd(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Oa.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Nd(E,N){const F=be.get(E);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function D_(E,N,F,O,I){N.isScene!==!0&&(N=Be),A.resetTextureUnits();const re=N.fog,ce=O.isMeshStandardMaterial?N.environment:null,ve=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Yi,xe=(O.isMeshStandardMaterial?U:y).get(O.envMap||ce),Te=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ye=!!F.morphAttributes.position,Ke=!!F.morphAttributes.normal,it=!!F.morphAttributes.color;let ft=Bi;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=g.toneMapping);const tn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ye=tn!==void 0?tn.length:0,Me=be.get(O),Ct=p.state.lights;if(G===!0&&(te===!0||E!==K)){const dn=E===K&&O.id===b;ie.setState(O,E,dn)}let qe=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||Me.outputColorSpace!==ve||I.isBatchedMesh&&Me.batching===!1||!I.isBatchedMesh&&Me.batching===!0||I.isBatchedMesh&&Me.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Me.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Me.instancing===!1||!I.isInstancedMesh&&Me.instancing===!0||I.isSkinnedMesh&&Me.skinning===!1||!I.isSkinnedMesh&&Me.skinning===!0||I.isInstancedMesh&&Me.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Me.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Me.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Me.instancingMorph===!1&&I.morphTexture!==null||Me.envMap!==xe||O.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ie.numPlanes||Me.numIntersection!==ie.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ae||Me.morphTargets!==ye||Me.morphNormals!==Ke||Me.morphColors!==it||Me.toneMapping!==ft||Me.morphTargetsCount!==Ye)&&(qe=!0):(qe=!0,Me.__version=O.version);let En=Me.currentProgram;qe===!0&&(En=Lo(O,N,I));let Tr=!1,nn=!1,Ul=!1;const ht=En.getUniforms(),pi=Me.uniforms;if(Ce.useProgram(En.program)&&(Tr=!0,nn=!0,Ul=!0),O.id!==b&&(b=O.id,nn=!0),Tr||K!==E){We.reverseDepthBuffer?(fe.copy(E.projectionMatrix),tS(fe),nS(fe),ht.setValue(P,"projectionMatrix",fe)):ht.setValue(P,"projectionMatrix",E.projectionMatrix),ht.setValue(P,"viewMatrix",E.matrixWorldInverse);const dn=ht.map.cameraPosition;dn!==void 0&&dn.setValue(P,Le.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,nn=!0,Ul=!0)}if(I.isSkinnedMesh){ht.setOptional(P,I,"bindMatrix"),ht.setOptional(P,I,"bindMatrixInverse");const dn=I.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ht.setValue(P,"boneTexture",dn.boneTexture,A))}I.isBatchedMesh&&(ht.setOptional(P,I,"batchingTexture"),ht.setValue(P,"batchingTexture",I._matricesTexture,A),ht.setOptional(P,I,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",I._indirectTexture,A),ht.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",I._colorsTexture,A));const Fl=F.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0)&&Pe.update(I,F,En),(nn||Me.receiveShadow!==I.receiveShadow)&&(Me.receiveShadow=I.receiveShadow,ht.setValue(P,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(pi.envMap.value=xe,pi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&N.environment!==null&&(pi.envMapIntensity.value=N.environmentIntensity),nn&&(ht.setValue(P,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&N_(pi,Ul),re&&O.fog===!0&&ae.refreshFogUniforms(pi,re),ae.refreshMaterialUniforms(pi,O,Z,H,p.state.transmissionRenderTarget[E.id]),Oa.upload(P,Dd(Me),pi,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Oa.upload(P,Dd(Me),pi,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(P,"center",I.center),ht.setValue(P,"modelViewMatrix",I.modelViewMatrix),ht.setValue(P,"normalMatrix",I.normalMatrix),ht.setValue(P,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dn=O.uniformsGroups;for(let Ol=0,U_=dn.length;Ol<U_;Ol++){const Id=dn[Ol];D.update(Id,En),D.bind(Id,En)}}return En}function N_(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function I_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,F){be.get(E.texture).__webglTexture=N,be.get(E.depthTexture).__webglTexture=F;const O=be.get(E);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const F=be.get(E);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,F=0){w=E,R=N,C=F;let O=!0,I=null,re=!1,ce=!1;if(E){const xe=be.get(E);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(P.FRAMEBUFFER,null),O=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xe.__hasExternalTextures)A.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&be.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ce=!0);const Ae=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?I=Ae[N][F]:I=Ae[N],re=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?I=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?I=Ae[F]:I=Ae,x.copy(E.viewport),T.copy(E.scissor),V=E.scissorTest}else x.copy($).multiplyScalar(Z).floor(),T.copy(se).multiplyScalar(Z).floor(),V=Ee;if(Ce.bindFramebuffer(P.FRAMEBUFFER,I)&&O&&Ce.drawBuffers(E,I),Ce.viewport(x),Ce.scissor(T),Ce.setScissorTest(V),re){const xe=be.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,F)}else if(ce){const xe=be.get(E.texture),Te=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,Te)}b=-1},this.readRenderTargetPixels=function(E,N,F,O,I,re,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){Ce.bindFramebuffer(P.FRAMEBUFFER,ve);try{const xe=E.texture,Te=xe.format,Ae=xe.type;if(!We.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-O&&F>=0&&F<=E.height-I&&P.readPixels(N,F,O,I,De.convert(Te),De.convert(Ae),re)}finally{const xe=w!==null?be.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,N,F,O,I,re,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){const xe=E.texture,Te=xe.format,Ae=xe.type;if(!We.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-O&&F>=0&&F<=E.height-I){Ce.bindFramebuffer(P.FRAMEBUFFER,ve);const ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(N,F,O,I,De.convert(Te),De.convert(Ae),0);const Ke=w!==null?be.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,Ke);const it=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await eS(P,it,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(ye),P.deleteSync(it),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,F=0){E.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(E.image.width*O),re=Math.floor(E.image.height*O),ce=N!==null?N.x:0,ve=N!==null?N.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ce,ve,I,re),Ce.unbindTexture()},this.copyTextureToTexture=function(E,N,F=null,O=null,I=0){E.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1],N=arguments[2],I=arguments[3]||0,F=null);let re,ce,ve,xe,Te,Ae;F!==null?(re=F.max.x-F.min.x,ce=F.max.y-F.min.y,ve=F.min.x,xe=F.min.y):(re=E.image.width,ce=E.image.height,ve=0,xe=0),O!==null?(Te=O.x,Ae=O.y):(Te=0,Ae=0);const ye=De.convert(N.format),Ke=De.convert(N.type);A.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ye=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Ct=E.isCompressedTexture?E.mipmaps[I]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,Te,Ae,re,ce,ye,Ke,Ct.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,Te,Ae,Ct.width,Ct.height,ye,Ct.data):P.texSubImage2D(P.TEXTURE_2D,I,Te,Ae,re,ce,ye,Ke,Ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),I===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,N,F=null,O=null,I=0){E.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,E=arguments[2],N=arguments[3],I=arguments[4]||0);let re,ce,ve,xe,Te,Ae,ye,Ke,it;const ft=E.isCompressedTexture?E.mipmaps[I]:E.image;F!==null?(re=F.max.x-F.min.x,ce=F.max.y-F.min.y,ve=F.max.z-F.min.z,xe=F.min.x,Te=F.min.y,Ae=F.min.z):(re=ft.width,ce=ft.height,ve=ft.depth,xe=0,Te=0,Ae=0),O!==null?(ye=O.x,Ke=O.y,it=O.z):(ye=0,Ke=0,it=0);const tn=De.convert(N.format),Ye=De.convert(N.type);let Me;if(N.isData3DTexture)A.setTexture3D(N,0),Me=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ct=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),En=P.getParameter(P.UNPACK_SKIP_PIXELS),Tr=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Me,I,ye,Ke,it,re,ce,ve,tn,Ye,ft.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,I,ye,Ke,it,re,ce,ve,tn,ft.data):P.texSubImage3D(Me,I,ye,Ke,it,re,ce,ve,tn,Ye,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,En),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),I===0&&N.generateMipmaps&&P.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,Ce.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===bl?"display-p3":"srgb"}}class pw extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class L_ extends Ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Op=new gt,Ef=new m_,_a=new Ll,va=new k;class mw extends Jt{constructor(e=new Wn,n=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;Op.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(Op);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,S=m;v<S;v++){const p=u.getX(v);va.fromBufferAttribute(h,p),kp(va,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,S=m;v<S;v++)va.fromBufferAttribute(h,v),kp(va,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kp(t,e,n,i,r,s,o){const a=Ef.distanceSqToPoint(t);if(a<n){const l=new k;Ef.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);function gw(){const t=Pi.useRef(null);return Pi.useEffect(()=>{const e=t.current;if(!e)return;const n=new pw,i=new gn(75,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=55;const r=new hw({antialias:!0,alpha:!0});r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=new Wn,o=1800,a=new Float32Array(o*3),l=new Float32Array(o*3),u=[new Ve("#22d3ee"),new Ve("#6ee7b7"),new Ve("#a78bfa"),new Ve("#ffffff")];for(let g=0;g<o*3;g+=3){a[g]=(Math.random()-.5)*160,a[g+1]=(Math.random()-.5)*100,a[g+2]=(Math.random()-.5)*160;const M=u[Math.floor(Math.random()*u.length)];l[g]=M.r,l[g+1]=M.g,l[g+2]=M.b}s.setAttribute("position",new Sn(a,3)),s.setAttribute("color",new Sn(l,3));const f=new L_({size:.25,vertexColors:!0,transparent:!0,opacity:.9,blending:Ic}),h=new mw(s,f);n.add(h),new Wn;const d=new Float32Array(o*2*3);for(let g=0;g<o;g++){const M=g*6,R=a[g*3];d[M]=R,d[M+3]=R}let m=0,v=0;const S=g=>{m=g.clientX/window.innerWidth*2-1,v=-(g.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",S);const p=()=>{i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight)};window.addEventListener("resize",p);let c;const _=()=>{c=requestAnimationFrame(_),h.rotation.y+=4e-4,h.rotation.x+=1e-4,i.position.x+=(m*3-i.position.x)*.03,i.position.y+=(-v*3-i.position.y)*.03,i.lookAt(n.position),r.render(n,i)};return _(),()=>{cancelAnimationFrame(c),window.removeEventListener("mousemove",S),window.removeEventListener("resize",p),s.dispose(),f.dispose(),r.dispose(),r.domElement.parentNode===e&&e.removeChild(r.domElement)}},[]),ne.jsx("div",{ref:t,className:"fixed inset-0 z-0","aria-hidden":"true"})}const Bp=[{title:"NutriVision — AI Nutrition Assistant",subtitle:"Build with Gemma Hackathon 2026 · 🥈 2nd place",featured:!0,tags:["🏆 Hackathon","GenAI","Computer Vision","Agents"],description:"AI nutrition assistant that analyzes food photos, detects Moroccan dishes with YOLOv8 (70 dishes), provides nutritional analysis via Gemma 4B, and generates personalized recommendations and meal plans based on health conditions.",points:["Multi-agent architecture (vision, RAG, nutrition, supervisor)","MFOOD YOLOv8 detection + Gemma LLM analysis","RAG with ChromaDB · React + Vite frontend · Flask backend · Firebase"],link:"https://github.com/BLD933/NutriVision"},{title:"Air Quality Prediction — LSTM",tags:["Deep Learning","LSTM","Forecasting"],description:"LSTM model predicting PM2.5 concentrations in Delhi from environmental time series, with MICE imputation and AQI alert system.",link:"https://github.com/KOURBISSE01/Pr-diction-de-la-Qualit-de-l-Air-par-Deep-Learning"},{title:"WhatsApp Intelligent Chatbot — FSBM",tags:["Rasa","RAG","Groq"],description:"University chatbot based on Rasa, RAG pipeline (ChromaDB, sentence-transformers) and Groq, answering academic questions.",link:"https://github.com/KOURBISSE01/Chatbot-Intelligent-WhatsApp-FSBM"},{title:"RPA Automation WhatsApp Bot",tags:["RPA","Selenium","Pandas"],description:"Python automation (Selenium + Pandas) for bulk personalized message sending of convocations integrated into a club's recruitment flow.",link:"https://github.com/KOURBISSE01/Automatisation-RPA-Bot-WhatsApp"},{title:"Mobile App — Event Management",tags:["Flutter","Firebase","QR Code"],description:"Flutter + Firebase mobile application with QR Code generation and scanning for event presence management.",link:"https://github.com/KOURBISSE01/Application-Mobile-de-Gestion-venementielle"}],_w=[{icon:"🧠",title:"AI & ML",items:["Machine Learning","Deep Learning","LSTM","TensorFlow","Scikit-learn","RAG","Computer Vision","LLM"]},{icon:"💻",title:"Languages",items:["Python","Java","Kotlin","C / C++","JavaScript","SQL"]},{icon:"📊",title:"Data",items:["NumPy","Pandas","Matplotlib","Power BI","Data Cleaning","Data Viz"]},{icon:"🛠️",title:"Tools",items:["Flutter","Firebase","Oracle SQL","Selenium","Git","Linux"]}],vw=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];function xw(){const[t,e]=Pi.useState("home"),[n,i]=Pi.useState(!1);Pi.useEffect(()=>{const s=()=>i(window.scrollY>30);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=s=>{var o;e(s),(o=document.getElementById(s))==null||o.scrollIntoView({behavior:"smooth"})};return ne.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-ink",children:[ne.jsx(gw,{}),ne.jsx("div",{className:"pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-ink/70 via-transparent to-ink"}),ne.jsx("header",{className:`fixed top-0 inset-x-0 z-50 transition-all ${n?"bg-ink/80 backdrop-blur-md border-b border-line":"bg-transparent"}`,children:ne.jsxs("nav",{className:"max-w-6xl mx-auto flex items-center justify-between px-6 py-4",children:[ne.jsxs("button",{onClick:()=>r("home"),className:"font-mono font-bold text-xl tracking-tight",children:["AK",ne.jsx("span",{className:"text-neon",children:"."})]}),ne.jsx("ul",{className:"hidden md:flex gap-8",children:vw.map(s=>ne.jsx("li",{children:ne.jsx("button",{onClick:()=>r(s.id),className:`text-sm font-medium transition-colors ${t===s.id?"text-neon":"text-gray-400 hover:text-white"}`,children:s.label})},s.id))}),ne.jsx("a",{href:"#contact",onClick:()=>r("contact"),className:"text-sm px-4 py-2 rounded-full border border-neon text-neon hover:bg-neon hover:text-ink transition-colors md:inline hidden",children:"Let's talk"})]})}),ne.jsx("section",{id:"home",className:"relative z-10 min-h-screen flex items-center px-6",children:ne.jsxs("div",{className:"max-w-6xl mx-auto w-full pt-24",children:[ne.jsx("p",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/40 bg-emerald/10 text-emerald text-xs font-mono tracking-wide",children:"🏆 2nd place — Build with Gemma Hackathon 2026"}),ne.jsxs("h1",{className:"mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight",children:["Aymane ",ne.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-neon via-emerald to-violet",children:"KOURBISSE"})]}),ne.jsx("p",{className:"mt-3 text-xl font-medium text-neon",children:"AI & Applications Developer"}),ne.jsxs("p",{className:"mt-6 max-w-xl text-gray-400 leading-relaxed",children:["Specialized in ",ne.jsx("span",{className:"text-white",children:"Machine Learning, GenAI & AI Agents"})," — RAG, LLM, Computer Vision. I build intelligent solutions that turn data into decisions."]}),ne.jsxs("div",{className:"mt-8 flex flex-wrap gap-4",children:[ne.jsx("a",{href:"#projects",onClick:()=>r("projects"),className:"px-6 py-3 rounded-full bg-neon text-ink font-semibold hover:shadow-lg hover:shadow-neon/30 transition-all",children:"View Projects"}),ne.jsx("a",{href:"mailto:Aymane.kourbisse@gmail.com",className:"px-6 py-3 rounded-full border border-gray-600 hover:border-neon hover:text-neon transition-colors",children:"Contact me"})]}),ne.jsx("div",{className:"mt-12 flex gap-3 text-2xl",children:[{icon:"🐙",href:"https://github.com/KOURBISSE01"},{icon:"✉️",href:"mailto:Aymane.kourbisse@gmail.com"},{icon:"📄",href:"https://kouris01.github.io/portfolio/"}].map((s,o)=>ne.jsx("a",{href:s.href,target:"_blank",rel:"noopener",className:"w-11 h-11 flex items-center justify-center rounded-lg border border-gray-700 hover:border-neon hover:text-neon transition-colors",children:s.icon},o))})]})}),ne.jsx("section",{id:"about",className:"relative z-10 px-6 py-24",children:ne.jsxs("div",{className:"max-w-6xl mx-auto",children:[ne.jsxs("h2",{className:"text-3xl font-bold font-mono",children:[ne.jsx("span",{className:"text-neon",children:"01."})," About"]}),ne.jsx("div",{className:"mt-4 h-px w-full bg-line"}),ne.jsxs("p",{className:"mt-6 max-w-3xl text-gray-300 leading-relaxed",children:["Junior AI developer specialized in ",ne.jsx("span",{className:"text-white",children:"Artificial Intelligence, Machine Learning and GenAI"}),", with practical experience in ",ne.jsx("span",{className:"text-white",children:"RAG, LLM, Computer Vision"})," and AI agent development. Currently leader of the IT cell at the Club des Jeunes Motivés."]}),ne.jsx("div",{className:"mt-10 grid md:grid-cols-3 gap-6",children:[{icon:"🎯",title:"Objective",desc:"Contribute to innovative AI solutions within an internship or work-study program."},{icon:"🎓",title:"Education",desc:"Excellence License in AI — FS Ben M'Sik. DEUG Software Development."},{icon:"⚡",title:"Activities",desc:"Head of IT at Club des Jeunes Motivés. Creative, independent, team player."}].map(s=>ne.jsxs("div",{className:"p-6 rounded-2xl bg-card border border-line hover:border-neon/50 transition-colors",children:[ne.jsx("div",{className:"text-2xl",children:s.icon}),ne.jsx("h3",{className:"mt-3 font-bold",children:s.title}),ne.jsx("p",{className:"mt-2 text-sm text-gray-400 leading-relaxed",children:s.desc})]},s.title))})]})}),ne.jsx("section",{id:"skills",className:"relative z-10 px-6 py-24",children:ne.jsxs("div",{className:"max-w-6xl mx-auto",children:[ne.jsxs("h2",{className:"text-3xl font-bold font-mono",children:[ne.jsx("span",{className:"text-neon",children:"02."})," Skills"]}),ne.jsx("div",{className:"mt-4 h-px w-full bg-line"}),ne.jsx("div",{className:"mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:_w.map(s=>ne.jsxs("div",{className:"p-6 rounded-2xl bg-card border border-line",children:[ne.jsxs("div",{className:"flex items-center gap-3",children:[ne.jsx("span",{className:"text-xl",children:s.icon}),ne.jsx("h3",{className:"font-semibold",children:s.title})]}),ne.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:s.items.map(o=>ne.jsx("span",{className:"px-3 py-1 text-xs bg-ink border border-line rounded-full text-gray-300",children:o},o))})]},s.title))})]})}),ne.jsx("section",{id:"projects",className:"relative z-10 px-6 py-24",children:ne.jsxs("div",{className:"max-w-6xl mx-auto",children:[ne.jsxs("h2",{className:"text-3xl font-bold font-mono",children:[ne.jsx("span",{className:"text-neon",children:"03."})," Projects"]}),ne.jsx("div",{className:"mt-4 h-px w-full bg-line"}),Bp.filter(s=>s.featured).map(s=>ne.jsxs("article",{className:"mt-8 p-8 rounded-2xl bg-gradient-to-br from-card to-ink-2 border border-neon/40",children:[ne.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(o=>ne.jsx("span",{className:"px-3 py-1 text-xs bg-neon/10 border border-neon/40 text-neon rounded-full",children:o},o))}),ne.jsx("h3",{className:"mt-4 text-2xl font-bold",children:s.title}),ne.jsx("p",{className:"text-sm text-emerald font-mono mt-1",children:s.sub}),ne.jsx("p",{className:"mt-4 text-gray-300 leading-relaxed max-w-3xl",children:s.description}),ne.jsx("ul",{className:"mt-4 list-disc list-inside text-sm text-gray-400 space-y-1",children:s.points.map(o=>ne.jsx("li",{children:o},o))}),ne.jsxs("a",{href:s.link,target:"_blank",rel:"noopener",className:"mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon text-ink font-semibold hover:shadow-lg hover:shadow-neon/30 transition-all",children:["⚙ View source ",ne.jsx("span",{"aria-hidden":!0,children:s.arrow??"→"})]})]},s.title)),ne.jsx("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:Bp.filter(s=>!s.featured).map(s=>ne.jsxs("article",{className:"group p-6 rounded-2xl bg-card border border-line hover:border-neon/50 transition-colors",children:[ne.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(o=>ne.jsx("span",{className:"px-2.5 py-0.5 text-xs bg-ink border border-line rounded-full text-gray-300",children:o},o))}),ne.jsx("h3",{className:"mt-3 font-bold text-lg",children:s.title}),ne.jsx("p",{className:"mt-2 text-sm text-gray-400 leading-relaxed",children:s.description}),ne.jsxs("a",{href:s.link,target:"_blank",rel:"noopener",className:"mt-4 inline-flex items-center gap-2 text-sm text-neon hover:text-emerald transition-colors",children:["Code source ",ne.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"→"})]})]},s.title))})]})}),ne.jsx("section",{id:"contact",className:"relative z-10 px-6 py-24",children:ne.jsxs("div",{className:"max-w-6xl mx-auto",children:[ne.jsxs("h2",{className:"text-3xl font-bold font-mono",children:[ne.jsx("span",{className:"text-neon",children:"04."})," Contact"]}),ne.jsx("div",{className:"mt-4 h-px w-full bg-line"}),ne.jsx("p",{className:"mt-6 text-gray-300",children:"I'm open to internship and work-study opportunities in AI. Let's build something smart together."}),ne.jsx("div",{className:"mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:"✉️",label:"Email",value:"Aymane.kourbisse@gmail.com",href:"mailto:Aymane.kourbisse@gmail.com"},{icon:"📱",label:"Phone",value:"+212 6 57 94 93 75",href:"tel:+212657949375"},{icon:"🐙",label:"GitHub",value:"@KOURBISSE01",href:"https://github.com/KOURBISSE01"},{icon:"🌐",label:"Portfolio",value:"Live site",href:"https://kourbisse01.github.io/portfolio/"}].map(s=>ne.jsxs("a",{href:s.href,target:s.href.startsWith("http")?"_blank":void 0,rel:"noopener",className:"p-6 rounded-2xl bg-card border border-line hover:border-neon transition-colors",children:[ne.jsx("div",{className:"text-2xl",children:s.icon}),ne.jsx("div",{className:"mt-3 text-xs text-gray-500 uppercase tracking-wide",children:s.label}),ne.jsx("div",{className:"mt-1 text-sm font-medium break-words",children:s.value})]},s.label))}),ne.jsxs("p",{className:"mt-12 text-center text-gray-500 text-sm",children:["© ",new Date().getFullYear()," Aymane KOURBISSE · AI & Applications Developer"]})]})})]})}Hu.createRoot(document.getElementById("root")).render(ne.jsx(Q_.StrictMode,{children:ne.jsx(xw,{})}));
