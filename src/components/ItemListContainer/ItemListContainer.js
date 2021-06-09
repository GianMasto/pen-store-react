import {useState, useEffect} from 'react'

import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList'

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const productPromise = new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              title: 'Montblanc Meisterstuck Doue Geometry Classique Platinum Fountain Pen',
              description: 'The Meisterstück Doue Geometry Classique platinum fountain pen is both a timeless classic and a truly modern statement piece from Montblanc.',
              price: 750.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/13996/48/mbfpp1.png'
            },
            {
              id: 2,
              title: 'Montblanc 149 Meisterstuck Gold Trim Fountain Pen',
              description: 'Introducing the iconic Meisterstück 149, the largest Fountain Pen made by Montblanc. This Montblanc Fountain Pen has a Black Resin Barrel and Gold Trim',
              price: 720.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/3984/48/104693.png'
            },
            {
              id: 3,
              title: 'Montblanc Starwalker Doué Fountain Pen',
              description: 'This Montblanc Starwalker Doue FountainPen features a platinum-coated and distinct space rocket design, making this the ultimate unique, special gift.',
              price: 515.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/8373/48/starwalker-doue-fp.png'
            },
            {
              id: 4,
              title: 'Montblanc Meisterstuck Geometry Solitaire Platinum LeGrand Fountain Pen',
              description: 'This platinum LeGrand fountain pen from the Meisterstuck Solitaire Geometric collection is a true luxury statement piece from Montblanc.',
              price: 1285.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/1436/48/111916-montblanc-meisterstuck-geometry-solitaire-legrand-fountain-pen-1536155599.png'
            },
            {
              id: 5,
              title: 'Montblanc Great Characters John F. Kennedy Fountain Pen',
              description: 'The Montblanc Great Characters fountain pen is connected to John F Kennedy and is champagne gold coated, making this a unique addition to your collection.',
              price: 845.00,
              pictureUrl: 'https://www.penshop.co.uk/thumbnails/0/6908/48/kennedy-vulpen-schuin-1.png'
            },
  
          ])
        }, 2000)
      })
  
      setProducts(await productPromise)
    }

    fetchAndSetProducts()
  }, [])

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
