import React from 'react';

function DoctorsPage({ image, name, specialization }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-64 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover  object-top"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500 mt-2">{specialization}</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorsPage;
