import { useState, useRef, useEffect } from 'react'

import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BookmarkIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  postedDate: string
  description: string
  requirements: string[]
  benefits: string[]
  isRemote: boolean
  isFeatured: boolean
  logo?: string
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    postedDate: "2 days ago",
    description: "We're looking for a Senior Frontend Developer to join our team and help build the next generation of our web applications.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with modern frontend tools and practices"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Remote work options"
    ],
    isRemote: true,
    isFeatured: true,
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    postedDate: "1 week ago",
    description: "Join our backend team to build scalable microservices and APIs that power our data processing platform.",
    requirements: [
      "Experience with Node.js and TypeScript",
      "Knowledge of microservices architecture",
      "Strong database design skills"
    ],
    benefits: [
      "Flexible hours",
      "Stock options",
      "Learning budget",
      "Gym membership"
    ],
    isRemote: false,
    isFeatured: false,
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
]

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [showRemoteOnly, setShowRemoteOnly] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship']
  const locations = ['All', 'San Francisco, CA', 'New York, NY', 'Remote']

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'All' || job.type === selectedType
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
    const matchesRemote = !showRemoteOnly || job.isRemote

    return matchesSearch && matchesType && matchesLocation && matchesRemote
  })


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
        <p className="mt-2 text-gray-600">Discover exciting opportunities and find your next career move.</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="w-48">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showRemoteOnly}
                onChange={(e) => setShowRemoteOnly(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Remote only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className={`rounded-lg border ${
              job.isFeatured ? 'border-primary' : 'border-gray-200'
            } bg-white p-6 shadow-sm`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {job.logo ? (
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="h-12 w-12 rounded-lg"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                  </div>
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    {job.isFeatured && (
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500">
                  <BookmarkIcon className="h-5 w-5" />
                </button>
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500">
                  <ShareIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <MapPinIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <BriefcaseIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {job.type}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CurrencyDollarIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {job.salary}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                {job.postedDate}
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{job.description}</p>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Requirements</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">Benefits</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 