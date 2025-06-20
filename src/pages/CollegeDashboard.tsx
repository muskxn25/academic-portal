import React from 'react';

export default function CollegeDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your College Dashboard</h1>
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">College Overview</h2>
          <p className="text-gray-700 mb-4">This is a brief overview of your college. Here you can find news, events, and important announcements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Departments</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Computer Science</li>
              <li>Electrical Engineering</li>
              <li>Business Administration</li>
              <li>Biology</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Professors</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Dr. Sarah Chen</li>
              <li>Prof. Michael Lee</li>
              <li>Dr. Priya Patel</li>
              <li>Prof. David Kim</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Assignments & Materials</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Data Structures Assignment 1</li>
              <li>Business Ethics Case Study</li>
              <li>Biology Lab Report</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Local Help & Community</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Student Mentors</li>
              <li>Alumni Network</li>
              <li>Professor Office Hours</li>
              <li>Peer Study Groups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 