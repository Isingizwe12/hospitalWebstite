import React from 'react'
import hospitalImage from '../assets/images/hospital.jpg'

function About() {
  return (
    <div>
        <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50 to-blue-200 py-18 px-8 md:px-16">
  {/* Text Section */}
  <div className="flex-1 text-gray-700 md:pr-8">
    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-500 mb-4">About Us</h1>
    <div className="border-b-4 border-blue-400 w-24 mb-6"></div>
    <p className="text-lg leading-relaxed mb-4">
      At H.M Hospital, we are dedicated to providing compassionate, patient-centered healthcare.
      Our experienced medical team ensures every individual receives personalized attention and 
      the highest quality treatment. From preventive care to advanced medical procedures, 
      we combine modern technology with a human touch to promote your well-being.
    </p>
    <p className="text-lg leading-relaxed">
      Our mission is to create a healthier community by making healthcare accessible, 
      efficient, and caring for everyone — because your health is our priority.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 mt-10 md:mt-0">
    <img 
      src={hospitalImage} 
      alt="Hospital" 
      className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
    />
  </div>
</section>

    </div>
  )
}

export default About
