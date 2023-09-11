import './App.css'
import NavBar from "./components/NavBar"
import ProducList from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './components/Catalogo'
import Hombres from './components/Hombres'





function App() {
  
   
  return (
<body>
   <div>
      <h1 className='titulo'>Alto OutFit</h1>
    </div>
    <BrowserRouter>
    <NavBar>
    </NavBar>    
    <Routes>
    <Route exact path='/' element={<ProducList />}></Route>
    <Route exact path='/Catalogo' element={<Catalogo />}></Route>
    <Route exact path='/Hombres/:category' element={<Hombres />}></Route>
    </Routes>
    </BrowserRouter>
    

    <main className='main'>
      
    
    </main>

    <footer className='footer'>

    </footer>

</body>

    
  )
}

export default App
