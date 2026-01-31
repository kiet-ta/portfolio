import { motion } from 'framer-motion';
import { skills } from '../data/content';

const Skills = () => {
  const categories = {
    language: 'Languages',
    framework: 'Frameworks',
    blockchain: 'Blockchain',
    tool: 'Tools & Infrastructure',
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-4"
      initial={{ opacity: 0, scale: 0.95, rotate: 2, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-600 font-mono mb-4">
            // Skills & Technologies
          </h2>
          <p className="text-slate-600 text-lg">
            Tools and technologies I work with to build robust, scalable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 border border-slate-200 rounded-lg p-6 backdrop-blur-sm shadow-sm"
            >
              <h3 className="text-xl font-bold text-cyan-600 font-mono mb-4">
                {categories[category as keyof typeof categories]}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {categorySkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${skill.proficiency === 'expert'
                      ? 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                      : skill.proficiency === 'advanced'
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section >
  );
};

export default Skills;