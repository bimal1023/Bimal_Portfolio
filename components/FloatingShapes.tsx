'use client'

const shapes = [
  { type: 'star',   color: '#fbbf24', size: 52, x:  8, y: 18, delay: 0,   dur: 3.5 },
  { type: 'heart',  color: '#ff6b9d', size: 44, x: 85, y: 15, delay: 0.7, dur: 4.2 },
  { type: 'gem',    color: '#3b82f6', size: 48, x: 12, y: 55, delay: 1.1, dur: 3.8 },
  { type: 'donut',  color: '#8b5cf6', size: 56, x: 90, y: 50, delay: 0.3, dur: 5.1 },
  { type: 'cube',   color: '#34d399', size: 40, x: 22, y: 80, delay: 1.5, dur: 3.2 },
  { type: 'pill',   color: '#f97316', size: 50, x: 75, y: 78, delay: 0.9, dur: 4.5 },
  { type: 'spring', color: '#60a5fa', size: 38, x: 50, y: 10, delay: 0.5, dur: 3.9 },
  { type: 'blob',   color: '#a78bfa', size: 60, x: 65, y: 28, delay: 1.3, dur: 4.8 },
]

function renderShape(s: typeof shapes[number]) {
  const style: React.CSSProperties = {
    position: 'absolute',
    left: s.x + '%',
    top: s.y + '%',
    width: s.size,
    height: s.size,
    animation: `floatAnim${s.type} ${s.dur}s ${s.delay}s ease-in-out infinite`,
    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
  }

  if (s.type === 'star') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 52 52" fill="none">
      <path d="M26 4l5.5 11.5L44 17.5l-9 8.5 2 12.5L26 33l-11 5.5 2-12.5-9-8.5 12.5-2z" fill={s.color} />
    </svg>
  )
  if (s.type === 'heart') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 44 44" fill="none">
      <path d="M22 38s-16-9.5-16-20a10 10 0 0 1 16-8 10 10 0 0 1 16 8c0 10.5-16 20-16 20z" fill={s.color} />
    </svg>
  )
  if (s.type === 'gem') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 48 48" fill="none">
      <polygon points="24,4 44,18 44,30 24,44 4,30 4,18" fill={s.color} opacity="0.9" />
      <polygon points="24,4 44,18 24,22" fill={s.color} opacity="0.6" />
      <polygon points="4,18 24,22 24,44" fill={s.color} opacity="0.7" />
    </svg>
  )
  if (s.type === 'donut') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" stroke={s.color} strokeWidth="10" fill="none" />
    </svg>
  )
  if (s.type === 'cube') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="6" width="28" height="28" rx="5" fill={s.color} />
      <rect x="12" y="12" width="16" height="16" rx="3" fill="white" opacity="0.3" />
    </svg>
  )
  if (s.type === 'pill') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 50 24" fill="none">
      <rect x="2" y="2" width="46" height="20" rx="10" fill={s.color} />
      <line x1="25" y1="2" x2="25" y2="22" stroke="white" strokeWidth="2" opacity="0.4" />
    </svg>
  )
  if (s.type === 'spring') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 38 38" fill="none">
      <path d="M10 8 Q20 4 28 12 Q36 20 28 28 Q20 36 12 28 Q4 20 12 12 Q20 4 28 12" stroke={s.color} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
  if (s.type === 'blob') return (
    <svg key={s.type + s.x} style={style} viewBox="0 0 60 60" fill="none">
      <path d="M30 8 C46 8, 54 18, 52 32 C50 46, 38 54, 24 52 C10 50, 4 38, 6 24 C8 10, 20 8, 30 8Z" fill={s.color} opacity="0.85" />
    </svg>
  )
  return null
}

export default function FloatingShapes() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {shapes.map(renderShape)}
      <style>{`
        @keyframes floatAnimstar   { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-20px) rotate(15deg)} }
        @keyframes floatAnimheart  { 0%,100%{transform:translateY(0) rotate(-5deg) scale(1)} 50%{transform:translateY(-16px) rotate(5deg) scale(1.05)} }
        @keyframes floatAnimgem    { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-22px) rotate(-10deg)} }
        @keyframes floatAnimdonut  { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-18px) rotate(180deg)} }
        @keyframes floatAnimcube   { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-14px) rotate(20deg)} }
        @keyframes floatAnimpill   { 0%,100%{transform:translateY(0) rotate(-8deg)}  50%{transform:translateY(-20px) rotate(8deg)} }
        @keyframes floatAnimspring { 0%,100%{transform:translateY(0) rotate(0deg)}   50%{transform:translateY(-16px) rotate(-15deg)} }
        @keyframes floatAnimblob   { 0%,100%{transform:translateY(0) rotate(0deg) scale(1)} 50%{transform:translateY(-18px) rotate(10deg) scale(1.05)} }
      `}</style>
    </div>
  )
}
