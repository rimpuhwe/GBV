import React from "react";
import gray from "../../assets/PINK.png";
import './Header.css'
import { Link } from "react-router-dom";
import List from "../List/List";

const subpage1 = ['Volunteer', ' Donate', 'Partnership'];
const subpage2 = ['How it work', 'Get Started', 'Help'];

function Header() {
  return (
    <div>
      <header className=" flex justify-between items-center p-0 w-full text-white ">
        <div className="w-25 header-img" style={{ marginLeft: "30px" }}>
          <img src={gray} alt="gray-logo" className="w-full" />
        </div>
        <nav className="w-50/100 ">
          <ul className="flex justify-evenly">
            <li><Link to='/'>Home</Link></li>
            <li> <Link to='/About-us'>About Us</Link></li>
            <li className="dropdown">
              Our Solution
              <List listProps={subpage2}/>
              </li>
            <li>Resources</li>
            <li className="dropdown">
              Get Involved
              <List listProps={subpage1}/>

            </li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
