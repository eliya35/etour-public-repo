(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n);a(152);var l=function(){return c.a.createElement("div",{className:"home-page-title"},c.a.createElement("h3",null,c.a.createElement("strong",null,"All your Destination in one place")),c.a.createElement("h6",null,"All you need to know about your chosen destination"))},r=a(47),i=a(1),o=a(50),s=a(5),u=a.n(s),m=a(49),d=(a(70),a(30)),E=a.n(d),f=a(60),b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(1),s=Object(i.a)(r,2),d=s[0],b=s[1],p=Object(n.useState)(24),g=Object(i.a)(p,1)[0],j=Object(n.useState)(!0),h=Object(i.a)(j,2),w=h[0],O=h[1],v=Object(n.useState)(!1),k=Object(i.a)(v,2),y=k[0],N=k[1],S=Object(n.useContext)(f.a).baseURL,P=d*g,x=P-g,A=a.slice(x,P);if(Object(n.useEffect)(function(){u.a.get("".concat(S)).then(function(e){l(e.data),O(!1)}).catch(function(){O(!1),N(!0)})},[]),w)return c.a.createElement("div",{className:"allsites-loading"},c.a.createElement("img",{src:E.a,className:"loading-clockwise",alt:"Loading..."}));if(y)throw new Error("NetworkError: Please check your connnection or try again later\ud83d\ude36.");return c.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},c.a.createElement("div",{className:"row"},A.map(function(e){return c.a.createElement("div",{className:"col-md-3"},c.a.createElement(o.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),c.a.createElement(m.a,{postPerPage:g,totalTours:a.length,paginate:function(e){return b(e)}})))},p=a(48),g=a(31);t.default=function(){return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(r.a,null),c.a.createElement(p.a,null),c.a.createElement(g.a,null,c.a.createElement(b,null)))}}}]);
//# sourceMappingURL=1.b1bbfb05.chunk.js.map