(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{1976:function(e,a,t){},2736:function(e,a,t){"use strict";t.r(a);var n=t(888),s=t(49),l=t(13),r=t(14),o=t(15),i=t(16),c=t(1),m=t.n(c),d=t(839),u=t(840),p=t(841),f=t(861),h=t(843),b=t(859),g=t(853),v=t(831),E=t(205),y=(t(1976),t(957)),N=t(280),O=t(107),j=t(856),w=t.n(j),x=t(11),C=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(s.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state);var a=JSON.parse(localStorage.getItem("userData")),t=new FormData;t.append("name",r.state.name),t.append("email",r.state.email),t.append("id",null===a||void 0===a?void 0:a._id),t.append("Password",r.state.password),t.append("cnfmPassword",r.state.cnfmPassword),t.append("dateFormat",r.state.Date_format),t.append("dateTimeFormat",r.state.Date_Time_format),t.append("locale",r.state.Locale),t.append("timeZone",r.state.T_Zone),null!==r.state.selectedFile&&t.append("profileImage",r.state.selectedFile,r.state.selectedName);var s,l=Object(n.a)(t.values());try{for(l.s();!(s=l.n()).done;){var o=s.value;console.log(o)}}catch(d){l.e(d)}finally{l.f()}var i,c=Object(n.a)(t.keys());try{for(c.s();!(i=c.n()).done;){var m=i.value;console.log(m)}}catch(d){c.e(d)}finally{c.f()}x.a.post("/admin/adminprofile/63875207a1d65ee4d84b3ab2",t,{}).then((function(e){console.log(e.data.message),w()("Success!","Submitted SuccessFull!","success"),window.location.reload("/#/pages/profile")})).catch((function(e){w()("Error!","You clicked the button!","error"),console.log(e.response)}))},r.state={name:"",LoginData:{},email:"",cnfmPassword:"",password:"",adminimg:"",selectedName:"",selectedFile:null,data:{}},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e,a,t,n=JSON.parse(localStorage.getItem("userData"));console.log(null===n||void 0===n?void 0:n.Userinfo),this.setState({LoginData:null===n||void 0===n?void 0:n.Userinfo}),this.setState({name:null===n||void 0===n||null===(e=n.Userinfo)||void 0===e?void 0:e.full_name,email:null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.email,mobile:null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.mobile})}},{key:"render",value:function(){var e,a;return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),m.a.createElement("div",{id:"user-profile"},m.a.createElement(d.a,{className:"m-0 justify-content-center"},m.a.createElement(u.a,{lg:"4",md:"4",xl:"4",sm:"12"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement("div",{className:"profile-img text-center st-1"},m.a.createElement("img",{src:this.state.data.adminimg,alt:"adminimg",className:"img-fluid img-border rounded-circle box-shadow-1",width:"150"}),m.a.createElement("ul",{className:"lst-1"},m.a.createElement("li",{className:"lst-2"},"Name:"," ",m.a.createElement("span",{className:"lst-3"},null===(e=this.state.LoginData)||void 0===e?void 0:e.username)),m.a.createElement("li",{className:"lst-2"},"Email:"," ",m.a.createElement("span",{className:"lst-3"},null===(a=this.state.LoginData)||void 0===a?void 0:a.email)))))),m.a.createElement(u.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement("div",{className:"st-2"},m.a.createElement(h.a,null,m.a.createElement("h4",{className:"mb-3"},"Edit Profile"),m.a.createElement(u.a,null)),m.a.createElement(d.a,{className:"m-0"},m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Name"),m.a.createElement(g.a,{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.changeHandler})),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Email"),m.a.createElement(g.a,{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.changeHandler})),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Password"),m.a.createElement(g.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler})),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Confirm Password"),m.a.createElement(g.a,{type:"password",name:"cnfmPassword",placeholder:"Reset password",value:this.state.cnfmPassword,onChange:this.changeHandler})),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"User Image"),m.a.createElement(g.a,{className:"form-control",type:"file",name:"profileImage",onChange:this.onChangeHandler})),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Locale"),m.a.createElement(v.a,{name:"Locale",value:this.state.Locale,onChange:this.changeHandler,required:!0,type:"select"},m.a.createElement("option",{value:"us"},"English(US)-USA"),m.a.createElement("option",{value:""}))),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Time Zone"),m.a.createElement(v.a,{name:"T_Zone",value:this.state.T_Zone,onChange:this.changeHandler,required:!0,type:"select"},m.a.createElement("option",{value:"IST"},"IST"),m.a.createElement("option",{value:"PST"},"PST"),m.a.createElement("option",{value:"EST"},"EST"))),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Date-Format"),m.a.createElement(v.a,{name:"Date_format",value:this.state.Date_format,onChange:this.changeHandler,required:!0,type:"select"},m.a.createElement("option",{value:"mm-dd-yy"},"mm-dd-yy"),m.a.createElement("option",{value:"dd-mm-yy"},"dd-mm-yy"))),m.a.createElement(u.a,{sm:"12",lg:"6",md:"6",className:"p-1"},m.a.createElement(b.a,null,"Date-Time-Format"),m.a.createElement(v.a,{name:"Date_Time_format",value:this.state.Date_Time_format,onChange:this.changeHandler,required:!0,type:"select"},m.a.createElement("option",{value:"mm-dd-yy HH:mm:ss"},"mm-dd-yy HH:mm:ss"),m.a.createElement("option",{value:"dd-mm-yy HH:mm:ss"},"dd-mm-yy HH:mm:ss")))),m.a.createElement(d.a,null,m.a.createElement(y.a,{color:"primary",icon:m.a.createElement(N.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),m.a.createElement("div",{className:"d-flex justify-content-between"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit"},"Submit")))))))))}}]),t}(m.a.Component);a.default=C},853:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(19),r=t(21),o=t(1),i=t.n(o),c=t(2),m=t.n(c),d=t(5),u=t.n(d),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),y=m||("select"===l||"textarea"===l?l:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===l?N+="-file":"range"===l?N+="-range":v&&(N=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===y||m&&"function"===typeof m)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":c}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},859:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(1),r=t.n(l),o=t(2),i=t.n(o),c=t(5),m=t.n(c),d=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,f=e.for,h=Object(s.a)(e,u),b=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var l,r=!n;if(Object(d.isObject)(s)){var o,i=r?"-":"-"+a+"-";l=g(r,a,s.size),b.push(Object(d.mapToCssModules)(m()(((o={})[l]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),t)}else l=g(r,a,s),b.push(l)}}));var v=Object(d.mapToCssModules)(m()(a,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},861:function(e,a,t){"use strict";var n=t(6),s=t(8),l=t(19),r=t(21),o=t(1),i=t.n(o),c=t(2),m=t.n(c),d=t(5),u=t.n(d),p=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,o=e.innerRef,c=Object(s.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},c,{ref:o,className:m}))},a}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},888:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(108);function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l,r=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return r=e.done,e},e:function(e){o=!0,l=e},f:function(){try{r||null==s.return||s.return()}finally{if(o)throw l}}}}},957:function(e,a,t){"use strict";var n=t(13),s=t(14),l=t(15),r=t(16),o=t(1),i=t.n(o),c=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=c}}]);
//# sourceMappingURL=176.b79272a9.chunk.js.map