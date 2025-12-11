import React from 'react';
import type { BlogPost } from '../types';
import { StaticPageWrapper } from './StaticPageWrapper';

interface BlogListPageProps {
  posts: BlogPost[];
  onSelectPost: (slug: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ posts, onSelectPost }) => {
  return (
    <StaticPageWrapper title="Our Blog & Currency Guides">
      <p className="text-lg text-gray-600 mb-12">
        Explore our collection of articles on currency, economics, and finance to make informed decisions.
      </p>
      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.slug} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/80 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img className="h-48 w-full object-cover" src={post.image} alt="" />
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-1">By {post.author} on {post.date}</p>
                <p className="text-gray-700 text-base mt-3 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <button
                onClick={() => onSelectPost(post.slug)}
                className="mt-6 self-start text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </StaticPageWrapper>
  );
};
