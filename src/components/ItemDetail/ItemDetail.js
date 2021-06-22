import { useState } from 'react'
import { Link } from 'react-router-dom'

import ItemCount from '../../components/ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({item}){

  const [itemAmount, setItemAmout] = useState()

  const onAdd = (count) => {
    setItemAmout(count)
  }




  return(
    <>
      {
        item.id  ? 
          <div className="item-detail">
            <div className="item-detail-image-container">
              <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="item-detail-info-container">
              <p className="item-id">{item.id}</p>
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
              <p className="item-price">${item.price}</p>
              {
                itemAmount ? 
                  <Link to="/cart" className='finish-button'>Terminar mi compra ({itemAmount})</Link> :
                  <ItemCount stock={10} initial={1} onAdd={onAdd} />
              }
              
            </div>
          </div> :
          <p>Cargando info...</p>
      }
    </>
    
  )
}

export default ItemDetail;