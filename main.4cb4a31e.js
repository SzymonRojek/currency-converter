parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dUB8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var K={PL:{GBP:.18816,EUR:.21758,US:.26389,RUB:19.7077,ESP:36.321,ITL:422.675,DEM:.42695,CZK:5.65865,SKK:6.57631,HUF:79.0143,ALL:26.6228,DKK:1.62299},GBP:{PL:5.21899,EUR:1.14832,US:1.38992,RUB:103.8,ESP:191.3,ITL:2226.2,DEM:2.24869,CZK:29.8041,SKK:34.6369,HUF:416.168,ALL:140.222,DKK:1.62299},EUR:{PL:4.56386,GBP:.86851,us:1.20878,RUB:90.2726,ESP:166.386,ITL:1936.27,DEM:1.95583,CZK:25.9207,SKK:30.126,HUF:361.979,ALL:121.948,DKK:7.43527},US:{PL:3.78578,GBP:.71937,EUR:.82718,RUB:74.6808,ESP:137.632,ITL:1601.65,DEM:1.61783,CZK:21.4431,SKK:24.9197,HUF:299.419,ALL:100.885,DKK:6.15019},RUB:{PL:.05066,GBP:.00963,EUR:.01107,US:.01338,ESP:1.84161,ITL:21.4312,DEM:.02165,CZK:.28692,SKK:.33344,HUF:4.00644,ALL:1.34992,DKK:.08229},ESP:{PL:.0275,GBP:.00523,EUR:.00601,US:.00726,RUB:.54255,ITL:11.6372,DEM:.01175,CZK:.15579,SKK:.18106,HUF:2.17554,ALL:.73292,DKK:.04469},ITL:{PL:.00236,GBP:45e-5,EUR:52e-5,US:62e-5,RUB:.04662,ESP:.08593,DEM:.00101,CZK:.01339,SKK:.01556,HUF:.18695,ALL:.06298,DKK:.00384},DEM:{PL:2.33983,GBP:.44461,EUR:.51129,US:.61804,RUB:46.1556,ESP:85.0718,ITL:989.999,CZK:13.253,SKK:15.4032,HUF:185.077,ALL:.04988,DKK:3.80159},CZK:{PL:.17644,GBP:.03353,EUR:.03855,US:.0466,RUB:3.48047,ESP:6.41456,ITL:74.6476,DEM:.0754,SKK:1.16143,HUF:13.9543,ALL:4.70172,DKK:.28663},SKK:{PL:.15191,GBP:.02886,EUR:.03319,US:.04012,RUB:2.9965,ESP:5.523,ITL:64.2724,DEM:.06492,CZK:.86041,HUF:12.0155,ALL:4.04793,DKK:.24681},HUF:{PL:.01263,GBP:.0024,EUR:.00276,US:.00334,RUB:.00598,ESP:.45923,ITL:5.34412,DEM:.0054,CZK:.07154,SKK:.08315,ALL:.33657,DKK:.02052},ALL:{PL:.03678,GBP:.00699,EUR:.00804,US:.00972,RUB:.72561,ESP:.72561,itl:15.5618,DEM:19.1667,CZK:.20834,SKK:.24212,HUF:2.90919,DKK:.05976},DKK:{PL:.61541,GBP:.11694,EUR:.13447,US:.16256,RUB:12.14,ESP:22.3741,ITL:260.373,DEM:.263,CZK:3.48575,SKK:4.05108,HUF:48.6731,ALL:16.3997}},L=K;exports.default=L;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=t(require("./curriency-object.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=document.querySelector(".form"),a=document.querySelector(".js-haveInput"),r=document.querySelector(".js-exchangeInput"),l=document.querySelector(".js-amountInput"),n=document.querySelector(".js-actualisationInput"),c=document.querySelector(".js-resetButton"),o=function(e){var t=null;for(var u in e)a.value===u&&(t=e[u]);return t},d=function(){var t=o(e.default)[r.value],u=t*Number(l.value);"search"!==a.value&&"search"===r.value?n.value="Choose all..":n.value="1 ".concat(a.value," = ").concat(t),a.value===r.value?(n.value="same curriency",l.setAttribute("disabled","disabled"),l.placeholder="is disabled"):(l.removeAttribute("disabled","disabled"),l.placeholder="type here"),l.value&&(n.value="".concat(r.value," : ").concat(u.toFixed(2)))};c.addEventListener("click",function(){a.value===r.value&&(l.removeAttribute("disabled","disabled"),l.placeholder="type here")});var i=function(){u.addEventListener("input",function(e){e.preventDefault(),d()})};i();
},{"./curriency-object.js":"dUB8"}]},{},["d6sW"], null)
//# sourceMappingURL=main.4cb4a31e.js.map