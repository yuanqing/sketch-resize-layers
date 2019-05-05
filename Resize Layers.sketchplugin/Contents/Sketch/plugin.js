!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var o=n(5);e.a=Object(o.a)({coordinateKey:"y",dimensionKey:"height"})},function(t,e,n){"use strict";var o=n(5);e.a=Object(o.a)({coordinateKey:"x",dimensionKey:"width"})},function(t,e){t.exports=require("sketch/settings")},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const o=20,r=15;function i(t){return function({width:e,y:n,value:i,placeholder:u}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,e,o)),f=null==i?"":`${i}`;return c.setStringValue(f),u&&c.setPlaceholderString(u),{view:c,height:o+r,retrieveValue:function(){const e=`${c.stringValue()}`;return t?t(e):e}}}}},function(t,e){t.exports=require("sketch/dom")},function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"CHECK_BOX",function(){return f}),n.d(o,"DROP_DOWN",function(){return l}),n.d(o,"RADIO_BUTTONS",function(){return p}),n.d(o,"NUMERIC_TEXT_BOX",function(){return _.a}),n.d(o,"STRING_TEXT_BOX",function(){return m}),n.d(o,"TEXT_BOX",function(){});var r=n(2);function i(t){const e={};return function t(e,n,o){Object.keys(e).forEach(function(r){const i=[n,r].filter(Boolean).join("."),u=e[r];"object"!=typeof u||null===u||Array.isArray(u)?o[i]=e[r]:t(u,i,o)})}(t,null,e),e}const u=20,c=10;function f({width:t,y:e,label:n,value:o}){const r=NSButton.alloc().initWithFrame(NSMakeRect(0,e,t,u));return r.setButtonType(NSSwitchButton),r.setBezelStyle(0),r.setState(o?NSOnState:NSOffState),r.setTitle(n),{view:r,height:u+c,retrieveValue:function(){return"1"==r.stringValue()}}}const s=20,a=15;function l({width:t,y:e,value:n,possibleValues:o}){const r=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,e,t,s));o.forEach(function(t){r.addItemWithTitle(`${t}`)});const i=void 0!==n?o.indexOf(n):0;return r.selectItemAtIndex(i),{view:r,height:s+a,retrieveValue:function(){const t=r.indexOfSelectedItem();return o[t]}}}const d=20,O=10;function p({width:t,y:e,value:n,possibleValues:o}){const r=NSButtonCell.alloc().init();r.setButtonType(NSRadioButton);const i=o.length,u=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,e,t,d),NSRadioModeMatrix,r,1,i);u.setCellSize(CGSizeMake(Math.floor(t/i),d)),u.cells().forEach(function(t,e){t.setTitle(o[e])});const c=void 0!==n?o.indexOf(n):0;return u.selectCellAtRow_column(0,c),{view:u,height:d+O,retrieveValue:function(){const t=u.cells().indexOfObject(u.selectedCell());return o[t]}}}var _=n(6),b=n(3);const m=Object(b.a)();var v=n(7),y=n.n(v);function h(t,e){y.a.message(e&&e.symbol?`${e.symbol} ${t}`:t)}j(r.setSettingForKey),j(r.setSessionVariable);function j(t){return function(e,n){if(!e)return;const o=i(e);Object.keys(o).forEach(function(e){const n=o[e];null!=n&&t(e,n)});const r=n&&n.successMessage;r&&h(r)}}n(8),n(9);n(4);var S=n(10);function x(){const t=NSApplication.sharedApplication().orderedDocuments();return Object(S.fromNative)(t[0])}function w(t){!function t(e,n){const o=e.parent;o&&"Group"===o.type&&!n[o.id]&&(o.adjustToFit(),n[o.id]=!0,t(o,n))}(t,{})}function g(){return x().selectedLayers.layers.reverse()}function N({coordinateKey:t,dimensionKey:e}){return function({coordinateOffset:n,dimensionOffset:o}){return function(){const r=g();r.forEach(function(r){const i=r.frame;i[t]+=n,i[e]+=o}),r.forEach(w)}}}n.d(e,"a",function(){return N})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(t,e){t.exports=require("sketch/ui")},function(t,e){t.exports=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}},function(t,e,n){"use strict";const o=async(t,e)=>{let n=0;for(const o of t)await e(await o,n++);return t};t.exports=o,t.exports.default=o},function(t,e){t.exports=require("sketch")},function(t,e,n){t.exports=n(12)},function(t,e,n){t.exports={"resize-up/top-1":n(13).default,"resize-up/top-10":n(14).default,"resize-up/bottom-1":n(15).default,"resize-up/bottom-10":n(16).default,"resize-up/left-1":n(17).default,"resize-up/left-10":n(18).default,"resize-up/right-1":n(19).default,"resize-up/right-10":n(20).default,"resize-down/top-1":n(21).default,"resize-down/top-10":n(22).default,"resize-down/bottom-1":n(23).default,"resize-down/bottom-10":n(24).default,"resize-down/left-1":n(25).default,"resize-down/left-10":n(26).default,"resize-down/right-1":n(27).default,"resize-down/right-10":n(28).default}},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:-1,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:-10,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:-1,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:-10,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:1})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:10})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:1,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:10,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var o=n(0);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:1,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:10,dimensionOffset:-10})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:-1})},function(t,e,n){"use strict";n.r(e);var o=n(1);e.default=Object(o.a)({coordinateOffset:0,dimensionOffset:-10})}]));