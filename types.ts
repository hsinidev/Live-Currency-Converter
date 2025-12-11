import React from 'react';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
  tableOfContents: { title: string; id: string; }[];
  faq: { question: string; answer: string; }[];
  jsonLd: object;
}