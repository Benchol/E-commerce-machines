(this.$WP=this.$WP||[]).push(["JJl9vq",(e,t)=>{"use strict";var r,n,a,l,o,i,c,m,s,u,d,k,C=({model:e})=>{var{commerceTrackingUrl:t,link:n}=e,{text:o,url:s,trackingContext:u}=m({internalOrExternalLink:n}),{trackClick:d}=a({clientContext:u}),k=r.useCallback(()=>(d(),!1),[d]),{viewportCategory:C}=r.useContext(c),v="MOBILE"===C?"_self":"_blank";return o&&s?r.createElement("div",{"data-automation":"AppPresentation_TertiaryCommerceButton"},r.createElement(l,{size:"small",variant:"tertiary-commerce",href:s,target:v,onClick:k},r.createElement(i,{model:o}))):null},v=({model:e})=>{var{commerceTrackingUrl:t,link:n}=e,{text:l,url:c,isUrlSetForHumans:m,trackingContext:u}=s(n),{trackClick:d}=a({clientContext:u,clientParameter:JSON.stringify({commerceUrl:c})}),k=r.useCallback(()=>(d(),!1),[d]);return l&&m?r.createElement("div",{"data-automation":"AppPresentation_BorderlessButtonLink"},r.createElement(o,{variant:"primary",href:c||"#",rel:"noopener",target:"_self",onClick:k},r.createElement(i,{model:l}))):null},E=({model:e})=>{var{firstCommerceButton:t,secondCommerceButton:n,singleButton:a}=e;return r.createElement("div",{"data-automation":"AppPresentation_Buttons"},t&&r.createElement(u,{model:t}),n&&r.createElement(u,{model:n}),a&&r.createElement(d,{model:a}))};return[()=>{u=n(C),d=n(v),k=n(E),e("default",k)},[e=>r=e,e=>(n=e.FusionComponent,a=e.useTracking),e=>(l=e.default,o=e.BorderlessButtonLink),e=>i=e.default,e=>c=e.Device,e=>(m=e.deriveLinkInfo,s=e.useDecodedInternalOrExternalLinkInfo)]]},["cDcdfi","PEYes_","7yGKf-","XNYdwH","2R4xv2","1O47Wa"]]);
