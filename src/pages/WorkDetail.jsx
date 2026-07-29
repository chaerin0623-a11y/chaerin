import React from 'react';
import './WorkDetail.css';

export default function WorkDetail({ work, onBack }) {
  if (!work) return null;

  // 💡 overview 데이터를 여러 개의 개별 박스로 분리하는 함수
  const renderOverviewBoxes = () => {
    const rawText = Array.isArray(work.overview) 
      ? work.overview.join('\n\n') 
      : work.overview || '';

    // "1. 개요", "2. 사용 장비" 또는 엔터 두 번(\n\n) 기준으로 단락 분리
    const sections = rawText.split(/\n(?=\d+\.)|\n\n/).filter(sec => sec.trim() !== '');

    return sections.map((secText, idx) => {
      const lines = secText.trim().split('\n');
      const firstLine = lines[0].trim();
      
      // 첫 줄이 "1. 개요"처럼 숫자로 시작하는 제목인지 체크
      const isHeader = /^\d+\./.test(firstLine);

      // 💡 영어 'PROJECT OVERVIEW'를 지우고, 데이터의 제목("1. 개요" 등)을 그대로 출력
      const title = isHeader ? firstLine : `상세 내용 ${idx + 1}`;
      const content = isHeader ? lines.slice(1).join('\n').trim() : secText.trim();

      return (
        <div key={idx} className="overview-card-box">
          {/* 📌 박스 위에 들어가는 제목 (예: 1. 개요, 2. 사용 장비 등) */}
          <h3 className="overview-card-title">{title}</h3>
          
          {/* 📄 박스 안의 본문 내용 */}
          <p className="overview-card-content">{content}</p>
        </div>
      );
    });
  };

  return (
    <div className="work-detail-container">
      <button onClick={onBack} className="back-button">
        ←
      </button>

      <h1 className="work-title">{work.title}</h1>
      <p className="work-role">{work.role}</p>

      {/* 🖼️ 이미지 갤러리 */}
      {work.images && work.images.length > 0 && (
        <div className="work-image-gallery">
          {work.images.map((imgUrl, index) => (
            <div key={index} className="work-image-item">
              <img src={imgUrl} alt={`${work.title} ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* 📦 단락별로 나뉘어 출력되는 반투명 박스들 */}
      <div className="overview-boxes-container">
        {renderOverviewBoxes()}
      </div>
    </div>
  );
}