(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-AboutUs-index"],{2872:function(t,e,r){"use strict";var n=r("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("c964")),i=n(r("bbe6")),a={data:function(){return{AboutUs:{},partnerList:[]}},onLoad:function(){uni.setNavigationBarTitle({title:"益课后-关于我们"}),this.init(),this.partner()},methods:{init:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.postJson("Article",{cate:1,limit:1});case 2:r=e.sent,0==r.code&&(t.AboutUs=r.data.data[0]);case 4:case"end":return e.stop()}}),e)})))()},partner:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.postJson("advertising",{position_id:2});case 2:r=e.sent,0==r.code&&(t.partnerList=r.data);case 4:case"end":return e.stop()}}),e)})))()}}};e.default=a},"37f3":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"#AboutUsIndex .AboutUsTitle[data-v-aa172ed0]{padding:%?55?% 0 %?52?%;font-size:%?30?%;color:#000;font-weight:700;text-align:center}#AboutUsIndex .AboutUsCoverImg[data-v-aa172ed0]{width:%?574?%;height:%?450?%;display:block;background:#000;margin:auto}#AboutUsIndex .AboutUsDetail[data-v-aa172ed0]{margin:%?53?% 0 %?15?%}#AboutUsIndex .AboutUsPartner[data-v-aa172ed0]{width:100%;box-sizing:border-box;padding:0 %?22?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}#AboutUsIndex .AboutUsPartner li[data-v-aa172ed0]{width:%?268?%;margin-left:%?94?%}#AboutUsIndex .AboutUsPartner li[data-v-aa172ed0]:nth-child(2n+1){margin:0}#AboutUsIndex .AboutUsPartner li uni-image[data-v-aa172ed0]{width:100%;height:%?132?%;box-shadow:0 0 %?20?% #ececec}#AboutUsIndex .AboutUsPartner li p[data-v-aa172ed0]{text-align:center;margin:%?27?% 0 %?46?%}",""]),t.exports=e},"4ad8":function(t,e,r){"use strict";var n=r("cb28"),o=r.n(n);o.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(C([])));w&&w!==n&&o.call(w,a)&&(g=w);var m=A.prototype=_.prototype=Object.create(g);L.prototype=m.constructor=A,A.constructor=L,A[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},U(E.prototype),E.prototype[u]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},U(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=k(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function A(){}function U(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function k(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9839:function(t,e,r){"use strict";r.r(e);var n=r("9c88"),o=r("a89a");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("4ad8");var a,u=r("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"aa172ed0",null,!1,n["a"],a);e["default"]=c.exports},"9c88":function(t,e,r){"use strict";var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{attrs:{id:"AboutUsIndex"}},[r("v-uni-view",{staticClass:"top_height"}),r("page_head"),r("v-uni-view",{staticClass:"bg_height"}),r("v-uni-view",{staticClass:"content"},[r("p",{staticClass:"AboutUsTitle"},[t._v(t._s(t.AboutUs.title))]),r("v-uni-image",{staticClass:"AboutUsCoverImg",attrs:{src:t.AboutUs.img,mode:""}}),r("v-uni-view",{staticClass:"AboutUsDetail",domProps:{innerHTML:t._s(t.AboutUs.content)}},[t._v(t._s(t.AboutUs.content))]),r("p",{staticClass:"AboutUsTitle"},[t._v("合作伙伴")]),r("ul",{staticClass:"AboutUsPartner"},t._l(t.partnerList,(function(e,n){return r("li",{key:n},[r("v-uni-image",{attrs:{src:e.img,mode:""}}),r("p",{staticClass:"ellipse"},[t._v(t._s(e.title))])],1)})),0)],1),r("v-uni-view",{staticClass:"bottom_height"}),r("page_footer")],1)},i=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},a89a:function(t,e,r){"use strict";r.r(e);var n=r("2872"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}},cb28:function(t,e,r){var n=r("37f3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("0d681342",n,!0,{sourceMap:!1,shadowMode:!1})}}]);