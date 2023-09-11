import { Link } from "react-router-dom";
import CartItem from "./CarWidget";


const NavBar = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link to="/" className='nav-link'>
            Inicio
            </Link>
          </li>
          <li>
            <Link to="/Catalogo" className='nav-link'>
            Catalogo
            </Link>
          </li>
          <li>
            <Link to="/Hombres" className='nav-link'>
            Hombres
            </Link>
          </li>
          <li>
            <Link to="/Joyas" className='nav-link'>
            Joyas
            </Link>
          </li>
        </ul>
      </nav>
      <CartItem />
    </header>
  );
};

export default NavBar ;