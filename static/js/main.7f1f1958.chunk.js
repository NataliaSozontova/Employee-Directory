(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),o=s(12),c=s.n(o),a=(s(24),s(25),s(13)),i=s(14),l=s(19),d=s(17),h=s(18),j=(s(26),s(0));var u=function(e){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Image"}),Object(j.jsxs)("th",{children:["Name",Object(j.jsx)("button",{class:"button",onClick:e.handleSort,children:"Sort"})]}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Phone"}),Object(j.jsx)("th",{children:"DOB"})]})}),Object(j.jsx)("tbody",{children:e.employees.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"employee",src:e.picture.thumbnail})}),Object(j.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:e.dob.date.substring(0,e.dob.date.indexOf("T"))})]},e.id.value)}))})]})})};s(28);var f=function(e){return Object(j.jsx)("div",{className:"searchbox",children:Object(j.jsx)("form",{className:"form-inline",children:Object(j.jsx)("input",{className:"form-control",type:"search",placeholder:"Search by name","aria-label":"Search",onChange:function(t){return e.handleSearch(t)}})})})};s(29);var b=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Employee Directory"}),Object(j.jsx)("p",{children:"Use the search box to narrow your results"})]})},m=s(16),O=s.n(m),x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],filteredUsers:[],sort:"desc"},e.handleSearch=function(t){var s=e.state.employees.filter((function(e){return 0===e.name.first.toLowerCase().indexOf(t.target.value.toLowerCase())}));console.log("filters users "+s),e.setState({filteredUsers:s}),console.log("firstname => "+e.state.employees[0].name.first.toLowerCase().indexOf(t.target.value.toLowerCase()))},e.handleSort=function(t){if(console.log("state for sort =>"+e.state.sort),console.log("clicking on sort"),"desc"===e.state.sort){var s=e.state.filteredUsers.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?(console.log("sorting acs"),-1):0}));e.setState({filteredUsers:s,sort:"acs"}),console.log("state for sort =>"+e.state.sort)}else{var r=e.state.filteredUsers.sort((function(e,t){return e.name.first.toLowerCase()>t.name.first.toLowerCase()?(console.log("sorting desc"),-1):0}));e.setState({filteredUsers:r,sort:"desc"}),console.log("state for sort =>"+e.state.sort)}},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(t){console.log(t.data.results),e.setState({employees:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(f,{handleSearch:this.handleSearch}),Object(j.jsx)("br",{}),Object(j.jsx)(u,{employees:this.state.filteredUsers,handleSort:this.handleSort})]})}}]),s}(r.Component);s(48);var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.7f1f1958.chunk.js.map