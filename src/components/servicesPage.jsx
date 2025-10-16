function ServicesPage({ img, service, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-101 duration-300 p-6 w-72 text-center">
      <img 
        src={img} 
        alt={service} 
        className="w-24 h-24 mx-auto mb-4 object-cover rounded-full border-4 border-blue-200"
      />
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{service}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServicesPage;
