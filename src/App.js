import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(  () => {
      const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/products');
      setProducts(result.data)
    }
    fetchData()
  }
    // fetch()를 사용했을때 
    // fetch('http://localhost:8000/products')
    // .then( res => res.json() )
    // .then( data => setProducts( data ))

    //이렇게 axios를 사용했을땐 alert가 떴다.
    // (1) 
    // axios.get('http://localhost:8000/products')
    // .then (res=> res.data)
    // (2) 
    // consts result = axios.get('http://localhost:8000/products')
    // return result.data
  , []) 
  return (
    <div className="App">
      <h1> Shopping Cart Application </h1>
      <Products products={products}></Products>
    </div>
  );
}

export default App;
