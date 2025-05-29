import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import CollegeDetails from './components/CollegeDetails'
import Colleges from './pages/Colleges'
import AcademicMaterials from './pages/AcademicMaterials'
import Departments from './pages/Departments'
import AIInterview from './pages/AIInterview'
import Mentorship from './pages/Mentorship'
import SkillBadges from './pages/SkillBadges'
import JobBoard from './pages/JobBoard'
import AlumniNetwork from './pages/AlumniNetwork'
import DiscussionForums from './pages/DiscussionForums'
import ResumeBuilder from './pages/ResumeBuilder'
import Courses from './pages/Courses'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
                  <p className="mt-2 text-gray-600">Here's an overview of your academic progress and career development.</p>
                  <div className="mt-8">
                    <Dashboard />
                  </div>
                </>
              }
            />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/college/:collegeId" element={<CollegeDetails />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/materials" element={<AcademicMaterials />} />
            <Route path="/ai-interview" element={<AIInterview />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/skill-badges" element={<SkillBadges />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/discussion-forums" element={<DiscussionForums />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 