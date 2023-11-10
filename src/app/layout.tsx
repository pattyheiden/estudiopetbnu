import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
weight: ['300', '400', '700', '800'],
subsets: ['latin'],
display:'swap',
fallback: ['Arial', 'sans-serif'],})

export const metadata: Metadata = {
  title: 'Estúdio Pet Bnu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-brown100 text-brown400'>
      <body className={montserrat.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
