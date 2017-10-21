if (self.CavalryLogger) { CavalryLogger.start_js(["9zEfH"]); }

__d("TimelinePhotosPageletScroller",["DOM","$"],(function a(b,c,d,e,f,g){var h="fbTimelinePhotosScroller",i={addScroller:function j(k){c("DOM").setContent(c("$")(h),k)},removeScroller:function j(){c("DOM").remove(c("$")(h))}};f.exports=i}),null);
__d("UntagLink",["Event","StarGrid","PhotoTagger"],(function a(b,c,d,e,f,g){function h(i,j,k,l){"use strict";c("Event").listen(i,"click",function(m){c("PhotoTagger").getInstance(j).removeTagByIDFromHovercardLink(k,l,i);c("StarGrid").removeUntaggedPhoto(k)})}f.exports=h}),null);