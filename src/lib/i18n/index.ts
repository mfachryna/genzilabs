import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';
import { writable } from 'svelte/store';

const defaultLocale = 'id';

register('id', () => import('./id.json'));
register('en', () => import('./en.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.localStorage.getItem('locale') ?? defaultLocale : defaultLocale,
});

// Track if locale is loaded
export const isLocaleLoaded = writable(false);

// Wait for locale to load
waitLocale().then(() => {
    isLocaleLoaded.set(true);
});

// Persist locale to localStorage
if (browser) {
    locale.subscribe((value) => {
        if (value) {
            window.localStorage.setItem('locale', value);
        }
    });
}

export { locale, waitLocale };
