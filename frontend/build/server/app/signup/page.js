(()=>{var e={};e.id=966,e.ids=[966],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},893:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>x,tree:()=>l});var s=r(7096),n=r(6132),a=r(7284),i=r.n(a),o=r(2564),p={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>o[e]);r.d(t,p);let l=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5548)),"C:\\WebDev\\webshopproject2023-DanielSanchoWyatt\\frontend\\src\\app\\signup\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4553)),"C:\\WebDev\\webshopproject2023-DanielSanchoWyatt\\frontend\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\WebDev\\webshopproject2023-DanielSanchoWyatt\\frontend\\src\\app\\signup\\page.js"],d="/signup/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3982:(e,t,r)=>{Promise.resolve().then(r.bind(r,9758))},9758:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Register});var s=r(784),n=r(8781),a=r(9885);function Register(){let[e,t]=(0,a.useState)(""),register=async({username:e,password:r,email:s})=>{let a=await fetch(`${n.S}/register/`,{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify({username:e,password:r,email:s})}),i=await a.json();t(JSON.stringify(i))};return(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Register Page"}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.target,r=new FormData(t),s=Object.fromEntries(r.entries());register(s)},children:[(0,s.jsxs)("label",{children:["Username",s.jsx("input",{type:"text",name:"username"})]}),(0,s.jsxs)("label",{children:["email",s.jsx("input",{type:"email",name:"email"})]}),(0,s.jsxs)("label",{children:["password",s.jsx("input",{type:"password",name:"password"})]}),s.jsx("button",{type:"submit",children:"Submit"})]}),(0,s.jsxs)("div",{children:[s.jsx("h2",{children:"info"}),s.jsx("p",{children:e})]})]})}},8781:(e,t,r)=>{"use strict";r.d(t,{S:()=>s});let s="/api"},5548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>p});var s=r(5153);let n=(0,s.createProxy)(String.raw`C:\WebDev\webshopproject2023-DanielSanchoWyatt\frontend\src\app\signup\page.js`),{__esModule:a,$$typeof:i}=n,o=n.default,p=o},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[481,52,424],()=>__webpack_exec__(893));module.exports=r})();