import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md'
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] md:text-[11px]',
    lg: 'text-xs md:text-sm'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG (Gears + Cooling Curve + Electrical Spark) */}
      <div className={`relative shrink-0 ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#0B2545] to-[#004B87] p-1.5 shadow-md shadow-[#004B87]/20 border border-[#00B4D8]/30 flex items-center justify-center`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Gear Outer Teeth */}
          <path d="M24 6V9M24 39V42M6 24H9M39 24H42M11.27 11.27L13.39 13.39M34.61 34.61L36.73 36.73M11.27 36.73L13.39 34.61M34.61 13.39L36.73 11.27" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Outer Gear Circle */}
          <circle cx="24" cy="24" r="12" stroke="#90E0EF" strokeWidth="2.5" strokeDasharray="3 3"/>
          {/* Cooling Airflow Curve */}
          <path d="M17 24C17 20 20 19 24 19C28 19 31 21 31 24C31 27 28 29 24 29" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round"/>
          {/* Electrical Spark Lightning */}
          <path d="M25 12L19 24H26L23 36L31 22H24L28 12H25Z" fill="#00E5FF"/>
          <circle cx="24" cy="24" r="2" fill="#FFFFFF"/>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-[#0B2545]'}`}>
          RJPH
        </span>
        <span className={`font-semibold tracking-wider uppercase ${subtitleSizes[size]} ${isLight ? 'text-[#90E0EF]' : 'text-[#0077B6]'}`}>
          Elétrica e Refrigeração
        </span>
      </div>
    </div>
  );
};
