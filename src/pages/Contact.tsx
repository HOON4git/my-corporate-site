import { useState } from 'react';

const styles = {
  container: { padding: '80px 20px', maxWidth: '850px', margin: '0 auto' },
  sectionTitle: { fontSize: '32px', fontWeight: 800, textAlign: 'center' as const, marginBottom: '16px', color: '#111' },
  sectionDesc: { fontSize: '16px', textAlign: 'center' as const, color: '#666', marginBottom: '50px', lineHeight: '1.6' },
  guideSegment: {
    backgroundColor: '#F8F9FA',
    padding: '30px',
    borderRadius: '20px',
    marginBottom: '50px',
    border: '1px solid #EEF0F2'
  },
  subTitle: { fontSize: '18px', fontWeight: 'bold' as const, color: '#111', margin: '0 0 20px 0' },
  selectorGroup: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
    marginBottom: '24px'
  },
  selectBtn: {
    flex: 1,
    minWidth: '150px',
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  documentCard: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
  },
  docHeader: { fontSize: '14px', fontWeight: 'bold' as const, color: '#222', margin: '0 0 14px 0' },
  docList: { paddingLeft: '20px', margin: '0 0 16px 0' },
  docItem: { fontSize: '13px', color: '#444', marginBottom: '8px', lineHeight: '1.5' },
  docNote: { fontSize: '12px', color: '#888', margin: 0 },
  formContainer: {
    padding: '0 10px'
  },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '15px' },
  row: { display: 'flex', gap: '15px', flexWrap: 'wrap' as const },
  input: { flex: 1, minWidth: '240px', padding: '14px 18px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '14px' },
  textarea: { padding: '14px 18px', border: '1px solid #ddd', borderRadius: '10px', fontSize: '14px', resize: 'vertical' as const },
  submitBtn: {
    padding: '16px',
    backgroundColor: '#0066FF',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

const Contact = () => {
  const [useType, setUseType] = useState<string>('food');

  const docGuidelines: Record<string, string[]> = {
    food: [
      "실수요자 증명원 (관할 세무서장 발행 분)",
      "신규 가입 신청서 및 사업자등록증 사본",
      "식품 또는 주류관련 영업 등록증 사본"
    ],
    medical: [
      "의약외품 제조업 신고서 및 관련 품목 생산 승인서 사본",
      "주정 실수요 추천서 (식품의약품안전처장 발행)",
      "법인 등기부 등본 및 사업자등록증 사본"
    ],
    industrial: [
      "주정실수요자 신청서 (지방국세청 승인 완료 분)",
      "공장등록증 사본 및 설비 운용 대장",
      "화학 물질 실사용 용도 설명 확인서"
    ]
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>주정 구매 면허 가이드</h2>
      <p style={styles.sectionDesc}>국세청 관련 세법 규정 승인이 수반되는 주정 거래 흐름을 위해 맞춤 서류 가이드를 확인하세요.</p>

      <div style={styles.guideSegment}>
        <h4 style={styles.subTitle}>1단계: 본인의 사업 용도를 클릭하세요.</h4>
        <div style={styles.selectorGroup}>
          <button
            style={{...styles.selectBtn, border: useType === 'food' ? '2px solid #0066FF' : '1px solid #ddd', color: useType === 'food' ? '#0066FF' : '#444'}}
            onClick={() => setUseType('food')}
          >
            🌾 식음료/식품 가공
          </button>
          <button
            style={{...styles.selectBtn, border: useType === 'medical' ? '2px solid #0066FF' : '1px solid #ddd', color: useType === 'medical' ? '#0066FF' : '#444'}}
            onClick={() => setUseType('medical')}
          >
            🏥 의약외품/위생소독액
          </button>
          <button
            style={{...styles.selectBtn, border: useType === 'industrial' ? '2px solid #0066FF' : '1px solid #ddd', color: useType === 'industrial' ? '#0066FF' : '#444'}}
            onClick={() => setUseType('industrial')}
          >
            🧪 정밀세척/기타 산업용
          </button>
        </div>

        <div style={styles.documentCard}>
          <h5 style={styles.docHeader}>📋 구비 필요 서류 목록</h5>
          <ul style={styles.docList}>
            {docGuidelines[useType].map((doc, idx) => (
              <li key={idx} style={styles.docItem}>{doc}</li>
            ))}
          </ul>
          <p style={styles.docNote}>※ 주정 구매 행정 절차는 당사 지원팀이 대관 업무를 상세히 지원해 드립니다.</p>
        </div>
      </div>

      <div style={styles.formContainer}>
        <h4 style={styles.subTitle}>2단계: 사전 상담 요청서 작성</h4>
        <form style={styles.form} onSubmit={(e) => { e.preventDefault(); alert('접수되었습니다. 확인 후 남겨주신 연락처로 담당자가 연락드리겠습니다.'); }}>
          <div style={styles.row}>
            <input type="text" placeholder="회사명 (필수)" style={styles.input} required />
            <input type="text" placeholder="성함 및 직함" style={styles.input} required />
          </div>
          <div style={styles.row}>
            <input type="email" placeholder="이메일 주소" style={styles.input} required />
            <input type="tel" placeholder="연락처" style={styles.input} required />
          </div>
          <textarea placeholder="필요 예상 수량 및 주정 사용 용도를 자유롭게 기입해주세요." style={styles.textarea} rows={5} required />
          <button type="submit" style={styles.submitBtn}>제출하기</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;