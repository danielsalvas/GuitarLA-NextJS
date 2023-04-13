import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css"
import { dateFormat } from "@/helpers/helpers";

const Post = ({ post }) => {
  const { title, content, url, image, publishedAt } = post;
  return (
    <article>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt="Blog image"
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormat(publishedAt)}</p>
        <p className={styles.summary}>{content}</p>
        <Link href={`posts/${url}`} legacyBehavior>
            <a className={styles.link}>
                Read Post
            </a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
