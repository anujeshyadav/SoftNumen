(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{1188:function(e,t,n){},2341:function(e,t,n){"use strict";var o=n(2342).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},2342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(1)),r=a(n(2343));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return b(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=o.default.Children.only(c),u=(0,r.default)(a,l);i&&i(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),i&&u(n,i),t}(o.default.PureComponent);t.CopyToClipboard=m,b(m,"defaultProps",{onCopy:void 0,options:void 0})},2343:function(e,t,n){"use strict";var o=n(2344),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},2344:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2758:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n(14),a=n(15),i=n(16),c=n(1),l=n.n(c),s=n(977),u=n(838),p=n(839),f=n(840),d=n(841),y=n(842),b=n(843),m=n(852),h=n(208),v=n(2341),g=n(997),C=(n(1019),n(1188),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={value:"Copy Me!",copied:!1},e.handleCopy=function(t){var n=t.target.value;e.setState({value:n,copied:!1})},e.onCopy=function(){e.setState({copied:!0}),g.f.success("Text Copied Successfully",{position:g.f.POSITION.TOP_CENTER,autoClose:2e3})},e}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12"},l.a.createElement(f.a,null,l.a.createElement(d.a,null,l.a.createElement(y.a,null,"Clipboard")),l.a.createElement(b.a,null,l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"2",sm:"12",className:"pr-md-0 mb-1"},l.a.createElement(m.a,{value:this.state.value,onChange:this.handleCopy})),l.a.createElement(p.a,{md:"2",sm:"12",className:"mb-1"},l.a.createElement(v.CopyToClipboard,{onCopy:this.onCopy,text:this.state.value},l.a.createElement(h.a.Ripple,{color:"primary"},"Copy!")),l.a.createElement(g.d,null))))))))}}]),n}(l.a.Component));t.default=C},852:function(e,t,n){"use strict";var o=n(6),r=n(8),a=n(19),i=n(21),c=n(1),l=n.n(c),s=n(2),u=n.n(s),p=n(5),f=n.n(p),d=n(4),y=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.focus=n.focus.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.type,i=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,m=e.innerRef,h=Object(r.a)(e,y),v=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),C=u||("select"===a||"textarea"===a?a:"input"),O="form-control";b?(O+="-plaintext",C=u||"input"):"file"===a?O+="-file":"range"===a?O+="-range":v&&(O=p?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var w=Object(d.mapToCssModules)(f()(t,s&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,O),n);return("input"===C||u&&"function"===typeof u)&&(h.type=a),h.children&&!b&&"select"!==a&&"string"===typeof C&&"select"!==C&&(Object(d.warnOnce)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(C,Object(o.a)({},h,{ref:m,className:w,"aria-invalid":s}))},t}(l.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},977:function(e,t,n){"use strict";var o=n(13),r=n(14),a=n(15),i=n(16),c=n(1),l=n.n(c),s=n(838),u=n(839),p=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(s.a,{className:"mb-2"},l.a.createElement(u.a,{sm:"12",className:"ml-50"},l.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?l.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):l.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),n}(l.a.Component);t.a=p}}]);
//# sourceMappingURL=165.3e71ae25.chunk.js.map