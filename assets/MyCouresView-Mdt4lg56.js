import{_,r as g,e as w,J as M,j as i,o as c,c as m,a as e,k as d,l as n,D as v,K as k,z as L,s as C,b as x,u as y,m as h,I as N}from"./index-nqkC00__.js";const B={class:"relative my-5 cursor-pointer"},I={class:"min-w-[240px] w-full bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-1"},V={class:"relative w-full aspect-video"},R=["src","alt"],S={class:"p-4"},E={class:"font-semibold text-base text-gray-800 line-clamp-2 mb-1.5 truncate"},$={class:"text-sm text-gray-500"},j={__name:"ItemMyLearning",props:{menuIndex:{type:Number,default:null},isMenuOpen:{type:Boolean,default:!1},image:{type:String,default:"https://lh3.googleusercontent.com/proxy/C7N7BOvXjM_E9ng0hls1_ZiJ7NoKs6RQnvYbCIGTPXeUYVLMbvdyvWXx9_PBxV6Wbx-uqT3dPvzEuYo7MeEECUm3ASzNIQ"},name:{type:String,default:"Basics of C# and Unity for Complete Beginners - Part 1"},author:{type:String,default:"Khanh"}},emits:["toggleMenu","closeMenu"],setup(s,{emit:r}){const t=s,o=r,a=g(null),u=g(null);function f(l){a.value&&!a.value.contains(l.target)&&u.value&&!u.value.contains(l.target)&&o("closeMenu")}return w(()=>{document.addEventListener("click",f)}),M(()=>{document.removeEventListener("click",f)}),(l,p)=>{const b=i("RouterLink");return c(),m("div",B,[e("div",I,[e("div",V,[e("img",{src:t.image,alt:s.name,class:"w-full h-full object-cover"},null,8,R)]),e("div",S,[d(b,{class:"block"},{default:n(()=>[e("h3",E,v(s.name),1),e("p",$,v(s.author),1)]),_:1})])]),s.isMenuOpen?(c(),m("div",{key:0,ref_key:"menuRef",ref:a,class:"absolute top-10 right-3 w-60 bg-white rounded-lg shadow-xl border border-gray-100 z-50"},p[0]||(p[0]=[k('<div class="py-3 px-4 text-gray-700 font-medium border-b border-gray-100" data-v-488f069c>Lists</div><p class="px-4 py-2 text-sm text-gray-500" data-v-488f069c>You have no list</p><ul class="p-2" data-v-488f069c><li class="flex items-center px-2 py-2 hover:bg-gray-50 rounded-md cursor-pointer group" data-v-488f069c><i class="bi bi-share-fill text-gray-500 group-hover:text-gray-700" data-v-488f069c></i><span class="ml-3 text-gray-700" data-v-488f069c>Share</span></li><li class="flex items-center px-2 py-2 hover:bg-gray-50 rounded-md cursor-pointer group" data-v-488f069c><i class="bi bi-plus-lg text-gray-500 group-hover:text-gray-700" data-v-488f069c></i><span class="ml-3 text-gray-700" data-v-488f069c>Create New List</span></li><li class="flex items-center px-2 py-2 hover:bg-gray-50 rounded-md cursor-pointer group" data-v-488f069c><i class="bi bi-star-fill text-gray-500 group-hover:text-gray-700" data-v-488f069c></i><span class="ml-3 text-gray-700" data-v-488f069c>Favorite</span></li><li class="flex items-center px-2 py-2 hover:bg-gray-50 rounded-md cursor-pointer group" data-v-488f069c><i class="bi bi-folder-fill text-gray-500 group-hover:text-gray-700" data-v-488f069c></i><span class="ml-3 text-gray-700" data-v-488f069c>Archive</span></li></ul>',3)]),512)):L("",!0)])}}},T=_(j,[["__scopeId","data-v-488f069c"]]),z={class:"flex justify-center flex-col items-center"},A={class:"bg-black w-full h-40 flex justify-center flex-col items-center"},O={class:"container"},P={class:"button text-white grid auto-cols-max grid-flow-col"},U={class:"w-full container flex justify-center items-center flex-col"},Y={__name:"MyCouresView",setup(s){return(r,t)=>{const o=i("RouterLink"),a=i("MainLayout");return c(),C(a,null,{default:n(()=>[e("div",z,[e("div",A,[e("div",O,[t[2]||(t[2]=e("div",{class:"font-bold pt-10 pb-12 text-white text-4xl"},"My Learning",-1)),e("div",P,[d(o,{to:y(h).learning.path,class:"btn px-1 pb-2"},{default:n(()=>t[0]||(t[0]=[x("All courses")])),_:1},8,["to"]),d(o,{to:y(h).archived.path,class:"btn px-1 pb-2"},{default:n(()=>t[1]||(t[1]=[x("Archived")])),_:1},8,["to"])])])]),e("div",U,[N(r.$slots,"default",{},void 0,!0)])])]),_:3})}}},X=_(Y,[["__scopeId","data-v-2eee4df5"]]);export{T as I,X as M};