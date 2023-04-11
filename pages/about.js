import Link from "next/link";
import Layout from "@/components/layout";

function About() {
  return (
    <div>
      <Layout title="About Us">
        <h1>About Us</h1>
        <Link href="/">Home</Link>
      </Layout>
    </div>
  );
}

export default About;
