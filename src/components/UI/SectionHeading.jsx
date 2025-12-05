import React from 'react';

const SectionHeading = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="block text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-blue-600 rounded ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
