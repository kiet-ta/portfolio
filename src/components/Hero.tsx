import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { intro } from '../data/content';
import { Sparkles, Terminal, GitCommit } from 'lucide-react';
import ContributionGraph from './ContributionGraph';

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  // Infinite Loop typewriter effect
  useEffect(() => {
    const text = intro.focus || intro.title || intro.tagline;

    // Type out
    if (typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
    // Reset after delay to loop
    else {
      const timeout = setTimeout(() => {
        setTypedText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-slate-50"
    >
      {/* Technical Background - Contribution Graph Style */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Abstract "Contribution" Blocks */}
        <div className="absolute top-20 right-[10%] w-64 h-64 opacity-20">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className={`w-full pt-[100%] rounded-sm ${Math.random() > 0.7 ? 'bg-green-400' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <div className="text-center lg:text-left">
          {/* Name & Badge */}
          <motion.h1
            variants={itemVariants}
            className="inline-flex flex-col md:flex-row items-center lg:items-start gap-3 text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 font-mono"
          >
            <span className="relative">
              {intro.name}
            </span>
            {/* Pro Badge */}
            <span className="inline-flex items-center px-4 py-1.5 text-base font-mono font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-300 shadow-sm whitespace-nowrap">
              <Terminal className="w-5 h-5 mr-2 text-slate-600" />
              Junior Fullstack
            </span>
          </motion.h1>

          {/* Typing Focus Text */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-slate-600 mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start gap-2"
          >
            <GitCommit className="w-6 h-6 text-green-600 animate-pulse flex-shrink-0" />
            <span className="font-mono font-medium text-left">
              {typedText}
              <span className="animate-pulse text-cyan-600">_</span>
            </span>
          </motion.div>

          {/* Story/Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed whitespace-pre-line"
          >
            {intro.story}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <div className="flex gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-600 text-white font-mono font-bold rounded shadow-lg hover:bg-cyan-500 transition-colors flex items-center gap-2 group"
              >
                <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-800 font-mono font-bold rounded shadow-sm border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 3D Contribution Graph Display - Right Column */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex justify-center items-center"
        >
          <ContributionGraph />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 40, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
        }}
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-40 cursor-pointer hover:text-cyan-600 transition-colors"
      >
        <svg
          className="w-14 h-14 text-slate-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;