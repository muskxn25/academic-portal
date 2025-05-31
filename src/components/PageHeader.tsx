import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Dashboard', to: '/' },
  { name: 'Find Mentors', to: '/mentorship' },
  { name: 'Skill Certifications', to: '/skill-badges' },
  { name: 'Job Board', to: '/job-board' },
];

export default function PageHeader() {
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

  return (
    <header className="w-full bg-white border-b border-blue-100 shadow-sm flex items-center justify-between px-8 py-3 mb-8">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <Link to="/" className="font-bold text-2xl text-blue-700">
          Grow<span className="text-blue-400">With</span>
        </Link>
      </div>
      {/* Navigation Links */}
      <nav className="flex gap-4">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-1 rounded font-semibold transition
              ${location.pathname === link.to
                ? 'text-blue-700 bg-blue-50 border-b-2 border-blue-500'
                : 'text-gray-700 hover:text-blue-500 hover:bg-blue-50'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      {/* Profile Dropdown */}
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
  );
} 