(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(106),c=t(163);t(97);a.a=function(){return n.a.createElement("div",{className:"mobile-category-filters"},n.a.createElement(l.a,{id:"dropdown-basic-button",title:"Category Dropdown"},n.a.createElement("div",{className:"mobile-filter-options"},n.a.createElement("span",null,n.a.createElement("strong",null,"FILTERS"))),n.a.createElement(c.a.Item,{href:"/featured/"},"Featured"),n.a.createElement(c.a.Item,{href:"/popular/"},"Most Popular"),n.a.createElement("br",null),n.a.createElement("div",{className:"mobile-categories"},n.a.createElement("span",null,n.a.createElement("strong",null,"CATEGORIES"))),n.a.createElement(c.a.Item,{href:"/category/Ancient Buildings/"},"Ancient Buildings"),n.a.createElement(c.a.Item,{href:"/category/Beach Restaurant/"},"Beach Restaurant"),n.a.createElement(c.a.Item,{href:"/category/Bike Hikes/"},"Bike Hikes"),n.a.createElement(c.a.Item,{href:"/category/Caves/"},"Caves"),n.a.createElement(c.a.Item,{href:"/category/Cold Regions/"},"Cold Regions"),n.a.createElement(c.a.Item,{href:"/category/Cultural Regions/"},"Cultural Regions"),n.a.createElement(c.a.Item,{href:"/category/Desert/"},"Deserts"),n.a.createElement(c.a.Item,{href:"/category/Hotel Casino/"},"Family Time Spots"),n.a.createElement(c.a.Item,{href:"/category/Foot Hikes/"},"Foot Hikes"),n.a.createElement(c.a.Item,{href:"/category/Honeymoon spots/"},"Honeymoon spots"),n.a.createElement(c.a.Item,{href:"/category/Honeymoon spots/"},"Hot Regions"),n.a.createElement(c.a.Item,{href:"/category/Island/"},"Islands"),n.a.createElement(c.a.Item,{href:"/category/Mountains/"},"Mountains"),n.a.createElement(c.a.Item,{href:"/category/National Parks/"},"National Parks"),n.a.createElement(c.a.Item,{href:"/category/Popular Cities/"},"Popular Cities"),n.a.createElement(c.a.Item,{href:"/category/Recreational Grounds/"},"Recreational"),n.a.createElement(c.a.Item,{href:"/category/Forest Region/"},"Forest Regions"),n.a.createElement(c.a.Item,{href:"/category/Vacation Spots/"},"Vacation Spots"),n.a.createElement(c.a.Item,{href:"/category/Water Falls/"},"Water Falls"),n.a.createElement(c.a.Item,{href:"/category/Wildlife Region/"},"Wildlife Regions"),n.a.createElement("br",null),n.a.createElement("div",{className:"mobile-region"},n.a.createElement("span",null,n.a.createElement("strong",null,"REGIONS"))),n.a.createElement(c.a.Item,{href:"/region/Asian-pacific/"},"ASIA"),n.a.createElement(c.a.Item,{href:"/region/Africa/"},"AFRICA"),n.a.createElement(c.a.Item,{href:"/region/Europe/"},"EUROPE"),n.a.createElement(c.a.Item,{href:"/region/North-america/"},"NORTH AMERICA"),n.a.createElement(c.a.Item,{href:"/region/South-america/"},"SOUTH AMERICA"),n.a.createElement(c.a.Item,{href:"/region/Australia/"},"AUSTRALIA")))}},102:function(e,a,t){"use strict";var r=t(1),n=t(0),l=t.n(n),c=t(12),i=(t(98),l.a.memo(function(e){var a=Object(c.b)().addItem,t=Object(n.useState)(e.status),i=Object(r.a)(t,1)[0];return l.a.createElement("div",null,l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"overflow"},l.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:e.name}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("h6",{style:{visibility:i?"visible":"hidden"},className:"badge badge-primary","aria-label":"Featured"},"featured"),l.a.createElement("p",{className:"card-text","data-testid":"short-paragraph"},e.shortDescription),l.a.createElement("a",{href:"/view/"+e.id,className:"btn btn-primary",id:"view-btn"},"View"),l.a.createElement("button",{className:"btn btn-warning m-2",id:"add-item-btn",onClick:function(){return a(e.item)}},"Add to List"))))))}));a.a=i},104:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){for(var a=e.postPerPage,t=e.totalTours,r=e.paginate,l=[],c=1;c<=Math.ceil(t/a);c++)l.push(c);return n.a.createElement("nav",null,n.a.createElement("ul",{className:"pagination"},l.map(function(e){return n.a.createElement("li",{key:e,className:"page-item"},n.a.createElement("a",{onClick:function(){return r(e)},href:"#",className:"page-link"},e))})))}},136:function(e,a,t){},171:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r);t(136);var l=function(){return n.a.createElement("div",{className:"home-page-title"},n.a.createElement("h3",null,n.a.createElement("strong",null,"All your Destination in one place")),n.a.createElement("h6",null,"All you need to know about your chosen destination"))},c=t(99),i=t(101),o=t(16),m=t(1),s=t(3),u=t.n(s),E=t(15),g=t.n(E),f=t(102),d=t(104),h=(t(98),function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(!0),i=Object(m.a)(c,2),o=i[0],s=i[1],E=Object(r.useState)(!1),h=Object(m.a)(E,2),p=h[0],y=h[1],b=Object(r.useState)(1),N=Object(m.a)(b,2),v=N[0],I=N[1],R=Object(r.useState)(24),k=Object(m.a)(R,1)[0];if(Object(r.useEffect)(function(){document.title="Home Page"}),Object(r.useEffect)(function(){u.a.get("https://etour.herokuapp.com/HDp0mdCOWxaBRhELG5PUMWQnrXSkObDQBnvUhC5XsTROlI6Wz99ctDZtzRLqHuvgidz0mX3ws3K6ggPc8p21OT2jwEcbpNMDHcHrxb0EoN7al1aP8fKoSpZMyXvL9FxnkJuS2KG5r1d8YkjyYjgCj2V44GdYk6ehB7JJuqoE6wAZWe5VisNMKnFYfS40mhymtJNFb8Aq/").then(function(e){l(e.data),s(!1)}).catch(function(){s(!1),y(!0)})},[]),o)return n.a.createElement("div",{className:"allsites-loading"},n.a.createElement("img",{src:g.a,className:"loading-clockwise",alt:"Loading..."}));if(p)throw new Error("NetworkError: Please check your connection or try again later\ud83d\ude36.");var A=v*k,C=A-k,O=t.slice(C,A);return n.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},n.a.createElement("div",{className:"row"},O.map(function(e){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement(f.a,{key:e.id,id:e.id,title:e.name,imgsrc:e.image,name:e.name,shortDescription:e.short_description,price:e.price,item:e,status:e.is_featured}))}),n.a.createElement(d.a,{postPerPage:k,totalTours:t.length,paginate:function(e){return I(e)}})))});a.default=function(){return n.a.createElement("div",null,n.a.createElement(l,null),n.a.createElement(c.a,null),n.a.createElement(i.a,null),n.a.createElement(o.a,null,n.a.createElement(h,null)))}},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(2);t(97);a.a=function(){var e=Object(l.g)();return n.a.createElement("div",{className:"filters"},n.a.createElement("div",{className:"selection"},n.a.createElement("div",{className:"selection-name "},n.a.createElement("span",{className:"selection-name-weight"},"Category")),n.a.createElement("ul",{className:"unoderd-list-categories"},n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Ancient Buildings/"},"Ancient Buildings")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Beach Restaurant/"},"Beach Restaurant")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Bike Hikes/"},"Bike Hikes")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Caves/"},"Caves")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Cold Regions/"},"Cold Regions")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Cultural Regions/"},"Cultural Regions")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Desert/"},"Deserts")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Family Time Spots/"},"Family Time Spots")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Foot Hikes/"},"Foot Hikes")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Honeymoon spots/"},"Honeymoon spots")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Hot Regions/"},"Hot Regions")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Island/"},"Islands")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Mountains/"},"Mountains")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/National Parks/"},"National Parks")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Popular Cities/"},"Popular Cities")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Recreational Grounds/"},"Recreational")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Forest Region/"},"Forest Regions")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Vacation Spots/"},"Vacation Spots")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Water Falls/"},"Water Falls")),n.a.createElement("li",null,n.a.createElement("a",{href:"/category/Wildlife Region/"},"Wildlife Regions"))),n.a.createElement("div",{className:"selection-checkboxes"},n.a.createElement("ul",{className:"unoderd-list-verticla-chekboxes"},n.a.createElement("li",{className:"filter-box-title",title:"Filters"},"Filters"),n.a.createElement("li",{className:"most-visited"},n.a.createElement("button",{role:"checkbox","aria-checked":"true",onClick:function(){return e("/popular/")}},"Most Popular")),n.a.createElement("li",{className:"featured"},n.a.createElement("input",{role:"checkbox",type:"checkbox",onClick:function(){return e("/featured/")}})," Featured"))),n.a.createElement("div",{className:"region-filters"},n.a.createElement("div",{className:"region-section"},n.a.createElement("h6",null,n.a.createElement("strong",null,"Regions"))),n.a.createElement("div",{className:"region-options"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/region/Asian-pacific/"},"ASIA")),n.a.createElement("li",null,n.a.createElement("a",{href:"/region/Africa/"},"AFRICA")),n.a.createElement("li",null,n.a.createElement("a",{href:"/region/Europe/"},"EUROPE")),n.a.createElement("li",null,n.a.createElement("a",{href:"/region/North-america/"},"NORTH AMERICA")),n.a.createElement("li",null,n.a.createElement("a",{href:"/region/South-america/"},"SOUTH AMERICA")),n.a.createElement("li",null,n.a.createElement("a",{href:"/region/Australia/"},"AUSTRALIA")))))))}}}]);
//# sourceMappingURL=2.d4b288e3.chunk.js.33b86dfe0109.map