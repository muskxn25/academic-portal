import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { 
  UserCircleIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import PageHeader from '../components/PageHeader';

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  expertise: string[]
  rating: number
  reviews: number
  availability: string[]
  bio: string
  image?: string
}

const sampleMentors: Mentor[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    company: "Google",
    expertise: ["Frontend Development", "React", "TypeScript"],
    rating: 4.9,
    reviews: 128,
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "10+ years of experience in frontend development. Passionate about mentoring and helping others grow in their careers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Tech Lead",
    company: "Microsoft",
    expertise: ["Backend Development", "System Design", "Cloud Architecture"],
    rating: 4.8,
    reviews: 95,
    availability: ["Tuesday", "Thursday"],
    bio: "Specialized in scalable system design and cloud architecture. Love sharing knowledge and helping developers level up.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
]

export default function Mentorship() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', to: '/' },
    { name: 'Find Mentors', to: '/mentorship' },
    { name: 'Skill Certifications', to: '/skill-badges' },
    { name: 'Job Board', to: '/job-board' },
  ];

  const handleScheduleSession = () => {
    // Here you would implement the actual scheduling logic
    console.log('Scheduling session with:', {
      mentor: selectedMentor?.name,
      date: selectedDate,
      time: selectedTime
    })
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <PageHeader />
      {/* Page Content */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find Your Mentor</h1>
          <p className="mt-2 text-gray-600">Connect with experienced professionals and accelerate your career growth.</p>
        </div>

        {/* Mentor List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                {mentor.image ? (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-16 w-16 rounded-full"
                  />
                ) : (
                  <UserCircleIcon className="h-16 w-16 text-gray-400" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.title}</p>
                  <p className="text-sm text-gray-500">{mentor.company}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium text-gray-900">{mentor.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({mentor.reviews} reviews)</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Availability</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {mentor.availability.map((day, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                >
                  Schedule Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scheduling Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

              <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Schedule Session with {selectedMentor.name}
                    </h3>
                    <div className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Select Date
                          </label>
                          <select
                            id="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          >
                            <option value="">Select a date</option>
                            {selectedMentor.availability.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Select Time
                          </label>
                          <select
                            id="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          >
                            <option value="">Select a time</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={handleScheduleSession}
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                  >
                    Schedule
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMentor(null)}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 