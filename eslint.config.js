import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tsEslint.config([
  {
    ignores: [
      '**/dist',
      '.changeset/',
      'docs/.vitepress/cache/',
      'packages/vitepress/files',
      'packages/core/src/components/**/__test_/__snapshots__'
    ]
  },
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  vue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        __VERSION__: 'readonly',
        ...globals.es2021,
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: '2021',
        parser: tsEslint.parser,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    }
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'no-constant-binary-expression': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  },
  prettier
])
