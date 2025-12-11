import React from 'react';

export const StaticPageWrapper: React.FC<{title?: string, children: React.ReactNode}> = ({ title, children }) => {
    return (
        <div className="prose prose-indigo max-w-none text-gray-700">
            {children}
        </div>
    );
};