import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';

import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer({greeting}) {

  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [error, setError] = useState()
  
  useEffect(() => {
    let isMounted = true

    const fetchAndSetProduct = async () => {
      setError()

      const db = getFirestore()
      const itemCollection = db.collection("items")
      const item = itemCollection.doc(id)

      const doc = await item.get()
      try {
        if(!doc.exists) {
          throw new Error('Item no existe')
        }
    
        if(isMounted) {
          setProduct({id: doc.id, ...doc.data()})
        }
      } catch({message}) {
        setError(message)
      }
    }

    fetchAndSetProduct()

    return () => {isMounted = false}

  }, [id])

  return (
    <div className="container">
      {error ? 
        <p>Error: {error}</p>:
         <ItemDetail item={product} />
      }
    </div>
  );
}

export default ItemDetailContainer;
