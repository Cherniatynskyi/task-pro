(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[141],{5141:(e,a,c)=>{"use strict";c.r(a),c.d(a,{default:()=>Y});const s="ScreensPage_screensWrap__KpiXB";var r=c(3216),t=c(3248),i=c(3003),n=c(5043),o=c(3870);const d="HeaderDashboard_headDashWrap__-gjPa",l="HeaderDashboard_dashboardName__GHex9",p="Filters_menuFilterTheme__ctfu3",u="Filters_filterButton__ZOUmh",m="Filters_filterIcon__yhbRW",_="Filters_filterIndicator__3qzc4";var x=c(1581);const h={formWrap:"FiltersForm_formWrap__p4sxw",menuListHidden:"FiltersForm_menuListHidden__VzisA",formTitle:"FiltersForm_formTitle__c6RsE",filterLine:"FiltersForm_filterLine__aj1e8",iconsForm:"FiltersForm_iconsForm__7D3Wa",labelTitle:"FiltersForm_labelTitle__lsSuj",iconsTitle:"FiltersForm_iconsTitle__BdgCK",iconsAll:"FiltersForm_iconsAll__bo9EB",iconsWrap:"FiltersForm_iconsWrap__ksC0g",container:"FiltersForm_container__Wsogl",iconName:"FiltersForm_iconName__8oXr0",checkmark:"FiltersForm_checkmark__oO2Ys"};var j=c(3892),g=c(8779),f=c(8877),N=c(579);const b=e=>{let{isOpen:a}=e;const c=(0,i.wA)();return(0,N.jsxs)("div",{"data-popup":"menu",className:"".concat(h.formWrap," ").concat(!a&&h.menuListHidden),children:[(0,N.jsx)("h2",{className:h.formTitle,children:"Filters"}),(0,N.jsx)("div",{className:h.filterLine}),(0,N.jsx)(j.l1,{initialValues:{priority:"without"},children:(0,N.jsx)("form",{className:h.from,children:(0,N.jsxs)("fieldset",{className:h.iconsForm,children:[(0,N.jsxs)("div",{className:h.labelTitle,children:[(0,N.jsx)("legend",{className:h.iconsTitle,children:"Label color"}),(0,N.jsx)("button",{onClick:e=>(e=>{e.preventDefault(),c((0,f.Se)())})(e),className:h.iconsAll,children:"Show all"})]}),(0,N.jsx)("div",{className:h.iconsWrap,children:g.G.map((e=>(0,N.jsxs)("label",{className:h.container,children:[(0,N.jsx)("input",{type:"radio",name:"icon",value:e.title,required:!0,onChange:e=>(e=>{c((0,f.ul)(e.target.value))})(e)}),(0,N.jsx)("p",{className:h.iconName,children:e.title}),(0,N.jsx)("span",{style:{backgroundColor:"".concat(e.color)},className:"".concat(h.checkmark)})]},e.title)))})]})})})]})},C=()=>{const[e,a]=(0,n.useState)(!1),c=(0,i.d4)((e=>e.filter.filterValue)),s=g.G.find((e=>e.title===c));(0,n.useEffect)((()=>(e&&document.body.addEventListener("click",r),()=>{document.body.removeEventListener("click",r)})));const r=e=>{"popupFiltersBtn"!==e.target.dataset.popup&&"menu"!==e.target.dataset.popup&&"el"!==e.target.popup&&a((e=>!e))};return(0,N.jsxs)("div",{"data-popup":"popupFiltersBtn",onClick:e=>(e=>{"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))})(e),className:p,children:[s&&(0,N.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:_}),(0,N.jsxs)("button",{"data-popup":"popupFiltersBtn",className:u,children:[(0,N.jsx)("svg",{"data-popup":"popupFiltersBtn",className:m,children:(0,N.jsx)("use",{"data-popup":"popupFiltersBtn",href:"".concat(x.A,"#icon-filter")})}),"Filters"]}),(0,N.jsx)(b,{onSelectClose:()=>{a((e=>!e))},isOpen:e})]})},v=e=>{let{board:a}=e;return(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("h2",{className:l,children:null===a||void 0===a?void 0:a.name}),(0,N.jsx)(C,{})]})},F="MainDashboard_boardWrap__2u1Ba",I="MainDashboard_columnsList__iP56w",k="MainDashboard_addColumnBtn__6+fG2",y="MainDashboard_addColumnWrap__j-UdJ",D="MainDashboard_addColumnIcon__qVRIe",T="MainDashboard_addColumnTitle__VFj8z",W="Column_columnWrap__G3hGv",A="Column_columnTitleWrap__r2jmr",B="Column_columnTitle__JxUiI",w="Column_columnBtnWrap__t2MEK",L="Column_columnButton__qAW6n",M="Column_columnIcon__6CN5T",S="Column_columnList__04PMN",P="Column_columnAddButton__0dcN0",E="Column_addColumnIcon__txMZ3",H="Column_addColumnTitle__mJxvp";var G=c(8532),O=c(8083),q=c(7416);const V=e=>{let{children:a,column:c}=e;const s=(0,i.wA)(),[r]=(0,O.Q)();return(0,N.jsx)("li",{className:W,children:(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:A,children:[(0,N.jsx)("h2",{className:B,children:c.title}),(0,N.jsxs)("div",{className:w,children:[(0,N.jsx)("button",{className:L,children:(0,N.jsx)("svg",{onClick:()=>{s((0,G.qf)({content:"edit-column",id:"".concat(c._id)}))},className:M,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-pencil")})})}),(0,N.jsx)("button",{onClick:()=>{s((0,G.qf)({content:"warning-dell",id:c}))},className:L,children:(0,N.jsx)("svg",{className:M,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-trash")})})})]})]}),(0,N.jsx)("ul",{className:S,ref:r,children:a}),(0,N.jsxs)("button",{onClick:()=>{s((0,G.qf)({content:"add-card"})),s((0,q.L)(c._id))},className:P,children:[(0,N.jsx)("svg",{className:E,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-plus")})}),(0,N.jsx)("p",{className:H,children:"Add Card"})]})]})})},U={cardHeight:"Card_cardHeight__tSm4h",cardContainer:"Card_cardContainer__aSrje",cardWrapper:"Card_cardWrapper__TvahP",cardTitle:"Card_cardTitle__4G9aB",cardDiscription:"Card_cardDiscription__y7esn",cardFooterWrapper:"Card_cardFooterWrapper__lWLCd",cardFooter:"Card_cardFooter__bN4q3",cardFooterTitle:"Card_cardFooterTitle__EwDak",cardPriorityInfo:"Card_cardPriorityInfo__OS-yk",cardPriorityCircle:"Card_cardPriorityCircle__Ah0Z+",cardPriorityName:"Card_cardPriorityName__PBWEl",cardDeadlineDate:"Card_cardDeadlineDate__72wFp",cardIconsList:"Card_cardIconsList__ZGvEC",cardIconItemBell:"Card_cardIconItemBell__3gB-r",cardSvg:"Card_cardSvg__iWUIX",cardIconButton:"Card_cardIconButton__s4c7h",cardIconItem:"Card_cardIconItem__8AccS",popupMenuList:"Card_popupMenuList__s6SOr",popupHidden:"Card_popupHidden__AU9tj",popupMenuItem:"Card_popupMenuItem__4xTyw",popupMenuDef:"Card_popupMenuDef__TjaKT",selectCardSvg:"Card_selectCardSvg__wDXPX"},X=e=>{let{isOpen:a,handleMove:c,filterVal:s}=e;const r=(0,i.d4)((e=>e.columns.columns));return(0,N.jsx)(N.Fragment,{children:r.length>1?(0,N.jsx)("ul",{style:r.length<3?{marginTop:"30px"}:{},"data-popup":"changeMenu",className:"".concat(U.popupMenuList," ").concat(!a&&U.popupHidden),children:r.filter((e=>e._id!==s)).map((e=>(0,N.jsxs)("li",{onClick:()=>c(e._id),className:"".concat(U.popupMenuItem),children:[(0,N.jsx)("span",{className:U.popupMenuText,children:e.title}),(0,N.jsx)("svg",{className:U.selectCardSvg,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-arrow-in-circle")})})]},e._id)))}):(0,N.jsx)("ul",{style:r.length<3?{marginTop:"30px"}:{},className:"".concat(U.popupMenuList," ").concat(!a&&U.popupHidden),children:(0,N.jsx)("li",{className:U.popupMenuDef,children:(0,N.jsx)("span",{children:"No other columns"})})})})};var z=c(4045);const J=e=>{let{card:a}=e;const[c,s]=(0,n.useState)(!1),r=(0,i.d4)((e=>e.cards.cards)),t=(0,i.wA)();(0,n.useEffect)((()=>(c&&document.body.addEventListener("click",o),()=>{document.body.removeEventListener("click",o)})));const o=e=>{"popupChange"!==e.target.dataset.popup&&s((e=>!e))};return(0,N.jsxs)("button",{"data-popup":"popupChange",onClick:e=>{s((e=>!e))},type:"button",className:U.cardIconButton,children:[(0,N.jsx)("svg",{"data-popup":"popupChange",className:U.cardSvg,children:(0,N.jsx)("use",{"data-popup":"popupChange",href:"".concat(x.A,"#icon-arrow-in-circle")})}),(0,N.jsx)(X,{filterVal:a.columnId,isOpen:c,handleMove:e=>{const c=r.filter((a=>a.columnId===e)).length;t((0,z.hV)({id:a._id,columnId:e,index:c}));r.filter((e=>e.columnId===a.columnId)).forEach((e=>{0!==e.index&&e._id!==a._id&&t((0,z.hV)({id:e._id,columnId:e.columnId,index:e.index-1}))}))}})]})},K=e=>{let{card:a}=e;const c=(0,i.wA)(),s=g.G.find((e=>e.title===a.priority));let r=new Date,t=new Date(a.deadline),n=t-r;return(0,N.jsx)("div",{className:U.cardHeight,children:(0,N.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:U.cardWrapper,children:(0,N.jsxs)("div",{className:U.cardContainer,children:[(0,N.jsx)("h4",{className:U.cardTitle,children:a.title}),(0,N.jsx)("p",{className:U.cardDiscription,children:a.description}),(0,N.jsx)("div",{className:U.cardFooterWrapper,children:(0,N.jsxs)("div",{className:U.cardFooter,children:[(0,N.jsxs)("div",{className:U.cardPriority,children:[(0,N.jsxs)("h5",{className:U.cardFooterTitle,children:["Priority ",a.index]}),(0,N.jsxs)("div",{className:U.cardPriorityInfo,children:[(0,N.jsx)("div",{style:{backgroundColor:"".concat(s.color)},className:"".concat(U.cardPriorityCircle)}),(0,N.jsx)("p",{className:U.cardPriorityName,children:a.priority.split(" ")[0]})]})]}),(0,N.jsxs)("div",{className:U.cardDeadline,children:[(0,N.jsx)("h5",{className:U.cardFooterTitle,children:"Deadline"}),(0,N.jsx)("p",{className:U.cardDeadlineDate,children:t.toLocaleDateString("en-GB")}),(0,N.jsx)("p",{className:U.cardDeadlineDate})]}),(0,N.jsxs)("ul",{className:U.cardIconsList,children:[n<1728e5&&(0,N.jsx)("li",{className:U.cardIconItemBell,children:(0,N.jsx)("button",{type:"button",className:U.cardIconButton,children:(0,N.jsx)("svg",{className:U.cardSvg,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-bell")})})})}),(0,N.jsx)("li",{className:U.cardIconItem,children:(0,N.jsx)(J,{card:a})}),(0,N.jsx)("li",{className:U.cardIconItem,children:(0,N.jsx)("button",{onClick:e=>{c((0,G.qf)({content:"edit-card",id:"".concat(a._id)}))},type:"button",className:U.cardIconButton,children:(0,N.jsx)("svg",{className:U.cardSvg,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-pencil")})})})}),(0,N.jsx)("li",{className:U.cardIconItem,children:(0,N.jsx)("button",{onClick:()=>{c((0,G.qf)({content:"warning-dell",id:a}))},type:"button",className:U.cardIconButton,children:(0,N.jsx)("svg",{className:U.cardSvg,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-trash")})})})})]})]})})]})})})};var Z=c(826),R=c(1855);const Q=e=>{let{board:a}=e;const c=(0,i.wA)(),s=(0,i.d4)((e=>e.columns.columns)),r=(0,i.d4)((e=>e.cards.cards)),t=(0,i.d4)((e=>e.filter.filterValue)),[o]=(0,O.Q)();(0,n.useEffect)((()=>{a&&(c((0,Z.GH)(a._id)),c((0,z.Eg)(a._id)))}),[c,a]);return(0,N.jsx)(R.JY,{children:(0,N.jsx)("div",{className:F,children:(0,N.jsxs)("ul",{className:I,ref:o,children:[s&&s.map((e=>(0,N.jsx)(V,{column:e,children:r&&r.filter((a=>a.columnId===e._id&&(!t||a.priority===t))).sort((function(e,a){return e.index-a.index})).map((e=>(0,N.jsx)(K,{card:e},e._id)))},e._id))),(0,N.jsx)("button",{onClick:()=>{c((0,G.qf)({content:"add-column"}))},className:k,children:(0,N.jsxs)("div",{className:y,children:[(0,N.jsx)("svg",{className:D,children:(0,N.jsx)("use",{href:"".concat(x.A,"#icon-plus")})}),(0,N.jsx)("p",{className:T,children:"Add another column"})]})})]})})})},Y=()=>{var e;const{boardId:a}=(0,r.g)(),d=(0,i.d4)(t.gp).find((e=>e._id===a)),l=c(6917)("./".concat(null!==(e=null===d||void 0===d?void 0:d.background)&&void 0!==e?e:"2","@2x.jpg")),p=(0,i.wA)();return(0,n.useEffect)((()=>{p((0,o.lW)(a))})),(0,N.jsxs)("div",{style:"1"!==(null===d||void 0===d?void 0:d.background)?{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(".concat(l,")"),backgroundPosition:"center",backgroundSize:"cover"}:{},className:s,children:[(0,N.jsx)(v,{board:d}),(0,N.jsx)(Q,{board:d})]})}},3248:(e,a,c)=>{"use strict";c.d(a,{gp:()=>s});const s=e=>e.boards.boards},8779:(e,a,c)=>{"use strict";c.d(a,{G:()=>s});const s=[{title:"Without priority",color:"#595959"},{title:"Low",color:"#8fa1d0"},{title:"Medium",color:"#e09cb5"},{title:"High",color:"#bedbb0"}]},6917:(e,a,c)=>{var s={"./10@2x.jpg":1095,"./11@2x.jpg":4848,"./12@2x.jpg":25,"./13@2x.jpg":9898,"./14@2x.jpg":3843,"./15@2x.jpg":2652,"./16@2x.jpg":2773,"./1@2x.jpg":1763,"./2@2x.jpg":8374,"./3@2x.jpg":693,"./4@2x.jpg":2768,"./5@2x.jpg":9015,"./6@2x.jpg":7818,"./7@2x.jpg":7945,"./8@2x.jpg":6900,"./9@2x.jpg":3867};function r(e){var a=t(e);return c(a)}function t(e){if(!c.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=t,e.exports=r,r.id=6917},1095:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/10@2x.051f2acc330a64de2392.jpg"},4848:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/11@2x.0efc9e9e48777695054d.jpg"},25:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/12@2x.9c152332a1a4a74e7191.jpg"},9898:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/13@2x.c91fa25e0a83309c78c0.jpg"},3843:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/14@2x.e144e2c72bafbc7f885d.jpg"},2652:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/15@2x.3edd4b954bedcdd4dca0.jpg"},2773:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/16@2x.63127b4620e3ba16cfcd.jpg"},1763:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/1@2x.3d2ac168453cb9ef70bc.jpg"},8374:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/2@2x.88a0d8131159a38dc663.jpg"},693:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/3@2x.d735f352a14969b94e48.jpg"},2768:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/4@2x.e612c8955e3bfedd4244.jpg"},9015:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/5@2x.12b1caceae8f4d58c031.jpg"},7818:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/6@2x.e321c6117da175cac9f5.jpg"},7945:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/7@2x.11b7fa57cce017900d7a.jpg"},6900:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/8@2x.c4d89cae165ea7792449.jpg"},3867:(e,a,c)=>{"use strict";e.exports=c.p+"static/media/9@2x.78fba020aff592083f8b.jpg"}}]);
//# sourceMappingURL=141.89fbbe70.chunk.js.map