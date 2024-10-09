import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/component/Header"; 
import Home from "../src/component/Home";
import Shop from "../src/component/Shop";
import Product from "../src/component/Product";
import Category from "../src/component/Category";
import FAQs from "../src/component/Faq";
import Buy from "../src/component/Buy";
import Login from "../src/component/Login";
import Footer from "../src/component/Footer";

function App() {
  return (
    <div className="app">
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/buy" element={<Buy />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/footer" element={<Footer />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
