// src/components/Hero.tsx
import React from 'react';
import { intro } from '../data/content';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-5xl font-bold">
        {intro.name}
      </h1>
      <p className="mt-4 text-2xl text-cyan-400">
        {/* Typing effect will be added here */}
        {intro.focus.join(' | ')}
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-gray-300">
        {intro.story}
      </p>
    </section>
  );
};

export default Hero;