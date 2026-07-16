const styles = {
  container: { padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' },
  sectionTitle: { fontSize: '32px', fontWeight: 800, textAlign: 'center' as const, marginBottom: '16px', color: '#111' },
  sectionDesc: { fontSize: '16px', textAlign: 'center' as const, color: '#666', marginBottom: '60px', lineHeight: '1.6' },
  grid: { display: 'flex', gap: '30px', flexWrap: 'wrap' as const },
  card: {
    flex: 1,
    minWidth: '280px',
    backgroundColor: '#fff',
    border: '1px solid #EEF0F2',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center' as const,
    boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
  },
  icon: { fontSize: '40px', marginBottom: '20px' },
  cardTitle: { fontSize: '18px', fontWeight: 'bold', color: '#111', margin: '0 0 12px 0' },
  cardText: { fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }
};

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>회사 소개</h2>
      <p style={styles.sectionDesc}>깨끗한 고순도 천연 원료로 일상과 산업의 기초가 되는 가치를 창출합니다.</p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.icon}>🎯</div>
          <h4 style={styles.cardTitle}>경영 철학</h4>
          <p style={styles.cardText}>신뢰를 생명으로 여깁니다. 전통적인 주정 유통 방식을 계승하여 엄격한 준법정신과 무결점 배송 약속을 이행합니다.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🌱</div>
          <h4 style={styles.cardTitle}>친환경 가치</h4>
          <p style={styles.cardText}>식물성 원료 정제를 통해 탄소 중립 및 지속 가능한 바이오 에너지 솔루션 개발을 주도적으로 지원합니다.</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🤝</div>
          <h4 style={styles.cardTitle}>안정적 물류망</h4>
          <p style={styles.cardText}>정확한 유통 면허 행정 처리 노하우와 대형 주정 보관 탱크 인프라를 바탕으로 끊김 없는 안정적인 공급을 보장합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default About;