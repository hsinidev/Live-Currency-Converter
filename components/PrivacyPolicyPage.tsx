import React from 'react';
import { StaticPageWrapper } from './StaticPageWrapper';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "February 27, 2024";
  return (
    <StaticPageWrapper>
        <p className="text-sm text-gray-500 mb-4">Last Updated: {lastUpdated}</p>
        <p>
            At <strong>Doodax.com</strong>, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Doodax.com and how we use it.
        </p>

        <h3 className="font-bold mt-4">Log Files</h3>
        <p>
            Doodax.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h3 className="font-bold mt-4">Cookies and Web Beacons</h3>
        <p>
            Like any other website, Doodax.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h3 className="font-bold mt-4">Third Party Privacy Policies</h3>
        <p>
            Doodax.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
        </p>

        <h3 className="font-bold mt-4">Consent</h3>
        <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
        
        <p className="mt-4 border-t pt-4">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>hsini.web@gmail.com</strong>.
        </p>
    </StaticPageWrapper>
  );
};