import React from 'react';

const posts = [
  {
    author: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    likes: 42,
    caption: 'Just completed my 10th AI interview practice session on GrowWith! #CareerGrowth #InterviewPrep',
  },
  {
    author: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    likes: 78,
    caption: 'Just uploaded my latest tech interview tips video! #TechInterviews #WebDevelopment',
  },
];

export default function FeedList() {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-blue-100 mb-4">
          <div className="flex items-center gap-3 p-4 border-b border-blue-50">
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-xs text-gray-400">{post.time}</div>
            </div>
          </div>
          <img src={post.image} alt="Post" className="w-full max-h-96 object-cover" />
          <div className="flex items-center gap-4 px-4 py-2">
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer">❤️</span>
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer">💬</span>
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer ml-auto">🔖</span>
          </div>
          <div className="px-4 pb-4">
            <div className="font-semibold">{post.likes} likes</div>
            <div className="text-sm">
              <span className="font-semibold">{post.author}</span> {post.caption}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 