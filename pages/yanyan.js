import styles from '../styles/Member.module.css';
import GeneralHead from "../components/heads/GeneralHead";

const description = 'Yannic von Heartless Human Harvest';
const image = '/images/photos/single/yanyan/thumbnail';

export default function Yanyan(props) {

  return (
    <div>
      <GeneralHead title="Yannic - Heartless Human Harvest">
        <meta name="description" content={description}/>
        <meta name="image" content={description}/>
        <meta property="og:image" content="/images/icons/logo-400x400.png"/>
        <meta property="og:description" content={description}/>
      </GeneralHead>
    </div>
  )
}
