import React, { useState } from 'react'
import { 
  TrophyIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

interface Badge {
  id: number
  name: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  progress: number
  requirements: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  isEarned: boolean
}

const sampleBadges: Badge[] = [
  {
    id: 1,
    name: "React Master",
    description: "Demonstrated advanced proficiency in React development",
    category: "Frontend Development",
    level: "Advanced",
    progress: 85,
    requirements: [
      "Complete 5 React projects",
      "Score 90% in React assessment",
      "Contribute to open source React project"
    ],
    icon: CodeBracketIcon,
    isEarned: false
  },
  {
    id: 2,
    name: "System Design Expert",
    description: "Mastered the art of designing scalable systems",
    category: "Architecture",
    level: "Advanced",
    progress: 60,
    requirements: [
      "Design 3 scalable systems",
      "Complete system design course",
      "Pass system design interview"
    ],
    icon: PresentationChartLineIcon,
    isEarned: false
  },
  {
    id: 3,
    name: "Team Leader",
    description: "Successfully led and mentored a development team",
    category: "Leadership",
    level: "Intermediate",
    progress: 100,
    requirements: [
      "Lead a team of 5+ developers",
      "Complete leadership training",
      "Successfully deliver 3 projects"
    ],
    icon: UserGroupIcon,
    isEarned: true
  }
]

export default function SkillBadges() {
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedLevel, setSelectedLevel] = useState<string>('All')

  const categories = ['All', 'Frontend Development', 'Architecture', 'Leadership']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredBadges = sampleBadges.filter(badge => {
    const categoryMatch = selectedCategory === 'All' || badge.category === selectedCategory
    const levelMatch = selectedLevel === 'All' || badge.level === selectedLevel
    return categoryMatch && levelMatch
  })

  const navLinks = [
    { name: 'Dashboard', to: '/' },
    { name: 'Find Mentors', to: '/mentorship' },
    { name: 'Skill Certifications', to: '/skill-badges' },
    { name: 'Job Board', to: '/job-board' },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <PageHeader />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Skill Badges</h1>
          <p className="mt-2 text-gray-600">Track your progress and showcase your achievements.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              id="level"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBadges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-lg border ${
                badge.isEarned ? 'border-primary' : 'border-gray-200'
              } bg-white p-6 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${
                    badge.isEarned ? 'bg-primary-50' : 'bg-gray-50'
                  }`}>
                    <badge.icon className={`h-6 w-6 ${
                      badge.isEarned ? 'text-primary' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{badge.name}</h3>
                    <p className="text-sm text-gray-500">{badge.category}</p>
                  </div>
                </div>
                {badge.isEarned && (
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                )}
              </div>

              <p className="mt-4 text-sm text-gray-600">{badge.description}</p>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Progress</span>
                  <span className="text-sm text-gray-500">{badge.progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${badge.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Requirements</h4>
                <ul className="mt-2 space-y-2">
                  {badge.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <ArrowPathIcon className="mr-2 h-4 w-4 text-gray-400" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  badge.level === 'Advanced'
                    ? 'bg-red-100 text-red-800'
                    : badge.level === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {badge.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 