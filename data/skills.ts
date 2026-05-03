export interface SkillItem {
  name: string
  color: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', color: '#fbbf24' },
      { name: 'Java', color: '#f97316' },
      { name: 'C', color: '#60a5fa' },
      { name: 'JavaScript', color: '#34d399' },
      { name: 'TypeScript', color: '#8b5cf6' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'LangChain', color: '#ff6b9d' },
      { name: 'PyTorch', color: '#fbbf24' },
      { name: 'TensorFlow', color: '#34d399' },
      { name: 'Scikit-learn', color: '#60a5fa' },
      { name: 'OpenAI API', color: '#8b5cf6' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', color: '#60a5fa' },
      { name: 'Next.js', color: '#34d399' },
      { name: 'TailwindCSS', color: '#fbbf24' },
      { name: 'CSS / HTML', color: '#ff6b9d' },
    ],
  },
  {
    title: 'Data & DB',
    items: [
      { name: 'PostgreSQL', color: '#f97316' },
      { name: 'MySQL', color: '#60a5fa' },
      { name: 'Vector DBs', color: '#34d399' },
      { name: 'Data Structures', color: '#8b5cf6' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'AWS', color: '#fbbf24' },
      { name: 'Docker', color: '#60a5fa' },
      { name: 'Git / GitHub', color: '#34d399' },
      { name: 'Linux', color: '#ff6b9d' },
    ],
  },
  {
    title: 'Math & CS',
    items: [
      { name: 'Linear Algebra', color: '#8b5cf6' },
      { name: 'Probability', color: '#f97316' },
      { name: 'Algorithms', color: '#fbbf24' },
      { name: 'OS Concepts', color: '#34d399' },
    ],
  },
]
