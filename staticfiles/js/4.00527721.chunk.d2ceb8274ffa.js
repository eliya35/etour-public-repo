(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),l=a(1),i=a(3),s=a.n(i),m=a(21),o=(a(150),function(e){var t=Object(m.b)().addItem;return c.a.createElement("div",null,c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"overflow"},c.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("h6",{className:"badge badge-primary"},"featured"),c.a.createElement("p",{className:"card-text"},e.shortDescription),c.a.createElement("a",{href:"/view/"+e.id,className:"btn btn-primary"},"View"),c.a.createElement("button",{className:"btn btn-warning m-2",onClick:function(){return t(e.item)}},"Add to List"))))))}),u=a(47),d=a(30),E=a.n(d),b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),m=Object(l.a)(i,2),d=m[0],b=m[1],f=Object(n.useState)(24),p=Object(l.a)(f,1)[0],g=Object(n.useState)(!0),N=Object(l.a)(g,2),h=N[0],v=N[1],w=Object(n.useState)(!1),j=Object(l.a)(w,2),O=j[0],k=j[1],y=d*p,S=y-p,D=a.slice(S,y);if(Object(n.useEffect)(function(){s.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/featured/").then(function(e){r(e.data),v(!1)}).catch(function(){v(!1),k(!0)})},[]),h)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(O)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},D.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e}))}),c.a.createElement(u.a,{postPerPage:p,totalTours:a.length,paginate:function(e){return b(e)}})))};var f=function(){return c.a.createElement("div",{className:"page-title"},c.a.createElement("h1",null,"Featured Tourist Sites"),c.a.createElement("h5",null,"Top featured sites around the glob"))},p=a(46),g=a(48);t.default=function(){return c.a.createElement("div",{className:"featured-page"},c.a.createElement(f,null),c.a.createElement(r.a,null),c.a.createElement(p.a,null),c.a.createElement(g.a,null,c.a.createElement(b,null)))}}}]);
//# sourceMappingURL=4.00527721.chunk.js.924e3acdf7fc.map