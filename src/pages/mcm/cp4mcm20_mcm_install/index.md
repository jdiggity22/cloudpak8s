---
title: Cloud Pack for MultiCloud Management 2.0 - Installation Guide
description: Installation guide for installing CP4MCM 2.0 core components
keywords: 'ibm,install,mcm, cp4mcm'
---

<PageDescription>

In this section we will walk through the installation of the Cloud Pak for Multicloud Management 2.0. This document is specifically written for installations on Red Hat OpenShift 4.x running on an x86 architecture. The purpose of this document is to be agnostic. In other words.... MCM requires OpenShift 4.x to be installed we don't care if it is on-prem or in the cloud or bare-metal or virtual machines. In the sections below we will discuss the Online vs Offline install, both of which are very similar with differences in the location of the MCM installation images. Please review the Configuring your installation section to understand the available installation options prior to installation.

</PageDescription>

<AnchorLinks>
  <AnchorLink>Configuring your installation</AnchorLink>
  <AnchorLink>Offline Installation</AnchorLink>
  <AnchorLink>Online Installation</AnchorLink>
  <AnchorLink>Uninstall</AnchorLink>
</AnchorLinks>

<InlineNotification>

**Update:** This document was recently updated to include Cloud Pak for MultiCloud Mangement v2.0

</InlineNotification>

## Prerequisites

This document does not describe how to install or configure the underlying OpenShift platform. So prior to installing make sure you have a working OpenShift cluster with the required capacity.

