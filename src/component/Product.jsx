import { useLocation, useNavigate } from "react-router-dom";
import '../component/product.css';
import Select from "./Select";
import { useState } from "react";

export default function Product({ onAddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1); // State for quantity

  if (!product) {
    return <Select />;
  }

  // Function to handle Buy Now click
  const handleBuyNow = () => {
    navigate('/buy', { state: { product, quantity } }); // Correctly sending quantity
  };

  return (
    <section className="product-container" id="product">
      <div className="row d-flex align-items-center gap-3">
        <div className="product-images col-md-5 d-flex align-items-center gap-4">
          <div className="product-images-overview d-flex flex-column gap-4">
            <img src={product.image} alt="Front View" />
            <img src={product.image} alt="Back View" />
            <img src={product.image} alt="Side View" />
            <img src={product.image} alt="Fabric Closeup" />
          </div>
          <img
            className="product-image"
            src={product.image}
            alt="Main Product Image"
            onError={(e) => { e.target.src = 'defaultImage.jpg'; }} // Fallback image
          />
        </div>

        <div className="product-description col-md-6">
          <h1>{product.title}</h1>
          <div className="product-price">
            ₹{product.price}
            <p className="old-price">₹39.99</p>
          </div>
          <div className="rating">⭐⭐⭐⭐☆ (4.5/5) - 234 Reviews</div>

          <div className="description">
            <h2>Description:</h2>
            <p>{product.description}</p>
            <ul>
              <li><strong>Material:</strong> Made from 100% Organic Cotton for a soft and breathable feel.</li>
              <li><strong>Fit:</strong> Regular fit with a comfortable round neckline, perfect for everyday wear.</li>
              <li><strong>Available Sizes:</strong> S, M, L, XL, XXL - Find your perfect fit!</li>
              <li><strong>Colors:</strong> Available in four stylish colors: Black, White, Navy, and Grey.</li>
            </ul>
          </div>

          <div className="options">
            <label htmlFor="color">Color:</label>
            <select id="color">
              <option>Black</option>
              <option>White</option>
              <option>Navy</option>
              <option>Grey</option>
            </select>

            <label htmlFor="size">Size:</label>
            <select id="size">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
              <option>XXL</option>
            </select>

            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="button-group d-flex gap-3">
            <button id="buy-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>

        <div className="reviews">
          <h3 className="h3">Customer Reviews (234):</h3>
          <div className="d-flex gap-3">
            <div className="review-item">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <h4>Amazing Quality!</h4>
              <p>"This t-shirt is incredibly soft and fits perfectly. I’ve already ordered two more colors!" - John D.</p>
            </div>
            <div className="review-item">
              <div className="rating">⭐⭐⭐⭐</div>
              <h4>Great, but runs small</h4>
              <p>"Love the material, but I recommend sizing up if you like a loose fit." - Sarah M.</p>
            </div>
          </div>
        </div>

        <div className="related-items col-md-12">
          <h3 className="h3">You May Also Like:</h3>
          <div className="related-products">
            <div className="product-item">
              <a href="#">
                <img src="polo-shirt.jpg" alt="classNameic Fit Polo Shirt" />
                <h4>classNameic Fit Polo Shirt</h4>
                <p className="related-price">₹35.99</p>
              </a>
            </div>
            <div className="product-item">
              <a href="#">
                <img src="hoodie.jpg" alt="Organic Cotton Hoodie" />
                <h4>Organic Cotton Hoodie</h4>
                <p className="related-price">₹49.99</p>
              </a>
            </div>
            <div className="product-item">
              <a href="#">
                <img src="sweatpants.jpg" alt="Relaxed Fit Sweatpants" />
                <h4>Relaxed Fit Sweatpants</h4>
                <p className="related-price">₹29.99</p>
              </a>
            </div>
          </div>
        </div>

        <div className="faq">
          <h3 className="h3">Frequently Asked Questions:</h3>
          <p><strong>What size should I choose?</strong> We recommend checking the size chart or sizing up if you prefer a loose fit.</p>
          <p><strong>Is the fabric eco-friendly?</strong> Yes! Our cotton is 100% organic and sustainably sourced.</p>
          <p><strong>How do I wash this t-shirt?</strong> Machine wash cold, tumble dry low.</p>
        </div>
      </div>
    </section>
  );
}
