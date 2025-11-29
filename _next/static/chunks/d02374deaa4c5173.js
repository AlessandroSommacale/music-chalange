(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return x},NormalizeError:function(){return g},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>u.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let m="undefined"!=typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},8574,e=>{"use strict";var t=e.i(814);let r=t.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`,n=t.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 48px;
    height: 48px;
  }
`,o=t.default.div`
  width: 100%;
  height: 100%;
  border: 4px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-color-scheme: dark) {
    border-color: #333;
    border-top-color: #60a5fa;
  }
`,i=t.default.div`
  background: #fee;
  color: #c33;
  padding: 16px 24px;
  border-radius: 12px;
  text-align: center;
  margin: 48px auto;
  max-width: 600px;

  @media (prefers-color-scheme: dark) {
    background: #2a1a1a;
    color: #ff6b6b;
  }
`;e.s(["ErrorMessage",0,i,"Grid",0,r,"LoadingContainer",0,n,"Spinner",0,o])},955,(e,t,r)=>{var n={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var l=[],s=!1,c=-1;function d(){s&&n&&(s=!1,n.length?l=n.concat(l):c=-1,l.length&&f())}function f(){if(!s){var e=u(d);s=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||s||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},a=!0;try{n[e](r,r.exports,i),a=!1}finally{a&&delete o[e]}return r.exports}i.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=i(229)},461,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(955)},8481,(e,t,r)=>{"use strict";var n=Symbol.for("react.transitional.element");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return{$$typeof:n,type:e,key:o,ref:void 0!==(t=r.ref)?t:null,props:r}}r.Fragment=Symbol.for("react.fragment"),r.jsx=o,r.jsxs=o},1398,(e,t,r)=>{"use strict";t.exports=e.r(8481)},1556,(e,t,r)=>{"use strict";var n=e.i(461),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,v={};function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}function _(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=x.prototype;var S=w.prototype=new _;S.constructor=w,g(S,x.prototype),S.isPureReactComponent=!0;var j=Array.isArray;function P(){}var k={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(e,t,r){var n=r.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==n?n:null,props:r}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function R(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function A(e,t,r){if(null==e)return e;var n=[],a=0;return!function e(t,r,n,a,u){var l,s,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case i:f=!0;break;case h:return e((f=t._init)(t._payload),r,n,a,u)}}if(f)return u=u(t),f=""===a?"."+R(t,0):a,j(u)?(n="",null!=f&&(n=f.replace(C,"$&/")+"/"),e(u,r,n,"",function(e){return e})):null!=u&&(T(u)&&(l=u,s=n+(null==u.key||t&&t.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+f,u=O(l.type,s,l.props)),r.push(u)),1;f=0;var p=""===a?".":a+":";if(j(t))for(var m=0;m<t.length;m++)d=p+R(a=t[m],m),f+=e(a,r,n,d,u);else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=y&&c[y]||c["@@iterator"])?c:null))for(t=m.call(t),m=0;!(a=t.next()).done;)d=p+R(a=a.value,m++),f+=e(a,r,n,d,u);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(P,P):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),r,n,a,u);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,n,"","",function(e){return t.call(r,e,a++)}),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof n.default&&"function"==typeof n.default.emit)return void n.default.emit("uncaughtException",e);console.error(e)};r.Activity=m,r.Children={map:A,forEach:function(e,t,r){A(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=x,r.Fragment=a,r.Profiler=l,r.PureComponent=w,r.StrictMode=u,r.Suspense=f,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,r.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},r.cache=function(e){return function(){return e.apply(null,arguments)}},r.cacheSignal=function(){return null},r.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=g({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)E.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var a=Array(i),u=0;u<i;u++)a[u]=arguments[u+2];n.children=a}return O(e.type,o,n)},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},r.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return O(e,i,o)},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:d,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:M}},r.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=k.T,r={};k.T=r;try{var n=e(),o=k.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(P,N)}catch(e){N(e)}finally{null!==t&&null!==r.types&&(t.types=r.types),k.T=t}},r.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},r.use=function(e){return k.H.use(e)},r.useActionState=function(e,t,r){return k.H.useActionState(e,t,r)},r.useCallback=function(e,t){return k.H.useCallback(e,t)},r.useContext=function(e){return k.H.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},r.useEffect=function(e,t){return k.H.useEffect(e,t)},r.useEffectEvent=function(e){return k.H.useEffectEvent(e)},r.useId=function(){return k.H.useId()},r.useImperativeHandle=function(e,t,r){return k.H.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},r.useMemo=function(e,t){return k.H.useMemo(e,t)},r.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},r.useReducer=function(e,t,r){return k.H.useReducer(e,t,r)},r.useRef=function(e){return k.H.useRef(e)},r.useState=function(e){return k.H.useState(e)},r.useSyncExternalStore=function(e,t,r){return k.H.useSyncExternalStore(e,t,r)},r.useTransition=function(){return k.H.useTransition()},r.version="19.2.0"},1788,(e,t,r)=>{"use strict";t.exports=e.r(1556)},1705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},3584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(1705)._(e.r(1788)).default.createContext({})},4470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},2456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}},4941,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(1788),o="undefined"==typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),u()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},963,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return m},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(1705),a=e.r(2456),u=e.r(1398),l=a._(e.r(1788)),s=i._(e.r(4941)),c=e.r(3584);function d(){return[(0,u.jsx)("meta",{charSet:"utf-8"},"charset"),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(4470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!a)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,u.jsx)(s.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},3828,(e,t,r)=>{t.exports=e.r(6990)},6447,5777,e=>{"use strict";var t,r=e.i(5661),n=e.i(348),o=e.i(1788),i=e.i(2276),a=e.i(3828),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,u)}l((n=n.apply(e,t||[])).next())})},s=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){var l=[i,u];if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},d="__NEXT_REDUX_WRAPPER_HYDRATE__",f=function(){return"undefined"==typeof window},p=function(e,t){var r=(void 0===t?{}:t).deserializeState;return r?r(e):e},h=function(e,t){var r=(void 0===t?{}:t).serializeState;return r?r(e):e},m=function(e){var r,n=e.makeStore,o=e.context,i=void 0===o?{}:o,a=function(){return n(i)};if(f()){var u=(null==i?void 0:i.req)||(null==(r=null==i?void 0:i.ctx)?void 0:r.req);return u?(u.__nextReduxWrapperStore||(u.__nextReduxWrapperStore=a()),u.__nextReduxWrapperStore):a()}return t||(t=a()),t},y=function(e,t){void 0===t&&(t={});var r=function(r){var n=r.callback,o=r.context,i=r.addStoreToContext,a=void 0!==i&&i;return l(void 0,void 0,void 0,function(){var r,i,u,l,c;return s(this,function(s){switch(s.label){case 0:if(r=m({context:o,makeStore:e}),t.debug&&console.log("1. getProps created store with state",r.getState()),a&&(o.ctx?o.ctx.store=r:o.store=r),!(l=i=n&&n(r)))return[3,2];return[4,i(o)];case 1:l=s.sent(),s.label=2;case 2:return u=l||{},t.debug&&console.log("3. getProps after dispatches has store state",r.getState()),c=r.getState(),[2,{initialProps:u,initialState:f()?h(c,t):c}]}})})},n=function(e){return function(t){return l(void 0,void 0,void 0,function(){var n,o,i;return s(this,function(a){switch(a.label){case 0:return[4,r({callback:e,context:t})];case 1:return o=(n=a.sent()).initialProps,i=n.initialState,[2,u(u({},o),{props:u(u({},o.props),{initialState:i})})]}})})}},y=function(e,r){r&&e.dispatch({type:d,payload:p(r,t)})},b=function(e,t,r,n,o){var i;r?(y(e,t),y(e,r)):(n||o||t)&&y(e,null!=(i=null!=n?n:o)?i:t)},g=function(e,t,r,n,i){var u=(0,a.useRouter)().events,l=(0,o.useRef)(!0);(0,o.useEffect)(function(){var e=function(){l.current=!0};return null==u||u.on("routeChangeStart",e),function(){null==u||u.off("routeChangeStart",e)}},[u]),(0,o.useMemo)(function(){l.current&&(b(e,t,r,n,i),l.current=!1)},[e,t,r,n,i])},v=function(r,n){void 0===n&&(n="useWrappedStore");var i,a,l,s,d,f,p=r.initialState,h=r.initialProps,y=c(r,["initialState","initialProps"]),b=(null==y?void 0:y.__N_SSG)?null==(i=null==y?void 0:y.pageProps)?void 0:i.initialState:null,v=(null==y?void 0:y.__N_SSP)?null==(a=null==y?void 0:y.pageProps)?void 0:a.initialState:null,x=b||v?null:null!=(s=null==(l=null==y?void 0:y.pageProps)?void 0:l.initialState)?s:null;t.debug&&console.log("4.",n,"created new store with",{giapState:p,gspState:b,gsspState:v,gippState:x});var _=(0,o.useMemo)(function(){return m({makeStore:e})},[]);g(_,p,b,v,x);var w=y;return h&&h.pageProps&&(w.pageProps=u(u({},h.pageProps),y.pageProps)),(null==(d=null==y?void 0:y.pageProps)?void 0:d.initialState)&&(w=u(u({},y),{pageProps:u({},y.pageProps)}),delete w.pageProps.initialState),(null==(f=null==w?void 0:w.pageProps)?void 0:f.initialProps)&&(w.pageProps=u(u({},w.pageProps),w.pageProps.initialProps),delete w.pageProps.initialProps),{store:_,props:u(u({},h),w)}};return{getServerSideProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){return s(this,function(r){switch(r.label){case 0:return[4,n(e)(t)];case 1:return[2,r.sent()]}})})}},getStaticProps:n,getInitialAppProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){var n,o,i;return s(this,function(a){switch(a.label){case 0:return[4,r({callback:e,context:t,addStoreToContext:!0})];case 1:return o=(n=a.sent()).initialProps,i=n.initialState,[2,u(u({},o),{initialState:i})]}})})}},getInitialPageProps:function(e){return function(t){return l(void 0,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:if("getState"in t)return[2,e&&e(t)];return[4,r({callback:e,context:t,addStoreToContext:!0})];case 1:return[2,n.sent()]}})})}},withRedux:function(e){console.warn("/!\\ You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore().");var t=function(r){var n=v(r,t.displayName),a=n.store,l=n.props;return o.default.createElement(i.Provider,{store:a},o.default.createElement(e,u({},l)))};return t.displayName="withRedux(".concat(e.displayName||e.name||"Component",")"),"getInitialProps"in e&&(t.getInitialProps=e.getInitialProps),t},useWrappedStore:v}};e.s(["HYDRATE",()=>d,"createWrapper",()=>y],5777);let b=(0,r.createApi)({reducerPath:"albumsApi",baseQuery:(0,n.fetchBaseQuery)({baseUrl:"https://itunes.apple.com"}),extractRehydrationInfo(e,{reducerPath:t}){if(e.type===d)return e.payload[t]},endpoints:e=>({getTopAlbums:e.query({query:()=>"/us/rss/topalbums/limit=100/json"})})}),{useGetTopAlbumsQuery:g}=b;e.s(["albumsApi",0,b,"useGetTopAlbumsQuery",0,g],6447)},1592,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=e.r(1705)._(e.r(1788)).default.createContext(null)},2414,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return f}});let n=e.r(1705)._(e.r(1788)),o=e.r(1592),i=[],a=[],u=!1;function l(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,r){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},r),c=null;function d(){if(!c){let e=new s(t,l);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("undefined"==typeof window&&i.push(d),!u&&"undefined"!=typeof window){let t=l.webpack&&"function"==typeof e.t.resolveWeak?l.webpack():l.modules;t&&a.push(e=>{for(let r of t)if(e.includes(r))return d()})}function f(e,t){let r;d(),(r=n.default.useContext(o.LoadableContext))&&Array.isArray(l.modules)&&l.modules.forEach(e=>{r(e)});let i=n.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(l.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:c.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return f.preload=()=>d(),f.displayName="LoadableComponent",n.default.forwardRef(f)}(l,t)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(i).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let r=()=>(u=!0,t());d(a,e).then(r,r)}),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let f=c},5167,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return d},noSSR:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(1705),a=e.r(1398);e.r(1788);let u=i._(e.r(2414)),l="undefined"==typeof window;function s(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!l)return e(t);let r=t.loading;return()=>(0,a.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function d(e,t){let r=u.default,n={loading:({error:e,isLoading:t,pastDelay:r})=>null};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let o=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=o?o().then(s):Promise.resolve(s(()=>null))}):(delete n.webpack,delete n.modules,c(r,n))}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},8489,(e,t,r)=>{t.exports=e.r(5167)},8678,(e,t,r)=>{t.exports=e.r(963)},7856,e=>{"use strict";var t=e.i(1398),r=e.i(814);let n=r.default.a`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (prefers-color-scheme: dark) {
    background: #1a1a1a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    }
  }
`,o=r.default.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`,i=r.default.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,a=r.default.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,u=r.default.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`,l=r.default.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`,s=r.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;

  @media (prefers-color-scheme: dark) {
    border-top-color: #333;
  }
`,c=r.default.span`
  font-size: 16px;
  font-weight: 700;
  color: #2563eb;

  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
  }
`,d=r.default.span`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #999;
  }
`;var f=e.i(8489);let p=(0,f.default)(()=>e.A(483),{loadableGenerated:{modules:[8497]},ssr:!1}),h=({album:e})=>{let r=e?.["im:image"]?.[e?.["im:image"].length-1].label;return(0,t.jsxs)(n,{href:e.link?.attributes.href,target:"_blank",rel:"noopener noreferrer",children:[e.id?.attributes?.["im:id"]&&(0,t.jsx)(p,{albumId:e.id?.attributes?.["im:id"]}),(0,t.jsx)(o,{children:(0,t.jsx)(i,{src:r,alt:e.title?.label,loading:"lazy"})}),(0,t.jsxs)(a,{children:[(0,t.jsx)(u,{children:e.title?.label}),(0,t.jsx)(l,{children:e["im:artist"]?.label}),(0,t.jsxs)(s,{children:[(0,t.jsx)(c,{children:e["im:price"]?.label}),(0,t.jsx)(d,{children:e.category?.attributes.label})]})]})]})};var m=e.i(8574),y=e.i(6447);let b=()=>{let{data:e,isLoading:r,error:n}=(0,y.useGetTopAlbumsQuery)();return(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)(m.LoadingContainer,{children:(0,t.jsx)(m.Spinner,{})}),n&&(0,t.jsx)(m.ErrorMessage,{children:"Error: Failed to load albums"}),!r&&!n&&(0,t.jsx)(m.Grid,{children:(e?.feed?.entry||[]).map(e=>(0,t.jsx)(h,{album:e},e.id?.label))})]})},g=r.default.header`
  background: transparent;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (prefers-color-scheme: dark) {
    background: transparent;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
`,v=r.default.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 24px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 32px 48px;
  }
