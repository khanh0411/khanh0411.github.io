import{P as j}from"./ProfileView-Cvgjr1Ub.js";import{r as n,c as i,k as v,l as F,F as L,j as P,o as c,a as e,z as p,b as u}from"./index-CeYvoknt.js";const V={class:"bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto"},A={class:"mb-6 flex flex-col items-center"},N={class:"relative"},B=["src"],z={class:"space-y-4"},E={key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"},R={class:"bg-white rounded-xl p-6 w-full max-w-xl"},S={class:"mb-4 flex justify-center"},T=["src"],d="https://i.pravatar.cc/150?img=3",X={__name:"ProfilePictureView",setup(U){const s=n(d),g=n(null),l=n(null),m=n(null),r=n(null),o=n(0),b=n(!1),h=()=>{g.value.click()},x=f=>{const t=f.target.files[0];if(t){const a=new FileReader;a.onload=I=>{l.value=I.target.result},a.readAsDataURL(t)}},y=()=>{alert("Chức năng chọn từ thư viện sẽ được triển khai")},w=()=>{o.value+=90,r.value&&(r.value.style.transform=`rotate(${o.value}deg)`)},_=()=>{l.value&&(s.value=l.value,l.value=null,o.value=0)},k=()=>{l.value=null,o.value=0},C=()=>{s.value=d};return(f,t)=>{const a=P("FullScreenLoading");return c(),i(L,null,[v(j,null,{default:F(()=>[e("div",V,[e("div",A,[e("div",N,[e("img",{src:s.value,alt:"Profile Picture",class:"w-48 h-48 rounded-full object-cover border-4 border-blue-100 shadow-md"},null,8,B),s.value&&s.value!==d?(c(),i("button",{key:0,onClick:C,class:"absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition"},t[0]||(t[0]=[e("i",{class:"ri-delete-bin-line"},null,-1)]))):p("",!0)])]),e("div",z,[e("input",{type:"file",ref_key:"fileInput",ref:g,onChange:x,accept:"image/*",class:"hidden"},null,544),e("button",{onClick:h,class:"w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"},t[1]||(t[1]=[e("i",{class:"ri-upload-cloud-line mr-2"},null,-1),u(" Tải ảnh từ máy ")])),e("button",{onClick:y,class:"w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"},t[2]||(t[2]=[e("i",{class:"ri-image-line mr-2"},null,-1),u(" Chọn từ thư viện ")]))]),l.value?(c(),i("div",E,[e("div",R,[t[4]||(t[4]=e("h2",{class:"text-xl font-semibold mb-4"},"Chỉnh sửa ảnh",-1)),e("div",S,[e("div",{ref_key:"cropperContainer",ref:m,class:"relative overflow-hidden",style:{width:"400px",height:"400px"}},[e("img",{src:l.value,ref_key:"cropperImage",ref:r,class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-none"},null,8,T)],512)]),e("div",{class:"flex justify-between mt-4"},[e("button",{onClick:w,class:"bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"},t[3]||(t[3]=[e("i",{class:"ri-repeat-line"},null,-1),u(" Xoay ")])),e("div",null,[e("button",{onClick:k,class:"mr-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"}," Hủy "),e("button",{onClick:_,class:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"}," Lưu ")])])])])):p("",!0)])]),_:1}),v(a,{open:b.value},null,8,["open"])],64)}}};export{X as default};