import GeneralHead from "../components/heads/GeneralHead";
import styles from '../styles/About.module.css';
import HeaderImage from "../components/general/HeaderImage";

export default function About() {

  return (
    <div>
      <GeneralHead title="Impressum">

      </GeneralHead>
      <main className={styles.main}>
          <HeaderImage/>
          <h1>Impressum</h1>

          <h2 className={styles.h2}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>Noah Gels<br />
              Wespenweg 16<br />
              49811 Lingen</p>

          <h2 className={styles.h2}>Kontakt</h2>
          <p>Telefon: +49 71 29 58 80<br />
              E-Mail: noah.gels@noahgels.com</p>

          <h2 className={styles.h2}>Redaktionell verantwortlich</h2>
          <p>Jonas Kramer<br />
              Wespenweg Keine Ahnung<br />
              49811 Lingen</p>

          <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
          <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich
          </p>
      </main>
    </div>
  )
}
