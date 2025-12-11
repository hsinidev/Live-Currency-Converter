import React from 'react';
import { StaticPageWrapper } from './StaticPageWrapper';

export const AboutPage: React.FC = () => {
  return (
    <StaticPageWrapper>
      <p>
        Welcome to <strong>Doodax.com</strong>, your ultimate destination for seamless currency conversion and financial insights.
      </p>
      <p>
        In a world that never sleeps, money never stops moving. Whether you are a digital nomad, an international business owner, or simply planning your dream vacation, knowing the real value of your money is crucial. Doodax was built to provide that clarity instantly.
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-4">Our Mission</h3>
      <p>
        To democratize financial data by providing professional-grade exchange rates in a user-friendly, free, and accessible interface.
      </p>
      <h3 className="text-lg font-bold text-gray-800 mt-4">The Tech Behind Doodax</h3>
      <p>
        We utilize the <strong>Frankfurter API</strong>, which tracks reference rates published by the European Central Bank. This ensures that when you see a number on Doodax, it's not just a guess—it's market reality.
      </p>
    </StaticPageWrapper>
  );
};