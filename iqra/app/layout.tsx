import Navbar from '@/components/Navbar'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iqra App',
  description: 'Learn Arabic and understand the Quran',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}