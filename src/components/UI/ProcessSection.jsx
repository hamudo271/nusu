import React from 'react';

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          체계적인 <span className="text-blue-500">누수 탐지</span><br />
          <span className="text-blue-500">프로세스</span>
        </h2>
        
        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          과학적인 장비와 체계적인 절차로 누수의 원인을 정확하게 찾아냅니다.
        </p>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[ 
              { 
                step: '01', 
                title: '정밀 탐지', 
                description: '청음식, 가스식, 열화상 등 최첨단 장비로 누수 지점 포착', 
                icon: 'ri-search-line',
                image: 'https://readdy.ai/api/search-image?query=modern%20pipeline%20leak%20detection%20with%20digital%20sensor%20equipment%2C%20professional%20technician%20analyzing%20data%20on%20screen%2C%20industrial%20setting&width=300&height=200&seq=process1&orientation=landscape'
              },
              { 
                step: '02', 
                title: '확실한 시공', 
                description: '최소한의 파쇄로 배관 교체 및 수리 진행', 
                icon: 'ri-tools-line',
                image: 'https://readdy.ai/api/search-image?query=professional%20plumber%20repairing%20pipe%20with%20precision%20tools%2C%20construction%20site%20safety%20gear%2C%20focused%20work&width=300&height=200&seq=process2&orientation=landscape'
              },
              { 
                step: '03', 
                title: '마감 및 확인', 
                description: '공압 검사로 재누수 여부 확인 후 깔끔한 미장 마감', 
                icon: 'ri-checkbox-circle-line',
                image: 'https://readdy.ai/api/search-image?query=clean%20finished%20bathroom%20renovation%20after%20repair%2C%20modern%20tiles%2C%20perfect%20condition%2C%20high%20quality%20interior&width=300&height=200&seq=process3&orientation=landscape'
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 w-12 h-12 bg-blue-500 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-blue-500/10 rounded-full">
                      <i className={`${process.icon} text-blue-500 text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">탐지</span>
            </div>
            <div className="w-16 h-0.5 bg-blue-500/50"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">시공</span>
            </div>
            <div className="w-16 h-0.5 bg-blue-500/50"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">완료</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
