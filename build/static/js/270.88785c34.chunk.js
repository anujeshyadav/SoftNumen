(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[270],{2480:function(e,a,t){"use strict";t.r(a),t.d(a,"AddTransactions",(function(){return O}));var n=t(49),l=t(11),s=t(12),r=t(13),o=t(14),c=t(1),i=t.n(c),u=t(840),d=t(838),m=t(839),f=t(207),p=t(843),b=t(860),h=t(929),g=t(859),v=t(853),y=(t(20),t(29)),E=t(65),O=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/addwallet",s.state).then((function(e){console.log(e.data.data)})).catch((function(e){console.log(e)}))},s.state={name:"",mobile_no:"",remarks:"",wallet_type:"",amount:""},s}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Transactions")),i.a.createElement(m.a,null,i.a.createElement(E.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/wallet/walletType")}},"Back")}}))),i.a.createElement(p.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(g.a,null,"Name"),i.a.createElement(v.a,{type:"text",placeholder:" Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(g.a,null,"Mobile No. "),i.a.createElement(v.a,{type:"number",placeholder:"Mobile No.",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Wallet Type"),i.a.createElement(v.a,{required:!0,type:"select",name:"wallet_type",placeholder:"Enter Iden Type",value:this.state.wallet_type,onChange:this.changeHandler},i.a.createElement("option",{value:"select"},"--Select--"),i.a.createElement("option",{value:"credit"},"Credit"),i.a.createElement("option",{value:"debit"},"Debit"))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(h.a,null,i.a.createElement(g.a,null,"Amount"),i.a.createElement(v.a,{type:"number",placeholder:"Enter Here",name:"amount",value:this.state.amount,onChange:this.changeHandler})))),i.a.createElement(d.a,null,i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(c.Component);a.default=O},853:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(17),r=t(19),o=t(1),c=t.n(o),i=t(2),u=t.n(i),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(f.mapToCssModules)(m()(a,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},859:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(1),r=t.n(s),o=t(2),c=t.n(o),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,b=Object(l.a)(e,m),h=[];o.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var s,r=!n;if(Object(d.isObject)(l)){var o,c=r?"-":"-"+a+"-";s=g(r,a,l.size),h.push(Object(d.mapToCssModules)(u()(((o={})[s]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),t)}else s=g(r,a,l),h.push(s)}}));var v=Object(d.mapToCssModules)(u()(a,!!s&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return r.a.createElement(c,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},860:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(17),r=t(19),o=t(1),c=t.n(o),i=t(2),u=t.n(i),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,i=Object(l.a)(e,p),u=Object(f.mapToCssModules)(m()(a,!!s&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:u}))},a}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},929:function(e,a,t){"use strict";var n=t(6),l=t(8),s=t(1),r=t.n(s),o=t(2),c=t.n(o),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.row,o=e.disabled,c=e.check,i=e.inline,f=e.tag,p=Object(l.a)(e,m),b=Object(d.mapToCssModules)(u()(a,!!s&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===f&&(p.disabled=o),r.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=270.88785c34.chunk.js.map