import { motion } from 'framer-motion';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 px-4"
      initial={{ opacity: 0, scale: 0.95, rotate: -2, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-600 font-mono mb-4">
            // Work Experience
          </h2>
          <p className="text-slate-600 text-lg">
            Building high-performance systems across various industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-blue-400 to-purple-400" />

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white z-10" />

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} pl-8 md:pl-0`}>
                  <div className="bg-white/60 border border-slate-200 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 shadow-sm">
                    {/* Period */}
                    <span className="text-cyan-600 font-mono text-sm">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <h4 className="text-slate-500 font-mono mb-3">
                      {exp.company}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full border border-slate-200 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;