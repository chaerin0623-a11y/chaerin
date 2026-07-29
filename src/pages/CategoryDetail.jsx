import React from 'react';
import './CategoryDetail.css';

// 전체 작품 데이터 목록 (id 1~13)
const allWorks = [
  { 
    id: 1, 
    categoryId: 'short-films', 
    title: '오타쿠의 결혼식', 
    role: '음향 감독 / 사운드 디렉팅', 
    desc: '단편영화 오타쿠의 결혼식 음향 및 현장 녹음 작업',
    overview: `1. 개요
      단편영화 <오타쿠의 결혼식> 동시녹음 및 후반 사운드 디렉팅을 총괄 담당.

      2. 사용 장비
      • Zoom F6 레코더
      • Deity Theos 무선 마이크 사용, 거치대와 C스탠드 연결

      3. 주요 작업 내용
      • 현장 노이즈 최소화를 위한 마이킹 세팅 및 음향 모니터링`,
    images: [
      `${import.meta.env.BASE_URL}images/Otacu_1.jpg`,
      `${import.meta.env.BASE_URL}images/Otacu_2.jpg`,
      `${import.meta.env.BASE_URL}images/Otacu_3.png`,
      `${import.meta.env.BASE_URL}images/Otacu_4.png`
    ]
  },
  {
    id: 3,
    categoryId: 'youtube',
    title: '유튜브 채널 [산타니] 운영 및 콘텐츠 제작',
    role: '100만 200만 조회수 소유자',
    desc: '유튜브 채널 [산타니] 콘텐츠 기획, 영상 제작 및 오리지널 미디어 브랜딩',
    overview: `1. 개요
• 역할: 1인 미디어 크리에이터 (콘텐츠 기획, 촬영, 영상 편집, 사운드 믹싱, 썸네일 제작)
• 핵심 과제: 오리지널 콘텐츠 기획을 통한 채널 브랜딩 및 시청자 참여도 극대화

2. 주요 수행 실무
• 콘텐츠 기획 & 연출: 트렌드 분석을 바탕으로 한 독창적인 영상 컨셉 수립 및 시나리오 구상
• 촬영 & 후반 제작: 감각적인 영상미 연출 및 몰입도를 높이는 사운드 디자인/영상 편집
• 채널 브랜딩 & 분석: 썸네일/타이틀 디자인 제작 및 시청 지속 시간 분석을 통한 콘텐츠 디벨롭`,
    images: [
      `${import.meta.env.BASE_URL}images/yotuber_1.png`,
      `${import.meta.env.BASE_URL}images/youtuber_2.png`,
      `${import.meta.env.BASE_URL}images/youtuber_3.png`
    ]
  },
  {
    id: 2,
    categoryId: 'activities',
    title: '2025 미디어웨이브 학술제 운영위원회',
    role: '운영위원 (기획 & 모션 그래픽)',
    desc: '학술제 메인 컨셉 수립 및 비상탈출 안내 영상/모션 그래픽 제작',
    overview: `1. 개요
• 역할: 운영위원 (기획 및 모션 그래픽 제작)
• 핵심 과제: 학술제 메인 컨셉 수립 및 전체 조율, 행사 시각 요소 제작

2. 주요 수행 실무
• 학술제 컨셉 기획: 정기 회의를 통한 주제 제안 및 '신문' 컨셉 최종 확정
• 프로그램 구조화: '신문' 테마 기반 조별 섹션(정치·경제·연예 등) 배분 및 가이드라인 수립
• 영상 기술 지원: After Effects를 활용한 학술제 비상탈출 안내 영상 및 모션 그래픽 제작`
  },
];

