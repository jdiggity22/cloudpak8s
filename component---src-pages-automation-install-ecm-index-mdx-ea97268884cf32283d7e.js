(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),c=a.n(r),o=a("NmYn"),l=a.n(o),s=a("OKom"),p=a("k4MR"),i=a("TSYQ"),b=a.n(i),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:b()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,c=r.baseUrl,o=r.subDirectory,l=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),c=r===n,o=new RegExp(n+"(?!-)"),s=a.replace(o,r);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(m.b)(v.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},n}(c.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,o=t.frontmatter,i=void 0===o?{}:o,b=t.relativePagePath,d=t.titleType,h=i.tabs,O=i.title,v=i.theme,f=i.description,y=i.keywords,C=n.data.site.pathPrefix,S=C?r.pathname.replace(C,""):r.pathname,k=h?S.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(m.b)(p.a,{tabs:h,homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:y,titleType:d},Object(m.b)(u,{title:c?Object(m.b)(c,null):O,label:"label",tabs:h}),h&&Object(m.b)(N,{slug:S,tabs:h,currentTab:k}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:b})),Object(m.b)(g.a,{pageContext:t,location:r,slug:S,tabs:h,currentTab:k}),Object(m.b)(s.a,null))}},Nh8D:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},s=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,c({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"(19.0.3 UPDATE NEEDED)")),Object(n.b)("h3",null,"Required services"),Object(n.b)("p",null,"Before installing the IBM FileNet Content Manager (ECM), you should have the following pre-requisites in place:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Have privileged access to your DB2 database server. "),Object(n.b)("li",{parentName:"ul"},"Optionally, have access to your LDAP directory server.")),Object(n.b)("p",null,"See the ",Object(n.b)("a",c({parentName:"p"},{href:"/content/automation/shared-services"}),"Shared services")," chapter for details on DB2 or LDAP installation, if needed."),Object(n.b)("h3",null,"Download the ECM PPA"),Object(n.b)("p",null,"Download the following PPA from ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/software/passportadvantage"}),"IBM Passport Advantage")," to your working-directory:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"IBM Cloud Pak for Automation v19.0.1 - Content Manager for Certified Kubernetes Multiplatform Multilingual (CC220ML)")," ")),Object(n.b)("p",null,"The downloaded archive should be named ",Object(n.b)("inlineCode",{parentName:"p"},"ICP4A19.0.1-ecm.tgz"),"."),Object(n.b)("h3",null,"Log in to you OCP cluster"),Object(n.b)("p",null,"See the ",Object(n.b)("a",c({parentName:"p"},{href:"/content/automation/pre-requisites"}),"Prerequisites")," chapter for details on logging in to your OCP cluster."),Object(n.b)("h3",null,"Create the ECM project"),Object(n.b)("p",null,"Create a new OpenShift project for ECM with your desired name, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"ecmproject"),":"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc new-project ecmproject\n")),Object(n.b)("p",null,"Make sure you are working from your newly created ECM project, then grant the tiller server ",Object(n.b)("inlineCode",{parentName:"p"},"edit")," access to current project:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),'oc project ecmproject\noc adm policy add-role-to-user edit "system:serviceaccount:tiller:tiller"\n')),Object(n.b)("h3",null,"Update the Security Context Constraint (SCC)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add privileged access to default service account.  "),Object(n.b)("li",{parentName:"ul"},"The ecm Helm chart uses supplemental groups. You must modify the ecmproject namespace file to include that range of supplemental groups.  ")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc adm policy add-scc-to-user privileged -z default\n\noc edit namespace ecmproject\n")),Object(n.b)("p",null,"While in the editor change this line:   "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"openshift.io/sa.scc.supplemental-groups: 1000250000/10000  ")),Object(n.b)("p",null,"to the value 500/50000 so it looks like this:  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"openshift.io/sa.scc.supplemental-groups: 500/50000  ")),Object(n.b)("p",null,"If the SCC is not applied properly you may get the following error later on:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"forbidden: unable to validate against any security context constraint: [fsGroup: Invalid value: []int64{50000}: 50000 is not an allowed group\n")),Object(n.b)("h3",null,"Push the ECM images to the registry"),Object(n.b)("p",null,"Login to the Docker registry using your correct docker registry url. Example below. If you are running on-premise (i.e. not OpenShift as Managed Service on IBM Cloud) then you may need to precede the docker command with ",Object(n.b)("inlineCode",{parentName:"p"},"sudo"),". If you are running on OpenShift as Managed Service on IBM Cloud you will need to turn on port forwarding as described in ",Object(n.b)("a",c({parentName:"p"},{href:"./shared-services.md"}),"Shared services")," chapter. "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"docker login -u $(oc whoami) -p $(oc whoami -t) docker-registry.default.svc:5000\n")),Object(n.b)("p",null,"Download the ",Object(n.b)("inlineCode",{parentName:"p"},"loadimages.sh")," script to your working directory:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"wget https://raw.githubusercontent.com/icp4a/cert-kubernetes/19.0.1/scripts/loadimages.sh\nchmod +x loadimages.sh\n")),Object(n.b)("p",null,"Load the ecm product binary images:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"./loadimages.sh -p ICP4A19.0.1-ecm.tgz -r docker-registry.default.svc:5000/ecmproject\n")),Object(n.b)("h3",null,"Create the databases"),Object(n.b)("p",null,"Download these files to your working directory on the database server:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/db2/GCDDB.sh"}),Object(n.b)("inlineCode",{parentName:"a"},"GCDDB.sh"))," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/db2/OS1DB.sh"}),Object(n.b)("inlineCode",{parentName:"a"},"OS1DB.sh"))," ")),Object(n.b)("p",null,"Run the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),'## copy the db2 install script\nmkdir -p /data/db2fs\nmkdir -p /data/database/config\n\n## copy the GCDDB.sh and OS1DB.sh into folder /data/database/config\ncp GCDDB.sh /data/database/config\ncp OS1DB.sh /data/database/config\n\nexport CUR_COMMIT=ON\nsu - db2inst1 -c "db2set DB2_WORKLOAD=FILENET_CM"\necho "set CUR_COMMIT=$CUR_COMMIT"\n\nchown db2inst1:db2iadm1 /data/database/config/*.sh\nchmod 755 /data/database/config/*.sh\nchown -R db2inst1:db2iadm1 /data/db2fs\n\n## If you change the database names as the last entry on these lines you will also need to change them in GCD.xml and OBJSTORE.xml later on\nsu - db2inst1 -c "/data/database/config/GCDDB.sh GCDDB"\nsu - db2inst1 -c "/data/database/config/OS1DB.sh OS1DB"\n')),Object(n.b)("h3",null,"Set up the persistent volumes"),Object(n.b)("p",null,"Run the following commands to create the required PV folders in NFS, where ",Object(n.b)("inlineCode",{parentName:"p"},"/data/persistentvolumes/")," is the mounted directory of your NFS server:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"mkdir -p /data/persistentvolumes/cpe/configDropins/overrides\nmkdir -p /data/persistentvolumes/cpe/logs\nmkdir -p /data/persistentvolumes/cpe/cpefnlogstore\nmkdir -p /data/persistentvolumes/cpe/bootstrap\nmkdir -p /data/persistentvolumes/cpe/textext\nmkdir -p /data/persistentvolumes/cpe/icmrules\nmkdir -p /data/persistentvolumes/cpe/asa\n\nchown 50001:50000 /data/persistentvolumes/cpe/configDropins\nchown 50001:50000 /data/persistentvolumes/cpe/configDropins/overrides\nchown 50001:50000 /data/persistentvolumes/cpe/logs\nchown 50001:50000 /data/persistentvolumes/cpe/cpefnlogstore\nchown 50001:50000 /data/persistentvolumes/cpe/bootstrap\nchown 50001:50000 /data/persistentvolumes/cpe/textext\nchown 50001:50000 /data/persistentvolumes/cpe/icmrules\nchown 50001:50000 /data/persistentvolumes/cpe/asa\n\nmkdir -p /data/persistentvolumes/css/CSS_Server/data\nmkdir -p /data/persistentvolumes/css/CSS_Server/temp\nmkdir -p /data/persistentvolumes/css/CSS_Server/log\nmkdir -p /data/persistentvolumes/css/CSS_Server/config\nmkdir -p /data/persistentvolumes/css/indexareas\n\nchown 50001:50000 /data/persistentvolumes/css/CSS_Server/data\nchown 50001:50000 /data/persistentvolumes/css/CSS_Server/temp\nchown 50001:50000 /data/persistentvolumes/css/CSS_Server/log\nchown 50001:50000 /data/persistentvolumes/css/CSS_Server/config\nchown 50001:50000 /data/persistentvolumes/css/indexareas\n\nmkdir -p /data/persistentvolumes/cmis/configDropins/overrides\nmkdir -p /data/persistentvolumes/cmis/logs\n\nchown 50001:50000 /data/persistentvolumes/cmis/configDropins/overrides\nchown 50001:50000 /data/persistentvolumes/cmis/logs\n")),Object(n.b)("p",null,"Obtain the DB2 drivers from your database server installation. Copy them to the PVs. If your database server is local the commands should look like this: "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"cp /opt/ibm/db2/V11.1/java/db2jcc4.jar /data/persistentvolumes/cpe/configDropins/overrides/\ncp /opt/ibm/db2/V11.1/java/db2jcc_license_cu.jar /data/persistentvolumes/cpe/configDropins/overrides/\n")),Object(n.b)("p",null,"Download all the cpe overrides files to your working directory "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/configDropins/overrides/GCD.xml"}),Object(n.b)("inlineCode",{parentName:"a"},"GCD.xml"))," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/configDropins/overrides/OBJSTORE.xml"}),Object(n.b)("inlineCode",{parentName:"a"},"OBJSTORE.xml"))," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/configDropins/overrides/DB2JCCDriver.xml"}),Object(n.b)("inlineCode",{parentName:"a"},"DB2JCCDriver.xml"))," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/configDropins/overrides/ldap_TDS.xml"}),Object(n.b)("inlineCode",{parentName:"a"},"ldap_TDS.xml")),"  ")),Object(n.b)("p",null,"If you changed the database names in the database creation step above, you will also need to change them in GCD.xml and OBJSTORE.xml here  "),Object(n.b)("p",null,"Edit GCD.xml, replacing ",Object(n.b)("inlineCode",{parentName:"p"},"<ip-address>")," with the ip-address of the database server, and possibly the database name.",Object(n.b)("br",{parentName:"p"}),"\n","Edit OBJSTORE.xml, replacing ",Object(n.b)("inlineCode",{parentName:"p"},"<ip-address>")," with the ip-address of the database server, and possibly the database name.\nDB2JCCDriver.xml contains the locations of the db2jcc4.jar and db2jcc_license_cu.jar files.",Object(n.b)("br",{parentName:"p"}),"\n","Edit ldap_TDS.xml, replacing ",Object(n.b)("inlineCode",{parentName:"p"},"<ip-address>")," with the ip-address of the LDAP server.  "),Object(n.b)("p",null,"Then then run the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"cp DB2JCCDriver.xml /data/persistentvolumes/cpe/configDropins/overrides/\ncp GCD.xml /data/persistentvolumes/cpe/configDropins/overrides/\ncp ldap_TDS.xml /data/persistentvolumes/cpe/configDropins/overrides/\ncp OBJSTORE.xml /data/persistentvolumes/cpe/configDropins/overrides/\n")),Object(n.b)("p",null,"Download the cmis overrides files to your working directory. You may get a warning because the same filename is used by cpe.  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cmis/configDropins/overrides/ldap_TDS.xml"}),Object(n.b)("inlineCode",{parentName:"a"},"ldap_TDS.xml")),"    ")),Object(n.b)("p",null,"Edit ldap_TDS.xml, replacing ",Object(n.b)("inlineCode",{parentName:"p"},"<ip-address>")," with the ip-address of the LDAP server",Object(n.b)("br",{parentName:"p"}),"\n","Then then run the following command:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"cp ldap_TDS.xml /data/persistentvolumes/cmis/configDropins/overrides/\n")),Object(n.b)("p",null,"Download the ",Object(n.b)("a",c({parentName:"p"},{href:"/assets/automation/css/cssSelfsignedServerStore"}),Object(n.b)("inlineCode",{parentName:"a"},"cssSelfsignedServerStore"))," file to your working directory then run the following command:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"cp cssSelfsignedServerStore /data/persistentvolumes/css/CSS_Server/data\n")),Object(n.b)("p",null,"Download the PV configuration files to your working directory."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/cpe-pv.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"cpe-pv.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/css/css-pv.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"css-pv.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cmis/cmis-pv.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"cmis-pv.yaml"))," ")),Object(n.b)("p",null,"Edit each file. Replace the placeholder ",Object(n.b)("inlineCode",{parentName:"p"},"<ip-address>")," placeholder with the IP address of NFS server and adjust the persistent volume path if needed."),Object(n.b)("p",null,"Run the following commands to create the PVs:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc apply -f cpe-pv.yaml\noc apply -f css-pv.yaml\noc apply -f cmis-pv.yaml\n")),Object(n.b)("h3",null,"Create secrets"),Object(n.b)("p",null,"The Helm charts requires a secret in order to pull images from docker You might need to change the address of the docker server."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc create secret docker-registry admin.registrykey --docker-server=docker-registry.default.svc:5000 --docker-username=$(oc whoami) --docker-password=$(oc whoami -t) -n ecmproject\n")),Object(n.b)("p",null,"Note that you cannot add the same secret more than once. If you need to delete a secret in order to create a new one, use the following command:  "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc delete secret admin.registrykey -n ecmproject\n")),Object(n.b)("h3",null,"Install the ECM components"),Object(n.b)("p",null,"Download these files to your working directory."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cpe/cpe-values.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"cpe-values.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/css/css-values.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"css-values.yaml"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"/assets/automation/cmis/cmis-values.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"cmis-values.yaml"))," ")),Object(n.b)("p",null,"Download the Helm charts to your working directory:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"wget https://github.com/icp4a/cert-kubernetes/raw/master/CONTENT/helm-charts/ibm-dba-contentservices-3.0.0.tgz\nwget https://github.com/icp4a/cert-kubernetes/raw/master/CONTENT/helm-charts/ibm-dba-contentsearch-3.0.0.tgz\nwget https://github.com/icp4a/cert-kubernetes/raw/master/CONTENT/helm-charts/ibm-dba-cscmis-1.7.0.tgz\n")),Object(n.b)("p",null,"Install the Helm charts of CPE and Content Search:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"helm install ibm-dba-contentservices-3.0.0.tgz --name cpe-prod-release --namespace ecmproject -f cpe-values.yaml\nhelm install ibm-dba-contentsearch-3.0.0.tgz --name css-prod-release --namespace ecmproject -f css-values.yaml\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expose the ACCE console service")),Object(n.b)("p",null,"Download the ",Object(n.b)("a",c({parentName:"p"},{href:"/assets/automation/cpe/cpe-route.yaml"}),Object(n.b)("inlineCode",{parentName:"a"},"cpe-route.yaml"))," file to your working directory and run the following command:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc apply -f cpe-route.yaml\n")),Object(n.b)("p",null,"Find the URL of CPE web service using the command:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get routes\n")),Object(n.b)("p",null,"The URL should be something like: ",Object(n.b)("inlineCode",{parentName:"p"},"http://cpe-prod-release-ibm-dba-contentservices-http-ecmproject.router.default.svc.cluster.local/wsi/FNCEWS40MTOM")),Object(n.b)("p",null,"Edit the file cmis-values.yaml and change the attribute ",Object(n.b)("inlineCode",{parentName:"p"},"cpeURL")," then install the Helm chart of CMIS:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"helm install ibm-dba-cscmis-1.7.0.tgz --name cmis-prod-release --namespace ecmproject -f cmis-values.yaml\n")),Object(n.b)("h3",null,"Open ACCE console in a browser"),Object(n.b)("p",null,"To retrieve the ACCE console service URL, first find the URL of the OCP cluster console:  "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get route -n openshift-console\n\n")),Object(n.b)("p",null,"which will return something like this:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"NAME      HOST/PORT                                   PATH      SERVICES   PORT      TERMINATION          WILDCARD\nconsole   console.apps-cp4a-res.rtp.raleigh.ibm.com             console    https     reencrypt/Redirect   None\n")),Object(n.b)("p",null,"Open the Host/Port in a browser. Select the ecmproject. On the left, select Networking, and the routes. This will give you the base URL for ACCE. Append /acce to that url. That should take you to the ACCE page."),Object(n.b)("p",null,"The user name is ",Object(n.b)("inlineCode",{parentName:"p"},"ceadmin")," and the password is ",Object(n.b)("inlineCode",{parentName:"p"},"Passw0rd"),"."),Object(n.b)("h3",null,"Post-install tasks"),Object(n.b)("p",null,"There is a set of steps you need to execute to complete the installation of CPE."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.install.doc/p8pin328.htm"}),"Create the FileNet P8 domain"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.install.doc/p8pin327.htm"}),"Create the database connection"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.install.doc/p8pin034.htm"}),"Create an initial object store"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSNW2F_5.5.0/com.ibm.p8.ce.admin.tasks.doc/featureaddons/fa_install_addon.htm"}),"Install the necessary add-ons to the object store"),": This step can be done in the previous step while creating the object store. The following add-ons can be activated:\n",Object(n.b)("img",c({parentName:"p"},{src:"/assets/automation/images/ObjectStoreAddOns.jpg",alt:"Add-ons"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",c({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.install/k8s_topics/tsk_configcpe_css.html"}),"Configure CPE for Content Search Service")))),Object(n.b)("p",null,"Here is the complete documentation for post-installation tasks:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.install/k8s_topics/tsk_deploy_postecmdeployk8s.html"}),"Completing post-deployment tasks for IBM FileNet Content Manager")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGLW6_5.5.0/com.ibm.p8toc.doc/p8_worksheet.xls"}),"Installation and Upgrade Worksheet"))),Object(n.b)("h3",null,"Uninstall"),Object(n.b)("p",null,"If needed, run the following steps to uninstall ECM:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"helm delete cpe-prod-release --purge\nhelm delete css-prod-release --purge\nhelm delete cmis-prod-release --purge\n\n# delete the cpe route\noc delete -f cpe-route.yaml\n")),Object(n.b)("p",null,"To delete the persisted data of the release, you can delete the PVCs using the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc delete pvc cmis-cfgstore-pvc\noc delete pvc cmis-logstore-pvc\noc delete pvc cpe-bootstrap-pvc\noc delete pvc cpe-cfgstore-pvc\noc delete pvc cpe-filestore-pvc\noc delete pvc cpe-fnlogstore-pvc\noc delete pvc cpe-icmrules-pvc\noc delete pvc cpe-logstore-pvc\noc delete pvc cpe-textext-pvc\noc delete pvc cs-customstore-pvc\noc delete pvc css-cfgstore-pvc\noc delete pvc css-indexstore-pvc\noc delete pvc css-logstore-pvc\noc delete pvc css-tempstore-pvc\n\noc delete -f cpe-pv.yaml\noc delete -f css-pv.yaml\noc delete -f cmis-pv.yaml  \n")),Object(n.b)("p",null,"You can delete the Docker secret"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc delete secret admin.registrykey -n ecmproject\n")),Object(n.b)("p",null,"Ask your database administrator to delete the db2 instances."),Object(n.b)("h3",null,"Troubleshooting"),Object(n.b)("p",null,"Check the pods for the ecmproject. This will show the overall health."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get pods -n ecmproject\n")),Object(n.b)("p",null,"Common problems:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The registry might have run out of space. "),Object(n.b)("li",{parentName:"ul"},"Check that you’re pulling from the docker registry that you uploaded to."),Object(n.b)("li",{parentName:"ul"},"Review the security secret. "),Object(n.b)("li",{parentName:"ul"},"Docker might be configured incorrectly.  ")),Object(n.b)("p",null,"Make sure all five images were uploaded correctly. Check for errors in the ",Object(n.b)("inlineCode",{parentName:"p"},"./loadimages.sh")," step earlier.   "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc get imagestreams -n ecmproject\n")),Object(n.b)("p",null,"Use the oc describe pod to get a better idea of what failed:   "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc describe pod <pod name> -n ecmproject\n")),Object(n.b)("p",null,"Run oc logs to view the pod’s log files"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"oc logs <pod name> -n ecmproject\n\n")))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-automation-install-ecm-index-mdx-ea97268884cf32283d7e.js.map