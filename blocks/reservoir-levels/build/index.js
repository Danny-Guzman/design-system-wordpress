(()=>{"use strict";var e,a={681:()=>{const e=window.wp.blocks,a=window.wp.element,t=(window.wp.i18n,window.wp.blockEditor),r=window.wp.components,l=[{label:"Select a Station",value:""},{label:"Bullards Bar Reservoir",value:"BUL"},{label:"Cachuma Lake",value:"CCH"},{label:"Camanche Reservoir",value:"CMN"},{label:"Castaic Lake",value:"CAS"},{label:"Diamond Valley Lake",value:"DMV"},{label:"Don Pedro Reservoir",value:"DNP"},{label:"Folsom Lake",value:"FOL"},{label:"Lake McClure",value:"EXC"},{label:"Lake Oroville",value:"ORO"},{label:"Lake Shasta",value:"SHA"},{label:"Millerton Lake",value:"MIL"},{label:"New Melones Reservoir",value:"NML"},{label:"Pine Flat Dam",value:"PNF"},{label:"San Luis Reservoir",value:"SNL"},{label:"Trinity Lake",value:"CLE"},{label:"Warm Springs Reservoir",value:"WRS"}],n=JSON.parse('{"u2":"cagov-design-system/reservoir-levels"}');(0,e.registerBlockType)(n.u2,{edit:function(e){let{setAttributes:n,attributes:{stationId:s,actDate:i,pctAvg:o,pctCap:c,cap:v,avg:u,storage:d}}=e;const p=(0,t.useBlockProps)(),h=135;let m=new Date,g=m.getDate(),b=m.getMonth()+1,w=m.getFullYear();g<10&&(g="0"+g),b<10&&(b="0"+b),m=w+"-"+b+"-"+g;let y=Math.round(h-h*c/100),E=Math.round(h-h*o/100);return null!=d&&d.toLocaleString("en-US"),Number.isInteger(u)&&u.toLocaleString("en-US"),Number.isInteger(v)&&v.toLocaleString("en-US"),(0,a.createElement)("div",p,(0,a.createElement)(r.SelectControl,{label:"Select a Station",value:s,options:l,onChange:e=>{n({stationId:e}),async function(e){let a="https://cdec.water.ca.gov/resapp/service/res/conditions?date="+m+"&stationIds="+e;const t=await fetch(a).then((e=>e.json()));n({actDate:t[0].actDate}),n({pctAvg:parseInt(t[0].pctAvg)}),n({pctCap:parseInt(t[0].pctCap)}),n({cap:parseInt(t[0].cap)}),n({avg:parseInt(t[0].avg)}),n({storage:parseInt(t[0].storage)})}(e)},className:"cdec-station-ids",__nextHasNoMarginBottom:!0}),(0,a.createElement)("drought-reservoir-levels",{"data-locale":"en-US"},null!=s&&""!=s?(0,a.createElement)("div",{class:"reservoir-data-viz"},(0,a.createElement)("div",{class:"reservoir-data-viz-overall"},(0,a.createElement)("div",{class:"sr-only"},(0,a.createElement)("h5",{class:"summary-header"},"Summary of current level")),(0,a.createElement)("p",{class:"current-level summary-stat"},(0,a.createElement)("span",{class:"data-viz-pct"},o,"%"),(0,a.createElement)("span",{style:{display:"block"}},"of average levels"))),(0,a.createElement)("div",{class:"reservoir-data-viz-graphic popover-container"},(0,a.createElement)("svg",{width:"150",height:"150",viewBox:"0 0 150 150","aria-hidden":"true"},(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:"rounded-water-bottom"},(0,a.createElement)("rect",{x:"30",y:"-15",width:"90",height:"150",rx:"15",ry:"15"}))),(0,a.createElement)("path",{id:"basin-capacity",d:"M0,150 L15,0 h10 v125 a15,15 0 0 0 15,15 h70 a15,15 0 0 0 15,-15 v-125 h10 L150,150 z",class:""}),(0,a.createElement)("rect",{id:"basin-water",x:"30",y:Number.isInteger(y)?y:0,width:"90",height:Number.isInteger(y)?61:0,"clip-path":"url(#rounded-water-bottom)"}),(0,a.createElement)("line",{id:"historical-line",x1:"0",y1:Number.isInteger(E)?E:0,x2:"150",y2:Number.isInteger(E)?E:0,"stroke-width":"3","stroke-dasharray":"3 6","stroke-linecap":"round"}),(0,a.createElement)("rect",{id:"historical-line-hover-target",x:"0",y:Number.isInteger(E)?E-5:-5,width:"150",height:"10"})))):""))}})}},t={};function r(e){var l=t[e];if(void 0!==l)return l.exports;var n=t[e]={exports:{}};return a[e](n,n.exports,r),n.exports}r.m=a,e=[],r.O=(a,t,l,n)=>{if(!t){var s=1/0;for(v=0;v<e.length;v++){for(var[t,l,n]=e[v],i=!0,o=0;o<t.length;o++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](t[o])))?t.splice(o--,1):(i=!1,n<s&&(s=n));if(i){e.splice(v--,1);var c=l();void 0!==c&&(a=c)}}return a}n=n||0;for(var v=e.length;v>0&&e[v-1][2]>n;v--)e[v]=e[v-1];e[v]=[t,l,n]},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};r.O.j=a=>0===e[a];var a=(a,t)=>{var l,n,[s,i,o]=t,c=0;if(s.some((a=>0!==e[a]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(o)var v=o(r)}for(a&&a(t);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(v)},t=globalThis.webpackChunkreservoir_levels=globalThis.webpackChunkreservoir_levels||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var l=r.O(void 0,[431],(()=>r(681)));l=r.O(l)})();