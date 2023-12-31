import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sraw Rats - Swapi',
  description: 'Conexa.ai full stack challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
