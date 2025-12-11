import React from 'react';
import type { BlogPost } from '../types';

// Helper to create JSON-LD Schema
const createJsonLd = (post: Omit<BlogPost, 'jsonLd' | 'content' | 'tableOfContents' | 'faq'>) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Currency.doodax.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://currency.doodax.com/logo.png" // Replace with actual logo URL
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "description": post.excerpt,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://currency.doodax.com/blog/${post.slug}`
    }
});

// FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
const moneyVsCurrencyContent = React.createElement(React.Fragment, null, 
    React.createElement("p", {
        id: "introduction",
        className: "lead text-lg text-gray-600"
    }, "In everyday conversation, the words \"money\" and \"currency\" are often used interchangeably. We talk about having enough money for a coffee or exchanging currency for a trip abroad. While they are deeply related, in the worlds of economics and finance, they represent distinct concepts. Understanding this difference is not just academic; it provides a foundational knowledge for grasping how economies function, why cryptocurrencies were invented, and how the value of what's in your wallet is determined. This comprehensive guide will dissect the nuances of money versus currency, exploring their history, functions, and modern-day implications."), 
    React.createElement("h2", {
        id: "what-is-money"
    }, "What is Money? A Conceptual Framework"), 
    React.createElement("p", null, "Money is a broad, abstract concept. It is anything that is widely accepted as a medium of exchange for goods and services and for the repayment of debts. To be considered \"money,\" an asset must effectively fulfill three core functions:"), 
    React.createElement("ol", null, 
        React.createElement("li", null, 
            React.createElement("strong", null, "Medium of Exchange:"), " This is the most crucial function. Money eliminates the \"double coincidence of wants\" required by a barter system. Instead of a farmer with chickens needing to find a shoemaker who wants chickens, the farmer can sell the chickens for money and then use that money to buy shoes from anyone. It acts as an intermediary, simplifying transactions and making the economy vastly more efficient."), 
        React.createElement("li", null, 
            React.createElement("strong", null, "Unit of Account:"), " Money provides a common measure of value. It allows us to price goods and services in a standardized way. A car is worth $30,000, a loaf of bread is $4. This common denominator makes it possible to understand the relative value of different items, to create budgets, record profits, and calculate GDP. Without a unit of account, economic calculation would be nearly impossible."), 
        React.createElement("li", null, 
            React.createElement("strong", null, "Store of Value:"), " Money must be able to be saved and retrieved at a later time, and it should, ideally, retain its purchasing power. If you earn $100 today, you should be able to spend it tomorrow and buy a similar amount of goods. While inflation can erode this store of value over time, the asset must be durable enough to be useful in the future. Gold has historically been an excellent store of value due to its durability and scarcity, whereas a basket of apples would be a poor one.")
    ), 
    React.createElement("h2", {
        id: "what-is-currency"
    }, "What is Currency? The Physical Manifestation"), 
    React.createElement("p", null, "If money is the concept, currency is the tangible form that money takes. Currency is the government-issued, physical or digital representation of money that is in circulation within a specific economy. It includes paper banknotes (like the U.S. Dollar or the Euro) and metal coins. In the modern era, it also includes digital entries in a bank's database, accessible via debit cards or online transfers."), 
    React.createElement("p", null, "Key characteristics of currency include:"), 
    React.createElement("ul", null, 
        React.createElement("li", null, React.createElement("strong", null, "Government-Issued:"), " Currency is created and sanctioned by a country's central bank or monetary authority (e.g., the Federal Reserve in the U.S., the European Central Bank for the Eurozone)."), 
        React.createElement("li", null, React.createElement("strong", null, "Fiat Nature:"), " Most modern currencies are \"fiat\" currencies. This means they are not backed by a physical commodity like gold or silver. Their value comes from the trust and confidence people have in the government that issues them and their acceptance for paying taxes. The government declares it to be legal tender, and we accept it as such."), 
        React.createElement("li", null, React.createElement("strong", null, "Lack of Intrinsic Value:"), " A $100 bill is just a piece of paper with intricate printing. Its intrinsic value is virtually zero. Its value is derived entirely from its function as a medium of exchange.")), 
    React.createElement("h2", {
        id: "historical-evolution"
    }, "Historical Evolution: From Barter to Bitcoin"), 
    React.createElement("p", null, "The journey from barter to modern digital currency illustrates the evolving relationship between money and currency. Early societies relied on barter, a direct exchange of goods. This was inefficient. The next step was commodity money, where a widely desired item (salt, shells, cattle) became the medium of exchange. These commodities had intrinsic value but were often difficult to divide or transport."), 
    React.createElement("p", null, "This led to the use of precious metals like gold and silver, which were durable, divisible, and rare. They were excellent forms of money. For convenience, governments began minting coins of standardized weight and purity. Eventually, carrying large amounts of metal was cumbersome, so representative money was born. A certificate or note was issued that could be exchanged for a certain amount of gold or silver held in a vault. This was the era of the Gold Standard. These notes were a form of currency representing commodity money."), 
    React.createElement("p", null, "In the 20th century, most countries, including the U.S. in 1971, abandoned the Gold Standard. This transitioned the world to the current system of fiat currency. The currency was no longer representative of a commodity; it became the money itself, its value based on government decree and public trust."), 
    React.createElement("p", null, "The latest evolution is digital currency and cryptocurrency. Cryptocurrencies like Bitcoin aim to be a new form of money by acting as a decentralized medium of exchange and a store of value, independent of any government control. The debate continues on whether they fulfill all three functions of money effectively enough to gain widespread acceptance."), 
    React.createElement("h2", {
        id: "key-differences-table"
    }, "Key Differences Summarized"), 
    React.createElement("table", {
        className: "w-full text-left border-collapse"
    }, 
        React.createElement("thead", null, 
            React.createElement("tr", null, 
                React.createElement("th", { className: "border-b-2 p-4" }, "Feature"), 
                React.createElement("th", { className: "border-b-2 p-4" }, "Money"), 
                React.createElement("th", { className: "border-b-2 p-4" }, "Currency"))), 
        React.createElement("tbody", null, 
            React.createElement("tr", null, 
                React.createElement("td", { className: "border-b p-4 font-semibold" }, "Concept"), 
                React.createElement("td", { className: "border-b p-4" }, "An abstract idea; a system of value."), 
                React.createElement("td", { className: "border-b p-4" }, "The tangible token or representation of that value.")), 
            React.createElement("tr", null, 
                React.createElement("td", { className: "border-b p-4 font-semibold" }, "Form"), 
                React.createElement("td", { className: "border-b p-4" }, "Can be anything (gold, shells, digital code) that fulfills the three functions."), 
                React.createElement("td", { className: "border-b p-4" }, "Physical (banknotes, coins) or digital (bank balances).")), 
            React.createElement("tr", null, 
                React.createElement("td", { className: "border-b p-4 font-semibold" }, "Issuance"), 
                React.createElement("td", { className: "border-b p-4" }, "Not necessarily issued; arises from social convention."), 
                React.createElement("td", { className: "border-b p-4" }, "Issued and regulated by a central government authority.")), 
            React.createElement("tr", null, 
                React.createElement("td", { className: "border-b p-4 font-semibold" }, "Scope"), 
                React.createElement("td", { className: "border-b p-4" }, "A universal concept."), 
                React.createElement("td", { className: "border-b p-4" }, "Typically localized to a specific country or economic zone (e.g., USD, JPY).")), 
            React.createElement("tr", null, 
                React.createElement("td", { className: "border-b p-4 font-semibold" }, "Function"), 
                React.createElement("td", { className: "border-b p-4" }, "Medium of Exchange, Unit of Account, Store of Value."), 
                React.createElement("td", { className: "border-b p-4" }, "Primarily serves as the Medium of Exchange. Its effectiveness as a store of value can be volatile due to inflation."))
        )
    ), 
    React.createElement("h2", {
        id: "conclusion"
    }, "Conclusion: Why It Matters"), 
    React.createElement("p", null, "Distinguishing between money and currency is key to financial literacy. Currency is the tool we use every day, but its value is tied to the stability and policies of the issuing government. Inflation can devalue a currency, making it a less effective store of value\u2014a weaker form of money. This is why during times of economic crisis, people often flee from a nation's currency to assets like gold or foreign currencies that are perceived as better \"money\" because they are a more reliable store of value. Understanding this empowers you to think critically about saving, investing, and the global economic landscape.")
);

