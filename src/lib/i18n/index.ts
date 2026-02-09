import { browser } from '$app/environment';
import { init, locale, waitLocale, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Import locales synchronously so they're immediately available
import idLocale from './id.json';
import enLocale from './en.json';

const defaultLocale = 'id';

// Add messages synchronously (no waiting needed)
addMessages('id', idLocale);
addMessages('en', enLocale);

function getInitialLocale(): string {
    if (!browser) return defaultLocale;
    return window.localStorage.getItem('locale') || getLocaleFromNavigator() || defaultLocale;
}

init({
    fallbackLocale: defaultLocale,
    initialLocale: getInitialLocale(),
});

export const isLocaleLoaded = writable(true);

if (browser) {
    locale.subscribe((value) => {
        if (value) {
            window.localStorage.setItem('locale', value);
        }
    });
}

export { locale, waitLocale };