export default function CategoryDetail({ category, onBack, onSelectWork }) {
  const filteredWorks = allWorks.filter((work) => work.categoryId === category.id);

  // 💡 유튜버 카테고리 체크
  const isYoutube = category.id === 'youtube';
  const youtubeWork = isYoutube ? filteredWorks[0] : null;

  return (
    <div className="detail-container">
      <button onClick={onBack} className="back-button">
        ←
      </button>

      <h1 className="detail-title">{category.title}</h1>
      <p className="detail-sub">{category.desc}</p>

      {/* 📺 1. 유튜버 카테고리일 때: 바로 상세 페이지 렌더링 */}
     {isYoutube && youtubeWork ? (
        <div className="direct-detail-view" style={{ marginTop: '30px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{youtubeWork.title}</h2>
          <p style={{ color: '#00e5ff', marginBottom: '20px', fontWeight: 'bold' }}>{youtubeWork.role}</p>

          {/* 💡 whiteSpace: 'pre-line' 적용으로 줄바꿈 및 백틱 엔터 완벽 반영 */}
          <div 
            className="overview-box" 
            style={{ 
              lineHeight: '1.8', 
              opacity: 0.9, 
              whiteSpace: 'pre-line', 
              fontSize: '1rem',
              marginBottom: '30px' 
            }}
          >
            {Array.isArray(youtubeWork.overview)
              ? youtubeWork.overview.join('\n')
              : youtubeWork.overview}
          </div>

          {/* 🖼️ 유튜버 이미지 갤러리 + 4번째 슬롯 채널 버튼 */}
          {youtubeWork.images && youtubeWork.images.length > 0 && (
            <div 
              className="image-gallery" 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '20px', 
                marginTop: '20px' 
              }}
            >
              {/* 1. 이미지 카드 3장 출력 */}
              {youtubeWork.images.map((imgUrl, index) => (
                <div 
                  key={index} 
                  style={{ 
                    width: '100%', 
                    aspectRatio: '16 / 10.8', 
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    backgroundColor: '#1a1a1a',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <img 
                    src={imgUrl} 
                    alt={`YouTube detail ${index + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}

              {/* 2. 🔗 3번째 사진 바로 옆(4번째 칸)에 들어가는 유튜브 채널 바로가기 버튼 */}
              <a 
                href="https://youtube.com/channel/UC4wNjOG-8FusuIgTw067OTg?si=b8mEeMyJC2HU9T2R" /* 👈 실제 유튜브 채널 주소로 변경해 주세요! */
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-channel-link-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  aspectRatio: '16 / 10.8', /* 사진 카드와 완전 동일한 비율 */
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(0, 114, 255, 0.15))',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                  padding: '20px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#ff0000' }}>▶</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '6px' }}>
                  [산타니] 채널 바로가기
                </div>
                <div style={{ fontSize: '0.85rem', color: '#00e5ff', opacity: 0.9 }}>
                  YouTube에서 더 많은 영상 보기 ↗
                </div>
              </a>
            </div>
          )}
        </div>
      ) : (
        /* 📂 2. 일반 카테고리일 때: 카드 목록 렌더링 */
       // CategoryDetail.jsx (일반 카테고리 카드 렌더링 영역 부분)

      /* 📂 2. 일반 카테고리일 때: 카드 목록 렌더링 */
        <div className="work-grid">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work) => {
              // 💡 대표 썸네일 미리보기 이미지 가져오기 (images[0] 또는 image)
              const previewImage = (work.images && work.images.length > 0) ? work.images[0] : work.image;

              return (
                <div 
                  key={work.id} 
                  className="work-card"
                  onClick={() => onSelectWork(work)}
                >
                  {/* 👈 왼쪽: 텍스트 정보 */}
                  <div className="work-card-info">
                    <h3>{work.title}</h3>
                    <p className="work-card-role">{work.role}</p>
                    <p className="work-card-description">{work.desc}</p>
                  </div>

                  {/* 👉 오른쪽: 미리보기 썸네일 이미지 */}
                  {previewImage && (
                    <div className="work-card-thumbnail">
                      <img src={previewImage} alt={`${work.title} 미리보기`} />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p style={{ fontFamily: 'sans-serif', opacity: 0.6, gridColumn: '1 / -1' }}>
              등록된 작업물이 없습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}