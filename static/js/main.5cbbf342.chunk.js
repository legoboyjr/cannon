(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(92)},60:function(e,t,n){},89:function(e,t){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),l=n(17),c=n(16),s=(n(60),n(1)),u=n(43),y=n(44),m=n(49),d=n(45),f=n(50),p=function(e){var t=e.initialAxis,n=e.initialControlPoint,a=e.endingControlPoint,r=e.endingAxis;return"\n      M".concat(t.x," ").concat(t.y,"\n      c ").concat(n.x," ").concat(n.y,"\n      ").concat(a.x," ").concat(a.y,"\n      ").concat(r.x," ").concat(r.y,"\n    ")},x=function(e){return 180*e/Math.PI},g=function(e,t,n,a){if(n>=0&&a>=0)return 90;if(n<0&&a>=0)return-90;var r=(n-e)/(a-t);return-1*x(Math.atan(r))},h=function(e){return e*Math.PI/180},E=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,r=-1*n+90;return{x:e+x(Math.cos(h(r)))/a,y:t-x(Math.sin(h(r)))/a}},v=function(){return r.a.createElement("rect",{style:{fill:"#30abef"},x:-2500,y:-1100,width:5e3,height:1200})},b=function(){return r.a.createElement("g",{id:"ground"},r.a.createElement("rect",{id:"ground-2","data-name":"ground",style:{fill:"#59a941"},x:-2500,y:0,width:5e3,height:100}),r.a.createElement("line",{x1:-2500,y1:0,x2:2500,y2:0,style:{stroke:"#458232",strokeWidth:"3px"}}))},k=function(e){var t={fill:"#a16012",stroke:"#75450e",strokeWidth:"2px"},n={initialAxis:{x:-40,y:60},initialControlPoint:{x:20,y:-60},endingControlPoint:{x:60,y:-60},endingAxis:{x:80,y:0}};return r.a.createElement("g",null,r.a.createElement("path",{style:t,d:p(n)}),r.a.createElement("line",{x1:-40,y1:60,x2:40,y2:60,style:t}))},P=function(e){var t={fill:"#999",stroke:"#666",strokeWidth:"2px"},n="rotate(".concat(e.rotation,", 0, 0)"),a={initialAxis:{x:-20,y:-70},initialControlPoint:{x:-40,y:170},endingControlPoint:{x:80,y:170},endingAxis:{x:40,y:0}};return r.a.createElement("g",{transform:n},r.a.createElement("path",{style:t,d:p(a)}),r.a.createElement("line",{x1:-20,y1:-70,x2:20,y2:-70,style:t}))},O=function(e){return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("text",{style:{fontFamily:'"Joti One", cursive',fontSize:80,fill:"#d6d33e"},x:"300",y:"80"},e.score))},S=n(24),w=n(25),j=function(e){return r.a.createElement("ellipse",{cx:e.position.x,cy:e.position.y,rx:"40",ry:"10",style:{fill:"#979797",stroke:"#5c5c5c"}})},A=function(e){var t={initialAxis:{x:e.position.x-20,y:e.position.y},initialControlPoint:{x:10,y:-25},endingControlPoint:{x:30,y:-25},endingAxis:{x:40,y:0}};return r.a.createElement("path",{style:{fill:"#b6b6b6",stroke:"#7d7d7d"},d:p(t)})},C=[-300,-150,150,300];function D(){var e=Object(S.a)(["\n  animation: "," 4s linear;\n"]);return D=function(){return e},e}function M(){var e=Object(S.a)(["\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(","px);\n  }\n"]);return M=function(){return e},e}var T=Object(w.b)(M(),1200),I=w.a.g(D(),T),_=function(e){return r.a.createElement(I,null,r.a.createElement(j,{position:e.position}),r.a.createElement(A,{position:e.position}))},B=function(e){var t={x:-400,y:-280,width:800,height:200,rx:10,ry:10,style:{fill:"transparent",cursor:"pointer"},onClick:e.onClick},n={textAnchor:"middle",x:0,y:-150,style:{fontFamily:'"Joti One", cursive',fontSize:60,fill:"#e3e3e3",cursor:"pointer"},onClick:e.onClick};return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("rect",t),r.a.createElement("text",n,"Tap To Start!"))},G=function(){var e={fontFamily:'"Joti One", cursive',fontSize:120,fill:"#cbca62"},t={initialAxis:{x:-190,y:-950},initialControlPoint:{x:95,y:-50},endingControlPoint:{x:285,y:-50},endingAxis:{x:380,y:0}},n=Object(s.a)({},t,{initialAxis:{x:-250,y:-780},initialControlPoint:{x:125,y:-90},endingControlPoint:{x:375,y:-90},endingAxis:{x:500,y:0}});return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("defs",null,r.a.createElement("path",{id:"AliensPath",d:p(t)}),r.a.createElement("path",{id:"GoHomePath",d:p(n)})),r.a.createElement("text",e,r.a.createElement("textPath",{xlinkHref:"#AliensPath"},"Aliens,")),r.a.createElement("text",e,r.a.createElement("textPath",{xlinkHref:"#GoHomePath"},"Go Home!")))},W=function(e){var t={x:-300,y:-600,width:600,height:300,style:{fill:"transparent",cursor:"pointer"},onClick:e.authenticate},n={textAnchor:"middle",x:0,y:-440,style:{fontFamily:'"Joti One", cursive',fontSize:45,fill:"#e3e3e3",cursor:"pointer"},onClick:e.authenticate};return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("rect",t),r.a.createElement("text",n,"Login to participate!"))},z=function(e){var t=e.position,n=t.x,a=t.y,i="rect"+e.player.rank,o="clip"+e.player.rank,l={fontFamily:'"Joti One", cursive',fontSize:35,fill:"#e3e3e3",cursor:"default"};e.player.currentPlayer&&(l.fill="#e9ea64");var c={style:{height:60,width:60},x:n-140,y:a-40,href:e.player.picture,clipPath:"url(#".concat(o,")")},s={width:55,height:55,rx:30,x:c.x,y:c.y};return r.a.createElement("g",null,r.a.createElement("defs",null,r.a.createElement("rect",Object.assign({id:i},s)),r.a.createElement("clipPath",{id:o},r.a.createElement("use",{xlinkHref:"#"+i}))),r.a.createElement("use",{xlinkHref:"#"+i,strokeWidth:"2",stroke:"black"}),r.a.createElement("text",{filter:"url(#shadow)",style:l,x:n-200,y:a},e.player.rank,"\xba"),r.a.createElement("image",c),r.a.createElement("text",{filter:"url(#shadow)",style:l,x:n-60,y:a},e.player.name),r.a.createElement("text",{filter:"url(#shadow)",style:l,x:n+350,y:a},e.player.maxScore))},H=function(e){var t=e.leaderboard||[];return t=t.sort(function(e,t){return e.maxScore===t.maxScore?e.name<=t.name?1:-1:e.maxScore<t.maxScore?1:-1}).map(function(t,n){return Object(s.a)({},t,{rank:n+1,currentPlayer:t.id===e.currentPlayer.id})}).filter(function(t,n){return n<3||t.id===e.currentPlayer.id?t:null}),r.a.createElement("g",null,r.a.createElement("text",{filter:"url(#shadow)",style:{fontFamily:'"Joti One", cursive',fontSize:50,fill:"#88da85",cursor:"default"},x:"-150",y:"-630"},"Leaderboard"),r.a.createElement("rect",{style:{fill:"transparent",stroke:"black",strokeDasharray:"15"},x:"-350",y:"-600",width:"700",height:"330"}),e.currentPlayer&&t.map(function(e,t){var n={x:-100,y:70*t-530};return r.a.createElement(z,{key:e.id,player:e,position:n})}),!e.currentPlayer&&r.a.createElement(W,{authenticate:e.authenticate}))};H.defaultProps={currentPlayer:null,leaderboard:null};var J=H,L=n(3),F=function(e){return r.a.createElement("ellipse",{style:{fill:"#777",stroke:"#444",strokeWidth:"2px"},cx:e.position.x,cy:e.position.y,rx:"16",ry:"16"})},R=function(e){var t={fill:"#da0d15",stroke:"#a51708",strokeWidth:"2px"},n={initialAxis:{x:e.position.x,y:e.position.y},initialControlPoint:{x:-20,y:-20},endingControlPoint:{x:-40,y:10},endingAxis:{x:0,y:40}},a={initialAxis:{x:e.position.x,y:e.position.y},initialControlPoint:{x:20,y:-20},endingControlPoint:{x:40,y:10},endingAxis:{x:0,y:40}};return r.a.createElement("g",{filter:"url(#shadow)"},r.a.createElement("path",{style:t,d:p(n)}),r.a.createElement("path",{style:t,d:p(a)}))},N=function(e){for(var t=[window.innerWidth/-2,-1100,window.innerWidth,1200],n=[],a=0;a<e.gameState.lives;a++){var i={x:-180-70*a,y:35};n.push(r.a.createElement(R,{key:a,position:i}))}return r.a.createElement("svg",{id:"aliens-go-home-canvas",preserveAspectRatio:"xMaxYMax none",onMouseMove:e.trackMouse,viewBox:t,onClick:e.shoot},r.a.createElement("defs",null,r.a.createElement("filter",{id:"shadow"},r.a.createElement("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2"}))),r.a.createElement(v,null),r.a.createElement(b,null),e.gameState.cannonBalls.map(function(e){return r.a.createElement(F,{key:e.id,position:e.position})}),r.a.createElement(P,{rotation:e.angle}),r.a.createElement(k,null),r.a.createElement(O,{score:e.gameState.kills}),!e.gameState.started&&r.a.createElement("g",null,r.a.createElement(B,{onClick:function(){return e.startGame()}}),r.a.createElement(G,null),r.a.createElement(J,{currentPlayer:e.currentPlayer,authenticate:L.signIn,leaderboard:e.players})),e.gameState.flyingObjects.map(function(e){return r.a.createElement(_,{key:e.id,position:e.position})}),n)},X=n(48),Y=n.n(X);L.configure({domain:"legoboyjr.auth0.com",clientID:"fgCoS3EnFqFahgakddOTPBjAqYnr9dRs",redirectUri:"http://localhost:3000/",responseType:"token id_token",scope:"openid profile manage:points",audience:"https://aliens-go-home.digituz.com.br"});var V=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).socket=null,n.currentPlayer=null,n}return Object(f.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this;L.handleAuthCallback(),L.subscribe(function(n){n&&(t.playerProfile=L.getProfile(),t.currentPlayer={id:t.playerProfile.sub,maxScore:0,name:t.playerProfile.name,picture:t.playerProfile.picture},e.props.loggedIn(t.currentPlayer),t.socket=Y()("http://localhost:3001",{query:"token=".concat(L.getAccessToken())}),t.socket.on("players",function(n){e.props.leaderboardLoaded(n),n.forEach(function(e){e.id===t.currentPlayer.id&&(t.currentPlayer.maxScore=e.maxScore)})}))}),setInterval(function(){t.props.moveObjects(t.canvasMousePosition)},10),window.onresize=function(){var e=document.getElementById("aliens-go-home-canvas");e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px")},window.onresize()}},{key:"componentWillReceiveProps",value:function(e){!e.gameState.started&&this.props.gameState.started&&this.currentPlayer.maxScore<this.props.gameState.kills&&this.socket.emit("new-max-score",Object(s.a)({},this.currentPlayer,{maxScore:this.props.gameState.kills}))}},{key:"trackMouse",value:function(e){this.canvasMousePosition=function(e){var t=document.getElementById("aliens-go-home-canvas"),n=t.createSVGPoint();n.x=e.clientX,n.y=e.clientY;var a=n.matrixTransform(t.getScreenCTM().inverse());return{x:a.x,y:a.y}}(e)}},{key:"shoot",value:function(){this.props.shoot(this.canvasMousePosition)}},{key:"render",value:function(){var e=this;return r.a.createElement(N,{angle:this.props.angle,currentPlayer:this.props.currentPlayer,gameState:this.props.gameState,players:this.props.players,startGame:this.props.startGame,trackMouse:function(t){return e.trackMouse(t)},shoot:this.shoot})}}]),t}(a.Component),q="LEADERBOARD_LOADED",U="LOGGED_IN",K="MOVE_OBJECTS",Q="SHOOT",Z="START_GAME",$=Object(l.b)(function(e){return{angle:e.angle,gameState:e.gameState,currentPlayer:e.currentPlayer,players:e.players}},function(e){return{leaderboardLoaded:function(t){e(function(e){return{type:q,players:e}}(t))},loggedIn:function(t){e(function(e){return{type:U,player:e}}(t))},moveObjects:function(t){e(function(e){return{type:K,mousePosition:e}}(t))},startGame:function(){e({type:Z})},shoot:function(t){e(function(e){return{type:Q,mousePosition:e}}(t))}}})(V),ee=n(7),te=function(e){if(!e.gameState.started)return e;var t=(new Date).getTime(),n=e.gameState,a=n.lastObjectCreatedAt,r=n.flyingObjects;if(!(t-a.getTime()>1e3&&r.length<4))return e;var i=(new Date).getTime(),o=Math.floor(4*Math.random()),l={position:{x:C[o],y:-1100},createdAt:(new Date).getTime(),id:i};return Object(s.a)({},e,{gameState:Object(s.a)({},e.gameState,{flyingObjects:Object(ee.a)(e.gameState.flyingObjects).concat([l]),lastObjectCreatedAt:new Date})})},ne=function(e){return e.filter(function(e){return e.position.y>-800&&e.position.x>-500&&e.position.x<500}).map(function(e){var t=e.position,n=t.x,a=t.y,r=e.angle;return Object(s.a)({},e,{position:E(n,a,r,5)})})},ae=function(e,t){var n=[];return t.forEach(function(t){var a=(new Date).getTime()-t.createdAt,r=t.position.x,i=t.position.y+a/4e3*1200,o={x1:r-40,y1:i-10,x2:r+40,y2:i+10};e.forEach(function(e){var a={x1:e.position.x-8,y1:e.position.y-8,x2:e.position.x+8,y2:e.position.y+8};(function(e,t){return e.x1<t.x2&&e.x2>t.x1&&e.y1<t.y2&&e.y2>t.y1})(o,a)&&n.push({cannonBallId:e.id,flyingDiscId:t.id})})}),n};var re=function(e,t){if(!e.gameState.started)return e;var n=ne(e.gameState.cannonBalls),a=t.mousePosition||{x:0,y:0},r=te(e),i=(new Date).getTime(),o=r.gameState.flyingObjects.filter(function(e){return i-e.createdAt<4e3}),l=e.gameState.flyingObjects.length>o.length,c=e.gameState.lives;l&&c--;var u=c>0;u||(o=[],n=[],c=3);var y=a.x,m=a.y,d=g(0,0,y,m),f=ae(n,o),p=f.map(function(e){return e.cannonBallId}),x=f.map(function(e){return e.flyingDiscId});n=n.filter(function(e){return p.indexOf(e.id)}),o=o.filter(function(e){return x.indexOf(e.id)});var h=e.gameState.kills+x.length;return Object(s.a)({},r,{gameState:Object(s.a)({},r.gameState,{flyingObjects:o,cannonBalls:Object(ee.a)(n),lives:c,started:u,kills:h}),angle:d})},ie=function(e,t){return Object(s.a)({},e,{gameState:Object(s.a)({},t,{started:!0})})};var oe=function(e,t){if(!e.gameState.started)return e;var n=e.gameState.cannonBalls;if(2===n.length)return e;var a=t.mousePosition,r=a.x,i=a.y,o={position:{x:0,y:0},angle:g(0,0,r,i),id:(new Date).getTime()};return Object(s.a)({},e,{gameState:Object(s.a)({},e.gameState,{cannonBalls:Object(ee.a)(n).concat([o])})})},le={started:!1,kills:0,lives:3,flyingObjects:[],lastObjectCreatedAt:new Date,currentPlayer:null,players:null,cannonBalls:[]},ce={angle:45,gameState:le};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(s.a)({},e,{players:t.players});case U:return Object(s.a)({},e,{currentPlayer:t.player});case K:return re(e,t);case Z:return ie(e,le);case Q:return oe(e,t);default:return e}},ue=Object(c.b)(se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(l.a,{store:ue},r.a.createElement($,null)),document.getElementById("root"))}},[[52,2,1]]]);
//# sourceMappingURL=main.5cbbf342.chunk.js.map