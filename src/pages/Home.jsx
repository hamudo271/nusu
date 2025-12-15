import React, { useEffect } from 'react';
import HeroSection from '../components/UI/HeroSection';
import StatsSection from '../components/UI/StatsSection';
import ProcessSection from '../components/UI/ProcessSection';
import GallerySection from '../components/UI/GallerySection';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <HeroSection />
      <StatsSection />
      
      {/* Services Preview Section (Inline for now, can be extracted later) */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-500">주요 서비스</span><br />
              안내
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              가정집부터 대형 건물까지, 모든 종류의 누수 문제를 해결해 드립니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-home-3-line', title: '아파트/주택 누수', desc: '아랫집 천장 물샘, 수도세 폭탄 해결' },
              { icon: 'ri-building-line', title: '상가/건물 누수', desc: '영업 배상 책임 보험 처리 지원' },
              { icon: 'ri-drop-line', title: '방수 공사', desc: '옥상, 외벽, 화장실 완벽 방수' },
              { icon: 'ri-tools-line', title: '배관 교체', desc: '노후된 수도 배관 전체 교체' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-blue-500 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      
      {/* About Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                부산/경남 <span className="text-blue-500">대표 누수 업체</span><br />
                <span className="text-blue-500">누수제로</span>입니다
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                20년간 쌓아온 현장 경험과 노하우로 고객님의 고민을 시원하게 해결해 드립니다.
                단 한 번의 시공으로 만족스러운 결과를 약속드립니다.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-blue-500 mb-2">전문성</div>
                  <div className="text-gray-300">국가 기술 자격 보유</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-500 mb-2">신뢰성</div>
                  <div className="text-gray-300">공사 후 2년 무상 A/S</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731117-104f885e3cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80"
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-gray-900 px-4 py-2 rounded-full font-semibold">
                Since 2004
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            누수 문제로 <span className="text-blue-500">고민</span>이신가요?<br />
            <span className="text-blue-500">지금 바로 상담</span>하세요
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            친절한 상담과 빠른 출동으로 불편함을 최소화해 드리겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-gray-900 px-8 py-4 font-semibold hover:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer rounded">
              010-9737-1215 전화하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
