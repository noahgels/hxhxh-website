import styles from '../styles/About.module.css';
import HeaderImage from "../components/general/HeaderImage";
import Link from "next/link";
import Head from 'next/head';

export default function Impressum() {

  return (
    <div>
      <Head>
        <title>Impressum - Heartless Human Harvest</title>
      </Head>
      <main className={styles.main}>
        <HeaderImage/>
        <h1>Impressum</h1>

        <h2 className={styles.h2}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Jonas Kramer<br/>
          Wespenweg 4<br/>
          49811 Lingen</p>

        <h2 className={styles.h2}>Kontakt</h2>
        <p>Telefon: +49 1515 189 32 73<br/>
          E-Mail: heartless.human.harvest@gmail.com</p>

        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich
        </p>
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a className={styles.back}>
            <p>
              Startseite
            </p>
          </a>
        </Link>
      </footer>
    </div>
  )
}
