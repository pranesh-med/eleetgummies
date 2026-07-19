interface GummyBearProps {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  color: string;
}

function GummyBear({ x, y, scale = 1, rotate = 0, color }: GummyBearProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={0.92}>
      {/* ears */}
      <circle cx={-11} cy={-24} r={7} fill={color} />
      <circle cx={11} cy={-24} r={7} fill={color} />
      {/* head */}
      <circle cx={0} cy={-14} r={13} fill={color} />
      {/* arms */}
      <ellipse cx={-16} cy={6} rx={7} ry={11} fill={color} transform="rotate(-25 -16 6)" />
      <ellipse cx={16} cy={6} rx={7} ry={11} fill={color} transform="rotate(25 16 6)" />
      {/* body */}
      <path
        d="M -14 -2 C -14 -14 14 -14 14 -2 L 16 20 C 16 30 -16 30 -16 20 Z"
        fill={color}
      />
      {/* legs */}
      <ellipse cx={-8} cy={30} rx={7} ry={10} fill={color} />
      <ellipse cx={8} cy={30} rx={7} ry={10} fill={color} />
      {/* shine */}
      <ellipse cx={-5} cy={-18} rx={3} ry={4} fill="white" opacity={0.35} />
    </g>
  );
}

export default function GummyBottle() {
  const bearColors = ['#FF8A3D', '#FF5DA2', '#5EE6C7', '#FFD23F', '#7B6EF6'];

  return (
    <svg
      viewBox="0 0 420 640"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a3f45" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#6b7178" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3a3f45" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b2b2b" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <linearGradient id="label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#18011F" />
          <stop offset="40%" stopColor="#7621B0" />
          <stop offset="75%" stopColor="#B600A8" />
          <stop offset="100%" stopColor="#BE4C00" />
        </linearGradient>
        <clipPath id="bottleClip">
          <path d="M 130 120 C 120 120 110 130 110 150 L 100 300 C 92 340 90 380 90 420 C 90 540 100 600 130 610 L 290 610 C 320 600 330 540 330 420 C 330 380 328 340 320 300 L 310 150 C 310 130 300 120 290 120 Z" />
        </clipPath>
      </defs>

      {/* cap */}
      <rect x="168" y="10" width="84" height="46" rx="10" fill="url(#cap)" />
      <rect x="160" y="48" width="100" height="20" rx="6" fill="#161616" />

      {/* neck */}
      <path d="M 178 66 L 242 66 L 236 118 L 184 118 Z" fill="url(#glass)" />

      {/* bottle body */}
      <path
        d="M 130 120 C 120 120 110 130 110 150 L 100 300 C 92 340 90 380 90 420 C 90 540 100 600 130 610 L 290 610 C 320 600 330 540 330 420 C 330 380 328 340 320 300 L 310 150 C 310 130 300 120 290 120 Z"
        fill="url(#glass)"
        stroke="#8a9099"
        strokeWidth="2"
      />

      {/* gummies visible through the glass, clipped to bottle silhouette */}
      <g clipPath="url(#bottleClip)">
        <rect x="80" y="120" width="260" height="500" fill="#141414" opacity="0.35" />
        <GummyBear x={150} y={165} rotate={-10} scale={1.05} color={bearColors[0]} />
        <GummyBear x={230} y={150} rotate={12} scale={0.9} color={bearColors[2]} />
        <GummyBear x={290} y={200} rotate={-6} scale={1} color={bearColors[3]} />
        <GummyBear x={130} y={230} rotate={18} scale={0.85} color={bearColors[1]} />
        <GummyBear x={200} y={250} rotate={-20} scale={1.1} color={bearColors[4]} />

        <GummyBear x={140} y={470} rotate={8} scale={1} color={bearColors[3]} />
        <GummyBear x={215} y={500} rotate={-14} scale={0.95} color={bearColors[1]} />
        <GummyBear x={280} y={465} rotate={16} scale={1.05} color={bearColors[0]} />
        <GummyBear x={175} y={555} rotate={-8} scale={0.9} color={bearColors[4]} />
        <GummyBear x={250} y={560} rotate={10} scale={1} color={bearColors[2]} />
      </g>

      {/* label band */}
      <path
        d="M 96 320 C 92 360 90 390 90 420 C 90 445 91 468 94 488 L 326 488 C 329 468 330 445 330 420 C 330 390 328 360 324 320 Z"
        fill="url(#label)"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.15"
      />

      <text
        x="210"
        y="392"
        textAnchor="middle"
        fontFamily="Kanit, sans-serif"
        fontWeight={900}
        fontSize="34"
        fill="#ffffff"
        letterSpacing="1"
      >
        ELEET
      </text>
      <text
        x="210"
        y="428"
        textAnchor="middle"
        fontFamily="Kanit, sans-serif"
        fontWeight={900}
        fontSize="34"
        fill="#ffffff"
        letterSpacing="1"
      >
        GUMMYZ
      </text>
      <text
        x="210"
        y="454"
        textAnchor="middle"
        fontFamily="Kanit, sans-serif"
        fontWeight={500}
        fontSize="13"
        fill="#D7E2EA"
        letterSpacing="4"
      >
        SPORTS RECOVERY
      </text>
      <line x1="140" y1="466" x2="280" y2="466" stroke="#D7E2EA" strokeOpacity="0.4" strokeWidth="1" />
      <text
        x="210"
        y="478"
        textAnchor="middle"
        fontFamily="Kanit, sans-serif"
        fontWeight={300}
        fontSize="9"
        fill="#D7E2EA"
        letterSpacing="2"
      >
        60 GUMMIES · NET WT 8.4 OZ
      </text>

      {/* highlight sheen */}
      <path
        d="M 118 140 C 112 220 108 320 108 420 C 108 500 112 560 122 600"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}