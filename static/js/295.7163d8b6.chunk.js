(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[295],{2227:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>G});const t="HomePage_main__OiWfi",o="HomePage_mainPage__BoNlQ";var c=a(5043),n=a(3216),r=a(3003),i=a(8532);function l(){c.useLayoutEffect((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}const d="ModalBody_modalBackdrop__KSTDi",h="ModalBody_modalBody__z2P-b",m={formWrap:"BoardForm_formWrap__Mo0Ek",formTitle:"BoardForm_formTitle__usegY",formInput:"BoardForm_formInput__BAA1o",iconsForm:"BoardForm_iconsForm__Vh1US",iconsTitle:"BoardForm_iconsTitle__F+0eo",iconsWrap:"BoardForm_iconsWrap__mqvgp",bgIconsWrap:"BoardForm_bgIconsWrap__QP4eA",iconInput:"BoardForm_iconInput__pMRLe",container:"BoardForm_container__u+mXS",bgContainer:"BoardForm_bgContainer__pPJAN",checkmark:"BoardForm_checkmark__O0h40",bgCheckmark:"BoardForm_bgCheckmark__M+lA3",formButton:"BoardForm_formButton__z8EY6",iconWrap:"BoardForm_iconWrap__7hZa6",buttonIcon:"BoardForm_buttonIcon__biGbW"};var u=a(1581),x=a(579);const p=()=>{const[e,s]=(0,c.useState)(""),[t,o]=(0,c.useState)(""),[n,r]=(0,c.useState)(""),i=[];for(let a=1;a<=16;a++)i.push(a);return(0,x.jsxs)("div",{className:m.formWrap,children:[(0,x.jsx)("h2",{className:m.formTitle,children:"New Board"}),(0,x.jsxs)("form",{className:m.form,onSubmit:s=>(s=>{s.preventDefault(),console.log({title:e,iconValue:t,bgValue:n})})(s),children:[(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Title",onChange:e=>(e=>{s(e.target.value)})(e),value:e,className:m.formInput,type:"text",name:"title",required:!0})}),(0,x.jsxs)("fieldset",{className:m.iconsForm,children:[(0,x.jsx)("legend",{className:m.iconsTitle,children:"Icons"}),(0,x.jsx)("div",{className:m.iconsWrap,children:["four-circles","eye","star","loading","puzzle","container","logo","hexagon"].map((e=>(0,x.jsxs)("label",{className:m.container,children:[(0,x.jsx)("input",{onChange:e=>(e=>{o(e.target.value)})(e),type:"radio",id:e,name:"icon",value:e}),(0,x.jsx)("svg",{className:m.checkmark,children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-").concat(e)})})]},e)))})]}),(0,x.jsxs)("fieldset",{className:m.iconsForm,children:[(0,x.jsx)("legend",{className:m.iconsTitle,children:"Background"}),(0,x.jsx)("div",{className:m.bgIconsWrap,children:i.map((e=>(0,x.jsxs)("label",{className:m.bgContainer,children:[(0,x.jsx)("input",{onChange:e=>(e=>{r(e.target.value)})(e),type:"radio",id:e,name:"bg",value:e}),(0,x.jsx)("img",{className:m.bgCheckmark,width:"20",height:"20",src:a(6679)("./".concat(e,".png")),alt:""})]},e)))})]}),(0,x.jsxs)("button",{type:"submit",className:m.formButton,children:[(0,x.jsx)("div",{className:m.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:m.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-plus")})})}),"Create"]})]})]})},b=()=>{const e=(0,r.wA)(),{modalContent:s}=(0,r.d4)((e=>e.modal));l();const a=(0,c.useRef)(!1);l(),(0,c.useEffect)((()=>(!1===a.current&&window.addEventListener("keydown",t),()=>{a.current=!1,window.removeEventListener("keydown",t)})));const t=s=>{"Escape"===s.code&&e((0,i.Oo)())};return(0,x.jsx)("div",{onClick:s=>(s=>{s.target===s.currentTarget&&e((0,i.Oo)())})(s),className:d,children:(0,x.jsx)("div",{className:h,children:(e=>{switch(e){case"add-board":return(0,x.jsx)(p,{});case"edit-board":return}})(s)})})},g={sideBar:"Sidebar_sideBar__A8DTG",openSideBar:"Sidebar_openSideBar__Uyf+9",titleBox:"Sidebar_titleBox__xqSVd",iconBox:"Sidebar_iconBox__lGsim",logoIconContainer:"Sidebar_logoIconContainer__yiz-a",iconLogo:"Sidebar_iconLogo__P5b+p",title:"Sidebar_title__mzY+F",bordBox:"Sidebar_bordBox__l9HDF",bordTitle:"Sidebar_bordTitle__iDwHw",buttonBox:"Sidebar_buttonBox__+dqOM",buttonText:"Sidebar_buttonText__0LoRm",buttonCreate:"Sidebar_buttonCreate__t3LZl",iconCreate:"Sidebar_iconCreate__vE+2z",bordList:"Sidebar_bordList__PS2uv",helpBox:"Sidebar_helpBox__W7BKt",helpTextBox:"Sidebar_helpTextBox__Sd7S6",helpText:"Sidebar_helpText__1vwtr",helpTextLink:"Sidebar_helpTextLink__QXL1T",buttonHelp:"Sidebar_buttonHelp__nkXAH",iconHelp:"Sidebar_iconHelp__6c8m3",helpButtonText:"Sidebar_helpButtonText__0g7gg",buttonLogOut:"Sidebar_buttonLogOut__VYxol",iconLogOut:"Sidebar_iconLogOut__GX2DR",logOutButtonText:"Sidebar_logOutButtonText__vzEjb"},j="data:image/png;base64,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",N=a.p+"static/media/pot2x.0b7af2e73f1d0ccf06b7.png",f="Board_boardItem__pg3mb",_="Board_boardTitleBox__N1O+A",v="Board_boardIcon__TALFy",B="Board_boardText__tGGO5",w="Board_boardButtonBox__pijVR",S="Board_boardButton__9AuMq",k="Board_iconButton__9r8ni",T=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("li",{className:f,children:[(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("svg",{width:"18",height:"18",className:v,children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-bell")})}),(0,x.jsx)("p",{className:B,children:"Title Text"})]}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-pencil")})})}),(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-trash")})})})]})]}),(0,x.jsxs)("li",{className:f,children:[(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("svg",{width:"18",height:"18",className:v,children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-bell")})}),(0,x.jsx)("p",{className:B,children:"Title Text"})]}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-pencil")})})}),(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-trash")})})})]})]}),(0,x.jsxs)("li",{className:f,children:[(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("svg",{width:"18",height:"18",className:v,children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-bell")})}),(0,x.jsx)("p",{className:B,children:"Title Text"})]}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-pencil")})})}),(0,x.jsx)("button",{className:S,children:(0,x.jsx)("svg",{className:k,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-trash")})})})]})]})]}),A=()=>{const e=(0,r.wA)();return(0,x.jsxs)("div",{className:g.sideBar,children:[(0,x.jsxs)("div",{className:g.titleBox,children:[(0,x.jsxs)("div",{className:g.iconBox,children:[(0,x.jsx)("div",{className:g.logoIconContainer,children:(0,x.jsx)("svg",{className:g.iconLogo,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-logo")})})}),(0,x.jsx)("h2",{className:g.title,children:"Task Pro"})]}),(0,x.jsxs)("div",{className:g.bordBox,children:[(0,x.jsx)("h3",{className:g.bordTitle,children:"My Boards"}),(0,x.jsxs)("div",{className:g.buttonBox,children:[(0,x.jsx)("span",{className:g.buttonText,children:"Create a new board"}),(0,x.jsx)("button",{onClick:()=>{e((0,i.qf)({content:"add-board"}))},className:g.buttonCreate,children:(0,x.jsx)("svg",{className:g.iconCreate,width:"22",height:"22",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-plus")})})})]})]})]}),(0,x.jsx)("ul",{className:g.bordList,children:(0,x.jsx)(T,{})}),(0,x.jsxs)("div",{className:g.helpBox,children:[(0,x.jsxs)("div",{className:g.helpTextBox,children:[(0,x.jsxs)("picture",{className:g.imgHelp,children:[(0,x.jsx)("source",{srcSet:"".concat(j," 1x, ").concat(N," 2x")}),(0,x.jsx)("img",{srcSet:"".concat(j," 1x"),alt:"pot"})]}),(0,x.jsxs)("p",{className:g.helpText,children:["If you need help with"," ",(0,x.jsx)("span",{className:g.helpTextLink,children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,x.jsxs)("button",{className:g.buttonHelp,children:[(0,x.jsx)("svg",{className:g.iconHelp,width:"20",height:"20",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-help")})}),(0,x.jsx)("p",{className:g.helpButtonText,children:"Need help?"})]})]}),(0,x.jsxs)("button",{className:g.buttonLogOut,children:[(0,x.jsx)("svg",{className:g.iconLogOut,width:"32",height:"32",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-login")})}),(0,x.jsx)("p",{className:g.logOutButtonText,children:"Log Out"})]})]})]})},D="DefaultBoard_boardDefault__OGVRe",L="DefaultBoard_boardDefaultText__9+0UM",J="DefaultBoard_boardDefaultLink__D+uKf",V=()=>(0,x.jsx)("div",{className:D,children:(0,x.jsxs)("p",{className:L,children:["Before starting your project, it is essential ",(0,x.jsx)("span",{className:J,children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),F="Navigation_navContainer__+dgHg",O="Navigation_buttonBurger__Kqo-y",C="Navigation_iconBurger__Y+5FL",q="Navigation_navMenu__tyi6A",U={},y=()=>(0,x.jsx)("div",{className:U.test,children:"Name"}),H={menuTheme:"ThemeSelect_menuTheme__syeY8",buttonMenu:"ThemeSelect_buttonMenu__M4R80",iconChevronDown:"ThemeSelect_iconChevronDown__z0Zx0",dropdownMenu:"ThemeSelect_dropdownMenu__lwack"},Z=()=>(0,x.jsxs)("div",{className:H.menuTheme,children:[(0,x.jsx)("p",{className:H.titleMenuTheme,children:"Theme"}),(0,x.jsx)("button",{className:H.buttonMenu,type:"button",children:(0,x.jsx)("svg",{className:H.iconChevronDown,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-chevron-down")})})}),(0,x.jsx)("nav",{className:H.dropdownMenu,children:(0,x.jsxs)("ul",{className:H.menuList,children:[(0,x.jsx)("li",{className:H.menuItem,children:"Light"}),(0,x.jsx)("li",{className:H.menuItem,children:"Dark"}),(0,x.jsx)("li",{className:H.menuItem,children:"Violet"})]})})]}),Y=e=>{let{openMenu:s}=e;return(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("button",{className:O,type:"button",onClick:s,children:(0,x.jsx)("svg",{className:C,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(u.A,"#icon-menu")})})}),(0,x.jsxs)("div",{className:q,children:[(0,x.jsx)(Z,{}),(0,x.jsx)(y,{})]})]})},G=()=>{const{isOpen:e}=(0,r.d4)((e=>e.modal)),s=(0,n.zy)();return(0,x.jsxs)("div",{className:t,"data-theme":"dark",children:[(0,x.jsx)(A,{}),console.log(s.pathname),(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)(Y,{}),"/home"===s.pathname&&(0,x.jsx)(V,{}),(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading...."}),children:(0,x.jsx)(n.sv,{})}),e&&(0,x.jsx)(b,{})]})]})}},6679:(e,s,a)=>{var t={"./1.png":7919,"./10.png":9983,"./11.png":8438,"./12.png":9645,"./13.png":8516,"./14.png":8427,"./15.png":4274,"./16.png":857,"./2.png":1060,"./3.png":4957,"./4.png":98,"./5.png":4923,"./6.png":6592,"./7.png":1065,"./8.png":5198,"./9.png":7687};function o(e){var s=c(e);return a(s)}function c(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=c,e.exports=o,o.id=6679},7919:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/1.dfc7a45f5ebececbf5bf.png"},9983:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/10.f34b4029d15a9b88184a.png"},8438:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/11.7abda19cf4f5a50b724b.png"},9645:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/12.c99dd6d0f7748efd88ff.png"},8516:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/13.84fecbdb870f1d8f5364.png"},8427:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/14.6b3b6ec1dc44869a66c0.png"},4274:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/15.f81a00ff732a5c257fab.png"},857:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/16.0c6fb59b734e0380ddcf.png"},1060:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/2.002c62f845159321c3db.png"},4957:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/3.28e6f235782da4165a3f.png"},98:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/4.b4fe441bdcd3ca3ee357.png"},4923:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/5.426e13e9ffa745ca4ea9.png"},6592:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/6.7e4568cf35399a6a729c.png"},1065:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/7.5c693d4479342758bd4c.png"},5198:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/8.880f7f3035d4969dff7c.png"},7687:(e,s,a)=>{"use strict";e.exports=a.p+"static/media/9.3885e0fc487372ace32e.png"}}]);
//# sourceMappingURL=295.7163d8b6.chunk.js.map