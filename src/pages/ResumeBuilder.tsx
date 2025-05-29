import React, { useState } from 'react'
import { 
  DocumentTextIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentDuplicateIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface ResumeSection {
  id: string
  type: 'education' | 'experience' | 'skills' | 'projects' | 'certifications'
  title: string
  items: Array<{
    id: string
    title: string
    subtitle?: string
    description?: string
    date?: string
    location?: string
    skills?: string[]
  }>
}

interface ResumeTemplate {
  id: string
  name: string
  description: string
  thumbnail: string
  isPopular: boolean
}

const sampleTemplates: ResumeTemplate[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean and professional design with a modern twist',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Stand out with a creative and unique design',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false
  }
]

const initialSections: ResumeSection[] = [
  {
    id: 'education',
    type: 'education',
    title: 'Education',
    items: [
      {
        id: '1',
        title: 'Bachelor of Science in Computer Science',
        subtitle: 'University of Technology',
        date: '2018 - 2022',
        location: 'San Francisco, CA',
        description: 'Graduated with honors. Specialized in Software Engineering.'
      }
    ]
  },
  {
    id: 'experience',
    type: 'experience',
    title: 'Work Experience',
    items: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        subtitle: 'TechCorp',
        date: '2022 - Present',
        location: 'San Francisco, CA',
        description: 'Leading development of enterprise applications using React and Node.js.'
      }
    ]
  },
  {
    id: 'skills',
    type: 'skills',
    title: 'Skills',
    items: [
      {
        id: '1',
        title: 'Technical Skills',
        skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS']
      }
    ]
  }
]

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern')
  const [sections, setSections] = useState<ResumeSection[]>(initialSections)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const handleAddSection = (type: ResumeSection['type']) => {
    const newSection: ResumeSection = {
      id: Date.now().toString(),
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
      items: []
    }
    setSections([...sections, newSection])
  }

  const handleAddItem = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    if (section) {
      const newItem = {
        id: Date.now().toString(),
        title: '',
        subtitle: '',
        description: '',
        date: '',
        location: '',
        skills: []
      }
      const updatedSections = sections.map(s =>
        s.id === sectionId
          ? { ...s, items: [...s.items, newItem] }
          : s
      )
      setSections(updatedSections)
    }
  }

  const handleDeleteItem = (sectionId: string, itemId: string) => {
    const updatedSections = sections.map(section =>
      section.id === sectionId
        ? {
            ...section,
            items: section.items.filter(item => item.id !== itemId)
          }
        : section
    )
    setSections(updatedSections)
  }

  const handleDownload = () => {
    // Here you would implement the actual PDF generation and download
    console.log('Downloading resume...')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
        <p className="mt-2 text-gray-600">Create a professional resume that stands out.</p>
      </div>

      {/* Template Selection */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Choose a Template</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleTemplates.map((template) => (
            <div
              key={template.id}
              className={`relative cursor-pointer rounded-lg border ${
                selectedTemplate === template.id
                  ? 'border-primary ring-2 ring-primary'
                  : 'border-gray-200'
              } bg-white p-4 shadow-sm`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              {template.isPopular && (
                <span className="absolute right-2 top-2 inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Popular
                </span>
              )}
              <img
                src={template.thumbnail}
                alt={template.name}
                className="h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{template.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Editor */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Editor Panel */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Resume Content</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
              >
                <EyeIcon className="mr-2 h-5 w-5" />
                {isPreviewMode ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary-600"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download
              </button>
            </div>
          </div>

          {sections.map((section) => (
            <div
              key={section.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                <button
                  onClick={() => handleAddItem(section.id)}
                  className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                >
                  <PlusIcon className="mr-2 h-5 w-5" />
                  Add Item
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => {
                            // Here you would implement the actual update logic
                            console.log('Updating title:', e.target.value)
                          }}
                          placeholder="Title"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                        {item.subtitle && (
                          <input
                            type="text"
                            value={item.subtitle}
                            onChange={(e) => {
                              // Here you would implement the actual update logic
                              console.log('Updating subtitle:', e.target.value)
                            }}
                            placeholder="Subtitle"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteItem(section.id, item.id)}
                        className="ml-4 rounded-md p-2 text-gray-400 hover:text-red-500"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>

                    {item.description && (
                      <textarea
                        value={item.description}
                        onChange={(e) => {
                          // Here you would implement the actual update logic
                          console.log('Updating description:', e.target.value)
                        }}
                        placeholder="Description"
                        rows={3}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    )}

                    {item.skills && (
                      <div className="mt-2">
                        <input
                          type="text"
                          value={item.skills.join(', ')}
                          onChange={(e) => {
                            // Here you would implement the actual update logic
                            console.log('Updating skills:', e.target.value)
                          }}
                          placeholder="Skills (comma-separated)"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Add Section Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleAddSection('education')}
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Education
            </button>
            <button
              onClick={() => handleAddSection('experience')}
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Experience
            </button>
            <button
              onClick={() => handleAddSection('skills')}
              className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            >
              <PlusIcon className="mr-2 h-5 w-5" />
              Add Skills
            </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900">Preview</h2>
          <div className="mt-4 aspect-[1/1.414] w-full overflow-auto rounded-lg border border-gray-200 bg-white p-8">
            {/* Here you would implement the actual resume preview */}
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                <p className="text-gray-600">Software Engineer</p>
              </div>

              {sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  <div className="mt-2 space-y-4">
                    {section.items.map((item) => (
                      <div key={item.id}>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-sm text-gray-600">{item.subtitle}</p>
                        )}
                        {item.date && (
                          <p className="text-sm text-gray-500">{item.date}</p>
                        )}
                        {item.description && (
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        )}
                        {item.skills && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 