import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { CurrencyInput } from './components/CurrencyInput';
import { SwapButton } from './components/SwapButton';
import { Header } from './components/Header';
import { ResultDisplay } from './components/ResultDisplay';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { DMCAPage } from './components/DMCAPage';
import { BlogListPage } from './components/BlogListPage';
import { BlogPostPage } from './components/BlogPostPage';
import { HomePageContent } from './components/HomePageContent';
import { Modal } from './components/Modal';
import { getExchangeRate } from './services/geminiService';
import { blogPosts } from './services/blogPosts';
import type { Currency } from './types';
import { CURRENCIES } from './constants';

export type Page = 'converter' | 'blog';
export type ModalType = 'about' | 'contact' | 'privacy' | 'terms' | 'dmca' | 'guide' | null;

const App: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES.find(c => c.code === 'USD')!);
  const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES.find(c => c.code === 'EUR')!);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  
  // Routing State
  const [activePage, setActivePage] = useState<Page>('converter');
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);
  
  // Modal State
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const navigate = useCallback((path: string, page: Page, slug: string | null = null) => {
    if (window.location.pathname !== path) {
        window.history.pushState({ page, slug }, '', path);
    }
    setActivePage(page);
    setActivePostSlug(slug);
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = useCallback((page: Page | 'article') => {
     if (page === 'article') {
         // Special handling if 'article' was passed (legacy), map to guide modal
         openModal('guide');
     } else {
         navigate(page === 'converter' ? '/' : `/${page}`, page);
     }
  }, [navigate]);

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const handleSelectPost = useCallback((slug: string) => {
    navigate(`/blog/${slug}`, 'blog', slug);
  }, [navigate]);

  const handleBackToBlog = useCallback(() => {
    navigate('/blog', 'blog');
  }, [navigate]);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/blog')) {
        setActivePage('blog');
        const slug = path.split('/')[2];
        setActivePostSlug(slug || null);
      } else {
        setActivePage('converter');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleSwapCurrencies = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  const handleConvert = useCallback(async () => {
    if (amount <= 0) {
      setError("Please enter an amount greater than 0.");
      setConvertedAmount(null);
      setExchangeRate(null);
      return;
    }
    
    if (fromCurrency.code === toCurrency.code) {
        setExchangeRate(1);
        setConvertedAmount(amount);
        setLastUpdated(new Date().toLocaleString());
        setError(null);
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const rate = await getExchangeRate(fromCurrency.code, toCurrency.code);
      setExchangeRate(rate);
      setConvertedAmount(amount * rate);
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      setError("Failed to fetch exchange rate.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => {
    if (activePage === 'converter') {
      handleConvert();
    }
  }, [fromCurrency, toCurrency, amount, activePage, handleConvert]);

  const renderModalContent = () => {
    switch(activeModal) {
        case 'about': return <AboutPage />;
        case 'contact': return <ContactPage />;
        case 'privacy': return <PrivacyPolicyPage />;
        case 'terms': return <TermsOfServicePage />;
        case 'dmca': return <DMCAPage />;
        case 'guide': return <HomePageContent onNavigate={handleNavigate} />; 
        default: return null;
    }
  };

  const getModalTitle = () => {
      switch(activeModal) {
          case 'about': return 'About Doodax';
          case 'contact': return 'Contact Support';
          case 'privacy': return 'Privacy Policy';
          case 'terms': return 'Terms of Service';
          case 'dmca': return 'DMCA Policy';
          case 'guide': return 'Financial Guide';
          default: return '';
      }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col text-gray-800 relative overflow-hidden">
      <Header onNavigate={handleNavigate} onOpenModal={openModal} />
      
      <main className="flex-grow flex justify-center items-start pt-8 pb-16 px-4 z-10">
        {activePage === 'blog' ? (
           activePostSlug ? 
             <BlogPostPage post={blogPosts.find(p => p.slug === activePostSlug)!} onBack={handleBackToBlog} /> 
             : 
             <BlogListPage posts={blogPosts} onSelectPost={handleSelectPost} />
        ) : (
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
                <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-indigo-900/20 p-6 md:p-10 mb-8 border border-white/50 animate-fade-in-up">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2 drop-shadow-sm">
                        Live Currency Converter
                    </h1>
                    <p className="text-gray-500 font-medium">Real-time market rates from the European Central Bank</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center relative">
                       <CurrencyInput
                          label="You send"
                          amount={amount}
                          onAmountChange={setAmount}
                          selectedCurrency={fromCurrency}
                          onCurrencyChange={setFromCurrency}
                          isAmountEditable={true}
                        />
                        
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                            <SwapButton onClick={handleSwapCurrencies} isLoading={isLoading} />
                        </div>
                        <div className="flex justify-center md:hidden z-20 -my-3">
                            <SwapButton onClick={handleSwapCurrencies} isLoading={isLoading} />
                        </div>

                       <CurrencyInput
                          label="They receive"
                          amount={convertedAmount}
                          selectedCurrency={toCurrency}
                          onCurrencyChange={setToCurrency}
                          isAmountEditable={false}
                        />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={handleConvert}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin mr-3"></i> Processing...
                        </>
                      ) : (
                        <>
                          Convert Now <i className="fas fa-arrow-right ml-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {error && (
                    <div className="w-full bg-red-100/90 backdrop-blur border border-red-200 text-red-700 px-6 py-4 rounded-xl shadow-sm mb-6 animate-pulse" role="alert">
                        <i className="fas fa-exclamation-circle mr-2"></i> {error}
                    </div>
                )}
                
                {!isLoading && !error && exchangeRate && convertedAmount !== null && (
                  <ResultDisplay
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    amount={amount}
                    exchangeRate={exchangeRate}
                    convertedAmount={convertedAmount}
                    lastUpdated={lastUpdated}
                  />
                )}
                
                {/* SEO Content Section */}
                <HomePageContent onNavigate={handleNavigate} />
            </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} onOpenModal={openModal} />

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={getModalTitle()}
      >
          {renderModalContent()}
      </Modal>
    </div>
  );
};

export default App;