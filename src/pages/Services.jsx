import React from 'react';
import SectionHeading from '../components/UI/SectionHeading';
import ServiceCard from '../components/UI/ServiceCard';
import { Search, Droplets, Wrench, Snowflake, Home as HomeIcon, Zap, Bath } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: '누수탐지 / 진단',
      description: '최첨단 장비를 이용하여 눈에 보이지 않는 미세한 누수까지 정확하게 찾아냅니다. 청음식 탐지기, 가스식 탐지기, 열화상 카메라 등을 보유하고 있습니다.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wrench,
      title: '배관공사 / 막힘',
      description: '노후된 배관 교체 및 막힌 하수구, 변기, 싱크대 등을 시원하게 뚫어드립니다. 고압 세척 장비를 이용하여 배관 내부의 이물질을 완벽하게 제거합니다.',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Snowflake,
      title: '에어컨 배관 막힘',
      description: '에어컨 배관 막힘으로 인한 누수 및 성능 저하를 해결해 드립니다. 전문 장비로 배관 내부를 깨끗하게 청소합니다.',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Droplets,
      title: '방수 / 옥상방수',
      description: '우레탄 방수, 시트 방수 등 현장 상황에 맞는 최적의 방수 공법을 적용하여 건물의 수명을 연장하고 누수를 예방합니다.',
      image: 'https://images.unsplash.com/photo-1622126290566-47e24741b65e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Zap,
      title: '전기공사',
      description: '누전 수리, 조명 교체, 콘센트 증설 등 안전하고 전문적인 전기 공사 서비스를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: HomeIcon,
      title: '인테리어 공사',
      description: '주거 공간 및 상업 공간의 가치를 높이는 고품격 인테리어 시공을 약속합니다. 부분 인테리어부터 전체 리모델링까지 가능합니다.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Bath,
      title: '화장실 리모델링',
      description: '낡고 오래된 욕실을 세련되고 편리한 공간으로 탈바꿈시켜 드립니다. 타일 교체, 위생도기 설치 등 부분 수리도 가능합니다.',
      image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="사업 영역" 
          subtitle="OUR SERVICES" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
