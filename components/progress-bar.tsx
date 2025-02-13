// components/ProgressBar.js
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      NProgress.start();
      const timer = setTimeout(() => {
        NProgress.done();
      }, 500); // Ensure smooth loading effect

      return () => {
        clearTimeout(timer);
        NProgress.done();
      };
    }
  }, [pathname, searchParams]);

  return null;
}