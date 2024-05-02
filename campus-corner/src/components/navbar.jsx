import React from "react";
import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="hd">
        <h2>CAMPUS CORNER</h2>
      </a>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="icon">
          <MdSearch />
        </div>
      </div>
      <div className="nav">
        <NavLink to={"/Sellform"} className="sell-button">
          <span>+SELL</span>
        </NavLink>
      </div>
    </div>
  );
}