const blogPostStubs: Omit<BlogPost, 'content' | 'jsonLd'>[] = [
    {
        slug: 'what-is-the-difference-between-money-and-currency',
        title: 'What is the Difference Between Money and Currency?',
        date: 'August 5, 2024',
        author: 'Financial Insights Team',
        excerpt: 'In everyday language, we use "money" and "currency" as synonyms. But in economics, they are distinct concepts. This deep dive explores the fundamental differences, their functions, and why it matters for your financial literacy.',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [
            { title: 'Introduction: The Common Misconception', id: 'introduction' },
            { title: 'What is Money? A Conceptual Framework', id: 'what-is-money' },
            { title: 'What is Currency? The Physical Manifestation', id: 'what-is-currency' },
            { title: 'Historical Evolution: From Barter to Bitcoin', id: 'historical-evolution' },
            { title: 'Key Differences Summarized in a Table', id: 'key-differences-table' },
            { title: 'Conclusion: Why This Distinction Matters', id: 'conclusion' },
        ],
        faq: [
            { question: 'Is Bitcoin money or currency?', answer: 'Bitcoin aims to be a new form of digital money. It functions as a medium of exchange and store of value, but it is not a government-issued currency. Its high volatility currently makes it a challenging unit of account for many.' },
            { question: 'Can something be money but not currency?', answer: 'Yes. Gold is a prime example. It is not an official, circulating currency in most countries, but it is widely considered a form of money because it serves as an excellent store of value and is accepted globally.' },
            { question: 'Why did we move away from the Gold Standard?', answer: 'Countries moved to fiat currency to give their central banks more flexibility to manage the economy. Tying the currency supply to a finite commodity like gold restricted their ability to combat recessions by adjusting the money supply.' },
        ],
    },
    {
        slug: 'understanding-currency-exchange',
        title: 'Understanding Currency Exchange: A Guide for Travelers & Shoppers',
        date: 'August 1, 2024',
        author: 'Traveler\'s Compass',
        excerpt: 'Navigating currency exchange can be confusing. This guide demystifies exchange rates, explains the "spread," and provides actionable tips for getting the best deal on your next international trip or online purchase.',
        image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: "What is an Exchange Rate?", id: "exchange-rate" }, { title: "Tips for Getting the Best Rate", id: "tips" }],
        faq: [{ question: 'Is it better to exchange money at home or abroad?', answer: 'It is often better to withdraw local currency from an ATM upon arrival, as it usually offers a better rate than currency exchange kiosks at airports. Always decline the ATM\'s offer to convert the transaction for you.' }],
    },
    {
        slug: 'top-10-currencies',
        title: 'What Are the Top 10 Most Traded Currencies in the World?',
        date: 'July 28, 2024',
        author: 'Global Markets Desk',
        excerpt: 'The foreign exchange market is the largest financial market globally. Discover the top 10 most traded currencies, the economic powers behind them, and why they dominate international trade and finance.',
        image: 'https://images.unsplash.com/photo-1554375251-a0c3a72f085a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: 'The Role of the US Dollar', id: 'usd' }, { title: 'The Rise of the Euro and Yuan', id: 'eur-cny' }],
        faq: [{ question: 'Why is the US Dollar the world\'s reserve currency?', answer: 'The USD holds its status due to the size and strength of the U.S. economy, its stability, and its widespread use in pricing global commodities like oil and gold.' }],
    },
    {
        slug: 'what-is-an-economy',
        title: 'What is the Definition of an Economy?',
        date: 'July 25, 2024',
        author: 'Economics Explained',
        excerpt: 'We hear the word "economy" every day, but what does it actually mean? This article breaks down the fundamental definition of an economy, its key components, and the different types that exist in the world today.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
        tableOfContents: [{ title: 'Core Components of an Economy', id: 'components' }, { title: 'Types of Economic Systems', id: 'types' }],
        faq: [{ question: 'What is the difference between macroeconomics and microeconomics?', answer: 'Macroeconomics studies the economy as a whole (e.g., inflation, GDP, unemployment), while microeconomics focuses on the economic behavior of individuals and firms.' }],
    },
    {
        slug: 'all-currency-converter-tool',
        title: 'Why You Need an All-in-One Currency Converter',
        date: 'July 22, 2024',
        author: 'Product Team',
        excerpt: 'In a globalized world, dealing with different currencies is common. Learn about the essential features of a great currency converter and how our tool provides accurate, real-time rates for all your needs.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: 'Key Features to Look For', id: 'features' }, { title: 'How We Source Our Data', id: 'data' }],
        faq: [{ question: 'How often are exchange rates updated?', answer: 'Our rates are sourced from the European Central Bank and updated daily, ensuring you have reliable data for your conversions.' }],
    },
    {
        slug: 'eur-to-usd-explained',
        title: 'How Much is €1 to $1? Understanding EUR/USD Fluctuations',
        date: 'July 19, 2024',
        author: 'Forex Analysis',
        excerpt: 'The EUR/USD is the most traded currency pair in the world. This article explores the factors that cause its value to fluctuate, from interest rate decisions by the Fed and ECB to major geopolitical events.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: 'Role of Central Banks', id: 'central-banks' }, { title: 'Reading a Forex Chart', id: 'charts' }],
        faq: [{ question: 'What does it mean if the EUR/USD rate is 1.08?', answer: 'It means that one Euro is worth 1.08 US Dollars. If the rate goes up, the Euro has strengthened against the Dollar.' }],
    },
    {
        slug: 'types-of-money',
        title: 'The Four Main Types of Money Explained',
        date: 'July 15, 2024',
        author: 'Economic History Dept.',
        excerpt: 'From shells and salt to gold coins and digital code, the form of money has evolved dramatically. Explore the four main types of money: commodity, fiat, fiduciary, and commercial bank money.',
        image: 'https://images.unsplash.com/photo-1565514033321-38827c139c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: 'Commodity Money', id: 'commodity' }, { title: 'Fiat Money', id: 'fiat' }],
        faq: [{ question: 'Is my bank balance considered money?', answer: 'Yes, this is known as commercial bank money. It\'s digital money created by commercial banks through the process of making loans.' }],
    },
    {
        slug: 'money-exchange-rate-today',
        title: 'Why Do Money Exchange Rates Change Every Day?',
        date: 'July 12, 2024',
        author: 'Daily Market Watch',
        excerpt: 'Exchange rates are in constant flux. This article explains the key drivers behind daily currency movements, including economic data releases, central bank announcements, and market sentiment.',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
        tableOfContents: [{ title: 'Impact of Inflation Reports', id: 'inflation' }, { title: 'Geopolitical Risk', id: 'risk' }],
        faq: [{ question: 'Where can I find today\'s exchange rate?', answer: 'You can use our currency converter on the homepage for live rates sourced directly from the European Central Bank.' }],
    },
     {
        slug: 'what-is-money-economics',
        title: 'What is Money in Economics? 💰',
        date: 'July 10, 2024',
        author: 'Professor Janet Y.',
        excerpt: 'In economics, money is more than just cash. It\'s a specific tool with three essential functions: a medium of exchange, a unit of account, and a store of value. We break down these academic concepts into easy-to-understand terms.',
        image: 'https://images.unsplash.com/photo-1459257972245-09c04d0b16c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tableOfContents: [{ title: 'Medium of Exchange', id: 'exchange' }, { title: 'Store of Value', id: 'store' }],
        faq: [{ question: 'Does money have to have intrinsic value?', answer: 'No. Most modern money is "fiat" money, which has no intrinsic value. Its value is derived from government decree and public trust.' }],
    },
    {
        slug: 'google-currency-converter-comparison',
        title: 'Google Currency Converter vs. Specialist Tools',
        date: 'July 8, 2024',
        author: 'Tech Reviewer',
        excerpt: 'Google offers a quick conversion, but when is it better to use a dedicated tool? We compare Google\'s converter with specialist platforms, looking at data sources, accuracy, and additional features.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        tableOfContents: [{ title: 'Data Source Differences', id: 'data' }, { title: 'When Accuracy Matters Most', id: 'accuracy' }],
        faq: [{ question: 'Where does Google get its currency data?', answer: 'Google pulls data from various third-party providers and does not guarantee the accuracy of its rates, which is why for important transactions, using a tool with a clear source like the ECB is recommended.' }],
    }
];


export const blogPosts: BlogPost[] = blogPostStubs.map(post => {
    // This is a placeholder for the full content.
    // For a real app, you'd fetch this content or have it fully written out.
    // The first post is fully fleshed out as an example.
    const content = post.slug === 'what-is-the-difference-between-money-and-currency' 
        ? moneyVsCurrencyContent
        // FIX: Converted JSX to React.createElement calls to be valid in a .ts file.
        : React.createElement("p", null, post.excerpt, " ", React.createElement("strong", null, "(Full article content coming soon...)"));
    
    return {
        ...post,
        content: content,
        jsonLd: createJsonLd(post),
    };
});