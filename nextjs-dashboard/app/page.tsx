'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { useEffect, useRef } from 'react';

  
export default function Page() {
  const textRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false); // Drapeau pour suivre l'exécution

  useEffect(() => {
    if (hasRun.current) return; // Si déjà exécuté, on sort
    hasRun.current = true; // Marquer comme exécuté

    const text = "Gabriel Delechamp";
    let index = 0;
    
    const typeEffect = () => {
      if (textRef.current && index < text.length) {
        textRef.current.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    };

    typeEffect();
  }, []);
  return (
    <main className="flex h-[100%] justify-center items-center flex-col p-6">
      <div>
        <p className='text-white'>Hi all. I am</p>
        <h1 className='text-white text-[64px]' ref={textRef}></h1>
        <p className="text-[#4D5BCE] text-[32px] pb-[70px]">&gt; Web-Dev Student</p>
        <p>// i'll add content on this page later</p>
        <p>// you can still check my github</p>
        <p><span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">githubLink</span> <span className="text-white">=</span> <a href="https://github.com/GabrielDelechamp" target="_blank" className="text-[#FEA55F]">"https://github.com/GabrielDelechamp"</a></p>
        <p><span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">getRickRolled</span> <span className="text-white">=</span> <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUIcmlja3JvbGw%3D" target="_blank" className="text-[#FEA55F]">"https://www.youtube.com/watch?v=rickrolled"</a></p>
      </div>
    </main>
  );
}
