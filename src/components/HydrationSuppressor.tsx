'use client';

import { useEffect } from 'react';

export default function HydrationSuppressor() {
  useEffect(() => {
    // Suppress hydration warnings caused by browser extensions
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' && 
        args[0].includes('hydration') && 
        (args[0].includes('wotdisconnected') || args[0].includes('browser extension'))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
} 