import yanyanThumbnail from '../../../public/images/photos/single/yanyan/thumbnail.jpg';
import bennyThumbnail from '../../../public/images/photos/single/benny/thumbnail.jpg';
import mannyThumbnail from '../../../public/images/photos/single/manny/thumbnail.jpg';
import marcelThumbnail from '../../../public/images/photos/single/marcel/thumbnail.jpg';
import TitledCard from '../../general/TitledCard';
import styles from '../../../styles/index/About.module.css';


const members = [
    {
        href: 'https://www.instagram.com/yannic.krmr/',
        title: 'Yannic',
        subtitle: 'Drums',
        image: yanyanThumbnail,
    },
    {
        href: 'https://www.instagram.com/jonas_manny/',
        title: 'Jonas',
        subtitle: 'Guitar',
        image: mannyThumbnail,
    },
    {
        href: 'https://www.instagram.com/beennyy__/',
        title: 'Benny',
        subtitle: 'Guitar',
        image: bennyThumbnail,
    },
    {
        href: 'https://www.instagram.com/marcel_heet_1998/',
        title: 'Marcel',
        subtitle: 'Vocals',
        image: marcelThumbnail,
    },
]

export default function About(props) {

    return (
        <section className={styles.container}>
            <h2>Über uns</h2>
            <ul className={styles.ul}>
                <div className={styles.row}>
                    <li className={styles.li}>
                        <TitledCard
                            {...members[0]}
                        />
                    </li>
                    <li className={styles.li}>
                        <TitledCard
                            {...members[1]}
                        />
                    </li>
                </div>
                <div className={styles.row}>
                    <li className={styles.li}>
                        <TitledCard
                            {...members[2]}
                        />
                    </li>
                    <li className={styles.li}>
                        <TitledCard
                            {...members[3]}
                        />
                    </li>
                </div>
            </ul>
        </section>
    )
}
