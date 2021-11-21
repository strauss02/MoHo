import React from "react";
import { useParams } from "react-router";

function Hotel () {
  let params = useParams()
  return (
    <div className=" fixed  top-0 left-0 h-screen w-screen bg-gray-700 bg-opacity-40 z-10 flex justify-center items-center ">
      <div className="w-5/6 h-5/6 bg-yellow-100"
      >Hotel {params.hotelName}</div>

    </div>
  )
}

export default Hotel