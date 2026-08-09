import React from 'react';

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.info}>
          <h3>㈜케이에탄올 (K-ETHANOL)</h3>
          <p>주소: 인천광역시 남동구 남동대로 742, 101호(대화빌딩)</p>
          <p>전화: 010-5314-2154 | FAX: 0504-438-2154 | 이메일: ethanolkorea@gmail.com</p>
          <p>면허번호: 발효주정소매업 제131-5-84564호</p>
        </div>
        <p style={styles.copyright}>
          © 2026 ㈜케이에탄올. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '50px 5%',
    fontSize: '14px',
    lineHeight: '1.8',
    fontFamily: '"Pretendard", sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  copyright: {
    borderTop: '1px solid #1e293b',
    paddingTop: '20px',
    fontSize: '13px',
    color: '#64748b',
  },
};