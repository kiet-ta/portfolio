import type { Project, Skill, Social } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Decentralized Voting System',
    description: 'A secure and transparent voting application built on the Sui Blockchain, utilizing Move for smart contracts to ensure immutability and trust.',
    techStack: ['Sui', 'Move', 'Rust', 'React', 'TypeScript'],
    github: 'https://github.com/example/sui-voting',
  },
  {
    id: 2,
    title: 'High-Performance Trade-Matching Engine',
    description: 'A backend service written in Rust for a financial tech platform, focusing on low-latency order matching and high throughput.',
    techStack: ['Rust', 'Tokio', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/example/rust-trading-engine',
  },
  {
    id: 3,
    title: 'Enterprise Resource Planning (ERP) System',
    description: 'A modular ERP system for manufacturing clients, built with .NET Core for robust, cross-platform performance and scalability.',
    techStack: ['.NET', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server'],
    link: 'https://example-erp-live.com',
  },
   {
    id: 4,
    title: 'Bevy Game Engine Contribution',
    description: 'Contributed to the open-source Bevy game engine, focusing on improving the ECS (Entity-Component-System) core logic and documentation.',
    techStack: ['Rust', 'Bevy', 'ECS'],
    github: 'https://github.com/bevyengine/bevy/pull/1234',
  },
];

export const skills: Skill[] = [
  { name: 'Rust', category: 'language' },
  { name: '.NET', category: 'framework' },
  { name: 'C#', category: 'language' },
  { name: 'Sui', category: 'blockchain' },
  { name: 'Solana', category: 'blockchain' },
  { name: 'Arch Linux', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'PostgreSQL', category: 'tool' },
  { name: 'TypeScript', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Tokio', category: 'framework' },
  { name: 'ASP.NET Core', category: 'framework' },
];

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/example' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/example' },
  { name: 'Twitter', url: 'https://twitter.com/example' },
];

export const intro = {
  name: 'John Doe',
  focus: ['Rust Developer', 'Backend Engineer', 'Sui Blockchain Enthusiast'],
  story: "Specializing in building high-performance, scalable backend systems. Passionate about decentralized technologies and open-source contributions. My preferred environment is Arch Linux, and I thrive on solving complex problems with clean, efficient code.",
};