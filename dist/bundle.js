(()=>{"use strict";var e={808:(e,i,t)=>{t.d(i,{Z:()=>r});var a=t(81),n=t.n(a),u=t(645),o=t.n(u)()(n());o.push([e.id,"",""]);const r=o},645:e=>{e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var t="",a=void 0!==i[5];return i[4]&&(t+="@supports (".concat(i[4],") {")),i[2]&&(t+="@media ".concat(i[2]," {")),a&&(t+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),t+=e(i),a&&(t+="}"),i[2]&&(t+="}"),i[4]&&(t+="}"),t})).join("")},i.i=function(e,t,a,n,u){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==u&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=u),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),i.push(l))}},i}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var i=[];function t(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function a(e,a){for(var u={},o=[],r=0;r<e.length;r++){var s=e[r],c=a.base?s[0]+a.base:s[0],l=u[c]||0,d="".concat(c," ").concat(l);u[c]=l+1;var m=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)i[m].references++,i[m].updater(p);else{var v=n(p,a);a.byIndex=r,i.splice(r,0,{identifier:d,updater:v,references:1})}o.push(d)}return o}function n(e,i){var t=i.domAPI(i);return t.update(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap&&i.supports===e.supports&&i.layer===e.layer)return;t.update(e=i)}else t.remove()}}e.exports=function(e,n){var u=a(e=e||[],n=n||{});return function(e){e=e||[];for(var o=0;o<u.length;o++){var r=t(u[o]);i[r].references--}for(var s=a(e,n),c=0;c<u.length;c++){var l=t(u[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}u=s}}},569:e=>{var i={};e.exports=function(e,t){var a=function(e){if(void 0===i[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}i[e]=t}return i[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var i=document.createElement("style");return e.setAttributes(i,e.attributes),e.insert(i,e.options),i}},565:(e,i,t)=>{e.exports=function(e){var i=t.nc;i&&e.setAttribute("nonce",i)}},795:e=>{e.exports=function(e){var i=e.insertStyleElement(e);return{update:function(t){!function(e,i,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,n&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var u=t.sourceMap;u&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),i.styleTagTransform(a,e,i.options)}(i,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)}}}},589:e=>{e.exports=function(e,i){if(i.styleSheet)i.styleSheet.cssText=e;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(e))}}}},i={};function t(a){var n=i[a];if(void 0!==n)return n.exports;var u=i[a]={id:a,exports:{}};return e[a](u,u.exports,t),u.exports}t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),t.nc=void 0,(()=>{var e=t(379),i=t.n(e),a=t(795),n=t.n(a),u=t(569),o=t.n(u),r=t(565),s=t.n(r),c=t(216),l=t.n(c),d=t(589),m=t.n(d),p=t(808),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=n(),v.insertStyleElement=l(),i()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;const f=document.querySelector(".content");document.querySelector("#home").addEventListener("click",(()=>{f.innerHTML='<div class="w-9/12 h-full bg-slate-200 rounded-lg py-4 px-4"> <h1 class="text-center">welcome to our resturant!</h1> <div> food Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> </div> '})),document.querySelector("#menue").addEventListener("click",(()=>{f.innerHTML='<div class="w-9/12 h-full bg-slate-200 rounded-lg py-4 px-4"> <h1 class="text-center">welcome to our resturant!</h1> <div> food menue yum yum Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> </div> '})),document.querySelector("#about").addEventListener("click",(()=>{f.innerHTML='<div class="w-9/12 h-full bg-slate-200 rounded-lg py-4 px-4"> <h1 class="text-center">welcome to our resturant!</h1> <div> we make food yum yum Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium illum aliquid beatae, magni quia hic ab exercitationem sequi facere fuga natus optio ad ut inventore. Incidunt soluta voluptatibus eum? </div> </div>'})),console.log("helllo")})()})();