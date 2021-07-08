import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList'
import PRODUCTS_ARRAY from '../../PRODUCTS_ARRAY'

function ItemListContainer({greeting}) {

  const {categoryId} = useParams()
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    let isMounted = true

    const fetchAndSetProducts = async () => {
      setProducts([])

      const productPromise = new Promise(resolve => {
        setTimeout(() => {

          if(categoryId) {
            resolve(PRODUCTS_ARRAY.filter(prodObj => prodObj.category === categoryId))
          }
          resolve(PRODUCTS_ARRAY)
        }, 1)
      })

      let productsArr = await productPromise
      
      if(isMounted) {
        setProducts(productsArr)
      }
    }

    fetchAndSetProducts()
    return () => {isMounted = false}
  }, [categoryId])

  return (
    <div className="item-list-container container">
      <h2>{categoryId ? `categoría/${categoryId}` : greeting}</h2>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
