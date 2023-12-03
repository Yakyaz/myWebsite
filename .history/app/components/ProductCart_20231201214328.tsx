"use client";
import React, { useState } from "react";

const ProductCart = () => {
  const [value, setValue] = useState(0);
  const addProduct = () => {
    setValue(value + 1);
  };

  return (
    <main className="text-black">
      <div className="text-black">ProductCart</div>
      <button
        onClick={addProduct}
        className="text-black bg-black border border-black"
      >
        add
      </button>
    </main>
  );
};

export default ProductCart;
