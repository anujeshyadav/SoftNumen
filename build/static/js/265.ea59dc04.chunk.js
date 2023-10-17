(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[265],{2511:function(e,a,t){"use strict";t.r(a);var n=t(50),l=t(4),s=t(38),r=t(1),o=t.n(r),c=t(843),i=t(838),m=t(839),u=t(204),d=t(846),p=t(864),f=t(894),b=t(863),h=t(857),g=(t(22),t(10)),E=t(65);a.default=function(e){var a=Object(r.useState)({name:"",email:"",password:"",mobile:"",address:"",delivery_zone:"",status:""}),t=Object(s.a)(a,2),v=t[0],y=t[1],O=function(e){y(Object(l.a)(Object(l.a)({},v),{},Object(n.a)({},e.target.name,e.target.value)))};return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(i.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Hub")),o.a.createElement(m.a,null,o.a.createElement(E.b,{render:function(e){var a=e.history;return o.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),o.a.createElement(d.a,null,o.a.createElement(p.a,{className:"m-1",onSubmit:function(a){a.preventDefault(),console.log("submitHandler",v),g.a.post("/admin/addhub",v).then((function(a){console.log("response",a.data.data),e.history.push("/app/freshlist/hubs/hubList")})).catch((function(e){console.log(e)}))}},o.a.createElement(i.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Hub Name"),o.a.createElement(h.a,{type:"text",placeholder:"Hub Name",name:"name",value:v.name,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Mobile No."),o.a.createElement(h.a,{type:"tel",maxlength:"10",placeholder:"Mobile",name:"mobile",value:v.mobile,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Email"),o.a.createElement(h.a,{type:"email",placeholder:"Enter Email",name:"email",value:v.email,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Password"),o.a.createElement(h.a,{type:"password",placeholder:"Enter Password",name:"password",value:v.password,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Address"),o.a.createElement(h.a,{type:"text",placeholder:"Enter Address",name:"address",id:"address",value:v.address,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6"},o.a.createElement(f.a,null,o.a.createElement(b.a,null,"Delivery Zone"),o.a.createElement(h.a,{type:"text",placeholder:"",name:"delivery_zone",value:v.delivery_zone,onChange:O}))),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:O},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(i.a,{className:"m-2"},o.a.createElement(E.b,{render:function(e){e.history;return o.a.createElement(u.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Hub")}}))))))}},857:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",y=m||"input"):"file"===s?O+="-file":"range"===s?O+="-range":E&&(O=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},863:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),r=t.n(s),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(l.a)(e,d),h=[];o.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var s,r=!n;if(Object(u.isObject)(l)){var o,c=r?"-":"-"+a+"-";s=g(r,a,l.size),h.push(Object(u.mapToCssModules)(m()(((o={})[s]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),t)}else s=g(r,a,l),h.push(s)}}));var E=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return r.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:E}))};E.propTypes=b,E.defaultProps=h,a.a=E},864:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,i=Object(l.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},894:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),r=t.n(s),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(3),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(l.a)(e,d),b=Object(u.mapToCssModules)(m()(a,!!s&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(f.disabled=o),r.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=265.ea59dc04.chunk.js.map