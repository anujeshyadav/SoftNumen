(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[298],{1317:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Customers",TabName:[{title:"Create Customer",permission:["View","Create","Edit","Delete"]},{title:"Customer Registration",permission:["View","Create","Edit","Delete"]},{title:"Customer List",permission:["View","Create","Edit","Delete"]},{title:"Assign Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"System Managment",TabName:[{title:"Spare Part",permission:["View","Create","Edit","Delete"]},{title:"Orders",permission:["View","Create","Edit","Delete"]},{title:"Parts Catelog",permission:["View","Create","Edit","Delete"]},{title:"Scrutiny/inspections",permission:["View","Create","Edit","Delete"]},{title:"Invoice/Billing",permission:["View","Create","Edit","Delete"]},{title:"supports",permission:["View","Create","Edit","Delete"]},{title:"Service",permission:["View","Create","Edit","Delete"]}]},{title:"WAREHOUSE",TabName:[{title:"Create Warehouse",permission:["View","Create","Edit","Delete"]}]},{title:"Quotation",TabName:[{title:"Add Supplier",permission:["View","Create","Edit","Delete"]},{title:"Create Quote",permission:["View","Create","Edit","Delete"]},{title:"Edit Notes",permission:["View","Create","Edit","Delete"]},{title:"Debit Notes",permission:["View","Create","Edit","Delete"]}]},{title:"Product Managment",TabName:[{title:"Product Registration",permission:["View","Create","Edit","Delete"]},{title:"Product Search",permission:["View","Create","Edit","Delete"]},{title:"Attribute",permission:["View","Create","Edit","Delete"]}]},{title:"Parts",TabName:[{title:"Scheduler Time",permission:["View","Create","Edit","Delete"]},{title:"Parts List",permission:["View","Create","Edit","Delete"]},{title:"Parts Catalogue",permission:["View","Create","Edit","Delete"]},{title:"Product Type",permission:["View","Create","Edit","Delete"]},{title:"Model Type",permission:["View","Create","Edit","Delete"]},{title:"Variant",permission:["View","Create","Edit","Delete"]},{title:"Engine Type",permission:["View","Create","Edit","Delete"]},{title:"Valves",permission:["View","Create","Edit","Delete"]},{title:"Body Style",permission:["View","Create","Edit","Delete"]},{title:"Colors",permission:["View","Create","Edit","Delete"]},{title:"Product Name",permission:["View","Create","Edit","Delete"]}]},{title:"Order Management",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Pending",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]},{title:"Rejected",permission:["View","Create","Edit","Delete"]},{title:"Return",permission:["View","Create","Edit","Delete"]},{title:"Canceled",permission:["View","Create","Edit","Delete"]},{title:"Payment Gateway",permission:["View","Create","Edit","Delete"]},{title:"Order Tracking",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase invoices",permission:["View","Create","Edit","Delete"]},{title:"Merge invoices",permission:["View","Create","Edit","Delete"]},{title:"Add tax",permission:["View","Create","Edit","Delete"]},{title:"Courier/Shipping Charges",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Warranty Claims",TabName:[{title:"OEM Warranty",permission:["View","Create","Edit","Delete"]},{title:"Supplier Warranty",permission:["View","Create","Edit","Delete"]}]},{title:"Stock Management",TabName:[{title:"Stock Report",permission:["View","Create","Edit","Delete"]},{title:"Stock Transfer",permission:["View","Create","Edit","Delete"]}]},{title:"Ticketing",TabName:[{title:"Service Request",permission:["View","Create","Edit","Delete"]},{title:"Draft Service",permission:["View","Create","Edit","Delete"]},{title:"Pending Service",permission:["View","Create","Edit","Delete"]},{title:"Completed Service",permission:["View","Create","Edit","Delete"]},{title:"Transfer Service",permission:["View","Create","Edit","Delete"]},{title:"Cancelled Service",permission:["View","Create","Edit","Delete"]},{title:"Rejected Service",permission:["View","Create","Edit","Delete"]}]},{title:"Reports Management",TabName:[{title:"Admin Report",permission:["View","Create","Edit","Delete"]},{title:"Customer Report",permission:["View","Create","Edit","Delete"]},{title:"Staff Report",permission:["View","Create","Edit","Delete"]},{title:"Transaction Report",permission:["View","Create","Edit","Delete"]},{title:"Product Report",permission:["View","Create","Edit","Delete"]},{title:"Earning Report",permission:["View","Create","Edit","Delete"]}]},{title:"Promotion Management",TabName:[{title:"Promotion",permission:["View","Create","Edit","Delete"]},{title:"Discount&Coupon",permission:["View","Create","Edit","Delete"]}]},{title:"Media Status Management",TabName:[{title:"LivestreamStatus",permission:["View","Create","Edit","Delete"]},{title:"ChatStatus",permission:["View","Create","Edit","Delete"]}]}]},2816:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return x}));var a=i(1),l=i.n(a),n=i(927),r=i(48),s=i(838),o=i(839),c=i(840),m=i(860),d=i(859),u=i(1096),p=i(853),E=i(207),C=i(963),v=i(965),D=i(960),w=i(998),g=i(1317),f=i(29),V=i(856),b=i.n(V),N=(i(850),i(136)),y=i(195),h=i(196),S=i.n(h);function O(e){var t,i=Object(a.useState)(""),V=Object(r.a)(i,2),h=V[0],O=V[1],x=Object(a.useState)(""),j=Object(r.a)(x,2),R=j[0],k=j[1],T=Object(a.useState)([]),P=Object(r.a)(T,2),M=P[0],L=P[1],A=Object(a.useState)(""),J=Object(r.a)(A,2),_=J[0],F=J[1],W=Object(a.useState)(!1),B=Object(r.a)(W,2),I=B[0],q=B[1],z=Object(a.useState)(!1),G=Object(r.a)(z,2),H=G[0],Q=G[1],U=Object(a.useState)({}),K=Object(r.a)(U,2),X=K[0],Y=K[1],Z=Object(a.useState)({}),$=Object(r.a)(Z,2),ee=($[0],$[1]),te=function(){return Q(!H)},ie=function(e,t,i,a,l){if(t){M.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===a){if(M[t].permission.includes(i));else M[t].permission.push(i)}else{var l=M.find((function(e,t){return e.pagename===a}));if(!1===((null===l||void 0===l?void 0:l.pagename)===a)){var n=M.concat({pagename:a,permission:[i]});L(n)}}}));if(M.length<1){var n=M.concat({pagename:a,permission:[i]});L(n)}}else null===M||void 0===M||M.map((function(e,t){var l=null===e||void 0===e?void 0:e.pagename;a===l&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(i),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&M.splice(t,1)}))};Object(a.useEffect)((function(){console.log(M)}),[M]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:""},l.a.createElement(o.a,{xl:12},l.a.createElement(c.a,null,l.a.createElement("div",{className:"container"}),l.a.createElement(m.a,{onSubmit:function(e){var t;e.preventDefault();var i=JSON.parse(localStorage.getItem("userData")),a=new FormData;a.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),a.set("role_name",R),a.set("description",h),a.set("selectedarray",JSON.stringify(M)),f.a.post("/addroles",a).then((function(e){console.log(e),b()("Success","Role Created"),L(""),O(""),k("");var t,i=document.getElementsByName("check"),a=Object(n.a)(i);try{for(a.s();!(t=a.n()).done;){t.value.checked=!1}}catch(l){a.e(l)}finally{a.f()}})).catch((function(e){console.log(e)}))}},l.a.createElement("div",{className:"container mt-5"},l.a.createElement(s.a,{className:"mb-3 container"},l.a.createElement(o.a,null,l.a.createElement(d.a,null,"Enter Role Name*"),l.a.createElement(u.a,{className:"maininput"},l.a.createElement(p.a,{disabled:!0,value:R,onChange:function(e){return k(e.target.value)},type:"text",placeholder:"Choose Role",className:"form-control inputs"}),l.a.createElement(E.a,{onClick:function(){Object(y.d)().then((function(e){var t,i,a,l=S.a.xml2json(e.data,{compact:!0,spaces:2});Y(null===(t=JSON.parse(l))||void 0===t||null===(i=t.CreateAccount)||void 0===i||null===(a=i.MyDropdown)||void 0===a?void 0:a.dropdown),ee(JSON.parse(l))})).catch((function(e){console.log(e)})),te()},color:"primary",className:"mybtn primary"},l.a.createElement(N.e,{onClick:function(e){return e.preventDefault()},fill:"white"})))),l.a.createElement(o.a,null,l.a.createElement(d.a,null,"Enter Role Description * "),l.a.createElement(p.a,{required:!0,value:h,onChange:function(e){return O(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),l.a.createElement("section",{className:"mt-5 container"},l.a.createElement(s.a,{className:"gy-0 container"},g.a&&(null===g.a||void 0===g.a?void 0:g.a.map((function(e,t){var i;return l.a.createElement(o.a,{key:t,style:{borderRadius:"12px",height:"".concat(I&&_===t?"400px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},l.a.createElement(s.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},l.a.createElement(o.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},l.a.createElement("div",{className:"align-item-center"},l.a.createElement("input",{className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(i){!function(e,t){q(e),F(t)}(i.target.checked,t),ie(i.target.value,i.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),l.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),l.a.createElement(o.a,{className:"gy-2"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("span",{className:"mx-3"}," View"))),l.a.createElement(o.a,{className:"gy-2"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("span",{className:"mx-3"}," Create"))),l.a.createElement(o.a,{className:"gy-2"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("span",{className:"mx-3"}," Edit"))),l.a.createElement(o.a,{className:"gy-2"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("span",{className:"mx-3"}," Delete")))),I&&_===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(i=e.TabName)||void 0===i?void 0:i.map((function(e,t){var i;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{key:t,className:""},l.a.createElement(o.a,{lg:"4",sm:"4",md:"4"},l.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(i=e.permission)||void 0===i?void 0:i.map((function(t,i){return l.a.createElement(o.a,{key:i,lg:"2",md:"2",sm:"2"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("input",{name:"check",id:"item_".concat(t),onClick:function(i){ie(i.target.value,i.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))}))))):null)})))),l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement("div",{className:"d-flex justify-content-center mb-2"},l.a.createElement(E.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Submit"))))))))),l.a.createElement(C.a,Object.assign({fullscreen:"xl",size:"lg",backdrop:!1,isOpen:H,toggle:te},e),l.a.createElement(v.a,{toggle:te},"Role List"),l.a.createElement(D.a,null,l.a.createElement("div",{className:"modalheaderaddrol p-1"},l.a.createElement("h3",null,"Role List"),l.a.createElement(w.a,{className:"tableofrole",bordered:!0,borderless:!0,hover:!0,responsive:!0,size:"sm",striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"S.No."),l.a.createElement("th",null,"Role Name"))),l.a.createElement("tbody",null,X&&(null===X||void 0===X||null===(t=X.option)||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("tr",{className:"tabletr",onClick:function(t){return function(e){var t;k(null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value),te()}(e)},style:{cursor:"pointer"},key:t},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,null===e||void 0===e?void 0:e._text))})))))))))}function x(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(O,null)))}},850:function(e,t,i){}}]);
//# sourceMappingURL=298.0845f52c.chunk.js.map