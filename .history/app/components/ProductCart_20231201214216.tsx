"use client";
import React, { useState } from "react";

const ProductCart = () => {
  const [value, setValue] = useState(0);
  const addProduct = () => {
    setValue(value + 1);
  };

  return (
    <main>
      <div className="text-black">ProductCart</div>
      <button onClick={addProduct}>add</button>
    </main>
  );
};

export default ProductCart;
