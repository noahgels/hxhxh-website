import styles from '../styles/Member.module.css';
import GeneralHead from "../components/heads/GeneralHead";

const description = 'Yannic von Heartless Human Harvest';
const image = '/images/photos/single/yanyan/thumbnail';

const members = {
    yanyan: {
        route: 'yanyan',
        name: 'Yannic',
    },
    manny: {
        route: 'manny',
        name: 'Jonas',
    },
    marcel: {
        route: 'marcel',
        name: 'Marcel',
    },
    benny: {
        route: 'benny',
        name: 'Hat Benny eigentlich auch nen anderen Namen?',
    }
}

export default function Member(props) {

    return (
        <div>
            <GeneralHead title={`${props.name} - Heartless Human Harvest`}>
                <meta name="description" content={description}/>
                <meta name="image" content={description}/>
                <meta property="og:image" content="/images/icons/logo-400x400.png"/>
                <meta property="og:description" content={description}/>
            </GeneralHead>
            {props.name}
        </div>
    )
}

export async function getStaticProps({params}) {

    return {
        props: {
            ...members[params.member],
        }
    }

}

export async function getStaticPaths() {

    const paths = Object.keys(members).map((member) => {
        return {
            params: {
                member,
            }
        }
    });

    return {
        paths,
        fallback: false,
    }

}
