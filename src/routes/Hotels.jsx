import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import hotels from '../assets/hotels.json'


function Hotels() {
  let hotelsCopy = [...hotels]
  return (
    <div>
      <nav>
      { hotelsCopy.map(hotel => (
        <NavLink 
        className={({isActive}) => isActive? "text-pink-500": "text-green-800" }
        to= {`/hotels/${hotel['שם']}`}
        key = {hotel['שם']}
        >
          {hotel['שם']}
        </NavLink>
      ))}
      </nav>
        <Outlet/>
    </div>
  )
}

export default Hotels