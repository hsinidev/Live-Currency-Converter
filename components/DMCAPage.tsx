import React from 'react';
import { StaticPageWrapper } from './StaticPageWrapper';

export const DMCAPage: React.FC = () => {
  return (
    <StaticPageWrapper>
        <p>
            <strong>Doodax.com</strong> respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.
        </p>
        
        <h3 className="font-bold mt-4">Copyright Agent</h3>
        <p>
            If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Agent" via email at <strong>hsini.web@gmail.com</strong>.
        </p>
        
        <p className="mt-4">
            You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.
        </p>
    </StaticPageWrapper>
  );
};