(this["webpackJsonpcra-template-batti"]=this["webpackJsonpcra-template-batti"]||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=a(1),s=a(2),i=a(4),m=a(3),u=a(7),p=a(5),f=(a(29),l.a.createContext({overlay:null}));a(19);function h(){return l.a.createElement(f.Consumer,null,(function(e){var t=e.overlay;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"overlay",style:{zIndex:99999},className:"overlay highlight ".concat("down"===t?"overlayDown":"overlayUp")},l.a.createElement("div",{className:"flex flex-col w-full h-full justify-center items-center",style:{color:"white"}},l.a.createElement("img",{src:"".concat("/portfolio","/BattiLogo.svg"),alt:"Logo",style:{width:"100%",maxWidth:300}}))))}))}var d=a(13),v=a(11);function y(e){var t=null;switch(e.size||""){case"large":t=l.a.createElement("h1",{className:"text-3xl md:text-4xl xl:text-5xl ".concat(e.className||""),style:e.style},e.children);break;case"small":t=l.a.createElement("h3",{className:"text-xl md:text-2xl xl:text-3xl ".concat(e.className||""),style:e.style},e.children);break;default:t=l.a.createElement("h2",{className:"text-2xl md:text-3xl xl:text-4xl ".concat(e.className||""),style:e.style},e.children)}return t}function E(e){var t=null;switch(e.size||""){case"large":t=l.a.createElement("p",{className:"text-xl md:text-2xl ".concat(e.className||""),style:e.style},e.children);break;case"small":t=l.a.createElement("p",{className:"text-base md:text-lg ".concat(e.className||""),style:e.style},e.children);break;default:t=l.a.createElement("p",{className:"text-lg md:text-xl ".concat(e.className||""),style:e.style},e.children)}return t}function b(e){if(!e.icon)throw new Error("Icon is a required propery");if(!e.font)throw new Error("Please set the required font (far, fas, fab)");if(e.children)throw new Error("Icon doesnt accept any children");return l.a.createElement("span",{className:e.className,style:{fontFamily:e.font,fontStyle:"normal",userSelect:"none"}},e.icon)}function g(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}var x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){g()||window.addEventListener("mousemove",(function(e){var t=document.getElementById("cursor");t.style.top="".concat(e.clientY,"px"),t.style.left="".concat(e.clientX,"px")}))}},{key:"render",value:function(){var e=g();return l.a.createElement(l.a.Fragment,null,e?"":l.a.createElement("div",{id:"cursor",style:{top:-100,left:-100}}))}}]),t}(n.PureComponent),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"render",value:function(){return""}}]),t}(n.Component);function N(){return l.a.createElement(f.Consumer,null,(function(e){var t=e.overlayUp;return l.a.createElement(w,{onMount:t})}))}var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).switchPage=a.switchPage.bind(Object(u.a)(a)),a.state={active:!!a.locationMatches()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({active:!!this.locationMatches()})}},{key:"locationMatches",value:function(){return window.location.pathname==="".concat("/portfolio").concat(this.props.to)}},{key:"switchPage",value:function(e){var t=this;e.preventDefault(),this.locationMatches()||(this.props.down(),setTimeout((function(){t.props.history.push(t.props.to)}),this.props.transitionDelay))}},{key:"render",value:function(){return l.a.createElement("a",{href:this.props.to,onClick:this.switchPage,className:"".concat(this.props.className?this.props.className:""," ").concat(this.state.active&&this.props.activeClassName?this.props.activeClassName:""),style:this.props.style},this.props.children)}}]),t}(n.Component),k=Object(v.f)(j);function O(e){if(!e.to)throw new Error('"to" is a required property of AnimLink');return l.a.createElement(f.Consumer,null,(function(t){var a=t.overlayUp,n=t.overlayDown,r=t.transitionDelay;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{to:e.to,up:a,down:n,transitionDelay:r,className:e.className,activeClassName:e.activeClassName},e.children))}))}function D(e,t){return{path:e,name:t}}function C(e){var t=e.linkClassName||"",a=e.linkActiveClassName||"",n=(e.linksTo||[D("/","Home"),D("/about","About"),D("/work","Work"),D("/contact","Contact")]).map((function(e,n){return l.a.createElement(O,{to:"".concat(e.path),key:n,className:t,activeClassName:a},e.name)}));return l.a.createElement("span",{className:e.className,style:e.style},n)}var P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"openOverlayNav",value:function(){var e=document.getElementById("overlaynav");e.classList.contains("overlayUp")&&(e.classList.remove("overlayUp"),e.classList.add("overlayDown"))}},{key:"render",value:function(){return l.a.createElement("button",{className:this.props.className,onClick:this.openOverlayNav},l.a.createElement(b,{icon:"bars",font:"fas"}))}}]),t}(n.PureComponent),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.history.listen((function(){var e=document.getElementById("overlaynav");e.classList.remove("overlayDown"),e.classList.add("overlayUp")}))}},{key:"close",value:function(){var e=document.getElementById("overlaynav");e.classList.contains("overlayDown")&&(e.classList.remove("overlayDown"),e.classList.add("overlayUp"))}},{key:"render",value:function(){return l.a.createElement("div",{id:"overlaynav",className:"primary flex justify-center items-center overlayUp",style:{zIndex:9999}},l.a.createElement("button",{className:"p-4 absolute top-0 right-0",onClick:this.close},l.a.createElement(b,{icon:"times",font:"fas"})),l.a.createElement(E,{size:"large"},l.a.createElement(C,{className:"flex flex-col items-center medium",linkClassName:"my-4",linkActiveClassName:"highlight-t"})))}}]),t}(n.PureComponent),I=Object(v.f)(S);function U(){return l.a.createElement("nav",{className:"w-full"},l.a.createElement("div",{className:"container mx-auto flex flex-row justify-between items-center p-6 md:p-8 xl:p-10"},l.a.createElement("div",null,l.a.createElement(y,{size:"small",className:"medium highlight-t"},"Patrik Pessi")),l.a.createElement(C,{className:"capitalize hidden md:block",linkClassName:"ml-8 text-xl medium",linkActiveClassName:"highlight-t"}),l.a.createElement(P,{className:"block md:hidden"}),l.a.createElement(I,null)))}var F=0,z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0},a.pageSetup=a.pageSetup.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.pageSetup()}},{key:"componentDidUpdate",value:function(){this.pageSetup()}},{key:"pageSetup",value:function(){var e=this,t=this.props.portfolioData||null;null!=t&&null==this.state.portfolioData&&this.state.loading&&this.setState({portfolioData:t}),null!=this.state.portfolioData&&null==this.state.projects&&this.setState({projects:this.state.portfolioData.projects.map((function(e){return e}))},(function(){e.setState({loading:!1})})),this.state.loading||this.state.carousel||this.state.intervalID||this.setState({carousel:!0},this.carousel)}},{key:"carousel",value:function(){F=0;var e=document.getElementById("imageCarousel");this.setState({intervalID:setInterval((function(){var t=e.childNodes[0].clientWidth;if(e.scrollLeft>=t){var a=e.childNodes[0];e.appendChild(a),F=0}F+=1,e.scrollTo({left:0+F})}),10)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalID)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.loading?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"h-screen w-full flex flex-col justify-between"},l.a.createElement("div",{className:"flex flex-col justify-between h-full"},l.a.createElement(U,null),l.a.createElement("div",{className:"h-full flex"},l.a.createElement("div",{className:"container mx-auto h-full flex flex-col px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12 bold justify-center select-none"},l.a.createElement(y,{size:"large"},"Designer & developer."),l.a.createElement(y,{style:{maxWidth:"38ch"},size:"large"},"Transforming simple ideas into creative masterpieces and beyond."),l.a.createElement(E,{className:"py-3",size:"large"},l.a.createElement(O,{to:"/about",className:"highlight-t bold"},"About me ",l.a.createElement(b,{icon:"arrow-right",font:"fas"})))))),l.a.createElement("div",{className:"secondary block overflow-hidden list-none whitespace-no-wrap",style:{minHeight:150,maxHeight:"45%"},id:"imageCarousel"},this.state.projects.map((function(e,t){var a=e.images[0].resolutions.desktop.url;return l.a.createElement("img",{key:t,className:"h-full max-w-none top-0 left-0 inline-block relative",src:a,alt:a})})))),l.a.createElement(N,null)))}}]),t}(n.Component);var M=function(e){return l.a.createElement("div",{className:"py-4 md:py-6 xl:py-8 ".concat(e.className)},e.children)};function B(){return l.a.createElement("div",{className:"w-screen h-screen flex flex-col justify-center items-center medium"},l.a.createElement(y,{size:"large",className:"highlight-t"},"404"),l.a.createElement(M,null,l.a.createElement(E,null,"Couldnt find what you are looking for!")),l.a.createElement(E,null,l.a.createElement(O,{to:"/",className:"highlight-t"},l.a.createElement(b,{icon:"arrow-left",font:"fas"})," Back to homepage")),l.a.createElement(N,null))}var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement("div",{className:"flex flex-col h-full"},l.a.createElement(U,null),l.a.createElement("div",{className:"h-full w-full flex"},l.a.createElement("div",{className:"container mx-auto h-full flex flex-col items-center px-6 md:px-8 xl:px-10 py-12 md:py-16 xl:py-20 select-none medium"},l.a.createElement("div",{style:{maxWidth:"80ch"}},l.a.createElement(y,{size:"large"},"About"),l.a.createElement(M,null,l.a.createElement(E,null,"I am a creative designer and developer who loves making ideas come to life. Currently live in Finland, where I have been working freelance for 3 years. Constantly developing new skills and applying them to my workflow.")),l.a.createElement(y,{size:"large"},"Skills"),l.a.createElement(M,null,l.a.createElement(E,null,"With multiple years of practice in creating custom designs for all kinds of purposes, I have learned to solve complex problems based on experience, research and user feedback. In addition to visual, web and interaction design I have also gathered some experience in web development using HTML5, CSS3, JS, React and NodeJS.")),l.a.createElement(y,{size:"large"},"Programs"),l.a.createElement(M,null,l.a.createElement(E,null,"While working on a variety of different design and software projects I've mastered the use of many industry standard programs like Adobe Photoshop, Adobe Illustrator, Adobe XD, Microsoft Word, Microsoft PowerPoint, Microsoft Visual Studio and Visual Studio Code.")),l.a.createElement(y,{size:"large"},"Education"),l.a.createElement(M,null,l.a.createElement(E,{size:"small"},"2017-2019"),l.a.createElement(E,{className:"py-2"},"KEUDA, Degree in Information and communications technology"),l.a.createElement(E,{size:"small"},"Kerava, Finland")),l.a.createElement(M,null,l.a.createElement(E,null,l.a.createElement(O,{to:"/work",className:"highlight-t bold"},"Check out my work ",l.a.createElement(b,{icon:"arrow-right",font:"fas"}))))))))),l.a.createElement(N,null))};a(35);var L=function(e){var t=e.project,a=t.images[0].resolutions.desktop.url,n=t.website?t.website:"./projects/".concat(t.name.split(" ").join("-"));return l.a.createElement("div",{className:"w-full lg:w-1/2 relative block",style:{maxWidth:1200}},l.a.createElement(O,{className:"projectpreview",to:n},l.a.createElement("div",{className:"projecttitle absolute inset-0 flex flex-col p-4 lg:p-8",style:{color:"#FFFFFF"}},l.a.createElement(y,{size:"small"},t.displayName),l.a.createElement(E,{class:"py-2"},t.summary)),l.a.createElement("img",{src:a,alt:a})))};var T=function(){return l.a.createElement(M,{className:"medium"},l.a.createElement(E,null,"For more examples check out my"," ",l.a.createElement("a",{className:"dribbble whitespace-no-wrap",target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/Batti"},"Dribbble ",l.a.createElement(b,{icon:"dribbble",font:"fab"}))," ","or"," ",l.a.createElement("a",{className:"twitter whitespace-no-wrap",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/BPatti12"},"Twitter ",l.a.createElement(b,{icon:"twitter",font:"fab"}))),l.a.createElement(M,null,l.a.createElement(E,null,l.a.createElement(O,{to:"/contact",className:"highlight-t bold"},"Contact ",l.a.createElement(b,{icon:"arrow-right",font:"fas"})))))},W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,projects:null},a.setupPage=a.setupPage.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupPage()}},{key:"componentDidUpdate",value:function(){this.setupPage()}},{key:"setupPage",value:function(){var e=this;this.props.portfolioData&&!this.state.projects&&this.state.loading&&this.setState({projects:this.props.portfolioData.projects},(function(){e.setState({loading:!1})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.loading?"":l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement(U,null),l.a.createElement("div",{className:"container mx-auto h-full w-full px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12"},l.a.createElement(M,{className:"medium"},l.a.createElement(y,{size:"large"},"Work")),l.a.createElement("div",{className:"w-full flex flex-row flex-wrap"},this.state.projects.map((function(e,t){return l.a.createElement(L,{key:t,project:e})}))),l.a.createElement(T,null))),l.a.createElement(N,null)))}}]),t}(n.PureComponent);var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"min-h-screen w-full flex flex-col"},l.a.createElement(U,null),l.a.createElement("div",{className:"h-full w-full flex justify-center items-center medium py-8 md:py-10 xl:py-12"},l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement(M,null,l.a.createElement(y,{size:"large"},"Contact")),l.a.createElement(M,null,l.a.createElement(y,{className:"select-text break-all"},l.a.createElement("a",{href:"mailto:contact@geometricarts.ga"},"contact@geometricarts.ga"))),l.a.createElement(M,null,l.a.createElement(y,{className:"select-text"},l.a.createElement("a",{className:"dribbble",target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/Batti"},"Dribbble ",l.a.createElement(b,{icon:"dribbble",font:"fab"})))),l.a.createElement(M,null,l.a.createElement(y,{className:"select-text"},l.a.createElement("a",{className:"twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/BPatti12"},"Twitter ",l.a.createElement(b,{icon:"twitter",font:"fab"})))),l.a.createElement(M,null,l.a.createElement(y,{className:"select-text discord"},"Batti#8275 Discord ",l.a.createElement(b,{icon:"Discord",font:"fab"})))))),l.a.createElement(N,null))},q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,project:null},a.setupPage=a.setupPage.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupPage()}},{key:"componentDidUpdate",value:function(){this.setupPage()}},{key:"setupPage",value:function(){if(this.props.portfolioData&&this.state.loading&&null==this.state.project){var e=this.props,t=e.match.params.id.split("-").join(" "),a=e.portfolioData.projects,n=null;a.forEach((function(e){e.name!==t||(n=e)})),null!=n?this.setState({project:n,loading:!1}):this.setState({loading:!1})}}},{key:"render",value:function(){var e=this.state.project;return l.a.createElement(l.a.Fragment,null,this.state.loading?"":l.a.createElement(l.a.Fragment,null,e?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement(U,null),l.a.createElement("div",{className:"container mx-auto h-full w-full px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12 medium"},l.a.createElement(E,null,l.a.createElement(O,{to:"/work",className:"highlight-t bold"},l.a.createElement(b,{icon:"arrow-left",font:"fas"})," Back to work")),l.a.createElement(M,null,l.a.createElement(y,{size:"large"},e.displayName)),l.a.createElement(E,null,e.summary),l.a.createElement("div",{className:"py-8 md:py-10 xl:py-12"},e.images.length?l.a.createElement("div",{className:"flex flex-col items-center"},e.images.map((function(e,t){var a=e.resolutions.desktop.url;return l.a.createElement("img",{key:t,src:a,alt:a,className:"w-full",style:{maxWidth:1200}})}))):""),l.a.createElement(T,null))),l.a.createElement(N,null)):l.a.createElement(B,null)))}}]),t}(n.PureComponent),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.history.listen((function(){e.scrollToTop()}))}},{key:"scrollToTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(n.PureComponent),J=Object(v.f)(H);var K=Object(v.f)((function(e){if(!e.to)throw new Error('"to" is a required property of Redirect');return e.history.push(e.to),null})),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).overlayUp=a.overlayUp.bind(Object(u.a)(a)),a.overlayDown=a.overlayDown.bind(Object(u.a)(a)),a.setupApp=a.setupApp.bind(Object(u.a)(a)),a.state={overlay:"down",overlayUp:a.overlayUp,overlayDown:a.overlayDown,transitionDelay:800,portfolioUrl:"https://gitconnected.com/v1/portfolio/bpatti12",portfolioData:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"overlayDown",value:function(){"down"!==this.state.overlay&&this.setState({overlay:"down"})}},{key:"overlayUp",value:function(){"up"!==this.state.overlay&&this.setState({overlay:"up"})}},{key:"componentDidMount",value:function(){this.setupApp()}},{key:"componentDidUpdate",value:function(){this.setupApp()}},{key:"setupApp",value:function(){var e=this;this.state.err||this.state.portfolioData||(window.addEventListener("popstate",(function(){var t=document.getElementById("overlay");t.classList.contains("overlayUp")&&(t.style.transition="none",e.overlayDown(),setTimeout((function(){t.style.transition=null,e.overlayUp()})))})),this.state.err||fetch(this.state.portfolioUrl).then((function(e){return e.json()})).then((function(t){e.setState({portfolioData:t})})).catch((function(t){console.log(t),e.setState({err:!0})})))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.state.err?l.a.createElement("div",{className:"w-screen h-screen flex flex-col justify-center items-center p-4 text-center"},l.a.createElement(y,null,"Something went wrong!"),l.a.createElement("div",{className:"flex flex-col justify-center"},l.a.createElement(E,{className:"py-2"},"...but there is always another option"),l.a.createElement("div",{className:"flex w-full justify-evenly text-2xl py-4"},l.a.createElement("a",{href:"https://dribbble.com/Batti",target:"_blank",rel:"noopener noreferrer",style:{color:"#ea4c89"}},l.a.createElement(b,{icon:"dribbble",font:"fab"})),l.a.createElement("a",{href:"https://twitter.com/BPatti12",target:"_blank",rel:"noopener noreferrer",style:{color:"#1fa1f2"}},l.a.createElement(b,{icon:"twitter",font:"fab"}))))):l.a.createElement("div",{id:"app"},l.a.createElement(f.Provider,{value:{overlay:this.state.overlay,overlayUp:this.state.overlayUp,overlayDown:this.state.overlayDown,transitionDelay:this.state.transitionDelay}},l.a.createElement(h,null),l.a.createElement(d.a,{basename:"/portfolio"},l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/contact",component:_}),l.a.createElement(v.a,{exact:!0,path:"/about",component:A}),l.a.createElement(v.a,{exact:!0,path:"/projects/:id",render:function(t){var a=t.match;return l.a.createElement(q,{match:a,portfolioData:e.state.portfolioData})}}),l.a.createElement(v.a,{exact:!0,path:"/projects",render:function(){return l.a.createElement(K,{to:"/work"})}}),l.a.createElement(v.a,{exact:!0,path:"/work"},l.a.createElement(W,{portfolioData:this.state.portfolioData})),l.a.createElement(v.a,{exact:!0,path:"/"},l.a.createElement(z,{portfolioData:this.state.portfolioData})),l.a.createElement(v.a,{component:B})),l.a.createElement(J,null))),l.a.createElement(x,null)))}}]),t}(n.Component);o.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);