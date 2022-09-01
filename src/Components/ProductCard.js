import React from 'react'

const ProductCard = ({product}) => {
  console.log(product.product)
  return (
    <div key={product.product.id} style={{border: "1px solid black",width: "fit-content", height: "fit-content", padding: "10px", borderRadius: "10px"}} >
        <img src={product.product.img} alt={product.product.name} style={{maxWidth: "200px", maxHeight: "400px"}}/>
        <h1>{product.product.name} </h1>
        <h3>Price : {product.product.price}</h3>
        <h3>Quantity : {product.quantity}</h3>
        <button>BUY NOW</button>
    </div>
  )
}

export default ProductCard