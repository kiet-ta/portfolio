export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'blockchain';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Social {
  name: string;
  url: string;
  icon?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface IntroData {
  name: string;
  tagline: string;
  focus: string[];
  story: string;
  resume?: string;
}