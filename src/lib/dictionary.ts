import 'server-only';

const dictionaries = {
    tr: () => import('../dictionaries/tr.json').then((module) => module.default),
    en: () => import('../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    if (locale === 'tr') {
        return dictionaries.tr();
    }
    if (locale === 'en') {
        return dictionaries.en();
    }

    return dictionaries.tr();
}; 