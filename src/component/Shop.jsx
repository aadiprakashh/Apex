import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import '../App.css';
import Shopbar from "./Shopbar";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const navigate = useNavigate(); 
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
      });
  }, []);

  const filterProducts = (allProducts, category) => {
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterProducts(products, category);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + ' .....';
    }
    return description;
  };

  // Handle product view (navigate to product page with product details)
  const handleProductView = (product) => {
    navigate(`/product`, { state: { product } }); // Navigate to product page with the selected product's data
  };

  return (
    <section id="shop" className="category container-fluid">
      <Shopbar />
      <div id="shop-main" className="container-fluid">
        <div id="submenu">
          <a href="#" className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>
            All
          </a>
          <a href="#" className={selectedCategory === "men's clothing" ? 'active' : ''} onClick={() => handleCategoryClick("men's clothing")}>
            Men's Clothing
          </a>
          <a href="#" className={selectedCategory === "women's clothing" ? 'active' : ''} onClick={() => handleCategoryClick("women's clothing")}>
            Women's Clothing
          </a>
          <a href="#" className={selectedCategory === 'electronics' ? 'active' : ''} onClick={() => handleCategoryClick('electronics')}>
            Electronics
          </a>
          <a href="#" className={selectedCategory === 'jewelery' ? 'active' : ''} onClick={() => handleCategoryClick('jewelery')}>
            Jewelery
          </a>
        </div>

        <ul className="product-list">
          {filteredProducts.length === 0 ? (
            <p>Loading...</p>
          ) : (
            filteredProducts.map((product, index) => (
              <li key={index} className="col-md-3" id="list">
                <img src={product.image} alt={product.title} id="image" />
                <h4>{product.title}</h4>
                <span>
                  <h5 id="price">${product.price}</h5>
                  <i className="bi bi-heart" />
                </span>
                <p>{truncateDescription(product.description)}</p>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <button type="button" id="view-btn" onClick={() => handleProductView(product)}>
                    Quick View
                  </button>
                  <button type="submit" id="buy-btn">
                    <Link to='/bu'>Add to cart</Link>
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
