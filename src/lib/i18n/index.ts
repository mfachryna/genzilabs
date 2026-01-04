import { browser } from '$app/environment';
import { init, register, locale } from 'svelte-i18n';

const defaultLocale = 'id';

register('id', () => import('./id.json'));
register('en', () => import('./en.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.localStorage.getItem('locale') ?? defaultLocale : defaultLocale,
});

// Persist locale to localStorage
if (browser) {
    locale.subscribe((value) => {
        if (value) {
            window.localStorage.setItem('locale', value);
        }
    });
}

export { locale };
