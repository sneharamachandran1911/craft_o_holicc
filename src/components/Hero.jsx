import "../css/Hero.css";
import heroImage from "../assets/bouquet.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🌸 Handmade with Love
        </span>

        <h1>
          Every Bouquet <br />
          Tells a Story.
        </h1>

        <p>
          Beautiful handcrafted flower bouquets designed
          for birthdays, anniversaries, surprises and every
          special moment worth celebrating.
        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            Shop Now
          </button>

          <button className="custom-btn">
            Custom Order
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-circle">

          <img
            src={heroImage}
            alt="Bouquet"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;