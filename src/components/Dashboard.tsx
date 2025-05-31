import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  UserCircleIcon,
  AcademicCapIcon,
  UserGroupIcon,
  StarIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  HeartIcon,
  UsersIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  TrophyIcon,
  UserIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const sidebarMenu = [
  { name: 'Home Feed', icon: HomeIcon, to: '/' },
  { name: 'AI Interview Practice', icon: AcademicCapIcon, to: '/ai-interview' },
  { name: 'Find Mentors', icon: UserGroupIcon, to: '#' },
  { name: 'Skill Certifications', icon: CheckBadgeIcon, to: '#' },
  { name: 'Job Board', icon: BriefcaseIcon, to: '#' },
];

const stories = [
  { name: 'Your Story', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sarah Johnson', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Chen', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Priya Patel', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'David Kim', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Emma Wilson', img: 'https://randomuser.me/api/portraits/women/29.jpg' },
  { name: 'James Taylor', img: 'https://randomuser.me/api/portraits/men/86.jpg' },
];

const mentors = [
  {
    name: 'Jennifer Lee',
    title: 'Senior Product Manager at Google',
    img: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 4.9,
  },
  {
    name: 'Robert Garcia',
    title: 'Software Engineer at Microsoft',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.8,
  },
  {
    name: 'Sophia Williams',
    title: 'UX Designer at Adobe',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 4.7,
  },
];

const jobs = [
  {
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    title: 'Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    skills: ['JavaScript', 'React', 'CSS'],
  },
  {
    company: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    title: 'Product Manager',
    location: 'Seattle, WA',
    type: 'Full-time',
    skills: ['Product Management', 'Agile'],
  },
];

const badges = [
  {
    name: 'JavaScript',
    icon: <span className="text-yellow-400 text-3xl">JS</span>,
    level: 'Advanced',
  },
  {
    name: 'React',
    icon: <span className="text-sky-400 text-3xl">⚛️</span>,
    level: 'Intermediate',
  },
  {
    name: 'SQL',
    icon: <span className="text-blue-500 text-3xl"><i className="fas fa-database" /></span>,
    level: 'Beginner',
  },
  {
    name: 'Team Leadership',
    icon: <UsersIcon className="h-10 w-10 text-blue-700" />,
    level: 'Intermediate',
  },
];

