import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ANP Privado - Premium 3, 4 & 5 BHK Residences at Baner, Pune',
  description: 'Private. Elevated. Truly Privado. Premium 3, 4 & 5 BHK Simplex & Duplex Residences at PAN Card Club Road, Baner. Starting from ₹2.7 Cr onwards.',
  keywords: ['ANP Privado', 'Baner', 'Pune', 'Luxury Apartments', 'Premium Residences', 'PAN Card Club Road', '3 BHK', '4 BHK', '5 BHK', 'Real Estate Pune'],
  authors: [{ name: 'ANP Privado' }],
  openGraph: {
    title: 'ANP Privado - Premium Residences at Baner, Pune',
    description: 'Premium 3, 4 & 5 BHK Simplex & Duplex Residences at PAN Card Club Road, Baner. Starting from ₹2.7 Cr onwards.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANP Privado - Premium Residences at Baner, Pune',
    description: 'Premium 3, 4 & 5 BHK Simplex & Duplex Residences at PAN Card Club Road, Baner.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
