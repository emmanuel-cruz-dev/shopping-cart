import "./Products.css";
import { AddToCartIcon } from "./Icons";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>{product.title}</p>
              <img src={product.thumbnail} alt="" />
              <AddToCartIcon />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
