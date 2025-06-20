import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  UserPlusIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

interface User {
  id: number;
  name: string;
  role: string;
  image: string;
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  experience: {
    company: string;
    position: string;
    duration: string;
  }[];
  skills: string[];
  location: string;
  mutualConnections: number;
  interests: string[];
  achievements: {
    title: string;
    description: string;
    date: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }[];
}

export default function Network() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState({
    role: '',
    skills: [] as string[],
    location: '',
    education: ''
  });

  // Sample data - replace with actual data from your backend
  const users: User[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      education: [
        {
          institution: 'Stanford University',
          degree: 'M.S. Computer Science',
          year: '2022'
        }
      ],
      experience: [
        {
          company: 'Google',
          position: 'Software Engineer',
          duration: '2022-Present'
        }
      ],
      skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
      location: 'San Francisco, CA',
      mutualConnections: 12,
      interests: ['AI', 'Web Development', 'Open Source'],
      achievements: [
        {
          title: 'Hackathon Winner',
          description: 'Won first place in AI Innovation Challenge',
          date: '2023'
        }
      ],
      projects: [
        {
          title: 'AI-Powered Study Assistant',
          description: 'An intelligent system to help students learn better',
          technologies: ['Python', 'TensorFlow', 'React'],
          link: 'https://github.com/example/project'
        }
      ]
    },
    // Add more users as needed
  ];

  const filterOptions = {
    roles: ['Student', 'Professional', 'Mentor', 'Alumni'],
    skills: ['React', 'Python', 'Machine Learning', 'Data Science', 'UI/UX'],
    locations: ['San Francisco', 'New York', 'London', 'Berlin'],
    education: ['Computer Science', 'Engineering', 'Business', 'Design']
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, skills, or interests..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFilters.role}
              onChange={(e) => setSelectedFilters({...selectedFilters, role: e.target.value})}
            >
              <option value="">All Roles</option>
              {filterOptions.roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFilters.location}
              onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
            >
              <option value="">All Locations</option>
              {filterOptions.locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Network Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex space-x-4 border-b border-gray-200">
          {['all', 'students', 'mentors', 'alumni'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium capitalize
                ${activeTab === tab
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            
            {/* Profile Section */}
            <div className="px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-4 border-white -mt-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.role}</p>
                  </div>
                </div>
                <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
                  <UserPlusIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Location and Education */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  <span>{user.education[0].institution}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Project</h4>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-medium">{user.projects[0].title}</h5>
                  <p className="text-sm text-gray-600 mt-1">{user.projects[0].description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.projects[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white text-gray-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-700">
                  <ChatBubbleLeftIcon className="h-5 w-5" />
                  <span className="text-sm">Message</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-700">
                  <BookmarkIcon className="h-5 w-5" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-700">
                  <ShareIcon className="h-5 w-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 