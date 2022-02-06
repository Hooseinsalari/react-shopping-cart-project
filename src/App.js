import './App.css';

// components
import StorePage from './components/StorePage';

// context
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <div className="App">
        <StorePage />
      </div>
    </ProductsContextProvider>
  );
}

export default App;
