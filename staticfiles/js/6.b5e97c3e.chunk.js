(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a(19),i=(a(170),function(){return c.a.createElement("div",{className:"middle-east-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Middle East Region Destinations")))}),s=a(1),o=a(3),u=a.n(o),m=a(23),d=a(18),E=a(12),f=a.n(E),p=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),i=Object(s.a)(l,2),o=i[0],E=i[1],p=Object(n.useState)(24),g=Object(s.a)(p,1)[0],b=Object(n.useState)(!0),j=Object(s.a)(b,2),h=j[0],O=j[1],w=Object(n.useState)(!1),k=Object(s.a)(w,2),v=k[0],N=k[1],S=o*g,D=S-g,y=a.filter(function(e){return"MIDDLE EAST"===e.region}).slice(D,S);if(Object(n.useEffect)(function(){u.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),O(!1)}).catch(function(){O(!1),N(!0)})},[]),h)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:f.a,className:"loading-clockwise",alt:"Loading..."}));if(v)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},y.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(d.a,{postPerPage:g,totalTours:a.length,paginate:function(e){return E(e)}})))},g=a(20);t.default=function(){return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(r.a,null),c.a.createElement(l.a,null),c.a.createElement(g.a,null,c.a.createElement(p,null)))}}}]);
//# sourceMappingURL=6.b5e97c3e.chunk.js.map