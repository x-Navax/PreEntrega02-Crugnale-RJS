
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsRef = collection(db, "productos");
    const q = id ? query(productsRef, where("categoria", "==", id)) : productsRef;

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size !== 0) {
          setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, [id]);

  return (
    <div className="catalog-container">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-ind" key={product.id}>
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} />
            <h3>$ {product.precio}</h3>
            <h5>{product.categoria}</h5>
            <Link className="detalles" to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;