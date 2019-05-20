!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var r=n(5);e.a=Object(r.a)({coordinateKey:"y",dimensionKey:"height"})},function(t,e,n){"use strict";var r=n(5);e.a=Object(r.a)({coordinateKey:"x",dimensionKey:"width"})},function(t,e){t.exports=require("sketch/settings")},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const r=20,o=15;function i(t){return function({width:e,y:n,value:i,placeholder:u}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,e,r)),f=null==i?"":`${i}`;return c.setStringValue(f),u&&c.setPlaceholderString(u),{view:c,height:r+o,retrieveValue:function(){const e=`${c.stringValue()}`;return t?t(e):e}}}}},function(t,e){t.exports=require("sketch/dom")},function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return f}),n.d(r,"DROP_DOWN",function(){return l}),n.d(r,"RADIO_BUTTONS",function(){return p}),n.d(r,"NUMERIC_TEXT_BOX",function(){return _.a}),n.d(r,"TEXT_BOX",function(){return v});var o=n(2);function i(t){const e={};return function t(e,n,r){Object.keys(e).forEach(function(o){const i=[n,o].filter(Boolean).join("."),u=e[o];"object"!=typeof u||null===u||Array.isArray(u)?r[i]=e[o]:t(u,i,r)})}(t,null,e),e}const u=20,c=10;function f({width:t,y:e,label:n,value:r}){const o=NSButton.alloc().initWithFrame(NSMakeRect(0,e,t,u));return o.setButtonType(NSSwitchButton),o.setBezelStyle(0),o.setState(r?NSOnState:NSOffState),o.setTitle(n),{view:o,height:u+c,retrieveValue:function(){return"1"==o.stringValue()}}}const s=20,a=15;function l({width:t,y:e,value:n,possibleValues:r}){const o=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,e,t,s));r.forEach(function(t){o.addItemWithTitle(`${t}`)});const i=void 0!==n?r.indexOf(n):0;return o.selectItemAtIndex(i),{view:o,height:s+a,retrieveValue:function(){const t=o.indexOfSelectedItem();return r[t]}}}const d=20,O=10;function p({width:t,y:e,value:n,possibleValues:r}){const o=NSButtonCell.alloc().init();o.setButtonType(NSRadioButton);const i=r.length,u=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,e,t,d),NSRadioModeMatrix,o,1,i);u.setCellSize(CGSizeMake(Math.floor(t/i),d)),u.cells().forEach(function(t,e){t.setTitle(r[e])});const c=void 0!==n?r.indexOf(n):0;return u.selectCellAtRow_column(0,c),{view:u,height:d+O,retrieveValue:function(){const t=u.cells().indexOfObject(u.selectedCell());return r[t]}}}var _=n(7),b=n(3);const v=Object(b.a)();n(6);m(o.setSettingForKey),m(o.setSessionVariable);function m(t){return function(e){if(!e)return;const n=i(e);Object.keys(n).forEach(function(e){const r=n[e];null!=r&&t(e,r)})}}n(8),n(9);var h=n(10);n(4);function y(){const t=NSApplication.sharedApplication().orderedDocuments();return Object(h.fromNative)(t[0])}function j(){return y().selectedLayers.layers.reverse()}function x(t){!function t(e,n){const r=e.parent;r&&"Group"===r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,t(r,n))}(t,{})}function S({coordinateKey:t,dimensionKey:e}){return function({coordinateOffset:n,dimensionOffset:r}){return function(){const o=j();o.forEach(function(o){const i=o.frame;i[t]+=n,i[e]+=r}),o.forEach(x)}}}n.d(e,"a",function(){return S})},function(t,e){t.exports=require("sketch/ui")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(t,e){t.exports=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,n){"use strict";const r=async(t,e)=>{let n=0;for(const r of t)await e(await r,n++);return t};t.exports=r,t.exports.default=r},function(t,e){t.exports=require("sketch")},function(t,e,n){t.exports=n(12)},function(t,e,n){t.exports={"resize-up/top-1":n(13).default,"resize-up/top-10":n(14).default,"resize-up/bottom-1":n(15).default,"resize-up/bottom-10":n(16).default,"resize-up/left-1":n(17).default,"resize-up/left-10":n(18).default,"resize-up/right-1":n(19).default,"resize-up/right-10":n(20).default,"resize-down/top-1":n(21).default,"resize-down/top-10":n(22).default,"resize-down/bottom-1":n(23).default,"resize-down/bottom-10":n(24).default,"resize-down/left-1":n(25).default,"resize-down/left-10":n(26).default,"resize-down/right-1":n(27).default,"resize-down/right-10":n(28).default}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:-1,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:-10,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:-1,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:-10,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:1,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:10,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:1,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:10,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var r=n(1);e.default=Object(r.a)({coordinateOffset:0,dimensionOffset:-10})}]));