(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})},j=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},l=n(6),f=n.n(l),p=n(8),b=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=gOrIoBdvHeKsTQqOu8XnLe60FI4Q2Yx5"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,e.abrupt("return",c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(d,Object(j.a)({},e),e.id)}))})]})},m=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};n(17);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.64269e80.chunk.js.map