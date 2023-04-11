import Link from "next/link";
import Layout from "@/components/layout";

function Store() {
  return (
    <div>
      <Layout title="Store">
        <h1>Online Store</h1>
        <Link href="/">Home</Link>
      </Layout>
    </div>
  );
}

export default Store;
