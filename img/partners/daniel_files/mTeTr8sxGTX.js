if (self.CavalryLogger) { CavalryLogger.start_js(["W8ueE"]); }

__d("MessengerMessageRequestsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$MessengerMessageRequestsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.setAction=function(j){this.$MessengerMessageRequestsTypedLogger1.action=j;return this};h.prototype.setAppID=function(j){this.$MessengerMessageRequestsTypedLogger1.appid=j;return this};h.prototype.setAppversion=function(j){this.$MessengerMessageRequestsTypedLogger1.appversion=j;return this};h.prototype.setClienttime=function(j){this.$MessengerMessageRequestsTypedLogger1.clienttime=j;return this};h.prototype.setContainermodule=function(j){this.$MessengerMessageRequestsTypedLogger1.containermodule=j;return this};h.prototype.setCountry=function(j){this.$MessengerMessageRequestsTypedLogger1.country=j;return this};h.prototype.setEntryPoint=function(j){this.$MessengerMessageRequestsTypedLogger1.entry_point=j;return this};h.prototype.setExtraClientData=function(j){this.$MessengerMessageRequestsTypedLogger1.extra_client_data=j;return this};h.prototype.setFolderType=function(j){this.$MessengerMessageRequestsTypedLogger1.folder_type=j;return this};h.prototype.setName=function(j){this.$MessengerMessageRequestsTypedLogger1.name=j;return this};h.prototype.setSurface=function(j){this.$MessengerMessageRequestsTypedLogger1.surface=j;return this};h.prototype.setThreadID=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_id=j;return this};h.prototype.setThreadKey=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key=j;return this};h.prototype.setThreadKeyList=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key_list=j;return this};h.prototype.setVC=function(j){this.$MessengerMessageRequestsTypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={action:true,appid:true,appversion:true,clienttime:true,containermodule:true,country:true,entry_point:true,extra_client_data:true,folder_type:true,name:true,surface:true,thread_id:true,thread_key:true,thread_key_list:true,vc:true};f.exports=h}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MessengerTextWithEmoticons.react","MercuryParticipantListRenderer","MercuryParticipants","React","TextWithEmoticons.react"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("React").PropTypes,j=c("React").createClass({displayName:"MercuryThreadTitle",propTypes:{isNewThread:i.bool,thread:i.object.isRequired,viewer:i.string.isRequired,showUnreadCount:i.bool,useShortName:i.bool,useAndSeparator:i.bool},getDefaultProps:function k(){return{isNewThread:false,showUnreadCount:false,useShortName:false,useAndSeparator:false}},getInitialState:function k(){return{participantNames:""}},componentDidMount:function k(){this._renderParticipantsList(this.props)},componentWillReceiveProps:function k(l){this._renderParticipantsList(l)},render:function k(){return c("React").createElement("span",{className:this.props.className},this.props.thread.name?this._renderThreadTitle():this.state.participantNames,this.props.children)},getTitle:function k(){return this.state.participantNames},_renderThreadTitle:function k(){var l=this.props.thread,m=c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:l.name});if(!l.unread_count||!this.props.showUnreadCount)return m;return this._renderTitleWithUnreadCount(m,l.unread_count)},_renderParticipantsList:function k(l){if(l.thread.name)return;this.setState({participantNames:""});var m=c("MercuryIDs").getParticipantIDFromUserID(l.viewer),n=l.thread.participants||[];if(n.length>1)n=n.filter(function(o){return o!=m});c("MercuryParticipants").getMulti(n,function(o){if(!this.isMounted())return;var p=n.map(function(s){return o[s]}),q=l.thread.custom_nickname?{}:null,r=c("MessengerTextWithEmoticons.react");if(q)for(var s in l.thread.custom_nickname)q[s]=c("React").createElement(r,{renderEmoticons:true,renderEmoji:true,text:l.thread.custom_nickname[s]});var t=new(c("MercuryParticipantListRenderer"))().setUseShortName(l.useShortName).setUseAndSeparator(l.useAndSeparator).setIsNewThread(l.isNewThread).setNickname(q).renderParticipantList(p),u=l.showUnreadCount&&l.thread.unread_count?this._renderTitleWithUnreadCount(t,l.thread.unread_count):t;this.setState({participantNames:u})}.bind(this))},_renderTitleWithUnreadCount:function k(l,m){return h._("{conversation-title} ({unread-count})",[h.param("conversation-title",l),h.param("unread-count",m)])}});f.exports=j}),null);
__d("PhotoStoreCore",[],(function a(b,c,d,e,f,g){var h={actions:{UPDATE:"update"},_photoCache:{},_postCreateCallbacks:{},getPhotoCache:function i(j){if(!this._photoCache[j])throw new Error("Photo cache requested for unknown set ID");return this._photoCache[j]},hasBeenCreated:function i(j){return!!this._photoCache[j]},clearSetCache:function i(j){delete this._photoCache[j];delete this._postCreateCallbacks[j]},getByIndex:function i(j,k,l){this.getPhotoCache(j).getItemAtIndex(k,l)},getByIndexImmediate:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getItemAtIndexImmediate(k);return undefined},getItemsInAvailableRange:function i(j){var k=this.getAvailableRange(j),l=[];for(var m=k.offset;m<k.length;m++)l.push(this.getByIndexImmediate(j,m));return l},getItemsAfterIndex:function i(j,k,l,m){var n=this.getCursorByIndexImmediate(j,k);this.fetchForward(j,n,l,m)},getAllByIDImmediate:function i(j){var k=Object.keys(this._photoCache);return k.map(function(l){return this.getByIndexImmediate(l,this.getIndexForID(l,j))}.bind(this)).filter(function(l){return!!l})},getIndexForID:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getIndexForID(k);return undefined},getEndIndex:function i(j){var k=this.getAvailableRange(j);return k.offset+k.length-1},getCursorByIndexImmediate:function i(j,k){var l=this.getByIndexImmediate(j,k);if(l)return this._photoCache[j].getCursorForID(l.id);return undefined},hasNextPage:function i(j){var k=this.getCursorByIndexImmediate(j,this.getEndIndex(j));return this.getPhotoCache(j).hasNextPage(k)},getAvailableRange:function i(j){return this.getPhotoCache(j).getAvailableRange()},hasLooped:function i(j){return this.getPhotoCache(j).hasLooped()},fetchForward:function i(j,k,l,m){this.getPhotoCache(j).getItemsAfterCursor(k,l,m)},fetchBackward:function i(j,k,l,m){this.getPhotoCache(j).getItemsBeforeCursor(k,l,m)},executePostCreate:function i(j,k){if(this._photoCache[j])k&&k();else this._postCreateCallbacks[j]=k},runPostCreateCallback:function i(j){var k=this._postCreateCallbacks[j];if(k){k();delete this._postCreateCallbacks[j]}},setPreFetchCallback:function i(j,k){this.getPhotoCache(j).setPreFetchCallback(k)},updateData:function i(j){var k=j.set_id;if(!this._photoCache[k]){this._photoCache[k]=new j.cache_class(j);this.runPostCreateCallback(k)}else if(j.query_metadata.action==h.actions.UPDATE)this._photoCache[k].updateData(j);else this._photoCache[k].addData(j)},updateFeedbackData:function i(j){var k=Object.keys(j);k.forEach(function(l){return h.getAllByIDImmediate(l).forEach(function(m){m.feedback=j[l].feedback})})},reset:function i(){Object.keys(this._photoCache).forEach(function(j){return this.clearSetCache(j)}.bind(this))}};f.exports=h}),null);
__d("PhotoStore",["Arbiter","PhotoStoreCore"],(function a(b,c,d,e,f,g){c("Arbiter").subscribe("update-photos",function(h,i){c("PhotoStoreCore").updateData(i)});f.exports=c("PhotoStoreCore")}),null);
__d("ContextualLayerHideOnScrollOut",["Event","SubscriptionsHandler"],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$ContextualLayerHideOnScrollOut1=i}h.prototype.enable=function(){"use strict";if(!this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2=new(c("SubscriptionsHandler"))();this.$ContextualLayerHideOnScrollOut2.addSubscriptions(this.$ContextualLayerHideOnScrollOut1.subscribe("contextchange",this.$ContextualLayerHideOnScrollOut3.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe("show",this.$ContextualLayerHideOnScrollOut4.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe("hide",this.$ContextualLayerHideOnScrollOut5.bind(this)))}};h.prototype.disable=function(){"use strict";if(this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2.release();this.$ContextualLayerHideOnScrollOut2=undefined}this.$ContextualLayerHideOnScrollOut5()};h.prototype.$ContextualLayerHideOnScrollOut4=function(){"use strict";if(!this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut7=this.$ContextualLayerHideOnScrollOut1.getContextScrollParent();if(this.$ContextualLayerHideOnScrollOut7===window)return;this.$ContextualLayerHideOnScrollOut6=c("Event").listen(this.$ContextualLayerHideOnScrollOut7,"scroll",this.$ContextualLayerHideOnScrollOut8.bind(this))}};h.prototype.$ContextualLayerHideOnScrollOut5=function(){"use strict";if(this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut6.remove();this.$ContextualLayerHideOnScrollOut6=undefined;this.$ContextualLayerHideOnScrollOut7=undefined}};h.prototype.$ContextualLayerHideOnScrollOut8=function(){"use strict";var i=this.$ContextualLayerHideOnScrollOut1.getContent().getBoundingClientRect(),j=this.$ContextualLayerHideOnScrollOut7.getBoundingClientRect(),k=i.bottom<=j.top||i.top>=j.bottom,l=i.right<=j.left||i.left>=j.right;if(k||l)this.$ContextualLayerHideOnScrollOut1.hide()};h.prototype.$ContextualLayerHideOnScrollOut3=function(){"use strict";this.detach();if(this.$ContextualLayerHideOnScrollOut1.isShown())this.attach()};f.exports=h}),null);
__d("Currency",["CurrencyConfig"],(function a(b,c,d,e,f,g){var h=c("CurrencyConfig").allCurrenciesByCode;function i(n){if(h[n])return h[n].format;return null}function j(n){if(h[n])return h[n].symbol;return null}function k(n){if(h[n])return 1*h[n].offset;return 1}function l(n){if(h[n])return h[n].name;return null}function m(n){if(h[n])return h[n].iso;return null}g.getFormat=i;g.getSymbol=j;g.getOffset=k;g.getName=l;g.getISO=m}),null);
__d("ads-lib-formatters",["fbt","Currency","NumberFormatConfig","intlNumUtils"],(function a(b,c,d,e,f,g,h){var i="USD";function j(G,H,I){G=G||"";I=I||"";H=H||G.length;if(G.length<=H)return G;var J=H-I.length;if(J)if(/[\uD800-\uDFFF]/.test(G[J-1]))J+=1;return G.substr(0,J)+I}function k(G,H){if(H===undefined||H===null)H="";return function(I){return!I?H:j(I,G,"...")}}function l(G,H,I,J,K){if(G==="N/A")return G;if(H===undefined)H=0;return c("intlNumUtils").formatNumberRaw(G||0,H,I,J,K)}function m(G){return function(H){return l(H,G||0,",",".")}}function n(G){return function(H){return l(H,G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function o(G){return function(H){return c("intlNumUtils").formatNumberRaw(H||"0",G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function p(G,H){return function(I){return c("intlNumUtils").formatNumberWithLimitedSigFig(I,G,H)}}function q(G,H){if(H)return n(G);return function(I){return l(I,G||0,"",c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function r(G,H){var I=H===false?1:100;return function(J){return l(J*I,G||0,",",".")+"%"}}function s(G,H){var I=H===false?1:100;return function(J){return l(J*I,G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator)+"%"}}function t(G,H,I,J,K){if(G===undefined)G=2;var L=J(G);if(I===undefined)I=false;H=H||i;var M=H+"-"+G+"-"+I;if(!K[M]){var N=c("Currency").getFormat(H)||c("Currency").getFormat(i),O=c("Currency").getSymbol(H)||c("Currency").getSymbol(i),P=c("Currency").getOffset(H)||c("Currency").getOffset(i);N=N.replace("{symbol}",O);K[M]=function(Q){if(I)Q=Q/P;if(!(Q+"").match(/^\-?[\d\.,]*$/))return"N/A";return N.replace("{amount}",L(Q))}}return K[M]}var u={};function v(G,H,I){return t(G,H,I,m,u)}var w={};function x(G,H,I){return t(G,H,I,n,w)}function y(G,H){if(H)return c("intlNumUtils").parseNumberRaw(G+"",H,c("NumberFormatConfig").numberDelimiter);return c("intlNumUtils").parseNumber(G+"")}function z(){return function(G){return l(G,0,",",".")+"%"}}function A(){return function(G){return l(G,0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator)+"%"}}function B(G){var H=G.currency(),I=G.offset()==100?2:0;return v(I,H)}function C(G,H){var I=G.currency(),J=G.offset()==100?2:0;return x(J,I,H)}function D(G){var H=[];if(G.countries&&G.countries.length)H.push(G.countries);if(G.cities&&G.cities.length)H.push(G.cities.map(function(I){return I.name}));if(G.zips&&G.zips.length)H.push(G.zips.map(function(I){return I.name}));if(G.regions&&G.regions.length)H.push(G.regions.map(function(I){return I.name}));return H.join("; ").replace(/,/g,", ")}function E(G,H){if(G||H){G=G||h._("All");H=H||h._("All");return G+"&ndash;"+H}return"Any"}function F(G){G=G+"";if(G==="0")return h._("All");else if(G==="1")return h._("Men");return h._("Women")}g.geoLocation=D;g.age=E;g.sex=F;g.createTextTruncator=k;g.chopString=j;g.parseNumber=y;g.formatNumber=l;g.createIntlNumberFormatter=n;g.createIntlLongNumberFormatter=o;g.createLimitedSigFigNumberFormatter=p;g.createMaybeDelimitedNumberFormatter=q;g.createIntlPercentFormatter=s;g.createIntlMoneyFormatter=x;g.createIntlMoneyFormatterForAccount=C;g.createIntlInflationFormatter=A;g.createNumberFormatter=m;g.createPercentFormatter=r;g.createMoneyFormatter=v;g.createMoneyFormatterForAccount=B;g.createInflationFormatter=z}),null);
__d("mod",[],(function a(b,c,d,e,f,g){function h(i,j){var k=i%j;if(k*j<0)k+=j;return k}f.exports=h}),null);
__d("nearlyEqualNumbers",[],(function a(b,c,d,e,f,g){function h(i,j){if(i===j)return true;var k=Math.abs(i-j);if(k<Number.EPSILON)return true;var l=Math.abs(i),m=Math.abs(j);return k/(l+m)<Number.EPSILON}f.exports=h}),null);
__d("distinctArray",["Set"],(function a(b,c,d,e,f,g){function h(i){return Array.from(new(c("Set"))(i).values())}f.exports=h}),null);
__d("SlideshowCreationWaterfallEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SLIDESHOW_INTENT:"intent_slideshow",SLIDESHOW_CANCEL:"cancel_slideshow",SLIDESHOW_POST:"post_slideshow",SLIDESHOW_PREVIEW_INTENT:"intent_slideshow_preview",SLIDESHOW_PREVIEW_CANCEL:"cancel_slideshow_preview",SLIDESHOW_IMAGE_UPLOAD_STARTED:"image_upload_started_slideshow",SLIDESHOW_IMAGE_UPLOAD_SUCCESS:"image_upload_success_slideshow",SLIDESHOW_IMAGES_SELECT_CONFIRM:"images_select_confirm_slideshow",SLIDESHOW_IMAGE_REMOVE:"image_remove_slideshow",SLIDESHOW_ADD_VIDEO_CLICK:"add_video_click_slideshow",SLIDESHOW_VIDEO_UPLOAD_START:"video_upload_start_slideshow",SLIDESHOW_VIDEO_UPLOAD_ERROR:"video_upload_error_slideshow",SLIDESHOW_VIDEO_UPLOAD_SUCCESS:"video_upload_success_slideshow",SLIDESHOW_FRAME_IMAGES_START:"frame_images_start_slideshow",SLIDESHOW_FRAME_IMAGES_SUCCESS:"frame_images_success_slideshow",SLIDESHOW_FRAME_IMAGES_ERROR:"frame_images_error_slideshow",SLIDESHOW_STORYLINE_MOOD_SELECT:"storyline_mood_select_slideshow",SLIDESHOW_MUSIC_CATEGORY_SELECT:"music_category_select_slideshow",SLIDESHOW_STORYLINE_MOOD_REMOVE:"storyline_mood_remove_slideshow",SLIDESHOW_STORYLINE_MOOD_DELETE:"storyline_mood_delete_slideshow",SLIDESHOW_AUDIO_UPLOAD_START:"audio_upload_start_slideshow",SLIDESHOW_AUDIO_UPLOAD_ERROR:"audio_upload_error_slideshow",SLIDESHOW_AUDIO_UPLOAD_SUCCESS:"audio_upload_success_slideshow",SLIDESHOW_DURATION_CHANGE:"duration_change_slideshow",SLIDESHOW_TRANSITION_CHANGE:"transition_change_slideshow",SLIDESHOW_FORMAT_CHANGE:"format_change_slideshow",SLIDESHOW_TAB_CHANGE:"tab_change_slideshow"})}),null);
__d("SlideshowEntrypoint",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({COMPOSER_PHOTO_VIDEO_TAB:"composer_photo_video_tab",COMPOSER_CAMERA_ICON:"composer_camera_icon",COMPOSER_URL_PARAMS:"composer_url_params",ADS_CREATE_FLOW:"ads_create_flow",ADS_CREATE_FLOW_PLATFORM:"ads_create_flow_platform",ADS_POWER_EDITOR:"ads_power_editor",ADS_EXTENDED_DELIVERY:"ads_extended_delivery",BOOSTED_COMPONENT:"boosted_component",FB4A_PAGE_COMPOSER:"fb4a_page_composer",PMA_PAGE_COMPOSER:"pma_page_composer",CANVAS:"canvas",UNKNOWN:"unknown"})}),null);
__d("GeoCoordinatesRecord",["immutable"],(function a(b,c,d,e,f,g){"use strict";var h,i,j=c("immutable").Record({latitude:undefined,longitude:undefined});h=babelHelpers.inherits(k,j);i=h&&h.prototype;function k(){h.apply(this,arguments)}f.exports=k}),null);
__d("GeoCoordinates",["GeoCoordinatesRecord","nearlyEqualNumbers"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("GeoCoordinatesRecord"));i=h&&h.prototype;function j(k,l){i.constructor.call(this,{latitude:k,longitude:l})}j.prototype.nearlyEquals=function(k){return c("nearlyEqualNumbers")(this.latitude,k.latitude)&&c("nearlyEqualNumbers")(this.longitude,k.longitude)};f.exports=j}),null);
__d("GeoRectangle",["GeoCoordinates","ImmutableObject"],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c("ImmutableObject"));i=h&&h.prototype;function j(k,l,m,n){"use strict";i.constructor.call(this,{n:k,w:l,s:m,e:n})}j.prototype.containsLat=function(k){"use strict";return k>=this.s&&k<=this.n};j.prototype.getCenter=function(){"use strict";var k=(this.n+this.s)/2,l;l=(this.e+this.w)/2;if(this.w>this.e){l-=180;if(l<-180)l+=360}return{latitude:k,longitude:l}};j.prototype.containsLon=function(k){"use strict";if(this.w>this.e)return k>=this.w||k<=this.e;return k>=this.w&&k<=this.e};j.prototype.getHeight=function(){"use strict";return this.n-this.s};j.prototype.getWidth=function(){"use strict";var k=this.e;if(this.w>this.e)k+=360;return k-this.w};j.prototype.containsPoint=function(k,l){"use strict";return this.containsLat(k)&&this.containsLon(l)};j.prototype.containsGeoRectangle=function(k){"use strict";return this.containsPoint(k.n,k.w)&&this.containsPoint(k.s,k.e)};j.prototype.toArray=function(){"use strict";return{n:this.n,w:this.w,s:this.s,e:this.e}};j.fromPoints=function(k){if(!k||k.length===0)return null;if(k.length===1){var l=k[0];return new j(l.latitude,l.longitude,l.latitude,l.longitude)}var m=k.map(function(l){return l.latitude}),n=k.map(function(l){return l.longitude}).sort(function(t,u){return t-u}),o=360+n[0]-n[n.length-1],p=n.length-1,q=0;for(var r=0;r<n.length-1;r++){var s=n[r+1]-n[r];if(s>o){o=s;p=r;q=r+1}}return new j(Math.max.apply(Math,m),n[q],Math.min.apply(Math,m),n[p])};f.exports=j}),null);
__d("isEventSupported",["fbjs/lib/ExecutionEnvironment"],(function a(b,c,d,e,f,g){"use strict";var h;if(c("fbjs/lib/ExecutionEnvironment").canUseDOM)h=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==true;function i(j,k){if(!c("fbjs/lib/ExecutionEnvironment").canUseDOM||k&&!("addEventListener"in document))return false;var l="on"+j,m=l in document;if(!m){var n=document.createElement("div");n.setAttribute(l,"return;");m=typeof n[l]==="function"}if(!m&&h&&j==="wheel")m=document.implementation.hasFeature("Events.wheel","3.0");return m}f.exports=i}),null);
__d("SlideshowCreationWaterfallLogger",["MarauderLogger"],(function a(b,c,d,e,f,g){var h={logEvent:function i(j,k,f){k=k||{};c("MarauderLogger").log(j,f,k,undefined,undefined,undefined)}};f.exports=h}),null);