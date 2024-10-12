import { useNavigate } from "react-router-dom";
import Select from './Select';
export default function Cart({ cartItems, updateCartItem, removeCartItem }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const calculateTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      updateCartItem(item.id, newQuantity);
    } else {
      removeCartItem(item.id); // Remove if quantity becomes 0
    }
  };

  const handleViewProduct = (item) => {
    navigate(`/product`, { state: { product: item, quantity:item.quantity } }); // Navigate to Product page
  };
  const handleBuy = (item) => {
    navigate('/buy', { state: { product: item, quantity:item.quantity } }); // Navigate to Buy page with product data
  };
  return (
    <div className="cart-container container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
        <p>Your cart is empty.</p>
        <Select/>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <div className="card-item-info">
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                  {/* <i class="bi bi-dash" ></i> */}
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                  {/* <i class="bi bi-plus" onClick={() => handleQuantityChange(item, 1)}></i> */}
                </div>
                <i onClick={() => removeCartItem(item.id)} className="remove-btn">
                  Remove
                </i>
                <button onClick={() => handleViewProduct(item)} className="product-view">
                  View Product
                </button>
                <button onClick={() => handleBuy(item)} className="buy-btn">
                  Buy
                </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
    </div>
  );
}
