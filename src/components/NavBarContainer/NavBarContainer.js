import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";

import NavBar from "../../components/NavBar/NavBar";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const db = getFirestore();
      const categoryCollection = await db.collection("categories").get();
      const categories = categoryCollection.docs.map((doc) => doc.data());
      setCategories(categories);
    };

    fetchAndSetCategories();
  }, []);

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
