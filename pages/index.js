import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Music from "../components/index/music/Music";
import About from "../components/index/about/About";
import Merch from "../components/index/merch/Merch";
import {useEffect, useRef, useState} from "react";
import SocialMedia from "../components/index/social-media/SocialMedia";
import Head from "next/head";


export default function Home() {

  const [loaded, setLoaded] = useState(false);
  const image = useRef();

  useEffect(() => {
    if (image.current.complete) setLoaded(true)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Heartless Human Harvest</title>
      </Head>
      <header>
        <img
          src={'/images/photos/band/dark-band-title.jpg'}
          width={'100%'}
          onLoad={() => setLoaded(true)}
          ref={image}
          alt="Header Image"
        />
        <h1 style={{display: 'none'}}>Heartless Human Harvest</h1>
      </header>
      <main className={styles.main}>
        <div className={`${styles.hider} ${loaded ? styles.shown : null}`}>
          <img
            src="/images/logos/logo-white.png"
            className={styles.hiderImage}
            alt="Loading Image"
          />
        </div>
        <SocialMedia/>
        <p className={styles.text}>
          Heartless Human Harvest bringen euch mit fetzigen Riffs und knalligen Breakdowns,
          die zum Headbangen animieren, eine gute Mischung aus Metal- und Deathcore.
          Die Songs bieten sehr viel Variation und es lassen sich immer wieder neue
          Elemente und Einflüsse darin wiederfinden. Die vier Jungs aus dem Emsland
          haben es sich zur Mission gemacht, den Core vor allem in der jungen
          Generation weiter zu etablieren
        </p>
        <Music/>
        <section>
          <h2>Videos</h2>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/lDq-zRM97pA"
              title="Destruction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
          </div>
          <div className={styles.videoContainer} style={{marginTop: '2rem'}}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/gbbVoXvk62M"
              title="Glasgow Smile Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
          </div>
        </section>
        <About/>
        <Merch/>
        <section style={{marginTop: '3rem'}}>
          <h2>Kontakt</h2>
          <p className={styles.emailText}>
            Bookinganfragen gerne an {' '}
            <Link href="mailto:heartless.human.harvest@gmail.com">
              <a style={{color: 'var(--link-color)'}}>
                heartless.human.harvest@gmail.com
              </a>
            </Link>
          </p>
        </section>
      </main>
      <hr className={styles.hr}/>
      <footer className={styles.footer}>
        <div className={styles.promo}>
          <Link href={'https://noahgels.com'}>
            <a className={styles.noahgelsLink}>
              <img
                src={'/images/noahgels/icon.png'}
                className={styles.promoImage}
                alt={'Noah Gels Logo'}
              />
              by Noah Gels
            </a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/impressum">
            <a>
              <p className={styles.aboutHref}>
                Impressum
              </p>
            </a>
          </Link>
          <Link href="/datenschutz">
            <a>
              <p className={styles.aboutHref}>
                Datenschutz
              </p>
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
