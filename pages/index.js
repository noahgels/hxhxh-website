import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import darkWithText from '../public/images/photos/band/dark-with-title.jpg';
import GeneralHead from "../components/heads/GeneralHead";
import Music from "../components/index/music/Music";
import About from "../components/index/about/About";
import Merch from "../components/index/merch/Merch";

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
                <h1 style={{display: 'none'}}>Heartless Human Harvest</h1>
                <Music/>
                <section>
                    <h2>Videos</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <iframe
                            src="https://www.youtube.com/embed/gbbVoXvk62M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.video}
                        />
                    </div>
                </section>
                <About/>
                <Merch/>
            </main>
            <hr className={styles.hr}/>
            <footer className={styles.footer}>
                <Link href="/about">
                    <a>
                        <p className={styles.aboutHref}>
                            Impressum
                        </p>
                    </a>
                </Link>
            </footer>
        </div>
    );
}
