export default function FeedList() {
  const posts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      caption: "Just finished my final project presentation! The professors were really impressed with our team's work. Can't believe we're almost done with this semester! 🎓",
      likes: 24
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      caption: "Late night study session at the library. Coffee is my best friend right now ☕️ #finalsweek #engineering",
      likes: 18
    },
    {
      id: 3,
      author: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      caption: "Amazing workshop on machine learning today! Learned so much about neural networks and AI applications. The future is here! 🤖",
      likes: 31
    },
    {
      id: 4,
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      time: "8 hours ago",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
      caption: "Campus life is the best! Beautiful day for a walk between classes. The architecture here is absolutely stunning 🏛️",
      likes: 42
    }
  ];

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