import '../css/reset.css'

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
