import styles from '../../../styles/index/Music.module.css';

import pieceOfDarkness from '../../../public/images/covers/piece-of-darkness.jpg';
import actOfCreation from '../../../public/images/covers/act-of-creation.jpg';
import glasgowSmile from '../../../public/images/covers/glasgow-smile.jpg';

import TitledCard from "../../general/TitledCard";

const items = [
  {
    href: 'https://open.spotify.com/album/4rRscwsFDkiqS2YxH31dtB',
    title: 'Act of Creation',
    image: actOfCreation,
  },
  {
    href: 'https://open.spotify.com/album/09M6ZqYJJhtbioezGW3CGa',
    title: 'Piece of Darkness',
    image: pieceOfDarkness,
  },
  {
    href: 'https://open.spotify.com/album/620PKO9Om49iNGzA6csWJG',
    title: 'Glasgow Smile',
    image: glasgowSmile,
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
