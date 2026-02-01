import './App.css';
import { Navbar, Hero, ProjectCard, ScrollToTop, Skills, Experience, Contact } from './components';
import { projects } from './data/content';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Animated background grid */}
      {/* Clean background - removed grid as per user request */}

      {/* Gradient orbs - Light Mode Adjusted */}
      <div className="fixed top-0 -left-40 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
      <div className="fixed bottom-0 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse mix-blend-multiply" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4" aria-label="Projects">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-cyan-600 font-mono mb-4">
                // Featured Projects
              </h2>
              <p className="text-slate-600 text-lg">
                A selection of my recent work in blockchain, backend systems, and distributed computing.
              </p>
            </motion.div>

            {/* Featured Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Other Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-cyan-600 font-mono mb-6">
                Other Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index + projects.filter((p) => p.featured).length}
                    />
                  ))}
              </div>
            </motion.div>

            {/* View More on GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <a
                href="https://github.com/kiet-ta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-mono rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                View More on GitHub
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        <ScrollToTop />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-4 px-4 text-center border-t border-slate-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-slate-500 text-sm font-mono">
              &copy; {new Date().getFullYear()} Kiet Ta
            </p>
            <p className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              {/* <img src={archLogo} alt="Arch Linux" className="w-6 h-6" /> */}
              <span>Arch Linux (BTW)</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;