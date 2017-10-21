if (self.CavalryLogger) { CavalryLogger.start_js(["rM3BM"]); }

__d("VideoPlayerHTML5Subtitles",["cx","csx","CSS","DOM","DOMQuery","SubtitlesStyle"],(function a(b,c,d,e,f,g,h,i){function j(k,l){"use strict";this.$VideoPlayerHTML5Subtitles3="";this.$VideoPlayerHTML5Subtitles6=k;this.$VideoPlayerHTML5Subtitles7=l}j.prototype.loadSubtitles=function(){"use strict";var k=c("DOMQuery").scry(this.$VideoPlayerHTML5Subtitles6.parentNode,"._30vn");if(k.length){this.$VideoPlayerHTML5Subtitles1=k[0];this.$VideoPlayerHTML5Subtitles2=c("DOMQuery").find(this.$VideoPlayerHTML5Subtitles1,"._30vo")}else{this.$VideoPlayerHTML5Subtitles1=c("DOM").create("div",{className:"_30vn hidden_elem"});this.$VideoPlayerHTML5Subtitles2=c("DOM").create("span",{className:"_30vo hidden_elem"});c("DOM").setContent(this.$VideoPlayerHTML5Subtitles1,this.$VideoPlayerHTML5Subtitles2);c("DOM").insertAfter(this.$VideoPlayerHTML5Subtitles6,this.$VideoPlayerHTML5Subtitles1)}this.setDimensions();this.$VideoPlayerHTML5Subtitles7.setSubtitleUpdatedHandler(this.setSubtitle.bind(this))};j.prototype.setSubtitlesStyle=function(k,l,m,n){"use strict";if(this.$VideoPlayerHTML5Subtitles5){this.$VideoPlayerHTML5Subtitles5.setBackgroundColor(k);this.$VideoPlayerHTML5Subtitles5.setBackgroundOpacity(l);this.$VideoPlayerHTML5Subtitles5.setTextColor(m);this.$VideoPlayerHTML5Subtitles5.setTextSize(n);this.$VideoPlayerHTML5Subtitles5.updateStyle()}else this.$VideoPlayerHTML5Subtitles5=new(c("SubtitlesStyle"))(k,l,this.$VideoPlayerHTML5Subtitles2,this.$VideoPlayerHTML5Subtitles1,m,n)};j.prototype.$VideoPlayerHTML5Subtitles8=function(k){"use strict";if(this.$VideoPlayerHTML5Subtitles1)c("DOM").setAttributes(this.$VideoPlayerHTML5Subtitles1,{style:"bottom:"+k+"px;"})};j.prototype.$VideoPlayerHTML5Subtitles9=function(){"use strict";if(this.$VideoPlayerHTML5Subtitles4){this.$VideoPlayerHTML5Subtitles4.release();this.$VideoPlayerHTML5Subtitles4.removeAllListeners();delete this.$VideoPlayerHTML5Subtitles4}};j.prototype.registerDrawer=function(k){"use strict";this.$VideoPlayerHTML5Subtitles9();this.$VideoPlayerHTML5Subtitles4=k;this.$VideoPlayerHTML5Subtitles4.addListener("reposition",this.$VideoPlayerHTML5Subtitles8.bind(this))};j.prototype.setDimensions=function(){"use strict";var k=this.$VideoPlayerHTML5Subtitles6.getBoundingClientRect().width;if(this.$VideoPlayerHTML5Subtitles1)if(k<350){c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles1,"_30vp");c("CSS").addClass(this.$VideoPlayerHTML5Subtitles1,"_30vq")}else if(k<800){c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles1,"_30vp");c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles1,"_30vq")}else{c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles1,"_30vq");c("CSS").addClass(this.$VideoPlayerHTML5Subtitles1,"_30vp")}};j.prototype.setSubtitle=function(k){"use strict";var l=k.join("\n");if(l===this.$VideoPlayerHTML5Subtitles3)return;c("DOM").setContent(this.$VideoPlayerHTML5Subtitles2,l);if(l){c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles2,"hidden_elem");this.$VideoPlayerHTML5Subtitles4&&this.$VideoPlayerHTML5Subtitles4.setHeight(this.$VideoPlayerHTML5Subtitles1.offsetHeight)}else{c("CSS").addClass(this.$VideoPlayerHTML5Subtitles2,"hidden_elem");this.$VideoPlayerHTML5Subtitles4&&this.$VideoPlayerHTML5Subtitles4.setHeight(0)}this.$VideoPlayerHTML5Subtitles3=l};j.prototype.setOnSubtitlesReady=function(k){"use strict";this.$VideoPlayerHTML5Subtitles7.setSubtitleReadyHandler(k)};j.prototype.removeSubtitles=function(){"use strict";c("DOM").setContent(this.$VideoPlayerHTML5Subtitles6,null);c("DOM").remove(this.$VideoPlayerHTML5Subtitles1);this.$VideoPlayerHTML5Subtitles9();this.$VideoPlayerHTML5Subtitles7.remove()};j.prototype.showSubtitles=function(){"use strict";this.$VideoPlayerHTML5Subtitles1&&c("CSS").removeClass(this.$VideoPlayerHTML5Subtitles1,"hidden_elem");if(this.$VideoPlayerHTML5Subtitles4){this.$VideoPlayerHTML5Subtitles4.reposition();this.$VideoPlayerHTML5Subtitles4.reserve()}};j.prototype.hideSubtitles=function(){"use strict";this.$VideoPlayerHTML5Subtitles1&&c("CSS").addClass(this.$VideoPlayerHTML5Subtitles1,"hidden_elem");this.$VideoPlayerHTML5Subtitles4&&this.$VideoPlayerHTML5Subtitles4.release()};f.exports=j}),null);
__d("VideoPlayerWebVttSubtitleStream",["BlobFactory","DOM","Event","SubRipText","XHRRequest","getCrossOriginTransport","emptyFunction"],(function a(b,c,d,e,f,g){"use strict";var h=c("Event").EventHandlerRef,i=b.URL||b.webkitURL;function j(k,l){this.$VideoPlayerWebVttSubtitleStream2=c("emptyFunction");this.$VideoPlayerWebVttSubtitleStream3={};this.$VideoPlayerWebVttSubtitleStream4=c("emptyFunction");this.$VideoPlayerWebVttSubtitleStream5={};this.$VideoPlayerWebVttSubtitleStream6=[];this.$VideoPlayerWebVttSubtitleStream12=function(){var m=this.$VideoPlayerWebVttSubtitleStream1.textTracks[0].activeCues;if(m&&m.length&&m[0].text)this.$VideoPlayerWebVttSubtitleStream2([m[0].text]);else this.$VideoPlayerWebVttSubtitleStream2([])}.bind(this);this.$VideoPlayerWebVttSubtitleStream1=k;this.$VideoPlayerWebVttSubtitleStream7(l)}j.prototype.setSubtitleUpdatedHandler=function(k){this.$VideoPlayerWebVttSubtitleStream2=k;return this};j.prototype.setSubtitleReadyHandler=function(k){this.$VideoPlayerWebVttSubtitleStream4=k;return this};j.prototype.remove=function(){this.$VideoPlayerWebVttSubtitleStream6.forEach(function(k){return k.remove()});this.$VideoPlayerWebVttSubtitleStream6=[]};j.prototype.$VideoPlayerWebVttSubtitleStream7=function(k){if(k in this.$VideoPlayerWebVttSubtitleStream3){this.$VideoPlayerWebVttSubtitleStream8(this.$VideoPlayerWebVttSubtitleStream3[k]);return}if(!i||!c("BlobFactory").isSupported())return;new(c("XHRRequest"))(k).setTransportBuilder(c("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(l){this.$VideoPlayerWebVttSubtitleStream3[k]=this.$VideoPlayerWebVttSubtitleStream9(l);this.$VideoPlayerWebVttSubtitleStream8(this.$VideoPlayerWebVttSubtitleStream3[k])}.bind(this)).send()};j.prototype.$VideoPlayerWebVttSubtitleStream10=function(){Array.prototype.forEach.call(this.$VideoPlayerWebVttSubtitleStream1.textTracks,function(k){return k.mode="hidden"})};j.prototype.$VideoPlayerWebVttSubtitleStream8=function(k){var l=c("DOM").create("track",{kind:"captions",src:k});c("Event").listen(l,"load",function(){this.$VideoPlayerWebVttSubtitleStream4()}.bind(this));c("DOM").appendContent(this.$VideoPlayerWebVttSubtitleStream1,l);this.$VideoPlayerWebVttSubtitleStream10();this.$VideoPlayerWebVttSubtitleStream6.push(c("Event").listen(this.$VideoPlayerWebVttSubtitleStream1,"timeupdate",function(){this.$VideoPlayerWebVttSubtitleStream13(k)}.bind(this)))};j.prototype.$VideoPlayerWebVttSubtitleStream11=function(k){return k.oncuechange!==undefined};j.prototype.$VideoPlayerWebVttSubtitleStream9=function(k){var l=new(c("SubRipText"))(k),m=c("BlobFactory").getBlob([l.renderVTT()],{type:"text/vtt"}),n=i.createObjectURL(m);this.$VideoPlayerWebVttSubtitleStream5[n]=l;return n};j.prototype.$VideoPlayerWebVttSubtitleStream13=function(k){var l=this.$VideoPlayerWebVttSubtitleStream1.currentTime;this.$VideoPlayerWebVttSubtitleStream2(this.$VideoPlayerWebVttSubtitleStream5[k].getSubtitles(l))};f.exports=j}),null);