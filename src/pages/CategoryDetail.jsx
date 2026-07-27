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
    overview: [
  "단편영화 <오타쿠의 결혼식> 프로젝트에서 음향 총괄 및 사운드 디렉팅을 담당하였습니다.",
  "작품의 몰입감을 극대화하기 위해 사전 리허설 단계부터 배우들의 동선과 마이크 위치를 세밀하게 계산하여 사운드 가이드를 제작했습니다.",
  "현장 녹음 시에는 Zoom F6 레코더와 Deity Theos 무선 마이크 시스템을 활용하여 소음 환경에서도 깔끔한 대사를 수집했습니다.",
  "후반 포스트 프로덕션 작업에서는 노이즈 리덕션 및 앰비언스 믹싱을 거쳐 화면과 완벽히 맞물리는 오디오 밸런스를 구축했습니다.",
  "작품 전반에 걸친 세심한 사운드 설계를 통해 영화의 전체적인 완성도를 끌어올렸습니다."
],
    image: `${import.meta.env.BASE_URL}images/IMG_2867.png`
  },
  { 
    id: 2, 
    categoryId: 'short-films', 
    title: 'SHORT FILM 02', 
    role: '연출 / 기획', 
    desc: '작품에 대한 간단한 소개입니다.',
    overview: '이 작품은 기획 단계부터 시나리오 작성, 연출 구성을 전담하여 진행한 프로젝트입니다.',
    image: `${import.meta.env.BASE_URL}images/IMG_2867.png`
  },
  {
    id: 4, // 필요시 id 번호 조정
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
  // 현재 선택된 카테고리의 id와 일치하는 작품들만 필터링합니다.
  const filteredWorks = allWorks.filter((work) => work.categoryId === category.id);

  return (
    <div className="detail-container">
      <button onClick={onBack} className="back-button">
        ←
      </button>

      <h1 className="detail-title">{category.title}</h1>
      <p className="detail-sub">{category.sub} 세부 작업물 목록</p>

      <div className="work-grid">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="work-card"
              onClick={() => onSelectWork(work)}
            >
              <h3>{work.title}</h3>
              <p className="work-card-description">{work.role}</p>
              <p className="work-card-description">{work.desc}</p>
            </div>
          ))
        ) : (
          <p style={{ fontFamily: 'sans-serif', opacity: 0.6, gridColumn: '1 / -1' }}>
            등록된 작업물이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}