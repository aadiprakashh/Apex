import { Link } from "react-router-dom";import { SiPhonepe,  SiPaytm, SiGooglepay, SiCashapp  } from "react-icons/si";
export default function Buy() {
  return (
    <div id="buy" className="container-fluid">
     <div className="row col-md-5">
     <h1 className="h1">CheckOut</h1>
      <div className="checkout ">
        <div className="adrs">
          <h2>1. Contact Info</h2>
          <form>
            <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
            <input type="number" placeholder="Mobile" required/>
            <input type="email" placeholder="Email" required/>
          </form>
        </div>
        <div className="way">
          <h2>2. Delivery Method</h2>
          <div id="method">
          <i class="bi bi-sunrise"></i>
          <i class="bi bi-brightness-high"></i>
          <i class="bi bi-sunset"></i>
          <i class="bi bi-cloud-sun"></i>
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
        </div>
        <div className="tot">
          <p>Subtotal</p>
          <b id="price">₹450.00</b>
        </div>
        <div className="tot">
          <p>Discount</p>
          <b>- ₹55.00 (10%)</b>
        </div>
        <div className="tot"
        style={{
          borderBottom: '1px solid #eee',
        }}
        >
          <p>Delivery Charge</p>
          <b id="del-charge">₹ 0.00 (Free)</b>
        </div>
          <div className="tot"
          style={{
            fontSize:'1.8rem',
          fontWeight: '700',
        }}>
            <p>Total:</p>
            <b>₹395.00</b>
          </div>
        <button id="pay">
         Place Order
        </button>
      </div>
    </div>
  );
}
