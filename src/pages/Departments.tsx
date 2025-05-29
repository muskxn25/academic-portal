import React, { useState } from 'react'
import { 
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
  HeartIcon,
  ScaleIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const departments = [
  {
    id: 1,
    name: 'Computer Science',
    icon: ComputerDesktopIcon,
    description: 'Explore the world of computing, software development, and artificial intelligence.',
    programs: [
      {
        name: 'Bachelor of Science in Computer Science',
        duration: '4 years',
        degree: 'BS',
        specialization: ['Software Engineering', 'Artificial Intelligence', 'Data Science']
      },
      {
        name: 'Master of Science in Computer Science',
        duration: '2 years',
        degree: 'MS',
        specialization: ['Machine Learning', 'Cybersecurity', 'Distributed Systems']
      },
      {
        name: 'PhD in Computer Science',
        duration: '4-6 years',
        degree: 'PhD',
        specialization: ['Research Focus', 'Advanced Computing', 'Theoretical Computer Science']
      }
    ],
    faculty: 45,
    students: 1200,
    researchAreas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Software Engineering',
      'Cybersecurity',
      'Data Science',
      'Computer Networks'
    ],
    facilities: [
      'Advanced Computing Lab',
      'AI Research Center',
      'Software Development Studio',
      'Cybersecurity Lab'
    ],
    achievements: [
      'Top 10 CS Department Nationally',
      'Multiple Research Grants',
      'Industry Partnerships'
    ]
  },
  {
    id: 2,
    name: 'Business Administration',
    icon: BriefcaseIcon,
    description: 'Develop business acumen and leadership skills for the global marketplace.',
    programs: [
      {
        name: 'Bachelor of Business Administration',
        duration: '4 years',
        degree: 'BBA',
        specialization: ['Finance', 'Marketing', 'Management']
      },
      {
        name: 'Master of Business Administration',
        duration: '2 years',
        degree: 'MBA',
        specialization: ['Strategic Management', 'Entrepreneurship', 'International Business']
      },
      {
        name: 'Executive MBA',
        duration: '1 year',
        degree: 'EMBA',
        specialization: ['Leadership', 'Global Business', 'Strategic Innovation']
      }
    ],
    faculty: 35,
    students: 1500,
    researchAreas: [
      'Strategic Management',
      'Financial Markets',
      'Marketing Strategy',
      'Organizational Behavior',
      'International Business',
      'Entrepreneurship'
    ],
    facilities: [
      'Trading Room',
      'Business Case Study Center',
      'Entrepreneurship Hub',
      'Executive Education Center'
    ],
    achievements: [
      'AACSB Accredited',
      'Top 20 Business School',
      'Strong Industry Connections'
    ]
  },
  {
    id: 3,
    name: 'Engineering',
    icon: BeakerIcon,
    description: 'Innovate and create solutions for complex engineering challenges.',
    programs: [
      {
        name: 'Bachelor of Engineering',
        duration: '4 years',
        degree: 'BE',
        specialization: ['Mechanical', 'Electrical', 'Civil']
      },
      {
        name: 'Master of Engineering',
        duration: '2 years',
        degree: 'ME',
        specialization: ['Robotics', 'Sustainable Energy', 'Structural Engineering']
      },
      {
        name: 'PhD in Engineering',
        duration: '4-6 years',
        degree: 'PhD',
        specialization: ['Advanced Materials', 'Renewable Energy', 'Smart Systems']
      }
    ],
    faculty: 50,
    students: 1800,
    researchAreas: [
      'Renewable Energy',
      'Robotics',
      'Smart Materials',
      'Sustainable Engineering',
      'Structural Engineering',
      'Control Systems'
    ],
    facilities: [
      'Advanced Engineering Lab',
      'Robotics Center',
      'Materials Testing Facility',
      'Sustainable Energy Lab'
    ],
    achievements: [
      'ABET Accredited',
      'Multiple Research Centers',
      'Industry Partnerships'
    ]
  },
  {
    id: 4,
    name: 'Medicine',
    icon: HeartIcon,
    description: 'Train the next generation of healthcare professionals and medical researchers.',
    programs: [
      {
        name: 'Doctor of Medicine',
        duration: '4 years',
        degree: 'MD',
        specialization: ['General Medicine', 'Surgery', 'Pediatrics']
      },
      {
        name: 'Master of Public Health',
        duration: '2 years',
        degree: 'MPH',
        specialization: ['Epidemiology', 'Health Policy', 'Global Health']
      },
      {
        name: 'PhD in Medical Sciences',
        duration: '4-6 years',
        degree: 'PhD',
        specialization: ['Biomedical Research', 'Clinical Research', 'Medical Technology']
      }
    ],
    faculty: 60,
    students: 900,
    researchAreas: [
      'Clinical Research',
      'Public Health',
      'Medical Technology',
      'Biomedical Sciences',
      'Healthcare Policy',
      'Global Health'
    ],
    facilities: [
      'Medical Simulation Center',
      'Research Laboratories',
      'Clinical Skills Center',
      'Medical Library'
    ],
    achievements: [
      'LCME Accredited',
      'Research Excellence',
      'Clinical Partnerships'
    ]
  },
  {
    id: 5,
    name: 'Law',
    icon: ScaleIcon,
    description: 'Develop legal expertise and critical thinking for a career in law.',
    programs: [
      {
        name: 'Juris Doctor',
        duration: '3 years',
        degree: 'JD',
        specialization: ['Corporate Law', 'Criminal Law', 'International Law']
      },
      {
        name: 'Master of Laws',
        duration: '1 year',
        degree: 'LLM',
        specialization: ['International Law', 'Business Law', 'Human Rights']
      },
      {
        name: 'PhD in Law',
        duration: '4-6 years',
        degree: 'PhD',
        specialization: ['Legal Theory', 'Comparative Law', 'Legal History']
      }
    ],
    faculty: 30,
    students: 800,
    researchAreas: [
      'International Law',
      'Constitutional Law',
      'Business Law',
      'Criminal Law',
      'Human Rights',
      'Legal Theory'
    ],
    facilities: [
      'Law Library',
      'Moot Court Room',
      'Legal Clinic',
      'Research Center'
    ],
    achievements: [
      'ABA Accredited',
      'Top Law School',
      'Strong Bar Passage Rate'
    ]
  },
  {
    id: 6,
    name: 'Arts & Design',
    icon: PaintBrushIcon,
    description: 'Cultivate creativity and artistic expression across various media.',
    programs: [
      {
        name: 'Bachelor of Fine Arts',
        duration: '4 years',
        degree: 'BFA',
        specialization: ['Visual Arts', 'Digital Media', 'Design']
      },
      {
        name: 'Master of Fine Arts',
        duration: '2 years',
        degree: 'MFA',
        specialization: ['Studio Art', 'Digital Arts', 'Design Innovation']
      },
      {
        name: 'Master of Design',
        duration: '2 years',
        degree: 'MDes',
        specialization: ['UX Design', 'Product Design', 'Visual Communication']
      }
    ],
    faculty: 25,
    students: 600,
    researchAreas: [
      'Digital Arts',
      'Visual Communication',
      'Design Innovation',
      'Art History',
      'Cultural Studies',
      'Media Arts'
    ],
    facilities: [
      'Art Studios',
      'Digital Media Lab',
      'Design Center',
      'Exhibition Space'
    ],
    achievements: [
      'NASAD Accredited',
      'Exhibition Success',
      'Industry Recognition'
    ]
  }
]

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null)

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Academic Departments</h1>
        <p className="mt-2 text-gray-600">Explore our diverse range of academic departments and programs.</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Search departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDepartments.map((department) => (
          <div
            key={department.id}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-primary-50 p-2">
                  <department.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{department.name}</h3>
                  <p className="text-sm text-gray-500">{department.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <UserGroupIcon className="mr-1.5 h-4 w-4" />
                {department.faculty} Faculty
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <AcademicCapIcon className="mr-1.5 h-4 w-4" />
                {department.students} Students
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => setSelectedDepartment(selectedDepartment === department.id ? null : department.id)}
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View Details
              </button>
            </div>

            {selectedDepartment === department.id && (
              <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Programs</h4>
                  <div className="mt-2 space-y-2">
                    {department.programs.map((program, index) => (
                      <div key={index} className="rounded-md bg-gray-50 p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{program.name}</p>
                            <p className="text-xs text-gray-500">{program.duration} • {program.degree}</p>
                          </div>
                          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {program.specialization.map((spec, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Research Areas</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {department.researchAreas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Facilities</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                    {department.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Achievements</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                    {department.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No departments found matching your criteria.</p>
        </div>
      )}
    </div>
  )
} 