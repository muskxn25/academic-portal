import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import CollegeDetails from './components/CollegeDetails'
import Colleges from './pages/Colleges'
import AcademicMaterials from './pages/AcademicMaterials'
import Departments from './pages/Departments'

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
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 