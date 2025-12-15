import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://public.readdy.ai/ai/video_res/fe98c605-2ca1-44c8-92d8-af31996aef3f.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-16">
        <div className="flex items-center justify-center">
          <div className={`space-y-6 transform transition-all duration-1000 text-center ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              최고의 기술력<br />
              <span className="text-yellow-400">누수 탐지</span> 및 <span className="text-yellow-400">공사</span><br />
              전문 업체
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              20년 경력의 전문가가 최첨단 장비로 정확하게 진단하고 완벽하게 해결해 드립니다.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer rounded">
                  무료 상담 예약
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
