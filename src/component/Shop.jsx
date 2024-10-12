import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import '../App.css';
import Shopbar from "./Shopbar";

export default function Shop({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
        setFilteredProducts(json);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (allProducts, category) => {
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleCategoryClick = (event, category) => {
    event.preventDefault(); // Prevent default anchor behavior
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

  const handleProductView = (product) => {
    navigate(`/product`, { state: { product } });
  };

  return (
    <section id="shop" className="category container-fluid">
      <Shopbar />
      <div id="shop-main" className="container-fluid">
        <div id="submenu">
          <a href="#" className={selectedCategory === 'All' ? 'active' : ''} onClick={(event) => handleCategoryClick(event, 'All')}>
            All
          </a>
          <a href="#" className={selectedCategory === "men's clothing" ? 'active' : ''} onClick={(event) => handleCategoryClick(event, "men's clothing")}>
            Men's Clothing
          </a>
          <a href="#" className={selectedCategory === "women's clothing" ? 'active' : ''} onClick={(event) => handleCategoryClick(event, "women's clothing")}>
            Women's Clothing
          </a>
          <a href="#" className={selectedCategory === 'electronics' ? 'active' : ''} onClick={(event) => handleCategoryClick(event, 'electronics')}>
            Electronics
          </a>
          <a href="#" className={selectedCategory === 'jewelery' ? 'active' : ''} onClick={(event) => handleCategoryClick(event, 'jewelery')}>
            Jewelery
          </a>
        </div>

        <ul className="product-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              filteredProducts.map((product) => (
                <li key={product.id} className="col-md-3" id="list">
                  <img src={product.image} alt={product.title} id="image" />
                  <h4>{product.title}</h4>
                  <span>
                    <h3 id="price">₹{product.price}</h3>
                    <i className="bi bi-heart" />
                  </span>
                  <p>{truncateDescription(product.description)}</p>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <button type="button" id="view-btn" onClick={() => handleProductView(product)}>
                      Quick View
                    </button>
                    <button type="submit" id="buy-btn" onClick={() => onAddToCart(product)}> 
                      Add to cart
                    </button>
                  </div>
                </li>
              ))
            )
          )}
        </ul>
      </div>
    </section>
  );
}
