import Item from '../../components/Item/Item'
import './ItemList.css'

function ItemList({items}){
  return(
    <>
      {
        items.length > 0 ? 
          <>
          {
            items.map(item =>( 
              <Item item={item} key={item.id} />
            ))
          }
          </> :
          <p>Cargando productos...</p>
      }
    </>
    
  )
}

export default ItemList;