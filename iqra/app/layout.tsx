import Navbar from '@/components/Navbar'
import './globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from "@/components/ThemeProvider"
import Layout from '@/components/Layout'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}