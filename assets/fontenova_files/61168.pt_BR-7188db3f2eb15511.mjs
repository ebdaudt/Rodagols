"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61168,90907],{11475:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CarouselEllipsis_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{args:null,kind:"FragmentSpread",name:"useLogSwipe_pin"},{args:null,kind:"FragmentSpread",name:"usePinCarouselData_pin"}],type:"Pin",abstractKey:null};l.hash="d9fe632f7481dc91f9007bbd592d44c2";let n=l},357289:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CarouselSliders_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{args:null,kind:"FragmentSpread",name:"useLogSwipe_pin"},{args:null,kind:"FragmentSpread",name:"usePinCarouselData_pin"},{args:null,kind:"FragmentSpread",name:"CarouselEllipsis_pin"}],type:"Pin",abstractKey:null};l.hash="4b0c4a7a095db0d3cc7f22f3f6c85086";let n=l},972410:(e,a,i)=>{var l,n,t;i.r(a),i.d(a,{default:()=>s});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin",selections:[{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinTagChipImagesPerSpec",kind:"LinkedField",name:"pinTagsChips",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"image",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CollectionPin",kind:"LinkedField",name:"collectionPin",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionPinItem",kind:"LinkedField",name:"itemData",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinId",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"750x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:[n,t,l],storageKey:'images(spec:"750x")'}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupLink_pin"},{alias:null,args:null,kind:"ScalarField",name:"dpaCreativeType",storageKey:null}],type:"Pin",abstractKey:null};r.hash="c167093f5b3fc6181bc8b26792c3248c";let s=r},462812:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin2"}],type:"Pin",abstractKey:null};l.hash="6016b14b2081c4349ad3f3a910cc2ea7";let n=l},511259:(e,a,i)=>{var l;i.r(a),i.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin2",selections:[{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:l,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null}],type:"Pin",abstractKey:null};n.hash="4ffad4c63399ee2e54c9a3a86d114984";let t=n},107414:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useLogSwipe_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};l.hash="dbfca9820e0aa1302554a0137a270b16";let n=l},730490:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinCarouselData_pin",selections:[{args:null,kind:"FragmentSpread",name:"usePinDefaultCarouselData_pin"},{args:null,kind:"FragmentSpread",name:"usePinProductCarouselData_pin"}],type:"Pin",abstractKey:null};l.hash="461a57fcc8f7958e3742c217e4cc45a2";let n=l},38370:(e,a,i)=>{var l;i.r(a),i.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinDefaultCarouselData_pin",selections:[{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"details",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSignature",storageKey:null},{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"736x")'},{alias:"slotId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="a3cbf6d55cf89d97d6e04c32195968d9";let t=n},55962:(e,a,i)=>{var l,n;i.r(a),i.d(a,{default:()=>r});let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinProductCarouselData_pin",selections:[{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:n=[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:"productId",args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useRichPinProductMetadataCarouselSlots_richPinProductMetadata"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:n,storageKey:null}],type:"Pin",abstractKey:null};t.hash="6588018e2880f2695fc6c4ba45aab606";let r=t},883857:(e,a,i)=>{var l;i.r(a),i.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRichPinProductMetadataCarouselSlots_richPinProductMetadata",selections:[{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:l=[{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"canonicalImage",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSignature",storageKey:null}],storageKey:'additionalImagesPerSpec(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:l,storageKey:'additionalImagesPerSpec(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:l,storageKey:'additionalImagesPerSpec(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:l,storageKey:'additionalImagesPerSpec(spec:"736x")'}],type:"RichPinProductMetadata",abstractKey:null};n.hash="b49953855cdc69f6ee2c8d4925149d23";let t=n},860575:(e,a,i)=>{i.d(a,{Xx:()=>t});var l=i(667294);i(785893),(0,l.createContext)(void 0),i(573706);let n=(0,l.createContext)(void 0),t=()=>(0,l.useContext)(n)},129666:(e,a,i)=>{i.d(a,{P:()=>h,Z:()=>y}),i(167912);var l,n,t,r,s=i(47848);let d=void 0!==l?l:l=i(38370),o=void 0!==n?n:n=i(883857);var u=i(529521),c=i(415787);let g=void 0!==t?t:t=i(55962),p=!1,m=void 0!==r?r:r=i(730490);function y(e){let a=(0,s.Z)(m,e),i=function(e){let a=(0,s.Z)(d,e);return a?.carouselData?{index:a.carouselData.index,carouselId:a.carouselData.entityId,carouselSlots:a.carouselData.carouselSlots?.map(e=>({details:e.details,imageSignature:e.imageSignature,imageSizeMap:{"236x":e.image236x&&{height:e.image236x.height,url:e.image236x.url,width:e.image236x.width},"474x":e.image474x&&{height:e.image474x.height,url:e.image474x.url,width:e.image474x.width},"564x":e.image564x&&{height:e.image564x.height,url:e.image564x.url,width:e.image564x.width},"736x":e.image736x&&{height:e.image736x.height,url:e.image736x.url,width:e.image736x.width}},slotId:e.slotId,title:e.title}))??[]}:null}(a),l=function({pinKey:e,index:a}){let i=(0,s.Z)(g,e),l=(i?.richMetadata||i?.richSummary)?.products?.[0]||null,n=(i?.richMetadata?.products?.length??0)+(i?.richSummary?.products?.length??0);if(null!=e&&n>1&&!p){p=!0;let a=(0,u.oy)(e);(0,c.nP)("autoLegacyAdapter.overfetch.usePinProductCarouselData_pin",{sampleRate:.1,tags:{totalLength:n,isGraphQL:"GraphQL"===a}})}let t=function(e){let a=(0,s.Z)(o,e);if(!a)return[];let i={},{image236x:l,image474x:n,image564x:t,image736x:r}=a;return[[l,"236x"],[n,"474x"],[t,"564x"],[r,"736x"]].forEach(([e,a])=>{(Array.isArray(e)?e:[]).forEach(({canonicalImage:e,imageSignature:l})=>{l&&e&&(i={...i,[l]:{...i[l],[a]:{height:e.height,url:e.url,width:e.width}}})})}),Object.entries(i).map(([e,a])=>({imageSignature:e,imageSizeMap:a}))}(l);return l&&t.length?{carouselId:l.productId,carouselSlots:[{imageSignature:null,imageSizeMap:{"236x":i?.image236x&&{height:i.image236x.height,url:i.image236x.url,width:i.image236x.width},"474x":i?.image474x&&{height:i.image474x.height,url:i.image474x.url,width:i.image474x.width},"564x":i?.image564x&&{height:i.image564x.height,url:i.image564x.url,width:i.image564x.width},"736x":i?.image736x&&{height:i.image736x.height,url:i.image736x.url,width:i.image736x.width}}},...t],index:a}:null}({pinKey:a,index:i?.index});return l?{...l,carouselSlots:l.carouselSlots.map(e=>({...e,details:null,slotId:null,title:null}))}:i}function h({children:e,pinKey:a}){return e(y(a))}},835593:(e,a,i)=>{i.d(a,{Q:()=>r});var l=i(167912),n=i(529521),t=i(532321);function r(e,a,{useLegacyAdapter:i}){if(null==a)return{data:null,childDataKey__DEPRECATED:null};let r=(0,n.jc)(a);if("deprecated"===r.type){let{data:a}=r;return null==a?{data:null,childDataKey__DEPRECATED:r}:{data:(0,t.V4)(e,i)(a),childDataKey__DEPRECATED:r}}let s=(0,l.useFragment)(e,r.data);return{data:s,childDataKey__DEPRECATED:{type:"graphqlRef",data:s}}}},264147:(e,a,i)=>{i.d(a,{Z:()=>r});var l=i(914896),n=i(790014),t=i(937304);function r(e,a){let i=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";l.t8((0,n.GS)(i),r);let s={token:`${i}-${r}`,url:e,...a&&!a.params?a.queryParams:a?.params&&{pin:a.params.pinId??void 0,isThirdPartyAd:a.params.isThirdPartyAd??void 0,csr:a.params.csrId&&!a.params.pinId?a.params.csrId:void 0,client_tracking_params:a.params.clientTrackingParams,aux_data:a.params.auxData?JSON.stringify(a.params.auxData):void 0}};return`/offsite/?${(0,t.Z)(s)}`}},937637:(e,a,i)=>{i.d(a,{Z:()=>o});var l=i(449112),n=i(564573);let t=e=>"string"!=typeof e&&e?e.state:null;var r=i(723184),s=i(809604),d=i(592174);let o=({event:e,onHistoryChange:a,href:i,history:o,target:u})=>{let c=(0,n.Z)(i),g=t(i)??{},p=(0,r.Z)(c);p===d.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===u?(0,l.Z)(c,"blank"===u):o&&p===d.Z.SAME_ORIGIN&&(o.push((0,s.Z)({url:c}),{from:o.location,...g}),a&&a({event:e}))}},256277:(e,a,i)=>{i.d(a,{Z:()=>t});var l=i(449112),n=i(264147);function t(e,a){(0,l.Z)((0,n.Z)(e,a),!0,a?.features)}},436922:(e,a,i)=>{i.d(a,{Qy:()=>o,Wu:()=>c,ZP:()=>u});var l=i(616550),n=i(883119),t=i(730212),r=i(868808),s=i(383399),d=i(785893);let o=()=>{let e=(0,s.Z)(),{isInternalIP:a}=(0,t.B)(),i=(0,l.TH)();return(a||e.isAuth&&e.isEmployee)&&Object.keys((0,r.mB)(i.search)).some(e=>e.startsWith("deb_"))};function u({data:e}){return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{border:"2px solid red"}},"data-test-id":"debug-info",overflow:"auto",children:(0,d.jsx)("pre",{children:JSON.stringify(e,null,2).replace(/\\n/g,"\n")})})}let c=e=>(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginTop:10}},width:236,children:(0,d.jsx)(u,{...e})})},809604:(e,a,i)=>{i.d(a,{Z:()=>t});let l=(e,a)=>0===e.lastIndexOf(a,0);var n=i(54473);let t=({url:e})=>{let a=(0,n.Z)("/");return l(e,a)?e.substr(a.length-1):e}},151958:(e,a,i)=>{i.d(a,{Y:()=>p,Z:()=>m});var l,n,t=i(667294);i(167912);var r=i(532321),s=i(835593);let d=void 0!==l?l:l=i(462812),o=void 0!==n?n:n=i(511259),u=e=>{let a=Symbol("SKIP"),i=e=>Object.entries(e).filter(([,e])=>e!==a).reduce((e,[a,i])=>({...e,[a]:i}),{});if("deprecated"!==e.type){let l=e.data;return i({...l.isEligibleForPdp||l.isOosProduct||l.isStaleProduct?{...(()=>{let e=l.richMetadata?.products?.[0];return{carousel_image_count:a,brand_signature:e?.brand?.signature||a,free_shipping_price:e?.shippingInfo?.freeShippingPrice||a,free_shipping_value:e?.shippingInfo?.freeShippingValue||a,num_variants:e?.variantSet?.variants?.length||a,total_dimension_option_count:e?.variantSet?.dimensionMetadata?.length||a,valid_dimension_option_count:a}})(),pin_show_pdp_oos:!!l.isOosProduct||a,pin_show_pdp_stale:!!l.isStaleProduct||a,pin_show_pdp:!!l.isEligibleForPdp||a}:{},pin_is_shop_the_look:!!(l.shoppingFlags?.includes(2)||l.aggregatedPinData?.isShopTheLook)||a,is_available:!!l.shoppingFlags?.includes(1)||a,is_product_pin_v2:!!l.shoppingFlags?.includes(5)||a,is_rich_product_pin:!!l.shoppingFlags?.includes(6)||a,is_organic_product_carousel:a,item_id:(l.richSummary?.products?.[0]||{}).itemId||a,item_set_id:(l.richSummary?.products?.[0]||{}).itemSetId||a,story_pin_id:l.storyPinData?l.storyPinDataId:a})}{let l=e.data;return l?i({...l.is_eligible_for_pdp||l.is_oos_product||l.is_stale_product?{...(()=>{let e=(l.rich_metadata||l.rich_summary)?.products?.[0],i=e?.additional_images?.length?(l.images?1:0)+e.additional_images.length:l.carousel_data?.carousel_slots?.length,n=l.rich_metadata?.products?.[0],t=n?.variant_set?.variants??[];return{carousel_image_count:i||a,brand_signature:n?.brand?.signature||a,free_shipping_price:n?.shipping_info?.free_shipping_price||a,free_shipping_value:n?.shipping_info?.free_shipping_value||a,num_variants:t.length||a,total_dimension_option_count:n?.variant_set?.dimension_metadata?.length||a,valid_dimension_option_count:(n?.variant_set?.dimension_metadata||[]).reduce((e,{name:a,values:i})=>e+(a&&i||[]).filter(e=>t.some(i=>i.dimensions?.[a??""]===e)).length,0)||a}})(),pin_show_pdp_oos:!!l.is_oos_product||a,pin_show_pdp_stale:!!l.is_stale_product||a,pin_show_pdp:!!l.is_eligible_for_pdp||a}:{},pin_is_shop_the_look:!!(l.shopping_flags?.includes(2)||l.aggregated_pin_data?.is_shop_the_look)||a,is_available:!!l.shopping_flags?.includes(1)||a,is_product_pin_v2:!!l.shopping_flags?.includes(5)||a,is_rich_product_pin:!!l.shopping_flags?.includes(6)||a,is_organic_product_carousel:!!(l.shopping_flags?.includes(10)||(l.product_pin_data?.items?.[0]||{}).additional_images)||a,item_id:(l.rich_summary?.products?.[0]||{}).item_id||a,item_set_id:(l.rich_summary?.products?.[0]||{}).item_set_id||a,story_pin_id:l.story_pin_data?l.story_pin_data_id:a}):{}}},c=e=>0===Object.keys(e).length?{}:{commerce_data:JSON.stringify(e)},g=e=>{let{childDataKey__DEPRECATED:a}=(0,s.Q)(d,e,{useLegacyAdapter:e=>({})}),{childDataKey__DEPRECATED:i}=(0,r.Zm)(o,null==a?{type:"deprecated",data:null}:a,{useGraphQLAdapter:e=>e,useLegacyAdapter:e=>e}),l=(0,t.useRef)(i);return(0,t.useEffect)(()=>{l.current=i}),(0,t.useCallback)(e=>c({...e?.default,...u(l.current),...e?.override}),[])},p=({children:e,pinKey:a})=>e(g(a)),m=g},590238:(e,a,i)=>{i.d(a,{Z:()=>t});var l=i(400416),n=i(256277);function t(e,a){let{auxData:i,clientTrackingParams:t,hasPin:r,pinId:s,isThirdPartyAd:d}=a||{},o={pin_id:s,check_only:!0,client_tracking_params:r?t:void 0,url:e,aux_data:JSON.stringify(i)};d&&(o.third_party_ad=s,delete o.pin_id),(0,l.Z)({url:"/v3/offsite/",data:o}).then(a=>{if(a&&a.resource_response&&!a.resource_response.error){let{resource_response:e}=a,{redirect_status:i,url:l}=e.data;if(!["blocked","suspicious","porn"].includes(i)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(l);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Z)(e,{params:r?{pinId:s,clientTrackingParams:t,auxData:i,isThirdPartyAd:d}:{pinId:s}})})}},675876:(e,a,i)=>{i.d(a,{Z:()=>c}),i(167912);var l,n=i(883119),t=i(47848),r=i(297728),s=i(363954),d=i(785893);let o={chip:{marginRight:1,flex:"1 1 0"},chipInner:{paddingBottom:"100%"},chipContainer:{marginRight:-1}},u=void 0!==l?l:l=i(972410);function c({pinKey:e,enableCloseupLink:a}){let i=(0,t.Z)(u,e),{checkExperiment:l}=(0,r.F)(),{anyEnabled:c}=l("aid_web_collection_pin_data"),{aggregatedPinData:g,collectionPin:p,dpaCreativeType:m}=i,{pinTagsChips:y}=g||{},{itemData:h}=p||{},_=y&&y.length>=3?y.slice(0,3):[],x=h&&h.length>=3?h.slice(0,3):[];return c&&!m?(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chipContainer},display:"flex",children:x.map(e=>{let l=e.images||{},t=(0,d.jsx)(n.Ee,{alt:"",fit:"cover",naturalHeight:l.height??1,naturalWidth:l.width??1,role:"presentation",src:l.url??""});return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chip},"data-test-id":"collageChip",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chipInner},position:"relative",children:(0,d.jsx)(n.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,d.jsx)(n.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,d.jsx)(s.Z,{collageChipId:e.pinId??"",pinKey:i,sizing:"fullSize",children:t}):t})})})},e.pinId)})}):(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chipContainer},display:"flex",children:_.map(e=>{let l=e.image||{},t=(0,d.jsx)(n.Ee,{alt:"",fit:"cover",naturalHeight:l.height??1,naturalWidth:l.width??1,role:"presentation",src:l.url??""});return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chip},"data-test-id":"collageChip",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:o.chipInner},position:"relative",children:(0,d.jsx)(n.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,d.jsx)(n.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,d.jsx)(s.Z,{collageChipId:e.entityId??"",pinKey:i,sizing:"fullSize",children:t}):t})})})},e.entityId)})})}},821892:(e,a,i)=>{i.d(a,{B:()=>l,E:()=>n});let{Provider:l,useHook:n}=(0,i(498490).Z)("trackingParametersContext")},87416:(e,a,i)=>{i.d(a,{Cy:()=>o,HE:()=>u,Mv:()=>t,PR:()=>m,Y4:()=>c,dL:()=>n,fS:()=>g,fv:()=>s,lu:()=>p,qS:()=>d,uc:()=>r});var l=i(788388);let n=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,duploShouldTrackPinEvents:e.duploShouldTrackPinEvents,loggingId:e.loggingId,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Pin",isPaused:e.isPaused,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})},t=e=>{let a=(0,l.Z)({impressionAuxFields:{newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},contextLogData:e.auxData||{},impressionType:"Notification",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:a})},r=e=>{let a=(0,l.Z)({impressionAuxFields:{newsType:e.newsType},contextLogData:e.auxData||{},impressionType:"NotificationFeed",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:a})},s=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},contextLogData:e.auxData||{},componentType:e.component,isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,impressionType:"Article"});return e.children({impressionTrackerRef:a})},d=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Story",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})},o=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"User",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})},u=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Interest",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})},c=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"TodayArticle",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})},g=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Board",loggingId:e.loggingId,viewType:e.viewType||1,viewParameter:e.viewParameter,viewData:e.viewData});return e.children({impressionTrackerRef:a})},p=e=>{let a=(0,l.Z)({carouselData:e.carouselData,impressionType:"Pin",loggingId:e.loggingId,slotIndex:e.slotIndex??0,trackCarousel:!0,viewParameter:e.viewParameter||72,viewType:e.viewType||1,isPaused:e.isPaused,contextLogData:e.contextLogData,componentType:e.component,impressionAuxFields:e.impressionAuxFields});return e.children({impressionTrackerRef:a})},m=e=>{let a=(0,l.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"CuratedBoard",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:a})}},845873:(e,a,i)=>{i.d(a,{bn:()=>s,fJ:()=>o,gC:()=>d});var l=i(545007),n=i(498490),t=i(785893);let{Provider:r,useHook:s}=(0,n.Z)("Boards");function d(){let e=s();return a=>e[a]}function o({children:e}){let a=(0,l.v9)(({boards:e})=>e,l.wU);return(0,t.jsx)(r,{value:a,children:e})}},166124:(e,a,i)=>{i.r(a),i.d(a,{default:()=>p});var l,n=i(545007);i(167912);var t=i(883119),r=i(129666),s=i(47848),d=i(115642),o=i(359422),u=i(409065),c=i(785893);let g=void 0!==l?l:l=i(11475);function p({carouselData:e,carouselIndex:a,componentType:i,contextLogData:l,enablePagination:p=!1,handleCarouselSwipe:m,isCloseup:y,isEditMode:h,itemsPerPage:_,pinKey:x,viewParameter:v,viewType:S,variant:k}){let P=(0,s.Z)(g,x),I=(0,o.Z)(P),f=(0,r.Z)(P),w=e||f&&{carouselSlots:f.carouselSlots.map(({slotId:e,title:a})=>({id:e,title:a})),entityId:f.carouselId??"",index:f.index},D=(0,n.I0)();if(!w)return null;let F=(e,a,n)=>{h||void 0===u.yR||(e.preventDefault(),e.stopPropagation(),D((0,u.yR)(P?.entityId??"",n))),void 0!==m&&m(n),I({pinId:P?.entityId??"",currentIndex:a??0,nextIndex:n,carouselData:{carouselSlots:w.carouselSlots?.map(e=>({id:e.id})),entityId:w.entityId},viewParameter:v,viewType:S,componentType:i,contextLogData:l,isEditMode:h})},{carouselSlots:T,index:b}=w,K="number"==typeof a?a:b,L=T?.length&&_?Math.ceil(T?.length/_):void 0,C="default"===k,A=C?"white":"#555",E=C?"rgba(255, 255, 255, 0.5)":"lightGray",j=(e,a)=>(0,c.jsx)(t.xu,{paddingX:1,children:(0,c.jsx)(t.iP,{accessibilityLabel:(e||{}).title??"",fullWidth:!1,onTap:({event:e})=>F(e,K,a),rounding:"circle",children:(0,c.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:a===K?A:E}},"data-test-id":"ellipsis-size",height:8,rounding:"circle",width:8})})},`${e?.id}-${a}`);return(0,c.jsx)(d.ZP.Consumer,{children:({closeupWithinMasonryEnabled:e,viewportSize:a})=>"sm"===a&&(e&&14339!==i&&14394!==i||!e)?null:T&&(0,c.jsx)(t.xu,{alignItems:"center","data-test-id":"carousel-ellipsis",display:"flex",justifyContent:y?"end":"center",paddingY:h?1:0,children:p?_&&[...Array(L).keys()].map(e=>j(T[e*_],e*_)):[...Array(T.length).keys()].map(e=>j(T[e],e))})})}},993422:(e,a,i)=>{i.r(a),i.d(a,{default:()=>h});var l,n=i(545007);i(167912);var t=i(883119),r=i(129666),s=i(47848),d=i(144326),o=i(166124),u=i(359422),c=i(409065),g=i(785893);let p={cursor:"pointer",padding:"30px 16px",position:"relative",zIndex:1},m=(e,a,i,l,n,t)=>{t||void 0===l||(e.preventDefault(),e.stopPropagation(),l(a,i)),void 0!==n&&n(i)},y=void 0!==l?l:l=i(357289);function h({addEllipsis:e,alwaysShowNavigationArrows:a,carouselIndex:i,carouselData:l,ellipsisVariant:h,handleCarouselSwipe:_,height:x,isShowingLastSlide:v,pinKey:S,contextLogData:k,viewParameter:P,viewType:I,componentType:f,isEditMode:w,storyType:D,itemsPerPage:F,forwardNode:T,backNode:b,sliderStyleOverride:K,hideNavigationArrows:L}){let C=(0,d.ZP)(),A=(0,n.I0)(),E=(0,s.Z)(y,S),j=(0,u.Z)(E),Z=(0,r.Z)(E),O=l||Z&&{carouselSlots:Z.carouselSlots.map(({slotId:e,title:a})=>({id:e,title:a})),entityId:Z.carouselId??"",index:Z.index};if(!O)return null;let R=(e,a)=>A((0,c.yR)(e,a)),{carouselSlots:M,index:N}=O,B=void 0!==i?i:N??0,G=Math.max(0,B-(F??1)),H=Math.min((M??[]).length-1,B+(F??1)),U=0===B,W=v||B===(M??[]).length-1,z=(e,a)=>{let i=a<B?9315:9316,l="search_3p_ad_only_module"===D;m(e,E?.entityId??"",a,R,_,w),j({pinId:E?.entityId??"",currentIndex:B,nextIndex:a,carouselData:{carouselSlots:M?.map(({id:e})=>({id:e})),entityId:O.entityId},viewParameter:P,viewType:I,storyType:D,componentType:f,contextLogData:k,isEditMode:w,isEligibleForPdp:E?.isEligibleForPdp??!1,swipeEvent:l?i:108})},V=b||(0,g.jsx)(t.JO,{accessibilityLabel:C.bt("Visualizar anterior", "View Previous", "Button to advance carousel to the previous image", undefined, true),color:"inverse",icon:"arrow-back"}),J=L?null:T||(0,g.jsx)(t.JO,{accessibilityLabel:C.bt("Visualizar próxima", "View Next", "Button to advance carousel to the next image", undefined, true),color:"inverse",icon:"arrow-forward"});return(0,g.jsxs)(t.xu,{alignItems:"center",bottom:!x,"data-test-id":"carousel-sliders",display:"flex",height:x,justifyContent:L?"center":"between",left:!0,position:"absolute",right:!0,top:!0,children:[!L&&(0,g.jsx)("div",{"data-test-id":"carousel-slider-left",onClick:e=>{z(e,G)},onKeyUp:e=>{z(e,G)},role:"presentation",style:{...p,...K,pointerEvents:U?"none":"auto"},children:(0,g.jsx)(t.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{visibility:U&&!a?"hidden":"visible",opacity:U&&a?"50%":"100%"}},"data-test-id":"carousel-slider-left-box",display:"flex",height:"100%",justifyContent:"center",width:"100%",children:V})}),e&&(0,g.jsx)(o.default,{carouselData:{carouselSlots:O.carouselSlots?.map(({id:e,title:a})=>({id:e,title:a})),entityId:O.entityId,index:O.index},carouselIndex:i,componentType:f,handleCarouselSwipe:_,itemsPerPage:F,pinKey:E,variant:h||"default",viewParameter:P,viewType:I}),!L&&(0,g.jsx)("div",{"data-test-id":"carousel-slider-right",onClick:e=>{z(e,H)},onKeyUp:e=>{z(e,H)},role:"presentation",style:{...p,...K,pointerEvents:W?"none":"auto"},children:(0,g.jsx)(t.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{visibility:W&&!a?"hidden":"visible",opacity:W&&a?"50%":"100%"}},"data-test-id":"carousel-slider-right-box",display:"flex",height:"100%",justifyContent:"center",width:"100%",children:J})})]})}},359422:(e,a,i)=>{i.d(a,{Z:()=>d}),i(167912);var l,n=i(573706),t=i(47848),r=i(151958);let s=void 0!==l?l:l=i(107414);function d(e){let{logContextEvent:a}=(0,n.v)(),i=(0,t.Z)(s,e),l=(0,r.Z)(i);return function({pinId:e,currentIndex:i,nextIndex:n,carouselData:t,viewParameter:r,viewType:s,storyType:d,componentType:o,contextLogData:u,isEditMode:c,swipeEvent:g}){if(!c){let{carouselSlots:c,entityId:p}=t,{objectIdStr:m,...y}=u??{};a({event_type:g??108,object_id_str:e??m,component:o,view_type:s,view_parameter:r,event_data:{pinCarouselSlotEventData:{carouselSlotId:c?.[i]&&Number(c[i].id),carouselDataId:Number(p),carouselSlotIndex:i,toCarouselSlotIndex:n}},aux_data:{story_type:d,...y,...l()}})}}}},193836:(e,a,i)=>{i.d(a,{_l:()=>v,cO:()=>x,t2:()=>S,w2:()=>k,xM:()=>_});var l=i(667294),n=i(616550),t=i(252071),r=i(282999),s=i(868808),d=i(410150),o=i(383399),u=i(785893);let c="UnauthDesktopSocialPinLandingPageContext",g="AthDesktopSocialPinLandingPageContext",p="AuthMobileSocialPinLandingPageContext",m=(0,l.createContext)(),y=({children:e})=>{let[a,i]=(0,l.useState)(!1),[n,t]=(0,l.useState)(!1),r=(0,l.useMemo)(()=>({hasSeenAuthMobileLandingToast:a,setHasSeenAuthMobileLandingToast:i,hasSeenAuthDesktopLandingToast:n,setHasSeenAuthDesktopLandingToast:t}),[a,i,n,t]);return(0,u.jsx)(m.Provider,{value:r,children:e})},h=(0,l.createContext)({key:"",data:null}),_=({children:e})=>{let a=(0,n.TH)(),i=(0,o.Z)(),m=i&&i.isAuth,_=(0,d.HG)(),x=(0,l.useRef)((0,r.fY)(a)&&(0,s.mB)(a.search).invite_code||null),v=(0,n.LX)(a.pathname,{path:"/pin/:id"}),S=v&&v.params.id||"",[k,P]=(0,l.useState)({key:"",data:null});return(0,l.useEffect)(()=>{(async function(){let e=x.current;if(e)try{let a=t.Z.create("InviteCodeMetadataResource",{invite_code:e}),l=(await a.callGet()).resource_response.data;if(l){let e=l.sender??null,a=m&&e.id!==i.id&&e?.should_show_messaging&&i.should_show_messaging;!m&&_?P({key:c,data:{inviter:e,popoverData:e&&![5,9,12,16].includes(l.invite_channel)?{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name}:null}}):a&&!_?P({key:p,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:i.id||""},pin:{pinId:S}}}}):a&&_&&P({key:g,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:i.id||""},pin:{pinId:S}}}})}else P({key:"",data:null})}catch{P({key:"",data:null})}})()},[m,_,i.id,S,i.should_show_messaging]),(0,u.jsx)(y,{children:(0,u.jsx)(h.Provider,{value:k,children:e})})},x=()=>{let e=(0,l.useContext)(h);return e.key===c?e:null},v=()=>{let e=(0,l.useContext)(h);return e.key===p?e:null},S=()=>{let e=(0,l.useContext)(h);return e.key===g?e:null},k=()=>(0,l.useContext)(m)},409065:(e,a,i)=>{function l(e,a){return{type:"CHANGE_CAROUSEL_SLOT_INDEX",payload:{id:e,index:a}}}function n(e,a){return{type:"SET_PIN_COMMENTS_DISABLED",payload:{id:e,pinCommentsDisabled:a}}}function t(e){return{type:"PIN_SAVE",payload:e}}function r(e,a){return{type:"PIN_UNSAVE",payload:{id:e,nodeId:a}}}function s(e){return{type:"PIN_SHOW_SUGGESTED_CREATOR_RECS",payload:{id:e,value:!0}}}function d({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!1,nodeId:a}}}function o({id:e,text:a,nodeId:i}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!0,text:a,nodeId:i}}}function u({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!0,nodeId:a}}}function c({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!1,nodeId:a}}}function g(e){return{type:"PIN_SHOW_AD_REASONS_MODAL",payload:{id:e,value:!0}}}function p(e){return{payload:{id:e,value:!1},type:"PIN_SHOW_AD_REASONS_MODAL"}}i.d(a,{Gb:()=>r,I1:()=>d,Ib:()=>u,Ur:()=>t,Vw:()=>s,b9:()=>g,i0:()=>c,mO:()=>n,q1:()=>o,yR:()=>l,yj:()=>p})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61168.pt_BR-7188db3f2eb15511.mjs.map