import React, { useState } from 'react'
import { 
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  ClockIcon,
  EyeIcon,
  ChatBubbleOvalLeftIcon,
  FireIcon,
  BookmarkIcon,
  ShareIcon,
  FlagIcon
} from '@heroicons/react/24/outline'

interface ForumPost {
  id: number
  title: string
  content: string
  author: {
    name: string
    avatar?: string
    role: string
  }
  category: string
  tags: string[]
  createdAt: string
  views: number
  replies: number
  isHot: boolean
  isPinned: boolean
}

const samplePosts: ForumPost[] = [
  {
    id: 1,
    title: "Best practices for React performance optimization",
    content: "I've been working on optimizing my React application's performance. Here are some key strategies I've found effective...",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Senior Developer"
    },
    category: "Frontend Development",
    tags: ["React", "Performance", "JavaScript"],
    createdAt: "2 hours ago",
    views: 156,
    replies: 12,
    isHot: true,
    isPinned: true
  },
  {
    id: 2,
    title: "System Design Interview Preparation Tips",
    content: "I recently went through several system design interviews. Here's my experience and some tips that helped me...",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Tech Lead"
    },
    category: "Interview Prep",
    tags: ["System Design", "Career", "Interview"],
    createdAt: "1 day ago",
    views: 89,
    replies: 5,
    isHot: false,
    isPinned: false
  }
]

export default function DiscussionForums() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')
  const [showHotOnly, setShowHotOnly] = useState(false)

  const categories = ['All', 'Frontend Development', 'Backend Development', 'Interview Prep', 'Career Advice']
  const tags = ['All', 'React', 'JavaScript', 'System Design', 'Career', 'Interview', 'Performance']

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag)
    const matchesHot = !showHotOnly || post.isHot

    return matchesSearch && matchesCategory && matchesTag && matchesHot
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Discussion Forums</h1>
        <p className="mt-2 text-gray-600">Join the conversation and share your knowledge with the community.</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-48">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showHotOnly}
                onChange={(e) => setShowHotOnly(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">Hot topics only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Create New Post Button */}
      <div className="flex justify-end">
        <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600">
          <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
          Create New Post
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`rounded-lg border ${
              post.isPinned ? 'border-primary' : 'border-gray-200'
            } bg-white p-6 shadow-sm`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full"
                  />
                ) : (
                  <UserCircleIcon className="h-12 w-12 text-gray-400" />
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    {post.isPinned && (
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Pinned
                      </span>
                    )}
                    {post.isHot && (
                      <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
                        <FireIcon className="mr-1 h-4 w-4" />
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{post.author.name}</span>
                    <span>•</span>
                    <span>{post.author.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500">
                  <BookmarkIcon className="h-5 w-5" />
                </button>
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500">
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button className="rounded-md p-2 text-gray-400 hover:text-gray-500">
                  <FlagIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{post.content}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                  {post.createdAt}
                </div>
                <div className="flex items-center">
                  <EyeIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                  {post.views} views
                </div>
                <div className="flex items-center">
                  <ChatBubbleOvalLeftIcon className="mr-1.5 h-5 w-5 text-gray-400" />
                  {post.replies} replies
                </div>
              </div>
              <button className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 