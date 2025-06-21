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
  ShareIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  XMarkIcon
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
  openToHelp?: boolean;
  verified?: boolean;
  messageLimit?: number;
  messagesThisWeek?: number;
  tips?: string[];
}

export default function Network() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState({
    role: '',
    skills: [] as string[],
    location: '',
    education: '',
    openToHelp: false
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

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
      ],
      openToHelp: true,
      verified: true,
      messageLimit: 3,
      messagesThisWeek: 1,
      tips: [
        'Use keywords from the job description in your resume.',
        'Highlight public sector experience.',
        'Showcase teamwork and analytical skills.'
      ]
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      education: [
        {
          institution: 'University of Waterloo',
          degree: 'B.S. Software Engineering',
          year: '2021'
        }
      ],
      experience: [
        {
          company: 'Shopify',
          position: 'Frontend Developer',
          duration: '2021-Present'
        }
      ],
      skills: ['React', 'TypeScript', 'UI/UX'],
      location: 'Remote',
      mutualConnections: 8,
      interests: ['E-commerce', 'Design', 'Mentoring'],
      achievements: [],
      projects: [],
      openToHelp: false,
      verified: true,
      messageLimit: 2,
      messagesThisWeek: 2,
      tips: [
        'Show your open-source contributions.',
        'Emphasize product thinking and impact.'
      ]
    }
    // Add more users as needed
  ];

  const filterOptions = {
    roles: ['Student', 'Professional', 'Mentor', 'Alumni'],
    skills: ['React', 'Python', 'Machine Learning', 'Data Science', 'UI/UX'],
    locations: ['San Francisco', 'New York', 'London', 'Berlin'],
    education: ['Computer Science', 'Engineering', 'Business', 'Design']
  };

  // Filtering logic
  const filteredUsers = users.filter(user => {
    if (selectedFilters.openToHelp && !user.openToHelp) return false;
    if (selectedFilters.role && user.role !== selectedFilters.role) return false;
    if (selectedFilters.location && user.location !== selectedFilters.location) return false;
    if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase()) && !user.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) return false;
    return true;
  });

  // Modal handlers
  const openModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
    setMessage('');
    setSuccess(false);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setMessage('');
    setSuccess(false);
  };
  const handleSend = () => {
    setSuccess(true);
    setTimeout(() => closeModal(), 2000);
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
          <div className="flex gap-2 items-center">
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
            <label className="flex items-center gap-1 text-sm text-blue-700 font-medium cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.openToHelp}
                onChange={e => setSelectedFilters({...selectedFilters, openToHelp: e.target.checked})}
                className="accent-blue-600 h-4 w-4 rounded"
              />
              <CheckCircleIcon className="h-4 w-4 text-green-500" /> Open to Help
            </label>
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
        {filteredUsers.map((user) => (
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
                    <div className="flex items-center gap-2 mt-1">
                      {user.verified && <ShieldCheckIcon className="h-4 w-4 text-blue-500" title="Verified" />}
                      {user.openToHelp && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Open to Help</span>}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
                    <UserPlusIcon className="h-5 w-5" />
                  </button>
                  {user.openToHelp && user.messageLimit && user.messagesThisWeek !== undefined && (
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-semibold disabled:opacity-50"
                      disabled={user.messagesThisWeek >= user.messageLimit}
                      onClick={() => openModal(user)}
                    >
                      Ask for Guidance
                    </button>
                  )}
                  {user.openToHelp && user.messageLimit && user.messagesThisWeek !== undefined && (
                    <span className="text-xs text-gray-500 mt-1">{user.messageLimit - user.messagesThisWeek} requests left</span>
                  )}
                </div>
              </div>

              {/* Location and Education */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  <span>{user.education[0]?.degree} @ {user.education[0]?.institution}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {user.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Guidance Request */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={closeModal}><XMarkIcon className="h-6 w-6" /></button>
            <div className="flex items-center gap-3 mb-4">
              <img src={selectedUser.image} alt={selectedUser.name} className="h-10 w-10 rounded-full" />
              <div>
                <div className="font-semibold text-gray-900">{selectedUser.name}</div>
                <div className="text-xs text-gray-500">{selectedUser.role} @ {selectedUser.experience[0]?.company}</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-2">Request Guidance</h3>
            {success ? (
              <div className="text-green-600 font-semibold text-center py-6">Your request was sent! {selectedUser.name} will get back to you soon.</div>
            ) : (
              <>
                <textarea
                  className="w-full border border-blue-200 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Write a short message about what you need help with (e.g. resume review, interview tips, company culture)"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                  onClick={handleSend}
                  disabled={!message.trim()}
                >
                  Send Request
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 