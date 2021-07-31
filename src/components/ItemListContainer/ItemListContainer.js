import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    let isMounted = true;

    const fetchAndSetProducts = async () => {
      setProducts([]);
      setError();

      const db = getFirestore();
      let itemCollection = db.collection("items");

      if (categoryId) {
        const categoryRef = db.collection("categories").doc(categoryId);
        itemCollection = itemCollection.where("categoryId", "==", categoryRef);
      }
      try {
        const querySnaptshot = await itemCollection.get();
        if (querySnaptshot.size === 0) {
          throw new Error("No hay resultados");
        }
        if (isMounted) {
          setProducts(
            querySnaptshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      } catch ({ message }) {
        setError(message);
      }
    };

    fetchAndSetProducts();
    return () => {
      isMounted = false;
    };
  }, [categoryId]);

  return (
    <div className="item-list-container container">
      <h2>{categoryId ? `category/${categoryId}` : "Products"}</h2>
      {error ? <p>Error: {error}</p> : <ItemList items={products} />}
    </div>
  );
}

export default ItemListContainer;
