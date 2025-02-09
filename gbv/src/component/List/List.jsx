import React from "react";
import './List.css';
import { Link } from "react-router-dom";

function List({listProps}) {
  return (
    <ul className='bg-gray-400 z-2 absolute text-center w-35 list-container'>
      {listProps.map((list) => (
        <li className="hover:bg-purple-400 list" key={list}><Link to={list}>{list}</Link></li>
      ))}
    </ul>
  );
}

export default List;
