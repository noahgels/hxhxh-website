import styles from "../../../styles/index/Merch.module.css";
import TitledCard from "../../general/TitledCard";
import Link from 'next/link';

const merch = [
  {
    image: '/images/photos/merch/merch-1.jpg',
    href: 'https://www.instagram.com/p/CTkf0S7Du5T/',
  },
  {
    image: '/images/photos/merch/merch-2.jpg',
    href: 'https://www.instagram.com/p/CTkfwTTDI_r/',
  },
  {
    image: '/images/photos/merch/merch-3.jpg',
    href: 'https://www.instagram.com/p/CTkfp21MQDH/',
  },
  {
    image: '/images/photos/merch/merch-4.jpg',
    href: 'https://www.instagram.com/p/CTkfwTTDI_r/',
  },
]

export default function Merch() {

  return (
    <section>
      <h2>Unser Merch</h2>
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
      <p className={styles.text}>
        Für das abgebildete Merch schreibt uns auf{' '}
        <Link href="https://www.instagram.com/hxhxh.band/#">
          <a className={styles.link} target="_blank">
            Instagram
          </a>
        </Link>.
        Mehr Merch gibts bei{' '}
        <Link href="https://www.emp.de/search?cgid=root&prefn1=brandFun&prefv1=Heartless%20Human%20Harvest&noredirect=1">
          <a className={styles.link} target="_blank">
            EMP
          </a>
        </Link>.
      </p>
    </section>
  )
}
