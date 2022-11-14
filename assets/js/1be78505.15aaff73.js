"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,75],{28827:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var n=a(67294),l=a(3905),o=a(46291),c=a(59463),r=a(86010),i=a(61428),s=a(93783),d=a(55537),m=a(87462);const u=function(e){return n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var b=a(95999),p=a(39960),h=a(13919),E=a(87090);const f="menuLinkText_OKON",g="hasHref_TwRn";var v=a(72389);const k=(0,n.memo)((e=>{let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(_,(0,m.Z)({key:t,item:e},a)))))}));function _(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(C,(0,m.Z)({item:t},a)):n.createElement(N,(0,m.Z)({item:t},a))}function C(e){let{item:t,onItemClick:a,activePath:l,level:o,...c}=e;const{items:s,label:d,collapsible:u,className:h,href:E}=t,_=function(e){const t=(0,v.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),C=(0,i._F)(t,l),{collapsed:N,setCollapsed:S,toggleCollapsed:Z}=(0,i.uR)({initialState:()=>!!u&&(!C&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:C,collapsed:N,setCollapsed:S}),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":N},h)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(p.Z,(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":u&&!E,"menu__link--active":C,[f]:!u,[g]:!!_}),onClick:u?e=>{null==a||a(t),E?S(!1):(e.preventDefault(),Z())}:()=>{null==a||a(t)},href:u?_??"#":_},c),d),E&&u&&n.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),Z()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(k,{items:s,tabIndex:N?-1:0,onItemClick:a,activePath:l,level:o+1})))}function N(e){let{item:t,onItemClick:a,activePath:l,level:o,...c}=e;const{href:s,label:d,className:u}=t,b=(0,i._F)(t,l);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:d},n.createElement(p.Z,(0,m.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:a?()=>a(t):void 0},c),(0,h.Z)(s)?d:n.createElement("span",null,d,n.createElement(E.Z,null))))}const S="sidebar_a3j0",Z="sidebarWithHideableNavbar_VlPv",T="sidebarHidden_OqfG",I="sidebarLogo_hmkv",M="menu_cyFh",y="menuWithAnnouncementBar_+O1J",A="collapseSidebarButton_eoK2",w="collapseSidebarButtonIcon_e+kA";function F(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",A),onClick:t},n.createElement(u,{className:w}))}function L(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const c=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(S,{[Z]:s,[T]:o})},s&&n.createElement(d.Z,{tabIndex:-1,className:I}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",M,{[y]:c})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:t,level:1}))),m&&n.createElement(F,{onClick:l}))}const B=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(k,{items:a,activePath:l,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function x(e){return n.createElement(i.Cv,{component:B,props:e})}const P=n.memo(L),R=n.memo(x);function D(e){const t=(0,s.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(P,e),l&&n.createElement(R,e))}var H=a(32885),W=a(24608);const O="backToTopButton_i9tI",q="backToTopButtonShow_wCmF";function z(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const Y=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:o}=z();return(0,i.RF)(((e,n)=>{let{scrollY:l}=e;const c=null==n?void 0:n.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=l<c;if(r||o(),l<300)t(!1);else if(r){const e=document.documentElement.scrollHeight;l+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,O,{[q]:e}),type:"button",onClick:()=>l()})};var K=a(16550);const U={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};var V=a(12859);function j(e){let{currentDocRoute:t,versionMetadata:a,children:o,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:m,version:p}=a,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),v=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:p,tag:(0,i.os)(m,p)}},n.createElement("div",{className:U.docPage},n.createElement(Y,null),d&&n.createElement("aside",{className:(0,r.Z)(U.docSidebarContainer,{[U.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(U.docSidebarContainer)&&h&&g(!0)}},n.createElement(D,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:f}),f&&n.createElement("div",{className:U.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},n.createElement(u,{className:U.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(U.docMainContainer,{[U.docMainContainerEnhanced]:h||!d})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",U.docItemWrapper,{[U.docItemWrapperEnhanced]:h})},n.createElement(l.Zo,{components:H.Z},o)))))}const G=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,c=t.find((e=>(0,K.LX)(l.pathname,e)));if(!c)return n.createElement(W.default,null);const r=c.sidebar,s=r?a.docsSidebars[r]:null;return n.createElement(n.Fragment,null,n.createElement(V.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement(j,{currentDocRoute:c,versionMetadata:a,sidebarName:r},(0,o.Z)(t,{versionMetadata:a})))))}},24608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),l=a(59463),o=a(95999);const c=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);