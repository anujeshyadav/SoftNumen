(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[336],{2544:function(e,a,t){"use strict";t.r(a),t.d(a,"AddLanguage",(function(){return j}));var n=t(49),s=t(13),l=t(14),r=t(15),i=t(16),o=t(1),c=t.n(o),u=t(840),d=t(838),f=t(839),m=t(208),p=t(843),g=t(860),b=t(858),h=t(852),v=t(830),O=(t(22),t(11)),y=t(65),j=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("lang_name",l.state.name),null!==l.state.selectedFile&&a.append("image",l.state.selectedFile,l.state.selectedName),O.a.post("/admin/add_language",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/language/languageList")})).catch((function(e){console.log(e)}))},l.state={name:"",selectedFile:null,selectedName:""},l}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Language")),c.a.createElement(f.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/language/languageList")}},"Back")}}))),c.a.createElement(p.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,{className:"mb-2"},c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Language Name"),c.a.createElement(h.a,{type:"text",placeholder:"Brand Name",name:"name",value:this.state.name,onChange:this.changeHandler})),c.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Language Image"),c.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler}))),c.a.createElement(d.a,null,c.a.createElement(m.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(o.Component);a.default=j},852:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(19),r=t(21),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),f=t.n(d),m=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,b=e.innerRef,h=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(l)>-1,O=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),j="form-control";g?(j+="-plaintext",y=u||"input"):"file"===l?j+="-file":"range"===l?j+="-range":v&&(j=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var N=Object(m.mapToCssModules)(f()(a,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,j),t);return("input"===y||u&&"function"===typeof u)&&(h.type=l),h.children&&!g&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(m.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(y,Object(n.a)({},h,{ref:b,className:N,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=g,b.defaultProps={type:"text"},a.a=b},858:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(1),r=t.n(l),i=t(2),o=t.n(i),c=t(5),u=t.n(c),d=t(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,i=e.widths,o=e.tag,c=e.check,m=e.size,p=e.for,g=Object(s.a)(e,f),b=[];i.forEach((function(a,n){var s=e[a];if(delete g[a],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var i,o=r?"-":"-"+a+"-";l=h(r,a,s.size),b.push(Object(d.mapToCssModules)(u()(((i={})[l]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i))),t)}else l=h(r,a,s),b.push(l)}}));var v=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:p},g,{className:v}))};v.propTypes=g,v.defaultProps=b,a.a=v},860:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(19),r=t(21),i=t(1),o=t.n(i),c=t(2),u=t.n(c),d=t(5),f=t.n(d),m=t(4),p=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,i=e.innerRef,c=Object(s.a)(e,p),u=Object(m.mapToCssModules)(f()(a,!!l&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:i,className:u}))},a}(i.Component);b.propTypes=g,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=336.456100be.chunk.js.map