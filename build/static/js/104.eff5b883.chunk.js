/*! For license information please see 104.eff5b883.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[104],{1054:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=["className","cssModule","fluid","tag"],d={tag:p.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.fluid,s=e.tag,l=Object(r.a)(e,m),c="container";!0===o?c="container-fluid":o&&(c="container-"+o);var d=Object(p.mapToCssModules)(u()(t,c),a);return i.a.createElement(s,Object(n.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},1055:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=["className","cssModule","tag"],d={tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,m),l=Object(p.mapToCssModules)(u()(t,"input-group-text"),a);return i.a.createElement(o,Object(n.a)({},s,{className:l}))};f.propTypes=d,f.defaultProps={tag:"span"},t.a=f},1081:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=["className","cssModule","tag","size"],d={tag:p.tagPropType,size:l.a.string,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=e.size,l=Object(r.a)(e,m),c=Object(p.mapToCssModules)(u()(t,"input-group",s?"input-group-"+s:null),a);return i.a.createElement(o,Object(n.a)({},l,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},1126:function(e,t,a){},1201:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=a(1055),d=["className","cssModule","tag","addonType","children"],f={tag:p.tagPropType,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=e.addonType,l=e.children,c=Object(r.a)(e,d),f=Object(p.mapToCssModules)(u()(t,"input-group-"+s),a);return"string"===typeof l?i.a.createElement(o,Object(n.a)({},c,{className:f}),i.a.createElement(m.a,{children:l})):i.a.createElement(o,Object(n.a)({},c,{className:f,children:l}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},1853:function(e,t,a){e.exports=a.p+"static/media/google.73cbaa09.svg"},2815:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(9),o=a(50),i=a(14),s=a(15),l=a(16),c=a(17),u=a(1),p=a.n(u),m=a(1054),d=a(838),f=a(839),h=a(843),v=a(844),g=a(845),b=a(864),y=a(863),E=a(894),w=a(857),N=a(204),O=a(975),j=a(976),x=a(1081),k=a(1201),T=a(981),S=a.n(T),P=(a(1126),a(22),a(846)),C=(a(98),a(11)),M=a(956),L=a(372),R=a(369),I=a(280),z=a(329),F=a(467),D=a(347),W=a(1853),_=a.n(W),B=a(29),J=a(144),A=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(t){t.preventDefault(),e.props.submitLoginWithFireBase(e.state.email,e.state.password,e.state.remember)},e.handleRemember=function(t){e.setState({remember:t.target.checked})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,p.a.createElement(P.a,{className:"pt-1"},p.a.createElement(b.a,{action:"/",onSubmit:this.handleLogin},p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(w.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),p.a.createElement("div",{className:"form-control-position"},p.a.createElement(L.a,{size:15})),p.a.createElement(y.a,null,"Email")),p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(w.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),p.a.createElement("div",{className:"form-control-position"},p.a.createElement(R.a,{size:15})),p.a.createElement(y.a,null,"Password")),p.a.createElement(E.a,{className:"d-flex justify-content-between align-items-center"},p.a.createElement(M.a,{color:"primary",icon:p.a.createElement(I.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),p.a.createElement("div",{className:"float-right"},p.a.createElement(C.b,{to:"/pages/forgot-password"},"Forgot Password?"))),p.a.createElement("div",{className:"d-flex justify-content-between"},p.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Login")))),p.a.createElement("div",{className:"auth-footer"},p.a.createElement("div",{className:"divider"},p.a.createElement("div",{className:"divider-text"},"OR")),p.a.createElement("div",{className:"footer-btn"},p.a.createElement(N.a.Ripple,{className:"btn-facebook",color:"",onClick:function(){e.props.loginWithFB()}},p.a.createElement(z.a,{size:14})),p.a.createElement(N.a.Ripple,{className:"btn-twitter",color:"",onClick:this.props.loginWithTwitter},p.a.createElement(F.a,{size:14,stroke:"white"})),p.a.createElement(N.a.Ripple,{className:"btn-google",color:"",onClick:this.props.loginWithGoogle},p.a.createElement("img",{src:_.a,alt:"google",height:"15",width:"15"})),p.a.createElement(N.a.Ripple,{className:"btn-github",color:"",onClick:this.props.loginWithGithub},p.a.createElement(D.a,{size:14,stroke:"white"})))))}}]),a}(p.a.Component),G=Object(B.b)((function(e){return{values:e.auth.login}}),{submitLoginWithFireBase:J.i,loginWithFB:J.b,loginWithTwitter:J.f,loginWithGoogle:J.d,loginWithGithub:J.c})(A),U=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"admin@gmail.com",password:"12345",remember:!1},e.handleLogin=function(t){t.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,p.a.createElement(P.a,{className:"pt-1"},p.a.createElement(b.a,{action:"/",onSubmit:this.handleLogin},p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(w.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),p.a.createElement("div",{className:"form-control-position"},p.a.createElement(L.a,{size:15})),p.a.createElement(y.a,null,"Email")),p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(w.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),p.a.createElement("div",{className:"form-control-position"},p.a.createElement(R.a,{size:15})),p.a.createElement(y.a,null,"Password")),p.a.createElement(E.a,{className:"d-flex justify-content-between align-items-center"},p.a.createElement(M.a,{color:"primary",icon:p.a.createElement(I.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),p.a.createElement("div",{className:"float-right"},p.a.createElement(C.b,{to:"/pages/forgot-password"},"Forgot Password?"))),p.a.createElement("div",{className:"d-flex justify-content-between"},p.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Login")))))}}]),a}(p.a.Component),q=Object(B.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:J.e})(U),H=a(76),Y=function(e){return"object"===typeof e&&null!==e},V=function(e){var t=e.value,a=void 0===t?"":t,n=e.numInputs,r=void 0===n?4:n,o=e.onChange,i=e.onPaste,s=e.renderInput,l=e.shouldAutoFocus,c=void 0!==l&&l,u=e.inputType,m=void 0===u?"text":u,d=e.renderSeparator,f=e.placeholder,h=e.containerStyle,v=e.inputStyle,g=e.skipDefaultStyles,b=void 0!==g&&g,y=p.a.useState(0),E=y[0],w=y[1],N=p.a.useRef([]),O=function(){return a?a.toString().split(""):[]},j="number"===m||"tel"===m;p.a.useEffect((function(){N.current=N.current.slice(0,r)}),[r]),p.a.useEffect((function(){var e;c&&(null===(e=N.current[0])||void 0===e||e.focus())}),[c]);var x=function(){if("string"===typeof f){if(f.length===r)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},k=function(e){return(j?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},T=function(e){var t=e.target.value;k(t)&&(L(t),M(E+1))},S=function(e){var t=e.nativeEvent;k(e.target.value)||(null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),L(""),M(E-1)),e.target.value="")},P=function(){w(E-1)},C=function(e){var t=O();[e.code,e.key].includes("Backspace")?(e.preventDefault(),L(""),M(E-1)):"Delete"===e.code?(e.preventDefault(),L("")):"ArrowLeft"===e.code?(e.preventDefault(),M(E-1)):"ArrowRight"===e.code||e.key===t[E]?(e.preventDefault(),M(E+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},M=function(e){var t,a,n=Math.max(Math.min(r-1,e),0);N.current[n]&&(null===(t=N.current[n])||void 0===t||t.focus(),null===(a=N.current[n])||void 0===a||a.select(),w(n))},L=function(e){var t=O();t[E]=e[0],R(t)},R=function(e){var t=e.join("");o(t)},I=function(e){var t;e.preventDefault();var a=O(),n=E,o=e.clipboardData.getData("text/plain").slice(0,r-E).split("");if(!j||!o.some((function(e){return isNaN(Number(e))}))){for(var i=0;i<r;++i)i>=E&&o.length>0&&(a[i]=null!==(t=o.shift())&&void 0!==t?t:"",n++);M(n),R(a)}};return p.a.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},Y(h)&&h),className:"string"===typeof h?h:void 0,onPaste:i},Array.from({length:r},(function(e,t){return t})).map((function(e){var t,a,n;return p.a.createElement(p.a.Fragment,{key:e},s({value:null!==(t=O()[e])&&void 0!==t?t:"",placeholder:null!==(n=null===(a=x())||void 0===a?void 0:a[e])&&void 0!==n?n:void 0,ref:function(t){return N.current[e]=t},onChange:T,onFocus:function(t){return function(e){return function(t){w(t),e.target.select()}}(t)(e)},onBlur:P,onKeyDown:C,onPaste:I,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(b?{}:{width:"1em",textAlign:"center"},Y(v)?v:{}),className:"string"===typeof v?v:void 0,type:m,inputMode:j?"numeric":"text",onInput:S},e),e<r-1&&("function"===typeof d?d(e):d))})))},K=a(193),Q=a.n(K),X=a(10),Z=a(106),$=a(136);function ee(){ee=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new x(r||[]);return n(i,"_invoke",{value:w(e,a,s)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var p={};function m(){}function d(){}function f(){}var h={};l(h,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==t&&a.call(g,o)&&(h=g);var b=f.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,s){var l=u(e[r],e,o);if("throw"!==l.type){var c=l.arg,p=c.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(p).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,s)}))}s(l.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return T()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var s=N(i,a);if(s){if(s===p)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=f,n(b,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=l(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(c(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),l(b,s,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var te=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handlechange=function(e){e.preventDefault(),s.setState(Object(o.a)({},e.target.name,e.target.value))},s.loginOTPHandler=function(){var e=Object(r.a)(ee().mark((function e(t){var a,r;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),6!=(null===(a=s.state.emailotp)||void 0===a?void 0:a.length)){e.next=7;break}return r={otp:s.state.emailotp,username:s.state.email},e.next=5,Object(Z.M)(r).then((function(e){var t,a,r,o=null===e||void 0===e?void 0:e.user,i=null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.user1,l=Object(n.a)(Object(n.a)({},o),i);(null===e||void 0===e?void 0:e.status)?(null===(a=s.context)||void 0===a||a.setUserInformatio(l),localStorage.setItem("userData",JSON.stringify(l)),localStorage.setItem("userToken",JSON.stringify(null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.token)),setTimeout((function(){s.props.history.push("/dashboard")}),1500),Q()("Sucessfully login","You are LoggedIn!",{buttons:{ok:{text:"Ok",value:"ok"}}}).then((function(e){e}))):Q()("Something Went Wrong")})).catch((function(e){var t;console.log(e.response),Q()("Error","".concat(null===(t=e.response)||void 0===t?void 0:t.data.message))}));case 5:e.next=8;break;case 7:Q()("Please Enter OTP");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.loginHandler=function(){var e=Object(r.a)(ee().mark((function e(t){var a;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:s.state.email,password:s.state.password},e.next=4,Object(Z.L)(a).then((function(e){var t,a,r;if(JSON.parse(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.gmail)||JSON.parse(null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.whatsapp)||JSON.parse(null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.sms))s.setState({UserCredential:null===e||void 0===e?void 0:e.user}),(null===e||void 0===e?void 0:e.status)?(newinfor,Q()("Success","OTP sent"),s.setState({OtpScreen:!0})):Q()("Something Went Wrong");else{var o,i,l,c=null===e||void 0===e?void 0:e.user,u=null===e||void 0===e||null===(o=e.user)||void 0===o?void 0:o.user1,p=Object(n.a)(Object(n.a)({},c),u);null===(i=s.context)||void 0===i||i.setUserInformatio(p),localStorage.setItem("userData",JSON.stringify(p)),localStorage.setItem("userToken",JSON.stringify(null===e||void 0===e||null===(l=e.user)||void 0===l?void 0:l.token)),s.props.history.push("/dashboard")}})).catch((function(e){var t,a;console.log(e.response);var n="Incorrect password"==(null===(t=e.response)||void 0===t?void 0:t.data.message),r="Incorrect Email"==(null===(a=e.response)||void 0===a?void 0:a.data.message);n&&Q()({title:"Some Error Occurred",text:"Incorrect Password",icon:"warning",dangerMode:!1}),r&&Q()({title:"Some Error Occurred",text:"Incorrect Email",icon:"warning",dangerMode:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.changepassword=function(e){e.preventDefault();var t=new FormData;t.append("email",s.state.email),t.append("base_url","this.state.password"),X.a.post("/forgetPasswordEmailVerify",t).then((function(e){console.log(e),s.setState({resetpassword:!1}),Q()("Email has been sent to Your Mail id","Please Check and verify")})).catch((function(e){console.log(e)}))},s.state={email:"",Otp:"",emailotp:"",type:"password",whatsappotp:"",smsotp:"",OtpScreen:!1,UserCredential:{},password:"",resetpassword:!1},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.preventBackButton()}},{key:"preventBackButton",value:function(){window.history.pushState(null,null,window.location.href),this.popstateHandler=function(){window.history.go(1)},window.addEventListener("popstate",this.popstateHandler)}},{key:"componentWillUnmount",value:function(){this.allowBackButton()}},{key:"allowBackButton",value:function(){window.removeEventListener("popstate",this.popstateHandler)}},{key:"render",value:function(){var e=this,t=this.state.UserCredential;return p.a.createElement(m.a,null,p.a.createElement(d.a,{className:"m-0 justify-content-center"},p.a.createElement(f.a,{sm:"5",xl:"5",lg:"5",md:"5",className:"d-flex justify-content-center"},p.a.createElement(h.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},p.a.createElement(d.a,{className:"m-0"},p.a.createElement(f.a,{lg:"12",md:"12",className:"p-1"},p.a.createElement(h.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},p.a.createElement("div",{className:"logo-box text-center p-2"},p.a.createElement("img",{src:S.a,alt:"loginImg",width:"90%",height:"150px"})),this.state.resetpassword?p.a.createElement(p.a.Fragment,null,p.a.createElement(v.a,{className:"pb-1"},p.a.createElement(g.a,null,p.a.createElement("h4",{className:"mb-0"},p.a.createElement("strong",null,"Email Verification")))),p.a.createElement("p",{className:"px-2 auth-title mb-2"},"Welcome , Please Enter details."),p.a.createElement(b.a,{onSubmit:this.changepassword},p.a.createElement(y.a,null,"Email"),p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(w.a,{type:"text",name:"email",placeholder:"Username",value:this.state.email,onChange:this.handlechange})),p.a.createElement("div",{className:"d-flex justify-content-center"},p.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Submit")))):p.a.createElement(p.a.Fragment,null,p.a.createElement(p.a.Fragment,null,this.state.OtpScreen&&this.state.OtpScreen?p.a.createElement(p.a.Fragment,null,p.a.createElement(v.a,{className:""},p.a.createElement(g.a,null,p.a.createElement("h4",{className:"mb-0"},p.a.createElement("strong",null,"Login")))),p.a.createElement("p",{className:"px-2 auth-title"},"Welcome , Enter OTP to Login your Account."),p.a.createElement(b.a,{onSubmit:this.loginOTPHandler},p.a.createElement(E.a,{className:"otpscreeen d-flex justify-content-center"}),p.a.createElement("div",{className:"py-1 d-flex justify-content-center"},JSON.parse(null===t||void 0===t?void 0:t.gmail)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("p",{className:"px-2 auth-title"},"Email OTP"),p.a.createElement(V,{containerStyle:"true inputdata",inputStyle:"true inputdataone",className:"otpinputtype",value:this.state.emailotp,name:"emailotp",onChange:function(t){return e.setState({emailotp:t})},numInputs:6,renderSeparator:p.a.createElement("span",null,"-"),renderInput:function(e){return p.a.createElement("input",Object.assign({className:"inputs"},e))}})),JSON.parse(null===t||void 0===t?void 0:t.whatsapp)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("p",{className:"px-2 auth-title"},"Whatsapp OTP"),p.a.createElement(V,{containerStyle:"true inputdata",inputStyle:"true inputdataone",className:"otpinputtype",value:this.state.whatsappotp,name:"whatsappotp",onChange:function(t){return e.setState({whatsappotp:t})},numInputs:6,renderSeparator:p.a.createElement("span",null,"-"),renderInput:function(e){return p.a.createElement("input",Object.assign({className:"inputs"},e))}})),JSON.parse(null===t||void 0===t?void 0:t.sms)&&p.a.createElement(p.a.Fragment,null,p.a.createElement("p",{className:"px-2 auth-title"},"SMS OTP"),p.a.createElement(V,{containerStyle:"true inputdata",inputStyle:"true inputdataone",className:"otpinputtype",value:this.state.smsotp,name:"smsotp",onChange:function(t){return e.setState({smsotp:t})},numInputs:6,renderSeparator:p.a.createElement("span",null,"-"),renderInput:function(e){return p.a.createElement("input",Object.assign({className:"inputs"},e))}}))),p.a.createElement("div",{className:"d-flex justify-content-center"},p.a.createElement(N.a.Ripple,{width:"80%",color:"primary",type:"submit"},"Login"),p.a.createElement(O.a,{activeTab:this.state.activeTab},p.a.createElement(j.a,{tabId:"1"},p.a.createElement(q,null)),p.a.createElement(j.a,{tabId:"2"},p.a.createElement(G,null)))))):p.a.createElement(p.a.Fragment,null,p.a.createElement(v.a,{className:"pb-1"},p.a.createElement(g.a,null,p.a.createElement("h4",{className:"mb-0"},p.a.createElement("strong",null,"Login")))),p.a.createElement("p",{className:"px-2 auth-title mb-2"},"Welcome back, Please login to your account."),p.a.createElement(b.a,{onSubmit:this.loginHandler},p.a.createElement(E.a,{className:"form-label-group position-relative has-icon-left"},p.a.createElement(x.a,null,p.a.createElement(k.a,{addonType:"prepend"},"username"),p.a.createElement(w.a,{type:"text",name:"email",placeholder:"User Name",value:this.state.email,onChange:this.handlechange,required:!0}))),p.a.createElement(E.a,{className:"passwordlogin form-label-group position-relative has-icon-left"},p.a.createElement(x.a,null,p.a.createElement(k.a,{addonType:"prepend"},"Password"),p.a.createElement(w.a,{type:this.state.type,name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange,required:!0}),p.a.createElement("span",{className:"eyeviewpassword",style:{position:"absolute",cursor:"pointer"}},"text"==this.state.type?p.a.createElement(p.a.Fragment,null," ",p.a.createElement($.c,{onClick:function(){return e.setState({type:"password"})},size:"25px",color:"blue"})):p.a.createElement(p.a.Fragment,null,p.a.createElement($.b,{onClick:function(){return e.setState({type:"text"})},size:"25px",color:"blue"}))))),p.a.createElement("div",{className:"d-flex justify-content-between"},p.a.createElement(N.a.Ripple,{color:"primary",outline:!0,onClick:function(t){t.preventDefault(),e.setState({resetpassword:!0})}},"Forget Password"),p.a.createElement(N.a.Ripple,{color:"primary",type:"submit"},"Login"),p.a.createElement(O.a,{activeTab:this.state.activeTab},p.a.createElement(j.a,{tabId:"1"},p.a.createElement(q,null)),p.a.createElement(j.a,{tabId:"2"},p.a.createElement(G,null)))))))))))))))}}]),a}(p.a.Component);te.contextType=H.a;t.default=Object(B.b)((function(e){return{values:e.auth.login}}))(te)},857:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(12),i=a(21),s=a(1),l=a.n(s),c=a(2),u=a.n(c),p=a(5),m=a.n(p),d=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,v=e.innerRef,g=Object(r.a)(e,f),b=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),w="form-control";h?(w+="-plaintext",E=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":b&&(w=p?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var N=Object(d.mapToCssModules)(m()(t,c&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,w),a);return("input"===E||u&&"function"===typeof u)&&(g.type=o),g.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(E,Object(n.a)({},g,{ref:v,className:N,"aria-invalid":c}))},t}(l.a.Component);v.propTypes=h,v.defaultProps={type:"text"},t.a=v},863:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:d,order:d,offset:d})]),h={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:p.tagPropType,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,l=e.tag,c=e.check,d=e.size,f=e.for,h=Object(r.a)(e,m),v=[];s.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var o,i=!n;if(Object(p.isObject)(r)){var s,l=i?"-":"-"+t+"-";o=g(i,t,r.size),v.push(Object(p.mapToCssModules)(u()(((s={})[o]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),a)}else o=g(i,t,r),v.push(o)}}));var b=Object(p.mapToCssModules)(u()(t,!!o&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,v,!!v.length&&"col-form-label"),a);return i.a.createElement(l,Object(n.a)({htmlFor:f},h,{className:b}))};b.propTypes=h,b.defaultProps=v,t.a=b},864:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(12),i=a(21),s=a(1),l=a.n(s),c=a(2),u=a.n(c),p=a(5),m=a.n(p),d=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,c=Object(r.a)(e,f),u=Object(d.mapToCssModules)(m()(t,!!o&&"form-inline"),a);return l.a.createElement(i,Object(n.a)({},c,{ref:s,className:u}))},t}(s.Component);v.propTypes=h,v.defaultProps={tag:"form"},t.a=v},890:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),r=a.n(n).a.createContext({})},894:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(3),m=["className","cssModule","row","disabled","check","inline","tag"],d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:p.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,l=e.check,c=e.inline,d=e.tag,f=Object(r.a)(e,m),h=Object(p.mapToCssModules)(u()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!s)&&"disabled"),a);return"fieldset"===d&&(f.disabled=s),i.a.createElement(d,Object(n.a)({},f,{className:h}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},956:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(16),i=a(17),s=a(1),l=a.n(s),c=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),a}(l.a.Component);t.a=c},975:function(e,t,a){"use strict";var n=a(6),r=a(21),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(890),m=a(3),d={tag:m.tagPropType,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(m.omit)(this.props,Object.keys(d)),s=Object(m.mapToCssModules)(u()("tab-content",t),a);return i.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(r,Object(n.a)({},o,{className:s})))},t}(o.Component);t.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},976:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(6),r=a(7),o=a(1),i=a.n(o),s=a(2),l=a.n(s),c=a(5),u=a.n(c),p=a(890),m=a(3),d=["className","cssModule","tabId","tag"],f={tag:m.tagPropType,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function h(e){var t=e.className,a=e.cssModule,o=e.tabId,s=e.tag,l=Object(r.a)(e,d),c=function(e){return Object(m.mapToCssModules)(u()("tab-pane",t,{active:o===e}),a)};return i.a.createElement(p.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(s,Object(n.a)({},l,{className:c(t)}))}))}h.propTypes=f,h.defaultProps={tag:"div"}},981:function(e,t,a){e.exports=a.p+"static/media/paravilogo.d9c2409f.png"}}]);
//# sourceMappingURL=104.eff5b883.chunk.js.map