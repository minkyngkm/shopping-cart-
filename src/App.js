import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';

function App() {
  const [products, setProducts] = useState([])
  const [ cart, setCart ] =useState([])

  useEffect(() => {
      const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/products');
      setProducts(result.data)
    }
    fetchData()
  }, [])

    // fetch()를 사용했을때 
    // fetch('http://localhost:8000/products')
    // .then( res => res.json() )
    // .then( data => setProducts( data ))
  
  const addToCart = ( product ) =>{
    setCart([...cart, product])
    console.log("we are in the cart ")
  }
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter( product => product.id !== productToRemove.id))
  }
  return (
    <div className="App">
      <h1> Shopping Cart Application </h1>
      <div className="wrapper">
        <Products products={products} addToCart={addToCart}></Products>
        <Basket cart={cart} removeFromCart={removeFromCart}></Basket>
      </div>
    </div>
  );
}

export default App;
