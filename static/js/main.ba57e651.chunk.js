(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),i=(a(37),a(8)),c=a(1);a(38);var l=function(e){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null," - George Orwell, 1984"))},m=a(15),u=a.n(m),p=a(29),v=a(10),d=a(11),f=a(13),y=a(12),E=a(30),h=a.n(E),g=a(6),_=a.n(g);a(59);function b(e){var t=e.title,a=e.year,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:s,genres:o}}},r.a.createElement("img",{src:s,alt:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"}," ",n.slice(0,180),"..."))))}b.prototype={year:_.a.number.isRequired,title:_.a.string.isRequired,summary:_.a.string.isRequired,poster:_.a.string.isRequired,genres:_.a.arrayOf(_.a.string).isRequired};var N=b,O=(a(63),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))},k=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var w=function(){return r.a.createElement(i.a,null,r.a.createElement(j,null),r.a.createElement(c.a,{path:"/",exact:!0,component:O}),r.a.createElement(c.a,{path:"/about",component:l}),r.a.createElement(c.a,{path:"/movie-detail",component:k}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ba57e651.chunk.js.map