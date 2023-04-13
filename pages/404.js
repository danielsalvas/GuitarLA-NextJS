import Layout from "@/components/layout"
import Link from "next/link"

const Page404 = () => {
  return (
    <Layout title="Not Found Page">
      <p className="error">Not Found Page</p>
      <Link href='/' legacyBehavior>
        <a className="error-link">
            Got to Home
        </a>
      </Link>
    </Layout>
  )
}

export default Page404
