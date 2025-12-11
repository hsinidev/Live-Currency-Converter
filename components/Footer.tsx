import React from 'react';
import type { Page, ModalType } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
    onOpenModal: (modal: ModalType) => void;
}

const FooterLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 text-sm font-medium">
        {children}
    </button>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md text-white border-t border-gray-800 py-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-6 flex space-x-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <i className="fas fa-globe text-2xl"></i>
            </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-center">
            <FooterLink onClick={() => onOpenModal('about')}>About Us</FooterLink>
            <FooterLink onClick={() => onOpenModal('contact')}>Contact</FooterLink>
            <FooterLink onClick={() => onOpenModal('guide')}>Guide</FooterLink>
            <FooterLink onClick={() => onOpenModal('privacy')}>Privacy Policy</FooterLink>
            <FooterLink onClick={() => onOpenModal('terms')}>Terms of Service</FooterLink>
            <FooterLink onClick={() => onOpenModal('dmca')}>DMCA</FooterLink>
        </div>
        
        <div className="text-center space-y-4">
            <p className="text-gray-400 text-xs max-w-lg mx-auto leading-relaxed">
                Doodax.com provides currency data for informational purposes only. While we source rates from the European Central Bank, we do not guarantee the accuracy of data for financial trading.
            </p>
            
            <div className="pt-6 border-t border-gray-800 w-full flex flex-col items-center">
                <p className="text-gray-400 text-sm mb-2">© 2024 Doodax.com. All rights reserved.</p>
                <p className="font-bold tracking-wide text-indigo-400 hover:text-indigo-300 transition-colors">
                    Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="uppercase border-b border-indigo-500/50 hover:border-indigo-400">HSINI MOHAMED</a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};