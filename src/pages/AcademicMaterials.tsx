import React, { useState } from 'react'
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  PresentationChartLineIcon,
  AcademicCapIcon,
  ClockIcon,
  StarIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  UserIcon,
  TagIcon,
  BookmarkIcon,
  ShareIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'All Materials' },
  { id: 'lectures', name: 'Lecture Notes' },
  { id: 'books', name: 'Textbooks' },
  { id: 'videos', name: 'Video Lectures' },
  { id: 'assignments', name: 'Assignments' },
  { id: 'exams', name: 'Past Exams' },
  { id: 'projects', name: 'Projects' },
  { id: 'research', name: 'Research Papers' },
  { id: 'tutorials', name: 'Tutorials' },
]

const materials = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    type: 'lectures',
    subject: 'Computer Science',
    professor: 'Dr. Sarah Chen',
    date: '2024-02-15',
    downloads: 1245,
    rating: 4.8,
    format: 'PDF',
    size: '2.4 MB',
    description: 'Comprehensive lecture notes covering fundamental concepts of computer science, algorithms, and data structures. Includes detailed explanations of sorting algorithms, tree structures, and graph theory.',
    tags: ['Algorithms', 'Data Structures', 'Programming', 'Computer Science', 'CS101'],
    views: 3456,
    bookmarks: 234,
    lastUpdated: '2024-02-20',
    difficulty: 'Beginner',
    prerequisites: ['None'],
    language: 'English',
    chapters: [
      'Introduction to Programming',
      'Data Types and Variables',
      'Control Structures',
      'Functions and Methods',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms and Complexity'
    ]
  },
  {
    id: 2,
    title: 'Advanced Mathematics for Engineers',
    type: 'books',
    subject: 'Mathematics',
    professor: 'Prof. James Wilson',
    date: '2024-01-20',
    downloads: 892,
    rating: 4.6,
    format: 'PDF',
    size: '15.2 MB',
    description: 'Complete textbook covering advanced mathematical concepts essential for engineering students. Includes practical examples, problem sets, and detailed solutions.',
    tags: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Engineering Math', 'Advanced Math'],
    views: 2789,
    bookmarks: 156,
    lastUpdated: '2024-02-01',
    difficulty: 'Advanced',
    prerequisites: ['Calculus I', 'Linear Algebra I'],
    language: 'English',
    chapters: [
      'Multivariable Calculus',
      'Vector Calculus',
      'Complex Analysis',
      'Differential Equations',
      'Numerical Methods',
      'Linear Algebra II',
      'Probability and Statistics'
    ]
  },
  {
    id: 3,
    title: 'Quantum Physics Lecture Series',
    type: 'videos',
    subject: 'Physics',
    professor: 'Dr. Emily Rodriguez',
    date: '2024-02-10',
    downloads: 1567,
    rating: 4.9,
    format: 'MP4',
    size: '1.2 GB',
    description: 'Complete video lecture series on quantum physics with practical demonstrations and problem-solving sessions. Includes lab experiments and interactive simulations.',
    tags: ['Quantum Mechanics', 'Physics', 'Science', 'Modern Physics', 'Quantum Theory'],
    views: 5678,
    bookmarks: 445,
    lastUpdated: '2024-02-15',
    difficulty: 'Intermediate',
    prerequisites: ['Classical Mechanics', 'Electromagnetism'],
    language: 'English',
    chapters: [
      'Wave-Particle Duality',
      'Schrödinger Equation',
      'Quantum States',
      'Quantum Tunneling',
      'Quantum Entanglement',
      'Quantum Computing Basics',
      'Applications in Modern Technology'
    ]
  },
  {
    id: 4,
    title: 'Data Structures Assignment Solutions',
    type: 'assignments',
    subject: 'Computer Science',
    professor: 'Dr. Michael Brown',
    date: '2024-02-18',
    downloads: 756,
    rating: 4.7,
    format: 'ZIP',
    size: '4.8 MB',
    description: 'Complete solutions and explanations for data structures assignments with detailed comments. Includes implementation in multiple programming languages.',
    tags: ['Data Structures', 'Algorithms', 'Programming', 'Problem Solving', 'CS Assignments'],
    views: 1890,
    bookmarks: 123,
    lastUpdated: '2024-02-19',
    difficulty: 'Intermediate',
    prerequisites: ['Data Structures I', 'Programming Fundamentals'],
    language: 'English',
    chapters: [
      'Linked Lists Implementation',
      'Binary Search Trees',
      'Graph Algorithms',
      'Sorting Algorithms',
      'Hash Tables',
      'Advanced Data Structures'
    ]
  },
  {
    id: 5,
    title: 'Machine Learning Final Exam 2023',
    type: 'exams',
    subject: 'Computer Science',
    professor: 'Dr. Lisa Thompson',
    date: '2023-12-15',
    downloads: 1023,
    rating: 4.5,
    format: 'PDF',
    size: '1.8 MB',
    description: 'Previous year\'s final exam with solutions and detailed explanations. Includes practice problems and study guide.',
    tags: ['Machine Learning', 'AI', 'Computer Science', 'Exam Preparation', 'ML'],
    views: 2345,
    bookmarks: 178,
    lastUpdated: '2023-12-20',
    difficulty: 'Advanced',
    prerequisites: ['Machine Learning I', 'Statistics'],
    language: 'English',
    chapters: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Neural Networks',
      'Deep Learning',
      'Model Evaluation',
      'Practical Applications'
    ]
  },
  {
    id: 6,
    title: 'Web Development Bootcamp',
    type: 'tutorials',
    subject: 'Computer Science',
    professor: 'Prof. David Kumar',
    date: '2024-02-01',
    downloads: 2345,
    rating: 4.9,
    format: 'MP4',
    size: '2.5 GB',
    description: 'Comprehensive web development course covering frontend and backend technologies. Includes hands-on projects and real-world applications.',
    tags: ['Web Development', 'JavaScript', 'React', 'Node.js', 'Full Stack'],
    views: 7890,
    bookmarks: 567,
    lastUpdated: '2024-02-10',
    difficulty: 'Beginner to Intermediate',
    prerequisites: ['Basic Programming', 'HTML/CSS'],
    language: 'English',
    chapters: [
      'HTML5 and CSS3',
      'JavaScript Fundamentals',
      'React.js Development',
      'Node.js and Express',
      'Database Integration',
      'Deployment and DevOps',
      'Project Development'
    ]
  },
  {
    id: 7,
    title: 'Artificial Intelligence Research Papers',
    type: 'research',
    subject: 'Computer Science',
    professor: 'Dr. Robert Zhang',
    date: '2024-01-15',
    downloads: 567,
    rating: 4.8,
    format: 'PDF',
    size: '3.2 MB',
    description: 'Collection of recent research papers on AI and machine learning. Includes implementation details and experimental results.',
    tags: ['AI', 'Research', 'Machine Learning', 'Deep Learning', 'Computer Science'],
    views: 3456,
    bookmarks: 234,
    lastUpdated: '2024-01-20',
    difficulty: 'Advanced',
    prerequisites: ['Machine Learning', 'Deep Learning'],
    language: 'English',
    chapters: [
      'Neural Architecture Search',
      'Reinforcement Learning',
      'Natural Language Processing',
      'Computer Vision',
      'AI Ethics',
      'Future Directions'
    ]
  },
  {
    id: 8,
    title: 'Software Engineering Project',
    type: 'projects',
    subject: 'Computer Science',
    professor: 'Dr. Maria Garcia',
    date: '2024-02-05',
    downloads: 890,
    rating: 4.7,
    format: 'ZIP',
    size: '5.6 MB',
    description: 'Complete software engineering project with documentation, code, and deployment instructions. Includes team collaboration guidelines.',
    tags: ['Software Engineering', 'Project Management', 'Development', 'Team Work'],
    views: 2345,
    bookmarks: 167,
    lastUpdated: '2024-02-12',
    difficulty: 'Intermediate',
    prerequisites: ['Software Engineering I', 'Database Systems'],
    language: 'English',
    chapters: [
      'Project Planning',
      'Requirements Analysis',
      'System Design',
      'Implementation',
      'Testing',
      'Deployment',
      'Documentation'
    ]
  },
  {
    id: 9,
    title: 'Digital Marketing Strategy',
    type: 'lectures',
    subject: 'Business',
    professor: 'Prof. Jennifer Lee',
    date: '2024-02-14',
    downloads: 1567,
    rating: 4.7,
    format: 'PDF',
    size: '3.8 MB',
    description: 'Comprehensive guide to modern digital marketing strategies, including social media marketing, SEO, content marketing, and analytics.',
    tags: ['Marketing', 'Digital Marketing', 'Business', 'Social Media', 'SEO'],
    views: 4234,
    bookmarks: 289,
    lastUpdated: '2024-02-18',
    difficulty: 'Intermediate',
    prerequisites: ['Marketing Basics', 'Business Fundamentals'],
    language: 'English',
    chapters: [
      'Digital Marketing Fundamentals',
      'Social Media Strategy',
      'Search Engine Optimization',
      'Content Marketing',
      'Email Marketing',
      'Analytics and Metrics',
      'Campaign Planning'
    ]
  },
  {
    id: 10,
    title: 'Financial Accounting Principles',
    type: 'books',
    subject: 'Finance',
    professor: 'Dr. Richard Anderson',
    date: '2024-01-25',
    downloads: 2345,
    rating: 4.8,
    format: 'PDF',
    size: '12.5 MB',
    description: 'Complete textbook covering fundamental accounting principles, financial statements, and analysis techniques.',
    tags: ['Accounting', 'Finance', 'Business', 'Financial Statements', 'Bookkeeping'],
    views: 5678,
    bookmarks: 345,
    lastUpdated: '2024-02-01',
    difficulty: 'Beginner to Intermediate',
    prerequisites: ['Basic Mathematics', 'Business Basics'],
    language: 'English',
    chapters: [
      'Accounting Fundamentals',
      'Financial Statements',
      'Double-Entry Bookkeeping',
      'Adjusting Entries',
      'Financial Analysis',
      'Budgeting',
      'Tax Accounting'
    ]
  },
  {
    id: 11,
    title: 'Mobile App Development with Flutter',
    type: 'tutorials',
    subject: 'Computer Science',
    professor: 'Dr. Alex Martinez',
    date: '2024-02-10',
    downloads: 1890,
    rating: 4.9,
    format: 'MP4',
    size: '4.2 GB',
    description: 'Complete course on building cross-platform mobile applications using Flutter framework. Includes real-world projects and best practices.',
    tags: ['Mobile Development', 'Flutter', 'Dart', 'App Development', 'Cross-Platform'],
    views: 6789,
    bookmarks: 456,
    lastUpdated: '2024-02-15',
    difficulty: 'Intermediate',
    prerequisites: ['Programming Basics', 'Object-Oriented Programming'],
    language: 'English',
    chapters: [
      'Flutter Basics',
      'Dart Programming',
      'UI/UX Design',
      'State Management',
      'API Integration',
      'Database Integration',
      'App Deployment'
    ]
  },
  {
    id: 12,
    title: 'Environmental Science Research',
    type: 'research',
    subject: 'Environmental Science',
    professor: 'Dr. Emma Thompson',
    date: '2024-01-30',
    downloads: 890,
    rating: 4.7,
    format: 'PDF',
    size: '2.8 MB',
    description: 'Collection of research papers on climate change, sustainability, and environmental conservation strategies.',
    tags: ['Environmental Science', 'Climate Change', 'Sustainability', 'Research', 'Conservation'],
    views: 2345,
    bookmarks: 178,
    lastUpdated: '2024-02-05',
    difficulty: 'Advanced',
    prerequisites: ['Environmental Science I', 'Research Methods'],
    language: 'English',
    chapters: [
      'Climate Change Impact',
      'Sustainable Development',
      'Biodiversity Conservation',
      'Renewable Energy',
      'Environmental Policy',
      'Ecosystem Management'
    ]
  },
  {
    id: 13,
    title: 'Data Science Project: Market Analysis',
    type: 'projects',
    subject: 'Data Science',
    professor: 'Dr. Sophia Chen',
    date: '2024-02-12',
    downloads: 1234,
    rating: 4.8,
    format: 'ZIP',
    size: '6.7 MB',
    description: 'Comprehensive data science project analyzing market trends, customer behavior, and sales forecasting using Python and machine learning.',
    tags: ['Data Science', 'Python', 'Machine Learning', 'Market Analysis', 'Data Analysis'],
    views: 3456,
    bookmarks: 234,
    lastUpdated: '2024-02-16',
    difficulty: 'Advanced',
    prerequisites: ['Python Programming', 'Machine Learning', 'Statistics'],
    language: 'English',
    chapters: [
      'Data Collection',
      'Data Cleaning',
      'Exploratory Analysis',
      'Feature Engineering',
      'Model Development',
      'Results Visualization',
      'Project Documentation'
    ]
  },
  {
    id: 14,
    title: 'Business Law Fundamentals',
    type: 'lectures',
    subject: 'Law',
    professor: 'Prof. Michael Roberts',
    date: '2024-02-08',
    downloads: 1456,
    rating: 4.6,
    format: 'PDF',
    size: '4.5 MB',
    description: 'Comprehensive lecture notes covering essential business law concepts, contracts, corporate governance, and legal compliance.',
    tags: ['Business Law', 'Legal Studies', 'Contracts', 'Corporate Law', 'Compliance'],
    views: 2890,
    bookmarks: 167,
    lastUpdated: '2024-02-14',
    difficulty: 'Intermediate',
    prerequisites: ['Business Basics', 'Legal Studies I'],
    language: 'English',
    chapters: [
      'Business Law Basics',
      'Contract Law',
      'Corporate Governance',
      'Intellectual Property',
      'Employment Law',
      'Regulatory Compliance',
      'Legal Risk Management'
    ]
  },
  {
    id: 15,
    title: 'UX/UI Design Principles',
    type: 'tutorials',
    subject: 'Design',
    professor: 'Prof. Lisa Wong',
    date: '2024-02-05',
    downloads: 2345,
    rating: 4.9,
    format: 'MP4',
    size: '3.8 GB',
    description: 'Complete course on user experience and interface design principles, including wireframing, prototyping, and user testing methodologies.',
    tags: ['UX Design', 'UI Design', 'Design', 'User Experience', 'Prototyping'],
    views: 5678,
    bookmarks: 345,
    lastUpdated: '2024-02-12',
    difficulty: 'Beginner to Intermediate',
    prerequisites: ['Basic Design Principles'],
    language: 'English',
    chapters: [
      'Design Fundamentals',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'User Testing',
      'Design Systems'
    ]
  },
  {
    id: 16,
    title: 'Advanced Database Systems',
    type: 'lectures',
    subject: 'Computer Science',
    professor: 'Dr. James Wilson',
    date: '2024-02-01',
    downloads: 1678,
    rating: 4.7,
    format: 'PDF',
    size: '3.2 MB',
    description: 'Advanced concepts in database systems, including distributed databases, NoSQL, and database optimization techniques.',
    tags: ['Databases', 'SQL', 'NoSQL', 'Computer Science', 'Data Management'],
    views: 3456,
    bookmarks: 234,
    lastUpdated: '2024-02-08',
    difficulty: 'Advanced',
    prerequisites: ['Database Systems I', 'SQL Fundamentals'],
    language: 'English',
    chapters: [
      'Distributed Databases',
      'NoSQL Systems',
      'Database Optimization',
      'Transaction Management',
      'Data Warehousing',
      'Big Data Systems',
      'Database Security'
    ]
  }
]

