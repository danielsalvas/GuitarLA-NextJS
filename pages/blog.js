import Link from "next/link";
import Layout from "@/components/layout";

function Blog() {
  return (
    <div>
      <Layout title="Blog">
        <h1>Blog</h1>
        <Link href="/">Home</Link>
      </Layout>
    </div>
  );
}

export default Blog;
