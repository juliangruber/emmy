(function(){function h(a,b,c){a=k.get(a);if(!b)return a||{};if(!a||!a[b])return[];b=a[b];c&&c.length&&(b=b.filter(function(a){return w(a,c)}));return b}function w(a,b){if(a.b)for(var c=b.length;c--;)if(a.b.indexOf(0<=b[c]))return!0}function r(a,b,c){if(!a)return a;var d=a.on||a.addEventListener||a.addListener;b.split(/\s+/).forEach(function(b){var f=b.split(".");b=f.shift();if(d)if(x.freeze(a,"on"+b))d.call(a,b,c),x.a(a,"on"+b);else return a;D.add(a,b,c,f)});return a}function n(a,b,c){if(!a)return a;
var d;if(void 0===c){var e=E(arguments,1),f=a.removeAll||a.removeAllListeners;f&&f.apply(a,e);if(b)b.split(/\s+/).forEach(function(b){var c=b.split(".");b=c.shift();d=s(a,b,c);for(c=d.length;c--;)n(a,b,d[c])});else for(b in d=s(a),d)n(a,b);return a}var g=a.off||a.removeEventListener||a.removeListener;b.split(/\s+/).forEach(function(b){var d=b.split(".");b=d.shift();if(g)if(y.freeze(a,"off"+b))g.call(a,b,c),y.a(a,"off"+b);else return a;s.remove(a,b,c,d)});return a}function z(a,b,c,d){var e,f=b;"undefined"!==
typeof document&&a instanceof Node||a===F?("undefined"!==typeof Event&&b instanceof Event?f=b:(f=G.createEvent("CustomEvent"),f.initCustomEvent(b,d,!0,c)),e=a.dispatchEvent):t&&a instanceof t?(f=t.Event(b,c),f.detail=c,e=d?targte.trigger:a.triggerHandler):e=a.emit||a.trigger||a.fire||a.dispatchEvent||a.raise;var g=u(arguments,2);if(e&&A.freeze(a,"emit"+b))return e.apply(a,[f].concat(g)),A.a(a,"emit"+b),a;e=H(a,f);e=u(e);for(f=0;f<e.length;f++)e[f]&&e[f].apply(a,g);return a}function v(a,b,c){if(a){var d=
a.once||a.one||a.addOnceEventListener||a.addOnceListener,e;e=v.wrap(a,b,c,I);b.split(/\s+/).forEach(function(b){if(d&&B.freeze(a,"one"+b)){var g=d.call(a,b,c);B.a(a,"one"+b);return g}J(a,b,e)});return e}}function C(a){if(a){for(var b in g)a[b]=g[b];return a}}function p(a){return function(){a.apply(this,[this].concat(K(arguments)));return this}}window.Emitter=C;var l,m,k=new WeakMap;h.remove=function(a,b,c,d){a=k.get(a);if(!a||!a[b])return!1;b=a[b];if(d&&d.length&&!w(c,d))return!1;for(d=0;d<b.length;d++)if(b[d]===
c||b[d].fn===c){b.splice(d,1);break}};h.add=function(a,b,c,d){c&&(k.has(a)||k.set(a,{}),a=k.get(a),(a[b]=a[b]||[]).push(c),d&&d.length&&(c.b=d))};l={freeze:function(a,b){var c=q.get(a);if(c&&c[b])return!1;c||(c={},q.set(a,c));return c[b]=!0},a:function(a,b){var c=q.get(a);if(!c||!c[b])return!1;c[b]=null;return!0},isFrozen:function(a,b){var c=q.get(a);return c&&c[b]}};var q=new WeakMap;m=m=function(a,b,c){var d=[],e=a.length;if(0===e)return d;b=0>b?Math.max(0,b+e):b||0;for(void 0!==c&&(e=0>c?c+e:c);e-- >
b;)d[e-b]=a[e];return d};var x=l,D=h;r.wrap=function(a,b,c,d){function e(){if(d.apply(a,arguments))return c.apply(a,arguments)}e.fn=c;return e};var y=l,E=m,s=h,A=l,u=m,H=h,t="undefined"===typeof jQuery?void 0:jQuery,G="undefined"===typeof document?void 0:document,F="undefined"===typeof window?void 0:window,B=l,J=r,I=n;v.wrap=function(a,b,c,d){function e(){d(a,b,e);c.apply(a,arguments)}e.fn=c;return e};var K=m,g=C.prototype;g.on=p(r);g.once=p(v);g.off=p(n);g.emit=p(function(a,b){if(a){var c=arguments;
if("string"===typeof b||b instanceof String)c=u(arguments,2),b.split(/\s+/).forEach(function(b){b=b.split(".")[0];z.apply(this,[a,b].concat(c))});else return z.apply(this,c)}});g.listeners=function(a){return h(this,a)};g.hasListeners=function(a){return!!h(this,a).length}})();
