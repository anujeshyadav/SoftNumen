(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[233],{2603:function(e,t,a){"use strict";a.r(t),a.d(t,"AddSubCategory",(function(){return S}));var n=a(887),l=a(49),s=a(13),r=a(14),o=a(15),c=a(16),i=a(1),u=a.n(i),m=a(840),d=a(838),p=a(839),f=a(208),g=a(843),h=a(860),b=a(893),y=a(858),v=a(852),E=a(830),N=(a(22),a(11)),O=a(65),j=a(855),C=a.n(j),S=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler1=function(e){r.setState({selectedFile1:e.target.files[0]}),r.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler2=function(e){r.setState({selectedFile2:e.target.files[0]}),r.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler3=function(e){r.setState({selectedFile3:e.target.files[0]}),r.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler4=function(e){r.setState({selectedFile4:e.target.files[0]}),r.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("subcategory_name",r.state.subcategory_name),t.append("category",r.state.category),t.append("type",r.state.type),t.append("feature",r.state.feature),t.append("status",r.state.status),t.append("image",r.state.selectedFile1,r.state.selectedName1),t.append("thumbnail_img",r.state.selectedFile2,r.state.selectedName2),t.append("webbanner",r.state.selectedFile3,r.state.selectedName3),t.append("app_banner",r.state.selectedFile4,r.state.selectedName4);var a,l=Object(n.a)(t.values());try{for(l.s();!(a=l.n()).done;){var s=a.value;console.log(s)}}catch(o){l.e(o)}finally{l.f()}N.a.post("/admin/addsubcategory",t).then((function(e){console.log(e),"success"===e.data.msg&&(C()("Success!","You Data IS been Submitted","success"),r.props.history.push("/app/freshlist/subcategory/subCategoryList"))})).catch((function(e){console.log(e)}))},r.state={data:[],subcategory_name:"",category:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/admin/getallcategory").then((function(t){console.log(t.data.data),e.setState({data:t.data.data}),console.log(e.state.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add")),u.a.createElement(p.a,null,u.a.createElement(O.b,{render:function(e){var t=e.history;return u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/subcategory/subCategoryList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null," Sub-Category Name"),u.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"subcategory_name",value:this.state.subcategory_name,onChange:this.changeHandler}))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Category"),u.a.createElement(E.a,{type:"select",placeholder:"Select Category",name:"category",value:this.state.category,onChange:this.changeHandler},u.a.createElement("option",null,"Select Category"),this.state.data.map((function(e){return u.a.createElement("option",{value:e._id,key:e._id},e.category_name)})))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Type"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.type,onChange:this.changeHandler},u.a.createElement("option",null,"---Select---"),u.a.createElement("option",{value:"veg"},"Veg"),u.a.createElement("option",{value:"nonveg"},"Non-Veg"),u.a.createElement("option",{value:"egg"},"Egg only"))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Category Image "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler1}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Thumbnail"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler2}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"Web Banner "),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(b.a,null,u.a.createElement(y.a,null,"App Banner"),u.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler4}))),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(y.a,null,"Feature"),u.a.createElement(E.a,{type:"select",placeholder:"Select Type",name:"feature",value:this.state.feature,onChange:this.changeHandler},u.a.createElement("option",null,"Select Feature"),u.a.createElement("option",{value:"yes"},"Yes"),u.a.createElement("option",{value:"no"},"No"))),u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(d.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),a}(i.Component);t.default=S},852:function(e,t,a){"use strict";var n=a(6),l=a(8),s=a(19),r=a(21),o=a(1),c=a.n(o),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,g=e.plaintext,h=e.innerRef,b=Object(l.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),N="form-control";g?(N+="-plaintext",E=u||"input"):"file"===s?N+="-file":"range"===s?N+="-range":y&&(N=m?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,N),a);return("input"===E||u&&"function"===typeof u)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":i}))},t}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h},858:function(e,t,a){"use strict";var n=a(6),l=a(8),s=a(1),r=a.n(s),o=a(2),c=a.n(o),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,g=Object(l.a)(e,d),h=[];o.forEach((function(t,n){var l=e[t];if(delete g[t],l||""===l){var s,r=!n;if(Object(m.isObject)(l)){var o,c=r?"-":"-"+t+"-";s=b(r,t,l.size),h.push(Object(m.mapToCssModules)(u()(((o={})[s]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),a)}else s=b(r,t,l),h.push(s)}}));var y=Object(m.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:f},g,{className:y}))};y.propTypes=g,y.defaultProps=h,t.a=y},860:function(e,t,a){"use strict";var n=a(6),l=a(8),s=a(19),r=a(21),o=a(1),c=a.n(o),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,o=e.innerRef,i=Object(l.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);h.propTypes=g,h.defaultProps={tag:"form"},t.a=h},887:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(108);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s,r=!0,o=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){o=!0,s=e},f:function(){try{r||null==l.return||l.return()}finally{if(o)throw s}}}}},893:function(e,t,a){"use strict";var n=a(6),l=a(8),s=a(1),r=a.n(s),o=a(2),c=a.n(o),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(l.a)(e,d),g=Object(m.mapToCssModules)(u()(t,!!s&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),a);return"fieldset"===p&&(f.disabled=o),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=233.ad90fd1b.chunk.js.map