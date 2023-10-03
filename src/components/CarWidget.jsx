import { createContext, useContext, useState } from "react"


const IconCart = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>


export const CartContext = createContext()

export function CartProvider({children}){
  const [cart, setCart] = useState([])

  function addItem(item, cnt){
    setCart([...cart, {...item, cnt}])
  };
  
  function removeItem(itemId) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  }

  return <CartContext.Provider value={{cart, addItem, removeItem}}>
    {children}
  </CartContext.Provider>
}

const CartItem = () => {
  const { cart } = useContext(CartContext); 
  
  const totalItems = cart.reduce((total, item) => total + item.cnt, 0);

  return (
    <span className="caritem">
      {IconCart} <span>{totalItems}</span>
    </span>
  );
};

export default CartItem;
