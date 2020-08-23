import React from 'react'

export default function Basket({cart, removeFromCart}) {
    
    return (
        <div className="cart">
            <h1> CART </h1>
            {cart.length===0 ? "The cart is empty" : (
            <div> 
                you have {cart.length} items in the cart
                <div>
                    {cart.map( item =>  (
                    <React.Fragment  key={item.id} >
                    <ul className="cart-table">
                        <li> <img src={`/products/${item.sku}_2.jpg`} /></li>
                        <li>{item.title}</li>
                        <li>${item.price}</li>
                        <li> <button onClick={() => removeFromCart(item)}> remove </button></li>
                    </ul>
                    </React.Fragment> ))}
        
                </div>
            </div> ) } 
            
        </div>
    )
}
