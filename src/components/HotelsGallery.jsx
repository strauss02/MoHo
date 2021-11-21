import React from "react";
import hotels from '../assets/hotels.json'
import HotelCard from "./HotelCard";

function HotelsGallery() {
  let hotelsCopy = [...hotels]
  const hotelCards = hotelsCopy.map(hotel => {
    return (
      <HotelCard
        hotelName = {hotel['שם']}
        key = {hotel['שם']}
      />
    )
  })

  return (
    <main className="flex flex-wrap justify-center w-11/12 h-5/6">
      {hotelCards}
    </main>
  )
}

export default HotelsGallery