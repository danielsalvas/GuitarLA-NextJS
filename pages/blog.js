import Post from "@/components/post";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css"

function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <Layout title="Blog">
        <main className="container">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts.map(post => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=*`);
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
}
