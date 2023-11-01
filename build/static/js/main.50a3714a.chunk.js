(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(8),i=c.n(s),r=(c(13),c(4)),l=c(6),u=c(2),o=(c(14),c(0)),j=function(e){var t=e.changeDifficulty,c=e.resetGame,n=Object(a.useState)(5),s=Object(u.a)(n,2),i=s[0],r=s[1];Object(a.useEffect)((function(){var e=localStorage.getItem("currentDifficulty");e&&r(parseInt(e,10))}),[]),Object(a.useEffect)((function(){var e=document.querySelector("main");e.classList.remove("easy","medium","hard"),5===i?e.classList.add("easy"):7===i?e.classList.add("medium"):10===i&&e.classList.add("hard"),localStorage.setItem("currentDifficulty",i.toString())}),[i]);var l=function(e){t(e),r(e)};return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"logo-wrapper",children:[Object(o.jsx)("h2",{className:"logo",children:"Memory Game"}),Object(o.jsx)("button",{className:"reset-game",onClick:c,children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(o.jsx)("path",{d:"M252.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-184 184c-15.6 15.6-15.6 40.9 0 56.6l184 184c15.6 15.6 40.9 15.6 56.6 0l184-184c15.6-15.6 15.6-40.9 0-56.6l-184-184zM248 224c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM96 248c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm128 80c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128-80c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM224 72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm96 392c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H472.5c13.4 26.9 8.8 60.5-13.6 82.9L320 413.8V464zm160-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"})})})]}),Object(o.jsxs)("ul",{className:"difficulty-list",children:[Object(o.jsx)("li",{className:"difficulty-item",children:Object(o.jsx)("button",{onClick:function(){return l(5)},children:"Easy"})}),Object(o.jsx)("li",{className:"difficulty-item",children:Object(o.jsx)("button",{onClick:function(){return l(7)},children:"Medium"})}),Object(o.jsx)("li",{className:"difficulty-item",children:Object(o.jsx)("button",{onClick:function(){return l(10)},children:"Hard"})})]})]})},d=c.p+"static/media/clapping.037ef589.wav";function f(e){var t=e.card,c=e.handleChoice,a=e.flipped,n=e.disabled;e.border;return Object(o.jsxs)("div",{className:"card ".concat(a?"flipped":""," ").concat(t.matched?"border":""),children:[Object(o.jsx)("img",{src:t.src,alt:t.src,className:"front"}),Object(o.jsx)("img",{src:"/img/snowflake.jpg",alt:"card back",className:"back",onClick:function(){n||c(t)}})]})}var m=[{src:"/img/anna.jpg",tag:"default"},{src:"/img/elsa.jpg",tag:"default"},{src:"/img/kristoff.jpg",tag:"default"},{src:"/img/olaf.jpg",tag:"default"},{src:"/img/sven.jpg",tag:"default"},{src:"/img/hans.jpg",tag:"default"},{src:"/img/oaken.jpg",tag:"default"},{src:"/img/snowgies.jpg",tag:"default"},{src:"/img/bruni.jpg",tag:"default"},{src:"/img/marshmallow.jpg",tag:"default"}];var b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),b=i[0],g=i[1],O=Object(a.useState)(null),h=Object(u.a)(O,2),p=h[0],x=h[1],v=Object(a.useState)(null),y=Object(u.a)(v,2),w=y[0],N=y[1],S=Object(a.useState)(!1),k=Object(u.a)(S,2),M=k[0],z=k[1],C=Object(a.useState)(!1),E=Object(u.a)(C,2),L=E[0],D=E[1],I=Object(a.useState)(5),G=Object(u.a)(I,2),H=G[0],T=G[1],A=function(){D(!0),setTimeout((function(){return D(!1)}),3e3)},B=function(){var e=Object(l.a)(m).slice(0,H),t=[].concat(Object(l.a)(e),Object(l.a)(e)).sort((function(){return Math.random()-.5})).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{id:Math.random()})}));x(null),N(null),function(e){n(e)}(t),g(0)},J=function(e){p?N(e):x(e),console.log("handleChoice")};Object(a.useEffect)((function(){p&&w&&(z(!0),p.src===w.src?(n((function(e){return e.map((function(e){return e.src===p.src?Object(r.a)(Object(r.a)({},e),{},{matched:!0,border:!0}):e}))})),V()):setTimeout((function(){return V()}),1e3))}),[p,w]);var V=function(){x(null),N(null),g((function(e){return e+1})),z(!1)},q=function(){var e=c.every((function(e){return!0===e.matched}));console.log("turns",b),e&&0!==b&&new Audio(d).play()};Object(a.useEffect)((function(){F()}),[H]),Object(a.useEffect)((function(){q()}),[p,w,c]),Object(a.useEffect)((function(){B(),A()}),[]);var F=function(){B(),A()};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{changeDifficulty:function(e){T(e)},resetGame:F}),Object(o.jsx)("main",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(f,{card:e,handleChoice:J,flipped:L||e===p||e===w||e.matched,disabled:M},e.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",b]})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.50a3714a.chunk.js.map