- Check the requirements doc to make sure you have size your cluster appropriately and you have capacity
- For offline installs make sure you have downloaded the Cloud Pak for Multicloud Management Passport Advantage Archive (PPA) file (see requirements) and copied it to the installation server
- For online installs make sure you have an entitlement key from [MyIBM Container Software Library](https://myibm.ibm.com/products-services/containerlibrary) to access the IBM Entitled Docker Registry 
- The installation is performed from the Command line (CLI) so you will need the required CLI tools to interface with the cluster. Instructions on setting up the required CLI tools here: https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html
- Offline installation will require the docker client install on the installation server

**Common Passport Advantage Part Numbers**
- **CC5W4EN** - IBM Cloud Pak for Multicloud Management Core 1.3 Kubernetes image for AMD64
- **CC4L8EN** - IBM Cloud Pak for Multicloud Management Core 1.2 Kubernetes image for AMD64

## Configuring your installation

This section will attempt to describe the options available for the MCM Installation.



## Offline Installation

**1.** Login to the OpenShift Install server.

**11.** Start the installation (this can run for ~30-45min)

<Tabs>

<Tab label="CloudPak v1.3">

```
sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.5 install-with-openshift
```

</Tab>
<Tab label="CloudPak v1.2">

```
sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.3 install-with-openshift
```

</Tab>

</Tabs>

<InlineNotification>

**Note:** The command above will fail if you have spaces in your directory path. Run `pwd` to verify your path and remove spaces, then re-run installation command.

</InlineNotification>

**12.** Connect to the MCM hub console using the `icp-console` route defined in OCP. Use the `oc get routes -A` command to get the domain. You can access the MCM Console via a browser with the icp-console domain and the credentials you specified in the config.yaml.



## Online Installation

**1.** Log in to [MyIBM Container Software Library](https://myibm.ibm.com/products-services/containerlibrary) with the IBMid and password that are associated with the entitled software.
In the Entitlement keys section, copy the entitlement key. This key will be used in the steps to follow.

**2.** Authenticate to the OpenShift server where you would like to install MCM (these can be copied from the OpenShift Console UI)

```bash
oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>
```

**3**. Create a namespace for the Cloud Pak installation

```
oc new-project cp4mcm
```

**3.** Create a Kubernetes Docker-registry secret in your IBM Cloud Pak for Multicloud Management namespace

```
export ENTITLED_REGISTRY_KEY=<entitlement_key>
```

```
oc create secret docker-registry entitled-registry --docker-username=cp --docker-password=$ENTITLED_REGISTRY_KEY --docker-email=<your_docker_email_address> --docker-server=cp.icr.io -n cp4mcm
```

**3.** Create the Catalog Source resources for Common Services and Cloud Pak for Multicloud Manager

```
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: management-installer-index
  namespace: openshift-marketplace
spec:
  displayName: CP4MCM Installer Catalog
  publisher: IBM CP4MCM
  sourceType: grpc
  image: quay.io/cp4mcm/cp4mcm-orchestrator-catalog
  updateStrategy:
    registryPoll:
      interval: 45m
  secrets:
   - entitled-registry
```

```
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: opencloud-operators
  namespace: openshift-marketplace
spec:
  displayName: IBMCS Operators
  publisher: IBM
  sourceType: grpc
  image: docker.io/ibmcom/ibm-common-service-catalog:latest
  updateStrategy:
    registryPoll:
      interval: 45m
```



## Create the installer operators

Install the IBM Cloud Pak for Multicloud Management operator that you created.

1. From your OpenShift Container Platform console, click **Operators** > **OperatorHub**. The **OperatorHub** page is displayed.
2. In the **All Items** field, enter `IBM Cloud Pak for Multicloud Management`. The IBM Cloud Pak for Multicloud Management operator is displayed.
3. Click the **IBM Cloud Pak for Multicloud Management** tile. The **IBM Cloud Pak for Multicloud Management** window is displayed.
4. Click **Install**. You see the **Create Operator Subscription** page.
5. Set **Update Channel** to the latest version.
6. Set **Approval Strategy** to `Automatic`.
7. Click **Subscribe**. After a few minutes, the **IBM Cloud Pak for Multicloud Management**, the **IBM Common Service Operator**, and the **Operand Deployment Lifecycle Manager** operators are installed, and you can see these operators on the **Installed Operators** page.

The `IBM Common Service Operator` creates the `ibm-common-services` namespace and installs the **Operand Deployment Lifecycle Manager** Operator in the `ibm-common-services` namespace.

The `IBM Common Service Operator` also creates the `OperandRegistry` API and `OperandConfig` API in the `ibm-common-services` namespace.

## Install IBM Cloud Pak for Multicloud Management

### Advanced installation

The advanced installation mode uses a YAML specification to install IBM Cloud Pak for Multicloud Management and its modules and services. Use this YAML file to select the operators that you want to install, to provide the installation parameters, and to update the default configurations, if required.

For more information about the parameters, see [Advanced configuration](https://www-03preprod.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/config_adv.html?view=kc). For each operator, the Advanced configuration topic provides the parameters that you can add to the installation YAML file. You must add the parameters in the same syntax as described in the topics.

1. From your OpenShift Container Platform console, switch to the namespace where you created the IBM Cloud Pak for Multicloud Management operator. For example, **cp4mcm**.
2. Click **Operators** > **Installed Operators**.
3. Click **IBM Cloud Pak for Multicloud Management**.
4. Select the **Installation** tab.
5. Click **Create Installation**. The `Installation` YAML file content is displayed in the YAML editor. Update the YAML file to enable the operators that you want to install, and to update the [configuration parameters](https://www-03preprod.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/config_adv.html?view=kc), if required.
6. After you update the YAML file, click **Create** to install IBM Cloud Pak for Multicloud Management.

Wait for about 15 minutes for the pods to start.

The installer creates the namespaces for the modules and services that you are installing. You can see the installed module or service operators on the **Operator Hub** > **Installed Operators** page in the module or service namespaces. For more information about the namespaces where the operators are installed, see [Available operators and their namespaces](https://www-03preprod.ibm.com/support/knowledgecenter/SSFC4F_2.0.0/install/config_adv.html?view=kc#cfg).



## Access the console

Use the following command to get the URL to access the console:

```
oc get route -n ibm-common-services cp-console -o jsonpath=‘{.spec.host}’
```

Following is a sample output:

```
‘cp-console.apps.test-q2.os.example.com/multicloud’
```

Based on the example output, your console URL would be `https://cp-console.apps.test-q2.os.example.com/multicloud`.

### Console username and password

The default username to access the console is `admin`. You can check the default username by running the following command:

```
oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_username}' | base64 -d && echo
```

You can get the password for the `admin` username by running the following command:

```
oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 -d
```

Following is a sample output:

```
EwK9dj9fwPZHyHTyu9TyIgh9klZSzVsA
```

Based on the example output, you would use `EwK9dj9fwPZHyHTyu9TyIgh9klZSzVsA` as the password.





## Uninstall

Run the following command to uninstall the CP



```
oc config view --raw > kubeconfig
```



```
wget https://raw.githubusercontent.com/IBM/cp4mcm-samples/master/scripts/cp4mcm-cleanup-utility.sh
```

```
chmod +x cp4mcm-cleanup-utility.sh
```

```
./cp4mcm-cleanup-utility.sh --kubeconfigpath <full-path-to-your-kubeconfig-file> --mode preUninstallCleanup
```

```
# Get installations
oc get installations -n cp4mcm

# Delete installation. This will take some time to complete.
oc delete installations -n cp4mcm ibm-management

# Check whether all the IBM Cloud Pak for Multicloud Management-related operand requests are deleted. If now wait until the have completed
oc get opreq -A
```



Delete common-services

```
oc get operandconfig -n ibm-common-services

oc delete operandconfig common-service -n ibm-common-services

oc get operandregistry -n ibm-common-services

oc delete operandregistry common-service -n ibm-common-services

oc delete project ibm-common-services

```

Remove the following configmaps, secrets, and namespace.

```
oc -n kube-system delete secret icp-metering-api-secret 
oc -n kube-public delete configmap ibmcloud-cluster-info
oc -n kube-public delete secret ibmcloud-cluster-ca-cert
oc delete mutatingwebhookconfiguration ibm-common-service-webhook-configuration
oc delete namespace services
```

Delete the PVCs in the following namespaces:

- openshift-marketplace
- kube-system
- openshift-operators
- cp4mcm

Manually delete the persistent volumes (PVs) that were created by the modules and services that you installed in your cluster.

#### Delete the namespaces

Delete the following namespaces that your IBM Cloud Pak for Multicloud Management created during installation:

- management-infrastructure-management
- management-monitoring
- management-operations
- management-security-services
- management-grc-policies
- cp4mcm

```
oc delete ns management-infrastructure-management
oc delete ns management-infrastructure-monitoring
oc delete ns management-infrastructure-operations
oc delete ns management-infrastructure-security-services
oc delete ns management-infrastructure-grc-policies
oc delete ns cp4mcm
```

Run post uninstall cleanup

```
./cp4mcm-cleanup-utility.sh --kubeconfigpath <full-path-to-your-kubeconfig-file> --mode postUninstallCleanup
```






## Additional Resources
* <a href="https://www.ibm.com/support/knowledgecenter/SSFC4F_1.3.0/install/overview.html">Knowledge Center - MCM 1.3 Installation Guide</a>
