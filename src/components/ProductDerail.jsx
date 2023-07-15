import React, { useEffect, useRef, useState } from 'react'
import { getSingleProduct } from '../services/APIservice'
import { useParams } from 'react-router-dom';

function ProductDerail() {
  const [product,setProduct] = useState({})
  const ref = useParams();
  console.log(ref)
  useEffect(() => {
       getSingleProduct(ref.id)
      .then(data => setProduct(data))
    }, [])
  
  return (
    <div className=''>
       <h1>{product.title}</h1>
       <p>{product.detail}</p>
       <p>{product.price}</p>
       <img src={product.image} alt="" />
    </div>
  )
}

export default ProductDerail