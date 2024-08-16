"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{12480:(e,t,r)=>{r.d(t,{U0:()=>a});var n=r(97156);let i={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function a(){return function(){let e=i.Unknown,t=!1;if(n.cg){let r=n.cg.navigator,a=r.userAgent,s=r?.userAgentData?.platform||r.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(s)?e=i.macOS:-1!==["iPhone","iPad","iPod"].indexOf(s)?e=i.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(s)?e=i.Windows:/Android/.test(a)?e=i.Android:/Linux/.test(s)&&(e=i.Linux),t=r?.userAgentData?.mobile??(e===i.Android||e===i.iOS)}return{os:e,isAndroid:e===i.Android,isIOS:e===i.iOS,isMacOS:e===i.macOS,isWindows:e===i.Windows,isLinux:e===i.Linux,isDesktop:e===i.macOS||e===i.Windows||e===i.Linux,isMobile:t}}().isMacOS}},18558:(e,t,r)=>{r.d(t,{JC:()=>n.JC,KK:()=>n.KK,SK:()=>a,Vy:()=>n.Vy,ai:()=>n.ai,oc:()=>n.oc,rd:()=>n.rd});var n=r(50515);let i=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function a(e){return Array.from(e.matchAll(i)).map(([,e])=>e)}},98164:(e,t,r)=>{r.d(t,{$$:()=>o,GI:()=>a,zw:()=>i});var n=r(18558);let i=()=>{let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},a=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),s=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),o=e=>{let t=(0,n.Vy)(e),r=i()&&!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),r=e.getAttribute("type")?.toLowerCase()??"text",n="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!s.has(r)||e.isContentEditable)&&!n}(e.target);return a(t)||r}},34968:(e,t,r)=>{var n=r(72245),i=r(74848),a=r(96540),s=r(90600),o=r(75177),l=r(38553),d=r(55847),c=r(86079),u=r(65862);function m({group:{service:{name:e},commands:t}}){let r=(0,a.useId)();return(0,i.jsxs)(o.A,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,i.jsx)(o.A,{as:"h3",id:r,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,i.jsx)(o.A,{as:"ul",role:"list","aria-labelledby":r,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:r})=>(0,i.jsxs)(o.A,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("div",{children:t}),(0,i.jsx)(o.A,{sx:{textAlign:"right"},children:(Array.isArray(r)?r:[r]).map((e,t)=>(0,i.jsxs)(a.Fragment,{children:[t>0&&" or ",(0,i.jsx)(u.z,{keys:e})]},e))})]},e))})]})}try{m.displayName||(m.displayName="ShortcutsGroupList")}catch{}let p={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};r(4001);var f=r(58033),h=r(28784),g=r(18558);let v=()=>(0,i.jsxs)(o.A,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(l.A,{size:"large"}),(0,i.jsx)("span",{className:"sr-only",children:p.loading})]}),y=e=>Array.isArray(e)?e.map(e=>(0,g.rd)(e)):(0,g.rd)(e??""),b=({children:e})=>(0,i.jsx)(o.A,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),w=({children:e})=>(0,i.jsx)(o.A,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),x=({visible:e,onVisibleChange:t,docsUrl:r})=>{let[n,s]=(0,a.useState)({service:{id:"global",name:"Global"},commands:[]}),[o,l]=(0,a.useState)([]),[u,g]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let t=(0,f.c)(),r=async()=>{g(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let r={contexts:e.content},n=`/site/keyboard_shortcuts?${new URLSearchParams(r).toString()}`,i=await (0,h.lS)(n,{method:"GET"});if(i.ok){let{global:e,...r}=(await i.json()).commands;s({service:{id:"global",name:p.siteWideShortcuts},commands:[...e.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:y(e.keybinding)}))}),l([...Object.values(r),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})))}else l(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})));g(!1)};e&&r()},[e]),e)?(0,i.jsx)(c.l,{title:p.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:u?(0,i.jsx)(v,{}):(0,i.jsxs)(b,{children:[(0,i.jsx)(w,{children:o.map(e=>(0,i.jsx)(m,{group:e},e.service.id))}),(0,i.jsxs)(w,{children:[(0,i.jsx)(m,{group:n},n.service.id),(0,i.jsx)(d.Q,{as:"a",href:r,sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{v.displayName||(v.displayName="LoadingState")}catch{}try{b.displayName||(b.displayName="Columns")}catch{}try{w.displayName||(w.displayName="Column")}catch{}try{x.displayName||(x.displayName="ShortcutsDialog")}catch{}var k=r(97564);function E({docsUrl:e}){let[t,r]=(0,a.useState)(!1);return(0,k.G7)("react_keyboard_shortcuts_dialog")?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ak,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>r(!0)}}),(0,i.jsx)(x,{visible:t,onVisibleChange:r,docsUrl:e})]}):(0,i.jsx)(i.Fragment,{})}try{E.displayName||(E.displayName="KeyboardShortcutsDialog")}catch{}(0,n.k)("keyboard-shortcuts-dialog",{Component:E})},92536:(e,t,r)=>{r.d(t,{R:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new n),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let n=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},75014:(e,t,r)=>{r.d(t,{Mm:()=>a,QJ:()=>s,w8:()=>i});var n=r(96540);function i(e){return((0,n.useEffect)(()=>{let t=e?.anchor;t&&("disabled"in t&&(t.disabled=!1),t.classList.remove("cursor-wait"))},[e]),e)?{reactPartialAnchor:{__wrapperElement:e}}:{}}function a(e){let t=(0,n.useRef)(e.__wrapperElement.anchor||null),[r,i]=(0,n.useState)(!1),a=(0,n.useCallback)(()=>{i(!r)},[r,i]);return(0,n.useEffect)(()=>{t.current&&(t.current.setAttribute("aria-expanded",r.toString()),t.current.setAttribute("aria-haspopup","true"))},[t,r]),s(e,a),{ref:t,open:r,setOpen:i}}function s(e,t){let r=(0,n.useRef)(e.__wrapperElement.anchor);(0,n.useEffect)(()=>{let e=r.current;if(e)return e.addEventListener("click",t),()=>e.removeEventListener("click",t)},[r,t])}},72245:(e,t,r)=>{r.d(t,{k:()=>d});let n=new(r(92536)).R;var i=r(74848),a=r(39595),s=r(24508),o=r(23235);let l=class ReactPartialElement extends s.H{async getReactNode(e){var t;let{Component:r}=await (t=this.name,n.getRegistration(t)),a=this.closest("react-partial-anchor");return(0,i.jsx)(o.c,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:this.ssrError,anchorElement:a})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function d(e,t){n.register(e,t)}l=function(e,t,r,n){var i,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([a.p_],l)},23581:(e,t,r)=>{r.d(t,{A:()=>o});let{getItem:n,setItem:i,removeItem:a}=(0,r(74572).A)("localStorage"),s="REACT_PROFILING_ENABLED",o={enable:()=>i(s,"true"),disable:()=>a(s),isEnabled:()=>!!n(s)}},35311:(e,t,r)=>{r.d(t,{J:()=>i,k:()=>CommandEvent});var n=r(4001);let CommandEvent=class CommandEvent{constructor(e){this.commandId=e}};let i={entries:e=>Object.entries(e).filter(e=>n.dx.is(e[0])&&void 0!==e[1]),keys:e=>Object.keys(e).filter(n.dx.is)}},32807:(e,t,r)=>{r.d(t,{F:()=>s,j:()=>o});var n=r(96540),i=r(50612);let a=(0,n.createContext)({triggerCommand:i.b}),s=a.Provider,o=()=>(0,n.useContext)(a)},58033:(e,t,r)=>{r.d(t,{J:()=>l,c:()=>o});var n=r(96540),i=r(35311),a=r(4001);let s=new Map;function o(){let e=new Map;for(let t of new Set(Array.from(s.values()).flat())){let r=a.dx.getServiceId(t);if(!e.has(r)){let t=(0,a.tp)(r);e.set(r,{service:{id:t.id,name:t.name},commands:[]})}let n=(0,a.fL)(t);n&&n.defaultBinding&&e.get(r)?.commands.push({id:t,name:n.name,description:n.description,keybinding:n.defaultBinding})}return Array.from(e.values())}let l=e=>{let t=(0,n.useId)();(0,n.useEffect)(()=>(s.set(t,i.J.keys(e)),()=>{s.delete(t)}),[e,t])}},4001:(e,t,r)=>{r.d(t,{dx:()=>l,eY:()=>m,fL:()=>d,tp:()=>c,xJ:()=>u});var n=r(97564),i=r(18558);let{P:a,$:s}=r(43750),o=new Set(Object.keys(a)),l={is:e=>o.has(e),getServiceId:e=>e.split(":")[0]},d=e=>{let t=a[e];return!t.featureFlag||(0,n.G7)(t.featureFlag.toUpperCase())?t:void 0},c=e=>s[e],u=e=>{let t=d(e);return t?.defaultBinding?(0,i.rd)(t.defaultBinding):void 0},m=e=>new Map(e.map(e=>[e,u(e)]).filter(e=>void 0!==e[1]))},67413:(e,t,r)=>{r(65862),r(4001)},16646:(e,t,r)=>{r.d(t,{T:()=>o});var n=r(97524),i=r(4001);let a=new n.s({collectorUrl:"https://collector.githubapp.com/ui-commands/collect"}),s={TYPE:"command.trigger",send(e){a.sendEvent(s.TYPE,e)}};function o(e,t){s.send({command_id:e.commandId,trigger_type:t instanceof KeyboardEvent?"keybinding":"click",target_element_html:t.target instanceof HTMLElement?function(e){let t=e.tagName.toLowerCase(),r=Array.from(e.attributes).map(e=>`${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");return`<${t}${r?` ${r}`:""}>`}(t.target):void 0,keybinding:(0,i.xJ)(e.commandId)})}},90600:(e,t,r)=>{r.d(t,{Vr:()=>n.V,ak:()=>s.a,cQ:()=>i.c,hh:()=>a.h,tL:()=>o.t}),r(4001);var n=r(84735),i=r(18332);r(75251);var a=r(23631),s=r(50612),o=r(48869);r(67413)},8492:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),i=r(35311),a=r(4001),s=r(86342);let o=new Map;function l(e,t){let r=(0,n.useMemo)(()=>new Map,[]),l="global"===e?o:r;(0,n.useEffect)(()=>{for(let[e,r]of(0,a.eY)(i.J.keys(t))){let t=l.get(r)?.filter(t=>t!==e)??[];t.length&&console.warn(`The keybinding (${r}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`),l.set(r,t.concat(e))}return()=>{for(let[e,r]of(0,a.eY)(i.J.keys(t))){let t=(0,s.C)(l.get(r)??[],e);t?.length?l.set(r,t):l.delete(r)}}},[t,l])}},67435:(e,t,r)=>{r.d(t,{k:()=>o});var n=r(18558),i=r(98164),a=r(96540),s=r(4001);function o(e,t){let r=(0,a.useMemo)(()=>new n.KK,[]),o=(0,a.useMemo)(()=>{let t=new Map;for(let r of e){let e=(0,s.xJ)(r);e&&t.set(e,r)}return t},[e]),l=(0,a.useRef)(null);return(0,a.useCallback)(e=>{let a="nativeEvent"in e?e.nativeEvent:e;if(l.current===a)return;if(l.current=a,!(0,i.$$)(a)){r.reset();return}r.registerKeypress(a);let s=o.get(r.sequence)??o.get((0,n.Vy)(a));s&&(r.reset(),e.preventDefault(),e.stopPropagation(),t(s,a))},[o,r,t])}},86342:(e,t,r)=>{r.d(t,{C:()=>n});function n(e,t){let r=!1;return e.filter(e=>e!==t||!!r||(r=!0,!1))}},98152:(e,t,r)=>{r.d(t,{_:()=>s});var n=r(12480),i=r(96540);let a=new Set(["enter","tab"]),s=e=>{let t=(0,i.useRef)(!1),r=(0,i.useRef)(!1),s=(0,i.useCallback)(e=>{"compositionstart"===e.type&&(t.current=!0,r.current=!1),"compositionend"===e.type&&(t.current=!1,r.current=!0)},[]),o=(0,i.useCallback)(i=>{if(!a.has(i.key.toLowerCase())||!t.current){if((0,n.U0)()&&229===i.keyCode&&r.current){r.current=!1;return}e(i)}},[e]);return(0,i.useMemo)(()=>({onCompositionStart:s,onCompositionEnd:s,onKeyDown:o}),[s,o])}},51012:(e,t,r)=>{r.d(t,{N:()=>a});var n=r(97156),i=r(96540);let a=void 0!==n.cg?.document?.createElement?i.useLayoutEffect:i.useEffect},10120:(e,t,r)=>{r.d(t,{M:()=>a});var n=r(51012),i=r(96540);function a(e){let t=(0,i.useRef)(e);return(0,n.N)(()=>{t.current=e},[e]),t}},28784:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function i(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:i,headers:r})}function a(e,t={}){let r={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:r})}function s(e,t){let r={...t?.headers??{},"GitHub-Is-React":"true"};return i(e,{...t,headers:r})}r.d(t,{DI:()=>n,QJ:()=>a,Sr:()=>s,lS:()=>i})},65862:(e,t,r)=>{r.d(t,{z:()=>w});var n=r(74848),i=r(69909),a=r(37976),s=r(96540),o=r(12480);let l={alt:(0,o.U0)()?"\u2325":"Alt",control:"\u2303",shift:"\u21E7",meta:(0,o.U0)()?"\u2318":"Win",mod:(0,o.U0)()?"\u2318":"\u2303",pageup:"PgUp",pagedown:"PgDn",arrowup:"\u2191",arrowdown:"\u2193",arrowleft:"\u2190",arrowright:"\u2192",plus:"+",backspace:"\u232B",delete:"Del",space:"\u2423",tab:"\u21E5",enter:"\u23CE",escape:"Esc",function:"Fn",capslock:"CapsLock",insert:"Ins",printscreen:"PrtScn"},d={alt:(0,o.U0)()?"Option":"Alt",mod:(0,o.U0)()?"Command":"Control","+":"Plus",pageup:"Page Up",pagedown:"Page Down",arrowup:"Up Arrow",arrowdown:"Down Arrow",arrowleft:"Left Arrow",arrowright:"Right Arrow",capslock:"Caps Lock",printscreen:"Print Screen"},c={alt:(0,o.U0)()?"option":"alt",meta:(0,o.U0)()?"command":"Windows",mod:(0,o.U0)()?"command":"control",pageup:"page up",pagedown:"page down",arrowup:"up arrow",arrowdown:"down arrow",arrowleft:"left arrow",arrowright:"right arrow",capslock:"caps lock",printscreen:"print screen","`":"backtick","~":"tilde","!":"exclamation point","@":"at","#":"hash",$:"dollar sign","%":"percent","^":"caret","&":"ampersand","*":"asterisk","(":"left parenthesis",")":"right parenthesis",_:"underscore","-":"dash","+":"plus","=":"equals","[":"left bracket","{":"left curly brace","]":"right bracket","}":"right curly brace","\\":"backslash","|":"pipe",";":"semicolon",":":"colon","'":"single quote",'"':"double quote",",":"comma","<":"left angle bracket",".":"period",">":"right angle bracket","/":"forward slash","?":"question mark"," ":"space"},u={control:1,meta:2,alt:3,option:4,shift:5,function:6,DEFAULT:7};function m(e){return e in u?u[e]:u.DEFAULT}let p=({children:e})=>(0,n.jsx)(i.A,{as:"kbd",sx:{color:"inherit",fontFamily:"inherit",fontSize:"inherit",border:"none",background:"none",boxShadow:"none",p:0,lineHeight:"unset",position:"relative",overflow:"visible",verticalAlign:"baseline"},children:e}),f=e=>c[e]||e,h=({name:e,format:t})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"sr-only",children:f(e)}),(0,n.jsx)("span",{"aria-hidden":!0,children:("condensed"===t?l[e]:d[e])??(0,a.A)(e)})]}),g=e=>e.split("+").map(e=>e.toLowerCase()).sort(v),v=(e,t)=>m(e)-m(t),y=({keys:e,format:t="condensed",variant:r="normal"})=>(0,n.jsx)(i.A,{sx:{display:"inline-flex",bg:"onEmphasis"===r?"transparent":"canvas.default",color:"onEmphasis"===r?"fg.onEmphasis":"fg.muted",border:"1px solid",borderColor:"border.default",borderRadius:2,fontWeight:"normal",fontFamily:"normal",fontSize:0,p:1,gap:"0.5ch",boxShadow:"none",verticalAlign:"baseline",overflow:"hidden",lineHeight:"10px"},children:g(e).map((e,r)=>(0,n.jsxs)(s.Fragment,{children:[r>0&&"full"===t?(0,n.jsx)("span",{"aria-hidden":!0,children:" + "}):" ",(0,n.jsx)(h,{name:e,format:t})]},r))}),b=e=>e.split(" "),w=(0,s.memo)(({keys:e,format:t="condensed",variant:r})=>(0,n.jsx)(p,{children:b(e).map((e,i)=>(0,n.jsxs)(s.Fragment,{children:[i>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"sr-only",children:", then"})," "]}),(0,n.jsx)(y,{keys:e,format:t,variant:r})]},i))}));w.displayName="KeyboardKey";try{p.displayName||(p.displayName="Kbd")}catch{}try{y.displayName||(y.displayName="Chord")}catch{}},23235:(e,t,r)=>{r.d(t,{c:()=>f});var n=r(74848),i=r(96540),a=r(36165),s=r(45588),o=r(49107),l=r(47767),d=r(59840);function c({children:e,history:t}){let[r,a]=(0,i.useState)({location:t.location});return(0,d.m)(()=>t.listen(a),[t]),(0,n.jsx)(l.Ix,{location:r.location,navigator:t,children:e})}try{c.displayName||(c.displayName="PartialRouter")}catch{}var u=r(17857),m=r(51261),p=r(75014);function f({partialName:e,embeddedData:t,Component:r,wasServerRendered:l,ssrError:d,anchorElement:f}){let h=i.useRef(),g=globalThis.window;h.current||(h.current=g?(0,m.z)({window:g}):(0,s.sC)({initialEntries:[{pathname:"/"}]}));let v=h.current,y=(0,p.w8)(f);return(0,n.jsx)(a.U,{appName:e,wasServerRendered:l,children:(0,n.jsx)(o.Q,{history:v,routes:[],children:(0,n.jsxs)(c,{history:v,children:[(0,n.jsx)(r,{...t.props,...y}),(0,n.jsx)(u.h,{ssrError:d})]})})})}try{f.displayName||(f.displayName="PartialEntry")}catch{}},24508:(e,t,r)=>{r.d(t,{H:()=>ReactBaseElement});var n=r(74848),i=r(39595),a=r(5338),s=r(96540),o=r(23581),l=r(79461),d=r(51528);function c(e,t,r,n){var i,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}let u=RegExp("Minified React error #(?<invariant>\\d+)");let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){if(!this.reactRoot)throw Error("No react root provided");let e={createRoot:a.H,hydrateRoot:a.c};o.A.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,i=await this.getReactNode(t),l=(0,n.jsx)(s.StrictMode,{children:i});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:e=>{if(!(e instanceof Error))return;let t=u.exec(e.message),r=String(t?.groups?.invariant);(0,d.i)({incrementKey:"REACT_HYDRATION_ERROR",incrementTags:{appName:this.name,invariant:r}})}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,87335,19))}logSSRError(e){if(l.z[e])return console.error("SSR failed with an expected error:",l.z[e]);try{let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ";return e.stacktrace.map(e=>{let{function:r,filename:n,lineno:i,colno:a}=e,s=`${t} at ${r} (${n}:${i}:${a})`;return t=" ",s}).join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}catch{console.error("Error During Alloy SSR:",e,"unable to parse as json")}}};c([i.aC],ReactBaseElement.prototype,"embeddedData",void 0),c([i.aC],ReactBaseElement.prototype,"ssrError",void 0),c([i.aC],ReactBaseElement.prototype,"reactRoot",void 0);try{u.displayName||(u.displayName="REACT_INVARIANT_ERROR_REGEX")}catch{}},84735:(e,t,r)=>{r.d(t,{V:()=>d});var n=r(74848),i=r(17909),a=r(96540),s=r(4001),o=r(32807),l=r(23631);let d=(0,a.forwardRef)(({commandId:e,children:t,description:r,leadingVisual:a,trailingVisual:d,...c},u)=>{let m=(0,s.fL)(e),{triggerCommand:p}=(0,o.j)();return m?(0,n.jsxs)(i.l.Item,{...c,onSelect:t=>p(e,t.nativeEvent),ref:u,children:[t??m.name,r&&(0,n.jsx)(i.l.Description,{children:r}),a&&(0,n.jsx)(i.l.LeadingVisual,{children:a}),null!==d&&(0,n.jsx)(i.l.TrailingVisual,{children:d??(0,n.jsx)(l.h,{commandId:e,format:"condensed"})})]}):null});d.displayName="ActionList.CommandItem"},18332:(e,t,r)=>{r.d(t,{c:()=>c});var n,i=r(74848),a=r(55847),s=r(96540),o=r(4001),l=r(32807),d=r(23631);let c=(0,s.forwardRef)(({commandId:e,children:t,trailingVisual:r,showKeybindingHint:n=!1,...s},c)=>{let u=(0,o.fL)(e),{triggerCommand:m}=(0,l.j)();return u?(0,i.jsx)(a.Q,{...s,onClick:t=>m(e,t.nativeEvent),trailingVisual:r??n?()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"sr-only",children:"("}),(0,i.jsx)(d.h,{commandId:e,format:"condensed"}),(0,i.jsx)("span",{className:"sr-only",children:")"})]}):void 0,ref:c,children:t??u.name}):null});c.displayName="CommandButton";try{(n=HintVisual).displayName||(n.displayName="HintVisual")}catch{}},75251:(e,t,r)=>{var n=r(74848),i=r(87330),a=r(96540),s=r(4001),o=r(32807);(0,a.forwardRef)(({commandId:e,"aria-label":t,...r},a)=>{let l=(0,s.fL)(e),{triggerCommand:d}=(0,o.j)();return l?(0,n.jsx)(i.K,{...r,"aria-label":t??l.name,onClick:t=>d(e,t.nativeEvent),ref:a}):null}).displayName="CommandIconButton"},23631:(e,t,r)=>{r.d(t,{h:()=>s});var n=r(74848),i=r(65862),a=r(4001);let s=({commandId:e,...t})=>{let r=(0,a.xJ)(e);return r?(0,n.jsx)(i.z,{keys:r,...t}):null};try{s.displayName||(s.displayName="CommandKeybindingHint")}catch{}},50612:(e,t,r)=>{r.d(t,{a:()=>m,b:()=>u});var n=r(96540),i=r(35311),a=r(4001),s=r(58033),o=r(16646),l=r(8492),d=r(67435);let c="ui-command-trigger";function u(e,t){document.dispatchEvent(new CustomEvent(c,{detail:{commandId:e,domEvent:t}}))}let m=({commands:e})=>{let t=(0,n.useCallback)((t,r)=>{let n=e[t];if(n){let e=new i.k(t);try{n(e)}finally{(0,o.T)(e,r)}}},[e]),r=(0,d.k)(i.J.keys(e),t);return(0,l.A)("global",e),(0,s.J)(e),(0,n.useEffect)(()=>{let e=e=>{let r="detail"in e&&"object"==typeof e.detail?e.detail:void 0;if(!r)return;let n="commandId"in r&&"string"==typeof r.commandId&&a.dx.is(r.commandId)?r.commandId:void 0,i="domEvent"in r&&(r.domEvent instanceof KeyboardEvent||r.domEvent instanceof MouseEvent)?r.domEvent:void 0;n&&i&&t(n,i)};return document.addEventListener("keydown",r),document.addEventListener(c,e),()=>{document.removeEventListener("keydown",r),document.removeEventListener(c,e)}},[r,t]),null};try{m.displayName||(m.displayName="GlobalCommands")}catch{}},48869:(e,t,r)=>{r.d(t,{t:()=>f});var n=r(74848),i=r(98152),a=r(10120),s=r(64515),o=r(96540),l=r(35311),d=r(32807),c=r(58033),u=r(16646),m=r(8492),p=r(67435);let f=(0,o.forwardRef)(({commands:e,as:t="div",...r},f)=>{let h=(0,a.M)(e),g=(0,d.j)(),v=(0,o.useCallback)((e,t)=>{let r=h.current[e];if(r){let n=new l.k(e);try{r(n)}finally{(0,u.T)(n,t)}}else g.triggerCommand(e,t)},[h,g]);(0,m.A)("scoped",e),(0,c.J)(e);let y=(0,o.useMemo)(()=>({triggerCommand:v}),[v]),b=(0,p.k)(l.J.keys(e),v),w=(0,i._)(b),x=(0,o.useRef)(null);return(0,s.T)(f,x),(0,o.useEffect)(()=>{let e=x.current,t=w.onKeyDown;if(e)return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}),(0,n.jsx)(d.F,{value:y,children:(0,n.jsx)(t,{style:"div"!==t?void 0:{display:"contents"},...r,...w,ref:x})})});f.displayName="ScopedCommands"},43750:e=>{e.exports=JSON.parse('{"$":{"commit-diff-view":{"id":"commit-diff-view","name":"Commits diff view","commandIds":["commit-diff-view:open-find","commit-diff-view:create-permalink"]},"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:open-context-menu"]},"issue-create":{"id":"issue-create","name":"Issue Create","commandIds":["issue-create:new","issue-create:submit-and-create-more","issue-create:open-fullscreen"]},"issue-viewer":{"id":"issue-viewer","name":"Issue viewer","commandIds":["issue-viewer:edit-parent"]},"item-pickers":{"id":"item-pickers","name":"Item Pickers","commandIds":["item-pickers:open-assignees","item-pickers:open-development","item-pickers:open-labels","item-pickers:open-milestone","item-pickers:open-projects"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"list-views":{"id":"list-views","name":"List views including lists of issues, pull requests, discussions, and notifications.","commandIds":["list-views:open-manage-item-dialog"]},"projects":{"id":"projects","name":"Projects","commandIds":["projects:save-view"]},"pull-requests-diff-file-tree":{"id":"pull-requests-diff-file-tree","name":"Pull requests - diff file tree","commandIds":["pull-requests-diff-file-tree:focus-file-tree"]},"pull-requests-diff-view":{"id":"pull-requests-diff-view","name":"Pull requests - \'Files changed\' view","commandIds":["pull-requests-diff-view:copy-code","pull-requests-diff-view:expand-all-hunks","pull-requests-diff-view:expand-hunk-up","pull-requests-diff-view:expand-hunk-down","pull-requests-diff-view:copy-anchor-link","pull-requests-diff-view:start-conversation-current","pull-requests-diff-view:jump-to-next-result","pull-requests-diff-view:jump-to-next-result-alternate","pull-requests-diff-view:jump-to-previous-result","pull-requests-diff-view:jump-to-previous-result-alternate","pull-requests-diff-view:open-find","pull-requests-diff-view:close-find"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]},"sub-issues":{"id":"sub-issues","name":"sub-issues","commandIds":["sub-issues:create-sub-issue","sub-issues:add-existing-issue"]}},"P":{"commit-diff-view:create-permalink":{"name":"Create permalink","description":"Hotkey to expand the current url to a full permalink.","defaultBinding":"y"},"commit-diff-view:open-find":{"name":"Open up find and search on selection","description":"Hotkey to open up the custom find and search on selection.","defaultBinding":"Mod+e"},"github:open-context-menu":{"name":"Open context menu","description":"Open a context menu if one is available","defaultBinding":"Alt+Shift+C"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"issue-create:new":{"name":"Create a new issue","description":"Initiate new issue creation","defaultBinding":"c"},"issue-create:open-fullscreen":{"name":"Open in fullscreen","description":"Open the issue creation dialog in fullscreen mode","defaultBinding":"Mod+Shift+Enter"},"issue-create:submit-and-create-more":{"name":"Submit and create more","description":"Submit the current issue and create a new one","defaultBinding":"Mod+Alt+Enter"},"issue-viewer:edit-parent":{"name":"Edit parent","description":"Edit parent for current issue","defaultBinding":"Alt+Shift+P"},"item-pickers:open-assignees":{"name":"Open assignees panel","description":"Open panel to select assignees","defaultBinding":"a"},"item-pickers:open-development":{"name":"Open development panel","description":"Open panel to create or link a pull request","defaultBinding":"d"},"item-pickers:open-labels":{"name":"Open labels panel","description":"Open panel to select labels","defaultBinding":"l"},"item-pickers:open-milestone":{"name":"Open milestone panel","description":"Open panel to select milestone","defaultBinding":"m"},"item-pickers:open-projects":{"name":"Open projects panel","description":"Open panel to select projects","defaultBinding":"p"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"list-views:open-manage-item-dialog":{"name":"Open \'manage item\' dialog","defaultBinding":"Mod+Shift+U","description":"Open a dialog to manage the currently focused item."},"projects:save-view":{"name":"Save view","description":"Save any unsaved changes to the current project view.","defaultBinding":"Mod+s"},"pull-requests-diff-file-tree:focus-file-tree":{"name":"Focus file tree","description":"Move focus to the file tree","defaultBinding":"Mod+F6","featureFlag":"prx"},"pull-requests-diff-view:close-find":{"name":"Close Find","description":"Close the find window","defaultBinding":"Escape"},"pull-requests-diff-view:copy-anchor-link":{"name":"Copy anchor link","description":"Copy link to the current line","defaultBinding":"Mod+Alt+y","featureFlag":"prx"},"pull-requests-diff-view:copy-code":{"name":"Copy code","description":"Copy the code for the current line(s)","defaultBinding":"Mod+c","featureFlag":"prx"},"pull-requests-diff-view:expand-all-hunks":{"name":"Expand all","description":"Expand all hunks in the current file","defaultBinding":"Mod+Shift+ArrowLeft","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-down":{"name":"Expand below","description":"Expand the current hunk downward","featureFlag":"prx"},"pull-requests-diff-view:expand-hunk-up":{"name":"Expand above","description":"Expand the current hunk upward","featureFlag":"prx"},"pull-requests-diff-view:jump-to-next-result":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Enter"},"pull-requests-diff-view:jump-to-next-result-alternate":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Mod+g"},"pull-requests-diff-view:jump-to-previous-result":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Shift+Enter"},"pull-requests-diff-view:jump-to-previous-result-alternate":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Mod+Shift+G"},"pull-requests-diff-view:open-find":{"name":"Open up find","description":"Hotkey to open up the custom find.","defaultBinding":"Mod+f"},"pull-requests-diff-view:start-conversation-current":{"name":"Start conversation on line","description":"Start a conversation on the current line","featureFlag":"prx"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"},"sub-issues:add-existing-issue":{"name":"Add existing issue","description":"Add an existing issue as a sub-issue","defaultBinding":"Alt+Shift+A"},"sub-issues:create-sub-issue":{"name":"Create sub-issue","description":"Create a new sub-issue","defaultBinding":"Alt+Shift+C"}}}')}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_octicons-react_di-b40d97","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js","vendors-node_modules_clsx_dist_clsx_m_js-node_modules_primer_react_node_modules_primer_octico-c56103","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_react_lib-esm_Dialog_Dialog_js-node_modules_primer_react_lib-esm_-bd7638","ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c"],()=>t(34968)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-543dff5099fb.js.map