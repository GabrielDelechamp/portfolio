'use client';

import Link from 'next/link';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[6vh] border-b-2 border-[#1E2D3D] relative z-50">
      {/* --- Desktop Navbar --- */}
      <div className="hidden sm:flex justify-between h-full items-center">
        <div className="flex h-full items-center">
          <span className="h-full border-r-2 border-[#1E2D3D] py-[15px] pl-[40px] pr-[80px]">
            delechamp-gabriel
          </span>
          <Link
            href="/"
            className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom"
          >
            _{t("hello")}
          </Link>
          <Link
            href="/about-me"
            className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom"
          >
            _{t("about-me")}
          </Link>
          <Link
            href="/projects"
            className="h-full border-r-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom"
          >
            _{t("projects")}
          </Link>
        </div>
        <LanguageSwitcher />
        <Link
          href="/contact"
          className="h-full border-l-2 border-[#1E2D3D] py-[15px] px-[40px] hover:shadow-orange-bottom"
        >
          _{t("contact-me")}
        </Link>
      </div>

      {/* --- Mobile Navbar --- */}
      <div className="flex sm:hidden justify-between items-center px-4 h-full dark:bg-[#011627]">
        <span className="font-bold">delechamp-gabriel</span>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Overlay Menu --- */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-white dark:bg-[#011627] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-[#1E2D3D]">
            <span className="font-bold">delechamp-gabriel</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col flex-1">
            <Link
              href="/"
              className="py-4 px-6 border-b border-[#1E2D3D] hover:bg-gray-100 dark:hover:bg-[#02223b]"
              onClick={() => setIsOpen(false)}
            >
              _{t("hello")}
            </Link>
            <Link
              href="/about-me"
              className="py-4 px-6 border-b border-[#1E2D3D] hover:bg-gray-100 dark:hover:bg-[#02223b]"
              onClick={() => setIsOpen(false)}
            >
              _{t("about-me")}
            </Link>
            <Link
              href="/projects"
              className="py-4 px-6 border-b border-[#1E2D3D] hover:bg-gray-100 dark:hover:bg-[#02223b]"
              onClick={() => setIsOpen(false)}
            >
              _{t("projects")}
            </Link>
            <Link
              href="/contact"
              className="py-4 px-6 border-b border-[#1E2D3D] hover:bg-gray-100 dark:hover:bg-[#02223b]"
              onClick={() => setIsOpen(false)}
            >
              _{t("contact-me")}
            </Link>
            <div className="py-4 px-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
