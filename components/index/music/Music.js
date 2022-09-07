import styles from '../../../styles/index/Music.module.css';

import TitledCard from "../../general/TitledCard";

const items = [
  {
    href: 'https://open.spotify.com/album/4rRscwsFDkiqS2YxH31dtB',
    title: 'Act of Creation',
    image: '/images/covers/act-of-creation.jpg',
  },
  {
    href: 'https://open.spotify.com/album/0kPleVKKMPaarQgV7gCpua?si=whKgGtphQLSbrJVwRYIBbQ',
    title: 'Parasite',
    image: '/images/covers/parasite.jpg',
  },
  {
    href: 'https://open.spotify.com/album/620PKO9Om49iNGzA6csWJG',
    title: 'Glasgow Smile',
    image: '/images/covers/glasgow-smile.jpg',
  },
]

export default function Music() {

  return (
    <section className={styles.container}>
      <h2>Musik</h2>
      <ul className={styles.ul}>
        {items.map((item, index) =>
          <li
            key={index}
            className={styles.li}
          >
            <TitledCard {...item}/>
          </li>
        )}
      </ul>
    </section>
  )
}
