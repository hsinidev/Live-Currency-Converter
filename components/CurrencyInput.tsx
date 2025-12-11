import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Currency } from '../types';
import { CURRENCIES } from '../constants';

interface CurrencySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (currency: Currency) => void;
}

const CurrencySelectorModal: React.FC<CurrencySelectorModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredCurrencies = useMemo(() => {
    return CURRENCIES.filter(
      (currency) =>
        currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        currency.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search for a currency..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        <ul className="overflow-y-auto p-2">
          {filteredCurrencies.map((currency) => (
            <li key={currency.code}>
              <button
                onClick={() => onSelect(currency)}
                className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl mr-4 w-8 text-center">{currency.flag}</span>
                <div>
                  <div className="font-bold text-gray-800">{currency.code}</div>
                  <div className="text-sm text-gray-500">{currency.name}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


interface CurrencyInputProps {
  label: string;
  amount: number | null;
  onAmountChange?: (amount: number) => void;
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  isAmountEditable?: boolean;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  amount,
  onAmountChange,
  selectedCurrency,
  onCurrencyChange,
  isAmountEditable = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCurrency = (currency: Currency) => {
    onCurrencyChange(currency);
    setIsModalOpen(false);
  };

  const handleAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onAmountChange) {
      onAmountChange(Number(value));
    }
  };

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/50">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      <div className="flex items-center justify-between mt-1">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center text-left py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="text-2xl mr-3">{selectedCurrency.flag}</span>
          <div>
            <span className="font-bold text-lg text-gray-800">{selectedCurrency.code}</span>
          </div>
          <i className="fas fa-chevron-down text-gray-400 ml-2"></i>
        </button>
        {isAmountEditable ? (
           <input
             type="number"
             value={amount ?? ''}
             onChange={handleAmountInputChange}
             className="text-2xl font-bold text-right bg-transparent w-full focus:outline-none text-gray-800 placeholder-gray-400"
             placeholder="0.00"
             min="0"
           />
        ) : (
           <span className="text-2xl font-bold text-gray-800 text-right w-full truncate">
            {amount !== null ? amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : '-'}
           </span>
        )}
      </div>
      <CurrencySelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectCurrency}
      />
    </div>
  );
};