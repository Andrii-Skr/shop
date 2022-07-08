import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="shop">
      <div className="shopHeader">
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/shoppingcart">Shopping Cart</Link>
          <Link to="/history">Hisrory</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
