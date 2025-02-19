import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart } = useCart();

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
                <p>{product.category}</p>
              </div>
              <div>
                <button onClick={() => addToCart(product)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
