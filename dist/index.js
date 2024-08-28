(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AudioPlayer:()=>P,Button:()=>b,CountDown:()=>a,FlexBox:()=>l,InfiniteScroll:()=>C,Modal:()=>m,PasswordInput:()=>z,PreviewVideo:()=>I,ProgressBar:()=>S,Tabs:()=>M,Toast:()=>E,ToastProvider:()=>F,Uploader:()=>w});const n=require("react");var r=e.n(n);const l=e=>{let{children:t,onClick:n,style:l,className:o}=e;return r().createElement("div",{className:o,onClick:n,style:{display:"flex",justifyContent:"center",alignItems:"center",...l}},t)};let o,i;const a=e=>{let{onClick:t,style:l,status:a,className:s}=e;const[c,d]=(0,n.useState)(60),[C,m]=(0,n.useState)(0);return(0,n.useEffect)((()=>()=>{clearInterval(i)}),[]),(0,n.useEffect)((()=>{a&&1===C?(d(60),i&&clearInterval(i),o=(new Date).getTime(),i=setInterval((()=>{let e=(new Date).getTime(),t=Math.floor((e-o)/1e3);t>60&&(clearInterval(i),m(2)),d(60-t)}),1e3)):2!==C&&0!==C&&a||(clearInterval(i),d(60))}),[a,C]),r().createElement("div",{className:s,style:{backgroundColor:1!==C?"#7A57EB":"#E3E3E3",color:"#FFFFFF",...l},onClick:()=>{1!==C&&t&&(t(),m(1))}},0===C?"获取验证码":1===C?c+"s后重试":2===C?"重新获取":void 0)},s=()=>Math.floor(9e7*Math.random())+1e7;function c(e){return"function"==typeof e}const d=(e,t)=>{let n;return function(){for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];clearTimeout(n),n=setTimeout((()=>e.apply(void 0,l)),t)}},C=e=>{let{children:t,hasMore:l,loadMore:o,loading:i,end:a,threshold:s=0,total:c,dataLength:C}=e;const[m,u]=(0,n.useState)(!1),g=(0,n.useRef)(0),f=(0,n.useRef)(0),y=d((()=>{const e=(null===(t=document)||void 0===t||null===(t=t.documentElement)||void 0===t?void 0:t.scrollTop)||(null===(n=document)||void 0===n||null===(n=n.body)||void 0===n?void 0:n.scrollTop)||0;var t,n;g.current=e,document.documentElement.scrollHeight-(document.documentElement.scrollTop+document.body.scrollTop)-document.documentElement.clientHeight<=s&&e>f.current&&l&&(u(!0),setTimeout((()=>{u(!1),o&&o()}),500))}),200);return(0,n.useEffect)((()=>(window.addEventListener("scroll",y),()=>{window.removeEventListener("scroll",y)})),[l,o,s]),(0,n.useEffect)((()=>{f.current=g.current}),[C]),r().createElement("div",null,t,r().createElement("style",null,"\n                    @keyframes loading {\n                      0% { transform: rotate(0deg); }\n                      25% { transform: rotate(-3deg); }\n                      50% { transform: rotate(3deg); }\n                      75% { transform: rotate(-3deg); }\n                      100% { transform: rotate(0deg); }\n                    }\n                "),l&&m&&r().createElement("div",{style:{paddingBottom:"1rem"}},i||r().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r().createElement("div",{style:{fontSize:"0.75rem",color:"#b3b3b3",margin:"0.5rem",animation:"loading 1s infinite"}},"加载中..."))),C===c&&r().createElement("div",{style:{paddingBottom:"1rem"}},a||r().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r().createElement("div",{style:{fontSize:"0.75rem",color:"#b3b3b3",margin:"0.5rem"}},"没有更多了"))))},m=e=>{let{children:t,openModal:n,style:l,position:o="center",onClose:i}=e;function a(){return"top"===o?{justifyContent:"center",alignItems:"flex-start"}:"right"===o?{justifyContent:"flex-end",alignItems:"center"}:"bottom"===o?{justifyContent:"center",alignItems:"flex-end"}:"left"===o?{justifyContent:"flex-start",alignItems:"center"}:"center"===o?{justifyContent:"center",alignItems:"center"}:void 0}return r().createElement("div",null,r().createElement("style",null,"\n\t\t\t\t    @keyframes initAnimation {\n\t\t\t\t      0%   { opacity:0}\n\t\t\t\t      20%  { opacity:0.1}\n\t\t\t\t      40%  { opacity:0.2}\n\t\t\t\t      60%  { opacity:0.3}\n\t\t\t\t      80%  { opacity:0.4}\n\t\t\t\t      100% { opacity:0.5}\n\t\t\t\t    }\n\t\t\t\t "),n&&r().createElement("div",{onClick:e=>{i&&i(),e.stopPropagation()},style:{background:"rgba(0,0,0,0.5)",width:"100%",zIndex:1300,position:"fixed",inset:0,display:"flex",justifyContent:a().justifyContent,alignItems:a().alignItems,animation:"initAnimation 0.25s ease",...l}},t))},u=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256"},r().createElement("path",{d:"M0 0 C2.44 2.19 2.44 2.19 4 5 C3.83 10.93 2.23 13.52 -1.92 17.65 C-2.44 18.17 -2.96 18.7 -3.49 19.24 C-5.22 20.98 -6.97 22.7 -8.72 24.42 C-9.97 25.67 -11.22 26.92 -12.46 28.17 C-15.84 31.56 -19.24 34.92 -22.65 38.29 C-26.21 41.81 -29.75 45.35 -33.29 48.89 C-39.24 54.83 -45.2 60.76 -51.17 66.68 C-59.59 75.03 -67.99 83.4 -76.39 91.78 C-82.91 98.28 -89.44 104.78 -95.96 111.27 C-97.01 112.32 -97.01 112.32 -98.08 113.38 C-102.11 117.39 -106.13 121.39 -110.17 125.39 C-111.39 126.6 -112.61 127.81 -113.83 129.03 C-115.49 130.68 -117.16 132.33 -118.82 133.99 C-119.76 134.91 -120.69 135.84 -121.65 136.79 C-124.75 139.71 -126.41 140.92 -130.69 141.5 C-140.42 141.16 -148.4 129.89 -154.87 123.4 C-155.99 122.27 -157.12 121.15 -158.25 120.02 C-160.6 117.68 -162.94 115.33 -165.28 112.98 C-168.28 109.97 -171.29 106.97 -174.3 103.97 C-176.62 101.65 -178.94 99.33 -181.26 97.01 C-182.37 95.9 -183.48 94.79 -184.59 93.68 C-186.14 92.14 -187.68 90.59 -189.22 89.04 C-190.1 88.16 -190.97 87.28 -191.88 86.38 C-194.65 83.27 -196.03 81.38 -195.94 77.19 C-194.37 71.87 -191.6 68.07 -187 65 C-179.82 63.78 -175.58 67.37 -169.98 71.31 C-169.04 71.95 -168.1 72.59 -167.13 73.25 C-164.14 75.3 -161.16 77.37 -158.19 79.44 C-156.17 80.83 -154.14 82.22 -152.12 83.6 C-149.28 85.55 -146.44 87.5 -143.6 89.47 C-142.35 90.34 -142.35 90.34 -141.06 91.22 C-140.32 91.74 -139.59 92.25 -138.83 92.78 C-135.09 95.28 -132.52 95.44 -128 95 C-125.68 93.46 -123.92 92.08 -121.94 90.19 C-120.8 89.17 -119.67 88.15 -118.53 87.14 C-117.95 86.61 -117.37 86.09 -116.77 85.55 C-113.94 83.07 -110.98 80.79 -108 78.5 C-103.41 74.93 -98.92 71.28 -94.5 67.5 C-89.6 63.31 -84.6 59.29 -79.51 55.34 C-74.77 51.64 -70.13 47.84 -65.5 44 C-60.31 39.7 -55.08 35.45 -49.75 31.31 C-44.6 27.3 -39.58 23.16 -34.62 18.92 C-30.61 15.5 -26.55 12.18 -22.42 8.92 C-20.7 7.55 -18.99 6.17 -17.3 4.77 C-16.42 4.04 -15.53 3.31 -14.62 2.56 C-13.83 1.9 -13.04 1.25 -12.23 0.57 C-7.78 -2.56 -4.91 -2.25 0 0 Z ",fill:"#FFFFFF",transform:"translate(224,51)"}))},g=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256"},r().createElement("path",{d:"M0 0 C3.91 0.79 6.12 3.4 8.8 6.21 C9.41 6.82 10.03 7.44 10.66 8.07 C12.69 10.1 14.68 12.15 16.67 14.21 C18.07 15.62 19.47 17.03 20.87 18.44 C24.55 22.16 28.21 25.89 31.86 29.63 C35.59 33.44 39.35 37.24 43.1 41.03 C50.46 48.47 57.79 55.94 65.11 63.43 C69.27 61.8 71.99 58.75 75.03 55.6 C75.62 55 76.2 54.41 76.8 53.79 C78.06 52.5 79.32 51.21 80.58 49.92 C82.58 47.87 84.58 45.83 86.59 43.79 C92.29 38 97.99 32.21 103.66 26.38 C107.13 22.81 110.62 19.26 114.12 15.73 C115.45 14.38 116.77 13.02 118.09 11.66 C119.93 9.75 121.79 7.87 123.66 5.99 C124.2 5.43 124.73 4.86 125.28 4.27 C128.2 1.41 130.32 0.08 134.35 -0.02 C138.11 0.43 138.11 0.43 140.61 1.93 C142.69 5.39 142.86 8.53 142.11 12.43 C140.57 15.06 138.53 17.02 136.32 19.12 C135.4 20.04 135.4 20.04 134.46 20.98 C132.43 23 130.38 25 128.33 26.99 C126.91 28.39 125.5 29.79 124.09 31.19 C120.38 34.87 116.64 38.53 112.9 42.18 C109.09 45.91 105.3 49.67 101.5 53.42 C94.06 60.78 86.59 68.11 79.11 75.43 C80.73 79.59 83.79 82.32 86.93 85.37 C87.53 85.95 88.12 86.54 88.74 87.14 C90.03 88.4 91.32 89.67 92.62 90.93 C94.66 92.93 96.7 94.94 98.74 96.95 C104.53 102.66 110.33 108.37 116.15 114.05 C119.72 117.53 123.27 121.03 126.8 124.53 C128.15 125.87 129.51 127.19 130.87 128.51 C132.78 130.36 134.66 132.22 136.54 134.09 C137.39 134.9 137.39 134.9 138.26 135.73 C141.05 138.55 142.07 140.15 142.58 144.14 C142.11 147.43 142.11 147.43 140.04 150.36 C137.11 152.43 137.11 152.43 133.92 153.3 C123.79 150.98 114.63 138.08 107.32 130.73 C106.12 129.54 104.93 128.34 103.73 127.14 C100.61 124.02 97.5 120.9 94.39 117.77 C91.2 114.58 88.01 111.38 84.81 108.18 C78.58 101.93 72.34 95.68 66.11 89.43 C59.62 94.68 53.87 100.64 48.06 106.62 C44.92 109.83 41.77 113.02 38.62 116.21 C34.63 120.27 30.64 124.32 26.68 128.4 C23.46 131.71 20.22 135.01 16.97 138.28 C15.74 139.53 14.51 140.79 13.3 142.05 C11.59 143.82 9.87 145.55 8.14 147.29 C7.64 147.81 7.15 148.34 6.64 148.87 C3.82 151.64 1.76 152.75 -2.11 152.84 C-5.89 152.43 -5.89 152.43 -8.39 150.93 C-10.47 147.46 -10.64 144.32 -9.89 140.43 C-8.35 137.79 -6.31 135.83 -4.11 133.73 C-3.5 133.12 -2.88 132.5 -2.25 131.87 C-0.22 129.85 1.83 127.86 3.89 125.86 C5.3 124.46 6.71 123.06 8.13 121.66 C11.84 117.98 15.57 114.32 19.31 110.67 C23.13 106.94 26.92 103.18 30.71 99.43 C38.16 92.07 45.62 84.74 53.11 77.43 C49.38 72.97 45.54 68.71 41.41 64.63 C40.87 64.1 40.34 63.56 39.79 63.02 C38.64 61.87 37.5 60.73 36.35 59.59 C34.53 57.79 32.71 55.98 30.9 54.17 C27.06 50.33 23.21 46.5 19.36 42.68 C14.88 38.22 10.4 33.77 5.93 29.31 C4.15 27.53 2.36 25.75 0.57 23.97 C-0.53 22.88 -1.62 21.79 -2.71 20.7 C-3.21 20.21 -3.71 19.72 -4.22 19.21 C-9.75 13.68 -9.75 13.68 -10.27 9.05 C-9.57 2.27 -6.87 -0.21 0 0 Z ",fill:"#FFFFFF",transform:"translate(61.893035888671875,51.57469177246094)"}))},f=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256"},r().createElement("path",{d:"M0 0 C19.3 16.38 31.79 37.6 35.52 62.82 C36.45 77.48 36.23 91.83 31.52 105.82 C31.31 106.47 31.1 107.12 30.87 107.79 C27.75 117 23.42 125.04 17.52 132.82 C17.13 133.35 16.73 133.88 16.32 134.42 C1.12 154.29 -20.17 166.81 -44.72 171.43 C-71.81 174.24 -98.4 169.64 -120.17 152.48 C-123.79 149.44 -127.15 146.18 -130.48 142.82 C-131.2 142.1 -131.93 141.38 -132.68 140.65 C-151.16 121.3 -157.31 95.84 -156.76 69.8 C-155.81 44.27 -143.74 20.97 -125.24 3.74 C-90.86 -27.04 -36.25 -29.31 0 0 Z M-123.92 22.63 C-139.33 42.24 -144.92 65.17 -142.01 89.71 C-137.74 111.71 -125.96 130.61 -107.71 143.72 C-88.63 156.11 -66.06 161.33 -43.61 156.64 C-21.64 151.4 -2.71 139.08 9.52 119.82 C21.1 100.7 24.9 78.97 20.02 57.01 C17.85 48.33 13.93 40.56 9.52 32.82 C9.06 31.98 8.6 31.14 8.13 30.28 C0.93 18.34 -10.31 9.25 -22.48 2.82 C-23.35 2.34 -24.23 1.86 -25.14 1.37 C-58.68 -15.45 -99.77 -5.19 -123.92 22.63 Z ",fill:"#FFFFFF",transform:"translate(188.475830078125,52.181640625)"}),r().createElement("path",{d:"M0 0 C3.54 2.18 5.61 4.1 7 8 C7.06 11.03 7 13.92 6.81 16.94 C6.74 18.32 6.74 18.32 6.66 19.74 C6.46 23.16 6.23 26.58 6 30 C5.95 30.73 5.9 31.45 5.85 32.2 C5.53 37.12 5.18 42.03 4.81 46.94 C4.69 48.6 4.57 50.25 4.45 51.91 C4.29 54.27 4.1 56.64 3.91 59 C3.84 60.05 3.84 60.05 3.77 61.13 C3.36 66.03 2.19 69.66 0 74 C-2.49 76.06 -3.75 76.01 -7 75.94 C-10.83 74.74 -11.8 73.32 -14 70 C-14.7 67.04 -14.7 67.04 -14.98 63.76 C-15.15 61.93 -15.15 61.93 -15.32 60.06 C-15.47 58.11 -15.47 58.11 -15.62 56.12 C-15.74 54.78 -15.86 53.43 -15.98 52.08 C-16.22 49.36 -16.45 46.64 -16.68 43.91 C-16.97 40.35 -17.29 36.79 -17.63 33.22 C-17.82 31.21 -18 29.2 -18.19 27.19 C-18.27 26.28 -18.36 25.38 -18.44 24.45 C-19.74 9.54 -19.74 9.54 -17.38 4.62 C-12.23 -1.06 -7.2 -1.97 0 0 Z ",fill:"#FFFFFF",transform:"translate(134,76)"}),r().createElement("path",{d:"M0 0 C3.02 1.75 5.42 3.83 7 7 C7.4 11.19 7.24 13.53 5.31 17.31 C2.81 20.22 1.73 21.24 -2 22 C-7.24 22 -9.02 21.85 -13 18.38 C-15.33 14.44 -15.65 12.5 -15 8 C-11.95 1.3 -7.44 -1.57 0 0 Z ",fill:"#FFFFFF",transform:"translate(132,159)"}))},y=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256"},r().createElement("path",{d:"M0 0 C1.14 0.01 1.14 0.01 2.3 0.02 C30.58 0.61 55.46 14.76 74.76 34.58 C91.95 53.42 100.69 78.81 100.56 104.06 C100.56 105.21 100.55 106.35 100.55 107.53 C100.15 135.13 88.32 159.73 69.44 179.56 C47.17 201 19.32 209.07 -10.99 208.62 C-38.89 207.69 -63.47 193.74 -82.54 173.89 C-98.49 156.6 -107.7 132.68 -108.12 109.25 C-108.16 108.46 -108.2 107.67 -108.24 106.86 C-108.3 102.54 -108.15 100.83 -105.45 97.29 C-102.75 95.31 -102.75 95.31 -99.25 94.75 C-95.23 95.4 -93.57 96.41 -90.75 99.31 C-89.74 102.35 -89.41 105.19 -89.1 108.37 C-86.77 132.57 -77.76 154.3 -58.75 170.31 C-38.65 185.2 -15.7 192.29 9.34 188.81 C26.3 185.75 41.31 178.66 54.25 167.31 C54.94 166.72 55.63 166.13 56.34 165.52 C70.56 152.36 80.22 131.45 81.38 112.22 C82.28 86.29 74.94 63.71 57.25 44.31 C44.47 31.13 25.96 21.46 7.55 19.86 C6.71 19.79 5.87 19.72 5 19.64 C3.33 19.51 1.65 19.4 -0.03 19.31 C-5.85 18.87 -8.74 17.64 -12.75 13.31 C-13.34 9.12 -13.23 5.83 -10.75 2.31 C-7.07 -0.14 -4.26 -0.03 0 0 Z ",fill:"#FFFFFF",transform:"translate(131.75,23.6875)"}))},h=(0,n.createContext)({});let p=e=>{let{text:t,type:n,duration:r}=e},v=e=>{};const F=e=>{let{children:t}=e;const[l,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(""),[s,c]=(0,n.useState)("");return(0,n.useEffect)((()=>{"loading"===i&&function(){const e=document.getElementById("loading_icon");let t=0;!function n(){t=(t+6)%360,e&&(e.style.transform="rotate(".concat(t,"deg)"),window.requestAnimationFrame(n))}()}()}),[i]),p=e=>{let{text:t,type:n}=e;c(t),a(n),o(!0)},v=e=>{setTimeout((()=>{o(!1),c(""),a("")}),e||0)},r().createElement(h.Provider,{value:{}},l&&r().createElement("div",{onClick:e=>{v(2e3),e.stopPropagation()},style:{background:"rgba(0,0,0,0)",width:"100%",zIndex:1300,position:"fixed",inset:0,display:"flex",justifyContent:"center",alignItems:"center",opacity:l?1:0,transition:"opacity 1s ease-in-out"}},r().createElement("div",{style:{background:"rgba(0,0,0,0.6)",minWidth:150,minHeight:150,color:"#FFFFFF",fontSize:14,zIndex:1301,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:16,opacity:l?1:0,transition:"opacity 1s ease-in-out"}},"success"===i&&r().createElement(u,{style:{width:"2rem",height:"2rem"}}),"fail"===i&&r().createElement(g,{style:{width:"2rem",height:"2rem"}}),"warning"===i&&r().createElement(f,{style:{width:"2rem",height:"2rem"}}),"loading"===i&&r().createElement(y,{style:{width:"2rem",height:"2rem"}}),r().createElement("div",{style:{marginTop:8,maxWidth:120,textAlign:"center",wordBreak:"break-all",wordWrap:"break-word"}},s))),t)},E={show:e=>{let{text:t,type:n,duration:r}=e;p({text:t,type:n,duration:r}),"loading"===n?0!==r&&v(r||2e3):v(2e3)},close:e=>{v(e)}},w=function(e){let{children:t,onSuccess:l,style:o,id:i,accept:a="",capture:c=!1}=e;const[d,C]=(0,n.useState)(!1),m="video_"+s();return r().createElement("div",{style:{position:"relative"}},r().createElement("input",{accept:a,capture:c,id:i||m,type:"file",onChange:e=>{(e=>{C(!0);const t=e.target.files&&e.target.files[0];t&&l&&l(t)})(e),e.target.value=""},style:{visibility:"hidden",position:"absolute",width:"1rem"}}),r().createElement("div",{onClick:e=>{const t=document.getElementById(i||m);t&&(t.click(),e.stopPropagation())}},t))},b=e=>{let{children:t,onClick:n,type:l="",style:o,disabled:i=!1,isDebounce:a=!1,debounceDelay:s=500,className:C}=e;return r().createElement("button",{className:C,disabled:i,onClick:async()=>{n&&c(n)&&(a?d(n,500|s):n())},style:{display:"flex",justifyContent:"center",alignItems:"center",minWidth:"4rem",minHeight:"2rem",borderRadius:"0.25rem",fontSize:"0.875rem",outline:"none",..."default"!==l&&l?"primary"===l?{backgroundColor:"#1677ff",border:"1px solid #1677ff",color:"#FFFFFF"}:"success"===l?{backgroundColor:"#00b578",border:"1px solid #00b578",color:"#FFFFFF"}:"danger"===l?{backgroundColor:"#FF3141",border:"1px solid #FF3141",color:"#FFFFFF"}:"warning"===l?{backgroundColor:"#ff8f1f",border:"1px solid #ff8f1f",color:"#FFFFFF"}:void 0:{backgroundColor:"#fffffF",border:"1px solid #f0f0f0",color:"#000000"},...o}},t)},x=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 64 66",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},r().createElement("path",{d:"M0 0 C8.78 5.26 14.45 12.48 17.21 22.32 C18.32 33.23 16.95 42.05 9.96 50.64 C4.11 56.83 -2.76 60.85 -11.34 61.66 C-19.12 61.74 -25.11 61.46 -31.79 57.32 C-32.41 56.97 -33.03 56.62 -33.68 56.26 C-40.55 51.97 -44.69 45.04 -46.79 37.32 C-47.97 26.38 -46.68 16.96 -40.06 7.98 C-29.84 -3.29 -13.89 -6.58 0 0 Z M-19.79 18.32 C-22.36 22.19 -22.08 25.41 -22.04 29.89 C-22.05 30.67 -22.05 31.45 -22.06 32.25 C-22.23 36.76 -22.23 36.76 -19.79 40.32 C-15.51 40 -12.23 38.16 -8.54 36.07 C-7.48 35.49 -6.42 34.91 -5.34 34.31 C-2.57 32.54 -2.57 32.54 -1.93 29.59 C-1.86 28.47 -1.86 28.47 -1.79 27.32 C-3.85 26 -5.91 24.69 -7.98 23.39 C-8.84 22.83 -8.84 22.83 -9.73 22.26 C-13.06 20.17 -15.87 18.79 -19.79 18.32 Z ",fill:"#B2B2B2",transform:"translate(46.7890625,2.67578125)"}))},k=e=>{let{url:t,videoStyle:o,onClose:i,playIcon:a,autoPlay:c}=e;const[d,C]=(0,n.useState)(!!c&&!c),m=(0,n.useRef)(null),u=window.innerWidth,g=window.innerHeight,f="video_"+s(),y=()=>{const e=document.getElementById(f);e.addEventListener("ended",p),e.addEventListener("pause",h),e.play(),C(!1)},h=()=>{C(!0)},p=()=>{C(!0)};return r().createElement(l,{onClick:i,style:{position:"relative",width:u/1.125,maxHeight:g/1.25,height:g/1.125}},d?r().createElement("img",{style:{width:"2rem",height:"2rem",borderRadius:"2rem",position:"absolute",top:"50%",left:"50%",backgroundColor:"#FFFFFF",objectFit:"fill",marginLeft:"-1rem",marginTop:"-1rem",zIndex:1100},onClick:e=>{y(),e.stopPropagation()},src:a}):r().createElement("div",{onClick:e=>{y(),e.stopPropagation()}},r().createElement(x,{style:{width:"2rem",height:"2rem",borderRadius:"2rem",position:"absolute",top:"50%",left:"50%",backgroundColor:"#FFFFFF",objectFit:"fill",marginLeft:"-1rem",marginTop:"-1rem",zIndex:1100}})),r().createElement("video",{onClick:e=>{d?y():(document.getElementById(f).pause(),C(!0)),e.stopPropagation()},autoPlay:c,ref:m,id:f,style:{width:u/1.25,maxHeight:g/1.25,...o},src:t}))},I=e=>{let{url:t,videoStyle:o,children:i,playIcon:a,autoPlay:s=!1,className:c}=e;const[d,C]=(0,n.useState)(!1);function u(){C(!1)}return r().createElement(l,{className:c,onClick:()=>{t&&C(!0)}},r().createElement(m,{openModal:d,onClose:u,position:"center"},r().createElement(k,{onClose:u,playIcon:a,autoPlay:s,url:t,videoStyle:o})),i)},M=e=>{let{items:t,activeKey:l,onChange:o,defaultActiveKey:i,activeLineColor:a,containerStyle:d,itemStyle:C}=e;const[m,u]=(0,n.useState)(l||i||"");(0,n.useEffect)((()=>{o&&c(o)&&o(m)}),[m]);const g=(0,n.useMemo)((()=>s()),[t]);return r().createElement("div",{id:"tabs_"+g,style:{display:"flex",justifyContent:"center",alignItems:"center",width:"20.5rem",padding:"0.5rem 1rem",borderBottom:"1px solid #F3F3F3",backgroundColor:"#FFFFFF",...d}},t.length>0&&t.map(((e,t)=>r().createElement("div",{onClick:()=>{u(e.key)},style:{padding:"0.25rem 0",margin:"0 0.5rem",fontSize:"1rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",...C},key:t},e.label,r().createElement("div",{style:{width:"2rem",height:"0.15rem",marginTop:"0.25rem",backgroundColor:e.key===m?a||"#1677ff":"#FFFFFF",transition:"all 0.5s ease"}})))))},S=e=>{let{percent:t,barWidth:l,barHeight:o,barBgColor:i,trackBgColor:a}=e;const s=(0,n.useMemo)((()=>t<0?"0%":t>100?"100%":t+"%"),[t]);return r().createElement("div",{style:{background:i||"#eee",width:l||"100%",height:o||"16px",borderRadius:"0.5rem"}},r().createElement("div",{style:{background:a||"#1677ff",width:s,height:"100%",borderRadius:"0.5rem",transition:"width 0.5s ease"}}))},B=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:t,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},r().createElement("path",{d:"M384 810.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667L341.333333 256c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 512C426.666667 793.6 409.6 810.666667 384 810.666667z","p-id":"2304",fill:"#1677ff"}),r().createElement("path",{d:"M640 810.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667L597.333333 256c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 512C682.666667 793.6 665.6 810.666667 640 810.666667z","p-id":"2305",fill:"#1677ff"}))},T=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:{...t,display:"block",margin:"auto"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},r().createElement("path",{d:"M810.4 465.8 253.6 134.4c-6.8-4-13.8-6.4-21.8-6.4-21.8 0-39.6 18-39.6 40L192 168l0 688 0.2 0c0 22 17.8 40 39.6 40 8.2 0 15-2.8 22.4-6.8l556.2-331c13.2-11 21.6-27.6 21.6-46.2C832 493.4 823.6 477 810.4 465.8z","p-id":"1463",fill:"#1677ff"}))},L=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:{...t,display:"block",margin:"auto"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},r().createElement("path",{d:"M341.333333 483.541333l436.181334-290.773333a21.333333 21.333333 0 0 1 33.152 17.749333v602.965334a21.333333 21.333333 0 0 1-33.152 17.749333L341.333333 540.458667V810.666667a42.666667 42.666667 0 1 1-85.333333 0V213.333333a42.666667 42.666667 0 0 1 85.333333 0v270.208z","p-id":"7759",fill:"#1677ff"}))},j=e=>{let{style:t}=e;return r().createElement("svg",{version:"1.1",style:{...t,display:"block",margin:"auto"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},r().createElement("path",{d:"M682.666667 540.458667L246.485333 831.232A21.333333 21.333333 0 0 1 213.333333 813.482667V210.517333a21.333333 21.333333 0 0 1 33.152-17.749333L682.666667 483.541333V213.333333a42.666667 42.666667 0 0 1 85.333333 0v597.333334a42.666667 42.666667 0 0 1-85.333333 0v-270.208z","p-id":"7489",fill:"#1677ff"}))},P=e=>{let{url:t,playIcon:o,pauseIcon:i,forwardIcon:a,progressBarConfig:s,backwardIcon:c,timeTextStyle:d}=e;const[C,m]=(0,n.useState)(!1),u=(0,n.useRef)(null),[g,f]=(0,n.useState)(0),[y,h]=(0,n.useState)(0);(0,n.useEffect)((()=>{var e,t;C?null===(e=u.current)||void 0===e||e.play().catch((e=>{console.log("播放失败")})):null===(t=u.current)||void 0===t||t.pause()}),[C]),(0,n.useEffect)((()=>{if(u.current)return u.current.addEventListener("canplay",(()=>{var e;console.log("音频可以开始播放"),h((null===(e=u.current)||void 0===e?void 0:e.duration)||0)})),()=>{u.current.removeEventListener("canplay",(()=>{}))}}),[]);const p=(0,n.useMemo)((()=>{const e=Math.floor(y),t=Math.round(e%60);return Math.round((e-t)/60)+":"+(t<10?"0"+t.toString():t)}),[y]),v=(0,n.useMemo)((()=>0!==y?Math.round(g/y*100):0),[g,y]),F=(0,n.useMemo)((()=>{const e=Math.floor(g),t=Math.round(e%60);return Math.round((e-t)/60)+":"+(t<10?"0"+t.toString():t)}),[g]);return r().createElement(r().Fragment,null,r().createElement("audio",{ref:u,src:t,onTimeUpdate:()=>{f(u.current.currentTime)},onEnded:()=>m(!1)}),r().createElement(l,null,C?r().createElement(l,{onClick:()=>m(!1)},i||r().createElement(B,{style:{width:"2rem",height:"2rem"}})):r().createElement(l,{onClick:()=>m(!0)},o?i:r().createElement(T,{style:{width:"2rem",height:"2rem"}})),r().createElement(l,{onClick:()=>{m(!0),u.current&&(u.current.currentTime=Math.max(0,u.current.currentTime-2))}},c||r().createElement(L,{style:{width:"2rem",height:"2rem"}})),r().createElement(S,{trackBgColor:null==s?void 0:s.trackBgColor,barBgColor:null==s?void 0:s.barBgColor,barWidth:null==s?void 0:s.barWidth,barHeight:null==s?void 0:s.barHeight,percent:v}),r().createElement(l,{onClick:()=>{m(!0),u.current&&(u.current.currentTime=Math.min(u.current.duration,u.current.currentTime+2))}},a||r().createElement(j,{style:{width:"2rem",height:"2rem"}})),r().createElement("div",{style:{color:"#B3B3B3",...d}},p?F+"/"+p:"")))},z=e=>{let{maxLength:t=6,style:o,inputItemStyle:i,iconStyle:a,onChange:s,onSubmit:c,autoFocus:d=!0}=e;const[C,m]=(0,n.useState)({text:""}),[u,g]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=f.current,t=()=>g(!0),n=()=>g(!1);return e&&(e.addEventListener("focus",t),e.addEventListener("blur",n)),()=>{e&&(e.removeEventListener("focus",t),e.removeEventListener("blur",n))}}),[]);const f=(0,n.useRef)(null);return(0,n.useEffect)((()=>{C.text.length>t-1&&c&&c(C.text)}),[C.text]),r().createElement(l,{onClick:()=>{const e=f.current;e&&e.focus()},style:{background:"#FFFFFF",position:"relative",width:44*t,...o}},r().createElement("style",null,"\n                     @keyframes blink {\n                          0%, 100% {\n                            opacity: 1;\n                          }\n                          50% {\n                            opacity: 0;\n                          }\n                    }\n                "),(e=>{let t=[];for(let n=0;n<e;n++)t.push(n);return t})(t).map(((e,t)=>r().createElement("div",{key:t,style:{marginLeft:0===t?0:4,height:44,width:44,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F3F3F3",borderRadius:12,fontSize:16,...i}},t===C.text.length&&u&&r().createElement("div",{style:{display:"inline-block",width:1,height:16,backgroundColor:"#000000",animation:"blink 1s step-start infinite"}}),t<C.text.length?r().createElement("div",{style:{width:16,height:16,backgroundColor:"#000000",borderRadius:16,...a}}):null))),r().createElement("input",{style:{opacity:0,zIndex:-1,position:"absolute",top:8,left:"50%",width:1},ref:f,maxLength:t,autoFocus:d,type:"text",onChange:e=>{e.target.value.length<=t&&(m({text:e.target.value}),s&&s(e.target.value))}}))};module.exports=t})();