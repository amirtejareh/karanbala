"use strict";(self.webpackChunkkaranbala=self.webpackChunkkaranbala||[]).push([[941],{9735:function(e,t,n){n.d(t,{b:function(){return f}});var r=n(1413),o=n(4942),i=n(5987),a=n(9099),u=n(8070),l=n(4146),d=n(6417),c=["dragged","children"],s=(0,u.Z)((function(e){return{dragged:{boxShadow:"0 4px 5px 0 rgba(0, 0, 0, 0.14)","&.MuiButton-outlined":{backgroundColor:"rgba(248, 209, 47, 0.08)"},"&.MuiButton-text":{backgroundColor:"rgba(248, 209, 47, 0.08)",boxShadow:"unset"}},"&.MuiTouchRipple-child":{backgroundColor:"rgba(255, 255, 255, 0.38)"}}})),f=function(e){var t=e.dragged,n=e.children,u=(0,i.Z)(e,c),f=s();return(0,d.jsx)(a.Z,(0,r.Z)((0,r.Z)({classes:{root:(0,l.Z)((0,o.Z)({},f.dragged,t))}},u),{},{children:n}))}},3960:function(e,t,n){n.d(t,{f:function(){return r}});var r={BASE:"https://api-karanbala.iran.liara.run",VERSION:"0.1",WITH_CREDENTIALS:!1,CREDENTIALS:"include",TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0}},283:function(e,t,n){var r,o,i,a;n.d(t,{Ft:function(){return Y},e8:function(){return _},AX:function(){return $},Zp:function(){return J},tH:function(){return X},he:function(){return ee},uY:function(){return te},LS:function(){return ne},ZU:function(){return re},RC:function(){return oe},o5:function(){return ae},AA:function(){return ie},vq:function(){return ue},aE:function(){return le},l:function(){return de},_F:function(){return ce},ib:function(){return se},Q0:function(){return fe}}),function(e){var t=function(e){return e.EASY="easy",e.AVERAGE="average",e.HARD="hard",e.CHALLENGING="challenging",e}({});e.questionDifficulty=t;var n=function(e){return e.CONCEPTIONAL="conceptional",e.COMPUTATIONAL="computational",e.TRICK="trick",e.MEMORIZATIONAL="memorizational",e}({});e.questionType=n;var r=function(e){return e.MAIN="main",e.REMEDIAL="remedial",e}({});e.examType=r}(r||(r={})),function(e){var t=function(e){return e.EASY="easy",e.AVERAGE="average",e.HARD="hard",e.CHALLENGING="challenging",e}({});e.questionDifficulty=t;var n=function(e){return e.CONCEPTIONAL="conceptional",e.COMPUTATIONAL="computational",e.TRICK="trick",e.MEMORIZATIONAL="memorizational",e}({});e.questionType=n}(o||(o={})),function(e){var t=function(e){return e.EASY="easy",e.AVERAGE="average",e.HARD="hard",e.CHALLENGING="challenging",e}({});e.questionDifficulty=t;var n=function(e){return e.CONCEPTIONAL="conceptional",e.COMPUTATIONAL="computational",e.TRICK="trick",e.MEMORIZATIONAL="memorizational",e}({});e.questionType=n;var r=function(e){return e.MAIN="main",e.REMEDIAL="remedial",e}({});e.examType=r}(i||(i={})),function(e){var t=function(e){return e.EASY="easy",e.AVERAGE="average",e.HARD="hard",e.CHALLENGING="challenging",e}({});e.questionDifficulty=t;var n=function(e){return e.CONCEPTIONAL="conceptional",e.COMPUTATIONAL="computational",e.TRICK="trick",e.MEMORIZATIONAL="memorizational",e}({});e.questionType=n}(a||(a={}));var u,l=n(5671),d=n(3144),c=n(3960),s=n(4942),f=n(1413),p=n(4165),h=n(5861),v=n(9439),y=n(136),m=n(7277),T=n(8664),b=function(e){(0,y.Z)(n,e);var t=(0,m.Z)(n);function n(e,r,o){var i;return(0,l.Z)(this,n),(i=t.call(this,o)).url=void 0,i.status=void 0,i.statusText=void 0,i.body=void 0,i.request=void 0,i.name="ApiError",i.url=r.url,i.status=r.status,i.statusText=r.statusText,i.body=r.body,i.request=e,i}return(0,d.Z)(n)}((0,T.Z)(Error)),k=n(7762),C=n(6274),E=n(9359),Z=function(e){(0,y.Z)(n,e);var t=(0,m.Z)(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e)).name="CancelError",r}return(0,d.Z)(n,[{key:"isCancelled",get:function(){return!0}}]),n}((0,T.Z)(Error)),j=(0,E.Z)("isResolved"),O=(0,E.Z)("isRejected"),g=(0,E.Z)("isCancelled"),A=(0,E.Z)("cancelHandlers"),R=(0,E.Z)("promise"),I=(0,E.Z)("resolve"),G=(0,E.Z)("reject");u=Symbol.toStringTag;var S=function(){function e(t){var n=this;(0,l.Z)(this,e),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,G,{writable:!0,value:void 0}),(0,C.Z)(this,j)[j]=!1,(0,C.Z)(this,O)[O]=!1,(0,C.Z)(this,g)[g]=!1,(0,C.Z)(this,A)[A]=[],(0,C.Z)(this,R)[R]=new Promise((function(e,r){(0,C.Z)(n,I)[I]=e,(0,C.Z)(n,G)[G]=r;var o=function(e){(0,C.Z)(n,j)[j]||(0,C.Z)(n,O)[O]||(0,C.Z)(n,g)[g]||(0,C.Z)(n,A)[A].push(e)};return Object.defineProperty(o,"isResolved",{get:function(){return(0,C.Z)(n,j)[j]}}),Object.defineProperty(o,"isRejected",{get:function(){return(0,C.Z)(n,O)[O]}}),Object.defineProperty(o,"isCancelled",{get:function(){return(0,C.Z)(n,g)[g]}}),t((function(e){var t,r;(0,C.Z)(n,j)[j]||(0,C.Z)(n,O)[O]||(0,C.Z)(n,g)[g]||((0,C.Z)(n,j)[j]=!0,null===(t=(r=(0,C.Z)(n,I))[I])||void 0===t||t.call(r,e))}),(function(e){var t,r;(0,C.Z)(n,j)[j]||(0,C.Z)(n,O)[O]||(0,C.Z)(n,g)[g]||((0,C.Z)(n,O)[O]=!0,null===(t=(r=(0,C.Z)(n,G))[G])||void 0===t||t.call(r,e))}),o)}))}return(0,d.Z)(e,[{key:u,get:function(){return"Cancellable Promise"}},{key:"then",value:function(e,t){return(0,C.Z)(this,R)[R].then(e,t)}},{key:"catch",value:function(e){return(0,C.Z)(this,R)[R].catch(e)}},{key:"finally",value:function(e){return(0,C.Z)(this,R)[R].finally(e)}},{key:"cancel",value:function(){var e,t;if(!((0,C.Z)(this,j)[j]||(0,C.Z)(this,O)[O]||(0,C.Z)(this,g)[g])){if((0,C.Z)(this,g)[g]=!0,(0,C.Z)(this,A)[A].length)try{var n,r=(0,k.Z)((0,C.Z)(this,A)[A]);try{for(r.s();!(n=r.n()).done;){(0,n.value)()}}catch(o){r.e(o)}finally{r.f()}}catch(i){return void console.warn("Cancellation threw an error",i)}(0,C.Z)(this,A)[A].length=0,null===(e=(t=(0,C.Z)(this,G))[G])||void 0===e||e.call(t,new Z("Request aborted"))}}},{key:"isCancelled",get:function(){return(0,C.Z)(this,g)[g]}}]),e}(),L=function(e){return void 0!==e&&null!==e},w=function(e){return"string"===typeof e},P=function(e){return w(e)&&""!==e},F=function(e){return"object"===typeof e&&"string"===typeof e.type&&"function"===typeof e.stream&&"function"===typeof e.arrayBuffer&&"function"===typeof e.constructor&&"string"===typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])},D=function(e){return e instanceof FormData},M=function(e){try{return btoa(e)}catch(t){return Buffer.from(e).toString("base64")}},q=function(e){var t=[],n=function e(n,r){L(r)&&(Array.isArray(r)?r.forEach((function(t){e(n,t)})):"object"===typeof r?Object.entries(r).forEach((function(t){var r=(0,v.Z)(t,2),o=r[0],i=r[1];e("".concat(n,"[").concat(o,"]"),i)})):function(e,n){t.push("".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n))))}(n,r))};return Object.entries(e).forEach((function(e){var t=(0,v.Z)(e,2),r=t[0],o=t[1];n(r,o)})),t.length>0?"?".concat(t.join("&")):""},B=function(e,t){var n=e.ENCODE_PATH||encodeURI,r=t.url.replace("{api-version}",e.VERSION).replace(/{(.*?)}/g,(function(e,r){var o;return null!==(o=t.path)&&void 0!==o&&o.hasOwnProperty(r)?n(String(t.path[r])):e})),o="".concat(e.BASE).concat(r);return t.query?"".concat(o).concat(q(t.query)):o},N=function(e){if(e.formData){var t=new FormData,n=function(e,n){w(n)||F(n)?t.append(e,n):t.append(e,JSON.stringify(n))};return Object.entries(e.formData).filter((function(e){var t=(0,v.Z)(e,2),n=(t[0],t[1]);return L(n)})).forEach((function(e){var t=(0,v.Z)(e,2),r=t[0],o=t[1];Array.isArray(o)?o.forEach((function(e){return n(r,e)})):n(r,o)})),t}},x=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t,n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=2;break}return e.abrupt("return",n(t));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t,n){var r,o,i,a,u,l;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n,t.TOKEN);case 2:return r=e.sent,e.next=5,x(n,t.USERNAME);case 5:return o=e.sent,e.next=8,x(n,t.PASSWORD);case 8:return i=e.sent,e.next=11,x(n,t.HEADERS);case 11:return a=e.sent,u=Object.entries((0,f.Z)((0,f.Z)({Accept:"application/json"},a),n.headers)).filter((function(e){var t=(0,v.Z)(e,2),n=(t[0],t[1]);return L(n)})).reduce((function(e,t){var n=(0,v.Z)(t,2),r=n[0],o=n[1];return(0,f.Z)((0,f.Z)({},e),{},(0,s.Z)({},r,String(o)))}),{}),P(r)&&(u.Authorization="Bearer ".concat(r)),P(o)&&P(i)&&(l=M("".concat(o,":").concat(i)),u.Authorization="Basic ".concat(l)),n.body&&(n.mediaType?u["Content-Type"]=n.mediaType:F(n.body)?u["Content-Type"]=n.body.type||"application/octet-stream":w(n.body)?u["Content-Type"]="text/plain":D(n.body)||(u["Content-Type"]="application/json")),e.abrupt("return",new Headers(u));case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(e){var t;if(void 0!==e.body)return null!==(t=e.mediaType)&&void 0!==t&&t.includes("/json")?JSON.stringify(e.body):w(e.body)||F(e.body)||D(e.body)?e.body:JSON.stringify(e.body)},Q=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t,n,r,o,i,a,u){var l,d;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=new AbortController,d={headers:a,body:null!==o&&void 0!==o?o:i,method:n.method,signal:l.signal},t.WITH_CREDENTIALS&&(d.credentials=t.CREDENTIALS),u((function(){return l.abort()})),e.next=6,fetch(r,d);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i,a,u){return e.apply(this,arguments)}}(),z=function(e,t){if(t){var n=e.headers.get(t);if(w(n))return n}},K=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t){var n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(204===t.status){e.next=20;break}if(e.prev=1,!(n=t.headers.get("Content-Type"))){e.next=15;break}if(!["application/json","application/problem+json"].some((function(e){return n.toLowerCase().startsWith(e)}))){e.next=12;break}return e.next=9,t.json();case 9:return e.abrupt("return",e.sent);case 12:return e.next=14,t.text();case 14:return e.abrupt("return",e.sent);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0);case 20:return e.abrupt("return",void 0);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){var n=(0,f.Z)({400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable"},e.errors)[t.status];if(n&&new b(e,t,n),!t.ok){var r,o,i=null!==(r=t.status)&&void 0!==r?r:"unknown",a=null!==(o=t.statusText)&&void 0!==o?o:"unknown",u=function(){try{return JSON.stringify(t.body,null,2)}catch(e){return}}();new b(e,t,"Generic Error: status: ".concat(i,"; status text: ").concat(a,"; body: ").concat(u))}},V=function(e,t){return new S(function(){var n=(0,h.Z)((0,p.Z)().mark((function n(r,o,i){var a,u,l,d,c,s,f,h;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=B(e,t),u=N(t),l=U(t),n.next=6,H(e,t);case 6:if(d=n.sent,i.isCancelled){n.next=18;break}return n.next=10,Q(e,t,a,l,u,d,i);case 10:return c=n.sent,n.next=13,K(c);case 13:s=n.sent,f=z(c,t.responseHeader),h={url:a,ok:c.ok,status:c.status,statusText:c.statusText,body:null!==f&&void 0!==f?f:s},W(t,h),r(h.body);case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),o(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e,t,r){return n.apply(this,arguments)}}())},Y=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"answersheetManagementControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/answersheet-management",formData:e,mediaType:"multipart/form-data"})}},{key:"answersheetManagementControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/answersheet-management"})}},{key:"answersheetManagementControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/answersheet-management/{id}",path:{id:e}})}},{key:"answersheetManagementControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/answersheet-management/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"answersheetManagementControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/answersheet-management/{id}",path:{id:e}})}}]),e}(),_=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"authControllerCreateUser",value:function(e){return V(c.f,{method:"POST",url:"/auth/signup",body:e,mediaType:"application/json"})}},{key:"authControllerSinginUser",value:function(e){return V(c.f,{method:"POST",url:"/auth/signin",body:e,mediaType:"application/json"})}}]),e}(),J=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"bookControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/book",formData:e,mediaType:"multipart/form-data"})}},{key:"bookControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/book"})}},{key:"bookControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/book/{id}",path:{id:e}})}},{key:"bookControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/book/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"bookControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/book/{id}",path:{id:e}})}},{key:"bookControllerFindBooksBasedOnGradeLevels",value:function(e){return V(c.f,{method:"GET",url:"/book/withGradeLevels/{gradeLevelId}",path:{gradeLevelId:e}})}},{key:"bookControllerFindBooksBasedOnBookReferences",value:function(e,t){return V(c.f,{method:"GET",url:"/book/withBookReferences/{bookReferenceId}/{gradeLevelId}",path:{bookReferenceId:e,gradeLevelId:t}})}}]),e}(),$=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"bookReferenceControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/bookReference",body:e,mediaType:"application/json"})}},{key:"bookReferenceControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/bookReference"})}},{key:"bookReferenceControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/bookReference/{id}",path:{id:e}})}},{key:"bookReferenceControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/bookReference/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"bookReferenceControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/bookReference/{id}",path:{id:e}})}},{key:"bookReferenceControllerFindBookReferencesBasedOnGradeLevels",value:function(e){return V(c.f,{method:"GET",url:"/bookReference/withGradeLevels/{gradeLevelId}",path:{gradeLevelId:e}})}}]),e}(),X=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"chapterControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/chapter",body:e,mediaType:"application/json"})}},{key:"chapterControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/chapter"})}},{key:"chapterControllerFindChaptersBasedOnBooks",value:function(e){return V(c.f,{method:"GET",url:"/chapter/withBooks/{bookId}",path:{bookId:e}})}},{key:"chapterControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/chapter/{id}",path:{id:e}})}},{key:"chapterControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/chapter/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"chapterControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/chapter/{id}",path:{id:e}})}}]),e}(),ee=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"essayQuestionControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/essay-question",formData:e,mediaType:"multipart/form-data"})}},{key:"essayQuestionControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/essay-question"})}},{key:"essayQuestionControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/essay-question/{id}",path:{id:e}})}},{key:"essayQuestionControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/essay-question/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"essayQuestionControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/essay-question/{id}",path:{id:e}})}},{key:"essayQuestionControllerFindEssayQuestionBasedOnSubject",value:function(e){return V(c.f,{method:"GET",url:"/essay-question/withSubjects/{subjectsId}",path:{subjectsId:e}})}}]),e}(),te=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"fieldOfStudyControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/field-of-study",body:e,mediaType:"application/json"})}},{key:"fieldOfStudyControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/field-of-study"})}},{key:"fieldOfStudyControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/field-of-study/{id}",path:{id:e}})}},{key:"fieldOfStudyControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/field-of-study/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"fieldOfStudyControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/field-of-study/{id}",path:{id:e}})}}]),e}(),ne=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"gradeLevelControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/grade-level",formData:e,mediaType:"multipart/form-data"})}},{key:"gradeLevelControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/grade-level"})}},{key:"gradeLevelControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/grade-level/{id}",path:{id:e}})}},{key:"gradeLevelControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/grade-level/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"gradeLevelControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/grade-level/{id}",path:{id:e}})}}]),e}(),re=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"karanbalaControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/karanbala",formData:e,mediaType:"multipart/form-data"})}},{key:"karanbalaControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/karanbala"})}},{key:"karanbalaControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/karanbala/{id}",path:{id:e}})}},{key:"karanbalaControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/karanbala/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"karanbalaControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/karanbala/{id}",path:{id:e}})}},{key:"karanbalaControllerFindKaranbalaBasedOnSubject",value:function(e){return V(c.f,{method:"GET",url:"/karanbala/withSubjects/{subjectsId}",path:{subjectsId:e}})}}]),e}(),oe=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"learningMaterialControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/learning-material",formData:e,mediaType:"multipart/form-data"})}},{key:"learningMaterialControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/learning-material"})}},{key:"learningMaterialControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/learning-material/{id}",path:{id:e}})}},{key:"learningMaterialControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/learning-material/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"learningMaterialControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/learning-material/{id}",path:{id:e}})}},{key:"learningMaterialControllerFindLearningMaterialBasedOnSubject",value:function(e){return V(c.f,{method:"GET",url:"/learning-material/withSubjects/{subjectsId}",path:{subjectsId:e}})}}]),e}(),ie=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"objectiveTestControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/objectiveTest",body:e,mediaType:"application/json"})}},{key:"objectiveTestControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/objectiveTest"})}},{key:"objectiveTestControllerFindObjectiveTestsBasedOnGradeLevels",value:function(e,t,n){return V(c.f,{method:"GET",url:"/objectiveTest/withGradeLevels/{gradeLevelId}",path:{gradeLevelId:n},query:{page:e,limit:t}})}},{key:"objectiveTestControllerFindMainObjectiveTest",value:function(){return V(c.f,{method:"GET",url:"/objectiveTest/mainTest"})}},{key:"objectiveTestControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/objectiveTest/{id}",path:{id:e}})}},{key:"objectiveTestControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/objectiveTest/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"objectiveTestControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/objectiveTest/{id}",path:{id:e}})}}]),e}(),ae=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"objectiveTestManagementControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/objectiveTestManagement",body:e,mediaType:"application/json"})}},{key:"objectiveTestManagementControllerFindAll",value:function(e,t){return V(c.f,{method:"GET",url:"/objectiveTestManagement",query:{page:e,limit:t}})}},{key:"objectiveTestManagementControllerGetObjectiveTestsBasedNumber",value:function(e){return V(c.f,{method:"GET",url:"/objectiveTestManagement/withObjectiveTests/{objectiveTestId}",path:{objectiveTestId:e}})}},{key:"objectiveTestManagementControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/objectiveTestManagement/{id}",path:{id:e}})}},{key:"objectiveTestManagementControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/objectiveTestManagement/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"objectiveTestManagementControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/objectiveTestManagement/{id}",path:{id:e}})}}]),e}(),ue=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"onlineGradeReportControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/online-grade-report",body:e,mediaType:"application/json"})}},{key:"onlineGradeReportControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/online-grade-report"})}},{key:"onlineGradeReportControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/online-grade-report/{id}",path:{id:e}})}},{key:"onlineGradeReportControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/online-grade-report/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"onlineGradeReportControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/online-grade-report/{id}",path:{id:e}})}},{key:"onlineGradeReportControllerGetObjectiveTestsBasedNumber",value:function(e){return V(c.f,{method:"GET",url:"/online-grade-report/withObjectiveTests/{objectiveTestId}",path:{objectiveTestId:e}})}}]),e}(),le=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"questionControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/question",body:e,mediaType:"application/json"})}},{key:"questionControllerFindAll",value:function(e,t,n){return V(c.f,{method:"GET",url:"/question",query:{page:e,limit:t,objectiveTestId:n}})}},{key:"questionControllerFindQuestionsBasedOnBooks",value:function(e,t,n){return V(c.f,{method:"GET",url:"/question/withBooks/{BookId}",query:{page:e,limit:t,BookId:n}})}},{key:"questionControllerFindQuestionsBasedOnBookReferences",value:function(e,t,n){return V(c.f,{method:"GET",url:"/question/withBookReferencess/{BookReferenceId}",query:{page:e,limit:t,BookId:n}})}},{key:"questionControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/question/{id}",path:{id:e}})}},{key:"questionControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/question/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"questionControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/question/{id}",path:{id:e}})}},{key:"questionControllerFindBooksBasedOnObjectiveTests",value:function(e){return V(c.f,{method:"GET",url:"/question/withMainObjectiveTestId/{objectiveTestId}",path:{objectiveTestId:e}})}},{key:"questionControllerFindQuestionsBasedOnObjectiveTests",value:function(e){return V(c.f,{method:"GET",url:"/question/questionsWithObjectiveTestId/{objectiveTestId}",path:{objectiveTestId:e}})}},{key:"questionControllerFindBookReferencesBasedOnObjectiveTests",value:function(e){return V(c.f,{method:"GET",url:"/question/bookReferencesWithMainObjectiveTestId/{objectiveTestId}",path:{objectiveTestId:e}})}}]),e}(),de=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"sectionControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/section",body:e,mediaType:"application/json"})}},{key:"sectionControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/section"})}},{key:"sectionControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/section/{id}",path:{id:e}})}},{key:"sectionControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/section/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"sectionControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/section/{id}",path:{id:e}})}},{key:"sectionControllerFindSectionsBasedOnChapters",value:function(e){return V(c.f,{method:"GET",url:"/section/withChapters/{chapterId}",path:{chapterId:e}})}}]),e}(),ce=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"subjectControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/subject",body:e,mediaType:"application/json"})}},{key:"subjectControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/subject"})}},{key:"subjectControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/subject/{id}",path:{id:e}})}},{key:"subjectControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/subject/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"subjectControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/subject/{id}",path:{id:e}})}},{key:"subjectControllerFindSubjectsBasedOnSections",value:function(e){return V(c.f,{method:"GET",url:"/subject/withSections/{sectionId}",path:{sectionId:e}})}}]),e}(),se=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"termOfStudyControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/term-of-study",body:e,mediaType:"application/json"})}},{key:"termOfStudyControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/term-of-study"})}},{key:"termOfStudyControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/term-of-study/{id}",path:{id:e}})}},{key:"termOfStudyControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/term-of-study/{id}",path:{id:e},body:t,mediaType:"application/json"})}},{key:"termOfStudyControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/term-of-study/{id}",path:{id:e}})}}]),e}(),fe=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,null,[{key:"tipAndTestControllerCreate",value:function(e){return V(c.f,{method:"POST",url:"/tip-and-test",formData:e,mediaType:"multipart/form-data"})}},{key:"tipAndTestControllerFindAll",value:function(){return V(c.f,{method:"GET",url:"/tip-and-test"})}},{key:"tipAndTestControllerFindOne",value:function(e){return V(c.f,{method:"GET",url:"/tip-and-test/{id}",path:{id:e}})}},{key:"tipAndTestControllerUpdate",value:function(e,t){return V(c.f,{method:"PATCH",url:"/tip-and-test/{id}",path:{id:e},formData:t,mediaType:"multipart/form-data"})}},{key:"tipAndTestControllerRemove",value:function(e){return V(c.f,{method:"DELETE",url:"/tip-and-test/{id}",path:{id:e}})}},{key:"tipAndTestControllerFindTipAndTestBasedOnSubject",value:function(e){return V(c.f,{method:"GET",url:"/tip-and-test/withSubjects/{subjectsId}",path:{subjectsId:e}})}}]),e}()}}]);