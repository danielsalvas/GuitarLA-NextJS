import Layout from "@/components/layout";
import styles from "../styles/checkout.module.css";
import Image from "next/image";

const Checkout = ({ cart }) => {
  return (
    <Layout title="checkout">
      <main className="container">
        <h1 className="heading">Checkout</h1>

        <div className={styles.content}>
          <div className={styles.checkout}>
            <h2>Products</h2>

            {cart.length === 0 ? 'Empty Cart' : (
              cart.map( product => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image width={250} height={480} src={product.image} alt={product.name} />
                  </div>
                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.price}><span>${product.price}</span></p>
                    <p className={styles.subtotal}><span>Subtotal: ${product.quantity * product.price}</span></p>
                  </div>
                </div>
              ))
            )}
          </div>

          <aside className={styles.summary}>
            <h1>Order Summary</h1>
            <p>Total</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Checkout;
