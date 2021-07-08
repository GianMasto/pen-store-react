import { Link } from 'react-router-dom'
import { useContext } from "react";

import CartContext from "../../context/CartContext";
import './CartWidget.css';
import {ReactComponent as CartIcon} from '../../assets/images/shopping-cart.svg';


function CartWidget() {

  const { getItemsAmount } = useContext(CartContext)


  return (
    <Link to="/cart" className="cart-widget">
      <button>
        <CartIcon />
        {
          getItemsAmount() != 0 && 
            <span class="counter">{getItemsAmount()}</span>
        }
      </button>
    </Link>
  );
}

export default CartWidget;
