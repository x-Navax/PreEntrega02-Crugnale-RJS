import { useContext, useRef } from "react"
import { useState } from "react"
import { CartContext } from "./CarWidget";
import { Link } from "react-router-dom";

const ItemCount = ({item}) => {

    const [count, setCount] = useState(1);
    const {cart, addItem} = useContext(CartContext)

    

    return (
        <>
         <section className="ItemCount">
                <button className="min" onClick={()=> setCount(count => count - 1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>

                <p className="num">{count}</p>

                <button className="plus" onClick={()=> setCount(count => count + 1)} >                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </button>
                <button className="alCarrito" onClick={()=> {addItem(item, count)}}>Agregar al carrito</button>
                <div>
                <Link to="/checkout">
                <button className="alCarrito" onClick={() =>{}}>
                    Finalizar compra
                </button>
                </Link>
                </div>

            </section>

            

                
        </>
           
    )
}
export default ItemCount