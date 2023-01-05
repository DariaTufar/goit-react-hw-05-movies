"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[671],{7047:function(e,r,t){t.d(r,{e:function(){return h}});var n,a,o=t(1087),s=t(7689),u=t(168),c=t(6444),i=c.ZP.ul(n||(n=(0,u.Z)(["\n  padding-left: 100px;\n  padding-top: 20px;\n"]))),p=c.ZP.li(a||(a=(0,u.Z)(["\n  padding-bottom: ",";\n  :hover {\n    color: ",";\n    font-weight: bold;\n  }\n"])),(function(e){return e.theme.sizes.m}),(function(e){return e.theme.colors.bgAccent})),f=t(184),h=function(e){var r=e.movies,t=(0,s.TH)();return(0,f.jsx)("div",{children:(0,f.jsx)(i,{children:r.map((function(e){return(0,f.jsx)(p,{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})})}},5001:function(e,r,t){t.d(r,{M1:function(){return d},NV:function(){return p},TP:function(){return h},UF:function(){return c},tx:function(){return v}});var n=t(5861),a=t(7757),o=t.n(a),s=t(3263),u="e994a62a86f0219af0993364e0b8b3fc";function c(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(u));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},1671:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n,a=t(5861),o=t(9439),s=t(7757),u=t.n(s),c=t(2791),i=t(5001),p=t(7596),f=t(7047),h=t(168),l=t(6444).ZP.h1(n||(n=(0,h.Z)(["\n  padding-left: ",";\n  font-size: ",";\n  text-transform: uppercase;\n"])),(function(e){return e.theme.sizes.xl}),(function(e){return e.theme.sizes.l})),d=t(184),w=function(){var e=(0,c.useState)([]),r=(0,o.Z)(e,2),t=r[0],n=r[1];return(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.UF)();case 3:r=e.sent,n(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,p.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,d.jsxs)("main",{children:[(0,d.jsx)(l,{children:"Trending today"}),(0,d.jsx)(f.e,{movies:t})]})}}}]);
//# sourceMappingURL=671.dcaa292f.chunk.js.map