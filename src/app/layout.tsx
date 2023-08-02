import './globals.css'
import { Roboto } from 'next/font/google'
import 'tw-elements/dist/css/tw-elements.min.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const roboto = Roboto({weight: '400', subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
