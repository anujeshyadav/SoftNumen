(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[289],{2669:function(e,a,t){"use strict";t.r(a),t.d(a,"AddProductType",(function(){return j}));var n=t(50),s=t(14),r=t(15),l=t(16),i=t(17),c=t(1),o=t.n(c),d=t(842),u=t(836),m=t(837),p=t(203),f=t(845),b=t(864),h=t(862),g=t(856),v=(t(22),t(11)),y=t(65),O=t(859),E=t.n(O),j=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.handleChange=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),n.append("brand_name",r.state.brandname),n.append("description",r.state.desc),n.append("status",r.state.status),v.a.post("/addbrand",n).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(E()("Sucess","Brand Added Successfully"),r.setState({brandname:""}),r.setState({desc:""}),r.setState({status:""}),r.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},r.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Product type")),o.a.createElement(m.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/softnewmen/inhouse/productType")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Product type Name"),o.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Description"),o.a.createElement(g.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(u.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),t}(c.Component);a.default=j},856:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),l=t(21),i=t(1),c=t.n(i),o=t(2),d=t.n(o),u=t(5),m=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,i=e.valid,o=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),E="form-control";b?(E+="-plaintext",O=d||"input"):"file"===r?E+="-file":"range"===r?E+="-range":v&&(E=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===O||d&&"function"===typeof d)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},862:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),i=t(2),c=t.n(i),o=t(5),d=t.n(o),u=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,i=e.widths,c=e.tag,o=e.check,p=e.size,f=e.for,b=Object(s.a)(e,m),h=[];i.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var i,c=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(u.mapToCssModules)(d()(((i={})[r]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i))),t)}else r=g(l,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},864:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),l=t(21),i=t(1),c=t.n(i),o=t(2),d=t.n(o),u=t(5),m=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,i=e.innerRef,o=Object(s.a)(e,f),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},o,{ref:i,className:d}))},a}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=289.46c8d85b.chunk.js.map