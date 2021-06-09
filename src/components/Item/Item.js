import ItemCount from '../../components/ItemCount/ItemCount'
import './item.css'

function Item({item}) {


  const onAdd = (count) => {
    if(count > 0) {
      console.log(`${count} productos comprados`);
    } 
  }


  return(
    <>
      <div>
        <img src={item.pictureUrl} alt={item.title} />
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  )
}

export default Item