(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a(15),l=(a(170),function(){return c.a.createElement("div",{className:"antartic-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Antartic Region Destinations")))}),o=a(1),s=a(3),u=a.n(s),m=a(21),d=a(14),f=a(10),E=a.n(f),p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),l=Object(o.a)(i,2),s=l[0],f=l[1],p=Object(n.useState)(24),g=Object(o.a)(p,1)[0],b=Object(n.useState)(!0),j=Object(o.a)(b,2),h=j[0],O=j[1],w=Object(n.useState)(!1),N=Object(o.a)(w,2),k=N[0],v=N[1],S=s*g,y=S-g,A=a.filter(function(e){return"ANTARCTICA"===e.region}).slice(y,S);if(Object(n.useEffect)(function(){u.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),O(!1)}).catch(function(){O(!1),v(!0)})},[]),h)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(k)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},A.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(d.a,{postPerPage:g,totalTours:a.length,paginate:function(e){return f(e)}})))},g=a(16);t.default=function(){return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(r.a,null),c.a.createElement(i.a,null),c.a.createElement(g.a,null,c.a.createElement(p,null)))}}}]);
//# sourceMappingURL=5.15637a1c.chunk.js.4bcb080b326e.map