import { ReactNode } from 'react';

interface IPhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function IPhoneFrame({ children, className = '' }: IPhoneFrameProps) {
  return (
    <div className={`relative w-[280px] mx-auto perspective-1000 ${className}`}>
      <div className="transform-3d">
        {/* Frame do iPhone */}
        <svg 
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
          viewBox="89 54 364 767" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dddd_102_649)">
            {/* Corpo principal do iPhone */}
            <g filter="url(#filter1_i_102_649)">
              <rect x="89.9148" y="54.6746" width="363.783" height="766.05" rx="54.8578" fill="black"/>
            </g>
            
            {/* Dynamic Island */}
            <rect x="226.992" y="80.0825" width="91.9417" height="25.1618" rx="11.9412" fill="#0A0A0A"/>
            <ellipse cx="306.153" cy="92.6634" rx="12.7813" ry="12.5809" fill="#0A0A0A"/>
            
            {/* Botões laterais */}
            <g filter="url(#filter5_iiiiiii_102_649)">
              <rect x="85.8519" y="337.525" width="3.68222" height="60.3487" rx="1.33433" fill="#C8C9C4"/>
            </g>
            <g filter="url(#filter6_iiiiiii_102_649)">
              <rect x="85.8519" y="263.731" width="3.68222" height="60.9741" rx="1.22741" fill="#C8C9C4"/>
            </g>
            <g filter="url(#filter7_iiiiiii_102_649)">
              <rect x="85.5451" y="206.822" width="3.68222" height="32.8322" rx="1.22741" fill="#C8C9C4"/>
            </g>
          </g>
        </svg>

        {/* Conteúdo do WhatsApp */}
        <div className="absolute inset-0 mt-[60px] mx-[12px] mb-[12px] rounded-[38px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}