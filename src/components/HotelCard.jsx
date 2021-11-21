import React from "react";
import { Link } from "react-router-dom";

function HotelCard (props) {
  return (
    <Link
    to={`/hotels/${props.hotelName}`}
    >
    <div className=" bg-yellow-200 m-3 w-40  h-40 ">
{props.hotelName}
      </div>
    
    </Link>

  )
}

export default HotelCard