import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, UserGroupIcon, CheckBadgeIcon, BriefcaseIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Home Feed', icon: HomeIcon, to: '/' },
  { name: 'AI Interview Practice', icon: AcademicCapIcon, to: '/interview-practice' },
  { name: 'Expert Coaches', icon: UserGroupIcon, to: '/expert-coaches' },
  { name: 'Skill Certifications', icon: CheckBadgeIcon, to: '/skill-certifications' },
  { name: 'Job Board', icon: BriefcaseIcon, to: '/job-board' },
  { name: 'My Profile', icon: UserCircleIcon, to: '/profile' },
  { name: 'Settings', icon: Cog6ToothIcon, to: '/settings' },
];

export default function SidebarMenu() {
  const location = useLocation();
  return (
    <nav className="mt-8 flex flex-1 flex-col">
      <div className="space-y-1 px-2">
        {menuItems.map(item => (
          <Link
            key={item.name}
            to={item.to}
            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200
              ${location.pathname === item.to
                ? 'bg-primary-100 text-primary-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`}
          >
            <item.icon
              className={`mr-3 flex-shrink-0 h-6 w-6
                ${location.pathname === item.to ? 'text-primary-600' : 'text-gray-500 group-hover:text-primary-600'}`}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        ))}
      </div>

      {/* Progress Card */}
      <div className="mx-2 mt-auto p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md text-white overflow-hidden relative">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <h4 className="relative z-10 text-lg font-semibold mb-2">Your Progress</h4>
        <p className="relative z-10 text-sm mb-4">Keep up the great work! You're on track to achieve your goals.</p>
        <div className="relative z-10 mb-2">
          <div className="flex justify-between text-sm">
            <span>Profile Complete</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5 mt-1">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
        <button className="relative z-10 w-full bg-white text-primary-600 py-2 rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors duration-200">
          View Details
        </button>
      </div>
    </nav>
  );
} 