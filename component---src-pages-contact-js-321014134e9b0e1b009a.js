(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(n,e,t){"use strict";t.r(e),t.d(e,"query",function(){return x});var r=t(143),a=t.n(r),i=t(0),o=t.n(i),u=t(155),c=t(157),s=t.n(c),l=t(142),p=t(156),f=t(170),d=t(145),m=t(144);function h(){var n=a()(["display: block;"]);return h=function(){return n},n}function g(){var n=a()(["\n    display: none;\n    position: absolute !important;\n    right: 0px;\n    top: 0px;\n    z-index: 1;\n    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 85%);\n\n    width: 50%;\n    height: 100%;\n    ","\n"]);return g=function(){return n},n}function b(){var n=a()(["\n            margin-top: 20px;\n            margin-left: 10%;\n\n            li {\n                flex-direction: row;\n            }\n            \n            .input-control {\n                margin-top: 10px;\n            }\n        "]);return b=function(){return n},n}function y(){var n=a()(["background: linear-gradient(to right, "," 0%,#0d1718);"]);return y=function(){return n},n}function v(){var n=a()(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient("," 0%,#0d1718 70%);\n    ",'\n\n    & form {\n    \n    & ul {\n\t    max-width: 500px;\n\t    padding: 30px 22px 20px 30px;\n        font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;\n        \n        & li {\n            padding: 0;\n\t        display: block;\n\t        list-style: none;\n            \n            display: flex;\n            flex-direction: column;\n        }\n\n        & .input-control {\n            box-sizing: border-box;\n            border:1px solid #BEBEBE;\n            outline: none;\t\n\n            flex: 1 1 auto;\n            display: block;\n            margin: 16px 8px 0 10px;\n            padding: 8px;\n\n            &:focus {\n                box-shadow: 0 0 8px #88D5E9;\n\t            border: 1px solid #88D5E9;\n            }\n        }\n\n        & .btn {\n            padding: 5px 15px;\n            max-width: 100px\n        }\n\n\n        & .field-textarea {\n            height: 150px;\n        }\n\n\n        ',"\n    }\n}\n"]);return v=function(){return n},n}var x="934796077",E=l.default.div(v(),d.a.primary,m.b.desktop(y(),d.a.primary),m.b.tablet(b()));Object(l.default)(s.a)(g(),m.b.desktop(h()));e.default=function(n){return o.a.createElement(u.a,null,o.a.createElement(E,{id:"contactContainer"},o.a.createElement(p.a,{title:"Contact Me",theme:d.b}),o.a.createElement("form",{action:"https://formspree.io/aprgray5@gmail.com",method:"POST"},o.a.createElement("ul",{class:"formUL"},o.a.createElement("li",{class:"form-group"},o.a.createElement("input",{type:"text",name:"name",class:"input-control",placeholder:"Name"}),o.a.createElement("input",{type:"email",name:"_replyto",class:"input-control",placeholder:"Email"})),o.a.createElement("li",{class:"form-group"},o.a.createElement("input",{type:"text",name:"subject",class:"input-control",placeholder:"Subject"})),o.a.createElement("li",{class:"form-group"},o.a.createElement("textarea",{name:"message",class:"input-control field-textarea",placeholder:"Message"})),o.a.createElement("li",{class:"form-group"},o.a.createElement("input",{class:"btn input-control",type:"submit",value:"Send"})))),o.a.createElement(f.a,{img:n.data.letter.childImageSharp.fluid,href:"https://unsplash.com/photos/0gkw_9fy0eQ?utm_source=unsplash",author:"Patrick Fore"})))}},144:function(n,e,t){"use strict";t.d(e,"d",function(){return d}),t.d(e,"a",function(){return h}),t.d(e,"b",function(){return g}),t.d(e,"c",function(){return b});var r=t(143),a=t.n(r),i=(t(75),t(50),t(160),t(49),t(0)),o=t.n(i),u=t(161),c=t.n(u),s=t(142);function l(){var n=a()(["\n      @media (min-height: ","px) {\n        ","\n      }\n    "]);return l=function(){return n},n}function p(){var n=a()(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "]);return p=function(){return n},n}function f(){var n=a()(["\n    @media (min-width: ","em){\n      ","\n    }\n  "]);return f=function(){return n},n}var d={giant:1170,desktop:992,tablet:768,phone_landscape:600,phone:300},m={giant:2e3,desktop:770,tablet:700,phone:450,phone_landscape:300},h=function(n){return o.a.createElement(c.a,{minDeviceWidth:d.desktop},n.children)},g=Object.keys(d).reduce(function(n,e){var t=d[e]/16;return n[e]=function(){return Object(s.css)(f(),t,s.css.apply(void 0,arguments)).join("")},n},{}),b=Object.keys(d).reduce(function(n,e){var t=d[e]/16;return n[e]=function(){return Object(s.css)(p(),t,s.css.apply(void 0,arguments)).join("")},n},{});Object.keys(m).reduce(function(n,e){var t=m[e];return n[e]=function(){return Object(s.css)(l(),t,s.css.apply(void 0,arguments)).join("")},n},{})},145:function(n,e,t){"use strict";t.d(e,"a",function(){return r});t(33);var r={primary:"#49bece",secondary:"#727675",accent:"#c2496a",primary_dark:"#2e6171",primary_light:"#556f7a",menu:"#232a2f"};e.b={fontSizes:[.75,1,2,3,4,5,6],colors:Object.assign({},r),space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Oxygen Mono, monospace",cursive:"Sacramento, cursive"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}}},146:function(n,e,t){var r;n.exports=(r=t(150))&&r.default||r},147:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return m}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return d});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),u=t(141),c=t.n(u);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return u.withPrefix}),t.d(e,"navigate",function(){return u.navigate}),t.d(e,"push",function(){return u.push}),t.d(e,"replace",function(){return u.replace}),t.d(e,"navigateTo",function(){return u.navigateTo});var s=t(146),l=t.n(s);t.d(e,"PageRenderer",function(){return l.a});var p=t(34);t.d(e,"parsePath",function(){return p.a});var f=a.a.createContext({}),d=function(n){return a.a.createElement(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(n){n.exports={data:{site:{siteMetadata:{title:"April Gray | Portfolio | Web & Software Developer"}}}}},150:function(n,e,t){"use strict";t.r(e);t(33);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),u=t(51),c=t(2),s=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(u.a,Object.assign({location:e,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},151:function(n,e,t){},153:function(n,e,t){},155:function(n,e,t){"use strict";var r=t(149),a=t(0),i=t.n(a),o=t(4),u=t.n(o),c=t(158),s=t.n(c),l=t(147),p=t(143),f=t.n(p),d=(t(33),t(48),t(7)),m=t.n(d),h=t(159),g=t(144),b=(t(151),t(162)),y=t(163),v=t(164),x=t(165),E=t(166),k=t.n(E),w=t(142),S=t(145);function O(){var n=f()(["\n    list-style: none;\n    bottom: 20px;\n    padding: 0;\n    text-align: center;\n\n    & li {\n        margin-top: 10px;\n        cursor: pointer;\n\n        & a {\n            color: ",";\n        }\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return O=function(){return n},n}var j=[x.linkedin,v.github,b.twitter,y.envelope],q=["https://www.linkedin.com/in/aprgray5/","https://github.com/agray5","https://twitter.com/aprgray5","mailto:aprgray5@gmail.com"],C=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={isOpen:!1},e}m()(e,n);var t=e.prototype;return t.componentDidMount=function(){this.state.setState({isOpen:window.innerWidth>g.d.phone})},t.handleStateChange=function(n){this.setState({isOpen:n.isOpen})},t.render=function(){var n=this;return i.a.createElement(h.slide,Object.assign({className:"sideBar"},this.props,{onStateChange:function(e){return n.handleStateChange(e)},isOpen:this.state.isOpen,noOverlay:!0,width:100}),i.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),i.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"About"),i.a.createElement("a",{id:"portfolio",className:"menu-item",href:"/portfolio"},"Works"),i.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Contact"),i.a.createElement(z,{theme:S.b},j.map(function(n,e){return i.a.createElement("li",{key:e},i.a.createElement("a",{href:q[e],target:"_blank"},i.a.createElement(k.a,{icon:n,size:24})))})))},e}(a.Component),z=w.default.ul(O(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.accent}),R=C,M=(t(153),function(n){var e=n.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:n.site.siteMetadata.title,meta:[{charset:"utf-8",content:"text/html"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},{name:"description",content:"Hi, I'm April Gray. I build applications for web, mobile, and desktop use."}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oxygen+Mono|Sacramento",rel:"stylesheet"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(R,{siteTitle:n.site.siteMetadata.title}),e)},data:r})});M.propTypes={children:u.a.node.isRequired};e.a=M},156:function(n,e,t){"use strict";var r=t(143),a=t.n(r),i=(t(48),t(7)),o=t.n(i),u=t(0),c=t.n(u),s=t(169),l=t(142),p=t(144),f=t(167),d=t.n(f);function m(){var n=a()(["font-size: ","rem;"]);return m=function(){return n},n}function h(){var n=a()(["\n  font-family: ",";\n  color: ",";\n  text-align: center;\n  z-index: 2;\n\n  ","\n"]);return h=function(){return n},n}function g(){var n=a()(["font-size: ","rem;"]);return g=function(){return n},n}function b(){var n=a()(["\n  font-family: ",";\n  color: ",";\n  text-align: center;\n  z-index: 2;\n\n  ","\n"]);return b=function(){return n},n}function y(){var n=a()(["margin-top: 5%;"]);return y=function(){return n},n}function v(){var n=a()(["margin-top: 20%;"]);return v=function(){return n},n}function x(){var n=a()(["width: 55%;transform: translatey(50%);"]);return x=function(){return n},n}function E(){var n=a()(["\n    margin-top: 5%;\n    "," \n    ","\n    ","\n"]);return E=function(){return n},n}var k=function(n){function e(){return n.apply(this,arguments)||this}return o()(e,n),e.prototype.render=function(){var n=this;return c.a.createElement(w,{flexDirection:"column",className:"titleContainer"},c.a.createElement(S,{theme:this.props.theme},this.props.title),this.props.subtitles&&this.props.subtitles.map(function(e,t){return c.a.createElement(O,{theme:n.props.theme,key:t}," ",e," ")}))},e}(c.a.Component);e.a=k;var w=Object(l.default)(s.Flex)(E(),p.b.desktop(x()),p.b.phone(v()),p.b.desktop(y())),S=l.default.h1(b(),function(n){return n.theme.fonts.cursive},function(n){return n.theme.colors.primary},function(n){return p.b.tablet(g(),n.theme.fontSizes[6])}),O=l.default.h2(h(),function(n){return n.theme.fonts.mono},function(n){return d()(n.theme.colors.primary)},function(n){return p.b.tablet(m(),n.theme.fontSizes[2])})},168:function(n,e,t){"use strict";var r=t(143),a=t.n(r),i=t(7),o=t.n(i),u=t(0),c=t.n(u),s=t(142),l=t(145);function p(){var n=a()(["\n    z-index: 100;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    \n    background-color: ","\n    color: ",";\n    text-decoration:none;\n    padding:4px 6px;\n    font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', \n                'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, \n                'Segoe UI', Arial, sans-serif;\n    font-size:12px;\n    font-weight:bold;\n    line-height:1.2;\n    display:inline-block;\n    border-radius:3px\n\n    & span {\n        display:inline-block;\n        padding:2px 3px;\n\n    }\n"]);return p=function(){return n},n}var f=function(n){function e(){return n.apply(this,arguments)||this}return o()(e,n),e.prototype.render=function(){return c.a.createElement(d,{href:this.props.href,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("span",null," Art by ",this.props.author))},e}(c.a.Component),d=s.default.a(p(),l.a.menu,l.a.primary);e.a=f},170:function(n,e,t){"use strict";var r=t(143),a=t.n(r),i=t(7),o=t.n(i),u=t(0),c=t.n(u),s=t(157),l=t.n(s),p=t(4),f=t.n(p),d=t(142),m=t(168),h=(t(145),t(144));function g(){var n=a()(["display: block;"]);return g=function(){return n},n}function b(){var n=a()(["\n    display: none;\n    position: absolute !important;\n    right: 0px;\n    top: 0px;\n    z-index: 1;\n    mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 85%);\n\n    width: 50%;\n    height: 100%;\n    ","\n"]);return b=function(){return n},n}var y=function(n){function e(){return n.apply(this,arguments)||this}return o()(e,n),e.prototype.render=function(){return c.a.createElement(h.a,null,c.a.createElement(v,{fluid:this.props.img}),c.a.createElement(m.a,{href:this.props.href,author:this.props.author}))},e}(c.a.Component);e.a=y;var v=Object(d.default)(l.a)(b(),h.b.desktop(g()));y.propTypes={img:f.a.object.isRequired,href:f.a.string.isRequired,author:f.a.string.isRequired}}}]);
//# sourceMappingURL=component---src-pages-contact-js-321014134e9b0e1b009a.js.map