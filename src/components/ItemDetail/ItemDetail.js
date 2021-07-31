import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../context/CartContext";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [itemAmount, setItemAmout] = useState();
  const [isItemInList, setIsItemInList] = useState(false);

  const { addItem, isInCart } = useContext(CartContext);

  useEffect(() => {
    setIsItemInList(isInCart(item.id));
  }, [item, isInCart]);

  const onAdd = (count) => {
    setItemAmout(count);
    addItem(item, count);
  };

  return (
    <>
      {item.id ? (
        <div className="item-detail">
          <div className="item-detail-image-container">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="item-detail-info-container">
            <p className="item-id">{item.id}</p>
            <h2 className="item-title">{item.title}</h2>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price}</p>
            {itemAmount || isItemInList ? (
              <Link to="/cart" className="finish-button">
                Finish purchase
              </Link>
            ) : (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      ) : (
        <p>Loading info...</p>
      )}
    </>
  );
}

export default ItemDetail;
