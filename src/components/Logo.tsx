import React from 'react';

export function Logo() {
  return (
    <img
      src="/images/logo.png"
      alt="IDIATER Logo"
      style={{
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        flexShrink: 0,
        backgroundColor: 'transparent',
        borderRadius: '9999px',
        clipPath: 'circle(50% at 50% 50%)'
      }}
    />
  );
}
