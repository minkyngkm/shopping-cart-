import React from 'react'

export default function Products({ products, addToCart }) {
    const productItems = products.map(product => (

            <div className="single-product" key={product.id}>
                <div>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.id} />
                </div>
                <p>{product.title} </p>
                <p> ${product.price}</p>
                <button onClick={() => addToCart(product)}> ADD TO CART</button>
            </div>
    ))
    return (
        <div className="product-container">
            {productItems}
        </div>
    )
}
