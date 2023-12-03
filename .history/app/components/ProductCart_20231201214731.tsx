"use client";
import React, { useState } from "react";

const ProductCart = () => {
  return (
    <div className="text-black">
      <p> ProductCart</p>
      <button onClick={() => console.log("click")}>Add to Cart</button>
    </div>
  );
};

export default ProductCart;
