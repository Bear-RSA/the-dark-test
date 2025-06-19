// src/components/Layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="
        relative flex items-center justify-center
        min-h-screen w-full
        bg-[url('/images/zombie-bg.png')] bg-cover bg-center
        before:content-[''] before:absolute before:inset-0
        before:bg-black/70 before:backdrop-blur-md
      "
    >
      {/* Card container, absolutely override any inherited color */}
      <div
        className="
          relative z-10
          max-w-xl w-full p-8
          bg-black/60 rounded-2xl shadow-xl
          !text-white            /* ← the “!” makes it important */
        "
      >
        <div className="space-y-6 text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
