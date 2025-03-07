(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2751:(e,t,i)=>{Promise.resolve().then(i.bind(i,3465))},3465:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var a=i(5155),r=i(2115),n=i(2596),s=i(9688);function o(e){let{className:t,...i}=e;return(0,a.jsx)("div",{"data-slot":"card",className:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,s.QP)((0,n.$)(t))}("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...i})}var l=i(2243),c=i(760),d=i(5585);let u=[{id:1,header:"Start of Conversation",speaker:"Sophie",text:"Hi, Sophie from Bright Smile Clinic. How can I assist you today?",timestamp:0,isAgent:!0},{id:3,header:"Appointment Inquiry",speaker:"Steve",text:"Hey Sophie. I've had a bad toothache for a couple of days. Can I come in tomorrow around 2 to get it checked?",timestamp:3,isAgent:!1},{id:6,header:"Checking Availability",speaker:"Sophie",text:"Let me check the availability for tomorrow at 2 p.m. One moment. Unfortunately, the 2 p.m. slot tomorrow is already booked. How about I check for other times available tomorrow? Would you like to try 3 p.m. or perhaps a different time?",timestamp:9,isAgent:!0},{id:10,header:"Confirmation",speaker:"Steve",text:"3 p.m. sounds good. Anytime in the afternoon works.",timestamp:24,isAgent:!1},{id:12,header:"Appointment Set",speaker:"Sophie",text:"Great news! The 3 p.m. slot tomorrow is available. Can I get your name to book that appointment?",timestamp:28,isAgent:!0},{id:15,header:"Name Confirmation",speaker:"Steve",text:"Awesome. It's Steve.",timestamp:34,isAgent:!1},{id:17,header:"Appointment Confirmation",speaker:"Sophie",text:"Let me confirm your appointment for tomorrow at 3 p.m. Just a minute. Your appointment is all set for tomorrow at 3 p.m. for a toothache checkup. You'll get a confirmation email shortly.",timestamp:36,isAgent:!0},{id:20,header:"Payment Inquiry",speaker:"Steve",text:"Nice. Thanks. Quick question. What kind of payment methods do y'all take there?",timestamp:47,isAgent:!1},{id:24,header:"Payment Methods",speaker:"Sophie",text:"We accept major credit cards, pay with cash, or use care credit financing.",timestamp:51,isAgent:!0},{id:25,header:"Insurance Inquiry",speaker:"Steve",text:"Do you take Delta Dental Insurance?",timestamp:56,isAgent:!1},{id:26,header:"Insurance Confirmation",speaker:"Sophie",text:"Yes, we accept Delta Dental Insurance along with other major insurance providers. If you want to verify your specific plan, feel free to give us a call.",timestamp:59,isAgent:!0},{id:27,header:"Parking Inquiry",speaker:"Steve",text:"Perfect. And, um, what's the deal with parking?",timestamp:69,isAgent:!1},{id:28,header:"Parking Details",speaker:"Sophie",text:"Parking is pretty convenient. There's a lot just a block away, and street parking is also available.",timestamp:71,isAgent:!0},{id:29,header:"Closing the Conversation",speaker:"Steve",text:"Great. Thanks. That's all I needed. See you later.",timestamp:77,isAgent:!1},{id:30,header:"Response",speaker:"Sophie",text:"You're welcome. Looking forward to seeing you tomorrow.",timestamp:81,isAgent:!0}].map((e,t,i)=>{let a=Math.max(e.text.split(/\s+/).length/190*60,1);return{...e,duration:a,timestamp:e.timestamp+0,formattedTimestamp:new Date((e.timestamp+0)*1e3).toISOString().substr(11,8)}}),m={duration:1,ease:[.32,.72,0,1],type:"spring",stiffness:100,damping:20},p=e=>{let{step:t}=e,i={volume:(0,a.jsx)("svg",{className:"w-10 h-10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"})}),unavailable:(0,a.jsx)("svg",{className:"w-10 h-10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),pickup:(0,a.jsx)("svg",{className:"w-10 h-10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})};return(0,a.jsxs)(l.P.div,{className:"relative w-24 h-24 mx-auto",animate:"volume"===t?{scale:[1,1.05,1],transition:{repeat:1/0,duration:1.5}}:"unavailable"===t?{y:[0,-5,0],transition:{repeat:1/0,duration:1.5}}:"pickup"===t?{scale:[1,.95,1],transition:{repeat:1/0,duration:1.5}}:{},children:[(0,a.jsx)(l.P.div,{className:"absolute inset-0 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm flex items-center justify-center",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:(0,a.jsx)("div",{className:"text-green-500",children:i[t]})}),("volume"===t||"unavailable"===t)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.P.div,{className:"absolute inset-0 border-2 border-green-500/20 rounded-full",initial:{scale:1,opacity:0},animate:{scale:1.5,opacity:1},transition:{repeat:1/0,duration:1.5,ease:"easeOut"}}),(0,a.jsx)(l.P.div,{className:"absolute inset-0 border-2 border-green-500/10 rounded-full",initial:{scale:1,opacity:0},animate:{scale:2,opacity:1},transition:{repeat:1/0,duration:1.5,delay:.5,ease:"easeOut"}})]})]})},h=e=>{let{text:t,onComplete:i,step:r}=e;return(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},onAnimationComplete:i,className:"absolute inset-0 flex flex-col items-center justify-center gap-8 p-8",children:[(0,a.jsx)(p,{step:r}),(0,a.jsxs)(l.P.div,{className:"flex flex-col items-center gap-4 text-center pt-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,a.jsx)("h2",{className:"text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60",children:t}),(0,a.jsxs)("p",{className:"text-white/60 max-w-md text-center text-sm",children:["volume"===r&&"Make sure your audio is enabled for the best experience.","unavailable"===r&&"Sophie, our AI assistant, will be with you shortly.","pickup"===r&&"Connecting you with Sophie for assistance..."]})]})]})},x=e=>{let{currentSpeaker:t,isComplete:i}=e;return(0,a.jsx)(c.N,{children:!i&&(0,a.jsx)(l.P.div,{className:"h-16 bg-gradient-to-t from-black/20 to-transparent",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:20},transition:{duration:.5},children:(0,a.jsx)("div",{className:" flex items-center justify-center p-4",children:(0,a.jsx)(l.P.div,{className:"flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm ".concat(t?"bg-green-500/10 border border-green-500/20":"bg-white/5 border border-white/10"),initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:10},children:t?(0,a.jsxs)(a.Fragment,{children:[t.isAgent?(0,a.jsx)("svg",{className:"w-5 h-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})}):(0,a.jsx)("svg",{className:"w-5 h-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),(0,a.jsx)("span",{className:"text-sm font-medium text-green-500",children:t.isAgent?"Sophie (Agent) Speaking...":"Customer Speaking..."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{className:"w-5 h-5 text-white/20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),(0,a.jsx)("span",{className:"text-sm font-medium text-white/40",children:"Conversation Complete"})]})},(null==t?void 0:t.isAgent.toString())||"complete")})})})},v=(e,t)=>{if(!e.updates)return e.value;let i=[...e.updates].reverse().find(e=>t>=e.timestamp);return i?i.value:e.value},f=e=>{let{action:t,isComplete:i,currentTime:n}=e,s=v(t,n),[o,d]=(0,r.useState)({previousValue:s,hasUpdated:!1});return(0,r.useEffect)(()=>{if(s!==o.previousValue){d({previousValue:s,hasUpdated:!0});let e=setTimeout(()=>{d(e=>({...e,hasUpdated:!1}))},2e3);return()=>clearTimeout(e)}},[s]),(0,a.jsxs)(l.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:"relative mb-2 ".concat("bg-green-400/10 border-green-500/20"," \n                       border backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4\n                       transition-all duration-500 ease-in-out"),children:[(0,a.jsx)(c.N,{children:o.hasUpdated&&(0,a.jsx)(l.P.div,{initial:{opacity:.5},animate:{opacity:0},exit:{opacity:0},transition:{duration:1.5,ease:"easeOut"},className:"absolute inset-0 bg-green-500/20 rounded-2xl pointer-events-none"})}),(0,a.jsx)("div",{className:"w-10 h-10 rounded-xl ".concat("bg-green-500/20 text-green-500"," flex items-center justify-center transition-all duration-500 ease-in-out"),children:t.icon}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"text-sm",children:t.title}),(0,a.jsx)(l.P.div,{className:"font-medium",animate:o.hasUpdated?{scale:[1,1.02,1],transition:{duration:.3}}:{},children:s})]}),(0,a.jsx)(c.N,{children:o.hasUpdated&&(0,a.jsx)(l.P.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:"absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1",children:(0,a.jsx)("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})})]})},g=[{type:"booking",icon:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),title:"Appointment Request",value:"Tomorrow at 2:00 PM - Toothache",timestamp:8,updates:[{value:"Tomorrow at 2:00 PM - Toothache (Requested)",timestamp:8},{value:"Tomorrow at 3:00 PM - Toothache (Suggested)",timestamp:20},{value:"Tomorrow at 3:00 PM - Toothache (Confirmed)",timestamp:40}]},{type:"time",icon:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Appointment Confirmed",value:"Tomorrow at 3:00 PM",timestamp:41},{type:"insurance",icon:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),title:"Insurance",value:"Delta Dental Accepted",timestamp:60},{type:"email",icon:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),title:"Confirmation",value:"Email Confirmation Sent",timestamp:45},{type:"parking",icon:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})}),title:"Parking Available",value:"Lot & Street Parking",timestamp:70}],y=e=>{let{isAgent:t,isComplete:i}=e;return(0,a.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center ".concat("bg-green-500/10 border-green-500/20 text-green-500"," border\n                        transition-all duration-500 ease-in-out"),children:t?(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})}):(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})},j=e=>{let{isIntro:t,onSkip:i,isPlaying:r,onPlayPause:n,isComplete:s}=e;return(0,a.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"absolute ".concat(t?"top-4 right-4":"bottom-20 lg:bottom-4 left-4"," flex items-center gap-3 z-50 border-2 border-green-500/40 rounded-full"),children:t?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("div",{className:"flex gap-3",children:(0,a.jsxs)("button",{onClick:i,className:"px-4 py-2 rounded-full ".concat("bg-green-500/10 border-green-500/20 text-green-500 hover:bg-green-500/20"," \n                                 backdrop-blur-sm text-sm font-medium \n                                 transition-all duration-500 ease-in-out \n                                 flex items-center gap-2"),children:[(0,a.jsx)("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"})}),"Skip to End"]})})})},b=e=>{let{text:t,speed:i=32,onComplete:n,className:s=""}=e,[o,l]=(0,r.useState)(""),[c,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e;let a=0;l(""),d(!1);let r=()=>{a<t.length?(l(t.slice(0,a+1)),a++,e=setTimeout(r,i)):(d(!0),setTimeout(()=>null==n?void 0:n(),1e3))};return e=setTimeout(r,i),()=>{clearTimeout(e)}},[t,i,n]),(0,a.jsxs)("p",{className:s||"",children:[o,!c&&(0,a.jsx)("span",{className:"animate-pulse ml-0.5 opacity-70",children:"|"})]})},k=e=>{let[t,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let a=window.matchMedia(e);a.matches!==t&&i(a.matches);let r=()=>i(a.matches);return a.addEventListener("change",r),()=>a.removeEventListener("change",r)},[t,e]),t};function w(){var e,t,i,n,s,p,v,w,N,A;let[S,C]=(0,r.useState)([]),[P,L]=(0,r.useState)(!1),[T,M]=(0,r.useState)(!1),[I,z]=(0,r.useState)(0),E=(0,r.useRef)(null),W=(0,r.useRef)(null),B=(0,r.useRef)(null),[H,D]=(0,r.useState)(!1),[V,_]=(0,r.useState)(!1),[F,q]=(0,r.useState)(null),[O,R]=(0,r.useState)("initial"),[U,Y]=(0,r.useState)(!1),[G,Q]=(0,r.useState)(!1),J=(0,r.useRef)(null),$=k("(min-width: 768px)"),K=()=>{if(W.current){let e=W.current.currentTime;z(e),e>=u[u.length-1].timestamp+u[u.length-1].duration&&!V&&_(!0),C(u.filter(t=>t.timestamp<=e).map(e=>e.id));let t=u.find(t=>{let i=t.timestamp+t.duration;return e>=t.timestamp&&e<=i}),i=u.find(t=>e<t.timestamp);if(t)q({isAgent:t.isAgent,startTime:t.timestamp,endTime:t.timestamp+t.duration}),D(t.isAgent);else if(i&&e<i.timestamp){let t=u.find(t=>t.timestamp<=e);t&&(q({isAgent:t.isAgent,startTime:t.timestamp,endTime:t.timestamp+t.duration}),D(t.isAgent))}else e>=u[u.length-1].timestamp+u[u.length-1].duration&&(q(null),D(!1));e<W.current.duration?B.current=requestAnimationFrame(K):(L(!0),M(!1))}};(0,r.useEffect)(()=>{if(W.current){let e=W.current,t=()=>{M(!0),B.current=requestAnimationFrame(K)},i=()=>{M(!1),B.current&&cancelAnimationFrame(B.current)},a=()=>{M(!1),L(!0),B.current&&cancelAnimationFrame(B.current)};return e.addEventListener("play",t),e.addEventListener("pause",i),e.addEventListener("ended",a),()=>{e.removeEventListener("play",t),e.removeEventListener("pause",i),e.removeEventListener("ended",a),B.current&&cancelAnimationFrame(B.current)}}},[]),(0,r.useEffect)(()=>{if(E.current){let e=E.current;e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}},[S]);let X=()=>{if(!W.current)return 0;let e=W.current.currentTime;return u.findIndex(t=>t.timestamp<=e+.5&&(!u[u.findIndex(e=>e.id===t.id)+1]||u[u.findIndex(e=>e.id===t.id)+1].timestamp>e+.5))},Z=()=>{let e=X();return{previousPrevious:e>1?u[e-2]:null,previous:e>0?u[e-1]:null,current:u[e],upcoming:e<u.length-1?u[e+1]:null}};(0,r.useEffect)(()=>((async()=>{J.current&&(J.current.loop=!0,J.current.play()),await new Promise(e=>setTimeout(e,500)),R("volume"),await new Promise(e=>setTimeout(e,2e3)),R("unavailable"),await new Promise(e=>setTimeout(e,2e3)),R("pickup"),await new Promise(e=>setTimeout(e,2e3)),R("transcript"),await new Promise(e=>setTimeout(e,300)),Q(!0),await new Promise(e=>setTimeout(e,200)),Y(!0),J.current&&(J.current.pause(),J.current.currentTime=0),await new Promise(e=>setTimeout(e,0)),W.current&&(W.current.play(),M(!0))})(),()=>{J.current&&(J.current.pause(),J.current.currentTime=0)}),[]);let ee=()=>{let e=Date.now()+1e3,t={startVelocity:30,spread:560,ticks:60,zIndex:9999},i=(e,t)=>Math.random()*(t-e)+e,a=setInterval(()=>{let r=e-Date.now();if(r<=0)return clearInterval(a);let n=r/1e3*60;(0,d.A)({...t,particleCount:n,origin:{x:i(.1,.3),y:Math.random()-.2}}),(0,d.A)({...t,particleCount:n,origin:{x:i(.7,.9),y:Math.random()-.2}})},250)};return(0,r.useEffect)(()=>{P&&!T&&ee()},[P,T]),(0,a.jsx)("div",{className:"w-full h-screen flex items-center justify-center bg-[#09090b]",children:(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.8,ease:[.19,1,.22,1],staggerChildren:.1},className:"relative w-full h-full flex items-center justify-center m-4",children:[(0,a.jsxs)(o,{className:"\n                        w-full \n                        h-full\n                        relative \n                        overflow-hidden\n                        shadow-2xl \n                        rounded-none\n                        transition-all\n                        duration-700 \n                        ease-in-out\n                        text-white\n                        bg-clip-padding\n                        backdrop-filter\n                        backdrop-blur-xl\n                        bg-[#09090b]\n                        border-0\n                        shadow-none\n                        before:absolute\n                        before:inset-0\n                        before:animate-pulse\n                        before:bg-gradient-to-r\n                        before:from-transparent\n                        ".concat("before:via-green-600/10","\n                        before:to-transparent\n                        before:blur-3xl\n                        before:-z-10\n                        [transition:border-color_0.5s_ease,background-color_0.5s_ease,transform_0.5s_ease]\n                    "),children:[(0,a.jsx)("div",{className:"relative z-[2] w-full h-full",children:(0,a.jsxs)(c.N,{mode:"wait",children:[("volume"===O||"unavailable"===O||"pickup"===O)&&(0,a.jsx)(h,{step:O,text:"volume"===O?"Starting demo... Please turn up your volume.":"unavailable"===O?"Front desk is currently unavailable or call is after hours.":"Sophie is picking up your call...",onComplete:()=>{}},O),"transcript"===O&&U&&(0,a.jsxs)(l.P.div,{className:"lg:flex h-full rounded-3xl overflow-hidden bg-transparent z-[2] ",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:[(0,a.jsx)(l.P.div,{className:"flex-1 p-8 pb-4 relative z-10 flex flex-col h-[40vh] lg:h-full justify-center items-center",initial:{x:0,opacity:0},animate:{x:$?(S.length>1&&u[1].timestamp,"0%"):0,width:($&&S.length>1&&u[1].timestamp,"100%"),opacity:1},transition:{duration:.5,type:"spring",stiffness:100,damping:20},children:(0,a.jsxs)("div",{className:"flex flex-col w-full max-w-3xl lg:max-h-[50vh] h-full scrollbar-thin scrollbar-thumb-green-500/20 scrollbar-track-transparent hover:scrollbar-thumb-green-500/40",children:[(0,a.jsx)("div",{className:"flex items-center justify-between mb-6",children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:"h-3 w-3 rounded-full ".concat("bg-green-500"," \n                                                        animate-pulse transition-colors duration-500 ease-in-out")}),(0,a.jsx)("h2",{className:"text-xl font-medium underline underline-offset-4 decoration-green-500",children:"Demo: AI Agent Handling a Call"})]})}),(0,a.jsxs)("div",{ref:E,className:"flex-1 flex flex-col space-y-6 pr-4 overflow-y-auto max-h-[calc(100vh-200px)]",style:{scrollbarWidth:"thin",scrollbarColor:"rgba(255, 255, 255, 0.1) transparent"},children:[(0,a.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:.5,y:0},exit:{opacity:0,y:-10,transition:{duration:.4}},transition:m,className:"space-y-0.5 hidden lg:block md:block",children:Z().previousPrevious&&(0,a.jsxs)("div",{className:"flex items-start gap-3 overflow-y-scroll",children:[(0,a.jsx)(y,{isAgent:(null===(e=Z().previousPrevious)||void 0===e?void 0:e.isAgent)||!1,isComplete:P}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"text-lg flex items-center gap-2 opacity-50",children:(0,a.jsx)("span",{children:(null===(t=Z().previousPrevious)||void 0===t?void 0:t.isAgent)?"Sophie (Agent)":"Customer"})}),(0,a.jsx)("div",{className:"text-sm text-gray-400 opacity-50 ".concat((null===(i=Z().previousPrevious)||void 0===i?void 0:i.isAgent)?"italic":""),children:(null===(n=Z().previousPrevious)||void 0===n?void 0:n.text)||""})]})]})},"prev-prev-".concat(null===(s=Z().previousPrevious)||void 0===s?void 0:s.id)),(0,a.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:.8,y:0},exit:{opacity:0,y:-10,transition:{duration:.4}},transition:m,className:"space-y-0.5",children:Z().previous&&(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[(0,a.jsx)(y,{isAgent:(null===(p=Z().previous)||void 0===p?void 0:p.isAgent)||!1,isComplete:P}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"text-lg flex items-center gap-2",children:(0,a.jsx)("span",{children:(null===(v=Z().previous)||void 0===v?void 0:v.isAgent)?"Sophie (Agent)":"Customer"})}),(0,a.jsx)("div",{className:"text-sm text-gray-400 ".concat((null===(w=Z().previous)||void 0===w?void 0:w.isAgent)?"italic":""),children:(null===(N=Z().previous)||void 0===N?void 0:N.text)||""})]})]})},"prev-".concat(null===(A=Z().previous)||void 0===A?void 0:A.id)),Z().current&&(0,a.jsx)(l.P.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,y:-15,transition:{duration:.3}},transition:m,className:"space-y-1",children:(0,a.jsxs)("div",{className:"flex items-start gap-3",children:[(0,a.jsx)(y,{isAgent:Z().current.isAgent,isComplete:P}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"text-lg flex items-center gap-2",children:(0,a.jsx)("span",{children:Z().current.isAgent?"Sophie (Agent)":"Customer"})}),(0,a.jsx)("div",{className:"text-lg font-medium ".concat(Z().current.isAgent?"italic":""),children:(0,a.jsx)(b,{text:Z().current.text,speed:32,className:"whitespace-pre-line leading-relaxed"})})]})]})},"current-".concat(Z().current.id))]})]})}),(0,a.jsx)(c.N,{children:S.length>1&&I>=u[1].timestamp+4&&(0,a.jsx)(l.P.div,{className:"h-[65vh] lg:h-full lg:w-[600px] p-8 flex flex-col lg:border-l border-white/10 pb-0 mb-0",initial:{x:600,opacity:0},animate:{x:0,opacity:1},exit:{x:600,opacity:0},transition:{type:"spring",stiffness:100,damping:20},children:(0,a.jsx)("div",{className:"flex flex-col max-w-3xl w-full h-full",children:(0,a.jsx)("div",{className:"flex-1 flex lg:items-center",children:(0,a.jsxs)("div",{className:"w-full max-h-[60%] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500/20 scrollbar-track-transparent hover:scrollbar-thumb-green-500/40",children:[(0,a.jsx)("h2",{className:"text-xl font-medium underline underline-offset-4 decoration-green-500 mb-4",children:"Call Highlights"}),(0,a.jsx)("div",{className:"flex flex-col gap-2",children:g.map(e=>I>=e.timestamp&&(0,a.jsx)(f,{action:e,isComplete:P,currentTime:I},e.type))})]})})})})}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 md:left-0 hidden lg:block",children:(0,a.jsx)(x,{currentSpeaker:F,isComplete:P})})]},"transcript")]})}),(0,a.jsx)(j,{isIntro:"transcript"!==O,onSkip:()=>{J.current&&(J.current.pause(),J.current.currentTime=0),R("transcript"),Q(!0),Y(!0),setTimeout(()=>{if(W.current){C(u.map(e=>e.id));let e=W.current.duration;W.current.currentTime=e,z(e),L(!0),M(!1),ee()}},100)},isPlaying:T,onPlayPause:()=>{W.current&&(T?W.current.pause():(W.current.currentTime>=W.current.duration&&(W.current.currentTime=0,C([]),z(0),L(!1)),W.current.play()))},isComplete:P})]}),(0,a.jsx)("audio",{ref:W,className:"hidden",preload:"auto",children:(0,a.jsx)("source",{src:"./audio/Demo_Voice.mp3",type:"audio/mpeg"})}),(0,a.jsx)("audio",{ref:J,className:"hidden",preload:"auto",children:(0,a.jsx)("source",{src:"./audio/PhoneDialSound.mp3",type:"audio/mpeg"})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[316,441,684,358],()=>t(2751)),_N_E=e.O()}]);