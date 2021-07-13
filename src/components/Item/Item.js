import { Link } from 'react-router-dom'

import './item.css'

function Item({item}) {

  

  return(
    <div className="single-item">
      <Link to={`/item/${item.id}`} className="item-info">
        <div className="item-image-container">
          <img src={item.image} alt={item.title} />
        </div>
        <p className="item-title">{item.title}</p>
        <p className="item-price">${item.price}</p>
      </Link>
    </div>
  )
}

export default Item