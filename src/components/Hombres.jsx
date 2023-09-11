import { useEffect, useState } from "react";
import catalogo from "../components/catalogo.json";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";


function asyncMock(category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado = catalogo.filter((valor) => {
          return valor.category === category;
        });
        resolve(resultado);
      }, 1000);
    });
  }

  const Hombres = () =>{
      const [post, setPost] = useState()
      const {category} = useParams()
  
      useEffect(() => {
        asyncMock(category).then(res => setPost(res)) 
      }, [category]); 
    
  
      if (!post) return null /* se ejecuta l primer render de pantalla para poder usra el useEffets */
      return (
          <div className="catalog-container">
        <div className="product-list">
          {post.map((producto) => (
            <div className="product-ind" key={producto.id}>
              <h2>{producto.title}</h2>
              <p>Precio: ${producto.price}</p>
              <p>Categoría: {producto.category}</p>
              <img src={producto.image} alt={producto.title} width={200} />
              <div className="countSec">
                <ItemCount />
              </div>
            </div>
          ))}
        </div>
      </div>
         
            
         
      )
  
  }
  export default Hombres