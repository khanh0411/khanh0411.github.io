import{r,i as T,e as pe,c as n,k as m,l as be,F as B,E as d,j as y,o as a,a as t,z as v,T as D,D as u,b as k,q as K,H as me,u as X,a2 as J,x as xe,C as fe,c7 as ye}from"./index-D9h54A27.js";import{u as ge}from"./question.store-BretV-mA.js";import{u as he}from"./studentCourse.store-yeGk5SlJ.js";const _e={class:"max-w-6xl mx-auto p-6"},we={class:"mb-6"},ke={class:"flex justify-between items-center"},Ce={key:0,class:"relative w-64"},Se={class:"mb-6"},Ve={class:"flex justify-between items-center"},Te={class:"flex space-x-2"},De=["disabled"],Ae={key:0,class:"mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex justify-between items-center"},je={class:"flex items-center"},Le={key:1,class:"bg-white rounded-lg shadow-lg p-6"},Ue={class:"flex justify-between items-center mb-6"},Ge={class:"relative w-64"},$e={key:0,class:"py-8 text-center"},Ie={key:1,class:"overflow-x-auto"},Be={class:"min-w-full"},Qe={class:"bg-white divide-y divide-gray-200"},Fe={class:"px-6 py-4 font-medium"},Me={class:"px-6 py-4"},Ne={class:"px-6 py-4"},qe={class:"px-6 py-4"},ze={class:"flex items-center"},Ee={class:"w-full bg-gray-200 rounded-full h-2.5"},He={class:"ml-2 text-sm text-gray-600"},Oe={class:"px-6 py-4"},Re={class:"px-6 py-4"},Ke={class:"flex space-x-2"},Xe=["onClick","disabled"],Je={key:2,class:"bg-white rounded-lg shadow-lg p-6"},Pe={class:"text-2xl font-semibold mb-6"},We={class:"space-y-6"},Ye={class:"flex space-x-4"},Ze=["disabled"],et={key:0,class:"flex items-center justify-center"},tt={key:1},st=["disabled"],lt={key:0,class:"flex items-center justify-center"},ot={key:1},nt=["disabled"],at={key:3,class:"bg-white rounded-lg shadow-lg p-6"},rt={key:0,class:"py-8 text-center"},it={key:1,class:"space-y-4"},ut={class:"flex justify-between items-start"},dt={class:"flex-grow"},ct={class:"flex items-center space-x-2 mb-2"},vt={class:"font-medium"},pt={class:"text-sm text-gray-500"},bt={class:"text-gray-800 mb-2"},mt=["onClick"],xt={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ft={class:"bg-white rounded-lg p-6 w-full max-w-lg"},yt={class:"mb-4"},gt={class:"text-gray-600 mb-2"},ht={class:"text-gray-800 p-3 bg-gray-50 rounded"},_t={class:"mb-4"},wt={class:"flex justify-end space-x-3"},kt=["disabled"],Ct={key:0,class:"flex items-center justify-center"},St={key:1},jt={__name:"InstructorUser",setup(Vt){const P=ge(),b=he(),A=r(null),j=r(null),g=r(null),p=r(null),Q=r(null),L=r(""),x=r(""),i=r("list"),C=r([]),U=r([]),F=r([]),G=r([]),h=r(!1),o=r(!1),_=r(!1),S=r(!1),c=r({email:"",course:""}),M=T(()=>Array.isArray(C.value)?C.value.filter(s=>{var e;return(e=s.user)==null?void 0:e.full_name.toLowerCase().includes(L.value.toLowerCase())}):[]),N=T(()=>Array.isArray(U.value)?U.value.filter(s=>p.value?s.course_id===p.value:!0):[]),q=T(()=>c.value.email.trim()!==""&&c.value.course.trim()!==""),z=T(()=>x.value.trim().length>0);function V(s){o.value||(i.value=s),i.value==="list"&&(p.value="",f()),i.value==="questions"&&$(),i.value==="form"&&ae()}async function $(){o.value=!0;const s=p.value,e=await b.handleTeacherGetQuestions(s);o.value=!1,e.error?d({text:e.errors,type:"error"}):U.value=e.data}function W(s){g.value=s,S.value=!0,x.value=""}async function Y(s){if(!z.value)return;o.value=!0;const e=await b.handleTeacherReply({id_message:g.value._id,message:s});o.value=!1,e.error?d({text:e.errors,type:"error"}):(d({text:"Đã trả lời câu hỏi thành công",type:"success"}),S.value=!1,g.value=null,x.value="",$())}function Z(s){_.value=!0,j.value=s}async function ee(){o.value=!0;const s=await b.handleDeleteStudentInCourse(j.value.id);o.value=!1,s.errors?d({text:s.errors,type:"error"}):(_.value=!1,d({text:"Delete success   ",type:"success"}),f())}function te(){_.value=!1,j.value=null}function I(){c.value={email:"",course:""},h.value=!1,Q.value=null,i.value="list"}async function se(){o.value=!0;const s=await b.handleUpdateStudent({...c.value,student_id:Q.value});o.value=!1,s.errors?d({text:s.errors,type:"error"}):(d({text:"Update Success",type:"success"}),I(),f())}async function le(){o.value=!0;const s={course_id:c.value.course,query:c.value.email},e=await b.handleAddStudentByCourse(s);o.value=!1,e.errors?d({text:e.errors,type:"error"}):(d({text:"Create Success",type:"success"}),I(),f())}async function oe(){o.value=!0;const s=await P.handleGetCourseById();o.value=!1,s.errors?d({text:s.errors,type:"error"}):G.value=s}function ne(s){p.value=s,i.value==="list"&&f(),i.value==="questions"&&$()}async function f(){o.value=!0;const s=await b.handleGetListStudentCourse(p.value);o.value=!1,s.errors?d({text:s.errors,type:"error"}):C.value=s.data}async function ae(){o.value=!0;const s=await b.handleGetListUser();o.value=!1,C.value=s,s.errors?d({text:s.errors,type:"error"}):F.value=s.map(e=>new ye(e.user_id,e.email))}return pe(()=>{f(),oe()}),(s,e)=>{const E=y("GenericSelect"),re=y("GenericInput"),ie=y("MultipleSelect"),ue=y("ConfirmDialog"),de=y("InstructorLayout"),ce=y("FullScreenLoading");return a(),n(B,null,[m(de,null,{default:be(()=>{var H,O,R;return[t("div",_e,[t("div",we,[t("div",ke,[i.value==="list"||i.value==="questions"?(a(),n("div",Ce,[e[13]||(e[13]=t("label",{for:"course",class:"block text-sm font-medium text-gray-700 mb-1"},"Chọn khóa học",-1)),m(E,{id:"course",modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=l=>p.value=l),onChange:ne,options:G.value,class:"w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",disabled:o.value},null,8,["modelValue","options","disabled"])])):v("",!0)])]),t("div",Se,[t("div",Ve,[t("div",Te,[t("button",{onClick:e[1]||(e[1]=l=>V("list")),class:D(["px-4 py-2 rounded-lg transition-colors",i.value==="list"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])}," Danh sách học viên ",2),t("button",{onClick:e[2]||(e[2]=l=>V("questions")),class:D(["px-4 py-2 rounded-lg transition-colors",i.value==="questions"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])}," Câu hỏi của học viên ",2),t("button",{onClick:e[3]||(e[3]=l=>V("form")),class:D(["px-4 py-2 rounded-lg transition-colors",i.value==="form"?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},u(h.value?"Chỉnh sửa học viên":"Thêm học viên mới"),3)]),i.value==="list"?(a(),n("button",{key:0,onClick:e[4]||(e[4]=l=>V("form")),class:"flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",disabled:o.value},e[14]||(e[14]=[t("i",{class:"bi bi-plus text-lg mr-2"},null,-1),k(" Thêm học viên ")]),8,De)):v("",!0)])]),A.value?(a(),n("div",Ae,[t("div",je,[e[15]||(e[15]=t("i",{class:"bi bi-exclamation-circle mr-2"},null,-1)),k(" "+u(A.value),1)]),t("button",{onClick:e[5]||(e[5]=l=>A.value=null),class:"text-red-700 hover:text-red-900"},e[16]||(e[16]=[t("i",{class:"bi bi-x-lg"},null,-1)]))])):v("",!0),i.value==="list"?(a(),n("div",Le,[t("div",Ue,[e[18]||(e[18]=t("h2",{class:"text-2xl font-semibold"},"Danh sách học viên",-1)),t("div",Ge,[e[17]||(e[17]=t("i",{class:"bi bi-search absolute left-3 top-2.5 text-gray-500"},null,-1)),m(re,{modelValue:L.value,"onUpdate:modelValue":e[6]||(e[6]=l=>L.value=l),type:"text",placeholder:"Tìm kiếm học viên...",class:"w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"},null,8,["modelValue"])])]),(H=M.value)!=null&&H.length?(a(),n("div",Ie,[t("table",Be,[e[21]||(e[21]=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Mã học viên "),t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Tên học viên "),t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Tên khóa học "),t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tiến độ"),t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tham gia"),t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Thao tác")])],-1)),t("tbody",Qe,[(a(!0),n(B,null,K(M.value,l=>{var w;return a(),n("tr",{key:l.user._id,class:"hover:bg-gray-50"},[t("td",Fe,u(l.user.code),1),t("td",Me,u(l.user.full_name),1),t("td",Ne,u((w=l.course[0])==null?void 0:w.name),1),t("td",qe,[t("div",ze,[t("div",Ee,[t("div",{class:"bg-blue-600 h-2.5 rounded-full",style:me({width:`${l.progress}%`})},null,4)]),t("span",He,u(l.progress)+"%",1)])]),t("td",Oe,u(X(J)(l.joinAt)),1),t("td",Re,[t("div",Ke,[t("button",{onClick:ve=>Z(l),class:"p-2 ml-5 text-red-600 hover:bg-red-100 rounded-lg transition-colors",disabled:o.value},e[20]||(e[20]=[t("i",{class:"bi bi-trash"},null,-1)]),8,Xe)])])])}),128))])])])):(a(),n("div",$e,e[19]||(e[19]=[t("i",{class:"bi bi-inbox text-4xl text-gray-400"},null,-1),t("p",{class:"mt-2 text-gray-600"},"Chưa có học viên nào",-1)])))])):v("",!0),i.value==="form"?(a(),n("div",Je,[t("h2",Pe,u(h.value?"Chỉnh sửa học viên":"Thêm học viên mới"),1),t("div",We,[t("div",null,[e[22]||(e[22]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email học viên",-1)),m(ie,{modelValue:c.value.email,"onUpdate:modelValue":e[7]||(e[7]=l=>c.value.email=l),options:F.value},null,8,["modelValue","options"])]),t("div",null,[e[23]||(e[23]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Khóa học",-1)),m(E,{modelValue:c.value.course,"onUpdate:modelValue":e[8]||(e[8]=l=>c.value.course=l),options:G.value,class:"w-full",required:"",disabled:o.value},null,8,["modelValue","options","disabled"])]),t("div",Ye,[h.value?v("",!0):(a(),n("button",{key:0,onClick:le,type:"submit",class:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",disabled:o.value||!q.value},[o.value?(a(),n("span",et,e[24]||(e[24]=[t("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),k(" Đang xử lý... ")]))):(a(),n("span",tt,"Thêm học viên"))],8,Ze)),h.value?(a(),n("button",{key:1,onClick:se,type:"submit",class:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50",disabled:o.value||!q.value},[o.value?(a(),n("span",lt,e[25]||(e[25]=[t("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),k(" Đang xử lý... ")]))):(a(),n("span",ot,"Cập nhật"))],8,st)):v("",!0),t("button",{type:"button",onClick:I,class:"flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",disabled:o.value}," Hủy ",8,nt)])])])):v("",!0),i.value==="questions"?(a(),n("div",at,[e[30]||(e[30]=t("h2",{class:"text-2xl font-semibold mb-6"},"Câu hỏi của học viên",-1)),N.value.length?(a(),n("div",it,[(a(!0),n(B,null,K(N.value,l=>{var w;return a(),n("div",{key:l.id,class:"border rounded-lg p-4 hover:bg-gray-50"},[t("div",ut,[t("div",dt,[t("div",ct,[t("span",vt,u((w=l.sender)==null?void 0:w.full_name),1),t("span",pt,u(X(J)(l.timestamp)),1),t("span",{class:D(["px-2 py-1 text-xs rounded-full",l.isAnswered?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"])},u(l.isAnswered?"Đã trả lời":"Chưa trả lời"),3)]),t("p",bt,u(l.message),1)]),l.answer?v("",!0):(a(),n("button",{key:0,onClick:ve=>W(l),class:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"}," Trả lời ",8,mt))])])}),128))])):(a(),n("div",rt,e[26]||(e[26]=[t("i",{class:"bi bi-chat-left-dots text-4xl text-gray-400"},null,-1),t("p",{class:"mt-2 text-gray-600"},"Chưa có câu hỏi nào",-1)]))),S.value?(a(),n("div",xt,[t("div",ft,[e[29]||(e[29]=t("h3",{class:"text-xl font-semibold mb-4"},"Trả lời câu hỏi",-1)),t("div",yt,[t("p",gt,"Câu hỏi từ "+u((O=g.value)==null?void 0:O.sender.full_name)+":",1),t("p",ht,u((R=g.value)==null?void 0:R.message),1)]),t("div",_t,[e[27]||(e[27]=t("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Câu trả lời",-1)),xe(t("textarea",{"onUpdate:modelValue":e[9]||(e[9]=l=>x.value=l),rows:"4",class:"w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Nhập câu trả lời..."},null,512),[[fe,x.value]])]),t("div",wt,[t("button",{onClick:e[10]||(e[10]=l=>S.value=!1),class:"px-4 py-2 border rounded-lg hover:bg-gray-50"},"Hủy"),t("button",{onClick:e[11]||(e[11]=l=>Y(x.value)),disabled:!z.value||o.value,class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"},[o.value?(a(),n("span",Ct,e[28]||(e[28]=[t("div",{class:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"},null,-1),k(" Đang xử lý... ")]))):(a(),n("span",St,"Gửi câu trả lời"))],8,kt)])])])):v("",!0)])):v("",!0),m(ue,{modelValue:_.value,"onUpdate:modelValue":e[12]||(e[12]=l=>_.value=l),onAccept:ee,onDeny:te,title:"Xác nhận xóa",message:"Bạn có chắc chắn muốn xóa học viên này không?",isLoading:o.value},null,8,["modelValue","isLoading"])])]}),_:1}),m(ce,{open:o.value},null,8,["open"])],64)}}};export{jt as default};