(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{196:function(t,s,n){"use strict";var o=n(4),e=n(16),a=n(15),c=n(76),r=n(74),i=n(6),l=n(99).f,d=n(98).f,f=n(9).f,u=n(97).trim,v=o.Number,g=v,p=v.prototype,m="Number"==a(n(75)(p)),C="trim"in String.prototype,h=function(t){var s=r(t,!1);if("string"==typeof s&&s.length>2){var n,o,e,a=(s=C?s.trim():u(s,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(s.charCodeAt(1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+s}for(var c,i=s.slice(2),l=0,d=i.length;l<d;l++)if((c=i.charCodeAt(l))<48||c>e)return NaN;return parseInt(i,o)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof v&&(m?i(function(){p.valueOf.call(n)}):"Number"!=a(n))?c(new g(h(s)),n,v):h(s)};for(var _,w=n(8)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)e(g,_=w[b])&&!e(v,_)&&f(v,_,d(g,_));v.prototype=p,p.constructor=v,n(11)(o,"Number",v)}},200:function(t,s,n){},201:function(t,s,n){},209:function(t,s,n){"use strict";var o=n(200);n.n(o).a},210:function(t,s,n){"use strict";var o=n(3),e=n(77)(!0);o(o.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(100)("includes")},211:function(t,s,n){"use strict";var o=n(3),e=n(212);o(o.P+o.F*n(213)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},212:function(t,s,n){var o=n(78),e=n(17);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(e(t))}},213:function(t,s,n){var o=n(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},214:function(t,s,n){"use strict";var o=n(201);n.n(o).a},221:function(t,s,n){"use strict";n(14),n(25),n(54),n(196);var o={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},e=(n(209),n(1)),a=Object(e.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"7d87a782",null);s.a=a.exports},222:function(t,s,n){"use strict";var o=n(10),e=(n(196),n(210),n(211),n(25),n(14),n(20),n(26),function(t){var s=Object.keys(t),n=!0;return s.forEach(function(t){["span","offset"].includes(t)||(n=!1)}),n}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,e=this.narrowPc,a=this.pc,c=this.widePc,r=this.createClasses;return Object(o.a)(r({span:t,offset:s})).concat(Object(o.a)(r(n,"ipad-")),Object(o.a)(r(e,"narrow-pc-")),Object(o.a)(r(a,"pc-")),Object(o.a)(r(c,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},c=(n(214),n(1)),r=Object(c.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"db271958",null);s.a=r.exports},230:function(t,s,n){},252:function(t,s,n){"use strict";var o=n(230);n.n(o).a},276:function(t,s,n){"use strict";n.r(s);n(96);var o=n(221),e=n(222),a={components:{GRow:o.a,GCol:e.a},data:function(){return{content:'\n* {\n    box-sizing: border-box;\n}\n<g-row class="demoRow" gutter="10">\n    <g-col span="8">\n        <div class="demoCol">8</div>\n    </g-col>\n    <g-col span="8">\n        <div class="demoCol">8</div>\n    </g-col>\n</g-row>\n<g-row class="demoRow" gutter="10">\n    <g-col span="6" offset="6">\n        <div class="demoCol">6</div>\n    </g-col>\n    <g-col span="6" offset="6">\n        <div class="demoCol">6</div>\n    </g-col>\n</g-row>\n<g-row class="demoRow" gutter="10">\n    <g-col span="4">\n        <div class="demoCol">4</div>\n    </g-col>\n    <g-col span="4" offset="4">\n        <div class="demoCol">4</div>\n    </g-col>\n    <g-col span="4" offset="8">\n        <div class="demoCol">4</div>\n    </g-col>\n</g-row>\n<g-row class="demoRow" gutter="10">\n    <g-col span="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n    <g-col span="2" offset="2">\n        <div class="demoCol">2</div>\n    </g-col>\n</g-row>\n'.trim()}}},c=(n(252),n(1)),r=Object(c.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"54fe09c0",null);s.default=r.exports}}]);