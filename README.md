# 🚀 Kiet Ta - Portfolio Website

A modern, high-performance portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark cyberpunk/terminal aesthetic with smooth animations and full accessibility support.

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: 60fps animations with Framer Motion
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized with lazy loading and code splitting
- **Clean Architecture**: Separation of concerns, reusable components
- **Type Safety**: Full TypeScript coverage

## 🎨 Design Philosophy

- **Dark Mode**: Cyberpunk/terminal-inspired aesthetic
- **Minimalist**: Clean, focused design without clutter
- **Glassmorphism**: Subtle backdrop blur effects
- **Smooth Transitions**: No janky animations, 60fps guarantee
- **Professional**: Tech-heavy but polished presentation

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with auto-hide
│   ├── Hero.tsx        # Hero section with typing effect
│   ├── ProjectCard.tsx # Reusable project card
│   ├── Skills.tsx      # Skills categorized display
│   ├── Experience.tsx  # Timeline-based experience
│   ├── Contact.tsx     # Contact form
│   └── index.ts        # Barrel exports
├── data/
│   └── content.ts      # Centralized content data
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Tech Stack

### Core
- **React 19**: Latest React with improved performance
- **TypeScript**: Full type safety
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling

### Animation & UI
- **Framer Motion**: Production-ready motion library
- **CSS Grid/Flexbox**: Modern layout techniques

### Development
- **ESLint**: Code quality
- **TypeScript ESLint**: TS-specific linting
- **SWC**: Fast TypeScript/JSX compilation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kiet-ta/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 🎯 Key Components

### Navbar
- Auto-hide on scroll down
- Glassmorphism effect
- Responsive mobile menu
- Smooth transitions

### Hero Section
- Typing effect animation
- Gradient text
- Call-to-action buttons
- Scroll indicator

### Project Cards
- Hover effects with glow
- Tech stack tags
- GitHub/Live demo links
- Featured badge

### Skills Section
- Categorized display
- Proficiency indicators
- Animated appearance
- Hover scaling

### Experience Timeline
- Alternating layout
- Animated entrance
- Tech stack display
- Gradient timeline

### Contact Form
- Form validation
- Success feedback
- Direct contact info
- Availability status

## 🎨 Customization

### Update Personal Information

Edit `src/data/content.ts`:

```typescript
export const intro: IntroData = {
  name: 'Your Name',
  tagline: 'Your Tagline',
  focus: ['Role 1', 'Role 2', 'Role 3'],
  story: "Your story...",
};
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description...',
    techStack: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    featured: true,
  },
];
```

### Modify Colors

Update Tailwind config or use existing utility classes:
- Primary: `cyan-400` (can be changed globally)
- Background: `black`, `gray-900`, `gray-800`
- Text: `white`, `gray-300`, `gray-400`

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Use gh-pages or manual deployment
```

## 📊 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Components load on demand
- **Image Optimization**: WebP format recommended
- **CSS Purging**: Tailwind removes unused styles
- **Minification**: Production builds are minified
- **Tree Shaking**: Dead code elimination

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast ratios

## 🧪 Best Practices Implemented

### Component Patterns
- ✅ Functional components
- ✅ TypeScript interfaces
- ✅ Container/Presentation separation
- ✅ Props validation
- ✅ Barrel exports

### File Organization
- ✅ Centralized data
- ✅ Type definitions
- ✅ Component modularity
- ✅ Consistent naming

### Code Quality
- ✅ ESLint configured
- ✅ TypeScript strict mode
- ✅ No console logs in production
- ✅ Proper error handling

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts
server: { port: 3000 }
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type errors
```bash
# Rebuild TypeScript
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from terminal aesthetics
- Framer Motion for animation library
- Tailwind CSS for styling system
- React community for best practices

## 📧 Contact

- **Email**: contact@kiet-ta.dev
- **GitHub**: [@kiet-tA](https://github.com/kiet-ta)
- **LinkedIn**: [Kiet TA](https://linkedin.com/in/kiet-ta)

---

**Built with love in Arch Linux** | **© 2026 Kiet TA**