import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react"; // Import useState
import Header from "../src/component/Header"; 
import Home from "../src/component/Home";
import Shop from "../src/component/Shop";
import Product from "../src/component/Product";
import Category from "../src/component/Category";
import FAQs from "../src/component/Faq";
import Cart from "../src/component/Cart";
import Buy from "../src/component/Buy";
import Login from "../src/component/Login";
import Footer from "../src/component/Footer";
import Select from "./component/Select";
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0); // State to hold the cart count

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count
  };

  return (
    <div className="app">
      <Router>
        <Header cartCount={cartCount} /> {/* Pass cart count to Header */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop onAddToCart={handleAddToCart} />} /> 
          <Route exact path="/product" element={<Product onAddToCart={handleAddToCart}/>} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/buy" element={<Buy />} />
          <Route exact path="/select" element={<Select />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
