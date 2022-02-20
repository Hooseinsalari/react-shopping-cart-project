import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// components
import StorePage from './components/StorePage';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import FavoriteProducts from './components/FavoriteProducts';

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
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/products" element={<StorePage />} />
            <Route path='/favorite' element={<FavoriteProducts />} />
            <Route path="/" element={<HomePage />} />
            <Route path='/*' element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
