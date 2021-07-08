import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import PRODUCTS_ARRAY from '../../PRODUCTS_ARRAY';

function ItemDetailContainer({greeting}) {

  const {id} = useParams()
  const [product, setProducts] = useState({})
  
  useEffect(() => {
    let isMounted = true

    const fetchAndSetProduct = async () => {
      const productPromise = new Promise(resolve => {
        setTimeout(() => {
          resolve(PRODUCTS_ARRAY.filter(prodObj => prodObj.id.toString() === id))
        }, 1)
      })

      let productsArr = await productPromise
  
      if(isMounted) {
        setProducts(productsArr[0])
      }
    }

    fetchAndSetProduct()

    return () => {isMounted = false}

  }, [id])

  return (
    <div className="container">
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
