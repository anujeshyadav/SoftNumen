(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[309],{2688:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(11),i=a(12),l=a(13),o=a(14),s=a(1),d=a.n(s),c=a(831),u=a(838),m=a(839),p=a(840),f=a(207),v=a(843),g=a(836),h=a(610),S=a(606),E=a(188),w=a(853),b=(a(50),a(106)),C=a(858),y=a(330),D=a(283),N=(a(20),a(854),a(850),a(65)),z=a(29),R=a(856),_=a.n(R),P=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e,i;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(i=t.call.apply(t,[this].concat(o))).state={rowData:[],Userlist:[],paginationPageSize:20,SelectedClient:"",Show:"",CurrentDate:"",StartDate:"",EndDate:"",currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"PoNo",field:"po_no",filter:!0,width:100,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.po_no))}},{headerName:"OrderStatus",field:"order_status",filter:!0,width:160,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement(c.a,{color:"success"},e.data.order_status))}},{headerName:"Client Code",field:"display_code",filter:!0,width:180,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.display_code))}},{headerName:"Created by",field:"created_by_full_name",filter:!0,width:180,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.created_by_full_name))}},{headerName:"Order Created By",field:"create_order_user_full_name",filter:!0,width:140,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.create_order_user_full_name))}},{headerName:"suppliername",field:"supplier_name",filter:!0,width:160,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.supplier_name))}},{headerName:"total",field:"total",filter:!0,width:120,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement(c.a,{color:"success"},e.data.total))}},{headerName:"createddate",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){var t;return d.a.createElement("div",null,d.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.created_date))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(N.b,{render:function(t){var a=t.history;return d.a.createElement(y.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return a.push({pathname:"/app/freshlist/cart/ViewoneFinalreport",state:null===e||void 0===e?void 0:e.data})}})}}))})),e)]},i.onGridReady=function(e){i.gridApi=e.api,i.gridColumnApi=e.columnApi,i.setState({currenPageSize:i.gridApi.paginationGetCurrentPage()+1,getPageSize:i.gridApi.paginationGetPageSize(),totalPages:i.gridApi.paginationGetTotalPages()})},i.updateSearchQuery=function(e){i.gridApi.setQuickFilter(e)},i.filterSize=function(e){i.gridApi&&(i.gridApi.paginationSetPageSize(Number(e)),i.setState({currenPageSize:e,getPageSize:e}))},i.handleClientWiseReport=function(e){var t,a;e.preventDefault();var n=JSON.parse(localStorage.getItem("userData")),r=new FormData;r.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role),r.append("client_id",i.state.SelectedClient),r.append("from_date ",i.state.StartDate),r.append("to_date",i.state.EndDate),z.a.post("/reportApi",r).then((function(e){var t,a,n,r,l=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;(console.log(null===(a=e.data)||void 0===a?void 0:a.message),"Record Not Found."===(null===(n=e.data)||void 0===n?void 0:n.message))?(_()("".concat(null===(r=e.data)||void 0===r?void 0:r.message)),i.setState({rowData:""})):(i.setState({Show:!0}),i.setState({rowData:l}))})).catch((function(e){var t,a;console.log(null===(t=e.response)||void 0===t?void 0:t.data.message),_()("".concat(null===(a=e.response)||void 0===a?void 0:a.data.message))}))},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=this,r=(new Date).toISOString();this.setState({CurrentDate:r.split("T")[0]});var i=JSON.parse(localStorage.getItem("userData"));console.log(i.role);var l=null===i||void 0===i||null===(e=i.role)||void 0===e?void 0:e.find((function(e){return"Client Wise"===(null===e||void 0===e?void 0:e.pageName)}));console.log(l),this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")});var o=new FormData;o.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),o.append("role",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.role),z.a.post("/getReportUserlist",o).then((function(e){var t,a,r,i;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.users),n.setState({Userlist:null===e||void 0===e||null===(r=e.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.users})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.Show,n=t.rowData,r=t.columnDefs,i=t.defaultColDef,l=t.Userlist;return d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(m.a,{sm:"12"},d.a.createElement(p.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(m.a,{sm:"4",lg:"4",md:"4"},d.a.createElement("h1",{className:"float-left"},"Client Wise Report")),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"start"},"Start Date:"),d.a.createElement("input",{onChange:function(t){e.setState({StartDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"start"},"End Date:"),d.a.createElement("input",{onChange:function(t){e.setState({EndDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),d.a.createElement(m.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("label",{for:"cars"},"Choose a Client:"),d.a.createElement("select",{onChange:function(t){return e.setState({SelectedClient:t.target.value})},className:"form-control",name:"cars",id:"cars"},d.a.createElement("option",{value:"not Selected"},"--Select User--"),null===l||void 0===l?void 0:l.map((function(e,t){return d.a.createElement("option",{key:t,value:e.id},e.full_name," \xa0 \xa0(",e.role,")")})))),d.a.createElement(m.a,{lg:"2",className:"d-flex justify-content-end"},d.a.createElement(f.a,{className:"mt-2",onClick:function(t){return e.handleClientWiseReport(t)},color:"primary"},"Submit"))),a?d.a.createElement(d.a.Fragment,null,d.a.createElement(v.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(g.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(D.a,{className:"ml-50",size:15})),d.a.createElement(S.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(b.a.Consumer,null,(function(t){return d.a.createElement(C.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:r,rowData:n,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))):null)))}}]),a}(d.a.Component);t.default=P},850:function(e,t,a){},853:function(e,t,a){"use strict";var n=a(6),r=a(8),i=a(17),l=a(19),o=a(1),s=a.n(o),d=a(2),c=a.n(d),u=a(5),m=a.n(u),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:c.a.node,type:c.a.string,size:c.a.oneOfType([c.a.number,c.a.string]),bsSize:c.a.string,valid:c.a.bool,invalid:c.a.bool,tag:p.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),plaintext:c.a.bool,addon:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,o=e.valid,d=e.invalid,c=e.tag,u=e.addon,v=e.plaintext,g=e.innerRef,h=Object(r.a)(e,f),S=["radio","checkbox"].indexOf(i)>-1,E=new RegExp("\\D","g"),w=c||("select"===i||"textarea"===i?i:"input"),b="form-control";v?(b+="-plaintext",w=c||"input"):"file"===i?b+="-file":"range"===i?b+="-range":S&&(b=u?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var C=Object(p.mapToCssModules)(m()(t,d&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,b),a);return("input"===w||c&&"function"===typeof c)&&(h.type=i),h.children&&!v&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(w,Object(n.a)({},h,{ref:g,className:C,"aria-invalid":d}))},t}(s.a.Component);g.propTypes=v,g.defaultProps={type:"text"},t.a=g}}]);
//# sourceMappingURL=309.75c50f52.chunk.js.map