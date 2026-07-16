import { useEffect, useState } from 'react';

// 1. styles 객체를 컴포넌트 선언보다 위로 올립니다.
const styles = {
  container: {
    paddingBottom: '100px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    padding: '120px 20px 80px 20px',
    background: 'radial-gradient(circle at top, rgba(0, 102, 255, 0.05) 0%, rgba(255,255,255,0) 70%)',
  },
  badge: {
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    color: '#0066FF',
    padding: '8px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
    letterSpacing: '0.5px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 800,
    lineHeight: '1.25',
    letterSpacing: '-1.5px',
    color: '#111',
    margin: '0 0 24px 0',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #0066FF 0%, #00C6FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '17px',
    color: '#555',
    lineHeight: '1.7',
    maxWidth: '680px',
    margin: '0 0 40px 0',
  },
  btnGroup: {
    display: 'flex',
    gap: '15px',
  },
  primaryBtn: {
    padding: '15px 32px',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  secondaryBtn: {
    padding: '15px 32px',
    backgroundColor: '#fff',
    color: '#111',
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  statCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center' as const,
    border: '1px solid #EEF0F2',
  },
  statNum: {
    fontSize: '44px',
    fontWeight: 800,
    color: '#0066FF',
    display: 'block',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '15px',
    color: '#666',
    fontWeight: 500,
  },
};

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

// 2. 컴포넌트는 스타일 선언 아래에 위치하여 자유롭게 styles를 사용합니다.
const Home = ({ setActiveTab }: HomeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      ...styles.container, 
      opacity: isVisible ? 1 : 0, 
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
    }}>
      {/* 히어로 섹션 */}
      <section style={styles.hero}>
        <div style={styles.badge}>Eco-Friendly Pure Alcohol</div>
        <h1 style={styles.heroTitle}>
          자연에서 얻은 순수함,<br />
          <span style={styles.gradientText}>고순도 발효주정</span>의 명가
        </h1>
        <p style={styles.heroSubtitle}>
          대한주정판매, 우리주정 등의 정통 유통 신뢰를 이어받아,<br />
          에탄올 코리아는 가장 정제된 95% 친환경 바이오 주정을 선도적으로 공급합니다.
        </p>
        <div style={styles.btnGroup}>
          <button style={styles.primaryBtn} onClick={() => setActiveTab('products')}>주정 용도 둘러보기</button>
          <button style={styles.secondaryBtn} onClick={() => setActiveTab('contact')}>온라인 구매 문의</button>
        </div>
      </section>

      {/* 핵심 수치 섹션 */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <span style={styles.statNum}>95%</span>
          <span style={styles.statLabel}>발효주정 순도 기준 보장</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNum}>100%</span>
          <span style={styles.statLabel}>천연 곡물 원료 정제</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNum}>HACCP</span>
          <span style={styles.statLabel}>안전성 전 과정 검증 완료</span>
        </div>
      </section>
    </div>
  );
};

export default Home;