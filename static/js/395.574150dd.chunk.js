"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[395],{887:(e,s,t)=>{t.r(s),t.d(s,{default:()=>K});const a="HomePage_main__OiWfi",o="HomePage_mainPage__BoNlQ";var d=t(43),i=t(216),l=t(3),c=t(532);function n(){d.useLayoutEffect((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}const r="ModalBody_modalBackdrop__KSTDi",h="ModalBody_modalBody__z2P-b",x="ModalBody_testModalBody__Lae1F";var u=t(579);const m=e=>{let{id:s}=e;const t=(0,l.wA)(),a=[{id:1,title:"card 1",boardId:1,columnId:1},{id:2,title:"card2",boardId:1,columnId:1},{id:3,title:"card3",boardId:1,columnId:2},{id:4,title:"card4",boardId:1,columnId:2},{id:5,title:"card5",boardId:1,columnId:3}];return(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("button",{onClick:()=>{t((0,c.Oo)())},children:"close"}),(0,u.jsx)("p",{children:s}),(0,u.jsx)("ul",{children:[{id:1,title:"colum1 A",boardId:"1"},{id:2,title:"colum1 B",boardId:"1"},{id:3,title:"colum1 C",boardId:"1"}].map((e=>(0,u.jsxs)("li",{children:[e.title,(0,u.jsx)("ul",{children:a.filter((s=>s.columnId===e.id)).map((e=>(0,u.jsx)("li",{children:e.title},e.id)))})]},e.id)))})]})},b=()=>{const e=(0,l.wA)(),{modalContent:s,selectedElId:t}=(0,l.d4)((e=>e.modal));n();const a=(0,d.useRef)(!1);n(),(0,d.useEffect)((()=>(!1===a.current&&window.addEventListener("keydown",o),()=>{a.current=!1,window.removeEventListener("keydown",o)})));const o=s=>{"Escape"===s.code&&e((0,c.Oo)())};return(0,u.jsx)("div",{onClick:s=>(s=>{s.target===s.currentTarget&&e((0,c.Oo)())})(s),className:r,children:(0,u.jsx)("div",{className:h,children:(e=>{switch(e){case"add-board":return(0,u.jsx)(m,{id:t});case"edit-board":return}})(s)})})},j={sideBar:"Sidebar_sideBar__A8DTG",openSideBar:"Sidebar_openSideBar__Uyf+9",titleBox:"Sidebar_titleBox__xqSVd",iconBox:"Sidebar_iconBox__lGsim",logoIconContainer:"Sidebar_logoIconContainer__yiz-a",title:"Sidebar_title__mzY+F",bordBox:"Sidebar_bordBox__l9HDF",bordTitle:"Sidebar_bordTitle__iDwHw",buttonBox:"Sidebar_buttonBox__+dqOM",buttonText:"Sidebar_buttonText__0LoRm",buttonCreate:"Sidebar_buttonCreate__t3LZl",iconCreate:"Sidebar_iconCreate__vE+2z",bordList:"Sidebar_bordList__PS2uv",helpBox:"Sidebar_helpBox__W7BKt",helpTextBox:"Sidebar_helpTextBox__Sd7S6",helpText:"Sidebar_helpText__1vwtr",helpTextLink:"Sidebar_helpTextLink__QXL1T",buttonHelp:"Sidebar_buttonHelp__nkXAH",iconHelp:"Sidebar_iconHelp__6c8m3",helpButtonText:"Sidebar_helpButtonText__0g7gg",buttonLogOut:"Sidebar_buttonLogOut__VYxol",iconLogOut:"Sidebar_iconLogOut__GX2DR",logOutButtonText:"Sidebar_logOutButtonText__vzEjb"};var N=t(581);const g="data:image/png;base64,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",v=t.p+"static/media/pot2x.0b7af2e73f1d0ccf06b7.png",p="Board_boardItem__pg3mb",f="Board_boardTitleBox__N1O+A",w="Board_boardIcon__TALFy",B="Board_boardText__tGGO5",S="Board_boardButtonBox__pijVR",T="Board_boardButton__9AuMq",D="Board_iconButton__9r8ni",k=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("li",{className:p,children:[(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("svg",{width:"18",height:"18",className:w,children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-bell")})}),(0,u.jsx)("p",{className:B,children:"Title Text"})]}),(0,u.jsxs)("div",{className:S,children:[(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-pencil")})})}),(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-trash")})})})]})]}),(0,u.jsxs)("li",{className:p,children:[(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("svg",{width:"18",height:"18",className:w,children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-bell")})}),(0,u.jsx)("p",{className:B,children:"Title Text"})]}),(0,u.jsxs)("div",{className:S,children:[(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-pencil")})})}),(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-trash")})})})]})]}),(0,u.jsxs)("li",{className:p,children:[(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("svg",{width:"18",height:"18",className:w,children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-bell")})}),(0,u.jsx)("p",{className:B,children:"Title Text"})]}),(0,u.jsxs)("div",{className:S,children:[(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-pencil")})})}),(0,u.jsx)("button",{className:T,children:(0,u.jsx)("svg",{className:D,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-trash")})})})]})]})]}),A=()=>(0,u.jsxs)("div",{className:j.sideBar,children:[(0,u.jsxs)("div",{className:j.titleBox,children:[(0,u.jsxs)("div",{className:j.iconBox,children:[(0,u.jsx)("div",{className:j.logoIconContainer,children:(0,u.jsx)("svg",{className:j.iconLogo,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-logo")})})}),(0,u.jsx)("h2",{className:j.title,children:"Task Pro"})]}),(0,u.jsxs)("div",{className:j.bordBox,children:[(0,u.jsx)("h3",{className:j.bordTitle,children:"My Boards"}),(0,u.jsxs)("div",{className:j.buttonBox,children:[(0,u.jsx)("span",{className:j.buttonText,children:"Create a new board"}),(0,u.jsx)("button",{className:j.buttonCreate,children:(0,u.jsx)("svg",{className:j.iconCreate,width:"22",height:"22",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-plus")})})})]})]})]}),(0,u.jsx)("ul",{className:j.bordList,children:(0,u.jsx)(k,{})}),(0,u.jsxs)("div",{className:j.helpBox,children:[(0,u.jsxs)("div",{className:j.helpTextBox,children:[(0,u.jsxs)("picture",{className:j.imgHelp,children:[(0,u.jsx)("source",{srcSet:"".concat(g," 1x, ").concat(v," 2x")}),(0,u.jsx)("img",{srcSet:"".concat(g," 1x"),alt:"pot"})]}),(0,u.jsxs)("p",{className:j.helpText,children:["If you need help with"," ",(0,u.jsx)("span",{className:j.helpTextLink,children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,u.jsxs)("button",{className:j.buttonHelp,children:[(0,u.jsx)("svg",{className:j.iconHelp,width:"20",height:"20",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-help")})}),(0,u.jsx)("p",{className:j.helpButtonText,children:"Need help?"})]})]}),(0,u.jsxs)("button",{className:j.buttonLogOut,children:[(0,u.jsx)("svg",{className:j.iconLogOut,width:"32",height:"32",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-login")})}),(0,u.jsx)("p",{className:j.logOutButtonText,children:"Log Out"})]})]})]}),L="DefaultBoard_boardDefault__OGVRe",_="DefaultBoard_boardDefaultText__9+0UM",J="DefaultBoard_boardDefaultLink__D+uKf",V=()=>(0,u.jsx)("div",{className:L,children:(0,u.jsxs)("p",{className:_,children:["Before starting your project, it is essential ",(0,u.jsx)("span",{className:J,children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),O="Navigation_navContainer__+dgHg",q="Navigation_buttonBurger__Kqo-y",H="Navigation_iconBurger__Y+5FL",U="Navigation_navMenu__tyi6A",Z={},C=()=>(0,u.jsx)("div",{className:Z.test,children:"Name"}),Y={menuTheme:"ThemeSelect_menuTheme__syeY8",iconChevronDown:"ThemeSelect_iconChevronDown__z0Zx0"},y=()=>(0,u.jsxs)("div",{className:Y.menuTheme,children:[(0,u.jsx)("p",{className:Y.titleMenuTheme,children:"Theme"}),(0,u.jsx)("svg",{className:Y.iconChevronDown,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-chevron-down")})})]}),F=e=>{let{openMenu:s}=e;return(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)("button",{className:q,type:"button",onClick:s,children:(0,u.jsx)("svg",{className:H,width:"16",height:"16",children:(0,u.jsx)("use",{href:"".concat(N.A,"#icon-menu")})})}),(0,u.jsxs)("div",{className:U,children:[(0,u.jsx)(y,{}),(0,u.jsx)(C,{})]})]})},K=()=>{const{isOpen:e}=(0,l.d4)((e=>e.modal)),s=(0,i.zy)();return(0,u.jsxs)("div",{className:a,"data-theme":"dark",children:[(0,u.jsx)(A,{}),console.log(s.pathname),(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)(F,{}),"/home"===s.pathname&&(0,u.jsx)(V,{}),(0,u.jsx)(d.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading...."}),children:(0,u.jsx)(i.sv,{})}),e&&(0,u.jsx)(b,{})]})]})}}}]);
//# sourceMappingURL=395.574150dd.chunk.js.map