import React from 'react'
import doc1 from '../assets/images/doc1.jpg';
import doc2 from '../assets/images/doc2.jpg';
import doc3 from '../assets/images/doc3.jpg';
import DoctorsPage from './doctorsPage';

function Doctors() {
  const doctors = [
    { image:doc1,name: 'Nadege', specialization: 'Dermatologist' },
    { image:doc3,name: 'John', specialization: 'Cardiologist' },
    { image:doc2,name: 'Grace', specialization: 'Pediatrician' }
  ];
  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Our Doctors
      </h1>
      
    <div className='flex gap-6 justify-center mt-8'>
        
     {doctors.map((doc,index)=>(
        <DoctorsPage
          key={index}
          image={doc.image}
          name={doc.name}
          specialization={doc.specialization}
        />
     ))}

    </div>
    </div>
  )
}

export default Doctors