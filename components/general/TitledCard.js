import Link from 'next/link';
import styles from '../../styles/components/TitledCard.module.css';

export default function TitledCard(props) {

    if (props.href) {
        return (
            <Link href={props.href}>
                <a target="_blank">
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
                <img
                    src={props.image}
                    alt={props.title || props.href}
                    className={styles.image}
                />
            </div>
            {props.title ? <h3 className={styles.title}>
                {props.title}
            </h3> : null}
          {props.subtitle ? <p className={styles.subtitle}>{props.subtitle}</p> : null}
        </>
    )
}
