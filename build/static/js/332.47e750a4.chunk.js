(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[332],{2696:function(e,t,a){"use strict";a.r(t),a.d(t,"AddProduct",(function(){return E}));var n=a(49),s=a(13),r=a(14),i=a(15),l=a(16),o=a(1),c=a.n(o),u=a(841),d=a(839),p=a(840),f=a(205),m=a(844),h=a(861),b=a(859),g=a(853),v=(a(22),a(11)),y=a(64),O=a(856),j=a.n(O),E=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a?void 0:a.Userinfo.id),n.append("product_id",r.state.productid),n.append("qty",r.state.quantity),n.append("category_id",null===(t=r.props.location.state)||void 0===t?void 0:t.category_id),n.append("client_id",r.state.User),v.a.post("/assign_to_client",n).then((function(e){j()("Success","Sucessfully Assigned to client"),console.log(e),r.setState({User:""}),r.setState({productid:""}),r.setState({quantity:""})})).catch((function(e){console.log(e.response)}))},r.state={productid:"",userid:"",User:"",quantity:"",productName:[],AssignRole:"",rowData:[],category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.setState({productid:t}),v.a.get("/getuserlist").then((function(t){var a,n,s,r;console.log(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.users);var i=null===t||void 0===t||null===(s=t.data)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.users;e.setState({rowData:i})}))}},{key:"render",value:function(){var e;return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h2",null,"Assign To Client")),c.a.createElement(p.a,null,c.a.createElement(y.b,{render:function(e){var t=e.history;return c.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/assigntoclient")}},"Back")}}))),c.a.createElement(m.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1 "},c.a.createElement(b.a,null,"Client List"),c.a.createElement(g.a,{required:!0,type:"select",name:"User",placeholder:"Enter Iden Type",value:this.state.User,onChange:this.changeHandler},c.a.createElement("option",{value:"12ROW"},"--Selecte--"),this.state.rowData&&(null===(e=this.state.rowData)||void 0===e?void 0:e.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.full_name)}))))),c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1 "},c.a.createElement(b.a,null,"Quantity"),c.a.createElement(g.a,{required:!0,type:"number",name:"quantity",placeholder:"Enter Quantity...",value:this.state.quantity,onChange:this.changeHandler}))),c.a.createElement(d.a,null,c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mx-1 mb-1"},"Assign To Client"))))))}}]),a}(o.Component);t.default=E},853:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(19),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),d=a(5),p=a.n(d),f=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),j="form-control";h?(j+="-plaintext",O=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,j),a);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:b,className:E,"aria-invalid":c}))},t}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},859:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(1),i=a.n(r),l=a(2),o=a.n(l),c=a(5),u=a.n(c),d=a(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,f=e.size,m=e.for,h=Object(s.a)(e,p),b=[];l.forEach((function(t,n){var s=e[t];if(delete h[t],s||""===s){var r,i=!n;if(Object(d.isObject)(s)){var l,o=i?"-":"-"+t+"-";r=g(i,t,s.size),b.push(Object(d.mapToCssModules)(u()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),a)}else r=g(i,t,s),b.push(r)}}));var v=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),a);return i.a.createElement(o,Object(n.a)({htmlFor:m},h,{className:v}))};v.propTypes=h,v.defaultProps=b,t.a=v},861:function(e,t,a){"use strict";var n=a(6),s=a(8),r=a(19),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),d=a(5),p=a.n(d),f=a(4),m=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,m),u=Object(f.mapToCssModules)(p()(t,!!r&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},t}(l.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=332.47e750a4.chunk.js.map