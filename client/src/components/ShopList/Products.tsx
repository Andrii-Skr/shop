import React from "react";
import { Product } from "src/Store/Reducers/shopsReducer";

const Products = ({ product }: { product: Product }) => {
  return (
    <div>
      <img src="" alt="" />
      <p>{product.name}</p>
      <p>{`Price ${product.price}`}</p>
      <button>Add to catr</button>
    </div>
  );
};

export default Products;
