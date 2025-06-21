import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import CommunityPage from './pages/Community'
import LoginStudent from './pages/LoginStudent'
import CollegeDashboard from './pages/CollegeDashboard'
import AIInterview from './pages/AIInterview'
import Mentorship from './pages/Mentorship'
import SkillBadges from './pages/SkillBadges'
import JobBoard from './pages/JobBoard'
import ExpertCoaches from './pages/ExpertCoaches'
import AlumniNetwork from './pages/AlumniNetwork'
import DiscussionForums from './pages/DiscussionForums'
import ResumeBuilder from './pages/ResumeBuilder'

import SocialFeed from './components/SocialFeed'
import Network from './pages/Network'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/login/student" element={<LoginStudent />} />
            <Route path="/college-dashboard" element={<CollegeDashboard />} />
            <Route path="/interview-practice" element={<AIInterview />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/skill-certifications" element={<SkillBadges />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/expert-coaches" element={<ExpertCoaches />} />
            <Route path="/profile" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Profile Page</h1><p>Coming Soon...</p></div>} />
            <Route path="/settings" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Settings Page</h1><p>Coming Soon...</p></div>} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/discussion-forums" element={<DiscussionForums />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/network" element={<Network />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App 