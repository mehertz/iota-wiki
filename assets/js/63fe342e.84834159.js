"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11246],{10424:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(31137),l=n(71871),s=n(48235),u=["components"],c={title:"Create a Private Tangle",sidebar_label:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},d=void 0,p={unversionedId:"decentralized_identifiers/private_tangle",id:"decentralized_identifiers/private_tangle",isDocsHomePage:!1,title:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",source:"@site/external/identity.rs/documentation/docs/decentralized_identifiers/private_tangle.mdx",sourceDirName:"decentralized_identifiers",slug:"/decentralized_identifiers/private_tangle",permalink:"/identity.rs/decentralized_identifiers/private_tangle",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/decentralized_identifiers/private_tangle.mdx",tags:[],version:"current",frontMatter:{title:"Create a Private Tangle",sidebar_label:"Create a Private Tangle",description:"Create a Private Tangle using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},sidebar:"docs",previous:{title:"Resolve a DID history",permalink:"/identity.rs/decentralized_identifiers/resolve_history"},next:{title:"Overview",permalink:"/identity.rs/verifiable_credentials/overview"}},h=[{value:"Example",id:"example",children:[{value:"Account Module (Recommended)",id:"account-module-recommended",children:[],level:3},{value:"Low-level API",id:"low-level-api",children:[],level:3}],level:2}],v={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This example shows how you can create a DID on a private tangle. You can run it together with a local ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/welcome"},"Hornet node"),"."),(0,i.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,i.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_config\n\nuse identity::account::Account;\nuse identity::account::AccountStorage;\nuse identity::account::AutoSave;\nuse identity::account::IdentityCreate;\nuse identity::account::IdentityState;\nuse identity::account::Result;\nuse identity::iota::IotaDID;\nuse identity::iota::Network;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Set-up for private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let mut network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082/identity-resolver`\n  network.set_explorer_url("https://explorer.iota.org/devnet/identity-resolver".parse()?)?;\n\n  // In a locally running one-click tangle, this would often be `http://127.0.0.1:14265/`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  // Create a new Account with explicit configuration\n  let account: Account = Account::builder()\n    .autosave(AutoSave::Never) // never auto-save. rely on the drop save\n    .autosave(AutoSave::Every) // save immediately after every action\n    .autosave(AutoSave::Batch(10)) // save after every 10 actions\n    .dropsave(false) // save the account state on drop\n    .milestone(4) // save a snapshot every 4 actions\n    .storage(AccountStorage::Memory) // use the default in-memory storage adapter\n    // configure a mainnet Tangle client with node and permanode\n    .client(Network::Mainnet, |builder| {\n      builder\n        // Manipulate this in order to manually appoint nodes\n        .node("https://chrysalis-nodes.iota.org")\n        .unwrap() // unwrap is safe, we provided a valid node URL\n        // Set a permanode from the same network (Important)\n        .permanode("https://chrysalis-chronicle.iota.org/api/mainnet/", None, None)\n        .unwrap() // unwrap is safe, we provided a valid permanode URL\n    })\n    // Configure a client for the private network, here `dev`\n    // Also set the URL that points to the REST API of the node\n    .client(network.clone(), |builder| {\n      // unwrap is safe, we provided a valid node URL\n      builder.node(private_node_url).unwrap()\n    })\n    .build()\n    .await?;\n\n  // Create an Identity specifically on the devnet by passing `network_name`\n  // The same applies if we wanted to create an identity on a private tangle\n  let id_create = IdentityCreate::new().network(network_name)?;\n\n  // Create a new Identity with the network name set.\n  let identity: IdentityState = match account.create_identity(id_create).await {\n    Ok(identity) => identity,\n    Err(err) => {\n      eprintln!("[Example] Error: {:?} {}", err, err.to_string());\n      eprintln!("[Example] Is your Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n  let iota_did: &IotaDID = identity.try_did()?;\n\n  // Prints the Identity Resolver Explorer URL, the entire history can be observed on this page by "Loading History".\n  println!(\n    "[Example] Explore the DID Document = {}{}",\n    network.explorer_url().expect("no explorer url was set").to_string(),\n    iota_did.to_string()\n  );\n\n  Ok(())\n}\n'),(0,i.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes a DID Document\n//! to a private tangle.\n//! It can be run together with a local hornet node.\n//! Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n//! for setup instructions.\n//!\n//! cargo run --example private_tangle\n\nuse identity::iota::ClientBuilder;\nuse identity::iota::IotaDID;\nuse identity::iota::Network;\nuse identity::iota::Receipt;\nuse identity::iota::TangleRef;\nuse identity::prelude::*;\n\n#[tokio::main]\npub async fn main() -> Result<()> {\n  // Set-up for private Tangle\n  // You can use https://github.com/iotaledger/one-click-tangle for a local setup.\n  // The `network_name` needs to match the id of the network or a part of it.\n  // As an example we are treating the devnet as a private tangle, so we use `dev`.\n  // When running the local setup, we can use `tangle` since the id of the one-click\n  // private tangle is `private-tangle`, but we can only use 6 characters.\n  // Keep in mind, there are easier ways to change to devnet via `Network::Devnet`\n  let network_name = "dev";\n  let mut network = Network::try_from_name(network_name)?;\n\n  // If you deployed an explorer locally this would usually be `http://127.0.0.1:8082/identity-resolver`\n  network.set_explorer_url("https://explorer.iota.org/devnet/identity-resolver".parse()?)?;\n\n  // In a locally running one-click tangle, this would often be `http://127.0.0.1:14265/`\n  let private_node_url = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n  let client = ClientBuilder::new()\n    .network(network.clone())\n    .node(private_node_url)?\n    .build()\n    .await?;\n\n  // Generate a new Ed25519 public/private key pair.\n  let keypair: KeyPair = KeyPair::new_ed25519()?;\n\n  // Create a DID with the network set explicitly.\n  let mut document: IotaDocument = IotaDocument::new_with_options(&keypair, Some(client.network().name()), None)?;\n\n  // Sign the DID Document with the default authentication key.\n  document.sign(keypair.private())?;\n\n  // Publish the DID Document to the Tangle.\n  let receipt: Receipt = match client.publish_document(&document).await {\n    Ok(receipt) => receipt,\n    Err(err) => {\n      eprintln!("Error > {:?} {}", err, err.to_string());\n      eprintln!("Is your private Tangle node listening on {}?", private_node_url);\n      return Ok(());\n    }\n  };\n\n  println!("Publish Receipt > {:#?}", receipt);\n\n  // Prints the Identity Resolver Explorer URL, the entire history can be observed on this page by "Loading History".\n  let iota_did: &IotaDID = document.did();\n\n  println!(\n    "[Example] Explore the DID Document = {}{}",\n    network.explorer_url().expect("no explorer url was set").to_string(),\n    iota_did.to_string()\n  );\n\n  Ok(())\n}\n')),(0,i.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, Config, Document, KeyPair, KeyType, Network} from \'@iota/identity-wasm\';\n\n/**\n    This example shows how a DID document can be created on a private tangle.\n    It can be run together with a local hornet node.\n    Refer to https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net\n    for setup instructions.\n**/\nasync function createIdentityPrivateTangle(restURL, networkName) {\n    // This name needs to match the id of the network or part of it.\n    // Since the id of the one-click private tangle is `private-tangle`\n    // but we can only use 6 characters, we use just `tangle`.\n    const network = Network.try_from_name(networkName || "tangle");\n\n    // Generate a new ed25519 public/private key pair.\n    const key = new KeyPair(KeyType.Ed25519);\n\n    // Create a DID with the network set explicitly.\n    // This will result in a DID prefixed by `did:iota:tangle`.\n    const doc = new Document(key, network.toString());\n\n    // Sign the DID Document with the generated key.\n    doc.sign(key);\n\n    // Create a client configuration and set the custom network.\n    const config = new Config();\n    config.setNetwork(network);\n\n    // This URL points to the REST API of the locally running hornet node.\n    config.setNode(restURL || "http://127.0.0.1:14265/");\n\n    // Create a client instance from the configuration to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    // Publish the Identity to the IOTA Network, this may take a few seconds to complete Proof-of-Work.\n    const receipt = await client.publishDocument(doc.toJSON());\n\n    // Make sure the DID can be resolved on the private tangle\n    const resolved = await client.resolve(doc.id.toString());\n\n    console.log(`Published the DID document to the private tangle:`);\n    console.log(resolved);\n\n    // Return the results.\n    return { key, resolved, receipt };\n}\n\nexport {createIdentityPrivateTangle};\n'))))}m.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(74034),r=n(67294),i=n(5730),o=n(54179);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3978),u=n(86010),c="tabItem_1uMI";function d(e){var t,n,a,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,h=e.groupId,v=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(t=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),k=w.tabGroupChoices,b=w.setTabGroupChoices,_=(0,r.useState)(f),I=_[0],D=_[1],T=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=k[h];null!=C&&C!==I&&g.some((function(e){return e.value===C}))&&D(C)}var A=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==I&&(x(t),D(a),null!=h&&b(h,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},v)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":I===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:A,onClick:A},null!=n?n:t)}))),i?(0,r.cloneElement)(m.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a}}]);