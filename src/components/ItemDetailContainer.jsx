import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemCount from './ItemCount';


const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
 

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'productos', id); 

      try {
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          
          console.log('El producto no existe');
        }
      } catch (error) {
        
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="catalog-container">
      <div className='product-Detail'>
        {product ? (
        <div className="product-indDetail" key={product.id}>
          <h2>{product.nombre}</h2>
          <img src={product.imagen} alt={product.nombre} />
          <h3>$ {product.precio}</h3>
          <h4>{product.descripcion}</h4>
          <h5>{product.categoria}</h5>
          <ItemCount item={product} />
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
      </div>
      
    </div>
  );
};

export default ItemDetailContainer;