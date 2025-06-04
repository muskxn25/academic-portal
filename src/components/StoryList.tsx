import React from 'react';

const stories = [
  { name: 'Your Story', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sarah Johnson', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Chen', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Priya Patel', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'David Kim', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Emma Wilson', img: 'https://randomuser.me/api/portraits/women/29.jpg' },
  { name: 'James Taylor', img: 'https://randomuser.me/api/portraits/men/86.jpg' },
];

export default function StoryList() {
  return (
    <div className="flex gap-4 overflow-x-auto bg-white rounded-xl border border-blue-100 mb-4 p-4">
      {stories.map((story) => (
        <div key={story.name} className="flex flex-col items-center min-w-[70px]">
          <div className="w-16 h-16 rounded-full border-4 border-blue-400 p-1 bg-white mb-2">
            <img src={story.img} alt={story.name} className="w-full h-full rounded-full object-cover" />
          </div>
          <span className="text-xs text-gray-800 truncate w-16 text-center">{story.name}</span>
        </div>
      ))}
    </div>
  );
} 