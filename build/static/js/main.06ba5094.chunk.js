(this["webpackJsonpunsplach-project"]=this["webpackJsonpunsplach-project"]||[]).push([[0],{265:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),s=n(17),i=n(22),o=n.n(i),l=n(39),u=n(78),h=n.n(u),j=n(3),p=function(e){var t=e.urls,n=e.handleClick;return Object(j.jsx)("li",{className:"img",onClick:function(){return n(t.regular)},children:Object(j.jsx)("img",{src:t.small,alt:"Picsum photo",width:"250"})})},d="https://api.unsplash.com",b="OLtR-i0lLbEb2BAm8mzp8U9kNC8KuIwuCph7BUmrkG0",O=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/photos?per_page=10"),{headers:{Authorization:"Client-ID ".concat(b)}});case 3:if((t=e.sent).ok){e.next=7;break}return console.error(t.statusText),e.abrupt("return");case 7:return e.next=9,t.json();case 9:return n=e.sent,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(d,"/search/photos"))).search=new URLSearchParams({per_page:30,query:t}),e.prev=2,e.next=5,fetch(n,{headers:{Authorization:"Client-ID ".concat(b)}});case 5:if((r=e.sent).ok){e.next=9;break}return console.error(r.statusText),e.abrupt("return");case 9:return e.next=11,r.json();case 11:return a=e.sent,e.abrupt("return",a.results);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),x=n(113),f=n.n(x),m={content:{border:"none",padding:"none",overflow:"none"}},v=function(e){var t=e.query,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(null),d=Object(s.a)(u,2),b=d[0],x=d[1];return Object(r.useEffect)((function(){O().then((function(e){i(e)}))}),[]),Object(r.useEffect)(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,g(t);case 4:n=e.sent,i(n);case 6:case"end":return e.stop()}}),e)}))),[t]),h.a.setAppElement("#app"),Object(j.jsxs)("div",{children:[Object(j.jsx)(h.a,{contentLabel:"Image preview",style:m,isOpen:!!b,onRequestClose:function(){return x(null)},children:Object(j.jsx)("img",{className:"img-preview",src:b,alt:"image preview"})}),0===c.length?Object(j.jsx)("h2",{children:"No images found"}):null,Object(j.jsx)(f.a,{className:"grid-container",options:{isFitWidth:!0},children:c.map((function(e){return Object(j.jsx)(p,{urls:e.urls,handleClick:x},e.id)}))})]})},w=n(311),k=n(312),y=n(306),C=n(44),N=n(315),I=n(316),S=n(314),L=n(119),R=n.n(L),z=n(120),T=n.n(z),D=n(305),E=n(304),U=n(317),q=n(43),B=n(301),M=n(15),P=Object(B.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},nav:{display:"flex",alignItems:"center",marginRight:1.2,fontSize:"14px",fontWeight:550},navbar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:1},left:{display:"flex",alignItems:"center"},logo:{color:"#000"},navSearchForm:{marginLeft:1},categoryNav:{display:"flex",paddingLeft:.6,overflow:"hidden"},category:{padding:.8},grow:{flexGrow:1},search:Object(q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(M.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(M.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(q.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(q.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),A=(n(260),n(307)),G=n(308),W=n(309),F=n(310),J=n(313),_=n(121),H={palette:{type:"light"}},K={palette:{type:"dark"}},Q=function(e){var t=e.input,n=e.setInput,c=P(),i=Object(r.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1],h=a.a.useState(!0),p=Object(s.a)(h,2),d=p[0],b=(p[1],a.a.useState(null)),O=Object(s.a)(b,2),g=O[0],x=O[1],f=a.a.useState(null),m=Object(s.a)(f,2),v=m[0],L=m[1],z=function(){u(!l)},q=Boolean(g),B=Boolean(v),M=function(){L(null)},Q=function(){x(null),M()},V=Object(j.jsxs)(S.a,{anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:q,onClose:Q,children:[Object(j.jsx)(I.a,{onClick:Q,children:"Profile"}),Object(j.jsx)(I.a,{onClick:Q,children:"My account"})]}),X="primary-search-account-menu-mobile",Y=Object(j.jsx)(S.a,{anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"right"},id:X,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:B,onClose:M,children:Object(j.jsx)(I.a,{children:Object(j.jsx)(E.a,{children:Object(j.jsx)(D.a,{control:Object(j.jsx)(U.a,{checked:l,onChange:z,"aria-label":"login switch"}),label:d?"Light":"Dark"})})})});return Object(j.jsxs)(A.a,{theme:l?Object(_.a)(K):Object(_.a)(H),children:[Object(j.jsx)(G.a,{}),Object(j.jsxs)(W.a,{children:[Object(j.jsx)(F.a,{children:Object(j.jsx)(C.a,{variant:"body1"})}),Object(j.jsxs)("div",{className:c.grow,children:[Object(j.jsx)(w.a,{position:"static",color:"default",children:Object(j.jsxs)(k.a,{children:[Object(j.jsx)(C.a,{className:c.logo,variant:"h6",noWrap:!0,children:"Unsplash"}),Object(j.jsxs)("div",{className:c.search,children:[Object(j.jsx)("div",{className:c.searchIcon,children:Object(j.jsx)(R.a,{})}),Object(j.jsx)(N.a,{placeholder:"Search\u2026",classes:{root:c.inputRoot,input:c.inputInput},value:t,onChange:function(e){return n(e.target.value)},inputProps:{"aria-label":"search"}})]}),Object(j.jsx)("div",{className:c.grow}),Object(j.jsx)("div",{className:c.sectionDesktop,children:Object(j.jsx)(J.a,{action:Object(j.jsx)(E.a,{children:Object(j.jsx)(D.a,{control:Object(j.jsx)(U.a,{checked:l,onChange:z}),label:"Dark Theme"})})})}),Object(j.jsx)("div",{className:c.sectionMobile,children:Object(j.jsx)(y.a,{"aria-label":"show more","aria-controls":X,"aria-haspopup":"true",onClick:function(e){L(e.currentTarget)},color:"inherit",children:Object(j.jsx)(T.a,{})})})]})}),Y,V]})]})]})},V=Object(B.a)((function(e){return{hero:{minHeight:"50vh",background:'url("/assets/hero.jpg"})',width:"100%"},media:{height:10,paddingTop:"56.25%"},heroContainer:{maxWidth:"60%",backgroundImage:'url("/assets/hero.jpg"})',margin:"auto"},heroContent:{height:"600px",display:"flex",backgroundImage:'url("/assets/hero.jpg"})',flexDirection:"column",justifyContent:"center"}}})),X=function(e){var t=e.input,n=e.setInput,r=V();return Object(j.jsxs)("div",{className:r.hero,children:[Object(j.jsx)("div",{className:r.heroContainer,children:Object(j.jsxs)("div",{className:r.heroContent,children:[Object(j.jsx)("h1",{children:"Unsplash"}),Object(j.jsx)("p",{children:"The internet\u2019s source of freely useable images. Powered by creators everywhere."}),Object(j.jsx)("div",{className:r.heroSearchForm,children:Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search free high-resolution photos",value:t,onChange:function(e){return n(e.target.value)}})})}),Object(j.jsx)("div",{className:r.trendingSearchTags,class:"trending-search-tags",children:Object(j.jsxs)("p",{children:["Trending searches: ",Object(j.jsx)("a",{href:"#",children:"flower"}),", ",Object(j.jsx)("a",{href:"#",children:"wallpaper"}),", ",Object(j.jsx)("a",{href:"#",children:"sad"}),", ",Object(j.jsx)("a",{href:"#",children:"love"})]})})]})}),Object(j.jsx)("div",{className:r.heroOverlay,class:"hero-overlay"})]})},Y=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(Q,{input:n,setInput:a}),Object(j.jsx)(X,{input:n,setInput:a}),Object(j.jsx)(v,{query:n})]})};Object(c.render)(Object(j.jsx)(Y,{}),document.querySelector("#img"))}},[[265,1,2]]]);
//# sourceMappingURL=main.06ba5094.chunk.js.map