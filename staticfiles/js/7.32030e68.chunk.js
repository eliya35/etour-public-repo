(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(e,t,a){},147:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(0),c=a.n(l),r=a(2),i=a(3),m=a.n(i),o=a(15),u=a.n(o),d=a(12),_=(a(147),function(e){var t=Object(d.b)().addItem,a=Object(l.useState)(!0),r=Object(n.a)(a,1)[0];return c.a.createElement("div",{className:"booking"},c.a.createElement("button",{disabled:r,className:"btn btn-primary m-2"},"Book Now"),c.a.createElement("button",{className:"btn btn-warning",onClick:function(){return t(e.tour)}},"Add to list"),c.a.createElement("h6",null,"We are working on bookings!"))}),s=(a(114),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"recommended-products"},c.a.createElement("h5",null,"Some Recommended Products for ",e.name," "),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h6",null,e.product_01)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_02)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_03)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_04)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_05)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_06)),c.a.createElement("li",null,c.a.createElement("h6",null,e.product_07)))))}),E=function(e){var t=Object(l.useState)(e.img),a=Object(n.a)(t,2),r=a[0],i=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"imgBx"},c.a.createElement("img",{src:r,id:"initial-img",alt:e.name})),c.a.createElement("div",{className:"other-img"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"col"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return i(function(t){return e.image_01})}},c.a.createElement("img",{src:e.image_01,className:"side-img",alt:e.name}))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"col"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return i(function(t){return e.image_02})}},c.a.createElement("img",{src:e.image_02,className:"side-img",alt:e.name}))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"col"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return i(function(t){return e.image_03})}},c.a.createElement("img",{src:e.image_03,className:"side-img",alt:e.name}))))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"col"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return i(function(t){return e.image_04})}},c.a.createElement("img",{src:e.image_04,className:"side-img",alt:e.name}))))))))},p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"location-info"},c.a.createElement("h5",null,"Location information "),c.a.createElement("h6",null,"Region: ",e.region," "),c.a.createElement("h6",null,"Country: ",e.country),c.a.createElement("h6",null,"Location: ",e.location),c.a.createElement("h6",null,"Tourist traffic annually: ",e.touristRate)))},g=function(e){var t=void 0===e.name?"etour international":e.name;return Object(l.useEffect)(function(){document.title="".concat(t)},[]),c.a.createElement("div",{className:"viewpage"},c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement(E,{name:e.name,img:e.image_01,image_01:e.image_01,image_02:e.image_02,image_03:e.image_03,image_04:e.image_04})),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,e.name),c.a.createElement("p",null,e.longDescription)),c.a.createElement("div",null,c.a.createElement(p,{region:e.region,country:e.country,location:e.location,touristRate:e.touristRate})),c.a.createElement("div",null,c.a.createElement(s,{name:e.name,product_01:e.product_01,product_02:e.product_02,product_03:e.product_03,product_04:e.product_04,product_05:e.product_05,product_06:e.product_06,product_07:e.product_07})),c.a.createElement("div",null,c.a.createElement(_,{tour:e.tour}))))};t.default=function(){var e=Object(l.useState)({}),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(l.useState)(!0),d=Object(n.a)(o,2),_=d[0],s=d[1],E=Object(r.h)(),p=parseInt(E.id);return Object(l.useEffect)(function(){m.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/".concat(p)).then(function(e){i(e.data),s(!1)}).catch(function(){s(!1)})},[p]),_?c.a.createElement("div",{className:"details-loading"},c.a.createElement("img",{src:u.a,className:"loading-clockwise",alt:"Loading..."})):c.a.createElement("div",null,c.a.createElement(g,{key:a.id,tour:a,tour_site_id:p,img:a.image_01,image_01:a.image_01,image_02:a.image_02,image_03:a.image_03,image_04:a.image_04,alt:a.name,name:a.name,longDescription:a.long_description,region:a.region,country:a.country,location:a.location,touristRate:a.tourist_traffic_annually,product_01:a.product_01,product_01_affiliate_link:a.product_01_affiliate_link,product_02:a.product_02,product_02_affiliate_link:a.product_02_affiliate_link,product_03:a.product_03,product_03_affiliate_link:a.product_03_affiliate_link,product_04:a.product_04,product_04_affiliate_link:a.product_04_affiliate_link,product_05:a.product_05,product_05_affiliate_link:a.product_05_affiliate_link,product_06:a.product_06,product_06_affiliate_link:a.product_06_affiliate_link,product_07:a.product_07,product_07_affiliate_link:a.product_07_affiliate_link}))}}}]);
//# sourceMappingURL=7.32030e68.chunk.js.map