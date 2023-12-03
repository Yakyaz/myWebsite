"use client";
import React, { useState } from "react";

const ProductCart = () => {
  const [value, setValue] = useState(0);
  const addProduct = () => {
    setValue(value + 1);
  };

  return (
    <div className="text-black">
      ProductCart
      <button
        onClick={addProduct}
        className="text-black bg-black border border-black"
      >
        add
      </button>
    </div>
  );
};

export default ProductCart;
