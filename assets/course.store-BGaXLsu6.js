import{c8 as E,c9 as o,ca as i,t as k,S as v,v as G,L as T}from"./index-nqkC00__.js";class p{constructor(u,l,d,m,h,f,y,w,S,C,_,P,A,t,s,r,e,a,g,n,b,B){this.course_id=u||"",this.user_id=l||"",this.name=d||"",this.title=m||"",this.author=h||"",this.authorBio=f||"",this.image=y||"",this.hour=w||"",this.benefits=S||"",this.requirements=C||"",this.level=_||"",this.rating=P||"",this.coursePrice=A,this.originalPrice=t,this.discount=s,this.cert=r||"",this.description=e||"",this.sections=a||[],this.category=g||"",this.enroll=n||0,this.progress=b||0,this.mapped_id=B}}const Q=E("course",()=>{const c=t=>{for(const[s,r]of Object.entries(T))if(r===t)return s;return"unknown"};async function u(){var t;try{const s=await o.post("/api/courses/getAllCoursesAtHome"),r=Object.entries(s.data).reduce((e,[a,g])=>(e[a]=g.map((n,b)=>new p(n.course_id,n.user_id,n.name,n.title,n.author,n.authorBio,n.image,n.hour,n.benefits,n.requirements,c(n.level),n.rating,Number(n.coursePrice),Number(n.originalPrice),n.discount,n.cert,n.description,n.sections,n.category,n.enroll,n.progress,b+1)),e),{});return{...s,data:r}}catch(s){return s instanceof i?{errors:((t=s.response.data)==null?void 0:t.message)||[]}:{errors:["Something wrong, please try later"]}}}async function l(){var t;try{const s=await o.post("/api/courses/all"),r=s.data.map((e,a)=>new p(e.course_id,e.user_id,e.name,e.title,e.author,e.authorBio,e.image,e.hour,e.benefits,e.requirements,c(e.level),e.rating,e.coursePrice,e.originalPrice,e.discount,e.cert,e.description,e.sections,e.category,e.enroll,e.progress,a+1));return{...s,data:r}}catch(s){return s instanceof i?{errors:((t=s.response.data)==null?void 0:t.message)||[]}:{errors:["Something wrong, please try later"]}}}async function d(){var t;try{const s=await o.post("/api/courses/getAllCourses"),r=s.data.map((e,a)=>new p(e.course_id,e.user_id,e.name,e.title,e.author,e.authorBio,e.image,e.hour,e.benefits,e.requirements,c(e.level),e.rating,e.coursePrice,e.originalPrice,e.discount,e.cert,e.description,e.sections,e.category,e.enroll,e.progress,a+1));return{...s,data:r}}catch(s){return s instanceof i?{errors:((t=s.response.data)==null?void 0:t.message)||[]}:{errors:["Something wrong, please try later"]}}}async function m(){var t;try{return await o.post("/api/courses/all2")}catch(s){return s instanceof i?{errors:((t=s.response.data)==null?void 0:t.message)||[]}:{errors:["Something wrong, please try later"]}}}async function h(t){var s;try{const r=await o.post("/api/courses/getCourseById",{course_id:t}),e=r.data,a=new p(e.course_id,e.user_id,e.name,e.title,e.author,e.authorBio,e.image,e.hour,e.benefits,e.requirements,c(e.level),e.rating,e.coursePrice,e.originalPrice,e.discount,e.cert,e.description,e.sections,e.category,e.enroll,e.progress);return{...r,data:a}}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function f(t){var e;const s=k(v.accessToken),r=G(s);try{return await o.post("/api/courses/create",{user_id:r.user.user_id,...t})}catch(a){return a instanceof i?{errors:((e=a.response.data)==null?void 0:e.message)||[]}:{errors:["Something wrong, please try later"]}}}async function y(t){var e;const s=k(v.accessToken),r=G(s);try{return await o.post("/api/courses/updateCourse",{user_id:r.user.user_id,...t})}catch(a){return a instanceof i?{errors:((e=a.response.data)==null?void 0:e.message)||[]}:{errors:["Something wrong, please try later"]}}}async function w(t){var s;try{const r=await o.post("/api/courses/deleteCourse",{course_id:t});return console.log(r),r}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function S(t){var s;try{return await o.post("/api/student_course/updateProgress",t)}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function C(t){var s;try{return await o.post("/api/courses/generateQuestionsSet",t)}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function _(t){var s;try{return await o.post("/api/courses/result",t)}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function P(t){var s;try{return await o.post("/api/courses/getResults",{course_id:t})}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}async function A(t){var s;try{return await o.post("/api/courses/getResultByIdQuestionSet",t)}catch(r){return r instanceof i?{errors:((s=r.response.data)==null?void 0:s.message)||[]}:{errors:["Something wrong, please try later"]}}}return{handleGetAllCourse:u,handleCreateCourse:f,handleUpdateCourse:y,handleDeleteCourse:w,handleGetCourse:h,handleGetAll2Course:m,handleUpdateProgress:S,handleGenerateQuestionsSet:C,handleSaveCourse:_,handleGetQuizCompleted:P,handleGetResultQuiz:A,handleGetAllCourseByTeacher:l,handleGetAllCourseAtHome:d}});export{p as C,Q as u};