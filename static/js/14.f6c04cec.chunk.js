(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[14],{524:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>Ke});const s="HomePage_main__OiWfi",r="HomePage_mainPage__BoNlQ";var n=t(5043),o=t(3216),c=t(3003),l=t(8532),i=t(1337);const d="ModalBody_modalBackdrop__KSTDi",m="ModalBody_modalBody__z2P-b";var u=t(7934);const p={formWrap:"BoardForm_formWrap__Mo0Ek",formTitle:"BoardForm_formTitle__usegY",formInput:"BoardForm_formInput__BAA1o",iconsForm:"BoardForm_iconsForm__Vh1US",iconsTitle:"BoardForm_iconsTitle__F+0eo",iconsWrap:"BoardForm_iconsWrap__mqvgp",bgIconsWrap:"BoardForm_bgIconsWrap__QP4eA",iconInput:"BoardForm_iconInput__pMRLe",container:"BoardForm_container__u+mXS",bgContainer:"BoardForm_bgContainer__pPJAN",checkmark:"BoardForm_checkmark__O0h40",bgCheckmark:"BoardForm_bgCheckmark__M+lA3",formButton:"BoardForm_formButton__z8EY6",iconWrap:"BoardForm_iconWrap__7hZa6",buttonIcon:"BoardForm_buttonIcon__biGbW"};var _=t(1581),h=t(9163),x=t(579);const g=()=>{const e=(0,c.wA)(),[a,s]=(0,n.useState)(""),[r,o]=(0,n.useState)("four-circles"),[i,d]=(0,n.useState)("1"),m=[];for(let t=1;t<=16;t++)m.push("".concat(t));return(0,x.jsxs)("div",{className:p.formWrap,children:[(0,x.jsx)("h2",{className:p.formTitle,children:"New Board"}),(0,x.jsxs)("form",{className:p.form,onSubmit:t=>(t=>{t.preventDefault();const s={name:a,icon:r,background:i};e((0,h.EP)(s)),t.target.reset(),e((0,l.Oo)())})(t),children:[(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Title",onChange:e=>(e=>{s(e.target.value)})(e),value:a,className:p.formInput,type:"text",name:"title",required:!0})}),(0,x.jsxs)("fieldset",{className:p.iconsForm,children:[(0,x.jsx)("legend",{className:p.iconsTitle,children:"Icons"}),(0,x.jsx)("div",{className:p.iconsWrap,children:["four-circles","eye","star","loading","puzzle","container","logo","hexagon"].map((e=>(0,x.jsxs)("label",{className:p.container,children:[(0,x.jsx)("input",{onChange:e=>(e=>{o(e.target.value)})(e),type:"radio",id:e,name:"icon",value:e,required:!0,checked:r===e}),(0,x.jsx)("svg",{className:p.checkmark,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-").concat(e)})})]},e)))})]}),(0,x.jsxs)("fieldset",{className:p.iconsForm,children:[(0,x.jsx)("legend",{className:p.iconsTitle,children:"Background"}),(0,x.jsx)("div",{className:p.bgIconsWrap,children:m.map((e=>(0,x.jsxs)("label",{className:p.bgContainer,children:[(0,x.jsx)("input",{onChange:e=>(e=>{d(e.target.value)})(e),type:"radio",id:e,name:"bg",value:e,required:!0,checked:i===e}),(0,x.jsx)("img",{className:p.bgCheckmark,width:"28",height:"28",src:t(6679)("./".concat(e,".png")),alt:""})]},e)))})]}),(0,x.jsxs)("button",{type:"submit",className:p.formButton,children:[(0,x.jsx)("div",{className:p.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:p.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Create"]})]})]})},b=()=>{const{selectedElId:e}=(0,c.d4)((e=>e.modal)),a=(0,c.d4)((e=>e.boards.boards)).find((a=>a._id===e)),[s,r]=(0,n.useState)(a.name),[o,i]=(0,n.useState)(a.icon),[d,m]=(0,n.useState)(a.background),u=(0,c.wA)(),g=[];for(let t=1;t<=16;t++)g.push("".concat(t));return(0,x.jsxs)("div",{className:p.formWrap,children:[(0,x.jsx)("h2",{className:p.formTitle,children:"Edit Board"}),(0,x.jsxs)("form",{className:p.form,onSubmit:e=>(e=>{const t=a._id;e.preventDefault();const r={name:s,icon:o,background:d};u((0,h._y)({id:t,updatedBoard:r})),u((0,l.Oo)())})(e),children:[(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Title",onChange:e=>(e=>{r(e.target.value)})(e),value:s,className:p.formInput,type:"text",name:"title",required:!0})}),(0,x.jsxs)("fieldset",{className:p.iconsForm,children:[(0,x.jsx)("legend",{className:p.iconsTitle,children:"Icons"}),(0,x.jsx)("div",{className:p.iconsWrap,children:["four-circles","eye","star","loading","puzzle","container","logo","hexagon"].map((e=>(0,x.jsxs)("label",{className:p.container,children:[(0,x.jsx)("input",{onChange:e=>(e=>{i(e.target.value)})(e),type:"radio",id:e,name:"icon",value:e,checked:o===e}),(0,x.jsx)("svg",{className:p.checkmark,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-").concat(e)})})]},e)))})]}),(0,x.jsxs)("fieldset",{className:p.iconsForm,children:[(0,x.jsx)("legend",{className:p.iconsTitle,children:"Background"}),(0,x.jsx)("div",{className:p.bgIconsWrap,children:g.map((e=>(0,x.jsxs)("label",{className:p.bgContainer,children:[(0,x.jsx)("input",{onChange:e=>(e=>{m(e.target.value)})(e),type:"radio",id:"bg".concat(e),name:"bg",value:e,checked:d===e}),(0,x.jsx)("img",{className:p.bgCheckmark,width:"20",height:"20",src:t(6679)("./".concat(e,".png")),alt:""})]},e)))})]}),(0,x.jsxs)("button",{type:"submit",className:p.formButton,children:[(0,x.jsx)("div",{className:p.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:p.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Edit"]})]})]})},j={formWrap:"ColumnForm_formWrap__qlgNz",formTitle:"ColumnForm_formTitle__brkqM",formInput:"ColumnForm_formInput__TwvzG",iconsForm:"ColumnForm_iconsForm__czjpY",iconsTitle:"ColumnForm_iconsTitle__9b450",iconsWrap:"ColumnForm_iconsWrap__xwppe",bgIconsWrap:"ColumnForm_bgIconsWrap__9BKMJ",iconInput:"ColumnForm_iconInput__gaYW9",container:"ColumnForm_container__tcg6N",bgContainer:"ColumnForm_bgContainer__+9VXy",checkmark:"ColumnForm_checkmark__0iObs",bgCheckmark:"ColumnForm_bgCheckmark__SmlZ-",formButton:"ColumnForm_formButton__SgVLS",iconWrap:"ColumnForm_iconWrap__duW4E",buttonIcon:"ColumnForm_buttonIcon__vdyo9"};var f=t(826);const N=()=>{const[e,a]=(0,n.useState)(""),t=(0,c.d4)((e=>e.boards.currentBoardId)),s=(0,c.wA)();return(0,x.jsxs)("div",{className:j.formWrap,children:[(0,x.jsx)("h2",{className:j.formTitle,children:"Add column"}),(0,x.jsxs)("form",{className:j.form,onSubmit:a=>(a=>{a.preventDefault(),s((0,f.Hn)({title:e,boardId:t})),s((0,l.Oo)())})(a),children:[(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Title",onChange:e=>(e=>{a(e.target.value)})(e),value:e,className:j.formInput,type:"text",name:"title",required:!0})}),(0,x.jsxs)("button",{type:"submit",className:j.formButton,children:[(0,x.jsx)("div",{className:j.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:j.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Add"]})]})]})},v=()=>{const{selectedElId:e}=(0,c.d4)((e=>e.modal)),a=(0,c.d4)((e=>e.columns.columns)).find((a=>a._id===e)),[t,s]=(0,n.useState)(a.title),r=(0,c.wA)();return(0,x.jsxs)("div",{className:j.formWrap,children:[(0,x.jsx)("h2",{className:j.formTitle,children:"Edit column"}),(0,x.jsxs)("form",{className:j.form,onSubmit:a=>(a=>{a.preventDefault(),r((0,f.y$)({id:e,newColumn:{title:t}})),r((0,l.Oo)())})(a),children:[(0,x.jsx)("label",{htmlFor:"name",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Title",onChange:e=>(e=>{s(e.target.value)})(e),value:t,className:j.formInput,type:"text",name:"title",required:!0})}),(0,x.jsxs)("button",{type:"submit",className:j.formButton,children:[(0,x.jsx)("div",{className:j.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:j.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Edit"]})]})]})},k={formWrap:"NeedHelpForm_formWrap__EDmnt",formTitle:"NeedHelpForm_formTitle__sljth",formInput:"NeedHelpForm_formInput__aVFhD",commentInput:"NeedHelpForm_commentInput__niNh7",iconsForm:"NeedHelpForm_iconsForm__lWWH+",iconsTitle:"NeedHelpForm_iconsTitle__jyG0n",iconsWrap:"NeedHelpForm_iconsWrap__ACPv5",bgIconsWrap:"NeedHelpForm_bgIconsWrap__J5v05",iconInput:"NeedHelpForm_iconInput__dJrxH",container:"NeedHelpForm_container__DDitB",bgContainer:"NeedHelpForm_bgContainer__6tAKR",checkmark:"NeedHelpForm_checkmark__EFSAN",bgCheckmark:"NeedHelpForm_bgCheckmark__OcOlh",formButton:"NeedHelpForm_formButton__EmpLK",iconWrap:"NeedHelpForm_iconWrap__iFh9P",buttonIcon:"NeedHelpForm_buttonIcon__HFz9F"};var C=t(6432),w=t(3401),B=(t(2342),t(9765));const F=(0,C.zD)("help/needHelp",(async(e,a)=>{let{email:t,comment:s}=e;try{const e=await(async e=>{const{data:a}=await B.KJ.post("/users/help",e);return a})({email:t,comment:s});return w.oR.success("Your message was successfully send"),e}catch(r){return w.oR.error("Oops! Something went wrong! Please try reloading this page!"),a.rejectWithValue(r.message)}})),S=()=>{const[e,a]=(0,n.useState)(""),[t,s]=(0,n.useState)(""),r=(0,c.wA)();return(0,x.jsxs)("div",{className:k.formWrap,children:[(0,x.jsx)("h2",{className:k.formTitle,children:"Need help"}),(0,x.jsxs)("form",{className:k.form,onSubmit:n=>(n=>{if(n.preventDefault(),""!==e.trim()&&""!==t.trim()){try{r(F({email:e,comment:t}))}catch(o){console.log(o)}a(""),s("")}})(n),children:[(0,x.jsx)("label",{htmlFor:"email",children:(0,x.jsx)("input",{autoComplete:"false",placeholder:"Email",onChange:e=>(e=>{a(e.target.value)})(e),value:e,className:k.formInput,type:"email",name:"email",required:!0})}),(0,x.jsx)("label",{htmlFor:"comment",children:(0,x.jsx)("textarea",{placeholder:"Comment",onChange:e=>(e=>{s(e.target.value)})(e),value:t,className:k.commentInput,name:"comment"})}),(0,x.jsx)("button",{type:"submit",className:k.formButton,children:"Send"})]})]})};var y=t(3892),A=t(899);const D=e=>e.auth.user;var T=t(3185);function L(e){let{handleChange:a}=e;const{setFieldValue:t}=(0,y.j7)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("input",{type:"file",id:"avatar",name:"avatar",accept:"image/*",hidden:!0,onChange:async e=>{var s;const r=null===(s=e.target.files)||void 0===s?void 0:s[0];if(r){const e=new FileReader;e.onload=()=>{a(e.result)},e.readAsDataURL(r),t("avatar",r)}}})})}const I="UserForm_formWrap__Wzihy",W="UserForm_formTitle__otdTI",U="UserForm_avatar__waQVs",O="UserForm_userAvaWrapper__k1VgJ",V="UserForm_userImg__tVfTy",q="UserForm_iconBtnPlus__nmlZL",H="UserForm_iconPlus__MDJty",J="UserForm_fieldWrapper__oOtLf",M="UserForm_field__3YSzB",Y="UserForm_btnSend__Qj2O-",z="UserForm_iconBtn__H9XGh",E="UserForm_iconEye__uJFvZ",Z="UserForm_errorMessage__lrIyV",K="UserForm_userIconBtn__FYCa-",P="UserForm_userIcon__TYapX",G=A.Ik().shape({avatar:A.gl().test("fileType","Invalid file format",(e=>{if(!e)return!0;return["image/png","image/jpeg","image/jpg"].includes(e.type)})),name:A.Yj().min(2,"Name must be at least 6 characters").max(32,"Name must be no more than 16 characters").required("Name is required*"),email:A.Yj().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:A.Yj().matches(/^(?=.*[a-z])/,"Password must meet the requirements*").min(8,"Password must be at least 6 characters").max(64,"Password must be no more than 16 characters")}),Q=()=>{const e=(0,c.d4)(D),[a,t]=(0,n.useState)(!1),[s,r]=(0,n.useState)(null),o=(0,c.wA)(),l=()=>{t(!a)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("h2",{className:W,children:"Edit profile"}),(0,x.jsx)(y.l1,{initialValues:{avatar:"",avatarURL:e.avatarURL,name:e.name,email:e.email,password:""},validationSchema:G,onSubmit:(a,t)=>{let{resetForm:s,setFieldValue:r}=t;const n={name:a.name,email:a.email,avatarURL:a.avatar,...a.password?{password:a.password}:{password:e.password}},c=new FormData;c.append("name",n.name),c.append("email",n.email),c.append("password",n.password),c.append("avatarURL",n.avatarURL),o((0,T.Lh)(c)),s(),r("name",a.name),r("email",a.email)},children:(0,x.jsxs)(y.lV,{children:[(0,x.jsx)("div",{className:U,children:(0,x.jsxs)("label",{className:O,children:[s||e.avatarURL?(0,x.jsx)("img",{src:s||e.avatarURL,alt:"",className:V,width:68}):(0,x.jsx)("div",{className:K,children:(0,x.jsx)("svg",{className:P,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-user2")})})}),(0,x.jsxs)("label",{htmlFor:"avatar",className:q,children:[(0,x.jsx)(L,{handleChange:e=>{r(e)}}),(0,x.jsx)("svg",{className:H,width:"10",height:"10",children:(0,x.jsx)("use",{xlinkHref:"".concat(_.A,"#icon-plus")})})]})]})}),(0,x.jsx)("div",{className:J,children:(0,x.jsx)(y.D0,{className:M,type:"text",name:"name",placeholder:"Enter your name"})}),(0,x.jsx)(y.Kw,{name:"name",children:e=>(0,x.jsx)("div",{className:Z,children:e})}),(0,x.jsx)("div",{className:J,children:(0,x.jsx)(y.D0,{className:M,type:"email",name:"email",placeholder:"Enter your email"})}),(0,x.jsx)(y.Kw,{name:"email",children:e=>(0,x.jsx)("div",{className:Z,children:e})}),(0,x.jsxs)("div",{className:J,children:[(0,x.jsx)(y.D0,{className:M,type:a?"text":"password",name:"password",placeholder:"Create a password"}),(0,x.jsx)("button",{className:z,type:"button",onClick:l,children:(0,x.jsx)("svg",{className:E,width:"18",height:"18",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-eye")})})})]}),(0,x.jsx)(y.Kw,{name:"password",children:e=>(0,x.jsx)("div",{className:Z,children:e})}),(0,x.jsx)("button",{className:Y,type:"submit",children:"Send"})]})})]})})};var R=t(1899),X=t.n(R),$=t(2723);t(5015);const ee={"react-datepicker":"Calendar_react-datepicker__aIvBg","react-datepicker__input-container":"Calendar_react-datepicker__input-container__ATOa8","react-datepicker__month-container":"Calendar_react-datepicker__month-container__iOOJ+","react-datepicker__header":"Calendar_react-datepicker__header__JSD8l","react-datepicker__current-month":"Calendar_react-datepicker__current-month__Dy2JK","react-datepicker__navigation":"Calendar_react-datepicker__navigation__gjsop","react-datepicker__day-name":"Calendar_react-datepicker__day-name__QhkFB","react-datepicker__day":"Calendar_react-datepicker__day__gyfuL","react-datepicker__day--selected":"Calendar_react-datepicker__day--selected__yrVtx","react-datepicker__day--disabled":"Calendar_react-datepicker__day--disabled__UIKz5","react-datepicker__time-name":"Calendar_react-datepicker__time-name__MUgtg","react-datepicker__day--keyboard-selected":"Calendar_react-datepicker__day--keyboard-selected__XlOZz","react-datepicker__month-text--keyboard-selected":"Calendar_react-datepicker__month-text--keyboard-selected__lMIox","react-datepicker__quarter-text--keyboard-selected":"Calendar_react-datepicker__quarter-text--keyboard-selected__Vb42w","react-datepicker__year-text--keyboard-selected":"Calendar_react-datepicker__year-text--keyboard-selected__7aYBU","react-datepicker__week":"Calendar_react-datepicker__week__8ymPy","react-datepicker__day--outside-month":"Calendar_react-datepicker__day--outside-month__SVg29",calendar:"Calendar_calendar__vKx+D",day:"Calendar_day__voALS",header:"Calendar_header__Iy6a3",inputCalendar:"Calendar_inputCalendar__Sc-4V",weekDay:"Calendar_weekDay__qahmX"};function ae(e){let{selectedDate:a,onDateChange:t}=e;const s=new Date,r=a.getDate()===s.getDate()&&a.getMonth()===s.getMonth()&&a.getFullYear()===s.getFullYear();return(0,x.jsx)("div",{children:(0,x.jsx)(X(),{calendarClassName:ee.calendar,dayClassName:()=>ee.day,renderCustomHeader:e=>{let{date:a,decreaseMonth:t,increaseMonth:s,prevMonthButtonDisabled:r,nextMonthButtonDisabled:n}=e;return(0,x.jsxs)("div",{className:ee.header,children:[(0,x.jsx)("button",{onClick:t,disabled:r,children:"<"}),(0,x.jsx)("span",{children:a.toLocaleDateString($.b,{month:"long",year:"numeric"})}),(0,x.jsx)("button",{onClick:s,disabled:n,children:">"})]})},selected:a,onChange:e=>{t(e)},dateFormat:"MMMM d",minDate:new Date,locale:$.b,weekStartsOn:0,renderCustomInput:e=>{let{value:a,onClick:t}=e;return(0,x.jsx)("input",{className:ee.customInput,value:r?"":a,onClick:t})},className:ee.inputCalendar,weekDayClassName:()=>ee.weekDay})})}var te=t(4045);const se={formWrap:"AddCard_formWrap__9zhI6",formTitle:"AddCard_formTitle__CSCfd",formInputTitle:"AddCard_formInputTitle__-wZxj",formInput:"AddCard_formInput__J106k",iconsForm:"AddCard_iconsForm__f8URq",iconsWrap:"AddCard_iconsWrap__Qc161",iconsTitle:"AddCard_iconsTitle__w-bIb",formInputcal:"AddCard_formInputcal__L08n9",Span:"AddCard_Span__4-tx7",no:"AddCard_no__+VNMC",low:"AddCard_low__oVkDn",med:"AddCard_med__t4ZHr",high:"AddCard_high__zfd21",container:"AddCard_container__F7Kum",checkmark:"AddCard_checkmark__3XP0U",deadlineStyle:"AddCard_deadlineStyle__5OMP-",deadlineContainer:"AddCard_deadlineContainer__LpbeE",span:"AddCard_span__YWyk5",AddButton:"AddCard_AddButton__KzT9F",StylePlus:"AddCard_StylePlus__4RF-v",formButton:"AddCard_formButton__+MQRW",iconWrap:"AddCard_iconWrap__VCvZe",buttonIcon:"AddCard_buttonIcon__egjKz"};var re=t(8779);const ne=()=>{const[e,a]=(0,n.useState)(""),[t,s]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[i,d]=(0,n.useState)(new Date),m=(0,c.d4)((e=>e.boards.currentBoardId)),u=(0,c.d4)((e=>e.columns.currentColumnId)),p=(0,c.d4)((e=>e.cards.cards)),h=p.filter((e=>e.columnId===u)).length,g=(0,c.wA)();return(0,x.jsxs)("div",{className:se.formWrap,children:[(0,x.jsx)("h2",{className:se.formTitle,children:"Add Card"}),(0,x.jsxs)("form",{className:se.from,onSubmit:a=>{a.preventDefault();const s=h,n={title:e,description:t,priority:r,deadline:i.getTime(),boardId:m,columnId:u,index:s};console.log(n),g((0,te.Ln)(n)),g((0,l.Oo)())},children:[(0,x.jsx)("input",{className:se.formInputTitle,type:"text",name:"title",placeholder:"Title",onChange:e=>(e=>{console.log(p),a(e.target.value)})(e),required:!0}),(0,x.jsx)("p",{className:se.errMsg,name:"title"}),(0,x.jsxs)("label",{children:[(0,x.jsx)("textarea",{className:se.formInput,rows:4,name:"text",placeholder:"Description",onChange:e=>(e=>{s(e.target.value)})(e),required:!0}),(0,x.jsx)("p",{className:se.errMsg,name:"text"})]}),(0,x.jsxs)("fieldset",{className:se.iconsForm,children:[(0,x.jsx)("legend",{className:se.iconsTitle,children:"Label color"}),(0,x.jsx)("div",{className:se.iconsWrap,children:re.G.map((e=>(0,x.jsxs)("label",{className:se.container,children:[(0,x.jsx)("input",{type:"radio",name:"icon",value:e.title,onChange:e=>(e=>{o(e.target.value)})(e),required:!0}),(0,x.jsx)("span",{style:{backgroundColor:"".concat(e.color)},className:"".concat(se.checkmark)})]},e.title)))})]}),(0,x.jsx)("p",{className:se.deadlineStyle,children:"Deadline"}),(0,x.jsxs)("div",{className:se.deadlineContainer,children:[i.getDate()===(new Date).getDate()&&i.getMonth()===(new Date).getMonth()&&i.getFullYear()===(new Date).getFullYear()?(0,x.jsx)("span",{className:se.span,children:" Today,"}):null,(0,x.jsx)(ae,{selectedDate:i,onDateChange:e=>{d(e)}})]}),(0,x.jsxs)("button",{type:"submit",className:se.formButton,children:[(0,x.jsx)("div",{className:se.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:se.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Add"]})]})]})},oe=()=>{const{selectedElId:e}=(0,c.d4)((e=>e.modal)),a=(0,c.d4)((e=>e.cards.cards)).find((a=>a._id===e)),t=(0,c.wA)(),[s,r]=(0,n.useState)(a.title),[o,i]=(0,n.useState)(a.description),[d,m]=(0,n.useState)(a.priority),[u,p]=(0,n.useState)(new Date),h=e=>{m(e.target.value)};return(0,x.jsxs)("div",{className:se.formWrap,children:[(0,x.jsx)("h2",{className:se.formTitle,children:"Edit Card"}),(0,x.jsxs)("form",{className:se.from,onSubmit:e=>{e.preventDefault();const r={title:s,description:o,priority:d,deadline:u.getTime()};console.log(r),t((0,te.w0)({id:a._id,newCard:r})),t((0,l.Oo)())},children:[(0,x.jsx)("input",{className:se.formInputTitle,type:"text",name:"title",placeholder:"Title",value:s,onChange:e=>{r(e.target.value)},required:!0}),(0,x.jsx)("p",{className:se.errMsg,name:"title"}),(0,x.jsxs)("label",{children:[(0,x.jsx)("textarea",{className:se.formInput,rows:4,name:"text",placeholder:"Description",value:o,onChange:e=>{i(e.target.value)},required:!0}),(0,x.jsx)("p",{className:se.errMsg,name:"text"})]}),(0,x.jsxs)("fieldset",{className:se.iconsForm,children:[(0,x.jsx)("legend",{className:se.iconsTitle,children:"Label color"}),(0,x.jsx)("div",{className:se.iconsWrap,children:re.G.map((e=>(0,x.jsxs)("label",{className:se.container,children:[(0,x.jsx)("input",{type:"radio",id:e.title,name:"icon",value:e.title,checked:d===e.title,onChange:h,required:!0}),(0,x.jsx)("span",{style:{backgroundColor:"".concat(e.color)},className:"".concat(se.checkmark)})]},e.title)))})]}),(0,x.jsx)("p",{className:se.deadlineStyle,children:"Deadline"}),(0,x.jsxs)("div",{className:se.deadlineContainer,children:[u.getDate()===(new Date).getDate()&&u.getMonth()===(new Date).getMonth()&&u.getFullYear()===(new Date).getFullYear()?(0,x.jsx)("span",{className:se.span,children:" Today,"}):null,(0,x.jsx)(ae,{selectedDate:u,onDateChange:e=>{p(e)}})]}),(0,x.jsxs)("button",{type:"submit",className:se.formButton,children:[(0,x.jsx)("div",{className:se.iconWrap,children:(0,x.jsx)("svg",{width:"14",height:"14",className:se.buttonIcon,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})}),"Edit"]})]})]})},ce=()=>{const e=(0,c.wA)(),{modalContent:a}=(0,c.d4)((e=>e.modal));(0,i._p)();const t=(0,n.useRef)(!1);(0,i._p)(),(0,n.useEffect)((()=>(!1===t.current&&window.addEventListener("keydown",s),()=>{t.current=!1,window.removeEventListener("keydown",s)})));const s=a=>{"Escape"===a.code&&e((0,l.Oo)())};return(0,x.jsx)("div",{onClick:a=>(a=>{a.target===a.currentTarget&&e((0,l.Oo)())})(a),className:d,children:(0,x.jsx)(u.P.div,{animate:{y:"0%"},initial:{y:"100%"},className:m,children:(e=>{switch(e){case"add-board":return(0,x.jsx)(g,{});case"edit-board":return(0,x.jsx)(b,{});case"add-column":return(0,x.jsx)(N,{});case"edit-column":return(0,x.jsx)(v,{});case"need-help":return(0,x.jsx)(S,{});case"edit-profile":return(0,x.jsx)(Q,{});case"edit-card":return(0,x.jsx)(oe,{});case"add-card":return(0,x.jsx)(ne,{})}})(a)})})},le={sideBar:"Sidebar_sideBar__A8DTG",sidebarBackdrop:"Sidebar_sidebarBackdrop__ozg8G",sideBarOpened:"Sidebar_sideBarOpened__9jug6",titleBox:"Sidebar_titleBox__xqSVd",iconBox:"Sidebar_iconBox__lGsim",logoIconContainer:"Sidebar_logoIconContainer__yiz-a",iconLogo:"Sidebar_iconLogo__P5b+p",title:"Sidebar_title__mzY+F",bordBox:"Sidebar_bordBox__l9HDF",bordTitle:"Sidebar_bordTitle__iDwHw",buttonBox:"Sidebar_buttonBox__+dqOM",buttonText:"Sidebar_buttonText__0LoRm",buttonCreate:"Sidebar_buttonCreate__t3LZl",iconCreate:"Sidebar_iconCreate__vE+2z",scrollArea:"Sidebar_scrollArea__p2BVw",bordList:"Sidebar_bordList__PS2uv",helpBox:"Sidebar_helpBox__W7BKt",helpTextBox:"Sidebar_helpTextBox__Sd7S6",helpText:"Sidebar_helpText__1vwtr",helpTextLink:"Sidebar_helpTextLink__QXL1T",buttonHelp:"Sidebar_buttonHelp__nkXAH",iconHelp:"Sidebar_iconHelp__6c8m3",helpButtonText:"Sidebar_helpButtonText__0g7gg",buttonLogOut:"Sidebar_buttonLogOut__VYxol",iconLogOut:"Sidebar_iconLogOut__GX2DR",logOutButtonText:"Sidebar_logOutButtonText__vzEjb"},ie="data:image/png;base64,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",de=t.p+"static/media/pot2x.0b7af2e73f1d0ccf06b7.png";var me=t(8083);const ue="Board_boardItem__pg3mb",pe="Board_boardButton__9AuMq",_e="Board_boardIcon__TALFy",he="Board_boardTitleBox__N1O+A",xe="Board_boardText__tGGO5",ge="Board_boardButtonBox__pijVR",be="Board_iconButton__9r8ni";var je=t(3870);const fe=e=>{let{board:a}=e;const t=(0,c.wA)(),s=(0,o.Zp)();return(0,x.jsxs)("li",{id:"boardBtn",onClick:e=>{"icon"!==e.dataset&&(s("/home/".concat(a._id)),t((0,je.lW)(a._id)),t((0,l.$t)()))},className:ue,children:[(0,x.jsxs)("div",{className:he,children:[(0,x.jsx)("svg",{width:"18",height:"18",className:_e,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-").concat(a.icon)})}),(0,x.jsx)("p",{className:xe,children:a.name})]}),(0,x.jsxs)("div",{className:ge,children:[(0,x.jsx)("button",{"data-icon":"icon",onClick:()=>{t((0,l.qf)({content:"edit-board",id:"".concat(a._id)}))},className:pe,children:(0,x.jsx)("svg",{"data-icon":"icon",className:be,width:"16",height:"16",children:(0,x.jsx)("use",{"data-icon":"icon",href:"".concat(_.A,"#icon-pencil")})})}),(0,x.jsx)("button",{className:pe,onClick:()=>{s("/home"),t((0,h.WD)(a._id))},"data-icon":"icon",children:(0,x.jsx)("svg",{"data-icon":"icon",className:be,width:"16",height:"16",children:(0,x.jsx)("use",{"data-icon":"icon",href:"".concat(_.A,"#icon-trash")})})})]})]})};var Ne=t(3248);const ve=()=>{const e=(0,c.wA)(),a=(0,c.d4)(Ne.gp),[t]=(0,me.Q)();(0,n.useEffect)((()=>{e((0,h.cS)())}),[e]);const{sideBarIsOpen:s}=(0,c.d4)((e=>e.modal));return(0,x.jsx)("div",{onClick:a=>(a=>{a.target===a.currentTarget&&e((0,l.$t)())})(a),className:"".concat(s&&le.sidebarBackdrop),children:(0,x.jsxs)("div",{className:"".concat(le.sideBar," ").concat(s&&le.sideBarOpened),children:[(0,x.jsxs)("div",{className:le.titleBox,children:[(0,x.jsxs)("div",{className:le.iconBox,children:[(0,x.jsx)("div",{className:le.logoIconContainer,children:(0,x.jsx)("svg",{className:le.iconLogo,width:"16",height:"16",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-logo")})})}),(0,x.jsx)("h2",{className:le.title,children:"Task Pro"})]}),(0,x.jsxs)("div",{className:le.bordBox,children:[(0,x.jsx)("h3",{className:le.bordTitle,children:"My Boards"}),(0,x.jsxs)("div",{className:le.buttonBox,children:[(0,x.jsx)("span",{className:le.buttonText,children:"Create a new board"}),(0,x.jsx)("button",{onClick:()=>{e((0,l.qf)({content:"add-board"}))},className:le.buttonCreate,children:(0,x.jsx)("svg",{className:le.iconCreate,width:"22",height:"22",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-plus")})})})]})]})]}),a.length>0&&(0,x.jsx)("ul",{className:le.bordList,ref:t,children:a.map((e=>(0,x.jsx)(fe,{board:e},e._id)))}),(0,x.jsxs)("div",{className:le.helpBox,children:[(0,x.jsxs)("div",{className:le.helpTextBox,children:[a.length<=2&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("picture",{className:le.imgHelp,children:[(0,x.jsx)("source",{srcSet:"".concat(ie," 1x, ").concat(de," 2x")}),(0,x.jsx)("img",{srcSet:"".concat(ie," 1x"),alt:"pot"})]}),(0,x.jsxs)("p",{className:le.helpText,children:["If you need help with"," ",(0,x.jsx)("span",{className:le.helpTextLink,children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]})]}),(0,x.jsxs)("button",{onClick:()=>{e((0,l.qf)({content:"need-help"}))},className:le.buttonHelp,children:[(0,x.jsx)("svg",{className:le.iconHelp,width:"20",height:"20",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-help")})}),(0,x.jsx)("p",{className:le.helpButtonText,children:"Need help?"})]})]}),(0,x.jsxs)("button",{onClick:()=>{e((0,T.P3)())},className:le.buttonLogOut,children:[(0,x.jsx)("svg",{className:le.iconLogOut,width:"32",height:"32",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-login")})}),(0,x.jsx)("p",{className:le.logOutButtonText,children:"Log Out"})]})]})]})})},ke="DefaultBoard_boardDefault__OGVRe",Ce="DefaultBoard_boardDefaultText__9+0UM",we="DefaultBoard_boardDefaultLink__D+uKf",Be=()=>(0,x.jsx)("div",{className:ke,children:(0,x.jsxs)("p",{className:Ce,children:["Before starting your project, it is essential ",(0,x.jsx)("span",{className:we,children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})}),Fe="Navigation_navContainer__+dgHg",Se="Navigation_buttonBurger__Kqo-y",ye="Navigation_iconBurger__Y+5FL",Ae="Navigation_navMenu__tyi6A",De="UserMenu_userInfo__78zcg",Te="UserMenu_buttonOpen__XKE8P",Le="UserMenu_userAvatarWrap__8cND4",Ie="UserMenu_userIcon__Wa0NS",We="UserMenu_userAvatar__uOf3o",Ue=()=>{const e=(0,c.wA)(),a=(0,c.d4)((e=>e.auth.user));return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:De,children:(0,x.jsxs)("button",{className:Te,type:"button",onClick:()=>{e((0,l.qf)({content:"edit-profile"}))},children:[a.name,(0,x.jsx)("div",{children:a.avatarURL?(0,x.jsx)("div",{className:We,children:(0,x.jsx)("img",{src:a.avatarURL,alt:"",className:We,width:68})}):(0,x.jsx)("div",{className:Le,children:(0,x.jsx)("div",{className:Ie,children:(0,x.jsx)("svg",{className:Ie,children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-user2")})})})})})]})})})},Oe="ThemeSelect_menuTheme__syeY8",Ve="ThemeSelect_iconChevronDown__z0Zx0",qe="ThemeSelect_titleMenuTheme__kfQsY",He="ThemeSelect_buttonMenu__M4R80",Je="ThemeSelect_menuList__tMjNr",Me="ThemeSelect_menuItem__ZUuoU",Ye="ThemeSelect_menuListHidden__TW9FY",ze=e=>{let{onSelectClose:a,isOpen:t}=e;const s=(0,c.wA)(),r=e=>{console.log(e.target.id),s((0,T.CN)({theme:"".concat(e.target.id)})),a()};return(0,x.jsxs)("ul",{"data-popup":"menu",className:"".concat(Je," ").concat(!t&&Ye),children:[(0,x.jsx)("li",{onClick:r,"data-popup":"el",id:"light",className:Me,children:"Light"}),(0,x.jsx)("li",{onClick:r,"data-popup":"el",id:"dark",className:Me,children:"Dark"}),(0,x.jsx)("li",{onClick:r,"data-popup":"el",id:"violet",className:Me,children:"Violet"})]})},Ee=()=>{const[e,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>(e&&document.body.addEventListener("click",t),()=>{document.body.removeEventListener("click",t)})));const t=e=>{"popupBtn"!==e.target.dataset.popup&&"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))};return(0,x.jsxs)("div",{"data-popup":"popupBtn",onClick:e=>(e=>{"menu"!==e.target.popup&&"el"!==e.target.popup&&a((e=>!e))})(e),className:Oe,children:[(0,x.jsx)("p",{"data-popup":"popupBtn",className:qe,children:"Theme"}),(0,x.jsx)("button",{"data-popup":"popupBtn",className:He,type:"button",children:(0,x.jsx)("svg",{"data-popup":"popupBtn",className:Ve,width:"16",height:"16",children:(0,x.jsx)("use",{"data-popup":"popupBtn",href:"".concat(_.A,"#icon-chevron-down")})})}),(0,x.jsx)(ze,{onSelectClose:()=>{a((e=>!e))},isOpen:e})]})},Ze=()=>{const e=(0,c.wA)(),{sideBarIsOpen:a}=(0,c.d4)((e=>e.modal));return(0,x.jsxs)("div",{className:Fe,children:[(0,x.jsx)("button",{className:Se,type:"button",onClick:()=>{e((0,l.p$)()),console.log(a)},children:(0,x.jsx)("svg",{className:ye,width:"18",height:"18",children:(0,x.jsx)("use",{href:"".concat(_.A,"#icon-menu")})})}),(0,x.jsxs)("div",{className:Ae,children:[(0,x.jsx)(Ee,{}),(0,x.jsx)(Ue,{})]})]})},Ke=()=>{const{isOpen:e}=(0,c.d4)((e=>e.modal)),{theme:a}=(0,c.d4)((e=>e.auth.user)),t=(0,o.zy)();return(0,x.jsxs)("div",{className:s,"data-theme":a,children:[(0,x.jsx)(ve,{}),(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)(Ze,{}),"/home"===t.pathname&&(0,x.jsx)(Be,{}),(0,x.jsx)(n.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading...."}),children:(0,x.jsx)(o.sv,{})}),e&&(0,x.jsx)(ce,{})]})]})}},3248:(e,a,t)=>{"use strict";t.d(a,{gp:()=>s});const s=e=>e.boards.boards},8779:(e,a,t)=>{"use strict";t.d(a,{G:()=>s});const s=[{title:"Without priority",color:"#595959"},{title:"Low",color:"#8fa1d0"},{title:"Medium",color:"#e09cb5"},{title:"High",color:"#bedbb0"}]},6679:(e,a,t)=>{var s={"./1.png":7919,"./10.png":9983,"./11.png":8438,"./12.png":9645,"./13.png":8516,"./14.png":8427,"./15.png":4274,"./16.png":857,"./2.png":1060,"./3.png":4957,"./4.png":98,"./5.png":4923,"./6.png":6592,"./7.png":1065,"./8.png":5198,"./9.png":7687};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=6679},7919:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/1.dfc7a45f5ebececbf5bf.png"},9983:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/10.f34b4029d15a9b88184a.png"},8438:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/11.7abda19cf4f5a50b724b.png"},9645:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/12.c99dd6d0f7748efd88ff.png"},8516:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/13.84fecbdb870f1d8f5364.png"},8427:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/14.6b3b6ec1dc44869a66c0.png"},4274:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/15.f81a00ff732a5c257fab.png"},857:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/16.0c6fb59b734e0380ddcf.png"},1060:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/2.002c62f845159321c3db.png"},4957:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/3.28e6f235782da4165a3f.png"},98:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/4.b4fe441bdcd3ca3ee357.png"},4923:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/5.426e13e9ffa745ca4ea9.png"},6592:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/6.7e4568cf35399a6a729c.png"},1065:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/7.5c693d4479342758bd4c.png"},5198:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/8.880f7f3035d4969dff7c.png"},7687:(e,a,t)=>{"use strict";e.exports=t.p+"static/media/9.3885e0fc487372ace32e.png"}}]);
//# sourceMappingURL=14.f6c04cec.chunk.js.map