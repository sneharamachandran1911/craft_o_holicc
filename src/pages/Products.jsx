import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../api/AxiosInstance";
import "../css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        console.log("Product data:", response.data);

        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);

        setError(
          "Could not load products. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products-page">

      <div className="products-header">
        <h1>Our Collection</h1>

        <p>
          Handmade with love, crafted just for you.
        </p>
      </div>

      {loading && (
        <p className="products-status">
          Loading products...
        </p>
      )}

      {error && (
        <p className="products-status products-error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="products-grid">

          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className="products-status">
              No products available.
            </p>
          )}

        </div>
      )}

    </section>
  );
}

export default Products;