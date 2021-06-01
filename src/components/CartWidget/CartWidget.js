import './CartWidget.css';
import {ReactComponent as CartIcon} from '../../assets/images/shopping-cart.svg';

function CartWidget() {
  return (
    <div className="cart-widget">
      <button onClick={() => console.log('aaaa')}>
        <CartIcon />
      </button>
    </div>
  );
}

export default CartWidget;
