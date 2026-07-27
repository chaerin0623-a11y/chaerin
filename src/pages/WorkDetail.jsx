import React from 'react';
import './WorkDetail.css';

export default function WorkDetail({ work, onBack }) {
  return (
    <div className="work-detail-container">
      <button onClick={onBack} className="back-button">
        ←
      </button>

      <h1 className="work-main-title">{work.title}</h1>
      
      <div className="work-meta-info">
        <span><strong>역할:</strong> {work.role}</span>
      </div>

      {/* 🖼️ 이미지가 데이터에 있을 경우에만 프리뷰 박스 표시 */}
      {work.image && (
        <div className="work-image-box">
          <img src={work.image} alt={work.title} className="work-detail-image" />
        </div>
      )}

     <div className="work-content-box">
        <h3>PROJECT OVERVIEW</h3>
        {Array.isArray(work.overview) ? (
        work.overview.map((paragraph, index) => (
      <p key={index} style={{ marginBottom: '16px' }}>
        {paragraph}
      </p>
        ))
         ) : (
    <p>{work.overview}</p>
        )}
    </div>
    </div>
  );
}