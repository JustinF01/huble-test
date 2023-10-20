import Image from 'next/image'
import styles from './page.module.css'

// monolith hero banner
export default function Home() {
  return (
    <main>
      <div className={styles.heroContainer}>
        <div className={styles.innerContainer}>
          <h6 className={styles.styledHeading}>Monolith</h6>
          <h1 className={styles.mainHeading}>Use AI software to test less and learn more.</h1>
          <p className={styles.text}>Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</p>
          <div className={styles.buttonContainer}>
            <button className={styles.filledCta}>request demo</button>
            <button className={styles.outlinedCta}>speak to our team</button>
          </div>
        </div>
      </div>
    </main>
  )
}
