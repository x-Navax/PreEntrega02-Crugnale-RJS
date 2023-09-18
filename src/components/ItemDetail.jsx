

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail">
      <h2>{producto.title}</h2>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
      <img src={producto.image} alt={producto.title} width={200} />
      
    </div>
  );
};

export default ItemDetail;