import styles from '../../../styles/index/Music.module.css';

import pieceOfDarkness from '../../../public/images/covers/piece-of-darkness.jpg';
import hxhxh from '../../../public/images/covers/hxhxh.jpg';
import glasgowSmile from '../../../public/images/covers/glasgow-smile.jpg';

import TitledCard from "../../general/TitledCard";

const items = [
  {
    href: '#',
    title: 'Piece of Darkness',
    image: pieceOfDarkness,
  },
  {
    href: '#',
    title: 'HxHxH',
    image: hxhxh,
  },
  {
    href: '#',
    title: 'Glasgow Smile',
    image: glasgowSmile,
  },
]

export default function Music(props) {


  return (
    <section className={styles.container}>
      <h2>Musik</h2>
      <ul className={styles.ul}>
        {items.map((item) =>
          <li
            key={item.title}
            className={styles.li}
          >
            <TitledCard {...item}/>
          </li>
        )}
      </ul>
    </section>
  )
}
