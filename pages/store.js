import GuitarsList from "@/components/guitars-list";
import Layout from "@/components/layout";

function Store({ guitars }) {

  console.log(guitars);
  return (
    <div>
      <Layout title="Store">
        <main className="container">
          <h1 className="heading">Our Collection</h1>
          <GuitarsList guitars={guitars} />
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
      guitars
    },
  };
}
