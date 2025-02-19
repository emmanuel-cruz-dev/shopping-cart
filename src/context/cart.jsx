import { createContext, useState } from "react";

// 1. Crear contexto
export const CartContext = createContext();

// 2. Crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (product) => {
    // Checkear si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // Si el producto no está en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
