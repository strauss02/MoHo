import React from "react";
import { Link, Outlet } from "react-router-dom";
import hotels from '../assets/hotels.json'


function Leonardo() {
  let hotelsCopy = [...hotels]



  return (
    <div>
      <nav>
      { hotelsCopy.map(hotel => (
        <Link 
        to= {`/leonardo/${hotel['שם']}`}
        key = {hotel['שם']}
        >
          {hotel['שם']}
        </Link>
      ))}
      </nav>
        <Outlet/>
    </div>
  )
}

export default Leonardo