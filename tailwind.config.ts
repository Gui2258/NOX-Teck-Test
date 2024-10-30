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
                grayText: '#475569',
            },
            backgroundImageFucs: {
                'custom-gradient':
                    'linear-gradient(to right, #4F46E5, #86198F)',
            },
            gradientColor: {
                'custom-gradient':
                    'linear-gradient(to right, #86198F, rgb(134 25 143))',
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: '#C026D3',
                            foreground: '#000000',
                        },
                        focus: '#BEF264',
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: '#C026D3',
                            foreground: '#000000',
                        },
                        focus: '#BEF264',
                    },
                },
            },
        }),
    ],
};
export default config;
