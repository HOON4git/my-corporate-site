import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: '#111113',
    color: '#8A8C90',
    padding: '60px 5% 40px 5%',
    fontSize: '13px',
    lineHeight: '1.8',
    borderTop: '1px solid #222',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '40px',
    borderBottom: '1px solid #222',
    paddingBottom: '40px',
  },
  brandCol: {
    flex: '1 1 300px',
  },
  brandName: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '12px',
  },
  brandDesc: {
    fontSize: '13px',
    color: '#66696F',
    maxWidth: '320px',
  },
  infoCol: {
    flex: '2 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  boldText: {
    color: '#D1D2D4',
    fontWeight: 'bold',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    fontSize: '12px',
    color: '#4E5156',
  },
  badge: {
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#0066FF',
    fontWeight: 'bold',
    border: '1px solid #333',
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.brandCol}>
          <div style={styles.brandName}>K-Ethanol</div>
          <p style={styles.brandDesc}>
            국세청 고순도 발효주정 및 무수에탄올 공식 유통사로서 엄격한 안전성 및 품질 기준을 보장합니다.
          </p>
        </div>

        <div style={styles.infoCol}>
          <div>
            <span style={styles.boldText}>상호명 : </span>케이에탄올 (주) 
            <span style={{ margin: '0 10px', color: '#333' }}>|</span> 
            <span style={styles.boldText}> 대표이사 : </span>정익송, 이연섭
          </div>
          <div>
            <span style={styles.boldText}>본사 주소 : </span>인천광역시 남동구 남동대로 742, 1층(구월동)
          </div>
          <div>
            <span style={styles.boldText}>사업자등록번호 : </span>123-45-67890 
            <span style={{ margin: '0 10px', color: '#333' }}>|</span> 
            <span style={styles.boldText}> 주정유통면허 : </span>서울-주류-제1024호 (관할 세무서 승인)
          </div>
          <div>
            <span style={styles.boldText}> 문의 : </span>010-5314-2154
            <span style={{ margin: '0 10px', color: '#333' }}>|</span> 
            <span style={styles.boldText}> 팩스 : </span>02-1234-5678 
            <span style={{ margin: '0 10px', color: '#333' }}>|</span> 
            <span style={styles.boldText}> 이메일 : </span>ethanolkorea@gmail.com
          </div>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.copyright}>
          © 2026 K-Ethanol Co., Ltd. All Rights Reserved.
        </div>
        <div style={styles.badge}>
          국세청 주정 유통 적격 표준 취득처
        </div>
      </div>
    </footer>
  );
};

export default Footer;