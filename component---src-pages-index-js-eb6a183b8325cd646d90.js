(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=n},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),l=a("Bnag");e.exports=function(e){return n(e)||r(e)||l()}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("7oih"),i=a("YIkO"),o=a.n(i),s=a("dwco"),c=a.n(s);var m=function(e){return e.children},u=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){c.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,r=n.type,l=n.element,i=n.offset,o=n.timeout;if(r&&l)switch(r){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,i,o):console.log("Element not found: "+l)},l.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},l.render=function(){return r.a.createElement(m,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(r.a.Component),d=a("ku9C"),f=a.n(d),p=a("obyI"),h=a.n(p);var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.tabs;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},h.a.firstName," ",h.a.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(o.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.href,n=e.content;return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement(u,{type:"id",element:a},r.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},n}(n.Component);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(g,null),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-0"},h.a.firstName,r.a.createElement("span",{className:"text-primary"},h.a.lastName)),r.a.createElement("div",{className:"subheading mb-5 withBorder main"},h.a.address," · ",r.a.createElement("a",{href:"mailto:"+h.a.email},h.a.email)),r.a.createElement("p",{className:"lead mb-5"},"Mifta is a Software Engineer at NewsCred and is presently focusing on new technologies that are out and about to make everyone's life easier. She has expertise on all things JavaScript and Python. Having an Engineering degree, Mifta also composes instructional tutorials for an international audience of Computer Science students on YouTube, hoping to aid them in their studies. She is eager to start asking questions - to observe and solve the next puzzle. ",r.a.createElement("i",{className:"fa fa-puzzle-piece"})," ",r.a.createElement("br",null),"Her ultimate mission is to master the art of software engineering and aims to build something worth remembering that will aid in making peoples' lives easier. Mifta is a team player and her specialty is her ability to take ownership, manage a team and punctuality in getting shit ",r.a.createElement("i",{className:"fa fa-tasks"})," done!"),r.a.createElement("div",{className:"social-icons"},h.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return r.a.createElement("a",{key:a,href:a},r.a.createElement("i",{className:"fab "+t}))}))))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"mb-5"},"Experience"),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Software Engineer"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"NewsCred"),r.a.createElement("p",null,"Enhanced the experience and built features for NewsCred's main software - ",r.a.createElement("a",{href:"https://www.newscred.com/platform/"},"The Marketing Platform")," ",r.a.createElement("br",null),r.a.createElement("ul",null,h.a.newscredExperience.map((function(e){return r.a.createElement("li",null,e)}))))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"November 2016 - Present"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Content Creator"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"YouTube"),r.a.createElement("p",null,r.a.createElement("ul",null,h.a.youtubeExperience.map((function(e){return r.a.createElement("li",null,e)}))))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"August 2014 - Present"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Software Engineer (Freelance)"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"EduHive"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://eduhive.com.bd"},r.a.createElement("strong",null,"EduHive (Web)")),": Created features for the web platform EduHive - a Learning Management System which included - enabling online mock admission tests, generating mark-sheets along with answer sheets, implemented  an exam question builder, integrated KaTex math equation rich text area and authentication middleware."),r.a.createElement("li",null,r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.techhive.eduhive"},r.a.createElement("strong",null,"EduHive (Mobile)")),": Built and published an android react native mobile app - implemented the logic using REST API, integrated payment system and authentication for google and facebook.")))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"March 2019 - September 2019"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Author"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"Packt Publishing"),r.a.createElement("p",null,"Published video course on the basics of  ",r.a.createElement("a",{href:"https://www.packtpub.com/application-development/learning-react-native-development-videos"},'"Learning React Native Development"'))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"May 2018 - September 2018"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Web Developer (Part time)"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"WebAble Digital"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Created dynamic websites with AngularJS, ExpressJS & MeteorJS"),r.a.createElement("li",null,"Worked with Facebook API and D3JS  for collecting page Analytics and visualization"),r.a.createElement("li",null,"Created and customised Wordpress themes")))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"August 2014 - September 2016"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"Teaching Assistant (Undergraduate)"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"BRAC University"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"CSE221: Algorithms Course Student Tutor")," ",r.a.createElement("br",null),"Graded test papers, assignments and helped students during Tutoring time in understanding/solving lab assignments and algorithm simulations as well as Big O complexities. Gave practise problems with small variations for understanding the concepts further."),r.a.createElement("li",null,r.a.createElement("strong",null,"CSE111: Programming Language II Course Student Tutor")," ",r.a.createElement("br",null),"Created video tutorials (Tracing programs playlist) for solving JAVA program tracing which helped students in understanding Object oriented principles. Also graded test papers and assignments.")))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"August 2014 - September 2016"))))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"mb-5"},"Education"),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h4",{className:"mb-0"},"BRAC University"),r.a.createElement("div",{className:"subheading mb-3 withBorder"},"Bachelor of Science"),r.a.createElement("div",null,"Computer Science & Enginering"),r.a.createElement("p",null,"GPA: 3.87 (Highest Distinction)")),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"January 2013 - August 2016"))))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("ul",{className:"list-inline dev-icons"},r.a.createElement("li",{className:"list-inline-item",title:"Python"},r.a.createElement("i",{className:"fab fa-python"})),r.a.createElement("li",{className:"list-inline-item",title:"JavaScript"},r.a.createElement("i",{className:"fab fa-js-square"})),r.a.createElement("li",{className:"list-inline-item",title:"Java"},r.a.createElement("i",{className:"fab fa-java"})),r.a.createElement("li",{className:"list-inline-item",title:"ReactJS"},r.a.createElement("i",{className:"fab fa-react"})),r.a.createElement("li",{className:"list-inline-item",title:"AngularJS"},r.a.createElement("i",{className:"fab fa-angular"})),r.a.createElement("li",{className:"list-inline-item",title:"NodeJS"},r.a.createElement("i",{className:"fab fa-node-js"})),r.a.createElement("li",{className:"list-inline-item",title:"Sass"},r.a.createElement("i",{className:"fab fa-sass"})),r.a.createElement("li",{className:"list-inline-item",title:"PHP"},r.a.createElement("i",{className:"fab fa-php"})),r.a.createElement("li",{className:"list-inline-item",title:"WordPress"},r.a.createElement("i",{className:"fab fa-wordpress"}))),r.a.createElement("div",{className:"subheading mb-3"},"I want to work with"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"ReactJS/NodeJS"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"Flask/Django"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"MongoDB/MySQL"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"AWS Services")))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"mb-5"},"Interests"),r.a.createElement("p",null,"Apart from being a software engineer, I enjoy traveling, vlogging, sipping coffee, watching animes and tv shows, reading fantasy novels.",r.a.createElement("br",null)," I also ",r.a.createElement("i",{className:"fa fa-heart"})," hackathons and creating YouTube tutorials."))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),r.a.createElement("a",{href:"https://ieeexplore.ieee.org/document/8631958"},r.a.createElement("strong",null,"Best Paper Award"))," - ICCIT, 2018 for the Paper ",r.a.createElement("br",null),r.a.createElement("em",null,'M. Sintaha and M. Mostakim, "An Empirical Study and Analysis of the Machine Learning Algorithms Used in Detecting Cyberbullying in Social Media," 2018 21st International Conference of Computer and Information Technology (ICCIT), Dhaka, Bangladesh, 2018, pp.1-6.')),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"2nd place winner at Inter-office Hackathon 2018 at April for building a messaging platform for NewsCred’s Content Marketing Platform."),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"1",r.a.createElement("sup",null,"st"),"1st place winner in Inter-office Hackathon 2018 at October for building a Content Optimizer system - a system that tells you how SEO optimized your content is."),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"1",r.a.createElement("sup",null,"st"),"1st place and 3rd place  winner in Inter-office Hackathon 2019 at November for integrating a pdf/doc annotator and making our company platform mobile responsive."))))))}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("pVnL")),l=n(a("lSNA")),i=n(a("RIqP")),o=n(a("lwsE")),s=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),d=n(a("7W2i")),f=n(a("17x9")),p=n(a("q1tI")),h=n(a("TSYQ")),g=n(a("Fxm3"));var v=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,d.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:f.default.arrayOf(f.default.string).isRequired,currentClassName:f.default.string.isRequired,scrolledPastClassName:f.default.string,style:f.default.object,componentTag:f.default.oneOfType([f.default.string,f.default.element]),offset:f.default.number,rootEl:f.default.string,onUpdate:f.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,l=!1,o=0,s=r.length;o<s;o++){var c=r[o],m=!l&&this._isInView(c);m?(l=!0,t.push(c)):a.push(c);var u=o===s-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&d&&(a.pop(),a.push.apply(a,(0,i.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var l=e.getBoundingClientRect(),i=n?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,s=o+i,c=n?l.top+o-t.top+r:l.top+o+r,m=c+e.offsetHeight;return c<s&&m>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,i=a.className,o=a.scrolledPastClassName,s=a.style,c=0,m=p.default.Children.map(n,(function(t,a){var n;if(!t)return null;var i=t.type,s=o&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,l.default)(n,"".concat(t.props.className),t.props.className),(0,l.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return p.default.createElement(i,(0,r.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,l.default)({},"".concat(i),i));return p.default.createElement(t,{className:u,style:s},m)}}]),t}(p.default.Component);t.default=v},a1gu:function(e,t,a){var n=a("cDf5"),r=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},cDf5:function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?e.exports=n=function(e){return a(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},n(t)}e.exports=n},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var a,n=e.HTMLElement||e.Element,r=468,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(h.call(this,a,a.scrollLeft+r.left-n.left,a.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function u(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function d(e){var t=m(e,"Y")&&u(e,"Y"),a=m(e,"X")&&u(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,l,o,s=(i()-t.startTime)/r;o=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*o)),n=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(a,n,r){var o,c,m,u,d=i();a===t.body?(o=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=l.scroll):(o=a,c=a.scrollLeft,m=a.scrollTop,u=s),p({scrollable:o,method:u,startTime:d,startX:c,startY:m,x:n,y:r})}}}}()},ku9C:function(e,t,a){e.exports=a.p+"static/avatar-2b8352a618bda764673f0ec6746c8708.jpg"},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Mifta Sintaha",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#d63354",manifestThemeColor:"#d63354",manifestDisplay:"standalone",manifestIcon:"src/assets/img/icon.jpeg",pathPrefix:"/msintaha.github.io",firstName:"Mifta",lastName:"Sintaha",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/msintaha"},{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/c/MiftaSintahaCS"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/mifta-sintaha-574319b1/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/MiftaSintaha"},{icon:"fa-facebook-f",name:"Facebook",url:"https://facebook.com/mifta.sintaha.7"}],email:"msintaha94@gmail.com",address:"Dhaka, Bangladesh",newscredExperience:["Designed and built new features for NewsCred's Content Marketing Software","Used microservice architecture to split out software features","Migrated DB models by double-writing data and backpoping via scripts","Took leadership roles and ownership of services and it's maintenance","Wrote tech specs for feature architecture, flow diagrams and presented them in architecture meetings","3rd party API integration and caching to overcome rate limits","Designed and implemented an article recommender system using ElasticSearch MLT by taking a user's journey to compare with regular tags and categories grouping algorithm and did A/B testing to compare click through rates. Set up CDNs for serving Javascript for Recommended Articles Widget","Collected usage analytics and Wrote SQL queries for visualizing data on feature usage in Periscope","Designed and implemented a dashboard integrated with various in-house microservice APIs to automate repetitive client on-boarding tasks with a UI for support team. Dockerized build and deploy","Created a Content Scoring system from scratch using Yoast’s SEO analysis and SEMrush’s keywords data mining to score content based on most used words in Google’s top 20 search results","Built a feature for making ad-hoc work requests with custom form builder for taking in inputs from requesters. Used ReactJS and Flask for the backend using design patterns like Factory Pattern and Strategy Pattern and maintained SOLID principles like SRP and Interface Segregation principle","Created a Design Library with NewsCred’s brand related design using ReactJS and created both representational and smart components for effective code reuse. Introduced design patterns and code conventions for said design library. Showcased the design on a DSM (Design system manager) like Storybook with documentation","Improved Feature Performance by analyzing Google Stackdriver to identify N+1 API calls and optimized those services. Monitored using NewRelic dashboard","Added Testim tests by capturing journeys of features and validated regression tests"],youtubeExperience:["Created video tutorials on theoretical topics of Computer Science e.g. Algorithms, Compiler Design, Automata & Computability, Database Systems, Computer Architecture, Graphics, Networking Systems, Java programming simulations, Operating Systems, DC Circuits","Created tutorials on Javascript Web frameworks e.g. MEAN stack"]}}}]);
//# sourceMappingURL=component---src-pages-index-js-eb6a183b8325cd646d90.js.map