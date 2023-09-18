import ItemCount from "./ItemCount"
import { useState, useEffect } from "react";
import catalogo from "../components/catalogo.json";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function asyncMock() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
     
      const resultado = catalogo; 
      resolve(resultado);
    }, 1000); 
  });
}
asyncMock()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

  const ItemListContainer = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await asyncMock();
          setPost(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [id]);
  
    if (!post) return null;
  
    const filteredProductos = id
      ? post.filter((producto) => producto.category === id)
      : post;
  
    return (
      <div className="catalog-container">
        <div className="product-list">
          {filteredProductos.map((producto) => (
            <div className="product-ind" key={producto.id}>
              <h2>{producto.title}</h2>
              <p>Precio: ${producto.price}</p>
              <p>Categoría: {producto.category}</p>
              <img src={producto.image} alt={producto.title} width={200} />
              <Link className="detalles" to={`/item/${producto.id}`}>Ver detalles</Link>
              <div className="contador">
                <div className="countSec">
                <ItemCount />
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ItemListContainer;