!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc");function i(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var a=document.querySelector(".form");document.querySelector("button");a.addEventListener("submit",(function(n){n.preventDefault();var o=Number(document.querySelector("input[name=delay]").value);console.log(o);var t=Number(document.querySelector("input[name=step]").value);console.log(t);var r=Number(document.querySelector("input[name=amount]").value);console.log(r);for(var a=0;a<r;a+=1)i(a+1,o+t*a).then((function(n){var o=n.position,t=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}));n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.47028e33.js.map