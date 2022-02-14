import './App.css';
import { Route, Routes, Redirect, Navigate } from 'react-router-dom';

// components
import StorePage from './components/StorePage';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';

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
            <Route path='/details/:id' element={<ProductDetails />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path='/*' element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
