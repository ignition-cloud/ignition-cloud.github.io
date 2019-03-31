!function(r){var n={};function e(t){if(n[t])return n[t].exports;var u=n[t]={i:t,l:!1,exports:{}};return r[t].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var u in r)e.d(t,u,function(n){return r[n]}.bind(null,u));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=0)}([function(r,n,e){"use strict";e(1);const{Elm:t}=e(2);t.Main.init({node:document.getElementById("main")})},function(){},function(){!function(r){"use strict";function n(r,n,e){return e.a=r,e.f=n,e}function e(r){return n(2,r,function(n){return function(e){return r(n,e)}})}function t(r){return n(3,r,function(n){return function(e){return function(t){return r(n,e,t)}}})}function u(r){return n(4,r,function(n){return function(e){return function(t){return function(u){return r(n,e,t,u)}}}})}function i(r,n,e){return 2===r.a?r.f(n,e):r(n)(e)}function a(r,n,e,t){return 3===r.a?r.f(n,e,t):r(n)(e)(t)}function o(r,n,e,t,u){return 4===r.a?r.f(n,e,t,u):r(n)(e)(t)(u)}var f={$:0};function c(r,n){return{$:1,a:r,b:n}}var s=e(c);function v(r){for(var n=f,e=r.length;e--;)n=c(r[e],n);return n}function l(r,n){return{a:r,b:n}}var b=t(function(r,n,e){for(var t=[],u=0;r>u;u++)t[u]=e(n+u);return t}),d=e(function(r,n){for(var e=[],t=0;r>t&&n.b;t++)e[t]=n.a,n=n.b;return e.length=t,l(e,n)});function h(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var g=Math.ceil,p=Math.floor,m=Math.log;function $(r){return{$:2,b:r}}$(function(r){return"number"!=typeof r?A("an INT",r):r>-2147483647&&2147483647>r&&(0|r)===r?Kr(r):!isFinite(r)||r%1?A("an INT",r):Kr(r)}),$(function(r){return"boolean"==typeof r?Kr(r):A("a BOOL",r)}),$(function(r){return"number"==typeof r?Kr(r):A("a FLOAT",r)}),$(function(r){return Kr(x(r))}),$(function(r){return"string"==typeof r?Kr(r):r instanceof String?Kr(r+""):A("a STRING",r)});var y=e(function(r,n){return _(r,O(n))});function _(r,n){switch(r.$){case 2:return r.b(n);case 5:return null===n?Kr(r.c):A("null",n);case 3:return w(n)?j(r.b,n,v):A("a LIST",n);case 4:return w(n)?j(r.b,n,k):A("an ARRAY",n);case 6:var e=r.d;if("object"!=typeof n||null===n||!(e in n))return A("an OBJECT with a field named `"+e+"`",n);var t=_(r.b,n[e]);return xr(t)?t:Hr(i(Ur,e,t.a));case 7:var u=r.e;return w(n)?u>=n.length?A("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n):(t=_(r.b,n[u]),xr(t)?t:Hr(i(Xr,u,t.a))):A("an ARRAY",n);case 8:if("object"!=typeof n||null===n||w(n))return A("an OBJECT",n);var a=f;for(var o in n)if(n.hasOwnProperty(o)){if(t=_(r.b,n[o]),!xr(t))return Hr(i(Ur,o,t.a));a=c(l(o,t.a),a)}return Kr(Br(a));case 9:for(var s=r.f,b=r.g,d=0;b.length>d;d++){if(t=_(b[d],n),!xr(t))return t;s=s(t.a)}return Kr(s);case 10:return t=_(r.b,n),xr(t)?_(r.h(t.a),n):t;case 11:for(var h=f,g=r.g;g.b;g=g.b){if(t=_(g.a,n),xr(t))return t;h=c(t.a,h)}return Hr(Zr(Br(h)));case 1:return Hr(i(Qr,r.a,x(n)));case 0:return Kr(r.a)}}function j(r,n,e){for(var t=n.length,u=[],a=0;t>a;a++){var o=_(r,n[a]);if(!xr(o))return Hr(i(Xr,a,o.a));u[a]=o.a}return Kr(e(u))}function w(r){return Array.isArray(r)||"undefined"!=typeof FileList&&r instanceof FileList}function k(r){return i(Yr,r.length,function(n){return r[n]})}function A(r,n){return Hr(i(Qr,"Expecting "+r,x(n)))}function E(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 2:return r.b===n.b;case 5:return r.c===n.c;case 3:case 4:case 8:return E(r.b,n.b);case 6:return r.d===n.d&&E(r.b,n.b);case 7:return r.e===n.e&&E(r.b,n.b);case 9:return r.f===n.f&&N(r.g,n.g);case 10:return r.h===n.h&&E(r.b,n.b);case 11:return N(r.g,n.g)}}function N(r,n){var e=r.length;if(e!==n.length)return!1;for(var t=0;e>t;t++)if(!E(r[t],n[t]))return!1;return!0}function x(r){return r}function O(r){return r}function T(r){return{$:0,a:r}}function L(r){return{$:2,b:r,c:null}}x(null);var S=e(function(r,n){return{$:3,b:r,d:n}}),F=0;function C(r){var n={$:0,e:F++,f:r,g:null,h:[]};return P(n),n}var M=!1,q=[];function P(r){if(q.push(r),!M){for(M=!0;r=q.shift();)B(r);M=!1}}function B(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,P(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}var I={};function z(r,n){var e={g:n,h:void 0},t=r.c,u=r.d,f=r.e,c=r.f;return e.h=C(i(S,function r(n){return i(S,r,{$:5,b:function(r){var i=r.a;return 0===r.$?a(u,e,i,n):f&&c?o(t,e,i.i,i.j,n):a(t,e,f?i.i:i.j,n)}})},r.b))}var R,D=e(function(r,n){return L(function(e){r.g(n),e(T(0))})});function V(r){return{$:2,m:r}}function W(r,n,e){var t,u,i={};for(var a in G(!0,n,i,null),G(!1,e,i,null),r)t=r[a],u={$:"fx",a:i[a]||{i:f,j:f}},t.h.push(u),P(t)}function G(r,n,e,t){switch(n.$){case 1:var u=n.k,a=function(r,n,e,t){return i(r?I[n].e:I[n].f,function(r){for(var n=e;n;n=n.q)r=n.p(r);return r},t)}(r,u,t,n.l);return void(e[u]=function(r,n,e){return e=e||{i:f,j:f},r?e.i=c(n,e.i):e.j=c(n,e.j),e}(r,a,e[u]));case 2:for(var o=n.m;o.b;o=o.b)G(r,o.a,e,t);return;case 3:return void G(r,n.o,e,{p:n.n,q:t})}}var J="undefined"!=typeof document?document:{};function Y(r,n){r.appendChild(n)}function H(r){return{$:0,a:r}}var K=e(function(r,n){return e(function(e,t){for(var u=[],i=0;t.b;t=t.b){var a=t.a;i+=a.b||0,u.push(a)}return i+=u.length,{$:1,c:n,d:Z(e),e:u,f:r,b:i}})})(void 0);e(function(r,n){return e(function(e,t){for(var u=[],i=0;t.b;t=t.b){var a=t.a;i+=a.b.b||0,u.push(a)}return i+=u.length,{$:2,c:n,d:Z(e),e:u,f:r,b:i}})})(void 0);var Q,U=e(function(r,n){return{$:"a2",n:r,o:n}}),X=e(function(r,n){return{$:"a3",n:r,o:n}});function Z(r){for(var n={};r.b;r=r.b){var e=r.a,t=e.$,u=e.n,i=e.o;if("a2"!==t){var a=n[t]||(n[t]={});"a3"===t&&"class"===u?rr(a,u,i):a[u]=i}else"className"===u?rr(n,u,O(i)):n[u]=O(i)}return n}function rr(r,n,e){var t=r[n];r[n]=t?t+" "+e:e}function nr(r,n){var e=r.$;if(5===e)return nr(r.k||(r.k=r.m()),n);if(0===e)return J.createTextNode(r.a);if(4===e){for(var t=r.k,u=r.j;4===t.$;)"object"!=typeof u?u=[u,t.j]:u.push(t.j),t=t.k;var i={j:u,p:n};return(a=nr(t,i)).elm_event_node_ref=i,a}if(3===e)return er(a=r.h(r.g),n,r.d),a;var a=r.f?J.createElementNS(r.f,r.c):J.createElement(r.c);R&&"a"==r.c&&a.addEventListener("click",R(a)),er(a,n,r.d);for(var o=r.e,f=0;o.length>f;f++)Y(a,nr(1===e?o[f]:o[f].b,n));return a}function er(r,n,e){for(var t in e){var u=e[t];"a1"===t?tr(r,u):"a0"===t?ar(r,n,u):"a3"===t?ur(r,u):"a4"===t?ir(r,u):("value"!==t&&"checked"!==t||r[t]!==u)&&(r[t]=u)}}function tr(r,n){var e=r.style;for(var t in n)e[t]=n[t]}function ur(r,n){for(var e in n){var t=n[e];void 0!==t?r.setAttribute(e,t):r.removeAttribute(e)}}function ir(r,n){for(var e in n){var t=n[e],u=t.f,i=t.o;void 0!==i?r.setAttributeNS(u,e,i):r.removeAttributeNS(u,e)}}function ar(r,n,e){var t=r.elmFs||(r.elmFs={});for(var u in e){var i=e[u],a=t[u];if(i){if(a){if(a.q.$===i.$){a.q=i;continue}r.removeEventListener(u,a)}a=or(n,i),r.addEventListener(u,a,Q&&{passive:2>rn(i)}),t[u]=a}else r.removeEventListener(u,a),t[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Q=!0}}))}catch(r){}function or(r,n){function e(n){var t=e.q,u=_(t.a,n);if(xr(u)){for(var i,a=rn(t),o=u.a,f=a?3>a?o.a:o.s:o,c=1==a?o.b:3==a&&o.aC,s=(c&&n.stopPropagation(),(2==a?o.b:3==a&&o.ax)&&n.preventDefault(),r);i=s.j;){if("function"==typeof i)f=i(f);else for(var v=i.length;v--;)f=i[v](f);s=s.p}s(f,c)}}return e.q=n,e}function fr(r,n){return r.$==n.$&&E(r.a,n.a)}function cr(r,n,e,t){var u={$:n,r:e,s:t,t:void 0,u:void 0};return r.push(u),u}function sr(r,n,e,t){if(r!==n){var u=r.$,i=n.$;if(u!==i){if(1!==u||2!==i)return void cr(e,0,t,n);n=function(r){for(var n=r.e,e=n.length,t=[],u=0;e>u;u++)t[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:t,f:r.f,b:r.b}}(n),i=1}switch(i){case 5:for(var a=r.l,o=n.l,f=a.length,c=f===o.length;c&&f--;)c=a[f]===o[f];if(c)return void(n.k=r.k);n.k=n.m();var s=[];return sr(r.k,n.k,s,0),void(s.length>0&&cr(e,1,t,s));case 4:for(var v=r.j,l=n.j,b=!1,d=r.k;4===d.$;)b=!0,"object"!=typeof v?v=[v,d.j]:v.push(d.j),d=d.k;for(var h=n.k;4===h.$;)b=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return b&&v.length!==l.length?void cr(e,0,t,n):((b?function(r,n){for(var e=0;r.length>e;e++)if(r[e]!==n[e])return!1;return!0}(v,l):v===l)||cr(e,2,t,l),void sr(d,h,e,t+1));case 0:return void(r.a!==n.a&&cr(e,3,t,n.a));case 1:return void vr(r,n,e,t,br);case 2:return void vr(r,n,e,t,dr);case 3:if(r.h!==n.h)return void cr(e,0,t,n);var g=lr(r.d,n.d);g&&cr(e,4,t,g);var p=n.i(r.g,n.g);return void(p&&cr(e,5,t,p))}}}function vr(r,n,e,t,u){if(r.c===n.c&&r.f===n.f){var i=lr(r.d,n.d);i&&cr(e,4,t,i),u(r,n,e,t)}else cr(e,0,t,n)}function lr(r,n,e){var t;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var i=r[u],a=n[u];i===a&&"value"!==u&&"checked"!==u||"a0"===e&&fr(i,a)||((t=t||{})[u]=a)}else(t=t||{})[u]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var o=lr(r[u],n[u]||{},u);o&&((t=t||{})[u]=o)}for(var f in n)f in r||((t=t||{})[f]=n[f]);return t}function br(r,n,e,t){var u=r.e,i=n.e,a=u.length,o=i.length;a>o?cr(e,6,t,{v:o,i:a-o}):o>a&&cr(e,7,t,{v:a,e:i});for(var f=o>a?a:o,c=0;f>c;c++){var s=u[c];sr(s,i[c],e,++t),t+=s.b||0}}function dr(r,n,e,t){for(var u=[],i={},a=[],o=r.e,f=n.e,c=o.length,s=f.length,v=0,l=0,b=t;c>v&&s>l;){var d=(E=o[v]).a,h=(N=f[l]).a,g=E.b,p=N.b,m=void 0,$=void 0;if(d!==h){var y=o[v+1],_=f[l+1];if(y){var j=y.a,w=y.b;$=h===j}if(_){var k=_.a,A=_.b;m=d===k}if(m&&$)sr(g,A,u,++b),gr(i,u,d,p,l,a),b+=g.b||0,pr(i,u,d,w,++b),b+=w.b||0,v+=2,l+=2;else if(m)b++,gr(i,u,h,p,l,a),sr(g,A,u,b),b+=g.b||0,v+=1,l+=2;else if($)pr(i,u,d,g,++b),b+=g.b||0,sr(w,p,u,++b),b+=w.b||0,v+=2,l+=1;else{if(!y||j!==k)break;pr(i,u,d,g,++b),gr(i,u,h,p,l,a),b+=g.b||0,sr(w,A,u,++b),b+=w.b||0,v+=2,l+=2}}else sr(g,p,u,++b),b+=g.b||0,v++,l++}for(;c>v;){var E;pr(i,u,(E=o[v]).a,g=E.b,++b),b+=g.b||0,v++}for(;s>l;){var N,x=x||[];gr(i,u,(N=f[l]).a,N.b,void 0,x),l++}(u.length>0||a.length>0||x)&&cr(e,8,t,{w:u,x:a,y:x})}var hr="_elmW6BL";function gr(r,n,e,t,u,i){var a=r[e];if(!a)return i.push({r:u,A:a={c:0,z:t,r:u,s:void 0}}),void(r[e]=a);if(1===a.c){i.push({r:u,A:a}),a.c=2;var o=[];return sr(a.z,t,o,a.r),a.r=u,void(a.s.s={w:o,A:a})}gr(r,n,e+hr,t,u,i)}function pr(r,n,e,t,u){var i=r[e];if(i){if(0===i.c){i.c=2;var a=[];return sr(t,i.z,a,u),void cr(n,9,u,{w:a,A:i})}pr(r,n,e+hr,t,u)}else{var o=cr(n,9,u,void 0);r[e]={c:1,z:t,r:u,s:o}}}function mr(r,n,e,t){return 0===e.length?r:(function r(n,e,t,u){!function n(e,t,u,i,a,o,f){for(var c=u[i],s=c.r;s===a;){var v=c.$;if(1===v)r(e,t.k,c.s,f);else if(8===v)c.t=e,c.u=f,(l=c.s.w).length>0&&n(e,t,l,0,a,o,f);else if(9===v){c.t=e,c.u=f;var l,b=c.s;b&&(b.A.s=e,(l=b.w).length>0&&n(e,t,l,0,a,o,f))}else c.t=e,c.u=f;if(!(c=u[++i])||(s=c.r)>o)return i}var d=t.$;if(4===d){for(var h=t.k;4===h.$;)h=h.k;return n(e,h,u,i,a+1,o,e.elm_event_node_ref)}for(var g=t.e,p=e.childNodes,m=0;g.length>m;m++){var $=1===d?g[m]:g[m].b,y=++a+($.b||0);if(s>=a&&y>=s&&(!(c=u[i=n(p[m],$,u,i,a,y,f)])||(s=c.r)>o))return i;a=y}return i}(n,e,t,0,0,e.b,u)}(r,n,e,t),$r(r,e))}function $r(r,n){for(var e=0;n.length>e;e++){var t=n[e],u=t.t,i=yr(u,t);u===r&&(r=i)}return r}function yr(r,n){switch(n.$){case 0:return function(r,n,e){var t=r.parentNode,u=nr(n,e);return u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref),t&&u!==r&&t.replaceChild(u,r),u}(r,n.s,n.u);case 4:return er(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return $r(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var e=n.s,t=0;e.i>t;t++)r.removeChild(r.childNodes[e.v]);return r;case 7:for(var u=(e=n.s).e,i=r.childNodes[t=e.v];u.length>t;t++)r.insertBefore(nr(u[t],n.u),i);return r;case 9:if(!(e=n.s))return r.parentNode.removeChild(r),r;var a=e.A;return void 0!==a.r&&r.parentNode.removeChild(r),a.s=$r(r,e.w),r;case 8:return function(r,n){var e=n.s,t=function(r,n){if(r){for(var e=J.createDocumentFragment(),t=0;r.length>t;t++){var u=r[t].A;Y(e,2===u.c?u.s:nr(u.z,n.u))}return e}}(e.y,n);r=$r(r,e.w);for(var u=e.x,i=0;u.length>i;i++){var a=u[i],o=a.A,f=2===o.c?o.s:nr(o.z,n.u);r.insertBefore(f,r.childNodes[a.r])}return t&&Y(r,t),r}(r,n);case 5:return n.s(r);default:h(10)}}var _r=u(function(r,n,e,t){return function(r,n,e,t,u,a){var o=i(y,r,x(n?n.flags:void 0));xr(o)||h(2);var f={},c=(o=e(o.a)).a,s=a(l,c),v=function(r,n){var e;for(var t in I){var u=I[t];u.a&&((e=e||{})[t]=u.a(t,n)),r[t]=z(u,n)}return e}(f,l);function l(r,n){s(c=(o=i(t,r,c)).a,n),W(f,o.b,u(c))}return W(f,o.b,u(c)),v?{ports:v}:{}}(n,t,r.bE,r.b_,r.bW,function(n,e){var u=r.b0,o=t.node,s=function r(n){if(3===n.nodeType)return H(n.textContent);if(1!==n.nodeType)return H("");for(var e=f,t=n.attributes,u=t.length;u--;){var o=t[u];e=c(i(X,o.name,o.value),e)}var s=n.tagName.toLowerCase(),v=f,l=n.childNodes;for(u=l.length;u--;)v=c(r(l[u]),v);return a(K,s,e,v)}(o);return function(r,n){n(r);var e=0;function t(){e=1===e?0:(jr(t),n(r),1)}return function(u,i){r=u,i?(n(r),2===e&&(e=1)):(0===e&&jr(t),e=2)}}(e,function(r){var e=u(r),t=function(r,n){var e=[];return sr(r,n,e,0),e}(s,e);o=mr(o,s,t,n),s=e})})}),jr=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var wr,kr,Ar,Er,Nr=e(function(r,n){return n}),xr=function(r){return!r.$},Or=u(function(r,n,e,t){return{$:0,a:r,b:n,c:e,d:t}}),Tr=s,Lr=g,Sr=e(function(r,n){return m(n)/m(r)}),Fr=Lr(i(Sr,2,32)),Cr=[],Mr=o(Or,0,Fr,Cr,Cr),qr=d,Pr=t(function(r,n,e){for(;;){if(!e.b)return n;var t=e.b,u=r,a=i(r,e.a,n);r=u,n=a,e=t}}),Br=function(r){return a(Pr,Tr,f,r)},Ir=e(function(r,n){for(;;){var e=i(qr,32,r),t=e.b,u=i(Tr,{$:0,a:e.a},n);if(!t.b)return Br(u);r=t,n=u}}),zr=e(function(r,n){for(;;){var e=Lr(n/32);if(1===e)return i(qr,32,r).a;r=i(Ir,r,f),n=e}}),Rr=p,Dr=e(function(r,n){return function r(n,e,t){if("object"!=typeof n)return n===e?0:e>n?-1:1;if(void 0===n.$)return(t=r(n.a,e.a))?t:(t=r(n.b,e.b))?t:r(n.c,e.c);for(;n.b&&e.b&&!(t=r(n.a,e.a));n=n.b,e=e.b);return t||(n.b?1:e.b?-1:0)}(r,n)>0?r:n}),Vr=function(r){return r.length},Wr=e(function(r,n){if(n.b){var e=32*n.b,t=Rr(i(Sr,32,e-1)),u=r?Br(n.e):n.e,a=i(zr,u,n.b);return o(Or,Vr(n.d)+e,i(Dr,5,t*Fr),a,n.d)}return o(Or,Vr(n.d),Fr,Cr,n.d)}),Gr=b,Jr=n(5,wr=function(r,n,e,t,u){for(;;){if(0>n)return i(Wr,!1,{e:t,b:e/32|0,d:u});var o={$:1,a:a(Gr,32,n,r)};r=r,n-=32,e=e,t=i(Tr,o,t),u=u}},function(r){return function(n){return function(e){return function(t){return function(u){return wr(r,n,e,t,u)}}}}}),Yr=e(function(r,n){if(r>0){var e=r%32;return t=Jr,u=n,i=r-e-32,o=r,c=f,s=a(Gr,e,r-e,n),5===t.a?t.f(u,i,o,c,s):t(u)(i)(o)(c)(s)}var t,u,i,o,c,s;return Mr}),Hr=function(r){return{$:1,a:r}},Kr=function(r){return{$:0,a:r}},Qr=e(function(r,n){return{$:3,a:r,b:n}}),Ur=e(function(r,n){return{$:0,a:r,b:n}}),Xr=e(function(r,n){return{$:1,a:r,b:n}}),Zr=function(r){return{$:2,a:r}},rn=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},nn=K("p"),en=K("strong"),tn=H,un=x,an=e(function(r,n){return i(U,r,un(n))})("className"),on=an("content"),fn=an("is-large"),cn=an("is-medium"),sn=an("is-small"),vn=an(""),ln=function(r){return K(function(r){return"script"==r?"p":r}(r))},bn=t(function(r,n,e){return i(ln,r,function(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var e=c(r.a,n);r=r.b;for(var t=e;r.b;r=r.b)t=t.b=c(r.a,n);return e}(e,n))}),dn=an("container"),hn=i(bn,"div",v([dn])),gn=an("footer"),pn=i(bn,"footer",v([gn])),mn=an("has-text-centered"),$n=i(pn,f,v([i(hn,f,v([a(function(r){return i(bn,"div",v([on,function(){switch(r){case 0:return sn;case 1:return vn;case 2:return cn;default:return fn}}()]))},1,v([mn]),v([i(nn,f,v([tn("©"),tn(" 2019 "),i(en,f,v([tn("Ignition")]))]))]))]))])),yn=an("is-1"),_n=an("is-2"),jn=an("is-3"),wn=an("is-4"),kn=an("is-5"),An=an("is-6"),En=an("title"),Nn=function(r){return i(bn,function(){switch(r){case 0:return"h1";case 1:return"h2";case 2:return"h3";case 3:return"h4";case 4:return"h5";default:return"h6"}}(),v([En,function(){switch(r){case 0:return yn;case 1:return _n;case 2:return jn;case 3:return wn;case 4:return kn;default:return An}}()]))},xn=an("hero"),On=an("is-black"),Tn=an("is-bold"),Ln=an("is-danger"),Sn=an("is-dark"),Fn=an("is-fullheight"),Cn=an("is-info"),Mn=an("is-light"),qn=an("is-link"),Pn=an("is-primary"),Bn=an("is-success"),In=an("is-warning"),zn=an("is-white"),Rn=an("hero-body"),Dn=i(bn,"div",v([Rn])),Vn=a(function(r){var n=r.bV,e=r.br;return i(bn,"section",v([xn,r.aa?Tn:vn,function(){switch(n){case 0:return vn;case 1:return cn;case 2:return fn;default:return Fn}}(),function(){switch(e){case 0:return vn;case 1:return zn;case 4:return On;case 2:return Mn;case 3:return Sn;case 5:return Pn;case 7:return Cn;case 8:return Bn;case 9:return In;case 10:return Ln;default:return qn}}()]))},function(r,n){var e={};for(var t in r)e[t]=r[t];for(var t in n)e[t]=n[t];return e}({aa:!1,br:0,bV:0},{br:5,bV:2}),f,v([i(Dn,f,v([i(hn,f,v([a(Nn,0,f,v([tn("Ignition")])),a(Nn,1,f,v([tn("Self-service product configuration for complex offerings")]))]))]))])),Wn=K("main"),Gn=V(f),Jn=V(f),Yn=T,Hn=Yn(0),Kn=u(function(r,n,e,t){if(t.b){var u=t.a,f=t.b;if(f.b){var c=f.a,s=f.b;if(s.b){var v=s.a,l=s.b;if(l.b){var b=l.b;return i(r,u,i(r,c,i(r,v,i(r,l.a,e>500?a(Pr,r,n,Br(b)):o(Kn,r,n,e+1,b)))))}return i(r,u,i(r,c,i(r,v,n)))}return i(r,u,i(r,c,n))}return i(r,u,n)}return n}),Qn=t(function(r,n,e){return o(Kn,r,n,0,e)}),Un=e(function(r,n){return a(Qn,e(function(n,e){return i(Tr,r(n),e)}),f,n)}),Xn=S,Zn=e(function(r,n){return i(Xn,function(n){return Yn(r(n))},n)}),re=t(function(r,n,e){return i(Xn,function(n){return i(Xn,function(e){return Yn(i(r,n,e))},e)},n)}),ne=D,ee=e(function(r,n){var e=n;return function(r){return L(function(n){n(T(C(r)))})}(i(Xn,ne(r),e))});I.Task={b:Hn,c:t(function(r,n){return i(Zn,function(){return 0},(e=i(Un,ee(r),n),a(Qn,re(Tr),Yn(f),e)));var e}),d:t(function(){return Yn(0)}),e:e(function(r,n){return i(Zn,r,n)}),f:void 0},Ar={Main:{init:(kr={bE:{},b_:Nr,b0:function(){return i(Wn,f,v([Vn,$n]))}},_r({bE:function(){return l(kr.bE,Gn)},bW:function(){return Jn},b_:e(function(r,n){return l(i(kr.b_,r,n),Gn)}),b0:kr.b0}))((Er=0,{$:0,a:Er}))(0)}},r.Elm?function r(n,e){for(var t in e)t in n?"init"==t?h(6):r(n[t],e[t]):n[t]=e[t]}(r.Elm,Ar):r.Elm=Ar}(this)}]);