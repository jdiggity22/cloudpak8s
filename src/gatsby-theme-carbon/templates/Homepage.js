import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-paks-small.png';

const FirstLeftText = () => <p>IBM Cloud Pak Playbook is moving</p>;
const FirstRightText = () => (
  <p>
    <font size="5">
    The IBM Cloud Pak Playbook web site will be moving to an IBM internal
    network location as of October 19, 2020. The cloudpak8s.io URL will 
    remain the same, but the site will only be accessible to users on the
    IBM internal network.
    </font>
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const SecondLeftText = () => <p>IBM Cloud Paks</p>;

const SecondRightText = () => (
  <p>
    <font size="5">
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions 
    that give clients an open, faster and more secure way to move core 
    business applications to any cloud.
    </font>
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const BannerText = () => <h1>IBM Cloud Pak Playbook</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#030303"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
