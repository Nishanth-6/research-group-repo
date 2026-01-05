export function Logo() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer circle background */}
      <circle cx="28" cy="28" r="28" fill="#000000" />
      
      {/* Energy/Lightning symbol - centered */}
      <path
        d="M30 14L22 28H28L26 42L34 28H28L30 14Z"
        fill="#FFFFFF"
        fillOpacity="0.95"
      />
      
      {/* Network nodes - representing infrastructure connectivity */}
      <circle cx="14" cy="14" r="2.5" fill="#60A5FA" />
      <circle cx="42" cy="14" r="2.5" fill="#60A5FA" />
      <circle cx="14" cy="42" r="2.5" fill="#60A5FA" />
      <circle cx="42" cy="42" r="2.5" fill="#60A5FA" />
      
      {/* Connection lines - subtle */}
      <line x1="14" y1="14" x2="26" y2="20" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="42" y1="14" x2="30" y2="20" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="14" y1="42" x2="26" y2="36" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="42" y1="42" x2="30" y2="36" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}
