(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},106:function(e,t,a){e.exports=a(226)},111:function(e,t,a){},113:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),s=(a(111),a(10)),l=a.n(s),i=a(101),u=a(12),d=a(28),m=a(29),p=a(31),v=a(30),f=(a(113),a(256)),h=a(259),b=a(260),y=a(261),g=a(42),E=a.n(g),x=a(255),Y=a(32),O=a.n(Y),k=function(e,t){return{margin:e?"2% 0":t?"2% 8%":"0 2%"}},w={borderBottom:"10px solid rgba(0, 255, 255, 0.5)"},j={borderBottom:"10px solid rgba(0, 0, 255, 0.5)"},D={borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},S={borderBottom:"10px solid rgba(255, 0, 0, 0.5)"},M=function(e){console.log(e.data);var t=Object(x.a)("(max-width:900px)"),a=Object(x.a)("(max-width:770px)");return n.a.createElement("div",null,n.a.createElement(f.a,{container:!0,justify:"center",style:{margin:"50px 0px"}},n.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:2,style:Object.assign({},k(a,t),w)},e.data&&n.a.createElement(b.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:parseInt(e.data.confirmed),duration:2.5,separator:","})),n.a.createElement(y.a,{color:"textSecondary"},O()(e.data.lastupdatedtime,"DD-MM-YYYY").format("ddd MMM DD YYYY")),n.a.createElement(y.a,{variant:"body2"},"Total confirmed cases of COVID-19"))),n.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:2,style:Object.assign({},k(a,t),j)},e.data&&n.a.createElement(b.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Active"),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:parseInt(e.data.active),duration:2.5,separator:","})),n.a.createElement(y.a,{color:"textSecondary"},O()(e.data.lastupdatedtime,"DD-MM-YYYY").format("ddd MMM DD YYYY")),n.a.createElement(y.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:2,style:Object.assign({},k(a,t),D)},e.data&&n.a.createElement(b.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:parseInt(e.data.recovered),duration:2.5,separator:","})),n.a.createElement(y.a,{color:"textSecondary"},O()(e.data.lastupdatedtime,"DD-MM-YYYY").format("ddd MMM DD YYYY")),n.a.createElement(y.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(f.a,{item:!0,component:h.a,xs:12,md:2,style:Object.assign({},k(a,t),S)},e.data&&n.a.createElement(b.a,null,n.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(y.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:parseInt(e.data.deaths),duration:2.5,separator:","})),n.a.createElement(y.a,{color:"textSecondary"},O()(e.data.lastupdatedtime,"DD-MM-YYYY").format("ddd MMM DD YYYY")),n.a.createElement(y.a,{variant:"body2"},"Number of deaths caused by COVID-19")))))},C=a(55),I=a.n(C),B="https://api.covid19india.org/data.json",A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(B);case 3:return t=e.sent,a=t.data.statewise,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(B);case 3:return t=e.sent,a=t.data.cases_time_series,r=a.map((function(e){return{confirmed:e.totalconfirmed,active:e.totalconfirmed-e.totalrecovered,deaths:e.totaldeceased,recovered:e.totalrecovered,date:e.date}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(B);case 3:return t=e.sent,a=t.data.statewise,r=a.map((function(e){return e.state})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=a(65),V=a(98),T=a.n(V),W=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,this.setState({data:t}),console.log("Inside Chart: ",this.state.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.data,a=e.states,r=this.state.data.length?n.a.createElement(P.b,{data:{labels:this.state.data.map((function(e){return e.date})),datasets:[{data:this.state.data.map((function(e){return e.confirmed})),label:"Confirmed",borderColor:"rgb(0, 255, 255)",fill:!0},{data:this.state.data.map((function(e){return e.active})),label:"Active",borderColor:"rgb(0, 0, 255)",fill:!0},{data:this.state.data.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgb(255, 0, 0)",fill:!0},{data:this.state.data.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgb(0, 255, 0)",fill:!0}]}}):null,c=this.state.data.length?n.a.createElement(P.a,{data:{labels:["Active","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.active,t.recovered,t.deaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Current in ".concat(a)}}}):null;return n.a.createElement("div",{className:T.a.chartStyle},0!==a.length?c:r)}}]),a}(n.a.Component),J=a(262),R=a(265),L=a(263),U=a(264),z=a(99),F=a.n(z),K=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:(t=e.sent).shift(),this.setState({data:t,name:""}),console.log("Inside StatePicker: ",this.state.data);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement(J.a,{className:F.a.pickerStyle},n.a.createElement(R.a,{id:"inputLabel"},"Total"),n.a.createElement(L.a,{labelId:"inputLabel",value:this.state.name,onChange:function(t){e.props.handleStates(t.target.value),e.setState({name:t.target.value})}},n.a.createElement(U.a,{value:"Total"},"Total"),this.state.data.map((function(e,t){return n.a.createElement(U.a,{value:e,key:t},e)}))))}}]),a}(n.a.Component),$=a(100),q=a.n($),G=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[],states:"",value:{}},e.handleStates=function(){var t=Object(u.a)(l.a.mark((function t(a){var r,n,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(i.a)(e.state.data),t.prev=1,n.s();case 3:if((c=n.n()).done){t.next=10;break}if((o=c.value).state!==a){t.next=8;break}return r=o,t.abrupt("break",10);case 8:t.next=3;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:e.setState({value:r,states:a}),console.log(r);case 20:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),e.isEmpty=function(){for(var t in e.state.value)return!1;return!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t,value:t[0]}),console.log(this.state.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.value,a=e.states;return console.log("value: ",this.isEmpty(t)),n.a.createElement("div",{className:"App"},!this.isEmpty(t)&&n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"imgStyle",src:q.a,alt:"COVID-19"}),n.a.createElement(M,{data:t}),n.a.createElement(K,{handleStates:this.handleStates}),n.a.createElement(W,{data:t,states:a}),n.a.createElement(y.a,null,"@Achyut Utpal")))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports={chartStyle:"Chart_chartStyle__WUzPJ"}},99:function(e,t,a){e.exports={pickerStyle:"StatePicker_pickerStyle__2KPPW"}}},[[106,1,2]]]);
//# sourceMappingURL=main.e70c8fda.chunk.js.map