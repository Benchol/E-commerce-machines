(this.$WP=this.$WP||[]).push(["5-GvUO/vIwuL7",(e,t)=>{"use strict";var s,i,r,a,o,n,d,l,g,c,h,u,p,m,v,f,S,b,y,w,I,E,k,M,C,T,x,D,j,_,A,O,P,L,B,F;function N(e,t){if(null==e)return{};var s,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)s=a[i],t.indexOf(s)>=0||(r[s]=e[s]);return r}function R(e){var t=window.performance;t&&t.mark&&t.mark(e)}var q=["3x1","1x1"],W=[],$=(e,t)=>{R("ias_v_end");var s=function(e,t,s){var i=window.performance;if(i&&i.measure){i.measure("ias_latency","ias_v_start","ias_v_end");var r=i.getEntriesByName("ias_latency")[0];if(r)return r.duration}return null}();if(s){var i={gac:"ias_verify",gaa:"ias_latency",gal:e.toString(),gav:parseInt(s,10).toString(),gass:t},r=new URLSearchParams(i);I(r)}},H="//securepubads.g.doubleclick.net/tag/js/gpt.js",V=["2mdn.net","amazon-adsystem.com","ampproject.org","celtra.com","doubleclick.net","google.com","googletagservices.com","googlesyndication.com","adsafeprotected.com"],z=[{width:300,height:250},{width:300,height:600},{width:160,height:600},{width:728,height:90},{width:970,height:250},{width:550,height:1}],G=[{width:320,height:50},{width:300,height:250}];function U(e,t){globalThis.apstag._Q.push([e,t])}var K=[{width:300,height:250},{width:300,height:600},{width:160,height:600},{width:728,height:90},{width:970,height:250}],Q=[{width:320,height:50},{width:300,height:250}],X=({onDisableTestMode:e})=>s.createElement("div",{className:"_1bKXhj3X"},"Ad test mode enabled",s.createElement("button",{onClick:e,className:"_3r6eBcgt"},"[Disable]")),J=({children:e})=>{var[t,r]=i({}),a=n(()=>({targeting:t,setTargeting:r}),[t]);return s.createElement(O.Provider,{value:a},e)},Z=({children:e})=>e,Y=({children:e})=>{var{browser:t,userAgentCategory:o}=l(g),{debugTool:n}=l(c),{domainName:d}=l(h),[u,p]=i(null),[m,v]=(()=>{var[e,t]=i(!1),s=r(e=>{t(e),S.set("ads.testMode",e)},[]);return a(()=>{var e=!0===S.get("ads.testMode");t(e);var s=S.addListener("ads.testMode",t);return()=>s()},[]),[e,s]})();return a(()=>{var e="MOBILE"===o?window.innerHeight:window.innerHeight/2,s=.01*window.innerHeight,i={userAgentCategory:o,fetchMargin:e+"px",renderMargin:s+"px",browserFamily:t.family,domainName:d};if(m)p(new _(i));else{var r=[];r.push(new x(i)),r.push(new T(i)),p(new j(i,r))}},[t,o,m,d]),s.createElement(L.Provider,{value:u},s.createElement(J,null,n&&s.createElement(P,{testMode:m,onTestModeChange:v}),m&&s.createElement(X,{onDisableTestMode:()=>v(!1)}),s.createElement(B,null,e)))},ee=e=>e.toISOString().substring(0,10),te=()=>{var e,[{page:t,params:s},{uid:r}]=l(u),{browser:o,userAgentCategory:n}=l(g),{sessionId:d}=l(p),{drsInfo:h}=l(c),{hotels:v}=l(m),{targeting:f}=l(O),[S,b]=i(null),y=s.geoId?s.geoId:0,w=s.detailId?s.detailId:0,I={hotelTravelInfo:(null==v?void 0:v.checkInDate)&&v.checkOutDate&&{checkInDate:ee(v.checkInDate),checkOutDate:ee(v.checkOutDate),defaultDates:v.defaultDates}||null,locationId:w||y,pageType:t,browserType:o.family,drs:h?(e=h,e.split("*").map(e=>{var[t,s]=e.split(".");return{space:t,sliceNum:Number.parseInt(s,10)}})):[],globalContextUrlParameters:Object.entries(s).map(([e,t])=>({key:e,value:String(t)})),userAgentCategory:n},[{fetching:k,data:M}]=E({query:F,variables:{pageAdsRequestInput:I}});return a(()=>{var e,t=null==M||null==(e=M.gptInfo)?void 0:e[0];if(!k&&t){var{pageLevelTargeting:s,adBase:i,ppid:a}=t;if(s&&i){var o=Object.fromEntries(s.map(e=>{var{key:t,value:s}=e||{};return t&&s?[t,[...s]]:null}).filter(Boolean)),n=Object.fromEntries(Object.entries(f).map(([e,t])=>[e,Array.isArray(t)?t:[t]]));return b(Object.assign({},o,{},n,{pv_id:[r],sess:[d||null],adBase:i,ppid:a})),()=>{b(null)}}}},[M,k,r,d,f]),S};return e("_",N),[()=>{k=class{constructor({fetchMargin:e="0px",renderMargin:t="0px",scriptSources:s}){this.loadPromise=null,this.fetchMargin=void 0,this.renderMargin=void 0,this.scriptSources=void 0,this.scriptSources=s,this.fetchMargin=e,this.renderMargin=t}getConsent(){return new Promise((e,t)=>b(y.ADVERTISING,()=>e(),()=>t(new Error("Advertising consent declined"))))}observe(e,t="0px"){return new Promise(s=>{var i=new IntersectionObserver(e=>{e.reduce((e,t)=>e||t.isIntersecting,!1)&&(i.disconnect(),s())},{rootMargin:t,threshold:0});i.observe(e)})}loadScripts(){return this.loadPromise||(this.scriptSources,this.loadPromise=this.getConsent().then(()=>{var e=this.scriptSources.map(e=>f(e,"WP"));return Promise.all(e)}).then(()=>{}).catch(e=>(this.loadPromise=null,this.scriptSources,Promise.reject(e)))),this.loadPromise}load(e,t){return t||"undefined"==typeof IntersectionObserver?this.loadScripts():Promise.all([this.observe(e,this.fetchMargin).then(()=>this.loadScripts()),this.observe(e,this.renderMargin).then(()=>console.debug("ScriptLoader:",e,"is in viewport"))])}},M=class{constructor({fetchMargin:e,renderMargin:t,browserFamily:s}){this.slotSubscriptions={},this.subscriptions=[],this.ppid=null,this.scriptLoader=void 0,this.confirmSafeFrame=e=>{try{var t,s=null==e||null==(t=e.slot)?void 0:t.getSlotElementId(),i=document.querySelector(`#${s.split(":").join("\\:")} div[id^="google_ads_iframe"] iframe`);if(!(i&&i instanceof HTMLIFrameElement))return;setTimeout(()=>{var t,s=i.contentDocument;if(s){var r=s.documentElement,a=r&&!!r.getAttribute("amp-version"),o=!!s.getElementById("google_image_div"),n=55978451===(null==e||null==(t=e.slot)?void 0:t.getResponseInformation().advertiserId);if(!(a||o||n)){var d=Array.from(s.scripts).map(e=>e.src.replace(/.*\/\//,"").split(/[/?#]/)[0].split(".").slice(-2).join(".")).filter(e=>-1===V.indexOf(e)).filter(Boolean);d.length&&console.error("Same-domain ad served with third-party scripts",{slotInfo:e.slot.getResponseInformation(),unapprovedDomains:d})}}},1500)}catch(e){}},globalThis.googletag=globalThis.googletag||{cmd:[]},this.scriptLoader=new k({fetchMargin:e,renderMargin:t,scriptSources:[H]}),googletag.cmd.push(()=>{googletag.pubads().setSafeFrameConfig({allowOverlayExpansion:!0,allowPushExpansion:!0,sandbox:"EDGE"!==s}),googletag.pubads().addEventListener("slotOnload",this.confirmSafeFrame),googletag.pubads().disableInitialLoad(),googletag.enableServices()}),this.createEventProxy("slotRenderEnded",e=>({isRendered:!0,isLoaded:!1,isEmpty:55978451===(null==e?void 0:e.advertiserId)||(null==e?void 0:e.isEmpty)})),this.createEventProxy("slotOnload",()=>({isLoaded:!0})),this.createEventProxy("slotVisibilityChanged",e=>({isVisible:!!(null==e?void 0:e.inViewPercentage)}))}createEventProxy(e,t){googletag.cmd.push(()=>{googletag.pubads().addEventListener(e,s=>{var i,r=null==s||null==(i=s.slot)?void 0:i.getSlotElementId(),a=t(s);r&&a&&this.slotSubscriptions[r]&&(this.slotSubscriptions[r](a,e),this.subscriptions.forEach(e=>e()))})})}getSlots(){return googletag.pubadsReady?(googletag.pubads().getSlots()||[]).map(e=>{var{advertiserId:t,creativeId:s,lineItemId:i,campaignId:r}=e.getResponseInformation()||{};return{id:e.getSlotElementId(),targeting:Object.fromEntries(e.getTargetingKeys().map(t=>[t,e.getTargeting(t)])),responseInformation:{isCollapser:t&&55978451===t,advertiserId:t,creativeId:s,lineItemId:i,campaignId:r}}}):[]}getSlot(e){return googletag.pubads().getSlots().find(t=>t.getSlotElementId()===e)}addEventListener(e){return this.subscriptions.push(e),()=>{var t=this.subscriptions.indexOf(e);t>-1&&this.subscriptions.splice(t,1)}}createSlot({id:e,elem:t,size:s,targeting:i,aboveTheFold:r}){return googletag.cmd.push(()=>{if(!this.getSlot(e)){var{adBase:t,ppid:r}=i,a=N(i,["adBase","ppid"]);null!==r&&(googletag.pubads().setPublisherProvidedId(r),this.ppid=r);var o=function(e){return[...e.split("|").map(e=>e.split("x").map(Number)),"fluid"]}(s),n=googletag.defineSlot(t,o,e);if(n){var d;if(null==n.updateTargetingFromMap||n.updateTargetingFromMap(a),!(null==n.getTargetingKeys||null==(d=n.getTargetingKeys())?void 0:d.length))return void this.broadcastEmptySlot(e);n.setForceSafeFrame(!1),n.addService(googletag.pubads()),n.setCollapseEmptyDiv(!0),googletag.display(e)}}}),this.scriptLoader.load(t,r).then(()=>{this.refreshSlot(e,r)}).catch(()=>{this.broadcastEmptySlot(e)}),{addEventListener:t=>(this.slotSubscriptions[e],this.slotSubscriptions[e]=t,()=>{delete this.slotSubscriptions[e]})}}refreshSlot(e,t=!1){this.broadcastRefreshStart(e),googletag.cmd.push(()=>{var t=this.getSlot(e);if(t){var s=()=>{googletag.pubads().refresh([t],{changeCorrelator:!1})};!function(e){var t=e.getSlotElementId(),[,s,i]=t.split(":");return!(q.includes(s)||W.includes(i))}(t)?s():function(e){return new Promise(t=>{R("ias_v_start");var s=e.getSizes().map(e=>e.getWidth&&e.getHeight?`${e.getWidth()}.${e.getHeight()}`:"1.1"),i="https://pixel.adsafeprotected.com/services/pub?"+["anId=930842",`slot={id:${e.getSlotElementId()},ss:[${s.toString()}],p:${e.getAdUnitPath()}}`,`wr=${window.innerWidth}.${window.innerHeight}`,`sr=${window.screen.width}.${window.screen.height}`].join("&"),[r]=e.getTargeting("PageType"),a=setTimeout(()=>{$(!0,r),t()},2e3);fetch(i,{credentials:"same-origin"}).then(e=>e.json()).then(s=>{s.code&&s.message&&(console.error(`Error in IAS response. Code: ${s.code}. Message: ${s.message}`),t()),clearTimeout(a),$(!1,r);var{fr:i,brandSafety:o}=s,{id:n,vw:d}=s.slots.slot;S.get("ads.testMode")||e.setTargeting("fr",i),e.setTargeting("id",n),e.setTargeting("vw",d),e.updateTargetingFromMap(o),t()}).catch(e=>{console.error("Error fetching IAS response. "+e),t()})})}(t).then(s)}})}destroySlot(e){googletag.cmd.push(()=>{var t=this.getSlot(e);t&&(googletag.destroySlots([t]),this.subscriptions.forEach(e=>e()))})}broadcastRefreshStart(e){null==this.slotSubscriptions[e]||this.slotSubscriptions[e]({},"slotRefreshStart")}broadcastEmptySlot(e){null==this.slotSubscriptions[e]||this.slotSubscriptions[e]({isEmpty:!0,isLoaded:!0,isRendered:!0},"forcedEmpty")}},C=class{constructor(e){this.context=void 0,this.config=void 0,this.rubiconSupportedFormats=void 0,globalThis.pbjs=globalThis.pbjs||{que:[]},this.config=e,this.rubiconSupportedFormats="MOBILE"===e.userAgentCategory?G:z,this.cleanupGDCookies()}cleanupGDCookies(){var e=w.get();null!=e&&e!==[]&&Object.entries(e).forEach(e=>{var[t,s]=e;t.match(/^_gd160/)&&"1"===s&&Number(t.split("_gd")[1])<1609e9&&w.remove(t,{path:"",domain:"."+this.config.domainName})})}setContext(e){this.context=e}getScripts(e=!0){return e?["MOBILE"===this.config.userAgentCategory?"//ads.rubiconproject.com/prebid/13406_Mweb_Display.js":"//ads.rubiconproject.com/prebid/13406_Desktop_Display.js"]:[]}preCreateSlot(e){}slotSupportsBidding(e){var t=e.getSizes();return!!Array.isArray(t)&&t.filter(e=>"object"==typeof e&&null!==e&&e.getWidth()&&e.getHeight()).map(e=>({width:e.getWidth(),height:e.getHeight()})).some(e=>this.rubiconSupportedFormats.some(t=>t.width===e.width&&t.height===e.height))}refreshSlot(e,t,s,i){googletag.cmd.push(()=>{var t=this.context.getSlot(e);t&&this.slotSupportsBidding(t)?(()=>{var[e=""]=t.getTargeting("loctype"),[s=""]=t.getTargeting("platform");pbjs.que.push(()=>{pbjs.rp.requestBids({callback:()=>{i()},timeout:2e3,gptSlotObjects:[t],data:{inventory:{loctype:e,platform:s}}})})})():s()})}},T=class extends C{constructor(e){super(e),this.rubiconWrapperScriptLoader=void 0,this.wrapperLoaded=void 0,this.pageViewID=void 0,this.pageCount=void 0,this.wrapperLoaded=!1,this.pageCount=0}getScripts(e=!0){var t=super.getScripts(!1);return this.rubiconWrapperScriptLoader=new k({fetchMargin:this.config.fetchMargin,renderMargin:this.config.renderMargin,scriptSources:["MOBILE"===this.config.userAgentCategory?"//ads.rubiconproject.com/prebid/13406_Mweb_Display.js":"//ads.rubiconproject.com/prebid/13406_Desktop_Display.js"]}),t}preCreateSlot(e){var t,s;super.preCreateSlot(e);var i=null==e||null==(t=e.targeting)||null==(s=t.pv_id)?void 0:s[0];this.pageViewID!==i&&(this.pageCount+=1,this.pageViewID=i)}refreshSlot(e,t,s,i){t&&!this.wrapperLoaded&&this.pageCount<=1?s():this.rubiconWrapperScriptLoader.loadScripts().then(()=>{this.wrapperLoaded=!0,super.refreshSlot(e,t,s,i)})}},A={init(){U("i",arguments)},fetchBids(){U("f",arguments)},setDisplayBids(){},targetingKeys:()=>[],_Q:[]},x=class{constructor(e){this.context=void 0,this.config=void 0,this.amazonSupportedFormats=void 0,this.getScripts=e=>e?["//c.amazon-adsystem.com/aax2/apstag.js"]:[],this.preCreateSlot=e=>{},this.config=e,globalThis.apstag=globalThis.apstag||A,this.amazonSupportedFormats="MOBILE"===e.userAgentCategory?Q:K,apstag.init({pubID:"3940",adServer:"googletag",useSafeFrames:!0})}setContext(e){this.context=e}slotSupportsBidding(e){var t=e.getSizes();return!!Array.isArray(t)&&t.filter(e=>"object"==typeof e&&null!==e&&e.getWidth()&&e.getHeight()).map(e=>({width:e.getWidth(),height:e.getHeight()})).some(e=>this.amazonSupportedFormats.some(t=>t.width===e.width&&t.height===e.height))}refreshSlot(e,t,s,i){googletag.cmd.push(()=>{var t=this.context.getSlot(e);t&&this.slotSupportsBidding(t)?apstag.fetchBids({slots:[{slotID:t.getSlotElementId(),slotName:t.getAdUnitPath(),sizes:t.getSizes().filter(e=>"object"==typeof e&&null!==e&&e.getWidth()&&e.getHeight()).map(e=>[e.getWidth(),e.getHeight()])}],timeout:2e3},e=>{apstag.setDisplayBids(),i()}):s()})}},D=class{constructor(){this.skippedServers=0,this.requestedRefresh=!1,this.bidsFetched=0}},j=class extends M{constructor(e,t){super(e),this.servers=void 0,this.slotStatuses=void 0,this.servers=t,this.slotStatuses=new Map;var s=this.servers.flatMap(e=>(e.setContext(this),e.getScripts(!0)));s.length&&(this.scriptLoader=new k({fetchMargin:e.fetchMargin,renderMargin:e.renderMargin,scriptSources:[H,...s]}))}createSlot(e){return this.servers.forEach(t=>{t.preCreateSlot(e)}),super.createSlot(e)}skipServer(e,t=!1){var s=this.slotStatuses.get(e)||new D;s.skippedServers<this.servers.length-1?(s.skippedServers+=1,this.slotStatuses.set(e,s)):(s.requestedRefresh=!0,this.slotStatuses.set(e,s),super.refreshSlot(e,t))}doRefresh(e,t=!1){var s=this.slotStatuses.get(e)||new D;s.requestedRefresh||(s.bidsFetched+=1,s.bidsFetched<this.servers.length-s.skippedServers?this.slotStatuses.set(e,s):this.getSlot(e)&&(s.requestedRefresh=!0,this.slotStatuses.set(e,s),super.refreshSlot(e,t)))}refreshSlot(e,t=!1){this.slotStatuses.set(e,new D),this.servers.forEach(s=>{s.refreshSlot(e,t,()=>this.skipServer(e,t),()=>this.doRefresh(e,t))})}},_=class e extends M{constructor(e){super(e)}static getAdBase(e){return e.replace(/\.s\//,".test.s/")}createSlot(t){var{id:s,targeting:i}=t,r=N(t,["id","targeting"]);return Object.assign({targeting:i},r),super.createSlot(Object.assign({id:s,targeting:Object.assign({},i,{adBase:e.getAdBase(i.adBase)})},r))}destroySlot(e){super.destroySlot(e)}refreshSlot(e,t=!1){super.refreshSlot(e,t)}},O=o({targeting:{},setTargeting:()=>{}}),P=v.component.onUsage(()=>t("5-GvUO/gmVWZD"),"default"),L=o(null),B=d(Z),(F=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageTargetingQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageAdsRequestInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdContext_PageAdsRequestInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"gptInfo"},"name":{"kind":"Name","value":"AdContext_getPageAdsBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"pageAdsRequestInput"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adBase"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ppid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageLevelTargeting"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":240}}')).__key=0xab2a059eff8f,e({A:L,G:M,P:j,R:C,T:_,_:N,a:x,b:X,c:Y,d:O,e:J,f:"ads.testMode",u:te})},[e=>(s=e.default,i=e.useState,r=e.useCallback,a=e.useEffect,o=e.createContext,n=e.useMemo,d=e.memo,l=e.useContext),e=>(g=e.Device,c=e.Debug,h=e.Environment,u=e.Route,p=e.Visitor,m=e.TravelInfo),e=>(v=e,f=e.importScript),e=>S=e.default,e=>(b=e.requestConsent,y=e.CategoriesEnum),e=>w=e.default,e=>I=e.enqueue,e=>E=e.useQuery]]},["cDcdfi","2R4xv2","pLbCP4","jaCyxS","lMO0v3","vmXh3M","fsml46","5X2em-"]]);
