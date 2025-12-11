import React, { useState } from 'react';

interface ExpandableArticleProps {
  children: React.ReactNode;
  title: string;
}

export const ExpandableArticle: React.FC<ExpandableArticleProps> = ({ children, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10 mt-12 border border-white/50 relative overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-800 mb-6">{title}</h2>
      
      {/* Reduced height to approx 2 lines (3.5rem) when collapsed */}
      <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px]' : 'max-h-14'}`}>
        <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed">
          {children}
        </div>
        
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
          <i className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
        </button>
      </div>
    </div>
  );
};