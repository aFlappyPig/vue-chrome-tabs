!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ChromeTabs",[],e):"object"==typeof exports?exports.ChromeTabs=e():t.ChromeTabs=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,r){"use strict";e.a={name:"ChromeTabs",props:{tabs:{type:Array,required:!1,default:function(){return[{title:"New Tab",icon:"",active:!0,component:""}]}},tabWidth:{type:Number,required:!1,default:230},max:{type:Number,required:!1,default:10},min:{type:Number,required:!1,default:0},showClose:{type:Boolean,required:!1,default:!0}},data:function(){return{width:this.tabWidth,tabData:{title:"New Tab",icon:"",active:!0,component:""}}},mounted:function(){this.$nextTick(function(){})},methods:{addTab:function(){if(!(this.tabs.length>=this.max)){var t=JSON.parse(JSON.stringify(this.tabs));t.forEach(function(t){return t.active=!1}),t.push(this.tabData),this.$emit("tabs-change",{type:"add",tabs:t}),this.$nextTick(function(){this.width=this.calcTabWidth()})}},closeTab:function(t,e){if(this.showClose&&!(this.tabs.length<=this.min)){var r=JSON.parse(JSON.stringify(this.tabs));r.splice(e,1),r.length>0&&(r.forEach(function(t){return t.active=!1}),r[r.length-1].active=!0),this.$emit("tabs-change",{type:"close",tabs:r}),this.$nextTick(function(){this.width=this.calcTabWidth()})}},activeTab:function(t,e){if(!this.tabs[e]||!this.tabs[e].active){var r=JSON.parse(JSON.stringify(this.tabs));r.forEach(function(t){return t.active=!1}),r[e].active=!0,this.$emit("tabs-change",{type:"active",tabs:r})}},calcTabWidth:function(){if(!this.tabs.length)return+this.width;var t=(parseInt(window.getComputedStyle(document.querySelector(".chrome-tab")).width),parseInt(window.getComputedStyle(document.querySelector(".chrome-tabs-header")).width));return t>=this.tabWidth*this.tabs.length?+this.tabWidth:+((t-70)/this.tabs.length).toFixed(2)}},computed:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(2);e.default=o.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("chrome-tabs",o.a)},function(t,e,r){"use strict";function o(t){r(3)}var a=r(0),n=r(9),i=r(8),s=o,c=i(a.a,n.a,!1,s,null,null);e.a=c.exports},function(t,e,r){var o=r(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(6)("1906d9a4",o,!0,{})},function(t,e,r){e=t.exports=r(5)(!1),e.push([t.i,".chrome-tabs{box-sizing:border-box;position:relative;font-size:10px;height:4.2em;background:linear-gradient(#dad9da,#d9d8d9);padding:1em 1.2em .45em;border-radius:.5em .5em 0 0;box-shadow:0 .05em #b7b7b7;overflow:hidden}.chrome-tabs *{box-sizing:inherit;font-family:inherit}.chrome-tabs .chrome-tabs-bottom-bar{position:absolute;bottom:0;height:.45em;left:0;width:100%;background:#f2f2f2;box-shadow:0 -.05em rgba(0,0,0,.27);z-index:20}.chrome-tabs .chrome-tabs-header{position:relative;width:100%;height:100%;overflow:hidden}.chrome-tabs .chrome-tab{position:absolute;left:0;height:2.8em;width:24em;border:0;margin:0;z-index:1}.chrome-tabs .chrome-tab,.chrome-tabs .chrome-tab *{user-select:none;cursor:default}.chrome-tabs .chrome-tab .chrome-tab-background{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none}.chrome-tabs .chrome-tab .chrome-tab-background>svg{width:100%;height:100%}.chrome-tabs .chrome-tab .chrome-tab-background>svg .chrome-tab-shadow{fill:none;stroke:rgba(0,0,0,.27);stroke-width:.5px}.chrome-tabs .chrome-tab .chrome-tab-background>svg .chrome-tab-background{fill:#d0d0d0;transform:translateX(.25px) translateY(.25px)}.chrome-tabs .chrome-tab.chrome-tab-current{z-index:999}.chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-background>svg .chrome-tab-background{fill:#f2f2f2}.chrome-tabs .chrome-tab.chrome-tab-just-added{top:10px;animation:chrome-tab-just-added .12s forwards ease-in-out}@-moz-keyframes chrome-tab-just-added{to{top:0}}@-webkit-keyframes chrome-tab-just-added{to{top:0}}@-o-keyframes chrome-tab-just-added{to{top:0}}@keyframes chrome-tab-just-added{to{top:0}}.chrome-tabs.chrome-tabs-sorting .chrome-tab:not(.chrome-tab-currently-dragged),.chrome-tabs:not(.chrome-tabs-sorting) .chrome-tab.chrome-tab-just-dragged{transition:transform .12s ease-in-out}.chrome-tabs .chrome-tab-favicon{margin-left:1.6em;height:1.6em;width:1.6em;background-size:1.6em;margin-top:.6em;z-index:3}.chrome-tabs .chrome-tab-favicon,.chrome-tabs .chrome-tab-title{position:relative;display:inline-block;vertical-align:top;pointer-events:none}.chrome-tabs .chrome-tab-title{color:#222;padding:0 .25em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:1.2em;margin-top:.7em;max-width:calc(100% - 5em)}.chrome-tabs .chrome-tab-close{position:absolute;width:1.4em;height:1.4em;border-radius:50%;z-index:2;right:1.4em;top:.7em}.chrome-tabs .chrome-tab-close:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#5a5a5a' stroke-linecap='round' stroke-width='1.125' d='M4 4 L10 10 M10 4 L4 10'></path></svg>\");position:absolute;display:block;top:0;right:0;bottom:0;left:0}.chrome-tabs .chrome-tab-close:hover:active:before,.chrome-tabs .chrome-tab-close:hover:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><path stroke='#fff' stroke-linecap='round' stroke-width='1.2' d='M4 4 L10 10 M10 4 L4 10'></path></svg>\")}.chrome-tabs .chrome-tab-close:hover{background:#e25c4b}.chrome-tabs .chrome-tab-close:hover:active{background:#b74a3b}.chrome-tabs .chrome-tab{width:243px}.chrome .chrome-tabs-content{width:100%;height:200px}",""])},function(t,e){function r(t,e){var r=t[1]||"",a=t[3];if(!a)return r;if(e&&"function"==typeof btoa){var n=o(a);return[r].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([n]).join("\n")}return[r].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=r(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var n=this[a][0];"number"==typeof n&&(o[n]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(t,e,r){function o(t){for(var e=0;e<t.length;e++){var r=t[e],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(n(r.parts[a]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(n(r.parts[a]));d[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function n(t){var e,r,o=document.querySelector("style["+g+'~="'+t.id+'"]');if(o){if(b)return f;o.parentNode.removeChild(o)}if(v){var n=m++;o=l||(l=a()),e=i.bind(null,o,n,!1),r=i.bind(null,o,n,!0)}else o=a(),e=s.bind(null,o),r=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else r()}}function i(t,e,r,o){var a=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var n=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}function s(t,e){var r=e.css,o=e.media,a=e.sourceMap;if(o&&t.setAttribute("media",o),p.ssrId&&t.setAttribute(g,e.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var h=r(7),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,m=0,b=!1,f=function(){},p=null,g="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r,a){b=r,p=a||{};var n=h(t,e);return o(n),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a],s=d[i.id];s.refs--,r.push(s)}e?(n=h(t,e),o(n)):n=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var w=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],o={},a=0;a<e.length;a++){var n=e[a],i=n[0],s=n[1],c=n[2],h=n[3],d={id:t+":"+a,css:s,media:c,sourceMap:h};o[i]?o[i].parts.push(d):r.push(o[i]={id:i,parts:[d]})}return r}},function(t,e){t.exports=function(t,e,r,o,a,n){var i,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,s=t.default);var h="function"==typeof s?s.options:s;e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0),r&&(h.functional=!0),a&&(h._scopeId=a);var d;if(n?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=d):o&&(d=o),d){var u=h.functional,l=u?h.render:h.beforeCreate;u?(h._injectStyles=d,h.render=function(t,e){return d.call(e),l(t,e)}):h.beforeCreate=l?[].concat(l,d):[d]}return{esModule:i,exports:s,options:h}}},function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chrome"},[r("div",{staticClass:"chrome-tabs"},[r("div",{staticClass:"chrome-tabs-header",on:{dblclick:function(e){if(e.target!==e.currentTarget)return null;t.addTab()}}},t._l(t.tabs,function(e,o){return r("div",{key:o,staticClass:"chrome-tab",class:{"chrome-tab-current":e.active},style:{width:t.width+"px",transform:"translate3d("+o*(t.width-10)+"px, 0, 0)"},attrs:{title:e.title},on:{click:function(r){if(r.target!==r.currentTarget)return null;t.activeTab(e,o)}}},[r("div",{staticClass:"chrome-tab-background"},[r("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("symbol",{attrs:{id:"chrome-tab-geometry-left",viewBox:"0 0 214 29"}},[r("path",{attrs:{d:"M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z"}})]),t._v(" "),r("symbol",{attrs:{id:"chrome-tab-geometry-right",viewBox:"0 0 214 29"}},[r("use",{attrs:{"xlink:href":"#chrome-tab-geometry-left"}})]),t._v(" "),r("clipPath",{attrs:{id:"crop"}},[r("rect",{staticClass:"mask",attrs:{width:"100%",height:"100%",x:"0"}})])]),t._v(" "),r("svg",{attrs:{width:"50%",height:"100%"}},[r("use",{staticClass:"chrome-tab-background",attrs:{"xlink:href":"#chrome-tab-geometry-left",width:"214",height:"29"}}),t._v(" "),r("use",{staticClass:"chrome-tab-shadow",attrs:{"xlink:href":"#chrome-tab-geometry-left",width:"214",height:"29"}})]),t._v(" "),r("g",{attrs:{transform:"scale(-1, 1)"}},[r("svg",{attrs:{width:"50%",height:"100%",x:"-100%",y:"0"}},[r("use",{staticClass:"chrome-tab-background",attrs:{"xlink:href":"#chrome-tab-geometry-right",width:"214",height:"29"}}),t._v(" "),r("use",{staticClass:"chrome-tab-shadow",attrs:{"xlink:href":"#chrome-tab-geometry-right",width:"214",height:"29"}})])])])]),t._v(" "),r("div",{staticClass:"chrome-tab-favicon",style:{backgroundImage:"url("+e.icon+")"}}),t._v(" "),r("div",{staticClass:"chrome-tab-title"},[t._v(t._s(e.title))]),t._v(" "),t.showClose?r("div",{staticClass:"chrome-tab-close",on:{click:function(r){if(r.target!==r.currentTarget)return null;t.closeTab(e,o)}}}):t._e()])})),t._v(" "),r("div",{staticClass:"chrome-tabs-bottom-bar"})]),t._v(" "),t._l(t.tabs,function(t,e){return r("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"tab.active"}],key:e,staticClass:"chrome-tabs-content"},[r(t.component,{tag:"component"})],1)})],2)},a=[],n={render:o,staticRenderFns:a};e.a=n}])});
//# sourceMappingURL=vue-chrome-tabs.js.map