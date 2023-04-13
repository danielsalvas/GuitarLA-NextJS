import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (guitar) => {
    // Check if the guitar is in the cart already...
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // Loop to update the quantity
      const cartUpdated = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity += guitar.quantity;
        }
        return guitarState;
      });
      // Assign to the array
      setCart([...cartUpdated]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // In case the product doesn't exists, is new and is added to the cart
      setCart([...cart, guitar]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const cartUpdated = cart.filter((product) => product.id != id);
    setCart(cartUpdated);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateQuantity = (guitar) => {
    const cartUpdated = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = parseInt(guitar.quantity);
      }
      return guitarState;
    });
    setCart(cartUpdated);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      updateQuantity={updateQuantity}
    />
  );
}
