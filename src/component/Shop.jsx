import { useState, useEffect } from "react";
import '../App.css';
import Shopbar from "./Shopbar";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]); // All products
  const [filteredProducts, setFilteredProducts] = useState([]); // Products filtered by category
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to 'All' category

  // Fetch all products from the API when the component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json); // Set all products
        setFilteredProducts(json); // Initially show all products for 'All' category
      });
  }, []);

  // Function to filter products by category
  const filterProducts = (allProducts, category) => {
    if (category === "All") {
      setFilteredProducts(allProducts); // Show all products when "All" is selected
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered); // Update filtered products
    }
  };

  // Handle submenu click to change category and filter products
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
    filterProducts(products, category); // Filter products
  };
  const truncateDescription = (description) => {
    const words = description.split(' '); // Split the description into words
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + ' .....'; // Join first 10 words and add " ... to the rest"
    }
    return description; // If the description has 10 or fewer words, return it as is
  };
  return (
    <section id="shop" className="category container-fluid">
      <Shopbar />

      <div id="shop-main" className="container-fluid">
        <div id="submenu">
          <a 
            href="#"
            className={selectedCategory === 'All' ? 'active' : ''}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </a>
          <a 
            href="#"
            className={selectedCategory === "men's clothing" ? 'active' : ''}
            onClick={() => handleCategoryClick("men's clothing")}
          >
            Men's Clothing
          </a>
          <a 
            href="#"
            className={selectedCategory === "women's clothing" ? 'active' : ''}
            onClick={() => handleCategoryClick("women's clothing")}
          >
            Women's Clothing
          </a>
          <a 
            href="#"
            className={selectedCategory === 'electronics' ? 'active' : ''}
            onClick={() => handleCategoryClick('electronics')}
          >
            Electronics
          </a>
          <a 
            href="#"
            className={selectedCategory === 'jewelery' ? 'active' : ''}
            onClick={() => handleCategoryClick('jewelery')}
          >
            Jewelery
          </a>
        </div>

        <ul className="product-list">
          {filteredProducts.length === 0 ? (
            <p>Loading...</p> // Show loading if filtered products array is empty
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
                  <button type="submit" id="view-btn">
                    <Link to={{
                        pathname: `/product`,
                        state: { product } // Pass product details in state
                      }}>Quick View</Link>
                  </button>
                  <button type="submit" id="buy-btn">
                    <Link to='/buy'>Add to cart</Link>
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
