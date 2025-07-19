import { getDictionary } from "@/lib/dictionary";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Next.js i18n
          </h1>
          <LanguageSwitcher currentLocale={locale} languages={dict.language} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {dict.home.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {dict.home.subtitle}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
            {dict.home.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {dict.home.getStarted}
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
              {dict.home.learnMore}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          © 2024 Next.js i18n Demo
        </p>
      </footer>
    </div>
  );
}
