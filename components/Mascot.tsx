interface MascotProps {
  size?: number;
  animated?: boolean;
}

export default function Mascot({ size = 380, animated = true }: MascotProps) {
  return (
    <svg
      className={animated ? 'bounce' : ''}
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body / dress */}
      <path
        d="M 130 300 Q 200 250 270 300 L 280 370 Q 200 390 120 370 Z"
        fill="#FF4E6A"
        stroke="#2A1B3D"
        strokeWidth="4"
      />
      <circle cx="160" cy="325" r="6" fill="#FFF8EC" />
      <circle cx="200" cy="345" r="6" fill="#FFF8EC" />
      <circle cx="240" cy="325" r="6" fill="#FFF8EC" />
      <circle cx="180" cy="365" r="5" fill="#FFF8EC" />
      <circle cx="220" cy="365" r="5" fill="#FFF8EC" />

      {/* Arms */}
      <path
        d="M 135 285 Q 105 310 110 340"
        stroke="#F4C9A0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 265 285 Q 295 310 290 340"
        stroke="#F4C9A0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="110" cy="340" r="14" fill="#F4C9A0" stroke="#2A1B3D" strokeWidth="3" />
      <circle cx="290" cy="340" r="14" fill="#F4C9A0" stroke="#2A1B3D" strokeWidth="3" />

      {/* Neck */}
      <rect x="186" y="245" width="28" height="30" fill="#F4C9A0" stroke="#2A1B3D" strokeWidth="4" />

      {/* Head */}
      <circle cx="200" cy="180" r="80" fill="#F4C9A0" stroke="#2A1B3D" strokeWidth="4" />

      {/* Hair bun */}
      <circle cx="200" cy="100" r="30" fill="#3A2314" stroke="#2A1B3D" strokeWidth="4" />
      <circle cx="200" cy="100" r="16" fill="#FFD23F" stroke="#2A1B3D" strokeWidth="3" />
      <g transform="translate(200,100)">
        <circle cx="-10" cy="-5" r="6" fill="#FF7EB9" stroke="#2A1B3D" strokeWidth="2" />
        <circle cx="10" cy="-5" r="6" fill="#FF7EB9" stroke="#2A1B3D" strokeWidth="2" />
        <circle cx="0" cy="-14" r="6" fill="#FF7EB9" stroke="#2A1B3D" strokeWidth="2" />
        <circle cx="0" cy="2" r="6" fill="#FF7EB9" stroke="#2A1B3D" strokeWidth="2" />
        <circle cx="0" cy="-6" r="5" fill="#FFD23F" stroke="#2A1B3D" strokeWidth="2" />
      </g>

      {/* Side hair */}
      <path
        d="M 125 180 Q 115 140 140 115"
        stroke="#3A2314"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 275 180 Q 285 140 260 115"
        stroke="#3A2314"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hair fringe */}
      <path
        d="M 140 140 Q 170 130 200 135 Q 230 130 260 140 Q 255 160 200 155 Q 145 160 140 140 Z"
        fill="#3A2314"
        stroke="#2A1B3D"
        strokeWidth="3"
      />

      {/* Eyes */}
      <path d="M 170 180 Q 178 172 186 180" stroke="#2A1B3D" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 214 180 Q 222 172 230 180" stroke="#2A1B3D" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Eyelashes */}
      <line x1="168" y1="178" x2="164" y2="174" stroke="#2A1B3D" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="188" y1="178" x2="192" y2="174" stroke="#2A1B3D" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="212" y1="178" x2="208" y2="174" stroke="#2A1B3D" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="232" y1="178" x2="236" y2="174" stroke="#2A1B3D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="160" cy="205" r="10" fill="#FF7EB9" opacity="0.6" />
      <circle cx="240" cy="205" r="10" fill="#FF7EB9" opacity="0.6" />

      {/* Smile */}
      <path
        d="M 180 215 Q 200 232 220 215"
        stroke="#2A1B3D"
        strokeWidth="4"
        fill="#FF4E6A"
        strokeLinecap="round"
      />
      <path d="M 184 218 Q 200 228 216 218" fill="#FFF8EC" />

      {/* Bindi */}
      <circle cx="200" cy="155" r="4" fill="#FF4E6A" />

      {/* Book */}
      <g transform="translate(285, 332) rotate(-10)">
        <rect x="-22" y="-14" width="44" height="28" fill="#FFD23F" stroke="#2A1B3D" strokeWidth="3" rx="2" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke="#2A1B3D" strokeWidth="2" />
        <line x1="-15" y1="-6" x2="-5" y2="-6" stroke="#2A1B3D" strokeWidth="1.5" />
        <line x1="-15" y1="0" x2="-5" y2="0" stroke="#2A1B3D" strokeWidth="1.5" />
        <line x1="5" y1="-6" x2="15" y2="-6" stroke="#2A1B3D" strokeWidth="1.5" />
        <line x1="5" y1="0" x2="15" y2="0" stroke="#2A1B3D" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
