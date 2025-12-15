import React, { useRef, useEffect, useState } from 'react';

const GallerySection = () => {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const galleryRef = useRef(null);

  const galleryImages = [
    'https://readdy.ai/api/search-image?query=professional%20plumber%20fixing%20leak%20under%20sink%20with%20wrench%2C%20modern%20tools%2C%20clean%20workspace&width=400&height=300&seq=gallery2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=thermal%20camera%20detecting%20water%20leak%20in%20wall%2C%20professional%20leak%20detection%20equipment%20screen%20showing%20heat%20map&width=400&height=300&seq=gallery3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=waterproof%20sealant%20application%20bathroom%20tiles%2C%20professional%20hand%20applying%20silicone%2C%20clean%20finish&width=400&height=300&seq=gallery4&orientation=landscape',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">
            시공 <span className="text-yellow-400">갤러리</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            최첨단 장비와 전문 기술로 해결한 다양한 현장을 확인하세요.
          </p>
        </div>
        
        <div className={`mb-8 transform transition-all duration-1000 delay-300 ${galleryVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img 
              src="https://readdy.ai/api/search-image?query=modern%20building%20interior%20water%20damage%20restoration%2C%20clean%20and%20dry%20after%20repair%2C%20professional%20result&width=1200&height=500&seq=gallery-hero&orientation=landscape"
              alt="Professional Service"
              className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">전문적인 복구 서비스</h3>
              <p className="text-gray-200">누수 탐지부터 피해보상 복구까지 원스톱 해결</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const titles = [
              '배관 수리',
              '열화상 탐지',
              '방수 공사'
            ];
            
            return (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-xl group cursor-pointer bg-gray-900 shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 transform ${galleryVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${(index + 1) * 200}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image}
                    alt={titles[index]}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Service {index + 1}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-white font-semibold mb-2">{titles[index]}</h4>
                    <p className="text-gray-200 text-sm">완벽한 마감과 확실한 AS</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
