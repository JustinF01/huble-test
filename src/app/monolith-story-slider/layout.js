import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import '../../css/monolith.css';

export const metadata = {
  title: 'Monolith Story Slider',
  description: 'logo slider',
  icons: {
    icon: '/monolith-icon.webp'
  }
}

export default function RootLayout({ children }) {
  return (
      <main>{children}</main>
  )
}
