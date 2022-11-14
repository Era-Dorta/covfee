"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?o.createElement(f,r(r({ref:t},u),{},{components:a})):o.createElement(f,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64826:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(87462),n=(a(67294),a(3905)),i=a(44996);const r={title:"Overview",slug:"/"},s=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"What is covfee?",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/",permalink:"/covfee/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/covfee/docs/installation"}},c=[{value:"What is covfee?",id:"what-is-covfee",children:[{value:"What covfee is not:",id:"what-covfee-is-not",children:[],level:4}],level:2},{value:"The covfee workflow",id:"the-covfee-workflow",children:[],level:2},{value:"Continuous annotation",id:"continuous-annotation",children:[],level:2},{value:"Extending covfee",id:"extending-covfee",children:[],level:2},{value:"Contribute to covfee",id:"contribute-to-covfee",children:[],level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-covfee"},"What is covfee?"),(0,n.kt)("p",null,"Covfee is an extensible web framework for (continuous) annotation, built for ",(0,n.kt)("strong",{parentName:"p"},"crowd-sourcing")," and other online uses. Covfee has ",(0,n.kt)("strong",{parentName:"p"},"two main use cases"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"A tool for online (continuous) annotation"),": Continuous annotation is when video files are annotated ",(0,n.kt)("em",{parentName:"p"},"while you watch them"),". Audio files can also be annotated while you listen to them, and time series in general may be continuously annotated. Some audiovisual continuous annotation tasks making use of mouse and keyboard for user feedback (see ",(0,n.kt)("em",{parentName:"p"},"Playground"),") are already coded, working, and tested in covfee. Preparing a continuous annotation process using these tasks amounts to preparing a JSON file specifying your HITs. Covfee also includes some non-continuous tasks for questionnaires and surveys that are provided for convenience. Using existing covfee tasks requires no coding.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"A platform for custom online human interaction data collection and annotation"),": Covfee provides a framework for researchers with basic knowledge of web development in Javascript to prepare online (crowd-sourced) annotation processes and data collections. Implementing custom covfee tasks (continuous or not) has been boiled down to the writing of a single class (React component) which can make use of multiple helper classes for continuous data recording, input management and multiparty communication for tasks with multiple subjects. Client-server communication and access to the recorded data is abstracted away completely."))),(0,n.kt)("h4",{id:"what-covfee-is-not"},"What covfee is not:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A complete media annotation platform"),'. Covfee specializes on continuous media and does not offer many "basic" features of image annotation like bounding box or polygon annotation which are hard to do continuously. '),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enterprise-level software"),". Covfee is meant to facilitate research and experimentation. It is not thoroughly tested and contains bugs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cross-browser compatible"),". For the time being, covfee is meant to be used in desktop or laptop computers, not on mobile phones or tablets. Also, continuous video annotation specifically currently works only in Google Chrome due to its reliance on ",(0,n.kt)("a",{parentName:"li",href:"https://wicg.github.io/video-rvfc/"},"requestVideoFrameCallback()"),". This will probably improve with more browser support. That being said, with this exception covfee should work correctly on all modern desktop browsers.")),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Covfee is still in alpha stage and is not mature software. "))),(0,n.kt)("h2",{id:"the-covfee-workflow"},"The covfee workflow"),(0,n.kt)("img",{alt:"Docusaurus with Keytar",src:(0,i.Z)("/img/covfee_main.png")}),(0,n.kt)("p",null,"Once covfee is installed, working with covfee as a requestor generally means following the three steps shown in the picture:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The requestor creates a project specification in a ",(0,n.kt)("em",{parentName:"p"},".covfee.json")," file, which completely specifies the annotation interface. This documentation, paticularly the ",(0,n.kt)("em",{parentName:"p"},"Playground")," is meant to help write the specification.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The requestor runs ",(0,n.kt)("inlineCode",{parentName:"p"},"covfee make"),", the script in charge of validating the specification and generating the covfee interface from it. The requestor can now enter the covfee admin panel and obtain anonymized links to each HIT in the specification. A CSV file with all the links can be downloaded to be uploaded to Amazon MTurk or otherwise shared with the annotators or study participants.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The requestor may keep track of the annotation process using the admin panel. At any time it is possible to download the raw data in JSON and CSV files, which can then be processed locally."))),(0,n.kt)("p",null,"For a step-by-step guide on how to work with covfee see ",(0,n.kt)("a",{parentName:"p",href:"docs/getting_started"},"Getting Started")),(0,n.kt)("p",null,"Some of the main features of covfee are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Projects are fully specified in the ",(0,n.kt)("em",{parentName:"strong"},".covfee.json")," file"),". This makes it easy to reproduce annotation processes on other datasets if a covfee specification is available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secure link hashes")," Covfee automatically generates random hash links for each HIT. These hashes generated from a secret key are meant to offer protection against bots or scalping of the HIT links. Note that this form of protection is ",(0,n.kt)("a",{parentName:"li",href:"https://security.stackexchange.com/questions/67615/how-safe-is-to-secure-sensitive-content-by-url-with-md5-hash-and-no-other-author"},"weaker under HTTP"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support for consent forms and rich instructions")," ",(0,n.kt)("em",{parentName:"li"},"Instructions")," tasks can be used to provide detailed instructions in Markdown/HTML (including videos) and set up subject consent forms (see ",(0,n.kt)("a",{parentName:"li",href:"docs/tasks/instructions"},"Instructions Task"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Forms support")," ",(0,n.kt)("em",{parentName:"li"},"Questionnaire")," tasks can be used to request non-continuous feedback from participants via text boxes, buttons, sliders, and more (see ",(0,n.kt)("a",{parentName:"li",href:"docs/tasks/questionnaire"},"Questionnaire Task"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Support for automatic qualification tasks"),". For continuous tasks, a HIT may be opened only if the annotator demonstrates certain level of ability in a qualification. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Admin panel")," The admin panel helps keep track of progress and download results."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High-frequency annotations")," Modern web browsers implement animation and video frame callbacks (via ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"},"requestAnimationFrame()")," and ",(0,n.kt)("a",{parentName:"li",href:"https://wicg.github.io/video-rvfc/"},"requestVideoFrameCallback()"),") which are designed to run on each display refresh. On most modern displays and browsers this is a rate of 60fps. In practice this can be lower depending on the capacity and load of the user's machine.")),(0,n.kt)("h2",{id:"continuous-annotation"},"Continuous annotation"),(0,n.kt)("p",null,"Covfee supports continuous annotation tasks in modern desktop browsers. Browsers implement animation and video frame callbacks (via ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"},"requestAnimationFrame()")," and ",(0,n.kt)("a",{parentName:"p",href:"https://wicg.github.io/video-rvfc/"},"requestVideoFrameCallback()")," which are designed to run on each screen refresh. On most modern displays and browsers this is a rate of 60fps. This is not guaranteed and may be lower depending on the capacity and load of the user's machine but in practice we have observed consistent annotation rates of close to 60fps on most user machines."),(0,n.kt)("h2",{id:"extending-covfee"},"Extending covfee"),(0,n.kt)("p",null,"Particular emphasis has ben put on allowing covfee to be easily extensible. Implementing new covfee tasks like the ones in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Playground")," is possible with only a basic knowledge of web development. Specifically, development of custom tasks requires at least a basic understanding of Javascript and ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". Some useful resources to quickly get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"Official React tutorial"))),(0,n.kt)("p",null,"The main advantages of implementing a custom task as part of covfee are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Covfee takes care of the data recording"),". For continuous tasks, the available ",(0,n.kt)("inlineCode",{parentName:"li"},"buffer")," class takes care of sending chunks of continuous data and logs to the server, and of reading them back for data visualization. All you need to do is call ",(0,n.kt)("inlineCode",{parentName:"li"},"buffer.data()")," for every collected data point and ",(0,n.kt)("inlineCode",{parentName:"li"},"buffer.log()")," to log any events of interest to you. For non-continuous tasks it's even more simple: calling the ",(0,n.kt)("inlineCode",{parentName:"li"},"onSubmit()")," method with the result of your custom task will send the results to the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Covfee's socket.io module")," allows you to efficiently implement multiparty tasks, where multiple subjects are expected to take part in the task. The main use case for multiparty features is the recording of live online interactions (written, audio or audiovisual) with the ability to query subjects at any point or request their live feedback."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Covfee's key manager")," makes it easy to attach event handlers to keyboard and gamepad key presses. This is specially important for continuous annotation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Access to covfee's admin panel")," will allow you to keep track of progress and download results easily."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Share your work")," Covfee tasks are modular and configurable and could be incorporated as part of covfee to be reused by others. Feel free to create a pull request or ",(0,n.kt)("a",{parentName:"li",href:"mailto:josedvq@gmail.com"},"contact me")," if you have created a reusable covfee tasks.")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"docs/custom_task"},"Custom Tasks")," for a step-by-step guide on how to write your custom tasks in covfee."),(0,n.kt)("h2",{id:"contribute-to-covfee"},"Contribute to covfee"),(0,n.kt)("p",null,"Since there is an unlimited number of tasks we can teach algorithms to perform, annotation and data collection tasks often require specific implementations. ",(0,n.kt)("strong",{parentName:"p"},"Covfee has the long-term goal of dramatically improving the time and effort necessary to collect and annotate interaction data online"),". It was born out of the need for an annotation platform that better satisfies the characteristics of in-the-wild interaction data, where the behavior of single subjects is annotated for long periods of time, but always with the goal of supporting a broad array of experiments. To achieve its goal, ",(0,n.kt)("strong",{parentName:"p"},"covfee seeks to become a sufficient library of annotation task templates (covfee tasks)"),", which researchers will be able to use as-is or to modify to satisfy their particular needs. You can contribute to our goal by contributing covfee tasks or ",(0,n.kt)("a",{parentName:"p",href:"mailto:josedvq@gmail.com"},"contact me")," if you are interested in other forms of collaboration."))}p.isMDXComponent=!0}}]);