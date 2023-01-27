import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">
          <h1>Books App</h1>
        </Link>
        <Link to="/favorites">
          <h3>Favorites</h3>
        </Link>
    </div>
  );
}

export default Navbar;
