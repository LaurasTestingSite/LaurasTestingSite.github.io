(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{18:function(t,n,e){e("GcxT"),t.exports=e("nOHt")},"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),o=e.n(r),a=e("HaE+"),u=e("1OyB"),c=e("vuIU"),i=e("Ji7U"),p=e("md7G"),s=e("foSv"),f=e("q1tI"),l=e.n(f),h=e("8Bbg"),v=e.n(h),g=e("zCU7"),d=e.n(g),y=(e("X7F+"),e("9RFW"),l.a.createElement);function P(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(s.a)(t);if(n){var o=Object(s.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(p.a)(this,e)}}var b=function(t){Object(i.a)(e,t);var n=P(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(c.a)(e,[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return y(h.Container,null,y(n,e))}}],[{key:"getInitialProps",value:function(){var t=Object(a.a)(o.a.mark((function t(n){var e,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.Component,r=n.ctx,a={},!e.getInitialProps){t.next=6;break}return t.next=5,e.getInitialProps(r);case 5:a=t.sent;case 6:return t.abrupt("return",d.a.fetch('\n  *[_id == "global-config"] {\n    ...,\n    logo {asset->{extension, url}},\n    mainNavigation[] -> {\n      ...,\n      "title": page->title\n    },\n    footerNavigation[] -> {\n      ...,\n      "title": page->title\n    }\n  }[0]\n  ').then((function(t){return t?(t&&a&&(a.config=t),{pageProps:a}):{pageProps:a}})));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}]),e}(v.a);n.default=b},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},B5Ud:function(t,n,e){"use strict";var r=e("vJKn"),o=e("/GRZ"),a=e("i2R6"),u=e("48fX"),c=e("tCBg"),i=e("T0f4"),p=e("qVT1");function s(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=i(t);if(n){var o=i(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}var f=e("AroE");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=y,n.default=void 0;var l=f(e("q1tI")),h=e("g/15");function v(t){return g.apply(this,arguments)}function g(){return(g=p(r.mark((function t(n){var e,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,o=n.ctx,t.next=3,(0,h.loadGetInitialProps)(e,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n.AppInitialProps=h.AppInitialProps;var d=function(t){u(e,t);var n=s(e);function e(){return o(this,e),n.apply(this,arguments)}return a(e,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(l.default.createElement(e,Object.assign({},r,o||a?{}:{url:y(n)})))}}]),e}(l.default.Component);function y(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=d,d.origGetInitialProps=v,d.getInitialProps=v},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])}},[[18,1,2,0,3,7]]]);