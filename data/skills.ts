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
      { name: 'TypeScript', color: '#8b5cf6' },
      { name: 'JavaScript', color: '#34d399' },
      { name: 'SQL', color: '#60a5fa' },
      { name: 'R', color: '#ff6b9d' },
    ],
  },
  {
    title: 'AI / LLM',
    items: [
      { name: 'LangChain', color: '#ff6b9d' },
      { name: 'LangGraph', color: '#8b5cf6' },
      { name: 'RAG', color: '#34d399' },
      { name: 'Multi-Agent Systems', color: '#60a5fa' },
      { name: 'MCP', color: '#f97316' },
      { name: 'Tool Calling', color: '#fbbf24' },
      { name: 'PyTorch', color: '#fbbf24' },
      { name: 'Hugging Face', color: '#f97316' },
      { name: 'Scikit-learn', color: '#60a5fa' },
      { name: 'OpenAI API', color: '#8b5cf6' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { name: 'REST APIs', color: '#60a5fa' },
      { name: 'Real-Time (SSE)', color: '#34d399' },
      { name: 'Celery / Redis', color: '#ff6b9d' },
      { name: 'CI/CD', color: '#fbbf24' },
      { name: 'Debugging & Testing', color: '#8b5cf6' },
    ],
  },
  {
    title: 'Web & Cloud',
    items: [
      { name: 'React', color: '#60a5fa' },
      { name: 'Next.js', color: '#34d399' },
      { name: 'FastAPI', color: '#34d399' },
      { name: 'GraphQL', color: '#ff6b9d' },
      { name: 'Azure (AKS/ACR)', color: '#60a5fa' },
      { name: 'AWS', color: '#fbbf24' },
      { name: 'Docker', color: '#60a5fa' },
    ],
  },
  {
    title: 'Data & DB',
    items: [
      { name: 'PostgreSQL', color: '#f97316' },
      { name: 'MySQL', color: '#60a5fa' },
      { name: 'pgvector', color: '#34d399' },
      { name: 'ChromaDB', color: '#8b5cf6' },
      { name: 'Pandas / NumPy', color: '#fbbf24' },
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
