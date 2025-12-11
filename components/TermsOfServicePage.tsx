import React from 'react';
import { StaticPageWrapper } from './StaticPageWrapper';

export const TermsOfServicePage: React.FC = () => {
  return (
    <StaticPageWrapper>
        <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use <strong>Doodax.com</strong> if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h3 className="font-bold mt-4">License</h3>
        <p>
            Unless otherwise stated, Doodax.com and/or its licensors own the intellectual property rights for all material on Doodax.com. All intellectual property rights are reserved. You may access this from Doodax.com for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h3 className="font-bold mt-4">Disclaimer</h3>
        <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-disc list-inside ml-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
        </ul>
        
        <p className="mt-4">
            The exchange rates provided are for informational purposes only. Doodax.com shall not be held liable for any financial loss resulting from the use of this information.
        </p>
        
        <p className="mt-4">Contact: <strong>hsini.web@gmail.com</strong></p>
    </StaticPageWrapper>
  );
};