import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import './App.css';

function App() {
  const [cart, setCart] = useState([]); // Store cart items as an array

   // Add or update item in the cart
   const handleAddToCart = (product) => {
    console.log("Adding product to cart:", product); // Add this line
    if (!product || !product.id) {
      console.error("Invalid product:", product);
      return; // Early exit if product is invalid
    }
  
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  

  const updateCartItem = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  return (
    <div className="app">
      <Router>
        <Header cartCount={cart.length} /> {/* Pass cart length to Header */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route exact path="/product" element={<Product onAddToCart={handleAddToCart} />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/cart" element={<Cart cartItems={cart}
              updateCartItem={updateCartItem}
              removeCartItem={removeCartItem} />} /> 
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
