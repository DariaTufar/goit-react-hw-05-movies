"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[506],{5001:function(e,r,t){t.d(r,{M1:function(){return d},NV:function(){return f},TP:function(){return l},UF:function(){return c},tx:function(){return x}});var n=t(5861),s=t(7757),o=t.n(s),i=t(3263),a="e994a62a86f0219af0993364e0b8b3fc";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day?api_key=".concat(a));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(r,"?api_key=").concat(a));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(r,"/credits?api_key=").concat(a));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(a));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"},4506:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n,s,o,i,a,c,u,f,h=t(5861),l=t(9439),p=t(7757),d=t.n(p),m=t(1087),x=t(7689),v=t(6036),g=t(168),w=t(6444),y=(0,w.ZP)(m.rU)(n||(n=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: ",";\n  padding: ",";\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-left: ",";\n  margin-bottom: ",";\n  border-radius: ",";\n  border: ",";\n\n  :hover {\n    color: ",";\n    font-weight: bold;\n \n  }\n"])),(function(e){return e.theme.sizes.xxs}),(function(e){return e.theme.sizes.s}),(function(e){return e.theme.sizes.xxl}),(function(e){return e.theme.sizes.l}),(function(e){return e.theme.radii.md}),(function(e){return e.theme.borders.primary}),(function(e){return e.theme.colors.textAccent})),b=t(184),k=function(e){var r=e.to,t=e.children;return(0,b.jsxs)(y,{to:r,children:[(0,b.jsx)(v.ly8,{size:"36",color:"blue"}),t]})},Z=t(2791),j=t(7596),_=t(5001),z=t(1708),S=t(7793),q=w.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  gap: ",";\n  padding-left: ",";\n"])),(function(e){return e.theme.sizes.l}),(function(e){return e.theme.sizes.xxl})),E=w.ZP.img(o||(o=(0,g.Z)(["\n  width: 700px;\n  border-radius: ",";\n"])),(function(e){return e.theme.radii.md})),P=w.ZP.h2(i||(i=(0,g.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.sizes.l}),(function(e){return e.theme.sizes.m})),U=w.ZP.p(a||(a=(0,g.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.sizes.m}),(function(e){return e.theme.sizes.m})),A=w.ZP.h3(c||(c=(0,g.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.sizes.m}),(function(e){return e.theme.sizes.m})),C=w.ZP.div(u||(u=(0,g.Z)(["\n  padding: ",";\n  border-bottom: solid ",";\n"])),(function(e){return e.theme.sizes.xl}),(function(e){return e.theme.colors.bgAccent})),T=w.ZP.li(f||(f=(0,g.Z)(["\n  padding: ",";\n  font-size: ",";\n  :hover {\n    text-decoration: underline;\n    color: ",";\n    font-weight: bold;\n  }\n"])),(function(e){return e.theme.sizes.s}),(function(e){return e.theme.sizes.l}),(function(e){return e.theme.colors.bgAccent})),F=function(){var e,r,t=null!==(e=null===(r=(0,x.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",n=(0,x.UO)().movieId,s=(0,Z.useState)([]),o=(0,l.Z)(s,2),i=o[0],a=o[1];return(0,Z.useEffect)((function(){function e(){return(e=(0,h.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.TP)(n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,j.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,b.jsxs)("main",{children:[(0,b.jsx)(k,{to:t,children:"Go back"}),(0,b.jsxs)(q,{children:[(0,b.jsx)("div",{children:(0,b.jsx)(E,{src:i.poster_path?"https://image.tmdb.org/t/p/w300"+i.poster_path:z,alt:i.title})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(P,{children:[i.title," (",i.release_date?i.release_date.slice(0,4):" Sorry, year unknown",")"]}),(0,b.jsxs)(U,{children:["User Score:"," ",i.vote_average?Math.floor(10*i.vote_average).toFixed(0):"","%"]}),(0,b.jsx)(A,{children:" Overview"}),(0,b.jsx)(U,{children:i.overview}),(0,b.jsx)(A,{children:"Genres"}),(0,b.jsx)(U,{children:i.genres?i.genres.map((function(e){return e.name})).join(" "):"Sorry, genre is not specified"})]})]}),(0,b.jsxs)(C,{children:[(0,b.jsx)(P,{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)(T,{children:(0,b.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)(T,{children:(0,b.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,b.jsx)(Z.Suspense,{fallback:(0,b.jsx)(S.a,{}),children:(0,b.jsx)(x.j3,{})})]})}},1708:function(e,r,t){e.exports=t.p+"static/media/no_image_filmstrip.cce2c07f3b2fefc1f902.png"}}]);
//# sourceMappingURL=506.40426bdc.chunk.js.map