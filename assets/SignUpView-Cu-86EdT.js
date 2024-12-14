import{_ as U,r as v,i as B,w as n,d as u,o as P,a,e as s,u as b,f as y,c3 as d,g as m,t as p,D as h,c4 as T,c5 as k,c6 as F}from"./index-Ct7bBCdm.js";import{n as N}from"./system.utils-B3Z3hxQT.js";import{u as R}from"./auth.store-DOR3p7Kt.js";import"./index-C_HyQ6wr.js";const q={class:"mx-7 text-sm font-medium"},A={class:"mt-8"},G={class:"mt-5"},I={class:"mt-5"},D={class:"mt-5"},M={__name:"SignUpView",emits:["submit"],setup(O,{emit:V}){const g=V,{notify:C}=F(),S=R(),w={full_name:"",email:"",password:"",passwordConfirmation:""},c={full_name:"",email:"",password:"",passwordConfirmation:""},l=v({...c}),o=v({...w}),f=v(!1);async function x(){let r=!0;if(o.value={...w},l.value.full_name.trim()===""&&(o.value.full_name="This field is required",r=!1),l.value.email.trim()===""?(o.value.email="This field is required",r=!1):T(l.value.email.trim())||(o.value.email="This field is not in email format",r=!1),l.value.password.trim()===""?(o.value.password="This field is required",r=!1):k(l.value.password.trim())||(o.value.password="Passwords need to be 8 characters or more and have a combination of uppercase letters, lowercase letters, numbers and symbols.",r=!1),l.value.passwordConfirmation!==l.value.password&&(o.value.passwordConfirmation="Passwords don't match",r=!1),r){f.value=!0;const e=await S.handleCreateUser(l.value);f.value=!1,e.errors?N(e.errors,"error"):(g("submit"),C({text:" Create successfully",type:"success"}),l.value={...c})}}return(r,e)=>{const _=u("RouterLink"),i=u("SmallComponent"),E=u("FullScreenLoading"),L=u("GuestLayout");return P(),B(L,null,{default:n(()=>[a("form",{class:"form rounded-lg overflow-hidden w-auto h-auto",onSubmit:h(x,["prevent"])},[s(_,{to:b(y).signIn.path},{default:n(()=>e[4]||(e[4]=[a("button",{class:"signin-btn"},"Login",-1)])),_:1},8,["to"]),s(_,{to:b(y).signUp.path},{default:n(()=>e[5]||(e[5]=[a("button",{class:"signup-btn"},"Register",-1)])),_:1},8,["to"]),a("div",q,[a("div",A,[e[6]||(e[6]=a("label",null,"Name",-1)),s(d,{modelValue:l.value.full_name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.full_name=t),type:"text",placeholder:"Enter your Email..",class:"mt-3 invalid:border-red-500",error:!!o.value.full_name},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(o.value.full_name),1)]),_:1})]),a("div",G,[e[7]||(e[7]=a("label",null,"Email Address",-1)),s(d,{modelValue:l.value.email,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.email=t),type:"text",placeholder:"Enter your Email..",class:"mt-3 invalid:border-red-500",error:!!o.value.email},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(o.value.email),1)]),_:1})]),a("div",I,[e[8]||(e[8]=a("label",null,"Password",-1)),s(d,{modelValue:l.value.password,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.password=t),type:"password",placeholder:"Enter your Password",class:"mt-3 invalid:border-red-500",error:!!o.value.password},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(o.value.password),1)]),_:1})]),a("div",D,[e[9]||(e[9]=a("label",null,"Confirm Password",-1)),s(d,{modelValue:l.value.passwordConfirmation,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.passwordConfirmation=t),type:"password",placeholder:"Enter your Password",class:"mt-3 invalid:border-red-500",error:!!o.value.passwordConfirmation},null,8,["modelValue","error"]),s(i,null,{default:n(()=>[m(p(o.value.passwordConfirmation),1)]),_:1})]),e[10]||(e[10]=a("button",{class:"primary-button !w-full my-5"},"Register",-1))])],32),s(E,{open:f.value},null,8,["open"])]),_:1})}}},K=U(M,[["__scopeId","data-v-5d2deb35"]]);export{K as default};