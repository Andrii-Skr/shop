import React, { useEffect } from "react";
import { AppDispatch, shopThunk } from "src/Store/Thunk/shop-thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectShops } from "src/Store/store";
import ShopBtn from "./ShopBtn";
import Products from "./Products";
//import Dashboard from "../Dashboard/Dashboard";
import "./ShopList.css";

const ShopList = () => {
  const shopsList = useSelector(selectShops);
  const productsList = useSelector(selectProducts);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(shopThunk());
  }, []);
  return (
    <div className="shopContent">
      <aside className="shopAside">
        <h3>Shops:</h3>
        {shopsList.map((shop) => {
          return <ShopBtn key={shop._id} shop={shop} />;
        })}
      </aside>
      <div className="shopMain">
        {productsList.map((product) => {
          return <Products key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ShopList;
