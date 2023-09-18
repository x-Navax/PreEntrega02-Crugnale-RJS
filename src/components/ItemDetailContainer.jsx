import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import catalogo from "../components/catalogo.json";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const selectedProduct = catalogo.find((producto) => producto.id === Number(itemId));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [itemId]);

  return (
    <div className='detail-ind'>
      {product ? (
        <div className='item-detail'>
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Categoría: {product.category}</p>
          <img src={product.image} alt={product.title} width={200} />
          
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;