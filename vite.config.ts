import { AliasOptions, defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr, { ViteSvgrOptions } from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';
import mkcert from 'vite-plugin-mkcert';
import autoprefixer from 'autoprefixer';

import tsconfigJson from './tsconfig.json';
import packageJson from './package.json';
import path from 'path';

const SRC_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = path.resolve(__dirname, 'public');

const RULES_REGEXP = {
  svgComponents: /\.(component|c)\.svg$/,
  fonts: /\.(woff2|woff?)$/,
};

const getTsconfigAliases = (): AliasOptions =>
  Object.keys(tsconfigJson.compilerOptions.paths).reduce((acc, alias) => {
    const directory = alias.replace(/\/\*$/, '');
    acc[directory] = path.resolve(SRC_PATH, directory);
    return acc;
  }, {});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const IS_PROD = process.env.NODE_ENV === 'production';

  return {
    base: '/',
    publicDir: 'static',
    resolve: {
      alias: getTsconfigAliases(),
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[name]__[local]__[hash:base64:5]',
      },
      postcss: {
        plugins: [autoprefixer()],
      },
    },
    server: {
      https: true,
    },
    build: {
      outDir: PUBLIC_PATH,
      assetsDir: 'static',
      sourcemap: 'hidden',
    },
    plugins: [
      react(),
      svgr({
        exportAsDefault: false,
        include: RULES_REGEXP.svgComponents,
        svgrOptions: {
          memo: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      }),
      createHtmlPlugin(),
      mkcert(),
    ],
  };
});
