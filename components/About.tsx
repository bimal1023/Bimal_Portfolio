'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  useScrollReveal()

  return (
    <section
      id="about"
      style={{
        background: 'white',
        maxWidth: '100%',
        padding: '100px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="about-inner-grid"
      >
        {/* Left: text */}
        <div className="reveal">
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-pink)',
              marginBottom: '12px',
            }}
          >
            About me
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            Curious builder,
            <br />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >
              forever learning.
            </span>
          </h2>
          <div
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--ink-soft)',
            }}
          >
            <p>
              I&apos;m a{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>
                Computer Science &amp; Data Science student at St. Joseph&apos;s University, New York
              </strong>
              , passionate about building production-grade AI systems and beautiful software. I focus
              on the intersection of machine learning and practical engineering.
            </p>
            <p style={{ marginTop: '16px' }}>
              Right now I&apos;m an{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>
                IT Intelligent Automation Intern at TransRe
              </strong>
              , where I architect production AI agents with LangGraph and MCP and ship them on
              Kubernetes. When I&apos;m not building agents or debugging edge cases, I&apos;m exploring
              new frameworks and tutoring fellow students in algorithms and programming.
            </p>
            <p style={{ marginTop: '16px' }}>
              I&apos;m seeking opportunities in{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>
                AI/ML engineering, full-stack development
              </strong>
              , and intelligent systems — where I can ship real things that matter.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {['LangGraph', 'LangChain', 'MCP', 'React', 'Python', 'FastAPI', 'AWS', 'Azure'].map((chip) => (
              <span
                key={chip}
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  color: 'var(--accent-purple)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: stat card */}
        <div
          className="about-card reveal"
          style={{
            background: 'linear-gradient(135deg, #f8f4ff 0%, #fdf0f8 100%)',
            borderRadius: '32px',
            padding: '48px',
            border: '1.5px solid rgba(139,92,246,0.15)',
            animationDelay: '0.15s',
          }}
        >
          {[
            { num: '3.95', label: 'GPA · CS & Data Science' },
            { num: '90%', label: 'Tuition scholarship awarded' },
            { num: '6×', label: "Dean's List — top 5% of class" },
            { num: '6+', label: 'Projects shipped' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
                marginBottom: i === 3 ? 0 : '28px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '3.5rem',
                  letterSpacing: '-0.04em',
                  color: 'var(--accent-purple)',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--ink-soft)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
