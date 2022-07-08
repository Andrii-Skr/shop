import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import OrderHistory from "../OrderHistory/OrderHistory";
import ShopList from "../ShopList/ShopList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<ShopList />} />
          <Route path="/:shopname" element={<ShopList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/history" element={<OrderHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
