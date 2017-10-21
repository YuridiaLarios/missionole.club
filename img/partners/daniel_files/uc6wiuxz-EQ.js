if (self.CavalryLogger) { CavalryLogger.start_js(["9koNb"]); }

__d("PhotoWarningScreenConfig",[],(function a(b,c,d,e,f,g){f.exports={GraphicEvents:{GRAPHIC_PHOTO_SHOWN_NO_WARNING:"GRAPHIC_PHOTO_SHOWN_NO_WARNING",GRAPHIC_PHOTO_SHOWN_WITH_WARNING:"GRAPHIC_PHOTO_SHOWN_WITH_WARNING",GRAPHIC_PHOTO_WARNING_DISMISSED:"GRAPHIC_PHOTO_WARNING_DISMISSED"},ObjectionableEvents:{INVALIDATE_CONTENT:"invalidate_content",SHOW_WARNING_SCREEN:"show_warning_screen",DISABLE_THUMBNAIL:"disable_thumbnail",WARNING_SCREEN_DISMISSED:"warning_screen_dismissed",WARNING_SCREEN_REENABLED:"warning_screen_reenabled",MARK_OBJECTIONABLE:"mark_objectionable",UNDO_MARK_OBJECTIONABLE:"undo_mark_objectionable",WARNING_SCREEN_CONTENT_FILTER_PREFS_TAPPED:"warning_screen_content_filter_prefs_tapped",WARNING_SCREEN_SHOW_PHOTO_TAPPED:"warning_screen_show_photo_tapped",WARNING_SCREEN_COVER_PHOTO_TAPPED:"warning_screen_cover_photo_tapped",WARNING_SCREEN_CHANGE_SETTING_TAPPED:"warning_screen_change_setting_tapped",WARNING_SCREEN_GIVE_FEEDBACK_TAPPED:"warning_screen_give_feedback_tapped",WARNING_SCREEN_FILTER_PHOTO_ALBUM_TAPPED:"warning_screen_filter_photo_album_tapped",WARNING_SCREEN_FILTER_STORY_ERRONEOUSLY_TAPPED:"warning_screen_filter_story_tapped",WARNING_SCREEN_DISPLAY_PHOTO_ALBUM_TAPPED:"warning_screen_filter_photo_album_displayed",WARNING_SCREEN_LIVE_VIDEO_FULL_SCREEN_EXIT:"warning_screen_live_video_full_screen_exit_tapped",WARNING_SCREEN_LIVE_VIDEO_FULL_SCREEN_SHOW:"warning_screen_live_video_full_screen_show_tapped",WARNING_SCREEN_FALSE_POSITIVE_SUBMITTED:"warning_screen_false_positive_submitted",EXPOSURE_TEST:"exposure_test"},Types:{GRAPHIC:"Violence and Gore",OBJECTIONABLE:"Sexual",HATE:"Hate",PROFANY:"Profanity",POLITICAL:"Politically Charged"},TargetTypes:{PHOTO:"photo",VIDEO:"video"}}}),null);
__d("ObjectionableContentFilterV2TypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:ObjectionableContentFilterV2LoggerConfig",this.$ObjectionableContentFilterV2TypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:ObjectionableContentFilterV2LoggerConfig",this.$ObjectionableContentFilterV2TypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$ObjectionableContentFilterV2TypedLogger1={};return this};h.prototype.updateData=function(j){this.$ObjectionableContentFilterV2TypedLogger1=babelHelpers["extends"]({},this.$ObjectionableContentFilterV2TypedLogger1,j);return this};h.prototype.setAppID=function(j){this.$ObjectionableContentFilterV2TypedLogger1.appid=j;return this};h.prototype.setAppversion=function(j){this.$ObjectionableContentFilterV2TypedLogger1.appversion=j;return this};h.prototype.setContentID=function(j){this.$ObjectionableContentFilterV2TypedLogger1.content_id=j;return this};h.prototype.setContentLocation=function(j){this.$ObjectionableContentFilterV2TypedLogger1.content_location=j;return this};h.prototype.setEvent=function(j){this.$ObjectionableContentFilterV2TypedLogger1.event=j;return this};h.prototype.setEventname=function(j){this.$ObjectionableContentFilterV2TypedLogger1.eventname=j;return this};h.prototype.setIsCovered=function(j){this.$ObjectionableContentFilterV2TypedLogger1.is_covered=j;return this};h.prototype.setName=function(j){this.$ObjectionableContentFilterV2TypedLogger1.name=j;return this};h.prototype.setStoryID=function(j){this.$ObjectionableContentFilterV2TypedLogger1.story_id=j;return this};h.prototype.setVC=function(j){this.$ObjectionableContentFilterV2TypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$ObjectionableContentFilterV2TypedLogger1=babelHelpers["extends"]({},this.$ObjectionableContentFilterV2TypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={appid:true,appversion:true,content_id:true,content_location:true,event:true,eventname:true,is_covered:true,name:true,story_id:true,vc:true};f.exports=h}),null);
__d("ObjectionableContentLoggerHelper",["Event","ObjectionableContentFilterV2TypedLogger"],(function a(b,c,d,e,f,g){"use strict";function h(i){if(i.target)c("Event").listen(i.target,"click",function(){new(c("ObjectionableContentFilterV2TypedLogger"))().setEvent(i.event).setContentID(i.contentID).setStoryID(i.storyID).setContentLocation(i.location).setIsCovered(i.isCovered).log()})}f.exports=h}),null);
__d("ObjectionableContentStrings",["fbt"],(function a(b,c,d,e,f,g,h){"use strict";var i={getFalsePositiveTitle:function j(){return h._("Mark as Mistake")},getFalsePositiveConfirm:function j(){return h._("This post isn't sexually suggestive or showing partial nudity")},getFalsePositiveAllow:function j(){return h._("It may be suggestive or show partial nudity, but I don't mind seeing it")},getOptionalPlaceholder:function j(){return h._("(Optional) Tell Us More")},getReportLinkText:function j(){return h._("report it")},getReportPost:function j(k){return h._("If you think this post shouldn't be on Facebook, you can {report link}",[h.param("report link",k)])},getFalsePositiveConfirmation:function j(k){switch(k.toLowerCase()){case"video":return i._getFalsePositiveVideoConfirmation();case"photo":default:return i._getFalsePositivePhotoConfirmation()}},getReviewSettings:function j(){return h._("You can also review your settings for viewing sensitive content any time.")},_getFalsePositivePhotoConfirmation:function j(){return h._("This photo won't be covered for you anymore. Letting us know about possible mistakes helps us improve our warning system.")},_getFalsePositiveVideoConfirmation:function j(){return h._("This video won't be covered for you anymore. Letting us know about possible mistakes helps us improve our warning system.")},getThanksTitle:function j(){return h._("Thanks for Letting Us Know")},getEditSensitiveContentSettings:function j(){return h._("Edit Sensitive Content Settings")},getCoverContent:function j(k){switch(k.toLowerCase()){case"video":return i._getCoverVideo();case"photo":default:return i._getCoverPhoto()}},getUncoverContent:function j(k){return h._("Uncover {content type}",[h.param("content type",k)])},_getCoverVideo:function j(){return h._("Cover This Video")},_getCoverPhoto:function j(){return h._("Cover This Photo")}};f.exports=i}),null);
__d("ObjectionableContentToggleButton.react",["ix","cx","Button.react","CSS","Image.react","ObjectionableContentFilterV2TypedLogger","ObjectionableContentStrings","PhotoWarningScreenConfig","React","VideoPlayerReason","fbglyph"],(function a(b,c,d,e,f,g,h,i){"use strict";var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;function l(m){k.constructor.call(this,m);this.$ObjectionableContentToggleButton3=function(n){n.stopPropagation();n.preventDefault();c("CSS").conditionClass(this.props.filter,"_cgv",!this.state.isFiltered);if(this.state.isFiltered)new(c("ObjectionableContentFilterV2TypedLogger"))().setEvent(c("PhotoWarningScreenConfig").ObjectionableEvents.WARNING_SCREEN_SHOW_PHOTO_TAPPED).setContentID(this.props.contentID).setStoryID(this.props.storyID).setContentLocation(this.props.location).setIsCovered(true).log();else new(c("ObjectionableContentFilterV2TypedLogger"))().setEvent(c("PhotoWarningScreenConfig").ObjectionableEvents.WARNING_SCREEN_COVER_PHOTO_TAPPED).setContentID(this.props.contentID).setStoryID(this.props.storyID).setContentLocation(this.props.location).setIsCovered(false).log();if(this.props.video)if(!this.state.isFiltered)this.$ObjectionableContentToggleButton4();else this.$ObjectionableContentToggleButton5();this.setState({isFiltered:!this.state.isFiltered})}.bind(this);this.state={isFiltered:true}}l.prototype.$ObjectionableContentToggleButton1=function(){var m=this.state.isFiltered?h("114859"):h("300719");return c("React").createElement(c("Image.react"),{src:m})};l.prototype.$ObjectionableContentToggleButton2=function(){return this.state.isFiltered?c("ObjectionableContentStrings").getUncoverContent(this.props.contentType):c("ObjectionableContentStrings").getCoverContent(this.props.contentType)};l.prototype.$ObjectionableContentToggleButton6=function(){return this.props.contentType.toLowerCase()===c("PhotoWarningScreenConfig").TargetTypes.VIDEO&&!this.state.isFiltered};l.prototype.$ObjectionableContentToggleButton4=function(){if(this.props.islive)this.props.video.mute();else this.props.video.pause(c("VideoPlayerReason").WARNING_SCREEN_COVER)};l.prototype.$ObjectionableContentToggleButton5=function(){if(this.props.islive)this.props.video.unmute();else this.props.video.play()};l.prototype.componentDidMount=function(){if(this.props.video)this.$ObjectionableContentToggleButton4()};l.prototype.render=function(){return c("React").createElement(c("Button.react"),{className:"_5_hk"+(this.$ObjectionableContentToggleButton6()&&!this.props.isSnowlift?" _299g":"")+(this.$ObjectionableContentToggleButton6()&&this.props.isSnowlift?" _47hz":"")+(!this.$ObjectionableContentToggleButton6()&&!this.props.isSnowlift?" _299h":"")+(!this.$ObjectionableContentToggleButton6()&&this.props.isSnowlift?" _2h8w":""),image:this.$ObjectionableContentToggleButton1(),label:this.$ObjectionableContentToggleButton2(),onClick:this.$ObjectionableContentToggleButton3})};f.exports=l}),null);