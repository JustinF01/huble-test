'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import accordionData from '@/config/accordionData';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

const Page = () => {
    const [open, setOpen] = useState(false);
    const [currentOpen, setCurrentOpen] = useState('Lender');
    const [currentImage, setCurrentImage] = useState(null);

    const onClickHandler = (event) => {
        // console.log('event.target.id: ', event.target.id);
        if (currentOpen === event.target.id) {
            setCurrentOpen('');
        } else {
            setCurrentOpen(event.target.id);
        }
        // setOpen(!open);
    }

    useEffect(() => {
        setCurrentImage(accordionData.find((item) => (item.heading === currentOpen))?.image);
    }, [currentImage, currentOpen])

    // console.log('currentImage: ', currentImage);
    // console.log('currentOpen: ', currentOpen);

    return (
        <div className={styles.pageBackground}>
            <div className={[styles.mainContainer]}>
                <div className={styles.headingContainer}>
                    <h2>Connecting the industry through digital closing solutions</h2>
                    <p>Select your organization type to learn how Snapdocs can help you save time and money on every transaction.</p>
                </div>
                <div className={styles.accordionContainer}>
                    <ul className={styles.accordionList}>
                        { accordionData.map((item, index) => (
                            <li key={item.heading} style={{position: 'relative', zIndex: 2 + index}}>
                                <div className={styles.itemHeadingContainer} onClick={onClickHandler}>
                                    <h3 id={item.heading}  className={styles.itemHeading}>{ item.heading }</h3>
                                    <span className={[styles.headingIcon, currentOpen === item.heading && styles.rotateUp].join(' ')}><FiChevronDown/></span>
                                </div>
                                <div id={index} className={[styles.itemText, currentOpen === item.heading ? styles.showText : styles.hide ].join(' ')}>
                                    {item.text} 
                                    <button className={styles.cta}>
                                        <Link href={item.link}>Learn more</Link>
                                        <span className={styles.ctaArrow}><FiArrowRight /></span>
                                    </button> 
                                </div>
                            </li>
                        )) }
                    </ul>
                    <div className={styles.accordionImages}>
                        { accordionData.map((item, index) => (
                            <div key={index} className={[styles.imageContainer, currentOpen === item.heading ? styles.showImage: styles.hideImage].join(' ')} style={{ zIndex: index }}>
                                <Image src={item.image.path} alt={item.image.alt} width={490} height={470} />
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;