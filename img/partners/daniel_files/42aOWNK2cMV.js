if (self.CavalryLogger) { CavalryLogger.start_js(["K8xTt"]); }

__d("SubRipText",[],(function a(b,c,d,e,f,g){var h={size:"90%"};function i(t){var u=Number(t.substr(0,t.length-1)),v=t.substr(-1);switch(v){case"s":return u;case"m":return u*60;case"h":return u*3600}var w=t.split(":");u=Number(w[w.length-1].replace(/,/,"."));if(w.length>1)u+=Number(w[w.length-2])*60;if(w.length>2)u+=Number(w[w.length-3])*3600;return u}function j(t){var u=t.split(/\r\n|\r|\n/).map(function(z){return z.trim()}),v=[],w=0;do{var x=u.indexOf("",w);if(x<0)x=u.length;var y=l(u.slice(w,x));if(y)v.push(y);w=x+1}while(w>0&&w<u.length);return v}function k(t){var u=t.split("-->");if(u.length!=2)return null;var v=i(u[0].trim()),w=i(u[1].trim());if(Number.isNaN(w)||Number.isNaN(v))return null;return{begin:v,end:w}}function l(t){if(t.length<3)return null;var u=m(t[0]),v=k(t[1]);if(!v)return null;return{counter:u,begin:v.begin,end:v.end,text:t.slice(2,6)}}function m(t){return Number(t.trim())}function n(t){var u=t.split(".");if(u[0].length<2)return"0"+u.join(".");return u.join(".")}function o(t){var u=n(Math.floor(t/3600).toString()),v=n(Math.floor(t%3600/60).toString()),w=n((t%60).toFixed(3));return u+":"+v+":"+w}function p(t,u,v){var w="";if(v)for(var x in v)w+=" "+x+":"+v[x];return o(t)+" --> "+o(u)+w}function q(t,u){return t.counter+"\n"+p(t.begin,t.end,u)+"\n"+t.text.join("\n")+"\n"}function r(t,u){return"WEBVTT\n\n"+t.map(function(v){return q(v,u)}).join("\n")}function s(t){"use strict";this.$SubRipText1=j(t);this.$SubRipText1.sort(function(u,v){return u.counter-v.counter});this.$SubRipText2=this.$SubRipText1.map(function(u,v){return v}).sort(function(u,v){return this.$SubRipText1[u].begin-this.$SubRipText1[v].begin}.bind(this));this.invalidateCache();this.$SubRipText6=h}s.prototype.$SubRipText7=function(t){"use strict";return this.$SubRipText1[this.$SubRipText2[t]]};s.prototype.$SubRipText8=function(t){"use strict";var u=this.$SubRipText3;while(u<this.$SubRipText2.length){var v=this.$SubRipText7(u);if(v.begin<=t){this.$SubRipText4.push(v);u++}else break}this.$SubRipText3=u};s.prototype.$SubRipText9=function(t){"use strict";this.$SubRipText4=this.$SubRipText4.filter(function(u){return u.end>t})};s.prototype.invalidateCache=function(){"use strict";this.$SubRipText5=0;this.$SubRipText4=[];this.$SubRipText3=0};s.prototype.setStyle=function(t){"use strict";this.$SubRipText6=t};s.prototype.getSubtitles=function(t){"use strict";if(t<this.$SubRipText5)this.invalidateCache();this.$SubRipText5=t;this.$SubRipText8(t);this.$SubRipText9(t);return this.$SubRipText4.reduce(function(u,v){return u.concat(v.text)},[])};s.prototype.renderVTT=function(){"use strict";return r(this.$SubRipText1,this.$SubRipText6)};f.exports=s}),null);
__d("IGVideoSubtitles",["DOM","EventListener","SubRipText","XHRRequest","getCrossOriginTransport"],(function a(b,c,d,e,f,g){var h=b.URL||b.webkitURL;function i(j,k){"use strict";this.$IGVideoSubtitles1=j;this.$IGVideoSubtitles2=this.showSubtitles.bind(this);this.$IGVideoSubtitles3(k)}i.prototype.$IGVideoSubtitles4=function(j){"use strict";var k=new(c("SubRipText"))(j),l=new Blob([k.renderVTT()],{type:"text/vtt"});return h.createObjectURL(l)};i.prototype.$IGVideoSubtitles3=function(j){"use strict";if(!h)return;new(c("XHRRequest"))(j).setTransportBuilder(c("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(k){this.$IGVideoSubtitles5(this.$IGVideoSubtitles4(k))}.bind(this)).send()};i.prototype.$IGVideoSubtitles5=function(j){"use strict";var k=c("DOM").create("track",{kind:"captions",src:j});c("EventListener").listen(k,"load",function(){this.$IGVideoSubtitles2()}.bind(this));c("DOM").appendContent(this.$IGVideoSubtitles1,k);this.hideSubtitles()};i.prototype.showSubtitles=function(){"use strict";Array.prototype.forEach.call(this.$IGVideoSubtitles1.textTracks,function(j){return j.mode="showing"})};i.prototype.hideSubtitles=function(){"use strict";Array.prototype.forEach.call(this.$IGVideoSubtitles1.textTracks,function(j){return j.mode="hidden"})};i.prototype.setOnSubtitlesReady=function(j){"use strict";this.$IGVideoSubtitles2=j};i.load=function(j,k){"use strict";return new i(j,k)};f.exports=i}),null);
__d("isCdnURI",["CdnAkamaiDomainsConfig"],(function a(b,c,d,e,f,g){"use strict";function h(i){if(i.getProtocol()!=="http"&&i.getProtocol()!=="https")return false;var j=i.getPort();if(!!j&&j!==80&&j!==443)return false;if(i.isSubdomainOfDomain("fbcdn.net"))return true;return c("CdnAkamaiDomainsConfig")[i.getDomain()]!=undefined}f.exports=h}),null);
__d("InstagramVideo",["EventListener","IGVideoSubtitles","isCdnURI","LitestandStoryInsertionStatus","Run","throttle","URI"],(function a(b,c,d,e,f,g){var h=1e3/15,i,j={init:function o(p,q,r){i=p;i.muted=r.playMuted!=null?r.playMuted:true;k(r);i.play();this.setSubtitles(i,r.subtitlesSrc);var s=c("LitestandStoryInsertionStatus").registerBlocker(function(){return!i.paused&&!i.ended});c("Run").onLeave(s.unsubscribe.bind(s))},setSubtitles:function o(i,p){if(p&&c("isCdnURI")(new(c("URI"))(p)))c("IGVideoSubtitles").load(i,p)}};function k(o){if(o.playStartSec&&o.playStartSec>0)c("EventListener").listen(i,"loadedmetadata",l(o));if(o.playEndSec!=null)c("EventListener").listen(i,"timeupdate",c("throttle").withBlocking(m.bind(null,o),h));if(o.loop&&(o.playStartSec||o.playEndSec))c("EventListener").listen(i,"timeupdate",c("throttle").withBlocking(n.bind(null,o),h))}function l(o){if(o.playStartSec>0)i.currentTime=o.playStartSec}function m(o,p){if(i.currentTime>o.playEndSec&&!o.loop)i.pause()}function n(o,p){if(o.playEndSec&&i.currentTime>o.playEndSec||o.playStartSec&&i.currentTime==0)i.currentTime=o.playStartSec}f.exports=j}),null);
__d("InstagramAdsPreview",["cssVar","csx","cx","CSS","DOMDimensions","DOMQuery","Event"],(function a(b,c,d,e,f,g,h,i,j){var k=3,l={truncateCaption:function m(n,o){var p=[],q,r=parseInt("15px",o);Array.from(n.children).forEach(function(u){Array.from(u.children).forEach(function(v){p.push(v)})});var s=p[p.length-1];for(var t=0;t<p.length-1;t++){c("CSS").removeClass(p[t],"_50f0");q=c("DOMDimensions").getElementDimensions(n).height;if(q/r>k){c("CSS").removeClass(s,"_50f0");while(q/r>k&&t>=0){c("CSS").addClass(p[t],"_50f0");q=c("DOMDimensions").getElementDimensions(n).height;t--}break}}c("CSS").removeClass(n,"_50f1")},subscribeFocusEvent:function m(n,o){var p=c("DOMQuery").scry(n,"._2ru6");if(p.length!==1)return;var q=p[0],r=false,s="_2ru4",t="_2ru5",u=c("DOMQuery").find(n,"._2ru5"),v=function v(){if(r)return;var y=c("DOMQuery").find(u,"._2ru7");r=true;c("CSS").removeClass(u,t);c("CSS").addClass(u,s);if(y.hasAttribute("src"))y.setAttribute("src",o.focusImageSrc)},w=function w(){if(!r)return;var y=c("DOMQuery").find(u,"._2ru7");r=false;c("CSS").removeClass(u,s);c("CSS").addClass(u,t);if(y.hasAttribute("src"))y.setAttribute("src",o.unfocusImageSrc)},x=function x(y){if(y instanceof HTMLVideoElement)return false;return y instanceof HTMLImageElement};c("Event").listen(q,"click",function(event){if(x(event.srcElement))v()});c("Event").listen(document,"click",function(event){if(!n.contains(event.target))w()})},subscribeToggleEvent:function m(n){var o=false,p=c("DOMQuery").scry(n,".img");c("Event").listen(n,"click",function(event){o=!o;for(var q=0;q<p.length;q++)c("CSS").toggle(p[q])})},isDescendant:function m(n,o,p){p=p||1;var q=o.parentNode;while(p&&q){if(n==q)return true;q=q.parentNode;p--}return false}};f.exports=l}),null);