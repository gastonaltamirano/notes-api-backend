(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(17),s=n.n(a),o=(n(22),n(8)),i=n(3),u=(n(23),n(0)),l=function(e){var t=e.note,n=e.toggleImportance,r=t.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[Object(u.jsx)("span",{children:t.content}),Object(u.jsx)("button",{onClick:n,children:r})]})},j=n(4),b=n.n(j),d=n(5),p=n(6),f=n.n(p),O="/api/notes",h=null,x={getAll:function(){return f.a.get(O).then((function(e){return e.data}))},create:function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,f.a.post(O,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return f.a.put("".concat(O,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){h="bearer ".concat(e)}},m=function(e){var t=e.message;return t?Object(u.jsx)("div",{className:"error",children:t}):null},v=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, by GASTON ALTAMIRANO 2021"})]})},g=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.setUser,n=e.setErrorMessage,c=Object(r.useState)(""),a=Object(i.a)(c,2),s=a[0],o=a[1],l=Object(r.useState)(""),j=Object(i.a)(l,2),p=j[0],f=j[1],O=function(){var e=Object(d.a)(b.a.mark((function e(r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,g({username:s,password:p});case 4:c=e.sent,window.localStorage.setItem("loggedNoteppUser",JSON.stringify(c)),x.setToken(c.token),t(c),o(""),f(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n("wrong credentials"),setTimeout((function(){n(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsxs)("div",{children:["username",Object(u.jsx)("input",{id:"username",type:"text",name:"Username",value:s,onChange:o})]}),Object(u.jsxs)("div",{children:["password",Object(u.jsx)("input",{id:"password",type:"password",value:p,onChange:f})]}),Object(u.jsx)("button",{id:"login-button",type:"submit",children:"login"})]})]})},y=c.a.forwardRef((function(e,t){var n=e.buttonLabel,c=e.children,a=Object(r.useState)(!1),s=Object(i.a)(a,2),o=s[0],l=s[1],j={display:o?"none":""},b={display:o?"":"none"},d=function(){l(!o)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:d}})),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:j,children:Object(u.jsx)("button",{onClick:d,children:n})}),Object(u.jsxs)("div",{style:b,className:"togglableContent",children:[c,Object(u.jsx)("button",{onClick:d,children:"cancel"})]})]})}));y.displayName="Togglable";var k=y,N=function(e){var t=e.setErrorMessage,n=(e.setNotes,e.notes,Object(r.useState)(null)),c=Object(i.a)(n,2),a=c[0],s=c[1];Object(r.useRef)();Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);s(t),x.setToken(t.token)}}),[]);return Object(u.jsx)("div",{children:null===a?Object(u.jsx)(k,{buttonLabel:"log in",children:Object(u.jsx)(w,{setErrorMessage:function(e){return t(e)},setUser:function(e){return s(e)}})}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[a.name," logged in"]}),void 0]})})},S=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),j=s[0],b=s[1],d=Object(r.useState)(""),p=Object(i.a)(d,2),f=p[0],O=p[1];Object(r.useEffect)((function(){x.getAll().then((function(e){c(e)}))}),[]);var h=j?n:n.filter((function(e){return!0===e.important}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(m,{message:f}),Object(u.jsx)(N,{setErrorMessage:function(e){return O(e)},notes:n,setNotes:function(e){return c(e)}}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return b(!j)},children:["show ",j?"important":"all"]})}),Object(u.jsx)("ul",{children:h.map((function(e){return Object(u.jsx)(l,{note:e,toggleImportance:function(){return function(e){var t=n.find((function(t){return t.id===e})),r=Object(o.a)(Object(o.a)({},t),{},{important:!t.important});x.update(e,r).then((function(t){c(n.map((function(n){return n.id!==e?n:t})))})).catch((function(r){console.log(r),O("Note '".concat(t.content,"' was already deleted from server")),setTimeout((function(){O(null)}),5e3),c(n.filter((function(t){return t.id!==e})))}))}(e.id)}},e.id)}))}),Object(u.jsx)(v,{})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b4241eb5.chunk.js.map