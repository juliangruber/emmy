(function(){function U(a){return(a+"").toLowerCase()}function F(a,b){if(G)return G.call(a,b);for(var c=a.parentNode.querySelectorAll(b),d=0;d<c.length;d++)if(c[d]==a)return!0;return!1}function l(a,b){var c=p.get(a);return b?c&&c[b]||[]:c||{}}function n(a,b,c){var d,e;if(void 0===c){var g=a.removeAll||a.removeAllListeners;g&&g.call(a,b,c);d=H(a);if(void 0===b)for(b in d)n(a,b);else b.split(/\s+/).forEach(function(b){if(d[b])for(var c=d[b].length;c--;)n(a,b,d[b][c])})}else{var I=a.off||a.removeEventListener||
a.removeListener;b.split(/\s+/).forEach(function(b){if(I)if(J.freeze(a,"off"+b))I.call(a,b,c),J.a(a,"off"+b);else return;b=H(a,b);for(e=0;e<b.length;e++)if(b[e]===c||b[e].fn===c){b.splice(e,1);break}})}}function k(a,b,c,d){var e=a.on||a.addEventListener||a.addListener,g;g=d?k.wrap(c,d):c;b.split(/\s+/).forEach(function(b){if(e)if(K.freeze(a,"on"+b))e.call(a,b,g),K.a(a,"on"+b);else return g;V.add(a,b,g,d)});return g}function u(a,b,c,d){return W(a,b,u.wrap(a,b,c,d))}function L(a,b,c,d){var e,g=b;a.nodeType||
a===X||a===Y?(b instanceof Event?g=b:(g=document.createEvent("CustomEvent"),g.initCustomEvent(b,d,!0,c)),e=a.dispatchEvent):v&&a instanceof v?(g=v.Event(b,c),g.detail=c,e=d?targte.trigger:a.triggerHandler):e=a.emit||a.trigger||a.fire||a.dispatchEvent;if(e&&M.freeze(a,"emit"+b))e.call(a,g,c,d),M.a(a,"emit"+b);else{e=Z(a,g);e=w(e);for(var g=w(arguments,2),f=0;f<e.length;f++)e[f]&&e[f].apply(a,g)}}function x(a,b,c,d){return N(a,b,x.wrap(a,b,c,d))}function y(a,b,c,d){return O(a,b,y.wrap(a,b,c,d))}function z(a,
b,c,d){return P(a,b,z.wrap(a,b,c,d))}function A(a,b,c,d){return Q(a,b,A.wrap(a,b,c,d))}function q(a,b,c){var d=a.once||a.one||a.addOnceEventListener||a.addOnceListener,e;e=q.wrap(a,b,c,aa);b.split(/\s+/).forEach(function(b){if(d&&R.freeze(a,"one"+b)){var f=d.call(a,b,c);R.a(a,"one"+b);return f}ba(a,b,e)});return e}function f(a){if(a){for(var b in m)a[b]=m[b];return a}}window.Emitter=f;var r,B,h,C,s,D;r=function(a){return!(!a||!a.apply)};"use strict";h=Element.prototype;var G=h.matches||h.matchesSelector||
h.webkitMatchesSelector||h.mozMatchesSelector||h.msMatchesSelector||h.b;B=function(a){return"string"===typeof a||a instanceof String};var p=new WeakMap;l.add=function(a,b,c){p.has(a)||p.set(a,{});a=p.get(a);(a[b]=a[b]||[]).push(c)};h={freeze:function(a,b){var c=t.get(a);if(c&&c[b])return!1;c||(c={},t.set(a,c));return c[b]=!0},a:function(a,b){var c=t.get(a);if(!c||!c[b])return!1;c[b]=null;return!0},isFrozen:function(a,b){var c=t.get(a);return c&&c[b]}};var t=new WeakMap,E=document,ca=E.documentElement;
C=function(a,b){if(a===E)return ca;if(!b||(b instanceof Node?a==b:F(a,b)))return a;for(;(a=a.parentNode)!==E;)if(!b||(b instanceof Node?a==b:F(a,b)))return a};s=s=function(a,b,c){var d=[],e=a.length;if(0===e)return d;b=0>b?Math.max(0,b+e):b||0;for(void 0!==c&&(e=0>c?c+e:c);e-- >b;)d[e-b]=a[e];return d};var J=h,H=l,K=h,V=l;k.wrap=function(a,b,c,d){function e(){if(d.apply(a,arguments))return c.apply(a,arguments)}e.fn=c;return e};var W=k;u.wrap=function(a,b,c,d){function e(){var a=arguments,b=this;setTimeout(function(){c.apply(b,
a)},d)}r(d)&&(a=selector,selector=c,c=a);e.fn=c;return e};var M=h,Z=l,w=s;D=function(a,b){var c=arguments;if(B(b))b.split(/\s+/).forEach(function(b){L.apply(this,[a,b].concat(w(c,2)))});else return L.apply(this,arguments)};var v="undefined"===typeof jQuery?void 0:jQuery,X="undefined"===typeof document?void 0:document,Y="undefined"===typeof window?void 0:window,N=k,S="undefined"!==typeof document?C:null;x.wrap=function(a,b,c,d){if(S){if(r(d)){var e=d;d=c;c=e}return N.wrap(a,b,c,function(b){var c=b.target;
if(c===a)return!0;var e=S(c,d);if(a!==e&&a.contains(e))return b.delegateTarget=c,!0})}};var O=k,T="undefined"!==typeof document?C:null;y.wrap=function(a,b,c,d){if(T){if(r(d)){var e=d;d=c;c=e}return O.wrap(a,b,c,function(b){return(b=T(b.target,d))&&a.contains(b)?!1:!0})}};var P=k;z.wrap=function(a,b,c,d){function e(){c.apply(a,arguments);n(a,b,e);setTimeout(function(){P(a,b,e)},d)}e.fn=c;return e};var da={"\u2325":18,alt:18,option:18,backspace:8,capslock:20,caps:20,clear:12,context:93,"\u2318":91,
cmd:91,command:91,"\u2303":17,ctrl:17,control:17,del:46,"delete":46,down:40,end:35,"\u2386":13,enter:13,"return":13,esc:27,escape:27,home:36,insert:45,left:37,pagedown:34,"pg-down":34,pageup:33,"pg-up":33,pause:19,right:39,"\u21e7":16,shift:16,space:32,tab:9,up:38,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,leftmouse:1,rightmouse:3,middlemouse:2,"*":106,"+":107,plus:107,"-":109,minus:109,";":186,semicolon:186,"=":187,equals:187,",":188,dash:189,".":190,"/":191,
"`":192,"~":192,"[":219,"\\":220,"]":221,"'":222},Q=k;A.wrap=function(a,b,c,d){if(d)return d=d instanceof Array?d:B(d)?d.split(/\s*,\s*/):[d],d=d.map(U),Q.wrap(a,b,c,function(a){for(var b=void 0!==a.which?a.which:a.keyCode,c=d.length;c--;)if(a=d[c],b==a||da[a]==b)return!0})};var R=h,ba=k,aa=n;q.wrap=function(a,b,c,d){function e(){d(a,b,e);c.apply(a,arguments)}e.fn=c;return e};var ea=s,m=f.prototype;m.on=function(a,b,c){k(this,a,b,c);return this};m.once=function(a,b){q(this,a,b);return this};m.off=
function(a,b){n(this,a,b);return this};m.emit=function(){D.apply(this,[this].concat(ea(arguments)));return this};m.listeners=function(a){return l(this,a)};m.hasListeners=function(a){return!!l(this,a).length};f.on=function(a,b,c,d){k(a,b,c,d);return f};f.once=function(a,b,c){q(a,b,c);return f};f.off=function(a,b,c){n(a,b,c);return f};f.emit=function(){D.apply(this,arguments);return f};f.delegate=function(a,b,c,d){x(a,b,c,d);return f};f.later=function(a,b,c,d){u(a,b,c,d);return f};f.keypass=function(a,
b,c,d){A(a,b,c,d);return f};f.throttle=function(a,b,c,d){z(a,b,c,d);return f};f.not=function(a,b,c,d){y(a,b,c,d);return f};f.listeners=l;f.hasListeners=function(a,b){return!!l(a,b).length}})();
