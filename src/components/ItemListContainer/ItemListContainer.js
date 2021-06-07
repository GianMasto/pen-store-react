import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount'

function ItemListContainer({greeting}) {

  const onAdd = (count) => {
    if(count > 0) {
      console.log(`${count} productos comprados`);
    } 
  }

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemCount stock={10} inital={0} onAdd={onAdd} />
    </div>
  );
}

export default ItemListContainer;
