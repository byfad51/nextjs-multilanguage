'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

interface LanguageSwitcherProps {
    currentLocale: string;
    languages: {
        tr: string;
        en: string;
    };
}

export default function LanguageSwitcher({ currentLocale, languages }: LanguageSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLanguage = (locale: string) => {
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
        const newPath = `/${locale}${pathWithoutLocale}`;
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentLocale === 'tr' ? '🇹🇷' : 'en'}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[100px]">
                    <button
                        onClick={() => switchLanguage('tr')}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm"
                    >
                        🇹🇷 {languages.tr}
                    </button>
                    <button
                        onClick={() => switchLanguage('en')}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 text-sm"
                    >
                        {languages.en}
                    </button>
                </div>
            )}
        </div>
    );
} 