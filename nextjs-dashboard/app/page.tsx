'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export default function Page() {
  const textRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);
  const { t } = useTranslation();


  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

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
    <main className="flex h-full justify-center items-center flex-col p-6">
      <div>
        <p className="text-gray-900 dark:text-white">{t('welcome')}</p>
        <h1 className="text-gray-900 dark:text-white sm:text-[64px] text-[55px]" ref={textRef}></h1>
        <p className="text-indigo-700 dark:text-[#4D5BCE] text-[32px] pb-[70px]">&gt; {t("Web-Dev Student")}</p>
        <p className="text-gray-600 dark:text-[#607B96]">// {t("i'll add content on this page later")}</p>
        <p className="text-gray-600 dark:text-[#607B96]">// {t("you can still check my github")}</p>
        <p>
          <span className="text-indigo-700 dark:text-[#4D5BCE]">const</span>{' '}
          <span className="text-emerald-600 dark:text-[#43D9AD]">githubLink</span>{' '}
          <span className="text-gray-900 dark:text-white">=</span>{' '}
          <a
            href="https://github.com/GabrielDelechamp"
            target="_blank"
            className="text-orange-500 dark:text-[#FEA55F]"
          >
            "https://github.com/GabrielDelechamp"
          </a>
        </p>
        <p>
          <span className="text-indigo-700 dark:text-[#4D5BCE]">const</span>{' '}
          <span className="text-emerald-600 dark:text-[#43D9AD]">getRickRolled</span>{' '}
          <span className="text-gray-900 dark:text-white">=</span>{' '}
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUIcmlja3JvbGw%3D"
            target="_blank"
            className="text-orange-500 dark:text-[#FEA55F]"
          >
            "https://www.youtube.com/watch?v=rickrolled"
          </a>
        </p>
      </div>
    </main>
  );
}
