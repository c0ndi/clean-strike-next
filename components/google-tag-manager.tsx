// @ts-nocheck
'use client'; // This directive is necessary for client-side components in App Router

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Define your GTM ID
const GTM_ID = 'GTM-N8PNGZNZ';

const GoogleTagManager = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This useEffect hook will run only on the client side
    // It ensures the GTM script is added to the head after the component mounts

    // Check if GTM script is already added to prevent duplicates
    if (document.getElementById('gtm-script')) {
      return;
    }

    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);

    // Add an ID to the script tag for easier checking in subsequent renders
    const gtmScript = document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`);
    if (gtmScript) {
      gtmScript.id = 'gtm-script';
    }

  }, []); // Empty dependency array means this effect runs once after initial render

  // You might want to trigger pageview events on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname + searchParams.toString(),
      });
    }
  }, [pathname, searchParams]); // Re-run when pathname or searchParams change

  return (
    <>
      {/* No-script iframe */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  );
};

export default function Wrapper() {
  return (
    <Suspense>
      <GoogleTagManager />
    </Suspense>
  )
}
