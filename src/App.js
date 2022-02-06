import './App.css';

// components
import StorePage from './components/StorePage';
import CartContextProvider from './context/CartContextProvider';

// context
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <div className="App">
          <StorePage />
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
