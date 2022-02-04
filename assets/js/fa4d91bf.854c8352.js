"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50694:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Installation"},s=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"Covfee is a Python package installable using pip. You will then be able to launch covfee in a browser window from the command line (much like launching Jupyter notebooks).",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/covfee/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.mdx",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/covfee/docs/"},next:{title:"Getting Started",permalink:"/covfee/docs/getting_started"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Setup",id:"setup",children:[],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Covfee is a Python package installable using pip. You will then be able to launch covfee in a browser window from the command line (much like launching Jupyter notebooks). "),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Covfee runs on ",(0,a.kt)("strong",{parentName:"p"},"Linux, Mac OS X and Windows"),", but you are more likely to encounter bugs on Windows. We recommend that you use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL")," on Windows."))),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The only prerequisites for installing Covfee locally are Python 3 and Node.js:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3 (>= 3.6)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),". Make sure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," command is available in your terminal.")),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"We recommend that you work with Covfee locally in your computer first, even if you plan to ",(0,a.kt)("a",{parentName:"p",href:"deployment"},"deploy it to a server"),". To install Covfee locally:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create and activate a virtual environment for Covfee, using eg. virtualenv or conda. You may install Covfee globally (without this step) but we recommend a virtual environment to avoid possible dependency conflicts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install covfee via:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python -m pip install covfee\n")),(0,a.kt)("p",null,"For a development setup, recommended if you want to program your own covfee tasks, please see ",(0,a.kt)("a",{parentName:"p",href:"development"},"Development Install")))}m.isMDXComponent=!0}}]);