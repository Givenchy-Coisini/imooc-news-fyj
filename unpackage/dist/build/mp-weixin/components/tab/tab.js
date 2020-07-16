(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{"298a":function(n,t,e){"use strict";e.r(t);var a=e("d956"),u=e("8f81");for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("a926");var c,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports},"501b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(n){this.activeIndex=n}},data:function(){return{activeIndex:0}},methods:{clicktab:function(n,t){this.activeIndex=t,this.$emit("tab",{data:n,index:t})},openCollect:function(){n.navigateTo({url:"/pages/home-label/home-label"})}}};t.default=e}).call(this,e("543d")["default"])},"8f81":function(n,t,e){"use strict";e.r(t);var a=e("501b"),u=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);t["default"]=u.a},"9da3":function(n,t,e){},a926:function(n,t,e){"use strict";var a=e("9da3"),u=e.n(a);u.a},d956:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"5570"))}},u=function(){var n=this,t=n.$createElement;n._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("298a"))
        })
    },
    [['components/tab/tab-create-component']]
]);
