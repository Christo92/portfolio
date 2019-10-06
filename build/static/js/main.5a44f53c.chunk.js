(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{247:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=a(6),s=a(13),m=a(79),i=a(80),u=a(93),p=a(81),E=a(94),d=a(29),_=a(82),b=a(20),f=a(41),h=a(85),v=a.n(h);function N(){var e=Object(d.a)(["\n    animation: 3s ","\n"]);return N=function(){return e},e}function k(){var e=Object(d.a)(["",""]);return k=function(){return e},e}var w=Object(b.keyframes)(k(),f.fadeIn),g=b.default.div(N(),w),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1,loading:!0,animation:!1},a.handleAnimation=function(){setTimeout(function(){a.setState({animation:!a.state.animation})},7500)},a.goHome=function(){if(!0===a.state.animation)return l.a.createElement(s.a,{to:"/home"})},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({done:!e.state.done})},3e3),this.handleAnimation()}},{key:"render",value:function(){var e=this.state.loading;return l.a.createElement("div",{className:"loading"},this.state.done?l.a.createElement("div",{className:"loading__container"},l.a.createElement(g,null,l.a.createElement("img",{src:v.a,className:"loading__logo",alt:"logo-loading"}))):l.a.createElement(_.SwishSpinner,{size:30,color:"#FFFFFF",loading:e}),this.goHome())}}]),t}(n.Component),y=a(88),S=function(){return l.a.createElement(y.bubble,null,l.a.createElement(o.b,{className:"menu-item",to:"/home"},"Home"),l.a.createElement(o.b,{className:"menu-item",to:"/about"},"About"),l.a.createElement(o.b,{className:"menu-item",to:"/works"},"Works"))},x=a(89),O=a.n(x),F=function(){return l.a.createElement("div",{className:"header"},l.a.createElement(S,null),l.a.createElement("header",{className:"header__navigation-bar"},l.a.createElement(o.b,{className:"header__link",to:"/home"},l.a.createElement("img",{src:O.a,className:"header__logo",alt:"logo"}))))},J=a(90),C=a.n(J),A=function(){return l.a.createElement("div",{className:"typewritter"},l.a.createElement(C.a,{className:"typewritter__sentences",emptyPause:2e3,items:["Bonjour \xe0 tous !","Je suis Christopher","Voici mon portfolio"]}))},M=function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"footer__copyright"},"\xa9 All rights reserved, ",e))};function T(){var e=Object(d.a)(["\n    animation: 1s ","\n"]);return T=function(){return e},e}function z(){var e=Object(d.a)(["",""]);return z=function(){return e},e}var B=Object(b.keyframes)(z(),f.fadeIn),D=b.default.div(T(),B),H=function(){return l.a.createElement(D,null,l.a.createElement("div",{className:"home"},l.a.createElement(F,null),l.a.createElement(A,null),l.a.createElement(o.b,{to:"/about",className:"home__to-about"}," > Explorer le site"),l.a.createElement(M,null)))},I=a(31),P=function(){return l.a.createElement("div",{className:"about"},l.a.createElement(I.a,{type:"top",delay:1e3,duration:2e3},l.a.createElement(F,{key:"1"})),l.a.createElement(I.a,{type:"scale",delay:1e3,duration:2e3},l.a.createElement("div",{key:"1",className:"about__container"},l.a.createElement("div",{className:"about__presentation"},l.a.createElement("h2",{className:"about__title"},"\xc0 propos"),l.a.createElement("p",{className:"about__text"},"Je suis un d\xe9veloppeur javascript r\xe9sidant proche de Paris. ",l.a.createElement("br",null),"En commen\xe7ant \xe0 apprendre le javascript, je me suis tout d\u2019abord principalement int\xe9ress\xe9 au Front End. ",l.a.createElement("br",null),"Toutefois, par la suite je me suis int\xe9ress\xe9 de plus en plus sur le Back End. ",l.a.createElement("br",null)),l.a.createElement("p",{className:"about__text"},"Mon objectif est de devenir un d\xe9v\xe9loppeur FullStack JS. Je recherche un CDI. ")),l.a.createElement("div",{className:"about__skills"},l.a.createElement("h2",{className:"about__skills-title"},"Comp\xe9tences"),l.a.createElement("div",{className:"about__list-skills"},l.a.createElement("p",{className:"about__list-title"},"- En Front :"),l.a.createElement("div",null,l.a.createElement("p",null,"React JS"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"SCSS"),l.a.createElement("p",null,"BEM"),l.a.createElement("p",null,"ES6"),l.a.createElement("p",null,"Webpack"))),l.a.createElement("div",{className:"about__list-skills"},l.a.createElement("p",{className:"about__list-title"},"- En Back :"),l.a.createElement("div",null,l.a.createElement("p",null,"Node JS"),l.a.createElement("p",null,"Mongo"),l.a.createElement("p",null,"Express"))),l.a.createElement("div",{className:"about__list-skills"},l.a.createElement("p",{className:"about__list-title"},"- En Testing :"),l.a.createElement("div",null,l.a.createElement("p",null,"Jest"),l.a.createElement("p",null,"Enzyme")))),l.a.createElement("div",{className:"about__contact"},l.a.createElement("h2",{className:"about__contact-title"},"Contact"),l.a.createElement("p",{className:"about__contact-sentence"},"Vous pouvez me contactez via mon email ou mon linkedin !"),l.a.createElement("div",{className:"about__contact-info"},l.a.createElement("p",null,"christopher.loubassou@gmail.com"),l.a.createElement("a",{className:"about__linkedin",href:"https://www.linkedin.com/in/christopherloubassou/",rel:"noopener noreferrer",target:"_blank"},"Christopher Loubassou"))),l.a.createElement(o.b,{to:"/works",className:"about__to-works"}," > Voir les projets"))))},R=a(92),V=a.n(R),W=a(64),q=a.n(W),L=function(){return l.a.createElement("div",{className:"works"},l.a.createElement(I.a,{type:"top",delay:1e3,duration:2e3},l.a.createElement(F,{key:"1"})),l.a.createElement(I.a,{type:"bottom",delay:1e3,duration:2e3},l.a.createElement("div",{key:"1",className:"works__container"},l.a.createElement("h2",{className:"works__title"},"Mes travaux"),l.a.createElement("div",{className:"works__lists"},l.a.createElement("div",{className:"works__project"},l.a.createElement("a",{href:"https://www.smart-tribune.com/fr/"},l.a.createElement("img",{className:"works__mission",src:V.a,alt:""})),l.a.createElement("a",{className:"works__project-title",href:"https://www.smart-tribune.com/fr/"},"Smart Tribune")),l.a.createElement("div",{className:"works__project"},l.a.createElement("img",{className:"works__mission",src:q.a,alt:""}),l.a.createElement("p",{className:"works__project-title"},"Weather Project")),l.a.createElement("div",{className:"works__project"},l.a.createElement("img",{className:"works__mission",src:q.a,alt:""}),l.a.createElement("p",{className:"works__project-title"},"Chat project"))),l.a.createElement(o.b,{to:"/works",className:"works__to-home"}," > Retour \xe0 l'accueil"))))},Y=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(s.b,{exact:!0,path:"/",component:j}),l.a.createElement(s.b,{path:"/home",component:H}),l.a.createElement(s.b,{path:"/about",component:P}),l.a.createElement(s.b,{path:"/works",component:L}))};a(247);c.a.render(l.a.createElement(o.a,null,l.a.createElement(Y,null)),document.querySelector("#root"))},64:function(e,t,a){e.exports=a.p+"static/media/project-incoming.cd16f736.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/logo-animate.cfdef02b.svg"},89:function(e,t,a){e.exports=a.p+"static/media/logo.64febe6b.svg"},92:function(e,t,a){e.exports=a.p+"static/media/smart-tribune.9de509e9.jpg"},97:function(e,t,a){e.exports=a(248)}},[[97,1,2]]]);
//# sourceMappingURL=main.5a44f53c.chunk.js.map