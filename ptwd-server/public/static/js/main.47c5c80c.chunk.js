(this["webpackJsonpptwd-client"]=this["webpackJsonpptwd-client"]||[]).push([[0],{29:function(e,t,n){},34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},40:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),o=(n(39),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),p=(n(40),n(12)),h=n(13),d=n(15),v=n(10),f=n.n(v),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={fullName:"",email:"",password:"",message:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("".concat("https://sub-it.herokuapp.com/api","/signup"),this.state,{withCredentials:!0}).then((function(e){console.log("response is:",e);var n=e.data.userDoc;t.props.onUserChange(n)})).catch((function(e){return console.log("Err in signup: ",e)}))}},{key:"render",value:function(){var e=this;console.log("Do I have user in Signup: ",this.props.currentUser);var t=this.state,n=t.fullName,a=t.email,c=t.password;return this.props.currentUser?r.a.createElement("div",null,r.a.createElement("h2",null," Welcome to your app, ",this.props.currentUser.fullName," ! You're signed in! ")):r.a.createElement("section",null,r.a.createElement("h2",null," Sign up "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Full name: "),r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName",placeholder:"John Smith"}),r.a.createElement("label",null," Email: "),r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},required:!0,type:"email",name:"email",placeholder:"my-email@ironhack.com"}),r.a.createElement("label",null," Password"),r.a.createElement("input",{value:c,onChange:function(t){return e.genericSync(t)},required:!0,type:"password",name:"password",placeholder:"***********"}),r.a.createElement("button",null," Sign Up ")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(r.a.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={email:"",password:"",message:null},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){console.log("==============================================================Target is: ",e.target),console.log("==============================================================Value is: ",e.target.value);var t=e.target,n=t.name,a=t.value;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("".concat("https://sub-it.herokuapp.com/api","/login"),this.state,{withCredentials:!0}).then((function(e){console.log("do I have any props ????????? ",t.props);var n=e.data.userDoc;t.props.onUserChange(n),t.props.history.push("/ProjectsList")})).catch((function(e){if(console.log("err: ",e.response),e)return t.setState({message:e})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.email,a=t.password;return r.a.createElement("section",null,r.a.createElement("h2",null," Login "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Email: "),r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"my-email@ironhack.com"}),r.a.createElement("label",null," Password"),r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"password",name:"password",placeholder:"***********"}),r.a.createElement("button",null," Login ")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null," Home Page "),r.a.createElement("p",null," Welcome to the best app ever!  "))}}]),t}(r.a.Component),j=(n(29),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).playVideo=function(){n.refs.vidRef.play()},n.pauseVideo=function(){n.refs.vidRef.pause(),n.refs.vidRef.currentTime=0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card_video"},r.a.createElement("video",{ref:"vidRef",src:this.props.projectObject.videoURL,type:"video/mp4",onMouseOver:this.playVideo,onMouseLeave:this.pauseVideo})),r.a.createElement("div",{className:"card_title title-white"},r.a.createElement("p",null,this.props.projectObject.videoTitle))))}}]),t}(r.a.Component)),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={subInit:!1},n.createSub=function(){var e=document.querySelector("video").textTracks,t=document.getElementById("video");if(!1===n.state.subInit){var a=t.currentTime,r=new VTTCue(a,null,"");e[0].addCue(r),n.setState({subInit:!0})}else{var c=t.currentTime,l=e[0].cues.length;console.log("cuesLength = "+l),t.pause(),e[0].cues[l-1].endTime=c,console.log(e[0]),console.log(e[0].cues[l-1]),n.setState({subInit:!1})}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.createSub},"Create sub"),r.a.createElement("div",{id:"sub-text",className:"modal",style:{display:"none"}},r.a.createElement("div",{id:"sub-modal"},r.a.createElement("span",{id:"close"},"\xd7"),r.a.createElement("textarea",{id:"this-sub-text",rows:"2",cols:"50",maxLength:"80"}),r.a.createElement("button",{id:"save-text-btn"},"Save"),r.a.createElement("button",{id:"cancel-btn"},"Cancel"))))}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={url:null,pip:!1,playing:!0,controls:!1,light:!1,volume:.8,muted:!1,played:0,loaded:0,duration:0,playbackRate:1,loop:!1},n.playVideo=function(){n.refs.vidRef.play()},n.pauseVideo=function(){n.refs.vidRef.pause(),n.refs.vidRef.currentTime=0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("video",{id:"video",crossOrigin:"anonymous",autoPlay:!0,controls:!0,preload:"metadata"},r.a.createElement("source",{src:"https://res.cloudinary.com/alejotsv/video/upload/v1572146282/videoplayback_dznrfa.mp4",type:"video/mp4"}),r.a.createElement("track",{id:"my-subs",label:"English",kind:"subtitles",srcLang:"en",src:"",default:!0})),r.a.createElement("div",null)),r.a.createElement(y,null))}}]),t}(r.a.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){e.props.theUser||e.props.history.push("/login"),console.log("this is the did mount and the props ========= ",e.props),f.a.get("".concat("https://sub-it.herokuapp.com/api","/dashboard/").concat(e.props.theUser._id)).then((function(t){console.log("...............",t),e.setState({projectsOfUser:t.data})})).catch((function(e){console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"),console.log(e)}))},e.state={projectsOfUser:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.projectsOfUser.map((function(e){return{videoTitle:e.title,videoURL:e.videoURL,genre:e.genre,description:e.description}}));console.log("AAAAAAAAAAAAAAAAaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAA",e);var t=this.state.projectsOfUser.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(j,{projectObject:e[n]}))}));return r.a.createElement("div",{className:"project-container"},r.a.createElement("ul",null,this.state.projectsOfUser&&t))}}]),t}(r.a.Component),A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={videoTitle:"",videoURL:"",message:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"genericSync",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),f.a.post("".concat("https://sub-it.herokuapp.com/api","/create-project/").concat(this.props.theUser._id)).then((function(e){console.log("...............",e),t.setState({projectsOfUser:e.data})})).catch((function(e){console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"),console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("h2",null," Video Info "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Video Title: "),r.a.createElement("input",{value:this.state.videoTitle,onChange:function(t){return e.genericSync(t)},type:"text",name:"videoTitle",placeholder:"The Great Journey"}),r.a.createElement("label",null," Video File: "),r.a.createElement("input",{value:this.state.videoURL,onChange:function(t){return e.genericSync(t)},type:"file",name:"videoURL"}),r.a.createElement("button",null," Upload ")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(r.a.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={currentUser:null},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://sub-it.herokuapp.com/api","/checkuser"),{withCredentials:!0}).then((function(t){var n=t.data.userDoc;e.syncCurrentUSer(n)})).catch((function(e){return console.log("Err while getting the user from the checkuser route: ",e)}))}},{key:"syncCurrentUSer",value:function(e){this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"navList"},r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/"}," Home ")),r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/aProjectPage"}," ProjectPage ")),r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/signup-page"}," Signup ")),r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/login"}," Login ")),r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/ProjectsList"}," Project List ")),r.a.createElement("li",null,r.a.createElement(p.b,{className:"link",to:"/form"}," Project Form ")))),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{exact:!0,path:"/aProjectPage",component:O}),r.a.createElement(h.a,{exact:!0,path:"/project",component:j}),r.a.createElement(h.a,{exact:!0,path:"/ProjectsList",render:function(t){return r.a.createElement(k,Object.assign({},t,{theUser:e.state.currentUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/form",render:function(t){return r.a.createElement(A,Object.assign({},t,{theUser:e.state.currentUser}))}}),r.a.createElement(h.a,{exact:!0,path:"/signup-page",render:function(){return r.a.createElement(b,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUSer(t)}})}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(g,Object.assign({},t,{onUserChange:function(t){return e.syncCurrentUSer(t)}}))}})))}}]),t}(r.a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.47c5c80c.chunk.js.map