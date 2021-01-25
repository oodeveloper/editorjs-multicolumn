!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Paragraph=t():e.Paragraph=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n(1).toString();
/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
var i=function(){function e(t){var n=t.data,r=t.config,a=t.api,i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=a,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=r.placeholder?r.placeholder:e.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==r.preserveBlank&&r.preserveBlank,this.data=n,this.col=n.col?n.col:"12",this.pt=n.pt?n.pt:"0",this.pr=n.pr?n.pr:"0",this.pb=n.pb?n.pb:"0",this.pl=n.pl?n.pl:"0"}return a(e,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),a(e,[{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e.contentEditable=!1,e.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(e.contentEditable=!0,e.addEventListener("keyup",this.onKeyUp)),e}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var t={text:this.data.text+e.text};this.data=t}},{key:"validate",value:function(e){return!(""===e.text.trim()&&!this._preserveBlank)}},{key:"rendered",value:function(){var e=this._element.parentNode.parentNode;e.classList.add("col-"+this.col),e.classList.add("pt-"+this.pt),e.classList.add("pr-"+this.pr),e.classList.add("pb-"+this.pb),e.classList.add("pl-"+this.pl)}},{key:"_getCol",value:function(){var e=12,t="col-12",n=this._element.parentNode.parentNode,r=new RegExp(/\bcol-.+?\b/,"g");if(n.className.match(r)){n.classList.forEach((function(e){e.match(r)&&(t=e)}));var a=t.split("-");e=parseInt(a[1])}return e}},{key:"_getPadding",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"l",t=0,n="p"+e+"-0",r=this._element.parentNode.parentNode,a=new RegExp(/\pl-.+?\b/,"g"),i=new RegExp(/\pr-.+?\b/,"g"),o=new RegExp(/\pt-.+?\b/,"g"),c=new RegExp(/\pb-.+?\b/,"g");if("l"==e){if(r.className.match(a)){r.classList.forEach((function(e){e.match(a)&&(n=e)}));var s=n.split("-");t=parseInt(s[1])}}else if("r"==e){if(r.className.match(i)){r.classList.forEach((function(e){e.match(i)&&(n=e)}));var l=n.split("-");t=parseInt(l[1])}}else if("t"==e){if(r.className.match(o)){r.classList.forEach((function(e){e.match(o)&&(n=e)}));var u=n.split("-");t=parseInt(u[1])}}else if("b"==e&&r.className.match(c)){r.classList.forEach((function(e){e.match(c)&&(n=e)}));var p=n.split("-");t=parseInt(p[1])}return t}},{key:"save",value:function(e){return{text:e.innerHTML,col:this._getCol(),pt:this._getPadding("t"),pr:this._getPadding("r"),pb:this._getPadding("b"),pl:this._getPadding("l")}}},{key:"onPaste",value:function(e){var t={text:e.detail.data.innerHTML};this.data=t}},{key:"data",get:function(){var e=this._element.innerHTML;return this._data.text=e,this._data},set:function(e){this._data=e||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),e}();e.exports=i},function(e,t,n){var r=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var p=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(d)):o.push({identifier:u,updater:g(d,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(e,t){var n,r,a;if(t.singleton){var i=v++;n=h||(h=l(t)),r=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else n=l(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);o[a].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])}));