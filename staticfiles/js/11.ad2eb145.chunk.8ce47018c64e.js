(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{170:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),i=a(46),l=a(1),o=a(3),s=a.n(o),u=a(49),m=a(47),d=a(30),E=a.n(d),f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),o=Object(l.a)(i,2),d=o[0],f=o[1],p=Object(n.useState)(!0),g=Object(l.a)(p,2),b=g[0],h=g[1],j=Object(n.useState)(!1),O=Object(l.a)(j,2),w=O[0],k=O[1],v=Object(n.useState)(24),N=Object(l.a)(v,1)[0],S=d*N,y=S-N,D=a.filter(function(e){return"SOUTH AMERICA"===e.region}).slice(y,S);if(Object(n.useEffect)(function(){s.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){r(e.data),h(!1)}).catch(function(){h(!1),k(!0)})},[]),b)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(w)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(m.a,{postPerPage:N,totalTours:a.length,paginate:function(e){return f(e)}})))},p=(a(170),function(){return c.a.createElement("div",{className:"south-america-page-title"},c.a.createElement("h1",null,c.a.createElement("strong",null,"South America Region Destinations")))}),g=a(48);t.default=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(r.a,null),c.a.createElement(i.a,null),c.a.createElement(g.a,null,c.a.createElement(f,null)))}}}]);
//# sourceMappingURL=11.ad2eb145.chunk.js.66a6574caaae.map