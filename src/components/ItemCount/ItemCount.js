import { useState } from "react";

import "./ItemCount.css";

function ItemCount({ stock, inital, onAdd }) {
  const [itemsCounter, setItemsCounter] = useState(inital || 1);

  const onItemsCounterSubstract = () => {
    if (itemsCounter > 1) {
      setItemsCounter(itemsCounter - 1);
    }
  };

  const onItemsCounterAdd = () => {
    if (itemsCounter < stock) {
      setItemsCounter(itemsCounter + 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="controls">
        <span>
          <button
            className={itemsCounter <= 1 ? "disabled" : null}
            onClick={onItemsCounterSubstract}
          >
            -
          </button>
        </span>
        <span className="counter-number">
          <p>{itemsCounter}</p>
        </span>
        <span>
          <button
            className={itemsCounter >= stock ? "disabled" : null}
            onClick={onItemsCounterAdd}
          >
            +
          </button>
        </span>
      </div>
      <button className="add-button" onClick={() => onAdd(itemsCounter)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