export default function AcademicMaterials() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [showDetails, setShowDetails] = useState<number | null>(null)

  const filteredMaterials = materials.filter(material => {
    const matchesCategory = selectedCategory === 'all' || material.type === selectedCategory
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'rating':
        return b.rating - a.rating
      case 'downloads':
        return b.downloads - a.downloads
      case 'views':
        return b.views - a.views
      default:
        return 0
    }
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lectures':
        return <DocumentTextIcon className="h-6 w-6" />
      case 'books':
        return <BookOpenIcon className="h-6 w-6" />
      case 'videos':
        return <VideoCameraIcon className="h-6 w-6" />
      case 'assignments':
        return <PresentationChartLineIcon className="h-6 w-6" />
      case 'exams':
        return <AcademicCapIcon className="h-6 w-6" />
      case 'projects':
        return <BookmarkIcon className="h-6 w-6" />
      case 'research':
        return <DocumentTextIcon className="h-6 w-6" />
      case 'tutorials':
        return <VideoCameraIcon className="h-6 w-6" />
      default:
        return <DocumentTextIcon className="h-6 w-6" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Academic Materials</h1>
        <p className="mt-2 text-gray-600">Access and download course materials, lecture notes, and study resources.</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
        >
          <option value="date">Sort by Date</option>
          <option value="rating">Sort by Rating</option>
          <option value="downloads">Sort by Downloads</option>
          <option value="views">Sort by Views</option>
        </select>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <div
            key={material.id}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-primary-50 p-2">
                  {getTypeIcon(material.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{material.title}</h3>
                  <p className="text-sm text-gray-500">{material.subject}</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
                {material.format}
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-600">{material.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {material.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="mr-1.5 h-4 w-4" />
                {new Date(material.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <StarIcon className="mr-1.5 h-4 w-4 text-yellow-400" />
                {material.rating}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ArrowDownTrayIcon className="mr-1.5 h-4 w-4" />
                {material.downloads} downloads
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <EyeIcon className="mr-1.5 h-4 w-4" />
                {material.views} views
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Download
              </button>
              <button
                type="button"
                onClick={() => setShowDetails(showDetails === material.id ? null : material.id)}
                className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
              >
                Details
              </button>
            </div>

            {showDetails === material.id && (
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Prerequisites</h4>
                    <p className="mt-1 text-sm text-gray-600">{material.prerequisites.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Difficulty Level</h4>
                    <p className="mt-1 text-sm text-gray-600">{material.difficulty}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Language</h4>
                    <p className="mt-1 text-sm text-gray-600">{material.language}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Chapters</h4>
                    <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                      {material.chapters.map((chapter, index) => (
                        <li key={index}>{chapter}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No materials found matching your criteria.</p>
        </div>
      )}
    </div>
  )
} 