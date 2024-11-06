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




// App
// "App.jsx
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "../src/component/Header"; 
// import Home from "../src/component/Home";
// import Shop from "../src/component/Shop";
// import Product from "../src/component/Product";
// import Category from "../src/component/Category";
// import FAQs from "../src/component/Faq";
// import Cart from "../src/component/Cart";
// import Buy from "../src/component/Buy";
// import Login from "../src/component/Login";
// import Footer from "../src/component/Footer";
// import Select from "./component/Select";
// import './App.css'

// function App() {
//   return (
//     <div className="app">
//     <Router>
//       <Header/>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/shop" element={<Shop />} />
//         <Route exact path="/product" element={<Product />} />
//         <Route exact path="/category" element={<Category />} />
//         <Route exact path="/faqs" element={<FAQs />} />
//         <Route exact path="/cart" element={<Cart />} />
//         <Route exact path="/buy" element={<Buy />} />
//         <Route exact path="/select" element={<Select />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/footer" element={<Footer />} />
//       </Routes>
//       <Footer/>
//     </Router>
//     </div>
//   );
// }

// export default App;



// Header.jsx
// import logo from "../assets/logo.svg";
// import "../App.css";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();

//   return (
//     <div className="menubar">
//       <img src={logo} alt="Logo" className="logo" />
//       <div className="menu">
//         <Link to="/" className={location.pathname === "/" ? "active" : ""}>
//           Home
//         </Link>
//         <Link
//           to="/shop"
//           className={location.pathname === "/shop" ? "active" : ""}
//         >
//           Shop
//         </Link>
//         <Link
//           to="/product"
//           className={location.pathname === "/product" ? "active" : ""}
//         >
//           Product
//         </Link>
//         <Link
//           to="/category"
//           className={location.pathname === "/category" ? "active" : ""}
//         >
//           Category
//         </Link>
//         <Link
//           to="/faqs"
//           className={location.pathname === "/faqs" ? "active" : ""}
//         >
//           FAQ&apos;s
//         </Link>
//       </div>

//       <input type="search" className="search" placeholder="Search by Product: Name, Category . ." />
      
//       <div className="cart">
//         <div className="number">0</div>
//         <Link to="/cart">
//           <i className="bi bi-cart"></i>
//         </Link>
//         <Link to="/login">
//           <i className="bi bi-person"></i>
//         </Link>
//       </div>
//     </div>
//   );
// }


// Shop.jsx
// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom"; 
// import '../App.css';
// import Shopbar from "./Shopbar";

// export default function Shop() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
  
//   const navigate = useNavigate(); 
  
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => {
//         setProducts(json);
//         setFilteredProducts(json);
//       });
//   }, []);

//   const filterProducts = (allProducts, category) => {
//     if (category === "All") {
//       setFilteredProducts(allProducts);
//     } else {
//       const filtered = allProducts.filter(product => product.category === category);
//       setFilteredProducts(filtered);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     filterProducts(products, category);
//   };

//   const truncateDescription = (description) => {
//     const words = description.split(' ');
//     if (words.length > 20) {
//       return words.slice(0, 20).join(' ') + ' .....';
//     }
//     return description;
//   };

//   // Handle product view (navigate to product page with product details)
//   const handleProductView = (product) => {
//     navigate(`/product`, { state: { product } }); // Navigate to product page with the selected product's data
//   };

//   return (
//     <section id="shop" className="category container-fluid">
//       <Shopbar />
//       <div id="shop-main" className="container-fluid">
//         <div id="submenu">
//           <a href="#" className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>
//             All
//           </a>
//           <a href="#" className={selectedCategory === "men's clothing" ? 'active' : ''} onClick={() => handleCategoryClick("men's clothing")}>
//             Men's Clothing
//           </a>
//           <a href="#" className={selectedCategory === "women's clothing" ? 'active' : ''} onClick={() => handleCategoryClick("women's clothing")}>
//             Women's Clothing
//           </a>
//           <a href="#" className={selectedCategory === 'electronics' ? 'active' : ''} onClick={() => handleCategoryClick('electronics')}>
//             Electronics
//           </a>
//           <a href="#" className={selectedCategory === 'jewelery' ? 'active' : ''} onClick={() => handleCategoryClick('jewelery')}>
//             Jewelery
//           </a>
//         </div>

//         <ul className="product-list">
//           {filteredProducts.length === 0 ? (
//             <p>Loading...</p>
//           ) : (
//             filteredProducts.map((product, index) => (
//               <li key={index} className="col-md-3" id="list">
//                 <img src={product.image} alt={product.title} id="image" />
//                 <h4>{product.title}</h4>
//                 <span>
//                   <h3 id="price">${product.price}</h3>
//                   <i className="bi bi-heart" />
//                 </span>
//                 <p>{truncateDescription(product.description)}</p>
//                 <div className="d-flex align-items-center justify-content-between w-100">
//                   <button type="button" id="view-btn" onClick={() => handleProductView(product)}>
//                     Quick View
//                   </button>
//                   <button type="submit" id="buy-btn">
//                     <Link to='/bu'>Add to cart</Link>
//                   </button>
//                 </div>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </section>
//   );
// }
// " 

// this are my pages as you see my Header Component has a '<div className="number">0</div>', i want to update the .number in Header.jsx when the user clicks on '<button type="submit" id="buy-btn">
//                     <Link>Add to cart</Link>
//                   </button>'  