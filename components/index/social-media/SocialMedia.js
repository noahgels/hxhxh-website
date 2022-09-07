import Link from 'next/link';
import styles from '../../../styles/components/SocialMedia.module.css';

const items = [
  {
    icon: 'instagram',
    href: 'https://www.instagram.com/hxhxh.band/',
  },
  {
    icon: 'youtube',
    href: 'https://www.youtube.com/channel/UCgx5f-T-Piaxk3G2LawgHgw',
  },
  {
    icon: 'spotify',
    href: 'https://open.spotify.com/artist/6b5VGR6r36WvU3vbrl9HbG',
  },
  {
    icon: 'facebook',
    href: 'https://www.facebook.com/HeartlessHumanHarvest/',
  }
];

export default function SocialMedia() {


  return (
    <ul className={styles.ul}>
      {items.map(item =>
        <li key={item.href}>
        <Link href={item.href}>
          <a target="_blank">
            <img
              className={styles.icon}
              src={`/images/logos/social/${item.icon}.svg`}
            />
          </a>
        </Link>
        </li>
      )}
    </ul>
  )
}