(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),i=a(25),l=(a(170),function(){return c.a.createElement("div",{className:"north-america-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"North America Region Destinations")))}),o=a(1),s=a(3),u=a.n(s),m=a(35),d=a(24),E=a(21),f=a.n(E),p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),l=Object(o.a)(i,2),s=l[0],E=l[1],p=Object(n.useState)(!0),g=Object(o.a)(p,2),b=g[0],h=g[1],j=Object(n.useState)(!1),O=Object(o.a)(j,2),w=O[0],N=O[1],k=Object(n.useState)(24),v=Object(o.a)(k,1)[0],S=s*v,y=S-v,D=a.filter(function(e){return"NORTH AMERICA"===e.region}).slice(y,S);if(Object(n.useEffect)(function(){u.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),h(!1)}).catch(function(){h(!1),N(!0)})},[]),b)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:f.a,className:"loading-clockwise",alt:"Loading..."}));if(w)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(d.a,{postPerPage:v,totalTours:a.length,paginate:function(e){return E(e)}})))},g=a(26);t.default=function(){return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(r.a,null),c.a.createElement(i.a,null),c.a.createElement(g.a,null,c.a.createElement(p,null)))}}}]);
//# sourceMappingURL=9.0580e7a0.chunk.js.7ea67fb1f749.map