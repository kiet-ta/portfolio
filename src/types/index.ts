export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'blockchain';
}

export interface Social {
  name: string;
  url: string;
}