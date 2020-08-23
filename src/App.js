import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';
import Filter from './components/Filter';


function App() {
  const [products, setProducts] = useState([])
  const [ cart, setCart ] =useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [ size, setSize ] = useState("")

  useEffect(() => {
      const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/products');
      setProducts(result.data)
      setFilteredProducts(result.data)
    }
    fetchData()
  }, [])

    // fetch()를 사용했을때 
    // fetch('http://localhost:8000/products')
    // .then( res => res.json() )
    // .then( data => setProducts( data ))
    
  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }
  // const listItems = (size) => {
  //   console.log(size)
  // }
  // 이렇게 하면 출력이 한박자 늦게됨. 이걸 해결하기 위해서 useEffect()

  useEffect(() => {
    setProducts( 
      (size !== "")? filteredProducts.filter( item => item.availableSizes.indexOf(size) >= 0 )
      : filteredProducts
    )
  }, [filteredProducts,size])

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
        <div>
        <Filter count={products.length} handleSizeChange={handleSizeChange}></Filter>
        <Products products={products} addToCart={addToCart}></Products>
        </div>
        <Basket cart={cart} removeFromCart={removeFromCart}></Basket>
      </div>
    </div>
  );
}

export default App;
