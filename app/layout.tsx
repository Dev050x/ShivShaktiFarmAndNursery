import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShivShakti',
  description: 'ShivShakti Farm And Nursery',
  icons: {
    icon: '/favicon.png',
  },
  generator: 'By Div Patel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
