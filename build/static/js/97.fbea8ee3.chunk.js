(self.webpackChunkinstagram_react12=self.webpackChunkinstagram_react12||[]).push([[97],{3097:function(e,t,n){"use strict";n.r(t);var s=n(885),i=n(2791),a=n(5666),o=n(6536),r=n(4325),l=n(3504),c=n(8302),d=n(6513),p=n(2168),u=n(7447),m=n(554),f=n(7695),h=n.n(f),v=n(1050),x=n(4926),j=n(184);function y(){var e=(0,a.yj)(),t=i.useState(!1),n=(0,s.Z)(t,2),o=n[0],l=n[1],c=o?r.M:r.lM,d=o?e.liked:e.like,p=o?function(){console.log("unlike"),l(!1)}:function(){console.log("like"),l(!0)};return(0,j.jsx)(c,{className:d,onClick:p})}function N(){var e=(0,a.yj)(),t=i.useState(!1),n=(0,s.Z)(t,2),o=n[0],l=n[1],c=o?r.HF:r.N,d=o?function(){console.log("remove"),l(!1)}:function(){console.log("save"),l(!0)};return(0,j.jsx)(c,{className:e.saveIcon,onClick:d})}function g(){var e=(0,a.yj)(),t=i.useState(""),n=(0,s.Z)(t,2),o=n[0],r=n[1];return(0,j.jsxs)("div",{className:e.commentContainer,children:[(0,j.jsx)(m.Z,{fullWidth:!0,value:o,placeholder:"Add a comment...",multiline:!0,maxRows:2,minRows:1,onChange:function(e){return r(e.target.value)},className:e.textField,InputProps:{classes:{root:e.root,underline:e.underline}}}),(0,j.jsx)(d.Z,{color:"primary",className:e.commentButton,disabled:!o.trim(),children:"Post"})]})}t.default=function(e){var t=e.post,n=e.index,m=(0,a.yj)(),f=i.useState(!1),b=(0,s.Z)(f,2),w=b[0],C=b[1],L=i.useState(!1),E=(0,s.Z)(L,2),T=E[0],k=E[1],S=t.id,H=t.media,O=t.likes,Z=t.user,M=t.caption,U=t.comments,_=1===n;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("article",{className:m.article,style:{marginBottom:_&&30},children:[(0,j.jsxs)("div",{className:m.postHeader,children:[(0,j.jsx)(o.Z,{user:Z}),(0,j.jsx)(r.nX,{className:m.moreIcon,onClick:function(){return k(!0)}})]}),(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:H,alt:"Post media",className:m.image})}),(0,j.jsxs)("div",{className:m.postButtonsWrapper,children:[(0,j.jsxs)("div",{className:m.postButtons,children:[(0,j.jsx)(y,{}),(0,j.jsx)(l.rU,{to:"/p/".concat(S),children:(0,j.jsx)(r.qt,{})}),(0,j.jsx)(r.aA,{}),(0,j.jsx)(N,{})]}),(0,j.jsx)(c.Z,{className:m.likes,variant:"subtitle2",children:(0,j.jsx)("span",{children:1===O?"1 like":"".concat(O," likes")})}),(0,j.jsxs)("div",{className:w?m.expanded:m.collapsed,children:[(0,j.jsx)(l.rU,{to:"/".concat(Z.username),children:(0,j.jsx)(c.Z,{variant:"subtitle2",component:"span",className:m.username,children:Z.username})}),w?(0,j.jsx)(c.Z,{variant:"body2",component:"span",dangerouslySetInnerHTML:{__html:M}}):(0,j.jsxs)("div",{className:m.captionWrapper,children:[(0,j.jsx)(h(),{unsafeHTML:M,className:m.caption,maxLine:"0",ellipsis:"...",basedOn:"letters"}),(0,j.jsx)(d.Z,{className:m.moreButton,onClick:function(){return C(!0)},children:"more"})]})]}),(0,j.jsx)(l.rU,{to:"/p/".concat(S),children:(0,j.jsxs)(c.Z,{className:m.commentsLink,variant:"body2",component:"div",children:["View all ",U.length," comments"]})}),U.map((function(e){return(0,j.jsx)("div",{children:(0,j.jsxs)(l.rU,{to:"/".concat(e.user.username),children:[(0,j.jsx)(c.Z,{variant:"subtitle2",component:"span",className:m.commentUsername,children:e.user.username})," ",(0,j.jsx)(c.Z,{variant:"body2",component:"span",children:e.contet})]})},e.id)})),(0,j.jsx)(c.Z,{color:"textSecondary",className:m.datePosted,children:"5 DAYS AGO"})]}),(0,j.jsxs)(p.Z,{xsDown:!0,children:[(0,j.jsx)(u.Z,{}),(0,j.jsx)(g,{})]})]}),_&&(0,j.jsx)(v.L,{}),T&&(0,j.jsx)(x.Z,{onClose:function(){return k(!1)}})]})}},7695:function(e,t,n){function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=s(n(2791));function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var r={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},l=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function c(e,t){if("letters"!==t&&"words"!==t)throw new Error("Unsupported options basedOn: "+t);if(e.nodeType===Node.TEXT_NODE){var n,s=document.createDocumentFragment();switch(t){case"words":n=e.textContent.split(/\b|(?=\W)/);break;case"letters":n=Array.from(e.textContent)}n.forEach((function(e){s.appendChild(function(e){var t=document.createElement("span");return t.className="LinesEllipsis-unit",t.textContent=e,t}(e))})),e.parentNode.replaceChild(s,e)}else if(e.nodeType===Node.ELEMENT_NODE)for(var i=[].slice.call(e.childNodes),a=i.length,o=0;o<a;o++)c(i[o],t)}function d(e){e.parentNode.replaceChild(document.createTextNode(e.textContent),e)}function p(e,t){if(t.contains(e)&&e!==t){for(;e.nextElementSibling;)e.parentNode.removeChild(e.nextElementSibling);p(e.parentNode,t)}}function u(e){for(var t=e;t=t.parentNode;)if(/p|div|main|section|h\d|ul|ol|li/.test(t.tagName.toLowerCase()))return t}function m(e){return!(!e.offsetHeight||!e.offsetWidth&&!/\S/.test(e.textContent))}var f={component:"div",unsafeHTML:"",maxLine:1,ellipsis:"\u2026",ellipsisHTML:void 0,className:"",basedOn:void 0,onReflow:function(){},winWidth:void 0},h=Object.keys(f),v=function(e){var t,n;function s(t){var n;return(n=e.call(this,t)||this).state={html:t.unsafeHTML,clamped:!1},n.canvas=null,n.maxLine=0,n.nlUnits=[],n}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var f=s.prototype;return f.componentDidMount=function(){this.initCanvas(),this.reflow(this.props)},f.componentDidUpdate=function(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)},f.componentWillUnmount=function(){this.canvas.parentNode.removeChild(this.canvas)},f.setState=function(t,n){return"undefined"!==typeof t.clamped&&(this.clamped=t.clamped),e.prototype.setState.call(this,t,n)},f.initCanvas=function(){if(!this.canvas){var e=this.canvas=document.createElement("div");e.className="LinesEllipsis-canvas "+this.props.className,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(r).forEach((function(t){e.style[t]=r[t]})),document.body.appendChild(e)}},f.copyStyleToCanvas=function(){var e=this,t=window.getComputedStyle(this.target);l.forEach((function(n){e.canvas.style[n]=t[n]}))},f.reflow=function(e){this.maxLine=+e.maxLine||1,this.canvas.innerHTML=e.unsafeHTML;var t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.unsafeHTML)?"words":"letters");c(this.canvas,t);var n={clamped:this.putEllipsis(this.calcIndexes()),html:this.canvas.innerHTML};this.setState(n,e.onReflow.bind(this,n))},f.calcIndexes=function(){var e=[0],t=this.nlUnits=Array.from(this.canvas.querySelectorAll(".LinesEllipsis-unit")),n=t.length;if(!t.length)return e;var s=t.find(m);if(!s)return e;for(var i=1,a=s.offsetTop,o=1;o<n&&!(m(t[o])&&t[o].offsetTop-a>1&&(i++,e.push(o),a=t[o].offsetTop,i>this.maxLine));o++);return e},f.putEllipsis=function(e){if(e.length<=this.maxLine)return!1;this.nlUnits=this.nlUnits.slice(0,e[this.maxLine]);var t=this.nlUnits.pop(),n=this.makeEllipsisSpan();do{p(t,this.canvas),u(t).appendChild(n),t=this.nlUnits.pop()}while(t&&(!m(t)||n.offsetHeight>t.offsetHeight||n.offsetTop>t.offsetTop));return t&&d(t),this.nlUnits.forEach(d),!0},f.makeEllipsisSpan=function(){var e=this.props,t=e.ellipsisHTML,n=e.ellipsis,s=document.createElement("span");s.appendChild(document.createElement("wbr"));var i=document.createElement("span");return i.className="LinesEllipsis-ellipsis",t?i.innerHTML=t:i.textContent=n,s.appendChild(i),s},f.isClamped=function(){return this.clamped},f.render=function(){var e=this,t=this.state,n=t.html,s=t.clamped,o=this.props,r=o.component,l=o.className,c=o.unsafeHTML,d=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,["component","className","unsafeHTML"]);return i.default.createElement(r,a({className:"LinesEllipsis "+(s?"LinesEllipsis--clamped":"")+" "+l,ref:function(t){return e.target=t}},function(e,t){if(!e||"object"!==typeof e)return e;var n={};return Object.keys(e).forEach((function(s){t.indexOf(s)>-1||(n[s]=e[s])})),n}(d,h)),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:s?n:c}}))},s}(i.default.Component);v.defaultProps=f,e.exports=v}}]);
//# sourceMappingURL=97.fbea8ee3.chunk.js.map