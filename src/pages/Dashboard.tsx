import React, { useState } from 'react';
import { AcademicCapIcon, UsersIcon, BuildingLibraryIcon, BriefcaseIcon, Squares2X2Icon, CalendarDaysIcon, ChatBubbleLeftRightIcon, UserGroupIcon, StarIcon, BellIcon, CheckCircleIcon, PlusIcon, XMarkIcon, ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const tabs = [
  { name: 'Community Hub', icon: Squares2X2Icon },
  { name: 'Campus Life', icon: BuildingLibraryIcon },
  { name: 'Alumni Network', icon: UsersIcon },
  { name: 'Platform Courses', icon: AcademicCapIcon },
  { name: 'Career Paths', icon: BriefcaseIcon },
];

// Mock user roles: 'admin', 'student', 'alumni', etc.
const mockStudent = {
  name: 'Aman Sharma',
  college: 'ABC Institute of Technology',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  role: 'student', // Change to 'admin' to test admin view
};

const featuredAnnouncements = [
  { title: 'Annual Tech Fest Registration Open!', date: '2025-07-01' },
  { title: 'Guest Lecture: AI in Healthcare', date: '2025-06-25' },
];

const initialPosts = [
  { user: 'Priya Patel', content: 'Anyone joining the new Robotics Club this semester?', time: '2h ago' },
  { user: 'Rahul Verma', content: 'Looking for a study group for Data Structures!', time: '5h ago' },
];

const quickLinks = [
  { label: 'Clubs & Societies', icon: UserGroupIcon },
  { label: 'Study Groups', icon: ChatBubbleLeftRightIcon },
  { label: 'Events Calendar', icon: CalendarDaysIcon },
  { label: 'Library', icon: BuildingLibraryIcon },
];

const initialEvents = [
  { name: 'Hackathon 2025', date: '2025-07-10', location: 'Main Auditorium', rsvped: false },
  { name: 'Cultural Night', date: '2025-07-15', location: 'Open Air Theatre', rsvped: false },
];

const studyGroups = [
  { subject: 'Data Structures', members: 8 },
  { subject: 'Business Analytics', members: 5 },
];

const initialClubs = [
  { name: 'Robotics Club', description: 'Build and program robots for competitions.', approved: true, members: ['Priya Patel', 'Aman Sharma'], posts: [
    { user: 'Priya Patel', content: 'Robotics Club meeting this Friday at 5pm!', time: '1d ago' },
    { user: 'Aman Sharma', content: 'Check out our new robot prototype!', time: '2d ago' },
  ] },
  { name: 'Drama Society', description: 'Perform and produce stage plays and skits.', approved: true, members: ['Rahul Verma'], posts: [
    { user: 'Rahul Verma', content: 'Auditions for the new play are open!', time: '3d ago' },
  ] },
  { name: 'Chess Club', description: 'For chess enthusiasts. Pending approval.', approved: false, members: [], posts: [] },
];

const mentorSpotlight = {
  name: 'Dr. Priya Patel',
  title: 'AI Researcher & Mentor',
  avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  bio: 'Passionate about helping students explore AI and machine learning.'
};

const campusNews = [
  { headline: 'New Library Wing Inaugurated', date: '2025-06-20' },
  { headline: 'Placement Drive Results Announced', date: '2025-06-18' },
];

const leaderboard = [
  { name: 'Priya Patel', points: 120, avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Rahul Verma', points: 110, avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Aman Sharma', points: 100, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
];

const notificationsData = [
  { message: 'Your RSVP for Hackathon 2025 is confirmed!', time: '1h ago' },
  { message: 'Priya Patel replied to your post.', time: '3h ago' },
];

const libraryResources = [
  { title: 'Data Structures Notes', type: 'PDF', uploader: 'Prof. Michael Lee', date: '2025-06-10' },
  { title: 'Business Ethics Case Study', type: 'DOCX', uploader: 'Aman Sharma', date: '2025-06-12' },
  { title: 'Biology Lab Report Template', type: 'PDF', uploader: 'Dr. Sarah Chen', date: '2025-06-08' },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('Community Hub');
  const [pollAnswer, setPollAnswer] = useState('');
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [events, setEvents] = useState(initialEvents);
  const [todo, setTodo] = useState<string[]>(['Submit assignment', 'Join study group']);
  const [newTodo, setNewTodo] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [clubs, setClubs] = useState(initialClubs);
  const [showClubModal, setShowClubModal] = useState(false);
  const [clubName, setClubName] = useState('');
  const [clubDesc, setClubDesc] = useState('');
  const [clubRequested, setClubRequested] = useState(false);
  const [showClubDetails, setShowClubDetails] = useState<number|null>(null);
  const [showLibraryModal, setShowLibraryModal] = useState(false);
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceType, setResourceType] = useState('PDF');
  const [resourceUploading, setResourceUploading] = useState(false);
  const [resourceUploaded, setResourceUploaded] = useState(false);
  const [resources, setResources] = useState(libraryResources);
  const student = mockStudent;

  // State for club details modal tabs
  const [clubModalActiveTab, setClubModalActiveTab] = useState('Members');

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{ user: student.name, content: newPost, time: 'Just now' }, ...posts]);
      setNewPost('');
    }
  };

  const handleRSVP = (idx: number) => {
    setEvents(events.map((event, i) => i === idx ? { ...event, rsvped: true } : event));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodo([newTodo, ...todo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (idx: number) => {
    setTodo(todo.filter((_, i) => i !== idx));
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedbackSent(true);
      setFeedback('');
      setTimeout(() => setFeedbackSent(false), 2000);
    }
  };

  const handleRequestClub = (e: React.FormEvent) => {
    e.preventDefault();
    if (clubName.trim()) {
      setClubs([...clubs, { name: clubName, description: clubDesc, approved: false, members: [], posts: [] }]);
      setClubRequested(true);
      setClubName('');
      setClubDesc('');
      setTimeout(() => {
        setShowClubModal(false);
        setClubRequested(false);
      }, 2000);
    }
  };

  const handleUploadResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (resourceTitle.trim()) {
      setResourceUploading(true);
      setTimeout(() => {
        setResources([{ title: resourceTitle, type: resourceType, uploader: student.name, date: '2025-06-20' }, ...resources]);
        setResourceUploading(false);
        setResourceUploaded(true);
        setResourceTitle('');
        setTimeout(() => setResourceUploaded(false), 1500);
      }, 1200);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Community Hub':
        return (
          <div className="py-8 px-2">
            {/* Only admins can post in the main feed */}
            {student.role === 'admin' && (
              <form onSubmit={handleCreatePost} className="bg-white rounded-lg shadow-sm p-4 mb-6 flex gap-3 items-start">
                <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full border border-gray-300" />
                <textarea
                  value={newPost}
                  onChange={e => setNewPost(e.target.value)}
                  placeholder="Share something with the community..."
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows={2}
                />
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition flex items-center gap-1"><PlusIcon className="h-5 w-5" />Post</button>
              </form>
            )}
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Community Posts</h3>
            <div className="space-y-4">
              {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">{post.user[0]}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{post.user}</div>
                    <div className="text-gray-700">{post.content}</div>
                    <div className="text-xs text-gray-500 mt-1">{post.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Campus Life':
        return (
          <div className="py-8 px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h2>
                <ul className="space-y-4">
                  {events.map((event, idx) => (
                    <li key={idx} className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-gray-200">
                      <div>
                        <div className="font-medium text-gray-900">{event.name}</div>
                        <div className="text-sm text-gray-600">{event.date} • {event.location}</div>
                      </div>
                      {event.rsvped ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-green-50 text-green-700 rounded-full">
                          <CheckCircleIcon className="h-4 w-4" /> RSVPed
                        </span>
                      ) : (
                        <button
                          onClick={() => handleRSVP(idx)}
                          className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                        >
                          RSVP
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Groups */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Study Groups</h2>
                <ul className="space-y-4">
                  {studyGroups.map((group, idx) => (
                    <li key={idx} className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-gray-200">
                      <div>
                        <div className="font-medium text-gray-900">{group.subject}</div>
                        <div className="text-sm text-gray-600">{group.members} members</div>
                      </div>
                      <button className="text-blue-700 hover:text-blue-800 font-medium text-sm">Join</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clubs & Societies */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between">
                Clubs & Societies
                {student.role === 'student' && (
                  <button
                    onClick={() => setShowClubModal(true)}
                    className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition flex items-center gap-1"
                  >
                    <PlusIcon className="h-4 w-4" /> Request New Club
                  </button>
                )}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map((club, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="font-semibold text-gray-900 mb-1 flex items-center justify-between">
                      {club.name}
                      {club.approved ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                          <CheckCircleIcon className="h-3 w-3" /> Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-yellow-50 text-yellow-700 rounded-full">
                          Pending
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{club.description}</p>
                    <div className="text-sm text-gray-700 mb-3">{club.members.length} Members</div>
                    <button
                      onClick={() => setShowClubDetails(idx)}
                      className="text-blue-700 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Spotlight */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Mentor Spotlight</h2>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                <img src={mentorSpotlight.avatar} alt={mentorSpotlight.name} className="w-16 h-16 rounded-full border border-gray-300 object-cover" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">{mentorSpotlight.name}</div>
                  <div className="text-blue-700 font-medium">{mentorSpotlight.title}</div>
                  <p className="text-sm text-gray-700 mt-1">{mentorSpotlight.bio}</p>
                </div>
              </div>
            </div>

            {/* Quick Poll */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Poll: Best Study Spot?</h2>
              <form>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                    <input
                      type="radio"
                      name="poll"
                      value="Library"
                      checked={pollAnswer === 'Library'}
                      onChange={e => setPollAnswer(e.target.value)}
                      className="form-radio h-4 w-4 text-blue-700 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Library</span>
                  </label>
                  <label className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                    <input
                      type="radio"
                      name="poll"
                      value="Cafeteria"
                      checked={pollAnswer === 'Cafeteria'}
                      onChange={e => setPollAnswer(e.target.value)}
                      className="form-radio h-4 w-4 text-blue-700 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Cafeteria</span>
                  </label>
                  <label className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                    <input
                      type="radio"
                      name="poll"
                      value="Common Room"
                      checked={pollAnswer === 'Common Room'}
                      onChange={e => setPollAnswer(e.target.value)}
                      className="form-radio h-4 w-4 text-blue-700 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Common Room</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition w-full"
                  onClick={(e) => { e.preventDefault(); alert(`You voted for: ${pollAnswer}`); }}
                >
                  Submit Vote
                </button>
              </form>
            </div>

            {/* Campus News */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Campus News</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {campusNews.map((news, idx) => (
                  <li key={idx}><span className="font-medium">{news.headline}</span> <span className="text-xs text-gray-500">({news.date})</span></li>
                ))}
              </ul>
            </div>

            {/* To-Do List */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Your To-Do List</h2>
              <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newTodo}
                  onChange={e => setNewTodo(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition">Add</button>
              </form>
              <ul className="space-y-2">
                {todo.map((task, idx) => (
                  <li key={idx} className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-gray-200">
                    <span className="text-gray-700">{task}</span>
                    <button onClick={() => handleRemoveTodo(idx)} className="text-red-600 hover:text-red-800 transition">
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Leaderboard</h2>
              <ul className="space-y-3">
                {leaderboard.map((user, idx) => (
                  <li key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-800 w-5 text-right">{idx + 1}.</span>
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gray-300 object-cover" />
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                    <span className="font-semibold text-blue-700">{user.points} pts</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notifications Widget (example, could be in right sidebar too) */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
              <ul className="space-y-3">
                {notificationsData.map((n, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-md border border-gray-200">
                    <BellIcon className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-700 text-sm">{n.message}</div>
                      <div className="text-xs text-gray-500 mt-1">{n.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feedback Widget */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Give Feedback</h2>
              {feedbackSent ? (
                <div className="text-green-600 font-medium flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5" /> Feedback Sent! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSendFeedback} className="space-y-4">
                  <textarea
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    placeholder="Share your thoughts or report an issue..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows={4}
                  />
                  <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition">
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>

            {/* Club Request Modal */}
            {showClubModal && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Request New Club</h3>
                    <button onClick={() => setShowClubModal(false)} className="text-gray-500 hover:text-gray-700">
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  {clubRequested ? (
                    <div className="text-green-600 font-medium text-center py-4 flex items-center justify-center gap-2">
                      <CheckCircleIcon className="h-5 w-5" /> Club Request Submitted!
                    </div>
                  ) : (
                    <form onSubmit={handleRequestClub} className="space-y-4">
                      <div>
                        <label htmlFor="clubName" className="block text-sm font-medium text-gray-700 mb-1">Club Name</label>
                        <input
                          type="text"
                          id="clubName"
                          value={clubName}
                          onChange={e => setClubName(e.target.value)}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="clubDesc" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          id="clubDesc"
                          value={clubDesc}
                          onChange={e => setClubDesc(e.target.value)}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                          rows={3}
                          required
                        />
                      </div>
                      <div className="flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setShowClubModal(false)}
                          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition">
                          Request Club
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* Club Details Modal */}
            {showClubDetails !== null && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{clubs[showClubDetails].name}</h3>
                    <button onClick={() => setShowClubDetails(null)} className="text-gray-500 hover:text-gray-700">
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{clubs[showClubDetails].description}</p>
                  <div className="mb-4">
                    <div className="flex border-b border-gray-200">
                      <button
                        onClick={() => setClubModalActiveTab('Members')}
                        className={`px-4 py-2 text-sm font-medium transition
                          ${clubModalActiveTab === 'Members' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
                      >
                        Members ({clubs[showClubDetails].members.length})
                      </button>
                      <button
                        onClick={() => setClubModalActiveTab('Posts')}
                        className={`px-4 py-2 text-sm font-medium transition
                          ${clubModalActiveTab === 'Posts' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
                      >
                        Posts ({clubs[showClubDetails].posts.length})
                      </button>
                    </div>
                    <div className="mt-4">
                      {clubModalActiveTab === 'Members' ? (
                        clubs[showClubDetails].members.length > 0 ? (
                          <ul className="space-y-2">
                            {clubs[showClubDetails].members.map((member, mIdx) => (
                              <li key={mIdx} className="bg-gray-50 rounded-md p-3 border border-gray-200 text-gray-700">{member}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600">No members yet.</p>
                        )
                      ) : (
                        clubModalActiveTab === 'Posts' ? (
                          clubs[showClubDetails].posts.length > 0 ? (
                            <ul className="space-y-3">
                              {clubs[showClubDetails].posts.map((post, pIdx) => (
                                <li key={pIdx} className="bg-gray-50 rounded-md p-3 border border-gray-200">
                                  <div className="font-semibold text-gray-900">{post.user}</div>
                                  <p className="text-gray-700 text-sm mt-1">{post.content}</p>
                                  <div className="text-xs text-gray-500 mt-1">{post.time}</div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">No posts yet.</p>
                          )
                        ) : null
                      )}
                    </div>
                  </div>
                  {student.role === 'student' && clubs[showClubDetails].approved && (
                    <form onSubmit={(e) => { e.preventDefault(); /* Add post logic for club */ }} className="flex gap-2 items-start mt-4 border-t border-gray-200 pt-4">
                      <textarea
                        placeholder="Post something in this club..."
                        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={2}
                      />
                      <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition flex items-center gap-1">
                        <PlusIcon className="h-5 w-5" /> Post
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* Library Resources Modal */}
            {showLibraryModal && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Library Resources</h3>
                    <button onClick={() => setShowLibraryModal(false)} className="text-gray-500 hover:text-gray-700">
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">Browse and upload useful academic resources.</p>
                  <div className="space-y-4 mb-6">
                    {resources.map((res, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-md p-3 border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <DocumentTextIcon className="h-6 w-6 text-blue-700 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900">{res.title} ({res.type})</div>
                            <div className="text-sm text-gray-600">Uploaded by {res.uploader} on {res.date}</div>
                          </div>
                        </div>
                        <button className="text-blue-700 hover:text-blue-800">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  {student.role === 'admin' && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Upload New Resource</h4>
                      {resourceUploaded ? (
                        <div className="text-green-600 font-medium text-center py-4 flex items-center justify-center gap-2">
                          <CheckCircleIcon className="h-5 w-5" /> Resource Uploaded!
                        </div>
                      ) : (
                        <form onSubmit={handleUploadResource} className="space-y-4">
                          <div>
                            <label htmlFor="resourceTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                              type="text"
                              id="resourceTitle"
                              value={resourceTitle}
                              onChange={e => setResourceTitle(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <select
                              id="resourceType"
                              value={resourceType}
                              onChange={e => setResourceType(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option>PDF</option>
                              <option>DOCX</option>
                              <option>PPT</option>
                              <option>Video</option>
                              <option>Link</option>
                            </select>
                          </div>
                          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition flex items-center gap-1"
                            disabled={resourceUploading}
                          >
                            {resourceUploading ? 'Uploading...' : <><PlusIcon className="h-5 w-5" /> Upload Resource</>}
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        );
      case 'Alumni Network':
        return (
          <div className="py-8 px-2">
            <div className="text-center text-lg text-gray-700 mb-6">Connect with alumni, find mentors, and grow your network.</div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Find a Mentor</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="mentorSearch" className="block text-sm font-medium text-gray-700 mb-1">Search Mentors</label>
                  <input
                    type="text"
                    id="mentorSearch"
                    placeholder="e.g., Software Engineer, Marketing, Data Science"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="mentorSkills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <input
                    type="text"
                    id="mentorSkills"
                    placeholder="e.g., React, Python, Project Management"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition w-full">
                  Search Mentors
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Alumni Mentors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Example Mentor Card */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mentor Name" className="w-16 h-16 rounded-full border border-gray-300 object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Sarah Chen</div>
                    <div className="text-blue-700 text-sm">Senior Data Scientist at TechCorp</div>
                    <div className="text-gray-600 text-xs">Specializes in ML, Python, Cloud Computing</div>
                    <button className="mt-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-md px-3 py-1 text-sm hover:bg-blue-100 transition">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Mentor Name" className="w-16 h-16 rounded-full border border-gray-300 object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">Mr. David Lee</div>
                    <div className="text-blue-700 text-sm">Marketing Director at Global Brands</div>
                    <div className="text-gray-600 text-xs">Specializes in Digital Marketing, Brand Strategy</div>
                    <button className="mt-2 bg-blue-50 text-blue-700 border border-blue-300 rounded-md px-3 py-1 text-sm hover:bg-blue-100 transition">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Platform Courses':
        return (
          <div className="py-8 px-2">
            <div className="text-center text-lg text-gray-700 mb-6">Browse and enroll in platform courses to boost your skills.</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Course Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <img src="https://via.placeholder.com/400x200" alt="Course Thumbnail" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Introduction to React Development</h3>
                  <p className="text-sm text-gray-700 mb-3">Learn the fundamentals of React for building modern web applications.</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span><StarIcon className="h-4 w-4 inline-block text-yellow-400 -mt-0.5" /> 4.8 (1.2K ratings)</span>
                    <span>Beginner</span>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition w-full">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <img src="https://via.placeholder.com/400x200" alt="Course Thumbnail" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Advanced Python for Data Science</h3>
                  <p className="text-sm text-gray-700 mb-3">Deep dive into data manipulation and analysis with Python.</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span><StarIcon className="h-4 w-4 inline-block text-yellow-400 -mt-0.5" /> 4.9 (800 ratings)</span>
                    <span>Intermediate</span>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition w-full">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowLibraryModal(true)}
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-6 py-3 font-semibold transition flex items-center gap-2 mx-auto"
              >
                <BuildingLibraryIcon className="h-6 w-6" /> Explore Library Resources
              </button>
            </div>
          </div>
        );
      case 'Career Paths':
        return (
          <div className="py-8 px-2">
            <div className="text-center text-lg text-gray-700 mb-6">Discover career paths, job opportunities, and guidance.</div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Career Path Explorer</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="careerPathSearch" className="block text-sm font-medium text-gray-700 mb-1">Search Career Paths</label>
                  <input
                    type="text"
                    id="careerPathSearch"
                    placeholder="e.g., Software Development, Product Management, UI/UX Design"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="industryFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Industry</label>
                  <select
                    id="industryFilter"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>All Industries</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                  </select>
                </div>
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold transition w-full">
                  Explore Paths
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended Job Opportunities</h2>
              <div className="space-y-4">
                {/* Example Job Card */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Frontend Developer</h3>
                  <div className="text-blue-700 text-sm font-medium mb-2">InnovateTech Solutions</div>
                  <p className="text-gray-700 text-sm mb-3">Building responsive and user-friendly web interfaces using React.</p>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span>Full-time • Remote</span>
                    <span>Posted 2 days ago</span>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition">
                    Apply Now
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Data Analyst Intern</h3>
                  <div className="text-blue-700 text-sm font-medium mb-2">Data Insights Corp</div>
                  <p className="text-gray-700 text-sm mb-3">Assist in collecting, processing, and performing statistical analysis of data.</p>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span>Internship • Hybrid</span>
                    <span>Posted 1 week ago</span>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-2">
      <div className="max-w-3xl w-full mx-auto">
        {/* Personalized Welcome */}
        <div className="flex items-center gap-4 mb-6 bg-white rounded-xl shadow-md p-4">
          <img src={student.avatar} alt={student.name} className="w-14 h-14 rounded-full border border-gray-300" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {student.name}!</h1>
            <div className="text-gray-600 font-medium">{student.college}</div>
          </div>
        </div>
        {/* Notifications Panel */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center gap-4">
          <BellIcon className="h-6 w-6 text-blue-700" />
          <div className="flex-1">
            {notificationsData.map((n, idx) => (
              <div key={idx} className="text-sm text-gray-700 flex items-center gap-2 mb-1">
                <span className="inline-block w-2 h-2 bg-blue-700 rounded-full"></span> {n.message} <span className="text-xs text-gray-500">{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Announcements */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Featured Announcements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {featuredAnnouncements.map((a, idx) => (
              <li key={idx} className="mb-1"><span className="font-medium text-gray-800">{a.title}</span> <span className="text-xs text-gray-500">({a.date})</span></li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg text-center text-gray-700 hover:bg-gray-100 transition border border-gray-200"
              >
                <link.icon className="h-6 w-6 text-blue-700 mb-2" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <nav className="flex border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 py-3 px-4 text-center text-sm font-medium transition
                  ${activeTab === tab.name
                    ? 'text-blue-700 border-b-2 border-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
              >
                <tab.icon className="h-5 w-5 inline-block mr-2 -mt-0.5" />
                {tab.name}
              </button>
            ))}
          </nav>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
} 
