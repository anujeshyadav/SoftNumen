(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[325],{2537:function(e,t,a){"use strict";a.r(t),a.d(t,"AddDiscount",(function(){return y}));var n=a(13),r=a(14),s=a(15),l=a(16),o=a(1),c=a.n(o),i=a(841),u=a(839),m=a(840),d=a(205),p=a(844),f=a(861),b=a(859),h=a(853),g=(a(22),a(11),a(64)),y=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Discount")),c.a.createElement(m.a,null,c.a.createElement(g.b,{render:function(e){var t=e.history;return c.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/discount/discountList")}},"Back")}}))),c.a.createElement(p.a,null,"  ",c.a.createElement(f.a,{className:"m-1"},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Auto Generate Code"),c.a.createElement(h.a,{type:"text",placeholder:"Auto Generate Code",name:"name"})),c.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Type"),c.a.createElement(h.a,{type:"select"},c.a.createElement("option",{selected:!0},"---Select Type---"),c.a.createElement("option",null,"Flat"),c.a.createElement("option",null,"Percentage"))),c.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Discount"),c.a.createElement(h.a,{type:"number",placeholder:"Discount",name:"name"})),c.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},c.a.createElement(b.a,null,"Apply On"),c.a.createElement(h.a,{type:"select"},c.a.createElement("option",{selected:!0},"---Select---"),c.a.createElement("option",null,"Category"),c.a.createElement("option",null,"Subcategory"),c.a.createElement("option",null,"Product")))),c.a.createElement(u.a,null,c.a.createElement(d.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Attribute"))))))}}]),a}(o.Component);t.default=y},853:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(19),l=a(21),o=a(1),c=a.n(o),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,f),y=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",v=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":y&&(O=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===v||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(v,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},859:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(1),l=a.n(s),o=a(2),c=a.n(o),i=a(5),u=a.n(i),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(r.a)(e,d),h=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(m.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(m.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),h.push(s)}}));var y=Object(m.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:y}))};y.propTypes=b,y.defaultProps=h,t.a=y},861:function(e,t,a){"use strict";var n=a(6),r=a(8),s=a(19),l=a(21),o=a(1),c=a.n(o),i=a(2),u=a.n(i),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=325.71e455ba.chunk.js.map