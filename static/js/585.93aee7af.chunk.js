(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[585],{6585:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>J});const r="ScreensPage_screensWrap__KpiXB";var c=s(3216),i=s(3248),t=s(3003),o=s(5043),d=s(598);const n="HeaderDashboard_headDashWrap__-gjPa",l="HeaderDashboard_dashboardName__GHex9",p="Filters_menuFilterTheme__ctfu3",m="Filters_filterButton__ZOUmh",u="Filters_filterIcon__yhbRW";var _=s(1581);const j={formWrap:"FiltersForm_formWrap__p4sxw",menuListHidden:"FiltersForm_menuListHidden__VzisA",formTitle:"FiltersForm_formTitle__c6RsE",filterLine:"FiltersForm_filterLine__aj1e8",iconsForm:"FiltersForm_iconsForm__7D3Wa",labelTitle:"FiltersForm_labelTitle__lsSuj",iconsTitle:"FiltersForm_iconsTitle__BdgCK",iconsAll:"FiltersForm_iconsAll__bo9EB",iconsWrap:"FiltersForm_iconsWrap__ksC0g",container:"FiltersForm_container__Wsogl",iconName:"FiltersForm_iconName__8oXr0",checkmark:"FiltersForm_checkmark__oO2Ys",noPriority:"FiltersForm_noPriority__31C7M",lowPriority:"FiltersForm_lowPriority__rCTeT",medPriority:"FiltersForm_medPriority__od2A-",highPriority:"FiltersForm_highPriority__HSHDa"};var x=s(3892),h=s(899),g=s(579);const b=h.Ik().shape({priority:h.Yj().oneOf(["without","low","medium","high"])}),N=e=>{let{onSelectClose:a,isOpen:s}=e;return(0,g.jsxs)("div",{"data-popup":"menu",className:"".concat(j.formWrap," ").concat(!s&&j.menuListHidden),children:[(0,g.jsx)("h2",{className:j.formTitle,children:"Filters"}),(0,g.jsx)("div",{className:j.filterLine}),(0,g.jsx)(x.l1,{initialValues:{priority:"without"},validationSchema:b,children:e=>{let{handleSubmit:a,setFieldValue:s}=e;return(0,g.jsx)("form",{className:j.from,onSubmit:a,children:(0,g.jsxs)("fieldset",{className:j.iconsForm,children:[(0,g.jsxs)("div",{className:j.labelTitle,children:[(0,g.jsx)("legend",{className:j.iconsTitle,children:"Label color"}),(0,g.jsx)("button",{className:j.iconsAll,children:"Show all"})]}),(0,g.jsxs)("div",{className:j.iconsWrap,children:[(0,g.jsxs)("label",{className:j.container,children:[(0,g.jsx)("input",{type:"radio",id:"1",name:"icon",value:"no-priority"}),(0,g.jsx)("span",{className:"".concat(j.checkmark," ").concat(j.noPriority)}),(0,g.jsx)("p",{className:j.iconName,children:"Without priority"})]}),(0,g.jsxs)("label",{className:j.container,children:[(0,g.jsx)("input",{type:"radio",id:"2",name:"icon",value:"low-priority"}),(0,g.jsx)("span",{className:"".concat(j.checkmark," ").concat(j.lowPriority)}),(0,g.jsx)("p",{className:j.iconName,children:"Low"})]}),(0,g.jsxs)("label",{className:j.container,children:[(0,g.jsx)("input",{type:"radio",id:"3",name:"icon",value:"med-priority"}),(0,g.jsx)("span",{className:"".concat(j.checkmark," ").concat(j.medPriority)}),(0,g.jsx)("p",{className:j.iconName,children:"Medium"})]}),(0,g.jsxs)("label",{className:j.container,children:[(0,g.jsx)("input",{type:"radio",id:"4",name:"icon",value:"high-priority"}),(0,g.jsx)("span",{className:"".concat(j.checkmark," ").concat(j.highPriority)}),(0,g.jsx)("p",{className:j.iconName,children:"High"})]})]})]})})}})]})},f=()=>{const[e,a]=(0,o.useState)(!1);(0,o.useEffect)((()=>(e&&document.body.addEventListener("click",s),()=>{document.body.removeEventListener("click",s)})));const s=e=>{"popupBtn"!==e.target.dataset.popup&&"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))};return(0,g.jsxs)("div",{"data-popup":"popupBtn",onClick:e=>(e=>{"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))})(e),className:p,children:[(0,g.jsxs)("button",{"data-popup":"popupBtn",className:m,children:[(0,g.jsx)("svg",{"data-popup":"popupBtn",className:u,children:(0,g.jsx)("use",{"data-popup":"popupBtn",href:"".concat(_.A,"#icon-filter")})}),"Filters"]}),(0,g.jsx)(N,{onSelectClose:()=>{a((e=>!e))},isOpen:e})]})},v=e=>{let{board:a}=e;return(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)("h2",{className:l,children:null===a||void 0===a?void 0:a.name}),(0,g.jsx)(f,{})]})},y="MainDashboard_boardWrap__2u1Ba",C="MainDashboard_columnsList__iP56w",F="MainDashboard_addColumnBtn__6+fG2",P="MainDashboard_addColumnWrap__j-UdJ",k="MainDashboard_addColumnIcon__qVRIe",I="MainDashboard_addColumnTitle__VFj8z",W="Column_columnWrap__G3hGv",T="Column_columnTitleWrap__r2jmr",w="Column_columnTitle__JxUiI",D="Column_columnBtnWrap__t2MEK",A="Column_columnButton__qAW6n",B="Column_columnIconPensil__fXczJ",L="Column_columnIconTrash__HHjTW",S="Column_columnList__04PMN",H="Column_columnAddButton__0dcN0",M="Column_addColumnIcon__txMZ3",E="Column_addColumnTitle__mJxvp";var O=s(8532),G=s(7416),U=s(826);const q=e=>{let{children:a,column:s}=e;const r=(0,t.wA)();return(0,g.jsx)("li",{className:W,children:(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:T,children:[(0,g.jsx)("h2",{className:w,children:s.title}),(0,g.jsxs)("div",{className:D,children:[(0,g.jsx)("button",{className:A,children:(0,g.jsx)("svg",{className:B,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-pencil")})})}),(0,g.jsx)("button",{onClick:()=>{r((0,U.gR)(s._id))},className:A,children:(0,g.jsx)("svg",{className:L,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-trash")})})})]})]}),(0,g.jsx)("ul",{className:S,children:a}),(0,g.jsxs)("button",{onClick:()=>{r((0,O.qf)({content:"add-card"})),r((0,G.L)(s._id))},className:H,children:[(0,g.jsx)("svg",{className:M,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-plus")})}),(0,g.jsx)("p",{className:E,children:"Add Card"})]})]})})},R={cardHeight:"Card_cardHeight__tSm4h",cardWrapper:"Card_cardWrapper__TvahP",cardContainer:"Card_cardContainer__aSrje",cardTitle:"Card_cardTitle__4G9aB",cardDiscription:"Card_cardDiscription__y7esn",cardFooterWrapper:"Card_cardFooterWrapper__lWLCd",cardFooter:"Card_cardFooter__bN4q3",cardFooterTitle:"Card_cardFooterTitle__EwDak",cardPriorityInfo:"Card_cardPriorityInfo__OS-yk",cardPriorityCircle:"Card_cardPriorityCircle__Ah0Z+",cardPriorityName:"Card_cardPriorityName__PBWEl",cardDeadlineDate:"Card_cardDeadlineDate__72wFp",cardIconsList:"Card_cardIconsList__ZGvEC",cardIconItem:"Card_cardIconItem__8AccS",cardIconButton:"Card_cardIconButton__s4c7h",cardSvg:"Card_cardSvg__iWUIX",cardPriorityWithout:"Card_cardPriorityWithout__LC9ff",cardPriorityLow:"Card_cardPriorityLow__43uB+",cardPriorityMedium:"Card_cardPriorityMedium__MZf2M",cardPriorityHigh:"Card_cardPriorityHigh__RLipO"};var V=s(4045);const Z=e=>{let{card:a}=e;const s=(0,t.wA)();return(0,g.jsx)("div",{className:R.cardHeight,children:(0,g.jsx)("div",{className:"".concat(R.cardWrapper," ").concat(R.cardPriorityHigh),children:(0,g.jsxs)("div",{className:R.cardContainer,children:[(0,g.jsx)("h4",{className:R.cardTitle,children:a.title}),(0,g.jsx)("p",{className:R.cardDiscription,children:a.description}),(0,g.jsx)("div",{className:R.cardFooterWrapper,children:(0,g.jsxs)("div",{className:R.cardFooter,children:[(0,g.jsxs)("div",{className:R.cardPriority,children:[(0,g.jsx)("h5",{className:R.cardFooterTitle,children:"Priority"}),(0,g.jsxs)("div",{className:R.cardPriorityInfo,children:[(0,g.jsx)("div",{className:"".concat(R.cardPriorityCircle," ").concat(R.cardPriorityHigh)}),(0,g.jsx)("p",{className:R.cardPriorityName,children:a.priority})]})]}),(0,g.jsxs)("div",{className:R.cardDeadline,children:[(0,g.jsx)("h5",{className:R.cardFooterTitle,children:"Deadline"}),(0,g.jsx)("p",{className:R.cardDeadlineDate,children:a.deadline})]}),(0,g.jsxs)("ul",{className:R.cardIconsList,children:[(0,g.jsx)("li",{className:R.cardIconItem,children:(0,g.jsx)("button",{type:"button",className:R.cardIconButton,children:(0,g.jsx)("svg",{className:R.cardSvg,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-bell")})})})}),(0,g.jsx)("li",{className:R.cardIconItem,children:(0,g.jsx)("button",{type:"button",className:R.cardIconButton,children:(0,g.jsx)("svg",{className:R.cardSvg,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-arrow-in-circle")})})})}),(0,g.jsx)("li",{className:R.cardIconItem,children:(0,g.jsx)("button",{type:"button",className:R.cardIconButton,children:(0,g.jsx)("svg",{className:R.cardSvg,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-pencil")})})})}),(0,g.jsx)("li",{className:R.cardIconItem,children:(0,g.jsx)("button",{onClick:e=>{s((0,V.GO)(a._id))},type:"button",className:R.cardIconButton,children:(0,g.jsx)("svg",{className:R.cardSvg,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-trash")})})})})]})]})})]})})})},z=e=>{let{board:a}=e;const s=(0,t.wA)(),r=(0,t.d4)((e=>e.columns.columns)),c=(0,t.d4)((e=>e.cards.cards));(0,o.useEffect)((()=>{a&&(s((0,U.GH)(a._id)),s((0,V.Eg)(a._id)))}),[s,a]);return(0,g.jsx)("div",{className:y,children:(0,g.jsxs)("ul",{className:C,children:[r&&r.map((e=>(0,g.jsx)(q,{column:e,children:c&&c.filter((a=>a.columnId===e._id)).map((e=>(0,g.jsx)(Z,{card:e},e._id)))},e._id))),(0,g.jsx)("button",{onClick:()=>{s((0,O.qf)({content:"add-column"}))},className:F,children:(0,g.jsxs)("div",{className:P,children:[(0,g.jsx)("svg",{className:k,children:(0,g.jsx)("use",{href:"".concat(_.A,"#icon-plus")})}),(0,g.jsx)("p",{className:I,children:"Add another column"})]})})]})})},J=()=>{var e;const{boardId:a}=(0,c.g)(),n=(0,t.d4)(i.gp).find((e=>e._id===a)),l=s(6741)("./".concat(null!==(e=null===n||void 0===n?void 0:n.background)&&void 0!==e?e:"2",".jpg")),p=(0,t.wA)();return(0,o.useEffect)((()=>{p((0,d.lW)(a))})),(0,g.jsxs)("div",{style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(".concat(l,")"),backgroundPosition:"center",backgroundSize:"cover"},className:r,children:[(0,g.jsx)(v,{board:n}),(0,g.jsx)(z,{board:n})]})}},3248:(e,a,s)=>{"use strict";s.d(a,{gp:()=>r});const r=e=>e.boards.boards},6741:(e,a,s)=>{var r={"./1.jpg":9761,"./10.jpg":605,"./11.jpg":8864,"./12.jpg":2831,"./13.jpg":2802,"./14.jpg":49,"./15.jpg":6452,"./16.jpg":2675,"./2.jpg":7622,"./2@2x.jpg":8374,"./3.jpg":2387,"./4.jpg":2224,"./5.jpg":3965,"./6.jpg":6162,"./7.jpg":2543,"./8.jpg":1084,"./9.jpg":8873,"./bay@2x.jpg":6624,"./boat2@2x.jpg":9964,"./boat@2x.jpg":3996,"./bubbles@2x.jpg":6539,"./capadoki@2x.jpg":4064,"./clouds@2x.jpg":5404,"./flowers@2x.jpg":1072,"./leaves@2x.jpg":4938,"./moon@2x.jpg":2655,"./mountains@2x.jpg":8656,"./sand-cave@2x.jpg":4708,"./trailer@2x.jpg":9991,"./tree@2x.jpg":1506,"./yongmoon@2x.jpg":20};function c(e){var a=i(e);return s(a)}function i(e){if(!s.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=i,e.exports=c,c.id=6741},9761:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/1.3d2ac168453cb9ef70bc.jpg"},605:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/10.eb050d3551e9ae9fe7c5.jpg"},8864:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/11.c6d075b004866f4c6446.jpg"},2831:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/12.e69c7da07e788172f7e8.jpg"},2802:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/13.0dc1b9926644d49eb85d.jpg"},49:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/14.2af4e567da7403a1883d.jpg"},6452:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/15.b5e700f023294cb8e7af.jpg"},2675:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/16.f3b88d19274400d095bf.jpg"},7622:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/2.3d2ac168453cb9ef70bc.jpg"},8374:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/2@2x.88a0d8131159a38dc663.jpg"},2387:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/3.8db5ac019a12577ca70a.jpg"},2224:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/4.8553fee7101c52f24b84.jpg"},3965:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/5.32e4207bd0b612f65954.jpg"},6162:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/6.4d64d67d9ed82678b1e1.jpg"},2543:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/7.45e2cb7a383a032d0640.jpg"},1084:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/8.4adaa04b098afd27cb99.jpg"},8873:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/9.a3f977c653dfd938b6b9.jpg"},6624:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/bay@2x.d735f352a14969b94e48.jpg"},9964:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/boat2@2x.12b1caceae8f4d58c031.jpg"},3996:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/boat@2x.e612c8955e3bfedd4244.jpg"},6539:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/bubbles@2x.e321c6117da175cac9f5.jpg"},4064:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/capadoki@2x.11b7fa57cce017900d7a.jpg"},5404:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/clouds@2x.c4d89cae165ea7792449.jpg"},1072:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/flowers@2x.78fba020aff592083f8b.jpg"},4938:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/leaves@2x.051f2acc330a64de2392.jpg"},2655:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/moon@2x.0efc9e9e48777695054d.jpg"},8656:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/mountains@2x.9c152332a1a4a74e7191.jpg"},4708:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/sand-cave@2x.c91fa25e0a83309c78c0.jpg"},9991:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/trailer@2x.e144e2c72bafbc7f885d.jpg"},1506:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/tree@2x.3edd4b954bedcdd4dca0.jpg"},20:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/yongmoon@2x.63127b4620e3ba16cfcd.jpg"}}]);
//# sourceMappingURL=585.93aee7af.chunk.js.map