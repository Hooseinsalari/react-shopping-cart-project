import './App.css';
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <div className="App">
        hello world
      </div>
    </ProductsContextProvider>
  );
}

export default App;
