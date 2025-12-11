import React from 'react';
import type { Currency } from '../types';

interface ResultDisplayProps {
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  exchangeRate: number;
  convertedAmount: number;
  lastUpdated: string | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  fromCurrency,
  toCurrency,
  amount,
  exchangeRate,
  convertedAmount,
  lastUpdated,
}) => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 animate-fade-in border border-white/60">
      <div className="text-center">
        <p className="text-lg text-gray-500 font-medium mb-1">
            {amount.toLocaleString()} {fromCurrency.name} =
        </p>
        <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 my-2">
            {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {toCurrency.code}
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="font-semibold mb-2 md:mb-0 bg-gray-100 px-3 py-1 rounded-full">
          1 {fromCurrency.code} ≈ {exchangeRate.toFixed(4)} {toCurrency.code}
        </div>
        {lastUpdated && <p className="text-xs">Updated: {lastUpdated}</p>}
      </div>
    </div>
  );
};