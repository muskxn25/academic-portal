import React from 'react';
import StoryList from '../components/StoryList';
import FeedList from '../components/FeedList';
import RightSidebar from '../components/RightSidebar';
import { AcademicCapIcon, BriefcaseIcon, UserGroupIcon, MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline';

const featuredAnnouncements = [
  { title: 'Welcome to GrowWith!', desc: 'Explore new features and connect with your peers.', date: 'Today' },
  { title: 'Upcoming Career Fair', desc: 'Meet top employers and get career advice.', date: 'June 25' },
];

const trendingJobs = [
  { title: 'Frontend Developer', company: 'Google', location: 'Remote', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { title: 'Product Manager', company: 'Microsoft', location: 'Seattle, WA', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
];

const topMentors = [
  { name: 'Jennifer Lee', title: 'Product Manager, Google', rating: 4.9, avatar: 'https://randomuser.me/api/portraits/women/28.jpg' },
  { name: 'Robert Garcia', title: 'Engineer, Microsoft', rating: 4.8, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Welcome Banner */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-2 flex flex-col md:flex-row items-center justify-between shadow-sm">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome to GrowWith!</h1>
              <p className="text-slate-500 text-lg">Your personalized academic and career hub.</p>
            </div>
            <AcademicCapIcon className="h-16 w-16 text-blue-100 hidden md:block" />
          </div>
          {/* Featured Announcements */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 mb-2">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Featured Announcements</h2>
            <div className="flex flex-col md:flex-row gap-4">
              {featuredAnnouncements.map((a, idx) => (
                <div key={idx} className="flex-1 bg-slate-50 rounded-lg p-4 border border-gray-100">
                  <div className="font-bold text-blue-700 mb-1">{a.title}</div>
                  <div className="text-slate-700 mb-1">{a.desc}</div>
                  <div className="text-xs text-slate-400">{a.date}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 mb-2 shadow-sm">
            <MagnifyingGlassIcon className="h-5 w-5 text-blue-500" />
            <input
              type="text"
              placeholder="Search posts, jobs, mentors, or resources..."
              className="flex-1 border-none outline-none bg-transparent text-base text-slate-700"
            />
          </div>
          {/* Stories */}
          <StoryList />
          {/* Main Feed */}
          <FeedList />
        </div>
        {/* Right Sidebar Modernized */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Trending Jobs */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-2">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"><BriefcaseIcon className="h-5 w-5 text-blue-500" /> Trending Jobs</h2>
            <ul className="space-y-3">
              {trendingJobs.map((job, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img src={job.logo} alt={job.company} className="w-8 h-8 rounded bg-gray-100" />
                  <div>
                    <div className="font-semibold text-slate-800">{job.title}</div>
                    <div className="text-xs text-slate-500">{job.company} • {job.location}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Top Mentors */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-2">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2"><UserGroupIcon className="h-5 w-5 text-blue-500" /> Top Mentors</h2>
            <ul className="space-y-3">
              {topMentors.map((mentor, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img src={mentor.avatar} alt={mentor.name} className="w-8 h-8 rounded-full border-2 border-blue-100" />
                  <div>
                    <div className="font-semibold text-slate-800">{mentor.name}</div>
                    <div className="text-xs text-slate-500">{mentor.title}</div>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-yellow-500 font-bold text-sm"><StarIcon className="h-4 w-4" />{mentor.rating}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Existing Sidebar Widgets */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}