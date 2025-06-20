import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BellIcon, 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon,
  UserGroupIcon,
  HomeIcon,
  AcademicCapIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Courses', to: '/courses', icon: AcademicCapIcon },
  { name: 'Mentorship', to: '/mentorship', icon: UserGroupIcon },
  { name: 'Community', to: '/community', icon: ChatBubbleLeftIcon },
  { name: 'Network', to: '/network', icon: UserGroupIcon },
];

export default function TopNavBar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E0E0E0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0055FF] rounded-md flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-semibold text-xl text-[#333333]">
                Grow<span className="text-[#0055FF]">With</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2
                  ${location.pathname === link.to
                    ? 'text-[#0055FF] bg-[#B3D9FF]'
                    : 'text-[#333333] hover:text-[#0055FF] hover:bg-[#F5F5F5]'}`}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 text-[#333333] hover:text-[#0055FF] hover:bg-[#B3D9FF] rounded-full transition-colors duration-200"
              >
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-[#E0E0E0] py-2">
                  <div className="px-4 py-2 border-b border-[#E0E0E0]">
                    <h3 className="text-sm font-semibold text-[#333333]">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-[#F5F5F5] cursor-pointer">
                      <p className="text-sm text-[#333333]">New course material uploaded</p>
                      <p className="text-xs text-[#666666] mt-1">2 minutes ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#F5F5F5] cursor-pointer">
                      <p className="text-sm text-[#333333]">Assignment deadline reminder</p>
                      <p className="text-xs text-[#666666] mt-1">1 hour ago</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-[#E0E0E0]">
                    <button className="text-sm text-[#0055FF] hover:text-[#0066CC] font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-full text-[#333333] hover:text-[#0055FF] focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:ring-offset-2"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-[#E0E0E0]"
                />
                <span className="hidden md:inline text-[#333333] font-medium">John Doe</span>
                <ChevronDownIcon className="h-5 w-5 text-[#666666]" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-12 w-44 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-50 py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0055FF]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0055FF]"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 text-[#333333] hover:text-[#0055FF] hover:bg-[#B3D9FF] rounded-full transition-colors duration-200"
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#333333] hover:text-[#0055FF] hover:bg-[#B3D9FF] rounded-full transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${location.pathname === link.to
                    ? 'text-[#0055FF] bg-[#B3D9FF]'
                    : 'text-[#333333] hover:text-[#0055FF] hover:bg-[#F5F5F5]'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-[#E0E0E0] pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-[#333333]">John Doe</div>
                  <div className="text-sm font-medium text-[#666666]">john@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#333333] hover:text-[#0055FF] hover:bg-[#F5F5F5]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#333333] hover:text-[#0055FF] hover:bg-[#F5F5F5]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 