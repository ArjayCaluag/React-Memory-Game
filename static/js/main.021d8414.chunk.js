(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,function(t){t.exports=JSON.parse('[{"id":1,"image":"https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif"},{"id":2,"image":"https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif"},{"id":3,"image":"https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif"},{"id":4,"image":"https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif"},{"id":5,"image":"https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif"},{"id":6,"image":"https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif"},{"id":7,"image":"https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif"},{"id":8,"image":"https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif"},{"id":9,"image":"https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif"},{"id":10,"image":"https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif"},{"id":11,"image":"https://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif"},{"id":12,"image":"https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif"}]')},,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var o=s(1),n=s.n(o),i=s(3),c=s.n(i),r=(s(13),s(4)),a=s(5),l=s(8),g=s(7),h=(s(14),s(15),s(0));var m=function(t){return Object(h.jsx)("div",{className:"parent",children:Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:" Nba Clicky Game"}),Object(h.jsx)("li",{children:" Click an image to begin!"}),Object(h.jsxs)("li",{children:["Score: ",t.score,"| TopScore: ",t.topScore]})]})})})};s(17);var u=function(t){return Object(h.jsx)("div",{className:"card col-md-3",children:Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{alt:t.name,src:t.image,onClick:function(){return t.imageClick(t.id)}})})})},d=s(6);s(18);var j=function(t){return Object(h.jsx)("div",{className:"wrapper",children:t.children})};s(19);var b=function(t){return Object(h.jsxs)("div",{className:"jumbotron",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{class:"display-3",children:"NBA Clicky game!"}),Object(h.jsx)("h2",{class:"lead",children:"Test your memory and see how many cards you can click without clicking the same twice!"}),Object(h.jsx)("h3",{children:t.alertMsg})]})},f=0,p=0,O="",v=function(t){Object(l.a)(s,t);var e=Object(g.a)(s);function s(){var t;Object(r.a)(this,s);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={topScore:0,score:0,teams:d,alertMsg:O},t.imageClick=function(e){var s=t.state.teams,o=s.filter((function(t){return t.id===e}));if(o[0].clicked){f=0,console.log(f),O="You lose! Try again.";for(var n=0;n<s.length;n++)s[n].clicked=!1;t.setState({score:f}),t.setState({teams:s}),t.setState({alertMsg:O})}else f<=12&&(o[0].clicked=!0,f++,console.log(f),O="You are correct!");f>p&&(p=f,t.setState({topScore:p})),s.sort((function(t,e){return.5-Math.random()})),t.setState({teams:s}),t.setState({score:f}),t.setState({alertMsg:O})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{score:this.state.score,topScore:this.state.topScore}),Object(h.jsx)(b,{alertMsg:this.state.alertMsg}),Object(h.jsx)(j,{children:this.state.teams.map((function(e){return Object(h.jsx)(u,{imageClick:t.imageClick,id:e.id,image:e.image},e.id)}))})]})}}]),s}(o.Component),x=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(e){var s=e.getCLS,o=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),o(t),n(t),i(t),c(t)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.021d8414.chunk.js.map