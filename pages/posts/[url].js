import Layout from "@/components/layout";
import styles from "../../styles/blog.module.css";
import { dateFormat } from "@/helpers/helpers";
import Image from "next/image";
import Link from "next/link";

const Post = ({ post }) => {
  const { title, content, image, publishedAt } = post[0].attributes;
  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <div className={styles.title__container}>
          <h3>{title}</h3>
          <Link href="/blog">Go Back</Link>
        </div>
        <Image
          src={image.data.attributes.formats.medium.url}
          width={1000}
          height={400}
          alt="Blog image"
        />
        <div className={styles.content}>
          <p className={styles.date}>{dateFormat(publishedAt)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=*`
  );
  const { data: post } = await response.json();

  return {
    props: {
      post,
    },
  };
}
