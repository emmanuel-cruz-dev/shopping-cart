import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export default function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      <span>Categoría: {filters.category}</span>
      <span>Precio: ${filters.minPrice}</span>
      <h4>
        Prueba técnica de React ⚛️ － <span>emmanuel</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}
