!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.blocks,a=JSON.parse('{"u2":"am/faux-wp-forms-survey"}'),l=window.wp.i18n,o=window.React,r=window.wp.components,i=window.wp.data,c=window.wp.apiFetch,s=e.n(c);const m=()=>(0,t.createElement)(r.Icon,{icon:(0,t.createElement)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"#434960"})),size:14}),u=()=>(0,t.createElement)(r.Icon,{icon:"admin-plugins",size:50,style:{height:66,width:66,display:"flex",justifyContent:"center",alignItems:"center"}}),d=()=>(0,t.createElement)(r.Icon,{icon:(0,t.createElement)("svg",{width:"26",height:"29",viewBox:"0 0 26 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M10.6667 1.03341C11.0889 0.78897 11.5333 0.666748 12 0.666748C12.4667 0.666748 12.9111 0.78897 13.3333 1.03341L22.6667 6.40008C23.0889 6.64453 23.4167 6.96675 23.65 7.36675C23.8833 7.76675 24 8.21119 24 8.70008V14.3334C23.2444 13.8001 22.4167 13.389 21.5167 13.1001C20.6167 12.8112 19.6667 12.6667 18.6667 12.6667C18.2889 12.6667 17.9278 12.6834 17.5833 12.7167C17.2389 12.7501 16.8889 12.8112 16.5333 12.9001L21.3333 10.1334V8.73342L19.9 7.90008L12 12.4667L4.1 7.90008L2.66667 8.73342V10.1334L10.6667 14.7667V17.2001C10.2444 17.9112 9.91667 18.6667 9.68333 19.4667C9.45 20.2667 9.33333 21.1112 9.33333 22.0001C9.33333 22.9334 9.46111 23.8223 9.71667 24.6667C9.97222 25.5112 10.3333 26.3001 10.8 27.0334C10.7778 27.0112 10.7556 27.0001 10.7333 27.0001C10.7111 27.0001 10.6889 26.989 10.6667 26.9667L1.33333 21.6001C0.911111 21.3556 0.583333 21.0334 0.35 20.6334C0.116667 20.2334 0 19.789 0 19.3001V8.70008C0 8.21119 0.116667 7.76675 0.35 7.36675C0.583333 6.96675 0.911111 6.64453 1.33333 6.40008L10.6667 1.03341ZM18.6667 26.0001L22.6667 22.0001L21.7333 21.0667L19.3333 23.4667V18.0001H18V23.4667L15.6 21.0667L14.6667 22.0001L18.6667 26.0001ZM18.6667 28.6667C16.8222 28.6667 15.25 28.0168 13.95 26.7167C12.65 25.4167 12 23.8445 12 22.0001C12 20.1556 12.65 18.5834 13.95 17.2834C15.25 15.9834 16.8222 15.3334 18.6667 15.3334C20.5111 15.3334 22.0833 15.9834 23.3833 17.2834C24.6833 18.5834 25.3333 20.1556 25.3333 22.0001C25.3333 23.8445 24.6833 25.4167 23.3833 26.7167C22.0833 28.0168 20.5111 28.6667 18.6667 28.6667Z",fill:"#0068A0"})),size:26});var p=e=>{const{pluginName:n}=e;return(0,t.createElement)("div",{className:"am-faux-block-preview"},(0,t.createElement)(d,null),(0,t.createElement)("div",{className:"am-faux-block-preview-text"},(0,t.createElement)("p",null,(0,t.createElement)("strong",null,n+" required")),(0,t.createElement)("p",null,"Add this block to install it.")))};(0,n.registerBlockType)(a.u2,{attributes:{text:{type:"string",default:"Survey"},pluginName:{type:"string",default:"WP Forms"},pluginPath:{type:"string",default:"wpforms-lite/wpforms.php"},description:{type:"string",default:"WP Forms is a powerful plugin that helps you create custom forms for your WordPress site. It is a great tool for developers and site owners who want to create contact forms, registration forms, survey forms, and more."},preview:{type:"boolean",default:!1}},edit:function(e){const{attributes:n}=e,{pluginPath:a,pluginName:c,logo:d,description:w,preview:f}=n,h="am-faux-blocks",{removeBlock:E}=(0,i.useDispatch)("core/block-editor"),{autosave:g}=(0,i.useDispatch)("core/editor"),{getEditedPostContent:v}=(0,i.useSelect)("core/editor"),[L,C]=(0,o.useState)(!1),y=()=>{E(e.clientId),v()&&g(),C(!1),function(e){s()({path:"/wp/v2/plugins"}).then((t=>{t.forEach((t=>{const n=t.plugin,a=t.status;n.slice(0,n.indexOf("/"))===n.slice(0,e.indexOf("/"))&&"active"===a&&setTimeout((()=>{window.location=window.location.href.split("#")[0]}),"1000")}))}))}(a)};return(0,o.useEffect)((()=>{C(!0)}),[]),f?(0,t.createElement)(p,{pluginName:c}):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.Modal,{__experimentalHideHeader:!0,show:L,onRequestClose:y,className:"am-faux-block-modal"},(0,t.createElement)("div",{className:"am-modal-header"},(0,t.createElement)("div",{className:"am-modal-title-wrap"},(0,t.createElement)("span",{className:"am-modal-icon"},d||(0,t.createElement)(u,null)),(0,t.createElement)("div",{className:"am-modal-title"},(0,t.createElement)("div",{className:"am-requires"},(0,l.__)("REQUIRES",h)),(0,t.createElement)("div",{className:"am-title"},(0,t.createElement)("h2",null,c),(0,t.createElement)("span",{className:"am-plugin-tag"},(0,l.__)("FREE",h)))))),(0,t.createElement)("div",{className:"am-modal-content-wrap"},(0,t.createElement)("div",{className:"am-modal-content"},(0,t.createElement)("p",null,w),(0,t.createElement)(r.Button,{className:"am-modal-cta-btn",onClick:()=>{const e=fauxData.nonce,t=fauxData.siteUrl,n=document.querySelector(".am-modal-cta-btn"),l=document.querySelector(".components-spinner"),o={action:"am_faux_install",nonce:e,plugin:a},r=new URL(t);r.search=new URLSearchParams(o).toString(),l.style="display: inline-block",fetch(r,{cache:"no-cache",headers:{"user-agent":"Faux Block","content-type":"application/json"},method:"POST"}).then((e=>{e.ok?(n.innerHTML="Installed and activated!",l.style="display: none",n.addEventListener("click",(function(e){y()}),!1)):n.innerHTML="There was a problem with the plugin install"}))},variant:"primary"},(0,t.createElement)(t.Fragment,null,(0,l.__)("Install",h),(0,t.createElement)(r.Spinner,null))))),(0,t.createElement)(r.Button,{icon:m,onClick:y,className:"am-modal-close"})))},save:function(){return(0,t.createElement)(t.Fragment,null)}})}();