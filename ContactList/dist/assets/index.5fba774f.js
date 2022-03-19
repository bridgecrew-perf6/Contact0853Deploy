import{r as f,o as m,c as h,a as t,b as p,t as b,n as V,p as g,d as y,w as A,e as c,v as d,f as k,g as I,F as L,h as $,i as q,j as H,k as M}from"./vendor.be6c6a35.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&_(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function _(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}};N();var v=(e,n)=>{const i=e.__vccOpts||e;for(const[_,o]of n)i[_]=o;return i};const T={name:"App"},R={id:"app"},B={id:"nav"};function j(e,n,i,_,o,s){const l=f("router-link"),a=f("router-view");return m(),h("div",R,[t("div",B,[p(l,{to:"/Home"}),p(l,{to:"/FunctionEdit"}),p(l,{to:"/UserLogin"}),p(l,{to:"/FunctionCreate"})]),p(a)])}var D=v(T,[["render",j]]);const P={name:"MyButtons",props:{name:"",data:"",grey:{type:Boolean,default:()=>!1},orange:{type:Boolean,default:()=>!1},blue:{type:Boolean,default:()=>!1}},methods:{userClick(){this.$emit("userClick")}}};function G(e,n,i,_,o,s){return m(),h("button",{class:V([i.orange?"orange":i.grey?"grey":"blue"]),onClick:n[0]||(n[0]=(...l)=>s.userClick&&s.userClick(...l))},b(i.name),3)}var U=v(P,[["render",G],["__scopeId","data-v-b6dbc90a"]]),Q="/assets/Vuelogo.03d6d6da.png",W="data:image/png;base64,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";const O={name:"ContactHeader",props:{},methods:{toLogin(){this.$router.push("/userlogin")}}},S=e=>(g("data-v-44bacc79"),e=e(),y(),e),Y={class:"header"},Z=S(()=>t("div",{class:"leftside"},[t("img",{class:"Vuelogo",src:Q}),t("div",{class:"link"},[t("a",null,"Contacts")])],-1)),K={class:"rightside"},X=S(()=>t("img",{class:"AnonymousUser",src:W},null,-1)),z=[X];function J(e,n,i,_,o,s){return m(),h("div",Y,[Z,t("div",K,[t("div",{class:"link",onClick:n[0]||(n[0]=(...l)=>s.toLogin&&s.toLogin(...l))},z)])])}var E=v(O,[["render",J],["__scopeId","data-v-44bacc79"]]);const tt={name:"UserLogin",props:{},data(){return{uname:"",password:"",isFalse:!1}},components:{ContactHeader:E,MyButtons:U},methods:{async submitData(){await fetch("https://contact0853.herokuapp.com/auth",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:this.uname.trim(),password:this.password})}).then(e=>e.json()).then(e=>{e.status==0?this.isFalse=!0:e.status==1&&(this.isFalse=!1,this.$router.push("/Home"))})}}},w=e=>(g("data-v-6d12d1fe"),e=e(),y(),e),et={class:"container"},nt={class:"form"},ot=w(()=>t("label",{for:"uname"},[t("b",null,"User Account:")],-1)),st=w(()=>t("br",null,null,-1)),at=w(()=>t("br",null,null,-1)),lt=w(()=>t("label",{for:"psw"},[t("b",null,"Password:")],-1)),it=w(()=>t("br",null,null,-1)),rt=w(()=>t("br",null,null,-1)),ct={key:0,class:"incorrect"};function dt(e,n,i,_,o,s){const l=f("contact-header"),a=f("my-buttons");return m(),h("div",null,[p(l),t("div",et,[t("div",nt,[t("form",{onSubmit:n[2]||(n[2]=A(()=>{},["prevent"]))},[ot,st,c(t("input",{type:"text",placeholder:"bob","onUpdate:modelValue":n[0]||(n[0]=C=>o.uname=C),required:""},null,512),[[d,o.uname]]),at,lt,it,c(t("input",{type:"password",placeholder:"1234","onUpdate:modelValue":n[1]||(n[1]=C=>o.password=C),required:""},null,512),[[d,o.password]]),rt,p(a,{class:"button",name:"Login",onUserClick:s.submitData},null,8,["onUserClick"]),o.isFalse?(m(),h("p",ct," Error! Username cannot be found, please try again. ")):k("",!0)],32)])])])}var ut=v(tt,[["render",dt],["__scopeId","data-v-6d12d1fe"]]);const pt={name:"SearchBar",components:{ButtonTemp:U},data(){},props:{},methods:{createSwitch(){this.$router.push("/FunctionCreate")},enterSearch(e){this.$emit("search",this.searchWord)}}},x=e=>(g("data-v-18fa16f1"),e=e(),y(),e),_t=x(()=>t("div",{class:"white"},null,-1)),mt={class:"input-group"},ht=x(()=>t("p",{class:"contactSign"},"Contacts",-1));function ft(e,n,i,_,o,s){const l=f("button-temp");return m(),h("div",null,[_t,t("div",mt,[ht,c(t("input",{type:"text",class:"searchbar",placeholder:"Type a contact name","onUpdate:modelValue":n[0]||(n[0]=a=>e.searchWord=a),onKeyup:n[1]||(n[1]=I((...a)=>s.enterSearch&&s.enterSearch(...a),["enter"]))},null,544),[[d,e.searchWord]]),p(l,{class:"button",name:"Search",grey:!0,onClick:s.enterSearch},null,8,["onClick"]),p(l,{class:"button",name:"+ Add",orange:!0,onUserClick:s.createSwitch},null,8,["onUserClick"])])])}var vt=v(pt,[["render",ft],["__scopeId","data-v-18fa16f1"]]),Ct="/assets/Editbutton.0e8cfa59.png",bt="/assets/Deletebutton.cd4a7557.png";const gt={name:"ContactProfile",data(){return{}},created(){console.log(this.Contact)},props:{Contact:{type:Object}},methods:{editContact(){this.$router.push("/FunctionEdit/"+this.Contact.contactid)},async deleteContact(){confirm("Do you want to proceed to delete the contact information?")?await fetch("https://contact0853.herokuapp.com/contacts/delete/"+this.Contact.contactid,{method:"DELETE",headers:{"Content-type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),this.$router.go()}):console.log("Contact information was not deleted!")}}},F=e=>(g("data-v-1a00f512"),e=e(),y(),e),yt={class:"Box"},wt={class:"Profilepicture"},Et=["src"],Ft={class:"Name"},At={class:"Contactinformation"},kt=F(()=>t("br",null,null,-1)),Ut=F(()=>t("br",null,null,-1)),St={class:"Functionbuttons"},xt=F(()=>t("img",{class:"icon",src:Ct},null,-1)),Vt=[xt],It=F(()=>t("img",{class:"icon",src:bt},null,-1)),Lt=[It];function $t(e,n,i,_,o,s){return m(),h("div",yt,[t("div",wt,[t("img",{src:`${i.Contact.image}`,onerror:"this.onerror=null; this.src='https://semantic-ui.com/images/avatar2/large/kristy.png'",alt:"KristysProfilePicture"},null,8,Et)]),t("div",null,[t("div",Ft,[t("p",null,b(i.Contact.fname)+" "+b(i.Contact.lname),1)]),t("div",At,[t("p",null,b(i.Contact.mnumber),1),kt,t("p",null,"Email: "+b(i.Contact.email),1),Ut,t("p",null,"Facebook: "+b(i.Contact.facebook),1)]),t("div",St,[t("div",{class:"Editbutton",onClick:n[0]||(n[0]=(...l)=>s.editContact&&s.editContact(...l))},Vt),t("div",{class:"Deletebutton",onClick:n[1]||(n[1]=(...l)=>s.deleteContact&&s.deleteContact(...l))},Lt)])])])}var qt=v(gt,[["render",$t],["__scopeId","data-v-1a00f512"]]);const Ht={name:"ContactCollection",async created(){await fetch("https://contact0853.herokuapp.com/contacts/getmany",{method:"GET",headers:{"Content-type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),this.Contacts=e})},data(){return{Contacts:""}},components:{Contact:qt},props:{searchWord:""},methods:{},computed:{searchFilter:function(){return console.log("Searchword: "+this.searchWord),Object.values(this.Contacts).filter(e=>e.fname.toLowerCase().match(this.searchWord.toLowerCase())||e.lname.toLowerCase().match(this.searchWord.toLowerCase()))}}},Mt={class:"container"},Nt={key:0,class:"noResults"};function Tt(e,n,i,_,o,s){const l=f("contact");return m(),h("div",Mt,[(m(!0),h(L,null,$(s.searchFilter,(a,C)=>(m(),h("div",{key:C},[p(l,{Contact:a},null,8,["Contact"])]))),128)),s.searchFilter.length==0?(m(),h("span",Nt," Error! No results found, please try again. ")):k("",!0)])}var Rt=v(Ht,[["render",Tt],["__scopeId","data-v-48a1463c"]]);const Bt={name:"Home",props:{},data(){return{searchWord:""}},components:{ContactHeader:E,ContactCollection:Rt,Functionalities:vt},methods:{getSearchword(e){this.searchWord=e}}},jt={class:"container"},Dt={class:"entries"};function Pt(e,n,i,_,o,s){const l=f("contact-header"),a=f("functionalities"),C=f("contact-collection");return m(),h("div",jt,[p(l),p(a,{onSearch:s.getSearchword},null,8,["onSearch"]),t("div",Dt,[p(C,{searchWord:o.searchWord},null,8,["searchWord"])])])}var Gt=v(Bt,[["render",Pt],["__scopeId","data-v-85bec34a"]]);const Qt={name:"FunctionEdit",components:{ContactHeader:E},async created(){await fetch("https://contact0853.herokuapp.com/contacts/getone/"+this.$route.params.id,{method:"GET",headers:{"Content-type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),this.FunctionEdit=e})},methods:{goToHome(){this.$router.push("/home")},async saveEntries(){delete this.FunctionEdit[0]._id,console.log(this.FunctionEdit[0]),await fetch("https://contact0853.herokuapp.com/contacts/update/"+this.$route.params.id,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(this.FunctionEdit[0])}).then(e=>e.json()).then(e=>{e.error==1?alert(e.msg):(alert("Sucessfully updated Contact!"),this.goToHome())})}},data(){return{FunctionEdit:[{}]}}},u=e=>(g("data-v-13ba6365"),e=e(),y(),e),Wt={class:"container"},Ot=u(()=>t("div",{class:"head",align:"left"},[t("p",{class:"contact"},"Contact"),t("p",{class:"editfunction"},"Edit")],-1)),Yt={class:"editContactForm",align:"left"},Zt=u(()=>t("label",null,"First Name*:",-1)),Kt=u(()=>t("br",null,null,-1)),Xt=u(()=>t("br",null,null,-1)),zt=u(()=>t("label",null,"Last Name*:",-1)),Jt=u(()=>t("br",null,null,-1)),te=u(()=>t("label",null," Mobile Number*:",-1)),ee=u(()=>t("br",null,null,-1)),ne=u(()=>t("br",null,null,-1)),oe=u(()=>t("label",null,"E-Mail Adress:",-1)),se=u(()=>t("br",null,null,-1)),ae=u(()=>t("label",null," Facebook Username: ",-1)),le=u(()=>t("br",null,null,-1)),ie=u(()=>t("label",null," Image ",-1)),re=u(()=>t("br",null,null,-1)),ce={class:"buttons"},de=u(()=>t("button",{type:"submit",class:"savefunction"}," Save ",-1));function ue(e,n,i,_,o,s){const l=f("contact-header");return m(),h("div",Wt,[p(l),Ot,t("div",Yt,[t("form",{onSubmit:n[7]||(n[7]=A((...a)=>s.saveEntries&&s.saveEntries(...a),["prevent"]))},[Zt,Kt,c(t("input",{id:"fname",type:"text",placeholder:"Firstname","onUpdate:modelValue":n[0]||(n[0]=a=>o.FunctionEdit[0].fname=a),required:""},null,512),[[d,o.FunctionEdit[0].fname]]),Xt,zt,Jt,c(t("input",{id:"lname",type:"text",placeholder:"Lastname","onUpdate:modelValue":n[1]||(n[1]=a=>o.FunctionEdit[0].lname=a),required:""},null,512),[[d,o.FunctionEdit[0].lname]]),te,ee,c(t("input",{id:"mobileNum",type:"text",placeholder:"Mobile Number","onUpdate:modelValue":n[2]||(n[2]=a=>o.FunctionEdit[0].mnumber=a),required:""},null,512),[[d,o.FunctionEdit[0].mnumber]]),ne,oe,se,c(t("input",{id:"email",type:"email",placeholder:"E-Mail","onUpdate:modelValue":n[3]||(n[3]=a=>o.FunctionEdit[0].email=a)},null,512),[[d,o.FunctionEdit[0].email]]),ae,le,c(t("input",{id:"facebook",type:"text",placeholder:"Facebook","onUpdate:modelValue":n[4]||(n[4]=a=>o.FunctionEdit[0].facebook=a)},null,512),[[d,o.FunctionEdit[0].facebook]]),ie,re,c(t("input",{id:"imageUrl",type:"url",placeholder:"Image URL","onUpdate:modelValue":n[5]||(n[5]=a=>o.FunctionEdit[0].image=a)},null,512),[[d,o.FunctionEdit[0].image]]),t("div",ce,[de,t("button",{class:"closefunction",onClick:n[6]||(n[6]=(...a)=>s.goToHome&&s.goToHome(...a))}," Close ")])],32)])])}var pe=v(Qt,[["render",ue],["__scopeId","data-v-13ba6365"]]);const _e={name:"FunctionCreate",components:{ContactHeader:E},methods:{goToHome(){this.$router.push("/home"),window.scrollTo(0,0)},async saveEntries(){console.log(this.newContact),await fetch("https://contact0853.herokuapp.com/contacts/add",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(this.newContact)}).then(e=>e.json()).then(e=>{e.error==1?alert(e.msg):(alert("Added Contact"),this.goToHome())})}},data(){return{newContact:{contactid:"",fname:"",lname:"",mnumber:"",email:"",facebook:"",image:""}}}},r=e=>(g("data-v-6065f506"),e=e(),y(),e),me={class:"container"},he=r(()=>t("div",{class:"head",align:"left"},[t("p",{class:"contactLabel"},"Contact"),t("p",{class:"add"},"Add")],-1)),fe={class:"newContactForm",align:"left"},ve=r(()=>t("label",null,"Contact ID*",-1)),Ce=r(()=>t("br",null,null,-1)),be=r(()=>t("label",null,"First Name*",-1)),ge=r(()=>t("br",null,null,-1)),ye=r(()=>t("label",null,"Last Name*",-1)),we=r(()=>t("br",null,null,-1)),Ee=r(()=>t("label",null,"Mobile No*",-1)),Fe=r(()=>t("br",null,null,-1)),Ae=r(()=>t("br",null,null,-1)),ke=r(()=>t("label",null,"E-Mail",-1)),Ue=r(()=>t("br",null,null,-1)),Se=r(()=>t("label",null,"Facebook",-1)),xe=r(()=>t("br",null,null,-1)),Ve=r(()=>t("label",null,"Image Url",-1)),Ie=r(()=>t("br",null,null,-1)),Le={class:"buttons"},$e=r(()=>t("button",{type:"submit",class:"save"},"Save",-1));function qe(e,n,i,_,o,s){const l=f("contact-header");return m(),h("div",me,[p(l),he,t("div",fe,[t("form",{onSubmit:n[8]||(n[8]=A((...a)=>s.saveEntries&&s.saveEntries(...a),["prevent"]))},[ve,Ce,c(t("input",{id:"contactID",type:"number",placeholder:"Contact ID","onUpdate:modelValue":n[0]||(n[0]=a=>o.newContact.contactid=a),required:""},null,512),[[d,o.newContact.contactid]]),be,ge,c(t("input",{id:"fname",type:"text",placeholder:"Firstname","onUpdate:modelValue":n[1]||(n[1]=a=>o.newContact.fname=a),required:""},null,512),[[d,o.newContact.fname]]),ye,we,c(t("input",{id:"lname",type:"text",placeholder:"Lastname","onUpdate:modelValue":n[2]||(n[2]=a=>o.newContact.lname=a),required:""},null,512),[[d,o.newContact.lname]]),Ee,Fe,c(t("input",{id:"mobileNum",type:"text",placeholder:"Mobile Number","onUpdate:modelValue":n[3]||(n[3]=a=>o.newContact.mnumber=a),required:""},null,512),[[d,o.newContact.mnumber]]),Ae,ke,Ue,c(t("input",{id:"email",type:"email",placeholder:"E-Mail","onUpdate:modelValue":n[4]||(n[4]=a=>o.newContact.email=a)},null,512),[[d,o.newContact.email]]),Se,xe,c(t("input",{id:"facebook",type:"text",placeholder:"Facebook","onUpdate:modelValue":n[5]||(n[5]=a=>o.newContact.facebook=a)},null,512),[[d,o.newContact.facebook]]),Ve,Ie,c(t("input",{id:"imageUrl",type:"url",placeholder:"Image URL","onUpdate:modelValue":n[6]||(n[6]=a=>o.newContact.image=a)},null,512),[[d,o.newContact.image]]),t("div",Le,[$e,t("button",{class:"close",onClick:n[7]||(n[7]=(...a)=>s.goToHome&&s.goToHome(...a))},"Close")])],32)])])}var He=v(_e,[["render",qe],["__scopeId","data-v-6065f506"]]);const Me=[{path:"/",redirect:"/Userlogin"},{path:"/UserLogin",name:"UserLogin",component:ut},{path:"/Home",name:"Home",component:Gt},{path:"/FunctionEdit/:id",name:"FunctionEdit",component:pe},{path:"/FunctionCreate",name:"FunctionCreate",component:He}],Ne=q({history:H(),routes:Me});M(D).use(Ne).mount("#app");
