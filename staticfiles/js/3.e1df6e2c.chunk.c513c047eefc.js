(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(e,t,a){},168:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(2),l=(a(166),function(){var e=Object(r.h)().category;return n.a.createElement("div",{className:"category-page-title"},n.a.createElement("h2",null,"Your browsing at: ",e))}),s=a(1),i=a(3),m=a.n(i),o=a(26),u=(a(70),function(e){var t=Object(o.b)().addItem,a=Object(c.useState)(e.status),r=Object(s.a)(a,1)[0];return n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"overflow"},n.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.name}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.title),r?n.a.createElement("div",{className:"status"},n.a.createElement("h6",{className:"badge badge-primary"},"featured")):n.a.createElement(n.a.Fragment,null),n.a.createElement("p",{className:"card-text"},e.shortDescription),n.a.createElement("a",{href:"/view/"+e.id,className:"btn btn-primary"},"View"),n.a.createElement("button",{className:"btn btn-warning m-2",onClick:function(){return t(e.item)}},"Add to List")))))}),d=a(12),E=a(9),b=a.n(E),g=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(c.useState)(1),o=Object(s.a)(i,2),E=o[0],g=o[1],f=Object(c.useState)(24),p=Object(s.a)(f,1)[0],N=Object(c.useState)(!0),h=Object(s.a)(N,2),j=h[0],v=h[1],O=Object(c.useState)(!1),w=Object(s.a)(O,2),y=w[0],k=w[1],S=Object(r.h)().category,D=E*p,J=D-p,P=a.slice(J,D);if(Object(c.useEffect)(function(){S&&m.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/category/".concat(S,"/")).then(function(e){l(e.data),v(!1)}).catch(function(){v(!1),k(!0)})},[S]),j)return n.a.createElement("div",{className:"allsites-loading"},n.a.createElement("img",{src:b.a,className:"loading-clockwise",alt:"Loading..."}));if(y)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return n.a.createElement("div",null,n.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},n.a.createElement("div",{className:"row"},P.map(function(e){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement(u,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),n.a.createElement(d.a,{postPerPage:p,totalTours:a.length,paginate:function(e){return g(e)}}))))},f=a(11),p=a(13),N=(a(168),a(14));t.default=function(){return n.a.createElement("div",{className:"category-page-contents"},n.a.createElement(l,null),n.a.createElement(f.a,null),n.a.createElement(p.a,null),n.a.createElement(N.a,null,n.a.createElement(g,null)))}}}]);
//# sourceMappingURL=3.e1df6e2c.chunk.js.0946a9d24efc.map