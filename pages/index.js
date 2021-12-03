import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import darkWithText from '../public/images/photos/band/dark-with-title.jpg';
import GeneralHead from "../components/heads/GeneralHead";
import Music from "../components/index/music/Music";
import About from "../components/index/about/About";

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
        <Music />
        <About />
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
