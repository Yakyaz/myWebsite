"use client";
import React, { useState } from "react";

const ProductCart = () => {
  const [value, setValue] = useState(0);
  const addProduct = () => {
    setValue(value + 1);
  };

  return (
    <div className="text-black">
      <p> ProductCart</p>
      <button
        onClick={addProduct}
        className="text-white bg-black border border-black"
      >
        add
      </button>
      <p>{value}</p>
    </div>
  );
};

export default ProductCart;
