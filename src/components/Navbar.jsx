import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <PenLine className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Codex</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Explore
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Write
            </Link>
            <Link 
              to="/login" 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="btn-primary text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
