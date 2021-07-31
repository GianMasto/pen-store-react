import { useState, useContext, useEffect } from "react";
import firebase from "@firebase/app";
import "@firebase/firestore";

import CartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase";

function Checkout() {
  const { cart, getTotalPrice } = useContext(CartContext);

  const db = getFirestore();
  const orders = db.collection("orders");

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState();
  const [orderId, setOrderId] = useState();

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
    try {
      const { id } = await orders.add({
        buyer: inputs,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        items: cart,
        total: getTotalPrice(),
      });
      setOrderId(id);
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : orderId ? (
        <p>Order ID: {orderId}</p>
      ) : (
        <div className="checkout">
          <form className="checkout-form" onSubmit={(e) => onFormSubmit(e)}>
            <label>
              <p>Nombre: </p>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={(e) => onInputsChange(e)}
                required
              />
            </label>
            <label>
              <p>Teléfono: </p>
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
                type="text"
                name="email"
                value={inputs.email}
                onChange={(e) => onInputsChange(e)}
                required
              />
            </label>
            <button type="submit">Terminar Compra</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Checkout;
