(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{99509:function(e,t,s){"use strict";s.d(t,{y:function(){return u}});var a=s(85893),i=s(94184),l=s.n(i),r=s(50490),n=s(41664),_=s.n(n),c=s(25675),h=s.n(c),d=s(17633),o=s.n(d);let p={behance:{src:"/_next/static/media/behance.3addfc80.svg",height:13,width:20,blurWidth:0,blurHeight:0},dribbble:{src:"/_next/static/media/dribbble.36edbee6.svg",height:20,width:20,blurWidth:0,blurHeight:0},email:{src:"/_next/static/media/email.78a92d33.svg",height:24,width:24,blurWidth:0,blurHeight:0},facebook:{src:"/_next/static/media/facebook.5ed8714f.svg",height:20,width:10,blurWidth:0,blurHeight:0},instagram:{src:"/_next/static/media/instagram.61622d50.svg",height:24,width:24,blurWidth:0,blurHeight:0},linkedin:{src:"/_next/static/media/linkedin.da44e58a.svg",height:24,width:24,blurWidth:0,blurHeight:0},twitter:{src:"/_next/static/media/twitter.102eab86.svg",height:24,width:24,blurWidth:0,blurHeight:0}},b=e=>{let{type:t,href:s}=e,i=p[t];return(0,a.jsx)(_(),{className:o().link,href:s,target:"_blank",rel:"noopener noreferrer","aria-label":t,children:(0,a.jsx)("span",{className:o().label,children:p[t]&&(0,a.jsx)(h(),{src:i.src,width:i.width,height:i.height,alt:t})})})};var g=s(53195),m=s.n(g);let u=e=>{let{className:t,style:s,isVertical:i,links:n}=e,_=(0,r.h)(),c=l()(i&&m().is_vertical,!i&&m().is_horizontal);return(0,a.jsx)("div",{className:t,style:s,children:(0,a.jsx)("ul",{className:l()(m().list,c),"aria-label":_.socialNetworks,children:n.map(e=>{let{key:t,type:s,href:i}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(b,{type:s,href:i},t)},t)})})})}},47102:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var a=s(85893),i=s(87399),l=s(94359),r=s(50490),n=s(80785),_=s(7436),c=s(50430),h=s(17913),d=s.n(h),o=s(86935),p=s(21486),b=s.n(p);let g=e=>{let{items:t}=e;return(0,a.jsx)("div",{className:b().list,children:t.map(e=>{let{key:t,...s}=e;return(0,a.jsx)(o.p,{...s},t)})})};var m=s(94184),u=s.n(m),x=s(73725),y=s(99509),v=s(66853),j=s.n(v),w=s(18721),k=s(26703),f=s.n(k),N={src:"/_next/static/media/crown.9d3ba515.svg",height:80,width:80,blurWidth:0,blurHeight:0};let H=e=>{let{className:t,style:s,image:i}=e;return(0,a.jsxs)("div",{className:u()(f().image_wrapper,t),style:s,children:[(0,a.jsx)(w.w,{src:N.src,alt:"crown",className:f().crown,position:!1}),(0,a.jsx)("div",{className:f().image,children:(0,a.jsx)(w.w,{paths:i})})]})},W=e=>{let{className:t,style:s,name:i,jobTitle:l,description:r,image:n,socials:_}=e;return(0,a.jsxs)("section",{className:t,style:s,children:[(0,a.jsxs)("div",{className:u()(j().banner,j().wrapper),children:[(0,a.jsx)("div",{}),(0,a.jsxs)("div",{children:[l&&(0,a.jsx)("p",{className:j().job,children:l}),i&&(0,a.jsx)("h1",{className:j().name,children:i})]})]}),(0,a.jsxs)("div",{className:u()(j().content,j().wrapper),children:[(0,a.jsx)("div",{className:j().image,children:n&&(0,a.jsx)(H,{image:n})}),(0,a.jsxs)("div",{className:j().content_columns,children:[_&&(0,a.jsx)(y.y,{links:_}),r&&(0,a.jsx)(x.H,{className:j().description,html:r})]})]})]})};var E=s(33673);let R=e=>{let[t]=(0,E.b)([e]);return(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org/",...t})}})};var z=s(61083),D=e=>{let{catalog:t,...s}=e;(0,z.y)();let h=(0,r.h)();return(0,a.jsx)(l.k,{children:(0,a.jsxs)(n.W,{variant:1,children:[(0,a.jsx)(i.G,{}),(0,a.jsx)(R,{...s}),(0,a.jsx)(W,{...s}),t&&(0,a.jsxs)("div",{className:d().catalog,children:[(0,a.jsxs)(c.X,{variant:2,className:d().catalog__title,children:[h.blogPostsBy," ",s.name]}),(0,a.jsx)(_.t,{data:t,renderItems:g,parseData:e=>e.template.catalog})]})]})})}},33673:function(e,t,s){"use strict";s.d(t,{b:function(){return r}});var a=s(1107),i=s(44482),l=s(50490);function r(e){let t=(0,l.h)(),s=(0,i.d)(),{canonical:r,base:n}=s.url;return e.map(e=>{let{name:s,description:i,knowsAbout:l,jobTitle:_,image:c,socials:h}=e,d=null==h?void 0:h.filter(e=>{let{href:t}=e;return!t.startsWith("mailto")}).map(e=>{let{href:t}=e;return t});return{"@type":"Person",name:s,description:i,knowsAbout:l,url:r,image:(0,a.G)("".concat(n,"/").concat(null==c?void 0:c.thumb)),sameAs:d,jobTitle:_,worksFor:{"@type":"Organization",name:t.siteName}}})}},17633:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__tDFXR","crisp-chatbox":"styles_crisp-chatbox__pjWn_","desktop-hide":"styles_desktop-hide__yRB57","tablet-hide":"styles_tablet-hide__Ke88v","phone-hide":"styles_phone-hide__HiEEn",link:"styles_link__4HQc6",label:"styles_label__PUbbA"}},53195:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__8VHbn","crisp-chatbox":"styles_crisp-chatbox__p73zp","desktop-hide":"styles_desktop-hide__6dOLW","tablet-hide":"styles_tablet-hide__WhgUm","phone-hide":"styles_phone-hide__qyeIo",list:"styles_list__v8wEZ",is_vertical:"styles_is_vertical__MJkFi",is_horizontal:"styles_is_horizontal__73pm_"}},26703:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__WDD_v","crisp-chatbox":"styles_crisp-chatbox__TIPkt","desktop-hide":"styles_desktop-hide__1bRR0","tablet-hide":"styles_tablet-hide__Jpon6","phone-hide":"styles_phone-hide__liaCD",image_wrapper:"styles_image_wrapper__C7Vsg",image:"styles_image__K52Er",crown:"styles_crown__AsvnU"}},66853:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__Mwvq2","crisp-chatbox":"styles_crisp-chatbox__cpsk2","desktop-hide":"styles_desktop-hide__UH3hr","tablet-hide":"styles_tablet-hide__p1krh","phone-hide":"styles_phone-hide__Twbgv",wrapper:"styles_wrapper__4cEkJ",banner:"styles_banner__LKVPx",job:"styles_job__Y8_Uf",name:"styles_name__nvj8t",content:"styles_content__gbdwF",image:"styles_image__suRsU",content_columns:"styles_content_columns__p_7XR",description:"styles_description__zc9G4"}},17913:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__RDv6Q","crisp-chatbox":"styles_crisp-chatbox__9T9mo","desktop-hide":"styles_desktop-hide__E_Y6r","tablet-hide":"styles_tablet-hide__wjXJo","phone-hide":"styles_phone-hide__2VGek",catalog:"styles_catalog__VhMEb",catalog__title:"styles_catalog__title__nQ2Zv"}}}]);