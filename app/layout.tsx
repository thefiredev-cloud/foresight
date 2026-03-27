import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Foresight OS — Simulate Before You Commit',
  description: 'Run 10,000 scenarios on any business decision before you make it. See the futures. Pick the best one.',
  keywords: 'business simulation, scenario planning, risk analysis, decision intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
