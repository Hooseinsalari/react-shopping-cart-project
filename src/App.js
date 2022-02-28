import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// components
import StorePage from "./components/StorePage";
import ShopCart from "./components/ShopCart";
import Navbar from "./components/shared/Navbar";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import FavoriteProducts from "./components/FavoriteProducts";
import About from "./components/About";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products" element={<StorePage />} />
          <Route path="/favorite" element={<FavoriteProducts />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
