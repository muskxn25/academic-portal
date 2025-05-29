import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const collegeData = {
  'MIT': {
    name: 'Massachusetts Institute of Technology',
    departments: [
      {
        name: 'Computer Science',
        courses: 3,
        faculty: 45,
        students: 1200,
      },
      {
        name: 'Electrical Engineering',
        courses: 2,
        faculty: 35,
        students: 950,
      },
      {
        name: 'Mechanical Engineering',
        courses: 2,
        faculty: 40,
        students: 1100,
      },
    ],
  },
  'Stanford': {
    name: 'Stanford University',
    departments: [
      {
        name: 'Computer Science',
        courses: 2,
        faculty: 38,
        students: 1000,
      },
    ],
  },
  'Harvard': {
    name: 'Harvard University',
    departments: [],
  },
}

export default function CollegeDetails() {
  const { collegeId } = useParams()
  const navigate = useNavigate()
  const college = collegeData[collegeId as keyof typeof collegeData]

  if (!college) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">College not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-primary hover:text-primary-600"
        >
          Return to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">{college.name}</h1>
      </div>

      {college.departments.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {college.departments.map((dept) => (
            <div
              key={dept.name}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Courses</span>
                  <span className="text-sm font-medium text-gray-900">{dept.courses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Faculty</span>
                  <span className="text-sm font-medium text-gray-900">{dept.faculty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Students</span>
                  <span className="text-sm font-medium text-gray-900">{dept.students}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Courses
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No departments available for this college.</p>
        </div>
      )}
    </div>
  )
} 