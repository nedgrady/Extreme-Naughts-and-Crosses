(this["webpackJsonpextreme-naughts-and-crosses"]=this["webpackJsonpextreme-naughts-and-crosses"]||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var i,r,c,a=t(0),o=t.n(a),s=t(13),u=t.n(s),l=t(1),d=t(9),b=t(2),h=t(11),f=t(4),j=t(6),g="undefined"===typeof window,O=function(){},m={observe:O,unobserve:O},v=!g&&"ResizeObserver"in window?new ResizeObserver((function(e){var n,t=Object(l.a)(e);try{for(t.s();!(n=t.n()).done;){var i=n.value,r=i.target,c=r.getBoundingClientRect(),a=r.$$useElementDimensionsSet;a&&a(Object.assign(c,i))}}catch(o){t.e(o)}finally{t.f()}})):m,x=g?a.useEffect:a.useLayoutEffect,p=function(){function e(){Object(f.a)(this,e),this.bottom=void 0,this.height=void 0,this.left=void 0,this.right=void 0,this.top=void 0,this.width=void 0,this.x=void 0,this.y=void 0,this.bottom=0,this.height=0,this.left=0,this.right=0,this.top=0,this.width=0,this.x=0,this.y=0}return Object(j.a)(e,[{key:"toJSON",value:function(){return JSON.stringify(this)}}]),e}(),w=new p,y=new p,S={inlineSize:0,blockSize:0},z=Object.assign(y,{contentBoxSize:S,borderBoxSize:S,contentRect:w,target:null}),I=function(){var e=Object(a.useRef)(null),n=Object(a.useState)(z),t=Object(b.a)(n,2),i=t[0],r=t[1],c=Object(a.useCallback)((function(n){e.current&&v.unobserve(e.current),n instanceof Element&&(n.$$useElementDimensionsSet=r,v.observe(n))}),[]);return x((function(){return function(){e.current&&v.unobserve(e.current)}}),[]),[i,c]},R=t(12),k=t(3),C=R.a.table(i||(i=Object(h.a)(["\n    border-collapse: collapse;\n"]))),E=R.a.td(r||(r=Object(h.a)(["\n    vertical-align: middle;\n    text-align: center;\n\n    border-color: black;\n    padding: 0;\n    margin: 0;\n\n    border-width: 1px 1px 1px 1px;\n    border-style: solid;\n"])));function N(e){var n=e.boardState,t=e.onPiecePlaced,i=e.limitingDimensionInPixels,r="".concat(i/n.length,"px"),c={width:r,height:r,maxWidth:r,maxHeight:r,minWidth:r,minHeight:r,fontSize:"".concat(i/n.length/2-1,"px")};return Object(k.jsx)(C,{style:{width:"".concat(i,"px"),height:"".concat(i,"px")},children:Object(k.jsx)("tbody",{children:n.map((function(e,n){return Object(k.jsx)("tr",{children:e.map((function(e,i){return Object(k.jsx)(E,{"data-testid":"square-".concat(i,"-").concat(n),onClick:function(){return t(n,i)},style:c,children:e||""},"".concat(i,"-").concat(n))}))},n)}))})})}var P=R.a.div(c||(c=Object(h.a)(["\n    @media all and (orientation:portrait) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    @media all and (orientation:landscape) {\n        display: flex;\n        flex-direction: row;\n    }\n\n    text-align: center;\n    height: 100%;\n    max-height: 100%;\n"])));function A(e,n){var t,i=1,r={},c=Object(l.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value;if(a&&a===r?i++:i=1,i===e)return a;r=a}}catch(o){c.e(o)}finally{c.f()}return null}var F=function(e){var n=e.gridSize,t=e.players,i=e.numberOfPiecesInARowRequiredToWin,r=Object(a.useState)(function(e){var n=new Array(e);return n.fill(new Array(e)),n.forEach((function(e){return e.fill(null)})),n}(n)),c=Object(b.a)(r,2),o=c[0],s=c[1],u=function(e,n){var t,i,r=Object(l.a)(e);try{for(r.s();!(i=r.n()).done;){if(t=A(n,i.value))return t}}catch(O){r.e(O)}finally{r.f()}var c,a=e[0].map((function(n,t){return e.map((function(e){return e[t]}))})),o=Object(l.a)(a);try{for(o.s();!(c=o.n()).done;){if(t=A(n,c.value))return t}}catch(O){o.e(O)}finally{o.f()}var s=[],u=e.length-1,d=2*u,b=3*u;e.forEach((function(e){s.push([],[],[],[])}));for(var h=0;h<s.length;h++)for(var f=0;f<e.length-h;f++)s[h].push(e[f][f+h]),s[h+u].push(e[f][f-h]),s[h+d].push(e[e.length-1-f][f-h]),s[h+b].push(e[e.length-1-f][f+h]);for(var j=0,g=s;j<g.length;j++){if(t=A(n,g[j]))return t}}(o,i),h=t[function(e){var n=0;return e.forEach((function(e){n+=e.filter((function(e){return!!e})).length})),n}(o)%t.length],f=I(),j=Object(b.a)(f,2),g=j[0],O=g.width,m=g.height,v=j[1],x=Math.min(O,m);return Object(k.jsxs)(P,{ref:v,children:[Object(k.jsxs)("div",{style:{padding:"20px"},children:[Object(k.jsxs)("p",{children:[h," To Move"]}),Object(k.jsxs)("p",{children:[i," in a row to win"]}),u&&Object(k.jsx)("h4",{children:Object(k.jsxs)("strong",{children:[u," Wins!"]})})]}),Object(k.jsx)(N,{boardState:o,onPiecePlaced:function(e,n){if(o[e][n])return;var t=[];o.forEach((function(e){t.push(Object(d.a)(e))})),t[e][n]=h,s(t)},limitingDimensionInPixels:x})]})},W=t(5),B=Object(W.b)({key:"gridSize",default:10}),D=Object(W.b)({key:"winningNumberInARow",default:4}),T=Object(W.b)({key:"ExtremeNaughtsAndCrossesControls_controlsValues",default:{gridSize:10,winningNumberInARow:4,gameId:1}});function J(){Object(W.d)(B),Object(W.d)(D);var e=Object(W.d)(T),n=Object(a.useState)("10"),t=Object(b.a)(n,2),i=t[0],r=t[1],c=Object(a.useState)("4"),o=Object(b.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(1),d=Object(b.a)(l,2),h=d[0],f=d[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("label",{htmlFor:"grid-size",children:"Grid Size"}),Object(k.jsx)("input",{type:"number",id:"grid-size",value:i,onChange:function(e){r(e.target.value)}}),Object(k.jsx)("label",{htmlFor:"winning-number-in-a-row",children:"Winning Number in a Row"}),Object(k.jsx)("input",{type:"number",id:"winning-number-in-a-row",value:s,onChange:function(e){u(e.target.value)}}),Object(k.jsx)("button",{onClick:function(){e({gridSize:Number.parseInt(i),winningNumberInARow:Number.parseInt(s),gameId:h+1}),f(h+1)},children:"Reset"})]})}function $(){var e=Object(W.c)(T),n=e.gridSize,t=e.winningNumberInARow,i=e.gameId;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(J,{}),Object(k.jsx)(F,{gridSize:n,players:["\ud83e\udde7","\ud83d\udcc0","\ud83d\udc38"],numberOfPiecesInARowRequiredToWin:t},"".concat(n).concat(t).concat(i))]})}t(34);var q=function(){return Object(k.jsx)(W.a,{children:Object(k.jsx)($,{})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),c(e),a(e)}))};u.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(q,{})}),document.getElementById("root")),L()}},[[35,1,2]]]);
//# sourceMappingURL=main.b141f4f7.chunk.js.map