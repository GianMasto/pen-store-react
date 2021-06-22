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
              <p className="item-id">{item.id}</p>
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
              <p className="item-price">${item.price}</p>
            </div>
          </div> :
          <p>Cargando info...</p>
      }
    </>
    
  )
}

export default ItemDetail;
