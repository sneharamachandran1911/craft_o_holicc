import { Link } from "react-router-dom";
import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-link"
    >
      <div className="product-card">

        <div className="product-image">
          <img
            src={product.images[0]}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>

          <p className="price">
            ₹{product.price}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default ProductCard;