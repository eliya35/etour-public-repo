(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(106),c=t(163);t(97);a.a=function(){return r.a.createElement("div",{className:"mobile-category-filters"},r.a.createElement(l.a,{id:"dropdown-basic-button",title:"Category Dropdown"},r.a.createElement("div",{className:"mobile-filter-options"},r.a.createElement("span",null,r.a.createElement("strong",null,"FILTERS"))),r.a.createElement(c.a.Item,{href:"/featured/"},"Featured"),r.a.createElement(c.a.Item,{href:"/popular/"},"Most Popular"),r.a.createElement("br",null),r.a.createElement("div",{className:"mobile-categories"},r.a.createElement("span",null,r.a.createElement("strong",null,"CATEGORIES"))),r.a.createElement(c.a.Item,{href:"/category/Ancient Buildings/"},"Ancient Buildings"),r.a.createElement(c.a.Item,{href:"/category/Beach Restaurant/"},"Beach Restaurant"),r.a.createElement(c.a.Item,{href:"/category/Bike Hikes/"},"Bike Hikes"),r.a.createElement(c.a.Item,{href:"/category/Caves/"},"Caves"),r.a.createElement(c.a.Item,{href:"/category/Cold Regions/"},"Cold Regions"),r.a.createElement(c.a.Item,{href:"/category/Cultural Regions/"},"Cultural Regions"),r.a.createElement(c.a.Item,{href:"/category/Desert/"},"Deserts"),r.a.createElement(c.a.Item,{href:"/category/Hotel Casino/"},"Family Time Spots"),r.a.createElement(c.a.Item,{href:"/category/Foot Hikes/"},"Foot Hikes"),r.a.createElement(c.a.Item,{href:"/category/Honeymoon spots/"},"Honeymoon spots"),r.a.createElement(c.a.Item,{href:"/category/Honeymoon spots/"},"Hot Regions"),r.a.createElement(c.a.Item,{href:"/category/Island/"},"Islands"),r.a.createElement(c.a.Item,{href:"/category/Mountains/"},"Mountains"),r.a.createElement(c.a.Item,{href:"/category/National Parks/"},"National Parks"),r.a.createElement(c.a.Item,{href:"/category/Popular Cities/"},"Popular Cities"),r.a.createElement(c.a.Item,{href:"/category/Recreational Grounds/"},"Recreational"),r.a.createElement(c.a.Item,{href:"/category/Forest Region/"},"Forest Regions"),r.a.createElement(c.a.Item,{href:"/category/Vacation Spots/"},"Vacation Spots"),r.a.createElement(c.a.Item,{href:"/category/Water Falls/"},"Water Falls"),r.a.createElement(c.a.Item,{href:"/category/Wildlife Region/"},"Wildlife Regions"),r.a.createElement("br",null),r.a.createElement("div",{className:"mobile-region"},r.a.createElement("span",null,r.a.createElement("strong",null,"REGIONS"))),r.a.createElement(c.a.Item,{href:"/region/Asian-pacific/"},"ASIA"),r.a.createElement(c.a.Item,{href:"/region/Africa/"},"AFRICA"),r.a.createElement(c.a.Item,{href:"/region/Europe/"},"EUROPE"),r.a.createElement(c.a.Item,{href:"/region/North-america/"},"NORTH AMERICA"),r.a.createElement(c.a.Item,{href:"/region/South-america/"},"SOUTH AMERICA"),r.a.createElement(c.a.Item,{href:"/region/Australia/"},"AUSTRALIA")))}},102:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(12),i=(t(98),l.a.memo(function(e){var a=Object(c.b)().addItem,t=Object(r.useState)(e.status),i=Object(n.a)(t,1)[0];return l.a.createElement("div",null,l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"overflow"},l.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.name}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),i?l.a.createElement("div",{className:"status"},l.a.createElement("h6",{className:"badge badge-primary"},"featured")):l.a.createElement(l.a.Fragment,null),l.a.createElement("p",{className:"card-text"},e.shortDescription),l.a.createElement("a",{href:"/view/"+e.id,className:"btn btn-primary",id:"view-btn"},"View"),l.a.createElement("button",{className:"btn btn-warning m-2",id:"add-item-btn",onClick:function(){return a(e.item)}},"Add to List"))))))}));a.a=i},104:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){for(var a=e.postPerPage,t=e.totalTours,n=e.paginate,l=[],c=1;c<=Math.ceil(t/a);c++)l.push(c);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map(function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"#",className:"page-link"},e))})))}},158:function(e,a,t){},179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(158),function(){return r.a.createElement("div",{className:"north-america-page-title"},r.a.createElement("h1",null,r.a.createElement("strong",null,"North America Region Destinations")))}),c=t(99),i=t(101),o=t(16),m=t(1),s=t(3),u=t.n(s),E=t(15),g=t.n(E),f=t(102),d=t(104),h=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(1),i=Object(m.a)(c,2),o=i[0],s=i[1],E=Object(n.useState)(!0),h=Object(m.a)(E,2),p=h[0],y=h[1],N=Object(n.useState)(!1),R=Object(m.a)(N,2),I=R[0],b=R[1],v=Object(n.useState)(24),A=Object(m.a)(v,1)[0],k=o*A,C=k-A,O=t.filter(function(e){return"NORTH AMERICA"===e.region}).slice(C,k);if(Object(n.useEffect)(function(){document.title="North America Sites"}),Object(n.useEffect)(function(){u.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){l(e.data),y(!1)}).catch(function(){y(!1),b(!0)})},[]),p)return r.a.createElement("div",{className:"allsites-loading"},r.a.createElement("img",{src:g.a,className:"loading-clockwise",alt:"Loading..."}));if(I)throw new Error("NetworkError: Please check your connection or try again later\ud83d\ude36.");return r.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},r.a.createElement("div",{className:"row"},O.map(function(e){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement(f.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),r.a.createElement(d.a,{postPerPage:A,totalTours:t.length,paginate:function(e){return s(e)}})))};a.default=function(){return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(c.a,null),r.a.createElement(i.a,null),r.a.createElement(o.a,null,r.a.createElement(h,null)))}},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(2);t(97);a.a=function(){var e=Object(l.g)();return r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"selection"},r.a.createElement("div",{className:"selection-name "},r.a.createElement("span",{className:"selection-name-weight"},"Category")),r.a.createElement("ul",{className:"unoderd-list-categories"},r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Ancient Buildings/"},"Ancient Buildings")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Beach Restaurant/"},"Beach Restaurant")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Bike Hikes/"},"Bike Hikes")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Caves/"},"Caves")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Cold Regions/"},"Cold Regions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Cultural Regions/"},"Cultural Regions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Desert/"},"Deserts")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Family Time Spots/"},"Family Time Spots")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Foot Hikes/"},"Foot Hikes")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Honeymoon spots/"},"Honeymoon spots")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Hot Regions/"},"Hot Regions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Island/"},"Islands")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Mountains/"},"Mountains")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/National Parks/"},"National Parks")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Popular Cities/"},"Popular Cities")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Recreational Grounds/"},"Recreational")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Forest Region/"},"Forest Regions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Vacation Spots/"},"Vacation Spots")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Water Falls/"},"Water Falls")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category/Wildlife Region/"},"Wildlife Regions"))),r.a.createElement("div",{className:"selection-checkboxes"},r.a.createElement("ul",{className:"unoderd-list-verticla-chekboxes"},r.a.createElement("li",{className:"filter-box-title"},"Filters"),r.a.createElement("li",{className:"most-visited"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e("/popular/")}})," Most Popular"),r.a.createElement("li",{className:"featured"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e("/featured/")}})," Featured"))),r.a.createElement("div",{className:"region-filters"},r.a.createElement("div",{className:"region-section"},r.a.createElement("h6",null,r.a.createElement("strong",null,"Regions"))),r.a.createElement("div",{className:"region-options"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/region/Asian-pacific/"},"ASIA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/region/Africa/"},"AFRICA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/region/Europe/"},"EUROPE")),r.a.createElement("li",null,r.a.createElement("a",{href:"/region/North-america/"},"NORTH AMERICA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/region/South-america/"},"SOUTH AMERICA")),r.a.createElement("li",null,r.a.createElement("a",{href:"/region/Australia/"},"AUSTRALIA")))))))}}}]);
//# sourceMappingURL=11.2bcb0a56.chunk.js.map