import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ToastContext from './context/toast-context'
import ActiveSectionContextProvider from './context/section-context'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Alex Ross',
  description: 'Portfolio website for Alex Ross.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-slate-900 scroll-smooth"
    >
      <body
        className={` ${outfit.className} min-h-screen text-gray-50 flex flex-col items-center justify-center overflow-x-hidden w-full`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          <ToastContext />
          <main className="w-full max-w-[1000px] px-4 mt-40 mb-40 flex flex-col gap-32">
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
