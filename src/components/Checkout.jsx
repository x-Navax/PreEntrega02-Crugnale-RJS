import { useState } from 'react';
import CartItem from './CarWidget';
import CartDetails from './CartDetail';

function Checkout() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:', formData);
  };
  const [showCart, setShowCart] = useState(false);

  return (
    <div className='general-form'>
      <h2>Complete los datos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="Checkoutbtn" type="submit">Proceder al pago</button>
      </form>
      <button
          className="MostrarCarritoBtn"
          onClick={() => setShowCart(!showCart)}>
          Mostrar Carrito
        </button>
        {showCart && (
          <div className="detalle-carrito">
            { <CartDetails />}
          </div>
        )}
    </div>
    
  );
}

export default Checkout;