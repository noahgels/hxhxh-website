import yanyanThumbnail from '../../../public/images/photos/single/yanyan/thumbnail.jpg';
import bennyThumbnail from '../../../public/images/photos/single/benny/thumbnail.jpg';
import mannyThumbnail from '../../../public/images/photos/single/manny/thumbnail.jpg';
import marcelThumbnail from '../../../public/images/photos/single/marcel/thumbnail.jpg';
import TitledCard from '../../general/TitledCard';
import styles from '../../../styles/index/About.module.css';


const members = [
    {
        href: '/yanyan',
        title: 'Yannic',
        image: yanyanThumbnail,
    },
    {
        href: '/manny',
        title: 'Jonas',
        image: mannyThumbnail,
    },
    {
        href: '/benny',
        title: 'Benny',
        image: bennyThumbnail,
    },
    {
        href: '/marcel',
        title: 'Marcel',
        image: marcelThumbnail,
    },
]

export default function About(props) {

    return (
        <section>
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
            <p className={styles.text}>
                Heartless Human Harvest bringen euch mit fetzigen Riffs und knalligen Breakdowns,
                die zum Headbangen animieren, eine gute Mischung aus Metal- und Deathcore.
                Die Songs bieten sehr viel Variation und es lassen sich immer wieder neue
                Elemente und Einflüsse darin wiederfinden. Die vier Jungs aus dem Emsland
                haben es sich zur Mission gemacht, den Core vor allem in der jungen
                Generation weiter zu etablieren
            </p>
        </section>
    )
}
