import './App.scss'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import ProductItem from './components/ProductItem';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const cart = useSelector((state) => { return state.cart }); // Hämtar från Redux - store

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(true);
      }
    }

    getProducts();
  }, []); // Tom hakparentes innebär att denna funktion enbart körs vid sidladdning


  const productItemComponents = products.map((product) => { // Skapar upp komponenter för varje produkt i products-arrayen
    return <ProductItem item={ product } key={ product.id } />
  });

  const cartItems = cart.map((item) => {
    return <li>{ item.title }</li>
  });

  return (
    <div className="App">
      { error ? 
        <h2>Kunde inte ladda produkter, försök igen senare.</h2>
        : productItemComponents
      }

      <ul>
        { cartItems }
      </ul>
    </div>
  )
}

export default App
