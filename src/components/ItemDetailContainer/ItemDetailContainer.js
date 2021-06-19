import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer({greeting}) {

  const {id} = useParams()
  const [product, setProducts] = useState({})
  
  useEffect(() => {
    let isMounted = true

    const fetchAndSetProduct = async () => {
      const productPromise = new Promise(resolve => {
        setTimeout(() => {
          resolve(
            {
              id,
              title: 'Montblanc Meisterstuck Doue Geometry Classique Platinum Fountain Pen',
              description: 'The Meisterstück Doue Geometry Classique platinum fountain pen is both a timeless classic and a truly modern statement piece from Montblanc.',
              price: 750.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/13996/48/mbfpp1.png'
            }
          )
        }, 2000)
      })

      let productsArr = await productPromise
  
      if(isMounted) {
        setProducts(productsArr)
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
