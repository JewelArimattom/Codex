import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, BookOpen, Users, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'

const LandingPage = () => {
  // Featured blog posts data
  const featuredPosts = [
    {
      title: "The Art of Minimalist Writing",
      excerpt: "Discover how simplicity in language creates powerful narratives. Learn the techniques that transform complex ideas into clear, compelling stories that resonate with readers.",
      author: "Sarah Chen",
      date: "Jan 5, 2026",
      readTime: 8,
      image: null
    },
    {
      title: "Building Creative Habits That Last",
      excerpt: "Consistency beats intensity when it comes to creative work. Explore proven strategies for developing sustainable writing practices that fuel long-term growth and inspiration.",
      author: "Marcus Rivera",
      date: "Jan 4, 2026",
      readTime: 6,
      image: null
    },
    {
      title: "Finding Your Authentic Voice",
      excerpt: "Your unique perspective is your greatest asset. This guide helps you discover and refine the voice that makes your writing unmistakably yours in a crowded digital landscape.",
      author: "Elena Volkov",
      date: "Jan 3, 2026",
      readTime: 10,
      image: null
    },
    {
      title: "The Science of Engaging Storytelling",
      excerpt: "What makes some stories unforgettable? Dive into the psychology and structure behind narratives that captivate audiences and create lasting emotional connections.",
      author: "Dr. James Park",
      date: "Jan 2, 2026",
      readTime: 12,
      image: null
    },
    {
      title: "Writing in the Age of AI",
      excerpt: "Technology is reshaping how we create and consume content. Navigate the evolving landscape while maintaining the human touch that makes writing meaningful and authentic.",
      author: "Priya Sharma",
      date: "Jan 1, 2026",
      readTime: 7,
      image: null
    },
    {
      title: "From Draft to Published: A Complete Guide",
      excerpt: "Transform raw ideas into polished pieces ready for the world. This comprehensive workflow covers everything from ideation to final edits with practical tips at every stage.",
      author: "Alex Thompson",
      date: "Dec 30, 2025",
      readTime: 15,
      image: null
    }
  ]

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Distraction-Free Editor",
      description: "Write in a beautiful, minimalist environment designed for focus and flow."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Built for Readers",
      description: "Your stories are presented with typography and layout that honors your craft."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Engaged Community",
      description: "Connect with thoughtful readers and fellow writers who value quality content."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Grow Your Audience",
      description: "Reach readers who appreciate depth, insight, and authentic storytelling."
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Where ideas take shape</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Write, Share, <br />
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                Inspire
              </span>
            </h1>

            <p className="text-xl text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
              A premium platform for writers who believe in the power of words. 
              Create beautiful stories, build meaningful connections, and reach readers who care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="btn-primary flex items-center space-x-2 text-base w-full sm:w-auto justify-center">
                <span>Start Writing Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="btn-secondary text-base w-full sm:w-auto justify-center">
                Explore Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Stories</h2>
            <p className="text-secondary text-lg">Curated reads from our community of thoughtful writers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Built for Writers</h2>
            <p className="text-secondary text-lg">Everything you need to share your ideas with the world</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-accent/5 to-accent/10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to share your story?
          </h2>
          <p className="text-xl text-secondary mb-10 leading-relaxed">
            Join thousands of writers using Codex to craft, publish, and grow their audience.
          </p>
          <Link to="/signup" className="btn-primary text-lg inline-flex items-center space-x-2">
            <span>Create Your Account</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
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

export default LandingPage
