import React, { useState } from 'react'
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  rating: number
  students: number
  skills: string[]
  prerequisites: string[]
  isRecommended: boolean
  recommendationReason?: string
}

interface InterviewFeedback {
  strengths: string[]
  areasForImprovement: string[]
  score: number
  detailedFeedback: string
}

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced System Design',
    description: 'Master the art of designing scalable and efficient systems. Learn about distributed systems, microservices, and cloud architecture.',
    instructor: 'Dr. Sarah Chen',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'Architecture',
    rating: 4.8,
    students: 2500,
    skills: ['System Design', 'Distributed Systems', 'Cloud Architecture', 'Microservices'],
    prerequisites: ['Basic System Design', 'Understanding of Databases'],
    isRecommended: true,
    recommendationReason: 'Based on your interview feedback, this course will help strengthen your system design skills and prepare you for senior engineering roles.'
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms',
    description: 'Comprehensive coverage of essential data structures and algorithms with practical coding exercises.',
    instructor: 'Prof. Michael Brown',
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Computer Science',
    rating: 4.7,
    students: 3500,
    skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'Time Complexity'],
    prerequisites: ['Basic Programming', 'Basic Mathematics'],
    isRecommended: true,
    recommendationReason: 'Your interview performance showed room for improvement in algorithm optimization. This course will help you master efficient problem-solving techniques.'
  },
  {
    id: '3',
    title: 'Software Engineering Best Practices',
    description: 'Learn industry-standard practices for writing clean, maintainable, and scalable code.',
    instructor: 'Emily Rodriguez',
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Software Engineering',
    rating: 4.6,
    students: 1800,
    skills: ['Clean Code', 'Design Patterns', 'Testing', 'Code Review'],
    prerequisites: ['Basic Programming Experience'],
    isRecommended: false
  }
]

const sampleFeedback: InterviewFeedback = {
  strengths: [
    'Strong communication skills',
    'Good understanding of basic concepts',
    'Clear problem-solving approach'
  ],
  areasForImprovement: [
    'System design optimization',
    'Algorithm efficiency',
    'Advanced data structure implementation'
  ],
  score: 7.5,
  detailedFeedback: 'The candidate demonstrated solid fundamentals but could benefit from more practice with complex system design scenarios and algorithm optimization.'
}

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false)

  const categories = ['All', 'Architecture', 'Computer Science', 'Software Engineering', 'Web Development']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = sampleCourses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
    const matchesRecommended = !showRecommendedOnly || course.isRecommended
    return matchesCategory && matchesLevel && matchesRecommended
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="mt-2 text-gray-600">
            Explore our curated courses and get personalized recommendations based on your interview feedback.
          </p>
        </div>

        {/* Interview Feedback Summary */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">Your Interview Feedback</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Strengths</h3>
              <ul className="mt-2 space-y-2">
                {sampleFeedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-green-500" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Areas for Improvement</h3>
              <ul className="mt-2 space-y-2">
                {sampleFeedback.areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <ArrowPathIcon className="mr-2 h-5 w-5 text-blue-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border-gray-300 text-sm focus:border-primary focus:ring-primary"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="rounded-md border-gray-300 text-sm focus:border-primary focus:ring-primary"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showRecommendedOnly}
              onChange={(e) => setShowRecommendedOnly(e.target.checked)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600">Show recommended only</span>
          </label>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`rounded-lg bg-white p-6 shadow transition-all hover:shadow-lg ${
                course.isRecommended ? 'ring-2 ring-primary' : ''
              }`}
            >
              {course.isRecommended && (
                <div className="mb-4 inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{course.description}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <UserGroupIcon className="mr-2 h-5 w-5" />
                  {course.instructor}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="mr-2 h-5 w-5" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ChartBarIcon className="mr-2 h-5 w-5" />
                  {course.level}
                </div>
              </div>

              {course.isRecommended && course.recommendationReason && (
                <div className="mt-4 rounded-md bg-primary-50 p-3">
                  <p className="text-sm text-primary-700">{course.recommendationReason}</p>
                </div>
              )}

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Skills you'll learn:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 