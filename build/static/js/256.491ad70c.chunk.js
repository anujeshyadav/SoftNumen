(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[256],{2541:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(887),r=a(49),s=a(13),l=a(14),i=a(15),o=a(16),c=a(1),u=a.n(c),f=a(840),d=a(841),m=a(842),p=a(843),b=a(860),h=a(838),g=a(839),v=a(858),y=a(852),O=a(830),j=a(208),E=a(11),N=a(855),z=a.n(N),R=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler=function(e){l.setState({selectedFile:e.target.files}),l.setState({selectedName:e.target.files.name}),console.log(e.target.files)},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",l.state.banner_title),t.append("bannertype",l.state.bannertype),t.append("status",l.state.status);var a,r=Object(n.a)(l.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var s=a.value;null!==l.state.selectedFile&&t.append("banner_img",s,s.name)}}catch(m){r.e(m)}finally{r.f()}var i,o=Object(n.a)(t.values());try{for(o.s();!(i=o.n()).done;){var c=i.value;console.log(c)}}catch(m){o.e(m)}finally{o.f()}var u,f=Object(n.a)(t.keys());try{for(f.s();!(u=f.n()).done;){var d=u.value;console.log(d)}}catch(m){f.e(m)}finally{f.f()}E.a.post("/addbanner",t).then((function(e){console.log(e),z()("Successful!","You clicked the button!","success"),l.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},l.state={url:"",banner_title:"",banner_img:"",bannertype:"",resourcetype:"",selectedFile:void 0,selectedName:"",status:""},l}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(f.a,null,u.a.createElement(d.a,null,u.a.createElement(m.a,null,"Flash Deal Update")),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Title"),u.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Title",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Image"),u.a.createElement(O.a,{required:!0,type:"file",name:"banner_title",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Start Date"),u.a.createElement(y.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"End Date"),u.a.createElement(y.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler}))),u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),a}(c.Component)},852:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(19),l=a(21),i=a(1),o=a.n(i),c=a(2),u=a.n(c),f=a(5),d=a.n(f),m=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=f?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var E=Object(m.mapToCssModules)(d()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,j),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},858:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(1),l=a.n(s),i=a(2),o=a.n(i),c=a(5),u=a.n(c),f=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:f.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,m=e.size,p=e.for,b=Object(r.a)(e,d),h=[];i.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(f.isObject)(r)){var i,o=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(f.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else s=g(l,t,r),h.push(s)}}));var v=Object(f.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},860:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(19),l=a(21),i=a(1),o=a.n(i),c=a(2),u=a.n(c),f=a(5),d=a.n(f),m=a(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,p),u=Object(m.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},887:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(108);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=256.491ad70c.chunk.js.map