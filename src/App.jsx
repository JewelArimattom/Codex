import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BlogPost from './pages/BlogPost'
import WriteBlog from './pages/WriteBlog'
import ExplorePage from './pages/ExplorePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/write" element={<WriteBlog />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  )
}

export default App
