import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import api from "../api/AxiosInstance";
import "../css/ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // ==========================
  // FETCH PRODUCT
  // ==========================

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const response = await api.get(
          `/products/${id}`
        );

        console.log(
          "Product details:",
          response.data
        );

        const fetchedProduct = response.data;

        setProduct(fetchedProduct);

        // Set first image
        if (
          fetchedProduct.images &&
          fetchedProduct.images.length > 0
        ) {
          setSelectedImage(
            fetchedProduct.images[0].imageUrl
          );
        }

      } catch (err) {

        console.error(
          "Error fetching product:",
          err
        );

        setError(
          "Could not load this product."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProduct();

  }, [id]);


  // ==========================
  // LOADING
  // ==========================

  if (loading) {
    return (
      <div className="product-status">
        Loading product...
      </div>
    );
  }


  // ==========================
  // ERROR
  // ==========================

  if (error) {
    return (
      <div className="product-status product-error">
        {error}
      </div>
    );
  }


  // ==========================
  // PRODUCT NOT FOUND
  // ==========================

  if (!product) {
    return (
      <div className="product-status">
        Product not found.
      </div>
    );
  }


  // ==========================
  // RENDER
  // ==========================

  return (

    <div className="product-container">


      {/* ======================
          LEFT SECTION
      ======================= */}

      <div className="left-section">


        {/* MAIN IMAGE */}

        <div className="main-image">

          {selectedImage ? (

            <img
              src={selectedImage}
              alt={product.name}
            />

          ) : (

            <p>No image available</p>

          )}

        </div>


        {/* THUMBNAILS */}

        {product.images &&
          product.images.length > 0 && (

            <div className="thumbnail-container">

              {product.images.map((image) => (

                <img
                  key={image.id}
                  src={image.imageUrl}
                  alt={product.name}
                  onClick={() =>
                    setSelectedImage(
                      image.imageUrl
                    )
                  }
                  className={
                    selectedImage === image.imageUrl
                      ? "active-thumbnail"
                      : ""
                  }
                />

              ))}

            </div>

          )}

      </div>


      {/* ======================
          RIGHT SECTION
      ======================= */}

      <div className="right-section">


        {/* NAME */}

        <h1>
          {product.name}
        </h1>


        {/* PRICE */}

        <h2>
          ₹{Number(product.price).toLocaleString("en-IN")}
        </h2>


        {/* STOCK */}

        <div className="availability">

          <span>
            Availability :
          </span>

          {product.stock ? (

            <p className="stock">
              In Stock
            </p>

          ) : (

            <p className="out-stock">
              Out of Stock
            </p>

          )}

        </div>


        {/* DESCRIPTION */}

        <div className="description">

          <h3>
            Description
          </h3>

          <p>
            {product.description}
          </p>

        </div>


        {/* COLORS */}

        {product.colors &&
          product.colors.length > 0 && (

            <div className="colors">

              <h3>
                Available Colors
              </h3>

              <div className="color-list">

                {product.colors.map((color) => (

                  <span
                    key={color.id}
                    className="color-option"
                  >
                    {color.colorName}
                  </span>

                ))}

              </div>

            </div>

          )}


        {/* QUANTITY */}

        <div className="quantity">

          <h3>
            Quantity
          </h3>

          <div className="quantity-box">

            <button
              type="button"
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              <FaMinus />
            </button>


            <span>
              {quantity}
            </span>


            <button
              type="button"
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              <FaPlus />
            </button>

          </div>

        </div>


        {/* BUTTONS */}

        <div className="buttons">

          <button
            type="button"
            className="wishlist-btn"
          >
            <FaHeart />

            Wishlist
          </button>


          <button
            type="button"
            className="cart-btn"
            disabled={!product.stock}
          >
            <FaShoppingCart />

            Add to Cart
          </button>


          <button
            type="button"
            className="order-btn"
            disabled={!product.stock}
          >
            Order Now
          </button>

        </div>


        {/* VIDEO */}

        {product.videos &&
          product.videos.length > 0 && (

            <div className="product-video">

              <h3>
                Product Video
              </h3>

              <video
                controls
                width="100%"
              >
                <source
                  src={
                    product.videos[0].videoUrl
                  }
                  type="video/mp4"
                />

                Your browser does not support
                the video tag.
              </video>

            </div>

          )}

      </div>

    </div>
  );
}

export default ProductDetails;