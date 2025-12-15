import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-drop-fill text-blue-500 text-2xl"></i>
              </div>
              <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>LeakZero</span>
            </div>
            <p className="text-gray-400">
              20년 경력의 부산/경남 누수 탐지 전문 업체.<br/>
              정직한 시공과 확실한 AS를 약속합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/services">누수 탐지</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/services">배관 공사</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/services">방수 공사</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/services">하수구 막힘</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">문의하기</h4>
            <ul className="space-y-2 text-gray-400">
              <li>010-9737-1215</li>
              <li>psmpsm85121@naver.com</li>
              <li>부산/경남 전지역</li>
              <li>24시간 상담 가능</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">업무 시간</h4>
            <ul className="space-y-2 text-gray-400">
              <li>월-일: 24시간</li>
              <li>연중무휴</li>
              <li>긴급 출동 대기</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 누수제로. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
