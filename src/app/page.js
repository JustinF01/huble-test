import styles from './page.module.css'
import Link from "next/link"

// monolith hero banner
export default function Home() {

  return ( 
    <main className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <h1 className={styles.mainHeading}>Huble Frontend Test</h1>
          <p className={styles.text}>Thanks for considering me for the position. Please find the links to the assessment options below:</p>
          <ul>
            <li>
              <Link href={'/monolith-story-slider'}>Monolith Story Slider</Link>
            </li>
            <li>
              <Link href={'/snapdocs-accordion'}>Snapdocs Accordion</Link>
            </li>
          </ul>
        </div>
    </main>
  )
}
