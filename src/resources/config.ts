const baseURL = 'https://www.fixingwoo.com';

const style = {
  theme: 'light',
  neutral: 'gray',
  solid: 'contrast',
  border: 'rounded',
  surface: 'translucent',
  transition: 'all', // all | micro | macro
};

const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
};

import { Noto_Sans_KR } from 'next/font/google';

const primaryFont = Noto_Sans_KR({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
};

export { baseURL, style, routes, font };
