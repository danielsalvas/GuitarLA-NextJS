import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitars.module.css"

const Guitar = ({guitar}) => {
  const { description, image, name, price, url } = guitar
  return (
    <div className={styles.guitar}>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt="guitar-image" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`} legacyBehavior>
          <a className={styles.link}>
            See Product
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitar
