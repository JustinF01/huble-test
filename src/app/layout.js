import { Inter } from 'next/font/google'
import '../css/reset.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Huble Test',
  description: 'Frontend developer test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
