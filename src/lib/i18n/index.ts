import { browser } from '$app/environment';
import { init, register, locale, waitLocale, getLocaleFromNavigator } from 'svelte-i18n';
import { writable, get } from 'svelte/store';

const defaultLocale = 'id';

register('id', () => import('./id.json'));
register('en', () => import('./en.json'));

// Get the initial locale
function getInitialLocale(): string {
    if (!browser) return defaultLocale;
    return window.localStorage.getItem('locale') || getLocaleFromNavigator() || defaultLocale;
}

init({
    fallbackLocale: defaultLocale,
    initialLocale: getInitialLocale(),
});

// Track if locale is loaded - start as true on server to prevent flash
export const isLocaleLoaded = writable(!browser);

// Wait for locale to load on client
if (browser) {
    waitLocale().then(() => {
        isLocaleLoaded.set(true);
    });
    
    // Also listen for locale changes and persist to localStorage
    locale.subscribe((value) => {
        if (value) {
            window.localStorage.setItem('locale', value);
        }
    });
}

export { locale, waitLocale };

