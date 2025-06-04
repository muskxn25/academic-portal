import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SidebarMenu from '../components/SidebarMenu';
import StoryList from '../components/StoryList';
import FeedList from '../components/FeedList';
import RightSidebar from '../components/RightSidebar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-50">
      <TopNavBar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 px-2">
        {/* Sidebar */}
        <div className="lg:col-span-3 mb-8 lg:mb-0">
          <SidebarMenu />
        </div>
        {/* Main Content */}
        <main className="lg:col-span-6 flex flex-col gap-6">
          <StoryList />
          <FeedList />
        </main>
        {/* Right Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
} 