if (self.CavalryLogger) { CavalryLogger.start_js(["nNigw"]); }

__d("messengerGroupCreateDialogReact",["bs_js_boolean","ReasonReact","MessengerGroupCreateDialog.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l){return c("ReasonReact").wrapJsForReason(c("MessengerGroupCreateDialog.react"),{entryPoint:i,isShown:c("bs_js_boolean").to_js_boolean(j),onClose:k},l)}g.make=h}),null);
__d("chatSidebarGroupCreateButtonReact",["cx","fbt","bs_block","bs_curry","React","linkReact","ReasonReact","joinClasses","bs_js_primitive","messengerGroupCreateDialogReact","MessengerGroupCreationEntryPoint"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("ReasonReact").reducerComponent("ChatSidebarGroupCreateButtonReact"),k=c("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function l(o){var p=o[4];if(p!==0)return c("ReasonReact").element(0,0,c("messengerGroupCreateDialogReact").make(k,1,c("bs_curry")._1(o[3],function(){return 1}),[]));else return null}function m(o,p){var q=j.slice();q[9]=function(r){var s=i._("Create New Group"),t="_1-4-",u=o?c("joinClasses")(t,o[0]):t;return c("React").createElement("div",{className:"_46fv"},l(r),c("ReasonReact").element(0,0,c("linkReact").make([s],[u],["tooltip"],[s],["below"],0,[c("bs_curry")._1(r[3],function(){return 0})],0,0,0,0,0,0,0,[])))};q[10]=function(){return 0};q[12]=function(r,p){if(r!==0)return c("bs_block").__(0,[0]);else return c("bs_block").__(0,[1])};return q}var n=c("ReasonReact").wrapReasonForJs(j,function(o){return m(c("bs_js_primitive").null_undefined_to_opt(o.className),[])});g.component=j;g.entryPoint=k;g.renderDialog=l;g.make=m;g.jsComponent=n}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["chatSidebarGroupCreateButtonReact"],(function a(b,c,d,e,f,g){"use strict";var h=c("chatSidebarGroupCreateButtonReact").jsComponent;f.exports=h}),null);