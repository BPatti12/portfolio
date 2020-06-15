(this["webpackJsonpcra-template-batti"]=this["webpackJsonpcra-template-batti"]||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(21),o=a.n(r),c=a(1),s=a(2),i=a(4),m=a(3),u=a(7),p=a(5),f=(a(29),n.a.createContext({overlay:null}));a(19),a(30);function d(e){var t=null;switch(e.size||""){case"large":t=n.a.createElement("p",{className:"text-xl md:text-2xl ".concat(e.className||""),style:e.style},e.children);break;case"small":t=n.a.createElement("p",{className:"text-base md:text-lg ".concat(e.className||""),style:e.style},e.children);break;default:t=n.a.createElement("p",{className:"text-lg md:text-xl ".concat(e.className||""),style:e.style},e.children)}return t}var h=function(e){return n.a.createElement(d,{size:"large",style:e.style},"Loading",n.a.createElement("span",{id:"loader"},"..."))};function y(){return n.a.createElement(f.Consumer,null,(function(e){var t=e.overlay;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"overlay",style:{zIndex:99999},className:"overlay highlight ".concat("down"===t?"overlayDown":"overlayUp")},n.a.createElement("div",{className:"flex flex-col w-full h-full",style:{position:"relative",color:"white",display:"block"}},n.a.createElement("img",{src:"".concat("/portfolio","/BattiLogo.svg"),alt:"Logo",style:{width:"100%",maxWidth:450,opacity:1,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.a.createElement(h,{style:{position:"absolute",bottom:80,left:"50%",transform:"translate(-50%, -50%)"}}))))}))}var v=a(13),E=a(11);function b(e){var t=null;switch(e.size||""){case"large":t=n.a.createElement("h1",{className:"text-3xl md:text-4xl xl:text-5xl ".concat(e.className||""),style:e.style},e.children);break;case"small":t=n.a.createElement("h3",{className:"text-xl md:text-2xl xl:text-3xl ".concat(e.className||""),style:e.style},e.children);break;default:t=n.a.createElement("h2",{className:"text-2xl md:text-3xl xl:text-4xl ".concat(e.className||""),style:e.style},e.children)}return t}function g(e){if(!e.icon)throw new Error("Icon is a required propery");if(!e.font)throw new Error("Please set the required font (far, fas, fab)");if(e.children)throw new Error("Icon doesnt accept any children");return n.a.createElement("span",{className:e.className,style:{fontFamily:e.font,fontStyle:"normal",userSelect:"none"}},e.icon)}function x(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}var w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){x()||window.addEventListener("mousemove",(function(e){var t=document.getElementById("cursor");t.style.top="".concat(e.clientY,"px"),t.style.left="".concat(e.clientX,"px")}))}},{key:"render",value:function(){var e=x();return n.a.createElement(n.a.Fragment,null,e?"":n.a.createElement("div",{id:"cursor",style:{top:-100,left:-100}}))}}]),t}(l.PureComponent),N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"render",value:function(){return""}}]),t}(l.Component);function k(){return n.a.createElement(f.Consumer,null,(function(e){var t=e.overlayUp;return n.a.createElement(N,{onMount:t})}))}var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).switchPage=a.switchPage.bind(Object(u.a)(a)),a.state={active:!!a.locationMatches(),displayUrl:"".concat("/portfolio").concat(a.props.to)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({active:!!this.locationMatches()})}},{key:"locationMatches",value:function(){return window.location.pathname==="".concat("/portfolio").concat(this.props.to)}},{key:"switchPage",value:function(e){var t=this;e.preventDefault(),this.locationMatches()||(this.props.down(),setTimeout((function(){t.props.history.push(t.props.to)}),this.props.transitionDelay))}},{key:"render",value:function(){return n.a.createElement("a",{href:this.state.displayUrl,onClick:this.switchPage,className:"".concat(this.props.className?this.props.className:""," ").concat(this.state.active&&this.props.activeClassName?this.props.activeClassName:""),style:this.props.style},this.props.children)}}]),t}(l.Component),O=Object(E.f)(j);function D(e){if(!e.to)throw new Error('"to" is a required property of AnimLink');return n.a.createElement(f.Consumer,null,(function(t){var a=t.overlayUp,l=t.overlayDown,r=t.transitionDelay;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{to:e.to,up:a,down:l,transitionDelay:r,className:e.className,activeClassName:e.activeClassName},e.children))}))}function C(e,t){return{path:e,name:t}}function P(e){var t=e.linkClassName||"",a=e.linkActiveClassName||"",l=(e.linksTo||[C("/","Home"),C("/about","About"),C("/work","Work"),C("/contact","Contact")]).map((function(e,l){return n.a.createElement(D,{to:"".concat(e.path),key:l,className:t,activeClassName:a},e.name)}));return n.a.createElement("span",{className:e.className,style:e.style},l)}var S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"openOverlayNav",value:function(){var e=document.getElementById("overlaynav");e.classList.contains("overlayUp")&&(e.classList.remove("overlayUp"),e.classList.add("overlayDown"))}},{key:"render",value:function(){return n.a.createElement("button",{className:this.props.className,onClick:this.openOverlayNav},n.a.createElement(g,{icon:"bars",font:"fas"}))}}]),t}(l.PureComponent),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.history.listen((function(){var e=document.getElementById("overlaynav");e.classList.remove("overlayDown"),e.classList.add("overlayUp")}))}},{key:"close",value:function(){var e=document.getElementById("overlaynav");e.classList.contains("overlayDown")&&(e.classList.remove("overlayDown"),e.classList.add("overlayUp"))}},{key:"render",value:function(){return n.a.createElement("div",{id:"overlaynav",className:"primary flex justify-center items-center overlayUp",style:{zIndex:9999}},n.a.createElement("button",{className:"p-4 absolute top-0 right-0",onClick:this.close},n.a.createElement(g,{icon:"times",font:"fas"})),n.a.createElement(d,{size:"large"},n.a.createElement(P,{className:"flex flex-col items-center medium",linkClassName:"my-4",linkActiveClassName:"highlight-t"})))}}]),t}(l.PureComponent),I=Object(E.f)(U);function L(){return n.a.createElement("nav",{className:"w-full"},n.a.createElement("div",{className:"container mx-auto flex flex-row justify-between items-center p-6 md:p-8 xl:p-10"},n.a.createElement("div",null,n.a.createElement(b,{size:"small",className:"medium highlight-t"},"Patrik Pessi")),n.a.createElement(P,{className:"capitalize hidden md:block",linkClassName:"ml-8 text-xl medium",linkActiveClassName:"highlight-t"}),n.a.createElement(S,{className:"block md:hidden"}),n.a.createElement(I,null)))}var z=0,F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={setupReady:!1,loading:!0},a.pageSetup=a.pageSetup.bind(Object(u.a)(a)),a.imagesLoaded=a.imagesLoaded.bind(Object(u.a)(a)),a.carouselElement=n.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.pageSetup()}},{key:"componentDidUpdate",value:function(){this.pageSetup()}},{key:"pageSetup",value:function(){var e=this,t=this.props.portfolioData||null;null!=t&&null==this.state.portfolioData&&this.state.loading&&this.setState({portfolioData:t}),null!=this.state.portfolioData&&null==this.state.projects&&this.setState({projects:this.state.portfolioData.projects.map((function(e){return e}))},(function(){e.setState({setupReady:!0})})),this.state.loading||this.state.carousel||this.state.intervalID||this.setState({carousel:!0},this.carousel)}},{key:"carousel",value:function(){z=0;var e=document.getElementById("imageCarousel");this.setState({intervalID:setInterval((function(){var t=e.childNodes[0].clientWidth;if(e.scrollLeft>=t){var a=e.childNodes[0];e.appendChild(a),z=0}z+=1,e.scrollLeft=0+z}),10)})}},{key:"imagesLoaded",value:function(){if(this.state.loading){for(var e=this.carouselElement.current.querySelectorAll(".carouselimg"),t=0;t<e.length;t++){if(!e[t].complete)return}this.setState({loading:!1})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalID)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.setupReady?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"h-screen w-full flex flex-col justify-between"},n.a.createElement("div",{className:"flex flex-col justify-between h-full"},n.a.createElement(L,null),n.a.createElement("div",{className:"h-full flex"},n.a.createElement("div",{className:"container mx-auto h-full flex flex-col px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12 bold justify-center select-none"},n.a.createElement(b,{size:"large"},"Designer & developer."),n.a.createElement(b,{style:{maxWidth:"38ch"},size:"large"},"Transforming simple ideas into creative masterpieces and beyond."),n.a.createElement(d,{className:"py-3",size:"large"},n.a.createElement(D,{to:"/about",className:"highlight-t bold"},"About me ",n.a.createElement(g,{icon:"arrow-right",font:"fas"})))))),n.a.createElement("div",{className:"secondary block overflow-hidden list-none whitespace-no-wrap",ref:this.carouselElement,style:{minHeight:150,maxHeight:"45%"},id:"imageCarousel"},this.state.projects.map((function(t,a){var l=t.images[0].resolutions.desktop.url;return n.a.createElement("img",{key:a,className:"carouselimg h-full max-w-none top-0 left-0 inline-block relative",src:l,alt:l,onLoad:e.imagesLoaded})})))),this.state.loading?"":n.a.createElement(k,null)):" ")}}]),t}(l.Component);var M=function(e){return n.a.createElement("div",{className:"py-4 md:py-6 xl:py-8 ".concat(e.className)},e.children)};function B(){return n.a.createElement("div",{className:"w-screen h-screen flex flex-col justify-center items-center medium"},n.a.createElement(b,{size:"large",className:"highlight-t"},"404"),n.a.createElement(M,null,n.a.createElement(d,null,"Couldnt find what you are looking for!")),n.a.createElement(d,null,n.a.createElement(D,{to:"/",className:"highlight-t"},n.a.createElement(g,{icon:"arrow-left",font:"fas"})," Back to homepage")),n.a.createElement(k,null))}var A=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"w-full flex flex-col"},n.a.createElement("div",{className:"flex flex-col h-full"},n.a.createElement(L,null),n.a.createElement("div",{className:"h-full w-full flex"},n.a.createElement("div",{className:"container mx-auto h-full flex flex-col items-center px-6 md:px-8 xl:px-10 py-12 md:py-16 xl:py-20 select-none medium"},n.a.createElement("div",{style:{maxWidth:"81ch"}},n.a.createElement(b,{size:"large"},"About"),n.a.createElement(M,null,n.a.createElement(d,null,"My name is Patrik, and I am a creative developer who has a passion for making ideas come to life. I have been working as a freelancer with my online and local communities for the past 3 years, producing quality content and developing new skills along the way. ")),n.a.createElement(b,{size:"large"},"Skills"),n.a.createElement(M,null,n.a.createElement(d,null,"My education and interests have led me to develop a wide array of skills in web development using HTML5, CSS3, JS, React, and NodeJS. My experience creating custom designs has equipped me with problem-solving skills and a certain flexibility to handle many functions and topics, as seen in my portfolio.")),n.a.createElement(b,{size:"large"},"Programs"),n.a.createElement(M,null,n.a.createElement(d,null,"Aside from my programming skills, I have mastered industry-standard software such as Adobe Photoshop, Illustrator, and XD. I\u2019m also proficient in Microsoft Visual Studio / Visual Studio Code, as well as PowerPoint and Word. ")),n.a.createElement(b,{size:"large"},"Education"),n.a.createElement(M,null,n.a.createElement(d,{size:"small"},"2017-2019"),n.a.createElement(d,{className:"py-2"},"KEUDA, Degree in Information and communications technology"),n.a.createElement(d,{size:"small"},"Kerava, Finland")),n.a.createElement(M,null,n.a.createElement(d,null,n.a.createElement(D,{to:"/work",className:"highlight-t bold"},"Check out my work ",n.a.createElement(g,{icon:"arrow-right",font:"fas"}))))))))),n.a.createElement(k,null))};a(36);var T=function(e){var t=e.project,a=t.images[0].resolutions.desktop.url,l=t.website?t.website:"/projects/".concat(t.name.split(" ").join("-"));return n.a.createElement("div",{className:"w-full lg:w-1/2 relative block",style:{maxWidth:1200}},n.a.createElement(D,{className:"projectpreview",to:l},n.a.createElement("div",{className:"projecttitle absolute inset-0 flex flex-col p-4 lg:p-8",style:{color:"#FFFFFF"}},n.a.createElement(b,{size:"small"},t.displayName),n.a.createElement(d,{class:"py-2"},t.summary)),n.a.createElement("img",{src:a,alt:a})))};var W=function(){return n.a.createElement(M,{className:"medium"},n.a.createElement(d,null,"For more examples check out my"," ",n.a.createElement("a",{className:"dribbble whitespace-no-wrap",target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/Batti"},"Dribbble ",n.a.createElement(g,{icon:"dribbble",font:"fab"}))," ","or"," ",n.a.createElement("a",{className:"twitter whitespace-no-wrap",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/BPatti12"},"Twitter ",n.a.createElement(g,{icon:"twitter",font:"fab"}))),n.a.createElement(M,null,n.a.createElement(d,null,n.a.createElement(D,{to:"/contact",className:"highlight-t bold"},"Contact ",n.a.createElement(g,{icon:"arrow-right",font:"fas"})))))},q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,projects:null},a.setupPage=a.setupPage.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupPage()}},{key:"componentDidUpdate",value:function(){this.setupPage()}},{key:"setupPage",value:function(){var e=this;this.props.portfolioData&&!this.state.projects&&this.state.loading&&this.setState({projects:this.props.portfolioData.projects},(function(){e.setState({loading:!1})}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.state.loading?"":n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"w-full flex flex-col"},n.a.createElement(L,null),n.a.createElement("div",{className:"container mx-auto h-full w-full px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12"},n.a.createElement(M,{className:"medium"},n.a.createElement(b,{size:"large"},"Work")),n.a.createElement("div",{className:"w-full flex flex-row flex-wrap"},this.state.projects.map((function(e,t){return n.a.createElement(T,{key:t,project:e})}))),n.a.createElement(W,null))),n.a.createElement(k,null)))}}]),t}(l.PureComponent);var R=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"min-h-screen w-full flex flex-col"},n.a.createElement(L,null),n.a.createElement("div",{className:"h-full w-full flex justify-center items-center medium py-8 md:py-10 xl:py-12"},n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(M,null,n.a.createElement(b,{size:"large"},"Contact")),n.a.createElement(M,null,n.a.createElement(b,{className:"select-text break-all"},n.a.createElement("a",{href:"mailto:contact@geometricarts.ga"},"contact@geometricarts.ga"))),n.a.createElement(M,null,n.a.createElement(b,{className:"select-text"},n.a.createElement("a",{className:"dribbble",target:"_blank",rel:"noopener noreferrer",href:"https://dribbble.com/Batti"},"Dribbble ",n.a.createElement(g,{icon:"dribbble",font:"fab"})))),n.a.createElement(M,null,n.a.createElement(b,{className:"select-text"},n.a.createElement("a",{className:"twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/BPatti12"},"Twitter ",n.a.createElement(g,{icon:"twitter",font:"fab"})))),n.a.createElement(M,null,n.a.createElement(b,{className:"select-text discord"},"Batti#8275 Discord ",n.a.createElement(g,{icon:"Discord",font:"fab"})))))),n.a.createElement(k,null))},_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,project:null},a.setupPage=a.setupPage.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setupPage()}},{key:"componentDidUpdate",value:function(){this.setupPage()}},{key:"setupPage",value:function(){if(this.props.portfolioData&&this.state.loading&&null==this.state.project){var e=this.props,t=e.match.params.id.split("-").join(" "),a=e.portfolioData.projects,l=null;a.forEach((function(e){e.name!==t||(l=e)})),null!=l?this.setState({project:l,loading:!1}):this.setState({loading:!1})}}},{key:"render",value:function(){var e=this.state.project;return n.a.createElement(n.a.Fragment,null,this.state.loading?"":n.a.createElement(n.a.Fragment,null,e?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"w-full flex flex-col"},n.a.createElement(L,null),n.a.createElement("div",{className:"container mx-auto h-full w-full px-6 md:px-8 xl:px-10 py-8 md:py-10 xl:py-12 medium"},n.a.createElement(d,null,n.a.createElement(D,{to:"/work",className:"highlight-t bold"},n.a.createElement(g,{icon:"arrow-left",font:"fas"})," Back to work")),n.a.createElement(M,null,n.a.createElement(b,{size:"large"},e.displayName)),n.a.createElement(d,null,e.summary),n.a.createElement("div",{className:"py-8 md:py-10 xl:py-12"},e.images.length?n.a.createElement("div",{className:"flex flex-col items-center"},e.images.map((function(e,t){var a=e.resolutions.desktop.url;return n.a.createElement("img",{key:t,src:a,alt:a,className:"w-full",style:{maxWidth:1200}})}))):""),n.a.createElement(W,null))),n.a.createElement(k,null)):n.a.createElement(B,null)))}}]),t}(l.PureComponent),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.history.listen((function(){e.scrollToTop()}))}},{key:"scrollToTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(l.PureComponent),J=Object(E.f)(H);var K=Object(E.f)((function(e){if(!e.to)throw new Error('"to" is a required property of Redirect');return e.history.push(e.to),null})),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).overlayUp=a.overlayUp.bind(Object(u.a)(a)),a.overlayDown=a.overlayDown.bind(Object(u.a)(a)),a.setupApp=a.setupApp.bind(Object(u.a)(a)),a.state={overlay:"down",overlayUp:a.overlayUp,overlayDown:a.overlayDown,transitionDelay:800,portfolioUrl:"https://gitconnected.com/v1/portfolio/bpatti12",portfolioData:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"overlayDown",value:function(){"down"!==this.state.overlay&&this.setState({overlay:"down"})}},{key:"overlayUp",value:function(){"up"!==this.state.overlay&&this.setState({overlay:"up"})}},{key:"componentDidMount",value:function(){this.setupApp()}},{key:"componentDidUpdate",value:function(){this.setupApp()}},{key:"setupApp",value:function(){var e=this;this.state.err||this.state.portfolioData||(window.addEventListener("popstate",(function(){var t=document.getElementById("overlay");t.classList.contains("overlayUp")&&(t.style.transition="none",e.overlayDown(),setTimeout((function(){t.style.transition=null,e.overlayUp()})))})),this.state.err||fetch(this.state.portfolioUrl).then((function(e){return e.json()})).then((function(t){e.setState({portfolioData:t})})).catch((function(t){console.log(t),e.setState({err:!0})})))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.err?n.a.createElement("div",{className:"w-screen h-screen flex flex-col justify-center items-center p-4 text-center"},n.a.createElement(b,null,"Something went wrong!"),n.a.createElement("div",{className:"flex flex-col justify-center"},n.a.createElement(d,{className:"py-2"},"...but there is always another option"),n.a.createElement("div",{className:"flex w-full justify-evenly text-2xl py-4"},n.a.createElement("a",{href:"https://dribbble.com/Batti",target:"_blank",rel:"noopener noreferrer",style:{color:"#ea4c89"}},n.a.createElement(g,{icon:"dribbble",font:"fab"})),n.a.createElement("a",{href:"https://twitter.com/BPatti12",target:"_blank",rel:"noopener noreferrer",style:{color:"#1fa1f2"}},n.a.createElement(g,{icon:"twitter",font:"fab"}))))):n.a.createElement("div",{id:"app"},n.a.createElement(f.Provider,{value:{overlay:this.state.overlay,overlayUp:this.state.overlayUp,overlayDown:this.state.overlayDown,transitionDelay:this.state.transitionDelay}},n.a.createElement(y,null),n.a.createElement(v.a,{basename:"/portfolio"},n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/contact",component:R}),n.a.createElement(E.a,{exact:!0,path:"/about",component:A}),n.a.createElement(E.a,{exact:!0,path:"/projects/:id",render:function(t){var a=t.match;return n.a.createElement(_,{match:a,portfolioData:e.state.portfolioData})}}),n.a.createElement(E.a,{exact:!0,path:"/projects",render:function(){return n.a.createElement(K,{to:"/work"})}}),n.a.createElement(E.a,{exact:!0,path:"/work"},n.a.createElement(q,{portfolioData:this.state.portfolioData})),n.a.createElement(E.a,{exact:!0,path:"/"},n.a.createElement(F,{portfolioData:this.state.portfolioData})),n.a.createElement(E.a,{component:B})),n.a.createElement(J,null))),n.a.createElement(w,null)))}}]),t}(l.Component);o.a.render(n.a.createElement(V,null),document.getElementById("root"))}},[[24,1,2]]]);