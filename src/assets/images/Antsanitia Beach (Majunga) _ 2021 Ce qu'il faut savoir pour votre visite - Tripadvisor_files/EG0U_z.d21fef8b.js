(this.$WP=this.$WP||[]).push(["EG0U_z",(e,t)=>{"use strict";var a,l,n,r,i,c,o,m,d,s,u,E,k,p,v,C=({model:e})=>{switch(e.__typename){case"AppPresentation_VerticalMerchandisingCard":return a.createElement(E,{model:e});default:return a.createElement(d,{typename:e.__typename})}},b=({model:e})=>{var{content:t}=e,{trackClick:l}=s({clientContext:"shelfScroll"});return t&&a.createElement(u,{size:"medium",onScrolled:l},t.map(e=>{var t;return e&&a.createElement(k,{model:e,key:null==(t=e.saveId)?void 0:t.id})}))},g=({model:e})=>{var{activeTabIndex:t,clusterId:m,sectionTitle:d,showMore:u,tabs:E}=e,{url:k,text:v,trackingContext:C}=u?c(u):{},{trackClick:b}=s(),[g,_]=a.useState(null!==t?t:0),f=a.useCallback(()=>{b({clientContext:C})},[b,C]),y=a.useCallback(e=>{_(e),b({clientContext:"tabClick",clientParameter:e.toString()})},[_,b]),h=null!=m?m:"TabbedSection",x=e=>`${h}-tab-${String(e)}`,S=e=>`${h}-tabpanel-${String(e)}`;return a.createElement(a.Fragment,null,a.createElement("div",{className:"_7eueBqz7"},d&&a.createElement(l,{variant:"title-03",marginBottom:"spacing-01"},a.createElement(o,{model:d})),null!=k&&v&&a.createElement("div",{className:"_3_5QvE9U"},a.createElement(n,{href:k,onClick:f,target:"_blank"},a.createElement(o,{model:v})))),E&&a.createElement(a.Fragment,null,a.createElement(r,{value:g,onChange:y},E.filter(Boolean).map(({title:e},t)=>a.createElement(i,{key:t,value:t,id:x(t),ariaControls:S(t)},e&&a.createElement(o,{model:e})))),a.createElement("div",{className:"_3LPoHICW"},E.filter(Boolean).map((e,t)=>a.createElement("div",{key:t,role:"tabpanel",id:S(t),"aria-labelledby":x(t),className:t!==g?"_13wxOgoV":void 0},a.createElement(p,{model:e}))))))};return[()=>{k=m(C),p=m(b),v=m(g),e("default",v)},[e=>a=e,e=>l=e.default,e=>n=e.BorderlessButtonLink,e=>(r=e.TabBar,i=e.Tab),e=>c=e.deriveLinkInfoFromInternalLink,e=>o=e.default,e=>(m=e.FusionComponent,d=e.APSUnsupportedType,s=e.useTracking),e=>u=e.Carousel,e=>E=e.VerticalCardAdapter]]},["cDcdfi","VP50Wc","7yGKf-","1Oxbni","1O47Wa","XNYdwH","PEYes_","1weFyZ","3xStiR"]]);
