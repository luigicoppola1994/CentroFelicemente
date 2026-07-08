import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('centrofelicemente-cookie-consent');
    if (!consent) {
      // Show immediately
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('centrofelicemente-cookie-consent', 'accepted');
    setVisible(false);
  };

  const declineAll = () => {
    localStorage.setItem('centrofelicemente-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
        zIndex: 999999,
        padding: '16px 0',
        fontFamily: 'Inter, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side: Icon & Text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: '1',
            minWidth: '280px',
          }}
        >
          <img
            src="/cookies.png"
            alt="Cookie"
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontSize: '13.5px',
              color: '#1e293b',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, acconsenti all'uso dei cookie in conformità con la nostra{' '}
            <a
              href="/privacy"
              style={{
                color: '#0b3c82',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Right Side: Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={declineAll}
            style={{
              padding: '8px 20px',
              borderRadius: '12px',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#475569',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#94a3b8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={acceptAll}
            style={{
              padding: '8px 24px',
              borderRadius: '12px',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#0b3c82',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#082f66';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#0b3c82';
            }}
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
