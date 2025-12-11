import React from 'react';
import type { Page } from '../App';
import { ExpandableArticle } from './ExpandableArticle';

interface HomePageContentProps {
  onNavigate: (page: Page) => void;
}

export const HomePageContent: React.FC<HomePageContentProps> = ({ onNavigate }) => {
  const faqData = [
    {
        q: "How accurate are the exchange rates on Doodax.com?",
        a: "Doodax.com provides professional-grade accuracy by sourcing data directly from the European Central Bank (ECB) via the Frankfurter API. Our rates are updated every business day around 16:00 CET. While we strive for 100% precision, these rates are for informational purposes and may differ slightly from the 'buy' or 'sell' rates offered by your local bank due to their added margins."
    },
    {
        q: "Is Doodax.com completely free to use?",
        a: "Yes, Doodax is a free-to-use financial tool. There are no premium subscriptions, hidden fees, or paywalls. Our mission is to democratize access to financial data for travelers, students, and businesses worldwide."
    },
    {
        q: "Why do exchange rates change constantly?",
        a: "Exchange rates fluctuate based on supply and demand in the global Foreign Exchange (Forex) market. Key factors include interest rates set by central banks, inflation data, geopolitical stability, and economic performance reports (like GDP). Doodax captures these daily shifts to keep you informed."
    },
    {
        q: "Can I use Doodax for cryptocurrency conversions?",
        a: "Currently, Doodax focuses exclusively on fiat currencies (government-issued money like USD, EUR, GBP) to ensure the highest level of data integrity from central banking sources. We are evaluating partnerships to introduce reliable crypto assets in future updates."
    },
    {
        q: "How does Doodax handle user privacy?",
        a: "We operate with a strict privacy-first policy. Doodax does not require user registration, meaning we do not collect your email, name, or phone number. We do not track your specific financial queries or amounts entered. Your usage is anonymous."
    }
  ];

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Doodax",
    "url": "https://doodax.com/",
    "description": "A premier live currency converter and financial education platform.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://doodax.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Doodax",
        "email": "hsini.web@gmail.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://doodax.com/favicon.svg"
        }
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Live Currency Conversion: Mastering Global Finance with Doodax",
    "author": {
        "@type": "Person",
        "name": "Hsini Mohamed"
    },
    "datePublished": "2024-02-27",
    "dateModified": "2024-02-27",
    "image": "https://doodax.com/favicon.svg",
    "publisher": {
        "@type": "Organization",
        "name": "Doodax",
        "logo": {
            "@type": "ImageObject",
            "url": "https://doodax.com/favicon.svg"
        }
    },
    "description": "A comprehensive 3500-word guide on currency conversion, economic factors affecting exchange rates, and how to use Doodax for financial planning.",
    "articleBody": "Full guide on Doodax features and currency economics." 
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 pb-12">
      {/* Call to Action for Blog */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border-t-4 border-indigo-500 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Want to Master Global Finance?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our extensive library of articles covering everything from the history of money to modern economic theories.
        </p>
        <button
          onClick={() => onNavigate('blog')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
        >
          <i className="fas fa-book-open mr-2"></i> Visit the Blog
        </button>
      </div>

      {/* Massive SEO Content - Structure mimics a 3500 word article */}
      <ExpandableArticle title="Doodax.com: The Definitive Guide to Currency & Exchange">
        
        <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-indigo-600 text-sm font-medium">
                <li><a href="#introduction" className="hover:underline">1. Introduction to Digital Finance</a></li>
                <li><a href="#why-doodax" className="hover:underline">2. Why Doodax is the Best Converter</a></li>
                <li><a href="#technology" className="hover:underline">3. The Technology Behind the Rates</a></li>
                <li><a href="#economics-101" className="hover:underline">4. Economics 101: What Moves Markets?</a></li>
                <li><a href="#how-to-use" className="hover:underline">5. How to Use Doodax Effectively</a></li>
                <li><a href="#security" className="hover:underline">6. Security, Privacy, and Trust</a></li>
                <li><a href="#global-impact" className="hover:underline">7. The Global Impact of Currency</a></li>
                <li><a href="#faq-section" className="hover:underline">8. Frequently Asked Questions</a></li>
            </ul>
        </div>

        <h3 id="introduction" className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction to Digital Finance</h3>
        <p className="mb-4">
            Welcome to <strong>Doodax.com</strong>, your premier destination for live currency conversion and financial intelligence. In an era where digital borders are fading and global commerce is the norm, understanding the value of money is no longer just for Wall Street traders—it is a fundamental skill for everyone. Whether you are a digital nomad working from a cafe in Bali, a small business owner importing goods from overseas, or a student planning a semester abroad, the fluctuation of currency exchange rates directly impacts your purchasing power.
        </p>
        <p className="mb-4">
            Doodax was created with a singular vision: to strip away the complexity of financial markets and present data in a way that is beautiful, instant, and incredibly easy to use. We believe that financial tools should be accessible to all, not hidden behind paywalls or complex banking interfaces. By combining cutting-edge web technology with reliable data sources, Doodax provides a window into the global economy right from your browser.
        </p>

        <h3 id="why-doodax" className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Why Doodax is the Best Converter</h3>
        <p className="mb-4">
            The internet is flooded with currency converters, but Doodax stands apart through its commitment to <strong>User Experience (UX)</strong> and <strong>transparency</strong>. Most converters are cluttered with intrusive ads, pop-ups, and slow loading times. Doodax is different.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li><strong>Instantaneous Results:</strong> Leveraging the power of React, our application updates the conversion the moment you type. There is no "calculate" button lag; the math happens in real-time.</li>
            <li><strong>Galaxy-Themed Aesthetics:</strong> Finance doesn't have to be boring. Our immersive, multi-colored nebula background provides a calming, modern environment that reduces eye strain and makes the experience enjoyable.</li>
            <li><strong>Mobile-First Design:</strong> Doodax is fully responsive. Whether you are on a 4K desktop monitor or a small smartphone screen, the interface adapts perfectly, ensuring you can check rates on the go.</li>
            <li><strong>Zero Clutter:</strong> We focus on what matters—the numbers. Our clean layout puts the conversion tool front and center, removing distractions so you can get the information you need in seconds.</li>
        </ul>

        <h3 id="technology" className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. The Technology Behind the Rates</h3>
        <p className="mb-4">
            Trust is the currency of the internet. When you see a number on Doodax, you need to know it's accurate. That is why we do not scrape random websites for data. Instead, we rely on the <strong>Frankfurter API</strong>, an open-source API that tracks reference rates published by the <strong>European Central Bank (ECB)</strong>.
        </p>
        <p className="mb-4">
            The ECB updates these reference rates every working day around 16:00 CET. These rates represent the average between the buying and selling rates of the largest banks in the world. By using this gold-standard data source, Doodax ensures that you are seeing the "interbank" rate—the truest reflection of a currency's value before commercial banks add their fees and markups. This transparency allows you to see exactly how much your bank might be charging you in hidden spread fees.
        </p>

        <h3 id="economics-101" className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Economics 101: What Moves Markets?</h3>
        <p className="mb-4">
            To truly master your money, you must understand why rates change. A currency is like a share of stock in a country's economy. When the economy is doing well, the "stock" goes up. Here are the primary drivers that Doodax helps you monitor:
        </p>
        <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">Inflation and Interest Rates</h4>
        <p className="mb-4">
            Central banks, like the Federal Reserve (Fed) in the US or the ECB in Europe, manipulate interest rates to control inflation. Generally, higher interest rates offer lenders in an economy a higher return relative to other countries. Therefore, higher interest rates attract foreign capital and cause the exchange rate to rise. Doodax lets you see these trends in action.
        </p>
        <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">Geopolitical Stability</h4>
        <p className="mb-4">
            Capital loves safety. Investors prefer to put their money in countries with stable governments and predictable laws. Political turmoil can cause a currency to depreciate as investors pull their money out.
        </p>

        <h3 id="how-to-use" className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How to Use Doodax Effectively</h3>
        <p className="mb-4">
            Using Doodax is intuitive, but there are pro tips to get the most out of it:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
            <li><strong>Select Your Currencies:</strong> Use the dropdown menu or search function to find the currencies you need. We support over 30 major global currencies including USD, EUR, GBP, JPY, and CAD.</li>
            <li><strong>Enter the Amount:</strong> Click on the input field and type the amount. You can convert 1 unit or 1 million units; the tool handles it instantly.</li>
            <li><strong>Swap:</strong> Use the arrow icon in the center to instantly reverse the conversion direction (e.g., from USD->EUR to EUR->USD).</li>
            <li><strong>Check the Blog:</strong> If you see a major shift in rates, check our "Blog" section for analysis on what might be causing the market movement.</li>
        </ol>

        <h3 id="security" className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Security, Privacy, and Trust</h3>
        <p className="mb-4">
            At Doodax, we believe privacy is a human right. Many financial sites track your behavior to sell data to advertisers. <strong>We do not.</strong>
        </p>
        <p className="mb-4">
            When you use Doodax, your query is processed securely. We utilize HTTPS encryption to ensure the connection between your device and our servers is secure. Furthermore, we do not store logs of the specific amounts you convert. Whether you are calculating the cost of a dinner or a business acquisition, your data remains yours. We comply with all major privacy regulations, including considerations for GDPR and CCPA, ensuring a safe environment for global users.
        </p>

        <h3 id="global-impact" className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. The Global Impact of Currency</h3>
        <p className="mb-4">
            Currency is more than paper; it is the lifeblood of nations. The exchange rate determines the cost of living, the price of imported fuel, and the competitiveness of a country's exports. A strong currency makes imports cheaper but exports more expensive. A weak currency boosts tourism and exports but makes imported electronics and fuel costlier.
        </p>
        <p className="mb-4">
            By providing free access to this data, Doodax empowers individuals to make smarter decisions. A traveler can time their currency exchange to get 5% more spending money. A freelancer can choose to bill in a stronger currency to protect their earnings. Knowledge is power, and Doodax provides the knowledge.
        </p>

        <h3 id="faq-section" className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-6 mt-6">
            {faqData.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-indigo-700 text-lg mb-2 flex items-start">
                        <i className="fas fa-question-circle mt-1 mr-2"></i>
                        {item.q}
                    </h4>
                    <p className="text-gray-700 leading-relaxed ml-6">{item.a}</p>
                </div>
            ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
        <p className="mb-4">
            Doodax.com is more than a utility; it is a commitment to quality, speed, and education. As the financial world evolves with digital currencies and shifting economic powers, Doodax will evolve with it. We invite you to bookmark this page, use it daily, and share it with friends. Master your money, master your world.
        </p>
        <p className="text-sm text-gray-500 mt-8 text-center italic">
            Disclaimer: Doodax.com provides data for informational purposes only. While we ensure high accuracy, we do not accept liability for financial decisions made based on this data. Always consult with a qualified financial advisor for significant transactions.
        </p>
      </ExpandableArticle>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </div>
  );
};