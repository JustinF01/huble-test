import { Open_Sans } from 'next/font/google'
import '../../css/snapdocs.css';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })

export const metadata = {
  title: 'Snapdocs Accordion',
  description: 'A special accordion',
  icons: {
    icon: '/sd_icon.png'
  }
}

export default function RootLayout({ children }) {
  return (

      <main className={openSans.className}>{children}</main>

  )
}
