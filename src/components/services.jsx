import React from 'react'
import dental from '../assets/images/dental.jpg'
import cardio from '../assets/images/cardio.jpg'
import skin from '../assets/images/skin.jpg'
import ServicesPage from './servicesPage'

function Services() {
  const services = [
    { image: dental, service: 'Dental Services', desc: 'Comprehensive dental check-ups, cleaning, and treatments to keep your smile healthy.' },
    { image: cardio, service: 'Cardiology', desc: 'Our cardiology team specializes in diagnosing and treating heart conditions.' },
    { image: skin, service: 'Dermatology', desc: 'Our dermatology experts offer personalized skin treatments for all ages.' },
    { image: cardio, service: 'Cardiology', desc: 'Our cardiology team specializes in diagnosing and treating heart conditions.' },
    { image: skin, service: 'Dermatology', desc: 'Our dermatology experts offer personalized skin treatments for all ages.' },
    { image: cardio, service: 'Cardiology', desc: 'Our cardiology team specializes in diagnosing and treating heart conditions.' },
    
  ];

  return (
    <div className="py-12 bg-blue-50">
      <h1 className="text-4xl font-extrabold text-center text-blue-500 mb-6 mt-8 tracking-wide">
        Our Services
      </h1>
      <div className="w-25 h-1 bg-blue-400 mx-auto mb-10 rounded"></div>

      {/* cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:px-16">
        {services.map((serv, index) => (
          <ServicesPage
            key={index}
            img={serv.image}
            service={serv.service}
            description={serv.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
