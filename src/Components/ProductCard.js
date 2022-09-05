import React from 'react'

const ProductCard = ({product}) => {
  console.log(product.product)
  return (
    <div key={product.product.id} className='product-card-container' >
        <img src={product.product.img} alt={product.product.name} style={{width: '300px',height: '300px',objectFit: 'cover'}}/>
        
        <div style={{padding: "15px"}}>
        <div className='typo1'>{product.product.name} </div>
        <div className='typo2'>Price : {product.product.price}</div>
        <div className='typo2' style={{marginBottom: "10px"}}>Quantity : {product.quantity}</div>
        <button>BUY NOW</button>
          </div>
    </div>
  )
}

export default ProductCard