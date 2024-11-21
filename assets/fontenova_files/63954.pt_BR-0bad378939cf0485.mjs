"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[63954,14305],{805765:(e,a,l)=>{var n,t,i;l.r(a),l.d(a,{default:()=>s});let r=(n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],i=[t={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupLink_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"advertiserId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"attributionSourceId",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:n,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"campaignId",storageKey:null},{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"videos",plural:!1,selections:i,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinPromotionId",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:i,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"PromotedLeadForm",kind:"LinkedField",name:"promotedLeadForm",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"leadFormId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null});r.hash="5186d62da994a6e2ad78ea5d7022cc61";let s=r},379748:(e,a,l)=>{var n,t,i,r,s,o,u;l.r(a),l.d(a,{default:()=>c});let d={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"pinId"}],kind:"Fragment",metadata:null,name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t=[{kind:"Variable",name:"pin",variableName:"pinId"}],concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r={alias:null,args:null,concreteType:"AggregateRatingMetadata",kind:"LinkedField",name:"aggregateRating",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ratingValue",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupPageDesktop_pin"}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"CloseupPageDesktopQuery",selections:[{alias:null,args:t,concreteType:null,kind:"LinkedField",name:"v3GetPinQuery",plural:!1,selections:[s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"data",plural:!1,selections:[i,{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[r,{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:[s],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[o],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[s,u],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},u],storageKey:null}],type:"V3GetPin",abstractKey:null}],storageKey:null}]},params:{id:"a63ca367dda24dea17d6b9f2cf759bdd0fa3ff2f36bd8fc6c3650013c979c099",metadata:{},name:"CloseupPageDesktopQuery",operationKind:"query",text:null}};d.hash="e7468ff73e618822b529aa9bcbecc941";let c=d;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let a=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[a]=e}}}(d.default||d)},229114:(e,a,l)=>{l.r(a),l.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupPageDesktop_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isGoLinkless",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"ArticleMetadata",kind:"LinkedField",name:"article",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="d71620869b6e7be6f13389f82ed52e1b";let t=n},982553:(e,a,l)=>{l.d(a,{JZ:()=>g,Qs:()=>c,jr:()=>m});var n=l(609326),t=l(118755),i=l(297728),r=l(730212),s=l(864723),o=l(410150);let u={auth_dweb_google_fedcm_onetap_modal:122,auth_mweb_google_fedcm_onetap_modal:122,dweb_unauth_google_fedcm_button_flow_eap:130,mweb_unauth_google_fedcm_button_flow_eap:130},d=(e,a,l,n)=>e?l>=(n?u.auth_dweb_google_fedcm_onetap_modal:u.dweb_unauth_google_fedcm_button_flow_eap)&&(n?a("auth_dweb_google_fedcm_onetap_modal").anyEnabled:a("dweb_unauth_google_fedcm_button_flow_eap").anyEnabled):l>=(n?u.auth_mweb_google_fedcm_onetap_modal:u.mweb_unauth_google_fedcm_button_flow_eap)&&(n?a("auth_mweb_google_fedcm_onetap_modal").anyEnabled:a("mweb_unauth_google_fedcm_button_flow_eap").anyEnabled),c=e=>e.isAuth&&e.socialNetwork&&e.socialNetwork.gplus&&e.socialNetwork.gplus.connected&&!s.ZP.getItem(n.tr),g=(e,a,l,n)=>{let i=l.browserVersion?parseInt(l.browserVersion.split(".")[0],10):0;return(0,t.i7)(l.browserName??"")&&(e&&d(e,a,i,n)||!e&&"android"===l.platform&&d(e,a,i,n))},m=e=>{let a=(0,o.HG)(),{checkExperiment:l}=(0,i.F)(),{userAgent:n}=(0,r.B)();return c(e)&&g(a,l,n,e.isAuth)}},363954:(e,a,l)=>{l.d(a,{Z:()=>F});var n,t=l(667294);l(167912);var i=l(883119),r=l(809394),s=l(297728),o=l(410150);let u={employees:100,enabled_100:100,enabled_200:200,enabled_300:300,enabled_500:500};var d=l(860575),c=l(573706),g=l(47848),m=l(144326),p=l(343583),_=l(207630),y=l(151958),k=l(383399),f=l(821892),h=l(243583),P=l(714305),w=l(724533),v=l(415787),b=l(785893);let S=void 0!==n?n:n=l(805765);function F({sizing:e="default",children:a,collageChipId:l,componentType:n,contextLogData:F,elementType:K,disableA11yLabel:L,isEggsUi:T,pinKey:I,derivedSaveButtonOptionsSavedInfo:E,productTagParentPinId:x,viewParameter:R,viewType:C}){let A=(0,m.ZP)(),D=(0,g.Z)(S,I),{logContextEvent:j}=(0,c.v)(),Z=(0,f.E)(),{checkExperiment:q}=(0,s.F)(),{isAuth:Q}=(0,k.Z)(),N=(0,t.useRef)(null),{preloadQuery:G}=(0,w.Us)(),V=q("web_easy_gift_guide_saving",{dangerouslySkipActivation:!0}).anyEnabled,{isGraphQLEnabledInGeneral:H}=(0,h.nF)(),M=q("closeup_dweb_preload_closeup_query_before_navigation").anyEnabled,O=Z.contextLogData?.story_type==="product_tagged_shopping_module_upsell",{isCloseupRelatedPinsAboveTheFoldEnabled:U}=(0,r.Z)(Q),z=Q&&q("closeup_dweb_remove_magnifying_glass").anyEnabled,{isPrefetchImageOnHoverEnabled:X,prefetchAfterMs:B,prefetchOnMouseDown:W}=function(){let e=(0,o.HG)(),{checkExperiment:a}=(0,s.F)(),l=a("closeup_dweb_prefetch_image_on_hover");return{isPrefetchImageOnHoverEnabled:e&&l.anyEnabled,prefetchAfterMs:u[l.group]||null,prefetchOnMouseDown:"enabled_mouse_down"===l.group}}(),{carouselData:$,entityId:Y}=D,J=!!D.promotedIsLeadAd,ee=(0,t.useMemo)(()=>D?.imageSpec_736x?.url||D?.imageSpec_564x?.url||D?.imageSpec_orig?.url||D?.imageSpec_474x?.url||D?.imageSpec_236x?.url,[D]),ea={},el=`/pin/${l||Y}/`,en=(0,d.Xx)();if(en?.variantUrl&&(el=`/pin/${en.variantUrl}/`),$){let{carouselSlots:e,entityId:a}=$,l=$.index??0;el=`/pin/${Y}/`,ea={carousel_slot_id:e?.[l]&&e[l].entityId,carousel_data_id:a,carousel_slot_index:l}}let et=(0,y.Z)(D);ea={...ea,...et({default:F?.commerce_data})};let ei=()=>{let e={};if(J)j({event_type:8948,view_type:C||Z.viewType,view_parameter:R||Z.viewParameter,component:null,object_id_str:D.entityId,clientTrackingParams:D?.trackingParams,aux_data:{closeup_navigation_type:"click",lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1}}),j({event_type:12,view_type:C||Z.viewType,view_parameter:R||Z.viewParameter,component:null,object_id_str:D.entityId,clientTrackingParams:D?.trackingParams,aux_data:{lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1,...et()}});else{let a={...F,...et({default:F?.commerce_data})};j({event_type:101,component:n||Z.componentType,element:K,object_id_str:Y,clientTrackingParams:D?.trackingParams,view_type:C||Z.viewType,view_parameter:R||Z.viewParameter,aux_data:a}),O&&(e={storyPinProductEventData:{productPinIdStr:Y,pinIdStr:x}}),j({aux_data:{closeup_navigation_type:"click",...a},component:n||Z.componentType,element:K,event_data:e,event_type:8948,clientTrackingParams:D?.trackingParams,object_id_str:Y,view_type:C||Z.viewType,view_parameter:R||Z.viewParameter})}X&&(W?(0,v.nP)("web.closeup.prefetched_image_on_hover.on_mouse_down.clicked"):(0,v.nP)(`web.closeup.prefetched_image_on_hover.${B}_ms.clicked`))},er=(0,t.useCallback)(async()=>{!X||!B||!ee||D?.videos?.entityId||W||(N.current=window.setTimeout(async()=>{let e=new Image;e.src=ee,e.complete||(0,v.nP)(`web.closeup.prefetched_image_on_hover.${B}_ms.fetched`)},B))},[N,X,B,ee,D?.videos?.entityId,W]),es=(0,t.useCallback)(()=>{!X||!N.current||D?.videos?.entityId||(clearTimeout(N.current),N.current=null)},[N,X,D?.videos?.entityId]),eo=(0,t.useCallback)(()=>{if(!X||!ee||D?.videos?.entityId||!W)return;let e=new Image;e.src=ee,e.complete||(0,v.nP)("web.closeup.prefetched_image_on_hover.on_mouse_down.fetched")},[X,ee,D?.videos?.entityId,W]),eu={pathname:el,state:{trackingParams:D?.trackingParams,...E&&{board:E},...V&&{fromEggsBoard:T}}},ed=(0,p.Z)({href:eu,clientTrackingParams:D?.trackingParams,externalData:{auxData:ea,pin:D&&{advertiserId:D.advertiserId,attributionSourceId:D.attributionSourceId,board:D.board&&{url:D.board.url},campaignId:D.campaignId,entityId:D.entityId,isDownstreamPromotion:D.isDownstreamPromotion,isPromoted:D.isPromoted,pinner:D.pinner&&{username:D.pinner.username},pinPromotionId:D.pinPromotionId,promoter:D.promoter&&{entityId:D.promoter.entityId},storyPinDataId:D.storyPinDataId,trackingParams:D.trackingParams}}}),ec=(0,t.useCallback)(()=>{M&&H&&G((0,P.D)({pinId:D.entityId}))},[D.entityId,G,M,H]);return(0,b.jsx)(i.Tg,{accessibilityLabel:L?void 0:(0,_.Z)(A.bt("Página do Pin {{ pinTitle }}", "{{ pinTitle }} pin page", "pinRep.closeupLink.tapArea.accessibilityLabel", undefined, true),{pinTitle:D.gridTitle||D.title||D.description||""}),fullHeight:"fullSize"===e,fullWidth:"fullSize"===e,href:el,mouseCursor:U||z?void 0:"zoomIn",onMouseDown:eo,onMouseEnter:er,onMouseLeave:es,onTap:({event:e,dangerouslyDisableOnNavigation:a})=>{a(),ei(),ec(),ed({event:e})},rounding:2,children:a})}},171787:(e,a,l)=>{l.d(a,{A:()=>n});let n="socialPinLanding"},5755:(e,a,l)=>{l.d(a,{Z:()=>r});var n=l(252071),t=l(194093),i=l(922664);function r(){let{conversationCreate:e}=(0,i.Z)();return async a=>{let l;let i=n.Z.create("ConversationsResource",a);try{let a=(await i.callCreate()).resource_response.data;a&&(e(a),l=a)}catch(e){throw Error((0,t.Z)(e,"message"))}return l}}},808379:(e,a,l)=>{l.d(a,{Z:()=>f});var n=l(616550),t=l(883119),i=l(573706),r=l(194093),s=l(559028),o=l(476198),u=l(144326),d=l(240760),c=l(901450),g=l(410150),m=l(171787),p=l(5755),_=l(922664),y=l(193836),k=l(785893);function f({hideToast:e,pinAttachment:a}){let l=(0,u.ZP)(),f=(0,n.k6)(),{logContextEvent:h}=(0,i.v)(),{showToast:P}=(0,c.F9)(),w=(0,p.Z)(),{conversationOpen:v,dropdownOpen:b,setObjectAttachment:S}=(0,_.Z)(),F=(0,g.HG)(),K=(0,y.t2)(),L=(0,y._l)(),T=F?K?.data?.toastData:L?.data?.toastData,I=F?14344:14343;if(T){let{inviter:n,viewer:i}=T,u=(0,k.jsx)(t.xv,{inline:!0,weight:"bold",children:n.inviterName}),c=(0,k.jsx)(t.xv,{children:(0,d.nk)(l.bt("Gostou deste Pin? Mostre para {{ inviterName }}.", "Like this Pin? Let {{ inviterName }} know.", "SocialPinLandingPage.AuthSocialPinLandingPage.toastText", undefined, true),{inviterName:u})}),g=({conversationId:e,pinAttachment:a})=>{F?(b(),v(e)):f.push(`/conversation/${e}`),S(a)},p=async()=>{h({event_type:F?101:102,view_type:3,view_parameter:156,component:I});try{let e=await w({user_ids:[n.inviterId,i.viewerId]});if(e){let l=e.id;g({conversationId:l,pinAttachment:{...a,source:m.A}})}}catch(e){P(({hideToast:a})=>(0,k.jsx)(o.ZP,{onHide:a,text:(0,r.Z)(e,"message")??""}))}};return h({event_type:13,view_type:3,view_parameter:156,component:I}),(0,k.jsx)(t.kC,{justifyContent:"center",children:(0,k.jsx)(t.iP,{onTap:()=>{p(),e()},children:(0,k.jsx)(o.ZP,{duration:7e3,onHide:e,primaryAction:{accessibilityLabel:l.bt("Responder", "Reply", "SocialPinLandingPage.AuthToast.replyButtonAccessibilityLabel", undefined, true),label:l.bt("Responder", "Reply", "SocialPinLandingPage.AuthToast.replyButton", undefined, true),size:"lg",onClick:()=>{}},text:c,thumbnail:{avatar:(0,k.jsx)(s.qE,{name:n.inviterName,src:n.inviterAvatarUrl})}})})})}}},714305:(e,a,l)=>{l.d(a,{D:()=>C,Z:()=>Q});var n,t,i=l(667294),r=l(167912),s=l(616550),o=l(883119),u=l(543166),d=l(24574),c=l(30794),g=l(212515),m=l(47848),p=l(136061),_=l(982553),y=l(297728),k=l(750077),f=l(901450),h=l(151958),P=l(383399),w=l(717381),v=l(562612),b=l(243583),S=l(127566),F=l(193836),K=l(808379),L=l(66560),T=l(724533),I=l(785893);let E=(0,i.lazy)(()=>Promise.all([l.e(13377),l.e(24698)]).then(l.bind(l,713377))),x=void 0!==n?n:n=l(379748),R=void 0!==t?t:t=l(229114);function C({pinId:e}){return{query:x,variables:{pinId:e}}}function A({isEligibleForPdp:e,pinId:a,ratingValue:l,pinKey:n}){let t=(0,p.aX)(),r=(0,s.k6)(),_=(0,s.TH)(),y=(0,P.Z)(),{trafficSource:k}=(0,d.Z)(t,y.isAuth),w=(0,m.Z)(R,n),{showToast:b}=(0,f.F9)(),L=(0,F.t2)(),T=(0,F.w2)();(0,i.useEffect)(()=>{let e=w?.gridTitle||w?.richMetadata?.title||w?.richSummary?.displayName||w?.richMetadata?.article?.name||"Pin page";document.title=e},[w]),(0,i.useEffect)(()=>{if(!T||T.hasSeenAuthDesktopLandingToast)return()=>{};let{setHasSeenAuthDesktopLandingToast:e}=T,l=setTimeout(()=>{if(L){let l={type:"pin",id:a};e(!0),b(({hideToast:e})=>(0,I.jsx)(K.Z,{hideToast:e,pinAttachment:l}))}},3e3);return()=>{clearTimeout(l)}},[L,a,b,T]);let E=(0,h.Z)(w);return((0,g.Q)({view_type:3,object_id_str:a,view_data:{pin_id:a},component:13283,aux_data:{current_page_url:_.pathname+_.search,closeup_navigation_type:(0,v.Z)(r,k),...E(),...l?{rating_value:l}:{},is_go_linkless:!!w?.isGoLinkless},clientTrackingParams:(0,S.Z)((_?.state||{}).trackingParams,w?.trackingParams)},a),e)?(0,I.jsx)(o.xu,{"data-test-id":"pdp-container",children:(0,I.jsx)(c.Z,{})}):(0,I.jsx)(o.xu,{"data-test-id":"closeup-container",children:(0,I.jsx)(u.ZP,{})})}function D({pinId:e,queryRef:a}){let l=(0,r.usePreloadedQuery)(x,a),n=l.v3GetPinQuery?.__typename==="V3GetPin"&&l.v3GetPinQuery?.data?l.v3GetPinQuery?.data:null;return(0,I.jsx)(A,{isEligibleForPdp:n?.isEligibleForPdp??!1,pinId:e,pinKey:n,ratingValue:n?.richSummary?.aggregateRating?.ratingValue})}function j({pinId:e,descriptor:a}){let l=(0,r.useLazyLoadQuery)(x,a.variables),n=l.v3GetPinQuery?.__typename==="V3GetPin"&&l.v3GetPinQuery?.data?l.v3GetPinQuery?.data:null;return(0,I.jsx)(A,{isEligibleForPdp:n?.isEligibleForPdp??!1,pinId:e,pinKey:n,ratingValue:n?.richSummary?.aggregateRating?.ratingValue})}function Z({pinId:e}){let{checkExperiment:a}=(0,y.F)(),l=a("closeup_dweb_preload_closeup_query_before_navigation").anyEnabled,n=C({pinId:e}),{findPreloadedQuery:t}=(0,T.Us)(),i=t(n);return l&&i?.queryRef?(0,I.jsx)(D,{pinId:e,queryRef:i.queryRef}):(0,I.jsx)(j,{descriptor:n,pinId:e})}function q({pinId:e}){let a=(0,L.S6)(),l=e?a(e):null;return(0,I.jsx)(A,{isEligibleForPdp:l?.is_eligible_for_pdp??!1,pinId:e,pinKey:null!=l?{type:"deprecated",data:l}:null,ratingValue:l?.rich_summary?.aggregate_rating?.rating_value})}function Q(){let{id:e}=(0,s.UO)(),{isGraphQLEnabledInGeneral:a}=(0,b.nF)(),l=(0,P.Z)(),n=(0,_.jr)(l);return(0,I.jsxs)(w.Z,{type:"authDesktop",children:[n&&(0,I.jsx)(k.Z,{children:(0,I.jsx)(E,{})}),a?(0,I.jsx)(k.Z,{children:(0,I.jsx)(Z,{pinId:e||""})}):(0,I.jsx)(q,{pinId:e||""})]})}},378859:(e,a,l)=>{l.d(a,{Cw:()=>g,Ig:()=>k,Vl:()=>p,ZP:()=>y});var n=l(244311),t=l(790014),i=l(493651),r=l(306285),s=l(415787);function o(e,a,l){var n;return(a="symbol"==typeof(n=function(e,a){if("object"!=typeof e||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,a||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"))?n:String(n))in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}class u extends Error{constructor(...e){super(...e),o(this,"name","GraphQLFetchError"),o(this,"extraData",{})}}let d=new n.QueryResponseCache({size:100,ttl:6e4});function c(e){return e.id??e.cacheID}function g(e,a){let l=c(e),n=!!l&&null!==d.get(l,a);return(0,s.nP)("pws.graphql.RelayClientEnvironment.isQueryInServerResponseCache",{sampleRate:1,tags:{inCache:n,query:e.name??"unknown"}}),n}function m({concreteRequestCache:e,environment:a}){Array.from(document.querySelectorAll("script[data-relay-response]:not([data-preloaded])")).forEach(l=>{if(!l.dataset.preloaded){let{requestParameters:t,variables:i,response:r}=JSON.parse(l.textContent??""),o=e[[t.name,t.id].join(":")],u=o?(0,n.createOperationDescriptor)(o,i):null;if(u&&!Array.isArray(r)&&r.data){a.commitPayload(u,r.data);let e=c(t);e&&d.set(e,i,r),l.dataset.preloaded="true"}else Array.isArray(r)&&(0,s.nP)("pws.graphql.commitRelayResponsesToStore.isArrayResponse",{sampleRate:1,tags:{name:t.name}})}})}function p(e){let a=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{};window.__pwsCacheRelayConcreteRequest=l=>{a[[l.params.name,l.params.id].join(":")]=l,m({concreteRequestCache:a,environment:e})},delete window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__,m({concreteRequestCache:a,environment:e})}let _=null;function y(){let e;let a=new n.Environment({network:n.Network.create((e=!0,window.addEventListener("focus",()=>e=!0),window.addEventListener("blur",()=>e=!1),async function(a,l){let n=Date.now(),o=(0,i.H)(),d=document.cookie.match(RegExp("\\b"+t.fS.name+"=.+?($|;)","g")),c=(0,r.Z)({handler:o,queryName:a.name,windowIsInFocus:e});try{let e=await fetch("/_/graphql/",{credentials:"include",method:"POST",headers:c,body:JSON.stringify({queryHash:a.id,variables:l})});return(0,s.LY)("pws.graphql.fetchQueryClient.request",Date.now()-n,{sampleRate:1,tags:{handler:o??"unknown",queryName:a.name,status:e.status}}),await e.json()}catch(l){let e=new u(l.message);throw e.stack=l.stack,e.extraData={csrfCookies:d?.join(";")??"unknown",requestHeaders:c},(0,s.nP)("pws.graphql.fetchQueryClient.networkError",{sampleRate:1,tags:{handler:o,queryName:a.name}}),e}})),store:new n.Store(new n.RecordSource)});return"undefined"!=typeof window&&(_=a),a}function k(){return _}},306285:(e,a,l)=>{l.d(a,{Z:()=>i});var n=l(418256),t=l(521463);function i({handler:e,queryName:a,windowIsInFocus:l}){let{searchParams:i}=new URL(window.location.href),r=i.get("force_country"),s=i.get("force_country_from_ip"),o={};return r&&(o["X-Force-Country"]=r),s&&(o["X-Force-Country-From-IP"]=s),e&&(o["X-Pinterest-PWS-Handler"]=e),{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":(0,n._V)(),"X-Requested-With":"XMLHttpRequest","X-Pinterest-Source-Url":(0,t.Z)(),"X-Pinterest-GraphQL-Name":a,"X-Pinterest-AppState":l?"active":"background",...o}}},724533:(e,a,l)=>{l.d(a,{h_:()=>c,rL:()=>d,Tr:()=>m,Us:()=>g});var n=l(422578),t=l(244311),i=l(498490),r=l(378859),s=l(186139),o=l(415787),u=l(855746);function d({relayEnvironment:e}){let a=[];return{preloadQuery:function(l){let i=(0,n.loadQuery)(e,(0,t.getRequest)(l.query),l.variables??{});return a=a.concat({descriptor:l,queryRef:i}),i},ensureFlushed:async function(e){throw Error("ensureFlushed should not be called on the client")},findPreloadedQuery:function(e){return a.find(({descriptor:a})=>(function(e,a){let l=(0,t.getRequest)(e.query),n=(0,t.getRequest)(a.query);return l.operation.name===n.operation.name&&l.hash===n.hash&&(0,s.L)(e.variables,a.variables)})(a,e))}}}let{Provider:c,useHook:g}=(0,i.Z)("QueryPreloader");function m(e){let{findPreloadedQuery:a,preloadQuery:l}=g(),n=(0,u.MM)();if(!e)return null;let i=a(e)?.queryRef,s=(0,t.getRequest)(e.query),d=(0,r.Cw)(s.params,e.variables);return i||(d||(0,o.nP)("pws.graphql.usePreloadedQueryRef.miss",{sampleRate:1,tags:{handler:n,query:s.operation.name??"unknown",runtime:"client"}}),l(e))}},186139:(e,a,l)=>{l.d(a,{L:()=>i,Z:()=>r});var n=l(667294),t=l(655201);let i=(e,a)=>(0,t.Z)(e,a);function r(e){let[a,l]=(0,n.useState)(e);return i(e,a)?a:(l(e),e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/63954.pt_BR-0bad378939cf0485.mjs.map