import type { Options } from 'tsup'

export const tsup: Options = {
  entry: ['src/client/**/*.ts', 'src/node/**/*.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  clean: process.env.NODE_ENV !== 'production',
  shims: false,
  external: [/.*\.vue/, /.*\.css/, /.*\.less/],
  ignoreWatch: [
    'src/client/theme/components',
    'src/client/theme/styles',
    'src/client/theme/Layout.vue'
  ]
}
