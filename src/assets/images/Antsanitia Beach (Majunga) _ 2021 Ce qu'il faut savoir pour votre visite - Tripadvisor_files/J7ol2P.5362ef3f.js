(this.$WP=this.$WP||[]).push(["J7ol2P",(e,a)=>{"use strict";var i,n,t,l,r,o,d,u,s,m,c,k,v,p,g,h,f,N,_,b,y,E,V,S,O,x,C,I=()=>{var{localize:e}=_(),[,{uid:a}]=t(s),i=E(),o=V(),[u]=l(y()),m=b(()=>{i({optimusAd:{pageviewUid:a,funnelKey:u,position:"HORIZON_FALLBACK"}})}),c=r(()=>{o({OptimusAdInteraction:{optimusAdClick:{pageviewUid:a,funnelKey:u,position:"HORIZON_FALLBACK"}}})},[o,a,u]),k="/Plus?ik="+u;return n.createElement("div",{ref:m,className:"_2bVMxI72"},n.createElement("div",{className:"ATPmtVtV"},n.createElement("div",{className:"QAKGp-pF"},n.createElement("div",{className:"_2Uw3CZQU"},e.string("plus_home_takeover_horizon_header")),n.createElement("div",{className:d("_2TxMfmHi","i4sk4jWp")},n.createElement(N,{variant:"plus-logo-full-all-white",height:58}),n.createElement(f,{variant:"on-dark-outline",href:k,onClick:c},e.string("plus_home_takeover_learn_more"))),n.createElement("div",{className:d("_2TxMfmHi","_1iRGB-H-")},n.createElement(N,{variant:"plus-logo-full-all-white",height:22}),n.createElement(f,{variant:"on-dark-outline",size:"small",href:k,onClick:c},e.string("plus_home_takeover_learn_more"))))))},T=e=>{var a=e.code;return[{url:`/img2/langs/${a}/horizon/Sky_banner_300x175.jpg`,width:300,height:175},{url:`/img2/langs/${a}/horizon/Sky_banner_768x350.jpg`,width:768,height:350},{url:`/img2/langs/${a}/horizon/Sky_banner_1024x350.jpg`,width:1024,height:350},{url:`/img2/langs/${a}/horizon/Sky_banner_1280x350.jpg`,width:1280,height:350}]},z=()=>{var{localize:e}=_(),{locale:a}=t(m);return n.createElement("a",{href:"https://www.youtube.com/watch?v=bppH2sVd5OM?utm_source=tripadvisor&utm_medium=home&utm_campaign=fallbackhorizon",target:"_blank"},n.createElement(S,{source:T(a),height:"100%",width:"100%",alt:e.string("horizon_watch_the_film")}))},A=({takeoverVariant:e})=>{switch(e){case"Optimus":return n.createElement(I,null);case"Vacations":return n.createElement(z,null);default:return console.error("Missing horizon ad takeover fallback for variant: "+e),null}},w=(e,a)=>e?"DWqsJ0MN":a?"An3ADvD3":"_3hQc_oBM",D=({footer:e=!1})=>{var[a,i]=l(!1),{viewportCategory:r}=t(c),s="MOBILE"===r?"5x1|320x50":"5x1|728x90",m=e?"footer":"horizon",k=v(m),f=p(),{ref:N,id:_,isRendered:b,isEmpty:y}=g(s,m,f,!!e),E=function(e){var[a,i]=l(!1);return o(()=>{if(!u.get("ads.horizonLoaded")){var a=setTimeout(()=>{i(!0),u.set("ads.horizonLoaded",!0)},e);return()=>clearTimeout(a)}i(!0)},[e]),a}(e?0:2e3);return o(()=>{var e=setTimeout(()=>{i(!0)},5e3);return()=>clearTimeout(e)}),n.createElement("div",{className:d("ad",w(k,e))},(b||a)&&y&&!e&&(e=>e?n.createElement(A,{takeoverVariant:e}):n.createElement(h,null))(k),E&&n.createElement("div",{ref:N,id:_,className:d("_2NoPV5rh",{SPPOXG2Y:y})}))},L=["Home","Tourism","ForumHome"],H=["RentalCars","RentalCarsGeo","Articles","ArticlesHome"],j=()=>{var[e]=t(s),{page:a}=e,{userId:n}=t(k),l=function(){var e,[{params:a},{uid:n}]=i.useContext(s),t=a.geoId?a.geoId:1,{locale:l}=i.useContext(m),{id:r,userAgentCategory:o}=i.useContext(c),d="MOBILE"===o?"MOBILE_WEB":"DESKTOP",u={uniqueId:r,puid:n},[k]=x({query:C,variables:{geo:t,localeCode:l.code,platform:d,tracking:u}});return!!(null==k||null==(e=k.data)?void 0:e.sponsoredHome)}(),r=O("horizonAd"),o=!n,d=!!v("horizon");return!!H.includes(a)||(L.includes(a)||r)&&(o||l||d)};return[()=>{(C=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SponsoredGeoQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"localeCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformEnumInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SponsorshipTrackingInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sponsoredHome"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sponsorshipRequest"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"localeCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"localeCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tracking"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ListValue","values":[]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":359}}')).__key=0xce4b51be8a66,e("default",D),e("useHorizonAd",j)},[e=>(i=e,n=e.default,t=e.useContext,l=e.useState,r=e.useCallback,o=e.useEffect),e=>d=e.default,e=>u=e.default,e=>(s=e.Route,m=e.Environment,c=e.Device,k=e.Visitor),e=>v=e.useTakeoverVariant,e=>(p=e.useRefreshKey,g=e.useAd),e=>h=e.default,e=>f=e.default,e=>N=e.default,e=>_=e.useLocalize,e=>b=e.useOnVisible,e=>y=e.uuid,e=>E=e.useImpressionLogger,e=>V=e.useInteractionLogger,e=>S=e.default,e=>O=e.default,e=>x=e.useQuery]]},["cDcdfi","jSLlaY","jaCyxS","2R4xv2","q0TyIl","tV1cF7","2IPQDU","7yGKf-","TkeYrn","0DsHEV","BLrxBS","O-HcBE","30t50h","fsml46","BgJkqv","DY6uxn","5X2em-"]]);
