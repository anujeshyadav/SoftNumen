(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{1069:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),o=t.n(r),l=t(2),c=t.n(l),i=t(5),u=t.n(i),p=t(4),m=["className","cssModule","fluid","tag"],d={tag:p.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.fluid,l=e.tag,c=Object(s.a)(e,m),i="container";!0===r?i="container-fluid":r&&(i="container-"+r);var d=Object(p.mapToCssModules)(u()(a,i),t);return o.a.createElement(l,Object(n.a)({},c,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},2822:function(e,a,t){"use strict";t.r(a);var n=t(11),s=t(12),r=t(13),o=t(14),l=t(1),c=t.n(l),i=t(1069),u=t(838),p=t(839),m=t(840),d=t(841),f=t(860),h=t(929),b=t(859),g=t(853),v=t(207),y=t(208),E=t.n(y),j=t(955),O=t(282),N=t(28),x=t(53),k=t(20),w=(t(604),t(605),t(50),t(226));x.apps.length||x.initializeApp(w.a);var C=x.auth(),T=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"m-0 justify-content-center"},c.a.createElement(p.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(p.a,{lg:"8",md:"12",className:"p-1"},c.a.createElement(m.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},c.a.createElement(d.a,{className:"pb-1 justify-content-center"},c.a.createElement("img",{src:E.a,class:"img-fluid",alt:"..."}),c.a.createElement("br",null)),c.a.createElement(f.a,{onSubmit:this.handleRegister},c.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement("div",{class:"form-group"},c.a.createElement(b.a,null,"Name"),c.a.createElement(g.a,{type:"text",class:"form-control mt-1 mb-3",placeholder:"Name",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})},required:!0,name:"name"}))),c.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement("div",{class:"form-group"},c.a.createElement(b.a,null,"Gmail"),c.a.createElement(g.a,{type:"text",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0,name:"email"}))),c.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},c.a.createElement("div",{class:"form-group"},c.a.createElement(b.a,null,"Password"),c.a.createElement(g.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}))),c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement("div",{class:"form-group"},c.a.createElement(b.a,null,"Confirm Password"),c.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}))),c.a.createElement(h.a,null,c.a.createElement(j.a,{color:"primary",icon:c.a.createElement(O.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement(v.a.Ripple,{onClick:function(){return k.a.push("/pages/login")},color:"primary",outline:!0},"Login"),c.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Register"))))))))}}]),t}(c.a.Component);a.default=Object(N.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var s=null;C.createUserWithEmailAndPassword(e,a).then((function(e){C.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(s=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:s,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:s,name:t}}))})),k.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(T)},853:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(17),o=t(19),l=t(1),c=t.n(l),i=t(2),u=t.n(i),p=t(5),m=t.n(p),d=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),j="form-control";h?(j+="-plaintext",E=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=p?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var O=Object(d.mapToCssModules)(m()(a,i&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,j),t);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},859:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),o=t.n(r),l=t(2),c=t.n(l),i=t(5),u=t.n(i),p=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,i=e.check,d=e.size,f=e.for,h=Object(s.a)(e,m),b=[];l.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,o=!n;if(Object(p.isObject)(s)){var l,c=o?"-":"-"+a+"-";r=g(o,a,s.size),b.push(Object(p.mapToCssModules)(u()(((l={})[r]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(o,a,s),b.push(r)}}));var v=Object(p.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},860:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(17),o=t(19),l=t(1),c=t.n(l),i=t(2),u=t.n(i),p=t(5),m=t.n(p),d=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,l=e.innerRef,i=Object(s.a)(e,f),u=Object(d.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(o,Object(n.a)({},i,{ref:l,className:u}))},a}(l.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},929:function(e,a,t){"use strict";var n=t(6),s=t(8),r=t(1),o=t.n(r),l=t(2),c=t.n(l),i=t(5),u=t.n(i),p=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,l=e.disabled,c=e.check,i=e.inline,d=e.tag,f=Object(s.a)(e,m),h=Object(p.mapToCssModules)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return"fieldset"===d&&(f.disabled=l),o.a.createElement(d,Object(n.a)({},f,{className:h}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},955:function(e,a,t){"use strict";var n=t(11),s=t(12),r=t(13),o=t(14),l=t(1),c=t.n(l),i=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i}}]);
//# sourceMappingURL=184.b7f7d74f.chunk.js.map