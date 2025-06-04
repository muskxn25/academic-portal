import React from 'react';

export default function RightSidebar() {
  return (
    <aside className="w-full lg:w-80 bg-white border-l border-blue-100 min-h-screen py-6 px-4 flex flex-col gap-6">
      {/* AI Interview Practice Widget */}
      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <h3 className="font-semibold text-blue-700 mb-2">AI Interview Practice</h3>
        <p className="text-sm text-gray-600 mb-3">Practice technical and behavioral questions for software engineering roles.</p>
        <button className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition">Start Practice</button>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>30 min</span>
          <span>1,245 practiced</span>
        </div>
      </div>
      {/* Recommended Mentors */}
      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <h3 className="font-semibold text-blue-700 mb-2">Recommended Mentors</h3>
        <div className="flex flex-col gap-2">
          <div className="bg-white rounded-lg p-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100" />
            <div>
              <div className="font-semibold text-gray-800">Jennifer Lee</div>
              <div className="text-xs text-gray-500">Product Manager, Google</div>
            </div>
            <div className="ml-auto text-yellow-400 font-bold">4.9★</div>
          </div>
          <div className="bg-white rounded-lg p-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100" />
            <div>
              <div className="font-semibold text-gray-800">Robert Garcia</div>
              <div className="text-xs text-gray-500">Engineer, Microsoft</div>
            </div>
            <div className="ml-auto text-yellow-400 font-bold">4.8★</div>
          </div>
        </div>
      </div>
      {/* Progress Tracker */}
      <div className="bg-blue-50 rounded-xl p-4">
        <h3 className="font-semibold text-blue-700 mb-2">Your Progress</h3>
        <div className="mb-2">
          <div className="flex justify-between text-xs mb-1">
            <span>Profile Completion</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs mb-1">
            <span>Interview Readiness</span>
            <span>70%</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Skills Verified</span>
            <span>60%</span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <button className="mt-4 w-full border border-blue-500 text-blue-500 rounded px-3 py-1 text-sm font-semibold hover:bg-blue-50">View Career Path</button>
      </div>
    </aside>
  );
} 