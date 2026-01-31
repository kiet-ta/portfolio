import './App.css';
import { Navbar, Hero, ProjectCard } from './components';
import { projects } from './data/content';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-black via-gray-900 to-cyan-950 min-h-screen pt-20">
        <Hero />
        <section id="projects" className="max-w-5xl mx-auto px-4 py-12" aria-label="Projects">
          <h2 className="text-3xl font-bold text-cyan-400 font-mono mb-8">// Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 text-xs font-mono border-t border-cyan-400/10 bg-black/60">
        &copy; {new Date().getFullYear()} John Doe — Backend/Software Engineer
      </footer>
    </>
  );
}

export default App;
