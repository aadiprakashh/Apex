import logo from "../assets/logo.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function Header({ cartCount }) {
  const location = useLocation();

  return (
    <div className="menubar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/shop"
          className={location.pathname === "/shop" ? "active" : ""}>
          Shop
        </Link>
        <Link
          to="/product"
          className={location.pathname === "/product" ? "active" : ""}>
          Product
        </Link>
        <Link
          to="/category"
          className={location.pathname === "/category" ? "active" : ""}>
          Category
        </Link>
        <Link
          to="/faqs"
          className={location.pathname === "/faqs" ? "active" : ""}>
          FAQ's
        </Link>
      </div>

      <input type="search" className="search" placeholder="Search by Product: Name, Category . ." />
      
      <div className="cart">
        <div className="number">{cartCount}</div> {/* Show dynamic cart count */}
        <Link to="/cart">
          <i className="bi bi-cart"></i>
        </Link>
        <Link to="/login">
          <i className="bi bi-person"></i>
        </Link>
      </div>
    </div>
  );
}
