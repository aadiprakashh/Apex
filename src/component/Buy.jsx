import { Link } from "react-router-dom";
import { SiPhonepe, SiPaytm, SiGooglepay, SiCashapp } from "react-icons/si";
import { useLocation } from "react-router-dom"; // Import useLocation to access the state
import { useState } from "react";

export default function Buy() {
  const location = useLocation(); // Get the location object
  const product = location.state?.product; // Access the product from state
  const quantity = location.state?.quantity || 1; // Access the product quantity or default to 1
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.mobile && formData.email;
  };

  return (
    <div id="buy" className="container-fluid">
      <div className="row col-md-5">
        <h1 className="h1">CheckOut</h1>
        <div className="checkout">
          <div className="adrs">
            <h2>1. Contact Info</h2>
            <form>
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
              <input type="text" name="mobile" placeholder="Mobile" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            </form>
          </div>
          <div className="way">
            <h2>2. Delivery Method</h2>
            <div id="method">
              <i className="bi bi-sunrise"></i>
              <i className="bi bi-brightness-high"></i>
              <i className="bi bi-sunset"></i>
              <i className="bi bi-cloud-sun"></i>
            </div>
          </div>
          <div className="pay">
            <h2>3. Payment Method</h2>
            <div id="method">
              <SiGooglepay />
              <SiPhonepe />
              <SiPaytm />
              <SiCashapp />
            </div>
          </div>
        </div>
      </div>
      <div className="place col-md-5">
        <div className="d-flex flex-column align-items-start">
          <h1>Shipping</h1>
          <p className="px-3">Your order is on its way!</p>
          {product ? (
            <div className="d-flex align-items-center gap-3">
              <img src={product.image} alt={product.title} width={100} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ₹{product.price.toFixed(2)}</p>
                <p>Quantity: {quantity}</p>
              </div>
            </div>
          ) : (
            <p>No product selected.</p>
          )}
        </div>
        <div className="tot">
          <p>Subtotal</p>
          <b id="price">₹{product ? (product.price * quantity).toFixed(2) : 0}</b>
        </div>
        <div className="tot">
          <p>Discount</p>
          <b>- ₹55.00 (10%)</b>
        </div>
        <div className="tot" style={{ borderBottom: '1px solid #eee' }}>
          <p>Delivery Charge</p>
          <b id="del-charge">₹0.00 (Free)</b>
        </div>
        <div className="tot" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
          <p>Total:</p>
          <b>₹{product ? (product.price * quantity - 55).toFixed(2) : '0.00'}</b>
        </div>
        <button id="pay" disabled={!isFormValid()}>
          Place Order
        </button>
      </div>
    </div>
  );
}
