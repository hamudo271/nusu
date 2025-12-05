import React from 'react';
import HeroSection from '../components/UI/HeroSection';
import SectionHeading from '../components/UI/SectionHeading';
import ServiceCard from '../components/UI/ServiceCard';
import Button from '../components/UI/Button';
import { Search, Droplets, Wrench, Snowflake, ShieldCheck, Clock, ThumbsUp, Zap, Home as HomeIcon, Bath, MapPin, Phone } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: '누수탐지 / 진단',
      description: '최첨단 장비를 이용하여 눈에 보이지 않는 미세한 누수까지 정확하게 찾아냅니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wrench,
      title: '배관공사 / 막힘',
      description: '노후된 배관 교체 및 막힌 하수구, 변기 등을 시원하게 뚫어드립니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Snowflake,
      title: '에어컨 배관 막힘',
      description: '에어컨 배관 막힘으로 인한 누수 및 성능 저하를 해결해 드립니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Droplets,
      title: '방수 / 옥상방수',
      description: '완벽한 방수 시공으로 건물의 수명을 연장하고 누수를 예방합니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1622126290566-47e24741b65e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Zap,
      title: '전기공사',
      description: '안전하고 전문적인 전기 공사 서비스를 제공합니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: HomeIcon,
      title: '인테리어 공사',
      description: '공간의 가치를 높이는 고품격 인테리어 시공을 약속합니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Bath,
      title: '화장실 리모델링',
      description: '쾌적하고 아름다운 욕실 공간으로 재탄생시켜 드립니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Snowflake,
      title: '해빙 / 동파',
      description: '겨울철 얼어붙은 수도관을 스팀 해빙기로 안전하고 빠르게 녹여드립니다.',
      link: '/services',
      image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '01 무료방문견적',
      description: '전문가의 정확한 원인파악과 진단으로 최적의 비용과 해결방안을 제시합니다.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Search,
      title: '02 정확한 위치의 누수확인',
      description: '누수가 발생하는 위치를 확인하고 환경에 맞는 시공방법을 제시합니다.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ShieldCheck,
      title: '03 전문장비를 통한 안전시공',
      description: '각 원인에 맞는 전문 장비를 사용하여 신속정확하고 안전하게 시공합니다.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ThumbsUp,
      title: '04 철저한 A/S 관리 및 점검',
      description: '문제 해결 후 배관 상태를 확인하고 재발 방지를 위한 철저한 후속 조치를 취해드립니다.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="font-sans">
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="주요 서비스" 
            subtitle="OUR SERVICES" 
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button to="/services" variant="primary" className="text-lg px-12 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              서비스 전체보기
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold tracking-wider uppercase mb-4 block">Service Area</span>
              <h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
                부산/경남 전지역<br />
                <span className="text-primary">신속하게 출동합니다</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                누수제로 부산 전지역 및 경남 인근 지역 어디든 달려갑니다.<br />
                갑작스러운 누수 문제로 당황하지 마시고 언제든지 연락 주세요.<br />
                365일 24시간 상담 및 긴급 출동이 가능합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="block text-gray-900">부산 전지역</strong>
                    <span className="text-sm text-gray-500">해운대, 서면, 동래 등</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="block text-gray-900">경남 인근</strong>
                    <span className="text-sm text-gray-500">양산, 김해, 창원 등</span>
                  </div>
                </div>
              </div>

              <Button to="/contact" variant="primary" className="px-8 py-4 shadow-lg hover:shadow-xl">
                출장 문의하기
              </Button>
            </div>

            {/* Map Visualization */}
            <div className="lg:w-1/2 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202405.3506493672!2d128.9426866660178!3d35.1795543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb611667465f%3A0x63345f2961556a25!2sBusan!5e0!3m2!1sen!2skr!4v1620000000000!5m2!1sen!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Service Area Map"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">고객센터</p>
                    <p className="text-2xl font-bold text-primary">010-9737-1215</p>
                  </div>
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                    <Phone size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/[0.05] -z-10"></div>
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="누수제로 진행 과정" 
            subtitle="PROCESS" 
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            누수 문제로 고민하고 계신가요?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            지금 바로 전화주세요. 친절하게 상담해 드립니다.<br />
            부산/경남 전지역 출장 가능합니다.
          </p>
          <Button to="/contact" variant="secondary" className="text-lg px-12 py-5 bg-secondary hover:bg-secondary-light shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1">
            무료 상담 신청하기
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
