import { Link } from "react-router-dom";
import "../css/ProductCard.css";

function ProductCard({ product }) {

  const firstImage =
    product.images && product.images.length > 0
      ? product.images[0].imageUrl
      : "/placeholder.jpg";

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-link"
    >

      <div className="product-card">

        <div className="product-image">

          <img
            src={firstImage}
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