import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
      </Head>

      <Header />
      <h1>From Layout</h1>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
