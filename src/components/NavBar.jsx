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
            <Link to="/category/Hombres" className='nav-link'>
            Hombres
            </Link>
          </li>
          <li>
            <Link to="/category/Joyas" className='nav-link'>
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