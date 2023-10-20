import { Inter } from 'next/font/google'
import '../css/reset.css'
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'Huble Test',
  description: 'Frontend developer test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
