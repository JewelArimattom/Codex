import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, BookOpen, Users, TrendingUp, PenTool, Feather } from 'lucide-react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'

// Floating particles component
const FloatingParticle = ({ delay, duration, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-accent/20"
    style={{ width: size, height: size }}
    initial={{ x, y, opacity: 0, scale: 0 }}
    animate={{
      y: [y, y - 100, y],
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

const LandingPage = () => {
  // Featured blog posts data
  const featuredPosts = [
    {
      id: '1',
      title: 'The Art of Minimalist Design',
      excerpt: 'Exploring the principles of minimalism in modern web design and how less can truly be more.',
      author: 'Emma Chen',
      date: 'Dec 15, 2023',
      readTime: 8,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop'
    },
    {
      id: '2',
      title: 'Typography in Digital Spaces',
      excerpt: 'A comprehensive guide to choosing and implementing typography that enhances user experience.',
      author: 'Marcus Rodriguez',
      date: 'Dec 12, 2023',
      readTime: 6,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop'
    },
    {
      id: '3',
      title: 'Color Theory for Developers',
      excerpt: 'Understanding how colors work together and how to create harmonious palettes for your projects.',
      author: 'Sarah Kim',
      date: 'Dec 10, 2023',
      readTime: 7,
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=500&fit=crop'
    },
    {
      id: '4',
      title: 'Responsive Design Patterns',
      excerpt: 'Modern approaches to building interfaces that work beautifully on any device.',
      author: 'Alex Thompson',
      date: 'Dec 8, 2023',
      readTime: 10,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop'
    },
    {
      id: '5',
      title: 'Animation Principles',
      excerpt: 'How to use motion to enhance user experience without overwhelming your users.',
      author: 'Jordan Lee',
      date: 'Dec 5, 2023',
      readTime: 9,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop'
    },
    {
      id: '6',
      title: 'Building Design Systems',
      excerpt: 'Creating scalable, maintainable design systems that grow with your product.',
      author: 'Emma Chen',
      date: 'Dec 3, 2023',
      readTime: 12,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop'
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
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating Particles */}
          <FloatingParticle delay={0} duration={4} x={100} y={200} size={8} />
          <FloatingParticle delay={1} duration={5} x={300} y={400} size={6} />
          <FloatingParticle delay={2} duration={4.5} x={500} y={150} size={10} />
          <FloatingParticle delay={0.5} duration={6} x={700} y={300} size={7} />
          <FloatingParticle delay={1.5} duration={5.5} x={900} y={450} size={9} />
          <FloatingParticle delay={3} duration={4} x={1100} y={200} size={6} />
          <FloatingParticle delay={2.5} duration={5} x={200} y={500} size={8} />
          <FloatingParticle delay={4} duration={6} x={800} y={100} size={5} />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-5xl mx-auto text-center relative">
            {/* Floating Icons */}
            <motion.div
              className="absolute -left-10 top-20 hidden lg:block"
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-4 bg-surface/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border">
                <PenTool className="w-8 h-8 text-accent" />
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-10 top-40 hidden lg:block"
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="p-4 bg-surface/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border">
                <Feather className="w-8 h-8 text-purple-500" />
              </div>
            </motion.div>
            <motion.div
              className="absolute left-20 bottom-10 hidden lg:block"
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="p-4 bg-surface/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border">
                <BookOpen className="w-8 h-8 text-emerald-500" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-accent/10 backdrop-blur-sm rounded-full mb-8 border border-accent/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold text-accent tracking-wide">Where ideas take shape</span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-8 leading-[1.1] tracking-tight">
                <motion.span
                  className="inline-block"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Write.{' '}
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Share.{' '}
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span
                  className="inline-block relative"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-accent via-purple-500 to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                    Inspire
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M0,4 Q50,8 100,4 T200,4"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </motion.span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              A premium platform for writers who believe in the power of words. 
              <span className="text-primary font-medium"> Create beautiful stories</span>, build meaningful connections, 
              and reach readers who care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link to="/write">
                <motion.button
                  className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-accent/25 flex items-center space-x-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative z-10">Start Writing Free</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
              </Link>
              <Link to="/explore">
                <motion.button
                  className="group px-8 py-4 bg-surface/80 backdrop-blur-sm text-primary font-semibold rounded-xl border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 flex items-center space-x-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>Explore Stories</span>
                  <BookOpen className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-16 pt-16 border-t border-border/50 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {[
                { value: "50K+", label: "Active Writers" },
                { value: "2M+", label: "Stories Published" },
                { value: "10M+", label: "Monthly Readers" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-primary mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-secondary font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-secondary/30 flex justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
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
          <Link to="/write" className="btn-primary text-lg inline-flex items-center space-x-2">
            <span>Write Your Blog</span>
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
