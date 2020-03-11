(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),i=a.n(o),r=a("NmYn"),s=a.n(r),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},d=a("pEPl"),O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===n,r=new RegExp(n+"(?!-)"),l=a.replace(r,o);return Object(m.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(g.Link,{className:v.link,to:""+l},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},o))))))},n}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=b.tabs,O=b.title,g=b.theme,v=b.description,y=b.keywords,B=n.data.site.pathPrefix,M=B?o.pathname.replace(B,""):o.pathname,I=d?M.split("/").filter(Boolean).slice(-1)[0]||s()(d[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:g,pageTitle:O,pageDescription:v,pageKeywords:y,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):O,label:"label",tabs:d}),d&&Object(m.b)(w,{slug:M,tabs:d,currentTab:I}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:o,slug:M,tabs:d,currentTab:I}),Object(m.b)(l.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},wmWH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},l=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution overview"),Object(n.b)("p",null,"Digital business automation (DBA) allows an organization to improve its operations by streamlining the way people participate in business processes and workflows, automate repeatable decisions, and provide business users with the ability to edit and change the business logic involved in these business processes. DBA projects also aim to make documents easy to store and retrieve, digitize document content, such as with optical character recognition (OCR), and automate data entries with software robots, also referred to as robotic process automation."),Object(n.b)("p",null,"The IBM Cloud Pak for Automation offers a software platform to develop, deploy, run and manage your digital business automation projects, using the capabilities shown in the following digram: "),Object(n.b)("img",{src:"/assets/automation/images/cp4a.jpg",alt:"overview"}),Object(n.b)("p",null,"The goal of the following chapters is to detail the install process for the components of the cloud pak (specifically version 19.0.3) that are containerized and run in an OpenShift cluster.\nThese components are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-ums"}),"IBM User Management Services")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-bas"}),"IBM Business Automation Studio")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-bai"}),"IBM Business Automation Insights")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-ban"}),"IBM Business Automation Navigator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-ecm"}),"IBM FileNet Content Manager")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-aws"}),"IBM Automation Workstream Services")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-aca"}),"IBM Business Automation Content Analyzer")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-odm"}),"IBM Operational Decision Manager")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/content/automation/install-adw"}),"IBM Automation Digital Worker"))),Object(n.b)("p",null,"The install process is performed through an Operator, which configuration is described ",Object(n.b)("a",i({parentName:"p"},{href:"/content/automation/install-operator"}),"here")),Object(n.b)("p",null,"Note that these install instructions have been tested on an OpenShift 4.2 cluster, using images from the Entitlement Registry for the IBM Cloud Pak for Automation on ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-automation-f8084c28-d609-4a7a-bfb7-569e79cb9e72-global"}),"IBM Cloud"),"."),Object(n.b)("p",null,"For more information, visit:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/welcome/kc_welcome_dba_distrib.html"}),"IBM Cloud Pak for Automation documentation")," in the IBM Knowledge Center."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/dba/reference-architecture"}),"Digital business automation reference architecture")," in the IBM Architecture Center."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/denim-compute"}),"Denim Compute DBA reference implementation")," in GitHub.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-introduction-index-mdx-57c485ca2d9cc512dfe2.js.map