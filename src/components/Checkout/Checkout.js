import { useState, useContext, useEffect } from "react";
import firebase from "@firebase/app";
import "@firebase/firestore";

import CartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import "./Checkout.css";

function Checkout({ onOrderIdUpdate }) {
  const { cart, getTotalPrice, clear } = useContext(CartContext);

  const db = getFirestore();
  const orders = db.collection("orders");

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState();
  const [orderId, setOrderId] = useState();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (orderId) {
      clear();
      onOrderIdUpdate(orderId);
    }
  }, [orderId, clear, onOrderIdUpdate]);

  const onInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const { id } = await orders.add({
        buyer: inputs,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        items: cart,
        total: getTotalPrice(),
      });
      setOrderId(id);
      setProcessing(false);
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="checkout">
          <form className="checkout-form" onSubmit={(e) => onFormSubmit(e)}>
            <label>
              <p>Name: </p>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={(e) => onInputsChange(e)}
                required
              />
            </label>
            <label>
              <p>Phone: </p>
              <input
                type="text"
                name="phone"
                value={inputs.phone}
                onChange={(e) => onInputsChange(e)}
                required
              />
            </label>
            <label>
              <p>Email: </p>
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={(e) => onInputsChange(e)}
                required
              />
            </label>
            {processing ? (
              <p>Processing payment...</p>
            ) : (
              <button type="submit" className="add-button">
                Checkout
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default Checkout;
