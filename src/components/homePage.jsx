import React from 'react'
import docImage from '../assets/images/doc.jpg';
import BookAppointement from './bookAppointement';

function HomePage() {
  return (
   <>
   <div className='flex gap-8 mt-1 bg-gradient-to-r from-blue-50 to-blue-300 py-12 shadow-md'>
        
      <section className='flex-3 ml-8'>
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
      Your Health, <span className="text-blue-500">Our Priority</span>
    </h1>
     <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mb-6">
  At H.M, we provide compassionate and high-quality healthcare for patients of all ages. 
  Our expert doctors and medical staff offer personalized care across multiple specialties, 
  from routine check-ups to advanced treatments. 
</p>
  <BookAppointement/>

      </section>
     <section className='flex-1 flex justify-center items-center mr-14'>
  <img 
    src={docImage} 
    alt="Doctor" 
    className='w-[400px] h-[420px] rounded-2xl object-cover shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500 ease-in-out'
  />
</section>

    </div>
    </> 
  )
}

export default HomePage
