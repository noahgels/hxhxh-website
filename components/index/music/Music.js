import styles from '../../../styles/index/Music.module.css';

import pieceOfDarkness from '../../../public/images/covers/piece-of-darkness.jpg';
import hxhxh from '../../../public/images/covers/hxhxh.jpg';
import glasgowSmile from '../../../public/images/covers/glasgow-smile.jpg';

import TitledCard from "../../general/TitledCard";

const items = [
  {
    href: 'https://open.spotify.com/album/09M6ZqYJJhtbioezGW3CGa',
    title: 'Piece of Darkness',
    image: pieceOfDarkness,
  },
  {
    href: 'https://open.spotify.com/album/2YyBdnRqCkUwIvLLY0Nmsc',
    title: 'HxHxH',
    image: hxhxh,
  },
  {
    href: 'https://open.spotify.com/album/620PKO9Om49iNGzA6csWJG',
    title: 'Glasgow Smile',
    image: glasgowSmile,
  },
]

export default function Music(props) {


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
