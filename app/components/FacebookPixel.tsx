'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const FB_PIXEL_ID = '994407946162103';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Inicializa o pixel se ainda não estiver inicializado
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
      };
    }
    
    // Dispara pageview quando a rota muda
    window.fbq('track', 'PageView');
  }, [pathname]);

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}