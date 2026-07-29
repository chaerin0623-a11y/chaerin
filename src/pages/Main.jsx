import React from 'react';
import './Main.css';

  const categories = [
  { 
    id: 'short-films', 
    title: 'SHORT FILMS', 
    sub: '단편영화',
    desc: '현장 녹음부터 후반 사운드 디렉팅까지 총괄한 단편영화 작업물입니다.'
  },
  { 
    id: 'youtube', 
    title: 'YOUTUBER', 
    sub: '유튜버 [산타니]',
    desc: '현장 녹음부터 후반 사운드 디렉팅까지 총괄한 단편영화 작업물입니다.'
  },
  { 
    id: 'activities', 
    title: 'ACTIVITIES', 
    sub: '교내외 활동',
    desc: '현장 녹음부터 후반 사운드 디렉팅까지 총괄한 단편영화 작업물입니다.'
  },
  { 
    id: 'media-ambassador', 
    title: 'MEDIA AMBASSADOR', 
    sub: '미디어 홍보대사',
    desc: '현장 녹음부터 후반 사운드 디렉팅까지 총괄한 단편영화 작업물입니다.'
  },
  { 
    id: 'awards', 
    title: 'AWARDS & CONTESTS', 
    sub: '공모전',
    desc: '현장 녹음부터 후반 사운드 디렉팅까지 총괄한 단편영화 작업물입니다.'
  },
];


export default function Main({ onSelectCategory }) {
  return (
    <main className="main-container">

       <section className="categories-section">
        <h2 className="section-label">PROJECT CATEGORIES</h2>
        <nav className="menu-list">
          {categories.map((item) => (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => onSelectCategory(item)}
            >
              <span className="menu-title">{item.title}</span>
              <span className="menu-sub">{item.sub}</span>
            </div>
          ))}
        </nav>
      </section>

         {/* 🔽 스크롤 유도 안내 */}
      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="arrow">↓</div>
      </div>


      {/* 👤 1. 상단 프로필 및 개인정보 섹션 */}
      <section className="profile-section">
        <div className="profile-image-container">
          <img 
            src={`${import.meta.env.BASE_URL}images/chaerin.jpg`} 
            alt="Profile" 
            className="profile-image"
          />
        </div>

        <div className="profile-info-container">
          <h1 className="profile-name">김채린</h1>
          <p className="profile-role">Media & Sound Director / Producer</p>
          
          <div className="profile-group">
            <h3>ABOUT</h3>
            <p>기획부터 연출, 현장 녹음 및 후반 사운드 믹싱, 거기다 편집까지 총괄하는 미디어 크리에이터입니다.</p>
          </div>

          <div className="profile-group">
            <h3>EDUCATION</h3>
            <ul>
              <li>수원대학교 (졸업예정)</li>
              <li>주전공: 컴퓨터소프트웨어학과 / 복수전공: 미디어커뮤니케이션학과</li>
              <li>학점: <span className="font-light">4.12 / 4.5</span></li>
            </ul>
          </div>

          <div className="profile-group">
            <h3>CONTACT</h3>
            <p>Email: <span className="font-light">chaerin0623@naver.com</span></p>
            <p>주소: 경기도 오산시 수청로 <span className="font-light">31</span></p>
          </div>
        </div>
      </section>

    
    </main>
  );
}