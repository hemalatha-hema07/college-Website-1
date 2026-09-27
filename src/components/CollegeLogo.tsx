import React from 'react';

interface CollegeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'monochrome';
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  // Generate 24 gear teeth around center (100, 92)
  const cx = 100;
  const cy = 92;
  const numTeeth = 24;
  const rOuter = 80;
  const rInner = 73;

  const gearPoints: string[] = [];
  for (let i = 0; i < numTeeth; i++) {
    const angleStep = 360 / numTeeth;
    const a0 = (i * angleStep - angleStep / 4) * (Math.PI / 180);
    const a1 = (i * angleStep - angleStep / 8) * (Math.PI / 180);
    const a2 = (i * angleStep + angleStep / 8) * (Math.PI / 180);
    const a3 = (i * angleStep + angleStep / 4) * (Math.PI / 180);

    const x0 = cx + rInner * Math.cos(a0);
    const y0 = cy + rInner * Math.sin(a0);
    const x1 = cx + rOuter * Math.cos(a1);
    const y1 = cy + rOuter * Math.sin(a1);
    const x2 = cx + rOuter * Math.cos(a2);
    const y2 = cy + rOuter * Math.sin(a2);
    const x3 = cx + rInner * Math.cos(a3);
    const y3 = cy + rInner * Math.sin(a3);

    gearPoints.push(`${i === 0 ? 'M' : 'L'} ${x0.toFixed(2)} ${y0.toFixed(2)}`);
    gearPoints.push(`L ${x1.toFixed(2)} ${y1.toFixed(2)}`);
    gearPoints.push(`L ${x2.toFixed(2)} ${y2.toFixed(2)}`);
    gearPoints.push(`L ${x3.toFixed(2)} ${y3.toFixed(2)}`);
  }
  const gearPath = gearPoints.join(' ') + ' Z';

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none"
        aria-label="VEMU Institute of Technology Official Emblem"
      >
        <defs>
          {/* Circular paths for textPath */}
          {/* Top text path sweeping clockwise */}
          <path
            id="vemu-top-text-arc"
            d="M 39 92 A 61 61 0 1 1 161 92"
            fill="none"
          />
          {/* Bottom text path sweeping clockwise */}
          <path
            id="vemu-bottom-text-arc"
            d="M 40 92 A 60 60 0 0 0 160 92"
            fill="none"
          />
          {/* Motto circular arc */}
          <path
            id="vemu-motto-arc"
            d="M 57 85 A 44 44 0 1 1 143 85"
            fill="none"
          />
          {/* Gradients */}
          <linearGradient id="vemu-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E5A882" />
            <stop offset="100%" stopColor="#C98762" />
          </linearGradient>
          <linearGradient id="vemu-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="vemu-blue-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B2F8A" />
            <stop offset="100%" stopColor="#082366" />
          </linearGradient>
        </defs>

        {/* 1. Engineering Gear Cogwheel Base */}
        <path
          d={gearPath}
          fill="#FFFFFF"
          stroke="#0B2F8A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* 2. Main Royal Navy Blue Circular Ring */}
        <circle
          cx={cx}
          cy={cy}
          r="71"
          fill="url(#vemu-blue-ring)"
          stroke="#071E57"
          strokeWidth="1.5"
        />

        {/* 3. Inner White Field */}
        <circle
          cx={cx}
          cy={cy}
          r="49"
          fill="#FFFFFF"
          stroke="#0B2F8A"
          strokeWidth="1.5"
        />

        {/* 4. Text on Blue Ring: VEMU INSTITUTE OF TECHNOLOGY */}
        <text
          fill="#FFFFFF"
          fontSize="9.2"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.6px"
        >
          <textPath
            href="#vemu-top-text-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            VEMU INSTITUTE OF TECHNOLOGY
          </textPath>
        </text>

        {/* Stars on Left and Right of the Blue Ring */}
        {/* Left Star */}
        <g transform="translate(34, 92)">
          <polygon
            points="0,-4.5 1.4,-1.4 4.8,-1.4 2.1,0.7 3.1,4 0,1.9 -3.1,4 -2.1,0.7 -4.8,-1.4 -1.4,-1.4"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="0.5"
          />
        </g>
        {/* Right Star */}
        <g transform="translate(166, 92)">
          <polygon
            points="0,-4.5 1.4,-1.4 4.8,-1.4 2.1,0.7 3.1,4 0,1.9 -3.1,4 -2.1,0.7 -4.8,-1.4 -1.4,-1.4"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="0.5"
          />
        </g>

        {/* Text on Bottom of Blue Ring: P. KOTHAKOTA */}
        <text
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1px"
        >
          <textPath
            href="#vemu-bottom-text-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            P.KOTHAKOTA
          </textPath>
        </text>

        {/* 5. Inner Motto Text Arc: "Quality Education For Bright Future" */}
        <text
          fill="#0f172a"
          fontSize="4.8"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.2px"
        >
          <textPath
            href="#vemu-motto-arc"
            startOffset="50%"
            textAnchor="middle"
          >
            Quality Education For Bright Future
          </textPath>
        </text>

        {/* 6. Central Emblem */}
        
        {/* Open Book at the base */}
        <g transform="translate(100, 114)">
          {/* Layered book pages (3D perspective) */}
          {/* Bottom page leaves */}
          <path
            d="M 0,6 C -7,3 -18,2 -24,4 L -24,14 C -18,12 -7,13 0,16 C 7,13 18,12 24,14 L 24,4 C 18,2 7,3 0,6 Z"
            fill="#F8FAFC"
            stroke="#0B2F8A"
            strokeWidth="1.2"
          />
          {/* Middle pages contour */}
          <path
            d="M -24,6 L -24,12 C -18,10 -7,11 0,14 C 7,11 18,10 24,12 L 24,6"
            fill="none"
            stroke="#64748B"
            strokeWidth="0.8"
          />
          <path
            d="M -24,8 L -24,13 C -18,11 -7,12 0,15 C 7,12 18,11 24,13 L 24,8"
            fill="none"
            stroke="#64748B"
            strokeWidth="0.8"
          />
          {/* Top page surface */}
          <path
            d="M 0,4 C -8,1 -17,0 -23,2 L -23,8 C -17,6 -8,7 0,10 C 8,7 17,6 23,8 L 23,2 C 17,0 8,1 0,4 Z"
            fill="#FFFFFF"
            stroke="#0B2F8A"
            strokeWidth="1.2"
          />
          {/* Spine vertical divider */}
          <line x1="0" y1="4" x2="0" y2="16" stroke="#0B2F8A" strokeWidth="1.2" />
          
          {/* Text lines on pages (simulation) */}
          <line x1="-19" y1="4" x2="-4" y2="6" stroke="#94A3B8" strokeWidth="0.7" />
          <line x1="-19" y1="6.5" x2="-4" y2="8.5" stroke="#94A3B8" strokeWidth="0.7" />
          <line x1="-19" y1="9" x2="-6" y2="10.5" stroke="#94A3B8" strokeWidth="0.7" />

          <line x1="4" y1="6" x2="19" y2="4" stroke="#94A3B8" strokeWidth="0.7" />
          <line x1="4" y1="8.5" x2="19" y2="6.5" stroke="#94A3B8" strokeWidth="0.7" />
          <line x1="6" y1="10.5" x2="19" y2="9" stroke="#94A3B8" strokeWidth="0.7" />
        </g>

        {/* Two Caring Hands cupping upward */}
        {/* Left Hand */}
        <g>
          <path
            d="M 82 114 C 79 108 77 98 78 88 C 79 80 81 74 84 69 C 85.5 67 87 68 86 71 C 84 76 83 83 83.5 89 C 85 80 86 76 87.5 73 C 88.5 71 89.5 72 89 74 C 87.5 80 86.5 86 86 92 C 87.5 87 89 82 91 78 C 92 76 93 77 92.5 79 C 90.5 86 89 94 88.5 101 C 88.5 107 87 112 85 114 Z"
            fill="url(#vemu-skin)"
            stroke="#8C5335"
            strokeWidth="0.6"
          />
        </g>

        {/* Right Hand (Symmetric) */}
        <g>
          <path
            d="M 118 114 C 121 108 123 98 122 88 C 121 80 119 74 116 69 C 114.5 67 113 68 114 71 C 116 76 117 83 116.5 89 C 115 80 114 76 112.5 73 C 111.5 71 110.5 72 111 74 C 112.5 80 113.5 86 114 92 C 112.5 87 111 82 109 78 C 108 76 107 77 107.5 79 C 109.5 86 111 94 111.5 101 C 111.5 107 113 112 115 114 Z"
            fill="url(#vemu-skin)"
            stroke="#8C5335"
            strokeWidth="0.6"
          />
        </g>

        {/* Green Lotus / Leaf Base between the hands */}
        <g transform="translate(100, 86)">
          <path
            d="M 0, -4 C -7, 0 -10, 5 0, 7 C 10, 5 7, 0 0, -4 Z"
            fill="#15803D"
            stroke="#166534"
            strokeWidth="0.8"
          />
          <path
            d="M 0, -3 C -4, -1 -6, 3 0, 4 C 6, 3 4, -1 0, -3 Z"
            fill="#22C55E"
          />
        </g>

        {/* Golden Central Flame / Spire */}
        <g transform="translate(100, 72)">
          <path
            d="M 0, -18 C 1.5, -12 4, -4 4, 3 C 4, 6 2, 8 0, 9 C -2, 8 -4, 6 -4, 3 C -4, -4 -1.5, -12 0, -18 Z"
            fill="url(#vemu-gold)"
            stroke="#A16207"
            strokeWidth="0.8"
          />
          {/* Inner bright flame core */}
          <path
            d="M 0, -14 C 0.8, -9 2, -2 2, 2 C 2, 4 1, 6 0, 7 C -1, 6 -2, 4 -2, 2 C -2, -2 -0.8, -9 0, -14 Z"
            fill="#FEF08A"
          />
          <line x1="0" y1="-18" x2="0" y2="8" stroke="#CA8A04" strokeWidth="0.6" />
        </g>

        {/* 7. Bottom Elegant Ribbon / Banner: ESTD: 2008 */}
        <g transform="translate(0, 15)">
          {/* Left Ribbon Tail with Notch */}
          <path
            d="M 52, 143 L 34, 150 L 46, 160 L 32, 169 L 52, 162 Z"
            fill="#FFFFFF"
            stroke="#0B2F8A"
            strokeWidth="1.4"
          />
          {/* Left Ribbon Shadow Fold */}
          <path
            d="M 52, 143 L 52, 162 L 60, 152 Z"
            fill="#082366"
            stroke="#071E57"
            strokeWidth="0.8"
          />

          {/* Right Ribbon Tail with Notch */}
          <path
            d="M 148, 143 L 166, 150 L 154, 160 L 168, 169 L 148, 162 Z"
            fill="#FFFFFF"
            stroke="#0B2F8A"
            strokeWidth="1.4"
          />
          {/* Right Ribbon Shadow Fold */}
          <path
            d="M 148, 143 L 148, 162 L 140, 152 Z"
            fill="#082366"
            stroke="#071E57"
            strokeWidth="0.8"
          />

          {/* Center Main White Ribbon Body */}
          <path
            d="M 46, 141 C 80, 147 120, 147 154, 141 L 150, 160 C 118, 166 82, 166 50, 160 Z"
            fill="#FFFFFF"
            stroke="#0B2F8A"
            strokeWidth="1.5"
          />

          {/* Ribbon Text: ★ ESTD : 2008 ★ */}
          <g transform="translate(100, 154)">
            {/* Left Star (Green) */}
            <polygon
              points="-32,-3.5 -30.8,-1 -28.2,-1 -30.3,0.6 -29.5,3.1 -32,1.5 -34.5,3.1 -33.7,0.6 -35.8,-1 -33.2,-1"
              fill="#16A34A"
            />

            {/* ESTD : 2008 in Crimson Red */}
            <text
              x="0"
              y="1"
              textAnchor="middle"
              fill="#DC2626"
              fontSize="9"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="0.8px"
            >
              ESTD : 2008
            </text>

            {/* Right Star (Green) */}
            <polygon
              points="32,-3.5 33.2,-1 35.8,-1 33.7,0.6 34.5,3.1 32,1.5 29.5,3.1 30.3,0.6 28.2,-1 30.8,-1"
              fill="#16A34A"
            />
          </g>
        </g>

      </svg>
    </div>
  );
};
