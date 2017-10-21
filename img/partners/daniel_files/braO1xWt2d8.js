if (self.CavalryLogger) { CavalryLogger.start_js(["TQWfw"]); }

__d("PlatformDialog",["cx","DOMEventListener","DOMEvent","CSS"],(function a(b,c,d,e,f,g,h){var i;j.getInstance=function(){"use strict";return i};function j(k,l,m){"use strict";i=this;this.$PlatformDialog1=k;this.$PlatformDialog2=l;this.$PlatformDialog3=false;c("DOMEventListener").add(this.$PlatformDialog1,"submit",function(n){if(this.$PlatformDialog3){new(c("DOMEvent"))(n).kill();return}this.$PlatformDialog3=true;if(m)c("CSS").addClass(k,"_32qa")}.bind(this))}j.prototype.getForm=function(){"use strict";return this.$PlatformDialog1};j.prototype.getDisplay=function(){"use strict";return this.$PlatformDialog2};j.prototype.hasBeenSubmitted=function(){"use strict";return this.$PlatformDialog3};j.RESPONSE="platform/dialog/response";f.exports=j}),null);
__d("PlatformDialogResize",["DialogPosition","DOMDimensions","Layer","getElementPosition","getViewportDimensions","throttle"],(function a(b,c,d,e,f,g){c("DialogPosition").setFixedTopMargin(40);var h=[],i,j;function k(r){return function(s){return s[r]}}function l(r){return Math.max.apply(null,r)}function m(r,s){return c("DOMDimensions").measureElementBox(r,s,true,true,true)}function n(r){var s=c("DOMDimensions").getElementDimensions(r),t=c("getElementPosition")(r);return{width:t.x+s.width+m(r,"right"),height:t.y+s.height+m(r,"bottom")}}function o(){return h.map(function(r){return r.isShown()&&r.getContentRoot()?n(r.getRoot().children[0]):{width:0,height:0}})}var p=c("throttle")(function(){var r=c("getViewportDimensions")(),s=c("DOMDimensions").getDocumentDimensions(),t=o().concat(s,r,i),u=l(t.map(k("width")))-r.width,v=l(t.map(k("height")))-r.height;try{window.resizeBy(u,v);window.moveBy(u/-2,0)}catch(w){}},200);c("Layer").subscribe("show",function(event,r){if(h.length===0)j=setInterval(p,200);h.push(r);p()});c("Layer").subscribe("hide",function(event,r){var s=h.indexOf(r);if(s!==-1){h.splice(s,1);p()}if(h.length===0){clearInterval(j);j=null}});var q={auto:function r(s,t){i={width:s,height:t};p();setTimeout(p,250)}};f.exports=q}),null);
__d("Popup",[],(function a(b,c,d,e,f,g){var h={open:function i(j,k,l,m){var n=document.body,o="screenX"in window?window.screenX:window.screenLeft,p="screenY"in window?window.screenY:window.screenTop,q="outerWidth"in window?window.outerWidth:n.clientWidth,r="outerHeight"in window?window.outerHeight:n.clientHeight-22,s=Math.floor(o+(q-k)/2),t=Math.floor(p+(r-l)/2.5),u=["width="+k,"height="+l,"left="+s,"top="+t,"scrollbars"];return window.open(j,m||"_blank",u.join(","))}};f.exports=h}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function a(b,c,d,e,f,g){var h={_opts:{allowShrink:true,strategy:"vector",timeout:100,widthElement:null},init:function i(j){Object.assign(h._opts,j);setInterval(h._resizeCheck,h._opts.timeout)},_resizeCheck:function i(){var j=c("getViewportDimensions")(),k=h._getDocumentSize(),l=c("Layer").getTopmostLayer();if(l){var m=l.getRoot().firstChild,n=c("DOMDimensions").getElementDimensions(m);n.height+=c("DOMDimensions").measureElementBox(m,"height",true,true,true);n.width+=c("DOMDimensions").measureElementBox(m,"width",true,true,true);k.height=Math.max(k.height,n.height);k.width=Math.max(k.width,n.width)}var o=k.height-j.height,p=k.width-j.width;if(p<0&&!h._opts.widthElement)p=0;p=p>1?p:0;if(!h._opts.allowShrink&&o<0)o=0;if(o||p)try{window.console&&window.console.firebug;window.resizeBy(p,o);if(p)window.moveBy(p/-2,0)}catch(q){}},_getDocumentSize:function i(){var j=c("DOMDimensions").getDocumentDimensions();if(h._opts.strategy==="offsetHeight")j.height=document.body.offsetHeight;if(h._opts.widthElement){var k=c("DOMQuery").scry(document.body,h._opts.widthElement)[0];if(k)j.width=c("DOMDimensions").getElementDimensions(k).width}var l=b.Dialog;if(l&&l.max_bottom&&l.max_bottom>j.height)j.height=l.max_bottom;return j},open:function i(j,k,l,m){return c("Popup").open(j,l,k,m)}};f.exports=h}),null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],(function a(b,c,d,e,f,g){"use strict";function h(i){var j=i.getBoundingClientRect(),k=0,l=0,m=c("getDocumentScrollElement")(i.ownerDocument),n=m.getBoundingClientRect();if(n.left>0)k=-n.left;else{var o=m.scrollWidth+n.left,p=n.width;if(p>o)k=p-o}if(n.top>0)l=-n.top;return{bottom:j.bottom+l,height:j.height,left:j.left+k,right:j.right+k,top:j.top+l,width:j.width}}f.exports=h}),null);
__d("StickyArea",["cx","CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","getNormalizedClientRect","getOverlayZIndex","removeFromArray","throttle"],(function a(b,c,d,e,f,g,h){var i=[],j=null,k=null,l=c("throttle").acrossTransitions(o,1e3),m="$$StickyArea_scrollListener",n="$$StickyArea_scrollListenerCount";function o(){i.sort(function(u,v){var w=u.getNode(),x=v.getNode();if(w.compareDocumentPosition)return 3-(w.compareDocumentPosition(x)&6);else return w.sourceIndex-x.sourceIndex})}function p(u,v,w){var x=u.getPlaceholder(),y=u.getNode(),z=c("Style").get(y,"float"),A=u.getData();if(A.placeholderWidth!==v||A.placeholderHeight!==w||A.placeholderFloat!==z){c("Style").apply(x,{"float":z,height:w+"px",width:v+"px"});A.placeholderHeight=w;A.placeholderWidth=v}if(y.nextSibling!==x)c("DOM").insertAfter(y,x)}function q(u,v){var w=u.getData();if(w.fixed!==v){c("Style").apply(u.getNode(),w.styles);c("CSS").conditionShow(u.getPlaceholder(),v);c("CSS").conditionClass(u.getNode(),"_1a1e",v);c("Event").fire(u.getNode(),"change");w.fixed=v}}function r(u,v){if(!u)return 0;else if(v.right<=u.rect.left||v.left>=u.rect.right)return r(u.prev,v);else return u.bottom}function s(){var u=0,v=i.length,w=100,x=null;function y(z,A){var B=w;while(u<v){var C=i[u],D=C.getNode(),E=C._scrollTarget;if(A&&!c("DOMQuery").contains(A,D))break;w=Math.max(B,C.getZIndex());var F=C.getData(),G=D.parentNode,H=F.styles;if(G==null){u++;continue}for(var I in H)H[I]="";q(C,false);var J=D.offsetHeight,K=D.offsetWidth,L=E!==window?E.getBoundingClientRect().top:0,M=c("getNormalizedClientRect")(D),N=r(z||(E===window?x:null),M)+C.getOffset(),O=M.top-L;if(O<=N){H.width=K+"px";var P=parseInt(c("Style").get(G,"padding-bottom"),10),Q=c("getNormalizedClientRect")(G);if(Q.bottom-P>N+J||!C.getIsBoundToContainer()){var R=parseInt(c("Style").get(D,"margin-left"),10);H.position="fixed";H.bottom="auto";H.top=N+L+"px";H.left=M.left-R+"px"}else{if(!F.parent||G!==F.parent){if(c("Style").get(G,"position")==="static")c("Style").set(G,"position","relative");F.parent=G}H.position="absolute";H.top="auto";H.bottom=P+"px";var S=parseInt(c("Style").get(G,"border-left-width"),10);H.left=M.left-Q.left-S+"px"}p(C,K,J);q(C,true)}u++;var T={bottom:N+J,prev:z,rect:M},U=0;if(!C.getIsBoundToContainer()){x=T;U=100}y(T,G);var V=C.getZIndexOverride()||w+++U;c("Style").set(D,"z-index",V)}}y(null,null)}function t(u,v,w){var x=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];"use strict";this._isDestroyed=false;this._node=u;this._data={fixed:false,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}};this._offset=w;this._boundToContainer=x.boundToContainer!==false;if(x.stickTo===t.stickTo.SCROLL_PARENT)this._scrollTarget=c("Style").getScrollParent(u.parentNode)||window;else this._scrollTarget=window;this._zIndexOverride=x.zIndexOverride;c("CSS").addClass(u,"_k");if(!v)c("Run").onLeave(this.destroy.bind(this));if(!this._scrollTarget[m]){this._scrollTarget[m]=c("Event").listen(this._scrollTarget,"scroll",function(){l();s()});this._scrollTarget[n]=1}else this._scrollTarget[n]++;if(!i.length){j=c("Event").listen(window,"resize",function(){l();s()});k=c("ViewportBounds").subscribe("change",function(){l();s()})}i.push(this);t.reflow()}t.prototype.destroy=function(){"use strict";if(this._isDestroyed)return;c("removeFromArray")(i,this);this._scrollTarget[n]--;if(this._scrollTarget[n]===0){this._scrollTarget[m].remove();this._scrollTarget[m]=null}if(!i.length){j.remove();j=null;k.unsubscribe();k=null}if(this._placeholder)c("DOM").remove(this._placeholder);var u=0;for(var v in this._data.styles){this._data.styles[v]="";u++}if(u)c("Style").apply(this._node,this._data.styles);this._isDestroyed=true};t.prototype.getData=function(){"use strict";return this._data};t.prototype.getNode=function(){"use strict";return this._node};t.prototype.getOffset=function(){"use strict";return this._offset||0};t.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=c("DOM").create("div");return this._placeholder};t.prototype.getIsBoundToContainer=function(){"use strict";return this._boundToContainer};t.prototype.getZIndexOverride=function(){"use strict";return this._zIndexOverride};t.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=c("getOverlayZIndex")(this._node);return this._zIndex};t.prototype.setOffset=function(u){"use strict";this._offset=u};t.reflow=c("throttle").acrossTransitions(function(){o();s()},100);t.stickTo={SCROLL_PARENT:"SCROLL_PARENT",WINDOW:"WINDOW"};f.exports=t}),null);
__d("XUINotice",["invariant","Event"],(function a(b,c,d,e,f,g,h){function i(j,k){this._root=j;this._closeButton=k}Object.assign(i.prototype,{getRoot:function j(){return this._root},isDismissable:function j(){return!!this._closeButton},setDismissHandler:function j(k){this.isDismissable()||h(0);this.removeDismissHandler();this._listener=c("Event").listen(this._closeButton,"click",k)},removeDismissHandler:function j(){this._listener&&this._listener.remove();this._listener=null},destroy:function j(){this.removeDismissHandler();this._root=null;this._closeButton=null}});f.exports=i}),null);
__d("StrSet",[],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$StrSet2={};this.$StrSet1=0;if(i)this.addAll(i)}h.prototype.add=function(i){"use strict";if(!Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){this.$StrSet2[i]=true;this.$StrSet1++}return this};h.prototype.addAll=function(i){"use strict";i.forEach(this.add,this);return this};h.prototype.remove=function(i){"use strict";if(Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){delete this.$StrSet2[i];this.$StrSet1--}return this};h.prototype.removeAll=function(i){"use strict";i.forEach(this.remove,this);return this};h.prototype.toArray=function(){"use strict";return Object.keys(this.$StrSet2)};h.prototype.toMap=function(i){"use strict";var j={};Object.keys(this.$StrSet2).forEach(function(k){j[k]=typeof i=="function"?i(k):i||true});return j};h.prototype.contains=function(i){"use strict";return Object.prototype.hasOwnProperty.call(this.$StrSet2,i)};h.prototype.count=function(){"use strict";return this.$StrSet1};h.prototype.clear=function(){"use strict";this.$StrSet2={};this.$StrSet1=0;return this};h.prototype.clone=function(){"use strict";return new h(this)};h.prototype.forEach=function(i,j){"use strict";Object.keys(this.$StrSet2).forEach(i,j)};h.prototype.map=function(i,j){"use strict";return Object.keys(this.$StrSet2).map(i,j)};h.prototype.some=function(i,j){"use strict";return Object.keys(this.$StrSet2).some(i,j)};h.prototype.every=function(i,j){"use strict";return Object.keys(this.$StrSet2).every(i,j)};h.prototype.filter=function(i,j){"use strict";return new h(Object.keys(this.$StrSet2).filter(i,j))};h.prototype.union=function(i){"use strict";return this.clone().addAll(i)};h.prototype.intersect=function(i){"use strict";return this.filter(function(j){return i.contains(j)})};h.prototype.difference=function(i){"use strict";return i.filter(function(j){return!this.contains(j)}.bind(this))};h.prototype.equals=function(i){"use strict";var j=function j(n,o){return n===o?0:n<o?-1:1},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true};f.exports=h}),null);
__d("Queue",[],(function a(b,c,d,e,f,g){var h={};function i(j){"use strict";this._opts=babelHelpers["extends"]({interval:0,processor:null},j);this._queue=[];this._stopped=true}i.prototype._dispatch=function(j){"use strict";if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error("No processor available")}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval)}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift())};i.prototype.enqueue=function(j){"use strict";if(this._opts.processor&&!this._stopped)this._opts.processor.call(this,j);else this._queue.push(j);return this};i.prototype.start=function(j){"use strict";if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this};i.prototype.isStarted=function(){"use strict";return!this._stopped};i.prototype.dispatch=function(){"use strict";this._dispatch(true)};i.prototype.stop=function(j){"use strict";this._stopped=true;if(j)clearTimeout(this._timeout);return this};i.prototype.merge=function(j,k){"use strict";this._queue[k?"unshift":"push"].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this};i.prototype.getLength=function(){"use strict";return this._queue.length};i.get=function(j,k){"use strict";var l;if(j in h)l=h[j];else l=h[j]=new i(k);return l};i.exists=function(j){"use strict";return j in h};i.remove=function(j){"use strict";return delete h[j]};f.exports=i}),null);
__d("PlatformBaseVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function a(b,c,d,e,f,g,h){var i=new(c("StrSet"))(c("getObjectValues")(c("PlatformVersions").versions)),j=location.pathname,k=j.substring(1,j.indexOf("/",1)),l=i.contains(k)?k:c("PlatformVersions").versions.UNVERSIONED;function m(j,p){if(p==c("PlatformVersions").versions.UNVERSIONED)return j;i.contains(p)||h(0);if(j.indexOf("/")!==0)j="/"+j;return"/"+p+j}function n(j){if(i.contains(j.substring(1,j.indexOf("/",1))))return j.substring(j.indexOf("/",1));return j}var o={addVersionToPath:m,getLatestVersion:function p(){return c("PlatformVersions").LATEST},versionAwareURI:function p(q){return q.setPath(m(q.getPath(),l))},versionAwarePath:function p(j){return m(j,l)},getUnversionedPath:n};f.exports=o}),null);