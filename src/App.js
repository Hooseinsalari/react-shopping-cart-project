import './App.css';
import { Route, Router, Routes, Switch } from 'react-router-dom';

// components
import StorePage from './components/StorePage';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';

// context
import CartContextProvider from './context/CartContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <div className='App'>
          <Routes>
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/" element={<StorePage />} />
          </Routes>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
