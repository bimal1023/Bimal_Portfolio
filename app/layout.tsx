import type { Metadata } from 'next'
import './globals.css'
import CursorTrail from '@/components/CursorTrail'

export const metadata: Metadata = {
  title: 'Bimal Kumal — Software Engineer',
  description:
    'CS Student & AI Engineer based in New York. I build intelligent systems — from AI agents to full-stack apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}
