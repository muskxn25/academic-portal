import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, UserGroupIcon, CheckBadgeIcon, BriefcaseIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Home Feed', icon: HomeIcon, to: '/' },
  { name: 'AI Interview Practice', icon: AcademicCapIcon, to: '/interview-practice' },
  { name: 'Find Mentors', icon: UserGroupIcon, to: '/mentorship' },
  { name: 'Skill Certifications', icon: CheckBadgeIcon, to: '/skill-certifications' },
  { name: 'Job Board', icon: BriefcaseIcon, to: '/job-board' },
  { name: 'My Profile', icon: UserCircleIcon, to: '/profile' },
  { name: 'Settings', icon: Cog6ToothIcon, to: '/settings' },
];

export default function SidebarMenu() {
  const location = useLocation();
  return (
    <aside className="w-full lg:w-64 bg-white border-r border-blue-100 min-h-screen py-6 px-2 flex flex-col gap-2">
      {menuItems.map(item => (
        <Link
          key={item.name}
          to={item.to}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition text-gray-800 hover:bg-blue-50 ${location.pathname === item.to ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500' : ''}`}
        >
          <item.icon className={`h-5 w-5 ${location.pathname === item.to ? 'text-blue-500' : 'text-gray-400'}`} />
          {item.name}
        </Link>
      ))}
    </aside>
  );
} 