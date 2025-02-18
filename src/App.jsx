import ProductJson from "./mocks/products.json";
import { Products } from "./components/Products";

function App() {
  console.log(ProductJson.products);

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Products products={ProductJson.products} />
    </>
  );
}

export default App;
