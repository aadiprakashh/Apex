
import Select from "./Select";

export default function Cart() {
  const cart = [
    // { title: "Item 1", price: 10.99, quantity: 2, image: "path_to_image_1.jpg" },
    // { title: "Item 2", price: 15.99, quantity: 1, image: "path_to_image_2.jpg" },
    // { title: "Item 3", price: 7.49, quantity: 3, image: "path_to_image_3.jpg" },
  ];

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <Select />
      ) : (
        <>
          <h1>Your Shopping Cart</h1>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <img src={product.image} alt={product.title} width="50" />
                <h4>{product.title}</h4>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p id="total-price">Total: ${totalPrice.toFixed(2)}</p>
            <button id="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
