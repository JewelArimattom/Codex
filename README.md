# Codex — Premium Blogging Platform

A visually stunning, editorial-style blogging platform built for the PIXELCRAFT UI/UX Design Challenge. This project prioritizes visual aesthetics, typography excellence, and user experience above all else.

## 🎨 Design Concept

**"Clarity & Calm"** — A premium reading experience inspired by Medium, Substack, and modern digital magazines. The interface uses generous whitespace, editorial typography, and subtle depth to create a peaceful environment for writers and readers.

## ✨ Key Features

- **Landing Page**: Hero section with featured blog cards, features showcase, and strong CTAs
- **Login Page**: Minimal, focused authentication with social login options
- **Signup Page**: Clean registration flow with password strength indicator
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Animations**: Subtle Framer Motion animations for premium feel
- **Design System**: 8px spacing grid, consistent typography, and refined color palette

## 🎨 Design System

### Typography
- **Font Family**: Inter (400, 500, 600, 700, 800)
- **Headlines**: 700 weight for impact
- **Body Text**: 400 weight with 1.7 line-height for readability
- **UI Elements**: 500-600 weight for balance

### Color Palette
- **Background**: `#FAFAF9` (warm white)
- **Surface**: `#FFFFFF` (pure white cards)
- **Text Primary**: `#1A1A1A` (soft black)
- **Text Secondary**: `#6B6B6B` (neutral gray)
- **Accent**: `#2563EB` (refined blue)
- **Accent Hover**: `#1D4ED8` (deeper blue)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
codex/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   └── BlogCard.jsx        # Reusable blog card
│   ├── pages/
│   │   ├── LandingPage.jsx     # Main landing page
│   │   ├── LoginPage.jsx       # Login screen
│   │   └── SignupPage.jsx      # Registration screen
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Design Principles

1. **Whitespace is Premium**: Generous spacing makes content breathable
2. **Typography Hierarchy**: Clear visual hierarchy for all text elements
3. **Subtle Motion**: Animations enhance, never distract
4. **Mobile-First**: Designed for mobile, enhanced for desktop
5. **Editorial Focus**: Layout optimized for long-form reading

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **Vite** - Lightning-fast build tool

## 🎬 Demo & Deployment

This project is ready for immediate deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

Simply connect your repository and deploy!

## 📝 License

Created for the PIXELCRAFT UI/UX Design Challenge 2026

---

**Designed with clarity. Built with care.**
