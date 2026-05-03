import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-light': '#e8f4fd',
        'sky-mid': '#c8e6f7',
        'sky-deep': '#a8d4f0',
        'ink': '#1a1a2e',
        'ink-soft': '#3d3d5c',
        'accent-pink': '#ff6b9d',
        'accent-purple': '#8b5cf6',
        'accent-yellow': '#fbbf24',
        'accent-green': '#34d399',
        'accent-blue': '#3b82f6',
        'accent-orange': '#f97316',
        'card-bg': 'rgba(255,255,255,0.85)',
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      keyframes: {
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' },
          '33%': { borderRadius: '30% 70% 40% 60% / 60% 30% 70% 40%' },
          '66%': { borderRadius: '50% 50% 30% 70% / 40% 70% 30% 60%' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
        },
        'wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        'fadeSlideUp': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'floatAnimstar': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(15deg)' },
        },
        'floatAnimheart': {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg) scale(1)' },
          '50%': { transform: 'translateY(-16px) rotate(5deg) scale(1.05)' },
        },
        'floatAnimgem': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(-10deg)' },
        },
        'floatAnimdonut': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(180deg)' },
        },
        'floatAnimcube': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(20deg)' },
        },
        'floatAnimpill': {
          '0%, 100%': { transform: 'translateY(0) rotate(-8deg)' },
          '50%': { transform: 'translateY(-20px) rotate(8deg)' },
        },
        'floatAnimspring': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-15deg)' },
        },
        'floatAnimblob': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-18px) rotate(10deg) scale(1.05)' },
        },
      },
      animation: {
        'blob-morph': 'blob-morph 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'fadeSlideUp': 'fadeSlideUp 0.6s ease both',
        'fadeSlideUp-1': 'fadeSlideUp 0.6s 0.1s ease both',
        'fadeSlideUp-2': 'fadeSlideUp 0.6s 0.2s ease both',
        'fadeSlideUp-3': 'fadeSlideUp 0.6s 0.3s ease both',
      },
    },
  },
  plugins: [],
}

export default config
