import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform transition-all scale-100 border border-white/20"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 rounded-t-3xl">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <div className="overflow-y-auto p-8 flex-grow prose prose-indigo max-w-none">
          {children}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-3xl flex flex-col items-center">
            <p className="text-xs text-gray-500 mb-4 text-center max-w-md">
                <i className="fas fa-info-circle mr-1"></i> By continuing, you acknowledge that you have read and understood the information presented above regarding Doodax.com policies.
            </p>
            <button 
                onClick={onClose}
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold py-3 px-12 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5"
            >
                ACKNOWLEDGE & CONTINUE
            </button>
        </div>
      </div>
    </div>
  );
};