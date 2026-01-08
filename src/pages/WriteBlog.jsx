import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Save, Send, Image as ImageIcon, Bold, Italic, List } from 'lucide-react'

const WriteBlog = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: ''
  })
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const authData = localStorage.getItem('codex_auth')
    if (!authData) {
      // Redirect to login if not authenticated
      navigate('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveDraft = () => {
    // Save to localStorage as draft
    const drafts = JSON.parse(localStorage.getItem('codex_drafts') || '[]')
    const newDraft = {
      ...formData,
      id: Date.now(),
      savedAt: new Date().toISOString()
    }
    drafts.push(newDraft)
    localStorage.setItem('codex_drafts', JSON.stringify(drafts))
    alert('Draft saved successfully!')
  }

  const handlePublish = () => {
    if (!formData.title || !formData.content) {
      alert('Please fill in at least title and content before publishing')
      return
    }

    // In production, this would send to an API
    console.log('Publishing:', formData)
    alert('Blog published successfully! (In production, this would save to database)')
    
    // Clear form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: ''
    })
    
    // Redirect to home
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-surface border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-secondary hover:text-primary border border-border rounded-lg hover:border-accent transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>{showPreview ? 'Edit' : 'Preview'}</span>
              </button>
              <button
                onClick={handleSaveDraft}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-surface text-primary border border-border rounded-lg hover:border-accent transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </button>
              <button
                onClick={handlePublish}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {!showPreview ? (
          /* Editor Mode */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title Input */}
            <div className="mb-8">
              <textarea
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Your story title..."
                className="w-full text-4xl md:text-5xl font-bold text-primary placeholder:text-secondary/30 bg-transparent border-none focus:outline-none resize-none"
                rows="2"
              />
            </div>

            {/* Image URL Input */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <ImageIcon className="w-5 h-5 text-secondary" />
                <label className="text-sm font-medium text-secondary">Cover Image URL</label>
              </div>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              />
              {formData.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img src={formData.image} alt="Cover preview" className="w-full h-64 object-cover" />
                </div>
              )}
            </div>

            {/* Excerpt Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-secondary mb-3">Excerpt (Optional)</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Write a brief summary of your story..."
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                rows="3"
              />
            </div>

            {/* Formatting Toolbar */}
            <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-border">
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface rounded transition-colors" title="Bold">
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface rounded transition-colors" title="Italic">
                <Italic className="w-4 h-4" />
              </button>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface rounded transition-colors" title="List">
                <List className="w-4 h-4" />
              </button>
              <div className="flex-1"></div>
              <span className="text-xs text-secondary">
                {formData.content.split(' ').filter(w => w).length} words
              </span>
            </div>

            {/* Content Input */}
            <div className="mb-8">
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Tell your story..."
                className="w-full min-h-[500px] text-lg text-primary placeholder:text-secondary/30 bg-transparent border-none focus:outline-none resize-none leading-relaxed"
                style={{ lineHeight: '1.8' }}
              />
            </div>
          </motion.div>
        ) : (
          /* Preview Mode */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 px-4 py-3 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-accent">Preview Mode - This is how your blog will appear to readers</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {formData.title || 'Your story title...'}
            </h1>

            {formData.image && (
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img src={formData.image} alt="Cover" className="w-full h-[400px] object-cover" />
              </div>
            )}

            {formData.excerpt && (
              <p className="text-xl text-secondary mb-8 leading-relaxed">
                {formData.excerpt}
              </p>
            )}

            <div className="prose prose-lg max-w-none">
              {formData.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-6 text-primary leading-relaxed">
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {!formData.content && (
              <p className="text-secondary italic">Your story content will appear here...</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default WriteBlog
