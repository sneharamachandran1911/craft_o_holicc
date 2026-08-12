import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../api/AxiosInstance";
import "../css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log("productdata",res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="products-page">

      <div className="products-header">
        <h1>Our Collection</h1>
        <p>
          Handmade with love, crafted just for you.
        </p>
      </div>

      {loading && <p className="products-status">Loading products...</p>}
      {error && <p className="products-status products-error">{error}</p>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Products;