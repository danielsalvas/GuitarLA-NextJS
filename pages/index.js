import Link from "next/link";
import Layout from "../components/layout";
export default function Home() {
  return (
    <>
      <Layout title="Home" description="Music Blog, Guitars and More">
        <h1>Home</h1>
        <Link href="/about">About Us</Link>
      </Layout>
    </>
  );
}
