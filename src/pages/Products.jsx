import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../css/Products.css";

function Products() {
  return (
    <section className="products-page">

      <div className="products-header">
        <h1>Our Collection</h1>
        <p>
          Handmade with love, crafted just for you.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;