"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[260],{7260:(e,a,s)=>{s.r(a),s.d(a,{default:()=>S});var r=s(3216),t=s(5475);const i="Auth_authPageWrapper__QiGyE",l="Auth_authForm__-Et2v",n="Auth_registerForm__FTXoS",c="Auth_loginForm__LVUAX",m="Auth_authNav__kGdXJ",d="Auth_authLink1__G6iFP",o="Auth_authLink2__ZGHwE",h="Auth_linkActive__EmJKO",u="Auth_fieldWrapper__B6Zfo",x="Auth_field__w1nrX",_="Auth_field_password__Mk5Yq",j="Auth_notError__XqP9N",p="Auth_button__oOib1",w="Auth_iconBtn__QA+XP",N="Auth_passwordWrapper__PlJo7",v="Auth_errorMessage__-2mWy";var A=s(5043),b=s(3892),k=s(899),E=s(3003),g=s(5577),y=s(1581),q=s(579);const P=k.Ik().shape({name:k.Yj().min(2,"Name must be at least 6 characters").max(32,"Name must be no more than 16 characters").required("Name is required*"),email:k.Yj().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:k.Yj().matches(/^(?=.*[a-z])/,"Password must meet the requirements*").min(8,"Password must be at least 6 characters").max(64,"Password must be no more than 16 characters").required("Password is required*")}),f=()=>{const e=(0,E.wA)(),a=(0,E.d4)((e=>e.auth.token)),[s,r]=(0,A.useState)(!1),t=()=>{r(!s)};return(0,q.jsx)("div",{className:n,children:(0,q.jsx)(b.l1,{initialValues:{name:"",email:"",password:""},validationSchema:P,onSubmit:s=>(s=>{const{name:r,email:t,password:i}=s;e((0,g.C8)({name:r,email:t,password:i})),console.log(a)})(s),children:e=>{let{errors:a,touched:r}=e;return(0,q.jsxs)(b.lV,{children:[(0,q.jsx)("div",{className:u,children:(0,q.jsx)(b.D0,{className:x,type:"text",name:"name",placeholder:"Enter your name"})}),a.name&&r.name?(0,q.jsx)(b.Kw,{name:"name",children:e=>(0,q.jsx)("div",{className:v,children:e})}):(0,q.jsx)("div",{className:j}),(0,q.jsx)("div",{className:u,children:(0,q.jsx)(b.D0,{className:x,type:"email",name:"email",placeholder:"Enter your email"})}),a.email&&r.email?(0,q.jsx)(b.Kw,{name:"email",children:e=>(0,q.jsx)("div",{className:v,children:e})}):(0,q.jsx)("div",{className:j}),(0,q.jsxs)("div",{className:"".concat(u," ").concat(N),children:[(0,q.jsx)(b.D0,{className:x,id:_,type:s?"text":"password",name:"password",placeholder:"Create a password"}),(0,q.jsx)("button",{className:w,type:"button",onClick:t,children:(0,q.jsx)("svg",{children:(0,q.jsx)("use",{href:"".concat(y.A,"#icon-eye")})})})]}),a.password&&r.password?(0,q.jsx)(b.Kw,{name:"password",children:e=>(0,q.jsx)("div",{className:v,children:e})}):(0,q.jsx)("div",{className:j}),(0,q.jsx)("button",{className:p,type:"submit",children:"Register Now"})]})}})})},z=k.Ik().shape({email:k.Yj().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Enter a valid Email*").email("Enter a valid Email*").required("Email is required*"),password:k.Yj().matches(/^(?=.*[a-z])/,"Password must meet the requirements*").min(8,"Password must be at least 6 characters").max(64,"Password must be no more than 16 characters").required("Password is required*")}),C=()=>{const e=(0,E.wA)(),[a,s]=(0,A.useState)(!1),r=()=>{s(!a)},t=a=>{const{email:s,password:r}=a;e((0,g.eB)({email:s,password:r}))};return(0,q.jsx)("div",{className:c,children:(0,q.jsx)(b.l1,{initialValues:{email:"",password:""},validationSchema:z,children:e=>{let{errors:s,touched:i}=e;return(0,q.jsxs)(b.lV,{onSubmit:t,autoComplete:"off",children:[(0,q.jsx)("div",{className:u,children:(0,q.jsx)(b.D0,{className:x,type:"email",name:"email",placeholder:"Enter your email"})}),s.email&&i.email?(0,q.jsx)(b.Kw,{name:"email",children:e=>(0,q.jsx)("div",{className:v,children:e})}):(0,q.jsx)("div",{className:j}),(0,q.jsxs)("div",{className:"".concat(u," ").concat(N),children:[(0,q.jsx)(b.D0,{className:x,id:_,type:a?"text":"password",name:"password",placeholder:"Confirm a password"}),(0,q.jsx)("button",{className:w,type:"button",onClick:r,children:(0,q.jsx)("svg",{children:(0,q.jsx)("use",{href:"".concat(y.A,"#icon-eye")})})})]}),s.password&&i.password?(0,q.jsx)(b.Kw,{name:"password",children:e=>(0,q.jsx)("div",{className:v,children:e})}):(0,q.jsx)("div",{className:j}),(0,q.jsx)("button",{className:p,type:"submit",children:"Log In Now"})]})}})})},Z=()=>{const{id:e}=(0,r.g)();return(0,q.jsx)("div",{className:l,children:(0,q.jsxs)("div",{className:m,children:[(0,q.jsx)(t.k2,{className:"".concat(d," ").concat("register"===e?h:""),to:"/auth/register",children:"Registration"}),(0,q.jsx)(t.k2,{className:"".concat(o," ").concat("login"===e?h:""),to:"/auth/login",children:"Log In"}),"register"===e?(0,q.jsx)(f,{}):(0,q.jsx)(C,{})]})})},S=()=>(0,q.jsx)("div",{className:i,children:(0,q.jsx)(Z,{})})}}]);
//# sourceMappingURL=260.eb738b5e.chunk.js.map