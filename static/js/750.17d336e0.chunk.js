"use strict";(self.webpackChunkkaranbala=self.webpackChunkkaranbala||[]).push([[750],{5750:function(e,n,r){r.r(n),r.d(n,{default:function(){return Oe}});var t=r(7313),o=r(8467),i=r(9506),a=r(1113),s=r(7131),l=r(8070),c=r(5554),d=r(3433),u=r(9439),p=r(9099),m=r(2135),x=r(6417),h=function(e){var n=(0,t.useState)([{key:"",value:!1}]),r=(0,u.Z)(n,2),o=r[0],i=r[1],a=e.item,s=e.depthLevel,l=(0,t.useRef)();return(0,x.jsx)("li",{className:"menu-items",ref:l,children:a.category?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:"categoryTitle",children:a.category.title}),a.category.children.map((function(e,n){var r;return(0,x.jsx)(t.Fragment,{children:e.submenu?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("button",{type:"button","aria-haspopup":"menu",onClick:function(){i((function(n){var r;return[].concat((0,d.Z)(n),[{key:e.title,value:!(null!==(r=n[n.map((function(e){return e.key})).lastIndexOf(e.title)])&&void 0!==r&&r.value)}])}))},style:{display:"flex",justifyContent:"space-between"},children:[e.title," ",s>0?(0,x.jsx)("span",{children:"\xbb"}):(0,x.jsxs)(x.Fragment,{children:[" ",null!==(r=o[o.map((function(e){return e.key})).lastIndexOf(e.title)])&&void 0!==r&&r.value?(0,x.jsx)("span",{className:"arrow"}):(0,x.jsx)("span",{className:"arrow-left"})]})]}),(0,x.jsx)(f,{depthLevel:s,submenus:e.submenu,subtitle:o,index:e.title})]}):(0,x.jsx)(p.Z,{disableRipple:!0,component:m.OL,to:e.to,startIcon:e.startIcon,children:e.title})},n)}))]}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.Z,{disableRipple:!0,component:m.OL,to:a.to,startIcon:a.startIcon,children:a.title})})})},f=function(e){var n,r=e.submenus,t=e.depthLevel,o=e.index,i=e.subtitle,a=i.map((function(e){return e.key})).lastIndexOf(o),s=(t+=1)>1?"dropdown-submenu":"";return(0,x.jsx)("ul",{"data-id":o,className:"dropdown ".concat(s," ").concat(null!==(n=i[a])&&void 0!==n&&n.value?"show":""),children:r.map((function(e,n){return(0,x.jsx)(h,{item:e,depthLevel:t},n)}))})},v=(0,r(7894).Z)(i.Z)((function(){return"\n  :root{\n    font-family:IRANSans !important;\n    }\n  \n  .menus {\n    display: flex;\n    list-style: none;\n    direction: ltr;\n    flex-direction: column;\n    \n  }\n  .menu-items {\n    position: relative;\n    text-align: left;\n    \n  }\n  \n  .menu-items a,\n  .menu-items button {\n    margin: 0 ;\n    padding:0 10px 0  0;\n    line-height: 2;\n    font-family:IRANSans !important;\n\n  }\n  \n  .menu-items a {\n    display: block;\n    color: inherit;\n    text-decoration: none;\n  }\n  \n  .menu-items button {\n    color: inherit;\n    font-size: inherit;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    width: 100%;\n  }\n \n  .arrow::after {\n    content: '';\n    display: inline-block;\n    margin-left: 0.28em;\n    vertical-align: 0.09em;\n    border-top: 0.42em solid;\n    border-right: 0.32em solid transparent;\n    border-left: 0.32em solid transparent;\n  }\n\n  .arrow-left::after {\n    content: '';\n    display: inline-block;\n    margin-left: 0.28em;\n    vertical-align: 0.09em;\n    border-bottom: 0.32em solid transparent;\n    border-right: 0.32em solid  transparent;\n    border-left: 0.42em solid ;\n    border-top: 0.32em solid transparent;\n  }\n\n  .categoryTitle{\n    color: #707e8d\n  }\n  \n  .dropdown {\n\n    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),\n    0 4px 6px -2px rgba(71, 63, 79, 0.16);\n    z-index: 9999;\n    min-width: 100px;\n    padding: 0.5rem 0;\n    border-radius: 0.5rem;\n    list-style-type: disc; \n    display: none;\n  }\n  \n  .dropdown.show {\n    display: block;\n    padding: 0 28px;\n  }\n  \n  .dropdown .dropdown-submenu {\n    position: absolute;\n    left: 10px;\n    top: 15px\n  }\n  span{ display: inline}\n  span .MuiSvgIcon-root{font-size:15px}\n  "})),g=function(e){var n=e.children;return(0,x.jsx)(v,{children:(0,x.jsx)("ul",{className:"menus",children:n})})},j=function(e){var n=e.items;return(0,x.jsx)(g,{children:n.map((function(e,n){return(0,x.jsx)(h,{item:e,depthLevel:0,children:" "},n)}))})},Z=r(7887),b=r(1765),y=[{title:"\u062e\u0627\u0646\u0647",to:"/",startIcon:(0,x.jsx)(Z.Z,{})},{title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",to:"/pv/karanbala/admin",startIcon:(0,x.jsx)(b.Z,{})},{category:{children:[{title:"\u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u062d\u062a\u0648\u0627",submenu:[{title:"\u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/field-of-study"},{title:"\u067e\u0627\u06cc\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/grade-level"},{title:"\u06a9\u062a\u0627\u0628",to:"/pv/karanbala/admin/book"},{title:"\u062a\u0631\u0645 \u062a\u062d\u0635\u06cc\u0644\u06cc",to:"/pv/karanbala/admin/term-of-study"},{title:"\u0641\u0635\u0644",to:"/pv/karanbala/admin/chapter"},{title:"\u0645\u0648\u0636\u0648\u0639",to:"/pv/karanbala/admin/subject"}]}]}}],w=r(2702),k=r(9273),S=r(874),C=function(e){var n,r=e.route,t=e.userRole,i=e.children,a=null===t||void 0===t||null===(n=t.roles)||void 0===n?void 0:n.some((function(e){var n;return r.requiredRoles.includes(e.title)&&(null===(n=e.permissions)||void 0===n?void 0:n.some((function(e){return e.resource===r.resource&&e.action===r.action})))}));return a||void 0===a?(0,x.jsx)(x.Fragment,{children:i}):(localStorage.removeItem("token"),S.h.dispatch({type:k.Q.SetUserToken,payload:null}),(0,x.jsx)(o.Fg,{to:"/"}))},N=r(1413),R=r(4165),T=r(5861),I=r(6783),A=r(5281),P=r(5627),E=r(56),F=r(173),O=function(){return(0,E.useMutation)((function(e){return F.T.fieldOfStudyControllerCreate((0,N.Z)({},e))}))},q=r(1387),W=function(){return(0,E.useQuery)(["Get-All-Field-Of-Studies"],(0,T.Z)((0,R.Z)().mark((function e(){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.T.fieldOfStudyControllerFindAll();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))))},H=r(4942),M=r(5987),L=r(7551),U=r(1629),B=r(6835),z=r(3477),Q=r(4076),D=r(7478),K=r(4758),_=r(3467),G=r(5033),J=r(5743),$=r(3061),V=r(7970),X=r(38),Y=["rowsPerPage","onRowsPerPageChange","total"],ee=(0,l.Z)((function(e){return(0,X.Z)({root:{width:"100%",display:"flex",justifyContent:"center","& > *":{marginTop:e.spacing(2)},"& .MuiPaginationItem-page":{backgroundColor:e.palette.background.paper},"& .MuiPagination-ul":{justifyContent:"flex-start"},"& .Mui-selected":{backgroundColor:"".concat(e.palette.primary.main," !important"),color:e.palette.background.paper,boxShadow:"0 14px 26px -12px rgb(103 28 201 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(103 28 201 / 20%)"}}})})),ne=function(e){e.rowsPerPage,e.onRowsPerPageChange,e.total;var n=(0,M.Z)(e,Y),r=ee();return(0,x.jsx)("div",{className:r.root,children:(0,x.jsx)(V.Z,(0,N.Z)({defaultPage:1,color:"primary",variant:"outlined"},n))})},re=r(9984),te=["headers","loading","children","rows","onSelect","expandHeader","menuHeader","pagination","onExpand","emptyNode","emptyRows","newItems","successItems","errorItems","edit","secondary","successHeader","errorHeader","hasStyle"],oe=(0,l.Z)((function(e){return{skeleton:{borderRadius:0},loadingTD:{border:"none",paddingBottom:"0",paddingRight:"0",paddingLeft:"0",paddingTop:"0"},moreIcon:{},successRow:{backgroundColor:"".concat((0,L.Fq)(e.palette.success.dark,.13)," !important")},errorRow:{backgroundColor:"".concat((0,L.Fq)(e.palette.error.dark,.1)," !important")},secondary:{"& .MuiTableCell-head":{backgroundColor:"transparent"},"& .MuiTableBody-root":{"& tr:nth-of-type(even)":{backgroundColor:"transparent"},"& tr:nth-of-type(odd)":{backgroundColor:"transparent"}}},successHeader:{"&.MuiTableCell-head":{color:e.palette.success.main}},errorHeader:{"&.MuiTableCell-head":{color:e.palette.error.dark}},"$MuiTableCell-body":{padding:"1.6rem"},sumColumns:{"& .MuiTableCell-body":{backgroundColor:"#2e2e33",paddingTop:"20px !important",paddingBottom:"20px !important"}}}})),ie=function(e){var n=e.headers,r=e.loading,o=(e.children,e.rows),i=e.onSelect,a=e.expandHeader,l=e.menuHeader,c=e.pagination,d=e.onExpand,p=e.emptyNode,m=(e.emptyRows,e.newItems,e.successItems,e.errorItems,e.edit,e.secondary),h=e.successHeader,f=e.errorHeader,v=(e.hasStyle,(0,M.Z)(e,te)),g=oe({secondary:m,successHeader:h,errorHeader:f}),j=t.useState([]),Z=(0,u.Z)(j,2),b=Z[0],y=Z[1],w=t.useState({}),k=(0,u.Z)(w,2),S=k[0],C=k[1],R=n.length;a&&(R+=1),l&&(R+=1),i&&(R+=1),t.useMemo((function(){c&&C({})}),[null===c||void 0===c?void 0:c.page,null===c||void 0===c?void 0:c.rowsPerPage]);return(0,x.jsxs)(U.Z,{children:[(0,x.jsxs)(B.Z,(0,N.Z)((0,N.Z)({className:(0,$.Z)(g.table,(0,H.Z)({},g.secondary,m)),"aria-label":"table"},v),{},{children:[(0,x.jsx)(z.Z,{children:(0,x.jsxs)(Q.Z,{children:[i&&(0,x.jsx)(D.Z,{padding:"checkbox",children:(0,x.jsx)(K.Z,{indeterminate:b.length>0&&b.length<o.length,checked:o.length>0&&b.length===o.length,onChange:function(e){if(e.target.checked){var n=o.reduce((function(e,n){var r=n.id;return r&&e.push(r),e}),[]);return i&&i(n),void y(n)}y([])},inputProps:{"aria-label":"select all desserts"}})}),a&&(0,x.jsx)(D.Z,{width:150,component:"th",children:a}),n.map((function(e,n){var r;return(0,x.jsx)(D.Z,(0,N.Z)((0,N.Z)({},e),{},{component:"th",className:(0,$.Z)((r={},(0,H.Z)(r,g.successHeader,h),(0,H.Z)(r,g.errorHeader,f),r))}),n)})),l&&(0,x.jsx)(D.Z,{width:150,component:"th",children:l})]})}),r?(0,x.jsx)(x.Fragment,{children:"Loading..."}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(_.Z,{children:[(null===o||void 0===o?void 0:o.length)>0?null===o||void 0===o?void 0:o.map((function(e,n){var r,o=e.data,a=e.expandNode,l=e.expandNodeContent,c=e.id,u=e.onPressTitle,p=e.clickOnIndexId,m=void 0===p?0:p,h=!!c&&(r=c,-1!==b.indexOf(r));return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(Q.Z,{hover:!0,role:"checkbox","aria-checked":h,tabIndex:-1,selected:h,children:[i&&(0,x.jsx)(D.Z,{onClick:function(e){return function(e,n){var r=b.indexOf(n),t=[];-1===r?t=t.concat(b,n):0===r?t=t.concat(b.slice(1)):r===b.length-1?t=t.concat(b.slice(0,-1)):r>0&&(t=t.concat(b.slice(0,r),b.slice(r+1))),i&&i(t),y(t)}(0,c)},padding:"checkbox",children:(0,x.jsx)(K.Z,{checked:h,inputProps:{"aria-labelledby":String(c)}})}),a&&(0,x.jsx)(D.Z,{children:(0,x.jsxs)(J.Z,{display:"inline-block",onClick:function(){C((function(e){return(0,N.Z)((0,N.Z)({},e),{},(0,H.Z)({},n,!e[n]))})),d&&d(c)},children:[l,(0,x.jsx)(s.Z,{"aria-label":"expand row",size:"small",onClick:function(){C((function(e){return(0,N.Z)((0,N.Z)({},e),{},(0,H.Z)({},n,!e[n]))})),d&&d(c)},children:S[n]?(0,x.jsx)(re.UF1,{}):(0,x.jsx)(re.nOJ,{})})]})}),Object.values(o).map((function(e,n){return(0,x.jsx)(D.Z,{onClick:function(){void 0!==u&&n===m&&u()},children:e},n)}))]},n),a&&(0,x.jsx)(Q.Z,{children:(0,x.jsx)(D.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:R,children:(0,x.jsx)(G.Z,{in:S[n],timeout:"auto",unmountOnExit:!0,children:(0,x.jsx)(J.Z,{children:a})})})})]},n)})):(0,x.jsx)(Q.Z,{children:(0,x.jsx)(D.Z,{align:"center",colSpan:R,children:p})}),e.children&&(0,x.jsx)(Q.Z,{className:g.sumColumns,children:e.children})]})})]})),!r&&c&&(0,x.jsx)(ne,(0,N.Z)({},c))]})},ae=ie;ie.defaultProps={emptyNode:"No Data"};var se=r(9213),le=function(){return(0,E.useMutation)((function(e){return F.T.fieldOfStudyControllerRemove(e)}))},ce=(0,l.Z)((function(e){return{container:{display:"flex",gap:"10px",justifyContent:"space-around"},fieldOfStudy:{margin:"0 50px"},formContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",margin:"1rem",border:"1px solid ".concat(e.palette.primary.main),borderRadius:"5px",boxShadow:"0px 1px 2px ".concat(e.palette.primary.main)},formTitle:{marginBottom:"2rem",fontSize:"2rem",fontWeight:"bold",color:e.palette.primary.main},formField:{margin:"1rem",width:"100%"},formButton:{margin:"1rem",width:"100%"}}})),de=function(e){var n=ce();(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]);var r=(0,t.useState)(!1),o=(0,u.Z)(r,2),l=o[0],c=o[1],d=O(),m=W(),h=le(),f=(0,t.useState)(1),v=(0,u.Z)(f,2),g=v[0],j=v[1],Z=(0,t.useState)(10),b=(0,u.Z)(Z,1)[0],y=(0,P.cI)(),w=y.handleSubmit,k=y.register,S=(y.formState.errors,function(){var e=(0,T.Z)((0,R.Z)().mark((function e(n){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),d.mutate(n,{onSuccess:function(){var e=(0,T.Z)((0,R.Z)().mark((function e(n){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200==n.statusCode?(c(!1),m.refetch(),q.Am.success(n.message)):(c(!1),Array.isArray(n.message)?q.Am.error((0,x.jsx)("ul",{children:n.message.map((function(e){return(0,x.jsx)("li",{children:e},e)}))})):q.Am.error((0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:n.message},n.message)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onError:function(){var e=(0,T.Z)((0,R.Z)().mark((function e(n){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.Am.error(n.message);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return(0,x.jsxs)(i.Z,{className:n.container,children:[(0,x.jsx)(i.Z,{children:(0,x.jsxs)("form",{onSubmit:w(S),children:[(0,x.jsx)(I.Z,{label:"\u0639\u0646\u0648\u0627\u0646 \u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",variant:"outlined",className:n.formField,InputProps:(0,N.Z)({},k("title",{required:"\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}))}),(0,x.jsx)(p.Z,{variant:"contained",color:"primary",className:n.formButton,disabled:l,type:"submit",children:l?(0,x.jsx)(A.Z,{size:24}):"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,x.jsxs)(i.Z,{className:n.fieldOfStudy,children:[(0,x.jsx)(a.Z,{children:"\u0644\u06cc\u0633\u062a \u0631\u0634\u062a\u0647 \u0647\u0627\u06cc \u062a\u062d\u0635\u06cc\u0644\u06cc"}),m.isLoading?(0,x.jsx)("div",{children:"\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u06cc\u0631\u06cc..."}):(0,x.jsx)(ae,{secondary:!0,headers:[{children:"\u0639\u0646\u0648\u0627\u0646"},{children:"\u0639\u0645\u0644\u06cc\u0627\u062a"}],rows:null===m||void 0===m?void 0:m.data.map((function(e,n){return{id:e._id,data:{title:null===e||void 0===e?void 0:e.title,action:(0,x.jsx)(s.Z,{children:(0,x.jsx)(se.q,{description:"\u0622\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 \u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc \u0645\u0637\u0645\u0626\u0646  \u0647\u0633\u062a\u06cc\u062f\u061f",onConfirm:function(){return n=e._id,void h.mutate(n,{onSuccess:function(){var e=(0,T.Z)((0,R.Z)().mark((function e(n){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200==n.statusCode?(c(!1),m.refetch(),q.Am.success(n.message)):(c(!1),q.Am.error(n.message));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()});var n},approved:"\u0628\u0644\u0647",denied:"\u062e\u06cc\u0631",children:(0,x.jsx)(re.TKD,{width:16,height:16})})})}}})),pagination:{page:g,count:1,rowsPerPage:b,onChange:function(e,n){j(n)},onRowsPerPageChange:function(){}}})]})]})},ue=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),pe=function(){var e=ue();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"})},me=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),xe=function(){var e=me();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u06a9\u062a\u0627\u0628"})},he=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),fe=function(){var e=he();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u0641\u0635\u0644"})},ve=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),ge=function(){var e=ve();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u0645\u0648\u0636\u0648\u0639"})},je=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),Ze=function(){var e=je();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u067e\u0627\u06cc\u0647"})},be=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),ye=function(){var e=be();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u062a\u0631\u0645"})},we=function(){var e=(0,c.v9)((function(e){return e.user}));return(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"/field-of-study",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(de,{})})}),(0,x.jsx)(o.AW,{path:"/grade-level",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(Ze,{})})}),(0,x.jsx)(o.AW,{path:"/book",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(xe,{})})}),(0,x.jsx)(o.AW,{path:"/term-of-study",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(ye,{})})}),(0,x.jsx)(o.AW,{path:"/chapter",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(fe,{})})}),(0,x.jsx)(o.AW,{path:"/subject",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(ge,{})})}),(0,x.jsx)(o.AW,{path:"/",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(pe,{})})})]})},ke=(0,l.Z)((function(e){return{container:{margin:"32px 52px"},contentWrapper:{float:"right"},content:{margin:"16px 0",padding:"2px 0",float:"right"},menu:{margin:"0 0 0 150px ",width:"200px",float:"right"},button:{color:e.palette.text.primary},badge:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:"5px"}}})),Se=function(){var e,n,r,l=(0,c.v9)((function(e){return e.user}));(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,t.useEffect)((function(){}),[l]);var d=ke(),u=(0,o.s0)();return(0,x.jsxs)(i.Z,{className:d.container,children:[(0,x.jsxs)(i.Z,{display:"flex",justifyContent:"space-around",children:[(0,x.jsxs)(i.Z,{display:"flex",gap:"10px",children:[(0,x.jsx)(a.Z,{variant:"h5",children:null===l||void 0===l||null===(e=l.user)||void 0===e?void 0:e.username}),null===l||void 0===l||null===(n=l.user)||void 0===n||null===(r=n.roles)||void 0===r?void 0:r.map((function(e){return(0,x.jsx)(i.Z,{className:d.badge,children:(0,x.jsx)(a.Z,{variant:"body2",children:"User"===e.title?"\u06a9\u0627\u0631\u0628\u0631 \u0639\u0627\u062f\u06cc":"\u0645\u062f\u06cc\u0631 \u06a9\u0644"})},e.title)}))]}),(0,x.jsx)(i.Z,{children:(0,x.jsx)(s.Z,{className:d.button,onClick:function(){localStorage.removeItem("token"),S.h.dispatch({type:k.Q.SetUserToken,payload:null}),u("/")},children:(0,x.jsx)(w.Z,{})})})]}),(0,x.jsxs)(i.Z,{className:d.contentWrapper,children:[(0,x.jsx)(i.Z,{className:d.menu,children:(0,x.jsx)(j,{items:y})}),(0,x.jsx)(i.Z,{className:d.content,children:(0,x.jsx)(we,{})})]})]})},Ce=[{title:"\u062e\u0627\u0646\u0647",to:"/",startIcon:(0,x.jsx)(Z.Z,{})},{title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f",to:"/pv/karanbala/dashboard",startIcon:(0,x.jsx)(b.Z,{})},{category:{children:[{title:"\u067e\u0631\u0648\u0641\u0627\u06cc\u0644"}]}}],Ne=(0,l.Z)((function(e){return{container:{margin:"32px 52px"}}})),Re=function(){var e=Ne();return(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,x.jsx)(i.Z,{className:e.container,children:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"})},Te=function(){var e=(0,c.v9)((function(e){return e.user}));return(0,x.jsx)(o.Z5,{children:(0,x.jsx)(o.AW,{path:"/",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["User"],resource:"profile",action:"read"},children:(0,x.jsx)(Re,{})})})})},Ie=(0,l.Z)((function(e){return{container:{margin:"32px 52px"},contentWrapper:{},content:{margin:"16px 0",padding:"2px 0",float:"right"},menu:{margin:"0 0 0 150px ",width:"200px",float:"right"},button:{color:e.palette.text.primary},badge:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:"5px"}}})),Ae=function(){var e,n,r,l=(0,c.v9)((function(e){return e.user}));(0,t.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,t.useEffect)((function(){}),[l]);var d=Ie(),u=(0,o.s0)();return(0,x.jsxs)(i.Z,{className:d.container,children:[(0,x.jsxs)(i.Z,{display:"flex",justifyContent:"space-around",children:[(0,x.jsxs)(i.Z,{display:"flex",gap:"10px",children:[(0,x.jsx)(a.Z,{variant:"h5",children:null===l||void 0===l||null===(e=l.user)||void 0===e?void 0:e.username}),null===l||void 0===l||null===(n=l.user)||void 0===n||null===(r=n.roles)||void 0===r?void 0:r.map((function(e){return(0,x.jsx)(i.Z,{className:d.badge,children:(0,x.jsx)(a.Z,{variant:"body2",children:"User"===e.title?"\u06a9\u0627\u0631\u0628\u0631 \u0639\u0627\u062f\u06cc":"\u0645\u062f\u06cc\u0631 \u06a9\u0644"})},e.title)}))]}),(0,x.jsx)(i.Z,{children:(0,x.jsx)(s.Z,{className:d.button,onClick:function(){localStorage.removeItem("token"),S.h.dispatch({type:k.Q.SetUserToken,payload:null}),u("/")},children:(0,x.jsx)(w.Z,{})})})]}),(0,x.jsxs)(i.Z,{className:d.contentWrapper,children:[(0,x.jsx)(i.Z,{className:d.menu,children:(0,x.jsx)(j,{items:Ce})}),(0,x.jsx)(i.Z,{className:d.content,children:(0,x.jsx)(Te,{})})]})]})},Pe=r(5200),Ee=r(3960),Fe=function(e){var n,r=e.children,o=null!==(n=(0,c.v9)((function(e){return e.auth})).token)&&void 0!==n?n:localStorage.getItem("token");return(0,t.useEffect)((function(){if(o){var e=(0,Pe.Z)(null!==o&&void 0!==o?o:"");Ee.f.TOKEN=o,S.h.dispatch({type:k.Q.SetUserToken,payload:o}),S.h.dispatch({type:k.Q.SetUserData,payload:e})}}),[o]),(0,x.jsx)(x.Fragment,{children:r})},Oe=function(){var e=(0,c.v9)((function(e){return e.user})),n=localStorage.getItem("token"),r=(0,o.s0)();return(0,t.useEffect)((function(){void 0==n&&r("/")}),[r,n,e]),(0,x.jsx)(Fe,{children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"/karanbala/dashboard/*",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["User"],resource:"profile",action:"read"},children:(0,x.jsx)(Ae,{})})}),(0,x.jsx)(o.AW,{path:"/karanbala/admin/*",element:(0,x.jsx)(C,{userRole:null===e||void 0===e?void 0:e.user,route:{requiredRoles:["SuperAdmin"],resource:"post",action:"create"},children:(0,x.jsx)(Se,{})})})]})})}}}]);