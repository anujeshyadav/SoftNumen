(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[367],{1612:function(e,t,a){},2838:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a(38),r=a(1),c=a.n(r),o=a(4),i=(a(1612),a(204)),u=function(e){var t=e.imageSrc,a=Object(r.useState)(1),n=Object(l.a)(a,2),u=n[0],m=n[1],s=Object(r.useState)({x:0,y:0}),d=Object(l.a)(s,2),E=d[0],v=d[1];Object(r.useEffect)((function(){var e=function(e){e.deltaY>0?e.shiftKey?m((function(e){return e>.1?e-.2:e})):m((function(e){return e>.2?e-.1:e})):e.deltaY<0&&(e.shiftKey?m((function(e){return e+.2})):m((function(e){return e+.1})))};return window.addEventListener("wheel",e),function(){window.removeEventListener("wheel",e)}}),[]);var f=function(e){"up"===e?v((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y-15})})):"down"===e?v((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y+15})})):"left"===e?v((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x-15})})):"right"===e&&v((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x+15})}))};return c.a.createElement("div",{className:"image-zoom-container"},c.a.createElement("div",{className:"zoom-controls"},c.a.createElement(i.a,{size:"sm",onClick:function(){m((function(e){return e+.1}))},color:"primary",outline:!0},c.a.createElement("strong",null,"+")),c.a.createElement(i.a,{size:"sm",onClick:function(){m((function(e){return e>.2?e-.1:e}))},color:"primary",outline:!0},c.a.createElement("strong",null,"-")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("up")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2191")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("down")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2193")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("left")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2190")),c.a.createElement(i.a,{size:"sm",onClick:function(){return f("right")},color:"primary",outline:!0},c.a.createElement("strong",null,"\u2192")),c.a.createElement(i.a,{size:"sm",onClick:function(){m(1),v({x:5,y:0})},color:"primary",outline:!0},c.a.createElement("strong",null,"Reset"))),c.a.createElement("div",{className:"image-zoom"},c.a.createElement("img",{src:t,alt:"Image",style:{transform:"scale(".concat(u,") translate(").concat(E.x,"px, ").concat(E.y,"px)"),width:"100%"},onClick:function(e){var t=e.target.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top,l=(a-t.width/2)*(u-1),r=(n-t.height/2)*(u-1);m(2),v((function(e){return{x:e.x-l,y:e.y-r}}))}})))},m=a(838),s=a(839),d=a(604),E=a(102),v=a(843),f=a(844),g=a(845),p=a(837),b=a(841),y=a(849),h=a(828),j=a(136),O=a(106),x=a(48),N=a(76),C=a(133),w=a(193),k=a.n(w);t.default=function(){var e,t=Object(r.useState)(""),a=Object(l.a)(t,2),o=a[0],w=a[1],S=Object(r.useState)([]),z=Object(l.a)(S,2),_=z[0],P=z[1],F=Object(r.useState)({}),I=Object(l.a)(F,2),D=I[0],q=I[1],J=Object(r.useState)([]),Q=Object(l.a)(J,2),K=Q[0],Y=Q[1],A=Object(r.useState)([]),H=Object(l.a)(A,2),L=H[0],R=H[1],B=Object(r.useState)(!1),W=Object(l.a)(B,2),X=W[0],G=W[1],M=Object(r.useState)(0),T=Object(l.a)(M,2),U=(T[0],T[1]),V=Object(r.useState)([]),Z=Object(l.a)(V,2),$=(Z[0],Z[1]),ee=Object(r.useState)(null===K||void 0===K?void 0:K.map((function(e){return{quantity:0,elementData:e}}))),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],le=Object(r.useContext)(N.a);return Object(r.useEffect)((function(){Object(O.x)().then((function(e){console.log(null===e||void 0===e?void 0:e.Parts_Catalogue),q(null===e||void 0===e?void 0:e.Parts_Catalogue);var t=Object.keys(null===e||void 0===e?void 0:e.Parts_Catalogue);console.log(t),w(0),console.log(null===e||void 0===e?void 0:e.Parts_Catalogue),Y(null===e||void 0===e?void 0:e.Parts_Catalogue[t[0]]),R(null===e||void 0===e?void 0:e.Parts_Catalogue[t[0]]),P(t)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=new Array(null===K||void 0===K?void 0:K.length).fill(0);ne(e)}),[K]),Object(r.useEffect)((function(){console.log(L)}),[L]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement("a",null,"Home")),c.a.createElement(E.a,null,c.a.createElement("a",null,_[o])),c.a.createElement(E.a,{active:!0},"Product")))),c.a.createElement(m.a,null,!X&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:"mb-2",lg:"3",md:"3",sm:"3",xs:"12"},c.a.createElement("div",{className:"collapse-bordered collapse-border mb-3"},null===_||void 0===_?void 0:_.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{style:{backgroundColor:"".concat(o===t?"#055761":""),color:"".concat(o===t?"white":"")},className:"collapse-border-item",key:t,onClick:function(){return function(e,t){e&&G(!0),Y(D[e]),R(D[e]),w(t)}(e,t)}},c.a.createElement(f.a,{className:"cardheadercustme"},c.a.createElement(g.a,{className:"lead collapse-title "},c.a.createElement("div",{className:""},c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement("div",{className:"arrowdowandup"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("span",{style:{backgroundColor:"".concat(o===t?"#055761":""),color:"".concat(o===t?"white":"")}},e.substring(0,15)),o===t?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"ml-2"},c.a.createElement(j.a,{className:"aiarrow "}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"ml-2"},c.a.createElement(j.e,{className:"aiarrow"}))))))))))))}))))),c.a.createElement(s.a,{lg:X?"8":"5",md:X?"8":"5",sm:X?"8":"5",xs:"12"},c.a.createElement("div",{className:"d-flex justify-content-start"},X?c.a.createElement(x.e,{style:{cursor:"pointer"},onClick:function(){return G(!1)},size:"25px",fill:"#055761",className:""}):""),K&&K?c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{imageSrc:null===(e=K[0])||void 0===e?void 0:e.Part_Image})):c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{imageSrc:"https://res.cloudinary.com/dc7hzwpbm/image/upload/v1683461876/software_development.jpg"}))),c.a.createElement(s.a,{lg:"4",md:"4",sm:"4",xs:"12"},c.a.createElement("div",{style:{height:window.innerHeight-150},className:"tableheadingmy"},c.a.createElement(p.a,{bordered:!0,hover:!0,striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Part Name"),c.a.createElement("th",null,"Part Number"),c.a.createElement("th",null,"Qty"),c.a.createElement("th",null,"Add to Cart "),c.a.createElement("th",null,"Part Quantity"))),c.a.createElement("tbody",null,K&&(null===K||void 0===K?void 0:K.map((function(e,t){return c.a.createElement("tr",{key:e._id},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.Part_Name),c.a.createElement("td",null,e.Part_Number),c.a.createElement("td",null,c.a.createElement("span",{className:"d-flex"},c.a.createElement(i.a,{style:{padding:"7px 8px"},className:"minusbutton",color:"primary",size:"sm",onClick:function(){return e=t,void ne((function(t){var a=Object(n.a)(t);return a[e]>0&&(a[e]-=1),a}));var e}},"-"),c.a.createElement("div",{className:"inputheading"},c.a.createElement("input",{style:{width:"40px"},type:"number",name:"cart",min:"0",value:ae[t],onChange:function(e){handleQuantityChange(t,e.target.value)},onKeyDown:function(e){["e","E","+","-"].includes(e.key)&&e.preventDefault()},maxlength:"4",size:"2"}))," ",c.a.createElement(i.a,{onClick:function(){return e=t,void ne((function(t){var a=Object(n.a)(t);return a[e]+=1,a}));var e},style:{padding:"7px 8px"},color:"primary",size:"sm"},c.a.createElement("strong",null,"+")))),c.a.createElement("td",null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{width:"71px"},className:"addtocart d-flex"},ae[t]>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(C.b,{title:"Click to add to Cart",onClick:function(){return function(e,t){var a=JSON.parse(localStorage.getItem("userData"));ae[e]>0&&($((function(l){var r=Object(n.a)(l);U((function(t){return t+ae[e]}));var c=r.findIndex((function(t){var a;return(null===t||void 0===t||null===(a=t.product)||void 0===a?void 0:a._id)===K[e]._id})),o={userId:null===a||void 0===a?void 0:a._id,productId:null===t||void 0===t?void 0:t._id,quantity:ae[e]};return console.log(o),Object(O.a)(o).then((function(e){console.log(e.data);var t=JSON.parse(localStorage.getItem("userData"));Object(O.c)(null===t||void 0===t?void 0:t._id).then((function(e){null===le||void 0===le||le.setPartsCatalougueCart(null===e||void 0===e?void 0:e.cart)})).catch((function(e){console.log(e.response)}))})).catch((function(e){var t,a,n,l;(console.log(e.response),null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)&&k()("Warning","".concat(null===(n=e.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message))})),-1!==c?r[c].quantity+=ae[e]:r.push({product:K[e],quantity:ae[e]}),r})),ne((function(t){var a=Object(n.a)(t);return a[e]=0,a})))}(t,e)},style:{cursor:"pointer"},color:"green",size:40})):null,c.a.createElement(b.a,{className:"dropdown-notification nav-item"},c.a.createElement(y.a,{tag:"a",className:"nav-link nav-link-label"},c.a.createElement(x.a,{color:"#055761",size:25}),c.a.createElement(h.a,{style:{position:"absolute",top:"-1px",right:"-2px"},pill:!0,color:"primary",className:"badge-up cartbadgecatalougue"},ae[t])))))),c.a.createElement("td",null,e.Part_Qty))})))))))),c.a.createElement(m.a,null))}}}]);
//# sourceMappingURL=367.38b8e07b.chunk.js.map