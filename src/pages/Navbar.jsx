import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import "../css/NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="navbar">

        <button className="menu-btn" onClick={() => setOpen(true)}>
          <FaBars />
        </button>

        <Link to="/" className="logo">
          <img src={logo}/>
        </Link>

        <div className="search-box desktop-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search bouquets, flowers..."
          />
        </div>

        <div className="nav-icons">
          <Link to="/favourites"><FaHeart /></Link>
          <Link to="/cart"><FaShoppingCart /></Link>
          <Link to="/login"><FaUser /></Link>
        </div>

      </header>

      {/* Mobile Search */}
      <div className="mobile-search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search bouquets, flowers..."
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bottom-navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/custom-orders">Custom Orders</Link>
        <Link to="/best-sellers">Best Sellers</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link to="/custom-orders" onClick={() => setOpen(false)}>Custom Orders</Link>
        <Link to="/best-sellers" onClick={() => setOpen(false)}>Best Sellers</Link>
        <Link to="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>

      </div>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}

export default NavBar;