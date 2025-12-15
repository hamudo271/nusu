import React, { useRef, useEffect, useState } from 'react';

const StatsSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[ 
            { number: '500+', label: '해결한 누수', icon: 'ri-drop-line' },
            { number: '20+', label: '년의 경력', icon: 'ri-time-line' },
            { number: '50+', label: '전문 기술자', icon: 'ri-user-star-line' },
            { number: '100%', label: '고객 만족', icon: 'ri-emotion-happy-line' },
          ].map((stat, index) => (
            <div key={index} className={`transform transition-all duration-700 delay-${index * 200} ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}`}>
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-yellow-400 text-3xl`}></i>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
