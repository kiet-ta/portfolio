// src/components/ProjectCard.tsx
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/20 hover:border-cyan-400 transition-colors duration-300">
      <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
      <p className="mt-2 text-gray-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-sm bg-gray-700 text-gray-200 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label={`GitHub for ${project.title}`}
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label={`Live site for ${project.title}`}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;