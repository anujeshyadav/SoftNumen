(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[362],{2714:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a(13),l=a(14),r=a(15),o=a(16),s=a(1),u=a.n(s),d=a(831),c=a(838),m=a(839),g=a(840),p=a(893),f=a(858),v=a(208),h=a(843),S=a(836),E=a(610),w=a(606),b=a(188),D=a(852),N=a(1006),z=a.n(N),A=(a(50),a(106)),y=a(857),P=a(284),C=(a(22),a(853),a(850),a(11)),R=a(855),k=a.n(R),x=[],B=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],userDataList:[],mainRole:"",userid:"",BudgetValue:"",paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"full_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.full_name))}},{headerName:"Assigned Budget",field:"budget",filter:!0,width:220,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex mt-1 align-items-center cursor-pointer"},u.a.createElement(d.a,{color:"success"},e.data.budget))}},{headerName:"Remaining Budget",field:"remaining_budget",filter:!0,width:220,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex mt-1 align-items-center cursor-pointer"},u.a.createElement(d.a,{color:"warning"},e.data.remaining_budget))}},{headerName:"Assigned Date",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.created_date))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e.handleAssignBudget=function(t){var a;t.preventDefault();var i=JSON.parse(localStorage.getItem("userData")),l=new FormData,r=Object(n.a)(new Set(x));l.append("user_id",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.id),l.append("budget",e.state.BudgetValue),l.append("assign_user_id",JSON.stringify(r)),e.state.BudgetValue>0?C.a.post("/addbudget",l).then((function(t){k()("Budget Assigned Successfully"),console.log(t.data),e.setState({BudgetValue:""}),e.setState({userid:""}),window.location.reload(),e.componentDidMount()})).catch((function(e){console.log(e)})):k()("Something is Missing. Enter details before Submit")},e.onRemove=function(e,t){console.log(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n,i,l=this,r=JSON.parse(localStorage.getItem("userData"));this.setState({mainRole:null===r||void 0===r||null===(e=r.Userinfo)||void 0===e?void 0:e.role});var o=null===r||void 0===r||null===(t=r.role)||void 0===t?void 0:t.find((function(e){return"Budget List"===(null===e||void 0===e?void 0:e.pageName)}));console.log(o),this.setState({Viewpermisson:null===o||void 0===o?void 0:o.permission.includes("View")}),this.setState({Createpermisson:null===o||void 0===o?void 0:o.permission.includes("Create")}),this.setState({Editpermisson:null===o||void 0===o?void 0:o.permission.includes("Edit")}),this.setState({Deletepermisson:null===o||void 0===o?void 0:o.permission.includes("Delete")});var s=new FormData;s.append("role",null===r||void 0===r||null===(a=r.Userinfo)||void 0===a?void 0:a.role),s.append("user_id",null===r||void 0===r||null===(n=r.Userinfo)||void 0===n?void 0:n.id),C.a.post("/getAllUsersBuget",s).then((function(e){var t;console.log(e.data.data);var a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;l.setState({rowData:a})})).catch((function(e){console.log(e)}));var u=new FormData;u.append("user_id",null===r||void 0===r||null===(i=r.Userinfo)||void 0===i?void 0:i.id),u.append("role","User"),C.a.post("/getUserlistforBudget",u).then((function(e){var t,a,n=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.users;l.setState({userDataList:n})})).catch((function(e){}))}},{key:"onSelect",value:function(e,t){if(console.log(e),e.length)for(var a=0;a<e.length;a++)x.push(e[a].id)}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return u.a.createElement(c.a,{className:"app-user-list"},u.a.createElement(m.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(c.a,{className:"m-2"},u.a.createElement(m.a,{lg:"4",md:"4",sm:"4"},u.a.createElement("h1",{sm:"4",className:""},"Budget List")),"Super Admin"===this.state.mainRole&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,null,u.a.createElement("label",{className:"selectClient"},"Add Amount"),u.a.createElement("input",{onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},onChange:function(t){e.setState({BudgetValue:t.target.value})},className:"form-control",type:"number"})),u.a.createElement(m.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,null,"Select A User"),u.a.createElement(z.a,{required:!0,options:this.state.userDataList,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"username"}))),u.a.createElement(m.a,null,u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(v.a,{title:"Select user and Amount for Submit",color:"primary",className:"custom-button mt-2",onClick:function(t){e.handleAssignBudget(t)}},"Assign Now"))))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(S.a,{className:"p-1 ag-dropdown"},u.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(D.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(v.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(A.a.Consumer,null,(function(t){return u.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(u.a.Component);t.default=B},850:function(e,t,a){}}]);
//# sourceMappingURL=362.1fcabb5c.chunk.js.map