import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Portfolio Management - Digital Recovery. Human Respect. Total Compliance.',
  description: 'Elite Portfolio Management delivers best-in-class recovery solutions with over four decades of experience. Digital Recovery. Human Respect. Total Compliance.',
  keywords: 'debt collection, portfolio management, recovery solutions, compliance, financial services',
  authors: [{ name: 'Elite Portfolio Management' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Elite Portfolio Management',
    description: 'Digital Recovery. Human Respect. Total Compliance.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 