`,x=r.default.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`,_=r.default.p`
  margin: 8px 0 0 0;
  color: #666;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`,w=(0,f.default)(()=>e.A(9360),{loadableGenerated:{modules:[9695]},ssr:!1}),S=()=>(0,t.jsx)(g,{children:(0,t.jsxs)(v,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(x,{children:"Top 100 Albums"}),(0,t.jsx)(_,{children:"Discover the most popular albums on iTunes"})]}),(0,t.jsx)(w,{})]})}),j=r.default.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #0a0a0a, #000000);
  }
`,P=r.default.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 48px 48px;
  }
`;var k=e.i(8678);function E(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(k.default,{children:[(0,t.jsx)("title",{children:"Top 100 Albums - iTunes"}),(0,t.jsx)("meta",{name:"description",content:"Discover the top 100 most popular albums on iTunes"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(S,{}),(0,t.jsx)(P,{children:(0,t.jsx)(b,{})})]})]})}e.s(["__N_SSG",()=>!0,"default",()=>E],7856)},5075,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(7856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},8761,e=>{e.v(t=>Promise.all(["static/chunks/4f8470767bf4a97b.js"].map(t=>e.l(t))).then(()=>t(3594)))},8805,e=>{e.v(t=>Promise.all(["static/chunks/5ec9ab7aae3f3e76.js"].map(t=>e.l(t))).then(()=>t(9466)))},483,e=>{e.v(t=>Promise.all(["static/chunks/374e1adc28ca65ee.js"].map(t=>e.l(t))).then(()=>t(8497)))},9360,e=>{e.v(t=>Promise.all(["static/chunks/2baf779f351f9054.js","static/chunks/1d47c3920483841f.js"].map(t=>e.l(t))).then(()=>t(9695)))}]);