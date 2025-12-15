import React from 'react';
import SectionHeading from '../components/UI/SectionHeading';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="회사 소개" 
          subtitle="ABOUT US" 
        />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1635828664463-c3b01cc9db85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Working professional" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">
              "정직과 신뢰를 바탕으로<br />최고의 기술력을 제공합니다."
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              안녕하십니까? 이엔씨설비를 찾아주셔서 감사합니다.<br /><br />
              저희 이엔씨설비는 다년간의 현장 경험과 노하우를 바탕으로 누수탐지, 배관공사, 방수공사 등 설비 분야에서 최고의 서비스를 제공하고 있습니다.<br /><br />
              최첨단 장비를 보유하여 정확한 원인 분석과 신속한 해결을 약속드리며, 고객님의 불편을 최소화하기 위해 항상 노력하고 있습니다. 작은 일에도 정성을 다하며, 시공 후 철저한 A/S 관리로 고객 만족을 실현하겠습니다.
            </p>
            
            <div className="space-y-4">
              {[
                '최첨단 누수 탐지 장비 보유',
                '다년간의 풍부한 현장 경험',
                '합리적인 비용과 투명한 견적',
                '철저한 A/S 보장'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
