import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Portfolio Management - Digital Recovery. Human Respect. Total Compliance.',
  description: 'Elite Portfolio Management delivers best-in-class recovery solutions with over four decades of experience. Digital Recovery. Human Respect. Total Compliance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/LOGO/Elite_BIMI_Transparent.svg" />
        <link rel="alternate icon" href="/LOGO/Elite_BIMI_Transparent.svg" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
        
        {/* Tidio Chat Widget */}
        {process.env.NEXT_PUBLIC_TIDIO_PUBLIC_KEY && (
          <Script 
            src={`//code.tidio.co/${process.env.NEXT_PUBLIC_TIDIO_PUBLIC_KEY}.js`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  )
} 