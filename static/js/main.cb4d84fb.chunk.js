(this["webpackJsonpswot-web-app"]=this["webpackJsonpswot-web-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e){var n;!function(t){"use strict";var e=function(){function t(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dropEffect=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(t){this._effectAllowed=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),t.prototype.clearData=function(t){null!=t?delete this._data[t]:this._data=null},t.prototype.getData=function(t){return this._data[t]||""},t.prototype.setData=function(t,e){this._data[t]=e},t.prototype.setDragImage=function(t,e,a){var r=n._instance;r._imgCustom=t,r._imgOffset={x:e,y:a}},t}();t.DataTransfer=e;var n=function(){function t(){if(this._lastClick=0,t._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",(function(){}),{get passive(){return e=!0,!0}}),"ontouchstart"in document){var n=document,a=this._touchstart.bind(this),r=this._touchmove.bind(this),i=this._touchend.bind(this),o=!!e&&{passive:!1,capture:!1};n.addEventListener("touchstart",a,o),n.addEventListener("touchmove",r,o),n.addEventListener("touchend",i),n.addEventListener("touchcancel",i)}}return t.getInstance=function(){return t._instance},t.prototype._touchstart=function(e){var n=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<t._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target))return e.preventDefault(),void this._reset();this._reset();var a=this._closestDraggable(e.target);a&&(this._dispatchEvent(e,"mousemove",e.target)||this._dispatchEvent(e,"mousedown",e.target)||(this._dragSource=a,this._ptDown=this._getPoint(e),this._lastTouch=e,e.preventDefault(),setTimeout((function(){n._dragSource==a&&null==n._img&&n._dispatchEvent(e,"contextmenu",a)&&n._reset()}),t._CTXMENU),t._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout((function(){n._isDragEnabled=!0,n._touchmove(e)}),t._PRESSHOLDAWAIT))))}},t.prototype._touchmove=function(t){if(this._shouldCancelPressHoldMove(t))this._reset();else if(this._shouldHandleMove(t)||this._shouldHandlePressHoldMove(t)){var e=this._getTarget(t);if(this._dispatchEvent(t,"mousemove",e))return this._lastTouch=t,void t.preventDefault();this._dragSource&&!this._img&&this._shouldStartDragging(t)&&(this._dispatchEvent(t,"dragstart",this._dragSource),this._createImage(t),this._dispatchEvent(t,"dragenter",e)),this._img&&(this._lastTouch=t,t.preventDefault(),e!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(t,"dragenter",e),this._lastTarget=e),this._moveImage(t),this._isDropZone=this._dispatchEvent(t,"dragover",e))}},t.prototype._touchend=function(t){if(this._shouldHandle(t)){if(this._dispatchEvent(this._lastTouch,"mouseup",t.target))return void t.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",t.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(t.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},t.prototype._shouldHandle=function(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2},t.prototype._shouldHandleMove=function(e){return!t._ISPRESSHOLDMODE&&this._shouldHandle(e)},t.prototype._shouldHandlePressHoldMove=function(e){return t._ISPRESSHOLDMODE&&this._isDragEnabled&&e&&e.touches&&e.touches.length},t.prototype._shouldCancelPressHoldMove=function(e){return t._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(e)>t._PRESSHOLDMARGIN},t.prototype._shouldStartDragging=function(e){var n=this._getDelta(e);return n>t._THRESHOLD||t._ISPRESSHOLDMODE&&n>=t._PRESSHOLDTHRESHOLD},t.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new e,clearInterval(this._pressHoldInterval)},t.prototype._getPoint=function(t,e){return t&&t.touches&&(t=t.touches[0]),{x:e?t.pageX:t.clientX,y:e?t.pageY:t.clientY}},t.prototype._getDelta=function(e){if(t._ISPRESSHOLDMODE&&!this._ptDown)return 0;var n=this._getPoint(e);return Math.abs(n.x-this._ptDown.x)+Math.abs(n.y-this._ptDown.y)},t.prototype._getTarget=function(t){for(var e=this._getPoint(t),n=document.elementFromPoint(e.x,e.y);n&&"none"==getComputedStyle(n).pointerEvents;)n=n.parentElement;return n},t.prototype._createImage=function(e){this._img&&this._destroyImage();var n=this._imgCustom||this._dragSource;if(this._img=n.cloneNode(!0),this._copyStyle(n,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var a=n.getBoundingClientRect(),r=this._getPoint(e);this._imgOffset={x:r.x-a.left,y:r.y-a.top},this._img.style.opacity=t._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},t.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},t.prototype._moveImage=function(t){var e=this;requestAnimationFrame((function(){if(e._img){var n=e._getPoint(t,!0),a=e._img.style;a.position="absolute",a.pointerEvents="none",a.zIndex="999999",a.left=Math.round(n.x-e._imgOffset.x)+"px",a.top=Math.round(n.y-e._imgOffset.y)+"px"}}))},t.prototype._copyProps=function(t,e,n){for(var a=0;a<n.length;a++){var r=n[a];t[r]=e[r]}},t.prototype._copyStyle=function(e,n){if(t._rmvAtts.forEach((function(t){n.removeAttribute(t)})),e instanceof HTMLCanvasElement){var a=e,r=n;r.width=a.width,r.height=a.height,r.getContext("2d").drawImage(a,0,0)}for(var i=getComputedStyle(e),o=0;o<i.length;o++){var s=i[o];s.indexOf("transition")<0&&(n.style[s]=i[s])}n.style.pointerEvents="none";for(o=0;o<e.children.length;o++)this._copyStyle(e.children[o],n.children[o])},t.prototype._dispatchEvent=function(e,n,a){if(e&&a){var r=document.createEvent("Event"),i=e.touches?e.touches[0]:e;return r.initEvent(n,!0,!0),r.button=0,r.which=r.buttons=1,this._copyProps(r,e,t._kbdProps),this._copyProps(r,i,t._ptProps),r.dataTransfer=this._dataTransfer,a.dispatchEvent(r),r.defaultPrevented}return!1},t.prototype._closestDraggable=function(t){for(;t;t=t.parentElement)if(t.hasAttribute("draggable")&&t.draggable)return t;return null},t}();n._instance=new n,n._THRESHOLD=5,n._OPACITY=.5,n._DBLCLICK=500,n._CTXMENU=900,n._ISPRESSHOLDMODE=!1,n._PRESSHOLDAWAIT=400,n._PRESSHOLDMARGIN=25,n._PRESSHOLDTHRESHOLD=0,n._rmvAtts="id,class,style,draggable".split(","),n._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),n._ptProps="pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY".split(","),t.DragDropTouch=n}(n||(n={}))},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),s=n(6),l=n(3);function c(t){var e=t.entryKey,n=t.title,a=t.enableThrash,i=t.disableThrash;return r.a.createElement("div",{className:"Bucket__content__entry",draggable:!0,onDragStart:function(t){return t.dataTransfer.setData("text/entryKey",e),void a()},onDragEnd:function(t){i()}},n)}function h(t){var e=t.title,n=t.background,a=t.content,i=t.category,o=t.handleDrop,s=t.enableThrash,l=t.disableThrash;return r.a.createElement("div",{className:"Bucket",style:{backgroundColor:n},onDragOver:function(t){t.preventDefault()},onDrop:function(t){return o(t,i)}},r.a.createElement("h2",null,e),r.a.createElement("hr",null),r.a.createElement("div",{className:"Bucket__content"},a.map((function(t){return r.a.createElement(c,{key:t.id,entryKey:t.id,title:t.title,enableThrash:s,disableThrash:l})}))),r.a.createElement("hr",null),r.a.createElement("p",{className:"Bucket__footer"},a.length," entr",1===a.length?"y":"ies"))}function u(t){var e=t.entries,n=t.handleDrop,a=t.enableThrash,i=t.disableThrash,o=e.filter((function(t){return"strengths"===t.category})),s=e.filter((function(t){return"opportunities"===t.category})),l=e.filter((function(t){return"weaknesses"===t.category})),c=e.filter((function(t){return"threats"===t.category}));return r.a.createElement("div",{id:"Table"},r.a.createElement("div",{className:"Table__row"},r.a.createElement(h,{title:"Strengths",background:"#218559BB",content:o,category:"strengths",handleDrop:n,enableThrash:a,disableThrash:i}),r.a.createElement(h,{title:"Opportunities",background:"#06A2CBBB",content:s,category:"opportunities",handleDrop:n,enableThrash:a,disableThrash:i})),r.a.createElement("div",{className:"Table__row"},r.a.createElement(h,{title:"Weaknesses",background:"#DD1E2FBB",content:l,category:"weaknesses",handleDrop:n,enableThrash:a,disableThrash:i}),r.a.createElement(h,{title:"Threats",background:"#EBB035BB",content:c,category:"threats",handleDrop:n,enableThrash:a,disableThrash:i})))}function d(t){var e=t.enableOverlay,n=t.thrashMode,a=t.handleDrop;return r.a.createElement("button",{id:n?"RemoveEntry":"AddEntry",onClick:e,onDragOver:function(t){t.preventDefault()},onDrop:function(t){return a(t,"thrash")}},n?"\ud83d\uddd1\ufe0f":"+")}function _(t){var e=t.disableOverlay,n=t.addNewEntry,i=Object(a.useRef)(""),o=Object(a.useRef)("");function s(){var t=i.current.value,a=o.current.value;n(t,a),e()}return r.a.createElement("div",{id:"Dialog"},r.a.createElement("div",{id:"Dialog__overlay"},r.a.createElement("input",{ref:i,id:"Dialog__overlay__title",type:"text",placeholder:"Entry",onKeyUp:function(t){"Enter"===t.key&&s()},autoFocus:!0}),r.a.createElement("select",{ref:o,name:"categories",id:"Dialog__overlay__categories"},r.a.createElement("option",{value:"strengths"},"Strengths"),r.a.createElement("option",{value:"opportunities"},"Opportunities"),r.a.createElement("option",{value:"weaknesses"},"Weaknesses"),r.a.createElement("option",{value:"threats"},"Threats")),r.a.createElement("div",{id:"Dialog__overlay__action"},r.a.createElement("button",{id:"Dialog__overlay__action__add",onClick:s},"Add"),r.a.createElement("button",{id:"Dialog__overlay__action__cancel",onClick:e},"Cancel"))))}var p=n(16);n(12),n(13);var g=function(){var t=Object(a.useState)(!1),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(!1),c=Object(l.a)(o,2),h=c[0],g=c[1],f=Object(a.useState)(JSON.parse(localStorage.getItem("swot.app.state"))||[]),v=Object(l.a)(f,2),m=v[0],y=v[1];function E(t,e){t.preventDefault();var n=t.dataTransfer.getData("text/entryKey"),a=m.map((function(t){return t.id===n&&(t.category=e),t}));a=a.filter((function(t){return"thrash"!==t.category})),D(),y(a)}function D(){g(!1)}return Object(a.useEffect)((function(){localStorage.setItem("swot.app.state",JSON.stringify(m))}),[m]),r.a.createElement("div",{id:"app"},n&&r.a.createElement(_,{disableOverlay:function(){i(!1)},addNewEntry:function(t,e){var n={title:t,category:e,id:Object(p.a)()};y([].concat(Object(s.a)(m),[n]))}}),r.a.createElement("header",{id:"app__header"},"SWOT Table"),r.a.createElement(u,{entries:m,handleDrop:E,enableThrash:function(){g(!0)},disableThrash:D}),r.a.createElement(d,{enableOverlay:function(){i(!0)},thrashMode:h,handleDrop:E}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.cb4d84fb.chunk.js.map