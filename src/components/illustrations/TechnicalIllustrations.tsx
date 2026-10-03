import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AirConditionerIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ac-body" x1="50" y1="60" x2="550" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="ac-vent" x1="100" y1="200" x2="500" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B192C" />
          <stop offset="1" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="air-flow" x1="100" y1="230" x2="500" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B4D8" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#0077B6" stopOpacity="0.15" />
          <stop offset="1" stopColor="#004B87" stopOpacity="0" />
        </linearGradient>
        <filter id="ac-shadow" x="30" y="50" width="540" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background Architectural Wall Grid */}
      <g opacity="0.15">
        <line x1="50" y1="50" x2="550" y2="50" stroke="#004B87" strokeDasharray="4 6" />
        <line x1="50" y1="180" x2="550" y2="180" stroke="#004B87" strokeDasharray="4 6" />
        <line x1="50" y1="310" x2="550" y2="310" stroke="#004B87" strokeDasharray="4 6" />
        <line x1="180" y1="30" x2="180" y2="390" stroke="#004B87" strokeDasharray="4 6" />
        <line x1="420" y1="30" x2="420" y2="390" stroke="#004B87" strokeDasharray="4 6" />
      </g>

      {/* Wall Mounting Plate Hint */}
      <rect x="70" y="70" width="460" height="150" rx="8" fill="#E2E8F0" opacity="0.3" stroke="#94A3B8" strokeDasharray="6 6" />

      {/* AC Indoor Split Unit Body */}
      <g filter="url(#ac-shadow)">
        <rect x="60" y="80" width="480" height="140" rx="16" fill="url(#ac-body)" stroke="#CBD5E1" strokeWidth="2" />
        {/* Modern Front Bevel */}
        <path d="M70 94H530C535 94 538 98 537 103L530 180H70L63 103C62 98 65 94 70 94Z" fill="#FFFFFF" opacity="0.9" />
        {/* Subtle Brand Strip */}
        <line x1="60" y1="185" x2="540" y2="185" stroke="#E2E8F0" strokeWidth="2" />
        
        {/* Digital Temperature Display */}
        <rect x="420" y="112" width="76" height="34" rx="8" fill="#0B192C" />
        <text x="448" y="136" fill="#00B4D8" fontFamily="monospace" fontSize="20" fontWeight="bold">21°C</text>
        <circle cx="484" cy="122" r="3" fill="#00E5FF" />

        {/* Status Indicators */}
        <circle cx="95" cy="128" r="4" fill="#00B4D8" />
        <circle cx="112" cy="128" r="4" fill="#10B981" />

        {/* Lower Air Deflector / Ledge */}
        <rect x="80" y="196" width="440" height="16" rx="6" fill="url(#ac-vent)" />
        <line x1="100" y1="204" x2="500" y2="204" stroke="#00B4D8" strokeWidth="2" opacity="0.7" />
      </g>

      {/* Airflow Flowing Waves */}
      <path d="M120 215C130 280 200 320 260 360C300 380 380 380 480 340C440 310 400 270 380 215H120Z" fill="url(#air-flow)" />
      <g stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <path d="M140 225C170 290 220 330 320 365" strokeDasharray="6 8" />
        <path d="M220 225C250 280 300 320 390 350" strokeDasharray="6 8" />
        <path d="M300 225C330 270 380 305 450 335" strokeDasharray="6 8" />
        <path d="M380 225C410 260 450 285 500 305" strokeDasharray="6 8" />
      </g>

      {/* Copper Refrigerant Piping & Drain Hose Connection on Right */}
      <path d="M536 170H565C573 170 580 177 580 185V280" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
      <path d="M542 185H555C561 185 566 190 566 196V290" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
      <path d="M528 200H546C552 200 556 204 556 210V310" stroke="#64748B" strokeWidth="5" strokeDasharray="4 4" strokeLinecap="round" />

      {/* Technical Level Instrument (Alignment Badge) */}
      <g transform="translate(180, 245)">
        <rect width="180" height="34" rx="8" fill="#0B2545" stroke="#00B4D8" strokeWidth="1.5" />
        <circle cx="20" cy="17" r="6" fill="#00B4D8" />
        <text x="36" y="22" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">INSTALAÇÃO TÉCNICA</text>
        <line x1="140" y1="17" x2="168" y2="17" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <circle cx="154" cy="17" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export const RefrigerationIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gauge-blue" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="gauge-red" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#DC2626" />
          <stop offset="1" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="manifold-metal" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#CBD5E1" />
          <stop offset="0.5" stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>
        <filter id="manifold-shadow" x="80" y="40" width="440" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Background Cooling Spiral Lines */}
      <g opacity="0.15" stroke="#004B87" strokeWidth="2">
        <path d="M40 80C160 80 160 160 280 160C400 160 400 80 520 80" strokeDasharray="4 6" />
        <path d="M40 200C160 200 160 280 280 280C400 280 400 200 520 200" strokeDasharray="4 6" />
        <path d="M40 320C160 320 160 400 280 400C400 400 400 320 520 320" strokeDasharray="4 6" />
      </g>

      <g filter="url(#manifold-shadow)">
        {/* Top Hanging Hook */}
        <path d="M300 40C300 25 285 20 270 30C255 40 275 60 290 65" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* Manifold Metal Block */}
        <rect x="180" y="190" width="240" height="54" rx="10" fill="url(#manifold-metal)" stroke="#64748B" strokeWidth="2" />
        
        {/* Center Sight Glass */}
        <circle cx="300" cy="217" r="14" fill="#0B2545" stroke="#E2E8F0" strokeWidth="3" />
        <circle cx="300" cy="217" r="8" fill="#00B4D8" opacity="0.8" />
        <circle cx="298" cy="215" r="3" fill="#FFFFFF" />

        {/* Low Pressure Gauge (Blue - Left) */}
        <g transform="translate(140, 70)">
          <circle cx="70" cy="70" r="66" fill="#FFFFFF" stroke="#0369A1" strokeWidth="8" />
          <circle cx="70" cy="70" r="54" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          {/* Pressure scale ticks */}
          <circle cx="70" cy="70" r="44" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 6" />
          {/* Needle pointing to ideal psi */}
          <line x1="70" y1="70" x2="88" y2="42" stroke="#004B87" strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="70" r="6" fill="#004B87" />
          <text x="70" y="94" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">LOW PSI</text>
          <text x="70" y="106" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="monospace">R410A / R32</text>
        </g>

        {/* High Pressure Gauge (Red/Navy - Right) */}
        <g transform="translate(320, 70)">
          <circle cx="70" cy="70" r="66" fill="#FFFFFF" stroke="#004B87" strokeWidth="8" />
          <circle cx="70" cy="70" r="54" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          <circle cx="70" cy="70" r="44" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 6" />
          <line x1="70" y1="70" x2="52" y2="40" stroke="#00B4D8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="70" r="6" fill="#0B2545" />
          <text x="70" y="94" textAnchor="middle" fill="#004B87" fontSize="10" fontWeight="bold" fontFamily="sans-serif">HIGH PSI</text>
          <text x="70" y="106" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="monospace">PRESSÃO</text>
        </g>

        {/* Manifold Valves (Knobs) */}
        <rect x="135" y="200" width="36" height="34" rx="6" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
        <line x1="140" y1="217" x2="166" y2="217" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="429" y="200" width="36" height="34" rx="6" fill="#004B87" stroke="#0B2545" strokeWidth="2" />
        <line x1="434" y1="217" x2="460" y2="217" stroke="#FFFFFF" strokeWidth="2" />

        {/* Manifold Service Hoses */}
        {/* Blue Hose (Low Side) */}
        <path d="M220 244V290C220 330 180 350 160 380" stroke="#0284C7" strokeWidth="12" strokeLinecap="round" />
        <path d="M220 244V254" stroke="#D97706" strokeWidth="14" strokeLinecap="square" />

        {/* Yellow Hose (Center Service / Vacuum) */}
        <path d="M300 244V300C300 340 310 360 300 390" stroke="#F59E0B" strokeWidth="12" strokeLinecap="round" />
        <path d="M300 244V254" stroke="#B45309" strokeWidth="14" strokeLinecap="square" />

        {/* Red / Dark Hose (High Side) */}
        <path d="M380 244V290C380 330 420 350 440 380" stroke="#004B87" strokeWidth="12" strokeLinecap="round" />
        <path d="M380 244V254" stroke="#D97706" strokeWidth="14" strokeLinecap="square" />
      </g>

      {/* Cooling / Thermometry Badge */}
      <g transform="translate(200, 320)">
        <rect width="200" height="36" rx="8" fill="#0B2545" stroke="#00B4D8" strokeWidth="1.5" />
        <path d="M24 18L18 24M24 18L30 24M24 18V28" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" />
        <text x="38" y="23" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">ANÁLISE DE PRESSÃO</text>
      </g>
    </svg>
  );
};

