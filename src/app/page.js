'use client';

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Slider from "react-slick";
import logoSliderImages from '@/config/logoSliderImages'

// monolith hero banner
export default function Home() {

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


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
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            { logoSliderImages.map((img) => (
              <div key={img.src} className={styles.logoContainer}>
                <img src={img.src} alt={img.alt} width={img.width} />
              </div>
            )) }
          </Slider>
        </div>
      </div>
    </main>
  )
}
