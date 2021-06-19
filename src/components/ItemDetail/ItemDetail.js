import Item from '../../components/Item/Item'
import './ItemDetail.css'

function ItemDetail({item}){
  return(
    <>
      {
        item.id  ? 
          <div className="item-detail">
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div> :
          <p>Cargando info...</p>
      }
    </>
    
  )
}

export default ItemDetail;