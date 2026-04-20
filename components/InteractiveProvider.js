'use client';

import dynamic from 'next/dynamic';

const CursorGlow = dynamic(() => import('./CursorGlow'), { ssr: false });

export default function InteractiveProvider() {
  return <CursorGlow />;
}
