import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/guitars.module.css";
import Layout from "@/components/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ guitar, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const { name, description, image, price } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      alert("Not valid quantity");
      return;
    }

    //Build an object to avoid many calls to the API

    const selectGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.formats.medium.url,
      name,
      price,
      quantity,
    };

    addToCart(selectGuitar);

    toast.success("Product added to the cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  console.log(guitar);
  return (
    <Layout title={`${name} Guitar`}>
      <div className={styles.guitar}>
        <Image
          src={image.data.attributes.formats.medium.url}
          width={600}
          height={400}
          alt="guitar-image"
        />
        <div className={styles.content}>
          <div className={styles.title__container}>
            <h3>{name}</h3>
            <Link href="/store">Go Back</Link>
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity: </label>
            <select
              onChange={(e) => setQuantity(Number(e.target.value))}
              id="quantity"
            >
              <option value="0">--Select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Add to cart" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Product;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=*`
  );
  const { data: guitar } = await response.json();
  return {
    props: {
      guitar,
    },
  };
}

// export async function getServerSideProps({query: {url}}) {

//     const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
//     const { data: guitar } = await response.json();

//     return {
//       props: {
//         guitar,
//       },
//     };
//   }
