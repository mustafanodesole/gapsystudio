(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{8800:function(e,t,s){"use strict";s.d(t,{C:function(){return o}});var l=s(85893),a=s(25788),n=s(60554),i=s.n(n);let o=e=>{let{items:t,onChange:s,theme:n="default",ariaLabel:o}=e;return(0,l.jsx)("ul",{className:i().list,"aria-label":o,children:t.map((e,i)=>{let{name:o,value:r,isActive:c}=e,_=c?"dark":"normal";return"invert"===n&&(_=c?"light":"invert"),(0,l.jsx)("li",{children:(0,l.jsx)(a.o,{tag:"button",type:"button",text:o,onClick:()=>s(t[i]),size:"m",kind:_})},r)})})}},67503:function(e,t,s){"use strict";s.d(t,{p:function(){return x}});var l=s(85893),a=s(94184),n=s.n(a),i=s(67294),o=s(10448),r=s(50490),c=s(33399),_=s(87306),d=s.n(_);let h=e=>{let{className:t,children:s,gap:a=10,viewportGap:i=10,...o}=e;return(0,l.jsx)(c.Y,{...o,className:n()(d().tooltip,t),gap:a,viewportGap:i,children:s})};h.displayName="PopupTooltip";var u=s(87536),p=s(64144),m=s(8578),f=s(13127),y=s.n(f);let x=e=>{var t;let{className:s,style:a,name:c,id:_,onBlur:d,disabled:f,theme:x="default",maxSize:b=1/0,progress:g,...v}=e,j=(0,i.useRef)(null),C=(0,i.useRef)(null),N=(0,i.useRef)(null),k=(0,i.useId)(),w=_||k,[I,M]=(0,i.useState)([]),{register:S,formState:T,setError:z,getValues:F,reset:E}=(0,u.Gc)(),A=T.errors[c],L=null==A?void 0:A.message,{ref:R,...q}=S(c,{onChange:e=>M(Array.from(null!==(t=e.target.files)&&void 0!==t?t:[])),onBlur:()=>{(null==A?void 0:A.type)==="maxLength"&&(E({...F(),[c]:null}),M([]))},disabled:f}),{formMaxFileSize:Z,formFile:H}=(0,r.h)();(0,i.useEffect)(()=>{let e=I.reduce((e,t)=>e+t.size,0);e>=b&&z(c,{message:Z.replace("%s","".concat(b/1024/1024," MB")),type:"maxLength"})},[I,Z,b,c,z]);let B=(0,o.j)(C),O=B||((null==I?void 0:I.length)||0)>0,P=(0,i.useMemo)(()=>{let e=I.map(e=>{let{name:t}=e;return t}).join(", ");return e.length>H.length-4&&(e="".concat(e.slice(0,H.length-4),"...")),e},[I,H.length]),V=n()((0,m.j)(x,y()),O&&y().active);return(0,l.jsxs)(l.Fragment,{children:[(0,p.H)(L)&&(0,l.jsx)(h,{anchor:null,positionRef:N,gap:0,verticalAlignment:"auto",horizontalAlignment:"start",isActive:!!A,hasOutsideClick:!1,children:L}),(0,l.jsxs)("label",{ref:C,className:n()(s,y().form_file,V),style:a,htmlFor:w,"aria-label":H,children:[(0,l.jsx)("span",{ref:N,className:n()(y().thumb,V),"aria-hidden":!0,children:(0,l.jsx)("svg",{width:"15",height:"18",viewBox:"0 0 15 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M12.0173 3.30328C11.3913 2.6808 10.5452 2.33001 9.66238 2.32689C8.77955 2.32377 7.93104 2.66857 7.30063 3.28662L1.75063 8.73995C1.59326 8.89489 1.38092 8.98117 1.16008 8.97992C0.939246 8.97867 0.727898 8.88999 0.572292 8.73328C0.495383 8.65575 0.434564 8.56378 0.393334 8.46265C0.352104 8.36153 0.331278 8.25325 0.332052 8.14405C0.332827 8.03484 0.355187 7.92687 0.397847 7.82634C0.440507 7.72582 0.502625 7.63471 0.580626 7.55828L6.12896 2.10662C7.07294 1.18003 8.344 0.662716 9.66674 0.666772C10.9895 0.670827 12.2573 1.19592 13.1956 2.12828C13.6611 2.59095 14.0305 3.14109 14.2826 3.74704C14.5346 4.353 14.6644 5.00282 14.6644 5.65912C14.6644 6.31541 14.5346 6.96523 14.2826 7.57119C14.0305 8.17715 13.6611 8.72728 13.1956 9.18995L5.97563 16.3799C5.36171 16.9902 4.53125 17.3327 3.66563 17.3327C2.8 17.3327 1.96955 16.9902 1.35563 16.3799C1.05242 16.0784 0.811801 15.7199 0.647612 15.325C0.483423 14.9302 0.398898 14.5067 0.398898 14.0791C0.398898 13.6515 0.483423 13.2281 0.647612 12.8332C0.811801 12.4383 1.05242 12.0798 1.35563 11.7783L8.08896 5.07328C8.24538 4.91797 8.45686 4.83081 8.67729 4.83081C8.89772 4.83081 9.10921 4.91797 9.26563 5.07328C9.34283 5.15023 9.40408 5.24167 9.44588 5.34234C9.48767 5.44301 9.50919 5.55095 9.50919 5.65995C9.50919 5.76895 9.48767 5.87688 9.44588 5.97756C9.40408 6.07823 9.34283 6.16966 9.26563 6.24662L2.53396 12.9516C2.38535 13.0994 2.26742 13.2751 2.18695 13.4686C2.10648 13.6621 2.06505 13.8696 2.06505 14.0791C2.06505 14.2887 2.10648 14.4962 2.18695 14.6897C2.26742 14.8832 2.38535 15.0589 2.53396 15.2066C2.83483 15.5067 3.24239 15.6751 3.66729 15.6751C4.09219 15.6751 4.49976 15.5067 4.80063 15.2066L12.0173 8.01661C12.3279 7.70777 12.5744 7.34057 12.7426 6.93613C12.9108 6.53168 12.9974 6.09798 12.9974 5.65995C12.9974 5.22192 12.9108 4.78822 12.7426 4.38377C12.5744 3.97933 12.3279 3.61213 12.0173 3.30328Z",fill:"white"})})}),(0,l.jsx)("span",{className:n()(y().content,V),"aria-hidden":!0,children:(0,l.jsxs)("span",{className:y().content__wrapper,children:[(0,l.jsx)("span",{className:n()(y().placeholder,P&&y().hidden),children:H}),P&&(0,l.jsx)("span",{className:y().value,children:P})]})}),(0,l.jsx)("input",{...v,className:y().input,...q,ref:e=>{R(e),j.current=e},type:"file",id:w,"aria-invalid":!!A}),g>0&&g<1&&(0,l.jsxs)("div",{children:[(100*g).toFixed(0),"%"]})]})]})}},26919:function(e,t,s){"use strict";s.d(t,{y:function(){return f}});var l=s(85893),a=s(94184),n=s.n(a),i=s(67294),o=s(87536),r=s(91197),c=s.n(r),_=s(8578),d=s(51758);let h=(0,i.forwardRef)((e,t)=>{let{onChangeCapture:s,...a}=e,n=(0,d.t)(t);return(0,l.jsx)("input",{ref:n,...a,onChangeCapture:e=>{e.preventDefault();let t=e.currentTarget;t.value=t.value.replace(/[^0-9+]/g,""),null==s||s(e)}})});h.displayName="TelephoneInput";let u=(0,i.forwardRef)((e,t)=>{let{type:s="text",...a}=e,n=(0,d.t)(t);return"tel"===s?(0,l.jsx)(h,{ref:n,type:s,...a}):(0,l.jsx)("input",{ref:n,type:s,...a})});u.displayName="CoreInput";var p=s(83999);function m(e,t){return""===e||"email"!==t||p.validate(e)}let f=(0,i.forwardRef)((e,t)=>{let{className:s,style:a,name:r,type:d="text",id:h,required:p,min:f,max:y,maxLength:x,minLength:b,validate:g,value:v,onChange:j,onBlur:C,disabled:N,theme:k="default",...w}=e,I=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,()=>I.current);let M=(0,i.useId)(),{register:S,formState:T}=(0,o.Gc)(),{ref:z,...F}=S(r,{required:p,min:f,max:y,maxLength:x,minLength:b,validate:e=>{let t=null==m?void 0:m(e,d),s=null==g?void 0:g(e);return t&&s},value:v,onChange:j,onBlur:C,disabled:N}),E=T.errors[r],A=!!E,L=n()(A&&c().is_error,(0,_.j)(k,c()));return(0,l.jsx)("span",{className:n()(s,c().form_input,"form-input",L),style:a,children:(0,l.jsx)(u,{...w,className:n()(c().input,L),...F,ref:e=>{z(e),I.current=e},type:d,id:h||M,"aria-invalid":"hidden"===d?void 0:A})})});f.displayName="FormInput"},23350:function(e,t,s){"use strict";s.d(t,{l:function(){return d}});var l=s(85893),a=s(94184),n=s.n(a),i=s(67294),o=s(87536),r=s(91197),c=s.n(r),_=s(8578);let d=(0,i.forwardRef)((e,t)=>{let{className:s,style:a,name:r,id:d,required:h,maxLength:u,minLength:p,validate:m,value:f,onChange:y,onBlur:x,disabled:b,theme:g="default",...v}=e,j=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,()=>j.current);let C=(0,i.useId)(),{register:N,formState:k}=(0,o.Gc)(),{ref:w,...I}=N(r,{required:h,maxLength:u,minLength:p,validate:e=>{let t=null==m?void 0:m(e);return t},value:f,onChange:y,onBlur:x,disabled:b}),M=k.errors[r],S=!!M,T=n()(S&&c().is_error,c().is_textarea,(0,_.j)(g,c()));return(0,l.jsx)("span",{className:n()(s,c().form_input,"form-input",T),style:a,children:(0,l.jsx)("textarea",{...v,className:n()(c().input,T),...I,ref:e=>{w(e),j.current=e},id:d||C,"aria-invalid":S})})});d.displayName="FormTextArea"},21608:function(e,t,s){"use strict";s.d(t,{c:function(){return c}});var l=s(85893),a=s(94184),n=s.n(a),i=s(8578),o=s(64878),r=s.n(o);let c=e=>{let{id:t,text:s,theme:a="default",children:o}=e,c=(0,i.j)(a,r());return(0,l.jsxs)("label",{htmlFor:t,className:n()(r().container,c),children:[(0,l.jsx)("span",{className:n()(r().label,c),children:s}),o]})}},46353:function(e,t,s){"use strict";s.d(t,{E:function(){return r}});var l=s(85893),a=s(39879),n=s(82585),i=s(50490);let o=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Thank you for your trust."}),(0,l.jsx)("p",{children:"We have received your request. After reviewing it, our managers will contact you at the contacts you provided and we will be happy to discuss your project."}),(0,l.jsx)("p",{children:"Have a nice day!"})]}),r=e=>{let{onClose:t,...s}=e,r=(0,i.h)();return(0,l.jsx)(a.P,{...s,onClose:t,children:(0,l.jsx)(n.m,{title:(0,l.jsx)(o,{}),button:{tag:"button",type:"button",text:r.formSendAnotherRequest,onClick:()=>null==t?void 0:t()}})})}},9226:function(e,t,s){"use strict";s.d(t,{l:function(){return p}});var l=s(85893),a=s(95023),n=s(64144),i=s(67294),o=s(87536),r=s(96203),c=s(90882),_=s(59440),d=s(66615),h=s(47720),u=s(50259);let p=e=>{let{form:t,className:s,style:p,action:m,method:f="post",onSuccess:y,onError:x,resetOnSuccess:b,scrollToError:g,scrollSelector:v,children:j,...C}=e,{executeRecaptcha:N}=(0,u.xX)(),k=(0,i.useId)(),w=(0,r.S)(),I=v||w,{setError:M,formState:S,reset:T}=t,{isSubmitting:z}=S,F=(0,i.useRef)(null),E=(0,a.z)(y),A=(0,a.z)(x);(0,i.useEffect)(()=>(z?d.Z.dispatch(h.m.actions.start(k)):d.Z.dispatch(h.m.actions.end(k)),()=>{d.Z.dispatch(h.m.actions.end(k))}),[k,z]);let L=(0,a.z)(e=>{let t=F.current;if(!I||!t)return;let s=e.map(e=>{let s=t.querySelector('*[name="'.concat(e,'"]'));return s?{element:s,bounding:s.getBoundingClientRect()}:null}).filter(Boolean);if(0===s.length)return;let l=s.sort((e,t)=>e.bounding.top-t.bounding.top)[0];c.utils.scroll.toElement({el:l.element,container:I,duration:250,top:_.vevet.viewport.height/3})}),R=(0,a.z)(async e=>{try{var t;let s=await (null==e?void 0:e.json()),l=null!==(t=s.errors)&&void 0!==t?t:{},a=Object.keys(l);a.forEach(e=>{let t=l[e],s=(0,n.H)(t)?t:t.map(e=>e).join("; ");M(e,{type:"manual",message:s})}),null==A||A(s),(null==s?void 0:s.message)&&alert(null==s?void 0:s.message),g&&L(a)}catch(e){alert(e)}}),q=(0,a.z)(async e=>{let t=await (null==e?void 0:e.json());null==E||E(t),b&&T()}),Z=(0,a.z)(async e=>{var t,s;let{formData:l}=e,a=Array.from(null!==(s=null===(t=F.current)||void 0===t?void 0:t.querySelectorAll('input[type="file"]'))&&void 0!==s?s:[]);if(a.forEach(e=>{var t;let s=e.name;l.delete(s),Array.from(null!==(t=e.files)&&void 0!==t?t:[]).forEach(e=>l.append(s,e))}),!N)return;let n=await N("homepage");l.append("gToken",n)});return(0,l.jsx)(o.RV,{...t,children:(0,l.jsx)("div",{ref:F,className:s,style:p,children:(0,l.jsx)(o.l0,{...C,action:m,method:f,onSuccess:e=>q(e.response),onError:e=>R(e.response),control:t.control,onSubmit:Z,children:j})})})}},8578:function(e,t,s){"use strict";s.d(t,{j:function(){return n}});var l=s(94184),a=s.n(l);function n(e,t){return a()("default"===e&&t.theme_default,"invert"===e&&t.theme_invert,"fancy"===e&&t.theme_fancy)}},39879:function(e,t,s){"use strict";s.d(t,{P:function(){return u}});var l=s(85893),a=s(94184),n=s.n(a),i=s(36942),o=s(77340),r=s.n(o),c=s(67294),_=s(25788),d=s(50490);let h=(0,c.memo)(e=>{let{onClick:t}=e,s=(0,d.h)();return(0,l.jsx)("div",{className:r().close,children:(0,l.jsx)(_.o,{tag:"button",type:"button",size:"s",kind:"dark",className:r().close_button,onClick:t,text:s.close})})}),u=e=>{let{className:t,wrapperProps:s,overlayProps:a,children:o,...c}=e;return(0,l.jsx)(i.I,{...c,className:n()(r().modal,t),wrapperProps:{...s,className:n()(r().wrapper,null==s?void 0:s.className)},overlayProps:{...a,className:n()(r().overlay,null==a?void 0:a.className)},renderCloseButton:h,children:o})}},82585:function(e,t,s){"use strict";s.d(t,{m:function(){return _}});var l=s(85893),a=s(94184),n=s.n(a),i=s(25788),o=s(73725),r=s(24419),c=s.n(r);let _=e=>{let{title:t,button:s,children:a,className:r,style:_}=e;return(0,l.jsxs)("div",{className:n()(c().container,r),style:_,children:[t&&(0,l.jsx)(o.H,{className:c().title,hasSpacings:!1,children:t}),s&&(0,l.jsx)(i.o,{...s,size:"m",kind:"dark",className:n()(c().button,s.className)}),a&&(0,l.jsx)("div",{className:c().children,children:a})]})}},7178:function(e,t,s){"use strict";s.d(t,{EM:function(){return i},H2:function(){return a},xC:function(){return n},xm:function(){return l}});let l=["UI/UX Design","Brand Identity","Illustrations","Motion Design","Web development"],a=["$1 — 1 000","$ 1 000 - $ 5 000","$ 5 000 - $ 10 000","I don’t know"],n=3145728,i=["image/*","application/pdf","application/zip","application/vnd.rar","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},94359:function(e,t,s){"use strict";s.d(t,{k:function(){return E}});var l=s(85893),a=s(94184),n=s.n(a),i=s(67294),o=s(9473),r=s(66615),c=s(61309),_=s(36942),d=s(25788),h=s(50490),u=s(39879),p=s(82585),m=s(26919),f=s(9226),y=s(87536),x=s(62381),b=s.n(x);let g=e=>{let{onSuccess:t}=e,s=(0,h.h)(),a=(0,y.cI)({mode:"all"});return(0,l.jsx)(f.l,{form:a,action:"/api/forms/free-consultation-form/",onSuccess:t,resetOnSuccess:!0,"aria-label":s.subscribeForm,children:(0,l.jsxs)("div",{className:b().data,children:[(0,l.jsx)(m.y,{theme:"fancy",name:"email",type:"email",placeholder:s.formEnterEmail}),(0,l.jsx)(d.o,{className:b().button,tag:"button",type:"submit",disabled:a.formState.isSubmitting,text:s.getConsultation,size:"m",kind:"primary"})]})})},v=()=>{let e=(0,h.h)(),[t,s]=(0,i.useState)(!1);return(0,l.jsxs)("div",{style:{marginTop:40},children:[(0,l.jsx)(g,{onSuccess:()=>s(!0)}),(0,l.jsx)(u.P,{isOpen:t,onClose:()=>{s(!1),r.Z.dispatch(c.m.actions.setIsFreeConsultationModalVisible(!1))},wrapperProps:{style:{background:"#000",color:"#fff",height:"100vh",justifyContent:"center",display:"flex",alignItems:"center"}},children:(0,l.jsx)(p.m,{title:(0,l.jsxs)("div",{style:{textAlign:"center"},children:[(0,l.jsx)("span",{style:{fontSize:64,lineHeight:"120%"},dangerouslySetInnerHTML:{__html:e.freeConsultationSuccessTitle}}),(0,l.jsx)("br",{}),(0,l.jsx)("span",{style:{fontSize:16},dangerouslySetInnerHTML:{__html:e.freeConsultationSuccessForAnyQuestions}}),(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:"mailto:info@gapsystudio.com",target:"_blank",style:{color:"#FF7769",fontSize:24},children:"INFO@GAPSYSTUDIO.COM"})]})})})]})};var j=s(74792),C=s.n(j),N=()=>{let e=(0,o.I0)(),t=(0,h.h)(),{isPageReady:s,isFreeConsultationModalVisible:a,isFreeConsultationModalClosed:u,isFreeConsultationModalInit:p}=(0,c.v)();return(0,i.useEffect)(()=>{!s||u||a||p||(setTimeout(()=>{r.Z.dispatch(c.m.actions.setIsFreeConsultationModalVisible(!0))},3e4),r.Z.dispatch(c.m.actions.setIsFreeConsultationModalInit(!0)))},[s,u,a,p,e]),(0,l.jsx)(_.I,{isOpen:a,className:C().modal,wrapperProps:{className:n()(C().wrapper)},overlayProps:{className:n()(C().overlay)},renderCloseButton:()=>(0,l.jsx)("div",{className:C().close,children:(0,l.jsx)(d.o,{tag:"button",type:"button",size:"s",kind:"light",className:C().close_button,onClick:()=>{r.Z.dispatch(c.m.actions.setIsFreeConsultationModalVisible(!1)),r.Z.dispatch(c.m.actions.setIsFreeConsultationModalClosed(!0))},text:t.close})}),children:(0,l.jsxs)("div",{id:"free_consultation_modal",children:[(0,l.jsx)("p",{className:C().title,children:"Get free consultation right now"}),(0,l.jsx)("p",{className:C().text,children:"Get a free consultation and discover how our design expertise can elevate your project. Our team will offer personalized insights and actionable recommendations to enhance your user experience and interface design. Leave your email and transform your project today!"}),(0,l.jsx)("p",{className:C().getInTouch,children:"GET IN TOUCH"}),(0,l.jsx)("p",{className:C().info,children:(0,l.jsx)("a",{href:"mailto:info@gapsystudio.com",children:"info@gapsystudio.com"})}),(0,l.jsx)("p",{className:C().info,children:(0,l.jsx)("a",{href:"tel:+19098172580",children:"+19098172580"})}),(0,l.jsx)(v,{}),(0,l.jsx)(d.o,{tag:"button",type:"button",size:"m",kind:"dark",className:C().close_button_mobile,onClick:()=>{r.Z.dispatch(c.m.actions.setIsFreeConsultationModalVisible(!1)),r.Z.dispatch(c.m.actions.setIsFreeConsultationModalClosed(!0))},text:t.close})]})})},k=s(35800),w=s(18142),I=s.n(w),M=s(51331),S=s(94846),T=s(7364),z=s(59440),F=s(1078);let E=e=>{let{children:t,hasFooter:s=!0}=e,a=(0,i.useRef)(null),{isFooterFixed:o,footerHeight:c}=function(e){let{clientHeight:t}=(0,S.C)(e),s=(0,i.useRef)(!1),[l,a]=(0,i.useState)(!0);(0,T.T)(()=>{a(z.vevet.isDesktop&&z.vevet.viewport.isDesktop)},[]);let n=e=>{e!==s.current&&(s.current=e,r.Z.dispatch(F.P.actions.setIsLight(e)))},o=(0,i.useCallback)(s=>{let{scrollTop:a}=s,{current:i}=e,o=document.getElementById("header-logo");if(!i||!o)return;let r=o.getBoundingClientRect(),c=r.top+r.height/2;if(l){let{scrollHeight:e}=document.documentElement,s=e-t;n(0>Math.min(s-c-a,0));let l=t===z.vevet.viewport.height?0:Math.min(s-a,0);i.style.transform="translate3d(0, ".concat(l,"px, 0)")}else{i.style.transform="";let e=i.getBoundingClientRect();n(e.top<c)}},[t,e,l]);return(0,M.B)(o),(0,i.useEffect)(()=>{o({scrollTop:0,scrollLeft:0})},[o]),{isFooterFixed:l,footerHeight:t}}(a);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("main",{className:n()(I().layout_container,s&&I().has_footer),style:{marginBottom:o?"".concat(c,"px"):""},children:t}),s&&(0,l.jsx)(k.$,{ref:a,className:n()(I().footer,o&&I().fixed)}),(0,l.jsx)(N,{})]})}},35800:function(e,t,s){"use strict";s.d(t,{$:function(){return F}});var l=s(85893),a=s(67294),n=s(94184),i=s.n(n),o=s(64499),r=s(41664),c=s.n(r),_=s(32719),d=s(50490),h=s(80785),u=s(20894),p=s.n(u),m=s(92197),f=s.n(m);let y=e=>{let{links:t,className:s,"aria-label":a,style:n,...o}=e;return(0,l.jsx)("ul",{className:i()(f().links,s),style:n,"aria-label":a,children:t.map(e=>{let{key:t,name:s,href:a}=e;return(0,l.jsx)("li",{children:(0,l.jsx)(c(),{className:f().link,href:a,...o,rel:"_blank"===o.target?"noopener noreferrer":void 0,children:s})},t)})})};var x=s(8800),b=s(26919),g=s(21608),v=s(7178),j=s(46353),C=s(25788),N=s(23350),k=s(9226),w=s(87536),I=s(95023),M=s(67503),S=s(4407),T=s.n(S);let z=()=>{var e;let t=(0,d.h)(),s="invert",n=(0,w.cI)({mode:"all"}),i=(0,a.useId)(),[o,r]=(0,a.useState)(!1),[c,_]=(0,a.useState)(v.xm.map((e,t)=>({name:e,value:e,isActive:0===t}))),h=(0,I.z)(()=>{var e;null==n||n.reset(),n.setValue("project_type",null===(e=c.find(e=>e.isActive))||void 0===e?void 0:e.value)});return(0,l.jsxs)(k.l,{className:T().form,form:n,action:"/api/forms/footer-form/",onSuccess:()=>{r(!0),h()},scrollToError:!0,"aria-label":t.letsTalk,children:[(0,l.jsx)("input",{type:"hidden",...n.register("project_type",{value:null===(e=c.find(e=>e.isActive))||void 0===e?void 0:e.value})}),(0,l.jsxs)("div",{className:T().data,children:[(0,l.jsxs)("div",{className:T().row,children:[(0,l.jsx)(g.c,{id:"".concat(i,"form-name"),text:t.formName,theme:s,children:(0,l.jsx)(b.y,{theme:s,name:"name",type:"text",minLength:2,id:"".concat(i,"form-name")})}),(0,l.jsx)(g.c,{id:"".concat(i,"form-email"),text:t.formEmail,theme:s,children:(0,l.jsx)(b.y,{theme:s,name:"email",type:"email",id:"".concat(i,"form-email")})})]}),(0,l.jsxs)("div",{className:T().row,children:[(0,l.jsx)("div",{className:T().column,children:(0,l.jsx)(x.C,{ariaLabel:t.selectProjectType,items:c,theme:s,onChange:e=>{n.setValue("project_type",e.value),_(t=>t.map(t=>({...t,isActive:e.value===t.value})))}})}),(0,l.jsxs)("div",{className:T().column,children:[(0,l.jsx)(g.c,{id:"".concat(i,"form-question"),text:t.formQuestion,theme:s,children:(0,l.jsx)(N.l,{theme:s,name:"question",id:"".concat(i,"form-question")})}),(0,l.jsxs)("div",{className:T().buttons,children:[(0,l.jsx)(M.p,{theme:s,name:"file",id:"".concat(i,"form-file"),accept:v.EM.join(","),disabled:n.formState.isSubmitting,maxSize:v.xC,progress:1}),(0,l.jsx)(C.o,{tag:"button",type:"submit",disabled:n.formState.isSubmitting,text:t.formSendRequest,kind:"light",size:"m",id:"footer-send-form"})]})]})]})]}),(0,l.jsx)(j.E,{isOpen:o,onClose:()=>r(!1)})]})},F=(0,a.forwardRef)((e,t)=>{let{isWithForm:s=!0,className:a,style:n}=e,r=(0,d.h)(),u=(0,_.j0)(),{contacts:m,menu:f,links:x}=u,b=u.social.filter(e=>{let{isVisible:t}=e;return t}),g=r.copyright.replace("{year}","".concat(new Date().getFullYear())),v=b.map(e=>{let{key:t,name:s,href:l}=e;return{key:t,name:s,href:l}});return(0,l.jsxs)("footer",{ref:t,className:i()(p().footer,a,s&&p().with_form),style:n,children:[s&&(0,l.jsx)(h.W,{variant:1,children:(0,l.jsxs)("div",{className:p().footer_form,children:[(0,l.jsx)("div",{className:p().title,children:r.letsTalk}),(0,l.jsx)(z,{})]})}),(0,l.jsx)(h.W,{children:(0,l.jsxs)("div",{className:p().footer_main,children:[(0,l.jsxs)("div",{className:i()(p().top,p().content),children:[m&&m.telephone&&(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)(c(),{className:p().link,href:"tel:".concat((0,o.C)(m.telephone)),children:m.telephone})}),m&&m.email&&(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)(c(),{className:p().link,href:"mailto:".concat(m.email),children:m.email})}),f&&(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)(y,{links:f,className:p().menu,"aria-label":r.pages})})]}),(0,l.jsxs)("div",{className:i()(p().bottom,p().content),children:[r.copyright&&(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)("p",{className:p().copyright,children:g})}),(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)(c(),{className:i()(p().privacy,p().link),href:x.privacy,children:r.privacyPolicy})}),0!==u.social.length&&(0,l.jsx)("div",{className:p().content__item,children:(0,l.jsx)(y,{links:v,className:p().socials,"aria-label":r.socialNetworks,target:"_blank"})})]})]})})]})});F.displayName="Footer"},80785:function(e,t,s){"use strict";s.d(t,{W:function(){return c}});var l=s(85893),a=s(94184),n=s.n(a),i=s(67294),o=s(29626),r=s.n(o);let c=(0,i.forwardRef)((e,t)=>{let{variant:s,className:a,style:i,children:o,...c}=e;return(0,l.jsx)("div",{ref:t,...c,className:n()(a,r().layout_wrap,1===s&&r().variant_1),style:i,children:o})});c.displayName="LayoutWrap"},61083:function(e,t,s){"use strict";s.d(t,{y:function(){return d}});var l=s(18443),a=s(13351),n=s(2998),i=s(67294),o=s(61309),r=s(70881),c=s(66615);let _=()=>new n.Z((e,t)=>{let s=document.querySelectorAll("*[data-block-page-view]");s.length>0?setTimeout(()=>_().then(e).catch(t),30):e()});function d(){let e=(0,l.d)(),{isFirstLoaded:t,isPageVisible:s,routerCurtainState:n}=(0,o.v)(),{isAnimating:d}=(0,r.j)();(0,i.useEffect)(()=>{e&&c.Z.dispatch(o.m.actions.setIsPageReady(!0))},[e]),(0,a.b)(()=>{if(!t||"hidden"!==n||s||d)return;let e=_();return e.then(()=>c.Z.dispatch(o.m.actions.setIsPageVisible(!0))).catch(()=>{}),()=>e.cancel()},[t,d,s,n],100)}},60554:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__0WIcU","crisp-chatbox":"styles_crisp-chatbox__OFRQ2","desktop-hide":"styles_desktop-hide__ng4sn","tablet-hide":"styles_tablet-hide__Fl031","phone-hide":"styles_phone-hide__Wdi_V",list:"styles_list__uA4E6"}},13127:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__2uUa6","crisp-chatbox":"styles_crisp-chatbox__HbWZp","desktop-hide":"styles_desktop-hide__tlT88","tablet-hide":"styles_tablet-hide__WyIhu","phone-hide":"styles_phone-hide__95hUY",form_file:"styles_form_file__lTuyN",theme_default:"styles_theme_default__Nn5y3",theme_fancy:"styles_theme_fancy__VjVQJ",theme_invert:"styles_theme_invert__WwrUa",thumb:"styles_thumb__uOIvf",active:"styles_active__4MjzI",content:"styles_content__tg1Bz",content__wrapper:"styles_content__wrapper__1_uT_",placeholder:"styles_placeholder__yg4XQ",hidden:"styles_hidden__7zhbo",value:"styles_value__CFGEK",input:"styles_input___gk4p"}},62381:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__94xFn","crisp-chatbox":"styles_crisp-chatbox__b89xf","desktop-hide":"styles_desktop-hide__hJ01q","tablet-hide":"styles_tablet-hide__KY75a","phone-hide":"styles_phone-hide__rhMiK",title:"styles_title__T_Sso",data:"styles_data__5we9K",button:"styles_button__e69cd"}},91197:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__GTi4J","crisp-chatbox":"styles_crisp-chatbox__jy_hq","desktop-hide":"styles_desktop-hide__PjFmD","tablet-hide":"styles_tablet-hide__bbqsM","phone-hide":"styles_phone-hide__Ld_z6",form_input:"styles_form_input__2gSBn",is_textarea:"styles_is_textarea__Bjlr8",input:"styles_input__uk4qC",theme_default:"styles_theme_default__nTq_Q",theme_invert:"styles_theme_invert__a66iT",theme_fancy:"styles_theme_fancy__dTVet",is_error:"styles_is_error__2cW2d"}},64878:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__Ggcr8","crisp-chatbox":"styles_crisp-chatbox__i71yJ","desktop-hide":"styles_desktop-hide__qcJO_","tablet-hide":"styles_tablet-hide__SHdmv","phone-hide":"styles_phone-hide__l7iIa",container:"styles_container__1zKdw",label:"styles_label__zPB9r",theme_default:"styles_theme_default__Pe_1e",theme_invert:"styles_theme_invert__H_WHE"}},74792:function(e){e.exports={"grecaptcha-badge":"freeConsultationModal_grecaptcha-badge__fSvV6","crisp-chatbox":"freeConsultationModal_crisp-chatbox__8rLd9","desktop-hide":"freeConsultationModal_desktop-hide__LOyfK","tablet-hide":"freeConsultationModal_tablet-hide__NdnHf","phone-hide":"freeConsultationModal_phone-hide__rX8Tp",modal:"freeConsultationModal_modal__Inqca",overlay:"freeConsultationModal_overlay__j7U81",wrapper:"freeConsultationModal_wrapper__SZGwC",title:"freeConsultationModal_title__MwIK4",text:"freeConsultationModal_text__9zSie",getInTouch:"freeConsultationModal_getInTouch__30Y1M",info:"freeConsultationModal_info__r_1Mj",close:"freeConsultationModal_close__LqngT",close_button:"freeConsultationModal_close_button__OGpT3",close_button_mobile:"freeConsultationModal_close_button_mobile__7n__0"}},77340:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__yCy3j","crisp-chatbox":"styles_crisp-chatbox__l0tVw","desktop-hide":"styles_desktop-hide__lyQ8U","tablet-hide":"styles_tablet-hide__t5HcL","phone-hide":"styles_phone-hide__s4Az9",modal:"styles_modal__Zb7Ci",overlay:"styles_overlay__ItZor",wrapper:"styles_wrapper__wQXDn",close:"styles_close__UqYsc",close_button:"styles_close_button__pyX0R"}},24419:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__zHTTA","crisp-chatbox":"styles_crisp-chatbox__6Z57T","desktop-hide":"styles_desktop-hide__E_yWB","tablet-hide":"styles_tablet-hide__QQoWx","phone-hide":"styles_phone-hide__sJhKG",container:"styles_container__hSxAh",button:"styles_button__4oNFo",title:"styles_title__LO4Lu",children:"styles_children__lJ1lo"}},87306:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__aqLj1","crisp-chatbox":"styles_crisp-chatbox__4I5Dc","desktop-hide":"styles_desktop-hide__YPvDI","tablet-hide":"styles_tablet-hide__f1y_x","phone-hide":"styles_phone-hide__dMluA",tooltip:"styles_tooltip__dhDkI"}},18142:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__wYCXp","crisp-chatbox":"styles_crisp-chatbox__RIaG0","desktop-hide":"styles_desktop-hide__xSCmV","tablet-hide":"styles_tablet-hide__BqDMX","phone-hide":"styles_phone-hide__4qFSL",layout_container:"styles_layout_container__QFSFz",has_footer:"styles_has_footer__3OJF0",footer:"styles_footer__YbY_4",fixed:"styles_fixed__QZAfg"}},4407:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__FtWQt","crisp-chatbox":"styles_crisp-chatbox__AL951","desktop-hide":"styles_desktop-hide__y2KZM","tablet-hide":"styles_tablet-hide__nQnQb","phone-hide":"styles_phone-hide__yxGP7",form:"styles_form__FpIf7",textarea:"styles_textarea__2s741",normalize_height:"styles_normalize_height__E37ee",data:"styles_data__5u4kq",row:"styles_row__NU70C",buttons:"styles_buttons__xq4G0"}},92197:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__pMyf_","crisp-chatbox":"styles_crisp-chatbox__7J6tO","desktop-hide":"styles_desktop-hide__PALqB","tablet-hide":"styles_tablet-hide__hL_Vq","phone-hide":"styles_phone-hide__PCjpZ",links:"styles_links__MFQpE",link:"styles_link__6lffK"}},20894:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__TY__V","crisp-chatbox":"styles_crisp-chatbox__bKzHc","desktop-hide":"styles_desktop-hide__OG97w","tablet-hide":"styles_tablet-hide__L9Avp","phone-hide":"styles_phone-hide__OCMAH",footer:"styles_footer__McAZW",with_form:"styles_with_form__TuCLm",footer_form:"styles_footer_form__08Jrz",footer_main:"styles_footer_main__OoDd1",title:"styles_title__HpMB1",content:"styles_content__2dWgW",top:"styles_top__NxX_r",bottom:"styles_bottom__HgKIB",content__item:"styles_content__item__XlynS",link:"styles_link__N8r_7",privacy:"styles_privacy__g_XlU",copyright:"styles_copyright__jeM6e",socials:"styles_socials__s8Vps"}},29626:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__4aEn6","crisp-chatbox":"styles_crisp-chatbox__mtTpf","desktop-hide":"styles_desktop-hide__Cs1lD","tablet-hide":"styles_tablet-hide__jwl1R","phone-hide":"styles_phone-hide__8cEaf",layout_wrap:"styles_layout_wrap__VKjbg",variant_1:"styles_variant_1__CAedc"}}}]);