export default function Dashboard() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Dashboard', to: '/' },
    { name: 'Colleges', to: '/colleges' },
    { name: 'Departments', to: '/departments' },
    { name: 'Academic Materials', to: '/materials' },
    { name: 'Courses', to: '/courses' },
  ];
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* New Main Header */}
      <header className="w-full bg-white border-b border-blue-100 shadow-sm flex items-center justify-between px-8 py-3">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold text-2xl text-blue-700">
            Grow<span className="text-blue-400">With</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            className="bg-blue-100 rounded-lg px-4 py-2 w-72 border-none outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-1 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border cursor-pointer"
            />
            <ChevronDownIcon
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white border border-blue-100 rounded-lg shadow-lg z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-t-lg"
                onClick={() => setDropdownOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-b-lg"
                onClick={() => setDropdownOpen(false)}
              >
                Settings
              </Link>
            </div>
          )}
        </div>
      </header>
      {/* End Main Header */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 px-2 dashboard-container">
        {/* Sidebar */}
        <aside className="lg:col-span-3 mb-8 lg:mb-0">
          <div className="sticky top-24">
            <nav className="bg-white rounded-xl border border-blue-100 overflow-hidden sidebar-menu mb-4">
              {sidebarMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`flex items-center gap-4 px-6 py-4 sidebar-item text-base font-medium transition text-gray-800 border-b border-blue-100 last:border-b-0 ${
                    location.pathname === item.to
                      ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700 font-semibold'
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <item.icon className={`h-5 w-5 sidebar-icon ${location.pathname === item.to ? 'text-blue-500' : 'text-gray-600'}`} />
                  <span className="nav-text">{item.name}</span>
                </Link>
              ))}
            </nav>
            {/* Progress Card */}
            <div className="bg-white rounded-xl border border-blue-100 content-card">
              <div className="px-6 py-4 border-b border-blue-100 card-header font-semibold">Your Progress</div>
              <div className="p-6 card-body">
                <div className="mb-4">
                  <div className="flex justify-between mb-1 progress-title">
                    <span className="progress-label font-medium">Profile Completion</span>
                    <span className="progress-value text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2 progress">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1 progress-title">
                    <span className="progress-label font-medium">Interview Readiness</span>
                    <span className="progress-value text-gray-500">70%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2 progress">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1 progress-title">
                    <span className="progress-label font-medium">Skills Verified</span>
                    <span className="progress-value text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2 progress">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <a href="#" className="inline-block btn btn-sm btn-outline-primary border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm font-semibold hover:bg-blue-50">View Career Path</a>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 flex flex-col gap-6">
          {/* Stories */}
          <div className="flex gap-4 overflow-x-auto bg-white rounded-xl border border-blue-100 stories-container mb-4 p-4">
            {stories.map((story) => (
              <div key={story.name} className="flex flex-col items-center min-w-[70px] story">
                <div className="w-16 h-16 rounded-full border-4 border-blue-400 p-1 bg-white mb-2 story-avatar">
                  <img src={story.img} alt={story.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <span className="text-xs text-gray-800 truncate w-16 text-center story-username">{story.name}</span>
              </div>
            ))}
          </div>

          {/* Feed Posts */}
          <div className="bg-white rounded-xl border border-blue-100 post mb-4">
            <div className="flex items-center gap-3 p-4 border-b border-blue-50 post-header">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="w-10 h-10 rounded-full post-avatar" />
              <div>
                <div className="font-semibold post-user">Sarah Johnson</div>
                <div className="text-xs text-gray-400 post-time">2 hours ago</div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Post"
              className="w-full max-h-96 object-cover post-image"
            />
            <div className="flex items-center gap-4 px-4 py-2 post-actions">
              <HeartIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action" />
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action" />
              <BookmarkIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action ml-auto" />
            </div>
            <div className="px-4 pb-4">
              <div className="font-semibold post-likes">42 likes</div>
              <div className="text-sm post-caption">
                <span className="font-semibold post-caption-username">Sarah Johnson</span> Just completed my 10th AI interview practice session on GrowWith! The feedback has been incredibly helpful. My confidence has improved so much since I started. #CareerGrowth #InterviewPrep
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-blue-100 post mb-4">
            <div className="flex items-center gap-3 p-4 border-b border-blue-50 post-header">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Chen" className="w-10 h-10 rounded-full post-avatar" />
              <div>
                <div className="font-semibold post-user">Michael Chen</div>
                <div className="text-xs text-gray-400 post-time">5 hours ago</div>
              </div>
            </div>
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 w-full mb-3">
                <iframe
                  src="https://www.youtube.com/embed/C0DPdy98e4c"
                  title="YouTube video"
                  allowFullScreen
                  className="w-full h-60 rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 post-actions">
              <HeartIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action" />
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action" />
              <BookmarkIcon className="h-6 w-6 text-gray-800 hover:text-blue-500 cursor-pointer post-action ml-auto" />
            </div>
            <div className="px-4 pb-4">
              <div className="font-semibold post-likes">78 likes</div>
              <div className="text-sm post-caption">
                <span className="font-semibold post-caption-username">Michael Chen</span> Just uploaded my latest tech interview tips video! In this one, I cover the top 5 questions you'll face in a frontend developer interview and how to answer them effectively. Let me know what you think in the comments! #TechInterviews #WebDevelopment
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* AI Interview Practice */}
          <div className="bg-white rounded-xl border border-blue-100 content-card mb-4">
            <div className="flex justify-between items-center px-6 py-4 border-b border-blue-100 card-header">
              <span className="font-semibold">AI Interview Practice</span>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">View All</a>
            </div>
            <div className="p-0 card-body">
              <div className="rounded-xl overflow-hidden practice-card border-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Interview Practice"
                  className="w-full h-36 object-cover practice-image"
                />
                <div className="p-4 practice-body">
                  <h5 className="font-semibold mb-2 practice-title">Software Engineer Interview</h5>
                  <p className="text-gray-500 text-sm mb-3 practice-description">Practice technical and behavioral questions for software engineering roles.</p>
                  <div className="flex justify-between text-gray-400 text-xs mb-3 practice-stats">
                    <span className="flex items-center gap-1"><ClockIcon className="h-4 w-4" /> 30 min</span>
                    <span className="flex items-center gap-1"><UserIcon className="h-4 w-4" /> 1,245 practiced</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition">Start Practice</button>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Mentors */}
          <div className="bg-white rounded-xl border border-blue-100 content-card mb-4">
            <div className="flex justify-between items-center px-6 py-4 border-b border-blue-100 card-header">
              <span className="font-semibold">Recommended Mentors</span>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">View All</a>
            </div>
            <div className="p-0 card-body">
              {mentors.map((mentor, idx) => (
                <div key={mentor.name} className={`flex items-center px-6 py-4 border-b border-blue-100 mentor-card ${idx === mentors.length - 1 ? 'border-b-0' : ''}`}>
                  <img src={mentor.img} alt={mentor.name} className="w-12 h-12 rounded-full mentor-avatar mr-4" />
                  <div className="flex-1 mentor-info">
                    <h6 className="font-semibold mentor-name">{mentor.name}</h6>
                    <p className="text-gray-500 text-sm mentor-title">{mentor.title}</p>
                  </div>
                  <div>
                    <span className="text-yellow-400 mentor-rating flex items-center font-semibold"><StarIcon className="h-5 w-5 mr-1" /> {mentor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Recommendations */}
          <div className="bg-white rounded-xl border border-blue-100 content-card mb-4">
            <div className="flex justify-between items-center px-6 py-4 border-b border-blue-100 card-header">
              <span className="font-semibold">Job Recommendations</span>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">View All</a>
            </div>
            <div className="p-0 card-body">
              {jobs.map((job, idx) => (
                <div key={job.title} className={`px-6 py-4 border-b border-blue-100 job-card ${idx === jobs.length - 1 ? 'border-b-0' : ''}`}>
                  <div className="flex items-center mb-2 job-company">
                    <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-lg mr-3 job-logo bg-blue-50 p-1 object-contain" />
                    <div className="font-semibold">{job.company}</div>
                  </div>
                  <h6 className="font-semibold job-title">{job.title}</h6>
                  <div className="flex text-gray-500 text-sm mb-2 job-details">
                    <span className="flex items-center mr-4 job-location"><i className="fas fa-map-marker-alt mr-1" /> {job.location}</span>
                    <span className="flex items-center job-type"><ClockIcon className="h-4 w-4 mr-1" /> {job.type}</span>
                  </div>
                  <div className="flex flex-wrap mb-2 job-skills">
                    {job.skills.map((skill) => (
                      <span key={skill} className="bg-blue-50 text-blue-500 text-xs px-2 py-1 rounded mr-2 mb-2 skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button className="btn btn-sm btn-outline-primary border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm font-semibold hover:bg-blue-50">Apply Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* Your Badges */}
          <div className="bg-white rounded-xl border border-blue-100 content-card">
            <div className="flex justify-between items-center px-6 py-4 border-b border-blue-100 card-header">
              <span className="font-semibold">Your Skill Badges</span>
              <a href="#" className="text-blue-500 text-sm font-medium hover:underline">View All</a>
            </div>
            <div className="p-6 card-body">
              <div className="flex flex-wrap badges-container">
                {badges.map((badge) => (
                  <div key={badge.name} className="flex flex-col items-center w-24 m-2 badge-item">
                    <div className="badge-icon w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-2xl text-blue-500">
                      {badge.icon}
                    </div>
                    <div className="badge-name text-sm font-medium text-center">{badge.name}</div>
                    <div className="badge-level text-xs text-gray-500">{badge.level}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                <a href="#" className="inline-block btn btn-sm btn-outline-primary border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm font-semibold hover:bg-blue-50">Earn More Badges</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}