(()=>{"use strict";var e,t={701:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components,o=window.wp.primitives,a=(0,t.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(o.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),i=JSON.parse('{"u2":"caweb/link-grid-card"}');(0,e.registerBlockType)(i.u2,{edit:function(e){let{setAttributes:o,attributes:{linkText:i,linkInfo:c}}=e;const s=(0,l.useBlockProps)(),[w,u]=(0,t.useState)(!1);return(0,t.createElement)("div",s,(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(r.Toolbar,null,(0,t.createElement)(r.ToolbarGroup,null,(0,t.createElement)(r.ToolbarButton,{icon:a,label:"Change url settings for this section.",onClick:()=>{u((e=>!e))}},w&&(0,t.createElement)(l.URLPopover,null,(0,t.createElement)(l.__experimentalLinkControl,{value:c,onChange:e=>{o({linkInfo:e})},onRemove:()=>{o({linkInfo:""})},settings:[{id:"linkTarget",title:"Open in New Tab?"}],withCreateSuggestion:!1,allowDirectEntry:!0,withURLSuggestion:!1})))))),(0,t.createElement)("a",{class:"no-deco cagov-card"},(0,t.createElement)(l.RichText,{tagName:"span",className:"card-text",value:i,multiline:"false",allowedFormats:[],onChange:e=>{o({linkText:e})},placeholder:(0,n.__)("Link Text","cagov-design-system")}),(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},(0,t.createElement)("g",null,(0,t.createElement)("path",{d:"M0,0h24v24H0V0z",fill:"none"})),(0,t.createElement)("g",null,(0,t.createElement)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})))))},save:function(e){return(0,t.createElement)(l.InnerBlocks.Content,null)}})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,r,o)=>{if(!n){var a=1/0;for(w=0;w<e.length;w++){for(var[n,r,o]=e[w],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(w--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var w=e.length;w>0&&e[w-1][2]>o;w--)e[w]=e[w-1];e[w]=[n,r,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var w=c(l)}for(t&&t(n);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(w)},n=globalThis.webpackChunklink_grid_card=globalThis.webpackChunklink_grid_card||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[431],(()=>l(701)));r=l.O(r)})();