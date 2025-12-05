import React from 'react';
import { ArrowRight } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ icon: Icon, title, description, link, image }) => {
  return (
    <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="w-12 h-12 bg-secondary/90 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
            <Icon className="text-white" size={24} />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
            {description}
          </p>
          
          {link && (
            <span className="inline-flex items-center text-secondary-light font-bold text-sm uppercase tracking-wider">
              자세히 보기 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
