(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[360],{2660:function(e,a,t){"use strict";t.r(a);var n=t(33),l=t(48),r=t(1),c=t.n(r),o=t(840),u=t(838),m=t(839),i=t(929),s=t(859),d=t(853),p=t(207),v=t(843),E=t(860),g=t(830),b=(t(20),t(29)),f=t(1006),h=t.n(f),y=t(856),S=t.n(y),O=(t(888),t(1083),[]);a.default=function(){var e=Object(r.useState)(null),a=Object(l.a)(e,2),t=(a[0],a[1]),f=Object(r.useState)(null),y=Object(l.a)(f,2),j=(y[0],y[1]),C=Object(r.useState)(null),N=Object(l.a)(C,2),_=(N[0],N[1]),x=Object(r.useState)(null),w=Object(l.a)(x,2),q=(w[0],w[1]),D=Object(r.useState)(""),k=Object(l.a)(D,2),P=k[0],R=k[1],F=Object(r.useState)(""),A=Object(l.a)(F,2),I=A[0],B=A[1],J=Object(r.useState)([]),K=Object(l.a)(J,2),T=K[0],U=K[1],V=Object(r.useState)([]),G=Object(l.a)(V,2),z=G[0],L=G[1],M=Object(r.useState)([]),Q=Object(l.a)(M,2),Y=(Q[0],Q[1],Object(r.useState)([])),H=Object(l.a)(Y,2),W=H[0],X=H[1],Z=Object(r.useState)(""),$=Object(l.a)(Z,2),ee=$[0],ae=$[1],te=Object(r.useState)(""),ne=Object(l.a)(te,2),le=ne[0],re=ne[1],ce=Object(r.useState)(""),oe=Object(l.a)(ce,2),ue=oe[0],me=oe[1],ie=Object(r.useState)(""),se=Object(l.a)(ie,2),de=se[0],pe=se[1],ve=Object(r.useState)(""),Ee=Object(l.a)(ve,2),ge=Ee[0],be=Ee[1],fe=Object(r.useState)(""),he=Object(l.a)(fe,2),ye=he[0],Se=he[1],Oe=Object(r.useState)(""),je=Object(l.a)(Oe,2),Ce=je[0],Ne=je[1],_e=Object(r.useState)(""),xe=Object(l.a)(_e,2),we=xe[0],qe=xe[1],De=Object(r.useState)(""),ke=Object(l.a)(De,2),Pe=ke[0],Re=ke[1],Fe=Object(r.useState)(""),Ae=Object(l.a)(Fe,2),Ie=Ae[0],Be=Ae[1],Je=Object(r.useState)(""),Ke=Object(l.a)(Je,2),Te=Ke[0],Ue=Ke[1],Ve=Object(r.useState)(""),Ge=Object(l.a)(Ve,2),ze=Ge[0],Le=Ge[1],Me=Object(r.useState)(""),Qe=Object(l.a)(Me,2),Ye=Qe[0],He=Qe[1],We=Object(r.useState)(""),Xe=Object(l.a)(We,2),Ze=Xe[0],$e=Xe[1],ea=Object(r.useState)(!1),aa=Object(l.a)(ea,2),ta=(aa[0],aa[1],Object(r.useState)([])),na=Object(l.a)(ta,2),la=na[0],ra=na[1],ca=Object(r.useState)([]),oa=Object(l.a)(ca,2),ua=oa[0],ma=(oa[1],Object(r.useState)("")),ia=Object(l.a)(ma,2),sa=ia[0],da=ia[1],pa=Object(r.useState)(""),va=Object(l.a)(pa,2),Ea=va[0],ga=va[1],ba=Object(r.useState)(""),fa=Object(l.a)(ba,2),ha=fa[0],ya=fa[1],Sa=Object(r.useState)(""),Oa=Object(l.a)(Sa,2),ja=Oa[0],Ca=Oa[1],Na=Object(r.useState)(""),_a=Object(l.a)(Na,2),xa=_a[0],wa=_a[1],qa=Object(r.useState)(""),Da=Object(l.a)(qa,2),ka=Da[0],Pa=Da[1],Ra=Object(r.useState)(""),Fa=Object(l.a)(Ra,2),Aa=(Fa[0],Fa[1],Object(r.useState)("")),Ia=Object(l.a)(Aa,2),Ba=Ia[0],Ja=Ia[1],Ka=Object(r.useState)([]),Ta=Object(l.a)(Ka,2),Ua=Ta[0],Va=Ta[1],Ga=Object(r.useState)(""),za=Object(l.a)(Ga,2),La=(za[0],za[1]),Ma=Object(r.useState)([{partname:"",partseriel:"",quantity:""}]),Qa=Object(l.a)(Ma,2),Ya=Qa[0],Ha=Qa[1];Object(r.useEffect)((function(){var e,a,n,l=JSON.parse(localStorage.getItem("userData")),r=null===l||void 0===l||null===(e=l.role)||void 0===e?void 0:e.find((function(e){return"Create Account"===(null===e||void 0===e?void 0:e.pageName)}));t(null===r||void 0===r?void 0:r.permission.includes("View")),_(null===r||void 0===r?void 0:r.permission.includes("Create")),j(null===r||void 0===r?void 0:r.permission.includes("Edit")),q(null===r||void 0===r?void 0:r.permission.includes("Delete"));var c=new FormData;c.append("user_id",null===l||void 0===l||null===(a=l.Userinfo)||void 0===a?void 0:a.id),c.append("role",null===l||void 0===l||null===(n=l.Userinfo)||void 0===n?void 0:n.role),b.a.post("/getrolelistdropdown",c).then((function(e){var a,t,n=Object.values(null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.roles);Va(n)})),b.a.get("/getallstates").then((function(e){var a;U(null===(a=e.data)||void 0===a?void 0:a.states)})).catch((function(e){console.log(e.response.data)}))}),[]);var Wa=function(e,a){if(e.length)for(var t=0;t<e.length;t++)ua.push(e[t].id);var l=e.map((function(e){return e.id}));ra(l);var r=Object(n.a)(new Set(ua));if(1===r.length){var c=r[0],o=new FormData;o.append("state_id",c),b.a.post("/getcity",o).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))}else L([])},Xa=function(e,a){var t=e.map((function(e){return e.id}));ra(t)},Za=function(e,a){var t=Object(n.a)(Ya);t[e][a.target.name]=a.target.value,Ha(t)};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{className:"float-left"},"Add here"))),c.a.createElement("div",{className:"container "},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(Ya))}},Ya.map((function(e,a){return c.a.createElement("div",{className:"form-inline my-2",key:a},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Part Name"),c.a.createElement(d.a,{type:"text",name:"name",placeholder:"Part Name",value:e.name||"",onChange:function(e){return Za(a,e)}})),c.a.createElement(s.a,null,"Part Serial No."),c.a.createElement(d.a,{type:"text",name:"partseriel",placeholder:"Part Seriel",value:e.partseriel||"",onChange:function(e){return Za(a,e)}}),c.a.createElement(s.a,null,"Quantity "),c.a.createElement(d.a,{type:"text",name:"quantity",placeholder:"Quantity",value:e.quantity||"",onChange:function(e){return Za(a,e)}}),a?c.a.createElement(p.a,{className:"button remove ml-1",color:"primary",onClick:function(){return function(e){var a=Object(n.a)(Ya);a.splice(e,1),Ha(a)}(a)}},"Remove"):null)})),c.a.createElement("div",{className:"button-section"},c.a.createElement(p.a,{onClick:function(){Ha([].concat(Object(n.a)(Ya),[{name:"",partseriel:"",quantity:""}]))},color:"primary",className:"mr-1 mt-2 mx-2"},"Add"),c.a.createElement(p.a,{color:"primary",className:"mr-1 mt-2 mx-2 button submit",type:"submit"},"Submit")))),c.a.createElement(v.a,null,c.a.createElement(E.a,{className:"m-1",onSubmit:function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),l=Object(n.a)(new Set(O)),r=Object(n.a)(new Set(ua)),c=new FormData;c.append("created_by",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),c.append("password",sa),c.append("full_name",P),c.append("gstin_no",I),c.append("username",Ba),c.append("city",ee),c.append("mobile",de),c.append("email",Ea),c.append("status",ha),c.append("role",ja),c.append("company_name",xa),c.append("company_type",ka),c.append("place_supply",we),c.append("billing_street",Te),c.append("billing_city",ee),c.append("billing_state",Pe),c.append("billing_country",ge),c.append("billing_pincode",Ye),c.append("shipping_street",ze),c.append("shipping_city",ue),c.append("shipping_state",Ie),c.append("shipping_country",ye),c.append("shipping_pincode",Ze),c.append("phone_no",Ce),r.length>0?c.append("state_id",la.toString()):c.append("state_id",W),c.append("city_id",l),b.a.post("/createuser",c).then((function(e){var a;(null===(a=e.data)||void 0===a?void 0:a.success)&&(S()("Success!","Submitted SuccessFull!","success"),Ca(""),ya(""),ga(""),La(""),Ne(""),Ja(""),R(""),da(""),Se(""),Be(""),me(""),Le(""),$e(""))})).catch((function(e){console.log(e)}))}},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(u.a,null),c.a.createElement(s.a,{for:"cars"}," Product Seriel No. *"),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{required:!0,showCheckbox:"true",isObject:"false",options:T,onSelect:Wa,onRemove:Xa,displayValue:"state_title"})))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null," Select Role*"),c.a.createElement(g.a,{required:!0,id:"AssignRole",type:"select",name:"AssignRole",value:ja,onChange:function(e){return Ca(e.target.value)}},c.a.createElement("option",{value:""},"--Select Role--"),Ua&&(null===Ua||void 0===Ua?void 0:Ua.map((function(e,a){return c.a.createElement("option",{key:a,value:e},e)})))))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Name *"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"fullname",value:P,onChange:function(e){return R(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Display Code *"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:Ba,onChange:function(e){return Ja(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Mobile Number *"),c.a.createElement(d.a,{required:!0,type:"number",maxLength:12,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},size:10,min:0,placeholder:"0123456789",name:"Mobile_no",value:de,onChange:function(e){return pe(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Email *"),c.a.createElement(d.a,{required:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:Ea,onChange:function(e){return ga(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Password"),c.a.createElement(d.a,{required:!0,type:"password",placeholder:"Enter password",name:"password",value:sa,onChange:function(e){return da(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Company Name"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter CompanyName",name:"CompanyName",value:xa,onChange:function(e){return wa(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Phone Number "),c.a.createElement(d.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,maxLength:12,size:10,placeholder:"0123456789",name:"Phone_no",value:Ce,onChange:function(e){return Ne(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Company Type"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter Companytype",name:"Companytype",value:ka,onChange:function(e){return Pa(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"GSTIN"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter GSTIN No.",name:"GSTIN",value:I,onChange:function(e){return B(e.target.value)}}))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(u.a,null),c.a.createElement(s.a,{for:"cars"}," State *"),"supplier"===ja?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{required:!0,showCheckbox:"true",isObject:"false",options:T,onSelect:Wa,onRemove:Xa,displayValue:"state_title"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{required:!0,name:"SelectedState",value:W,onChange:function(e){var a=new FormData;X(e.target.value),a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)}))))))),c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(s.a,{for:"cars"},"City * "),c.a.createElement(h.a,{required:!0,options:z,onSelect:function(e,a){if(console.log(e),e.length)for(var t=0;t<e.length;t++)O.push(e[t].id)},onRemove:function(e,a){console.log(e),console.log(a)},displayValue:"name"})),"supplier"===ja?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{lg:"6",md:"6"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Place of Supply"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter Place_of_Supply",name:"Place_of_Supply",value:we,onChange:function(e){return qe(e.target.value)}})))):null),c.a.createElement("hr",null),c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"mt-2",lg:"6",md:"6",sm:"12"},c.a.createElement("h4",{className:"mt-5 pb-2"},"Billing Address :"),c.a.createElement(m.a,{className:"",lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,{for:"cars"},"Choose Country"),c.a.createElement("select",{placeholder:"Enter City",name:"B_Country",value:ge,onChange:function(e){return be(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select Country--"),c.a.createElement("option",{value:"India"},"India")))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,{for:"cars"},"Choose State"),c.a.createElement("select",{name:"B_State",value:Pe,onChange:function(e){console.log(e.target.value),Re(e.target.value);var a=new FormData;a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,{for:"cars"},"Choose City"),c.a.createElement("select",{placeholder:"Enter City",name:"B_City",value:ee,onChange:function(e){return ae(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select City--"),z&&(null===z||void 0===z?void 0:z.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)}))))))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Street"),c.a.createElement(d.a,{required:!0,type:"text",placeholder:"Enter Street",name:"B_Street",value:Te,onChange:function(e){return Ue(e.target.value)}}))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"PinCode"),c.a.createElement(d.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,placeholder:"Enter PinCode",name:"B_PinCode",value:Ye,onChange:function(e){return He(e.target.value)}})))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement("hr",null),c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"ml-2",lg:"6",md:"6",sm:"12"},c.a.createElement(d.a,{name:"check",onChange:function(e){var a;a=e.target.checked,re(a),a?(Se(ge),Be(Pe),me(ee),Le(Te),$e(Ye)):(Se(""),Be(""),me(""),Le(""),$e(""))},style:{height:"15px",width:"20px"},type:"checkbox"})),c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"ml-3"},c.a.createElement("h5",null," Same as Billing Address "))),c.a.createElement("h4",{className:"py-2"},"Shipping Address :"),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,{for:"cars"},"Choose Country"),c.a.createElement("select",{placeholder:"Enter City",name:"S_Country",disabled:!!le,value:ye,onChange:function(e){return Se(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select Country--"),c.a.createElement("option",{value:"India"},"India")))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,{for:"cars"},"Choose State"),c.a.createElement("select",{name:"S_State",value:Ie,onChange:function(e){Be(e.target.value);var a=new FormData;a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities),L(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(s.a,{for:"cars"},"Choose City"),c.a.createElement(i.a,null,c.a.createElement("select",{placeholder:"Enter City",name:"S_City",value:ue,onChange:function(e){return me(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select City--"),z&&(null===z||void 0===z?void 0:z.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)})))))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Street"),c.a.createElement(d.a,{required:!0,disabled:!!le,type:"text",placeholder:"Enter Street",name:"S_Street",value:ze,onChange:function(e){return Le(e.target.value)}}))),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(i.a,null,c.a.createElement(s.a,null,"PinCode"),c.a.createElement(d.a,{required:!0,disabled:!!le,type:"number",placeholder:"Enter PinCode",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,name:"S_PinCode",value:Ze,onChange:function(e){return $e(e.target.value)}}))))),c.a.createElement(u.a,{className:"mt-2"},c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(s.a,{className:""},c.a.createElement("h4",null,"Status")),c.a.createElement("div",{className:"form-label-group",onChange:function(e){return ya(e.target.value)}},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(u.a,null,c.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},888:function(e,a,t){}}]);
//# sourceMappingURL=360.1d518761.chunk.js.map