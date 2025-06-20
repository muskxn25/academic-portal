import React, { useState } from 'react';
import { MagnifyingGlassIcon, UserPlusIcon, HeartIcon, ChatBubbleLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    image: string;
  };
  content: string;
  likes: number;
  comments: number;
  endorsements: number;
  timestamp: string;
}

interface Project {
  id: number;
  title: string;
  technologies: string[];
  link: string;
  feedback: number;
  author: {
    name: string;
    image: string;
  };
}

interface Alumni {
  id: number;
  name: string;
  college: string;
  field: string;
  currentRole: string;
  image: string;
}

export default function SocialFeed() {
  const [activeFilter, setActiveFilter] = useState('Students');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with actual data from your backend
  const suggestedConnections = [
    { id: 1, name: 'Sarah Johnson', role: 'Software Engineer', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Mike Chen', role: 'Data Scientist', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Emma Davis', role: 'UX Designer', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
  ];

  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        role: 'Senior Developer',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      content: 'Just completed my latest project using React and Node.js! Check it out on GitHub.',
      likes: 24,
      comments: 8,
      endorsements: 5,
      timestamp: '2 hours ago'
    },
    // Add more posts as needed
  ];

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Study Assistant',
      technologies: ['Python', 'TensorFlow', 'React'],
      link: 'https://github.com/example/project',
      feedback: 4.8,
      author: {
        name: 'Alex Smith',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
      }
    },
    // Add more projects as needed
  ];

  const alumniList: Alumni[] = [
    {
      id: 1,
      name: 'David Wilson',
      college: 'MIT',
      field: 'Computer Science',
      currentRole: 'Tech Lead at Google',
      image: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    // Add more alumni as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search connections, posts, or projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            {['Students', 'Mentors', 'Alumni'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeFilter === filter
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Connections */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">👥 Suggested Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestedConnections.map((connection) => (
            <div key={connection.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <img src={connection.image} alt={connection.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <h3 className="font-medium">{connection.name}</h3>
                <p className="text-sm text-gray-500">{connection.role}</p>
              </div>
              <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
                <UserPlusIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="mb-4">
          <textarea
            placeholder="Share something with your network..."
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800">
              Post
            </button>
          </div>
        </div>

        {posts.map((post) => (
          <div key={post.id} className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex items-start space-x-3">
              <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{post.author.name}</h3>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                </div>
                <p className="mt-2">{post.content}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-700">
                    <HeartIcon className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-700">
                    <ChatBubbleLeftIcon className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-700">
                    <StarIcon className="h-5 w-5" />
                    <span>{post.endorsements}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">💼 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <img src={project.author.image} alt={project.author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-500">by {project.author.name}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a href={project.link} className="text-blue-700 hover:underline text-sm">View Project</a>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">{project.feedback}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Finder */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4">🎓 Alumni Finder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alumniList.map((alumni) => (
            <div key={alumni.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <img src={alumni.image} alt={alumni.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1">
                <h3 className="font-medium">{alumni.name}</h3>
                <p className="text-sm text-gray-500">{alumni.currentRole}</p>
                <p className="text-sm text-gray-500">{alumni.college} - {alumni.field}</p>
              </div>
              <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
                <UserPlusIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 