import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import darkWithText from '../public/images/photos/band/dark-with-title.jpg';
import musicImage from '../public/MUSICHXHXH.jpg';
import videosImage from '../public/VIDEOSHXHXH.jpg';
import aboutUsImage from '../public/ABOUTUSHXHXH.jpg';
import merchImage from '../public/MERCHHXHXH.jpg';
import GeneralHead from "../components/heads/GeneralHead";

const description = 'Wilkommen auf unserer offiziellen Website';

export default function Home() {

  return (
    <div className={styles.container}>
      <GeneralHead title="Heartless Human Harvest">
        <meta name="description" content={description}/>
        <meta name="image" content="/images/icons/logo-400x400.png"/>
        <meta property="og:image" content="/images/icons/logo-400x400.png"/>
        <meta property="og:description" content={description}/>
      </GeneralHead>
      <main className={styles.main}>
        <Image
          className={styles.headerImage}
          src={darkWithText}
          alt="Header Image"
        />
        <h2>Music</h2>
        <Image
          className={styles.musicImage}
          src={musicImage}
          alt="Music Image"
        />
        <h2>Videos</h2>
        <Image
          className={styles.videosImage}
          src={videosImage}
          alt="Videos Image"
        />
        <h2>About us</h2>
        <Image
          className={styles.aboutUsImage}
          src={aboutUsImage}
          alt="About us Image"
        />
        <h2>Merch</h2>
        <div className={styles.imageContainer}>
          <Image
            src={merchImage}
            alt={'Merch Bild konnte nicht geladen werden'}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/about">
          <a>
            Impressum
          </a>
        </Link>
      </footer>
    </div>
  );
}
