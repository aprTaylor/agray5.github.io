(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.r(t);var r=n(152),a=n.n(r),i=(n(34),n(0)),o=n.n(i),c=n(156),s=n(36),l=n.n(s),u=n(7),m=n.n(u),p=n(148),h=n(4),d=n.n(h),f=n(158),g=n.n(f),b=n(227),y=n(149),v=n(150);function w(){var e=a()(["flex-direction: column;"]);return w=function(){return e},e}var x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.prototype={theme:d.a.object.isRequired,img:d.a.object.isRequired,title:d.a.string.isRequired,desc:d.a.string.isRequired,width:d.a.number,height:d.a.number,links:d.a.arrayOf(d.a.arrayOf(d.a.string))},n.toggleDiv=n.toggleDiv.bind(l()(n)),n}m()(t,e);var n=t.prototype;return n.toggleDiv=function(e){this.setState({isOpen:!this.state.isOpen}),this.refs.overlay.style.height=this.state.isOpen?"0":"100%"},n.render=function(){return o.a.createElement(k,{theme:this.props.theme,width:this.props.width,maxHeight:this.props.height,className:"hoverImage",onClick:this.toggleDiv},o.a.createElement(E,{fluid:this.props.img,alt:this.props.title+" portfolio image"}),o.a.createElement("div",{className:"overlay",ref:"overlay"},o.a.createElement("div",{className:"text"},this.props.title),this.props.links?o.a.createElement("ul",{className:"imageHoverUL"},this.props.links.map(function(e,t){return o.a.createElement("a",{href:e[1],target:"_blank",className:"imageHoverLink"},o.a.createElement("li",{key:t},e[0]))})):""))},t}(o.a.Component),k=p.default.div.withConfig({displayName:"imageHoverDiv__ImageContainer",componentId:"iekzu3-0"})(["position:relative;",";",";color:",";text-align:center;& .imageHoverUL{padding:0;display:flex;align-items:center;justify-content:center;","}& .imageHoverLink{text-decoration:none;list-style-type:none;border-style:solid;background-color:",";border-color:",";border-width:0px 0px 3px;box-shadow:0 -1px 0 rgba(255,255,255,0.1) inset;border-radius:6px;cursor:pointer;transition:all 200ms ease-in-out 0s;font-weight:700;padding:8px;margin-top:10px;margin-right:10px;font-size:18px;color:white;width:22%;display:list-item;&:hover,&:focus,&:active{background:",";border-color:",";}& a{color:",";text-decoration:none;}}& .text{margin-top:10px;}& .overlay{position:absolute;bottom:0;left:0;right:0;background-color:",";overflow:hidden;width:100%;height:0;transition:.5s ease;}&:hover .overlay{height:100% !important;}"],function(e){return e.width?"width:"+e.width:""},function(e){return e.maxHeight?"max-height:"+e.maxHeight:""},function(e){return e.theme.colors.primary},y.b.tablet(w()),function(e){return e.theme.colors.menu},function(e){return Object(b.a)(.5,e.theme.colors.menu)},function(e){return Object(b.a)(.1,e.theme.colors.menu)},function(e){return Object(b.c)(.5,e.theme.colors.menu)},function(e){return e.theme.colors.primary},function(e){return Object(b.b)(e.theme.colors.menu,.5)}),E=Object(p.default)(g.a).withConfig({displayName:"imageHoverDiv__StyledImg",componentId:"iekzu3-1"})(["display:block;width:100%;height:100%;object-fit:cover;"]),O=n(157);function j(){var e=a()(["margin: 5px;"]);return j=function(){return e},e}function C(){var e=a()(["margin: 70px 0 0 10%;"]);return C=function(){return e},e}n.d(t,"query",function(){return N});var _=["Prompt Generator","Weather App","Calender","Processing Tic-Tac-Toe","Random 2D Map","Mock Airplane Reservation Server"],S=[[["Live","aprgray.com/PromptGenerator/"],["Github","https://github.com/agray5/PromptGenerator"]],[["Live","aprgray.com/Weather-Widget/"],["Github","https://github.com/agray5/Weather-Widget"]],[["Live","aprgray.com/calender/"],["Github","https://github.com/agray5/Calender"]],[["Github","https://github.com/agray5/ProcessingTicTacToe"]],[["Github","https://github.com/agray5/Random-Tilemap-In-Godot"]],[["Download","aprgray.com/downloads/Multiprocessing%20Server.zip"]]],N="1617247032",I=p.default.div.withConfig({displayName:"portfolio__Root",componentId:"sc-1dyeik3-0"})(["position:absolute;top:0;height:100%;background:",";width:100%;& .titleContainer{margin-top:0;}"],function(e){return e.theme.colors.primary}),q=p.default.div.withConfig({displayName:"portfolio__Container",componentId:"sc-1dyeik3-1"})(["display:flex;flex-wrap:wrap;justify-content:left;align-content:flex-start;overflow-y:auto;height:100%;margin:20px 0;"," & .hoverImage{margin:5px 0;","}"],y.b.tablet(C()),y.b.tablet(j()));t.default=function(e){var t=e.data.portfolio.edges,n=function(e){for(var t=[],n=0;n<e.length;n++)t.push({img:e[n].node.childImageSharp.fluid,title:_[n],links:S[n]});return t}(t);return o.a.createElement(c.a,null,o.a.createElement(I,{theme:v.b},o.a.createElement(O.a,{title:"Portfolio",theme:Object.assign({},v.b,{colors:Object.assign({},v.b.colors,{primary:v.b.colors.accent})})}),o.a.createElement(q,{theme:v.b},t.map(function(e,t){return o.a.createElement(x,Object.assign({},n[t],{theme:v.b,width:"400px",height:"200px",key:t}))}))))}},149:function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return p});n(74),n(55),n(35),n(161);var r=n(0),a=n.n(r),i=n(162),o=n.n(i),c=n(148),s={giant:1170,desktop:992,tablet:768,phone_landscape:600,phone:300},l={giant:2e3,desktop:770,tablet:700,phone:450,phone_landscape:300},u=function(e){return a.a.createElement(o.a,{minDeviceWidth:s.desktop},e.children)},m=Object.keys(s).reduce(function(e,t){var n=s[t]/16;return e[t]=function(){return Object(c.css)(["@media (min-width:","em){","}"],n,c.css.apply(void 0,arguments)).join("")},e},{}),p=Object.keys(s).reduce(function(e,t){var n=s[t]/16;return e[t]=function(){return Object(c.css)(["@media (max-width:","em){","}"],n,c.css.apply(void 0,arguments)).join("")},e},{});Object.keys(l).reduce(function(e,t){var n=l[t];return e[t]=function(){return Object(c.css)(["@media (min-height:","px){","}"],n,c.css.apply(void 0,arguments)).join("")},e},{})},150:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(34);var r={primary:"#49bece",secondary:"#727675",accent:"#c2496a",primary_dark:"#2e6171",primary_light:"#556f7a",menu:"#232a2f"};t.b={fontSizes:[.75,1,2,3,4,5,6],colors:Object.assign({},r),space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Oxygen Mono, monospace",cursive:"Sacramento, cursive"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}}},151:function(e,t,n){var r;e.exports=(r=n(155))&&r.default||r},154:function(e){e.exports={data:{site:{siteMetadata:{title:"April Gray | Portfolio | Web & Software Developer"}}}}},155:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(56),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},156:function(e,t,n){"use strict";var r=n(154),a=n(0),i=n.n(a),o=n(4),c=n.n(o),s=n(159),l=n.n(s),u=(n(33),n(151),i.a.createContext({})),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};n(34);var p=n(7),h=n.n(p),d=n(160),f=n(149),g=(n(163),n(164)),b=n(165),y=n(166),v=n(167),w=n(168),x=n.n(w),k=n(148),E=n(150),O=[v.linkedin,y.github,g.twitter,b.envelope],j=["https://www.linkedin.com/in/aprgray5/","https://github.com/agray5","https://twitter.com/aprgray5","mailto:aprgray5@gmail.com"],C=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1},t}h()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({isOpen:window.innerWidth>f.d.phone})},n.handleStateChange=function(e){this.setState({isOpen:e.isOpen})},n.render=function(){var e=this;return i.a.createElement(d.slide,Object.assign({className:"sideBar"},this.props,{onStateChange:function(t){return e.handleStateChange(t)},isOpen:this.state.isOpen,noOverlay:!0,width:100}),i.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),i.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"About"),i.a.createElement("a",{id:"portfolio",className:"menu-item",href:"/portfolio"},"Works"),i.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Contact"),i.a.createElement(_,{theme:E.b},O.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:j[t],target:"_blank"},i.a.createElement(x.a,{icon:e,size:24})))})))},t}(a.Component),_=k.default.ul.withConfig({displayName:"header__Social",componentId:"sc-1vgw070-0"})(["list-style:none;bottom:20px;padding:0;text-align:center;& li{margin-top:10px;cursor:pointer;& a{color:",";}&:hover{color:",";}}"],function(e){return e.theme.colors.primary},function(e){return e.theme.colors.accent}),S=C,N=(n(169),function(e){var t=e.children;return i.a.createElement(m,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{charset:"utf-8",content:"text/html"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},{name:"description",content:"Hi, I'm April Gray. I build applications for web, mobile, and desktop use."}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oxygen+Mono|Sacramento",rel:"stylesheet"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(S,{siteTitle:e.site.siteMetadata.title}),t)},data:r})});N.propTypes={children:c.a.node.isRequired};t.a=N},157:function(e,t,n){"use strict";var r=n(152),a=n.n(r),i=n(7),o=n.n(i),c=n(0),s=n.n(c),l=n(172),u=n(148),m=n(149),p=n(170),h=n.n(p);function d(){var e=a()(["font-size: ","rem;"]);return d=function(){return e},e}function f(){var e=a()(["font-size: ","rem;"]);return f=function(){return e},e}function g(){var e=a()(["margin-top: 5%;"]);return g=function(){return e},e}function b(){var e=a()(["margin-top: 20%;"]);return b=function(){return e},e}function y(){var e=a()(["width: 55%;transform: translatey(50%);"]);return y=function(){return e},e}var v=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement(w,{flexDirection:"column",className:"titleContainer"},s.a.createElement(x,{theme:this.props.theme},this.props.title),this.props.subtitles&&this.props.subtitles.map(function(t,n){return s.a.createElement(k,{theme:e.props.theme,key:n}," ",t," ")}))},t}(s.a.Component);t.a=v;var w=Object(u.default)(l.Flex).withConfig({displayName:"title__StyledFlex",componentId:"sc-10cbom3-0"})(["margin-top:5%;","  "," ",""],m.b.desktop(y()),m.b.phone(b()),m.b.desktop(g())),x=u.default.h1.withConfig({displayName:"title__MainTitle",componentId:"sc-10cbom3-1"})(["font-family:",";color:",";text-align:center;z-index:2;",""],function(e){return e.theme.fonts.cursive},function(e){return e.theme.colors.primary},function(e){return m.b.tablet(f(),e.theme.fontSizes[6])}),k=u.default.h2.withConfig({displayName:"title__SubTitle",componentId:"sc-10cbom3-2"})(["font-family:",";color:",";text-align:center;z-index:2;",""],function(e){return e.theme.fonts.mono},function(e){return h()(e.theme.colors.primary)},function(e){return m.b.tablet(d(),e.theme.fontSizes[2])})}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-3271cc039399a521fd9b.js.map