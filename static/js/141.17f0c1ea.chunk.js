(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[141],{5141:(e,a,c)=>{"use strict";c.r(a),c.d(a,{default:()=>Q});const s="ScreensPage_screensWrap__KpiXB";var r=c(3216),t=c(3248),i=c(3003),o=c(5043),n=c(3870);const d="HeaderDashboard_headDashWrap__-gjPa",l="HeaderDashboard_dashboardName__GHex9",p="Filters_menuFilterTheme__ctfu3",u="Filters_filterButton__ZOUmh",m="Filters_filterIcon__yhbRW",_="Filters_filterIndicator__3qzc4";var x=c(1581);const j={formWrap:"FiltersForm_formWrap__p4sxw",menuListHidden:"FiltersForm_menuListHidden__VzisA",formTitle:"FiltersForm_formTitle__c6RsE",filterLine:"FiltersForm_filterLine__aj1e8",iconsForm:"FiltersForm_iconsForm__7D3Wa",labelTitle:"FiltersForm_labelTitle__lsSuj",iconsTitle:"FiltersForm_iconsTitle__BdgCK",iconsAll:"FiltersForm_iconsAll__bo9EB",iconsWrap:"FiltersForm_iconsWrap__ksC0g",container:"FiltersForm_container__Wsogl",iconName:"FiltersForm_iconName__8oXr0",checkmark:"FiltersForm_checkmark__oO2Ys"};var h=c(3892),g=c(8779),N=c(8877),f=c(579);const b=e=>{let{isOpen:a}=e;const c=(0,i.wA)();return(0,f.jsxs)("div",{"data-popup":"menu",className:"".concat(j.formWrap," ").concat(!a&&j.menuListHidden),children:[(0,f.jsx)("h2",{className:j.formTitle,children:"Filters"}),(0,f.jsx)("div",{className:j.filterLine}),(0,f.jsx)(h.l1,{initialValues:{priority:"without"},children:(0,f.jsx)("form",{className:j.from,children:(0,f.jsxs)("fieldset",{className:j.iconsForm,children:[(0,f.jsxs)("div",{className:j.labelTitle,children:[(0,f.jsx)("legend",{className:j.iconsTitle,children:"Label color"}),(0,f.jsx)("button",{onClick:e=>(e=>{e.preventDefault(),c((0,N.Se)())})(e),className:j.iconsAll,children:"Show all"})]}),(0,f.jsx)("div",{className:j.iconsWrap,children:g.G.map((e=>(0,f.jsxs)("label",{className:j.container,children:[(0,f.jsx)("input",{type:"radio",name:"icon",value:e.title,required:!0,onChange:e=>(e=>{c((0,N.ul)(e.target.value))})(e)}),(0,f.jsx)("p",{className:j.iconName,children:e.title}),(0,f.jsx)("span",{style:{backgroundColor:"".concat(e.color)},className:"".concat(j.checkmark)})]},e.title)))})]})})})]})},C=()=>{const[e,a]=(0,o.useState)(!1),c=(0,i.d4)((e=>e.filter.filterValue)),s=g.G.find((e=>e.title===c));(0,o.useEffect)((()=>(e&&document.body.addEventListener("click",r),()=>{document.body.removeEventListener("click",r)})));const r=e=>{"popupFiltersBtn"!==e.target.dataset.popup&&"menu"!==e.target.dataset.popup&&"el"!==e.target.popup&&a((e=>!e))};return(0,f.jsxs)("div",{"data-popup":"popupFiltersBtn",onClick:e=>(e=>{"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))})(e),className:p,children:[s&&(0,f.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:_}),(0,f.jsxs)("button",{"data-popup":"popupFiltersBtn",className:u,children:[(0,f.jsx)("svg",{"data-popup":"popupFiltersBtn",className:m,children:(0,f.jsx)("use",{"data-popup":"popupFiltersBtn",href:"".concat(x.A,"#icon-filter")})}),"Filters"]}),(0,f.jsx)(b,{onSelectClose:()=>{a((e=>!e))},isOpen:e})]})},v=e=>{let{board:a}=e;return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("h2",{className:l,children:null===a||void 0===a?void 0:a.name}),(0,f.jsx)(C,{})]})},F="MainDashboard_boardWrap__2u1Ba",k="MainDashboard_columnsList__iP56w",I="MainDashboard_addColumnBtn__6+fG2",y="MainDashboard_addColumnWrap__j-UdJ",W="MainDashboard_addColumnIcon__qVRIe",A="MainDashboard_addColumnTitle__VFj8z",T="Column_columnWrap__G3hGv",D="Column_columnTitleWrap__r2jmr",w="Column_columnTitle__JxUiI",L="Column_columnBtnWrap__t2MEK",B="Column_columnButton__qAW6n",S="Column_columnIcon__6CN5T",M="Column_columnList__04PMN",P="Column_columnAddButton__0dcN0",E="Column_addColumnIcon__txMZ3",H="Column_addColumnTitle__mJxvp";var O=c(8532),G=c(8083),q=c(7416),U=c(826);const V=e=>{let{children:a,column:c}=e;const s=(0,i.wA)(),[r]=(0,G.Q)();return(0,f.jsx)("li",{className:T,children:(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:D,children:[(0,f.jsx)("h2",{className:w,children:c.title}),(0,f.jsxs)("div",{className:L,children:[(0,f.jsx)("button",{className:B,children:(0,f.jsx)("svg",{onClick:()=>{s((0,O.qf)({content:"edit-column",id:"".concat(c._id)}))},className:S,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-pencil")})})}),(0,f.jsx)("button",{onClick:()=>{s((0,U.gR)(c._id))},className:B,children:(0,f.jsx)("svg",{className:S,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-trash")})})})]})]}),(0,f.jsx)("ul",{className:M,ref:r,children:a}),(0,f.jsxs)("button",{onClick:()=>{s((0,O.qf)({content:"add-card"})),s((0,q.L)(c._id))},className:P,children:[(0,f.jsx)("svg",{className:E,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-plus")})}),(0,f.jsx)("p",{className:H,children:"Add Card"})]})]})})},X={cardHeight:"Card_cardHeight__tSm4h",cardContainer:"Card_cardContainer__aSrje",cardWrapper:"Card_cardWrapper__TvahP",cardTitle:"Card_cardTitle__4G9aB",cardDiscription:"Card_cardDiscription__y7esn",cardFooterWrapper:"Card_cardFooterWrapper__lWLCd",cardFooter:"Card_cardFooter__bN4q3",cardFooterTitle:"Card_cardFooterTitle__EwDak",cardPriorityInfo:"Card_cardPriorityInfo__OS-yk",cardPriorityCircle:"Card_cardPriorityCircle__Ah0Z+",cardPriorityName:"Card_cardPriorityName__PBWEl",cardDeadlineDate:"Card_cardDeadlineDate__72wFp",cardIconsList:"Card_cardIconsList__ZGvEC",cardIconItem:"Card_cardIconItem__8AccS",cardIconButton:"Card_cardIconButton__s4c7h",cardSvg:"Card_cardSvg__iWUIX",popupMenuList:"Card_popupMenuList__s6SOr",popupHidden:"Card_popupHidden__AU9tj",popupMenuItem:"Card_popupMenuItem__4xTyw",selectCardSvg:"Card_selectCardSvg__wDXPX"};var z=c(4045);const R=e=>{let{isOpen:a,handleMove:c,filterVal:s}=e;const r=(0,i.d4)((e=>e.columns.columns));return(0,f.jsx)("ul",{"data-popup":"changeMenu",className:"".concat(X.popupMenuList," ").concat(!a&&X.popupHidden),children:r.filter((e=>e._id!==s)).map((e=>(0,f.jsxs)("li",{onClick:()=>c(e._id),className:"".concat(X.popupMenuItem),children:[(0,f.jsx)("span",{className:X.popupMenuText,children:e.title}),(0,f.jsx)("svg",{className:X.selectCardSvg,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-arrow-in-circle")})})]},e._id)))})},Z=e=>{let{card:a}=e;const[c,s]=(0,o.useState)(!1),r=(0,i.wA)();(0,o.useEffect)((()=>(c&&document.body.addEventListener("click",t),()=>{document.body.removeEventListener("click",t)})));const t=e=>{"popupChange"!==e.target.dataset.popup&&s((e=>!e))};return(0,f.jsxs)("button",{"data-popup":"popupChange",onClick:e=>{s((e=>!e))},type:"button",className:X.cardIconButton,children:[(0,f.jsx)("svg",{"data-popup":"popupChange",className:X.cardSvg,children:(0,f.jsx)("use",{"data-popup":"popupChange",href:"".concat(x.A,"#icon-arrow-in-circle")})}),(0,f.jsx)(R,{isOpen:c,handleMove:e=>{r((0,z.w0)({id:a._id,newCard:{columnId:e}}))}})]})},J=e=>{let{card:a}=e;const c=(0,i.wA)(),s=g.G.find((e=>e.title===a.priority));return(0,f.jsx)("div",{className:X.cardHeight,children:(0,f.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:X.cardWrapper,children:(0,f.jsxs)("div",{className:X.cardContainer,children:[(0,f.jsx)("h4",{className:X.cardTitle,children:a.title}),(0,f.jsx)("p",{className:X.cardDiscription,children:a.description}),(0,f.jsx)("div",{className:X.cardFooterWrapper,children:(0,f.jsxs)("div",{className:X.cardFooter,children:[(0,f.jsxs)("div",{className:X.cardPriority,children:[(0,f.jsx)("h5",{className:X.cardFooterTitle,children:"Priority"}),(0,f.jsxs)("div",{className:X.cardPriorityInfo,children:[(0,f.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:"".concat(X.cardPriorityCircle)}),(0,f.jsx)("p",{className:X.cardPriorityName,children:a.priority.split(" ")[0]})]})]}),(0,f.jsxs)("div",{className:X.cardDeadline,children:[(0,f.jsx)("h5",{className:X.cardFooterTitle,children:"Deadline"}),(0,f.jsx)("p",{className:X.cardDeadlineDate,children:a.deadline.split("T")[0]})]}),(0,f.jsxs)("ul",{className:X.cardIconsList,children:[(0,f.jsx)("li",{className:X.cardIconItem,children:(0,f.jsx)("button",{type:"button",className:X.cardIconButton,children:(0,f.jsx)("svg",{className:X.cardSvg,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-bell")})})})}),(0,f.jsx)("li",{className:X.cardIconItem,children:(0,f.jsx)(Z,{card:a})}),(0,f.jsx)("li",{className:X.cardIconItem,children:(0,f.jsx)("button",{onClick:e=>{c((0,O.qf)({content:"edit-card",id:"".concat(a._id)}))},type:"button",className:X.cardIconButton,children:(0,f.jsx)("svg",{className:X.cardSvg,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-pencil")})})})}),(0,f.jsx)("li",{className:X.cardIconItem,children:(0,f.jsx)("button",{onClick:e=>{c((0,z.GO)(a._id))},type:"button",className:X.cardIconButton,children:(0,f.jsx)("svg",{className:X.cardSvg,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-trash")})})})})]})]})})]})})})},K=e=>{let{board:a}=e;const c=(0,i.wA)(),s=(0,i.d4)((e=>e.columns.columns)),r=(0,i.d4)((e=>e.cards.cards)),t=(0,i.d4)((e=>e.filter.filterValue)),[n]=(0,G.Q)();(0,o.useEffect)((()=>{a&&(c((0,U.GH)(a._id)),c((0,z.Eg)(a._id)))}),[c,a]);return(0,f.jsx)("div",{className:F,children:(0,f.jsxs)("ul",{className:k,ref:n,children:[s&&s.map((e=>(0,f.jsx)(V,{column:e,children:r&&r.filter((a=>a.columnId===e._id&&(!t||a.priority===t))).map((e=>(0,f.jsx)(J,{card:e},e._id)))},e._id))),(0,f.jsx)("button",{onClick:()=>{c((0,O.qf)({content:"add-column"}))},className:I,children:(0,f.jsxs)("div",{className:y,children:[(0,f.jsx)("svg",{className:W,children:(0,f.jsx)("use",{href:"".concat(x.A,"#icon-plus")})}),(0,f.jsx)("p",{className:A,children:"Add another column"})]})})]})})},Q=()=>{var e;const{boardId:a}=(0,r.g)(),d=(0,i.d4)(t.gp).find((e=>e._id===a)),l=c(6917)("./".concat(null!==(e=null===d||void 0===d?void 0:d.background)&&void 0!==e?e:"2","@2x.jpg")),p=(0,i.wA)();return(0,o.useEffect)((()=>{p((0,n.lW)(a))})),(0,f.jsxs)("div",{style:"1"!==(null===d||void 0===d?void 0:d.background)?{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(".concat(l,")"),backgroundPosition:"center",backgroundSize:"cover"}:{},className:s,children:[(0,f.jsx)(v,{board:d}),(0,f.jsx)(K,{board:d})]})}},3248:(e,a,c)=>{"use strict";c.d(a,{gp:()=>s});const s=e=>e.boards.boards},8779:(e,a,c)=>{"use strict";c.d(a,{G:()=>s});const s=[{title:"Without priority",color:"#595959"},{title:"Low",color:"#8fa1d0"},{title:"Medium",color:"#e09cb5"},{title:"High",color:"#bedbb0"}]},6917:(e,a,c)=>{var s={"./10@2x.jpg":1095,"./11@2x.jpg":4848,"./12@2x.jpg":25,"./13@2x.jpg":9898,"./14@2x.jpg":3843,"./15@2x.jpg":2652,"./16@2x.jpg":2773,"./1@2x.jpg":1763,"./2@2x.jpg":8374,"./3@2x.jpg":693,"./4@2x.jpg":2768,"./5@2x.jpg":9015,"./6@2x.jpg":7818,"./7@2x.jpg":7945,"./8@2x.jpg":6900,"./9@2x.jpg":3867};function r(e){var a=t(e);return c(a)}function t(e){if(!c.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=t,e.exports=r,r.id=6917},1095:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/10@2x.051f2acc330a64de2392.jpg"},4848:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/11@2x.0efc9e9e48777695054d.jpg"},25:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/12@2x.9c152332a1a4a74e7191.jpg"},9898:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/13@2x.c91fa25e0a83309c78c0.jpg"},3843:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/14@2x.e144e2c72bafbc7f885d.jpg"},2652:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/15@2x.3edd4b954bedcdd4dca0.jpg"},2773:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/16@2x.63127b4620e3ba16cfcd.jpg"},1763:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/1@2x.3d2ac168453cb9ef70bc.jpg"},8374:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/2@2x.88a0d8131159a38dc663.jpg"},693:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/3@2x.d735f352a14969b94e48.jpg"},2768:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/4@2x.e612c8955e3bfedd4244.jpg"},9015:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/5@2x.12b1caceae8f4d58c031.jpg"},7818:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/6@2x.e321c6117da175cac9f5.jpg"},7945:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/7@2x.11b7fa57cce017900d7a.jpg"},6900:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/8@2x.c4d89cae165ea7792449.jpg"},3867:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/9@2x.78fba020aff592083f8b.jpg"}}]);
//# sourceMappingURL=141.17f0c1ea.chunk.js.map