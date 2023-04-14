import Layout from "@/components/layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/checkout.module.css";

const Checkout = ({ cart, updateQuantity, deleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalculation = cart.reduce(
      (total, actualProduct) => total + (actualProduct.quantity * actualProduct.price), 0
    );
    setTotal(totalCalculation)
  }, [cart]);

  return (
    <Layout title="checkout">
      <main className="container">
        <h1 className="heading">Checkout</h1>

        <div className={styles.content}>
          <div className={styles.checkout}>
            <h2>Products</h2>

            {cart.length === 0
              ? "Empty Cart"
              : cart.map((product) => (
                  <div key={product.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{product.name}</p>

                      <div className={styles.quantity}>
                        <p>Quantity:</p>
                        <select
                          className={styles.select}
                          value={product.quantity}
                          onChange={(e) =>
                            updateQuantity({
                              id: product.id,
                              quantity: e.target.value,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.price}>
                        <span>${product.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal:
                        <span> ${product.quantity * product.price}</span>
                      </p>
                    </div>

                    <button onClick={() => deleteProduct(product.id)} type="button" className={styles.delete}>X</button>
                  </div>
                ))}
          </div>

          <aside className={styles.summary}>
            <h1>Order Summary</h1>
            <p>Total:${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Checkout;
