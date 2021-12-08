import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/components/TitledCard.module.css';

export default function TitledCard(props) {

  return (
    <Link href={props.href}>
      <a>
          <div className={styles.imageContainer}>
            <Image
              src={props.image}
              alt={props.title}
            />
          </div>
        <h3 className={styles.subtitle}>
          {props.title}
        </h3>
      </a>
    </Link>
  )
}
