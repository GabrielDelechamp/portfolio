'use client';
import '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'kr', label: '한국어', flag: '🇰🇷' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  // Synchronise le select si la langue change ailleurs
  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex items-center gap-2">
      <select
        value={selectedLang}
        onChange={handleChange}
        className="bg-white dark:bg-[#011627] text-sm px-7 py-1 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
