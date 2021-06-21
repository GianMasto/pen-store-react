import Item from '../../components/Item/Item'
import './ItemDetail.css'

function ItemDetail({item}){
  return(
    <>
      {
        item.id  ? 
          <div className="item-detail">
            <div className="item-detail-image-container">
              <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="item-detail-info-container">
              <p class="item-id">{item.id}</p>
              <h2 class="item-title">{item.title}</h2>
              <p class="item-description">{item.description}</p>
              <p class="item-price">${item.price}</p>
            </div>
          </div> :
          <p>Cargando info...</p>
      }
    </>
    
  )
}

export default ItemDetail;