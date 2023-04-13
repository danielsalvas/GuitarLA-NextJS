import Guitar from "@/components/guitar";
import Layout from "@/components/layout";
import styles from "../styles/grid.module.css"

function Store({ guitars }) {
  return (
    <div>
      <Layout title="Store">
        <main className="container">
          <h1 className="heading">Our Collection</h1>

          <div className={styles.grid}>
            {guitars.map((guitar) => (
              <Guitar key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Store;

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=*`);
  const { data: guitars } = await response.json();

  return {
    props: {
      guitars,
    },
  };
}
