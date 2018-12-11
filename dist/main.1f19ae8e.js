// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../lib/general.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function checkNum(num) {
  switch (_typeof(num)) {
    case 'string':
      return /^\d+$/.test(num);

    case 'number':
      return num >= 0;

    default:
      return false;
  }
}

function checkNums(nums) {
  if (!Array.isArray(nums)) return false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;
      if (!checkNum(e)) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return nums.length;
}

function checkStr(str, table) {
  if (typeof str != 'string' || str == '') return false;
  str = new Set(str.split(''));
  return _toConsumableArray(str).every(function (e) {
    return table.indexOf(e) != -1;
  });
}

function checkTokens(tokens, max) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (tokens.length < min || tokens.length > max) return false;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = tokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;
      if (e == '') return false;
    } // todo: check for characters in table

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
}

function castType(data, type) {
  if (type == 'number') return Number(data);else if (type == 'string') return String(data);else return data;
}

module.exports = {
  checkNum: checkNum,
  checkNums: checkNums,
  checkStr: checkStr,
  checkTokens: checkTokens,
  castType: castType
};
},{}],"../node_modules/jsbi/dist/jsbi-umd.js":[function(require,module,exports) {
var define;
(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.JSBI=b()})(this,function(){"use strict";var a=Math.imul,b=Math.abs,c=Math.max,d=Math.clz32;class e extends Array{constructor(a,b){if(a>e.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");super(a),this.sign=b}static BigInt(a){var b=Math.floor,c=Number.isFinite;if("number"==typeof a){if(0===a)return e.__zero();if((0|a)===a)return 0>a?e.__oneDigit(-a,!0):e.__oneDigit(a,!1);if(!c(a)||b(a)!==a)throw new RangeError("The number "+a+" cannot be converted to BigInt because it is not an integer");return e.__fromDouble(a)}if("string"==typeof a){const b=e.__fromString(a);if(null===b)throw new SyntaxError("Cannot convert "+a+" to a BigInt");return b}if("boolean"==typeof a)return!0===a?e.__oneDigit(1,!1):e.__zero();if("object"==typeof a){if(a.constructor===e)return a;const b=e.__toPrimitive(a);return e.BigInt(b)}throw new TypeError("Cannot convert "+a+" to a BigInt")}toDebugString(){const a=["BigInt["];for(const b of this)a.push((b?(b>>>0).toString(16):b)+", ");return a.push("]"),a.join("")}toString(a=10){if(2>a||36<a)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(a&a-1)?e.__toStringBasePowerOfTwo(this,a):e.__toStringGeneric(this,a,!1)}static toNumber(a){const b=a.length;if(0===b)return 0;if(1===b){const b=a.__unsignedDigit(0);return a.sign?-b:b}const c=a.__digit(b-1),f=d(c),g=32*b-f;if(1024<g)return a.sign?-Infinity:1/0;let h=g-1,i=c,j=b-1;const k=f+1;let l=32===k?0:i<<k;l>>>=12;const m=k-12;let n=12<=k?0:i<<20+k,o=20+k;0<m&&0<j&&(j--,i=a.__digit(j),l|=i>>>32-m,n=i<<m,o=m),0<o&&0<j&&(j--,i=a.__digit(j),n|=i>>>32-o,o-=32);const p=e.__decideRounding(a,o,j,i);if((1===p||0===p&&1==(1&n))&&(n=n+1>>>0,0==n&&(l++,0!=l>>>20&&(l=0,h++,1023<h))))return a.sign?-Infinity:1/0;const q=a.sign?-2147483648:0;return h=h+1023<<20,e.__kBitConversionInts[1]=q|h|l,e.__kBitConversionInts[0]=n,e.__kBitConversionDouble[0]}static unaryMinus(a){if(0===a.length)return a;const b=a.__copy();return b.sign=!a.sign,b}static bitwiseNot(a){return a.sign?e.__absoluteSubOne(a).__trim():e.__absoluteAddOne(a,!0)}static exponentiate(a,b){if(b.sign)throw new RangeError("Exponent must be positive");if(0===b.length)return e.__oneDigit(1,!1);if(0===a.length)return a;if(1===a.length&&1===a.__digit(0))return a.sign&&0==(1&b.__digit(0))?e.unaryMinus(a):a;if(1<b.length)throw new RangeError("BigInt too big");let c=b.__unsignedDigit(0);if(1===c)return a;if(c>=e.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===a.length&&2===a.__digit(0)){const b=1+(c>>>5),d=a.sign&&0!=(1&c),f=new e(b,d);f.__initializeDigits();const g=1<<(31&c);return f.__setDigit(b-1,g),f}let d=null,f=a;for(0!=(1&c)&&(d=a),c>>=1;0!==c;c>>=1)f=e.multiply(f,f),0!=(1&c)&&(null===d?d=f:d=e.multiply(d,f));return d}static multiply(a,b){if(0===a.length)return a;if(0===b.length)return b;let c=a.length+b.length;32<=a.__clzmsd()+b.__clzmsd()&&c--;const d=new e(c,a.sign!==b.sign);d.__initializeDigits();for(let c=0;c<a.length;c++)e.__multiplyAccumulate(b,a.__digit(c),d,c);return d.__trim()}static divide(a,b){if(0===b.length)throw new RangeError("Division by zero");if(0>e.__absoluteCompare(a,b))return e.__zero();const c=a.sign!==b.sign,d=b.__unsignedDigit(0);let f;if(1===b.length&&65535>=d){if(1===d)return c===a.sign?a:e.unaryMinus(a);f=e.__absoluteDivSmall(a,d,null)}else f=e.__absoluteDivLarge(a,b,!0,!1);return f.sign=c,f.__trim()}static remainder(a,b){if(0===b.length)throw new RangeError("Division by zero");if(0>e.__absoluteCompare(a,b))return a;const c=b.__unsignedDigit(0);if(1===b.length&&65535>=c){if(1===c)return e.__zero();const b=e.__absoluteModSmall(a,c);return 0===b?e.__zero():e.__oneDigit(b,a.sign)}const d=e.__absoluteDivLarge(a,b,!1,!0);return d.sign=a.sign,d.__trim()}static add(a,b){const c=a.sign;return c===b.sign?e.__absoluteAdd(a,b,c):0<=e.__absoluteCompare(a,b)?e.__absoluteSub(a,b,c):e.__absoluteSub(b,a,!c)}static subtract(a,b){const c=a.sign;return c===b.sign?0<=e.__absoluteCompare(a,b)?e.__absoluteSub(a,b,c):e.__absoluteSub(b,a,!c):e.__absoluteAdd(a,b,c)}static leftShift(a,b){return 0===b.length||0===a.length?a:b.sign?e.__rightShiftByAbsolute(a,b):e.__leftShiftByAbsolute(a,b)}static signedRightShift(a,b){return 0===b.length||0===a.length?a:b.sign?e.__leftShiftByAbsolute(a,b):e.__rightShiftByAbsolute(a,b)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(a,b){return 0>e.__compareToBigInt(a,b)}static lessThanOrEqual(a,b){return 0>=e.__compareToBigInt(a,b)}static greaterThan(a,b){return 0<e.__compareToBigInt(a,b)}static greaterThanOrEqual(a,b){return 0<=e.__compareToBigInt(a,b)}static equal(a,b){if(a.sign!==b.sign)return!1;if(a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(a.__digit(c)!==b.__digit(c))return!1;return!0}static bitwiseAnd(a,b){if(!a.sign&&!b.sign)return e.__absoluteAnd(a,b).__trim();if(a.sign&&b.sign){const d=c(a.length,b.length)+1;let f=e.__absoluteSubOne(a,d);const g=e.__absoluteSubOne(b);return f=e.__absoluteOr(f,g,f),e.__absoluteAddOne(f,!0,f).__trim()}return a.sign&&([a,b]=[b,a]),e.__absoluteAndNot(a,e.__absoluteSubOne(b)).__trim()}static bitwiseXor(a,b){if(!a.sign&&!b.sign)return e.__absoluteXor(a,b).__trim();if(a.sign&&b.sign){const d=c(a.length,b.length),f=e.__absoluteSubOne(a,d),g=e.__absoluteSubOne(b);return e.__absoluteXor(f,g,f).__trim()}const d=c(a.length,b.length)+1;a.sign&&([a,b]=[b,a]);let f=e.__absoluteSubOne(b,d);return f=e.__absoluteXor(f,a,f),e.__absoluteAddOne(f,!0,f).__trim()}static bitwiseOr(a,b){const d=c(a.length,b.length);if(!a.sign&&!b.sign)return e.__absoluteOr(a,b).__trim();if(a.sign&&b.sign){let c=e.__absoluteSubOne(a,d);const f=e.__absoluteSubOne(b);return c=e.__absoluteAnd(c,f,c),e.__absoluteAddOne(c,!0,c).__trim()}a.sign&&([a,b]=[b,a]);let f=e.__absoluteSubOne(b,d);return f=e.__absoluteAndNot(f,a,f),e.__absoluteAddOne(f,!0,f).__trim()}static ADD(a,b){if(a=e.__toPrimitive(a),b=e.__toPrimitive(b),"string"==typeof a)return"string"!=typeof b&&(b=b.toString()),a+b;if("string"==typeof b)return a.toString()+b;if(a=e.__toNumeric(a),b=e.__toNumeric(b),e.__isBigInt(a)&&e.__isBigInt(b))return e.add(a,b);if("number"==typeof a&&"number"==typeof b)return a+b;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(a,b){return e.__compare(a,b,0)}static LE(a,b){return e.__compare(a,b,1)}static GT(a,b){return e.__compare(a,b,2)}static GE(a,b){return e.__compare(a,b,3)}static EQ(a,b){for(;;){if(e.__isBigInt(a))return e.__isBigInt(b)?e.equal(a,b):e.EQ(b,a);if("number"==typeof a){if(e.__isBigInt(b))return e.__equalToNumber(b,a);if("object"!=typeof b)return a==b;b=e.__toPrimitive(b)}else if("string"==typeof a){if(e.__isBigInt(b))return a=e.__fromString(a),null!==a&&e.equal(a,b);if("object"!=typeof b)return a==b;b=e.__toPrimitive(b)}else if("boolean"==typeof a){if(e.__isBigInt(b))return e.__equalToNumber(b,+a);if("object"!=typeof b)return a==b;b=e.__toPrimitive(b)}else if("symbol"==typeof a){if(e.__isBigInt(b))return!1;if("object"!=typeof b)return a==b;b=e.__toPrimitive(b)}else if("object"==typeof a){if("object"==typeof b&&b.constructor!==e)return a==b;a=e.__toPrimitive(a)}else return a==b}}static __zero(){return new e(0,!1)}static __oneDigit(a,b){const c=new e(1,b);return c.__setDigit(0,a),c}__copy(){const a=new e(this.length,this.sign);for(let b=0;b<this.length;b++)a[b]=this[b];return a}__trim(){let a=this.length,b=this[a-1];for(;0===b;)a--,b=this[a-1],this.pop();return 0===a&&(this.sign=!1),this}__initializeDigits(){for(let a=0;a<this.length;a++)this[a]=0}static __decideRounding(a,b,c,d){if(0<b)return-1;let e;if(0>b)e=-b-1;else{if(0===c)return-1;c--,d=a.__digit(c),e=31}let f=1<<e;if(0==(d&f))return-1;if(f-=1,0!=(d&f))return 1;for(;0<c;)if(c--,0!==a.__digit(c))return 1;return 0}static __fromDouble(a){e.__kBitConversionDouble[0]=a;const b=2047&e.__kBitConversionInts[1]>>>20,c=b-1023,d=(c>>>5)+1,f=new e(d,0>a);let g=1048575&e.__kBitConversionInts[1]|1048576,h=e.__kBitConversionInts[0];const i=20,j=31&c;let k,l=0;if(20>j){const a=i-j;l=a+32,k=g>>>a,g=g<<32-a|h>>>a,h<<=32-a}else if(20===j)l=32,k=g,g=h;else{const a=j-i;l=32-a,k=g<<a|h>>>32-a,g=h<<a}f.__setDigit(d-1,k);for(let b=d-2;0<=b;b--)0<l?(l-=32,k=g,g=h):k=0,f.__setDigit(b,k);return f.__trim()}static __isWhitespace(a){return!!(13>=a&&9<=a)||(159>=a?32==a:131071>=a?160==a||5760==a:196607>=a?(a&=131071,10>=a||40==a||41==a||47==a||95==a||4096==a):65279==a)}static __fromString(a,b=0){let c=0;const f=a.length;let g=0;if(g===f)return e.__zero();let h=a.charCodeAt(g);for(;e.__isWhitespace(h);){if(++g===f)return e.__zero();h=a.charCodeAt(g)}if(43===h){if(++g===f)return null;h=a.charCodeAt(g),c=1}else if(45===h){if(++g===f)return null;h=a.charCodeAt(g),c=-1}if(0===b){if(b=10,48===h){if(++g===f)return e.__zero();if(h=a.charCodeAt(g),88===h||120===h){if(b=16,++g===f)return null;h=a.charCodeAt(g)}else if(79===h||111===h){if(b=8,++g===f)return null;h=a.charCodeAt(g)}else if(66===h||98===h){if(b=2,++g===f)return null;h=a.charCodeAt(g)}}}else if(16===b&&48===h){if(++g===f)return e.__zero();if(h=a.charCodeAt(g),88===h||120===h){if(++g===f)return null;h=a.charCodeAt(g)}}for(;48===h;){if(++g===f)return e.__zero();h=a.charCodeAt(g)}const i=f-g;let j=e.__kMaxBitsPerChar[b],k=e.__kBitsPerCharTableMultiplier-1;if(i>1073741824/j)return null;const l=j*i+k>>>e.__kBitsPerCharTableShift,m=new e(l+31>>>5,!1),n=10>b?b:10,o=10<b?b-10:0;if(0==(b&b-1)){j>>=e.__kBitsPerCharTableShift;const b=[],c=[];let d=!1;do{let e=0,i=0;for(;;){let b;if(h-48>>>0<n)b=h-48;else if((32|h)-97>>>0<o)b=(32|h)-87;else{d=!0;break}if(i+=j,e=e<<j|b,++g===f){d=!0;break}if(h=a.charCodeAt(g),32<i+j)break}b.push(e),c.push(i)}while(!d);e.__fillFromParts(m,b,c)}else{m.__initializeDigits();let c=!1,i=0;do{let l=0,p=1;for(;;){let e;if(h-48>>>0<n)e=h-48;else if((32|h)-97>>>0<o)e=(32|h)-87;else{c=!0;break}const d=p*b;if(4294967295<d)break;if(p=d,l=l*b+e,i++,++g===f){c=!0;break}h=a.charCodeAt(g)}k=32*e.__kBitsPerCharTableMultiplier-1;const q=j*i+k>>>e.__kBitsPerCharTableShift+5;m.__inplaceMultiplyAdd(p,l,q)}while(!c)}for(;g!==f;){if(!e.__isWhitespace(h))return null;h=a.charCodeAt(g++)}return 0!=c&&10!==b?null:(m.sign=-1==c,m.__trim())}static __fillFromParts(a,b,c){let d=0,e=0,f=0;for(let g=b.length-1;0<=g;g--){const h=b[g],i=c[g];e|=h<<f,f+=i,32===f?(a.__setDigit(d++,e),f=0,e=0):32<f&&(a.__setDigit(d++,e),f-=32,e=h>>>i-f)}if(0!==e){if(d>=a.length)throw new Error("implementation bug");a.__setDigit(d++,e)}for(;d<a.length;d++)a.__setDigit(d,0)}static __toStringBasePowerOfTwo(a,b){const c=a.length;let f=b-1;f=(85&f>>>1)+(85&f),f=(51&f>>>2)+(51&f),f=(15&f>>>4)+(15&f);const g=f,h=b-1,i=a.__digit(c-1),j=d(i);let k=0|(32*c-j+g-1)/g;if(a.sign&&k++,268435456<k)throw new Error("string too long");const l=Array(k);let m=k-1,n=0,o=0;for(let d=0;d<c-1;d++){const b=a.__digit(d),c=(n|b<<o)&h;l[m--]=e.__kConversionChars[c];const f=g-o;for(n=b>>>f,o=32-f;o>=g;)l[m--]=e.__kConversionChars[n&h],n>>>=g,o-=g}const p=(n|i<<o)&h;for(l[m--]=e.__kConversionChars[p],n=i>>>g-o;0!==n;)l[m--]=e.__kConversionChars[n&h],n>>>=g;if(a.sign&&(l[m--]="-"),-1!=m)throw new Error("implementation bug");return l.join("")}static __toStringGeneric(a,b,c){const f=a.length;if(0===f)return"";if(1===f){let d=a.__unsignedDigit(0).toString(b);return!1===c&&a.sign&&(d="-"+d),d}const g=32*f-d(a.__digit(f-1)),h=e.__kMaxBitsPerChar[b],i=h-1;let j=g*e.__kBitsPerCharTableMultiplier;j+=i-1,j=0|j/i;const k=j+1>>1,l=e.exponentiate(e.__oneDigit(b,!1),e.__oneDigit(k,!1));let m,n;const o=l.__unsignedDigit(0);if(1===l.length&&65535>=o){m=new e(a.length,!1),m.__initializeDigits();let c=0;for(let b=2*a.length-1;0<=b;b--){const d=c<<16|a.__halfDigit(b);m.__setHalfDigit(b,0|d/o),c=0|d%o}n=c.toString(b)}else{const c=e.__absoluteDivLarge(a,l,!0,!0);m=c.quotient;const d=c.remainder.__trim();n=e.__toStringGeneric(d,b,!0)}m.__trim();let p=e.__toStringGeneric(m,b,!0);for(;n.length<k;)n="0"+n;return!1===c&&a.sign&&(p="-"+p),p+n}static __unequalSign(a){return a?-1:1}static __absoluteGreater(a){return a?-1:1}static __absoluteLess(a){return a?1:-1}static __compareToBigInt(a,b){const c=a.sign;if(c!==b.sign)return e.__unequalSign(c);const d=e.__absoluteCompare(a,b);return 0<d?e.__absoluteGreater(c):0>d?e.__absoluteLess(c):0}static __compareToNumber(a,c){if(!0|c){const d=a.sign,f=0>c;if(d!==f)return e.__unequalSign(d);if(0===a.length){if(f)throw new Error("implementation bug");return 0===c?0:-1}if(1<a.length)return e.__absoluteGreater(d);const g=b(c),h=a.__unsignedDigit(0);return h>g?e.__absoluteGreater(d):h<g?e.__absoluteLess(d):0}return e.__compareToDouble(a,c)}static __compareToDouble(a,b){if(b!==b)return b;if(b===1/0)return-1;if(b===-Infinity)return 1;const c=a.sign;if(c!==0>b)return e.__unequalSign(c);if(0===b)throw new Error("implementation bug: should be handled elsewhere");if(0===a.length)return-1;e.__kBitConversionDouble[0]=b;const f=2047&e.__kBitConversionInts[1]>>>20;if(2047==f)throw new Error("implementation bug: handled elsewhere");const g=f-1023;if(0>g)return e.__absoluteGreater(c);const h=a.length;let i=a.__digit(h-1);const j=d(i),k=32*h-j,l=g+1;if(k<l)return e.__absoluteLess(c);if(k>l)return e.__absoluteGreater(c);let m=1048576|1048575&e.__kBitConversionInts[1],n=e.__kBitConversionInts[0];const o=20,p=31-j;if(p!==(k-1)%31)throw new Error("implementation bug");let q,r=0;if(20>p){const a=o-p;r=a+32,q=m>>>a,m=m<<32-a|n>>>a,n<<=32-a}else if(20===p)r=32,q=m,m=n;else{const a=p-o;r=32-a,q=m<<a|n>>>32-a,m=n<<a}if(i>>>=0,q>>>=0,i>q)return e.__absoluteGreater(c);if(i<q)return e.__absoluteLess(c);for(let d=h-2;0<=d;d--){0<r?(r-=32,q=m>>>0,m=n,n=0):q=0;const b=a.__unsignedDigit(d);if(b>q)return e.__absoluteGreater(c);if(b<q)return e.__absoluteLess(c)}if(0!==m||0!==n){if(0===r)throw new Error("implementation bug");return e.__absoluteLess(c)}return 0}static __equalToNumber(a,c){return c|0===c?0===c?0===a.length:1===a.length&&a.sign===0>c&&a.__unsignedDigit(0)===b(c):0===e.__compareToDouble(a,c)}static __comparisonResultToBool(a,b){switch(b){case 0:return 0>a;case 1:return 0>=a;case 2:return 0<a;case 3:return 0<=a;}throw new Error("unreachable")}static __compare(a,b,c){if(a=e.__toPrimitive(a),b=e.__toPrimitive(b),"string"==typeof a&&"string"==typeof b)switch(c){case 0:return a<b;case 1:return a<=b;case 2:return a>b;case 3:return a>=b;}if(e.__isBigInt(a)&&"string"==typeof b)return b=e.__fromString(b),null!==b&&e.__comparisonResultToBool(e.__compareToBigInt(a,b),c);if("string"==typeof a&&e.__isBigInt(b))return a=e.__fromString(a),null!==a&&e.__comparisonResultToBool(e.__compareToBigInt(a,b),c);if(a=e.__toNumeric(a),b=e.__toNumeric(b),e.__isBigInt(a)){if(e.__isBigInt(b))return e.__comparisonResultToBool(e.__compareToBigInt(a,b),c);if("number"!=typeof b)throw new Error("implementation bug");return e.__comparisonResultToBool(e.__compareToNumber(a,b),c)}if("number"!=typeof a)throw new Error("implementation bug");if(e.__isBigInt(b))return e.__comparisonResultToBool(e.__compareToNumber(b,a),2^c);if("number"!=typeof b)throw new Error("implementation bug");return 0===c?a<b:1===c?a<=b:2===c?a>b:3===c?a>=b:void 0}__clzmsd(){return d(this[this.length-1])}static __absoluteAdd(a,b,c){if(a.length<b.length)return e.__absoluteAdd(b,a,c);if(0===a.length)return a;if(0===b.length)return a.sign===c?a:e.unaryMinus(a);let d=a.length;(0===a.__clzmsd()||b.length===a.length&&0===b.__clzmsd())&&d++;const f=new e(d,c);let g=0,h=0;for(;h<b.length;h++){const c=b.__digit(h),d=a.__digit(h),e=(65535&d)+(65535&c)+g,i=(d>>>16)+(c>>>16)+(e>>>16);g=i>>>16,f.__setDigit(h,65535&e|i<<16)}for(;h<a.length;h++){const b=a.__digit(h),c=(65535&b)+g,d=(b>>>16)+(c>>>16);g=d>>>16,f.__setDigit(h,65535&c|d<<16)}return h<f.length&&f.__setDigit(h,g),f.__trim()}static __absoluteSub(a,b,c){if(0===a.length)return a;if(0===b.length)return a.sign===c?a:e.unaryMinus(a);const d=new e(a.length,c);let f=0,g=0;for(;g<b.length;g++){const c=a.__digit(g),e=b.__digit(g),h=(65535&c)-(65535&e)-f;f=1&h>>>16;const i=(c>>>16)-(e>>>16)-f;f=1&i>>>16,d.__setDigit(g,65535&h|i<<16)}for(;g<a.length;g++){const b=a.__digit(g),c=(65535&b)-f;f=1&c>>>16;const e=(b>>>16)-f;f=1&e>>>16,d.__setDigit(g,65535&c|e<<16)}return d.__trim()}static __absoluteAddOne(a,b,c=null){const d=a.length;null===c?c=new e(d,b):c.sign=b;let f=!0;for(let e,g=0;g<d;g++){e=a.__digit(g);const b=-1===e;f&&(e=0|e+1),f=b,c.__setDigit(g,e)}return f&&c.__setDigitGrow(d,1),c}static __absoluteSubOne(a,b){const c=a.length;b=b||c;const d=new e(b,!1);let f=!0;for(let e,g=0;g<c;g++){e=a.__digit(g);const b=0===e;f&&(e=0|e-1),f=b,d.__setDigit(g,e)}for(let e=c;e<b;e++)d.__setDigit(e,0);return d}static __absoluteAnd(a,b,c=null){let d=a.length,f=b.length,g=f;if(d<f){g=d;const c=a,e=d;a=b,d=f,b=c,f=e}let h=g;null===c?c=new e(h,!1):h=c.length;let j=0;for(;j<g;j++)c.__setDigit(j,a.__digit(j)&b.__digit(j));for(;j<h;j++)c.__setDigit(j,0);return c}static __absoluteAndNot(a,b,c=null){const d=a.length,f=b.length;let g=f;d<f&&(g=d);let h=d;null===c?c=new e(h,!1):h=c.length;let j=0;for(;j<g;j++)c.__setDigit(j,a.__digit(j)&~b.__digit(j));for(;j<d;j++)c.__setDigit(j,a.__digit(j));for(;j<h;j++)c.__setDigit(j,0);return c}static __absoluteOr(a,b,c=null){let d=a.length,f=b.length,g=f;if(d<f){g=d;const c=a,e=d;a=b,d=f,b=c,f=e}let h=d;null===c?c=new e(h,!1):h=c.length;let j=0;for(;j<g;j++)c.__setDigit(j,a.__digit(j)|b.__digit(j));for(;j<d;j++)c.__setDigit(j,a.__digit(j));for(;j<h;j++)c.__setDigit(j,0);return c}static __absoluteXor(a,b,c=null){let d=a.length,f=b.length,g=f;if(d<f){g=d;const c=a,e=d;a=b,d=f,b=c,f=e}let h=d;null===c?c=new e(h,!1):h=c.length;let j=0;for(;j<g;j++)c.__setDigit(j,a.__digit(j)^b.__digit(j));for(;j<d;j++)c.__setDigit(j,a.__digit(j));for(;j<h;j++)c.__setDigit(j,0);return c}static __absoluteCompare(a,b){const c=a.length-b.length;if(0!=c)return c;let d=a.length-1;for(;0<=d&&a.__digit(d)===b.__digit(d);)d--;return 0>d?0:a.__unsignedDigit(d)>b.__unsignedDigit(d)?1:-1}static __multiplyAccumulate(b,c,d,e){if(0===c)return;const f=65535&c,g=c>>>16;let h=0,j=0,k=0;for(let l=0;l<b.length;l++,e++){let c=d.__digit(e),i=65535&c,m=c>>>16;const n=b.__digit(l),o=65535&n,p=n>>>16,q=a(o,f),r=a(o,g),s=a(p,f),t=a(p,g);i+=j+(65535&q),m+=k+h+(i>>>16)+(q>>>16)+(65535&r)+(65535&s),h=m>>>16,j=(r>>>16)+(s>>>16)+(65535&t)+h,h=j>>>16,j&=65535,k=t>>>16,c=65535&i|m<<16,d.__setDigit(e,c)}for(;0!=h||0!==j||0!==k;e++){let a=d.__digit(e);const b=(65535&a)+j,c=(a>>>16)+(b>>>16)+k+h;j=0,k=0,h=c>>>16,a=65535&b|c<<16,d.__setDigit(e,a)}}static __internalMultiplyAdd(b,c,d,e,f){let g=d,h=0;for(let j=0;j<e;j++){const d=b.__digit(j),e=a(65535&d,c),i=(65535&e)+h+g;g=i>>>16;const k=a(d>>>16,c),l=(65535&k)+(e>>>16)+g;g=l>>>16,h=k>>>16,f.__setDigit(j,l<<16|65535&i)}if(f.length>e)for(f.__setDigit(e++,g+h);e<f.length;)f.__setDigit(e++,0);else if(0!==g+h)throw new Error("implementation bug")}__inplaceMultiplyAdd(b,c,d){d>this.length&&(d=this.length);const e=65535&b,f=b>>>16;let g=0,h=65535&c,j=c>>>16;for(let k=0;k<d;k++){const b=this.__digit(k),c=65535&b,d=b>>>16,i=a(c,e),l=a(c,f),m=a(d,e),n=a(d,f),o=h+(65535&i),p=j+g+(o>>>16)+(i>>>16)+(65535&l)+(65535&m);h=(l>>>16)+(m>>>16)+(65535&n)+(p>>>16),g=h>>>16,h&=65535,j=n>>>16;this.__setDigit(k,65535&o|p<<16)}if(0!=g||0!==h||0!==j)throw new Error("implementation bug")}static __absoluteDivSmall(a,b,c){null===c&&(c=new e(a.length,!1));let d=0;for(let e,f=2*a.length-1;0<=f;f-=2){e=(d<<16|a.__halfDigit(f))>>>0;const g=0|e/b;d=0|e%b,e=(d<<16|a.__halfDigit(f-1))>>>0;const h=0|e/b;d=0|e%b,c.__setDigit(f>>>1,g<<16|h)}return c}static __absoluteModSmall(a,b){let c=0;for(let d=2*a.length-1;0<=d;d--){const e=(c<<16|a.__halfDigit(d))>>>0;c=0|e%b}return c}static __absoluteDivLarge(b,d,f,g){const h=d.__halfDigitLength(),i=d.length,c=b.__halfDigitLength()-h;let k=null;f&&(k=new e(c+2>>>1,!1),k.__initializeDigits());const l=new e(h+2>>>1,!1);l.__initializeDigits();const m=e.__clz16(d.__halfDigit(h-1));0<m&&(d=e.__specialLeftShift(d,m,0));const n=e.__specialLeftShift(b,m,1),o=d.__halfDigit(h-1);let p=0;for(let m,q=c;0<=q;q--){m=65535;const b=n.__halfDigit(q+h);if(b!==o){const c=(b<<16|n.__halfDigit(q+h-1))>>>0;m=0|c/o;let e=0|c%o;const f=d.__halfDigit(h-2),g=n.__halfDigit(q+h-2);for(;a(m,f)>>>0>(e<<16|g)>>>0&&(m--,e+=o,!(65535<e)););}e.__internalMultiplyAdd(d,m,0,i,l);let g=n.__inplaceSub(l,q,h+1);0!==g&&(g=n.__inplaceAdd(d,q,h),n.__setHalfDigit(q+h,n.__halfDigit(q+h)+g),m--),f&&(1&q?p=m<<16:k.__setDigit(q>>>1,p|m))}return g?(n.__inplaceRightShift(m),f?{quotient:k,remainder:n}:n):f?k:void 0}static __clz16(a){return d(a)-16}__inplaceAdd(a,b,c){let d=0;for(let e=0;e<c;e++){const c=this.__halfDigit(b+e)+a.__halfDigit(e)+d;d=c>>>16,this.__setHalfDigit(b+e,c)}return d}__inplaceSub(a,b,c){let d=0;if(1&b){b>>=1;let e=this.__digit(b),f=65535&e,g=0;for(;g<c-1>>>1;g++){const c=a.__digit(g),h=(e>>>16)-(65535&c)-d;d=1&h>>>16,this.__setDigit(b+g,h<<16|65535&f),e=this.__digit(b+g+1),f=(65535&e)-(c>>>16)-d,d=1&f>>>16}const h=a.__digit(g),i=(e>>>16)-(65535&h)-d;d=1&i>>>16,this.__setDigit(b+g,i<<16|65535&f);if(b+g+1>=this.length)throw new RangeError("out of bounds");0==(1&c)&&(e=this.__digit(b+g+1),f=(65535&e)-(h>>>16)-d,d=1&f>>>16,this.__setDigit(b+a.length,4294901760&e|65535&f))}else{b>>=1;let e=0;for(;e<a.length-1;e++){const c=this.__digit(b+e),f=a.__digit(e),g=(65535&c)-(65535&f)-d;d=1&g>>>16;const h=(c>>>16)-(f>>>16)-d;d=1&h>>>16,this.__setDigit(b+e,h<<16|65535&g)}const f=this.__digit(b+e),g=a.__digit(e),h=(65535&f)-(65535&g)-d;d=1&h>>>16;let i=0;0==(1&c)&&(i=(f>>>16)-(g>>>16)-d,d=1&i>>>16),this.__setDigit(b+e,i<<16|65535&h)}return d}__inplaceRightShift(a){if(0===a)return;let b=this.__digit(0)>>>a;const c=this.length-1;for(let e=0;e<c;e++){const c=this.__digit(e+1);this.__setDigit(e,c<<32-a|b),b=c>>>a}this.__setDigit(c,b)}static __specialLeftShift(a,b,c){const d=a.length,f=new e(d+c,!1);if(0===b){for(let b=0;b<d;b++)f.__setDigit(b,a.__digit(b));return 0<c&&f.__setDigit(d,0),f}let g=0;for(let e=0;e<d;e++){const c=a.__digit(e);f.__setDigit(e,c<<b|g),g=c>>>32-b}return 0<c&&f.__setDigit(d,g),f}static __leftShiftByAbsolute(a,b){const c=e.__toShiftAmount(b);if(0>c)throw new RangeError("BigInt too big");const f=c>>>5,g=31&c,h=a.length,i=0!==g&&0!=a.__digit(h-1)>>>32-g,j=h+f+(i?1:0),k=new e(j,a.sign);if(0===g){let b=0;for(;b<f;b++)k.__setDigit(b,0);for(;b<j;b++)k.__setDigit(b,a.__digit(b-f))}else{let b=0;for(let a=0;a<f;a++)k.__setDigit(a,0);for(let c=0;c<h;c++){const e=a.__digit(c);k.__setDigit(c+f,e<<g|b),b=e>>>32-g}if(i)k.__setDigit(h+f,b);else if(0!=b)throw new Error("implementation bug")}return k.__trim()}static __rightShiftByAbsolute(a,b){const c=a.length,d=a.sign,f=e.__toShiftAmount(b);if(0>f)return e.__rightShiftByMaximum(d);const g=f>>>5,h=31&f;let i=c-g;if(0>=i)return e.__rightShiftByMaximum(d);let j=!1;if(d){if(0!=(a.__digit(g)&(1<<h)-1))j=!0;else for(let b=0;b<g;b++)if(0!==a.__digit(b)){j=!0;break}}if(j&&0===h){const b=a.__digit(c-1);0==~b&&i++}let k=new e(i,d);if(0===h)for(let b=g;b<c;b++)k.__setDigit(b-g,a.__digit(b));else{let b=a.__digit(g)>>>h;const d=c-g-1;for(let c=0;c<d;c++){const e=a.__digit(c+g+1);k.__setDigit(c,e<<32-h|b),b=e>>>h}k.__setDigit(d,b)}return j&&(k=e.__absoluteAddOne(k,!0,k)),k.__trim()}static __rightShiftByMaximum(a){return a?e.__oneDigit(1,!0):e.__zero()}static __toShiftAmount(a){if(1<a.length)return-1;const b=a.__unsignedDigit(0);return b>e.__kMaxLengthBits?-1:b}static __toPrimitive(a,b="default"){if("object"!=typeof a)return a;if(a.constructor===e)return a;const c=a[Symbol.toPrimitive];if(c){const a=c(b);if("object"!=typeof a)return a;throw new TypeError("Cannot convert object to primitive value")}const d=a.valueOf;if(d){const b=d.call(a);if("object"!=typeof b)return b}const f=a.toString;if(f){const b=f.call(a);if("object"!=typeof b)return b}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(a){return e.__isBigInt(a)?a:+a}static __isBigInt(a){return"object"==typeof a&&a.constructor===e}__digit(a){return this[a]}__unsignedDigit(a){return this[a]>>>0}__setDigit(a,b){this[a]=0|b}__setDigitGrow(a,b){this[a]=0|b}__halfDigitLength(){const a=this.length;return 65535>=this.__unsignedDigit(a-1)?2*a-1:2*a}__halfDigit(a){return 65535&this[a>>>1]>>>((1&a)<<4)}__setHalfDigit(a,b){const c=a>>>1,d=this.__digit(c),e=1&a?65535&d|b<<16:4294901760&d|65535&b;this.__setDigit(c,e)}static __digitPow(a,b){let c=1;for(;0<b;)1&b&&(c*=a),b>>>=1,a*=a;return c}}return e.__kMaxLength=33554432,e.__kMaxLengthBits=e.__kMaxLength<<5,e.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],e.__kBitsPerCharTableShift=5,e.__kBitsPerCharTableMultiplier=1<<e.__kBitsPerCharTableShift,e.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],e.__kBitConversionBuffer=new ArrayBuffer(8),e.__kBitConversionDouble=new Float64Array(e.__kBitConversionBuffer),e.__kBitConversionInts=new Int32Array(e.__kBitConversionBuffer),e});

},{}],"../lib/encoder.js":[function(require,module,exports) {
var JSBI = require('jsbi');

var _require = require('./general'),
    castType = _require.castType;

function convert(num, base, type) {
  num = JSBI.BigInt(num);
  base = JSBI.BigInt(base);
  var nums = [];

  do {
    nums.push(JSBI.remainder(num, base));
    num = JSBI.divide(num, base);
  } while (JSBI.greaterThan(num, JSBI.BigInt(0)));

  return nums.reverse().map(function (e) {
    return castType(e, type);
  });
}

function revert(nums, base, type) {
  base = JSBI.BigInt(base);
  var num = nums.reduce(function (a, e, i) {
    e = JSBI.BigInt(e);
    var exponent = JSBI.BigInt(nums.length - i - 1);
    var pow = JSBI.exponentiate(base, exponent);
    return JSBI.add(a, JSBI.multiply(e, pow));
  }, JSBI.BigInt(0));
  return castType(num, type);
}

function encode(num, cfg) {
  var nums = convert(num, cfg.table.length);
  var chars = nums.map(function (e) {
    return cfg.table[e];
  });
  return chars.join('');
}

function decode(str, cfg, type) {
  var chars = str.split('');
  var nums = chars.map(function (e) {
    return cfg.table.indexOf(e);
  });
  return revert(nums, cfg.table.length, type);
}

module.exports = {
  convert: convert,
  revert: revert,
  encode: encode,
  decode: decode
};
},{"jsbi":"../node_modules/jsbi/dist/jsbi-umd.js","./general":"../lib/general.js"}],"../lib/maxEncoder.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var JSBI = require('jsbi');

var _require = require('./general'),
    checkTokens = _require.checkTokens,
    castType = _require.castType;

var _require2 = require('./encoder'),
    convert = _require2.convert,
    revert = _require2.revert,
    encode = _require2.encode,
    decode = _require2.decode;

function maxEncode(nums, cfg) {
  var first0 = !Number(nums[0]);
  nums = _toConsumableArray(nums);
  first0 && (nums[0] = 1);
  var max = Math.max.apply(Math, _toConsumableArray(nums));
  var base = max + 1;
  var str = encode(revert(nums, base), cfg);
  var prefix = first0 ? cfg.dlmtMax : '';
  prefix += encode(max, cfg);
  prefix += max < cfg.table.length ? '' : cfg.dlmtMax;
  return prefix + str;
}

function maxDecode(str, cfg, type) {
  var first0 = str[0] == cfg.dlmtMax;
  first0 && (str = str.slice(1));
  var tokens = str.split(cfg.dlmtMax);
  if (!checkTokens(tokens, 2)) return [];
  var max = tokens[1] ? tokens[0] : tokens[0][0];
  str = tokens[1] || tokens[0].slice(1);
  var base = JSBI.add(decode(max, cfg), JSBI.BigInt(1));
  var nums = convert(decode(str, cfg), base, type);
  first0 && (nums[0] = castType(0, type));
  return nums;
}

module.exports = {
  maxEncode: maxEncode,
  maxDecode: maxDecode
};
},{"jsbi":"../node_modules/jsbi/dist/jsbi-umd.js","./general":"../lib/general.js","./encoder":"../lib/encoder.js"}],"../lib/lenEncoder.js":[function(require,module,exports) {
var _require = require('./general'),
    checkTokens = _require.checkTokens;

var _require2 = require('./encoder'),
    encode = _require2.encode,
    decode = _require2.decode;

var _require3 = require('./maxEncoder'),
    maxEncode = _require3.maxEncode,
    maxDecode = _require3.maxDecode; // Find the string having the longest total
// length (len * occurrence) among the array.


function longestLen(strs, defaultStr) {
  var lens = {};
  var mode = defaultStr;
  var max = 0;
  strs.forEach(function (e) {
    if (!lens[e] && lens[e] != 0) lens[e] = 0;else {
      lens[e] += e.length;
      if (lens[e] > max) max = lens[mode = e];else if (lens[e] == max && e == defaultStr) mode = e;
    }
  });
  return mode;
}

function lenEncode(nums, cfg) {
  var strs = nums.map(function (e) {
    return encode(e, cfg);
  });
  var skip = longestLen(strs, cfg.table[0]);
  strs = strs.map(function (e) {
    return e == skip ? '' : e;
  });
  var lens = strs.map(function (e) {
    return e.length;
  });
  var prefix = maxEncode(lens, cfg) + cfg.dlmtLen;
  skip == cfg.table[0] || (prefix += skip + cfg.dlmtLen);
  return prefix + strs.join('');
}

function lenDecode(str, cfg, type) {
  var tokens = str.split(cfg.dlmtLen);
  if (!checkTokens(tokens, 3, 2)) return [];
  var lens = maxDecode(tokens[0], cfg, 'number');
  var skip = tokens[2] ? tokens[1] : cfg.table[0];
  str = tokens[2] || tokens[1];
  skip = decode(skip, cfg, type);
  var totalLen = lens.reduce(function (a, e) {
    return a + e;
  });
  if (totalLen != str.length) return [];
  var i = 0;
  return lens.map(function (e) {
    return e ? decode(str.slice(i, i += e), cfg, type) : skip;
  });
}

module.exports = {
  lenEncode: lenEncode,
  lenDecode: lenDecode
};
},{"./general":"../lib/general.js","./encoder":"../lib/encoder.js","./maxEncoder":"../lib/maxEncoder.js"}],"../lib/index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./general'),
    checkStr = _require.checkStr,
    checkNums = _require.checkNums;

var _require2 = require('./maxEncoder'),
    maxEncode = _require2.maxEncode,
    maxDecode = _require2.maxDecode;

var _require3 = require('./lenEncoder'),
    lenEncode = _require3.lenEncode,
    lenDecode = _require3.lenDecode;

var CFG = {
  flagBad: 'a',
  dlmtMax: 'e',
  dlmtLen: 'i',
  table: '0123456789bcdfghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  tableFull: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function _encode(nums, cfg, encoder) {
  if (!checkNums(nums)) return '';

  switch (encoder) {
    case 'maxEncoder':
      return maxEncode(nums, cfg);

    case 'lenEncoder':
      return lenEncode(nums, cfg);

    default:
      {
        var max = maxEncode(nums, cfg);
        var len = lenEncode(nums, cfg);
        return max.length < len.length ? max : len;
      }
  }
}

function _decode(str, cfg, strOutput) {
  if (!checkStr(str, cfg.tableFull)) return [];
  var type = strOutput ? 'string' : 'number';
  return str.indexOf(cfg.dlmtLen) == -1 ? maxDecode(str, cfg, type) : lenDecode(str, cfg, type);
}

var Hashnum =
/*#__PURE__*/
function () {
  function Hashnum(cfg) {
    _classCallCheck(this, Hashnum);

    this.table = cfg ? cfg.table : null;
    this.strOutput = cfg ? cfg.strOutput : null;
  }

  _createClass(Hashnum, [{
    key: "encode",
    value: function encode(nums) {
      return _encode(nums, this._cfg);
    }
  }, {
    key: "decode",
    value: function decode(str, strOutput) {
      strOutput == null && (strOutput = this.strOutput);
      return _decode(str, this._cfg, strOutput);
    }
  }, {
    key: "maxEncode",
    value: function maxEncode(nums) {
      return _encode(nums, this._cfg, 'maxEncoder');
    }
  }, {
    key: "lenEncode",
    value: function lenEncode(nums) {
      return _encode(nums, this._cfg, 'lenEncoder');
    }
  }, {
    key: "table",
    set: function set(table) {
      var cfg;
      typeof table == 'string' && (table = new Set(table.split(''))) && table.size >= 5 && (table = _toConsumableArray(table).join('')) && (cfg = {
        flagBad: table[0],
        dlmtMax: table[1],
        dlmtLen: table[2],
        table: table.slice(3),
        tableFull: table
      });
      this._cfg = cfg || CFG;
    },
    get: function get() {
      return this._cfg.tableFull;
    }
  }], [{
    key: "encode",
    value: function encode(nums) {
      return _encode(nums, CFG);
    }
  }, {
    key: "decode",
    value: function decode(str, strOutput) {
      return _decode(str, CFG, strOutput);
    }
  }, {
    key: "maxEncode",
    value: function maxEncode(nums) {
      return _encode(nums, CFG, 'maxEncoder');
    }
  }, {
    key: "lenEncode",
    value: function lenEncode(nums) {
      return _encode(nums, CFG, 'lenEncoder');
    }
  }]);

  return Hashnum;
}();

module.exports = Hashnum;
},{"./general":"../lib/general.js","./maxEncoder":"../lib/maxEncoder.js","./lenEncoder":"../lib/lenEncoder.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _lib = _interopRequireDefault(require("../lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashnum = new _lib.default({});
var nums = [0, 222, 11, 33, 0, 55];
var maxStr = hashnum.lenEncode(nums);
var maxNums = hashnum.decode(maxStr);
console.log(maxStr);
console.log(maxNums);
console.log(hashnum.table);
},{"../lib":"../lib/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58141" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.map