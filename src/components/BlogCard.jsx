import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, User } from 'lucide-react'

const BlogCard = ({ id, title, excerpt, author, date, readTime, image, index }) => {
  return (
    <Link to={`/blog/${id}`}>
      <motion.article
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/50"
      >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-accent/20">{title[0]}</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <User className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium text-primary">{author}</p>
              <p className="text-xs text-secondary">{date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-secondary">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{readTime} min</span>
          </div>
        </div>
      </div>
    </motion.article>
    </Link>
  )
}

export default BlogCard
