(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},798:function(t,e,n){t=n.nmd(t),function(n,r){"use strict";var o={};n.PubSub=o,function(t){var e={},n=-1;function r(t,e,n){try{t(e,n)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function o(t,e,n){t(e,n)}function i(t,n,i,a){var u,c=e[n],l=a?o:r;if(Object.prototype.hasOwnProperty.call(e,n))for(u in c)Object.prototype.hasOwnProperty.call(c,u)&&l(c[u],t,i)}function a(t){var n=String(t);return Boolean(Object.prototype.hasOwnProperty.call(e,n)&&function(t){var e;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!0;return!1}(e[n]))}function u(t,e,n,r){var o=function(t,e,n){return function(){var r=String(t),o=r.lastIndexOf(".");for(i(t,t,e,n);-1!==o;)o=(r=r.substr(0,o)).lastIndexOf("."),i(t,r,e,n);i(t,"*",e,n)}}(t="symbol"==typeof t?t.toString():t,e,r);return!!function(t){for(var e=String(t),n=a(e)||a("*"),r=e.lastIndexOf(".");!n&&-1!==r;)r=(e=e.substr(0,r)).lastIndexOf("."),n=a(e);return n}(t)&&(!0===n?o():setTimeout(o,0),!0)}t.publish=function(e,n){return u(e,n,!1,t.immediateExceptions)},t.publishSync=function(e,n){return u(e,n,!0,t.immediateExceptions)},t.subscribe=function(t,r){if("function"!=typeof r)return!1;t="symbol"==typeof t?t.toString():t,Object.prototype.hasOwnProperty.call(e,t)||(e[t]={});var o="uid_"+String(++n);return e[t][o]=r,o},t.subscribeAll=function(e){return t.subscribe("*",e)},t.subscribeOnce=function(e,n){var r=t.subscribe(e,(function(){t.unsubscribe(r),n.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var n;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)&&delete e[n]},t.countSubscriptions=function(t){var n,r,o=0;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)){for(r in e[n])o++;break}return o},t.getSubscriptions=function(t){var n,r=[];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t)&&r.push(n);return r},t.unsubscribe=function(n){var r,o,i,a="string"==typeof n&&(Object.prototype.hasOwnProperty.call(e,n)||function(t){var n;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&0===n.indexOf(t))return!0;return!1}(n)),u=!a&&"string"==typeof n,c="function"==typeof n,l=!1;if(!a){for(r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(o=e[r],u&&o[n]){delete o[n],l=n;break}if(c)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]===n&&(delete o[i],l=!0)}return l}t.clearSubscriptions(n)}}(o),void 0!==t&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o}("object"==typeof window&&window||this)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return D()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=w(a,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",b={};function v(){}function y(){}function m(){}var g={};c(g,i,(function(){return this}));var A=Object.getPrototypeOf,E=A&&A(A(I([])));E&&E!==n&&r.call(E,i)&&(g=E);var S=m.prototype=v.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,w(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return y.prototype=m,c(S,"constructor",m),c(m,"constructor",y),y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),c(S,u,"Generator"),c(S,i,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),G(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;G(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";var t=n(798),e=n.n(t),r={SET_PLAYER_OPTION:"SET_PLAYER_OPTION",UPDATE_GAMEBOARD:"UPDATE_GAMEBOARD",SHOW_GAMEBOARD:"SHOW_GAMEBOARD",HIDE_GAMEBOARD:"HIDE_GAMEBOARD",PASS_DEVICE:"PASS_DEVICE",PING_SHOW_GAMEBOARD:"PING_SHOW_GAMEBOARD",PING_HIDE_GAMEBOARD:"PING_HIDE_GAMEBOARD",PING_SETUP_PLAYERS:"PING_SETUP_PLAYERS",SETUP_SHIPS:"SETUP_SHIPS",START_GAME:"START_GAME",START_GAME_CONFIRMATION:"START_GAME_CONFIRMATION",GAME_END:"GAME_END"};function o(){return Math.random()>=.5}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return t.concat(Object.keys(e))}),[]),o=new Set(r);return e.every((function(t){return o.size===Object.keys(t).length}))}function a(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=document.createElement(t);return e&&(o.className=e),n&&(o.id=n),r&&r.appendChild(o),o}function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return n>30?null:e&&t(e)?e:u(t,e.parentNode,++n)}var c,l=a("p","hidden","log",document.body);function s(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,u,"next",t)}function u(t){s(i,r,o,a,u,"throw",t)}a(void 0)}))}}l.addEventListener("click",(function(){return l.classList.add("hidden")})),e().subscribe(r.SEND_LOG,(function(t,e){var n,r;n=e.message,r=e.type||"info",l.textContent=n,l.setAttribute("data-type",r),l.classList.remove("hidden"),clearTimeout(c),c=setTimeout((function(){return l.classList.add("hidden")}),5e3)})),e().subscribe(r.PASS_DEVICE,(function(t,n){!function(t){var n=t.object.getName(),o=a("section","page","pass-device",document.body);a("p","page-text",null,o).textContent="Now it's ".concat(n,"'s turn. Pass the device to him/her."),a("p","page-text",null,o).textContent="It is necessary for the player to confirm by clicking the button below.";var i=a("button","btn page-btn",null,o);i.textContent="Device passed to me",i.addEventListener("click",(function(){o.remove(),e().publishSync(r.PING_SHOW_GAMEBOARD,t)}))}(n)})),e().subscribe(r.GAME_END,(function(t,n){!function(t){var n=a("section","page","game-end",document.body);a("p","trophy",null,n).textContent="🏆",a("p","page-text winner",null,n).textContent="TIE"===t?"There is a TIE!":"The player ".concat(t.getName()," won the game!"),a("p","page-text",null,n).textContent="Want to play again? Click on button bellow";var o=a("button","btn page-btn",null,n);o.textContent="Play again",o.addEventListener("click",(function(){n.remove(),e().publish(r.PING_SETUP_PLAYERS,{})}))}(n)})),e().subscribe(r.START_GAME_CONFIRMATION,(function(t,e){e.started&&document.body.setAttribute("game","started")})),e().subscribe(r.GAME_END,(function(t,e){document.body.setAttribute("game","not started")}));var h=n(757),d=n.n(h);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(){var t=e();function e(){for(var t=[],e=0;e<10;e++){for(var n=[],r=0;r<10;r++)n.push({hitted:!1,ship:null});t.push(n)}return t}function n(t,e){if(t<0||t>=10||e>=10||e<0)throw new Error("Array item not found. Insert number in 0..9");return!0}function r(t){var e=t.getLength();return 1===e?0:e-1}function o(e,n){for(var r={default:{x:e,y:n},top:{x:e,y:n-1},bottom:{x:e,y:n+1},left:{x:e-1,y:n},right:{x:e+1,y:n}},o=0,i=Object.values(r);o<i.length;o++){var a=i[o];if(t[a.x]){var u=t[a.x][a.y];if(u&&u.ship)return!1}}return!0}function i(e,i,a){if(n(i,a),!function(e,n,i){for(var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=e.isHorizontal()?n:i,c=r(e),l=u;l<=c+u;l++){try{var s=e.isHorizontal()?t[l-1][i]:t[n][l-1];if(a&&s.ship&&s.ship===e)return!0}catch(t){}if(!(e.isHorizontal()?o(l,i):o(n,l)))return!1}return!0}(e,i,a))throw new Error("Cannot place ship because around is not empty.");if(!function(e,n,o){var i,a=r(e),u=function(t){if(Array.isArray(t))return p(t)}(i=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return!!(e.isHorizontal()?u[n+a]:u[n][o+a])}(e,i,a))throw new Error("Cannot place ship on invalid grid position.");return!0}function a(e,r){return n(e,r),t[e][r]}function u(e){for(var n=[],r=0;r<t.length;r++)for(var o=0;o<t.length;o++){var i=t[r][o].ship;i&&i===e&&n.push({x:r,y:o})}return n}function c(){var e,n=[],r=b(t.flat());try{var o=function(){var t=e.value,r=t.ship;r&&!n.some((function(t){return t.ship===r}))&&n.push(t)};for(r.s();!(e=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}return n}return{isAllShipsSunk:function(){var e,n=b(t.flat());try{for(n.s();!(e=n.n()).done;){var r=e.value.ship;if((!r||!r.isSunk())&&r)return!1}}catch(t){n.e(t)}finally{n.f()}return!0},placeShip:function(e,n,o){if(i(e,n,o))for(var a=e.isHorizontal()?n:o,u=r(e),c=a;c<=u+a;c++)e.isHorizontal()?t[c][o].ship=e:t[n][c].ship=e},placeShipPart:function(e,r,o){n(r,o),t[r][o].ship=e},getPosition:a,receiveAttack:function(e,r){n(e,r);var o=t[e][r];o.hitted=!0;var i={hitted:!0,ship:null};if(o.ship){var a=function(t,e,r){return n(e,r),u(t).findIndex((function(t){return t.x===e&&t.y===r}))}(o.ship,e,r);o.ship.hit(a),i.ship=!0}return i.x=e,i.y=r,i},getShipsPoints:c,getFlatGrid:function(){return t.flat()},getNextShipPart:function(t,e,r){if(!t)return null;t.isHorizontal()?e+=1:r+=1;try{n(e,r);var o=a(e,r);return o.ship===t?o:null}catch(t){return null}},getFirstShipPartPosition:function(t){return u(t)[0]},reset:function(){t=e()},hasPlacedAllShips:function(t){return c().length===t},tryPlaceShip:i}},m=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=o();function o(){for(var t=[],n=0;n<e;n++)t.push(!1);return t}function i(t){if(t<0)throw new Error("Invalid hit position number. Must be 0 or more");if(t>e-1)throw new Error("Invalid hit position. This number overflow the ship length.");return r[t]=!0,!0}function a(){return t}function u(){return s()===e}function c(){return r.length}function l(){return r}function s(){return r.filter((function(t){return t})).length}function f(){return n}return{getLength:c,isHorizontal:f,getParts:l,hit:i,getHits:s,isSunk:u,getName:a}};function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(){return Math.round(9*Math.random())}var E=function(t){var e=y(),n=y();function r(){return n}return{attack:function(t,n,r){t.ship&&e.placeShipPart(m(1),n,r),e.receiveAttack(n,r)},getGameboard:r,getEnemyGameboard:function(){return e},getName:function(){return t},buildGameboardScheme:function(t){var e,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(t);try{for(n.s();!(e=n.n()).done;)for(var i=e.value,a=o(),u=A(),c=A(),l=m(i.name,i.length,a);;)try{r().placeShip(l,u,c);break}catch(t){u=A(),c=A()}}catch(t){n.e(t)}finally{n.f()}}}},S=function(t){var e=E(t),n=e.attack,r=e.getGameboard,o=e.getEnemyGameboard,i=e.getName,a=e.buildGameboardScheme;return{attack:n,getGameboard:r,getEnemyGameboard:o,buildGameboardScheme:a,betterAttack:function(){return function(){for(var t={},e=null;!e||e.hitted;)t={x:A(),y:A()},e=o().getPosition(t.x,t.y);return t}()},getName:i}},O=S(),x=E();function w(t){return!!t&&i(t,O)}function _(t,e,n){return"vertical"===n?t:e}function G(t){return _("bg-ship_bottom_vertical","bg-ship_bottom_horizontal",t)}function P(t){return _("bg-ship_front_vertical","bg-ship_front_horizontal",t)}function I(t,e,n,r){var o;t.className="ship-component",o=0===n?P(r):n+1===e?G(r):"bg-ship_body",t.classList.add(o)}var D=["A","B","C","D","E","F","G","H","I","J"];function L(t,e,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o="grid-container",i=a("div",o+=t?" big":"",null),u=a("div","grid",null,i),c=a("div","grid-numbers-index",null,i),l=a("div","grid-letters-index",null,i),s=1;s<=10;s++){var f=a("p","grid-item grid-item-index",null,c);f.textContent=s;var h=a("p","grid-item grid-item-index",null,l);h.textContent="".concat(D[s-1])}for(var d=0;d<10;d++)for(var p=0;p<10;p++){var b=a("div","grid-item",null,u);b.setAttribute("data-x",d),b.setAttribute("data-y",p)}if(r){var v=M(i,e,n);return{section:v,container:i,grid:u}}return{container:i,grid:u}}function T(t,e,n,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=L(t,e,r,o);return N(i,n),i}function N(t,e){t&&e&&e.getFlatGrid().forEach((function(n,r){var o=t.grid.children[r];if(!n.hitted||(o.classList.add("hitted"),n.ship)){var i=parseInt(o.getAttribute("data-x")),a=parseInt(o.getAttribute("data-y"));if(n.ship){if(o.classList.add("ship-component"),n.hitted)return void o.classList.add("bg-ship_hitted");var u=e.getNextShipPart(n.ship,i,a),c=e.getFirstShipPartPosition(n.ship),l=n.ship.isHorizontal()?"horizontal":"vertical";i===c.x&&a===c.y?o.classList.add(P(l)):u?o.classList.add("bg-ship_body"):o.classList.add(G(l))}}else o.classList.add("bg-hitted")}))}function j(t){var e=t.getAttribute("data-x"),n=t.getAttribute("data-y");if(e&&n)return{x:e=parseInt(e),y:n=parseInt(n)}}function M(t,e,n){var r,o="gameboard-section ",i=a("section",o+=e?"target":"owner",null,((r=document.getElementById("gameboards"))||(r=a("main",null,"gameboards",document.body)),r));return a("p","gameboard-title",null,i).textContent=e?"Target Gameboard":"".concat(n+","||0," Your Gameboard"),e&&t.classList.add("big"),i.appendChild(t),i}e().subscribe(r.UPDATE_GAMEBOARD,(function(t,e){var n=e.gameboard;N(e.gameboardDOM,n)})),e().subscribe(r.SHOW_GAMEBOARD,(function(t,e){e&&e.section.classList.remove("hidden")})),e().subscribe(r.HIDE_GAMEBOARD,(function(t,e,n){e&&e.section.classList.add("hidden")})),e().subscribe(r.PING_SHOW_GAMEBOARD,(function(t,n){n.bot||e().publishSync(r.SHOW_GAMEBOARD,n.gameboardDOM),e().publishSync(r.SHOW_GAMEBOARD,n.enemyGameboardDOM)})),e().subscribe(r.PING_HIDE_GAMEBOARD,(function(t,n){e().publishSync(r.HIDE_GAMEBOARD,n.gameboardDOM),e().publishSync(r.HIDE_GAMEBOARD,n.enemyGameboardDOM)}));var R=function(t,e){var n,r=T(!1,!0,t.getEnemyGameboard(),null);return e||(n=T(!1,!1,t.getGameboard(),t.getName()),r.grid.addEventListener("click",k.bind(event,t))),{object:t,bot:e,gameboardDOM:n,enemyGameboardDOM:r}};function k(t,n){var o=n.target;if(o.classList.contains("hitted"))e().publish(r.SEND_LOG,{message:"You have already selected this position, please select another position.",type:"error"});else if(o.hasAttribute("data-x")&&o.hasAttribute("data-y")){var i=parseInt(o.getAttribute("data-x")),a=parseInt(o.getAttribute("data-y"));e().publishSync(r.SET_PLAYER_OPTION,{x:i,y:a,object:t})}}var C={x:null,y:null,object:null};function B(){C={x:null,y:null,object:null}}function H(t){return U.apply(this,arguments)}function U(){return(U=f(d().mark((function t(e){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){!function n(){B(),setTimeout((function(){if(C.object&&null!==C.y&&null!==C.x){if(C.object!==e)return n();var r=C;return B(),t(r)}return n()}),100)}()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y(t,e,n,r){return F.apply(this,arguments)}function F(){return(F=f(d().mark((function t(n,i,a,u){var c,l,s,f,h,p;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a||(a=o()?n:i),c=a===n?i:n,0===u?e().publish(r.SEND_LOG,{message:"Game staterd! ".concat(c.object.getName()," starts"),type:"success"}):e().publish(r.SEND_LOG,{message:"Now it's ".concat(c.object.getName(),"'s turn")}),q(c,a)&&e().publishSync(r.PING_SHOW_GAMEBOARD,c),e().publishSync(r.PING_HIDE_GAMEBOARD,a),u>0&&J(c,a),!c.bot){t.next=11;break}s=c.object.betterAttack(),f=s.x,h=s.y,l={x:f,y:h,object:c},t.next=14;break;case 11:return t.next=13,H(c.object);case 13:l=t.sent;case 14:if(V(c,a,l),$(c,a),!(p=W(n.object,i.object))){t.next=20;break}return e().publish(r.GAME_END,p),t.abrupt("return");case 20:a=c,setTimeout((function(){return Y(n,i,a,++u)}),1500);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t,e){var n=t.getGameboard().isAllShipsSunk(),r=e.getGameboard().isAllShipsSunk();return n&&r?"TIE":n?e:r?t:null}function q(t,e){return t.bot||e.bot}function V(t,n,o){var i=n.object.getGameboard().receiveAttack(o.x,o.y);i.ship&&i.hitted&&e().publish(r.SEND_LOG,{message:"You attacked a part of the ship, let's destroy this ship!",type:"success"}),t.object.attack(i,i.x,i.y)}function $(t,n){e().publish(r.UPDATE_GAMEBOARD,{gameboard:n.object.getGameboard(),gameboardDOM:n.gameboardDOM}),e().publish(r.UPDATE_GAMEBOARD,{gameboard:t.object.getEnemyGameboard(),gameboardDOM:t.enemyGameboardDOM})}function J(t,n,o){q(t,n)||e().publishSync(r.PASS_DEVICE,t)}e().subscribe(r.SET_PLAYER_OPTION,(function(t,e){C=e})),e().subscribe(r.START_GAME,(function(t,n){if(2!==n.length)throw new Error("Invalid player length. It only takes two players.");var o,a,u=[],c=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(n);try{for(c.s();!(o=c.n()).done;){var l=o.value;if(!l)throw new Error("Cannot use player with falsy value.");var s=w(l),f=!!(a=l)&&i(a,x);if(!s&&!f)throw new Error("Invalid player type.");var h=l.getGameboard();if(!h)throw new Error("Invalid Gameboard type.");if(5!==h.getShipsPoints().length)throw new Error("Invalid Ships length. Required: 5 differents ships");var d=R(l,s);u.push(d)}}catch(t){c.e(t)}finally{c.f()}e().publish(r.START_GAME_CONFIRMATION,{started:!0}),Y(u[0],u[1],null,0)}));function K(t){for(var n,o=t.target.elements,i=[],a=0,u=[{name:o["player-1-name"].value,bot:o["player-1-bot"].checked},{name:o["player-2-name"].value,bot:o["player-2-bot"].checked}];a<u.length;a++){var c=u[a];i.push((n=c.name,(c.bot?S:E)(n)))}e().publish(r.SETUP_SHIPS,i),t.preventDefault(),t.target.remove()}e().subscribe(r.PING_SETUP_PLAYERS,(function(){var t,e,n;t=K,Array.from(document.querySelectorAll("#setup-players")).forEach((function(t){return t.remove()})),(n=document.getElementById("gameboards"))&&n.remove(),e=a("form",null,"setup-players",null),document.body.insertBefore(e,document.body.children[0].nextElementSibling||document.body.children[0]),function(t){a("h2","title",null,t).textContent="Players";for(var e=a("ol",null,null,t),n=1;n<=2;n++){var r=a("li",null,null,e),o="player-".concat(n,"-name"),i="player-".concat(n,"-bot"),u=a("label","player-label",null,r);u.setAttribute("for",o),u.textContent="Username";var c=a("input",null,null,r);c.setAttribute("type","text"),c.setAttribute("name",o),c.setAttribute("id",o),c.setAttribute("placeholder","Insert player name here."),c.setAttribute("required","");var l=a("label",null,null,r);l.setAttribute("for",i),l.textContent="Bot";var s=a("input",null,null,l);s.setAttribute("type","checkbox"),s.setAttribute("name",i),s.setAttribute("id",i)}}(e),function(t){a("h3","subtitle",null,t).textContent="Start game";var e=a("button","btn confirm-form",null,t);e.setAttribute("type","submit"),e.textContent="Start game"}(e),e.addEventListener("submit",t)}));var Q=[];function X(t,e){Q.push({name:t,length:e})}function Z(){return Q}function tt(t,n){return 2!==n.length?(e().publish(r.PING_SETUP_PLAYERS,{}),!1):!!t||(e().publish(r.START_GAME,n),!1)}function et(t,n,o){t.getGameboard().hasPlacedAllShips(Z().length)?(ot().remove(),tt(n.filter((function(t){return!t.getGameboard().hasPlacedAllShips(Z().length)}))[0],n)&&e().publish(r.SETUP_SHIPS,n)):e().publish(r.SEND_LOG,{message:"You need to place all ships to continue. Hint: clicking on Random button, will setup a random gameboard scheme for you",type:"error"})}function nt(t,e,n){t.getGameboard().reset(),t.buildGameboardScheme(Z());var r=ot(),o=it();Array.from(o.children).forEach((function(t){return t.remove()})),dt(r,t)}function rt(t,e,n){var r=it(),o=r.getAttribute("data-orientation");o="vertical"===o?"horizontal":"vertical",r.setAttribute("data-orientation",o),function(t){var e=document.getElementById("ships");Array.from(e.children).forEach((function(e){var n=parseInt(e.getAttribute("data-length"));Array.from(e.children).forEach((function(e,r){return I(e,n,r,t)}))}))}(o)}function ot(){return document.getElementById("ships-setup")}function it(){return document.getElementById("ships")}function at(){var t=it();if(t)return t.getAttribute("data-orientation")}function ut(t,e){t.getGameboard().reset();var n=ot();dt(n,t),pt(n,at())}X("Carrier",5),X("Battleship",4),X("Cruiser",3),X("Submarine",3),X("Destroyer",2),e().subscribe(r.SETUP_SHIPS,(function t(n,o){var i=o.filter((function(t){return!t.getGameboard().hasPlacedAllShips(Z().length)})),a=i[0];if(w(a))return a.buildGameboardScheme(Z()),t(n,o);if(tt(a,o)){e().publish(r.SEND_LOG,{message:"Now it's time for player ".concat(a.getName()," to build his board scheme.")});var u=i.length>1;yt(a,o,u)}}));var ct=function(t,e,n,r){return{name:t,length:e,orientation:n,id:r}};function lt(t){try{var e=function(t){var e=t.getData("orientation"),n=parseInt(t.getData("length")),r=t.getData("name"),o=parseInt(t.getData("id"));return ct(r,n,e,o)}(t);return{ship:m(e.name,e.length,"horizontal"===e.orientation),data:e}}catch(t){return t}}function st(t){var e=t.dataTransfer,n=u((function(t){return t.classList.contains("ship")}),t.target);if(n){var r=at(),o=n.getAttribute("data-name"),i=parseInt(n.getAttribute("data-length")),a=parseInt(n.getAttribute("data-id"));!function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n],i=e[o];t.setData(o,i)}}(e,ct(o,i,r,a))}}function ft(t,e){var n=e.dataTransfer;e.preventDefault();var r=j(e.target),o=r.x,i=r.y;try{var a=lt(n).ship;t.getGameboard().tryPlaceShip(a,o,i)}catch(t){n.dropEffect="none"}}function ht(t,n){var o=n.dataTransfer,i=j(n.target),a=i.x,u=i.y;try{var c=lt(o),l=c.ship,s=c.data;t.getGameboard().placeShip(l,a,u),dt(document.getElementById("ships-setup"),t);var f=document.querySelector(".ship[data-id='".concat(s.id,"']"));f&&f.remove()}catch(t){e().publish(r.SEND_LOG,{message:"Error found: ".concat(t.message),type:"error"})}}function dt(t,e){var n=t.querySelector(".grid-container");n&&n.remove();var r=T(!0,!1,e.getGameboard(),null,!1);return t.appendChild(r.container),r.grid.addEventListener("drop",ht.bind(event,e)),r.grid.addEventListener("dragover",ft.bind(event,e)),r}function pt(t,e){var n=document.getElementById("ships-container");n&&n.remove();var r=a("div",null,"ships-container",t),o=a("div",null,"ships",r);o.setAttribute("data-orientation",e),Z().forEach((function(t,n){return function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=a("div","ship",null,n);i.setAttribute("draggable","true"),i.setAttribute("data-length",e),i.setAttribute("data-id",o),i.setAttribute("data-name",t),i.addEventListener("dragstart",st);for(var u=0;u<e;u++)I(a("div","ship-component",null,i),e,u,r)}(t.name,t.length,o,e,n)}))}function bt(t,e,n){var r=a("div",null,"action-button-container",t),o=a("button","btn",null,r),i=a("button","btn",null,r),u=a("button","btn",null,r);o.textContent="Rotate",i.textContent="Random",u.textContent="Reset",o.addEventListener("click",rt.bind(event,e,n)),i.addEventListener("click",nt.bind(event,e,n)),u.addEventListener("click",ut.bind(event,e))}function vt(t,e,n,r){var o=a("button","btn start-game-btn confirm-form",null,t);o.textContent=r?"Next setup":"Start game",o.addEventListener("click",et.bind(event,e,n))}var yt=function(t,e,n){var r;(function(t,e){a("h2","title",null,t).textContent="".concat(e.getName(),", place your ships")})(r=a("main",null,"ships-setup",document.body),t),pt(r,"horizontal"),bt(r,t,e),dt(r,t),function(t,e){a("h3","start-title subtitle",null,t).textContent=e?"Start next setup":"Start game"}(r,n),vt(r,t,e,n)};e().publish(r.PING_SETUP_PLAYERS,{})})()})();