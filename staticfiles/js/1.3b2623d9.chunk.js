(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n);a(164);var r=function(){return c.a.createElement("div",{className:"home-page-title"},c.a.createElement("h3",null,c.a.createElement("strong",null,"All your Destination in one place")),c.a.createElement("h6",null,"All you need to know about your chosen destination"))},l=a(10),i=a(1),o=a(17),u=a(3),s=a.n(u),m=a(11),d=(a(70),a(12)),E=a.n(d),f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),u=Object(i.a)(l,2),d=u[0],f=u[1],p=Object(n.useState)(24),b=Object(i.a)(p,1)[0],h=Object(n.useState)(!0),g=Object(i.a)(h,2),j=g[0],w=g[1],O=Object(n.useState)(!1),k=Object(i.a)(O,2),v=k[0],N=k[1],y=d*b,S=y-b,D=a.slice(S,y);if(Object(n.useEffect)(function(){s.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),w(!1)}).catch(function(){w(!1),N(!0)})},[]),j)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(v)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(m.a,{postPerPage:b,totalTours:a.length,paginate:function(e){return f(e)}})))},p=a(13),b=a(14);t.default=function(){return c.a.createElement("div",null,c.a.createElement(r,null),c.a.createElement(l.a,null),c.a.createElement(p.a,null),c.a.createElement(b.a,null,c.a.createElement(f,null)))}}}]);
//# sourceMappingURL=1.3b2623d9.chunk.js.map