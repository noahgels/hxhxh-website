import yanyanThumbnail from '../../../public/images/photos/single/yanyan/thumbnail.jpg';
import bennyThumbnail from '../../../public/images/photos/single/benny/thumbnail.jpg';
import mannyThumbnail from '../../../public/images/photos/single/manny/thumbnail.jpg';
import marcelThumbnail from '../../../public/images/photos/single/marcel/thumbnail.jpg';
import TitledCard from '../../general/TitledCard';
import styles from '../../../styles/index/About.module.css';


const members = [
  {
    href: 'yanyan',
    title: 'Yannic',
    image: yanyanThumbnail,
  },
  {
    href: 'manny',
    title: 'Jonas',
    image: mannyThumbnail,
  },
  {
    href: 'benny',
    title: 'Benny',
    image: bennyThumbnail,
  },
  {
    href: 'marcel',
    title: 'Marcel',
    image: marcelThumbnail,
  },
]

export default function About(props) {

  return (
    <section>
      <h2>Über uns</h2>
      <ul className={styles.ul}>
        {members.map((member) =>
          <li key={member.name} className={styles.li}>
            <TitledCard
              {...member}
            />
          </li>
        )}
      </ul>
    </section>
  )
}
