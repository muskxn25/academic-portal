import React from 'react'
import { useNavigate } from 'react-router-dom'

const colleges = [
  {
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    location: 'Cambridge, MA',
    founded: 1861,
    students: 11500,
    acceptanceRate: '7%',
    ranking: 1,
  },
  {
    name: 'Stanford University',
    shortName: 'Stanford',
    location: 'Stanford, CA',
    founded: 1885,
    students: 17249,
    acceptanceRate: '4%',
    ranking: 2,
  },
  {
    name: 'Harvard University',
    shortName: 'Harvard',
    location: 'Cambridge, MA',
    founded: 1636,
    students: 21648,
    acceptanceRate: '5%',
    ranking: 3,
  },
]

export default function Colleges() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Colleges</h1>
        <p className="mt-2 text-gray-600">Explore and manage your college connections.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <div
            key={college.shortName}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{college.shortName}</h3>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
                Rank #{college.ranking}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{college.name}</p>
            
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Location</span>
                <span className="text-sm font-medium text-gray-900">{college.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Founded</span>
                <span className="text-sm font-medium text-gray-900">{college.founded}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Students</span>
                <span className="text-sm font-medium text-gray-900">{college.students.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Acceptance Rate</span>
                <span className="text-sm font-medium text-gray-900">{college.acceptanceRate}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={() => navigate(`/college/${college.shortName}`)}
                className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Details
              </button>
              <button
                type="button"
                className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 