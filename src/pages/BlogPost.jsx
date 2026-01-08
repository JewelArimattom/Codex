import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, MessageCircle, Heart, Bookmark, Share2, X } from 'lucide-react';
import Navbar from '../components/Navbar';

// Blog posts data
const allPosts = [
  {
    id: '1',
    title: 'The Art of Minimalist Design',
    excerpt: 'Exploring the principles of minimalism in modern web design and how less can truly be more.',
    author: 'Emma Chen',
    date: 'Dec 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop',
    content: `
      <p>Minimalist design has become one of the most influential movements in modern web design. It's not just about aesthetics—it's about creating experiences that are intuitive, focused, and purposeful.</p>
      
      <h2>Understanding Minimalism</h2>
      <p>At its core, minimalism is about stripping away the unnecessary. Every element on the page should serve a purpose. This doesn't mean boring or bland; it means intentional and refined.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>White Space:</strong> Don't be afraid of empty space. It gives your content room to breathe and helps guide the user's eye.</li>
        <li><strong>Typography:</strong> With fewer elements competing for attention, your typography becomes even more important. Choose fonts that are both beautiful and readable.</li>
        <li><strong>Color Palette:</strong> Limit your palette to 2-3 main colors. This creates cohesion and makes your design more memorable.</li>
        <li><strong>Hierarchy:</strong> Clear visual hierarchy is essential when you have fewer elements to work with.</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>When implementing minimalist design, start by removing elements rather than adding them. Ask yourself: "Does this element serve the user's goals?" If not, consider removing it.</p>
      
      <blockquote>"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</blockquote>
      
      <p>Remember, minimalism isn't about having less—it's about making room for more of what matters.</p>
    `
  },
  {
    id: '2',
    title: 'Typography in Digital Spaces',
    excerpt: 'A comprehensive guide to choosing and implementing typography that enhances user experience.',
    author: 'Marcus Rodriguez',
    date: 'Dec 12, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
    content: `
      <p>Typography is the foundation of good design. It's how we communicate with our users, and getting it right can make the difference between a good and great user experience.</p>
      
      <h2>Choosing the Right Typeface</h2>
      <p>Your typeface choice sets the tone for your entire design. Consider these factors:</p>
      
      <ul>
        <li>Readability at various sizes</li>
        <li>Brand personality alignment</li>
        <li>Performance and load times</li>
        <li>Versatility across different contexts</li>
      </ul>
      
      <h2>Establishing Hierarchy</h2>
      <p>Use size, weight, and spacing to create clear visual hierarchy. Your h1 should be unmistakably more prominent than your h2, which should be more prominent than your body text.</p>
      
      <p>Good typography is invisible. When done right, users don't notice the typography—they simply enjoy reading your content.</p>
    `
  },
  {
    id: '3',
    title: 'Color Theory for Developers',
    excerpt: 'Understanding how colors work together and how to create harmonious palettes for your projects.',
    author: 'Sarah Kim',
    date: 'Dec 10, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=500&fit=crop',
    content: `
      <p>Color is one of the most powerful tools in a designer's toolkit. It can evoke emotions, create hierarchy, and guide users through your interface.</p>
      
      <h2>The Basics</h2>
      <p>Understanding the color wheel and how colors relate to each other is fundamental. Complementary colors sit opposite each other, while analogous colors sit beside each other.</p>
      
      <h2>Creating Palettes</h2>
      <p>Start with a primary color that represents your brand. Then choose:</p>
      
      <ul>
        <li>2-3 neutral colors for backgrounds and text</li>
        <li>1-2 accent colors for calls-to-action</li>
        <li>Semantic colors for success, error, and warning states</li>
      </ul>
      
      <p>Remember to consider accessibility. Ensure sufficient contrast between text and backgrounds.</p>
    `
  },
  {
    id: '4',
    title: 'Responsive Design Patterns',
    excerpt: 'Modern approaches to building interfaces that work beautifully on any device.',
    author: 'Alex Thompson',
    date: 'Dec 8, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop',
    content: `
      <p>In today's multi-device world, responsive design isn't optional—it's essential. Your interface needs to work beautifully whether it's viewed on a phone, tablet, or desktop.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile, then progressively enhance for larger screens. This ensures your core experience works on the most constrained devices.</p>
      
      <h2>Common Patterns</h2>
      <p>Some tried-and-true responsive patterns include:</p>
      
      <ul>
        <li>Column drop: Stack columns vertically on small screens</li>
        <li>Mostly fluid: Fluid grids that adjust to screen size</li>
        <li>Layout shifter: Dramatically different layouts at different breakpoints</li>
      </ul>
      
      <p>Test on real devices whenever possible. Emulators are useful, but nothing beats testing on actual hardware.</p>
    `
  },
  {
    id: '5',
    title: 'Animation Principles',
    excerpt: 'How to use motion to enhance user experience without overwhelming your users.',
    author: 'Jordan Lee',
    date: 'Dec 5, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    content: `
      <p>Animation, when done well, can make your interface feel alive and responsive. It provides feedback, guides attention, and makes interactions feel natural.</p>
      
      <h2>Purposeful Motion</h2>
      <p>Every animation should have a purpose. Common purposes include:</p>
      
      <ul>
        <li>Providing feedback (button states, loading indicators)</li>
        <li>Directing attention (highlighting new content)</li>
        <li>Showing relationships (parent-child connections)</li>
        <li>Adding personality (brand expression)</li>
      </ul>
      
      <h2>Performance Considerations</h2>
      <p>Stick to animating transform and opacity properties when possible. These can be hardware-accelerated and won't trigger layout recalculations.</p>
      
      <p>Remember: animations should enhance, not distract. When in doubt, be subtle.</p>
    `
  },
  {
    id: '6',
    title: 'Building Design Systems',
    excerpt: 'Creating scalable, maintainable design systems that grow with your product.',
    author: 'Emma Chen',
    date: 'Dec 3, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop',
    content: `
      <p>A design system is more than a component library—it's a shared language between designers and developers that enables teams to build faster and more consistently.</p>
      
      <h2>Core Components</h2>
      <p>Your design system should include:</p>
      
      <ul>
        <li>Design tokens (colors, spacing, typography)</li>
        <li>Component library</li>
        <li>Usage guidelines</li>
        <li>Accessibility standards</li>
      </ul>
      
      <h2>Starting Small</h2>
      <p>Don't try to build everything at once. Start with your most-used components and expand from there.</p>
      
      <p>Document as you go. Good documentation is what makes a design system truly useful.</p>
    `
  },
  {
    id: '7',
    title: 'Accessibility First',
    excerpt: 'Why accessibility should be a priority from day one, not an afterthought.',
    author: 'Marcus Rodriguez',
    date: 'Dec 1, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
    content: `
      <p>Accessibility isn't just about compliance—it's about creating better experiences for everyone. Many accessibility improvements benefit all users, not just those with disabilities.</p>
      
      <h2>Where to Start</h2>
      <p>Focus on these fundamentals:</p>
      
      <ul>
        <li>Semantic HTML</li>
        <li>Keyboard navigation</li>
        <li>Color contrast</li>
        <li>Alt text for images</li>
        <li>ARIA labels where appropriate</li>
      </ul>
      
      <h2>Testing</h2>
      <p>Use automated tools, but don't rely on them entirely. Manual testing with screen readers and keyboard-only navigation is essential.</p>
      
      <p>Remember: accessibility is not a feature, it's a requirement.</p>
    `
  },
  {
    id: '8',
    title: 'The Future of Web Design',
    excerpt: 'Emerging trends and technologies that are shaping the future of digital experiences.',
    author: 'Sarah Kim',
    date: 'Nov 28, 2023',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    content: `
      <p>The web is constantly evolving. New technologies and approaches are emerging that will fundamentally change how we design and build digital experiences.</p>
      
      <h2>Key Trends</h2>
      <p>Watch these spaces:</p>
      
      <ul>
        <li>AI-assisted design tools</li>
        <li>3D and immersive experiences</li>
        <li>Advanced CSS capabilities</li>
        <li>Progressive enhancement</li>
      </ul>
      
      <h2>Staying Current</h2>
      <p>The key is to stay curious and keep learning. Experiment with new technologies, but always prioritize user experience over flashy features.</p>
      
      <p>The future of web design is exciting, but the fundamentals—good typography, clear hierarchy, and user-centered thinking—will always matter.</p>
    `
  },
  {
    id: '9',
    title: 'Design Critiques That Work',
    excerpt: 'How to give and receive design feedback that actually improves the work.',
    author: 'Alex Thompson',
    date: 'Nov 25, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    content: `
      <p>Design critiques are essential for growth, but they're often done poorly. Here's how to make them productive and positive.</p>
      
      <h2>Giving Feedback</h2>
      <p>Good feedback is:</p>
      
      <ul>
        <li>Specific, not vague</li>
        <li>Actionable</li>
        <li>Focused on the work, not the person</li>
        <li>Balanced (positive and constructive)</li>
      </ul>
      
      <h2>Receiving Feedback</h2>
      <p>Listen first, defend later. Try to understand the feedback before explaining your decisions. Often, there's valuable insight even in poorly articulated criticism.</p>
      
      <p>Remember: the goal is better design, not winning arguments.</p>
    `
  },
  {
    id: '10',
    title: 'Micro-interactions Matter',
    excerpt: 'The small details that make interfaces feel polished and professional.',
    author: 'Jordan Lee',
    date: 'Nov 22, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop',
    content: `
      <p>Micro-interactions are the small moments of engagement in your interface. A button changing state, a notification sliding in, a form field validating—these details add up to create an overall feeling of quality.</p>
      
      <h2>Types of Micro-interactions</h2>
      <ul>
        <li>Feedback: Confirming user actions</li>
        <li>Transitions: Smoothing state changes</li>
        <li>Hints: Guiding user behavior</li>
        <li>Delight: Adding personality</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Keep them subtle and quick. Micro-interactions should enhance, not slow down, the user experience.</p>
      
      <p>The best micro-interactions are almost invisible—users might not consciously notice them, but they'd miss them if they were gone.</p>
    `
  }
];

// Author details
const authorDetails = {
  'Emma Chen': {
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Senior Product Designer with 8+ years of experience crafting delightful user experiences.',
    stats: { posts: 42, followers: '12.5K' }
  },
  'Marcus Rodriguez': {
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'UX Researcher and Design Strategist passionate about human-centered design.',
    stats: { posts: 38, followers: '9.8K' }
  },
  'Sarah Kim': {
    avatar: 'https://i.pravatar.cc/150?img=45',
    bio: 'Creative Director specializing in brand identity and visual design.',
    stats: { posts: 56, followers: '15.2K' }
  },
  'Alex Thompson': {
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: 'Frontend Developer & Designer building the future of web experiences.',
    stats: { posts: 29, followers: '8.1K' }
  },
  'Jordan Lee': {
    avatar: 'https://i.pravatar.cc/150?img=29',
    bio: 'Motion Designer and Creative Technologist exploring interactive storytelling.',
    stats: { posts: 34, followers: '11.3K' }
  }
};

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = allPosts.find(p => p.id === id);
  
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load comments from localStorage
    const savedComments = localStorage.getItem(`comments_${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const userName = localStorage.getItem('codex_userName') || 'Anonymous User';
      
      const comment = {
        id: Date.now(),
        author: userName,
        text: newComment,
        date: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        })
      };
      
      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
      setNewComment('');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link to="/" className="text-accent hover:text-accent-hover">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const author = authorDetails[post.author];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-[60vh] relative overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-surface rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-secondary mb-8 pb-8 border-b border-border">
            <button
              onClick={() => setShowAuthorModal(true)}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <img
                src={author.avatar}
                alt={post.author}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{post.author}</span>
            </button>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                liked
                  ? 'bg-accent text-white'
                  : 'bg-background text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">Like</span>
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                bookmarked
                  ? 'bg-accent text-white'
                  : 'bg-background text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">Save</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background text-secondary hover:bg-accent/10 hover:text-accent transition-all">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-primary prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-secondary prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary prose-strong:font-semibold
              prose-ul:my-6 prose-li:text-secondary prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-accent
              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Author Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-surface rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-start gap-4">
            <img
              src={author.avatar}
              alt={post.author}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">{post.author}</h3>
              <p className="text-secondary mb-4">{author.bio}</p>
              <div className="flex items-center gap-6 text-sm text-secondary">
                <span>{author.stats.posts} posts</span>
                <span>{author.stats.followers} followers</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
              Follow
            </button>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-surface rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Comments ({comments.length})
          </h3>

          {/* Add Comment */}
          <div className="mb-8">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
              rows="4"
            />
            <button
              onClick={handleAddComment}
              className="mt-3 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
            >
              Post Comment
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4 pb-6 border-b border-border last:border-0">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-primary">{comment.author}</span>
                    <span className="text-sm text-secondary">{comment.date}</span>
                  </div>
                  <p className="text-secondary leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
            
            {comments.length === 0 && (
              <p className="text-secondary text-center py-8">No comments yet. Be the first to share your thoughts!</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Author Modal */}
      <AnimatePresence>
        {showAuthorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAuthorModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowAuthorModal(false)}
                className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <img
                  src={author.avatar}
                  alt={post.author}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">{post.author}</h3>
                <p className="text-secondary mb-6">{author.bio}</p>

                <div className="flex justify-center gap-8 mb-6 pb-6 border-b border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">{author.stats.posts}</div>
                    <div className="text-sm text-secondary">Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{author.stats.followers}</div>
                    <div className="text-sm text-secondary">Followers</div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium">
                  Follow {post.author.split(' ')[0]}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BlogPost;
