import { useRef } from "react"
import { useState } from "react"



const ItemCount = () => {

    const [count, setCount] = useState(1)

    return (
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
                <button className="alCarrito">Agregar al carrito</button>
                


            </section>

    )
}
export default ItemCount