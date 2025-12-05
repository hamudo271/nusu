import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-secondary">💧</span> 누수제로
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              누수탐지, 배관공사, 방수공사 전문 업체입니다.<br />
              정확한 진단과 완벽한 시공을 약속드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">바로가기</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-light transition-colors flex items-center"><span className="mr-2">›</span> 회사소개</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary-light transition-colors flex items-center"><span className="mr-2">›</span> 사업영역</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-secondary-light transition-colors flex items-center"><span className="mr-2">›</span> 시공사례</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary-light transition-colors flex items-center"><span className="mr-2">›</span> 온라인 문의</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">문의하기</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-secondary transition-colors">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">전화문의</span>
                  <span className="text-lg font-bold">010-9737-1215</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-secondary transition-colors">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">이메일</span>
                  <span className="text-gray-300">psmpsm85121@naver.com</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-secondary transition-colors">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400">출장지역</span>
                  <span className="text-gray-300">부산/경남 전지역 출장 가능</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 누수제로. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
