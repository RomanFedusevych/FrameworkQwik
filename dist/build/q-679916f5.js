import{A as x,H as c,v as o,_ as u,C as t,c as g,V as d,j as r,S as p,a as f}from"./q-82321233.js";const m=l=>{const[e]=x(),{value:a,scrollHeight:s}=l.target,n=a;e.text=n;const i=20;if(n.length===0)e.inputHeight=0,e.wasEmpty=!0;else if(e.wasEmpty)e.previousScrollHeight=s,e.wasEmpty=!1;else if(s<116){const h=s-e.previousScrollHeight;h>i/2?(e.previousScrollHeight=s,e.inputHeight+=i):h<-i/2&&s>36&&(e.previousScrollHeight=s,e.inputHeight-=i)}},y=()=>{const[l]=x();l.messages.push(l.text),l.text="",l.inputHeight=0},w=c(o(()=>u(()=>import("./q-077aed0e.js"),["build/q-077aed0e.js","build/q-82321233.js"]),"s_34gRLw47cIk")),v=c(o(()=>u(()=>import("./q-be617878.js"),["build/q-be617878.js","build/q-82321233.js"]),"s_y9rAjHn3AQo")),b=c(o(()=>u(()=>import("./q-a39a83e4.js"),["build/q-a39a83e4.js","build/q-82321233.js"]),"s_BQ0LWxqO78A")),H=()=>t("svg",null,{fill:"none",height:"26",viewBox:"0 0 26 26",width:"26",xmlns:"http://www.w3.org/2000/svg"},[t("rect",null,{fill:"#323232",height:"25",rx:"12.5",width:"25",x:"0.5",y:"0.5"},null,3,null),t("rect",null,{height:"25",rx:"12.5",stroke:"url(#paint0_linear_2090_10678)",width:"25",x:"0.5",y:"0.5"},null,3,null),t("path",null,{d:"M13 14.5C15.0711 14.5 16.75 12.8211 16.75 10.75C16.75 8.67893 15.0711 7 13 7C10.9289 7 9.25 8.67893 9.25 10.75C9.25 12.8211 10.9289 14.5 13 14.5ZM13 14.5C9.68629 14.5 7 16.5147 7 19M13 14.5C16.3137 14.5 19 16.5147 19 19",stroke:"url(#paint1_linear_2090_10678)","stroke-linecap":"round"},null,3,null),t("defs",null,null,[t("linearGradient",null,{gradientUnits:"userSpaceOnUse",id:"paint0_linear_2090_10678",x1:"13",x2:"13",y1:"0",y2:"26"},[t("stop",null,{"stop-color":"white"},null,3,null),t("stop",null,{offset:"1","stop-color":"white","stop-opacity":"0.2"},null,3,null)],3,null),t("linearGradient",null,{gradientUnits:"userSpaceOnUse",id:"paint1_linear_2090_10678",x1:"13",x2:"13",y1:"7",y2:"19"},[t("stop",null,{"stop-color":"white"},null,3,null),t("stop",null,{offset:"1","stop-color":"white","stop-opacity":"0.2"},null,3,null)],3,null)],3,null)],3,"6O_0"),E=l=>{g();const e=d({text:"",inputHeight:0,inputLength:21,previousScrollHeight:36,wasEmpty:!1,inputWidth:0,textWidth:0,messages:[]}),a=o(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_zBkfwgNxzZ4",[e]),s=o(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_89sXRjaBfqU",[e]);return t("div",{class:`${l.isChatOpen?"h-[347px]":"h-[0]"} transition-height duration-500 ease-in-out flex justify-center items-center custom-bg-border rounded-3xl w-[390px]`},null,t("div",{class:`${l.isChatOpen?"h-[344px]":"h-[0]"} transition-height duration-500 ease-in-out w-[388px] custom-bg-gradient flex-shrink-0 rounded-3xl shadow-custom-shadow`},null,t("div",null,{class:"flex justify-center items-center flex-col pb-2.5"},[t("div",{class:`${l.isChatOpen?"opacity-100":"opacity-0"} transition-opacity duration-100 ease-in-out min-h-[275px] w-full flex flex-col justify-end text-right px-[45px]`},null,e.messages.map((n,i)=>t("div",null,{class:"w-full h-full text-customColorForText justify-end flex gap-2 mb-[12px]"},[n,r(H,null,3,"6m_0")],1,i)),1,null),t("div",{class:`w-[310px] ${l.isChatOpen?"opacity-100":"opacity-0"} transition-opacity duration-100 ease-in-out flex justify-between px-3 items-end py-1.5 rounded-lg bg-gray-700 absolute right-[38px] bottom-[10px]`},{style:p(n=>({height:n.inputHeight+47}),[e])},[t("button",null,{class:"flex items-center justify-center max-w-[24px] h-[38px] rounded-xl"},r(v,null,3,"6m_1"),1,null),t("textarea",null,{class:"bg-customGray rounded-lg pt-1 pb-1 pl-2.5 pr-2.5 text-[#DEDEDE] text-base font-normal focus:outline-none custom-font-family custom-line-height resize-none",onInput$:a,style:p(n=>({height:n.inputHeight+36}),[e]),value:p(n=>n.text,[e])},null,3,null),t("button",null,{class:"flex items-center justify-center bg-customButtonColor min-w-[36px] h-[36px] rounded-xl",onClick$:s},e.text.length?r(b,null,3,"6m_3"):r(w,null,3,"6m_2"),1,null)],1,null)],1,null),1,null),1,"6m_4")},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_4bq7w5iZVOs:E,s_89sXRjaBfqU:y,s_zBkfwgNxzZ4:m},Symbol.toStringTag,{value:"Module"}));export{f as _hW,E as s_4bq7w5iZVOs,y as s_89sXRjaBfqU,m as s_zBkfwgNxzZ4};