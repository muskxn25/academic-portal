import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Community from './pages/Dashboard'
import LoginStudent from './pages/LoginStudent'
import CollegeDashboard from './pages/CollegeDashboard'
import AIInterview from './pages/AIInterview'
import Mentorship from './pages/Mentorship'
import SkillBadges from './pages/SkillBadges'
import JobBoard from './pages/JobBoard'
import AlumniNetwork from './pages/AlumniNetwork'
import DiscussionForums from './pages/DiscussionForums'
import ResumeBuilder from './pages/ResumeBuilder'
import Courses from './pages/Courses'
import SocialFeed from './components/SocialFeed'
import Network from './pages/Network'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login/student" element={<LoginStudent />} />
            <Route path="/college-dashboard" element={<CollegeDashboard />} />
            <Route path="/ai-interview" element={<AIInterview />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/skill-badges" element={<SkillBadges />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/discussion-forums" element={<DiscussionForums />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/social" element={<SocialFeed />} />
            <Route path="/network" element={<Network />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App 