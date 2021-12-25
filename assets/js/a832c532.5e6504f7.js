"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38027],{37319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(66816),s=n(71871),l=["components"],u={keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},c="Function Results",d={unversionedId:"guide/schema/results",id:"guide/schema/results",title:"Function Results",description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",source:"@site/external/wasp/documentation/docs/guide/schema/results.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/results",permalink:"/smart-contracts/guide/schema/results",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/results.mdx",tags:[],version:"current",frontMatter:{keywords:["results","function","user function","error message","implementations","mandatory parameter","immutable state","definition"],description:"The optional `results` subsection contains field definitions for each of the results a function produces. The layout of the field definitions is identical to that of the state field definitions",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Parameters",permalink:"/smart-contracts/guide/schema/params"},next:{title:"Thunk Functions",permalink:"/smart-contracts/guide/schema/thunks"}},f=[],m={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-results"},"Function Results"),(0,o.kt)("p",null,"The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," subsection contains field definitions for each of the results a\nfunction produces. The layout of the field definitions is identical to that of\nthe ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/state"},"state")," field definitions."),(0,o.kt)("p",null,"The schema tool will automatically generate a mutable structure with member variables for\nproxies to each result variable in the results map. The user will be able to set the\nresult variables through this structure, which is passed to the function."),(0,o.kt)("p",null,"When this subsection is empty, or completely omitted, no structure will be generated or\npassed to the function."),(0,o.kt)("p",null,"For example, here is the structure generated for the mutable results for the ",(0,o.kt)("inlineCode",{parentName:"p"},"getFactor"),"\nfunction:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MutableGetFactorResults struct {\n    id int32\n}\n\nfunc (s MutableGetFactorResults) Factor() wasmlib.ScMutableInt64 {\n    return wasmlib.NewScMutableInt64(s.id, idxMap[IdxResultFactor])\n}\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct MutableGetFactorResults {\n    pub(crate) id: i32,\n}\n\nimpl MutableGetFactorResults {\n    pub fn factor(&self) -> ScMutableInt64 {\n        ScMutableInt64::new(self.id, idx_map(IDX_RESULT_FACTOR))\n    }\n}\n"))),(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class ImmutableMemberParams extends wasmlib.ScMapID {\n    address(): wasmlib.ScImmutableAddress {\n        return new wasmlib.ScImmutableAddress(this.mapID, sc.idxMap[sc.IdxParamAddress]);\n    }\n\n    factor(): wasmlib.ScImmutableInt64 {\n        return new wasmlib.ScImmutableInt64(this.mapID, sc.idxMap[sc.IdxParamFactor]);\n    }\n}\n")))),(0,o.kt)("p",null,"Note that the schema tool will also generate an immutable version of the structure,\nsuitable for accessing the results after calling this smart contract function."),(0,o.kt)("p",null,"In the next section we will look at how so-called ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/thunks"},"thunk functions"),"\nencapsulate access and parameter checking and set up the type-safe function-specific\ncontexts."))}p.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(83117),a=n(67294),o=n(5730),i=n(54179);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(59137),u=n(86010),c="tabItem_1uMI";function d(e){var t,n,o,i=e.lazy,d=e.block,f=e.defaultValue,m=e.values,p=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),k=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,a.useState)(y),I=x[0],O=x[1],E=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var P=k[p];null!=P&&P!==I&&v.some((function(e){return e.value===P}))&&O(P)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==I&&(N(t),O(r),null!=p&&T(p,r))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:S,onClick:S},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function f(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);