import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-scrollbar',
  mode: 'docs',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
  exportStatic: {},
  hash: true,
  resolve: {
    includes: ['docs'],
  },
});
