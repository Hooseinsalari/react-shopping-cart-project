import './App.css';
import { Route, Router, Routes, Switch } from 'react-router-dom';

// components
import StorePage from './components/StorePage';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';
import HomePage from './components/HomePage';

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
            <Route path="/store" element={<StorePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <h1></h1>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
