(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{27:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),o=n.n(a),i=(n(27),n(6)),s=n(20),d=n.n(s),u=n(1);var l=function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=window.setInterval((function(){r(new Date)}),1e3);return function(){window.clearInterval(e)}}),[r]),Object(u.jsx)("div",{className:"RealTime",children:"".concat(n.getFullYear()," / ").concat(n.getMonth()+1," / ").concat(n.getDate()," / ").concat(n.getHours()," : ").concat(function(e){var t=e.getMinutes();return t<10?"0"+t:t}(n))})};var j=function(){return Object(u.jsx)("div",{className:"Sub",children:Object(u.jsx)(l,{})})};var b=function(e){var t=e.category;return console.log(e.category),Object(u.jsx)("div",{className:"Category",children:t})};var v=function(e){var t=e.Delete;return Object(u.jsx)("button",{className:"DeleteButton",onClick:t,children:"\xd7"})};var f=function(e){var t=e.Favorite,n=e.isFavorite;return Object(u.jsx)("button",{className:"FavoriteButton",onClick:t,children:n?"\ud83d\udc97":"\ud83d\udc99"})},m=n(5),O=n(3),x=n(11),h=localStorage.getItem("memoList"),g=null===h?[]:JSON.parse(h,(function(e,t){if("string"==typeof t&&t.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/))return new Date(Date.parse(t));return t}));function N(e){localStorage.setItem("memoList",JSON.stringify(e))}var p=Object(x.b)({name:"memoList",initialState:g,reducers:{addMemo:function(e,t){console.log(e,t);var n=[].concat(Object(O.a)(e),[t.payload]);return N(n),n},deleteMemo:function(e,t){console.log(e,t);var n=t.payload,c=e.filter((function(e){return console.log(e,n),e.id!==n}));return N(c),c},favoriteMemo:function(e,t){var n=t.payload,c=n.id,r=n.favorite,a=e.findIndex((function(e){return e.id===c}));return-1===a||(e[a].favorite=r,N(e)),e}}}),M=p.reducer,y=p.actions,S=y.addMemo,F=y.deleteMemo,w=y.favoriteMemo;var C=function(e){var t=e.memo,n=t.text,c=t.category,r=t.favorite,a=t.created_dt,o=t.id,i=Object(m.b)(),s="".concat(a.getFullYear()," / ").concat(a.getMonth()+1," / ").concat(a.getDate()," / ").concat(a.getHours()," : ").concat(a.getMinutes());return Object(u.jsxs)("div",{className:"Memo",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{children:Object(u.jsx)(b,{category:c})}),Object(u.jsx)("div",{className:"favorite-button",children:Object(u.jsx)(f,{Favorite:function(){i(w({id:o,favorite:!r}))},isFavorite:r})}),Object(u.jsx)("div",{children:Object(u.jsx)(v,{Delete:function(e){return i(F(o))}})})]}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("div",{className:"date",children:s})]})},D=n(4),B=Object(D.b)({memoList:M}),k=Object(x.a)({reducer:B}),I=m.c;var L=function(){var e=I((function(e){return e.memoList})).slice();e.sort((function(e,t){return e.created_dt<t.created_dt?1:-1}));var t=e.filter((function(e){return!0===e.favorite})),n=e.filter((function(e){return!1===e.favorite}));return[].concat(Object(O.a)(t),Object(O.a)(n))};var A=function(){var e=L();return console.log(e),Object(u.jsx)("div",{className:"Main",children:e.map((function(e){return Object(u.jsx)(C,{memo:e},e.id)}))})};n(43);var _=function(e){var t=e.Add;return Object(u.jsx)("button",{className:"AddButton",onClick:t,children:"+"})},J=n(12),T=n(22);var q=function(e){var t=Object(m.b)(),n=e.Close,c=Object(T.a)(),r=c.register,a=c.handleSubmit;return c.watch,c.formState.errors,Object(u.jsxs)("form",{onSubmit:a((function(e){var c=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<8;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}();var r={created_dt:new Date,text:e.text,category:e.category,favorite:!0,id:c};console.log("addbutton"),t(S(r)),n(),console.log(e)})),className:"MemoForm",children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",Object(J.a)({},r("text",{required:!0})))}),Object(u.jsx)("div",{children:Object(u.jsx)("select",Object(J.a)(Object(J.a)({},r("category",{required:!0})),{},{children:["job","cooking","memo","investment","other"].map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))}))}),Object(u.jsxs)("div",{className:"ButtonGroup",children:[Object(u.jsx)("button",{onClick:n,className:"CloseButton",children:"\u623b\u308b"}),Object(u.jsx)("button",{className:"AddMemoButton",children:"\u30e1\u30e2"})]})]})};var E=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(m.b)(),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"container main",children:Object(u.jsx)(A,{})}),Object(u.jsx)("div",{className:"container sub",children:Object(u.jsx)(j,{})}),Object(u.jsx)("div",{className:"add-button",children:Object(u.jsx)(_,{Add:function(){return r(!0)}})}),Object(u.jsx)(d.a,{isOpen:n,children:Object(u.jsx)(q,{Close:function(){return r(!1)}})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m.a,{store:k,children:Object(u.jsx)(E,{})})}),document.getElementById("root")),H()}},[[45,1,2]]]);
//# sourceMappingURL=main.ddcf98ca.chunk.js.map