(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{170:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a(24),i=(a(170),function(){return c.a.createElement("div",{className:"europe-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Europe Region Destinations")))}),o=a(1),u=a(3),s=a.n(u),m=a(27),E=a(23),d=a(18),f=a.n(d),p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),i=Object(o.a)(l,2),u=i[0],d=i[1],p=Object(n.useState)(!0),g=Object(o.a)(p,2),b=g[0],j=g[1],O=Object(n.useState)(!1),h=Object(o.a)(O,2),w=h[0],k=h[1],v=Object(n.useState)(24),N=Object(o.a)(v,1)[0],S=u*N,y=S-N,P=a.filter(function(e){return"EUROPE"===e.region}).slice(y,S);if(Object(n.useEffect)(function(){s.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),j(!1)}).catch(function(){j(!1),k(!0)})},[]),b)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:f.a,className:"loading-clockwise",alt:"Loading..."}));if(w)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},P.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(E.a,{postPerPage:N,totalTours:a.length,paginate:function(e){return d(e)}})))},g=a(25);t.default=function(){return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(r.a,null),c.a.createElement(l.a,null),c.a.createElement(g.a,null,c.a.createElement(p,null)))}}}]);
//# sourceMappingURL=8.17e99728.chunk.js.map