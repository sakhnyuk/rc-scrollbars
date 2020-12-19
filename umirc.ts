import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-scrollbars',
  mode: 'site',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
  exportStatic: {},
  dynamicImport: {},
  hash: true,
  menus: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/public/',
});
