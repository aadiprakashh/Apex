import logo from "../assets/logo.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
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
          className={location.pathname === "/shop" ? "active" : ""}
        >
          Shop
        </Link>
        <Link
          to="/product"
          className={location.pathname === "/product" ? "active" : ""}
        >
          Product
        </Link>
        <Link
          to="/category"
          className={location.pathname === "/category" ? "active" : ""}
        >
          Category
        </Link>
        <Link
          to="/faqs"
          className={location.pathname === "/faqs" ? "active" : ""}
        >
          FAQ&apos;s
        </Link>
      </div>

      <input type="search" className="search" placeholder="Search entirely" />
      
      <div className="cart">
        <div className="number">0</div>
        <Link to="/buy">
          <i className="bi bi-cart"></i>
        </Link>
        <Link to="/login">
          <i className="bi bi-person"></i>
        </Link>
      </div>
    </div>
  );
}
