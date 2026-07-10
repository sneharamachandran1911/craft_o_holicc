import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import products from "../data/products";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-details-page">

      <div className="product-container">

        {/* LEFT */}

        <div className="left-section">

          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>

          <div className="thumbnail-container">

            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
              />
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="right-section">

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <div className="availability">
            <span>Availability :</span>

            {product.stock ? (
              <p className="stock">In Stock</p>
            ) : (
              <p className="out-stock">Out of Stock</p>
            )}
          </div>

          <div className="description">

            <h3>Description</h3>

            <p>{product.description}</p>

          </div>

          <div className="quantity">

            <h3>Quantity</h3>

            <div className="quantity-box">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
              >
                <FaMinus />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                <FaPlus />
              </button>

            </div>

          </div>

          <div className="buttons">

            <button className="wishlist-btn">
              <FaHeart />
              Wishlist
            </button>

            <button className="cart-btn">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="order-btn">
              Order Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;