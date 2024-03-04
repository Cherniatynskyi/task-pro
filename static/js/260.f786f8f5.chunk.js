"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[260],{7260:(e,s,a)=>{a.r(s),a.d(s,{default:()=>z});var r=a(3216),t=a(5475);const l="Auth_authPageWrapper__QiGyE",i="Auth_authForm__-Et2v",m="Auth_registerForm__FTXoS",n="Auth_loginForm__LVUAX",c="Auth_authNav__kGdXJ",d="Auth_authLink1__G6iFP",o="Auth_authLink2__ZGHwE",h="Auth_fieldWrapper__B6Zfo",u="Auth_field__w1nrX",x="Auth_notError__XqP9N",j="Auth_button__oOib1",p="Auth_iconBtn__QA+XP",_="Auth_errorMessage__-2mWy";var w=a(5043),v=a(3892),N=a(899),A=a(3003),b=a(4977),E=a(1581),g=a(579);const k=N.Ik().shape({name:N.Yj().min(2,"Name must be at least 6 characters").max(32,"Name must be no more than 16 characters").required("Name is required*"),email:N.Yj().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:N.Yj().matches(/^(?=.*[a-z])/,"Password must meet the requirements*").min(8,"Password must be at least 6 characters").max(64,"Password must be no more than 16 characters").required("Password is required*")}),y=()=>{const e=(0,A.wA)(),[s,a]=(0,w.useState)(!1),r=()=>{a(!s)};return(0,g.jsx)("div",{className:m,children:(0,g.jsx)(v.l1,{initialValues:{name:"",email:"",password:""},validationSchema:k,onSubmit:s=>{s.preventDefault();const a=s.currentTarget;e((0,b.kz)({name:a.elements.name.value,email:a.elements.email.value,password:a.elements.password.value})),a.reset()},children:e=>{let{errors:a,touched:t}=e;return(0,g.jsxs)(v.lV,{children:[(0,g.jsx)("div",{className:h,children:(0,g.jsx)(v.D0,{className:u,type:"text",name:"name",placeholder:"Enter your name"})}),a.name&&t.name?(0,g.jsx)(v.Kw,{name:"name",children:e=>(0,g.jsx)("div",{className:_,children:e})}):(0,g.jsx)("div",{className:x}),(0,g.jsx)("div",{className:h,children:(0,g.jsx)(v.D0,{className:u,type:"email",name:"email",placeholder:"Enter your email"})}),a.email&&t.email?(0,g.jsx)(v.Kw,{name:"email",children:e=>(0,g.jsx)("div",{className:_,children:e})}):(0,g.jsx)("div",{className:x}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)(v.D0,{className:u,type:s?"text":"password",name:"password",placeholder:"Create a password"}),(0,g.jsx)("button",{className:p,type:"button",onClick:r,children:(0,g.jsx)("svg",{children:(0,g.jsx)("use",{href:"".concat(E.A,"#icon-eye")})})})]}),a.password&&t.password?(0,g.jsx)(v.Kw,{name:"password",children:e=>(0,g.jsx)("div",{className:_,children:e})}):(0,g.jsx)("div",{className:x}),(0,g.jsx)("button",{className:j,type:"submit",children:"Register Now"})]})}})})},f=N.Ik().shape({email:N.Yj().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:N.Yj().matches(/^(?=.*[a-z])/,"Password must meet the requirements*").min(8,"Password must be at least 6 characters").max(64,"Password must be no more than 16 characters").required("Password is required*")}),q=()=>{const e=(0,A.wA)(),[s,a]=(0,w.useState)(!1),r=()=>{a(!s)},t=s=>{s.preventDefault();const a=s.currentTarget;e((0,b.E8)({email:a.elements.email.value,password:a.elements.password.value})),a.reset()};return(0,g.jsx)("div",{className:n,children:(0,g.jsx)(v.l1,{initialValues:{email:"",password:""},validationSchema:f,children:e=>{let{errors:a,touched:l}=e;return(0,g.jsxs)(v.lV,{onSubmit:t,autoComplete:"off",children:[(0,g.jsx)("div",{className:h,children:(0,g.jsx)(v.D0,{className:u,type:"email",name:"email",placeholder:"Enter your email"})}),a.email&&l.email?(0,g.jsx)(v.Kw,{name:"email",children:e=>(0,g.jsx)("div",{className:_,children:e})}):(0,g.jsx)("div",{className:x}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)(v.D0,{className:u,type:s?"text":"password",name:"password",placeholder:"Confirm a password"}),(0,g.jsx)("button",{className:p,type:"button",onClick:r,children:(0,g.jsx)("svg",{children:(0,g.jsx)("use",{href:"".concat(E.A,"#icon-eye")})})})]}),a.password&&l.password?(0,g.jsx)(v.Kw,{name:"password",children:e=>(0,g.jsx)("div",{className:_,children:e})}):(0,g.jsx)("div",{className:x}),(0,g.jsx)("button",{className:j,type:"submit",children:"Log In Now"})]})}})})},P=()=>{const{id:e}=(0,r.g)();return(0,g.jsx)("div",{className:i,children:(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)(t.k2,{className:d,to:"/auth/register",children:"Registration"}),(0,g.jsx)(t.k2,{className:o,to:"/auth/login",children:"Log In"}),"register"===e?(0,g.jsx)(y,{}):(0,g.jsx)(q,{})]})})},z=()=>(0,g.jsx)("div",{className:l,children:(0,g.jsx)(P,{})})}}]);
//# sourceMappingURL=260.f786f8f5.chunk.js.map