import React from 'react'
import { useState } from 'react'

function BookAppointement() {
    const[isOpen,setIsOpen]=useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
    };
  return (
    <div className=" mt-10">

        {/* book appointement button */}
         <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
      >
        {isOpen ? 'Close Form' : 'Book Appointment'}
      </button>
     
         {/* Appointment Form */}
      {isOpen && (
        <div className="mt-6 bg-blue-50 p-6 rounded-lg shadow-md w-[90%] md:w-[50%] mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Book an Appointment</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Preferred Doctor"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default BookAppointement
