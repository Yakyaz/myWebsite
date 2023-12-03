'use client'
import React, { useState } from 'react'

const ProductCart = () => {

  const [value, setValue] = useState(0);
  const addProduct = () =>{
    setValue(value + 1);
  }

  return (
    <div className='text-black'>ProductCart</div>
    <button onClick={addProduct}>add</button>
  )
}

export default ProductCart