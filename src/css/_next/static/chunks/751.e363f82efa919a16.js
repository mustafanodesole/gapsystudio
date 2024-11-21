"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751,861],{62268:function(e,t,n){n.d(t,{P:function(){return i}});var r=n(7701),s=n(74409),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function i(e,t){(0,s.O)(o({ref:e,target:"scroll",listener:function(){var t=(0,r.I)(e);t&&(t.scrollLeft=0,t.scrollTop=0)}},t))}},93946:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(65906);function s(e){var t=Array.from((0,r.X)(document.body)),n=t.findIndex(function(t){return t===e});if(-1===n)return{previousSibling:null,nextSibling:null};var s=0===n?t.length-1:n-1,o=n===t.length-1?0:n+1;return{previousSibling:t[s],nextSibling:t[o]}}},33669:function(e,t,n){n.d(t,{N:function(){return v}});var r=n(67294),s=n(51758),o=n(95023),i=n(11497),c=n(90882),a=n(59440),l=n(94184),u=n.n(l),p=n(21681),h=[0,1],f=[0,.75],d=[.5,1],v=(0,r.forwardRef)(function(e,t){var n=e.className,l=e.style,v=e.isActive,g=void 0!==v&&v,_=e.duration,y=e.hasAlpha,O=void 0===y||y,m=e.onAnimationEnd,b=e.children,P=(0,s.t)(t),w=(0,r.useRef)(null),j=(0,r.useState)(g),C=j[0],E=j[1],S=(0,o.z)(m),I=(0,i.m)({duration:C?1:void 0===_?500:_,onProgress:function(e){var t=e.easing,n=e.progress,r=P.current,s=w.current;if(r&&s&&R){var o=c.utils.math.easing(c.utils.math.clampScope(t,O?f:h),a.vevet.prop.easing),i=s.clientHeight;if(r.style.height=1===n?"auto":"".concat(i*o,"px"),s.style.visibility=0===n?"hidden":"visible",O){var l=c.utils.math.easing(c.utils.math.clampScope(t,d),a.vevet.prop.easing);s.style.opacity="".concat(l)}R.isReversed&&0===n?(null==S||S(!1),E(!1)):R.isReversed||1!==n||(null==S||S(!0),E(!1))}}}),x=I.play,M=I.reverse,R=I.timeline;return(0,r.useEffect)(function(){R&&(g?x():M())},[g,x,M,R]),r.createElement("div",{ref:P,className:u()(n,(0,p.I)("expand-content")),style:l},r.createElement("div",{ref:w,className:(0,p.I)("expand-content__content")},b))});v.displayName="ExpandContent"},15547:function(e,t,n){n.d(t,{w:function(){return y}});var r=n(94184),s=n.n(r),o=n(67294),i=n(122),c=n(51758),a=n(90882);class l extends Error{get isCanceled(){return!0}constructor(e){super(e||"Promise was canceled"),this.name="CancelError"}}class u{static fn(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return new u((t,r,s)=>{n.push(s),e(...n).then(t,r)})}}then(e,t){return this._promise.then(e,t)}catch(e){return this._promise.catch(e)}finally(e){return this._promise.finally(e)}cancel(e){if(this._isPending&&!this._isCanceled){if(this._isCanceled=!0,this._cancelHandlers.length>0)try{for(let e of this._cancelHandlers)e()}catch(e){this._reject(e);return}this._rejectOnCancel&&this._reject(new l(e))}}get isCanceled(){return this._isCanceled}constructor(e){this._cancelHandlers=[],this._isPending=!0,this._isCanceled=!1,this._rejectOnCancel=!0,this._promise=new Promise((t,n)=>{this._reject=n;let r=e=>{if(!this._isPending)throw Error("The `onCancel` handler was attached after the promise settled.");this._cancelHandlers.push(e)};Object.defineProperties(r,{shouldReject:{get:()=>this._rejectOnCancel,set:e=>{this._rejectOnCancel=e}}}),e(e=>{this._isCanceled&&r.shouldReject||(this._isPending=!1,t(e))},e=>{this._isPending=!1,n(e)},r)})}}Object.setPrototypeOf(u.prototype,Promise.prototype);var p=function(e){var t,n=function(){return new u(function(t){e.play().then(t).catch(function(){return r(t)})})},r=function(e){null==t||t.clear(),t=a.utils.common.timeoutCallback(function(){var t;null===(t=n())||void 0===t||t.then(e).catch(function(){})},30)};return n()},h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n},d=(0,o.forwardRef)(function(e,t){var n=e.src,r=e.children,s=e.autoPlay,i=e.onLoadedMetadata,a=f(e,["src","children","autoPlay","onLoadedMetadata"]),l=(0,c.t)(t),u=(0,o.useState)(!1),d=u[0],v=u[1],g=d&&s;return(0,o.useEffect)(function(){if(g&&l.current){var e=p(l.current);return null==e||e.then(function(){}).catch(function(){}),function(){return null==e?void 0:e.cancel()}}},[g,l]),o.createElement("video",h({ref:l,disablePictureInPicture:!0,playsInline:!0,preload:"auto"},a,{src:void 0,onLoadedMetadata:function(e){null==i||i(e),setTimeout(function(){return v(!0)},0)}}),r||o.createElement("source",{src:n,type:"video/mp4"}))});d.displayName="BaseVideo";var v=n(21681),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n},y=(0,o.forwardRef)(function(e,t){var n=e.className,r=e.style,c=e.position,a=void 0===c?"cover":c,l=e.onLoadedMetadata,u=_(e,["className","style","position","onLoadedMetadata"]),p=(0,o.useState)(null),h=p[0],f=p[1];(0,o.useImperativeHandle)(t,function(){return h});var y=(0,o.useState)(!1),O=y[0],m=y[1],b=(0,o.useState)(!1),P=b[0],w=b[1];(0,i._)(function(){return m(!0)},[]);var j=(0,v.I)("lazy-video",a,P&&"is-loaded");return O?o.createElement(d,g({ref:f},u,{className:s()(n,j),style:r,onLoadedMetadata:function(e){null==l||l(e),w(!0)}})):null});y.displayName="LazyVideo"},99034:function(e,t,n){n.d(t,{p:function(){return a}});var r=n(95023),s=n(67294),o=n(82131),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function a(e){var t=e.onRender,n=c(e,["onRender"]),a=(0,s.useState)(null),l=a[0],u=a[1],p=(0,s.useRef)(n),h=(0,r.z)(t);return(0,s.useEffect)(function(){var e=new o.$(i({run:!1},p.current));return u(e),e.addCallback("frame",h),function(){return e.destroy()}},[h,p]),(0,s.useEffect)(function(){null==l||l.changeProp({fps:n.fps})},[l,null==n?void 0:n.fps]),{play:function(){return null==l?void 0:l.play()},pause:function(){return null==l?void 0:l.pause()}}}},50629:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(39519),s=n(75140),o=n(9061),i=n(41972),c=n(25737);class a extends o.w{_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{container:window,viewportTarget:"",resizeTimeout:0})}get scrollContainer(){return this._scrollContainer}get section(){return this._section}get scopeScroll(){return this._scopeScroll}get scopeIn(){return this._scopeIn}get scopeMove(){return this._scopeMove}get scopeOut(){return this._scopeOut}get progress(){return this._progress}set progress(e){this._progress=e}init(){super.init()}_setEvents(){super._setEvents(),this.addViewportCallback(this.prop.viewportTarget,()=>{this.resize()},{timeout:this.prop.resizeTimeout}),this._loadedEvent=this._app.onPageLoaded(),this._loadedEvent.then(()=>{this.resize()}).catch(()=>{}),this._scrollEvent=(0,s.Z)({container:this.prop.container,callback:this._handleScroll.bind(this)})}_onPropMutate(){super._onPropMutate(),this.resize()}get progressIn(){return(0,i.Z)(this.progress,this.scopeIn)||0}get progressOut(){return(0,i.Z)(this.progress,this.scopeOut)||0}get progressMove(){return(0,i.Z)(this.progress,this.scopeMove)||0}_handleScroll(){let e=(0,c.Z)(this.scrollContainer);e&&this._render(e)}resize(){let e=(0,c.Z)(this.scrollContainer);if(!e)return;let t=this.section.getBoundingClientRect(),n=this._app.viewport.height,r=e.scrollTop+t.top-n,s=e.scrollTop+t.top+t.height,o=s-r;this._scopeScroll=[r,s],this._scopeIn=[0,n/o],this._scopeOut=[1-n/o,1],this._scopeMove=[this._scopeIn[1],this._scopeOut[0]],this.callbacks.tbt("resize",!1),this._render(e,!0)}_render(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._canRender(e,t);n&&this.callbacks.tbt("render",!1)}_canRender(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return!1;let{scrollTop:n}=e,r=this.progress,s=(0,i.Z)(n,[this._scopeScroll[0],this._scopeScroll[1]])||0;return this.progress=s,t||s!==r}_destroy(){var e,t;super._destroy(),null===(e=this._scrollEvent)||void 0===e||e.remove(),null===(t=this._loadedEvent)||void 0===t||t.cancel()}constructor(e,t=!0){super(e,!1),"string"==typeof this.prop.container?this._scrollContainer=(0,r.z)(this.prop.container):this._scrollContainer=this.prop.container,"string"==typeof this.prop.section?this._section=(0,r.z)(this.prop.section):this._section=this.prop.section,this._progress=-.001,this._scopeScroll=[0,0],this._scopeIn=[0,0],this._scopeMove=[0,0],this._scopeOut=[0,0],t&&this.init()}}}}]);