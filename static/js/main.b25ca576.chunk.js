(this["webpackJsonpreact-drum-machine"]=this["webpackJsonpreact-drum-machine"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(7),s=r.n(c),i=(r(12),r(3)),o=r(4),d=r(6),p=r(5),l=(r(13),r(0)),m=[{id:"Chord-1",letter:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{id:"Chord-2",letter:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{id:"Chord-3",letter:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{id:"Clap",letter:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"Open-HH",letter:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Kick-and-Hat",letter:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"Punchy-Kick",letter:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{id:"Side-Stick",letter:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{id:"Snare",letter:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],u=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){t.keyCode===e.props.letter.charCodeAt()&&(e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id))},e.handleClick=function(){e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id)},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){console.log(this.audio),document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick,children:[Object(l.jsx)("h1",{children:this.props.letter}),Object(l.jsx)("audio",{ref:function(t){return e.audio=t},className:"clip",id:this.props.letter,src:this.props.src})]})}}]),r}(a.a.Component),h=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).handleDisplay=function(e){return n.setState({display:e})},n.state={display:"Click or press the corresponding key"},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"inner-container",id:"drum-machine",children:[Object(l.jsx)("div",{id:"display",children:this.state.display}),Object(l.jsx)("div",{id:"drum-pads",children:m.map((function(t){return Object(l.jsx)(u,{id:t.id,letter:t.letter,src:t.src,handleDisplay:e.handleDisplay})}))})]}),Object(l.jsxs)("div",{className:"author",children:[" ","Made by"," ",Object(l.jsx)("a",{rel:"noreferrer",href:"https://github.com/Flautisimo",target:"_blank",children:"Flautisimo"})]})]})}}]),r}(a.a.Component),f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.b25ca576.chunk.js.map