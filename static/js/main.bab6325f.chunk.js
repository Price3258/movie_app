(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(50)},27:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),i=n.n(s),o=(n(27),n(7)),c=n.n(o),l=n(18),u=n(2),m=n(3),p=n(5),v=n(4),d=n(6),h=(n(29),n(19)),f=n.n(h),b=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"Movie__Genre"},this.props.genre)}}]),t}(a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.poster,t=this.props.alt;return r.a.createElement("img",{src:e,alt:t,title:t,className:"Movie__Poster"})}}]),t}(a.Component);n(32);var _=function(e){var t=e.title,n=e.poster,a=e.genres,s=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(g,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(b,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(f.a,{text:s,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},y=n(20),j=n.n(y),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={movies:0},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(_,{key:e.id,title:e.title,poster:e.medium_cover_image,alt:e.title,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoading:!1});case 5:case"end":return e.stop()}},e)})),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.movies?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.bab6325f.chunk.js.map