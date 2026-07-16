import { useState } from 'react';

const styles = {
  container: { padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' },
  sectionTitle: { fontSize: '32px', fontWeight: 800, textAlign: 'center' as const, marginBottom: '16px', color: '#111' },
  sectionDesc: { fontSize: '16px', textAlign: 'center' as const, color: '#666', marginBottom: '50px', lineHeight: '1.6' },
  interactiveBox: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap' as const,
    backgroundColor: '#fff',
    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
    borderRadius: '24px',
    padding: '40px',
    border: '1px solid #EEF0F2'
  },
  tabsCol: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px'
  },
  tabItem: {
    padding: '20px 24px',
    borderRadius: '16px',
    fontSize: '15px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  detailPanel: {
    flex: 2,
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center'
  },
  panelTitle: { fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: '#111' },
  panelDesc: { fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '24px' },
  detailList: { listStyle: 'none', padding: 0, margin: '0 0 30px 0' },
  detailItem: { fontSize: '14px', color: '#333', marginBottom: '12px', fontWeight: '500' },
  specBox: {
    padding: '16px 20px',
    backgroundColor: '#F8F9FA',
    borderRadius: '12px',
    borderLeft: '4px solid #0066FF',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5px'
  },
  specTitle: { fontSize: '11px', color: '#888', fontWeight: 'bold' as const },
  specText: { fontSize: '13px', color: '#222', fontWeight: 'bold' as const }
};

interface ProductInfo {
  title: string;
  desc: string;
  details: string[];
  specs: string;
}

const Products = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const productData: ProductInfo[] = [
    {
      title: "식음료용 발효주정 (Pure Spirits)",
      desc: "천연 타피오카, 쌀, 보리 등의 곡물 원료를 효모로 발효시켜 연속 증류를 통해 고순도로 추출한 에탄올입니다.",
      details: ["희석식 소주, 청주, 리큐르 등 모든 주종의 에센셜 원료", "식품의 신선도 유지 목적의 천연 보존 원료", "식료품 가공설비 위생 세척용 정밀 주정"],
      specs: "순도 95.0% 이상 보장 / 유해 유기물질 불검출 기준 준수"
    },
    {
      title: "의약외품 및 위생소독제 주정",
      desc: "감염 차단 및 멸균 관리가 가장 요구되는 의료기기와 손 소독제 제작을 위한 전용 에탄올 솔루션입니다.",
      details: ["손소독제 및 소독용 에탄올 필수 유효 성분", "병원, 의원 기구 및 실험 공간 위생용 에탄올", "제약 공정 내 화합물 추출용 유기 원재료"],
      specs: "KP(대한약전) 규격 인증 검증 / 살균력 99.9% 포뮬레이션 부합"
    },
    {
      title: "산업용 무수에탄올 솔루션",
      desc: "물 분자를 완벽하게 제거하여 수분에 극도로 민감한 정밀 공정 및 친환경 화학 용제로 사용하기 적합합니다.",
      details: ["반도체, 광학 액정 세척 공정용 고품질 솔벤트", "페인트, 화장품, 잉크 제조용 친환경 희석제", "친환경 화합 유기용제 대체 물질"],
      specs: "수분 함량 0.1% 미만 극도 건조 사양"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>주정 제품 및 용도</h2>
      <p style={styles.sectionDesc}>생활 위생부터 정밀 화학, 식음료 가공에 이르기까지 검증된 가치를 제공하는 에탄올 코리아 제품군입니다.</p>

      <div style={styles.interactiveBox}>
        <div style={styles.tabsCol}>
          {productData.map((prod, idx) => (
            <div
              key={idx}
              style={{
                ...styles.tabItem,
                backgroundColor: activeItem === idx ? '#0066FF' : '#F4F5F7',
                color: activeItem === idx ? '#fff' : '#333'
              }}
              onClick={() => setActiveItem(idx)}
            >
              {prod.title}
            </div>
          ))}
        </div>

        <div style={styles.detailPanel}>
          <h3 style={styles.panelTitle}>{productData[activeItem].title}</h3>
          <p style={styles.panelDesc}>{productData[activeItem].desc}</p>
          
          <ul style={styles.detailList}>
            {productData[activeItem].details.map((detail, dIdx) => (
              <li key={dIdx} style={styles.detailItem}>✓ {detail}</li>
            ))}
          </ul>

          <div style={styles.specBox}>
            <span style={styles.specTitle}>품질 검증 규격:</span>
            <span style={styles.specText}>{productData[activeItem].specs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;