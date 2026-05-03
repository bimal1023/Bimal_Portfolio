export interface TimelineItem {
  date: string
  title: string
  org: string
  bullets: string[]
  dotColor: string
  animationDelay?: string
}

export const education: TimelineItem[] = [
  {
    date: 'Expected May 2027',
    title: 'B.S. Computer Science',
    org: "St. Joseph's University, New York",
    bullets: [
      "Dean's List (3 consecutive semesters)",
      '90% tuition scholarship — academic merit & leadership',
      'Relevant: Data Structures, Algorithms, OS, Database Systems, Software Engineering',
    ],
    dotColor: '#8b5cf6',
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
    date: '2023 – Stanford Online',
    title: 'Supervised Machine Learning',
    org: 'Andrew Ng — Coursera',
    bullets: ["Completed Stanford's ML specialization by Andrew Ng"],
    dotColor: '#34d399',
    animationDelay: '0.2s',
  },
]
