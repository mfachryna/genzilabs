export interface Product {
    id: string;
    titleKey: string;
    descKey: string;
    logoPath: string;
    link: string;
    status: 'active' | 'coming-soon';
}

export const products: Product[] = [
    {
        id: 'monger',
        titleKey: 'products.monger.title',
        descKey: 'products.monger.desc',
        logoPath: '/assets/products/monger-logo.svg',
        link: 'https://monger.genzilabs.com',
        status: 'active'
    }
];
