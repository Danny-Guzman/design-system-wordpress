(()=>{"use strict";var e,t={227:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,a=window.wp.blockEditor,r=JSON.parse('{"u2":"caweb/ds-page-navigation"}');(0,e.registerBlockType)(r.u2,{edit:function(e){let{setAttributes:r,attributes:{title:l}}=e;const i=(0,a.useBlockProps)();return(0,t.createElement)("div",i,(0,t.createElement)("sidebar",null,(0,t.createElement)("cagov-page-navigation",null,(0,t.createElement)("nav",{"aria-labelledby":"page-navigation-label"},(0,t.createElement)(a.RichText,{tagName:"div",placeholder:(0,n.__)("On this page","cagov-design-system"),value:l,className:"label",onChange:e=>{r({title:e})}}),(0,t.createElement)("ul",null,(0,t.createElement)(a.InnerBlocks,{allowedBlocks:["caweb/page-navigation-links"]}))))))},save:function(e){return(0,t.createElement)(a.InnerBlocks.Content,null)}})}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,n,r,l)=>{if(!n){var i=1/0;for(v=0;v<e.length;v++){for(var[n,r,l]=e[v],o=!0,s=0;s<n.length;s++)(!1&l||i>=l)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(o=!1,l<i&&(i=l));if(o){e.splice(v--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[n,r,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[i,o,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(s)var v=s(a)}for(t&&t(n);c<i.length;c++)l=i[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(v)},n=globalThis.webpackChunkds_page_navigation=globalThis.webpackChunkds_page_navigation||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[431],(()=>a(227)));r=a.O(r)})();