"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56987],{46075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),c=n(66816),i=n(71871),u=["components"],l={keywords:["Smart Contracts","withdraw","transfer","chain","Rust","Solo"],description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",image:"/img/logo/WASP_logo_dark.png"},s="How to Withdraw From a Chain",d={unversionedId:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",id:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",title:"How to Withdraw From a Chain",description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","withdraw","transfer","chain","Rust","Solo"],description:"The `withdraw` endpoint sends funds owned by the callee to their L1 address.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How to Deposit to a Chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},next:{title:"View Account Balances",permalink:"/smart-contracts/guide/core_concepts/accounts/view-account-balances"}},p=[],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-withdraw-from-a-chain"},"How to Withdraw From a Chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," endpoint sends funds owned by the callee to their L1 address."),(0,o.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain to wallet\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name)\n_, err := chain.PostRequestSync(req.WithIotas(1), wallet)\nrequire.NoError(t, err)\n"))),(0,o.kt)(i.Z,{value:"soloctx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to wallet\nw := coreaccounts.ScFuncs.Withdraw(ctx.Sign(wallet))\nw.Func.TransferIotas(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nlet w = coreaccounts::ScFuncs::withdraw(ctx);\nw.func.transfer_iotas(1).post_to_chain(chainID);\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nw := coreaccounts.ScFuncs.Withdraw(ctx)\nw.Func.TransferIotas(1).PostToChain(chainID)\n")))))}h.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(83117),a=n(67294),o=n(5730),c=n(54179);var i=function(){var e=(0,a.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(59137),l=n(86010),s="tabItem_1uMI";function d(e){var t,n,o,c=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,f=e.className,w=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=w.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=w[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,T=y.setTabGroupChoices,x=(0,a.useState)(g),O=x[0],E=x[1],N=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=k[h];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&E(S)}var _=function(e){var t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==O&&(C(t),E(r),null!=h&&T(h,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);