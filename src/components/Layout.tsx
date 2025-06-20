import React, { ReactNode } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import TopNavBar from './TopNavBar';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const sidebarMenu = [
  { name: 'Home', icon: HomeIcon, to: '/' },
  { name: 'Courses', icon: AcademicCapIcon, to: '/courses' },
  { name: 'Network', icon: UserCircleIcon, to: '/network' },
  { name: 'Messages', icon: ChatBubbleLeftIcon, to: '/messages' },
];

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen bg-[#F5F5F5] font-sans antialiased text-[#333333]">
      <TopNavBar />
      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-[#E0E0E0] bg-white pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0055FF] rounded-md flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-semibold text-xl text-[#333333]">
                Grow<span className="text-[#0055FF]">With</span>
              </span>
            </Link>
          </div>
          <nav className="mt-8 flex flex-1 flex-col">
            <div className="space-y-1 px-2">
              {sidebarMenu.map(item => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${location.pathname === item.to
                      ? 'bg-[#B3D9FF] text-[#0055FF]'
                      : 'text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0055FF]'}`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6
                      ${location.pathname === item.to ? 'text-[#0055FF]' : 'text-[#666666] group-hover:text-[#0055FF]'}`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Progress Card */}
          <div className="mx-2 mt-auto p-4 bg-gradient-to-br from-[#0055FF] to-[#0066CC] rounded-lg shadow-md text-white overflow-hidden relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            <h4 className="relative z-10 text-lg font-semibold mb-2">Your Progress</h4>
            <p className="relative z-10 text-sm mb-4">Keep up the great work! You're on track to achieve your goals.</p>
            <div className="relative z-10 mb-2">
              <div className="flex justify-between text-sm">
                <span>Profile Complete</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-[#E0E0E0] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#0055FF] h-2.5 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <button className="relative z-10 w-full bg-white text-[#0055FF] py-2 rounded-md text-sm font-semibold hover:bg-[#F5F5F5] transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#333333] bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#0055FF] rounded-md flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg">G</span>
                    </div>
                    <span className="font-semibold text-xl text-[#333333]">
                      Grow<span className="text-[#0055FF]">With</span>
                    </span>
                  </Link>
                </div>
                <nav className="mt-5 flex flex-1 flex-col overflow-y-auto">
                  <div className="space-y-1 px-2">
                    {sidebarMenu.map(item => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md
                          ${location.pathname === item.to
                            ? 'bg-[#B3D9FF] text-[#0055FF]'
                            : 'text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0055FF]'}`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon
                          className={`mr-4 flex-shrink-0 h-6 w-6
                            ${location.pathname === item.to ? 'text-[#0055FF]' : 'text-[#666666] group-hover:text-[#0055FF]'}`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-[#333333] hover:text-[#0055FF] hover:bg-[#B3D9FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0055FF]"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children || <Outlet />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 