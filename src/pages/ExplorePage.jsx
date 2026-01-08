import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Writing Tips', 'Creativity', 'Technology', 'Productivity', 'Storytelling', 'Personal Growth']

  const allBlogs = [
    {
      id: 1,
      title: "The Art of Minimalist Writing",
      excerpt: "Discover how simplicity in language creates powerful narratives. Learn the techniques that transform complex ideas into clear, compelling stories that resonate with readers.",
      author: "Sarah Chen",
      date: "Jan 5, 2026",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      category: "Writing Tips"
    },
    {
      id: 2,
      title: "Building Creative Habits That Last",
      excerpt: "Consistency beats intensity when it comes to creative work. Explore proven strategies for developing sustainable writing practices that fuel long-term growth and inspiration.",
      author: "Marcus Rivera",
      date: "Jan 4, 2026",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80",
      category: "Productivity"
    },
    {
      id: 3,
      title: "Finding Your Authentic Voice",
      excerpt: "Your unique perspective is your greatest asset. This guide helps you discover and refine the voice that makes your writing unmistakably yours in a crowded digital landscape.",
      author: "Elena Volkov",
      date: "Jan 3, 2026",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=800&q=80",
      category: "Personal Growth"
    },
    {
      id: 4,
      title: "The Science of Engaging Storytelling",
      excerpt: "What makes some stories unforgettable? Dive into the psychology and structure behind narratives that captivate audiences and create lasting emotional connections.",
      author: "Dr. James Park",
      date: "Jan 2, 2026",
      readTime: 12,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      category: "Storytelling"
    },
    {
      id: 5,
      title: "Writing in the Age of AI",
      excerpt: "Technology is reshaping how we create and consume content. Navigate the evolving landscape while maintaining the human touch that makes writing meaningful and authentic.",
      author: "Priya Sharma",
      date: "Jan 1, 2026",
      readTime: 7,
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&q=80",
      category: "Technology"
    },
    {
      id: 6,
      title: "From Draft to Published: A Complete Guide",
      excerpt: "Transform raw ideas into polished pieces ready for the world. This comprehensive workflow covers everything from ideation to final edits with practical tips at every stage.",
      author: "Alex Thompson",
      date: "Dec 30, 2025",
      readTime: 15,
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",
      category: "Writing Tips"
    },
    {
      id: 7,
      title: "The Power of Daily Writing Practice",
      excerpt: "Small daily actions compound into extraordinary results. Discover why writing just 15 minutes a day can transform your skills and creativity over time.",
      author: "Maria Santos",
      date: "Dec 28, 2025",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      category: "Productivity"
    },
    {
      id: 8,
      title: "Crafting Memorable Characters",
      excerpt: "Characters are the heart of every great story. Learn the techniques professional writers use to create characters readers will remember long after the last page.",
      author: "David Kim",
      date: "Dec 27, 2025",
      readTime: 11,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      category: "Storytelling"
    },
    {
      id: 9,
      title: "Overcoming Writer's Block Forever",
      excerpt: "Writer's block isn't a creative problem—it's a psychological one. Understand the root causes and discover proven techniques to keep your ideas flowing.",
      author: "Rachel Green",
      date: "Dec 26, 2025",
      readTime: 9,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      category: "Creativity"
    },
    {
      id: 10,
      title: "The Business of Being a Writer",
      excerpt: "Turning your passion into a profession requires more than talent. Navigate the practical side of writing careers, from pitching to pricing your work.",
      author: "James Morrison",
      date: "Dec 25, 2025",
      readTime: 13,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      category: "Personal Growth"
    }
  ]

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Explore Stories
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Discover thoughtful writing from our community of creators
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary" />
              <input
                type="text"
                placeholder="Search stories, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-xl text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <Filter className="w-5 h-5 text-secondary" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-surface text-secondary hover:text-primary border border-border hover:border-accent/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-secondary text-sm">
            Showing <span className="font-semibold text-primary">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'story' : 'stories'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <BlogCard key={post.id} {...post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-secondary mb-4">No stories found</p>
              <p className="text-secondary">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold text-primary">Codex</span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-secondary">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Community</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
            <p className="text-sm text-secondary">© 2026 Codex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExplorePage
