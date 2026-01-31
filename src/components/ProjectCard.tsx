import { motion } from 'framer-motion';
import type { Project } from '../types';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/solid';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -10px rgba(6,182,212,0.15)' }}
      className="group relative bg-white/60 border border-slate-200 rounded-xl p-7 backdrop-blur-xl hover:border-cyan-300 shadow-lg transition-all duration-500 overflow-hidden"
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/30 to-cyan-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

      {/* Featured badge + icon */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-2 z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 text-xs font-mono bg-cyan-100 text-cyan-700 border border-cyan-200 rounded-full shadow-md flex items-center gap-1">
            <StarIcon className="w-4 h-4 text-yellow-500 animate-bounce" />
            Featured
          </span>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Title + Sparkles */}
        <h3 className="text-2xl font-black text-slate-900 mb-3 font-mono group-hover:text-cyan-600 transition-colors flex items-center gap-2 tracking-wide">
          <Sparkles className="w-5 h-5 text-cyan-500 animate-spin-slow" />
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-slate-100 text-cyan-700 rounded-sm border border-slate-200 font-mono hover:border-cyan-300 transition-colors shadow-sm tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-slate-200">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -6 }}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors text-sm font-mono group/link focus:ring-2 focus:ring-cyan-500/40 rounded"
              aria-label={`View ${project.title} on GitHub`}
            >
              <BadgeCheck className="w-4 h-4 text-cyan-500 animate-pulse" />
              GitHub
            </motion.a>
          )}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 6 }}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors text-sm font-mono group/link focus:ring-2 focus:ring-cyan-500/40 rounded"
              aria-label={`View ${project.title} live demo`}
            >
              <Sparkles className="w-4 h-4 text-cyan-500 animate-bounce" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;