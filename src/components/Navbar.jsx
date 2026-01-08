import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PenLine, User, LogOut, Moon, Sun, UserCircle } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check authentication status on mount and storage changes
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('codex_auth')
      if (authData) {
        try {
          const { isAuthenticated: auth, email, name } = JSON.parse(authData)
          setIsAuthenticated(auth)
          setUser({ email, name })
        } catch (error) {
          console.error('Error parsing auth data:', error)
        }
      }
    }

    checkAuth()

    // Listen for storage changes (login/logout from other tabs)
    window.addEventListener('storage', checkAuth)
    return () => window.removeEventListener('storage', checkAuth)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('codex_auth')
    localStorage.removeItem('codex_credentials')
    setIsAuthenticated(false)
    setUser(null)
    setShowDropdown(false)
    navigate('/')
  }

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
              to="/explore" 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Explore
            </Link>
            <Link 
              to="/write" 
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Write
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-surface transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-primary">{user?.name || 'User'}</span>
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-surface rounded-xl shadow-lg border border-border overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-primary">{user?.name}</p>
                        <p className="text-xs text-secondary truncate">{user?.email}</p>
                      </div>
                      <div className="py-2">
                        <button
                          onClick={() => navigate('/profile')}
                          className="w-full px-4 py-2 text-sm text-left text-primary hover:bg-background transition-colors flex items-center space-x-2"
                        >
                          <UserCircle className="w-4 h-4" />
                          <span>Profile</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsDarkMode(!isDarkMode)
                            // In production, this would toggle actual dark mode
                          }}
                          className="w-full px-4 py-2 text-sm text-left text-primary hover:bg-background transition-colors flex items-center space-x-2"
                        >
                          {isDarkMode ? (
                            <>
                              <Sun className="w-4 h-4" />
                              <span>Light Mode</span>
                            </>
                          ) : (
                            <>
                              <Moon className="w-4 h-4" />
                              <span>Dark Mode</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
