(()=>{"use strict";var e,t={227:()=>{const e=window.wp.blocks,t=window.wp.element,r=window.wp.i18n,a=window.wp.blockEditor,n=JSON.parse('{"u2":"caweb/ds-page-alert"}');(0,e.registerBlockType)(n.u2,{edit:function(e){let{setAttributes:n,attributes:{icon:o,message:s}}=e;const l=(0,a.useBlockProps)();return(0,t.createElement)("div",l,(0,t.createElement)("cagov-page-alert",{"data-icon":"ca-gov-icon-"+o,"data-message":s,class:"cagov-page-alert"},(0,t.createElement)(a.RichText,{tagName:"span",placeholder:(0,r.__)("Write alert…","cagov-design-system"),value:s,onChange:e=>{n({message:e})}})))},save:function(e){return(0,t.createElement)(a.InnerBlocks.Content,null)}})}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){r=e[p][0],n=e[p][1],o=e[p][2];for(var l=!0,i=0;i<r.length;i++)(!1&o||s>=o)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,n,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,s=r[0],l=r[1],i=r[2],c=0;if(s.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var p=i(a)}for(t&&t(r);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=self.webpackChunkds_page_alert=self.webpackChunkds_page_alert||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[431],(()=>a(227)));n=a.O(n)})();