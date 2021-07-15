import { useContext } from "react";
import { Link } from "react-router-dom";

import Checkout from '../Checkout/Checkout'
import CartContext from "../../context/CartContext";
import './Cart.css';

function Cart() {

  const {cart, removeItem, clear, getTotalPrice } = useContext(CartContext)
  return (
    <div className="container">
      {
        cart.length <= 0 ?
          <div className="cart-alert">
            <p>No hay ítems en el carrito</p>
            <Link className="add-button" to="/">Ir a comprar</Link>
          </div> :
          <>
            <ul className="cart-list">
              <li className="cart-item">
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span></span>
              </li>
              {
                cart.map(({quantity, item}) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.title}</span>
                    <span>{quantity}</span>
                    <span>${quantity * item.price}</span>
                    <button onClick={() => {removeItem(item.id)}}>Borrar item</button>
                  </li>
                ))
              }
              <li className="cart-item">
                <span></span>
                <span></span>
                <span><strong>Total: </strong>${getTotalPrice()}</span>
                <button onClick={() => {clear()}}>Borrar todo</button>
              </li>
            </ul>
            <Checkout />
          </>
      }
    </div>
  );
}

export default Cart;