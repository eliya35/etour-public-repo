(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n);a(48);var r=function(){return c.a.createElement("div",{className:"page-title"},c.a.createElement("h1",null,"Most Popular Tourist Sites"),c.a.createElement("h5",null,"Gaze upon some Popular destinations in the world!!"))},l=a(1),s=a(26),i=function(e){var t=Object(s.b)().addItem,a=Object(n.useState)(e.status),r=Object(l.a)(a,1)[0];return c.a.createElement("div",null,c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"overflow"},c.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.alt}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),r?c.a.createElement("div",{className:"status"},c.a.createElement("h6",{className:"badge badge-primary"},"featured")):c.a.createElement(c.a.Fragment,null),c.a.createElement("p",{className:"card-text"},e.shortDescription),c.a.createElement("a",{href:"/view/"+e.id,className:"btn btn-primary"},"View"),c.a.createElement("button",{className:"btn btn-warning m-2",onClick:function(){return t(e.item)}},"Add to List"))))))},m=a(3),o=a.n(m),u=a(10),d=(a(70),a(11)),E=a.n(d),b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),m=Object(l.a)(s,2),d=m[0],b=m[1],f=Object(n.useState)(24),p=Object(l.a)(f,1)[0],g=Object(n.useState)(!0),N=Object(l.a)(g,2),h=N[0],v=N[1],j=Object(n.useState)(!1),w=Object(l.a)(j,2),O=w[0],k=w[1],y=a.filter(function(e){return"VERY HIGH"===e.tourist_traffic_annually}),S=d*p,P=S-p,D=y.slice(P,S);if(Object(n.useEffect)(function(){o.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),v(!1)}).catch(function(){v(!1),k(!0)})},[]),h)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(O)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(i,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,alt:e.name,shortDescription:e.short_description,price:e.price,item:e,rate:e.numb_stars,status:e.is_featured}))}),c.a.createElement(u.a,{postPerPage:p,totalTours:y.length,paginate:function(e){return b(e)}})))},f=a(9),p=a(12),g=a(13);t.default=function(){return c.a.createElement("div",{className:"featured-page"},c.a.createElement(r,null),c.a.createElement(f.a,null),c.a.createElement(p.a,null),c.a.createElement(g.a,null,c.a.createElement(b,null)))}}}]);
//# sourceMappingURL=2.5add97b6.chunk.js.b67a8d32c01e.map