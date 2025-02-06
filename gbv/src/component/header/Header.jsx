import React from "react";
import gray from "../../assets/PINK.png";
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center p-0 w-full text-white ">
        <div className="w-25" style={{ marginLeft: "30px" }}>
          <img src={gray} alt="gray-logo" className="w-full" />
        </div>
        <nav className="w-50/100 ">
          <ul className="flex justify-evenly">
            <li><Link to='/'>Home</Link></li>
            <li>About Us</li>
            <li>Our Solution</li>
            <li>Resources</li>
            <li>Get Involved</li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
