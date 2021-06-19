import { Link } from 'react-router-dom'

import ItemCount from '../../components/ItemCount/ItemCount'
import './item.css'

function Item({item}) {

  


  const onAdd = (count) => {
    if(count > 0) {
      console.log(`${count} productos comprados`);
    } 
  }


  return(
    <div className="single-item">
      <Link to={`/item/${item.id}`} className="item-info">
        <div className="item-image-container">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
        <p className="item-title">{item.title}</p>
        <p className="item-price">${item.price}</p>
      </Link>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default Item