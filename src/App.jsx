import React, { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import CategoryDetail from './pages/CategoryDetail';
import WorkDetail from './pages/WorkDetail';

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentWork, setCurrentWork] = useState(null);

  return (
    <div className="app-container">
      <Header />
      
      {/* 3단계: 작품 상세 페이지 */}
      {currentWork ? (
        <WorkDetail 
          work={currentWork} 
          onBack={() => setCurrentWork(null)} 
        />
      ) : currentCategory ? (
        /* 2단계: 카테고리별 목록 페이지 */
        <CategoryDetail 
          category={currentCategory} 
          onBack={() => setCurrentCategory(null)} 
          onSelectWork={(work) => setCurrentWork(work)}
        />
      ) : (
        /* 1단계: 메인 타이포 페이지 */
        <Main onSelectCategory={(category) => setCurrentCategory(category)} />
      )}
    </div>
  );
}

export default App;