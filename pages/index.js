import Link from 'next/link';
import styles from '../styles/Home.module.css';
import GeneralHead from "../components/heads/GeneralHead";
import Music from "../components/index/music/Music";
import About from "../components/index/about/About";
import Merch from "../components/index/merch/Merch";
import HeaderImage from "../components/general/HeaderImage";
import {useEffect} from "react";

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
            <header>
                <HeaderImage/>
                <h1 style={{display: 'inline'}}>Heartless Human Harvest</h1>
            </header>
            <main className={styles.main}>
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
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <iframe
                            src="https://www.youtube.com/embed/lDq-zRM97pA"
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
                <div className={styles.hider}>
                    <img
                      src="/images/logos/logo-white.png"
                      className={styles.hiderImage}
                    />
                </div>
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
