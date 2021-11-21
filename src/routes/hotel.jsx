import React from "react";
import { useParams } from "react-router";

function Hotel () {
  let params = useParams()
  return (
    <h2>Hotel {params.hotelName}</h2>
  )
}

export default Hotel