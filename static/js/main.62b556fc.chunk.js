(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{147:function(e,t,a){e.exports={search:"Search_search__93zy7",searchContainer:"Search_searchContainer__1flEw"}},148:function(e,t,a){e.exports={header:"Header_header__3QGhy",happier:"Header_happier__13H8_"}},214:function(e,t,a){e.exports={loading:"Loading_loading__5rMHo"}},215:function(e,t,a){e.exports={error:"Error_error__1j0QV"}},216:function(e,t,a){e.exports={postList:"PostList_postList__9cj4F"}},218:function(e,t,a){e.exports={notFound:"NotFound_notFound__1zZAG"}},33:function(e,t,a){e.exports={table:"TableList_table__2uQTD",thead:"TableList_thead__2os7A",tableCell:"TableList_tableCell__1a-Og",tableRow:"TableList_tableRow__1N3Bt",tableLineBtnContainer:"TableList_tableLineBtnContainer__1wHeB",tableBtn:"TableList_tableBtn__1zw3T",goToPost:"TableList_goToPost__28G0L"}},34:function(e,t,a){e.exports={postItem:"Post_postItem__3QZxa",postHeader:"Post_postHeader__lr-LS",postText:"Post_postText__2GD4P",postButton:"Post_postButton__gfCgK",postBtnContainer:"Post_postBtnContainer__1XqPn",goToPost:"Post_goToPost__3bv04"}},454:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);a(219);var n=a(2),s=a.n(n),c=a(211),o=a.n(c),i=a(21),r=a(12),l=a(6),j=a(117),b=a.n(j),d={method:"GET",url:"https://v2.jokeapi.dev/joke/Any",params:{blacklistFlags:"nsfw",type:"single",amount:"10"}},u=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),o=Object(r.a)(c,2),i=o[0],l=o[1],j=Object(n.useState)(!1),u=Object(r.a)(j,2),h=u[0],O=u[1];return Object(n.useEffect)((function(){b.a.request(d).then((function(e){s(e.data.jokes),l(!1)})).catch((function(e){l(!1),O(!0),console.log(e)}))}),[]),[a,i,h]},h=a(147),O=a.n(h),x=a(1),p=function(e){var t=e.handleSearch,a=e.value;return Object(x.jsx)("div",{className:O.a.searchContainer,children:Object(x.jsx)("input",{placeholder:"Type category here",value:a,onChange:t,type:"text",className:O.a.search})})},_=a(68),m=a.n(_),v=a(148),f=a.n(v),g=function(){return Object(x.jsxs)("header",{className:f.a.header,children:["Site to make you ",Object(x.jsx)("span",{className:f.a.happier,children:"happier"})]})},N=a(87),w=a(212),k=a.n(w),C=a(88),L=a.n(C),y=function(){var e,t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],o=k()((e={},Object(N.a)(e,L.a.viewNavContainer,!0),Object(N.a)(e,L.a.hidden,s),e));return Object(n.useEffect)((function(){var e=function(){document.documentElement.offsetHeight<=Math.ceil(window.scrollY)+window.outerHeight?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(x.jsxs)("div",{className:o,children:[Object(x.jsx)(i.b,{className:L.a.viewNavButton,to:"listView",children:"List"}),Object(x.jsx)(i.b,{className:L.a.viewNavButton,to:"tableView",children:"Table"})]})},S=a(213),T=a(214),B=a.n(T),P=function(){return Object(x.jsx)("div",{className:B.a.loading,children:"Loading..."})},E=a(215),V=a.n(E),D=function(){return Object(x.jsx)("div",{className:V.a.error,children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"})},A=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1];return[a,function(){s(!a)}]},G=a(34),F=a.n(G),H=function(e){var t=e.category,a=e.joke,n=e.id,s=A(),c=Object(r.a)(s,2),o=c[0],l=c[1];return o?Object(x.jsxs)("div",{className:F.a.postItem,children:[Object(x.jsx)("h2",{className:F.a.postHeader,children:t}),Object(x.jsx)("p",{className:F.a.postText,children:a}),Object(x.jsxs)("div",{className:F.a.postBtnContainer,children:[Object(x.jsx)("button",{className:F.a.postButton,type:"button",onClick:l,children:"Show less"}),Object(x.jsx)(i.b,{className:F.a.goToPost,to:"".concat(n),children:"Go to post"})]})]}):Object(x.jsxs)("div",{className:F.a.postItem,children:[Object(x.jsx)("h2",{className:F.a.postHeader,children:t}),Object(x.jsx)("p",{className:F.a.postText,children:"".concat(a.slice(0,25),"...")}),Object(x.jsxs)("div",{className:F.a.postBtnContainer,children:[Object(x.jsx)("button",{className:F.a.postButton,type:"button",onClick:l,children:"Show more"}),Object(x.jsx)(i.b,{className:F.a.goToPost,to:"".concat(n),children:"Go to post"})]})]})},M=a(216),R=a.n(M),I=function(e){var t=e.isError,a=e.isLoading,n=e.postData;return a?Object(x.jsx)(P,{}):t?Object(x.jsx)(D,{}):Object(x.jsx)("div",{className:R.a.postList,children:null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(H,Object(S.a)({},e),e.id)}))})},z=a(33),q=a.n(z),J=function(e){var t=e.data,a=A(),n=Object(r.a)(a,2),s=n[0],c=n[1];return Object(x.jsxs)("tr",{className:q.a.tableRow,children:[Object(x.jsx)("td",{className:q.a.tableCell,children:t.category}),Object(x.jsxs)("td",{className:q.a.tableCell,children:[s&&t.joke,!s&&"".concat(t.joke.slice(0,25),"..."),Object(x.jsxs)("div",{className:q.a.tableLineBtnContainer,children:[Object(x.jsx)("button",{className:q.a.tableBtn,type:"button",onClick:c,children:s?"Show less":"Show more"}),Object(x.jsx)(i.b,{className:q.a.goToPost,to:"".concat(t.id),children:"Go to post"})]})]})]})},Q=a(149),W=a.n(Q),Y=function(e){var t=e.children,a=e.postData,n=e.setSortedData,s=e.isLoading,c=e.isError;return s?Object(x.jsx)(P,{}):c?Object(x.jsx)(D,{}):Object(x.jsxs)("table",{className:q.a.table,cellSpacing:"0",children:[Object(x.jsx)("thead",{className:q.a.thead,children:Object(x.jsxs)("tr",{className:q.a.tableRow,children:[Object(x.jsx)("th",{className:q.a.tableCell,onClick:function(){n(W.a.sortBy(a,(function(e){return e.category})))},children:"Category"}),Object(x.jsx)("th",{className:q.a.tableCell,onClick:function(){n(W.a.sortBy(a,(function(e){return e.joke})))},children:"Joke"})]})}),Object(x.jsx)("tbody",{children:t})]})},Z=a(217),U=a(150),X=a.n(U),K=function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(!0),i=Object(r.a)(o,2),l=i[0],j=i[1],d=Object(n.useState)(!1),u=Object(r.a)(d,2),h=u[0],O=u[1];return Object(n.useEffect)((function(){var t={method:"GET",url:"https://v2.jokeapi.dev/joke/Any",params:{blacklistFlags:"nsfw",type:"single",idRange:e}},a=function(){var e=Object(Z.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request(t).then((function(e){c(e.data),j(!1)})).catch((function(e){j(!1),O(!0),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a()}),[e]),[s,l,h]},$=a(89),ee=a.n($),te=function(){var e=Object(l.h)().id,t=K(Number(e)),a=Object(r.a)(t,3),n=a[0],s=a[1],c=a[2];return Object(x.jsxs)("div",{className:ee.a.currentPostContainer,children:[Object(x.jsx)("div",{className:ee.a.postId,children:"\u2116".concat(e)}),s&&Object(x.jsx)("p",{style:{fontWeight:"bold"},children:"Loading"}),c&&Object(x.jsx)("p",{style:{fontWeight:"bold"},children:"Something went wrong"}),!s&&!c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:ee.a.postCategory,children:null===n||void 0===n?void 0:n.category}),Object(x.jsx)("div",{className:ee.a.postJoke,children:null===n||void 0===n?void 0:n.joke})]})]})},ae=function(e){var t=e.isError,a=e.isLoading,n=e.sortedData,s=e.setSortedData,c=e.searchValue;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{index:!0,element:Object(x.jsx)("div",{style:{padding:"1rem",textAlign:"center",fontSize:"17px"},children:Object(x.jsx)("p",{children:"Select view"})})}),Object(x.jsx)(l.b,{path:"listView",element:Object(x.jsx)(I,{isError:t,isLoading:a,postData:n,searchValue:c})}),Object(x.jsx)(l.b,{path:"tableView",element:Object(x.jsx)(Y,{isError:t,isLoading:a,postData:n,setSortedData:s,children:null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(J,{data:e},e.id)}))})}),Object(x.jsx)(l.b,{path:"listView/:id",element:Object(x.jsx)(te,{sortedData:n})}),Object(x.jsx)(l.b,{path:"tableView/:id",element:Object(x.jsx)(te,{sortedData:n})})]})]})},ne=a(90),se=a.n(ne),ce=function(){return Object(x.jsxs)("div",{className:se.a.aboutContainer,children:[Object(x.jsx)("p",{className:se.a.aboutText,children:"This site was created to make you a little bit happier by make you laughing"}),Object(x.jsx)("div",{className:se.a.backLinkCotainer,children:Object(x.jsx)(i.b,{to:"/",className:se.a.backLink,children:"Go back"})})]})},oe=a(218),ie=a.n(oe),re=function(){return Object(x.jsx)("div",{className:ie.a.notFound,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})},le=function(e){var t=e.handleSearch,a=e.searchValue;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsxs)("main",{className:m.a.main,children:[Object(x.jsx)(p,{handleSearch:t,value:a}),Object(x.jsxs)("div",{className:m.a.navLinkContainer,children:[Object(x.jsx)(i.b,{to:"about",className:m.a.navLink,children:"About site"}),Object(x.jsx)(i.b,{to:"jokes",className:m.a.navLink,children:"Get some fun"})]}),Object(x.jsx)(l.a,{})]})]})},je=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],c=u(),o=Object(r.a)(c,3),i=o[0],j=o[1],b=o[2],d=Object(n.useState)([]),h=Object(r.a)(d,2),O=h[0],p=h[1];Object(n.useEffect)((function(){a.trim().length>2?p(i.filter((function(e){return e.category.toLowerCase().includes(a.toLowerCase())}))):p(i)}),[a,i,b]);return Object(x.jsx)(l.d,{children:Object(x.jsxs)(l.b,{path:"/",element:Object(x.jsx)(le,{handleSearch:function(e){s(e.target.value)},searchValue:a}),children:[Object(x.jsx)(l.b,{index:!0,element:Object(x.jsx)("div",{className:m.a.welcomeText,children:Object(x.jsx)("p",{children:"WELCOME! Please, select 'Get some fun' or you can read about site in 'About'"})})}),Object(x.jsx)(l.b,{path:"jokes/*",element:Object(x.jsx)(ae,{isError:b,isLoading:j,setSortedData:p,sortedData:O,searchValue:a})}),Object(x.jsx)(l.b,{path:"about",element:Object(x.jsx)(ce,{})}),Object(x.jsx)(l.b,{path:"/*",element:Object(x.jsx)(re,{})})]})})};a(454);o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(je,{})})}),document.getElementById("root"))},68:function(e,t,a){e.exports={navLinkContainer:"App_navLinkContainer__10lMm",navLink:"App_navLink__1pgN6",welcomeText:"App_welcomeText__3VUBD"}},88:function(e,t,a){e.exports={viewNavContainer:"ViewNavigation_viewNavContainer__17G9b",viewNavButton:"ViewNavigation_viewNavButton__3XESR",hidden:"ViewNavigation_hidden__2z2k4"}},89:function(e,t,a){e.exports={currentPostContainer:"CurrentPost_currentPostContainer__1q4TF",postCategory:"CurrentPost_postCategory__NMZ21"}},90:function(e,t,a){e.exports={aboutText:"About_aboutText__2VFRM",backLinkCotainer:"About_backLinkCotainer__UYkwY",backLink:"About_backLink__3d3ga"}}},[[455,1,2]]]);
//# sourceMappingURL=main.62b556fc.chunk.js.map