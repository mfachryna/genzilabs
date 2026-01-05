import { browser } from '$app/environment';
import { init, register, locale, waitLocale, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Import Indonesian locale synchronously so it's immediately available
import idLocale from './id.json';

const defaultLocale = 'id';

// Add Indonesian messages synchronously (no waiting needed)
addMessages('id', idLocale);

// Register English for lazy loading (only loads when user switches)
register('en', () => import('./en.json'));

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
    // Wait for locale if user switches to English
    waitLocale();
    
    locale.subscribe((value) => {
        if (value) {
            window.localStorage.setItem('locale', value);
        }
    });
}

export { locale, waitLocale };
