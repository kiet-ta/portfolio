// src/components/Navbar.tsx
import React from 'react';
import { socials } from '../data/content';

const Navbar: React.FC = () => {
  const navLinks = ['Home', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-cyan-400">/home/tak</div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
            {socials.map(social => (
                 <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    {social.name}
                 </a>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;