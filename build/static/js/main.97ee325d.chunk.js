(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),o=n(15),a=n.n(o),i=(n(20),n(6)),u=n(3),s=(n(21),n(0)),j=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(s.jsxs)("li",{className:"note",children:[e.content,Object(s.jsx)("button",{onClick:n,children:c})]})},l=n(4),b=n.n(l),f="/api/notes",d={getAll:function(){return b.a.get(f).then((function(t){return t.data}))},create:function(t){return b.a.post(f,t).then((function(t){return t.data}))},update:function(t,e){return b.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))}},O=function(t){var e=t.message;return e?Object(s.jsx)("div",{className:"error",children:e}):null},p=function(){return Object(s.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(s.jsx)("br",{}),Object(s.jsx)("em",{children:"Note app, by GASTON ALTAMIRANO 2021"})]})},m=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),l=a[0],b=a[1],f=Object(c.useState)(!0),m=Object(u.a)(f,2),h=m[0],x=m[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),S=g[0],N=g[1];Object(c.useEffect)((function(){d.getAll().then((function(t){r(t)}))}),[]);var A=h?n:n.filter((function(t){return!0===t.important}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Note"}),Object(s.jsx)(O,{message:S}),Object(s.jsx)("div",{children:Object(s.jsxs)("button",{onClick:function(){return x(!h)},children:["show ",h?"important":"all"]})}),Object(s.jsx)("ul",{children:A.map((function(t){return Object(s.jsx)(j,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});d.update(t,c).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){console.log(c),N("Note '".concat(e.content,"' was already deleted from server")),setTimeout((function(){N(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:l,date:(new Date).toISOString(),important:Math.random()>.5};d.create(e).then((function(t){r(n.concat(t)),b("")}))},children:[Object(s.jsx)("input",{value:l,onChange:function(t){b(t.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Save"})]}),Object(s.jsx)(p,{})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.97ee325d.chunk.js.map