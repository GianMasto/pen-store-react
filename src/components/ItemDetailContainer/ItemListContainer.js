import {useState, useEffect} from 'react'

import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer({greeting}) {

  const [product, setProduct] = useState({})
  
  useEffect(() => {
    const fetchAndSetProduct = async () => {
      const productPromise = new Promise(resolve => {
        setTimeout(() => {
          resolve(
            {
              id: 1,
              title: 'Montblanc Meisterstuck Doue Geometry Classique Platinum Fountain Pen',
              description: 'The Meisterstück Doue Geometry Classique platinum fountain pen is both a timeless classic and a truly modern statement piece from Montblanc.',
              price: 750.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/13996/48/mbfpp1.png'
            }
          )
        }, 2000)
      })
  
      setProduct(await productPromise)
    }

    fetchAndSetProduct()
  }, [])

  return (
    <div className="container">
      <ItemDetail items={product} />
    </div>
  );
}

export default ItemDetailContainer;
