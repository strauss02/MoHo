import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CallNowButton from "./CallNowButton";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function HotelPage () {
  let params = useParams()
  return (
    <div className=" fixed  top-0 left-0 h-screen w-screen bg-gray-700 bg-opacity-40 z-10 flex justify-center items-center ">
      <div className="w-5/6 h-5/6 bg-yellow-100 flex flex-col items-center rounded-3xl "
      >
        <Link 
        className="ml-auto mr-5 mt-2 text-2xl text-pink-500"
        to={`/hotels`}
        >
        <FontAwesomeIcon  icon={faTimes} />
        </Link>

         {params.hotelName}
        <CallNowButton/>
        </div>


    </div>
  )
}

export default HotelPage