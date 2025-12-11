
import React from 'react';

interface SwapButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const SwapButton: React.FC<SwapButtonProps> = ({ onClick, isLoading }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="z-10 bg-white border-4 border-gray-100 rounded-full w-14 h-14 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 transform hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Swap currencies"
      >
        <i className="fas fa-exchange-alt text-xl"></i>
      </button>
    </div>
  );
};
