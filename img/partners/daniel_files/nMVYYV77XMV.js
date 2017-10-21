if (self.CavalryLogger) { CavalryLogger.start_js(["jzmT8"]); }

__d("CovercardArrow",["csx","cx","ContextualDialogArrow","CSS","DOMQuery","Locale","Style"],(function a(b,c,d,e,f,g,h,i){var j=-45,k=45,l=9;if(c("Locale").isRTL()){j=-j;k=-k}function m(o){"use strict";this._layer=o}m.prototype.enable=function(){"use strict";this._layer.enableBehavior(c("ContextualDialogArrow"));var o=this._layer.getContentRoot();this._arrowWrapper=c("DOMQuery").scry(o,"._ttk")[0];if(!this._arrowWrapper)return;this._arrowShadow=c("DOMQuery").scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var p=null;if(n(this._arrowWrapper))p=this._renderArrowWithRotate.bind(this);if(!p)return;if(c("Locale").isRTL())c("CSS").addClass(o,"_7lf");this._subscription=this._layer.subscribe("reposition",function(q,r){var s=r.getPosition()=="below";c("CSS").conditionClass(o,"_53ih",s);s&&p(r)})};m.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null};m.prototype._calculateArrowOffset=function(o){"use strict";var p=c("ContextualDialogArrow").getOffsetPercent(o),q=c("ContextualDialogArrow").getOffset(o,p,this._layer),r=c("Style").get(this._layer.getContentRoot(),"width");return parseInt(r,10)*(p/100)+q};m.prototype._renderArrowWithRotate=function(o){"use strict";var p=c("DOMQuery").scry(this._arrowWrapper,"._7lj")[0];if(!p){var q=this._layer.getContentRoot();c("CSS").addClass(q,"_2uy0")}var r=c("DOMQuery").scry(this._arrowWrapper,"._1ubp")[0];if(!r)return;var s=n(this._arrowWrapper);if(!s)return;var t=this._calculateArrowOffset(o),u=l+t,v=-l;if(c("Locale").isRTL()){u=-u;v=-v}this._arrowWrapper.style[s]="translate("+u+"px, -"+l+"px) rotate("+k+"deg)";if(p)p.style[s]="rotate("+j+"deg) translate("+-u+"px, "+(l-12)+"px)";r.style[s]="rotate("+j+"deg) translate("+v+"px, 0)"};function n(o){if(!o)o=document.body;var p=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],q;while(q=p.shift())if(o.style[q]!==undefined)return q;return null}f.exports=m}),null);
__d("GroupsIntentHovercardLogger",["Arbiter","Hovercard","GroupsMemberConnectionsLogger","URI","UserHovercardLocation"],(function a(b,c,d,e,f,g){"use strict";var h={_currentHovercard:null,register:function i(){c("Arbiter").subscribe("Hovercard/show",h._onHovercardShow,c("Arbiter").SUBSCRIBE_NEW);c("Arbiter").subscribe("Hovercard/hide",h._onHovercardHide,c("Arbiter").SUBSCRIBE_NEW)},_onHovercardShow:function i(){var j=c("Hovercard").getActiveHovercard();if(j===null||j.getEndpoint()===null)return;if(j===h._currentHovercard)return;var k=new(c("URI"))(j.getEndpoint()),l=k.getQueryData();if(!l.extragetparams)return;var m=JSON.parse(l.extragetparams),n=m.directed_target_id||m.group_id,o=m.hc_location;if(l.id&&n&&o&&h._getIsGroupsLocation(o)){h._currentHovercard=j;c("GroupsMemberConnectionsLogger").logIntent(n,l.id,"HOVERCARD_VIEW")}},_onHovercardHide:function i(){h._currentHovercard=null},_getIsGroupsLocation:function i(j){return j===c("UserHovercardLocation").GROUP||j===c("UserHovercardLocation").GROUP_DIALOG}};f.exports=h}),null);
__d("HovercardLogger",["Banzai"],(function a(b,c,d,e,f,g){"use strict";var h="hovercard_logger",i={logTimespent:function j(k,l,m){var n={id:k,time_spent:l,extra_get_params:m};c("Banzai").post(h,n)}};f.exports=i}),null);
__d("Hovercard",["csx","cx","fbt","AccessibleLayer","Arbiter","AsyncRequest","Banzai","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","GroupsIntentHovercardLogger","HovercardLogger","JSXDOM","LayerAutoFocus","LayerRefocusOnHide","Parent","Style","URI","Vector","clickRefAction","getInlineBoundingRect"],(function a(b,c,d,e,f,g,h,i,j){"use strict";var k={};function l(m,n){this.$Hovercard1=m;this.$Hovercard2=l.$Hovercard17();this.$Hovercard3=n;this.$Hovercard4=null;this.$Hovercard5=null;this.$Hovercard6=null;this.$Hovercard7=null;this.$Hovercard8=[];this.$Hovercard9=false;this.$Hovercard10=null;this.$Hovercard12=false;this.$Hovercard13=false;this.$Hovercard14=null;this.$Hovercard15=false;this.$Hovercard18=null}l.getActiveHovercard=function(){var m=l.$Hovercard19.length;if(m)return l.$Hovercard19[m-1];return null};l.hide=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0],n=l.getActiveHovercard();if(!n)return;l.$Hovercard19.pop().$Hovercard20(m)};l.setDialog=function(m,n){var o=l.$Hovercard21[m];if(!o){o=new l(null,m);l.$Hovercard21[m]=o}n.disableBehavior(c("AccessibleLayer")).disableBehavior(c("LayerAutoFocus")).disableBehavior(c("LayerRefocusOnHide"));o.$Hovercard22(n)};l.getDialog=function(m){var n=l.$Hovercard21[m];if(n&&n.$Hovercard12)return n.$Hovercard2;return null};l.$Hovercard23=function(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1],o=l.$Hovercard19.length;while(o&&l.$Hovercard19[o-1].$Hovercard3!=m){l.$Hovercard19.pop().$Hovercard20(n);o=l.$Hovercard19.length}};l.$Hovercard24=function(m){var n=l.getActiveHovercard();return n?n.$Hovercard1===m:false};l.$Hovercard25=function(m){return m.getAttribute("data-hovercard")};l.$Hovercard26=function(m){return c("DOM").scry(m,"^._5jmm ._2orz").length>0};l.$Hovercard17=function(){if(!l.$Hovercard27){l.$Hovercard27=new(c("ContextualDialog"))({width:275,theme:c("ContextualDialogXUITheme")},c("JSXDOM").div({className:"_7lk"},j._("Loading...")));l.$Hovercard27.disableBehavior(c("AccessibleLayer")).disableBehavior(c("LayerAutoFocus")).disableBehavior(c("LayerRefocusOnHide"))}return l.$Hovercard27};l.dirty=function(m){var n=l.$Hovercard21[m];if(n){n.$Hovercard20(true);delete l.$Hovercard21[m]}};l.dirtyAll=function(){for(var m in l.$Hovercard21)l.dirty(m);c("Arbiter").inform("Hovercard/dirty")};l.contains=function(m){var n=l.getActiveHovercard();if(n)return n.$Hovercard28(m);return false};l.processNode=function(m){if(!m)return false;var n=l.$Hovercard25(m);if(!n)return false;if(l.$Hovercard26(m)||l.$Hovercard29(m))return false;var o=l.$Hovercard21[n];if(!o)o=l.$Hovercard21[n]=new l(m,n);if(o.$Hovercard9)return false;var p=l.getActiveHovercard(),q=false;while(p&&!l.contains(m)){l.$Hovercard19.pop().$Hovercard20();q=true;p=l.getActiveHovercard()}var r=null;if(p)r=p.$Hovercard3;if(o.$Hovercard13&&o.$Hovercard1!=m)o.$Hovercard30(m);o.$Hovercard31(m,q);o.$Hovercard4=r;l.$Hovercard19.push(o);return true};l.setDirtyAllOnPageTransition=function(m){l.dirtyAllOnPageTransition=m};l.getLoadingDelay=function(){return l.$Hovercard32};l.getHideDelay=function(){return l.$Hovercard33};l.scroll=function(){var m=null;for(var n=l.$Hovercard19,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q;if(r.$Hovercard34()){m=r;break}}if(!m)return;l.$Hovercard23(m.$Hovercard3,true);l.$Hovercard19.pop().$Hovercard20(true)};l.abort=function(){l.hide(true)};l.$Hovercard29=function(m){return c("Parent").bySelector(m,"._7lu")!==null};l.prototype.getEndpoint=function(){return this.$Hovercard3};l.prototype.$Hovercard39=function(){clearTimeout(this.$Hovercard7);this.$Hovercard7=null};l.prototype.$Hovercard40=function(){var m=this,n=this.$Hovercard1;m.$Hovercard11=c("Event").listen(n,"mouseleave",function(){if(!m.$Hovercard9)return;l.$Hovercard23(m.$Hovercard3);if(l.$Hovercard19.length)l.$Hovercard19.pop().$Hovercard20()})};l.prototype.$Hovercard41=function(){var m=this,n=this.$Hovercard1;this.$Hovercard10=c("Event").listen(n,"mousemove",function(event){if(m.$Hovercard13)return;m.$Hovercard14=c("Vector").getEventPosition(event)})};l.prototype.$Hovercard42=function(){clearTimeout(this.$Hovercard5);clearTimeout(this.$Hovercard6);this.$Hovercard5=null;this.$Hovercard6=null};l.prototype.$Hovercard31=function(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1];if(this.$Hovercard9)return;this.$Hovercard1=m;this.$Hovercard9=true;this.$Hovercard39();this.$Hovercard40();if(this.$Hovercard13)return;this.$Hovercard41();var o=l.$Hovercard35,p=n?l.$Hovercard33:l.$Hovercard36;if(m.getAttribute("data-hovercard-instant"))o=p=l.$Hovercard37;var q=function q(){this.$Hovercard43()},r=function r(s){this.$Hovercard44(s)};if(!this.$Hovercard15)this.$Hovercard5=setTimeout(q.bind(this),o);this.$Hovercard6=setTimeout(r.bind(this,p),p)};l.prototype.$Hovercard45=function(){if(this.$Hovercard10){this.$Hovercard10.remove();this.$Hovercard10=null}if(this.$Hovercard11){this.$Hovercard11.remove();this.$Hovercard11=null}};l.prototype.$Hovercard20=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];if(!this.$Hovercard9)return;this.$Hovercard9=false;this.$Hovercard42();this.$Hovercard45();if(!this.$Hovercard13)return;if(m){this.$Hovercard46(true);return}var n=this.$Hovercard1.getAttribute("data-hovercard-instant")?l.$Hovercard37:l.$Hovercard33,o=function o(){this.$Hovercard46()};this.$Hovercard7=setTimeout(o.bind(this),n)};l.prototype.$Hovercard46=function(){var m=arguments.length<=0||arguments[0]===undefined?false:arguments[0];if(!this.$Hovercard13||this.$Hovercard7==null&&!m)return;var n=new(c("URI"))(this.$Hovercard3),o=n.getQueryData();if(this.$Hovercard16!==null&&o.id!==null){var p={};if(this.$Hovercard1.getAttribute("data-hovercard-referer")!==null)p.preview_referer=this.$Hovercard1.getAttribute("data-hovercard-referer");c("HovercardLogger").logTimespent(Number(o.id),String(Date.now()-this.$Hovercard16),p)}this.$Hovercard16=null;this.$Hovercard7=null;this.$Hovercard47();this.$Hovercard2.hide();this.$Hovercard13=false;c("Arbiter").inform("Hovercard/hide");this.$Hovercard4=null};l.prototype.$Hovercard44=function(m,n){if(!this.$Hovercard9||this.$Hovercard13)return;if(n!==true){var o=new(c("URI"))(this.$Hovercard3),p=o.getQueryData();if(p.id!==null){var q="pages_growth_general_analytical_logger",r={id:Number(p.id),event:"HOVERCARD_IMPRESSION",event_target:"Hovercard",feature_name:"Preview_Insights"};c("Banzai").post(q,r)}}if(this.$Hovercard12||n){this.$Hovercard48();this.$Hovercard49();this.$Hovercard13=true}else{m=l.$Hovercard32-l.$Hovercard36;var s=function s(t,u){this.$Hovercard44(t,u)};this.$Hovercard6=setTimeout(s.bind(this,m,true),m)}};l.prototype.$Hovercard49=function(){var m=this.$Hovercard1,n=this.$Hovercard2,o=m.getAttribute("data-hovercard-position");o&&n.setPosition(o);this.$Hovercard50();this.$Hovercard16=Date.now();var p=m.getAttribute("data-hovercard-prefer-more-content-show");p&&n.getOrientation().setPreferMoreContentShownRect(true);if(!c("DOM").contains(document.body,m)){if(this.$Hovercard9){l.$Hovercard23(this.$Hovercard3,true);l.$Hovercard19.pop().$Hovercard20(true)}else this.$Hovercard46();return}n.setContextWithBounds(m,c("getInlineBoundingRect")(m,this.$Hovercard14)).show();c("Arbiter").inform("Hovercard/show");if(this.$Hovercard12&&m!=l.$Hovercard38){l.$Hovercard38=m;setTimeout(function(){c("clickRefAction")("himp",m,null,"FORCE",{ft:{evt:39}})},0)}};l.prototype.$Hovercard43=function(){if(this.$Hovercard12||this.$Hovercard15)return;this.$Hovercard15=true;if(this.$Hovercard1.id&&k[this.$Hovercard1.id]){l.setDialog(this.$Hovercard3,k[this.$Hovercard1.id]);return}var m=this,n=function n(){l.dirty(m.$Hovercard3);l.hide(true)};new(c("AsyncRequest"))(this.$Hovercard3).setData({endpoint:this.$Hovercard3}).setMethod("GET").setReadOnly(true).setErrorHandler(n).setTransportErrorHandler(n).send()};l.prototype.$Hovercard50=function(){var m=this.$Hovercard1.getAttribute("data-hovercard-offset-x")||0;this.$Hovercard2.setOffsetX(parseInt(m,10));var n=this.$Hovercard1.getAttribute("data-hovercard-offset-y")||0;this.$Hovercard2.setOffsetY(parseInt(n,10))};l.prototype.$Hovercard48=function(){var m=this;m.$Hovercard2.mouseTest=false;m.$Hovercard8=[m.$Hovercard2.subscribe("mouseenter",function(){if(m.$Hovercard9)return;var n=m,o=null,p=[];while(!n.$Hovercard9){if(!n.$Hovercard13)return;p.push(n);o=n.$Hovercard4;if(!o)break;n=l.$Hovercard21[o]}l.$Hovercard23(o);while(p.length){n=p.pop();n.$Hovercard31(n.$Hovercard1,false);l.$Hovercard19.push(n)}}),m.$Hovercard2.subscribe("mouseleave",function(n,o){if(!m.$Hovercard9)return;l.$Hovercard23(m.$Hovercard3);l.$Hovercard19.pop().$Hovercard20();var p=l.getActiveHovercard();while(p&&!l.contains(o)){l.$Hovercard19.pop().$Hovercard20();p=l.getActiveHovercard()}}),m.$Hovercard2.subscribe("destroy",function(){if(m.$Hovercard12){m.$Hovercard47();m.$Hovercard2=l.$Hovercard17();m.$Hovercard12=false}if(!m.$Hovercard9)return;l.$Hovercard23(m.$Hovercard3,true);l.$Hovercard19.pop().$Hovercard20(true)})]};l.prototype.$Hovercard47=function(){while(this.$Hovercard8.length)this.$Hovercard8.pop().unsubscribe()};l.prototype.$Hovercard28=function(m){return c("ContextualThing").containsIncludingLayers(this.$Hovercard2.getContentRoot(),m)};l.prototype.$Hovercard30=function(){this.$Hovercard46(true);var m=[this];while(m.length){var n=m.pop();for(var o in l.$Hovercard21){if(!Object.prototype.hasOwnProperty.call(l.$Hovercard21,o))continue;var p=l.$Hovercard21[o];if(p.$Hovercard4==n.$Hovercard3){p.$Hovercard46(true);m.push(p)}}}};l.prototype.$Hovercard34=function(){return c("Style").isFixed(this.$Hovercard1)};l.prototype.$Hovercard22=function(m){this.$Hovercard47();if(this.$Hovercard13)this.$Hovercard2.hide();this.$Hovercard12=true;this.$Hovercard2=m;if(this.$Hovercard13){this.$Hovercard48();this.$Hovercard49()}};l.$Hovercard35=150;l.$Hovercard36=700;l.$Hovercard32=1e3;l.$Hovercard33=250;l.$Hovercard37=50;l.$Hovercard21={};l.$Hovercard27=null;l.$Hovercard19=[];l.$Hovercard38=null;l.dirtyAllOnPageTransition=true;(function(){c("Event").listen(window,"scroll",l.scroll);c("Arbiter").subscribe("page_transition",function(){l.hide(true);l.dirtyAllOnPageTransition&&l.dirtyAll()},c("Arbiter").SUBSCRIBE_NEW);c("GroupsIntentHovercardLogger").register()})();f.exports=l}),null);