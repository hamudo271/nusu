import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-primary-dark overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-cd2c2cef70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-dark/80 to-primary/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary-light text-sm font-semibold mb-6 animate-fade-in-up">
          부산/경남 누수탐지 전문
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
          누수탐지 / 배관공사 / 방수공사<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">누수제로가 해결합니다</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
          정확한 원인 분석과 최신 장비로 완벽하게 해결해 드립니다.<br className="hidden md:block" />
          믿고 맡길 수 있는 누수제로입니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button to="/contact" variant="primary" className="text-lg px-10 py-4 bg-secondary hover:bg-secondary-light shadow-lg hover:shadow-secondary/50 transition-all transform hover:-translate-y-1">
            무료 견적 문의
          </Button>
          <Button to="/services" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all">
            서비스 자세히 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
