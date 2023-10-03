import React, { useContext } from "react";
import { CartContext } from "./CarWidget";

const CartDetails = () => {
    const { cart, removeItem } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };
  const totalValue = cart.reduce((total, item) => total + item.precio * item.cnt, 0);

  return (
    <div className="cart-details">
      <h2>Detalle del Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.nombre}</p>
            <p>Cantidad: {item.cnt}</p>
            <p>Precio: ${item.precio * item.cnt}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Valor Total del Carrito: ${totalValue}</p>
    </div>
  );
};

export default CartDetails;