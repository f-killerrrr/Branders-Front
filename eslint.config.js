import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    plugins: { 'import-x': importX },
    extends: ['import-x/flat/typescript'],
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'import-x/internal-regex': '^@/',
    },
    rules: {
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      // 패키지에서의 상대경로 import 금지
      'import-x/no-relative-packages': 'error',
    },
  },
]);
