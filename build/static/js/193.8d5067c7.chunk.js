(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{852:function(e,a,t){"use strict";var n=t(6),l=t(8),o=t(17),i=t(21),s=t(1),c=t.n(s),r=t(2),u=t.n(r),d=t(5),f=t.n(d),p=t(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,r=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,v=e.innerRef,h=Object(l.a)(e,m),g=["radio","checkbox"].indexOf(o)>-1,O=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var E=Object(p.mapToCssModules)(f()(a,r&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===y||u&&"function"===typeof u)&&(h.type=o),h.children&&!b&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:v,className:E,"aria-invalid":r}))},a}(c.a.Component);v.propTypes=b,v.defaultProps={type:"text"},a.a=v},859:function(e,a,t){"use strict";var n=t(6),l=t(8),o=t(1),i=t.n(o),s=t(2),c=t.n(s),r=t(5),u=t.n(r),d=t(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,r=e.check,p=e.size,m=e.for,b=Object(l.a)(e,f),v=[];s.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var o,i=!n;if(Object(d.isObject)(l)){var s,c=i?"-":"-"+a+"-";o=h(i,a,l.size),v.push(Object(d.mapToCssModules)(u()(((s={})[o]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s))),t)}else o=h(i,a,l),v.push(o)}}));var g=Object(d.mapToCssModules)(u()(a,!!o&&"sr-only",!!r&&"form-check-label",!!p&&"col-form-label-"+p,v,!!v.length&&"col-form-label"),t);return i.a.createElement(c,Object(n.a)({htmlFor:m},b,{className:g}))};g.propTypes=b,g.defaultProps=v,a.a=g},860:function(e,a,t){"use strict";var n=t(6),l=t(8),o=t(17),i=t(21),s=t(1),c=t.n(s),r=t(2),u=t.n(r),d=t(5),f=t.n(d),p=t(4),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,r=Object(l.a)(e,m),u=Object(p.mapToCssModules)(f()(a,!!o&&"form-inline"),t);return c.a.createElement(i,Object(n.a)({},r,{ref:s,className:u}))},a}(s.Component);v.propTypes=b,v.defaultProps={tag:"form"},a.a=v},884:function(e,a,t){},894:function(e,a,t){"use strict";var n=t(6),l=t(8),o=t(1),i=t.n(o),s=t(2),c=t.n(s),r=t(5),u=t.n(r),d=t(4),f=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.row,s=e.disabled,c=e.check,r=e.inline,p=e.tag,m=Object(l.a)(e,f),b=Object(d.mapToCssModules)(u()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!r)&&"form-check-inline",!(!c||!s)&&"disabled"),t);return"fieldset"===p&&(m.disabled=s),i.a.createElement(p,Object(n.a)({},m,{className:b}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},982:function(e,a,t){"use strict";t.r(a);var n=t(49),l=t(3),o=t(48),i=t(1),s=t.n(i),c=t(65),r=t(197),u=t.n(r),d=t(840),f=t(838),p=t(839),m=t(843),b=t(860),v=t(894),h=t(859),g=t(830),O=t(852),y=t(831),j=(t(22),t(855)),E=t.n(j),w=(t(884),t(196));a.default=function(e){var a,t,r,j,N,x,M,z,T,R,k,C,S,P,_,D,A,J,I=e.ViewOneData,V=Object(i.useState)({}),F=Object(o.a)(V,2),K=F[0],q=F[1],B=Object(i.useState)({}),G=Object(o.a)(B,2),H=G[0],L=G[1],Q=Object(i.useState)({}),U=Object(o.a)(Q,2),W=U[0],X=U[1],Y=(Object(c.h)(),function(e){var a=e.target,t=a.name,o=a.value;L(Object(l.a)(Object(l.a)({},H),{},Object(n.a)({},t,o)))});Object(i.useEffect)((function(){console.log(I),L(I),Object(w.g)().then((function(e){var a=u.a.xml2json(e.data,{compact:!0,spaces:2});q(JSON.parse(a)),X(JSON.parse(a))})).catch((function(e){console.log(e)}))}),[]);return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(f.a,{className:"m-2"},s.a.createElement(p.a,null,s.a.createElement("h1",{className:"float-left"},"Account Information"))),s.a.createElement(m.a,null,s.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),Object(w.e)(H).then((function(e){e.status&&(L({}),window.location.reload(),E()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},s.a.createElement(f.a,{className:"mb-2"},s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,null===(a=W.CreateAccount)||void 0===a||null===(t=a.MyDropdown)||void 0===t||null===(r=t.dropdown)||void 0===r||null===(j=r.label)||void 0===j?void 0:j._text),s.a.createElement(g.a,{readOnly:!0,type:"select",name:null===(N=W.CreateAccount)||void 0===N||null===(x=N.MyDropdown)||void 0===x||null===(M=x.dropdown)||void 0===M||null===(z=M.name)||void 0===z?void 0:z._text,value:H[null===(T=W.CreateAccount)||void 0===T||null===(R=T.MyDropdown)||void 0===R||null===(k=R.dropdown)||void 0===k||null===(C=k.name)||void 0===C?void 0:C._text],onChange:Y},s.a.createElement("option",{value:""}," ",H[null===(S=W.CreateAccount)||void 0===S||null===(P=S.MyDropdown)||void 0===P||null===(_=P.dropdown)||void 0===_||null===(D=_.name)||void 0===D?void 0:D._text])))),K&&(null===K||void 0===K||null===(A=K.CreateAccount)||void 0===A||null===(J=A.input)||void 0===J?void 0:J.map((function(e,a){var t,n,l,o,i,c;return s.a.createElement(p.a,{key:a,lg:"6",md:"6",sm:"12"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),s.a.createElement(O.a,{readOnly:!0,onKeyDown:function(a){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},type:null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type,placeholder:null===e||void 0===e||null===(o=e.placeholder)||void 0===o?void 0:o._text,name:null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text,value:H[null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text],onChange:Y})))})))),s.a.createElement("hr",null),s.a.createElement(f.a,{className:"mt-2 "},s.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(h.a,{className:""},s.a.createElement("h4",null,"Status-",s.a.createElement(y.a,{color:"Active"==H.Status?"primary":"danger"},H.Status))))))))))}}}]);
//# sourceMappingURL=193.8d5067c7.chunk.js.map