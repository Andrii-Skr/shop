import React from "react";
import { useDispatch } from "react-redux";
import { Shops } from "src/Store/Reducers/shopsReducer";
import { AppDispatch, productThunk } from "src/Store/Thunk/shop-thunk";
import { useNavigate, useParams } from "react-router-dom";

const ShopBtn = ({ shop }: { shop: Shops }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let { shopname } = useParams();

  console.log(shopname);

  return (
    <button
      onClick={() => {
        dispatch(productThunk(shop._id));
        navigate(`/${shop.name}`);
      }}
    >
      {shop.name}
    </button>
  );
};

export default ShopBtn;
