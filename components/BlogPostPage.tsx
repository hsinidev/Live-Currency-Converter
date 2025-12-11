import React from 'react';
import type { BlogPost } from '../types';
import { StaticPageWrapper } from './StaticPageWrapper';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <button onClick={onBack} className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold">
            &larr; Back to Blog
        </button>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-6">Published on {post.date} by {post.author}</p>
            
            <aside className="my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Table of Contents</h2>
                <ul className="space-y-2">
                    {post.tableOfContents.map(item => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className="text-indigo-600 hover:underline">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>

            <article className="prose prose-indigo max-w-none text-gray-700">
                {post.content}
            </article>

            <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-6">
                    {post.faq.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-lg text-gray-800">{item.question}</h3>
                            <p className="mt-1 text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(post.jsonLd) }} />
    </div>
  );
};
