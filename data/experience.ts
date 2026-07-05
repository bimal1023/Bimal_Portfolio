export interface TimelineItem {
  date: string
  title: string
  org: string
  bullets: string[]
  dotColor: string
  animationDelay?: string
}

export const workExperience: TimelineItem[] = [
  {
    date: 'May 2026 – Present',
    title: 'IT Intelligent Automation Intern',
    org: 'TransRe · Brooklyn, NY',
    bullets: [
      "Architected a production FinOps AI agent using LangGraph's supervisor pattern to orchestrate parallel sub-agents aggregating cost data across 3 cloud vendors via custom FastMCP servers (Azure, AWS, Anthropic)",
      'Automated monthly financial reporting with Excel/PDF cost summaries over a Celery/Redis async pipeline — cutting manual reporting from 3–4 days to fully automated delivery',
      'Deployed the agent stack on AKS with ACR, Workload Identity, Key Vault CSI Driver, KEDA autoscaling, and Ingress NGINX for production-grade infrastructure',
    ],
    dotColor: '#8b5cf6',
  },
]

export const education: TimelineItem[] = [
  {
    date: 'Expected May 2027',
    title: 'B.S. Computer Science & Data Science',
    org: "St. Joseph's University, New York",
    bullets: [
      'GPA 3.948',
      "Dean's List (6 consecutive semesters) — top 5% of students",
      'Relevant: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Linear Algebra, Probability & Statistics',
    ],
    dotColor: '#3b82f6',
  },
]

export const teachingAndAwards: TimelineItem[] = [
  {
    date: '2023 – Present',
    title: 'Honors Peer Tutor',
    org: "St. Joseph's University",
    bullets: [
      'One-on-one and group tutoring in pre-calculus & intro CS',
      'Created tailored study plans → 10% improvement in test scores',
    ],
    dotColor: '#ff6b9d',
    animationDelay: '0.1s',
  },
  {
    date: '2023',
    title: 'Esse Non Videri Scholar',
    org: 'Scholarship Award',
    bullets: ['Awarded 90% tuition scholarship for academic merit & leadership'],
    dotColor: '#fbbf24',
    animationDelay: '0.15s',
  },
  {
    date: 'Stanford Online',
    title: 'Supervised Machine Learning',
    org: 'Andrew Ng — Coursera',
    bullets: ["Completed Stanford's supervised ML course by Andrew Ng"],
    dotColor: '#34d399',
    animationDelay: '0.2s',
  },
]
