export interface Project {
  emoji: string
  tag: string
  name: string
  description: string
  tech: string[]
  links: { label: string; href: string }[]
  accent: string
}

export const projects: Project[] = [
  {
    emoji: '⚡',
    tag: '● AI Agent · Automation',
    name: 'Pulse — Personal AI Agent',
    description:
      'A fully deployed personal AI assistant with an agentic loop of 10 tools — web search, GitHub trending, Arxiv papers, job matching, cover letter generation & more. Features SSE-based token streaming, 6 automated daily pipelines (news briefings, research summaries, Discord alerts), and email OTP auth.',
    tech: ['FastAPI', 'React 19', 'GPT-4.1 mini', 'APScheduler', 'SQLite', 'Docker'],
    links: [
      { label: 'GitHub →', href: 'https://github.com/bimal1023/Pulse' },
      { label: 'Live ↗', href: 'https://pulse-rust-eta.vercel.app/' },
    ],
    accent: '#8b5cf6',
  },
  {
    emoji: '🌐',
    tag: '● Full-Stack · Cloud',
    name: 'Stellanet — AI-Powered Web App',
    description:
      'Production-grade REST APIs with authentication flows and PostgreSQL integration. Deployed across AWS & Vercel with a scalable architecture designed for AI feature expansion and real-world user-facing workflows.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'AWS', 'Vercel'],
    links: [{ label: 'Live ↗', href: 'https://www.stellanetconnect.com/' }],
    accent: '#3b82f6',
  },
  {
    emoji: '🧠',
    tag: '● RAG · LLM',
    name: 'LLM Document Intelligence',
    description:
      'Architected a Retrieval-Augmented Generation pipeline for intelligent document search. Reduced retrieval time by 80% and improved search relevance by 30% using semantic embeddings (FAISS + Chroma). Deployed on AWS with a scalable vector store backend.',
    tech: ['LangChain', 'FAISS', 'Chroma', 'OpenAI API', 'AWS'],
    links: [{ label: 'GitHub →', href: 'https://github.com/bimal1023/langchain-pdf-chatbot' }],
    accent: '#34d399',
  },
  {
    emoji: '🌸',
    tag: '● Deep Learning',
    name: 'Flower Image Classifier',
    description:
      'Image classification model using pretrained ResNet18 with transfer learning, data augmentation, and fine-tuning. Built a complete deep learning pipeline from preprocessing through evaluation.',
    tech: ['PyTorch', 'ResNet18', 'Transfer Learning'],
    links: [{ label: 'GitHub →', href: 'https://github.com/bimal1023/Flower_Classifier' }],
    accent: '#f97316',
  },
  {
    emoji: '🫁',
    tag: '● ML · Statistical Analysis',
    name: 'Lung Cancer Prediction',
    description:
      'Classification model with Chi-square and Kruskal-Wallis statistical testing. Optimized feature selection pipeline for improved model precision using Random Forest.',
    tech: ['R', 'Random Forest', 'Statistical Analysis'],
    links: [{ label: 'GitHub →', href: 'https://github.com/bimal1023?tab=repositories' }],
    accent: '#ff6b9d',
  },
  {
    emoji: '🔥',
    tag: '● ML · Regression',
    name: 'Calories Burned Prediction',
    description:
      'Achieved an R² score of 0.96 with full data preprocessing and feature engineering. Built a complete ML pipeline from raw data to production-ready evaluation using Linear Regression.',
    tech: ['Python', 'Linear Regression', 'Feature Engineering'],
    links: [{ label: 'GitHub →', href: 'https://github.com/bimal1023/Machine-Learning-App' }],
    accent: '#fbbf24',
  },
]