export const ElectricalIllustration: React.FC<IllustrationProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="panel-bg" x1="100" y1="40" x2="500" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FAFC" />
          <stop offset="1" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="breaker-main" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1E293B" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
        <filter id="panel-shadow" x="70" y="30" width="460" height="360" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0F172A" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Background Circuit Grid */}
      <g opacity="0.15" stroke="#004B87" strokeWidth="1.5">
        <path d="M40 60H160V120H300V60H560" />
        <path d="M40 360H220V280H420V360H560" />
        <circle cx="160" cy="120" r="4" fill="#004B87" />
        <circle cx="300" cy="60" r="4" fill="#004B87" />
        <circle cx="420" cy="280" r="4" fill="#004B87" />
      </g>

      {/* Main Electrical Distribution Enclosure */}
      <g filter="url(#panel-shadow)">
        <rect x="90" y="45" width="420" height="330" rx="16" fill="url(#panel-bg)" stroke="#94A3B8" strokeWidth="3" />
        {/* Inner DIN Rail */}
        <rect x="120" y="100" width="360" height="16" rx="3" fill="#CBD5E1" stroke="#94A3B8" />
        <rect x="120" y="220" width="360" height="16" rx="3" fill="#CBD5E1" stroke="#94A3B8" />

        {/* Neutral Busbar Top */}
        <rect x="130" y="65" width="160" height="12" rx="2" fill="#0284C7" />
        <text x="210" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">BARRAMENTO NEUTRO</text>
        
        {/* Grounding Busbar Top Right */}
        <rect x="310" y="65" width="160" height="12" rx="2" fill="#16A34A" />
        <text x="390" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">BARRAMENTO TERRA</text>

        {/* Row 1: Main Double Breaker (Bipolar Disjuntor Geral) */}
        <rect x="140" y="90" width="60" height="85" rx="6" fill="url(#breaker-main)" stroke="#334155" strokeWidth="1.5" />
        <rect x="155" y="115" width="30" height="35" rx="3" fill="#DC2626" />
        <line x1="170" y1="120" x2="170" y2="135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <text x="170" y="165" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold">GERAL</text>

        {/* Branch Breakers (Circuitos) */}
        {/* Breaker 1: Ar-Condicionado 1 */}
        <rect x="220" y="92" width="36" height="80" rx="4" fill="#1E293B" stroke="#475569" />
        <rect x="230" y="118" width="16" height="28" rx="2" fill="#00B4D8" />
        <text x="238" y="162" textAnchor="middle" fill="#CBD5E1" fontSize="7">AR 01</text>

        {/* Breaker 2: Ar-Condicionado 2 */}
        <rect x="265" y="92" width="36" height="80" rx="4" fill="#1E293B" stroke="#475569" />
        <rect x="275" y="118" width="16" height="28" rx="2" fill="#00B4D8" />
        <text x="283" y="162" textAnchor="middle" fill="#CBD5E1" fontSize="7">AR 02</text>

        {/* Breaker 3: Tomadas / Refrigeração */}
        <rect x="310" y="92" width="36" height="80" rx="4" fill="#1E293B" stroke="#475569" />
        <rect x="320" y="118" width="16" height="28" rx="2" fill="#0284C7" />
        <text x="328" y="162" textAnchor="middle" fill="#CBD5E1" fontSize="7">TUG</text>

        {/* Breaker 4: Iluminação */}
        <rect x="355" y="92" width="36" height="80" rx="4" fill="#1E293B" stroke="#475569" />
        <rect x="365" y="118" width="16" height="28" rx="2" fill="#0284C7" />
        <text x="373" y="162" textAnchor="middle" fill="#CBD5E1" fontSize="7">ILUM</text>

        {/* Breaker 5: Força Reserva */}
        <rect x="400" y="92" width="36" height="80" rx="4" fill="#1E293B" stroke="#475569" />
        <rect x="410" y="125" width="16" height="20" rx="2" fill="#64748B" />
        <text x="418" y="162" textAnchor="middle" fill="#94A3B8" fontSize="7">RES</text>

        {/* Row 2: Digital Multimeter Testing Cable */}
        <g transform="translate(140, 240)">
          {/* Multimeter Body */}
          <rect x="180" y="10" width="120" height="70" rx="10" fill="#0B2545" stroke="#00B4D8" strokeWidth="2" />
          <rect x="195" y="22" width="90" height="26" rx="4" fill="#0F172A" />
          <text x="240" y="41" textAnchor="middle" fill="#00E5FF" fontSize="16" fontWeight="bold" fontFamily="monospace">220.4 V</text>
          <text x="240" y="70" textAnchor="middle" fill="#94A3B8" fontSize="9" fontWeight="600">TESTE DE TENSÃO</text>
          {/* Test Probes (Black and Red Wires) */}
          <path d="M210 80C210 110 110 120 70 80" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M270 80C270 110 320 120 340 70" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Probe tips */}
          <rect x="65" y="60" width="10" height="25" rx="2" fill="#DC2626" />
          <line x1="70" y1="60" x2="70" y2="45" stroke="#CBD5E1" strokeWidth="3" />
        </g>
      </g>

      {/* Safety Electric Symbol */}
      <g transform="translate(110, 315)">
        <rect width="170" height="34" rx="8" fill="#0B192C" stroke="#00B4D8" strokeWidth="1.5" />
        <path d="M20 9L13 19H19L16 28L25 17H19L22 9H20Z" fill="#00E5FF" />
        <text x="34" y="22" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="sans-serif">CIRCUITO SEGURO</text>
      </g>
    </svg>
  );
};
