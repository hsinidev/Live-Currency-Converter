import React from 'react';
import { StaticPageWrapper } from './StaticPageWrapper';

export const ContactPage: React.FC = () => {
  return (
    <StaticPageWrapper>
      <p>
        We value your feedback and are here to assist with any inquiries regarding Doodax.com.
      </p>
      
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-6 text-center">
          <i className="fas fa-envelope text-4xl text-indigo-600 mb-4"></i>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-4">For support, bug reports, or partnership opportunities:</p>
          <a href="mailto:hsini.web@gmail.com" className="text-xl font-bold text-indigo-600 hover:underline">
            hsini.web@gmail.com
          </a>
      </div>

      <p className="text-sm text-gray-500">
        Please allow up to 48 hours for a response. If you are reporting a technical issue, please include your device type and browser version.
      </p>
    </StaticPageWrapper>
  );
};