(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(1),i=a(3),l=a.n(i),o=a(26),s=a(20),u=a(16),m=a.n(u),d=(a(164),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],u=Object(n.useState)(1),d=Object(r.a)(u,2),f=d[0],E=d[1],p=Object(n.useState)(24),g=Object(r.a)(p,1)[0],b=Object(n.useState)(!0),j=Object(r.a)(b,2),h=j[0],O=j[1],w=Object(n.useState)(!1),k=Object(r.a)(w,2),v=k[0],N=k[1],S=f*g,y=S-g,D=a.filter(function(e){return"AFRICA"===e.region}).slice(y,S);if(Object(n.useEffect)(function(){l.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){i(e.data),O(!1)}).catch(function(){O(!1),N(!0)})},[]),h)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:m.a,className:"loading-clockwise",alt:"Loading..."}));if(v)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(s.a,{postPerPage:g,totalTours:a.length,paginate:function(e){return E(e)}})))}),f=a(19),E=function(){return c.a.createElement("div",{className:"africa-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Africa Region Destinations")))},p=a(21),g=a(22);t.default=function(){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(f.a,null),c.a.createElement(p.a,null),c.a.createElement(g.a,null,c.a.createElement(d,null)))}}}]);
//# sourceMappingURL=4.5a8bb2e8.chunk.js.map