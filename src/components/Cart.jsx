import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

export default function Cart() {
  const { cart, addToCart } = useCart();

  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt="" />
                <div>
                  <strong>iPhone</strong> - $1499
                </div>

                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            );
          })}
          {/* <li>
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt=""
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>

            <footer>
              <small>Qty: 1</small>
              <button onClick={() => addToCart()}>+</button>
            </footer>
          </li> */}
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
