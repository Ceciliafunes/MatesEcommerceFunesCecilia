import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <NavBar />


      <Routes>
        
        <Route path="/" element={<ItemListContainer titulo="BIENVENIDOS A TRAMICHI MATES" />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App

