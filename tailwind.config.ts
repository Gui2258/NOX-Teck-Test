import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                rosf: '#86198F',

                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            backgroundImageFucs: {
                'custom-gradient':
                    'linear-gradient(to right, #4F46E5, #86198F)',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
export default config;
