(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[316],{2717:function(e,t,a){"use strict";a.r(t);var i=a(13),n=a(14),r=a(15),l=a(16),o=a(1),s=a.n(o),c=a(831),d=a(838),u=a(839),m=a(840),p=a(208),f=a(843),g=a(836),h=a(610),v=a(606),E=a(188),w=a(852),S=(a(50),a(106)),b=a(857),y=a(284),z=(a(22),a(853),a(850),a(65)),N=(a(11),a(855),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",CurrentDate:"",StartDate:"",EndDate:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"PRODUCT Image",field:"product",filter:"agSetColumnFilter",width:150,cellRendererFramework:function(e){var t,a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("div",{className:""},(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.product_images)?s.a.createElement("img",{style:{borderRadius:"12px"},width:"60px",height:"40px",src:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.product_images[0],alt:"image"}):"No Image "))}},{headerName:"PoNo",field:"po_no",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.po_no))}},{headerName:"product_id",field:"product_id",filter:!0,width:160,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.product_id))}},{headerName:"title",field:"title",filter:!0,width:160,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement(c.a,{color:"success"},e.data.title))}},{headerName:"price",field:"price",filter:!0,width:120,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement(c.a,{color:"success"},e.data.price))}},{headerName:"qty",field:"qty",filter:!0,width:120,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.qty))}},{headerName:"Total",field:"qty",filter:!0,width:120,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement(c.a,{color:"success"},e.data.qty*e.data.price))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,i=null===(e=this.props)||void 0===e||null===(t=e.location.state)||void 0===t?void 0:t.products;console.log(i),this.setState({rowData:i});var n=(new Date).toISOString();this.setState({CurrentDate:n.split("T")[0]});var r=JSON.parse(localStorage.getItem("userData")),l=null===r||void 0===r||null===(a=r.role)||void 0===a?void 0:a.find((function(e){return"Date Wise"===(null===e||void 0===e?void 0:e.pageName)}));this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return s.a.createElement(d.a,{className:"app-user-list"},s.a.createElement(u.a,{sm:"12"}),s.a.createElement(u.a,{sm:"12"},s.a.createElement(m.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(u.a,{sm:"4",lg:"4",md:"4"},s.a.createElement("h1",{className:"float-left"},"View Report")),s.a.createElement(u.a,null,s.a.createElement(z.b,{render:function(e){var t=e.history;return s.a.createElement(p.a,{className:" float-right",color:"danger",onClick:function(){return t.goBack()}},"Back")}}))),s.a.createElement(f.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(y.a,{className:"ml-50",size:15})),s.a.createElement(v.a,{right:!0},s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(S.a.Consumer,null,(function(t){return s.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(s.a.Component));t.default=N},850:function(e,t,a){},852:function(e,t,a){"use strict";var i=a(6),n=a(8),r=a(19),l=a(21),o=a(1),s=a.n(o),c=a(2),d=a.n(c),u=a(5),m=a.n(u),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,h=e.innerRef,v=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,w=new RegExp("\\D","g"),S=d||("select"===r||"textarea"===r?r:"input"),b="form-control";g?(b+="-plaintext",S=d||"input"):"file"===r?b+="-file":"range"===r?b+="-range":E&&(b=u?null:"form-check-input"),v.size&&w.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=v.size,delete v.size);var y=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,b),a);return("input"===S||d&&"function"===typeof d)&&(v.type=r),v.children&&!g&&"select"!==r&&"string"===typeof S&&"select"!==S&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),s.a.createElement(S,Object(i.a)({},v,{ref:h,className:y,"aria-invalid":c}))},t}(s.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=316.a1e373f2.chunk.js.map