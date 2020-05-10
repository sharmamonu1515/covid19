(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=a(6),i=a.n(s),u=a(8),l=a(77),d=a(78),f=a(91),p=a(90),m=a(79),h=a.n(m),v=a(243),b=a(245),y=a(246),E=a(247),g=a(80),C=a.n(g),w=a(81),O=a.n(w),x=a(31),j=a.n(x),k=function(e){var t=e.data,a=t.cases,n=t.recovered,c=t.deaths,o=t.updated;if(!a)return"Loading...";var s=[{type:"infected",total:a,description:"Number of active cases of COVID-19"},{type:"recovered",total:n,description:"Number of recovered cases of COVID-19"},{type:"deaths",total:c,description:"Number of deaths caused by COVID-19"}];return r.a.createElement("div",{className:j.a.container},r.a.createElement(v.a,{container:!0,spacing:3,jusitfy:"center"},s.map((function(e,t){return r.a.createElement(v.a,{key:t,item:!0,component:b.a,xs:12,md:3,className:O()(j.a.card,j.a[e.type])},r.a.createElement(y.a,null,r.a.createElement(E.a,{color:"textSecondary",className:j.a.cardLabel,gutterBottom:!0},e.type),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(C.a,{start:0,end:e.total,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},e.description)))}))))},_=a(16),N=a(86),D=a(51),S=a.n(D),M="https://corona.lmao.ninja/v2",A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M,"/all")).then((function(e){return e.json()}));case 3:return t=e.sent,a=t.cases,n=t.recovered,r=t.deaths,c=t.updated,e.abrupt("return",{cases:a,recovered:n,deaths:r,updated:c});case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://covid19.mathdro.id/api/daily");case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M,"/countries")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://api.covid19api.com/countries");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return e.Country})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=a(88),T=a.n(P),V=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var o=a.length?r.a.createElement(N.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",backgroundColor:"rgba(0, 0, 255, 0.3)",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(255, 0, 0, 0.5)",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{scales:{xAxes:[{display:!1}],yAxes:[{gridLines:{drawBorder:!1}}]}}}):null;return r.a.createElement("div",{className:T.a.container},o)},q=a(257),G=a(256),H=a(89),J=a.n(H),R=function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,L();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement(q.a,{className:J.a.formControl},r.a.createElement(G.a,{onChange:function(t){return e.handleCountryChange(t.target.value)}},r.a.createElement("option",{value:"global"},"Global"),c.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},K=a(251),W=a(253),X=a(254),F=a(250),Q=a(252),Y=a(249),z=a(219),U=a(248),Z=a(255);var $=function(e){var t=e.classes,a=e.order,n=e.orderBy,c=e.onRequestSort;return r.a.createElement(U.a,null,r.a.createElement(Y.a,null,[{id:"country",numeric:!1,label:"Country"},{id:"cases",numeric:!0,label:"Total Cases"},{id:"todayCases",numeric:!0,label:"New Cases"},{id:"deaths",numeric:!0,label:"Total Deaths"},{id:"todayDeaths",numeric:!0,label:"New Deaths"},{id:"recovered",numeric:!0,label:"Total Recovered"},{id:"active",numeric:!0,label:"Active Cases"},{id:"critical",numeric:!0,label:"Serious"},{id:"casesPerOneMillion",numeric:!0,label:"Total Cases / Per 1M"},{id:"deathsPerOneMillion",numeric:!0,label:"Deaths / Per 1M"}].map((function(e){return r.a.createElement(F.a,{key:e.id,align:"left",sortDirection:n===e.id&&a},r.a.createElement(Z.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(o=e.id,function(e){c(e,o)})},e.label,n===e.id?r.a.createElement("span",{className:t.visuallyHidden},"desc"===a?"sorted descending":"sorted ascending"):null));var o}))))};function ee(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var te=Object(K.a)((function(e){return{root:{width:"95%",marginTop:"100px"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:1,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},deathsCell:{backgroundColor:"red",color:"#fff",fontWeight:"bold"},newCasesCell:{backgroundColor:"#ffd68b"}}}));function ae(e){return(new Intl.NumberFormat).format(e)}var ne=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a=t.filter((function(e){return e.cases>0})),c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=te(),s=r.a.useState("desc"),l=Object(_.a)(s,2),d=l[0],f=l[1],p=r.a.useState("cases"),m=Object(_.a)(p,2),h=m[0],v=m[1];return r.a.createElement("div",{className:o.root},r.a.createElement(z.a,{className:o.paper},r.a.createElement(Q.a,null,r.a.createElement(W.a,{className:o.table,stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement($,{classes:o,order:d,orderBy:h,onRequestSort:function(e,t){f(h===t&&"asc"===d?"desc":"asc"),v(t)}}),r.a.createElement(X.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(a,function(e,t){return"desc"===e?function(e,a){return ee(e,a,t)}:function(e,a){return-ee(e,a,t)}}(d,h)).map((function(e,t){return r.a.createElement(Y.a,{key:e.country},r.a.createElement(F.a,{align:"left"},e.country),r.a.createElement(F.a,{align:"left"},ae(e.cases)),r.a.createElement(F.a,{align:"left",className:e.todayCases>0?o.newCasesCell:""},ae(e.todayCases),e.todayCases>0?"+":""),r.a.createElement(F.a,{align:"left"},ae(e.deaths)),r.a.createElement(F.a,{align:"left",className:e.todayDeaths>0?o.deathsCell:""},ae(e.todayDeaths),e.todayDeaths>0?"+":""),r.a.createElement(F.a,{align:"left"},ae(e.recovered)),r.a.createElement(F.a,{align:"left"},ae(e.active)),r.a.createElement(F.a,{align:"left"},ae(e.critical)),r.a.createElement(F.a,{align:"left"},ae(e.casesPerOneMillion)),r.a.createElement(F.a,{align:"left"},ae(e.deathsPerOneMillion)))})))))))},re=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:h.a.container},r.a.createElement("h1",null,"App"),r.a.createElement(k,{data:e}),r.a.createElement(R,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,null),r.a.createElement(ne,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root"))},31:function(e,t,a){e.exports={container:"Cards_container__21gY8",card:"Cards_card__1NQxG",infected:"Cards_infected__cLa3J",recovered:"Cards_recovered__-KqvV",deaths:"Cards_deaths__2XXax",cardLabel:"Cards_cardLabel__1t0oy"}},79:function(e,t,a){e.exports={container:"App_container__nAExG"}},88:function(e,t,a){e.exports={container:"Charts_container__17KT3"}},89:function(e,t,a){},98:function(e,t,a){e.exports=a(218)}},[[98,1,2]]]);
//# sourceMappingURL=main.a3bac110.chunk.js.map