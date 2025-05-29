import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AcademicCapIcon, DocumentTextIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const stats = [
  { name: 'Courses Enrolled', value: '5', subtext: 'Active courses this semester', icon: AcademicCapIcon },
  { name: 'Assignments', value: '8', subtext: 'Pending assignments', icon: DocumentTextIcon },
  { name: 'Skill Badges', value: '12', subtext: 'Skills verified', icon: CheckBadgeIcon },
  { name: 'Interview Practice', value: '85%', subtext: 'Average performance score', icon: ChatBubbleLeftRightIcon },
]

const colleges = [
  {
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    courses: 5,
    departments: 3,
    resources: 12,
  },
  {
    name: 'Stanford University',
    shortName: 'Stanford',
    courses: 2,
    departments: 1,
    resources: 5,
  },
  {
    name: 'Harvard University',
    shortName: 'Harvard',
    courses: 0,
    departments: 0,
    resources: 3,
  },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-primary-50 p-3">
                <stat.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="ml-2 text-sm text-gray-500">{stat.subtext}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Colleges Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Colleges</h2>
        <p className="text-gray-600 mb-6">Access your enrolled colleges and explore departments.</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <div
              key={college.shortName}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{college.shortName}</h3>
              <p className="mt-1 text-sm text-gray-500">{college.name}</p>
              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Courses</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{college.courses}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Departments</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{college.departments}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Resources</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{college.resources}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/college/${college.shortName}`)}
                className="mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Departments
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 