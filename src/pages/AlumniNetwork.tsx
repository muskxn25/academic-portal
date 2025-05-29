import React, { useState } from 'react'
import { 
  UserCircleIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

interface Alumni {
  id: number
  name: string
  graduationYear: number
  degree: string
  currentPosition: string
  company: string
  location: string
  bio: string
  achievements: string[]
  skills: string[]
  image?: string
  email?: string
  website?: string
  isAvailableForMentoring: boolean
}

const sampleAlumni: Alumni[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    graduationYear: 2020,
    degree: "Bachelor of Science in Computer Science",
    currentPosition: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    bio: "Passionate about building scalable applications and mentoring junior developers. Currently working on cloud infrastructure projects.",
    achievements: [
      "Led development of award-winning mobile app",
      "Published 3 technical papers",
      "Speaker at major tech conferences"
    ],
    skills: ["Cloud Computing", "System Design", "Leadership"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "emily.rodriguez@example.com",
    website: "https://emilyrodriguez.dev",
    isAvailableForMentoring: true
  },
  {
    id: 2,
    name: "David Kim",
    graduationYear: 2019,
    degree: "Master of Science in Data Science",
    currentPosition: "Data Science Lead",
    company: "Microsoft",
    location: "Seattle, WA",
    bio: "Specializing in machine learning and big data analytics. Love solving complex problems and sharing knowledge with the community.",
    achievements: [
      "Developed ML model with 95% accuracy",
      "Open source contributor",
      "Technical blog writer"
    ],
    skills: ["Machine Learning", "Python", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "david.kim@example.com",
    website: "https://davidkim.ai",
    isAvailableForMentoring: true
  }
]

export default function AlumniNetwork() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedDegree, setSelectedDegree] = useState('All')
  const [showMentorsOnly, setShowMentorsOnly] = useState(false)

  const graduationYears = ['All', '2023', '2022', '2021', '2020', '2019', '2018']
  const degrees = ['All', 'Computer Science', 'Data Science', 'Engineering', 'Business']

  const filteredAlumni = sampleAlumni.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.currentPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesYear = selectedYear === 'All' || alumni.graduationYear.toString() === selectedYear
    const matchesDegree = selectedDegree === 'All' || alumni.degree.includes(selectedDegree)
    const matchesMentor = !showMentorsOnly || alumni.isAvailableForMentoring

    return matchesSearch && matchesYear && matchesDegree && matchesMentor
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Alumni Network</h1>
        <p className="mt-2 text-gray-600">Connect with successful graduates and expand your professional network.</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search alumni..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="w-48">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {graduationYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="w-48">
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {degrees.map((degree) => (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showMentorsOnly}
                onChange={(e) => setShowMentorsOnly(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Available for mentoring</span>
            </label>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAlumni.map((alumni) => (
          <div
            key={alumni.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              {alumni.image ? (
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="h-16 w-16 rounded-full"
                />
              ) : (
                <UserCircleIcon className="h-16 w-16 text-gray-400" />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{alumni.name}</h3>
                <p className="text-sm text-gray-600">{alumni.currentPosition}</p>
                <p className="text-sm text-gray-500">{alumni.company}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <AcademicCapIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {alumni.graduationYear}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPinIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {alumni.location}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{alumni.bio}</p>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Achievements</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {alumni.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Skills</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {alumni.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              {alumni.email && (
                <a
                  href={`mailto:${alumni.email}`}
                  className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                >
                  <EnvelopeIcon className="mr-2 h-5 w-5" />
                  Email
                </a>
              )}
              {alumni.website && (
                <a
                  href={alumni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                >
                  <GlobeAltIcon className="mr-2 h-5 w-5" />
                  Website
                </a>
              )}
              {alumni.isAvailableForMentoring && (
                <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary-600">
                  <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 