(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[311],{2718:function(e,t,a){"use strict";a.r(t);var n=a(14),i=a(15),l=a(16),r=a(17),o=a(1),s=a.n(o),u=a(203),c=a(836),d=a(837),p=a(842),m=a(856),f=a(845),g=a(840),h=a(848),v=a(832),S=a(831),E=(a(51),a(105)),b=a(861),w=a(280),z=(a(22),a(857),a(854),a(11)),y=a(859),T=a.n(y),N=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rowData:[],RoleDefine:"",TopupAmount:"",topupdata:"",RequestedTopup:"",modalView:!1,IsTopup:!1,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"TopUp",field:"username",filter:!0,width:"200",cellRendererFramework:function(t){return s.a.createElement("div",null,"Super Admin"===e.state.RoleDefine&&s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{onClick:function(a){return e.handleTopUp(a,t.data)},className:"btn ",color:"primary",size:"sm"},"Top Up")))}},{headerName:"full_name",field:"full_name",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.full_name))}},{headerName:"Requested ",field:"topup_budget",filter:!0,width:230,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.topup_budget))}},{headerName:"created_date",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",null,s.a.createElement("span",null,e.data.created_date))}}]},e.handleTopUp=function(t,a){t.preventDefault(),e.setState({modalView:!0}),e.setState({topupdata:a}),e.setState({RequestedTopup:null===a||void 0===a?void 0:a.topup_budget})},e.handleTopup=function(){e.setState({IsTopup:!0})},e.HandleSubmitTopUpRequest=function(t){var a;t.preventDefault();var n=JSON.parse(localStorage.getItem("userData")),i=new FormData;i.append("user_id",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.id),i.append("topup_budget",e.state.TopupAmount),e.state.TopupAmount>0?z.a.post("/addtopuptouser",i).then((function(t){console.log(t.data),T()("Success","TopUp Request Created Successfully"),e.setState({TopupAmount:""})})).catch((function(e){console.log(e),T()("Something went Wrong")})):T()("Something is Missing.Enter details before Submit")},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e.handleTopupAssign=function(t){var a,n,i;t.preventDefault();var l=new FormData;l.append("topup_id",null===(a=e.state.topupdata)||void 0===a?void 0:a.id),l.append("user_request_id",null===(n=e.state.topupdata)||void 0===n?void 0:n.user_id),l.append("super_user_id",null===(i=e.state.topupdata)||void 0===i?void 0:i.user_request_id),l.append("topup_budget",e.state.RequestedTopup),z.a.post("/updatetopupuser",l).then((function(t){console.log(t.data),e.setState({modalView:!1}),T()("Success","TopUp Added Successfully"),e.componentDidMount()})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=this,i=JSON.parse(localStorage.getItem("userData"));this.setState({RoleDefine:i.Userinfo.role});var l=null===i||void 0===i||null===(e=i.role)||void 0===e?void 0:e.find((function(e){return"Budget Assignment"===(null===e||void 0===e?void 0:e.pageName)}));this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")});var r=new FormData;r.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.role),z.a.post("/getAllUsersTopupBuget",r).then((function(e){var t;console.log(null===(t=e.data)||void 0===t?void 0:t.data),n.setState({rowData:e.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return s.a.createElement(c.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(p.a,null,s.a.createElement(c.a,{className:"m-2"},s.a.createElement(d.a,{lg:"4",md:"4",sm:"4"},s.a.createElement("h1",null,"Budget Assignement")),"User"===this.state.RoleDefine?s.a.createElement(s.a.Fragment,null,0==this.state.IsTopup?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"d-flex justify-content-end"},s.a.createElement(u.a,{color:"primary",className:"float-right",onClick:this.handleTopup},"TopUp Request"))):s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement(m.a,{className:"form-control",type:"number",value:this.state.TopupAmount,placeholder:"Enter Top up",onChange:function(t){return e.setState({TopupAmount:t.target.value})}})),s.a.createElement(d.a,null,s.a.createElement(u.a,{className:"float-right",color:"primary",onClick:this.HandleSubmitTopUpRequest},"Submit")))):null),s.a.createElement(f.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(w.a,{className:"ml-50",size:15})),s.a.createElement(v.a,{right:!0},s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},this.state.modalView&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(m.a,{className:"form-control",placeholder:"Enter Topup Amount",onChange:function(t){return e.setState({RequestedTopup:t.target.value})},value:this.state.RequestedTopup})),s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(u.a,{onClick:function(t){return e.handleTopupAssign(t)},color:"primary"},"Topup Now")),s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(u.a,{className:"float-right",color:"danger",onClick:function(t){e.setState({modalView:!1}),t.preventDefault()}},"Cancel"))),s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(m.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(u.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(E.a.Consumer,null,(function(t){return s.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(s.a.Component);t.default=N},854:function(e,t,a){},856:function(e,t,a){"use strict";var n=a(6),i=a(7),l=a(12),r=a(21),o=a(1),s=a.n(o),u=a(2),c=a.n(u),d=a(5),p=a.n(d),m=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:c.a.node,type:c.a.string,size:c.a.oneOfType([c.a.number,c.a.string]),bsSize:c.a.string,valid:c.a.bool,invalid:c.a.bool,tag:m.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),plaintext:c.a.bool,addon:c.a.bool,className:c.a.string,cssModule:c.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,o=e.valid,u=e.invalid,c=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,v=Object(i.a)(e,f),S=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),b=c||("select"===l||"textarea"===l?l:"input"),w="form-control";g?(w+="-plaintext",b=c||"input"):"file"===l?w+="-file":"range"===l?w+="-range":S&&(w=d?null:"form-check-input"),v.size&&E.test(v.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var z=Object(m.mapToCssModules)(p()(t,u&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,w),a);return("input"===b||c&&"function"===typeof c)&&(v.type=l),v.children&&!g&&"select"!==l&&"string"===typeof b&&"select"!==b&&(Object(m.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),s.a.createElement(b,Object(n.a)({},v,{ref:h,className:z,"aria-invalid":u}))},t}(s.a.Component);h.propTypes=g,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=311.b28f3ab9.chunk.js.map