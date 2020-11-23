(this["webpackJsonptemplatemonsters-r-task"]=this["webpackJsonptemplatemonsters-r-task"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(20),i=a.n(s),o=a(8),l=a(2),u=r.a.createContext(),j=a(4),d=a.n(j),h=(d.a.shape({id:d.a.string,author:d.a.string,download_url:d.a.string,url:d.a.string,height:d.a.number,width:d.a.number}),a(19)),b=a(24),p=a(21),m=(a(32),function(e){var t=e.children,a=e.type,c=e.className,r=e.variant,s=Object(b.a)(e,["children","type","className","variant"]);return Object(n.jsx)("button",Object(h.a)(Object(h.a)({type:a,className:Object(p.a)("custom-button",{"button-primary":"primary"===r,"button-dark":"dark"===r},c)},s),{},{children:t}))});m.defaultProps={type:"button",children:"button",variant:"dark"};var O=m,f=(a(33),function(e){var t=e.item,a=t.download_url,r=t.id,s=Object(l.f)(),i=Object(c.useContext)(u).handleRemoveFromFavorites,j="/favorites"===s.location.pathname;return Object(n.jsx)("article",{className:"gallery__item",children:Object(n.jsxs)(o.b,{to:"/photo/".concat(r),children:[Object(n.jsx)("img",{className:"gallery__image",src:a,alt:""}),j&&Object(n.jsx)(O,{variant:"primary",className:"gallery__item-remove",label:"get more details",onClick:function(e){return i(e,r)},children:"Remove"})]})})}),g=(a(40),function(e){var t=e.items;return Object(n.jsx)("article",{className:"gallery",children:null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(f,{item:e},e.id)}))})}),x=function(){var e=Object(c.useContext)(u).favorites;return Object(n.jsx)("section",{className:"favorites-page",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"page-title",children:"Favorites photos"}),e.length>0?Object(n.jsx)(g,{items:e}):Object(n.jsx)("p",{className:"info-message",children:"There are no favorite photos yet"})]})})},v="success",N="failed",_="pending",k="idle",w="first",y="previous",P="next",C="localStorage",F=(a(41),function(e){var t=e.onPageChange,a=e.currentPage,c=e.status,r=w,s=P,i=y,o=c===_;return Object(n.jsx)("div",{className:"pagination",children:Object(n.jsxs)("div",{className:"pagination__buttons",children:[Object(n.jsx)(O,{disabled:o,onClick:t(r),children:"Back to first"}),Object(n.jsx)(O,{disabled:o,onClick:t(i),children:"Previous"}),Object(n.jsxs)("span",{className:"pagination__current-page",children:["Page: ",a]}),Object(n.jsx)(O,{disabled:o,onClick:t(s),children:"Next"})]})})}),S=(a(42),function(){var e=Object(c.useContext)(u),t=e.page,a=e.status,r=e.limitPerPage,s=e.handlePageChange,i=e.setLimitPerPage;return Object(n.jsxs)("div",{className:"filters",children:[Object(n.jsx)(F,{onPageChange:s,currentPage:t,status:a}),Object(n.jsxs)("label",{children:[Object(n.jsx)("span",{className:"limit-text",children:"Limit of photos per page: "}),Object(n.jsx)("input",{className:"limit",type:"number",value:r,onChange:function(e){return i(e.target.vaue)}})]})]})}),T=(a(43),function(){return Object(n.jsx)("div",{className:"preloader-wrapper",children:Object(n.jsx)("div",{className:"preloader"})})}),E=function(){var e=Object(c.useContext)(u),t=e.data,a=e.status,r=e.page,s=e.setPage,i=v,o=_,l=N,j=t&&t.length>0,d=a===i&&0===t.length,h=a===o,b=a===l;return Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"page-title",children:"Home page"}),Object(n.jsx)(S,{}),j&&Object(n.jsx)(g,{items:t}),h&&Object(n.jsx)(T,{}),d&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"info-message",children:"Photos not found!"}),1!==r&&Object(n.jsx)(O,{onClick:function(){return s(1)},children:"Back to the first page"})]}),b&&Object(n.jsx)("p",{children:"Error has gone"})]})})},L=a(11),A=a.n(L),I=a(13),J=a(9),B=function(){var e=Object(I.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://picsum.photos"+t,e.next=3,fetch(a);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Could not fetch the ".concat(a,", received: ").concat(n.status));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=Object(c.useState)(null),a=Object(J.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(k),i=Object(J.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){(function(){var t=Object(I.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(_),r(null),t.next=5,B(e);case 5:a=t.sent,r(a),l(v),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),l(N),r(null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:n,status:o}},R=(a(45),function(){var e=Object(l.g)().id,t=z("/id/".concat(e,"/info")),a=t.data,r=t.status,s=Object(c.useContext)(u).handleAddToFavorites;if(!a)return null;var i=a.download_url,o=a.author,j=a.width,d=a.height,h=_,b=v,p=N;return Object(n.jsx)("article",{className:"photo-page",children:Object(n.jsxs)("div",{className:"container",children:[r===h&&Object(n.jsx)(T,{}),r===b&&Object(n.jsxs)(n.Fragment,{children:[i&&Object(n.jsx)("div",{className:"photo-page__image-wrapper",children:Object(n.jsx)("img",{className:"photo-page__image",src:i,alt:""})}),Object(n.jsxs)("div",{className:"photo-page__content",children:[o&&Object(n.jsxs)("p",{className:"photo-page__author",children:["Author: ",o]}),Object(n.jsxs)("div",{className:"photo-page__size",children:[j&&Object(n.jsxs)("p",{className:"photo-page__size-item",children:["Width: ",j]}),d&&Object(n.jsxs)("p",{className:"photo-page__size-item",children:["height: ",d]})]}),Object(n.jsx)(O,{onClick:function(){return s(a)},children:"Add to the favorites"})]})]}),r===p&&Object(n.jsx)("p",{children:"Something went wrong!"})]})})}),D=function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",component:E,exact:!0}),Object(n.jsx)(l.a,{path:"/photo/:id",component:R,exact:!0}),Object(n.jsx)(l.a,{path:"/favorites",component:x})]})},H=(a(46),function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("nav",{className:"header__navigation",children:[Object(n.jsx)(o.c,{className:"header__link",to:"/",children:"Home"}),Object(n.jsx)(o.c,{className:"header__link",to:"/favorites",children:"Favorites"})]})})})}),V=a(23),M=function(e){var t=e.children,a=Object(c.useState)(1),r=Object(J.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(6),l=Object(J.a)(o,2),j=l[0],d=l[1],h=z("/v2/list?page=".concat(s,"&limit=").concat(j)),b=h.data,p=h.status,m=function(e){var t=e.key,a=e.initialValue,n=e.storageType,r=void 0===n?C:n,s=Object(c.useState)((function(){try{var e=window[r].getItem(t);return e?JSON.parse(e):a}catch(n){return console.log("useLocalStorage error: ",n),a}})),i=Object(J.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){var e=window[r].getItem(t);e&&l(JSON.parse(e))}),[]),Object(c.useEffect)((function(){window[r].setItem(t,JSON.stringify(o))}),[o]),[o,l]}({key:"photos-app-favorites",initialValue:[]}),O=Object(J.a)(m,2),f=O[0],g=O[1];return Object(n.jsx)(u.Provider,{value:{handleAddToFavorites:function(e){f.find((function(t){return t.id===e.id}))?alert("The photo is already in the favorites!"):g([].concat(Object(V.a)(f),[e]))},handleRemoveFromFavorites:function(e,t){e.preventDefault();var a=f.filter((function(e){return e.id!==t}));g(a)},handlePageChange:function(e){return function(){switch(e){case P:i((function(e){return e+1}));break;case y:s>1&&i((function(e){return e-1}));break;case w:1!==s&&i(1);break;default:i(1)}}},setLimitPerPage:d,limitPerPage:j,page:s,data:b,status:p,favorites:f},children:t})},W=(a(47),a(48),function(){return Object(n.jsx)(M,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(H,{}),Object(n.jsx)(D,{})]})})}),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(W,{})})}),document.getElementById("root")),q()}},[[49,1,2]]]);
//# sourceMappingURL=main.bc676065.chunk.js.map