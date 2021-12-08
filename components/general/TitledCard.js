import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/components/TitledCard.module.css';

export default function TitledCard(props) {

    if (props.href) {
        return (
            <Link href={props.href}>
                <a>
                    <Content {...props}/>
                </a>
            </Link>
        )
    } else {
        return <Content {...props}/>;
    }
}

function Content(props) {
    return (
        <>
            <div className={styles.imageContainer}>
                <Image
                    src={props.image}
                    alt={props.title}
                    className={styles.image}
                />
            </div>
            {props.title ? <h3 className={styles.subtitle}>
                {props.title}
            </h3> : null}
        </>
    )
}
