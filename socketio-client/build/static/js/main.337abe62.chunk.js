(this["webpackJsonpsocketio-client"]=this["webpackJsonpsocketio-client"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(47),r=n.n(s),i=(n(55),n.p+"static/media/logo.6ce24c58.svg"),a=(n(56),n(48)),l=n(3),d=null;var u=function(){return Object(c.useEffect)((function(){return(d=Object(a.io)("http://dreamfarm.co.id/socketserver",{path:"/socketserver/socketio"})).on("welcomeMessage",(function(e){return console.log(e)})),d.on("fromTest",(function(e){return console.log(e)})),d.on("dataCreated",(function(e){return console.log(e)})),function(){return d.disconnect()}}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)("button",{onClick:function(){d.emit("fromClient","Hello From CLIENT!!!")},children:"Emit to server"})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))},p=n(49),f=n(1);r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(p.a,{children:Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(f.a,{component:u})]})})}),document.getElementById("root")),j()}},[[92,1,2]]]);
//# sourceMappingURL=main.337abe62.chunk.js.map