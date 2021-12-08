import styles from "../../../styles/index/Merch.module.css";
import TitledCard from "../../general/TitledCard";
import Link from 'next/link';
import merch1 from "../../../public/images/photos/merch/merch-1.jpg";
import merch2 from "../../../public/images/photos/merch/merch-2.jpg";
import merch3 from "../../../public/images/photos/merch/merch-3.jpg";
import merch4 from "../../../public/images/photos/merch/merch-4.jpg";

const merch = [
    {
        image: merch1,
    },
    {
        image: merch2,
    },
    {
        image: merch3,
    },
    {
        image: merch4,
    },
]

export default function Merch() {

    return (
        <section>
            <h2>Unser Merch</h2>
            <Link href="https://www.emp.de/search?cgid=root&prefn1=brandFun&prefv1=Heartless%20Human%20Harvest&noredirect=1">
                <a>
                    <ul className={styles.ul}>
                        <div className={styles.row}>
                            <li className={styles.li}>
                                <TitledCard
                                    {...merch[0]}
                                />
                            </li>
                            <li className={styles.li}>
                                <TitledCard
                                    {...merch[1]}
                                />
                            </li>
                        </div>
                        <div className={styles.row}>
                            <li className={styles.li}>
                                <TitledCard
                                    {...merch[2]}
                                />
                            </li>
                            <li className={styles.li}>
                                <TitledCard
                                    {...merch[3]}
                                />
                            </li>
                        </div>
                    </ul>
                </a>
            </Link>
            <p className={styles.text}> Für mehr Merch, schreib uns gerne auf{' '}
            <Link href="https://www.instagram.com/hxhxh.band/">
                <a className={styles.link}>
                    Instagram
                </a>
            </Link>
                .
            </p>
        </section>
    )
}
