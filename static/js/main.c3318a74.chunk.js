(this["webpackJsonpreact-practical"]=this["webpackJsonpreact-practical"]||[]).push([[0],{203:function(e,t,a){e.exports=a(473)},208:function(e,t,a){},209:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),o=a.n(l),c=(a(208),a(68)),u=a(69),i=a(76),s=a(75),m=(a(209),a(210),a(202)),b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"purple",size:"10rem"}))}}]),a}(n.Component),d=a(60);a(211);d.a.configure();var E=function(){return r.a.createElement("div",null,"Something Wrong",r.a.createElement("button",{className:"btn btn-info"},"button"))};function p(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){Object(d.a)("Basic Notification !",{position:d.a.POSITION.BOTTOM_LEFT}),d.a.success("Success Notification !",{position:d.a.POSITION.BOTTOM_RIGHT,autoClose:8e3}),d.a.error(r.a.createElement(E,null),{position:d.a.POSITION.TOP_RIGHT,autoClose:!1})},className:"btn btn-primary"},"Notify !"))}var g=a(64),f=a(78),h=a.n(f);function v(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return l(!0)}},"Modal"),r.a.createElement(h.a,{isOpen:a,onRequestClose:function(){return l(!1)},style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"grey"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"25px",outline:"none",padding:"20px"}}},r.a.createElement("h2",null,"dghfh"),r.a.createElement("p",null,"dsfsdgsfgf"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return l(!1)}},"Close"))))}h.a.setAppElement("#root");var C=a(118),O=(a(222),function(){return r.a.createElement("span",{style:{color:"red"}},"kdhgugg ",r.a.createElement("button",null,"sgs"))}),k=Object(n.forwardRef)((function(e,t){return r.a.createElement("div",{ref:t},r.a.createElement("div",null,"First Line"))}));function y(){return r.a.createElement("div",null,r.a.createElement(C.a,{content:"Basic Tippy",position:"bottom",arrow:!1,delay:1e3},r.a.createElement("button",null,"Tippy")),r.a.createElement("div",null,r.a.createElement(C.a,{content:r.a.createElement(O,null),position:"top",trigger:"click"},r.a.createElement("button",null,"Custom Tippy"))),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(C.a,{content:r.a.createElement(O,null),position:"bottom"},r.a.createElement(k,null))))}var j=a(66),S=a.n(j);function x(){var e=Object(j.useCountUp)({duration:5,end:1e3,startOnMount:!1}),t=e.countUp,a=e.start,n=e.pauseResume,l=e.reset,o=e.update;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("button",{onClick:a},"Start"),r.a.createElement("button",{onClick:l},"reset"),r.a.createElement("button",{onClick:n},"pause & resume"),r.a.createElement("button",{onClick:function(){return o(2e3)}},"Update to 2000")),r.a.createElement(S.a,{end:500}),r.a.createElement("br",null),r.a.createElement(S.a,{end:500,duration:10}),r.a.createElement("br",null),r.a.createElement("h1",null,r.a.createElement(S.a,{start:500,end:1e3,duration:10})),r.a.createElement("h1",null,r.a.createElement(S.a,{end:1e3,duration:10,prefix:"$",decimals:2})),r.a.createElement("h1",null,r.a.createElement(S.a,{end:1e3,duration:10,suffix:"USD",decimals:2})))}var M=a(194);function T(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(g.a)(o,2),u=c[0],i=c[1],s=Object(n.useRef)(null);return r.a.createElement("div",null,a?r.a.createElement("h2",null,"Hello shihas "):r.a.createElement("h2",null,"Hello guest"),r.a.createElement(h.a,{isOpen:u},r.a.createElement("h2",null,"You have been idle for a while"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){i(!1),l(!1),console.log("user is loged outg")}},"Log me out"),r.a.createElement("button",{onClick:function(){i(!1),console.log("user is active")}},"Keep me Logged in"))),r.a.createElement(M.a,{ref:s,timeout:1e5,onIdle:function(){console.log("user in idle"),i(!0)}}))}h.a.setAppElement("#root");var w=a(195),B=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={background:"#fff",status:!1},e.handleChangeComplete=function(t){var a=!e.state.status;e.setState({background:t.hex,status:a})},e.showPickerPopup=function(t){e.setState((function(e,t){return{status:!e.status}}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.showPickerPopup},"Show Picker"),this.state.status?r.a.createElement(w.SketchPicker,{color:this.state.background,onChangeComplete:this.handleChangeComplete}):null,r.a.createElement("h3",null," you selected color = ",this.state.background))}}]),a}(r.a.Component),N=a(196),I=a.n(N);a(385);function P(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(I.a,{selected:a,onChange:function(e){return l(e)},dateFormat:"dd-MM-yyyy",minDate:new Date,filterDate:function(e){return 0!==e.getDay()&&6!==e.getDay()},isClearable:!0,scrollableYearDropdown:!0}))}var A=a(199),D=a(117),L=a(18);function R(){var e=Object(A.a)(["\n        margin-top : 25px;\n        margin-bottom : 25px;\n    "]);return R=function(){return e},e}function z(){var e=Object(L.css)(R());return r.a.createElement("div",null,r.a.createElement(D.BounceLoader,{css:e,size:24,color:"red",loading:!0}),r.a.createElement(D.BarLoader,{css:e,size:48,color:"blue",loading:!0}),r.a.createElement(D.BeatLoader,{css:e,size:20,color:"black",loading:!0}))}var F=a(72);var J=function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(F.c,{data:{labels:["Jan","Feb","Mar","Apr","May"],datasets:[{label:"Sales for 2020(M)",data:[3,2,5,4,8],borderColor:["rgba(255, 206, 86, 0.2)"],backgroundColor:["rgba(255, 206, 86, 0.2)"],pointBackgroundColor:"rgba(255, 206, 86, 0.2)",pointBorderColor:"rgba(255, 206, 86, 0.2)"},{label:"Sales for 2019(M)",data:[1,3,4,7,3],borderColor:["rgba(54, 162, 235, 0.2)"],backgroundColor:["rgba(54, 162, 235, 0.2)"],pointBackgroundColor:"rgba(54, 162, 235, 0.2)",pointBorderColor:"rgba(54, 162, 235, 0.2)"}]},option:{title:{display:!0,text:"Line Chart"},scales:{yAxes:[{ticks:{min:0,max:8,stepsize:1}}]}}}))};var H=function(){return r.a.createElement("div",{className:"chart"},r.a.createElement("hr",null),r.a.createElement(F.a,{data:{labels:["Jan","Feb","Mar","Apr","May"],datasets:[{label:"Sales for 2020(M)",data:[3,2,5,4,8],borderColor:["rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)"],backgroundColor:["rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)"]},{label:"Sales for 2019(M)",data:[4,3,4,7,3],borderColor:["rgba(54, 162, 235, 1)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)","rgba(255, 206, 86, 0.2)"],backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)","rgba(54, 162, 235, 0.2)"]}]},option:{title:{display:!0,text:"Bar Chart"},scales:{yAxes:[{ticks:{min:0,max:10,stepSize:1}}]}}}))};var U=function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(F.b,{data:{labels:["Jan","Feb","Mar","Apr","May"],datasets:[{label:"Sales for 2020(M)",data:[3,2,5,4,8],backgroundColor:["red","blue","green","yellow","orange"]}]},option:{title:{display:!0,text:"Doughnut Chart"}}}))},_=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(z,null),r.a.createElement(P,null),r.a.createElement(B,null),r.a.createElement(y,null),r.a.createElement(v,null),r.a.createElement(p,null),r.a.createElement(U,null),r.a.createElement(H,null),r.a.createElement(J,null))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.c3318a74.chunk.js.map