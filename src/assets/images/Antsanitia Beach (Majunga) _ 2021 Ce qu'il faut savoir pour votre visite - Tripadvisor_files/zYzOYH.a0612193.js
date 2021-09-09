(this.$WP=this.$WP||[]).push(["zYzOYH",(e,i)=>{"use strict";var a,n,t,l,d,s,c,o,u,k,m,r,v,b,p,N,y,S=e=>{var i=({variables:i})=>String(i.objectId)===String(e.objectId)&&i.objectType===e.objectType?"invalidateAndRefetch":"validate",[{data:a,fetching:n,error:t}]=b({query:p,variables:{socialObjects:[e]},executeWhen:"afterInvalidation"},{addLikeV2:i,deleteLikeV2:i});return!n&&!t&&a&&a.socialStatistics&&a.socialStatistics.length&&a.socialStatistics[0]||null},j=({item:e,socialObject:i,onClick:n})=>{var t,b,[,p]=d(N),[,j]=d(y),[,{uid:f}]=a.useContext(u),{userId:O}=a.useContext(k),[T]=a.useContext(c),I=r(),V=m(),[g,L]=a.useState(null),D=a.useMemo(()=>i||{objectType:v[e.__typename],objectId:String(e.id)},[i,e]),h=(null==(t=e.socialStatistics)?void 0:t.isLiked)||!1,_=(null==(b=e.socialStatistics)?void 0:b.likeCount)||0,C=S(D);a.useEffect(()=>{L(null)},[C]);var E=s(h,(C||{}).isLiked),F=s(_,(C||{}).likeCount);E=null===g?E:g;var x=a.useCallback(()=>!0===E?j(D):p(D),[E,D,j,p]),A=a.useCallback(()=>e=>{var i;"NO_PERMISSION"===(null==(i=e.addLike)?void 0:i.statusType)&&T({node:a.createElement(o,null,a.createElement(l,{id:"social_no_permission"})),timeout:8e3})},[T]);return[a.useCallback(()=>{V({flowOrigin:"login",pid:40469}).then(()=>{n&&n();var e={actorUserId:O,uid:f};I({UgcDetail:!0===E?{unhelpful:e}:{helpful:e}}),L(!E)}).then(x).then(A)},[E,L,x,A,V,I,n,O,f]),!0===E,F||0]},f=({item:e,socialObject:i,onClick:d})=>{var[s,c]=j({item:e,socialObject:i,onClick:d});return a.createElement("div",{className:n("_1HbRvLf1",{_1N34czHq:c}),onClick:s},a.createElement("span",{className:"KGnE3rho"},a.createElement(t,{name:"thumbs-up",size:20})),a.createElement("span",{className:"_3yWf0wx6"},a.createElement(l,{id:"social_Helpful"})))};return[()=>{(p=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsLiked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"socialObjects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialObjectInternalInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"socialStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"socialObjects"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLiked"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"likeCount"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":149}}')).__key=36984903764013,(N=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddLikeLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialObjectTypeInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"addLike"},"name":{"kind":"Name","value":"addLikeV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"socialObject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"objectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":197}}')).__key=32993644241652,(y=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLikeLithium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialObjectTypeInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"deleteLike"},"name":{"kind":"Name","value":"deleteLikeV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"socialObject"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"objectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":206}}')).__key=0xa08928ec8bbe,e("default",f),e({useLikeAction:j,useUpdatedLikeStats:S})},[e=>a=e,e=>n=e.default,e=>t=e.default,e=>l=e.default,e=>d=e.useMutation,e=>s=e.default,e=>(c=e.Toast,o=e.ToastItem),e=>(u=e.Route,k=e.Visitor),e=>m=e.default,e=>r=e.useInteractionLogger,e=>v=e.SocialObjectTypeMap,e=>b=e.useInvalidatableQuery]]},["cDcdfi","jSLlaY","pyY-iJ","0DsHEV","5X2em-","XDyWKx","Q7TAd7","2R4xv2","mv7yXI","fsml46","CXMmrT","OnmvvE"]]);
