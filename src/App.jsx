import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CarWidget';

function App() {
  return (
    <body>
    <CartProvider>
      <div>
        <h1 className='titulo'>Alto OutFit</h1>
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>

      <main className='main'></main>
      
      <footer className='footer'></footer>
      </CartProvider>
      
    </body>
  );
}

export default App;