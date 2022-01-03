import styles from "../../styles/Home.module.css";
import darkWithText from "../../public/images/photos/band/dark-band-title.jpg";
import Image from "next/image";


export default function HeaderImage() {
  return (
    <Image
      className={styles.headerImage}
      src={darkWithText}
      alt="Header Image"
    />
  )
}