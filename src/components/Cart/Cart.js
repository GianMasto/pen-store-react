import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Checkout from "../Checkout/Checkout";
import CartContext from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState();

  return (
    <div className="container">
      {orderId ? (
        <div className="cart-alert">
          <p className="cart-info">
            Thank you for your purchase! <br />
            <br /> Your OrderID is: {orderId}
          </p>
          <Link className="add-button" to="/">
            Go to homepage
          </Link>
        </div>
      ) : cart.length <= 0 ? (
        <div className="cart-alert">
          <p>There are no items in the cart.</p>
          <Link className="add-button" to="/">
            Go to homepage
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            <li className="cart-item">
              <span>Product</span>
              <span>Quantity</span>
              <span>Price</span>
              <span></span>
            </li>
            {cart.map(({ quantity, item }) => (
              <li key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>{quantity}</span>
                <span>${quantity * item.price}</span>
                <button
                  className="add-button"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Delete item
                </button>
              </li>
            ))}
            <li className="cart-item">
              <span></span>
              <span></span>
              <span>
                <strong>Total: </strong>${getTotalPrice()}
              </span>
              <button
                className="add-button"
                onClick={() => {
                  clear();
                }}
              >
                Delete all
              </button>
            </li>
          </ul>
          <Checkout onOrderIdUpdate={(orderId) => setOrderId(orderId)} />
        </>
      )}
    </div>
  );
}

export default Cart;
