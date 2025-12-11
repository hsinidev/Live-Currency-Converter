import React from 'react';
import type { Page, ModalType } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  onOpenModal: (modal: ModalType) => void;
}

const NavLink: React.FC<{onClick: () => void, children: React.ReactNode}> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-700 hover:text-indigo-600 font-bold transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/50">
        {children}
    </button>
);

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <header className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => onNavigate('converter')} className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mr-3 shadow-lg group-hover:scale-110 transition-transform">
                <i className="fas fa-exchange-alt text-xl"></i>
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-800">Doodax</span>
          </button>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink onClick={() => onNavigate('converter')}>Converter</NavLink>
            <NavLink onClick={() => onNavigate('blog')}>Blog</NavLink>
            <NavLink onClick={() => onOpenModal('contact')}>Contact</NavLink>
            <button 
                onClick={() => onOpenModal('guide')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md ml-4"
            >
                Start Guide
            </button>
          </nav>
          
          {/* Mobile Menu Button (simplified) */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={() => onNavigate('blog')}>
             <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};